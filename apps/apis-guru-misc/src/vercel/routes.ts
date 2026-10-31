import { createRoute, z } from '@hono/zod-openapi'

type EdgeConfigItemValueType =
  | (string | number | boolean | { [key: string]: unknown } | EdgeConfigItemValueType[])
  | null

type FileTreeType = {
  children?: FileTreeType[]
  contentType?: string
  mode: number
  name: string
  symlink?: string
  type: 'directory' | 'file' | 'symlink' | 'lambda' | 'middleware' | 'invalid'
  uid?: string
}

const ACLActionSchema = z
  .enum(['create', 'delete', 'read', 'update', 'list', 'count'])
  .openapi({
    description:
      'Enum containing the actions that can be performed against a resource. Group operations are included.',
  })
  .openapi('ACLAction')

const AuthTokenSchema = z
  .object({
    activeAt: z
      .number()
      .openapi({
        description: 'Timestamp (in milliseconds) of when the token was most recently used.',
        examples: [1632816536002],
      }),
    createdAt: z
      .number()
      .openapi({
        description: 'Timestamp (in milliseconds) of when the token was created.',
        examples: [1632816536002],
      }),
    expiresAt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Timestamp (in milliseconds) of when the token expires.',
        examples: [1632816536002],
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the token.',
        examples: ['5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391'],
      }),
    name: z.string().openapi({ description: 'The human-readable name of the token.' }),
    origin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The origin of how the token was created.', examples: ['github'] }),
    scopes: z
      .array(
        z.xor([
          z
            .object({
              createdAt: z.number(),
              expiresAt: z.number().exactOptional(),
              origin: z.enum(['saml', 'github', 'gitlab', 'bitbucket', 'email', 'manual']),
              type: z.literal('user'),
            })
            .openapi({
              description: 'The access scopes granted to the token.',
              required: ['type', 'origin', 'createdAt'],
            }),
          z
            .object({
              createdAt: z.number(),
              expiresAt: z.number().exactOptional(),
              origin: z.enum(['saml', 'github', 'gitlab', 'bitbucket', 'email', 'manual']),
              teamId: z.string(),
              type: z.literal('team'),
            })
            .openapi({
              description: 'The access scopes granted to the token.',
              required: ['type', 'teamId', 'origin', 'createdAt'],
            }),
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The access scopes granted to the token.' }),
    type: z.string().openapi({ description: 'The type of the token.', examples: ['oauth2-token'] }),
  })
  .openapi({
    description: 'Authentication token metadata.',
    required: ['id', 'name', 'type', 'activeAt', 'createdAt'],
  })
  .openapi('AuthToken')

const AuthUserSchema = z
  .object({
    activeDashboardViews: z
      .array(
        z
          .object({ scopeId: z.string(), viewPreference: z.enum(['cards', 'list']) })
          .openapi({
            description: 'set of dashboard view preferences (cards or list) per scopeId',
            required: ['scopeId', 'viewPreference'],
          }),
      )
      .exactOptional()
      .openapi({ description: 'set of dashboard view preferences (cards or list) per scopeId' }),
    avatar: z
      .string()
      .nullable()
      .openapi({
        description:
          'SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.',
        examples: ['22cb30c85ff45ac4c72de8981500006b28114aa1'],
      }),
    billing: z
      .object({
        addons: z
          .array(z.enum(['custom-deployment-suffix', 'live-support']))
          .nullable()
          .exactOptional(),
        address: z
          .object({
            city: z.string().exactOptional(),
            country: z.string().exactOptional(),
            line1: z.string(),
            line2: z.string().exactOptional(),
            postalCode: z.string().exactOptional(),
            state: z.string().exactOptional(),
          })
          .nullable()
          .exactOptional()
          .openapi({ required: ['line1'] }),
        cancelation: z.number().nullable().exactOptional(),
        contract: z
          .object({ end: z.number(), start: z.number() })
          .nullable()
          .exactOptional()
          .openapi({ required: ['start', 'end'] }),
        controls: z
          .object({
            analyticsSampleRateInPercent: z.number().nullable().exactOptional(),
            analyticsSpendLimitInDollars: z.number().nullable().exactOptional(),
          })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
        currency: z.enum(['usd', 'eur']).exactOptional(),
        email: z.string().nullable().exactOptional(),
        invoiceItems: z
          .object({
            analytics: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            analyticsUsage: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            artifacts: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            bandwidth: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            builds: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            concurrentBuilds: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            customCerts: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            edgeFunctionExecutionUnits: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            edgeMiddlewareInvocations: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            enterprise: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            monitoring: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            monitoringMetric: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            passwordProtection: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            previewDeploymentSuffix: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            pro: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            saml: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            serverlessFunctionExecution: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            sourceImages: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
            ssoProtection: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            teamSeats: z
              .object({
                createdAt: z.number().exactOptional(),
                disabledAt: z.number().nullable().exactOptional(),
                frequency: z
                  .object({
                    interval: z.literal('month'),
                    intervalCount: z.union([
                      z.literal(1),
                      z.literal(3),
                      z.literal(2),
                      z.literal(6),
                      z.literal(12),
                    ]),
                  })
                  .exactOptional()
                  .openapi({ required: ['interval', 'intervalCount'] }),
                hidden: z.boolean(),
                maxQuantity: z.number().exactOptional(),
                name: z.string().exactOptional(),
                price: z.number(),
                quantity: z.number(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Will be used to create an invoice item. The price must be in cents: 2000 for $20.',
                required: ['price', 'quantity', 'hidden'],
              }),
            webAnalyticsDataPoint: z
              .object({
                batch: z.number(),
                disabledAt: z.number().nullable().exactOptional(),
                hidden: z.boolean(),
                name: z.string().exactOptional(),
                price: z.number(),
                threshold: z.number(),
              })
              .exactOptional()
              .openapi({ required: ['price', 'batch', 'threshold', 'hidden'] }),
          })
          .nullable()
          .exactOptional()
          .openapi({ required: [] }),
        invoiceSettings: z
          .object({ footer: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        language: z.string().nullable().exactOptional(),
        name: z.string().nullable().exactOptional(),
        overdue: z.boolean().nullable().exactOptional(),
        period: z
          .object({ end: z.number(), start: z.number() })
          .nullable()
          .openapi({ required: ['start', 'end'] }),
        plan: z.enum(['hobby', 'enterprise', 'pro']),
        platform: z.enum(['stripe', 'stripeTestMode']).exactOptional(),
        pricingExperiment: z.literal('august-2022').exactOptional(),
        programType: z.enum(['startup', 'agency']).exactOptional(),
        purchaseOrder: z.string().nullable().exactOptional(),
        status: z.enum(['active', 'canceled', 'trialing', 'overdue', 'expired']).exactOptional(),
        subscriptions: z
          .array(
            z
              .object({
                discount: z
                  .object({
                    coupon: z
                      .object({
                        amountOff: z.number().nullable(),
                        duration: z.enum(['forever', 'repeating', 'once']),
                        durationInMonths: z.number().nullable(),
                        id: z.string(),
                        name: z.string().nullable(),
                        percentageOff: z.number().nullable(),
                      })
                      .openapi({
                        required: [
                          'id',
                          'name',
                          'amountOff',
                          'percentageOff',
                          'durationInMonths',
                          'duration',
                        ],
                      }),
                    id: z.string(),
                  })
                  .nullable()
                  .openapi({ required: ['id', 'coupon'] }),
                frequency: z
                  .object({
                    interval: z.enum(['month', 'day', 'week', 'year']),
                    intervalCount: z.number(),
                  })
                  .openapi({ required: ['interval', 'intervalCount'] }),
                id: z.string(),
                items: z.array(
                  z
                    .object({
                      amount: z.number(),
                      id: z.string(),
                      priceId: z.string(),
                      productId: z.string(),
                      quantity: z.number(),
                    })
                    .openapi({ required: ['id', 'priceId', 'productId', 'amount', 'quantity'] }),
                ),
                period: z
                  .object({ end: z.number(), start: z.number() })
                  .openapi({ required: ['start', 'end'] }),
                trial: z
                  .object({ end: z.number(), start: z.number() })
                  .nullable()
                  .openapi({ required: ['start', 'end'] }),
              })
              .openapi({ required: ['id', 'trial', 'period', 'frequency', 'discount', 'items'] }),
          )
          .nullable()
          .exactOptional(),
        tax: z
          .object({ id: z.string(), type: z.string() })
          .nullable()
          .exactOptional()
          .openapi({ required: ['type', 'id'] }),
        trial: z
          .object({ end: z.number(), start: z.number() })
          .nullable()
          .exactOptional()
          .openapi({ required: ['start', 'end'] }),
      })
      .nullable()
      .openapi({
        description: 'An object containing billing infomation associated with the User account.',
        required: ['period', 'plan'],
      }),
    createdAt: z
      .number()
      .openapi({
        description: 'UNIX timestamp (in milliseconds) when the User account was created.',
        examples: [1630748523395],
      }),
    dismissedToasts: z
      .array(
        z
          .object({
            dismissals: z.array(
              z
                .object({ createdAt: z.number(), scopeId: z.string() })
                .openapi({ required: ['scopeId', 'createdAt'] }),
            ),
            name: z.string(),
          })
          .openapi({
            description: 'A record of when, under a certain scopeId, a toast was dismissed',
            required: ['name', 'dismissals'],
          }),
      )
      .exactOptional()
      .openapi({ description: 'A record of when, under a certain scopeId, a toast was dismissed' }),
    email: z
      .string()
      .openapi({
        description: 'Email address associated with the User account.',
        examples: ['me@example.com'],
      }),
    hasTrialAvailable: z
      .boolean()
      .openapi({
        description: 'Whether the user has a trial available for a paid plan subscription.',
      }),
    id: z
      .string()
      .openapi({
        description: "The User's unique identifier.",
        examples: ['AEIIDYVk59zbFF2Sxfyxxmua'],
      }),
    importFlowGitNamespace: z.xor([z.string(), z.number()]).nullable().exactOptional(),
    importFlowGitNamespaceId: z.xor([z.string(), z.number()]).nullable().exactOptional(),
    importFlowGitProvider: z.enum(['github', 'gitlab', 'bitbucket']).exactOptional(),
    name: z
      .string()
      .nullable()
      .openapi({
        description: 'Name associated with the User account, or `null` if none has been provided.',
        examples: ['John Doe'],
      }),
    preferredScopesAndGitNamespaces: z
      .array(
        z
          .object({
            gitNamespaceId: z.xor([z.string(), z.number()]).nullable(),
            scopeId: z.string(),
          })
          .openapi({ required: ['scopeId', 'gitNamespaceId'] }),
      )
      .exactOptional(),
    remoteCaching: z
      .object({ enabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ description: 'remote caching settings', required: [] }),
    resourceConfig: z
      .object({
        awsAccountIds: z.array(z.string()).exactOptional(),
        awsAccountType: z.string().exactOptional(),
        cfZoneName: z.string().exactOptional(),
        concurrentBuilds: z.number().exactOptional(),
        edgeConfigSize: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'To overwrite the maximum size of an Edge Config per account. Size is in kilobytes, eg 64 leads to 64kB or 64_000 bytes worth of storage',
          }),
        edgeConfigs: z
          .number()
          .exactOptional()
          .openapi({
            description: 'To overwrite the number of Edge Configs an account can create.',
          }),
        nodeType: z.string().exactOptional(),
      })
      .openapi({
        description:
          'An object containing infomation related to the amount of platform resources may be allocated to the User account.',
        required: [],
      }),
    softBlock: z
      .object({
        blockedAt: z.number(),
        reason: z.enum([
          'FAIR_USE_LIMITS_EXCEEDED',
          'ENTERPRISE_TRIAL_ENDED',
          'BLOCKED_FOR_PLATFORM_ABUSE',
          'UNPAID_INVOICE',
          'SUBSCRIPTION_EXPIRED',
          'SUBSCRIPTION_CANCELED',
        ]),
      })
      .nullable()
      .openapi({
        description:
          'When the User account has been "soft blocked", this property will contain the date when the restriction was enacted, and the identifier for why.',
        required: ['blockedAt', 'reason'],
      }),
    stagingPrefix: z
      .string()
      .openapi({
        description:
          'Prefix that will be used in the URL of "Preview" deployments created by the User account.',
      }),
    username: z
      .string()
      .openapi({
        description: 'Unique username associated with the User account.',
        examples: ['jdoe'],
      }),
  })
  .openapi({
    description: 'Data for the currently authenticated User.',
    required: [
      'createdAt',
      'softBlock',
      'billing',
      'resourceConfig',
      'stagingPrefix',
      'hasTrialAvailable',
      'id',
      'email',
      'name',
      'username',
      'avatar',
    ],
  })
  .openapi('AuthUser')

const AuthUserLimitedSchema = z
  .object({
    avatar: z
      .string()
      .nullable()
      .openapi({
        description:
          'SHA1 hash of the avatar for the User account. Can be used in conjuction with the ... endpoint to retrieve the avatar image.',
        examples: ['22cb30c85ff45ac4c72de8981500006b28114aa1'],
      }),
    email: z
      .string()
      .openapi({
        description: 'Email address associated with the User account.',
        examples: ['me@example.com'],
      }),
    id: z
      .string()
      .openapi({
        description: "The User's unique identifier.",
        examples: ['AEIIDYVk59zbFF2Sxfyxxmua'],
      }),
    limited: z
      .boolean()
      .openapi({
        description:
          'Property indicating that this User data contains only limited information, due to the authentication token missing privileges to read the full User data. Re-login with email, GitHub, GitLab or Bitbucket in order to upgrade the authentication token with the necessary privileges.',
      }),
    name: z
      .string()
      .nullable()
      .openapi({
        description: 'Name associated with the User account, or `null` if none has been provided.',
        examples: ['John Doe'],
      }),
    username: z
      .string()
      .openapi({
        description: 'Unique username associated with the User account.',
        examples: ['jdoe'],
      }),
  })
  .openapi({
    description:
      'A limited form of data for the currently authenticated User, due to the authentication token missing privileges to read the full User data.',
    required: ['limited', 'id', 'email', 'name', 'username', 'avatar'],
  })
  .openapi('AuthUserLimited')

const EdgeConfigItemValueSchema: z.ZodType<EdgeConfigItemValueType> = z
  .lazy(() =>
    z
      .xor([z.string(), z.number(), z.boolean(), z.object({}), z.array(EdgeConfigItemValueSchema)])
      .nullable(),
  )
  .openapi('EdgeConfigItemValue')

const EdgeConfigItemSchema = z
  .object({
    createdAt: z.number(),
    edgeConfigId: z.string(),
    key: z.string(),
    updatedAt: z.number(),
    value: EdgeConfigItemValueSchema,
  })
  .openapi({
    description: 'The EdgeConfig.',
    required: ['key', 'value', 'edgeConfigId', 'createdAt', 'updatedAt'],
  })
  .openapi('EdgeConfigItem')

const EdgeConfigTokenSchema = z
  .object({
    createdAt: z.number(),
    edgeConfigId: z.string(),
    id: z
      .string()
      .openapi({
        description: 'This is not the token itself, but rather an id to identify the token by',
      }),
    label: z.string(),
    token: z.string(),
  })
  .openapi({
    description: 'The EdgeConfig.',
    required: ['token', 'label', 'id', 'edgeConfigId', 'createdAt'],
  })
  .openapi('EdgeConfigToken')

const FileTreeSchema: z.ZodType<FileTreeType> = z
  .lazy(() =>
    z
      .object({
        children: z
          .array(FileTreeSchema)
          .exactOptional()
          .openapi({
            description:
              'The list of children files of the directory (only valid for the `directory` type)',
          }),
        contentType: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The content-type of the file (only valid for the `file` type)',
            examples: ['application/json'],
          }),
        mode: z
          .number()
          .openapi({ description: 'The file "mode" indicating file type and permissions.' }),
        name: z
          .string()
          .openapi({ description: 'The name of the file tree entry', examples: ['my-file.json'] }),
        symlink: z
          .string()
          .exactOptional()
          .openapi({ description: 'Not currently used. See `file-list-to-tree.ts`.' }),
        type: z
          .enum(['directory', 'file', 'symlink', 'lambda', 'middleware', 'invalid'])
          .openapi({
            description: 'String indicating the type of file tree entry.',
            examples: ['file'],
          }),
        uid: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The unique identifier of the file (only valid for the `file` type)',
            examples: ['2d4aad419917f15b1146e9e03ddc9bb31747e4d0'],
          }),
      })
      .openapi({ description: 'A deployment file tree entry', required: ['name', 'type', 'mode'] }),
  )
  .openapi('FileTree')

const PaginationSchema = z
  .object({
    count: z
      .number()
      .openapi({ description: 'Amount of items in the current page.', examples: [20] }),
    next: z
      .number()
      .nullable()
      .openapi({
        description: 'Timestamp that must be used to request the next page.',
        examples: [1540095775951],
      }),
    prev: z
      .number()
      .nullable()
      .openapi({
        description: 'Timestamp that must be used to request the previous page.',
        examples: [1540095775951],
      }),
  })
  .openapi({
    description:
      'This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.',
    required: ['count', 'next', 'prev'],
  })
  .openapi('Pagination')

const TeamSchema = z
  .object({})
  .openapi({ description: 'Data representing a Team.' })
  .openapi('Team')

const TeamLimitedSchema = z
  .object({
    avatar: z
      .string()
      .nullable()
      .openapi({
        description: 'The ID of the file used as avatar for this Team.',
        examples: ['6eb07268bcfadd309905ffb1579354084c24655c'],
      }),
    created: z.string().openapi({ description: 'Will remain undocumented. Remove in v3 API.' }),
    createdAt: z
      .number()
      .openapi({
        description: 'UNIX timestamp (in milliseconds) when the Team was created.',
        examples: [1630748523395],
      }),
    id: z
      .string()
      .openapi({
        description: "The Team's unique identifier.",
        examples: ['team_nllPyCtREAqxxdyFKbbMDlxd'],
      }),
    limited: z
      .boolean()
      .openapi({
        description:
          "Property indicating that this Team data contains only limited information, due to the authentication token missing privileges to read the full Team data. Re-login with the Team's configured SAML Single Sign-On provider in order to upgrade the authentication token with the necessary privileges.",
      }),
    membership: z.xor([
      z
        .object({
          accessRequestedAt: z.number().exactOptional(),
          confirmed: z.boolean(),
          confirmedAt: z.number(),
          created: z.number(),
          createdAt: z.number(),
          joinedFrom: z
            .object({
              commitId: z.string().exactOptional(),
              dsyncConnectedAt: z.number().exactOptional(),
              dsyncUserId: z.string().exactOptional(),
              gitUserId: z.xor([z.string(), z.number()]).exactOptional(),
              gitUserLogin: z.string().exactOptional(),
              idpUserId: z.string().exactOptional(),
              origin: z.enum([
                'import',
                'saml',
                'mail',
                'link',
                'teams',
                'github',
                'gitlab',
                'bitbucket',
                'dsync',
                'feedback',
              ]),
              repoId: z.string().exactOptional(),
              repoPath: z.string().exactOptional(),
              ssoConnectedAt: z.number().exactOptional(),
              ssoUserId: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: ['origin'] }),
          role: z.enum(['MEMBER', 'OWNER', 'VIEWER', 'DEVELOPER', 'BILLING']),
          teamId: z.string().exactOptional(),
          uid: z.string(),
        })
        .openapi({
          description: 'The membership of the authenticated User in relation to the Team.',
          required: ['confirmed', 'confirmedAt', 'role', 'uid', 'createdAt', 'created'],
        }),
      z
        .object({
          accessRequestedAt: z.number(),
          confirmed: z.boolean(),
          confirmedAt: z.number().exactOptional(),
          created: z.number(),
          createdAt: z.number(),
          joinedFrom: z
            .object({
              commitId: z.string().exactOptional(),
              dsyncConnectedAt: z.number().exactOptional(),
              dsyncUserId: z.string().exactOptional(),
              gitUserId: z.xor([z.string(), z.number()]).exactOptional(),
              gitUserLogin: z.string().exactOptional(),
              idpUserId: z.string().exactOptional(),
              origin: z.enum([
                'import',
                'saml',
                'mail',
                'link',
                'teams',
                'github',
                'gitlab',
                'bitbucket',
                'dsync',
                'feedback',
              ]),
              repoId: z.string().exactOptional(),
              repoPath: z.string().exactOptional(),
              ssoConnectedAt: z.number().exactOptional(),
              ssoUserId: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: ['origin'] }),
          role: z.enum(['MEMBER', 'OWNER', 'VIEWER', 'DEVELOPER', 'BILLING']),
          teamId: z.string().exactOptional(),
          uid: z.string(),
        })
        .openapi({
          description: 'The membership of the authenticated User in relation to the Team.',
          required: ['confirmed', 'accessRequestedAt', 'role', 'uid', 'createdAt', 'created'],
        }),
    ]),
    name: z
      .string()
      .nullable()
      .openapi({
        description: 'Name associated with the Team account, or `null` if none has been provided.',
        examples: ['My Team'],
      }),
    saml: z
      .object({
        connection: z
          .object({
            createdAt: z.number().nullable().exactOptional(),
            creator: z.string(),
            domain: z.string(),
            id: z.string(),
            name: z.string(),
            recordType: z.enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS']),
            ttl: z.number().exactOptional(),
            type: z.enum(['record', 'record-sys']),
            value: z.string(),
          })
          .exactOptional()
          .openapi({
            description: 'From T, pick a set of properties whose keys are in the union K',
            required: ['creator', 'domain', 'id', 'name', 'recordType', 'type', 'value'],
          }),
        directory: z
          .object({
            createdAt: z.number().nullable().exactOptional(),
            creator: z.string(),
            domain: z.string(),
            id: z.string(),
            name: z.string(),
            recordType: z.enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS']),
            ttl: z.number().exactOptional(),
            type: z.enum(['record', 'record-sys']),
            value: z.string(),
          })
          .exactOptional()
          .openapi({
            description: 'From T, pick a set of properties whose keys are in the union K',
            required: ['creator', 'domain', 'id', 'name', 'recordType', 'type', 'value'],
          }),
        enforced: z
          .boolean()
          .openapi({
            description:
              "When `true`, interactions with the Team **must** be done with an authentication token that has been authenticated with the Team's SAML Single Sign-On provider.",
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'When "Single Sign-On (SAML)" is configured, this object contains information that allows the client-side to identify whether or not this Team has SAML enforced.',
        required: ['enforced'],
      }),
    slug: z
      .string()
      .openapi({
        description: "The Team's slug, which is unique across the Vercel platform.",
        examples: ['my-team'],
      }),
  })
  .openapi({
    description:
      'A limited form of data representing a Team, due to the authentication token missing privileges to read the full Team data.',
    required: ['limited', 'id', 'slug', 'name', 'avatar', 'membership', 'created', 'createdAt'],
  })
  .openapi('TeamLimited')

const UserEventSchema = z
  .object({
    createdAt: z
      .number()
      .openapi({
        description: 'Timestamp (in milliseconds) of when the event was generated.',
        examples: [1632859321020],
      }),
    entities: z
      .array(
        z
          .object({
            end: z
              .number()
              .openapi({
                description:
                  'The index of where the entity ends within the `text` (non-inclusive).',
                examples: [3],
              }),
            start: z
              .number()
              .openapi({
                description: 'The index of where the entity begins within the `text` (inclusive).',
                examples: [0],
              }),
            type: z
              .enum([
                'target',
                'author',
                'bitbucket_login',
                'bold',
                'deployment_host',
                'dns_record',
                'git_link',
                'github_login',
                'gitlab_login',
                'hook_name',
                'integration',
                'edge-config',
                'link',
                'project_name',
                'scaling_rules',
                'env_var_name',
                'system',
              ])
              .openapi({ description: 'The type of entity.', examples: ['author'] }),
          })
          .openapi({
            description:
              'A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.',
            required: ['type', 'start', 'end'],
          }),
      )
      .openapi({
        description:
          'A list of "entities" within the event `text`. Useful for enhancing the displayed text with additional styling and links.',
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the Event.',
        examples: ['uev_bfmMjiMnXfnPbT97dGdpJbCN'],
      }),
    text: z
      .string()
      .openapi({
        description: 'The human-readable text of the Event.',
        examples: ['You logged in via GitHub'],
      }),
    user: z
      .object({
        avatar: z.string(),
        email: z.string(),
        slug: z.string().exactOptional(),
        uid: z.string(),
        username: z.string(),
      })
      .exactOptional()
      .openapi({
        description: 'Metadata for the User who generated the event.',
        required: ['avatar', 'email', 'uid', 'username'],
      }),
    userId: z
      .string()
      .openapi({
        description: 'The unique identifier of the User who generated the event.',
        examples: ['zTuNVUXEAvvnNN3IaqinkyMw'],
      }),
  })
  .openapi({
    description: 'Array of events generated by the User.',
    required: ['id', 'text', 'entities', 'createdAt', 'userId'],
  })
  .openapi('UserEvent')

const BearerTokenSecurityScheme = {
  description: 'Default authentication mechanism',
  scheme: 'bearer',
  type: 'http',
}

const Oauth2SecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://api.vercel.com/oauth/authorize',
      scopes: {},
      tokenUrl: 'https://api.vercel.com/oauth/access_token',
    },
  },
  type: 'oauth2',
}

export const getEdgeConfigRoute = createRoute({
  method: 'get',
  path: '/edge-config',
  tags: ['edge-config'],
  summary: 'Get Edge Configs',
  description: 'Returns all Edge Configs.',
  operationId: 'getEdgeConfigs',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all edge configs.',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z.number().nullable().exactOptional(),
              creator: z.string().exactOptional(),
              domain: z.string().exactOptional(),
              id: z.string().exactOptional(),
              itemCount: z.number(),
              name: z.string().exactOptional(),
              recordType: z
                .enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS'])
                .exactOptional(),
              sizeInBytes: z.number(),
              ttl: z.number().exactOptional(),
              type: z.enum(['record', 'record-sys']).exactOptional(),
              value: z.string().exactOptional(),
            })
            .openapi({
              description: 'List of all edge configs.',
              required: ['sizeInBytes', 'itemCount'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postEdgeConfigRoute = createRoute({
  method: 'post',
  path: '/edge-config',
  tags: ['edge-config'],
  summary: 'Create an Edge Config',
  description: 'Creates an Edge Config.',
  operationId: 'createEdgeConfig',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .record(
                  z.string(),
                  z.xor([
                    z.xor([z.string(), z.number(), z.boolean(), z.null().nullable(), z.object({})]),
                    z.array(
                      z.xor([
                        z.string(),
                        z.number(),
                        z.boolean(),
                        z.null().nullable(),
                        z.object({}),
                      ]),
                    ),
                  ]),
                )
                .superRefine((o, ctx) => {
                  const regex = new RegExp('^[\\\\w-]+$')
                  for (const k of Object.keys(o)) {
                    if (!regex.test(k)) {
                      ctx.addIssue({ code: 'custom', path: [k] })
                    }
                  }
                })
                .exactOptional(),
              slug: z
                .string()
                .regex(/^[\\w-]+$/)
                .max(32),
            })
            .openapi({ required: ['slug'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z.boolean().exactOptional(),
              completedAt: z.number().exactOptional(),
              conclusion: z
                .enum(['canceled', 'failed', 'neutral', 'succeeded', 'skipped', 'stale'])
                .exactOptional(),
              createdAt: z.number().exactOptional(),
              deploymentId: z.string().exactOptional(),
              detailsUrl: z.string().exactOptional(),
              externalId: z.string().exactOptional(),
              id: z.string().exactOptional(),
              integrationId: z.string().exactOptional(),
              itemCount: z.number(),
              name: z.string().exactOptional(),
              output: z
                .object({
                  metrics: z
                    .object({
                      CLS: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      FCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      LCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      TBT: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      virtualExperienceScore: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .exactOptional()
                        .openapi({ required: ['value', 'source'] }),
                    })
                    .exactOptional()
                    .openapi({ required: ['FCP', 'LCP', 'CLS', 'TBT'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              path: z.string().exactOptional(),
              rerequestable: z.boolean().exactOptional(),
              sizeInBytes: z.number(),
              startedAt: z.number().exactOptional(),
              status: z.enum(['registered', 'running', 'completed']).exactOptional(),
              updatedAt: z.number().exactOptional(),
            })
            .openapi({ description: 'An Edge Config', required: ['sizeInBytes', 'itemCount'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getEdgeConfigEdgeConfigIdRoute = createRoute({
  method: 'get',
  path: '/edge-config/{edgeConfigId}',
  tags: ['edge-config'],
  summary: 'Get an Edge Config',
  description: 'Returns an Edge Config.',
  operationId: 'getEdgeConfig',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The EdgeConfig.',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z.number().nullable().exactOptional(),
              creator: z.string().exactOptional(),
              domain: z.string().exactOptional(),
              id: z.string().exactOptional(),
              itemCount: z.number(),
              name: z.string().exactOptional(),
              recordType: z
                .enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS'])
                .exactOptional(),
              sizeInBytes: z.number(),
              ttl: z.number().exactOptional(),
              type: z.enum(['record', 'record-sys']).exactOptional(),
              value: z.string().exactOptional(),
            })
            .openapi({ description: 'The EdgeConfig.', required: ['sizeInBytes', 'itemCount'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const putEdgeConfigEdgeConfigIdRoute = createRoute({
  method: 'put',
  path: '/edge-config/{edgeConfigId}',
  tags: ['edge-config'],
  summary: 'Update an Edge Config',
  description: 'Updates an Edge Config.',
  operationId: 'updateEdgeConfig',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              slug: z
                .string()
                .regex(/^[\\w-]+$/)
                .max(32),
            })
            .openapi({ required: ['slug'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z.boolean().exactOptional(),
              completedAt: z.number().exactOptional(),
              conclusion: z
                .enum(['canceled', 'failed', 'neutral', 'succeeded', 'skipped', 'stale'])
                .exactOptional(),
              createdAt: z.number().exactOptional(),
              deploymentId: z.string().exactOptional(),
              detailsUrl: z.string().exactOptional(),
              externalId: z.string().exactOptional(),
              id: z.string().exactOptional(),
              integrationId: z.string().exactOptional(),
              itemCount: z.number(),
              name: z.string().exactOptional(),
              output: z
                .object({
                  metrics: z
                    .object({
                      CLS: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      FCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      LCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      TBT: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      virtualExperienceScore: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .exactOptional()
                        .openapi({ required: ['value', 'source'] }),
                    })
                    .exactOptional()
                    .openapi({ required: ['FCP', 'LCP', 'CLS', 'TBT'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              path: z.string().exactOptional(),
              rerequestable: z.boolean().exactOptional(),
              sizeInBytes: z.number(),
              startedAt: z.number().exactOptional(),
              status: z.enum(['registered', 'running', 'completed']).exactOptional(),
              updatedAt: z.number().exactOptional(),
            })
            .openapi({ description: 'An Edge Config', required: ['sizeInBytes', 'itemCount'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteEdgeConfigEdgeConfigIdRoute = createRoute({
  method: 'delete',
  path: '/edge-config/{edgeConfigId}',
  tags: ['edge-config'],
  summary: 'Delete an Edge Config',
  description: 'Delete an Edge Config by id.',
  operationId: 'deleteEdgeConfig',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: '' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyRoute = createRoute({
  method: 'get',
  path: '/edge-config/{edgeConfigId}/item/{edgeConfigItemKey}',
  tags: ['edge-config'],
  summary: 'Get an Edge Config item',
  description: 'Returns a specific Edge Config Item.',
  operationId: 'getEdgeConfigItem',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
      edgeConfigItemKey: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'edgeConfigItemKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The EdgeConfig.',
      content: { 'application/json': { schema: EdgeConfigItemSchema } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getEdgeConfigEdgeConfigIdItemsRoute = createRoute({
  method: 'get',
  path: '/edge-config/{edgeConfigId}/items',
  tags: ['edge-config'],
  summary: 'Get Edge Config items',
  description: 'Returns all items of an Edge Config.',
  operationId: 'getEdgeConfigItems',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The EdgeConfig.',
      content: { 'application/json': { schema: EdgeConfigItemSchema } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const patchEdgeConfigEdgeConfigIdItemsRoute = createRoute({
  method: 'patch',
  path: '/edge-config/{edgeConfigId}/items',
  tags: ['edge-config'],
  summary: 'Update Edge Config items in batch',
  description: 'Update multiple Edge Config Items in batch.',
  operationId: 'patchtEdgeConfigItems',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              items: z.array(
                z.xor([
                  z
                    .object({
                      key: z
                        .string()
                        .regex(/^[\\w-]+$/)
                        .max(256),
                      operation: z.xor([
                        z.literal('create'),
                        z.literal('update'),
                        z.literal('upsert'),
                      ]),
                      value: z.xor([
                        z.xor([
                          z.string(),
                          z.number(),
                          z.boolean(),
                          z.null().nullable(),
                          z.object({}),
                        ]),
                        z.array(
                          z.xor([
                            z.string(),
                            z.number(),
                            z.boolean(),
                            z.null().nullable(),
                            z.object({}),
                          ]),
                        ),
                      ]),
                    })
                    .openapi({ required: ['operation', 'key', 'value'] }),
                  z
                    .object({
                      key: z
                        .string()
                        .regex(/^[\\w-]+$/)
                        .max(256),
                      operation: z.literal('delete'),
                    })
                    .openapi({ required: ['operation', 'key'] }),
                ]),
              ),
            })
            .openapi({ required: ['items'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ status: z.string() }).openapi({ required: ['status'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postEdgeConfigEdgeConfigIdTokenRoute = createRoute({
  method: 'post',
  path: '/edge-config/{edgeConfigId}/token',
  tags: ['edge-config'],
  summary: 'Create an Edge Config token',
  description: 'Adds a token to an existing Edge Config.',
  operationId: 'createEdgeConfigToken',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ label: z.string().max(52) }).openapi({ required: ['label'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string(), token: z.string() })
            .openapi({ required: ['token', 'id'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getEdgeConfigEdgeConfigIdTokenTokenRoute = createRoute({
  method: 'get',
  path: '/edge-config/{edgeConfigId}/token/{token}',
  tags: ['edge-config'],
  summary: 'Get Edge Config token meta data',
  description: 'Return meta data about an Edge Config token.',
  operationId: 'getEdgeConfigToken',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
      token: z
        .string()
        .openapi({
          param: { in: 'path', name: 'token', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The EdgeConfig.',
      content: { 'application/json': { schema: EdgeConfigTokenSchema } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getEdgeConfigEdgeConfigIdTokensRoute = createRoute({
  method: 'get',
  path: '/edge-config/{edgeConfigId}/tokens',
  tags: ['edge-config'],
  summary: 'Get all tokens of an Edge Config',
  description: 'Returns all tokens of an Edge Config.',
  operationId: 'getEdgeConfigTokens',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The EdgeConfig.',
      content: { 'application/json': { schema: EdgeConfigTokenSchema } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteEdgeConfigEdgeConfigIdTokensRoute = createRoute({
  method: 'delete',
  path: '/edge-config/{edgeConfigId}/tokens',
  tags: ['edge-config'],
  summary: 'Delete one or more Edge Config tokens',
  description: 'Deletes one or more tokens of an existing Edge Config.',
  operationId: 'deleteEdgeConfigTokens',
  request: {
    params: z.object({
      edgeConfigId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'edgeConfigId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ tokens: z.array(z.string()) }).openapi({ required: ['tokens'] }),
        },
      },
    },
  },
  responses: {
    204: { description: '' },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postRegistrationRoute = createRoute({
  method: 'post',
  path: '/registration',
  tags: ['authentication'],
  summary: 'Login with email',
  description:
    'Request a new login for a user to get a token. This will respond with a verification token and send an email to confirm the request. Once confirmed you can use the verification token to get an authentication token.',
  operationId: 'emailLogin',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'The user email.', examples: ['user@mail.com'] }),
              tokenName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The desired name for the token. It will be displayed on the user account details.',
                  examples: ['Your Client App Name'],
                }),
            })
            .openapi({ required: ['email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The request was successful and an email was sent',
      content: {
        'application/json': {
          schema: z
            .object({
              securityCode: z
                .string()
                .openapi({
                  description:
                    'The code the user is going to receive on the email. **Must** be displayed to the user so they can verify the request is the correct.',
                  examples: ['Practical Saola'],
                }),
              token: z
                .string()
                .openapi({
                  description: 'The token used to verify the user accepted the login request',
                  examples: ['T1dmvPu36nmyYisXAs7IRzcR'],
                }),
            })
            .openapi({ required: ['token', 'securityCode'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nThe provided email is invalid because the owner is blocked',
    },
  },
  security: [],
})

export const getRegistrationVerifyRoute = createRoute({
  method: 'get',
  path: '/registration/verify',
  tags: ['authentication'],
  summary: 'Verify a login request to get an authentication token',
  description:
    'Verify the user accepted the login request and get a authentication token. The user email address and the token received after requesting the login must be added to the URL as a query string with the names `email` and `token`.',
  operationId: 'verifyToken',
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Email to verify the login.',
            in: 'query',
            name: 'email',
            required: false,
            schema: { description: 'Email to verify the login.', type: 'string' },
          },
          description: 'Email to verify the login.',
        }),
      token: z
        .string()
        .openapi({
          param: {
            description: 'The token returned when the login was requested.',
            in: 'query',
            name: 'token',
            required: true,
            schema: {
              description: 'The token returned when the login was requested.',
              type: 'string',
            },
          },
          description: 'The token returned when the login was requested.',
        }),
      tokenName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The desired name for the token. It will be displayed on the user account details.',
            in: 'query',
            name: 'tokenName',
            required: false,
            schema: {
              description:
                'The desired name for the token. It will be displayed on the user account details.',
              examples: ['Your Client App Name'],
              type: 'string',
            },
          },
          description:
            'The desired name for the token. It will be displayed on the user account details.',
          examples: ['Your Client App Name'],
        }),
      ssoUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.',
            in: 'query',
            name: 'ssoUserId',
            required: false,
            schema: {
              description:
                'The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.',
              type: 'string',
            },
          },
          description:
            'The SAML Profile ID, when connecting a SAML Profile to a Team member for the first time.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The verification was successful.',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description: 'Email address of the authenticated user.',
                  examples: ['amy@example.com'],
                }),
              teamId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'When completing SAML Single Sign-On authentication, this will be the ID of the Team that was authenticated for.',
                  examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                }),
              token: z
                .string()
                .openapi({
                  description:
                    'The user authentication token that can be used to perform API requests.',
                  examples: ['1ioXyz9Ue4xdCYGROet1dlKd'],
                }),
            })
            .openapi({ required: ['token', 'email'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request query is invalid.\nThe provided token exists but is not yet confirmed',
    },
    403: {
      description:
        'You do not have permission to access this resource.\nThe verification sso token is invalid or not found\nThe verification token is invalid or not found',
    },
    404: { description: '' },
  },
  security: [],
})

export const getV1DeploymentsDeploymentIdChecksRoute = createRoute({
  method: 'get',
  path: '/v1/deployments/{deploymentId}/checks',
  tags: ['checks'],
  summary: 'Retrieve a list of all checks',
  description: 'List all of the checks created for a deployment.',
  operationId: 'getAllChecks',
  request: {
    params: z.object({
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment to get all checks for',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: {
              description: 'The deployment to get all checks for',
              examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The deployment to get all checks for',
          examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              checks: z.array(
                z
                  .object({
                    completedAt: z.number().exactOptional(),
                    conclusion: z
                      .enum(['canceled', 'failed', 'neutral', 'succeeded', 'skipped', 'stale'])
                      .exactOptional(),
                    createdAt: z.number(),
                    detailsUrl: z.string().exactOptional(),
                    id: z.string(),
                    integrationId: z.string(),
                    name: z.string(),
                    output: z
                      .object({
                        metrics: z
                          .object({
                            CLS: z
                              .object({
                                previousValue: z.number().exactOptional(),
                                source: z.literal('web-vitals'),
                                value: z.number().nullable(),
                              })
                              .openapi({ required: ['value', 'source'] }),
                            FCP: z
                              .object({
                                previousValue: z.number().exactOptional(),
                                source: z.literal('web-vitals'),
                                value: z.number().nullable(),
                              })
                              .openapi({ required: ['value', 'source'] }),
                            LCP: z
                              .object({
                                previousValue: z.number().exactOptional(),
                                source: z.literal('web-vitals'),
                                value: z.number().nullable(),
                              })
                              .openapi({ required: ['value', 'source'] }),
                            TBT: z
                              .object({
                                previousValue: z.number().exactOptional(),
                                source: z.literal('web-vitals'),
                                value: z.number().nullable(),
                              })
                              .openapi({ required: ['value', 'source'] }),
                            virtualExperienceScore: z
                              .object({
                                previousValue: z.number().exactOptional(),
                                source: z.literal('web-vitals'),
                                value: z.number().nullable(),
                              })
                              .exactOptional()
                              .openapi({ required: ['value', 'source'] }),
                          })
                          .exactOptional()
                          .openapi({ required: ['FCP', 'LCP', 'CLS', 'TBT'] }),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    path: z.string().exactOptional(),
                    rerequestable: z.boolean(),
                    startedAt: z.number().exactOptional(),
                    status: z.enum(['registered', 'running', 'completed']),
                    updatedAt: z.number(),
                  })
                  .openapi({
                    required: [
                      'createdAt',
                      'id',
                      'integrationId',
                      'name',
                      'rerequestable',
                      'status',
                      'updatedAt',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['checks'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1DeploymentsDeploymentIdChecksRoute = createRoute({
  method: 'post',
  path: '/v1/deployments/{deploymentId}/checks',
  tags: ['checks'],
  summary: 'Creates a new Check',
  description:
    'Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.',
  operationId: 'createCheck',
  request: {
    params: z.object({
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment to create the check for.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: {
              description: 'The deployment to create the check for.',
              examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The deployment to create the check for.',
          examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z
                .boolean()
                .openapi({
                  description: 'Whether the check should block a deployment from succeeding',
                  examples: [true],
                }),
              detailsUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL to display for further details',
                  examples: ['http://example.com'],
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An identifier that can be used as an external reference',
                  examples: ['1234abc'],
                }),
              name: z
                .string()
                .max(100)
                .openapi({
                  description: 'The name of the check being created',
                  examples: ['Performance Check'],
                }),
              path: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'Path of the page that is being checked',
                  examples: ['/'],
                }),
              rerequestable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether a user should be able to request for the check to be rerun if it fails',
                  examples: [true],
                }),
            })
            .openapi({ required: ['name', 'blocking'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z.boolean(),
              completedAt: z.number().exactOptional(),
              conclusion: z
                .enum(['canceled', 'failed', 'neutral', 'succeeded', 'skipped', 'stale'])
                .exactOptional(),
              createdAt: z.number(),
              deploymentId: z.string(),
              detailsUrl: z.string().exactOptional(),
              externalId: z.string().exactOptional(),
              id: z.string(),
              integrationId: z.string(),
              name: z.string(),
              output: z
                .object({
                  metrics: z
                    .object({
                      CLS: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      FCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      LCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      TBT: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      virtualExperienceScore: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .exactOptional()
                        .openapi({ required: ['value', 'source'] }),
                    })
                    .exactOptional()
                    .openapi({ required: ['FCP', 'LCP', 'CLS', 'TBT'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              path: z.string().exactOptional(),
              rerequestable: z.boolean().exactOptional(),
              startedAt: z.number().exactOptional(),
              status: z.enum(['registered', 'running', 'completed']),
              updatedAt: z.number(),
            })
            .openapi({
              description: 'From T, pick a set of properties whose keys are in the union K',
              required: [
                'id',
                'name',
                'status',
                'blocking',
                'integrationId',
                'deploymentId',
                'createdAt',
                'updatedAt',
              ],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nCannot create check for finished deployment\nThe provided token is not from an OAuth2 Client',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1DeploymentsDeploymentIdChecksCheckIdRoute = createRoute({
  method: 'get',
  path: '/v1/deployments/{deploymentId}/checks/{checkId}',
  tags: ['checks'],
  summary: 'Get a single check',
  description: 'Return a detailed response for a single check.',
  operationId: 'getCheck',
  request: {
    params: z.object({
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment to get the check for.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: {
              description: 'The deployment to get the check for.',
              examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The deployment to get the check for.',
          examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
      checkId: z
        .string()
        .openapi({
          param: {
            description: 'The check to fetch',
            in: 'path',
            name: 'checkId',
            required: true,
            schema: {
              description: 'The check to fetch',
              examples: ['check_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The check to fetch',
          examples: ['check_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z.number().nullable().exactOptional(),
              creator: z.string(),
              domain: z.string(),
              id: z.string(),
              name: z.string(),
              recordType: z.enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS']),
              ttl: z.number().exactOptional(),
              type: z.enum(['record', 'record-sys']),
              value: z.string(),
            })
            .openapi({
              description: 'From T, pick a set of properties whose keys are in the union K',
              required: ['creator', 'domain', 'id', 'name', 'recordType', 'type', 'value'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: {
      description:
        'You do not have permission to access this resource.\nThe provided token is not from an OAuth2 Client that created the Check',
    },
    404: { description: 'Check was not found\nThe deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV1DeploymentsDeploymentIdChecksCheckIdRoute = createRoute({
  method: 'patch',
  path: '/v1/deployments/{deploymentId}/checks/{checkId}',
  tags: ['checks'],
  summary: 'Update a check',
  description:
    'Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.',
  operationId: 'updateCheck',
  request: {
    params: z.object({
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment to update the check for.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: {
              description: 'The deployment to update the check for.',
              examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The deployment to update the check for.',
          examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
      checkId: z
        .string()
        .openapi({
          param: {
            description: 'The check being updated',
            in: 'path',
            name: 'checkId',
            required: true,
            schema: {
              description: 'The check being updated',
              examples: ['check_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The check being updated',
          examples: ['check_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              conclusion: z
                .enum(['canceled', 'failed', 'neutral', 'succeeded', 'skipped'])
                .exactOptional()
                .openapi({ description: 'The result of the check being run' }),
              detailsUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A URL a user may visit to see more information about the check',
                  examples: ['https://example.com/check/run/1234abc'],
                }),
              externalId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An identifier that can be used as an external reference',
                  examples: ['1234abc'],
                }),
              name: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The name of the check being created',
                  examples: ['Performance Check'],
                }),
              output: z
                .object({
                  metrics: z
                    .strictObject({
                      CLS: z
                        .object({
                          previousValue: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Previous Cumulative Layout Shift value to display a delta',
                              examples: [2],
                            }),
                          source: z.literal('web-vitals'),
                          value: z
                            .number()
                            .nullable()
                            .openapi({
                              description: 'Cumulative Layout Shift value',
                              examples: [4],
                            }),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      FCP: z
                        .object({
                          previousValue: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Previous First Contentful Paint value to display a delta',
                              examples: [900],
                            }),
                          source: z.literal('web-vitals'),
                          value: z
                            .number()
                            .nullable()
                            .openapi({
                              description: 'First Contentful Paint value',
                              examples: [1200],
                            }),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      LCP: z
                        .object({
                          previousValue: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Previous Largest Contentful Paint value to display a delta',
                              examples: [1000],
                            }),
                          source: z.literal('web-vitals'),
                          value: z
                            .number()
                            .nullable()
                            .openapi({
                              description: 'Largest Contentful Paint value',
                              examples: [1200],
                            }),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      TBT: z
                        .object({
                          previousValue: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'Previous Total Blocking Time value to display a delta',
                              examples: [3500],
                            }),
                          source: z.literal('web-vitals'),
                          value: z
                            .number()
                            .nullable()
                            .openapi({
                              description: 'Total Blocking Time value',
                              examples: [3000],
                            }),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      virtualExperienceScore: z
                        .object({
                          previousValue: z
                            .int()
                            .min(0)
                            .max(100)
                            .exactOptional()
                            .openapi({
                              description:
                                'A previous Virtual Experience Score value to display a delta, between 0 and 100',
                              examples: [35],
                            }),
                          source: z.literal('web-vitals'),
                          value: z
                            .int()
                            .min(0)
                            .max(100)
                            .nullable()
                            .openapi({
                              description:
                                'The calculated Virtual Experience Score value, between 0 and 100',
                              examples: [30],
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['value', 'source'] }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'Metrics about the page',
                      required: ['FCP', 'LCP', 'CLS', 'TBT'],
                    }),
                })
                .exactOptional()
                .openapi({ description: 'The results of the check Run', required: [] }),
              path: z
                .string()
                .max(255)
                .exactOptional()
                .openapi({
                  description: 'Path of the page that is being checked',
                  examples: ['/'],
                }),
              status: z
                .enum(['running', 'completed'])
                .exactOptional()
                .openapi({ description: 'The current status of the check' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              blocking: z.boolean(),
              completedAt: z.number().exactOptional(),
              conclusion: z
                .enum(['canceled', 'failed', 'neutral', 'succeeded', 'skipped', 'stale'])
                .exactOptional(),
              createdAt: z.number(),
              deploymentId: z.string(),
              detailsUrl: z.string().exactOptional(),
              externalId: z.string().exactOptional(),
              id: z.string(),
              integrationId: z.string(),
              name: z.string(),
              output: z
                .object({
                  metrics: z
                    .object({
                      CLS: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      FCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      LCP: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      TBT: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .openapi({ required: ['value', 'source'] }),
                      virtualExperienceScore: z
                        .object({
                          previousValue: z.number().exactOptional(),
                          source: z.literal('web-vitals'),
                          value: z.number().nullable(),
                        })
                        .exactOptional()
                        .openapi({ required: ['value', 'source'] }),
                    })
                    .exactOptional()
                    .openapi({ required: ['FCP', 'LCP', 'CLS', 'TBT'] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              path: z.string().exactOptional(),
              rerequestable: z.boolean().exactOptional(),
              startedAt: z.number().exactOptional(),
              status: z.enum(['registered', 'running', 'completed']),
              updatedAt: z.number(),
            })
            .openapi({
              description: 'From T, pick a set of properties whose keys are in the union K',
              required: [
                'id',
                'name',
                'status',
                'blocking',
                'integrationId',
                'deploymentId',
                'createdAt',
                'updatedAt',
              ],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nThe provided token is not from an OAuth2 Client',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Check was not found\nThe deployment was not found' },
    413: { description: 'The output provided is too large' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1DeploymentsDeploymentIdChecksCheckIdRerequestRoute = createRoute({
  method: 'post',
  path: '/v1/deployments/{deploymentId}/checks/{checkId}/rerequest',
  tags: ['checks'],
  summary: 'Rerequest a check',
  description: 'Rerequest a selected check that has failed.',
  operationId: 'rerequestCheck',
  request: {
    params: z.object({
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment to rerun the check for.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: {
              description: 'The deployment to rerun the check for.',
              examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The deployment to rerun the check for.',
          examples: ['dpl_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
      checkId: z
        .string()
        .openapi({
          param: {
            description: 'The check to rerun',
            in: 'path',
            name: 'checkId',
            required: true,
            schema: {
              description: 'The check to rerun',
              examples: ['check_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
              type: 'string',
            },
          },
          description: 'The check to rerun',
          examples: ['check_2qn7PZrx89yxY34vEZPD31Y9XVj6'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found\nCheck was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV1DomainsRecordsRecordIdRoute = createRoute({
  method: 'patch',
  path: '/v1/domains/records/{recordId}',
  tags: ['dns'],
  summary: 'Update an existing DNS record',
  description: 'Updates an existing DNS record for a domain name.',
  operationId: 'updateRecord',
  request: {
    params: z.object({
      recordId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the DNS record',
            in: 'path',
            name: 'recordId',
            required: true,
            schema: {
              description: 'The id of the DNS record',
              examples: ['rec_2qn7pzrx89yxy34vezpd31y9'],
              type: 'string',
            },
          },
          description: 'The id of the DNS record',
          examples: ['rec_2qn7pzrx89yxy34vezpd31y9'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              mxPriority: z
                .int()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The MX priority value of the DNS record' }),
              name: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The name of the DNS record', examples: ['example-1'] }),
              srv: z
                .strictObject({
                  port: z.int().nullable().openapi({ description: '' }),
                  priority: z.int().nullable().openapi({ description: '' }),
                  target: z
                    .string()
                    .max(255)
                    .nullable()
                    .openapi({ description: '', examples: ['example2.com.'] }),
                  weight: z.int().nullable().openapi({ description: '' }),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: ['target', 'weight', 'port', 'priority'] }),
              ttl: z
                .int()
                .min(60)
                .max(2147483647)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The Time to live (TTL) value of the DNS record',
                  examples: ['60'],
                }),
              type: z
                .enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS'])
                .nullable()
                .exactOptional()
                .openapi({ description: 'The type of the DNS record', examples: ['A'] }),
              value: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'The value of the DNS record', examples: ['google.com'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z.number().nullable().exactOptional(),
              creator: z.string(),
              domain: z.string(),
              id: z.string(),
              name: z.string(),
              recordType: z.enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS']),
              ttl: z.number().exactOptional(),
              type: z.enum(['record', 'record-sys']),
              value: z.string(),
            })
            .openapi({
              description: 'From T, pick a set of properties whose keys are in the union K',
              required: ['creator', 'domain', 'id', 'name', 'recordType', 'type', 'value'],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    401: { description: '' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1IntegrationsConfigurationIdRoute = createRoute({
  method: 'get',
  path: '/v1/integrations/configuration/{id}',
  tags: ['integrations'],
  summary: 'Retrieve an integration configuration',
  description:
    'Allows to retrieve a the configuration with the provided id in case it exists. The authenticated user or team must be the owner of the config in order to access it.',
  operationId: 'getConfiguration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the configuration to check',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'ID of the configuration to check',
              examples: ['icfg_cuwj0AdCdH3BwWT4LPijCC7t'],
              type: 'string',
            },
          },
          description: 'ID of the configuration to check',
          examples: ['icfg_cuwj0AdCdH3BwWT4LPijCC7t'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                completedAt: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'A timestamp that tells you when the configuration was installed successfully',
                    examples: [1558531915505],
                  }),
                createdAt: z
                  .number()
                  .openapi({
                    description: 'A timestamp that tells you when the configuration was created',
                    examples: [1558531915505],
                  }),
                deletedAt: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'A timestamp that tells you when the configuration was updated.',
                    examples: [1558531915505],
                  }),
                disabledAt: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.",
                    examples: [1558531915505],
                  }),
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the configuration',
                    examples: ['icfg_3bwCLgxL8qt5kjRLcv2Dit7F'],
                  }),
                integrationId: z
                  .string()
                  .openapi({
                    description:
                      'The unique identifier of the app the configuration was created for',
                    examples: ['oac_xzpVzcUOgcB1nrVlirtKhbWV'],
                  }),
                oauthConfiguration: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.',
                    examples: [false],
                  }),
                ownerId: z
                  .string()
                  .openapi({
                    description: 'The user or team ID that owns the configuration',
                    examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                  }),
                projects: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.',
                    examples: [['prj_xQxbutw1HpL6HLYPAzt5h75m8NjO']],
                  }),
                removedLogDrainsAt: z.number().exactOptional(),
                removedProjectEnvsAt: z.number().exactOptional(),
                removedTokensAt: z.number().exactOptional(),
                removedWebhooksAt: z.number().exactOptional(),
                scopes: z
                  .array(z.string())
                  .openapi({
                    description:
                      'The resources that are allowed to be accessed by the configuration.',
                    examples: [['read:project', 'read-write:log-drain']],
                  }),
                scopesQueue: z
                  .array(
                    z
                      .object({
                        confirmedAt: z.number().exactOptional(),
                        note: z.string(),
                        requestedAt: z.number(),
                        scopes: z
                          .object({
                            added: z.array(
                              z.enum([
                                'read:integration-configuration',
                                'read-write:integration-configuration',
                                'read:deployment',
                                'read-write:deployment',
                                'read-write:deployment-check',
                                'read:project',
                                'read-write:project',
                                'read-write:project-env-vars',
                                'read-write:global-project-env-vars',
                                'read:team',
                                'read:user',
                                'read-write:log-drain',
                                'read:domain',
                                'read-write:domain',
                                'read-write:edge-config',
                                'read-write:otel-endpoint',
                                'read:monitoring',
                              ]),
                            ),
                            upgraded: z.array(
                              z.enum([
                                'read:integration-configuration',
                                'read-write:integration-configuration',
                                'read:deployment',
                                'read-write:deployment',
                                'read-write:deployment-check',
                                'read:project',
                                'read-write:project',
                                'read-write:project-env-vars',
                                'read-write:global-project-env-vars',
                                'read:team',
                                'read:user',
                                'read-write:log-drain',
                                'read:domain',
                                'read-write:domain',
                                'read-write:edge-config',
                                'read-write:otel-endpoint',
                                'read:monitoring',
                              ]),
                            ),
                          })
                          .openapi({ required: ['added', 'upgraded'] }),
                      })
                      .openapi({ required: ['scopes', 'note', 'requestedAt'] }),
                  )
                  .exactOptional(),
                slug: z
                  .string()
                  .openapi({
                    description: 'The slug of the integration the configuration is created for.',
                    examples: ['slack'],
                  }),
                source: z
                  .enum(['marketplace', 'deploy-button', 'oauth', 'external'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.',
                    examples: ['marketplace'],
                  }),
                teamId: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'When the configuration was created for a team, this will show the ID of the team.',
                    examples: ['team_nLlpyC6RE1qxydlFKbrxDlud'],
                  }),
                type: z.literal('integration-configuration'),
                updatedAt: z
                  .number()
                  .openapi({
                    description: 'A timestamp that tells you when the configuration was updated.',
                    examples: [1558531915505],
                  }),
                userId: z
                  .string()
                  .openapi({
                    description: 'The ID of the user that created the configuration.',
                    examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                  }),
              })
              .openapi({
                description: 'Make all properties in T optional',
                required: [
                  'createdAt',
                  'id',
                  'integrationId',
                  'ownerId',
                  'slug',
                  'type',
                  'updatedAt',
                  'userId',
                  'scopes',
                ],
              }),
            z
              .object({
                canConfigureOpenTelemetry: z.boolean().exactOptional(),
                completedAt: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'A timestamp that tells you when the configuration was installed successfully',
                    examples: [1558531915505],
                  }),
                createdAt: z
                  .number()
                  .openapi({
                    description: 'A timestamp that tells you when the configuration was created',
                    examples: [1558531915505],
                  }),
                disabledAt: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.",
                    examples: [1558531915505],
                  }),
                id: z
                  .string()
                  .openapi({
                    description: 'The unique identifier of the configuration',
                    examples: ['icfg_3bwCLgxL8qt5kjRLcv2Dit7F'],
                  }),
                integrationId: z
                  .string()
                  .openapi({
                    description:
                      'The unique identifier of the app the configuration was created for',
                    examples: ['oac_xzpVzcUOgcB1nrVlirtKhbWV'],
                  }),
                oauthConfiguration: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.',
                    examples: [false],
                  }),
                ownerId: z
                  .string()
                  .openapi({
                    description: 'The user or team ID that owns the configuration',
                    examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                  }),
                projectSelection: z
                  .enum(['selected', 'all'])
                  .openapi({
                    description:
                      'A string representing the permission for projects. Possible values are `all` or `selected`.',
                    examples: ['all'],
                  }),
                projects: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.',
                    examples: [['prj_xQxbutw1HpL6HLYPAzt5h75m8NjO']],
                  }),
                scopes: z
                  .array(z.string())
                  .openapi({
                    description:
                      'The resources that are allowed to be accessed by the configuration.',
                    examples: [['read:project', 'read-write:log-drain']],
                  }),
                slug: z
                  .string()
                  .openapi({
                    description: 'The slug of the integration the configuration is created for.',
                    examples: ['slack'],
                  }),
                source: z
                  .enum(['marketplace', 'deploy-button', 'oauth', 'external'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.',
                    examples: ['marketplace'],
                  }),
                teamId: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'When the configuration was created for a team, this will show the ID of the team.',
                    examples: ['team_nLlpyC6RE1qxydlFKbrxDlud'],
                  }),
                updatedAt: z
                  .number()
                  .openapi({
                    description: 'A timestamp that tells you when the configuration was updated.',
                    examples: [1558531915505],
                  }),
                userId: z
                  .string()
                  .openapi({
                    description: 'The ID of the user that created the configuration.',
                    examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                  }),
              })
              .openapi({
                required: [
                  'projectSelection',
                  'createdAt',
                  'id',
                  'integrationId',
                  'ownerId',
                  'slug',
                  'updatedAt',
                  'userId',
                  'scopes',
                ],
              }),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The configuration was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1IntegrationsConfigurationIdRoute = createRoute({
  method: 'delete',
  path: '/v1/integrations/configuration/{id}',
  tags: ['integrations'],
  summary: 'Delete an integration configuration',
  description:
    'Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.',
  operationId: 'deleteConfiguration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The configuration was successfully removed' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The configuration was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1IntegrationsConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v1/integrations/configurations',
  tags: ['integrations'],
  summary: 'Get configurations for the authenticated user or team',
  description:
    'Allows to retrieve all configurations for an authenticated integration. When the `project` view is used, configurations generated for the authorization flow will be filtered out of the results.',
  operationId: 'getConfigurations',
  request: {
    query: z.object({
      view: z
        .enum(['account', 'project'])
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            required: true,
            schema: { enum: ['account', 'project'], type: 'string' },
          },
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of configurations for the authenticated user',
      content: {
        'application/json': {
          schema: z.xor([
            z.array(
              z
                .object({
                  completedAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'A timestamp that tells you when the configuration was installed successfully',
                      examples: [1558531915505],
                    }),
                  createdAt: z
                    .number()
                    .openapi({
                      description: 'A timestamp that tells you when the configuration was created',
                      examples: [1558531915505],
                    }),
                  deletedAt: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'A timestamp that tells you when the configuration was updated.',
                      examples: [1558531915505],
                    }),
                  disabledAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.",
                      examples: [1558531915505],
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The unique identifier of the configuration',
                      examples: ['icfg_3bwCLgxL8qt5kjRLcv2Dit7F'],
                    }),
                  integrationId: z
                    .string()
                    .openapi({
                      description:
                        'The unique identifier of the app the configuration was created for',
                      examples: ['oac_xzpVzcUOgcB1nrVlirtKhbWV'],
                    }),
                  oauthConfiguration: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.',
                      examples: [false],
                    }),
                  ownerId: z
                    .string()
                    .openapi({
                      description: 'The user or team ID that owns the configuration',
                      examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                    }),
                  projects: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.',
                      examples: [['prj_xQxbutw1HpL6HLYPAzt5h75m8NjO']],
                    }),
                  removedLogDrainsAt: z.number().exactOptional(),
                  removedProjectEnvsAt: z.number().exactOptional(),
                  removedTokensAt: z.number().exactOptional(),
                  removedWebhooksAt: z.number().exactOptional(),
                  scopes: z
                    .array(z.string())
                    .openapi({
                      description:
                        'The resources that are allowed to be accessed by the configuration.',
                      examples: [['read:project', 'read-write:log-drain']],
                    }),
                  scopesQueue: z
                    .array(
                      z
                        .object({
                          confirmedAt: z.number().exactOptional(),
                          note: z.string(),
                          requestedAt: z.number(),
                          scopes: z
                            .object({
                              added: z.array(
                                z.enum([
                                  'read:integration-configuration',
                                  'read-write:integration-configuration',
                                  'read:deployment',
                                  'read-write:deployment',
                                  'read-write:deployment-check',
                                  'read:project',
                                  'read-write:project',
                                  'read-write:project-env-vars',
                                  'read-write:global-project-env-vars',
                                  'read:team',
                                  'read:user',
                                  'read-write:log-drain',
                                  'read:domain',
                                  'read-write:domain',
                                  'read-write:edge-config',
                                  'read-write:otel-endpoint',
                                  'read:monitoring',
                                ]),
                              ),
                              upgraded: z.array(
                                z.enum([
                                  'read:integration-configuration',
                                  'read-write:integration-configuration',
                                  'read:deployment',
                                  'read-write:deployment',
                                  'read-write:deployment-check',
                                  'read:project',
                                  'read-write:project',
                                  'read-write:project-env-vars',
                                  'read-write:global-project-env-vars',
                                  'read:team',
                                  'read:user',
                                  'read-write:log-drain',
                                  'read:domain',
                                  'read-write:domain',
                                  'read-write:edge-config',
                                  'read-write:otel-endpoint',
                                  'read:monitoring',
                                ]),
                              ),
                            })
                            .openapi({ required: ['added', 'upgraded'] }),
                        })
                        .openapi({ required: ['scopes', 'note', 'requestedAt'] }),
                    )
                    .exactOptional(),
                  slug: z
                    .string()
                    .openapi({
                      description: 'The slug of the integration the configuration is created for.',
                      examples: ['slack'],
                    }),
                  source: z
                    .enum(['marketplace', 'deploy-button', 'oauth', 'external'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.',
                      examples: ['marketplace'],
                    }),
                  teamId: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'When the configuration was created for a team, this will show the ID of the team.',
                      examples: ['team_nLlpyC6RE1qxydlFKbrxDlud'],
                    }),
                  type: z.literal('integration-configuration'),
                  updatedAt: z
                    .number()
                    .openapi({
                      description: 'A timestamp that tells you when the configuration was updated.',
                      examples: [1558531915505],
                    }),
                  userId: z
                    .string()
                    .openapi({
                      description: 'The ID of the user that created the configuration.',
                      examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                    }),
                })
                .openapi({
                  description: 'Make all properties in T optional',
                  required: [
                    'createdAt',
                    'id',
                    'integrationId',
                    'ownerId',
                    'slug',
                    'type',
                    'updatedAt',
                    'userId',
                    'scopes',
                  ],
                }),
            ),
            z.array(
              z
                .object({
                  completedAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'A timestamp that tells you when the configuration was installed successfully',
                      examples: [1558531915505],
                    }),
                  createdAt: z
                    .number()
                    .openapi({
                      description: 'A timestamp that tells you when the configuration was created',
                      examples: [1558531915505],
                    }),
                  deletedAt: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'A timestamp that tells you when the configuration was updated.',
                      examples: [1558531915505],
                    }),
                  disabledAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        "A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.",
                      examples: [1558531915505],
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The unique identifier of the configuration',
                      examples: ['icfg_3bwCLgxL8qt5kjRLcv2Dit7F'],
                    }),
                  integration: z
                    .object({
                      assignedBetaLabelAt: z.number().exactOptional(),
                      category: z.string(),
                      flags: z.array(z.string()).exactOptional(),
                      icon: z.string(),
                      isLegacy: z.boolean(),
                      name: z.string(),
                    })
                    .openapi({ required: ['name', 'icon', 'category', 'isLegacy'] }),
                  integrationId: z
                    .string()
                    .openapi({
                      description:
                        'The unique identifier of the app the configuration was created for',
                      examples: ['oac_xzpVzcUOgcB1nrVlirtKhbWV'],
                    }),
                  oauthConfiguration: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Will be truthy in those cases where the configuration was created to authorize a client through the OAuth2 flow.',
                      examples: [false],
                    }),
                  ownerId: z
                    .string()
                    .openapi({
                      description: 'The user or team ID that owns the configuration',
                      examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                    }),
                  projects: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.',
                      examples: [['prj_xQxbutw1HpL6HLYPAzt5h75m8NjO']],
                    }),
                  removedLogDrainsAt: z.number().exactOptional(),
                  removedProjectEnvsAt: z.number().exactOptional(),
                  removedTokensAt: z.number().exactOptional(),
                  removedWebhooksAt: z.number().exactOptional(),
                  scopes: z
                    .array(z.string())
                    .openapi({
                      description:
                        'The resources that are allowed to be accessed by the configuration.',
                      examples: [['read:project', 'read-write:log-drain']],
                    }),
                  scopesQueue: z
                    .array(
                      z
                        .object({
                          confirmedAt: z.number().exactOptional(),
                          note: z.string(),
                          requestedAt: z.number(),
                          scopes: z
                            .object({
                              added: z.array(
                                z.enum([
                                  'read:integration-configuration',
                                  'read-write:integration-configuration',
                                  'read:deployment',
                                  'read-write:deployment',
                                  'read-write:deployment-check',
                                  'read:project',
                                  'read-write:project',
                                  'read-write:project-env-vars',
                                  'read-write:global-project-env-vars',
                                  'read:team',
                                  'read:user',
                                  'read-write:log-drain',
                                  'read:domain',
                                  'read-write:domain',
                                  'read-write:edge-config',
                                  'read-write:otel-endpoint',
                                  'read:monitoring',
                                ]),
                              ),
                              upgraded: z.array(
                                z.enum([
                                  'read:integration-configuration',
                                  'read-write:integration-configuration',
                                  'read:deployment',
                                  'read-write:deployment',
                                  'read-write:deployment-check',
                                  'read:project',
                                  'read-write:project',
                                  'read-write:project-env-vars',
                                  'read-write:global-project-env-vars',
                                  'read:team',
                                  'read:user',
                                  'read-write:log-drain',
                                  'read:domain',
                                  'read-write:domain',
                                  'read-write:edge-config',
                                  'read-write:otel-endpoint',
                                  'read:monitoring',
                                ]),
                              ),
                            })
                            .openapi({ required: ['added', 'upgraded'] }),
                        })
                        .openapi({ required: ['scopes', 'note', 'requestedAt'] }),
                    )
                    .exactOptional(),
                  slug: z
                    .string()
                    .openapi({
                      description: 'The slug of the integration the configuration is created for.',
                      examples: ['slack'],
                    }),
                  source: z
                    .enum(['marketplace', 'deploy-button', 'oauth', 'external'])
                    .exactOptional()
                    .openapi({
                      description:
                        'Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.',
                      examples: ['marketplace'],
                    }),
                  teamId: z
                    .string()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'When the configuration was created for a team, this will show the ID of the team.',
                      examples: ['team_nLlpyC6RE1qxydlFKbrxDlud'],
                    }),
                  type: z.literal('integration-configuration'),
                  updatedAt: z
                    .number()
                    .openapi({
                      description: 'A timestamp that tells you when the configuration was updated.',
                      examples: [1558531915505],
                    }),
                  userId: z
                    .string()
                    .openapi({
                      description: 'The ID of the user that created the configuration.',
                      examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                    }),
                })
                .openapi({
                  required: [
                    'integration',
                    'createdAt',
                    'id',
                    'integrationId',
                    'ownerId',
                    'slug',
                    'type',
                    'updatedAt',
                    'userId',
                    'scopes',
                  ],
                }),
            ),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1IntegrationsGitNamespacesRoute = createRoute({
  method: 'get',
  path: '/v1/integrations/git-namespaces',
  tags: ['integrations'],
  summary: 'List git namespaces by provider',
  description:
    'Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.',
  operationId: 'gitNamespaces',
  request: {
    query: z.object({
      provider: z
        .enum(['github', 'gitlab', 'bitbucket'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'provider',
            schema: { enum: ['github', 'gitlab', 'bitbucket'] },
            required: false,
          },
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.xor([z.string(), z.number()]),
                name: z.string().exactOptional(),
                ownerType: z.string(),
                provider: z.string(),
                slug: z.string(),
              })
              .openapi({ required: ['provider', 'slug', 'id', 'ownerType'] }),
          ),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1IntegrationsLogDrainsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/integrations/log-drains/{id}',
  tags: ['logDrains'],
  summary: 'Deletes the Integration log drain with the provided `id`',
  description:
    'Deletes the Integration log drain with the provided `id`. When using an OAuth2 Token, the log drain can be deleted only if the integration owns it.',
  operationId: 'deleteIntegrationLogDrain',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the log drain to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'ID of the log drain to be deleted', type: 'string' },
          },
          description: 'ID of the log drain to be deleted',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The log drain was successfully deleted' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The log drain was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1IntegrationsSearchRepoRoute = createRoute({
  method: 'get',
  path: '/v1/integrations/search-repo',
  tags: ['integrations'],
  summary: 'List git repositories linked to namespace by provider',
  description:
    'Lists git repositories linked to a namespace `id` for a supported provider. A specific namespace `id` can be obtained via the `git-namespaces`  endpoint. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'query', schema: { type: 'string' }, required: false },
        }),
      namespaceId: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.union([z.string(), z.number()]))
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'namespaceId',
            schema: { type: ['string', 'number', 'null'] },
            required: false,
          },
        }),
      provider: z
        .enum(['github', 'gitlab', 'bitbucket'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'provider',
            schema: { enum: ['github', 'gitlab', 'bitbucket'] },
            required: false,
          },
        }),
      installationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'installationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              gitAccount: z
                .object({
                  namespaceId: z.xor([z.string(), z.number()]).nullable(),
                  provider: z.enum(['github', 'gitlab', 'bitbucket']),
                })
                .openapi({ required: ['provider', 'namespaceId'] }),
              repos: z.array(
                z
                  .object({
                    defaultBranch: z.string(),
                    id: z.xor([z.string(), z.number()]),
                    name: z.string(),
                    namespace: z.string(),
                    ownerType: z.enum(['team', 'user']),
                    private: z.boolean(),
                    slug: z.string(),
                    updatedAt: z.number(),
                    url: z.string(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'name',
                      'slug',
                      'namespace',
                      'private',
                      'defaultBranch',
                      'url',
                      'updatedAt',
                      'ownerType',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['gitAccount', 'repos'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1LogDrainsRoute = createRoute({
  method: 'get',
  path: '/v1/log-drains',
  tags: ['logDrains'],
  summary: 'Retrieves a list of Configurable Log Drains',
  description:
    'Retrieves a list of Configurable Log Drains. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.',
  operationId: 'getConfigurableLogDrains',
  request: {
    query: z.object({
      projectId: z
        .string()
        .regex(/^[a-zA-z0-9_]+$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'projectId',
            schema: { pattern: '^[a-zA-z0-9_]+$', type: 'string' },
            required: false,
          },
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                branch: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The branch to filter logs by', examples: ['main'] }),
                configurationId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The ID of the related integration configuration' }),
                createdAt: z
                  .number()
                  .openapi({
                    description:
                      'A number containing the date when the log-drain was created in in milliseconds',
                    examples: [1567024758130],
                  }),
                deliveryFormat: z
                  .enum(['json', 'ndjson', 'syslog'])
                  .openapi({
                    description: 'The log-drain defined delivery format',
                    examples: [['lambda', 'build']],
                  }),
                environment: z
                  .enum(['preview', 'production'])
                  .exactOptional()
                  .openapi({
                    description: 'The environment to filter logs by',
                    examples: ['production'],
                  }),
                headers: z
                  .record(z.string(), z.string())
                  .exactOptional()
                  .openapi({
                    description: 'Construct a type with a set of properties K of type T',
                    examples: [{ foo: 'bar' }],
                  }),
                id: z
                  .string()
                  .openapi({ description: 'The log-drain id', examples: ['ld_GflD6EYyo7F4ViYS'] }),
                ownerId: z
                  .string()
                  .openapi({
                    description: 'The unique ID of the team the deployment belongs to',
                    examples: ['team_ZspSRT4ljIEEmMHgoDwKWDei'],
                  }),
                projectIds: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description: 'The ID of the projects the deployment is associated with',
                    examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                  }),
                sources: z
                  .array(
                    z
                      .enum(['static', 'lambda', 'build', 'edge', 'external'])
                      .openapi({
                        description: 'The log-drain defined sources',
                        examples: [['lambda', 'build']],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description: 'The log-drain defined sources',
                    examples: [['lambda', 'build']],
                  }),
                type: z
                  .enum(['json', 'ndjson', 'syslog'])
                  .openapi({
                    description: 'The log-drain defined delivery format',
                    examples: [['lambda', 'build']],
                  }),
                url: z
                  .string()
                  .openapi({
                    description: 'A string with the URL of the log-drain',
                    examples: ['https://my-log-drain.com'],
                  }),
              })
              .openapi({
                required: ['createdAt', 'id', 'ownerId', 'type', 'deliveryFormat', 'url'],
              }),
          ),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1LogDrainsRoute = createRoute({
  method: 'post',
  path: '/v1/log-drains',
  tags: ['logDrains'],
  summary: 'Creates a Configurable Log Drain',
  description:
    'Creates a configurable log drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed)',
  operationId: 'createConfigurableLogDrain',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              branch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The branch regexp of log drain',
                  examples: ['feature/*'],
                }),
              deliveryFormat: z
                .enum(['json', 'ndjson'])
                .openapi({ description: 'The delivery log format', examples: ['json'] }),
              environment: z
                .enum(['preview', 'production'])
                .exactOptional()
                .openapi({ description: 'The environment of log drain', examples: ['production'] }),
              headers: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({ description: 'Headers to be sent together with the request' }),
              projectIds: z
                .array(z.string().regex(/^[a-zA-z0-9_]+$/))
                .min(1)
                .max(50)
                .exactOptional(),
              sources: z
                .array(z.enum(['static', 'lambda', 'build', 'edge', 'external']))
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              url: z
                .url()
                .regex(/^(http|https)?:\/\//)
                .openapi({ description: 'The log drain url' }),
            })
            .openapi({ required: ['deliveryFormat', 'url', 'sources'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              branch: z
                .string()
                .exactOptional()
                .openapi({ description: 'The branch to filter logs by', examples: ['main'] }),
              configurationId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the related integration configuration' }),
              createdAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the log-drain was created in in milliseconds',
                  examples: [1567024758130],
                }),
              deliveryFormat: z
                .enum(['json', 'ndjson', 'syslog'])
                .openapi({
                  description: 'The log-drain defined delivery format',
                  examples: [['lambda', 'build']],
                }),
              environment: z
                .enum(['preview', 'production'])
                .exactOptional()
                .openapi({
                  description: 'The environment to filter logs by',
                  examples: ['production'],
                }),
              headers: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'The key/value pairs that will be sent as headers to the log-drain',
                  examples: [{ foo: 'bar' }],
                }),
              id: z
                .string()
                .openapi({ description: 'The log-drain id', examples: ['ld_GflD6EYyo7F4ViYS'] }),
              ownerId: z
                .string()
                .openapi({
                  description: 'The unique ID of the team the deployment belongs to',
                  examples: ['team_ZspSRT4ljIEEmMHgoDwKWDei'],
                }),
              projectIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The ID of the projects the deployment is associated with',
                  examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                }),
              secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'The secret to validate the log-drain payload' }),
              sources: z
                .array(
                  z
                    .enum(['static', 'lambda', 'build', 'edge', 'external'])
                    .openapi({
                      description: 'The log-drain defined sources',
                      examples: [['lambda', 'build']],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'The log-drain defined sources',
                  examples: [['lambda', 'build']],
                }),
              type: z
                .enum(['json', 'ndjson', 'syslog'])
                .openapi({
                  description: 'The log-drain defined delivery format',
                  examples: [['lambda', 'build']],
                }),
              url: z
                .string()
                .openapi({
                  description: 'A string with the URL of the log-drain',
                  examples: ['https://my-log-drain.com'],
                }),
            })
            .openapi({ required: ['createdAt', 'id', 'ownerId', 'type', 'deliveryFormat', 'url'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1LogDrainsIdRoute = createRoute({
  method: 'get',
  path: '/v1/log-drains/{id}',
  tags: ['logDrains'],
  summary: 'Retrieves a Configurable Log Drain',
  description:
    'Retrieves a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be accessed.',
  operationId: 'getConfigurableLogDrain',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              branch: z
                .string()
                .exactOptional()
                .openapi({ description: 'The branch to filter logs by', examples: ['main'] }),
              configurationId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the related integration configuration' }),
              createdAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the log-drain was created in in milliseconds',
                  examples: [1567024758130],
                }),
              deliveryFormat: z
                .enum(['json', 'ndjson', 'syslog'])
                .openapi({
                  description: 'The log-drain defined delivery format',
                  examples: [['lambda', 'build']],
                }),
              environment: z
                .enum(['preview', 'production'])
                .exactOptional()
                .openapi({
                  description: 'The environment to filter logs by',
                  examples: ['production'],
                }),
              headers: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Construct a type with a set of properties K of type T',
                  examples: [{ foo: 'bar' }],
                }),
              id: z
                .string()
                .openapi({ description: 'The log-drain id', examples: ['ld_GflD6EYyo7F4ViYS'] }),
              ownerId: z
                .string()
                .openapi({
                  description: 'The unique ID of the team the deployment belongs to',
                  examples: ['team_ZspSRT4ljIEEmMHgoDwKWDei'],
                }),
              projectIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The ID of the projects the deployment is associated with',
                  examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                }),
              sources: z
                .array(
                  z
                    .enum(['static', 'lambda', 'build', 'edge', 'external'])
                    .openapi({
                      description: 'The log-drain defined sources',
                      examples: [['lambda', 'build']],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'The log-drain defined sources',
                  examples: [['lambda', 'build']],
                }),
              type: z
                .enum(['json', 'ndjson', 'syslog'])
                .openapi({
                  description: 'The log-drain defined delivery format',
                  examples: [['lambda', 'build']],
                }),
              url: z
                .string()
                .openapi({
                  description: 'A string with the URL of the log-drain',
                  examples: ['https://my-log-drain.com'],
                }),
            })
            .openapi({ required: ['createdAt', 'id', 'ownerId', 'type', 'deliveryFormat', 'url'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1LogDrainsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/log-drains/{id}',
  tags: ['logDrains'],
  summary: 'Deletes a Configurable Log Drain',
  description:
    'Deletes a Configurable Log Drain. This endpoint must be called with a team AccessToken (integration OAuth2 clients are not allowed). Only log drains owned by the authenticated team can be deleted.',
  operationId: 'deleteConfigurableLogDrain',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: '' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1ProjectsIdOrNameEnvIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{idOrName}/env/{id}',
  tags: ['projects'],
  summary: 'Retrieve the decrypted value of an environment variable of a project by id',
  description: 'Retrieve the environment variable for a given project.',
  operationId: 'getProjectEnv',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID for the environment variable to get the decrypted value.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique ID for the environment variable to get the decrypted value.',
              type: 'string',
            },
          },
          description: 'The unique ID for the environment variable to get the decrypted value.',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              configurationId: z.string().nullable().exactOptional(),
              createdAt: z.number().exactOptional(),
              createdBy: z.string().nullable().exactOptional(),
              decrypted: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether `value` is decrypted.' }),
              edgeConfigId: z.string().nullable().exactOptional(),
              edgeConfigTokenId: z.string().nullable().exactOptional(),
              gitBranch: z.string().exactOptional(),
              id: z.string().exactOptional(),
              key: z.string(),
              target: z
                .xor([
                  z.array(
                    z.enum(['production', 'preview', 'development', 'preview', 'development']),
                  ),
                  z.enum(['production', 'preview', 'development', 'preview', 'development']),
                ])
                .exactOptional(),
              type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
              updatedAt: z.number().exactOptional(),
              updatedBy: z.string().nullable().exactOptional(),
              value: z.string(),
            })
            .openapi({ required: ['type', 'key', 'value'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The project could not be found' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1TeamsRoute = createRoute({
  method: 'post',
  path: '/v1/teams',
  tags: ['teams'],
  summary: 'Create a Team',
  description:
    'Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.',
  operationId: 'createTeam',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The desired name for the Team. It will be generated from the provided slug if nothing is provided',
                  examples: ['A Random Team'],
                }),
              slug: z
                .string()
                .max(48)
                .openapi({
                  description: 'The desired slug for the Team',
                  examples: ['a-random-team'],
                }),
            })
            .openapi({ required: ['slug'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The team was created successfuly',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'Id of the created team',
                  examples: ['team_nLlpyC6RE1qxqglFKbrMxlud'],
                }),
            })
            .openapi({ description: 'The team was created successfuly', required: ['id'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nThe slug is already in use',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1TeamsTeamIdRoute = createRoute({
  method: 'delete',
  path: '/v1/teams/{teamId}',
  tags: ['teams'],
  summary: 'Delete a Team',
  description:
    'Delete a team under your account. You need to send a `DELETE` request with the desired team `id`. An optional array of reasons for deletion may also be sent.',
  operationId: 'deleteTeam',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              reasons: z
                .array(
                  z
                    .strictObject({
                      description: z
                        .string()
                        .openapi({
                          description: 'Description of the reason why the team is being deleted.',
                        }),
                      slug: z
                        .string()
                        .openapi({
                          description:
                            'Idenitifier slug of the reason why the team is being deleted.',
                        }),
                    })
                    .openapi({
                      description: 'An object describing the reason why the team is being deleted.',
                      required: ['slug', 'description'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Optional array of objects that describe the reason why the team is being deleted.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The Team was successfuly deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'The ID of the deleted Team',
                  examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                }),
            })
            .openapi({ description: 'The Team was successfuly deleted', required: ['id'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: { description: '' },
    403: {
      description:
        "You do not have permission to access this resource.\nThe authenticated user can't access the team",
    },
    404: { description: 'The team was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1TeamsTeamIdInvitesInviteIdRoute = createRoute({
  method: 'delete',
  path: '/v1/teams/{teamId}/invites/{inviteId}',
  tags: ['teams'],
  summary: 'Delete a Team invite code',
  description: 'Delete an active Team invite code.',
  operationId: 'deleteTeamInviteCode',
  request: {
    params: z.object({
      inviteId: z
        .string()
        .openapi({
          param: {
            description: 'The Team invite code ID.',
            in: 'path',
            name: 'inviteId',
            required: true,
            schema: {
              description: 'The Team invite code ID.',
              examples: ['2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l'],
              type: 'string',
            },
          },
          description: 'The Team invite code ID.',
          examples: ['2wn2hudbr4chb1ecywo9dvzo7g9sscs6mzcz8htdde0txyom4l'],
        }),
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted Team invite code.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string().openapi({ description: 'ID of the team.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: {
      description:
        'You do not have permission to access this resource.\nInvite managed by directory sync\nNot authorized to access this team.',
    },
    404: { description: 'Team invite code not found.\nNo team found.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1TeamsTeamIdMembersRoute = createRoute({
  method: 'post',
  path: '/v1/teams/{teamId}/members',
  tags: ['teams'],
  summary: 'Invite a user',
  description:
    'Invite a user to join the team specified in the URL. The authenticated user needs to be an `OWNER` in order to successfully invoke this endpoint. The user can be specified with an email or an ID. If both email and ID are provided, ID will take priority.',
  operationId: 'inviteUserToTeam',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .email()
                .exactOptional()
                .openapi({
                  description: 'The email address of the user to invite',
                  examples: ['john@example.com'],
                }),
              role: z.any().exactOptional(),
              uid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The id of the user to invite',
                  examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The member was successfully added to the team',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description: 'The email of the invited user',
                  examples: ['john@user.co'],
                }),
              role: z
                .string()
                .openapi({ description: 'The role used for the invitation', examples: ['MEMBER'] }),
              uid: z
                .string()
                .openapi({
                  description: 'The ID of the invited user',
                  examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                }),
              username: z
                .string()
                .openapi({
                  description: 'The username of the invited user',
                  examples: ['john-doe'],
                }),
            })
            .openapi({
              description: 'The member was successfully added to the team',
              required: ['uid', 'username', 'email', 'role'],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nThe user is already a team member\nThe user already requested access to the team\nHobby teams are not allowed to add seats.\nThe team reached the maximum allowed amount of members',
    },
    403: {
      description:
        'You do not have permission to access this resource.\nThe authenticated user must be a team owner to perform the action',
    },
    404: { description: 'The team was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1TeamsTeamIdMembersTeamsJoinRoute = createRoute({
  method: 'post',
  path: '/v1/teams/{teamId}/members/teams/join',
  tags: ['teams'],
  summary: 'Join a team',
  description: 'Join a team with a provided invite code or team ID.',
  operationId: 'joinTeam',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              inviteCode: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The invite code to join the team.',
                  examples: ['fisdh38aejkeivn34nslfore9vjtn4ls'],
                }),
              teamId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The team ID.',
                  examples: ['team_3oNwMKqLHqEBh02CTPsrbNbe'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully joined a team.',
      content: {
        'application/json': {
          schema: z
            .object({
              from: z
                .string()
                .openapi({
                  description: 'The origin of how the user joined.',
                  examples: ['email'],
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the team the user joined.',
                  examples: ['My Team'],
                }),
              slug: z
                .string()
                .openapi({
                  description: 'The slug of the team the user joined.',
                  examples: ['my-team'],
                }),
              teamId: z
                .string()
                .openapi({
                  description: 'The ID of the team the user joined.',
                  examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                }),
            })
            .openapi({
              description: 'Successfully joined a team.',
              required: ['teamId', 'slug', 'name', 'from'],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nReached the max. amount of team members.',
    },
    401: { description: '' },
    402: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Team not found.' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1TeamsTeamIdMembersUidRoute = createRoute({
  method: 'delete',
  path: '/v1/teams/{teamId}/members/{uid}',
  tags: ['teams'],
  summary: 'Remove a Team Member',
  description:
    'Remove a Team Member from the Team, or dismiss a user that requested access, or leave a team.',
  operationId: 'removeTeamMember',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'The user ID of the member.',
            in: 'path',
            name: 'uid',
            required: true,
            schema: {
              description: 'The user ID of the member.',
              examples: ['ndlgr43fadlPyCtREAqxxdyFK'],
              type: 'string',
            },
          },
          description: 'The user ID of the member.',
          examples: ['ndlgr43fadlPyCtREAqxxdyFK'],
        }),
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully removed a member of the team.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string().openapi({ description: 'ID of the team.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request query is invalid.\nCannot leave the team as the only owner.',
    },
    403: {
      description:
        'You do not have permission to access this resource.\nNot authorized to update the team.',
    },
    404: { description: 'A user with the specified ID does not exist.\nNo team found.' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV1TeamsTeamIdMembersUidRoute = createRoute({
  method: 'patch',
  path: '/v1/teams/{teamId}/members/{uid}',
  tags: ['teams'],
  summary: 'Update a Team Member',
  description:
    'Update the membership of a Team Member on the Team specified by `teamId`, such as changing the _role_ of the member, or confirming a request to join the Team for an unconfirmed member. The authenticated user must be an `OWNER` of the Team.',
  operationId: 'updateTeamMember',
  request: {
    params: z.object({
      uid: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the member.',
            in: 'path',
            name: 'uid',
            required: true,
            schema: {
              description: 'The ID of the member.',
              examples: ['ndfasllgPyCtREAqxxdyFKb'],
              type: 'string',
            },
          },
          description: 'The ID of the member.',
          examples: ['ndfasllgPyCtREAqxxdyFKb'],
        }),
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              confirmed: z
                .literal(true)
                .exactOptional()
                .openapi({
                  description: 'Accept a user who requested access to the team.',
                  examples: [true],
                }),
              joinedFrom: z
                .strictObject({ ssoUserId: z.null().nullable().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              role: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The role in the team of the member.',
                  examples: [['MEMBER', 'VIEWER']],
                  default: ['MEMBER', 'VIEWER'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the membership.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string().openapi({ description: 'ID of the team.' }) })
            .openapi({ required: ['id'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nCannot disconnect SSO from a Team member that does not have a SSO connection.\nCannot confirm a member that is already confirmed.\nCannot confirm a member that did not request access.',
    },
    401: {
      description:
        'Team members can only be updated by an owner, or by the authenticated user if they are only disconnecting their SAML connection to the Team.',
    },
    402: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
    404: {
      description:
        'The provided user is not part of this team.\nA user with the specified ID does not exist.\nTeam not found.',
    },
  },
  security: [{ bearerToken: [] }],
})

export const postV1TeamsTeamIdRequestRoute = createRoute({
  method: 'post',
  path: '/v1/teams/{teamId}/request',
  tags: ['teams'],
  summary: 'Request access to a team',
  description:
    'Request access to a team as a member. An owner has to approve the request. Only 10 users can request access to a team at the same time.',
  operationId: 'requestAccessToTeam',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              joinedFrom: z
                .strictObject({
                  commitId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The commit sha if the origin is a git provider.',
                      examples: ['f498d25d8bd654b578716203be73084b31130cd7'],
                    }),
                  gitUserId: z
                    .xor([z.string(), z.number()])
                    .exactOptional()
                    .openapi({
                      description: 'The ID of the Git account of the user who requests access.',
                      examples: [103053343],
                    }),
                  gitUserLogin: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The login name for the Git account of the user who requests access.',
                      examples: ['jane-doe'],
                    }),
                  origin: z
                    .enum(['import', 'teams', 'github', 'gitlab', 'bitbucket', 'feedback'])
                    .openapi({ description: 'The origin of the request.', examples: ['github'] }),
                  repoId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The ID of the repository for the given Git provider.',
                      examples: ['67753070'],
                    }),
                  repoPath: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The path to the repository for the given Git provider.',
                      examples: ['jane-doe/example'],
                    }),
                })
                .openapi({ required: ['origin'] }),
            })
            .openapi({ required: ['joinedFrom'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfuly requested access to the team.',
      content: {
        'application/json': {
          schema: z
            .object({
              accessRequestedAt: z.number().exactOptional(),
              bitbucket: z
                .object({ login: z.string().exactOptional() })
                .nullable()
                .openapi({ required: [] }),
              confirmed: z.boolean().exactOptional(),
              github: z
                .object({ login: z.string().exactOptional() })
                .nullable()
                .openapi({ required: [] }),
              gitlab: z
                .object({ login: z.string().exactOptional() })
                .nullable()
                .openapi({ required: [] }),
              joinedFrom: z
                .object({
                  commitId: z.string().exactOptional(),
                  dsyncConnectedAt: z.number().exactOptional(),
                  dsyncUserId: z.string().exactOptional(),
                  gitUserId: z.xor([z.string(), z.number()]).exactOptional(),
                  gitUserLogin: z.string().exactOptional(),
                  idpUserId: z.string().exactOptional(),
                  origin: z.enum([
                    'import',
                    'teams',
                    'github',
                    'gitlab',
                    'bitbucket',
                    'feedback',
                    'mail',
                    'link',
                    'saml',
                    'dsync',
                  ]),
                  repoId: z.string().exactOptional(),
                  repoPath: z.string().exactOptional(),
                  ssoConnectedAt: z.number().exactOptional(),
                  ssoUserId: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['origin'] }),
              teamName: z.string(),
              teamSlug: z.string(),
            })
            .openapi({ required: ['teamSlug', 'teamName', 'github', 'gitlab', 'bitbucket'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    401: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The team was not found.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1TeamsTeamIdRequestUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/teams/{teamId}/request/{userId}',
  tags: ['teams'],
  summary: 'Get access request status',
  description:
    "Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.",
  operationId: 'getTeamAccessRequest',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              accessRequestedAt: z
                .number()
                .openapi({
                  description:
                    'Timestamp in milliseconds when the user requested access to the team.',
                  examples: [1588720733602],
                }),
              bitbucket: z
                .object({ login: z.string().exactOptional() })
                .nullable()
                .openapi({ description: 'Map of the connected Bitbucket account.', required: [] }),
              confirmed: z
                .boolean()
                .openapi({
                  description:
                    "Current status of the membership. Will be `true` if confirmed, if pending it'll be `false`.",
                  examples: [false],
                }),
              github: z
                .object({ login: z.string().exactOptional() })
                .nullable()
                .openapi({ description: 'Map of the connected GitHub account.', required: [] }),
              gitlab: z
                .object({ login: z.string().exactOptional() })
                .nullable()
                .openapi({ description: 'Map of the connected GitLab account.', required: [] }),
              joinedFrom: z
                .object({
                  commitId: z.string().exactOptional(),
                  dsyncConnectedAt: z.number().exactOptional(),
                  dsyncUserId: z.string().exactOptional(),
                  gitUserId: z.xor([z.string(), z.number()]).exactOptional(),
                  gitUserLogin: z.string().exactOptional(),
                  idpUserId: z.string().exactOptional(),
                  origin: z.enum([
                    'import',
                    'mail',
                    'link',
                    'teams',
                    'github',
                    'gitlab',
                    'bitbucket',
                    'saml',
                    'dsync',
                    'feedback',
                  ]),
                  repoId: z.string().exactOptional(),
                  repoPath: z.string().exactOptional(),
                  ssoConnectedAt: z.number().exactOptional(),
                  ssoUserId: z.string().exactOptional(),
                })
                .openapi({
                  description: 'A map that describes the origin from where the user joined.',
                  required: ['origin'],
                }),
              teamName: z
                .string()
                .openapi({ description: 'The name of the team.', examples: ['My Team'] }),
              teamSlug: z
                .string()
                .openapi({ description: 'The slug of the team.', examples: ['my-team'] }),
            })
            .openapi({
              required: [
                'teamSlug',
                'teamName',
                'confirmed',
                'joinedFrom',
                'accessRequestedAt',
                'github',
                'gitlab',
                'bitbucket',
              ],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request query is invalid.\nUser is already a confirmed member of the team and did not request access. Only visible when the authenticated user does have access to the team.',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: "The provided user doesn't have a membership.\nTeam was not found." },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1UserRoute = createRoute({
  method: 'delete',
  path: '/v1/user',
  tags: ['user'],
  summary: 'Delete User Account',
  description:
    'Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.',
  operationId: 'requestDelete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              reasons: z
                .array(
                  z
                    .strictObject({
                      description: z
                        .string()
                        .openapi({
                          description:
                            'Description of the reason why the User account is being deleted.',
                        }),
                      slug: z
                        .string()
                        .openapi({
                          description:
                            'Idenitifier slug of the reason why the User account is being deleted.',
                        }),
                    })
                    .openapi({
                      description:
                        'An object describing the reason why the User account is being deleted.',
                      required: ['slug', 'description'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Optional array of objects that describe the reason why the User account is being deleted.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    202: {
      description:
        'Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'Email address of the User who has initiated deletion.' }),
              id: z
                .string()
                .openapi({
                  description: 'Unique identifier of the User who has initiated deletion.',
                }),
              message: z
                .string()
                .openapi({
                  description: 'User deletion progress status.',
                  examples: ['Verification email sent'],
                }),
            })
            .openapi({ required: ['id', 'email', 'message'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1WebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/webhooks',
  tags: ['webhooks'],
  summary: 'Get a list of webhooks',
  description: 'Get a list of webhooks',
  operationId: 'getWebhooks',
  request: {
    query: z.object({
      projectId: z
        .string()
        .regex(/^[a-zA-z0-9_]+$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'projectId',
            schema: { pattern: '^[a-zA-z0-9_]+$', type: 'string' },
            required: false,
          },
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.xor([
            z.array(
              z
                .object({
                  createdAt: z
                    .number()
                    .openapi({
                      description:
                        'A number containing the date when the webhook was created in in milliseconds',
                      examples: [1567024758130],
                    }),
                  events: z
                    .array(
                      z
                        .enum([
                          'domain.created',
                          'deployment.created',
                          'deployment.error',
                          'deployment.canceled',
                          'deployment.succeeded',
                          'deployment.ready',
                          'deployment.check-rerequested',
                          'integration-configuration.permission-upgraded',
                          'integration-configuration.removed',
                          'integration-configuration.scope-change-confirmed',
                          'project.created',
                          'project.removed',
                          'deployment-checks-completed',
                          'deployment-ready',
                          'deployment-prepared',
                          'deployment-error',
                          'deployment-check-rerequested',
                          'deployment-canceled',
                          'project-created',
                          'project-removed',
                          'domain-created',
                          'deployment',
                          'integration-configuration-permission-updated',
                          'integration-configuration-removed',
                          'integration-configuration-scope-change-confirmed',
                        ])
                        .openapi({
                          description: 'The webhooks events',
                          examples: ['deployment.created'],
                        }),
                    )
                    .openapi({
                      description: 'The webhooks events',
                      examples: ['deployment.created'],
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The webhook id',
                      examples: ['account_hook_GflD6EYyo7F4ViYS'],
                    }),
                  ownerId: z
                    .string()
                    .openapi({
                      description: 'The unique ID of the team the webhook belongs to',
                      examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                    }),
                  projectIds: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'The ID of the projects the webhook is associated with',
                      examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                    }),
                  projectsMetadata: z
                    .array(
                      z
                        .object({
                          framework: z
                            .enum([
                              'blitzjs',
                              'nextjs',
                              'gatsby',
                              'remix',
                              'astro',
                              'hexo',
                              'eleventy',
                              'docusaurus-2',
                              'docusaurus',
                              'preact',
                              'solidstart',
                              'dojo',
                              'ember',
                              'vue',
                              'scully',
                              'ionic-angular',
                              'angular',
                              'polymer',
                              'svelte',
                              'sveltekit',
                              'sveltekit-1',
                              'ionic-react',
                              'create-react-app',
                              'gridsome',
                              'umijs',
                              'sapper',
                              'saber',
                              'stencil',
                              'nuxtjs',
                              'redwoodjs',
                              'hugo',
                              'jekyll',
                              'brunch',
                              'middleman',
                              'zola',
                              'hydrogen',
                              'vite',
                              'vitepress',
                              'vuepress',
                              'parcel',
                              'sanity',
                            ])
                            .nullable()
                            .exactOptional(),
                          id: z.string(),
                          latestDeployment: z.string().exactOptional(),
                          name: z.string(),
                        })
                        .openapi({ required: ['id', 'name'] }),
                    )
                    .nullable(),
                  updatedAt: z
                    .number()
                    .openapi({
                      description:
                        'A number containing the date when the webhook was updated in in milliseconds',
                      examples: [1567024758130],
                    }),
                  url: z
                    .string()
                    .openapi({
                      description: 'A string with the URL of the webhook',
                      examples: ['https://my-webhook.com'],
                    }),
                })
                .openapi({
                  required: [
                    'projectsMetadata',
                    'events',
                    'id',
                    'url',
                    'ownerId',
                    'createdAt',
                    'updatedAt',
                  ],
                }),
            ),
            z.array(
              z
                .object({
                  createdAt: z
                    .number()
                    .openapi({
                      description:
                        'A number containing the date when the webhook was created in in milliseconds',
                      examples: [1567024758130],
                    }),
                  events: z
                    .array(
                      z
                        .enum([
                          'domain.created',
                          'deployment.created',
                          'deployment.error',
                          'deployment.canceled',
                          'deployment.succeeded',
                          'deployment.ready',
                          'deployment.check-rerequested',
                          'integration-configuration.permission-upgraded',
                          'integration-configuration.removed',
                          'integration-configuration.scope-change-confirmed',
                          'project.created',
                          'project.removed',
                          'deployment-checks-completed',
                          'deployment-ready',
                          'deployment-prepared',
                          'deployment-error',
                          'deployment-check-rerequested',
                          'deployment-canceled',
                          'project-created',
                          'project-removed',
                          'domain-created',
                          'deployment',
                          'integration-configuration-permission-updated',
                          'integration-configuration-removed',
                          'integration-configuration-scope-change-confirmed',
                        ])
                        .openapi({
                          description: 'The webhooks events',
                          examples: ['deployment.created'],
                        }),
                    )
                    .openapi({
                      description: 'The webhooks events',
                      examples: ['deployment.created'],
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The webhook id',
                      examples: ['account_hook_GflD6EYyo7F4ViYS'],
                    }),
                  ownerId: z
                    .string()
                    .openapi({
                      description: 'The unique ID of the team the webhook belongs to',
                      examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                    }),
                  projectIds: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description: 'The ID of the projects the webhook is associated with',
                      examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                    }),
                  updatedAt: z
                    .number()
                    .openapi({
                      description:
                        'A number containing the date when the webhook was updated in in milliseconds',
                      examples: [1567024758130],
                    }),
                  url: z
                    .string()
                    .openapi({
                      description: 'A string with the URL of the webhook',
                      examples: ['https://my-webhook.com'],
                    }),
                })
                .openapi({
                  required: ['events', 'id', 'url', 'ownerId', 'createdAt', 'updatedAt'],
                }),
            ),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV1WebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/webhooks',
  tags: ['webhooks'],
  summary: 'Creates a webhook',
  description: 'Creates a webhook',
  operationId: 'createWebhook',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              events: z
                .array(
                  z.enum([
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DomainCreate',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCreate',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentErro',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCancele',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentSucceede',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentRead',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.DeploymentCheckRerequeste',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationPermissionUpgrade',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationRemove',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.IntegrationConfigurationScopeChangeConfirme',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectCreate',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.ProjectRemove',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentChecksComplete',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentRead',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentPrepare',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentErro',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCheckRerequeste',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymentCancele',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectCreate',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyProjectRemove',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDomainCreate',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyDeploymen',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationPermissionUpdate',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationRemove',
                    'mport("/vercel/path0/utils/webhooks/webhooks/types").WebhookName.LegacyIntegrationConfigurationScopeChangeConfirme',
                  ]),
                )
                .min(1),
              projectIds: z
                .array(z.string().regex(/^[a-zA-z0-9_]+$/))
                .min(1)
                .max(50)
                .exactOptional(),
              url: z.url().regex(/^https?:\/\//),
            })
            .openapi({ required: ['url', 'events'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the webhook was created in in milliseconds',
                  examples: [1567024758130],
                }),
              events: z
                .array(
                  z
                    .enum([
                      'domain.created',
                      'deployment.created',
                      'deployment.error',
                      'deployment.canceled',
                      'deployment.succeeded',
                      'deployment.ready',
                      'deployment.check-rerequested',
                      'integration-configuration.permission-upgraded',
                      'integration-configuration.removed',
                      'integration-configuration.scope-change-confirmed',
                      'project.created',
                      'project.removed',
                      'deployment-checks-completed',
                      'deployment-ready',
                      'deployment-prepared',
                      'deployment-error',
                      'deployment-check-rerequested',
                      'deployment-canceled',
                      'project-created',
                      'project-removed',
                      'domain-created',
                      'deployment',
                      'integration-configuration-permission-updated',
                      'integration-configuration-removed',
                      'integration-configuration-scope-change-confirmed',
                    ])
                    .openapi({
                      description: 'The webhooks events',
                      examples: ['deployment.created'],
                    }),
                )
                .openapi({ description: 'The webhooks events', examples: ['deployment.created'] }),
              id: z
                .string()
                .openapi({
                  description: 'The webhook id',
                  examples: ['account_hook_GflD6EYyo7F4ViYS'],
                }),
              ownerId: z
                .string()
                .openapi({
                  description: 'The unique ID of the team the webhook belongs to',
                  examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                }),
              projectIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The ID of the projects the webhook is associated with',
                  examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                }),
              secret: z
                .string()
                .openapi({ description: 'The webhook secret used to sign the payload' }),
              updatedAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the webhook was updated in in milliseconds',
                  examples: [1567024758130],
                }),
              url: z
                .string()
                .openapi({
                  description: 'A string with the URL of the webhook',
                  examples: ['https://my-webhook.com'],
                }),
            })
            .openapi({
              required: ['secret', 'events', 'id', 'url', 'ownerId', 'createdAt', 'updatedAt'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV1WebhooksIdRoute = createRoute({
  method: 'get',
  path: '/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Get a webhook',
  description: 'Get a webhook',
  operationId: 'getWebhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              createdAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the webhook was created in in milliseconds',
                  examples: [1567024758130],
                }),
              events: z
                .array(
                  z
                    .enum([
                      'domain.created',
                      'deployment.created',
                      'deployment.error',
                      'deployment.canceled',
                      'deployment.succeeded',
                      'deployment.ready',
                      'deployment.check-rerequested',
                      'integration-configuration.permission-upgraded',
                      'integration-configuration.removed',
                      'integration-configuration.scope-change-confirmed',
                      'project.created',
                      'project.removed',
                      'deployment-checks-completed',
                      'deployment-ready',
                      'deployment-prepared',
                      'deployment-error',
                      'deployment-check-rerequested',
                      'deployment-canceled',
                      'project-created',
                      'project-removed',
                      'domain-created',
                      'deployment',
                      'integration-configuration-permission-updated',
                      'integration-configuration-removed',
                      'integration-configuration-scope-change-confirmed',
                    ])
                    .openapi({
                      description: 'The webhooks events',
                      examples: ['deployment.created'],
                    }),
                )
                .openapi({ description: 'The webhooks events', examples: ['deployment.created'] }),
              id: z
                .string()
                .openapi({
                  description: 'The webhook id',
                  examples: ['account_hook_GflD6EYyo7F4ViYS'],
                }),
              ownerId: z
                .string()
                .openapi({
                  description: 'The unique ID of the team the webhook belongs to',
                  examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                }),
              projectIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The ID of the projects the webhook is associated with',
                  examples: [['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB']],
                }),
              updatedAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the webhook was updated in in milliseconds',
                  examples: [1567024758130],
                }),
              url: z
                .string()
                .openapi({
                  description: 'A string with the URL of the webhook',
                  examples: ['https://my-webhook.com'],
                }),
            })
            .openapi({ required: ['events', 'id', 'url', 'ownerId', 'createdAt', 'updatedAt'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV1WebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Deletes a webhook',
  description: 'Deletes a webhook',
  operationId: 'deleteWebhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: '' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postV10ProjectsIdOrNameEnvRoute = createRoute({
  method: 'post',
  path: '/v10/projects/{idOrName}/env',
  tags: ['projects'],
  summary: 'Create one or more environment variables',
  description:
    'Create one ore more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL.',
  operationId: 'createProjectEnv',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                gitBranch: z
                  .string()
                  .max(250)
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'The git branch of the environment variable',
                    examples: ['feature-1'],
                  }),
                key: z
                  .string()
                  .openapi({
                    description: 'The name of the environment variable',
                    examples: ['API_URL'],
                  }),
                target: z
                  .array(
                    z.enum([
                      'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio',
                      'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe',
                      'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen',
                    ]),
                  )
                  .openapi({
                    description: 'The target environment of the environment variable',
                    examples: [['production', 'preview']],
                  }),
                type: z
                  .enum(['system', 'secret', 'encrypted', 'plain', 'sensitive'])
                  .openapi({
                    description: 'The type of environment variable',
                    examples: ['plain'],
                  }),
                value: z
                  .string()
                  .openapi({
                    description: 'The value of the environment variable',
                    examples: ['https://api.vercel.com'],
                  }),
              })
              .openapi({ required: ['key', 'value', 'type', 'target'] }),
            z.array(
              z
                .object({
                  gitBranch: z
                    .string()
                    .max(250)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'The git branch of the environment variable',
                      examples: ['feature-1'],
                    }),
                  key: z
                    .string()
                    .openapi({
                      description: 'The name of the environment variable',
                      examples: ['API_URL'],
                    }),
                  target: z
                    .array(
                      z.enum([
                        'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio',
                        'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe',
                        'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen',
                      ]),
                    )
                    .openapi({
                      description: 'The target environment of the environment variable',
                      examples: [['production', 'preview']],
                    }),
                  type: z
                    .enum(['system', 'secret', 'encrypted', 'plain', 'sensitive'])
                    .openapi({
                      description: 'The type of environment variable',
                      examples: ['plain'],
                    }),
                  value: z
                    .string()
                    .openapi({
                      description: 'The value of the environment variable',
                      examples: ['https://api.vercel.com'],
                    }),
                })
                .openapi({ required: ['key', 'value', 'type', 'target'] }),
            ),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The environment variable was created successfully',
      content: {
        'application/json': {
          schema: z.xor([
            z.array(
              z
                .object({
                  configurationId: z.string().nullable().exactOptional(),
                  createdAt: z.number().exactOptional(),
                  createdBy: z.string().nullable().exactOptional(),
                  decrypted: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether `value` is decrypted.' }),
                  edgeConfigId: z.string().nullable().exactOptional(),
                  edgeConfigTokenId: z.string().nullable().exactOptional(),
                  gitBranch: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  key: z.string(),
                  target: z
                    .xor([
                      z.array(
                        z.enum([
                          'production',
                          'preview',
                          'development',
                          'preview',
                          'development',
                          'preview',
                          'development',
                        ]),
                      ),
                      z.enum([
                        'production',
                        'preview',
                        'development',
                        'preview',
                        'development',
                        'preview',
                        'development',
                      ]),
                    ])
                    .exactOptional(),
                  type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                  updatedAt: z.number().exactOptional(),
                  updatedBy: z.string().nullable().exactOptional(),
                  value: z.string(),
                })
                .openapi({ required: ['type', 'key', 'value'] }),
            ),
            z
              .object({
                configurationId: z.string().nullable().exactOptional(),
                createdAt: z.number().exactOptional(),
                createdBy: z.string().nullable().exactOptional(),
                decrypted: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Whether `value` is decrypted.' }),
                edgeConfigId: z.string().nullable().exactOptional(),
                edgeConfigTokenId: z.string().nullable().exactOptional(),
                gitBranch: z.string().exactOptional(),
                id: z.string().exactOptional(),
                key: z.string().exactOptional(),
                system: z.boolean().exactOptional(),
                target: z
                  .xor([
                    z.array(
                      z.enum([
                        'production',
                        'preview',
                        'development',
                        'preview',
                        'development',
                        'preview',
                        'development',
                      ]),
                    ),
                    z.enum([
                      'production',
                      'preview',
                      'development',
                      'preview',
                      'development',
                      'preview',
                      'development',
                    ]),
                  ])
                  .exactOptional(),
                type: z
                  .enum(['secret', 'system', 'encrypted', 'plain', 'sensitive'])
                  .exactOptional(),
                updatedAt: z.number().exactOptional(),
                updatedBy: z.string().nullable().exactOptional(),
                value: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    201: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              created: z.xor([
                z
                  .object({
                    configurationId: z.string().nullable().exactOptional(),
                    createdAt: z.number().exactOptional(),
                    createdBy: z.string().nullable().exactOptional(),
                    decrypted: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether `value` is decrypted.' }),
                    edgeConfigId: z.string().nullable().exactOptional(),
                    edgeConfigTokenId: z.string().nullable().exactOptional(),
                    gitBranch: z.string().exactOptional(),
                    id: z.string().exactOptional(),
                    key: z.string().exactOptional(),
                    system: z.boolean().exactOptional(),
                    target: z
                      .xor([
                        z.array(
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ),
                        z.enum([
                          'production',
                          'preview',
                          'development',
                          'preview',
                          'development',
                          'preview',
                          'development',
                        ]),
                      ])
                      .exactOptional(),
                    type: z
                      .enum(['secret', 'system', 'encrypted', 'plain', 'sensitive'])
                      .exactOptional(),
                    updatedAt: z.number().exactOptional(),
                    updatedBy: z.string().nullable().exactOptional(),
                    value: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
                z.array(
                  z
                    .object({
                      configurationId: z.string().nullable().exactOptional(),
                      createdAt: z.number().exactOptional(),
                      createdBy: z.string().nullable().exactOptional(),
                      decrypted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether `value` is decrypted.' }),
                      edgeConfigId: z.string().nullable().exactOptional(),
                      edgeConfigTokenId: z.string().nullable().exactOptional(),
                      gitBranch: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      key: z.string().exactOptional(),
                      system: z.boolean().exactOptional(),
                      target: z
                        .xor([
                          z.array(
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ),
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ])
                        .exactOptional(),
                      type: z
                        .enum(['secret', 'system', 'encrypted', 'plain', 'sensitive'])
                        .exactOptional(),
                      updatedAt: z.number().exactOptional(),
                      updatedBy: z.string().nullable().exactOptional(),
                      value: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                ),
              ]),
              failed: z.array(
                z
                  .object({
                    error: z
                      .object({
                        action: z.string().exactOptional(),
                        code: z.string(),
                        envVarId: z.string().exactOptional(),
                        envVarKey: z.string().exactOptional(),
                        gitBranch: z.string().exactOptional(),
                        key: z.string().exactOptional(),
                        link: z.string().exactOptional(),
                        message: z.string(),
                        project: z.string().exactOptional(),
                        target: z
                          .xor([
                            z.array(
                              z.enum([
                                'production',
                                'preview',
                                'development',
                                'preview',
                                'development',
                                'preview',
                                'development',
                              ]),
                            ),
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ])
                          .exactOptional(),
                        value: z
                          .xor([
                            z.string(),
                            z.array(
                              z.enum([
                                'production',
                                'preview',
                                'development',
                                'preview',
                                'development',
                                'preview',
                                'development',
                              ]),
                            ),
                          ])
                          .exactOptional(),
                      })
                      .openapi({ required: ['code', 'message'] }),
                  })
                  .openapi({ required: ['error'] }),
              ),
            })
            .openapi({ required: ['created', 'failed'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'You do not have permission to access this resource.\nThe environment variable cannot be created because it already exists\nAdditional permissions are required to create production environment variables',
    },
    404: { description: 'The project could not be found' },
    409: {
      description:
        'The project is being transfered and creating an environment variable is not possible',
    },
  },
  security: [{ bearerToken: [] }],
})

export const getV11DeploymentsDeploymentIdBuildsRoute = createRoute({
  method: 'get',
  path: '/v11/deployments/{deploymentId}/builds',
  tags: ['deployments'],
  summary: 'List Deployment Builds',
  description: "Retrieves the list of builds given their deployment's unique identifier.",
  operationId: 'listDeploymentBuilds',
  request: {
    params: z.object({
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment unique identifier',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: { description: 'The deployment unique identifier', type: 'string' },
          },
          description: 'The deployment unique identifier',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              builds: z.array(
                z
                  .object({
                    config: z
                      .object({
                        distDir: z.string().exactOptional(),
                        forceBuildIn: z.string().exactOptional(),
                        reuseWorkPathFrom: z.string().exactOptional(),
                        zeroConfig: z.boolean().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description: "An object that contains the Build's configuration",
                        examples: [{ zeroConfig: true }],
                        required: [],
                      }),
                    copiedFrom: z.string().exactOptional(),
                    createdAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'The time at which the Build was created',
                        examples: [1567071524208],
                      }),
                    createdIn: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The region where the Build was first created',
                        examples: ['sfo1'],
                      }),
                    deployedAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'The time at which the Build was deployed',
                        examples: [1567071598563],
                      }),
                    deploymentId: z
                      .string()
                      .openapi({
                        description: 'The unique identifier of the deployment',
                        examples: ['dpl_BRGyoU2Jzzwx7myBnqv3xjRDD2GnHTwUWyFybnrUvjDD'],
                      }),
                    entrypoint: z
                      .string()
                      .openapi({
                        description: 'The entrypoint of the deployment',
                        examples: ['api/index.js'],
                      }),
                    fingerprint: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'If the Build uses the `@vercel/static` Runtime, it contains a hashed string of all outputs',
                        examples: [null],
                      }),
                    id: z
                      .string()
                      .openapi({
                        description: 'The unique identifier of the Build',
                        examples: ['bld_q5fj68jh7eewfe8'],
                      }),
                    output: z
                      .array(
                        z
                          .object({
                            digest: z.string().openapi({ description: 'The SHA1 of the file' }),
                            edge: z
                              .object({
                                regions: z
                                  .array(z.string())
                                  .nullable()
                                  .openapi({
                                    description:
                                      'The regions where the edge function will be invoked. Only exists if the edge function as a regional edge function, see: https://vercel.com/docs/concepts/edge-network/regions#setting-edge-function-regions',
                                  }),
                              })
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description: 'Exists if the output is an edge function.',
                                required: ['regions'],
                              }),
                            lambda: z
                              .object({
                                deployedTo: z.array(z.string()),
                                functionName: z.string(),
                                layers: z.array(z.string()).exactOptional(),
                                memorySize: z.number().exactOptional(),
                                timeout: z.number().exactOptional(),
                              })
                              .nullable()
                              .exactOptional()
                              .openapi({
                                description:
                                  'If the output is a Serverless Function, an object containing the name, location and memory size of the function',
                                required: ['functionName', 'deployedTo'],
                              }),
                            mode: z.number().openapi({ description: 'The POSIX file permissions' }),
                            path: z
                              .string()
                              .openapi({
                                description: 'The absolute path of the file or Serverless Function',
                              }),
                            size: z
                              .number()
                              .exactOptional()
                              .openapi({ description: 'The size of the file in bytes' }),
                            type: z
                              .enum(['lambda', 'file', 'edge'])
                              .exactOptional()
                              .openapi({ description: 'The type of the output' }),
                          })
                          .openapi({
                            description:
                              'A list of outputs for the Build that can be either Serverless Functions or static files',
                            required: ['path', 'digest', 'mode'],
                          }),
                      )
                      .openapi({
                        description:
                          'A list of outputs for the Build that can be either Serverless Functions or static files',
                      }),
                    readyState: z
                      .enum([
                        'BUILDING',
                        'ERROR',
                        'INITIALIZING',
                        'QUEUED',
                        'READY',
                        'CANCELED',
                        'UPLOADING',
                        'DEPLOYING',
                        'ARCHIVED',
                      ])
                      .openapi({
                        description:
                          'The state of the deployment depending on the process of deploying, or if it is ready or in an error state',
                        examples: ['READY'],
                      }),
                    readyStateAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'The time at which the Build state was last modified',
                        examples: [1567024758130],
                      }),
                    scheduledAt: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'The time at which the Build was scheduled to be built',
                        examples: [1567024756543],
                      }),
                    use: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The Runtime the Build used to generate the output',
                        examples: ['@vercel/node'],
                      }),
                  })
                  .openapi({
                    description: 'An object representing a Build on Vercel',
                    required: ['id', 'deploymentId', 'entrypoint', 'readyState', 'output'],
                  }),
              ),
            })
            .openapi({ required: ['builds'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV12DeploymentsIdCancelRoute = createRoute({
  method: 'patch',
  path: '/v12/deployments/{id}/cancel',
  tags: ['deployments'],
  summary: 'Cancel a deployment',
  description:
    'This endpoint allows you to cancel a deployment which is currently building, by supplying its `id` in the URL.',
  operationId: 'cancelDeployment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier of the deployment.',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique identifier of the deployment.',
              examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
              type: 'string',
            },
          },
          description: 'The unique identifier of the deployment.',
          examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .array(z.string())
                .openapi({
                  description:
                    'A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation',
                  examples: [[]],
                }),
              aliasAssigned: z
                .boolean()
                .openapi({
                  description:
                    'A boolean that will be true when the aliases from the alias property were assigned successfully',
                  examples: [true],
                }),
              aliasAssignedAt: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
              aliasError: z
                .object({ code: z.string(), message: z.string() })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`',
                  examples: [null],
                  required: ['code', 'message'],
                }),
              aliasFinal: z.string().nullable().exactOptional(),
              aliasWarning: z
                .object({
                  action: z.string().exactOptional(),
                  code: z.string(),
                  link: z.string().exactOptional(),
                  message: z.string(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: ['code', 'message'] }),
              automaticAliases: z.array(z.string()).exactOptional(),
              bootedAt: z.number(),
              build: z
                .object({
                  env: z
                    .array(z.string())
                    .openapi({
                      description:
                        'The keys of the environment variables that were assigned during the build phase.',
                      examples: [['MY_ENV_VAR']],
                    }),
                })
                .openapi({ required: ['env'] }),
              buildErrorAt: z.number().exactOptional(),
              buildingAt: z.number(),
              builds: z
                .array(
                  z
                    .object({
                      config: z
                        .record(
                          z.string(),
                          z
                            .string()
                            .openapi({
                              description: "An object containing the deployment's metadata",
                              examples: [{ foo: 'bar' }],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: "An object containing the deployment's metadata",
                          examples: [{ foo: 'bar' }],
                        }),
                      src: z.string().exactOptional(),
                      use: z.string(),
                    })
                    .openapi({ required: ['use'] }),
                )
                .exactOptional(),
              canceledAt: z.number().exactOptional(),
              checksConclusion: z
                .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                .exactOptional(),
              checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
              createdAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the deployment was created in milliseconds',
                  examples: [1540257589405],
                }),
              createdIn: z
                .string()
                .openapi({
                  description: 'The region where the deployment was first created',
                  examples: ['sfo1'],
                }),
              creator: z
                .object({
                  uid: z
                    .string()
                    .openapi({
                      description: 'The ID of the user that created the deployment',
                      examples: ['96SnxkFiMyVKsK3pnoHfx3Hz'],
                    }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The username of the user that created the deployment',
                      examples: ['john-doe'],
                    }),
                })
                .openapi({
                  description: 'Information about the deployment creator',
                  required: ['uid'],
                }),
              env: z
                .array(z.string())
                .openapi({
                  description:
                    'The keys of the environment variables that were assigned during runtime',
                  examples: [['MY_SECRET']],
                }),
              errorCode: z.string().exactOptional(),
              errorLink: z.string().exactOptional(),
              errorMessage: z.string().nullable().exactOptional(),
              errorStep: z.string().exactOptional(),
              functions: z
                .record(
                  z.string(),
                  z
                    .object({
                      excludeFiles: z.string().exactOptional(),
                      includeFiles: z.string().exactOptional(),
                      maxDuration: z.number().exactOptional(),
                      memory: z.number().exactOptional(),
                      runtime: z.string().exactOptional(),
                    })
                    .openapi({
                      description: 'An object used to configure your Serverless Functions',
                      examples: [{ 'api/test.js': { memory: 3008 } }],
                      required: [],
                    }),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'An object used to configure your Serverless Functions',
                  examples: [{ 'api/test.js': { memory: 3008 } }],
                }),
              gitRepo: z
                .xor([
                  z
                    .object({
                      defaultBranch: z.string(),
                      name: z.string(),
                      namespace: z.string(),
                      ownerType: z.enum(['user', 'team']),
                      path: z.string(),
                      private: z.boolean(),
                      projectId: z.number(),
                      type: z.literal('gitlab'),
                      url: z.string(),
                    })
                    .openapi({
                      required: [
                        'namespace',
                        'projectId',
                        'type',
                        'url',
                        'path',
                        'defaultBranch',
                        'name',
                        'private',
                        'ownerType',
                      ],
                    }),
                  z
                    .object({
                      defaultBranch: z.string(),
                      name: z.string(),
                      org: z.string(),
                      ownerType: z.enum(['user', 'team']),
                      path: z.string(),
                      private: z.boolean(),
                      repo: z.string(),
                      repoId: z.number(),
                      repoOwnerId: z.string(),
                      type: z.literal('github'),
                    })
                    .openapi({
                      required: [
                        'org',
                        'repo',
                        'repoId',
                        'type',
                        'repoOwnerId',
                        'path',
                        'defaultBranch',
                        'name',
                        'private',
                        'ownerType',
                      ],
                    }),
                  z
                    .object({
                      defaultBranch: z.string(),
                      name: z.string(),
                      owner: z.string(),
                      ownerType: z.enum(['user', 'team']),
                      path: z.string(),
                      private: z.boolean(),
                      repoUuid: z.string(),
                      slug: z.string(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string(),
                    })
                    .openapi({
                      required: [
                        'owner',
                        'repoUuid',
                        'slug',
                        'type',
                        'workspaceUuid',
                        'path',
                        'defaultBranch',
                        'name',
                        'private',
                        'ownerType',
                      ],
                    }),
                ])
                .nullable()
                .exactOptional(),
              gitSource: z
                .xor([
                  z
                    .object({
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      repoId: z.xor([z.string(), z.number()]),
                      sha: z.string().exactOptional(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'repoId'] }),
                  z
                    .object({
                      org: z.string(),
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      repo: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'org', 'repo'] }),
                  z
                    .object({
                      prId: z.number().nullable().exactOptional(),
                      projectId: z.xor([z.string(), z.number()]),
                      ref: z.string().nullable().exactOptional(),
                      sha: z.string().exactOptional(),
                      type: z.literal('gitlab'),
                    })
                    .openapi({ required: ['type', 'projectId'] }),
                  z
                    .object({
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      repoUuid: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string().exactOptional(),
                    })
                    .openapi({ required: ['type', 'repoUuid'] }),
                  z
                    .object({
                      owner: z.string(),
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      sha: z.string().exactOptional(),
                      slug: z.string(),
                      type: z.literal('bitbucket'),
                    })
                    .openapi({ required: ['type', 'owner', 'slug'] }),
                  z
                    .object({
                      gitUrl: z.string(),
                      ref: z.string(),
                      sha: z.string(),
                      type: z.literal('custom'),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'gitUrl'] }),
                  z
                    .object({
                      org: z.string().exactOptional(),
                      ref: z.string(),
                      repo: z.string().exactOptional(),
                      repoId: z.number(),
                      sha: z.string(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'repoId'] }),
                  z
                    .object({
                      projectId: z.number(),
                      ref: z.string(),
                      sha: z.string(),
                      type: z.literal('gitlab'),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'projectId'] }),
                  z
                    .object({
                      owner: z.string().exactOptional(),
                      ref: z.string(),
                      repoUuid: z.string(),
                      sha: z.string(),
                      slug: z.string().exactOptional(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string(),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'workspaceUuid', 'repoUuid'] }),
                ])
                .exactOptional(),
              id: z
                .string()
                .openapi({
                  description: 'A string holding the unique ID of the deployment',
                  examples: ['dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ'],
                }),
              inspectorUrl: z
                .string()
                .nullable()
                .openapi({
                  description: 'Vercel URL to inspect the deployment.',
                  examples: ['https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq'],
                }),
              isInConcurrentBuildsQueue: z
                .boolean()
                .openapi({
                  description:
                    'Is the deployment currently queued waiting for a Concurrent Build Slot to be available',
                  examples: [false],
                }),
              lambdas: z
                .array(
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      entrypoint: z.string().nullable().exactOptional(),
                      id: z.string(),
                      output: z.array(
                        z
                          .object({ functionName: z.string(), path: z.string() })
                          .openapi({ required: ['path', 'functionName'] }),
                      ),
                      readyState: z
                        .enum(['INITIALIZING', 'BUILDING', 'READY', 'ERROR'])
                        .exactOptional(),
                      readyStateAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['id', 'output'] }),
                )
                .exactOptional(),
              meta: z
                .record(
                  z.string(),
                  z
                    .string()
                    .openapi({
                      description: "An object containing the deployment's metadata",
                      examples: [{ foo: 'bar' }],
                    }),
                )
                .openapi({
                  description: "An object containing the deployment's metadata",
                  examples: [{ foo: 'bar' }],
                }),
              monorepoManager: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'An monorepo manager that was used for the deployment',
                  examples: ['turbo'],
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the project associated with the deployment at the time that the deployment was created',
                  examples: ['my-project'],
                }),
              ownerId: z
                .string()
                .openapi({
                  description: 'The unique ID of the user or team the deployment belongs to',
                  examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                }),
              plan: z
                .enum(['hobby', 'enterprise', 'pro', 'oss'])
                .openapi({
                  description: 'The pricing plan the deployment was made under',
                  examples: ['pro'],
                }),
              previewCommentsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether or not preview comments are enabled for the deployment',
                  examples: [false],
                }),
              projectId: z
                .string()
                .openapi({
                  description: 'The ID of the project the deployment is associated with',
                  examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                }),
              public: z
                .boolean()
                .openapi({
                  description:
                    'A boolean representing if the deployment is public or not. By default this is `false`',
                  examples: [false],
                }),
              readyState: z
                .enum(['INITIALIZING', 'BUILDING', 'READY', 'ERROR', 'QUEUED', 'CANCELED'])
                .openapi({
                  description:
                    'The state of the deployment depending on the process of deploying, or if it is ready or in an error state',
                  examples: ['READY'],
                }),
              regions: z
                .array(z.string())
                .openapi({
                  description: 'The regions the deployment exists in',
                  examples: [['sfo1']],
                }),
              routes: z
                .array(
                  z.xor([
                    z
                      .object({
                        caseSensitive: z.boolean().exactOptional(),
                        check: z.boolean().exactOptional(),
                        continue: z.boolean().exactOptional(),
                        dest: z.string().exactOptional(),
                        has: z
                          .array(
                            z.xor([
                              z
                                .object({ type: z.literal('host'), value: z.string() })
                                .openapi({ required: ['type', 'value'] }),
                              z
                                .object({
                                  key: z.string(),
                                  type: z.enum(['header', 'cookie', 'query']),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: ['type', 'key'] }),
                            ]),
                          )
                          .exactOptional(),
                        headers: z.record(z.string(), z.string()).exactOptional(),
                        important: z.boolean().exactOptional(),
                        locale: z
                          .object({
                            cookie: z.string().exactOptional(),
                            redirect: z
                              .record(z.string(), z.string())
                              .exactOptional()
                              .openapi({
                                description:
                                  'Construct a type with a set of properties K of type T',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        methods: z.array(z.string()).exactOptional(),
                        middleware: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              'A middleware index in the `middleware` key under the build result',
                          }),
                        middlewarePath: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'A middleware key within the `output` key under the build result. Overrides a `middleware` definition.',
                          }),
                        middlewareRawSrc: z
                          .array(z.string())
                          .exactOptional()
                          .openapi({ description: 'The original middleware matchers.' }),
                        missing: z
                          .array(
                            z.xor([
                              z
                                .object({ type: z.literal('host'), value: z.string() })
                                .openapi({ required: ['type', 'value'] }),
                              z
                                .object({
                                  key: z.string(),
                                  type: z.enum(['header', 'cookie', 'query']),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: ['type', 'key'] }),
                            ]),
                          )
                          .exactOptional(),
                        override: z.boolean().exactOptional(),
                        src: z.string(),
                        status: z.number().exactOptional(),
                      })
                      .openapi({
                        description:
                          'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                        examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                        required: ['src'],
                      }),
                    z
                      .object({
                        dest: z.string().exactOptional(),
                        handle: z.enum([
                          'filesystem',
                          'hit',
                          'miss',
                          'rewrite',
                          'error',
                          'resource',
                        ]),
                        src: z.string().exactOptional(),
                        status: z.number().exactOptional(),
                      })
                      .openapi({
                        description:
                          'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                        examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                        required: ['handle'],
                      }),
                    z
                      .object({ continue: z.boolean(), middleware: z.literal(0), src: z.string() })
                      .openapi({
                        description:
                          'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                        examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                        required: ['src', 'continue', 'middleware'],
                      }),
                  ]),
                )
                .nullable()
                .openapi({
                  description:
                    'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                  examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                }),
              source: z
                .enum(['cli', 'git', 'import', 'import/repo', 'clone/repo'])
                .exactOptional()
                .openapi({
                  description: 'Where was the deployment created from',
                  examples: ['cli'],
                }),
              target: z
                .enum(['staging', 'production'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned',
                  examples: [null],
                }),
              team: z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description: 'The ID of the team owner',
                      examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                    }),
                  name: z
                    .string()
                    .openapi({ description: 'The name of the team owner', examples: ['FSociety'] }),
                  slug: z
                    .string()
                    .openapi({ description: 'The slug of the team owner', examples: ['fsociety'] }),
                })
                .exactOptional()
                .openapi({
                  description: 'The team that owns the deployment if any',
                  required: ['id', 'name', 'slug'],
                }),
              type: z.literal('LAMBDAS'),
              url: z
                .string()
                .openapi({
                  description: 'A string with the unique URL of the deployment',
                  examples: ['my-instant-deployment-3ij3cxz9qr.now.sh'],
                }),
              userAliases: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of domains that were provided by the user when creating the Deployment.',
                  examples: [['sub1.example.com', 'sub2.example.com']],
                }),
              version: z
                .literal(2)
                .openapi({
                  description: 'The platform version that was used to create the deployment.',
                  examples: [2],
                }),
            })
            .openapi({
              required: [
                'build',
                'createdIn',
                'env',
                'inspectorUrl',
                'isInConcurrentBuildsQueue',
                'meta',
                'name',
                'ownerId',
                'plan',
                'projectId',
                'routes',
                'alias',
                'aliasAssigned',
                'bootedAt',
                'buildingAt',
                'createdAt',
                'creator',
                'id',
                'public',
                'readyState',
                'regions',
                'type',
                'url',
                'version',
              ],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postV13DeploymentsRoute = createRoute({
  method: 'post',
  path: '/v13/deployments',
  tags: ['deployments'],
  summary: 'Create a new deployment',
  description:
    'Create a new deployment with all the required and intended data. If the deployment is not a git deployment, all files must be provided with the request, either referenced or inlined. Additionally, a deployment id can be specified to redeploy a previous deployment.',
  operationId: 'createDeployment',
  request: {
    query: z.object({
      forceNew: z
        .enum(['0', '1'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Forces a new deployment even if there is a previous similar deployment',
            in: 'query',
            name: 'forceNew',
            schema: {
              description: 'Forces a new deployment even if there is a previous similar deployment',
              enum: ['0', '1'],
            },
            required: false,
          },
          description: 'Forces a new deployment even if there is a previous similar deployment',
        }),
      skipAutoDetectionConfirmation: z
        .enum(['0', '1'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows to skip framework detection so the API would not fail to ask for confirmation',
            in: 'query',
            name: 'skipAutoDetectionConfirmation',
            schema: {
              description:
                'Allows to skip framework detection so the API would not fail to ask for confirmation',
              enum: ['0', '1'],
            },
            required: false,
          },
          description:
            'Allows to skip framework detection so the API would not fail to ask for confirmation',
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              $schema: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Ignored. Can be set to get completions, validations and documentation in some editors.',
                  examples: [['https://openapi.vercel.sh/vercel.json']],
                }),
              alias: z
                .array(z.string().max(253))
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Aliases that will get assigned when the deployment is `READY` and the target is `production`. The client needs to make a `GET` request to its API to ensure the assignment',
                  examples: [['example.vercel.app']],
                }),
              build: z
                .strictObject({
                  env: z
                    .record(z.string(), z.string().max(65536))
                    .refine((val) => Object.keys(val).length >= 0)
                    .refine((val) => Object.keys(val).length <= 100)
                    .exactOptional()
                    .openapi({
                      deprecated: true,
                      description:
                        "An object containing the deployment's environment variable names and values to be passed to Builds. Secrets can be referenced by prefixing the value with `@`",
                      examples: [{ A_SECRET: '@a-secret' }],
                    }),
                })
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'An object containing another object with information to be passed to the Build Process',
                  required: [],
                }),
              buildCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The build command for this project. When `null` is used this value will be automatically detected',
                }),
              builds: z
                .array(
                  z
                    .strictObject({
                      config: z
                        .object({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Optionally, an object including arbitrary metadata to be passed to the Builder',
                        }),
                      src: z
                        .string()
                        .max(4096)
                        .exactOptional()
                        .openapi({
                          description:
                            'A glob expression or pathname. If more than one file is resolved, one build will be created per matched file. It can include `*` and `**`',
                        }),
                      use: z
                        .string()
                        .max(256)
                        .openapi({
                          description:
                            'An npm module to be installed by the build process. It can include a semver compatible version (e.g.: `@org/proj@1`)',
                        }),
                    })
                    .openapi({ required: ['use'] }),
                )
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'A list of build descriptions whose src references valid source files.',
                }),
              cleanUrls: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to `true`, all HTML files and Serverless Functions will have their extension removed. When visiting a path that ends with the extension, a 308 response will redirect the client to the extensionless path.',
                }),
              crons: z
                .array(
                  z
                    .object({
                      path: z.string().regex(/^\/.*/).max(512),
                      schedule: z.string().max(256),
                    })
                    .openapi({ required: ['schedule', 'path'] }),
                )
                .max(20)
                .exactOptional()
                .openapi({
                  description:
                    'An array of cron jobs that should be created for production Deployments.',
                }),
              deploymentId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An deployment id for an existing deployment to redeploy',
                }),
              devCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The dev command for this project. When `null` is used this value will be automatically detected',
                }),
              env: z
                .record(z.string(), z.string().max(65536))
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 100)
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    "An object containing the deployment's environment variable names and values. Secrets can be referenced by prefixing the value with `@`",
                  examples: [{ A_SECRET: '@a-secret' }],
                }),
              files: z
                .array(
                  z.xor([
                    z
                      .strictObject({
                        data: z
                          .string()
                          .openapi({
                            description:
                              'The file content, it could be either a `base64` (useful for images, etc.) of the files or the plain content for source code',
                          }),
                        encoding: z
                          .enum(['base64', 'utf-8'])
                          .exactOptional()
                          .openapi({
                            description:
                              'The file content encoding, it could be either a base64 (useful for images, etc.) of the files or the plain text for source code.',
                          }),
                        file: z
                          .string()
                          .openapi({
                            description: 'The file name including the whole path',
                            examples: ['folder/file.js'],
                          }),
                      })
                      .openapi({
                        description:
                          'Used in the case you want to inline a file inside the request',
                        required: ['file', 'data'],
                        title: 'InlinedFile',
                      }),
                    z
                      .strictObject({
                        file: z
                          .string()
                          .openapi({
                            description: 'The file path relative to the project root',
                            examples: ['folder/file.js'],
                          }),
                        sha: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The file contents hashed with SHA1, used to check the integrity',
                          }),
                        size: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'The file size in bytes' }),
                      })
                      .openapi({
                        description:
                          'Used in the case you want to reference a file that was already uploaded',
                        required: ['file'],
                        title: 'UploadedFile',
                      }),
                  ]),
                )
                .exactOptional()
                .openapi({ description: 'A list of objects with the files to be deployed' }),
              framework: z
                .union([
                  z.literal(null),
                  z.literal('blitzjs'),
                  z.literal('nextjs'),
                  z.literal('gatsby'),
                  z.literal('remix'),
                  z.literal('astro'),
                  z.literal('hexo'),
                  z.literal('eleventy'),
                  z.literal('docusaurus-2'),
                  z.literal('docusaurus'),
                  z.literal('preact'),
                  z.literal('solidstart'),
                  z.literal('dojo'),
                  z.literal('ember'),
                  z.literal('vue'),
                  z.literal('scully'),
                  z.literal('ionic-angular'),
                  z.literal('angular'),
                  z.literal('polymer'),
                  z.literal('svelte'),
                  z.literal('sveltekit'),
                  z.literal('sveltekit-1'),
                  z.literal('ionic-react'),
                  z.literal('create-react-app'),
                  z.literal('gridsome'),
                  z.literal('umijs'),
                  z.literal('sapper'),
                  z.literal('saber'),
                  z.literal('stencil'),
                  z.literal('nuxtjs'),
                  z.literal('redwoodjs'),
                  z.literal('hugo'),
                  z.literal('jekyll'),
                  z.literal('brunch'),
                  z.literal('middleman'),
                  z.literal('zola'),
                  z.literal('hydrogen'),
                  z.literal('vite'),
                  z.literal('vitepress'),
                  z.literal('vuepress'),
                  z.literal('parcel'),
                  z.literal('sanity'),
                ])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The framework that is being used for this project. When `null` is used no framework is selected',
                }),
              functions: z
                .record(
                  z.string(),
                  z
                    .strictObject({
                      excludeFiles: z
                        .string()
                        .max(256)
                        .exactOptional()
                        .openapi({
                          description:
                            'A glob pattern to match files that should be excluded from your Serverless Function. If you’re using a Community Runtime, the behavior might vary.',
                        }),
                      includeFiles: z
                        .string()
                        .max(256)
                        .exactOptional()
                        .openapi({
                          description:
                            'A glob pattern to match files that should be included in your Serverless Function. If you’re using a Community Runtime, the behavior might vary.',
                        }),
                      maxDuration: z
                        .number()
                        .min(1)
                        .max(900)
                        .exactOptional()
                        .openapi({
                          description:
                            'An integer defining how long your Serverless Function should be allowed to run on every request in seconds (between 1 and the maximum limit of your plan).',
                        }),
                      memory: z
                        .number()
                        .min(128)
                        .max(3008)
                        .exactOptional()
                        .openapi({
                          description:
                            'An integer defining the memory your Serverless Function should be provided with (between 128 and 3008).',
                        }),
                      runtime: z
                        .string()
                        .max(256)
                        .exactOptional()
                        .openapi({
                          description: 'The npm package name of a Runtime, including its version',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'An object describing custom options for your Serverless Functions. Each key must be glob pattern that matches the paths of the Serverless Functions you would like to customize (like `api/*.js` or `api/test.js`).',
                  examples: [{ 'src/pages/**': { maxDuration: 6, memory: 1024 } }],
                }),
              git: z
                .object({
                  deploymentEnabled: z
                    .xor([z.boolean(), z.record(z.string(), z.boolean())])
                    .exactOptional()
                    .openapi({
                      description:
                        'Specifies the branches that will not trigger an auto-deployment when committing to them. Any non specified branch is `true` by default.',
                      examples: [{ main: false }],
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              gitMetadata: z
                .strictObject({
                  commitAuthorName: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The name of the author of the commit',
                      examples: ['kyliau'],
                    }),
                  commitMessage: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The commit message',
                      examples: ['add method to measure Interaction to Next Paint (INP) (#36490)'],
                    }),
                  commitRef: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The branch on which the commit was made',
                      examples: ['main'],
                    }),
                  commitSha: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The hash of the commit',
                      examples: ['dc36199b2234c6586ebe05ec94078a895c707e29'],
                    }),
                  dirty: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether or not there have been modifications to the working tree since the latest commit',
                      examples: [true],
                    }),
                  remoteUrl: z
                    .string()
                    .openapi({
                      description: "The git repository's remote origin url",
                      examples: ['https://github.com/vercel/next.js'],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Populates initial git metadata for different git providers.',
                  required: ['remoteUrl'],
                }),
              gitSource: z
                .union([
                  z
                    .object({
                      ref: z.string(),
                      repoId: z.xor([z.number(), z.string()]),
                      sha: z.string().exactOptional(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'ref', 'repoId'] }),
                  z
                    .object({
                      org: z.string(),
                      ref: z.string(),
                      repo: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'ref', 'org', 'repo'] }),
                  z
                    .object({
                      projectId: z.xor([z.number(), z.string()]),
                      ref: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('gitlab'),
                    })
                    .openapi({ required: ['type', 'ref', 'projectId'] }),
                  z
                    .object({
                      ref: z.string(),
                      repoUuid: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string().exactOptional(),
                    })
                    .openapi({ required: ['type', 'ref', 'repoUuid'] }),
                  z
                    .object({
                      owner: z.string(),
                      ref: z.string(),
                      sha: z.string().exactOptional(),
                      slug: z.string(),
                      type: z.literal('bitbucket'),
                    })
                    .openapi({ required: ['type', 'ref', 'owner', 'slug'] }),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Defines the Git Repository source to be deployed. This property can not be used in combination with `files`.',
                }),
              headers: z
                .array(
                  z
                    .strictObject({
                      has: z
                        .array(
                          z.union([
                            z
                              .strictObject({
                                type: z
                                  .literal('host')
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'value'] }),
                            z
                              .strictObject({
                                key: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'The name of the element contained in the particular type',
                                  }),
                                type: z
                                  .enum(['header', 'cookie', 'query'])
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'key'] }),
                          ]),
                        )
                        .max(16)
                        .exactOptional()
                        .openapi({
                          description: 'An array of requirements that are needed to match',
                        }),
                      headers: z
                        .array(
                          z
                            .strictObject({
                              key: z.string().max(4096),
                              value: z.string().max(4096),
                            })
                            .openapi({ required: ['key', 'value'] }),
                        )
                        .max(1024)
                        .openapi({
                          description:
                            'An array of key/value pairs representing each response header.',
                        }),
                      missing: z
                        .array(
                          z.union([
                            z
                              .strictObject({
                                type: z
                                  .literal('host')
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'value'] }),
                            z
                              .strictObject({
                                key: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'The name of the element contained in the particular type',
                                  }),
                                type: z
                                  .enum(['header', 'cookie', 'query'])
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'key'] }),
                          ]),
                        )
                        .max(16)
                        .exactOptional()
                        .openapi({
                          description: 'An array of requirements that are needed to match',
                        }),
                      source: z
                        .string()
                        .max(4096)
                        .openapi({
                          description:
                            'A pattern that matches each incoming pathname (excluding querystring)',
                        }),
                    })
                    .openapi({ required: ['source', 'headers'] }),
                )
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A list of header definitions.' }),
              ignoreCommand: z.string().max(256).nullable().exactOptional(),
              installCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The install command for this project. When `null` is used this value will be automatically detected',
                }),
              meta: z
                .record(z.string(), z.string().max(65536))
                .refine((val) => Object.keys(val).length <= 100)
                .exactOptional()
                .openapi({
                  description:
                    "An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment",
                  examples: [{ foo: 'bar' }],
                }),
              monorepoManager: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The monorepo manager that is being used for this deployment. When `null` is used no monorepo manager is selected',
                }),
              name: z
                .string()
                .openapi({
                  description: 'A string with the project name used in the deployment URL',
                  examples: ['my-instant-deployment'],
                }),
              outputDirectory: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The output directory of the project. When `null` is used this value will be automatically detected',
                }),
              project: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The target project identifier in which the deployment will be created. When defined, this parameter overrides name',
                  examples: ['my-deployment-project'],
                }),
              projectSettings: z
                .strictObject({
                  buildCommand: z
                    .string()
                    .max(256)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The build command for this project. When `null` is used this value will be automatically detected',
                    }),
                  commandForIgnoringBuildStep: z.string().max(256).nullable().exactOptional(),
                  devCommand: z
                    .string()
                    .max(256)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The dev command for this project. When `null` is used this value will be automatically detected',
                    }),
                  framework: z
                    .union([
                      z.literal(null),
                      z.literal('blitzjs'),
                      z.literal('nextjs'),
                      z.literal('gatsby'),
                      z.literal('remix'),
                      z.literal('astro'),
                      z.literal('hexo'),
                      z.literal('eleventy'),
                      z.literal('docusaurus-2'),
                      z.literal('docusaurus'),
                      z.literal('preact'),
                      z.literal('solidstart'),
                      z.literal('dojo'),
                      z.literal('ember'),
                      z.literal('vue'),
                      z.literal('scully'),
                      z.literal('ionic-angular'),
                      z.literal('angular'),
                      z.literal('polymer'),
                      z.literal('svelte'),
                      z.literal('sveltekit'),
                      z.literal('sveltekit-1'),
                      z.literal('ionic-react'),
                      z.literal('create-react-app'),
                      z.literal('gridsome'),
                      z.literal('umijs'),
                      z.literal('sapper'),
                      z.literal('saber'),
                      z.literal('stencil'),
                      z.literal('nuxtjs'),
                      z.literal('redwoodjs'),
                      z.literal('hugo'),
                      z.literal('jekyll'),
                      z.literal('brunch'),
                      z.literal('middleman'),
                      z.literal('zola'),
                      z.literal('hydrogen'),
                      z.literal('vite'),
                      z.literal('vitepress'),
                      z.literal('vuepress'),
                      z.literal('parcel'),
                      z.literal('sanity'),
                    ])
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The framework that is being used for this project. When `null` is used no framework is selected',
                    }),
                  installCommand: z
                    .string()
                    .max(256)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The install command for this project. When `null` is used this value will be automatically detected',
                    }),
                  outputDirectory: z
                    .string()
                    .max(256)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The output directory of the project. When `null` is used this value will be automatically detected',
                    }),
                  rootDirectory: z
                    .string()
                    .max(256)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root',
                    }),
                  serverlessFunctionRegion: z
                    .string()
                    .max(4)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'The region to deploy Serverless Functions in this project',
                    }),
                  skipGitConnectDuringLink: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      deprecated: true,
                      description:
                        'Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.',
                    }),
                  sourceFilesOutsideRootDirectory: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates if there are source files outside of the root directory, typically used for monorepos',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Project settings that will be applied to the deployment. It is required for the first deployment of a project and will be saved for any following deployments',
                  required: [],
                }),
              public: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: "Whether a deployment's source and logs are available publicly",
                }),
              redirects: z
                .array(
                  z
                    .strictObject({
                      destination: z
                        .string()
                        .max(4096)
                        .openapi({
                          description:
                            'A location destination defined as an absolute pathname or external URL.',
                        }),
                      has: z
                        .array(
                          z.union([
                            z
                              .strictObject({
                                type: z
                                  .literal('host')
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'value'] }),
                            z
                              .strictObject({
                                key: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'The name of the element contained in the particular type',
                                  }),
                                type: z
                                  .enum(['header', 'cookie', 'query'])
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'key'] }),
                          ]),
                        )
                        .max(16)
                        .exactOptional()
                        .openapi({
                          description: 'An array of requirements that are needed to match',
                        }),
                      missing: z
                        .array(
                          z.union([
                            z
                              .strictObject({
                                type: z
                                  .literal('host')
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'value'] }),
                            z
                              .strictObject({
                                key: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'The name of the element contained in the particular type',
                                  }),
                                type: z
                                  .enum(['header', 'cookie', 'query'])
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'key'] }),
                          ]),
                        )
                        .max(16)
                        .exactOptional()
                        .openapi({
                          description: 'An array of requirements that are needed to match',
                        }),
                      permanent: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'A boolean to toggle between permanent and temporary redirect. When `true`, the status code is `308`. When `false` the status code is `307`.',
                        }),
                      source: z
                        .string()
                        .max(4096)
                        .openapi({
                          description:
                            'A pattern that matches each incoming pathname (excluding querystring).',
                        }),
                    })
                    .openapi({ required: ['source', 'destination'] }),
                )
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A list of redirect definitions.', title: 'Redirects' }),
              regions: z
                .array(z.string().max(256))
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    "An array of the regions the deployment's Serverless Functions should be deployed to",
                  examples: [['sfo', 'bru']],
                }),
              rewrites: z
                .array(
                  z
                    .strictObject({
                      destination: z
                        .string()
                        .max(4096)
                        .openapi({
                          description:
                            'An absolute pathname to an existing resource or an external URL.',
                        }),
                      has: z
                        .array(
                          z.union([
                            z
                              .strictObject({
                                type: z
                                  .literal('host')
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'value'] }),
                            z
                              .strictObject({
                                key: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'The name of the element contained in the particular type',
                                  }),
                                type: z
                                  .enum(['header', 'cookie', 'query'])
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'key'] }),
                          ]),
                        )
                        .max(16)
                        .exactOptional()
                        .openapi({
                          description: 'An array of requirements that are needed to match',
                        }),
                      missing: z
                        .array(
                          z.union([
                            z
                              .strictObject({
                                type: z
                                  .literal('host')
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'value'] }),
                            z
                              .strictObject({
                                key: z
                                  .string()
                                  .max(4096)
                                  .openapi({
                                    description:
                                      'The name of the element contained in the particular type',
                                  }),
                                type: z
                                  .enum(['header', 'cookie', 'query'])
                                  .openapi({ description: 'The type of request element to check' }),
                                value: z
                                  .string()
                                  .max(4096)
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'A regular expression used to match the value. Named groups can be used in the destination',
                                  }),
                              })
                              .openapi({ required: ['type', 'key'] }),
                          ]),
                        )
                        .max(16)
                        .exactOptional()
                        .openapi({
                          description: 'An array of requirements that are needed to match',
                        }),
                      source: z
                        .string()
                        .max(4096)
                        .openapi({
                          description:
                            'A pattern that matches each incoming pathname (excluding querystring).',
                        }),
                    })
                    .openapi({ required: ['source', 'destination'] }),
                )
                .max(1024)
                .exactOptional()
                .openapi({ description: 'A list of rewrite definitions.' }),
              routes: z
                .array(
                  z.union([
                    z
                      .strictObject({
                        caseSensitive: z.boolean().exactOptional(),
                        check: z.boolean().exactOptional(),
                        continue: z.boolean().exactOptional(),
                        dest: z.string().max(4096).exactOptional(),
                        has: z
                          .array(
                            z.union([
                              z
                                .strictObject({
                                  type: z
                                    .literal('host')
                                    .openapi({
                                      description: 'The type of request element to check',
                                    }),
                                  value: z
                                    .string()
                                    .max(4096)
                                    .openapi({
                                      description:
                                        'A regular expression used to match the value. Named groups can be used in the destination',
                                    }),
                                })
                                .openapi({ required: ['type', 'value'] }),
                              z
                                .strictObject({
                                  key: z
                                    .string()
                                    .max(4096)
                                    .openapi({
                                      description:
                                        'The name of the element contained in the particular type',
                                    }),
                                  type: z
                                    .enum(['header', 'cookie', 'query'])
                                    .openapi({
                                      description: 'The type of request element to check',
                                    }),
                                  value: z
                                    .string()
                                    .max(4096)
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'A regular expression used to match the value. Named groups can be used in the destination',
                                    }),
                                })
                                .openapi({ required: ['type', 'key'] }),
                            ]),
                          )
                          .max(16)
                          .exactOptional()
                          .openapi({
                            description: 'An array of requirements that are needed to match',
                          }),
                        headers: z
                          .record(z.string(), z.string().max(4096))
                          .refine((val) => Object.keys(val).length >= 1)
                          .refine((val) => Object.keys(val).length <= 100)
                          .exactOptional(),
                        important: z.boolean().exactOptional(),
                        locale: z
                          .strictObject({
                            cookie: z.string().max(4096).exactOptional(),
                            default: z.string().max(4096).exactOptional(),
                            path: z.string().max(4096).exactOptional(),
                            redirect: z
                              .record(z.string(), z.string().max(4096))
                              .refine((val) => Object.keys(val).length >= 1)
                              .refine((val) => Object.keys(val).length <= 100)
                              .exactOptional(),
                            value: z.string().max(4096).exactOptional(),
                          })
                          .refine((val) => Object.keys(val).length >= 1)
                          .exactOptional()
                          .openapi({ required: [] }),
                        methods: z.array(z.string().max(32)).max(10).exactOptional(),
                        middleware: z.number().exactOptional(),
                        middlewarePath: z.string().exactOptional(),
                        middlewareRawSrc: z.array(z.string()).exactOptional(),
                        missing: z
                          .array(
                            z.union([
                              z
                                .strictObject({
                                  type: z
                                    .literal('host')
                                    .openapi({
                                      description: 'The type of request element to check',
                                    }),
                                  value: z
                                    .string()
                                    .max(4096)
                                    .openapi({
                                      description:
                                        'A regular expression used to match the value. Named groups can be used in the destination',
                                    }),
                                })
                                .openapi({ required: ['type', 'value'] }),
                              z
                                .strictObject({
                                  key: z
                                    .string()
                                    .max(4096)
                                    .openapi({
                                      description:
                                        'The name of the element contained in the particular type',
                                    }),
                                  type: z
                                    .enum(['header', 'cookie', 'query'])
                                    .openapi({
                                      description: 'The type of request element to check',
                                    }),
                                  value: z
                                    .string()
                                    .max(4096)
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'A regular expression used to match the value. Named groups can be used in the destination',
                                    }),
                                })
                                .openapi({ required: ['type', 'key'] }),
                            ]),
                          )
                          .max(16)
                          .exactOptional()
                          .openapi({
                            description: 'An array of requirements that are needed to match',
                          }),
                        override: z.boolean().exactOptional(),
                        src: z.string().max(4096),
                        status: z.int().min(100).max(999).exactOptional(),
                        user: z.boolean().exactOptional(),
                      })
                      .openapi({ required: ['src'] }),
                    z
                      .strictObject({
                        handle: z.enum([
                          'error',
                          'filesystem',
                          'hit',
                          'miss',
                          'resource',
                          'rewrite',
                        ]),
                      })
                      .openapi({ required: ['handle'] }),
                  ]),
                )
                .max(1024)
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                  examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                }),
              target: z
                .enum(['staging', 'production'])
                .exactOptional()
                .openapi({
                  description:
                    'Either not defined, `staging`, or `production`. If `staging`, a staging alias in the format `<project>.<team>.now.sh` will be assigned. If `production`, any aliases defined in `alias` will be assigned',
                }),
              trailingSlash: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When `false`, visiting a path that ends with a forward slash will respond with a `308` status code and redirect to the path without the trailing slash.',
                }),
              withLatestCommit: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used.",
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The successfully created deployment',
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .array(z.string())
                .openapi({
                  description:
                    'A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation',
                  examples: [[]],
                }),
              aliasAssigned: z
                .boolean()
                .openapi({
                  description:
                    'A boolean that will be true when the aliases from the alias property were assigned successfully',
                  examples: [true],
                }),
              aliasAssignedAt: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
              aliasError: z
                .object({ code: z.string(), message: z.string() })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`',
                  examples: [null],
                  required: ['code', 'message'],
                }),
              aliasFinal: z.string().nullable().exactOptional(),
              aliasWarning: z
                .object({
                  action: z.string().exactOptional(),
                  code: z.string(),
                  link: z.string().exactOptional(),
                  message: z.string(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: ['code', 'message'] }),
              automaticAliases: z.array(z.string()).exactOptional(),
              bootedAt: z.number(),
              build: z
                .object({
                  env: z
                    .array(z.string())
                    .openapi({
                      description:
                        'The keys of the environment variables that were assigned during the build phase.',
                      examples: [['MY_ENV_VAR']],
                    }),
                })
                .openapi({ required: ['env'] }),
              buildErrorAt: z.number().exactOptional(),
              buildingAt: z.number(),
              builds: z.array(z.object({})).exactOptional(),
              canceledAt: z.number().exactOptional(),
              checksConclusion: z
                .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                .exactOptional(),
              checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
              createdAt: z
                .number()
                .openapi({
                  description:
                    'A number containing the date when the deployment was created in milliseconds',
                  examples: [1540257589405],
                }),
              createdIn: z
                .string()
                .openapi({
                  description: 'The region where the deployment was first created',
                  examples: ['sfo1'],
                }),
              creator: z
                .object({
                  uid: z
                    .string()
                    .openapi({
                      description: 'The ID of the user that created the deployment',
                      examples: ['96SnxkFiMyVKsK3pnoHfx3Hz'],
                    }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The username of the user that created the deployment',
                      examples: ['john-doe'],
                    }),
                })
                .openapi({
                  description: 'Information about the deployment creator',
                  required: ['uid'],
                }),
              env: z
                .array(z.string())
                .openapi({
                  description:
                    'The keys of the environment variables that were assigned during runtime',
                  examples: [['MY_SECRET']],
                }),
              errorCode: z.string().exactOptional(),
              errorLink: z.string().exactOptional(),
              errorMessage: z.string().nullable().exactOptional(),
              errorStep: z.string().exactOptional(),
              functions: z
                .record(
                  z.string(),
                  z
                    .object({
                      excludeFiles: z.string().exactOptional(),
                      includeFiles: z.string().exactOptional(),
                      maxDuration: z.number().exactOptional(),
                      memory: z.number().exactOptional(),
                      runtime: z.string().exactOptional(),
                    })
                    .openapi({
                      description: 'An object used to configure your Serverless Functions',
                      examples: [{ 'api/test.js': { memory: 3008 } }],
                      required: [],
                    }),
                )
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'An object used to configure your Serverless Functions',
                  examples: [{ 'api/test.js': { memory: 3008 } }],
                }),
              gitRepo: z
                .xor([
                  z
                    .object({
                      defaultBranch: z.string(),
                      name: z.string(),
                      namespace: z.string(),
                      ownerType: z.enum(['team', 'user']),
                      path: z.string(),
                      private: z.boolean(),
                      projectId: z.number(),
                      type: z.literal('gitlab'),
                      url: z.string(),
                    })
                    .openapi({
                      required: [
                        'namespace',
                        'projectId',
                        'type',
                        'url',
                        'path',
                        'defaultBranch',
                        'name',
                        'private',
                        'ownerType',
                      ],
                    }),
                  z
                    .object({
                      defaultBranch: z.string(),
                      name: z.string(),
                      org: z.string(),
                      ownerType: z.enum(['team', 'user']),
                      path: z.string(),
                      private: z.boolean(),
                      repo: z.string(),
                      repoId: z.number(),
                      repoOwnerId: z.string(),
                      type: z.literal('github'),
                    })
                    .openapi({
                      required: [
                        'org',
                        'repo',
                        'repoId',
                        'type',
                        'repoOwnerId',
                        'path',
                        'defaultBranch',
                        'name',
                        'private',
                        'ownerType',
                      ],
                    }),
                  z
                    .object({
                      defaultBranch: z.string(),
                      name: z.string(),
                      owner: z.string(),
                      ownerType: z.enum(['team', 'user']),
                      path: z.string(),
                      private: z.boolean(),
                      repoUuid: z.string(),
                      slug: z.string(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string(),
                    })
                    .openapi({
                      required: [
                        'owner',
                        'repoUuid',
                        'slug',
                        'type',
                        'workspaceUuid',
                        'path',
                        'defaultBranch',
                        'name',
                        'private',
                        'ownerType',
                      ],
                    }),
                ])
                .nullable()
                .exactOptional(),
              gitSource: z
                .xor([
                  z
                    .object({
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      repoId: z.xor([z.string(), z.number()]),
                      sha: z.string().exactOptional(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'repoId'] }),
                  z
                    .object({
                      org: z.string(),
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      repo: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'org', 'repo'] }),
                  z
                    .object({
                      prId: z.number().nullable().exactOptional(),
                      projectId: z.xor([z.string(), z.number()]),
                      ref: z.string().nullable().exactOptional(),
                      sha: z.string().exactOptional(),
                      type: z.literal('gitlab'),
                    })
                    .openapi({ required: ['type', 'projectId'] }),
                  z
                    .object({
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      repoUuid: z.string(),
                      sha: z.string().exactOptional(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string().exactOptional(),
                    })
                    .openapi({ required: ['type', 'repoUuid'] }),
                  z
                    .object({
                      owner: z.string(),
                      prId: z.number().nullable().exactOptional(),
                      ref: z.string().nullable().exactOptional(),
                      sha: z.string().exactOptional(),
                      slug: z.string(),
                      type: z.literal('bitbucket'),
                    })
                    .openapi({ required: ['type', 'owner', 'slug'] }),
                  z
                    .object({
                      gitUrl: z.string(),
                      ref: z.string(),
                      sha: z.string(),
                      type: z.literal('custom'),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'gitUrl'] }),
                  z
                    .object({
                      org: z.string().exactOptional(),
                      ref: z.string(),
                      repo: z.string().exactOptional(),
                      repoId: z.number(),
                      sha: z.string(),
                      type: z.literal('github'),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'repoId'] }),
                  z
                    .object({
                      projectId: z.number(),
                      ref: z.string(),
                      sha: z.string(),
                      type: z.literal('gitlab'),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'projectId'] }),
                  z
                    .object({
                      owner: z.string().exactOptional(),
                      ref: z.string(),
                      repoUuid: z.string(),
                      sha: z.string(),
                      slug: z.string().exactOptional(),
                      type: z.literal('bitbucket'),
                      workspaceUuid: z.string(),
                    })
                    .openapi({ required: ['type', 'ref', 'sha', 'workspaceUuid', 'repoUuid'] }),
                ])
                .exactOptional(),
              id: z
                .string()
                .openapi({
                  description: 'A string holding the unique ID of the deployment',
                  examples: ['dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ'],
                }),
              inspectorUrl: z
                .string()
                .nullable()
                .openapi({
                  description: 'Vercel URL to inspect the deployment.',
                  examples: ['https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq'],
                }),
              isInConcurrentBuildsQueue: z
                .boolean()
                .openapi({
                  description:
                    'Is the deployment currently queued waiting for a Concurrent Build Slot to be available',
                  examples: [false],
                }),
              lambdas: z
                .array(
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      entrypoint: z.string().nullable().exactOptional(),
                      id: z.string(),
                      output: z.array(
                        z
                          .object({ functionName: z.string(), path: z.string() })
                          .openapi({ required: ['path', 'functionName'] }),
                      ),
                      readyState: z
                        .enum(['BUILDING', 'ERROR', 'INITIALIZING', 'READY'])
                        .exactOptional(),
                      readyStateAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['id', 'output'] }),
                )
                .exactOptional(),
              meta: z
                .record(
                  z.string(),
                  z
                    .string()
                    .openapi({
                      description: "An object containing the deployment's metadata",
                      examples: [{ foo: 'bar' }],
                    }),
                )
                .openapi({
                  description: "An object containing the deployment's metadata",
                  examples: [{ foo: 'bar' }],
                }),
              monorepoManager: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'An monorepo manager that was used for the deployment',
                  examples: ['turbo'],
                }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the project associated with the deployment at the time that the deployment was created',
                  examples: ['my-project'],
                }),
              ownerId: z
                .string()
                .openapi({
                  description: 'The unique ID of the user or team the deployment belongs to',
                  examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                }),
              plan: z
                .enum(['hobby', 'enterprise', 'pro', 'oss'])
                .openapi({
                  description: 'The pricing plan the deployment was made under',
                  examples: ['pro'],
                }),
              previewCommentsEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether or not preview comments are enabled for the deployment',
                  examples: [false],
                }),
              projectId: z
                .string()
                .openapi({
                  description: 'The ID of the project the deployment is associated with',
                  examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                }),
              public: z
                .boolean()
                .openapi({
                  description:
                    'A boolean representing if the deployment is public or not. By default this is `false`',
                  examples: [false],
                }),
              readyState: z
                .enum(['QUEUED', 'BUILDING', 'ERROR', 'INITIALIZING', 'READY', 'CANCELED'])
                .openapi({
                  description:
                    'The state of the deployment depending on the process of deploying, or if it is ready or in an error state',
                  examples: ['READY'],
                }),
              regions: z
                .array(z.string())
                .openapi({
                  description: 'The regions the deployment exists in',
                  examples: [['sfo1']],
                }),
              routes: z
                .array(
                  z.xor([
                    z
                      .object({
                        caseSensitive: z.boolean().exactOptional(),
                        check: z.boolean().exactOptional(),
                        continue: z.boolean().exactOptional(),
                        dest: z.string().exactOptional(),
                        has: z
                          .array(
                            z.xor([
                              z
                                .object({ type: z.literal('host'), value: z.string() })
                                .openapi({ required: ['type', 'value'] }),
                              z
                                .object({
                                  key: z.string(),
                                  type: z.enum(['header', 'cookie', 'query']),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: ['type', 'key'] }),
                            ]),
                          )
                          .exactOptional(),
                        headers: z.record(z.string(), z.string()).exactOptional(),
                        important: z.boolean().exactOptional(),
                        locale: z
                          .object({
                            cookie: z.string().exactOptional(),
                            redirect: z
                              .record(z.string(), z.string())
                              .exactOptional()
                              .openapi({
                                description:
                                  'Construct a type with a set of properties K of type T',
                              }),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        methods: z.array(z.string()).exactOptional(),
                        middleware: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              'A middleware index in the `middleware` key under the build result',
                          }),
                        middlewarePath: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'A middleware key within the `output` key under the build result. Overrides a `middleware` definition.',
                          }),
                        middlewareRawSrc: z
                          .array(z.string())
                          .exactOptional()
                          .openapi({ description: 'The original middleware matchers.' }),
                        missing: z
                          .array(
                            z.xor([
                              z
                                .object({ type: z.literal('host'), value: z.string() })
                                .openapi({ required: ['type', 'value'] }),
                              z
                                .object({
                                  key: z.string(),
                                  type: z.enum(['header', 'cookie', 'query']),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: ['type', 'key'] }),
                            ]),
                          )
                          .exactOptional(),
                        override: z.boolean().exactOptional(),
                        src: z.string(),
                        status: z.number().exactOptional(),
                      })
                      .openapi({
                        description:
                          'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                        examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                        required: ['src'],
                      }),
                    z
                      .object({
                        dest: z.string().exactOptional(),
                        handle: z.enum([
                          'filesystem',
                          'hit',
                          'miss',
                          'rewrite',
                          'error',
                          'resource',
                        ]),
                        src: z.string().exactOptional(),
                        status: z.number().exactOptional(),
                      })
                      .openapi({
                        description:
                          'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                        examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                        required: ['handle'],
                      }),
                    z
                      .object({ continue: z.boolean(), middleware: z.literal(0), src: z.string() })
                      .openapi({
                        description:
                          'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                        examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                        required: ['src', 'continue', 'middleware'],
                      }),
                  ]),
                )
                .nullable()
                .openapi({
                  description:
                    'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                  examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                }),
              source: z
                .enum(['cli', 'git', 'import', 'import/repo', 'clone/repo'])
                .exactOptional()
                .openapi({
                  description: 'Where was the deployment created from',
                  examples: ['cli'],
                }),
              target: z
                .enum(['production', 'staging'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned',
                  examples: [null],
                }),
              team: z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description: 'The ID of the team owner',
                      examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                    }),
                  name: z
                    .string()
                    .openapi({ description: 'The name of the team owner', examples: ['FSociety'] }),
                  slug: z
                    .string()
                    .openapi({ description: 'The slug of the team owner', examples: ['fsociety'] }),
                })
                .exactOptional()
                .openapi({
                  description: 'The team that owns the deployment if any',
                  required: ['id', 'name', 'slug'],
                }),
              type: z.literal('LAMBDAS'),
              url: z
                .string()
                .openapi({
                  description: 'A string with the unique URL of the deployment',
                  examples: ['my-instant-deployment-3ij3cxz9qr.now.sh'],
                }),
              userAliases: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'An array of domains that were provided by the user when creating the Deployment.',
                  examples: [['sub1.example.com', 'sub2.example.com']],
                }),
              version: z
                .literal(2)
                .openapi({
                  description: 'The platform version that was used to create the deployment.',
                  examples: [2],
                }),
            })
            .openapi({
              description: 'The successfully created deployment',
              required: [
                'build',
                'createdIn',
                'env',
                'inspectorUrl',
                'isInConcurrentBuildsQueue',
                'meta',
                'name',
                'ownerId',
                'plan',
                'projectId',
                'routes',
                'alias',
                'aliasAssigned',
                'bootedAt',
                'buildingAt',
                'createdAt',
                'creator',
                'id',
                'public',
                'readyState',
                'regions',
                'type',
                'url',
                'version',
              ],
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated\nDeploying to Serverless Functions to multiple regions requires a plan update',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: 'The deployment project is being transferred' },
  },
  security: [{ bearerToken: [] }],
})

export const getV13DeploymentsIdOrUrlRoute = createRoute({
  method: 'get',
  path: '/v13/deployments/{idOrUrl}',
  tags: ['deployments'],
  summary: 'Get a deployment by ID or URL',
  description:
    'Retrieves information for a deployment either by supplying its ID (`id` property) or Hostname (`url` property). Additional details will be included when the authenticated user is an owner of the deployment.',
  operationId: 'getDeployment',
  request: {
    params: z.object({
      idOrUrl: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier or hostname of the deployment.',
            in: 'path',
            name: 'idOrUrl',
            required: true,
            schema: {
              description: 'The unique identifier or hostname of the deployment.',
              examples: ['dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ'],
              type: 'string',
            },
          },
          description: 'The unique identifier or hostname of the deployment.',
          examples: ['dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ'],
        }),
    }),
    query: z.object({
      withGitRepoInfo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to add in gitRepo information.',
            in: 'query',
            name: 'withGitRepoInfo',
            required: false,
            schema: {
              description: 'Whether to add in gitRepo information.',
              examples: ['true'],
              type: 'string',
            },
          },
          description: 'Whether to add in gitRepo information.',
          examples: ['true'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The deployment including only public information\nThe deployment including both public and private information',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                alias: z
                  .array(z.string())
                  .openapi({
                    description:
                      'A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation',
                    examples: [[]],
                  }),
                aliasAssigned: z
                  .boolean()
                  .openapi({
                    description:
                      'A boolean that will be true when the aliases from the alias property were assigned successfully',
                    examples: [true],
                  }),
                aliasAssignedAt: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
                aliasError: z
                  .object({ code: z.string(), message: z.string() })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`',
                    examples: [null],
                    required: ['code', 'message'],
                  }),
                aliasFinal: z.string().nullable().exactOptional(),
                aliasWarning: z
                  .object({
                    action: z.string().exactOptional(),
                    code: z.string(),
                    link: z.string().exactOptional(),
                    message: z.string(),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({ required: ['code', 'message'] }),
                automaticAliases: z.array(z.string()).exactOptional(),
                bootedAt: z.number(),
                build: z
                  .object({
                    env: z
                      .array(z.string())
                      .openapi({
                        description:
                          'The keys of the environment variables that were assigned during the build phase.',
                        examples: [['MY_ENV_VAR']],
                      }),
                  })
                  .openapi({ required: ['env'] }),
                buildErrorAt: z.number().exactOptional(),
                buildingAt: z.number(),
                builds: z.array(z.object({})).exactOptional(),
                canceledAt: z.number().exactOptional(),
                checksConclusion: z
                  .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                  .exactOptional(),
                checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
                createdAt: z
                  .number()
                  .openapi({
                    description:
                      'A number containing the date when the deployment was created in milliseconds',
                    examples: [1540257589405],
                  }),
                createdIn: z
                  .string()
                  .openapi({
                    description: 'The region where the deployment was first created',
                    examples: ['sfo1'],
                  }),
                creator: z
                  .object({
                    uid: z
                      .string()
                      .openapi({
                        description: 'The ID of the user that created the deployment',
                        examples: ['96SnxkFiMyVKsK3pnoHfx3Hz'],
                      }),
                    username: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The username of the user that created the deployment',
                        examples: ['john-doe'],
                      }),
                  })
                  .openapi({
                    description: 'Information about the deployment creator',
                    required: ['uid'],
                  }),
                env: z
                  .array(z.string())
                  .openapi({
                    description:
                      'The keys of the environment variables that were assigned during runtime',
                    examples: [['MY_SECRET']],
                  }),
                errorCode: z.string().exactOptional(),
                errorLink: z.string().exactOptional(),
                errorMessage: z.string().nullable().exactOptional(),
                errorStep: z.string().exactOptional(),
                functions: z
                  .record(
                    z.string(),
                    z
                      .object({
                        excludeFiles: z.string().exactOptional(),
                        includeFiles: z.string().exactOptional(),
                        maxDuration: z.number().exactOptional(),
                        memory: z.number().exactOptional(),
                        runtime: z.string().exactOptional(),
                      })
                      .openapi({
                        description: 'An object used to configure your Serverless Functions',
                        examples: [{ 'api/test.js': { memory: 3008 } }],
                        required: [],
                      }),
                  )
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'An object used to configure your Serverless Functions',
                    examples: [{ 'api/test.js': { memory: 3008 } }],
                  }),
                gitRepo: z
                  .xor([
                    z
                      .object({
                        defaultBranch: z.string(),
                        name: z.string(),
                        namespace: z.string(),
                        ownerType: z.enum(['team', 'user']),
                        path: z.string(),
                        private: z.boolean(),
                        projectId: z.number(),
                        type: z.literal('gitlab'),
                        url: z.string(),
                      })
                      .openapi({
                        required: [
                          'namespace',
                          'projectId',
                          'type',
                          'url',
                          'path',
                          'defaultBranch',
                          'name',
                          'private',
                          'ownerType',
                        ],
                      }),
                    z
                      .object({
                        defaultBranch: z.string(),
                        name: z.string(),
                        org: z.string(),
                        ownerType: z.enum(['team', 'user']),
                        path: z.string(),
                        private: z.boolean(),
                        repo: z.string(),
                        repoId: z.number(),
                        repoOwnerId: z.string(),
                        type: z.literal('github'),
                      })
                      .openapi({
                        required: [
                          'org',
                          'repo',
                          'repoId',
                          'type',
                          'repoOwnerId',
                          'path',
                          'defaultBranch',
                          'name',
                          'private',
                          'ownerType',
                        ],
                      }),
                    z
                      .object({
                        defaultBranch: z.string(),
                        name: z.string(),
                        owner: z.string(),
                        ownerType: z.enum(['team', 'user']),
                        path: z.string(),
                        private: z.boolean(),
                        repoUuid: z.string(),
                        slug: z.string(),
                        type: z.literal('bitbucket'),
                        workspaceUuid: z.string(),
                      })
                      .openapi({
                        required: [
                          'owner',
                          'repoUuid',
                          'slug',
                          'type',
                          'workspaceUuid',
                          'path',
                          'defaultBranch',
                          'name',
                          'private',
                          'ownerType',
                        ],
                      }),
                  ])
                  .nullable()
                  .exactOptional(),
                gitSource: z
                  .xor([
                    z
                      .object({
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        repoId: z.xor([z.string(), z.number()]),
                        sha: z.string().exactOptional(),
                        type: z.literal('github'),
                      })
                      .openapi({ required: ['type', 'repoId'] }),
                    z
                      .object({
                        org: z.string(),
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        repo: z.string(),
                        sha: z.string().exactOptional(),
                        type: z.literal('github'),
                      })
                      .openapi({ required: ['type', 'org', 'repo'] }),
                    z
                      .object({
                        prId: z.number().nullable().exactOptional(),
                        projectId: z.xor([z.string(), z.number()]),
                        ref: z.string().nullable().exactOptional(),
                        sha: z.string().exactOptional(),
                        type: z.literal('gitlab'),
                      })
                      .openapi({ required: ['type', 'projectId'] }),
                    z
                      .object({
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        repoUuid: z.string(),
                        sha: z.string().exactOptional(),
                        type: z.literal('bitbucket'),
                        workspaceUuid: z.string().exactOptional(),
                      })
                      .openapi({ required: ['type', 'repoUuid'] }),
                    z
                      .object({
                        owner: z.string(),
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        sha: z.string().exactOptional(),
                        slug: z.string(),
                        type: z.literal('bitbucket'),
                      })
                      .openapi({ required: ['type', 'owner', 'slug'] }),
                    z
                      .object({
                        gitUrl: z.string(),
                        ref: z.string(),
                        sha: z.string(),
                        type: z.literal('custom'),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'gitUrl'] }),
                    z
                      .object({
                        org: z.string().exactOptional(),
                        ref: z.string(),
                        repo: z.string().exactOptional(),
                        repoId: z.number(),
                        sha: z.string(),
                        type: z.literal('github'),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'repoId'] }),
                    z
                      .object({
                        projectId: z.number(),
                        ref: z.string(),
                        sha: z.string(),
                        type: z.literal('gitlab'),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'projectId'] }),
                    z
                      .object({
                        owner: z.string().exactOptional(),
                        ref: z.string(),
                        repoUuid: z.string(),
                        sha: z.string(),
                        slug: z.string().exactOptional(),
                        type: z.literal('bitbucket'),
                        workspaceUuid: z.string(),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'workspaceUuid', 'repoUuid'] }),
                  ])
                  .exactOptional(),
                id: z
                  .string()
                  .openapi({
                    description: 'A string holding the unique ID of the deployment',
                    examples: ['dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ'],
                  }),
                inspectorUrl: z
                  .string()
                  .nullable()
                  .openapi({
                    description: 'Vercel URL to inspect the deployment.',
                    examples: ['https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq'],
                  }),
                isInConcurrentBuildsQueue: z
                  .boolean()
                  .openapi({
                    description:
                      'Is the deployment currently queued waiting for a Concurrent Build Slot to be available',
                    examples: [false],
                  }),
                lambdas: z
                  .array(
                    z
                      .object({
                        createdAt: z.number().exactOptional(),
                        entrypoint: z.string().nullable().exactOptional(),
                        id: z.string(),
                        output: z.array(
                          z
                            .object({ functionName: z.string(), path: z.string() })
                            .openapi({ required: ['path', 'functionName'] }),
                        ),
                        readyState: z
                          .enum(['BUILDING', 'ERROR', 'INITIALIZING', 'READY'])
                          .exactOptional(),
                        readyStateAt: z.number().exactOptional(),
                      })
                      .openapi({ required: ['id', 'output'] }),
                  )
                  .exactOptional(),
                meta: z
                  .record(
                    z.string(),
                    z
                      .string()
                      .openapi({
                        description: "An object containing the deployment's metadata",
                        examples: [{ foo: 'bar' }],
                      }),
                  )
                  .openapi({
                    description: "An object containing the deployment's metadata",
                    examples: [{ foo: 'bar' }],
                  }),
                monorepoManager: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'An monorepo manager that was used for the deployment',
                    examples: ['turbo'],
                  }),
                name: z
                  .string()
                  .openapi({
                    description:
                      'The name of the project associated with the deployment at the time that the deployment was created',
                    examples: ['my-project'],
                  }),
                ownerId: z
                  .string()
                  .openapi({
                    description: 'The unique ID of the user or team the deployment belongs to',
                    examples: ['ZspSRT4ljIEEmMHgoDwKWDei'],
                  }),
                plan: z
                  .enum(['hobby', 'enterprise', 'pro', 'oss'])
                  .openapi({
                    description: 'The pricing plan the deployment was made under',
                    examples: ['pro'],
                  }),
                previewCommentsEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether or not preview comments are enabled for the deployment',
                    examples: [false],
                  }),
                projectId: z
                  .string()
                  .openapi({
                    description: 'The ID of the project the deployment is associated with',
                    examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                  }),
                public: z
                  .boolean()
                  .openapi({
                    description:
                      'A boolean representing if the deployment is public or not. By default this is `false`',
                    examples: [false],
                  }),
                readyState: z
                  .enum(['QUEUED', 'BUILDING', 'ERROR', 'INITIALIZING', 'READY', 'CANCELED'])
                  .openapi({
                    description:
                      'The state of the deployment depending on the process of deploying, or if it is ready or in an error state',
                    examples: ['READY'],
                  }),
                regions: z
                  .array(z.string())
                  .openapi({
                    description: 'The regions the deployment exists in',
                    examples: [['sfo1']],
                  }),
                routes: z
                  .array(
                    z.xor([
                      z
                        .object({
                          caseSensitive: z.boolean().exactOptional(),
                          check: z.boolean().exactOptional(),
                          continue: z.boolean().exactOptional(),
                          dest: z.string().exactOptional(),
                          has: z
                            .array(
                              z.xor([
                                z
                                  .object({ type: z.literal('host'), value: z.string() })
                                  .openapi({ required: ['type', 'value'] }),
                                z
                                  .object({
                                    key: z.string(),
                                    type: z.enum(['header', 'cookie', 'query']),
                                    value: z.string().exactOptional(),
                                  })
                                  .openapi({ required: ['type', 'key'] }),
                              ]),
                            )
                            .exactOptional(),
                          headers: z.record(z.string(), z.string()).exactOptional(),
                          important: z.boolean().exactOptional(),
                          locale: z
                            .object({
                              cookie: z.string().exactOptional(),
                              redirect: z
                                .record(z.string(), z.string())
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Construct a type with a set of properties K of type T',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          methods: z.array(z.string()).exactOptional(),
                          middleware: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'A middleware index in the `middleware` key under the build result',
                            }),
                          middlewarePath: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'A middleware key within the `output` key under the build result. Overrides a `middleware` definition.',
                            }),
                          middlewareRawSrc: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({ description: 'The original middleware matchers.' }),
                          missing: z
                            .array(
                              z.xor([
                                z
                                  .object({ type: z.literal('host'), value: z.string() })
                                  .openapi({ required: ['type', 'value'] }),
                                z
                                  .object({
                                    key: z.string(),
                                    type: z.enum(['header', 'cookie', 'query']),
                                    value: z.string().exactOptional(),
                                  })
                                  .openapi({ required: ['type', 'key'] }),
                              ]),
                            )
                            .exactOptional(),
                          override: z.boolean().exactOptional(),
                          src: z.string(),
                          status: z.number().exactOptional(),
                        })
                        .openapi({
                          description:
                            'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                          examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                          required: ['src'],
                        }),
                      z
                        .object({
                          dest: z.string().exactOptional(),
                          handle: z.enum([
                            'filesystem',
                            'hit',
                            'miss',
                            'rewrite',
                            'error',
                            'resource',
                          ]),
                          src: z.string().exactOptional(),
                          status: z.number().exactOptional(),
                        })
                        .openapi({
                          description:
                            'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                          examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                          required: ['handle'],
                        }),
                      z
                        .object({
                          continue: z.boolean(),
                          middleware: z.literal(0),
                          src: z.string(),
                        })
                        .openapi({
                          description:
                            'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                          examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                          required: ['src', 'continue', 'middleware'],
                        }),
                    ]),
                  )
                  .nullable()
                  .openapi({
                    description:
                      'A list of routes objects used to rewrite paths to point towards other internal or external paths',
                    examples: [[{ dest: 'https://docs.example.com', src: '/docs' }]],
                  }),
                source: z
                  .enum(['cli', 'git', 'import', 'import/repo', 'clone/repo'])
                  .exactOptional()
                  .openapi({
                    description: 'Where was the deployment created from',
                    examples: ['cli'],
                  }),
                target: z
                  .enum(['production', 'staging'])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned',
                    examples: [null],
                  }),
                team: z
                  .object({
                    id: z
                      .string()
                      .openapi({
                        description: 'The ID of the team owner',
                        examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                      }),
                    name: z
                      .string()
                      .openapi({
                        description: 'The name of the team owner',
                        examples: ['FSociety'],
                      }),
                    slug: z
                      .string()
                      .openapi({
                        description: 'The slug of the team owner',
                        examples: ['fsociety'],
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The team that owns the deployment if any',
                    required: ['id', 'name', 'slug'],
                  }),
                type: z.literal('LAMBDAS'),
                url: z
                  .string()
                  .openapi({
                    description: 'A string with the unique URL of the deployment',
                    examples: ['my-instant-deployment-3ij3cxz9qr.now.sh'],
                  }),
                userAliases: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'An array of domains that were provided by the user when creating the Deployment.',
                    examples: [['sub1.example.com', 'sub2.example.com']],
                  }),
                version: z
                  .literal(2)
                  .openapi({
                    description: 'The platform version that was used to create the deployment.',
                    examples: [2],
                  }),
              })
              .openapi({
                description: 'The deployment including both public and private information',
                required: [
                  'build',
                  'createdIn',
                  'env',
                  'inspectorUrl',
                  'isInConcurrentBuildsQueue',
                  'meta',
                  'name',
                  'ownerId',
                  'plan',
                  'projectId',
                  'routes',
                  'alias',
                  'aliasAssigned',
                  'bootedAt',
                  'buildingAt',
                  'createdAt',
                  'creator',
                  'id',
                  'public',
                  'readyState',
                  'regions',
                  'type',
                  'url',
                  'version',
                ],
              }),
            z
              .object({
                alias: z
                  .array(z.string())
                  .openapi({
                    description:
                      'A list of all the aliases (default aliases, staging aliases and production aliases) that were assigned upon deployment creation',
                    examples: [[]],
                  }),
                aliasAssigned: z
                  .boolean()
                  .openapi({
                    description:
                      'A boolean that will be true when the aliases from the alias property were assigned successfully',
                    examples: [true],
                  }),
                aliasError: z
                  .object({ code: z.string(), message: z.string() })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'An object that will contain a `code` and a `message` when the aliasing fails, otherwise the value will be `null`',
                    examples: [null],
                    required: ['code', 'message'],
                  }),
                aliasFinal: z.string().nullable().exactOptional(),
                aliasWarning: z
                  .object({
                    action: z.string().exactOptional(),
                    code: z.string(),
                    link: z.string().exactOptional(),
                    message: z.string(),
                  })
                  .nullable()
                  .exactOptional()
                  .openapi({ required: ['code', 'message'] }),
                automaticAliases: z.array(z.string()).exactOptional(),
                bootedAt: z.number(),
                buildErrorAt: z.number().exactOptional(),
                buildingAt: z.number(),
                canceledAt: z.number().exactOptional(),
                checksConclusion: z
                  .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                  .exactOptional(),
                checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
                createdAt: z
                  .number()
                  .openapi({
                    description:
                      'A number containing the date when the deployment was created in milliseconds',
                    examples: [1540257589405],
                  }),
                creator: z
                  .object({
                    uid: z
                      .string()
                      .openapi({
                        description: 'The ID of the user that created the deployment',
                        examples: ['96SnxkFiMyVKsK3pnoHfx3Hz'],
                      }),
                    username: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The username of the user that created the deployment',
                        examples: ['john-doe'],
                      }),
                  })
                  .openapi({
                    description: 'Information about the deployment creator',
                    required: ['uid'],
                  }),
                errorCode: z.string().exactOptional(),
                errorLink: z.string().exactOptional(),
                errorMessage: z.string().nullable().exactOptional(),
                errorStep: z.string().exactOptional(),
                gitSource: z
                  .xor([
                    z
                      .object({
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        repoId: z.xor([z.string(), z.number()]),
                        sha: z.string().exactOptional(),
                        type: z.literal('github'),
                      })
                      .openapi({ required: ['type', 'repoId'] }),
                    z
                      .object({
                        org: z.string(),
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        repo: z.string(),
                        sha: z.string().exactOptional(),
                        type: z.literal('github'),
                      })
                      .openapi({ required: ['type', 'org', 'repo'] }),
                    z
                      .object({
                        prId: z.number().nullable().exactOptional(),
                        projectId: z.xor([z.string(), z.number()]),
                        ref: z.string().nullable().exactOptional(),
                        sha: z.string().exactOptional(),
                        type: z.literal('gitlab'),
                      })
                      .openapi({ required: ['type', 'projectId'] }),
                    z
                      .object({
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        repoUuid: z.string(),
                        sha: z.string().exactOptional(),
                        type: z.literal('bitbucket'),
                        workspaceUuid: z.string().exactOptional(),
                      })
                      .openapi({ required: ['type', 'repoUuid'] }),
                    z
                      .object({
                        owner: z.string(),
                        prId: z.number().nullable().exactOptional(),
                        ref: z.string().nullable().exactOptional(),
                        sha: z.string().exactOptional(),
                        slug: z.string(),
                        type: z.literal('bitbucket'),
                      })
                      .openapi({ required: ['type', 'owner', 'slug'] }),
                    z
                      .object({
                        gitUrl: z.string(),
                        ref: z.string(),
                        sha: z.string(),
                        type: z.literal('custom'),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'gitUrl'] }),
                    z
                      .object({
                        org: z.string().exactOptional(),
                        ref: z.string(),
                        repo: z.string().exactOptional(),
                        repoId: z.number(),
                        sha: z.string(),
                        type: z.literal('github'),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'repoId'] }),
                    z
                      .object({
                        projectId: z.number(),
                        ref: z.string(),
                        sha: z.string(),
                        type: z.literal('gitlab'),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'projectId'] }),
                    z
                      .object({
                        owner: z.string().exactOptional(),
                        ref: z.string(),
                        repoUuid: z.string(),
                        sha: z.string(),
                        slug: z.string().exactOptional(),
                        type: z.literal('bitbucket'),
                        workspaceUuid: z.string(),
                      })
                      .openapi({ required: ['type', 'ref', 'sha', 'workspaceUuid', 'repoUuid'] }),
                  ])
                  .exactOptional(),
                id: z
                  .string()
                  .openapi({
                    description: 'A string holding the unique ID of the deployment',
                    examples: ['dpl_89qyp1cskzkLrVicDaZoDbjyHuDJ'],
                  }),
                lambdas: z
                  .array(
                    z
                      .object({
                        createdAt: z.number().exactOptional(),
                        entrypoint: z.string().nullable().exactOptional(),
                        id: z.string(),
                        output: z.array(
                          z
                            .object({ functionName: z.string(), path: z.string() })
                            .openapi({ required: ['path', 'functionName'] }),
                        ),
                        readyState: z
                          .enum(['BUILDING', 'ERROR', 'INITIALIZING', 'READY'])
                          .exactOptional(),
                        readyStateAt: z.number().exactOptional(),
                      })
                      .openapi({ required: ['id', 'output'] }),
                  )
                  .exactOptional(),
                meta: z
                  .record(
                    z.string(),
                    z
                      .string()
                      .openapi({
                        description: "An object containing the deployment's metadata",
                        examples: [{ foo: 'bar' }],
                      }),
                  )
                  .openapi({
                    description: "An object containing the deployment's metadata",
                    examples: [{ foo: 'bar' }],
                  }),
                name: z
                  .string()
                  .openapi({
                    description:
                      'The name of the project associated with the deployment at the time that the deployment was created',
                    examples: ['my-project'],
                  }),
                previewCommentsEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether or not preview comments are enabled for the deployment',
                    examples: [false],
                  }),
                public: z
                  .boolean()
                  .openapi({
                    description:
                      'A boolean representing if the deployment is public or not. By default this is `false`',
                    examples: [false],
                  }),
                readyState: z
                  .enum(['QUEUED', 'BUILDING', 'ERROR', 'INITIALIZING', 'READY', 'CANCELED'])
                  .openapi({
                    description:
                      'The state of the deployment depending on the process of deploying, or if it is ready or in an error state',
                    examples: ['READY'],
                  }),
                regions: z
                  .array(z.string())
                  .openapi({
                    description: 'The regions the deployment exists in',
                    examples: [['sfo1']],
                  }),
                source: z
                  .enum(['cli', 'git', 'import', 'import/repo', 'clone/repo'])
                  .exactOptional()
                  .openapi({
                    description: 'Where was the deployment created from',
                    examples: ['cli'],
                  }),
                target: z
                  .enum(['production', 'staging'])
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'If defined, either `staging` if a staging alias in the format `<project>.<team>.now.sh` was assigned upon creation, or `production` if the aliases from `alias` were assigned',
                    examples: [null],
                  }),
                team: z
                  .object({
                    id: z
                      .string()
                      .openapi({
                        description: 'The ID of the team owner',
                        examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                      }),
                    name: z
                      .string()
                      .openapi({
                        description: 'The name of the team owner',
                        examples: ['FSociety'],
                      }),
                    slug: z
                      .string()
                      .openapi({
                        description: 'The slug of the team owner',
                        examples: ['fsociety'],
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The team that owns the deployment if any',
                    required: ['id', 'name', 'slug'],
                  }),
                type: z.literal('LAMBDAS'),
                url: z
                  .string()
                  .openapi({
                    description: 'A string with the unique URL of the deployment',
                    examples: ['my-instant-deployment-3ij3cxz9qr.now.sh'],
                  }),
                userAliases: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description:
                      'An array of domains that were provided by the user when creating the Deployment.',
                    examples: [['sub1.example.com', 'sub2.example.com']],
                  }),
                version: z
                  .literal(2)
                  .openapi({
                    description: 'The platform version that was used to create the deployment.',
                    examples: [2],
                  }),
              })
              .openapi({
                description: 'The deployment including only public information',
                required: [
                  'alias',
                  'aliasAssigned',
                  'bootedAt',
                  'buildingAt',
                  'createdAt',
                  'creator',
                  'id',
                  'name',
                  'meta',
                  'public',
                  'readyState',
                  'regions',
                  'type',
                  'url',
                  'version',
                ],
              }),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV13DeploymentsIdRoute = createRoute({
  method: 'delete',
  path: '/v13/deployments/{id}',
  tags: ['deployments'],
  summary: 'Delete a Deployment',
  description:
    'This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.',
  operationId: 'deleteDeployment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the deployment to be deleted',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The ID of the deployment to be deleted',
              examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
              type: 'string',
            },
          },
          description: 'The ID of the deployment to be deleted',
          examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
        }),
    }),
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A Deployment or Alias URL. In case it is passed, the ID will be ignored',
            in: 'query',
            name: 'url',
            required: false,
            schema: {
              description:
                'A Deployment or Alias URL. In case it is passed, the ID will be ignored',
              examples: ['https://files-orcin-xi.vercel.app/'],
              type: 'string',
            },
          },
          description: 'A Deployment or Alias URL. In case it is passed, the ID will be ignored',
          examples: ['https://files-orcin-xi.vercel.app/'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The deployment was successfully deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              state: z
                .literal('DELETED')
                .openapi({ description: 'A constant with the final state of the deployment.' }),
              uid: z
                .string()
                .openapi({
                  description: 'The removed deployment ID.',
                  examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
                }),
            })
            .openapi({ required: ['uid', 'state'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV2AliasesAliasIdRoute = createRoute({
  method: 'delete',
  path: '/v2/aliases/{aliasId}',
  tags: ['aliases'],
  summary: 'Delete an Alias',
  description: 'Delete an Alias with the specified ID.',
  operationId: 'deleteAlias',
  request: {
    params: z.object({
      aliasId: z
        .xor([z.string()])
        .openapi({
          param: {
            description: 'The ID or alias that will be removed',
            in: 'path',
            name: 'aliasId',
            required: true,
            schema: {
              description: 'The ID or alias that will be removed',
              examples: ['2WjyKQmM8ZnGcJsPWMrHRHrE'],
              oneOf: [{ type: 'string' }],
            },
          },
          description: 'The ID or alias that will be removed',
          examples: ['2WjyKQmM8ZnGcJsPWMrHRHrE'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The alias was successfully removed',
      content: {
        'application/json': {
          schema: z.object({ status: z.literal('SUCCESS') }).openapi({ required: ['status'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The alias was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2DeploymentsIdOrUrlEventsRoute = createRoute({
  method: 'get',
  path: '/v2/deployments/{idOrUrl}/events',
  tags: ['deployments'],
  summary: 'Get deployment events',
  description:
    'Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.',
  operationId: 'getDeploymentEvents',
  request: {
    params: z.object({
      idOrUrl: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier or hostname of the deployment.',
            in: 'path',
            name: 'idOrUrl',
            required: true,
            schema: {
              description: 'The unique identifier or hostname of the deployment.',
              examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
              type: 'string',
            },
          },
          description: 'The unique identifier or hostname of the deployment.',
          examples: ['dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd'],
        }),
    }),
    query: z.object({
      direction: z
        .enum(['backward', 'forward'])
        .default('forward')
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of the returned events based on the timestamp.',
            in: 'query',
            name: 'direction',
            required: false,
            schema: {
              default: 'forward',
              description: 'Order of the returned events based on the timestamp.',
              enum: ['backward', 'forward'],
              examples: ['backward'],
              type: 'string',
            },
          },
          description: 'Order of the returned events based on the timestamp.',
          examples: ['backward'],
        }),
      follow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'When enabled, this endpoint will return live events as they happen.',
            in: 'query',
            name: 'follow',
            required: false,
            schema: {
              description: 'When enabled, this endpoint will return live events as they happen.',
              enum: [0, 1],
              examples: [1],
              type: 'number',
            },
          },
          description: 'When enabled, this endpoint will return live events as they happen.',
          examples: [1],
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of events to return. Provide `-1` to return all available logs.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              description:
                'Maximum number of events to return. Provide `-1` to return all available logs.',
              examples: [100],
              type: 'number',
            },
          },
          description:
            'Maximum number of events to return. Provide `-1` to return all available logs.',
          examples: [100],
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deployment build ID.',
            in: 'query',
            name: 'name',
            required: false,
            schema: {
              description: 'Deployment build ID.',
              examples: ['bld_cotnkcr76'],
              type: 'string',
            },
          },
          description: 'Deployment build ID.',
          examples: ['bld_cotnkcr76'],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp for when build logs should be pulled from.',
            in: 'query',
            name: 'since',
            required: false,
            schema: {
              description: 'Timestamp for when build logs should be pulled from.',
              examples: [1540095775941],
              type: 'number',
            },
          },
          description: 'Timestamp for when build logs should be pulled from.',
          examples: [1540095775941],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp for when the build logs should be pulled up until.',
            in: 'query',
            name: 'until',
            required: false,
            schema: {
              description: 'Timestamp for when the build logs should be pulled up until.',
              examples: [1540106318643],
              type: 'number',
            },
          },
          description: 'Timestamp for when the build logs should be pulled up until.',
          examples: [1540106318643],
        }),
      statusCode: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([z.number(), z.string()]))
        .exactOptional()
        .openapi({
          param: {
            description: 'HTTP status code range to filter events by.',
            in: 'query',
            name: 'statusCode',
            required: false,
            schema: {
              description: 'HTTP status code range to filter events by.',
              examples: ['5xx'],
              oneOf: [{ type: 'number' }, { type: 'string' }],
            },
          },
          description: 'HTTP status code range to filter events by.',
          examples: ['5xx'],
        }),
      delimiter: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'delimiter',
            required: false,
            schema: { enum: [0, 1], examples: [1], type: 'number' },
          },
          examples: [1],
        }),
      builds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'builds',
            required: false,
            schema: { enum: [0, 1], examples: [1], type: 'number' },
          },
          examples: [1],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A stream of jsonlines where each line is a deployment log item.\nArray of deployment logs for the provided query.',
      content: {
        'application/json': {
          schema: z.array(
            z.xor([
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      serial: z.string(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deploymentId', 'id', 'date', 'serial'] }),
                  type: z.literal('command'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      serial: z.string(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.literal('deployment-state'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      serial: z.string(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.literal('delimiter'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      created: z.number(),
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      serial: z.string(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['date', 'id', 'deploymentId', 'created', 'serial'] }),
                  type: z.literal('exit'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      requestId: z.string().exactOptional(),
                      serial: z.string(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.literal('middleware'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      requestId: z.string().exactOptional(),
                      serial: z.string(),
                      statusCode: z.number().exactOptional(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.enum([
                    'delimiter',
                    'command',
                    'stdout',
                    'stderr',
                    'exit',
                    'deployment-state',
                    'middleware',
                    'middleware-invocation',
                    'edge-function-invocation',
                    'fatal',
                  ]),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
            ]),
          ),
        },
        'application/stream+json': {
          schema: z.xor([
            z
              .object({
                created: z.number(),
                payload: z
                  .object({
                    date: z.number(),
                    deploymentId: z.string(),
                    id: z.string(),
                    serial: z.string(),
                    text: z.string().exactOptional(),
                  })
                  .openapi({ required: ['deploymentId', 'id', 'date', 'serial'] }),
                type: z.literal('command'),
              })
              .openapi({ required: ['type', 'created', 'payload'] }),
            z
              .object({
                created: z.number(),
                payload: z
                  .object({
                    date: z.number(),
                    deploymentId: z.string(),
                    id: z.string(),
                    info: z
                      .object({
                        entrypoint: z.string().exactOptional(),
                        name: z.string(),
                        path: z.string().exactOptional(),
                        step: z.string().exactOptional(),
                        type: z.string(),
                      })
                      .openapi({ required: ['type', 'name'] }),
                    serial: z.string(),
                  })
                  .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                type: z.literal('deployment-state'),
              })
              .openapi({ required: ['type', 'created', 'payload'] }),
            z
              .object({
                created: z.number(),
                payload: z
                  .object({
                    date: z.number(),
                    deploymentId: z.string(),
                    id: z.string(),
                    info: z
                      .object({
                        entrypoint: z.string().exactOptional(),
                        name: z.string(),
                        path: z.string().exactOptional(),
                        step: z.string().exactOptional(),
                        type: z.string(),
                      })
                      .openapi({ required: ['type', 'name'] }),
                    serial: z.string(),
                  })
                  .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                type: z.literal('delimiter'),
              })
              .openapi({ required: ['type', 'created', 'payload'] }),
            z
              .object({
                created: z.number(),
                payload: z
                  .object({
                    created: z.number(),
                    date: z.number(),
                    deploymentId: z.string(),
                    id: z.string(),
                    serial: z.string(),
                    text: z.string().exactOptional(),
                  })
                  .openapi({ required: ['date', 'id', 'deploymentId', 'created', 'serial'] }),
                type: z.literal('exit'),
              })
              .openapi({ required: ['type', 'created', 'payload'] }),
            z
              .object({
                created: z.number(),
                payload: z
                  .object({
                    date: z.number(),
                    deploymentId: z.string(),
                    id: z.string(),
                    info: z
                      .object({
                        entrypoint: z.string().exactOptional(),
                        name: z.string(),
                        path: z.string().exactOptional(),
                        step: z.string().exactOptional(),
                        type: z.string(),
                      })
                      .openapi({ required: ['type', 'name'] }),
                    requestId: z.string().exactOptional(),
                    serial: z.string(),
                    text: z.string().exactOptional(),
                  })
                  .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                type: z.literal('middleware'),
              })
              .openapi({ required: ['type', 'created', 'payload'] }),
            z
              .object({
                created: z.number(),
                payload: z
                  .object({
                    date: z.number(),
                    deploymentId: z.string(),
                    id: z.string(),
                    info: z
                      .object({
                        entrypoint: z.string().exactOptional(),
                        name: z.string(),
                        path: z.string().exactOptional(),
                        step: z.string().exactOptional(),
                        type: z.string(),
                      })
                      .openapi({ required: ['type', 'name'] }),
                    requestId: z.string().exactOptional(),
                    serial: z.string(),
                    statusCode: z.number().exactOptional(),
                    text: z.string().exactOptional(),
                  })
                  .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                type: z.enum([
                  'delimiter',
                  'command',
                  'stdout',
                  'stderr',
                  'exit',
                  'deployment-state',
                  'middleware',
                  'middleware-invocation',
                  'edge-function-invocation',
                  'fatal',
                ]),
              })
              .openapi({ required: ['type', 'created', 'payload'] }),
            z.xor([
              z.object({}),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      serial: z.string(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deploymentId', 'id', 'date', 'serial'] }),
                  type: z.literal('command'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      serial: z.string(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.literal('deployment-state'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      serial: z.string(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.literal('delimiter'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      created: z.number(),
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      serial: z.string(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['date', 'id', 'deploymentId', 'created', 'serial'] }),
                  type: z.literal('exit'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      requestId: z.string().exactOptional(),
                      serial: z.string(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.literal('middleware'),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
              z
                .object({
                  created: z.number(),
                  payload: z
                    .object({
                      date: z.number(),
                      deploymentId: z.string(),
                      id: z.string(),
                      info: z
                        .object({
                          entrypoint: z.string().exactOptional(),
                          name: z.string(),
                          path: z.string().exactOptional(),
                          step: z.string().exactOptional(),
                          type: z.string(),
                        })
                        .openapi({ required: ['type', 'name'] }),
                      requestId: z.string().exactOptional(),
                      serial: z.string(),
                      statusCode: z.number().exactOptional(),
                      text: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deploymentId', 'info', 'id', 'date', 'serial'] }),
                  type: z.enum([
                    'delimiter',
                    'command',
                    'stdout',
                    'stderr',
                    'exit',
                    'deployment-state',
                    'middleware',
                    'middleware-invocation',
                    'edge-function-invocation',
                    'fatal',
                  ]),
                })
                .openapi({ required: ['type', 'created', 'payload'] }),
            ]),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2DeploymentsIdAliasesRoute = createRoute({
  method: 'get',
  path: '/v2/deployments/{id}/aliases',
  tags: ['aliases'],
  summary: 'List Deployment Aliases',
  description:
    'Retrieves all Aliases for the Deployment with the given ID. The authenticated User must own the deployment.',
  operationId: 'listDeploymentAliases',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the deployment the aliases should be listed for',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The ID of the deployment the aliases should be listed for',
              examples: ['dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa'],
              type: 'string',
            },
          },
          description: 'The ID of the deployment the aliases should be listed for',
          examples: ['dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of aliases assigned to the deployment',
      content: {
        'application/json': {
          schema: z
            .object({
              aliases: z
                .array(
                  z
                    .object({
                      alias: z
                        .string()
                        .openapi({
                          description:
                            'The alias name, it could be a `.vercel.app` subdomain or a custom domain',
                          examples: ['my-alias.vercel.app'],
                        }),
                      created: z.iso
                        .datetime({ offset: true })
                        .openapi({
                          description: 'The date when the alias was created',
                          examples: ['2017-04-26T23:00:34.232Z'],
                        }),
                      protectionBypass: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({
                          description: 'Construct a type with a set of properties K of type T',
                        }),
                      redirect: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({
                          description:
                            'Target destination domain for redirect when the alias is a redirect',
                        }),
                      uid: z
                        .string()
                        .openapi({
                          description: 'The unique identifier of the alias',
                          examples: ['2WjyKQmM8ZnGcJsPWMrHRHrE'],
                        }),
                    })
                    .openapi({
                      description: 'A list of the aliases assigned to the deployment',
                      required: ['uid', 'alias', 'created'],
                    }),
                )
                .openapi({ description: 'A list of the aliases assigned to the deployment' }),
            })
            .openapi({ required: ['aliases'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The deployment was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const postV2DeploymentsIdAliasesRoute = createRoute({
  method: 'post',
  path: '/v2/deployments/{id}/aliases',
  tags: ['aliases'],
  summary: 'Assign an Alias',
  description:
    'Creates a new alias for the deployment with the given deployment ID. The authenticated user must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.',
  operationId: 'assignAlias',
  request: {
    params: z.object({
      id: z
        .xor([z.string()])
        .openapi({
          param: {
            description: 'The ID of the deployment the aliases should be listed for',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The ID of the deployment the aliases should be listed for',
              examples: ['dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa'],
              oneOf: [{ type: 'string' }],
            },
          },
          description: 'The ID of the deployment the aliases should be listed for',
          examples: ['dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The alias we want to assign to the deployment defined in the URL',
                  examples: ['my-alias.vercel.app'],
                }),
              redirect: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307',
                  examples: [null],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The alias was successfully assigned to the deployment',
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .string()
                .openapi({
                  description: 'The assigned alias name',
                  examples: ['my-alias.vercel.app'],
                }),
              created: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date when the alias was created',
                  examples: ['2017-04-26T23:00:34.232Z'],
                }),
              oldDeploymentId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The unique identifier of the previously aliased deployment, only received when the alias was used before',
                  examples: ['dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa'],
                }),
              uid: z
                .string()
                .openapi({
                  description: 'The unique identifier of the alias',
                  examples: ['2WjyKQmM8ZnGcJsPWMrHRHrE'],
                }),
            })
            .openapi({ required: ['uid', 'alias', 'created'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nThe cert for the provided alias is not ready\nThe deployment is not READY and can not be aliased\nThe supplied alias is invalid',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'You do not have permission to access this resource.\nIf no .vercel.app alias exists then we fail (nothing to mirror)',
    },
    404: {
      description:
        'The domain used for the alias was not found\nThe project for the given project can not be found\nThe deployment was not found',
    },
    409: { description: 'The provided alias is already assigned to the given deployment' },
  },
  security: [{ bearerToken: [] }],
})

export const postV2DomainsDomainRecordsRoute = createRoute({
  method: 'post',
  path: '/v2/domains/{domain}/records',
  tags: ['dns'],
  summary: 'Create a DNS record',
  description: 'Creates a DNS record for a domain.',
  operationId: 'createRecord',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The domain used to create the DNS record.',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The domain used to create the DNS record.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The domain used to create the DNS record.',
          examples: ['example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .union([
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      examples: ['subdomain'],
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('A').openapi({ description: 'Must be of type `A`.' }),
                  value: z
                    .ipv4()
                    .openapi({
                      description: 'The record value must be a valid IPv4 address.',
                      examples: ['192.0.2.42'],
                    }),
                })
                .openapi({ required: ['type', 'value', 'name'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      examples: ['subdomain'],
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('AAAA').openapi({ description: 'Must be of type `AAAA`.' }),
                  value: z
                    .ipv6()
                    .openapi({
                      description: 'An AAAA record pointing to an IPv6 address.',
                      examples: ['2001:DB8::42'],
                    }),
                })
                .openapi({ required: ['type', 'value', 'name'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      examples: ['subdomain'],
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('ALIAS').openapi({ description: 'Must be of type `ALIAS`.' }),
                  value: z
                    .string()
                    .openapi({
                      description:
                        'An ALIAS virtual record pointing to a hostname resolved to an A record on server side.',
                      examples: ['cname.vercel-dns.com'],
                    }),
                })
                .openapi({ required: ['type', 'value', 'name'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      examples: ['subdomain'],
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('CAA').openapi({ description: 'Must be of type `CAA`.' }),
                  value: z
                    .string()
                    .openapi({
                      description:
                        'A CAA record to specify which Certificate Authorities (CAs) are allowed to issue certificates for the domain.',
                      examples: ['0 issue \\"letsencrypt.org\\"'],
                    }),
                })
                .openapi({ required: ['type', 'value', 'name'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      examples: ['subdomain'],
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('CNAME').openapi({ description: 'Must be of type `CNAME`.' }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'A CNAME record mapping to another domain name.',
                      examples: ['cname.vercel-dns.com'],
                    }),
                })
                .openapi({ required: ['type', 'name'] }),
              z
                .strictObject({
                  mxPriority: z
                    .number()
                    .min(0)
                    .max(65535)
                    .openapi({ examples: [10] }),
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      examples: ['subdomain'],
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('MX').openapi({ description: 'Must be of type `MX`.' }),
                  value: z
                    .string()
                    .openapi({
                      description:
                        'An MX record specifying the mail server responsible for accepting messages on behalf of the domain name.',
                      examples: ['10 mail.example.com.'],
                    }),
                })
                .openapi({ required: ['type', 'value', 'name', 'mxPriority'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      name: 'subdomain',
                    }),
                  srv: z
                    .strictObject({
                      port: z.union([
                        z
                          .number()
                          .min(0)
                          .max(65535)
                          .openapi({ examples: [5000] }),
                        z.null().nullable(),
                      ]),
                      priority: z.union([
                        z
                          .number()
                          .min(0)
                          .max(65535)
                          .openapi({ examples: [10] }),
                        z.null().nullable(),
                      ]),
                      target: z
                        .string()
                        .exactOptional()
                        .openapi({ examples: ['host.example.com'] }),
                      weight: z.union([
                        z
                          .number()
                          .min(0)
                          .max(65535)
                          .openapi({ examples: [10] }),
                        z.null().nullable(),
                      ]),
                    })
                    .openapi({ required: ['weight', 'port', 'priority'] }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('SRV').openapi({ description: 'Must be of type `SRV`.' }),
                })
                .openapi({ required: ['type', 'name', 'srv'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({
                      description: 'A subdomain name or an empty string for the root domain.',
                      name: 'subdomain',
                    }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('TXT').openapi({ description: 'Must be of type `TXT`.' }),
                  value: z
                    .string()
                    .openapi({
                      description: 'A TXT record containing arbitrary text.',
                      examples: ['hello'],
                    }),
                })
                .openapi({ required: ['type', 'value', 'name'] }),
              z
                .strictObject({
                  name: z
                    .string()
                    .openapi({ description: 'A subdomain name.', examples: ['subdomain'] }),
                  ttl: z
                    .number()
                    .min(60)
                    .max(2147483647)
                    .exactOptional()
                    .openapi({
                      description:
                        'The TTL value. Must be a number between 60 and 2147483647. Default value is 60.',
                      examples: [60],
                    }),
                  type: z.literal('NS').openapi({ description: 'Must be of type `NS`.' }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'An NS domain value.', examples: ['ns1.example.com'] }),
                })
                .openapi({ required: ['type', 'name'] }),
            ])
            .and(
              z
                .object({
                  type: z
                    .enum(['A', 'AAAA', 'ALIAS', 'CAA', 'CNAME', 'MX', 'SRV', 'TXT', 'NS'])
                    .openapi({
                      description: 'The type of record, it could be one of the valid DNS records.',
                    }),
                })
                .openapi({ required: ['type'] }),
            )
            .openapi({ required: ['type'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response showing the uid of the newly created DNS record.',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ uid: z.string(), updated: z.number() })
              .openapi({ required: ['uid', 'updated'] }),
            z
              .object({
                uid: z
                  .string()
                  .openapi({
                    description: 'The id of the newly created DNS record',
                    examples: ['rec_V0fra8eEgQwEpFhYG2vTzC3K'],
                  }),
              })
              .openapi({ required: ['uid'] }),
          ]),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    401: { description: '' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV2DomainsDomainRecordsRecordIdRoute = createRoute({
  method: 'delete',
  path: '/v2/domains/{domain}/records/{recordId}',
  tags: ['dns'],
  summary: 'Delete a DNS record',
  description: 'Removes an existing DNS record from a domain name.',
  operationId: 'removeRecord',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain',
            required: true,
            schema: { examples: ['example.com'], type: 'string' },
          },
          examples: ['example.com'],
        }),
      recordId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'recordId',
            required: true,
            schema: { examples: ['rec_V0fra8eEgQwEpFhYG2vTzC3K'], type: 'string' },
          },
          examples: ['rec_V0fra8eEgQwEpFhYG2vTzC3K'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response by removing the specified DNS record.',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    401: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postV2FilesRoute = createRoute({
  method: 'post',
  path: '/v2/files',
  tags: ['deployments'],
  summary: 'Upload Deployment Files',
  description:
    "Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.",
  operationId: 'uploadFile',
  request: {
    headers: z.object({
      'Content-Length': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The file size in bytes',
            in: 'header',
            name: 'Content-Length',
            schema: { description: 'The file size in bytes', type: 'number' },
            required: false,
          },
          description: 'The file size in bytes',
        }),
      'x-vercel-digest': z
        .string()
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'The file SHA1 used to check the integrity',
            in: 'header',
            name: 'x-vercel-digest',
            schema: {
              description: 'The file SHA1 used to check the integrity',
              maxLength: 40,
              type: 'string',
            },
            required: false,
          },
          description: 'The file SHA1 used to check the integrity',
        }),
      'x-now-digest': z
        .string()
        .max(40)
        .exactOptional()
        .openapi({
          param: {
            description: 'The file SHA1 used to check the integrity',
            in: 'header',
            name: 'x-now-digest',
            schema: {
              deprecated: true,
              description: 'The file SHA1 used to check the integrity',
              maxLength: 40,
              type: 'string',
            },
            required: false,
          },
          deprecated: true,
          description: 'The file SHA1 used to check the integrity',
        }),
      'x-now-size': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The file size as an alternative to `Content-Length`',
            in: 'header',
            name: 'x-now-size',
            schema: {
              deprecated: true,
              description: 'The file size as an alternative to `Content-Length`',
              type: 'number',
            },
            required: false,
          },
          deprecated: true,
          description: 'The file size as an alternative to `Content-Length`',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'File already uploaded\nFile successfully uploaded',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                urls: z
                  .array(z.string())
                  .openapi({
                    description: 'Array of URLs where the file was updated',
                    examples: [['example-upload.aws.com']],
                  }),
              })
              .openapi({ required: ['urls'] }),
            z.object({}),
          ]),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the headers is invalid\nDigest is not valid\nFile size is not valid',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2IntegrationsLogDrainsRoute = createRoute({
  method: 'get',
  path: '/v2/integrations/log-drains',
  tags: ['logDrains'],
  summary: 'Retrieves a list of Integration log drains',
  description:
    'Retrieves a list of all Integration log drains that are defined for the authorized account. When using an OAuth2 token, the list is limited to log drains created by the authenticated integration.',
  operationId: 'getIntegrationLogDrains',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of log drains',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                branch: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The branch regexp of log drain',
                    examples: ['feature/*'],
                  }),
                clientId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The oauth2 client application id that created this log drain',
                    examples: ['oac_xRhY4LAB7yLhUADD69EvV7ct'],
                  }),
                configurationId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The client configuration this log drain was created with',
                    examples: ['icfg_cuwj0AdCdH3BwWT4LPijCC7t'],
                  }),
                createdAt: z
                  .number()
                  .openapi({
                    description: 'A timestamp that tells you when the log drain was created',
                    examples: [1558531915505],
                  }),
                createdFrom: z
                  .enum(['self-served', 'integration'])
                  .exactOptional()
                  .openapi({
                    description: 'Whether the log drain was created by an integration or by a user',
                    examples: ['integration'],
                  }),
                deliveryFormat: z
                  .enum(['json', 'ndjson', 'syslog'])
                  .exactOptional()
                  .openapi({ description: 'The delivery log format', examples: ['json'] }),
                environment: z
                  .enum(['production', 'preview'])
                  .exactOptional()
                  .openapi({
                    description: 'The environment of log drain',
                    examples: ['production'],
                  }),
                headers: z
                  .record(z.string(), z.string())
                  .exactOptional()
                  .openapi({
                    description: 'Construct a type with a set of properties K of type T',
                    examples: ['{"Authorization": "Bearer 123"}'],
                  }),
                id: z
                  .string()
                  .openapi({
                    description:
                      'The unique identifier of the log drain. Always prefixed with `ld_`',
                    examples: ['ld_nBuA7zCID8g4QZ8g'],
                  }),
                name: z
                  .string()
                  .openapi({
                    description: 'The name of the log drain',
                    examples: ['My first log drain'],
                  }),
                ownerId: z
                  .string()
                  .openapi({
                    description:
                      'The identifier of the team or user whose events will trigger the log drain',
                    examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                  }),
                projectId: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ examples: ['AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb'] }),
                projectIds: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({
                    description: 'The identifier of the projects this log drain is associated with',
                    examples: ['AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb'],
                  }),
                sources: z
                  .array(
                    z
                      .enum(['static', 'lambda', 'build', 'edge', 'external'])
                      .openapi({
                        description:
                          'The sources from which logs are currently being delivered to this log drain.',
                        examples: [['build', 'edge']],
                      }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'The sources from which logs are currently being delivered to this log drain.',
                    examples: [['build', 'edge']],
                  }),
                type: z
                  .enum(['json', 'ndjson', 'syslog'])
                  .openapi({ description: 'The type of log format', examples: ['json'] }),
                url: z
                  .string()
                  .openapi({
                    description: 'The URL to call when logs are generated',
                    examples: ['https://example.com/log-drain'],
                  }),
              })
              .openapi({ required: ['createdAt', 'id', 'type', 'name', 'ownerId', 'url'] }),
          ),
        },
      },
    },
    400: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV2IntegrationsLogDrainsRoute = createRoute({
  method: 'post',
  path: '/v2/integrations/log-drains',
  tags: ['logDrains'],
  summary: 'Creates a new Integration Log Drain',
  description:
    'Creates an Integration log drain. This endpoint must be called with an OAuth2 client (integration), since log drains are tied to integrations. If it is called with a different token type it will produce a 400 error.',
  operationId: 'createLogDrain',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              branch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The branch regexp of log drain',
                  examples: ['feature/*'],
                }),
              deliveryFormat: z
                .enum(['json', 'ndjson', 'syslog'])
                .exactOptional()
                .openapi({ description: 'The delivery log format', examples: ['json'] }),
              environment: z
                .enum(['preview', 'production'])
                .exactOptional()
                .openapi({ description: 'The environment of log drain', examples: ['production'] }),
              headers: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({ description: 'Headers to be sent together with the request' }),
              name: z
                .string()
                .regex(/^[A-z0-9_ -]+$/)
                .max(100)
                .openapi({
                  description: 'The name of the log drain',
                  examples: ['My first log drain'],
                }),
              projectIds: z
                .array(z.string().regex(/^[a-zA-z0-9_]+$/))
                .min(1)
                .max(50)
                .exactOptional(),
              secret: z
                .string()
                .regex(/^[A-z0-9_ -]+$/)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'A secret to sign log drain notification headers so a consumer can verify their authenticity',
                  examples: ['a1Xsfd325fXcs'],
                }),
              sources: z
                .array(z.enum(['static', 'lambda', 'build', 'edge', 'external']))
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              url: z
                .url()
                .regex(/^(https?|syslog\\+tls|syslog):\/\//)
                .openapi({
                  description:
                    'The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`, and `syslog+tls:` or `syslog:` when the type is `syslog`.',
                  examples: ['https://example.com/log-drain'],
                }),
            })
            .openapi({ required: ['name', 'url'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The log drain was successfully created',
      content: {
        'application/json': {
          schema: z
            .object({
              branch: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The branch regexp of log drain',
                  examples: ['feature/*'],
                }),
              clientId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The oauth2 client application id that created this log drain',
                  examples: ['oac_xRhY4LAB7yLhUADD69EvV7ct'],
                }),
              configurationId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The client configuration this log drain was created with',
                  examples: ['icfg_cuwj0AdCdH3BwWT4LPijCC7t'],
                }),
              createdAt: z
                .number()
                .openapi({
                  description: 'A timestamp that tells you when the log drain was created',
                  examples: [1558531915505],
                }),
              createdFrom: z
                .enum(['self-served', 'integration'])
                .exactOptional()
                .openapi({
                  description: 'Whether the log drain was created by an integration or by a user',
                  examples: ['integration'],
                }),
              deliveryFormat: z
                .enum(['json', 'ndjson', 'syslog'])
                .exactOptional()
                .openapi({ description: 'The delivery log format', examples: ['json'] }),
              environment: z
                .enum(['preview', 'production'])
                .exactOptional()
                .openapi({ description: 'The environment of log drain', examples: ['production'] }),
              headers: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({
                  description: 'Construct a type with a set of properties K of type T',
                  examples: ['{"Authorization": "Bearer 123"}'],
                }),
              id: z
                .string()
                .openapi({
                  description: 'The unique identifier of the log drain. Always prefixed with `ld_`',
                  examples: ['ld_nBuA7zCID8g4QZ8g'],
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the log drain',
                  examples: ['My first log drain'],
                }),
              ownerId: z
                .string()
                .openapi({
                  description:
                    'The identifier of the team or user whose events will trigger the log drain',
                  examples: ['kr1PsOIzqEL5Xg6M4VZcZosf'],
                }),
              projectId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ examples: ['AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb'] }),
              projectIds: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The identifier of the projects this log drain is associated with',
                  examples: ['AbCgVkqoxXeXCDWehVir51LHGrrcWL4mkYm14W6UBPWQeb'],
                }),
              sources: z
                .array(
                  z
                    .enum(['static', 'lambda', 'build', 'edge', 'external'])
                    .openapi({
                      description:
                        'The sources from which logs are currently being delivered to this log drain.',
                      examples: [['build', 'edge']],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The sources from which logs are currently being delivered to this log drain.',
                  examples: [['build', 'edge']],
                }),
              type: z
                .enum(['json', 'ndjson', 'syslog'])
                .openapi({ description: 'The type of log format', examples: ['json'] }),
              url: z
                .string()
                .openapi({
                  description: 'The URL to call when logs are generated',
                  examples: ['https://example.com/log-drain'],
                }),
            })
            .openapi({ required: ['createdAt', 'id', 'type', 'name', 'ownerId', 'url'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nThe provided token is not from an OAuth2 Client',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV2SecretsIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/v2/secrets/{idOrName}',
  tags: ['secrets'],
  summary: 'Delete a secret',
  description: "This deletes the user's secret defined in the URL.",
  operationId: 'deleteSecret',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The name or the unique identifier to which the secret belongs to.',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The name or the unique identifier to which the secret belongs to.',
              examples: ['sec_RKc5iV0rV3ZSrFrHiruRno7k'],
              type: 'string',
            },
          },
          description: 'The name or the unique identifier to which the secret belongs to.',
          examples: ['sec_RKc5iV0rV3ZSrFrHiruRno7k'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              created: z
                .number()
                .openapi({
                  description: 'The date when the secret was created.',
                  examples: ['2021-02-10T13:11:49.180Z'],
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the deleted secret.',
                  examples: ['my-api-key'],
                }),
              uid: z
                .string()
                .openapi({
                  description: 'The unique identifier of the deleted secret.',
                  examples: ['sec_XCG7t7AIHuO2SBA8667zNUiM'],
                }),
            })
            .openapi({ required: ['uid', 'name', 'created'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV2SecretsNameRoute = createRoute({
  method: 'post',
  path: '/v2/secrets/{name}',
  tags: ['secrets'],
  summary: 'Create a new secret',
  description: 'Allows to create a new secret.',
  operationId: 'createSecret',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              decryptable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether the secret value can be decrypted after it has been created.',
                  examples: [true],
                }),
              name: z
                .string()
                .openapi({
                  description: 'The name of the secret (max 100 characters).',
                  examples: ['my-api-key'],
                }),
              projectId: z
                .string()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description: 'Associate a secret to a project.',
                  examples: ['prj_2WjyKQmM8ZnGcJsPWMrHRHrE'],
                }),
              value: z
                .string()
                .openapi({
                  description: 'The value of the new secret.',
                  examples: ['some secret value'],
                }),
            })
            .openapi({ required: ['name', 'value'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response showing the created secret.',
      content: {
        'application/json': {
          schema: z
            .object({
              created: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date when the secret was created.',
                  examples: ['2021-02-10T13:11:49.180Z'],
                }),
              createdAt: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Timestamp for when the secret was created.',
                  examples: [1609492210000],
                }),
              decryptable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the secret value can be decrypted after it has been created.',
                  examples: [true],
                }),
              name: z
                .string()
                .openapi({ description: 'The name of the secret.', examples: ['my-api-key'] }),
              projectId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the project which the secret belongs to.',
                  examples: ['prj_2WjyKQmM8ZnGcJsPWMrHRHrE'],
                }),
              teamId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the team the secret was created for.',
                  examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                }),
              uid: z
                .string()
                .openapi({
                  description: 'The unique identifier of the secret.',
                  examples: ['sec_XCG7t7AIHuO2SBA8667zNUiM'],
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the user who created the secret.',
                  examples: ['2qDDuGFTWXBLDNnqZfWPDp1A'],
                }),
              value: z
                .object({
                  data: z.array(z.number()).exactOptional(),
                  type: z.literal('Buffer').exactOptional(),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['value', 'created', 'name', 'uid'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV2SecretsNameRoute = createRoute({
  method: 'patch',
  path: '/v2/secrets/{name}',
  tags: ['secrets'],
  summary: 'Change secret name',
  description:
    "Enables to edit the name of a user's secret. The name has to be unique to that user's secrets.",
  operationId: 'renameSecret',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the secret.',
            in: 'path',
            name: 'name',
            required: true,
            schema: {
              description: 'The name of the secret.',
              examples: ['my-api-key'],
              type: 'string',
            },
          },
          description: 'The name of the secret.',
          examples: ['my-api-key'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              name: z
                .string()
                .openapi({ description: 'The name of the new secret.', examples: ['my-api-key'] }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              created: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'Enables basic storage and retrieval of dates and times.',
                }),
              name: z.string(),
              oldName: z.string(),
              uid: z.string(),
            })
            .openapi({ required: ['uid', 'name', 'created', 'oldName'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2TeamsRoute = createRoute({
  method: 'get',
  path: '/v2/teams',
  tags: ['teams'],
  summary: 'List all teams',
  description: 'Get a paginated list of all the Teams the authenticated User is a member of.',
  operationId: 'getTeams',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of Teams which may be returned.',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Maximum number of Teams which may be returned.',
              examples: [20],
              type: 'number',
            },
            required: false,
          },
          description: 'Maximum number of Teams which may be returned.',
          examples: [20],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp (in milliseconds) to only include Teams created since then.',
            in: 'query',
            name: 'since',
            schema: {
              description: 'Timestamp (in milliseconds) to only include Teams created since then.',
              examples: [1540095775951],
              type: 'number',
            },
            required: false,
          },
          description: 'Timestamp (in milliseconds) to only include Teams created since then.',
          examples: [1540095775951],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp (in milliseconds) to only include Teams created until then.',
            in: 'query',
            name: 'until',
            schema: {
              description: 'Timestamp (in milliseconds) to only include Teams created until then.',
              examples: [1540095775951],
              type: 'number',
            },
            required: false,
          },
          description: 'Timestamp (in milliseconds) to only include Teams created until then.',
          examples: [1540095775951],
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of teams.',
      content: {
        'application/json': {
          schema: z
            .object({
              pagination: PaginationSchema,
              teams: z.array(z.xor([TeamSchema, TeamLimitedSchema])),
            })
            .openapi({
              description: 'A paginated list of teams.',
              required: ['teams', 'pagination'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2TeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/v2/teams/{teamId}',
  tags: ['teams'],
  summary: 'Get a Team',
  description: 'Get information for the Team specified by the `teamId` parameter.',
  operationId: 'getTeam',
  request: {
    query: z.object({
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'slug', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested team',
      content: { 'application/json': { schema: TeamSchema } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: {
      description:
        'You do not have permission to access this resource.\nNot authorized to access the team.',
    },
    404: { description: 'Team was not found.' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV2TeamsTeamIdRoute = createRoute({
  method: 'patch',
  path: '/v2/teams/{teamId}',
  tags: ['teams'],
  summary: 'Update a Team',
  description:
    'Update the information of a Team specified by the `teamId` parameter. The request body should contain the information that will be updated on the Team.',
  operationId: 'patchTeam',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              avatar: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The hash value of an uploaded image.',
                  regex: '^[0-9a-f]{40}$',
                }),
              description: z
                .string()
                .max(140)
                .exactOptional()
                .openapi({
                  description: 'A short text that describes the team.',
                  examples: ['Our mission is to make cloud computing accessible to everyone'],
                }),
              emailDomain: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  examples: ['example.com'],
                  regex:
                    '\\\\b((?=[a-z0-9-]{1,63}\\\\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\\\\.)+[a-z]{2,63}\\\\b',
                }),
              enablePreviewFeedback: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Enable preview comments: one of on, off or default.',
                  examples: ['on'],
                }),
              migrateExistingEnvVariablesToSensitive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Runs a task that migrates all existing environment variables to sensitive environment variables.',
                  examples: [false],
                }),
              name: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'The name of the team.', examples: ['My Team'] }),
              previewDeploymentSuffix: z
                .hostname()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Suffix that will be used for all preview deployments.',
                  examples: ['example.dev'],
                }),
              regenerateInviteCode: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Create a new invite code and replace the current one.',
                  examples: [true],
                }),
              remoteCaching: z
                .strictObject({
                  enabled: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Enable or disable remote caching for the team.',
                      examples: [true],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Whether or not remote caching is enabled for the team',
                  required: [],
                }),
              saml: z
                .strictObject({
                  enforced: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Require that members of the team use SAML Single Sign-On.',
                      examples: [true],
                    }),
                  roles: z
                    .record(
                      z.string(),
                      z.enum(['OWNER', 'MEMBER', 'VIEWER', 'DEVELOPER', 'BILLING']),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              sensitiveEnvironmentVariablePolicy: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Sensitive environment variable policy: one of on, off or default.',
                  examples: ['on'],
                }),
              slug: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new slug for the team.', examples: ['my-team'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TeamSchema } } },
    400: { description: 'One of the provided values in the request body is invalid.' },
    402: { description: '' },
    403: {
      description:
        'You do not have permission to access this resource.\nNot authorized to update the team. Must be an OWNER.',
    },
    404: { description: 'Team was not found.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2TeamsTeamIdMembersRoute = createRoute({
  method: 'get',
  path: '/v2/teams/{teamId}/members',
  tags: ['teams'],
  summary: 'List team members',
  description: 'Get a paginated list of team members for the provided team.',
  operationId: 'getTeamMembers',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit how many teams should be returned',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              description: 'Limit how many teams should be returned',
              examples: [20],
              type: 'number',
            },
          },
          description: 'Limit how many teams should be returned',
          examples: [20],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp in milliseconds to only include members added since then.',
            in: 'query',
            name: 'since',
            required: false,
            schema: {
              description: 'Timestamp in milliseconds to only include members added since then.',
              examples: [1540095775951],
              type: 'number',
            },
          },
          description: 'Timestamp in milliseconds to only include members added since then.',
          examples: [1540095775951],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp in milliseconds to only include members added until then.',
            in: 'query',
            name: 'until',
            required: false,
            schema: {
              description: 'Timestamp in milliseconds to only include members added until then.',
              examples: [1540095775951],
              type: 'number',
            },
          },
          description: 'Timestamp in milliseconds to only include members added until then.',
          examples: [1540095775951],
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search team members by their name, username, and email.',
            in: 'query',
            name: 'search',
            required: false,
            schema: {
              description: 'Search team members by their name, username, and email.',
              type: 'string',
            },
          },
          description: 'Search team members by their name, username, and email.',
        }),
      role: z
        .enum(['OWNER', 'MEMBER', 'DEVELOPER', 'VIEWER'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return members with the specified team role.',
            in: 'query',
            name: 'role',
            required: false,
            schema: {
              description: 'Only return members with the specified team role.',
              enum: ['OWNER', 'MEMBER', 'DEVELOPER', 'VIEWER'],
              examples: ['OWNER'],
              type: 'string',
            },
          },
          description: 'Only return members with the specified team role.',
          examples: ['OWNER'],
        }),
      excludeProject: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude members who belong to the specified project.',
            in: 'query',
            name: 'excludeProject',
            required: false,
            schema: {
              description: 'Exclude members who belong to the specified project.',
              type: 'string',
            },
          },
          description: 'Exclude members who belong to the specified project.',
        }),
    }),
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'teamId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Paginated list of members for the team.',
      content: {
        'application/json': {
          schema: z
            .object({
              emailInviteCodes: z
                .array(
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      email: z.string().exactOptional(),
                      id: z.string(),
                      isDSyncUser: z.boolean(),
                      role: z.enum(['MEMBER', 'OWNER', 'VIEWER', 'DEVELOPER', 'BILLING']),
                    })
                    .openapi({ required: ['id', 'role', 'isDSyncUser'] }),
                )
                .exactOptional(),
              members: z.array(
                z
                  .object({
                    accessRequestedAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'Timestamp in milliseconds for when this team member was accepted by an owner.',
                        examples: [1588820733602],
                      }),
                    avatar: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'ID of the file for the Avatar of this member.',
                        examples: ['123a6c5209bc3778245d011443644c8d27dc2c50'],
                      }),
                    bitbucket: z
                      .object({
                        accountId: z.string().exactOptional(),
                        email: z.string().exactOptional(),
                        login: z.string().exactOptional(),
                        userId: z.number().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Information about the Bitbucket account of this user.',
                        required: [],
                      }),
                    confirmed: z
                      .boolean()
                      .openapi({
                        description:
                          'Boolean that indicates if this member was confirmed by an owner.',
                        examples: [true],
                      }),
                    createdAt: z
                      .number()
                      .openapi({
                        description: 'Timestamp in milliseconds when this member was added.',
                        examples: [1588720733602],
                      }),
                    email: z
                      .string()
                      .openapi({
                        description: 'The email of this member.',
                        examples: ['jane.doe@example.com'],
                      }),
                    github: z
                      .object({
                        accountId: z.string().exactOptional(),
                        email: z.string().exactOptional(),
                        login: z.string().exactOptional(),
                        userId: z.number().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Information about the GitHub account for this user.',
                        required: [],
                      }),
                    gitlab: z
                      .object({
                        accountId: z.string().exactOptional(),
                        email: z.string().exactOptional(),
                        login: z.string().exactOptional(),
                        userId: z.number().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Information about the GitLab account of this user.',
                        required: [],
                      }),
                    joinedFrom: z
                      .object({
                        commitId: z.string().exactOptional(),
                        dsyncConnectedAt: z.number().exactOptional(),
                        dsyncUserId: z.string().exactOptional(),
                        gitUserId: z.xor([z.string(), z.number()]).exactOptional(),
                        gitUserLogin: z.string().exactOptional(),
                        idpUserId: z.string().exactOptional(),
                        origin: z.enum([
                          'import',
                          'gitlab',
                          'bitbucket',
                          'github',
                          'mail',
                          'link',
                          'teams',
                          'saml',
                          'dsync',
                          'feedback',
                        ]),
                        repoId: z.string().exactOptional(),
                        repoPath: z.string().exactOptional(),
                        ssoConnectedAt: z.number().exactOptional(),
                        ssoUserId: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({
                        description:
                          'Map with information about the members origin if they joined by requesting access.',
                        required: ['origin'],
                      }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The name of this user.', examples: ['Jane Doe'] }),
                    role: z
                      .enum(['MEMBER', 'OWNER', 'VIEWER', 'DEVELOPER', 'BILLING'])
                      .openapi({
                        description: 'Role of this user in the team.',
                        examples: ['OWNER'],
                      }),
                    uid: z
                      .string()
                      .openapi({
                        description: 'The ID of this user.',
                        examples: ['zTuNVUXEAvvnNN3IaqinkyMw'],
                      }),
                    username: z
                      .string()
                      .openapi({
                        description: 'The unique username of this user.',
                        examples: ['jane-doe'],
                      }),
                  })
                  .openapi({
                    required: ['confirmed', 'email', 'role', 'uid', 'username', 'createdAt'],
                  }),
              ),
              pagination: z
                .object({
                  count: z
                    .number()
                    .openapi({
                      description: 'Amount of items in the current page.',
                      examples: [20],
                    }),
                  hasNext: z.boolean(),
                  next: z
                    .number()
                    .nullable()
                    .openapi({
                      description: 'Timestamp that must be used to request the next page.',
                      examples: [1540095775951],
                    }),
                  prev: z
                    .number()
                    .nullable()
                    .openapi({
                      description: 'Timestamp that must be used to request the previous page.',
                      examples: [1540095775951],
                    }),
                })
                .openapi({ required: ['hasNext', 'count', 'next', 'prev'] }),
            })
            .openapi({
              description: 'Paginated list of members for the team.',
              required: ['members', 'pagination'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'No team was found.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV2UserRoute = createRoute({
  method: 'get',
  path: '/v2/user',
  tags: ['user'],
  summary: 'Get the User',
  description: 'Retrieves information related to the currently authenticated User.',
  operationId: 'getAuthUser',
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: z
            .object({ user: z.xor([AuthUserSchema, AuthUserLimitedSchema]) })
            .openapi({ description: 'Successful response.', required: ['user'] }),
        },
      },
    },
    400: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV3EventsRoute = createRoute({
  method: 'get',
  path: '/v3/events',
  tags: ['user'],
  summary: 'List User Events',
  description:
    'Retrieves a list of "events" generated by the User on Vercel. Events are generated when the User performs a particular action, such as logging in, creating a deployment, and joining a Team (just to name a few). When the `teamId` parameter is supplied, then the events that are returned will be in relation to the Team that was specified.',
  operationId: 'listUserEvents',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of items which may be returned.',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Maximum number of items which may be returned.',
              examples: [20],
              type: 'number',
            },
            required: false,
          },
          description: 'Maximum number of items which may be returned.',
          examples: [20],
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp to only include items created since then.',
            in: 'query',
            name: 'since',
            schema: {
              description: 'Timestamp to only include items created since then.',
              examples: ['2019-12-08T10:00:38.976Z'],
              type: 'string',
            },
            required: false,
          },
          description: 'Timestamp to only include items created since then.',
          examples: ['2019-12-08T10:00:38.976Z'],
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Timestamp to only include items created until then.',
            in: 'query',
            name: 'until',
            schema: {
              description: 'Timestamp to only include items created until then.',
              examples: ['2019-12-09T23:00:38.976Z'],
              type: 'string',
            },
            required: false,
          },
          description: 'Timestamp to only include items created until then.',
          examples: ['2019-12-09T23:00:38.976Z'],
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-delimited list of event \\"types\\" to filter the results by.',
            in: 'query',
            name: 'types',
            schema: {
              description: 'Comma-delimited list of event \\"types\\" to filter the results by.',
              examples: ['login,team-member-join,domain-buy'],
              type: 'string',
            },
            required: false,
          },
          description: 'Comma-delimited list of event \\"types\\" to filter the results by.',
          examples: ['login,team-member-join,domain-buy'],
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When retrieving events for a Team, the `userId` parameter may be specified to filter events generated by a specific member of the Team.',
            in: 'query',
            name: 'userId',
            schema: {
              description:
                'When retrieving events for a Team, the `userId` parameter may be specified to filter events generated by a specific member of the Team.',
              examples: ['aeIInYVk59zbFF2SxfyxxmuO'],
              type: 'string',
            },
            required: false,
          },
          description:
            'When retrieving events for a Team, the `userId` parameter may be specified to filter events generated by a specific member of the Team.',
          examples: ['aeIInYVk59zbFF2SxfyxxmuO'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: z
            .object({
              events: z
                .array(UserEventSchema)
                .openapi({ description: 'Array of events generated by the User.' }),
            })
            .openapi({ description: 'Successful response.', required: ['events'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV3SecretsRoute = createRoute({
  method: 'get',
  path: '/v3/secrets',
  tags: ['secrets'],
  summary: 'List secrets',
  description:
    'Retrieves the active Vercel secrets for the authenticated user. By default it returns 20 secrets. The rest can be retrieved using the pagination options. The body will contain an entry for each secret.',
  operationId: 'getSecrets',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter out secrets based on comma separated secret ids.',
            in: 'query',
            name: 'id',
            schema: {
              deprecated: true,
              description: 'Filter out secrets based on comma separated secret ids.',
              examples: ['sec_RKc5iV0rV3ZSrFrHiruRno7k,sec_fGc5iV0rV3ZSrFrHiruRnouQ'],
              type: 'string',
            },
            required: false,
          },
          deprecated: true,
          description: 'Filter out secrets based on comma separated secret ids.',
          examples: ['sec_RKc5iV0rV3ZSrFrHiruRno7k,sec_fGc5iV0rV3ZSrFrHiruRnouQ'],
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter out secrets that belong to a project.',
            in: 'query',
            name: 'projectId',
            schema: {
              deprecated: true,
              description: 'Filter out secrets that belong to a project.',
              examples: ['prj_2WjyKQmM8ZnGcJsPWMrHRHrE'],
              type: 'string',
            },
            required: false,
          },
          deprecated: true,
          description: 'Filter out secrets that belong to a project.',
          examples: ['prj_2WjyKQmM8ZnGcJsPWMrHRHrE'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response retrieving a list of secrets.',
      content: {
        'application/json': {
          schema: z
            .object({
              pagination: PaginationSchema,
              secrets: z.array(
                z
                  .object({
                    created: z.iso
                      .datetime({ offset: true })
                      .openapi({
                        description: 'The date when the secret was created.',
                        examples: ['2021-02-10T13:11:49.180Z'],
                      }),
                    createdAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'Timestamp for when the secret was created.',
                        examples: [1609492210000],
                      }),
                    decryptable: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicates whether the secret value can be decrypted after it has been created.',
                        examples: [true],
                      }),
                    name: z
                      .string()
                      .openapi({
                        description: 'The name of the secret.',
                        examples: ['my-api-key'],
                      }),
                    projectId: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The unique identifier of the project which the secret belongs to.',
                        examples: ['prj_2WjyKQmM8ZnGcJsPWMrHRHrE'],
                      }),
                    teamId: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'The unique identifier of the team the secret was created for.',
                        examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                      }),
                    uid: z
                      .string()
                      .openapi({
                        description: 'The unique identifier of the secret.',
                        examples: ['sec_XCG7t7AIHuO2SBA8667zNUiM'],
                      }),
                    userId: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The unique identifier of the user who created the secret.',
                        examples: ['2qDDuGFTWXBLDNnqZfWPDp1A'],
                      }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The value of the secret.' }),
                  })
                  .openapi({
                    description: 'Data representing a secret.',
                    required: ['created', 'name', 'uid'],
                  }),
              ),
            })
            .openapi({ required: ['secrets', 'pagination'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV3SecretsIdOrNameRoute = createRoute({
  method: 'get',
  path: '/v3/secrets/{idOrName}',
  tags: ['secrets'],
  summary: 'Get a single secret',
  description:
    'Retrieves the information for a specific secret by passing either the secret id or name in the URL.',
  operationId: 'getSecret',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The name or the unique identifier to which the secret belongs to.',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The name or the unique identifier to which the secret belongs to.',
              examples: ['sec_RKc5iV0rV3ZSrFrHiruRno7k'],
              type: 'string',
            },
          },
          description: 'The name or the unique identifier to which the secret belongs to.',
          examples: ['sec_RKc5iV0rV3ZSrFrHiruRno7k'],
        }),
    }),
    query: z.object({
      decrypt: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.',
            in: 'query',
            name: 'decrypt',
            required: false,
            schema: {
              description:
                'Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.',
              enum: ['true', 'false'],
              examples: ['true'],
              type: 'string',
            },
          },
          description:
            'Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.',
          examples: ['true'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response retrieving a secret.',
      content: {
        'application/json': {
          schema: z
            .object({
              created: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date when the secret was created.',
                  examples: ['2021-02-10T13:11:49.180Z'],
                }),
              createdAt: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Timestamp for when the secret was created.',
                  examples: [1609492210000],
                }),
              decryptable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the secret value can be decrypted after it has been created.',
                  examples: [true],
                }),
              name: z
                .string()
                .openapi({ description: 'The name of the secret.', examples: ['my-api-key'] }),
              projectId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the project which the secret belongs to.',
                  examples: ['prj_2WjyKQmM8ZnGcJsPWMrHRHrE'],
                }),
              teamId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the team the secret was created for.',
                  examples: ['team_LLHUOMOoDlqOp8wPE4kFo9pE'],
                }),
              uid: z
                .string()
                .openapi({
                  description: 'The unique identifier of the secret.',
                  examples: ['sec_XCG7t7AIHuO2SBA8667zNUiM'],
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The unique identifier of the user who created the secret.',
                  examples: ['2qDDuGFTWXBLDNnqZfWPDp1A'],
                }),
              value: z
                .string()
                .exactOptional()
                .openapi({ description: 'The value of the secret.' }),
            })
            .openapi({
              description: 'Data representing a secret.',
              required: ['created', 'name', 'uid'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postV3UserTokensRoute = createRoute({
  method: 'post',
  path: '/v3/user/tokens',
  tags: ['authentication'],
  summary: 'Create an Auth Token',
  description:
    'Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.',
  operationId: 'createAuthToken',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .strictObject({ expiresAt: z.number().exactOptional(), name: z.string() })
              .openapi({ required: ['name'] }),
            z
              .strictObject({
                clientId: z.string().exactOptional(),
                expiresAt: z.number().exactOptional(),
                installationId: z.string().exactOptional(),
                name: z.string(),
                type: z.literal('oauth2-token'),
              })
              .openapi({ required: ['type', 'name'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: z
            .object({
              bearerToken: z
                .string()
                .openapi({
                  description:
                    "The authentication token's actual value. This token is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!",
                  examples: ['uRKJSTt0L4RaSkiMj41QTkxM'],
                }),
              token: AuthTokenSchema,
            })
            .openapi({ description: 'Successful response.', required: ['token', 'bearerToken'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV3UserTokensTokenIdRoute = createRoute({
  method: 'delete',
  path: '/v3/user/tokens/{tokenId}',
  tags: ['authentication'],
  summary: 'Delete an authentication token',
  description:
    'Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.',
  operationId: 'deleteAuthToken',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the token to invalidate. The special value \\"current\\" may be supplied, which invalidates the token that the HTTP request was authenticated with.',
            in: 'path',
            name: 'tokenId',
            required: true,
            schema: {
              description:
                'The identifier of the token to invalidate. The special value \\"current\\" may be supplied, which invalidates the token that the HTTP request was authenticated with.',
              examples: ['5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391'],
              type: 'string',
            },
          },
          description:
            'The identifier of the token to invalidate. The special value \\"current\\" may be supplied, which invalidates the token that the HTTP request was authenticated with.',
          examples: ['5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'Authentication token successfully deleted.',
      content: {
        'application/json': {
          schema: z
            .object({
              tokenId: z
                .string()
                .openapi({
                  description: 'The unique identifier of the token that was deleted.',
                  examples: ['5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391'],
                }),
            })
            .openapi({
              description: 'Authentication token successfully deleted.',
              required: ['tokenId'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Token not found with the requested `tokenId`.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV4AliasesRoute = createRoute({
  method: 'get',
  path: '/v4/aliases',
  tags: ['aliases'],
  summary: 'List aliases',
  description:
    'Retrieves a list of aliases for the authenticated User or Team. When `domain` is provided, only aliases for that domain will be returned. When `projectId` is provided, it will only return the given project aliases.',
  operationId: 'listAliases',
  request: {
    query: z.object({
      domain: z
        .xor([z.array(z.any()), z.string()])
        .exactOptional()
        .openapi({
          param: {
            description: 'Get only aliases of the given domain name',
            in: 'query',
            name: 'domain',
            schema: {
              description: 'Get only aliases of the given domain name',
              examples: ['my-test-domain.com'],
              items: { type: 'string' },
              maxItems: 20,
              oneOf: [{ type: 'array' }, { type: 'string' }],
            },
            required: false,
          },
          description: 'Get only aliases of the given domain name',
          examples: ['my-test-domain.com'],
        }),
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get only aliases created after the provided timestamp',
            in: 'query',
            name: 'from',
            schema: {
              deprecated: true,
              description: 'Get only aliases created after the provided timestamp',
              examples: [1540095775951],
              type: 'number',
            },
            required: false,
          },
          deprecated: true,
          description: 'Get only aliases created after the provided timestamp',
          examples: [1540095775951],
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of aliases to list from a request',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Maximum number of aliases to list from a request',
              examples: [10],
              type: 'number',
            },
            required: false,
          },
          description: 'Maximum number of aliases to list from a request',
          examples: [10],
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter aliases from the given `projectId`',
            in: 'query',
            name: 'projectId',
            schema: {
              description: 'Filter aliases from the given `projectId`',
              examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
            required: false,
          },
          description: 'Filter aliases from the given `projectId`',
          examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get aliases created after this JavaScript timestamp',
            in: 'query',
            name: 'since',
            schema: {
              description: 'Get aliases created after this JavaScript timestamp',
              examples: [1540095775941],
              type: 'number',
            },
            required: false,
          },
          description: 'Get aliases created after this JavaScript timestamp',
          examples: [1540095775941],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get aliases created before this JavaScript timestamp',
            in: 'query',
            name: 'until',
            schema: {
              description: 'Get aliases created before this JavaScript timestamp',
              examples: [1540095775951],
              type: 'number',
            },
            required: false,
          },
          description: 'Get aliases created before this JavaScript timestamp',
          examples: [1540095775951],
        }),
      rollbackDeploymentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get aliases that would be rolled back for the given deployment',
            in: 'query',
            name: 'rollbackDeploymentId',
            schema: {
              description: 'Get aliases that would be rolled back for the given deployment',
              examples: ['dpl_XXX'],
              type: 'string',
            },
            required: false,
          },
          description: 'Get aliases that would be rolled back for the given deployment',
          examples: ['dpl_XXX'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The paginated list of aliases',
      content: {
        'application/json': {
          schema: z
            .object({
              aliases: z.array(
                z
                  .object({
                    alias: z
                      .string()
                      .openapi({
                        description:
                          'The alias name, it could be a `.vercel.app` subdomain or a custom domain',
                        examples: ['my-alias.vercel.app'],
                      }),
                    created: z.iso
                      .datetime({ offset: true })
                      .openapi({
                        description: 'The date when the alias was created',
                        examples: ['2017-04-26T23:00:34.232Z'],
                      }),
                    createdAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'The date when the alias was created in milliseconds since the UNIX epoch',
                        examples: [1540095775941],
                      }),
                    creator: z
                      .object({
                        email: z
                          .string()
                          .openapi({
                            description: 'Email of the user who created the alias',
                            examples: ['john-doe@gmail.com'],
                          }),
                        uid: z
                          .string()
                          .openapi({
                            description: 'ID of the user who created the alias',
                            examples: ['96SnxkFiMyVKsK3pnoHfx3Hz'],
                          }),
                        username: z
                          .string()
                          .openapi({
                            description: 'Username of the user who created the alias',
                            examples: ['john-doe'],
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'Information of the user who created the alias',
                        required: ['uid', 'email', 'username'],
                      }),
                    deletedAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'The date when the alias was deleted in milliseconds since the UNIX epoch',
                        examples: [1540095775941],
                      }),
                    deployment: z
                      .object({
                        id: z
                          .string()
                          .openapi({
                            description: 'The deployment unique identifier',
                            examples: ['dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx'],
                          }),
                        meta: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'The deployment metadata', examples: [{}] }),
                        url: z
                          .string()
                          .openapi({
                            description: 'The deployment unique URL',
                            examples: ['my-instant-deployment-3ij3cxz9qr.now.sh'],
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: 'A map with the deployment ID, URL and metadata',
                        required: ['id', 'url'],
                      }),
                    deploymentId: z
                      .string()
                      .nullable()
                      .openapi({
                        description: 'The deployment ID',
                        examples: ['dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx'],
                      }),
                    projectId: z
                      .string()
                      .nullable()
                      .openapi({
                        description: 'The unique identifier of the project',
                        examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                      }),
                    protectionBypass: z
                      .record(z.string(), z.string())
                      .exactOptional()
                      .openapi({
                        description: 'Construct a type with a set of properties K of type T',
                      }),
                    redirect: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Target destination domain for redirect when the alias is a redirect',
                      }),
                    redirectStatusCode: z
                      .union([z.literal(301), z.literal(302), z.literal(307), z.literal(308)])
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Status code to be used on redirect' }),
                    uid: z.string().openapi({ description: 'The unique identifier of the alias' }),
                    updatedAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'The date when the alias was updated in milliseconds since the UNIX epoch',
                        examples: [1540095775941],
                      }),
                  })
                  .openapi({ required: ['alias', 'created', 'deploymentId', 'projectId', 'uid'] }),
              ),
              pagination: PaginationSchema,
            })
            .openapi({ required: ['aliases', 'pagination'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV4AliasesIdOrAliasRoute = createRoute({
  method: 'get',
  path: '/v4/aliases/{idOrAlias}',
  tags: ['aliases'],
  summary: 'Get an Alias',
  description: 'Retrieves an Alias for the given host name or alias ID.',
  operationId: 'getAlias',
  request: {
    query: z.object({
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get the alias only if it was created after the provided timestamp',
            in: 'query',
            name: 'from',
            required: false,
            schema: {
              deprecated: true,
              description: 'Get the alias only if it was created after the provided timestamp',
              examples: [1540095775951],
              type: 'number',
            },
          },
          deprecated: true,
          description: 'Get the alias only if it was created after the provided timestamp',
          examples: [1540095775951],
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get the alias only if it is assigned to the provided project ID',
            in: 'query',
            name: 'projectId',
            required: false,
            schema: {
              description: 'Get the alias only if it is assigned to the provided project ID',
              examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'Get the alias only if it is assigned to the provided project ID',
          examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get the alias only if it was created after this JavaScript timestamp',
            in: 'query',
            name: 'since',
            required: false,
            schema: {
              description: 'Get the alias only if it was created after this JavaScript timestamp',
              examples: [1540095775941],
              type: 'number',
            },
          },
          description: 'Get the alias only if it was created after this JavaScript timestamp',
          examples: [1540095775941],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get the alias only if it was created before this JavaScript timestamp',
            in: 'query',
            name: 'until',
            required: false,
            schema: {
              description: 'Get the alias only if it was created before this JavaScript timestamp',
              examples: [1540095775951],
              type: 'number',
            },
          },
          description: 'Get the alias only if it was created before this JavaScript timestamp',
          examples: [1540095775951],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      idOrAlias: z
        .string()
        .openapi({
          param: {
            description: 'The alias or alias ID to be retrieved',
            in: 'path',
            name: 'idOrAlias',
            required: true,
            schema: {
              description: 'The alias or alias ID to be retrieved',
              examples: ['example.vercel.app'],
              type: 'string',
            },
          },
          description: 'The alias or alias ID to be retrieved',
          examples: ['example.vercel.app'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'The alias information',
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .string()
                .openapi({
                  description:
                    'The alias name, it could be a `.vercel.app` subdomain or a custom domain',
                  examples: ['my-alias.vercel.app'],
                }),
              created: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The date when the alias was created',
                  examples: ['2017-04-26T23:00:34.232Z'],
                }),
              createdAt: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The date when the alias was created in milliseconds since the UNIX epoch',
                  examples: [1540095775941],
                }),
              creator: z
                .object({
                  email: z
                    .string()
                    .openapi({
                      description: 'Email of the user who created the alias',
                      examples: ['john-doe@gmail.com'],
                    }),
                  uid: z
                    .string()
                    .openapi({
                      description: 'ID of the user who created the alias',
                      examples: ['96SnxkFiMyVKsK3pnoHfx3Hz'],
                    }),
                  username: z
                    .string()
                    .openapi({
                      description: 'Username of the user who created the alias',
                      examples: ['john-doe'],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Information of the user who created the alias',
                  required: ['uid', 'email', 'username'],
                }),
              deletedAt: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The date when the alias was deleted in milliseconds since the UNIX epoch',
                  examples: [1540095775941],
                }),
              deployment: z
                .object({
                  id: z
                    .string()
                    .openapi({
                      description: 'The deployment unique identifier',
                      examples: ['dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx'],
                    }),
                  meta: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The deployment metadata', examples: [{}] }),
                  url: z
                    .string()
                    .openapi({
                      description: 'The deployment unique URL',
                      examples: ['my-instant-deployment-3ij3cxz9qr.now.sh'],
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'A map with the deployment ID, URL and metadata',
                  required: ['id', 'url'],
                }),
              deploymentId: z
                .string()
                .nullable()
                .openapi({
                  description: 'The deployment ID',
                  examples: ['dpl_5m8CQaRBm3FnWRW1od3wKTpaECPx'],
                }),
              projectId: z
                .string()
                .nullable()
                .openapi({
                  description: 'The unique identifier of the project',
                  examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                }),
              protectionBypass: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({ description: 'Construct a type with a set of properties K of type T' }),
              redirect: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Target destination domain for redirect when the alias is a redirect',
                }),
              redirectStatusCode: z
                .union([z.literal(301), z.literal(302), z.literal(307), z.literal(308)])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Status code to be used on redirect' }),
              uid: z.string().openapi({ description: 'The unique identifier of the alias' }),
              updatedAt: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The date when the alias was updated in milliseconds since the UNIX epoch',
                  examples: [1540095775941],
                }),
            })
            .openapi({ required: ['alias', 'created', 'deploymentId', 'projectId', 'uid'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The alias was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const postV4DomainsRoute = createRoute({
  method: 'post',
  path: '/v4/domains',
  tags: ['domains'],
  summary: 'Register or transfer-in a new Domain',
  description:
    'This endpoint is used for registering a new domain name with Vercel for the authenticating user, and also for initiating a domain transfer request from an external Registrar to Vercel.',
  operationId: 'createOrTransferDomain',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .strictObject({
                method: z
                  .string()
                  .openapi({
                    description: 'The domain operation to perform.',
                    examples: ['move-in'],
                  }),
                name: z
                  .string()
                  .openapi({
                    description: 'The domain name you want to add.',
                    examples: ['example.com'],
                  }),
                token: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The move-in token from Move Requested email.',
                    examples: ['fdhfr820ad#@FAdlj$$'],
                  }),
              })
              .openapi({ required: ['method', 'name'] }),
            z
              .strictObject({
                authCode: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The authorization code assigned to the domain.',
                    examples: ['fdhfr820ad#@FAdlj$$'],
                  }),
                expectedPrice: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The price you expect to be charged for the required 1 year renewal.',
                    examples: [8],
                  }),
                method: z
                  .string()
                  .openapi({
                    description: 'The domain operation to perform.',
                    examples: ['transfer-in'],
                  }),
                name: z
                  .string()
                  .openapi({
                    description: 'The domain name you want to add.',
                    examples: ['example.com'],
                  }),
              })
              .openapi({ required: ['method', 'name'] }),
            z
              .strictObject({
                cdnEnabled: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether the domain has the Vercel Edge Network enabled or not.',
                    examples: [true],
                  }),
                method: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The domain operation to perform.', examples: ['add'] }),
                name: z
                  .string()
                  .openapi({
                    description: 'The domain name you want to add.',
                    examples: ['example.com'],
                  }),
              })
              .openapi({ required: ['name'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .object({
                  boughtAt: z
                    .number()
                    .nullable()
                    .openapi({
                      description:
                        'If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.',
                      examples: [1613602938882],
                    }),
                  createdAt: z
                    .number()
                    .openapi({
                      description:
                        'Timestamp in milliseconds when the domain was created in the registry.',
                      examples: [1613602938882],
                    }),
                  creator: z
                    .object({
                      customerId: z.string().nullable().exactOptional(),
                      email: z.string(),
                      id: z.string(),
                      isDomainReseller: z.boolean().exactOptional(),
                      username: z.string(),
                    })
                    .openapi({
                      description:
                        "An object containing information of the domain creator, including the user's id, username, and email.",
                      examples: [
                        {
                          email: 'demo@example.com',
                          id: 'ZspSRT4ljIEEmMHgoDwKWDei',
                          username: 'vercel_user',
                        },
                      ],
                      required: ['username', 'email', 'id'],
                    }),
                  customNameservers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.',
                      examples: [['ns1.nameserver.net', 'ns2.nameserver.net']],
                    }),
                  expiresAt: z
                    .number()
                    .nullable()
                    .openapi({
                      description:
                        'Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.',
                      examples: [1613602938882],
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The unique identifier of the domain.',
                      examples: ['EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1'],
                    }),
                  intendedNameservers: z
                    .array(z.string())
                    .openapi({
                      description:
                        'A list of the intended nameservers for the domain to point to Vercel DNS.',
                      examples: [['ns1.vercel-dns.com', 'ns2.vercel-dns.com']],
                    }),
                  name: z
                    .string()
                    .openapi({ description: 'The domain name.', examples: ['example.com'] }),
                  nameservers: z
                    .array(z.string())
                    .openapi({
                      description: 'A list of the current nameservers of the domain.',
                      examples: [['ns1.nameserver.net', 'ns2.nameserver.net']],
                    }),
                  orderedAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Timestamp in milliseconds at which the domain was ordered.',
                      examples: [1613602938882],
                    }),
                  renew: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Indicates whether the domain is set to automatically renew.',
                      examples: [true],
                    }),
                  serviceType: z
                    .enum(['zeit.world', 'external', 'na'])
                    .openapi({
                      description:
                        'The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.',
                      examples: ['zeit.world'],
                    }),
                  transferStartedAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.',
                      examples: [1613602938882],
                    }),
                  transferredAt: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.',
                      examples: [1613602938882],
                    }),
                  verified: z
                    .boolean()
                    .openapi({
                      description: 'If the domain has the ownership verified.',
                      examples: [true],
                    }),
                })
                .openapi({
                  required: [
                    'verified',
                    'nameservers',
                    'intendedNameservers',
                    'creator',
                    'createdAt',
                    'id',
                    'name',
                    'expiresAt',
                    'boughtAt',
                    'serviceType',
                  ],
                }),
            })
            .openapi({ required: ['domain'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postV4DomainsBuyRoute = createRoute({
  method: 'post',
  path: '/v4/domains/buy',
  tags: ['domains'],
  summary: 'Purchase a domain',
  description: 'Allows to purchase the specified domain.',
  operationId: 'buyDomain',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              expectedPrice: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The price you expect to be charged for the purchase.',
                  examples: [10],
                }),
              name: z
                .string()
                .openapi({
                  description: 'The domain name to purchase.',
                  examples: ['example.com'],
                }),
              renew: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Indicates whether the domain should be automatically renewed.',
                  examples: [true],
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Successful response for purchasing a Domain.',
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .object({
                  created: z.number(),
                  ns: z.array(z.string()),
                  pending: z.boolean(),
                  uid: z.string(),
                  verified: z.boolean(),
                })
                .openapi({ required: ['uid', 'ns', 'verified', 'created', 'pending'] }),
            })
            .openapi({ required: ['domain'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    409: { description: '' },
    429: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV4DomainsPriceRoute = createRoute({
  method: 'get',
  path: '/v4/domains/price',
  tags: ['domains'],
  summary: 'Check the price for a domain',
  description: 'Check the price to purchase a domain and how long a single purchase period is.',
  operationId: 'checkDomainPrice',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the domain for which the price needs to be checked.',
            in: 'query',
            name: 'name',
            required: true,
            schema: {
              description: 'The name of the domain for which the price needs to be checked.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The name of the domain for which the price needs to be checked.',
          examples: ['example.com'],
        }),
      type: z
        .enum(['new', 'renewal'])
        .exactOptional()
        .openapi({
          param: {
            description: 'In which status of the domain the price needs to be checked.',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              description: 'In which status of the domain the price needs to be checked.',
              enum: ['new', 'renewal'],
              examples: ['new'],
              type: 'string',
            },
          },
          description: 'In which status of the domain the price needs to be checked.',
          examples: ['new'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response which returns the price of the domain and the period.',
      content: {
        'application/json': {
          schema: z
            .object({
              period: z
                .number()
                .openapi({
                  description: 'The number of years the domain could be held before paying again.',
                  examples: [1],
                }),
              price: z
                .number()
                .openapi({ description: 'The domain price in USD.', examples: [20] }),
            })
            .openapi({
              description:
                'Successful response which returns the price of the domain and the period.',
              required: ['price', 'period'],
            }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV4DomainsStatusRoute = createRoute({
  method: 'get',
  path: '/v4/domains/status',
  tags: ['domains'],
  summary: 'Check a Domain Availability',
  description: 'Check if a domain name is available for purchase.',
  operationId: 'checkDomainStatus',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the domain for which we would like to check the status.',
            in: 'query',
            name: 'name',
            required: true,
            schema: {
              description: 'The name of the domain for which we would like to check the status.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The name of the domain for which we would like to check the status.',
          examples: ['example.com'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "Successful response checking if a Domain's name is available.",
      content: {
        'application/json': {
          schema: z.object({ available: z.boolean() }).openapi({ required: ['available'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV4DomainsDomainRecordsRoute = createRoute({
  method: 'get',
  path: '/v4/domains/{domain}/records',
  tags: ['dns'],
  summary: 'List existing DNS records',
  description:
    'Retrieves a list of DNS records created for a domain name. By default it returns 20 records if no limit is provided. The rest can be retrieved using the pagination options.',
  operationId: 'getRecords',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'domain',
            required: true,
            schema: { examples: ['example.com'], type: 'string' },
          },
          examples: ['example.com'],
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of records to list from a request.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              description: 'Maximum number of records to list from a request.',
              examples: [20],
              type: 'string',
            },
          },
          description: 'Maximum number of records to list from a request.',
          examples: [20],
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get records created after this JavaScript timestamp.',
            in: 'query',
            name: 'since',
            required: false,
            schema: {
              description: 'Get records created after this JavaScript timestamp.',
              examples: [1609499532000],
              type: 'string',
            },
          },
          description: 'Get records created after this JavaScript timestamp.',
          examples: [1609499532000],
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Get records created before this JavaScript timestamp.',
            in: 'query',
            name: 'until',
            required: false,
            schema: {
              description: 'Get records created before this JavaScript timestamp.',
              examples: [1612264332000],
              type: 'string',
            },
          },
          description: 'Get records created before this JavaScript timestamp.',
          examples: [1612264332000],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response retrieving a list of paginated DNS records.',
      content: {
        'application/json': {
          schema: z.xor([
            z.string(),
            z
              .object({
                records: z.array(
                  z
                    .object({
                      created: z.number().nullable(),
                      createdAt: z.number().nullable(),
                      creator: z.string(),
                      id: z.string(),
                      mxPriority: z.number().exactOptional(),
                      name: z.string(),
                      priority: z.number().exactOptional(),
                      slug: z.string(),
                      type: z.enum([
                        'A',
                        'AAAA',
                        'ALIAS',
                        'CAA',
                        'CNAME',
                        'MX',
                        'SRV',
                        'TXT',
                        'NS',
                      ]),
                      updated: z.number().nullable(),
                      updatedAt: z.number().nullable(),
                      value: z.string(),
                    })
                    .openapi({
                      required: [
                        'id',
                        'slug',
                        'name',
                        'type',
                        'value',
                        'creator',
                        'created',
                        'updated',
                        'createdAt',
                        'updatedAt',
                      ],
                    }),
                ),
              })
              .openapi({ required: ['records'] }),
            z
              .object({
                pagination: PaginationSchema,
                records: z.array(
                  z
                    .object({
                      created: z.number().nullable(),
                      createdAt: z.number().nullable(),
                      creator: z.string(),
                      id: z.string(),
                      mxPriority: z.number().exactOptional(),
                      name: z.string(),
                      priority: z.number().exactOptional(),
                      slug: z.string(),
                      type: z.enum([
                        'A',
                        'AAAA',
                        'ALIAS',
                        'CAA',
                        'CNAME',
                        'MX',
                        'SRV',
                        'TXT',
                        'NS',
                      ]),
                      updated: z.number().nullable(),
                      updatedAt: z.number().nullable(),
                      value: z.string(),
                    })
                    .openapi({
                      required: [
                        'id',
                        'slug',
                        'name',
                        'type',
                        'value',
                        'creator',
                        'created',
                        'updated',
                        'createdAt',
                        'updatedAt',
                      ],
                    }),
                ),
              })
              .openapi({
                description: 'Successful response retrieving a list of paginated DNS records.',
                required: ['records', 'pagination'],
              }),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    401: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV5DomainsRoute = createRoute({
  method: 'get',
  path: '/v5/domains',
  tags: ['domains'],
  summary: 'List all the domains',
  description:
    'Retrieves a list of domains registered for the authenticating user. By default it returns the last 20 domains if no limit is provided.',
  operationId: 'getDomains',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of domains to list from a request.',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Maximum number of domains to list from a request.',
              examples: [20],
              type: 'number',
            },
            required: false,
          },
          description: 'Maximum number of domains to list from a request.',
          examples: [20],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get domains created after this JavaScript timestamp.',
            in: 'query',
            name: 'since',
            schema: {
              description: 'Get domains created after this JavaScript timestamp.',
              examples: [1609499532000],
              type: 'number',
            },
            required: false,
          },
          description: 'Get domains created after this JavaScript timestamp.',
          examples: [1609499532000],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get domains created before this JavaScript timestamp.',
            in: 'query',
            name: 'until',
            schema: {
              description: 'Get domains created before this JavaScript timestamp.',
              examples: [1612264332000],
              type: 'number',
            },
            required: false,
          },
          description: 'Get domains created before this JavaScript timestamp.',
          examples: [1612264332000],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response retrieving a list of domains.',
      content: {
        'application/json': {
          schema: z
            .object({
              domains: z.array(
                z
                  .object({
                    boughtAt: z
                      .number()
                      .nullable()
                      .openapi({
                        description:
                          'If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.',
                        examples: [1613602938882],
                      }),
                    createdAt: z
                      .number()
                      .openapi({
                        description:
                          'Timestamp in milliseconds when the domain was created in the registry.',
                        examples: [1613602938882],
                      }),
                    creator: z
                      .object({
                        customerId: z.string().nullable().exactOptional(),
                        email: z.string(),
                        id: z.string(),
                        isDomainReseller: z.boolean().exactOptional(),
                        username: z.string(),
                      })
                      .openapi({
                        description:
                          "An object containing information of the domain creator, including the user's id, username, and email.",
                        examples: [
                          {
                            email: 'demo@example.com',
                            id: 'ZspSRT4ljIEEmMHgoDwKWDei',
                            username: 'vercel_user',
                          },
                        ],
                        required: ['username', 'email', 'id'],
                      }),
                    customNameservers: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.',
                        examples: [['ns1.nameserver.net', 'ns2.nameserver.net']],
                      }),
                    expiresAt: z
                      .number()
                      .nullable()
                      .openapi({
                        description:
                          'Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.',
                        examples: [1613602938882],
                      }),
                    id: z
                      .string()
                      .openapi({
                        description: 'The unique identifier of the domain.',
                        examples: ['EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1'],
                      }),
                    intendedNameservers: z
                      .array(z.string())
                      .openapi({
                        description:
                          'A list of the intended nameservers for the domain to point to Vercel DNS.',
                        examples: [['ns1.vercel-dns.com', 'ns2.vercel-dns.com']],
                      }),
                    name: z
                      .string()
                      .openapi({ description: 'The domain name.', examples: ['example.com'] }),
                    nameservers: z
                      .array(z.string())
                      .openapi({
                        description: 'A list of the current nameservers of the domain.',
                        examples: [['ns1.nameserver.net', 'ns2.nameserver.net']],
                      }),
                    orderedAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'Timestamp in milliseconds at which the domain was ordered.',
                        examples: [1613602938882],
                      }),
                    renew: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Indicates whether the domain is set to automatically renew.',
                        examples: [true],
                      }),
                    serviceType: z
                      .enum(['zeit.world', 'external', 'na'])
                      .openapi({
                        description:
                          'The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.',
                        examples: ['zeit.world'],
                      }),
                    transferStartedAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.',
                        examples: [1613602938882],
                      }),
                    transferredAt: z
                      .number()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description:
                          'Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.',
                        examples: [1613602938882],
                      }),
                    verified: z
                      .boolean()
                      .openapi({
                        description: 'If the domain has the ownership verified.',
                        examples: [true],
                      }),
                  })
                  .openapi({
                    required: [
                      'verified',
                      'nameservers',
                      'intendedNameservers',
                      'creator',
                      'createdAt',
                      'id',
                      'name',
                      'expiresAt',
                      'boughtAt',
                      'serviceType',
                    ],
                  }),
              ),
              pagination: PaginationSchema,
            })
            .openapi({ required: ['domains', 'pagination'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV5DomainsDomainRoute = createRoute({
  method: 'get',
  path: '/v5/domains/{domain}',
  tags: ['domains'],
  summary: 'Get Information for a Single Domain',
  description: 'Get information for a single domain in an account or team.',
  operationId: 'getDomain',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The name of the domain.',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The name of the domain.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The name of the domain.',
          examples: ['example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response retrieving an information for a specific domains.',
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .object({
                  boughtAt: z
                    .number()
                    .nullable()
                    .openapi({
                      description:
                        'If it was purchased through Vercel, the timestamp in milliseconds when it was purchased.',
                      examples: [1613602938882],
                    }),
                  createdAt: z
                    .number()
                    .openapi({
                      description:
                        'Timestamp in milliseconds when the domain was created in the registry.',
                      examples: [1613602938882],
                    }),
                  creator: z
                    .object({
                      customerId: z.string().nullable().exactOptional(),
                      email: z.string(),
                      id: z.string(),
                      isDomainReseller: z.boolean().exactOptional(),
                      username: z.string(),
                    })
                    .openapi({
                      description:
                        "An object containing information of the domain creator, including the user's id, username, and email.",
                      examples: [
                        {
                          email: 'demo@example.com',
                          id: 'ZspSRT4ljIEEmMHgoDwKWDei',
                          username: 'vercel_user',
                        },
                      ],
                      required: ['username', 'email', 'id'],
                    }),
                  customNameservers: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'A list of custom nameservers for the domain to point to. Only applies to domains purchased with Vercel.',
                      examples: [['ns1.nameserver.net', 'ns2.nameserver.net']],
                    }),
                  expiresAt: z
                    .number()
                    .nullable()
                    .openapi({
                      description:
                        'Timestamp in milliseconds at which the domain is set to expire. `null` if not bought with Vercel.',
                      examples: [1613602938882],
                    }),
                  id: z
                    .string()
                    .openapi({
                      description: 'The unique identifier of the domain.',
                      examples: ['EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1'],
                    }),
                  intendedNameservers: z
                    .array(z.string())
                    .openapi({
                      description:
                        'A list of the intended nameservers for the domain to point to Vercel DNS.',
                      examples: [['ns1.vercel-dns.com', 'ns2.vercel-dns.com']],
                    }),
                  name: z
                    .string()
                    .openapi({ description: 'The domain name.', examples: ['example.com'] }),
                  nameservers: z
                    .array(z.string())
                    .openapi({
                      description: 'A list of the current nameservers of the domain.',
                      examples: [['ns1.nameserver.net', 'ns2.nameserver.net']],
                    }),
                  orderedAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Timestamp in milliseconds at which the domain was ordered.',
                      examples: [1613602938882],
                    }),
                  renew: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Indicates whether the domain is set to automatically renew.',
                      examples: [true],
                    }),
                  serviceType: z
                    .enum(['zeit.world', 'external', 'na'])
                    .openapi({
                      description:
                        'The type of service the domain is handled by. `external` if the DNS is externally handled, `zeit.world` if handled with Vercel, or `na` if the service is not available.',
                      examples: ['zeit.world'],
                    }),
                  suffix: z.boolean(),
                  transferStartedAt: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        'If transferred into Vercel, timestamp in milliseconds when the domain transfer was initiated.',
                      examples: [1613602938882],
                    }),
                  transferredAt: z
                    .number()
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description:
                        'Timestamp in milliseconds at which the domain was successfully transferred into Vercel. `null` if the transfer is still processing or was never transferred in.',
                      examples: [1613602938882],
                    }),
                  verified: z
                    .boolean()
                    .openapi({
                      description: 'If the domain has the ownership verified.',
                      examples: [true],
                    }),
                })
                .openapi({
                  required: [
                    'suffix',
                    'verified',
                    'nameservers',
                    'intendedNameservers',
                    'creator',
                    'createdAt',
                    'id',
                    'name',
                    'expiresAt',
                    'boughtAt',
                    'serviceType',
                  ],
                }),
            })
            .openapi({ required: ['domain'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV5UserTokensRoute = createRoute({
  method: 'get',
  path: '/v5/user/tokens',
  tags: ['authentication'],
  summary: 'List Auth Tokens',
  description: "Retrieve a list of the current User's authentication tokens.",
  operationId: 'listAuthTokens',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              pagination: PaginationSchema,
              testingToken: AuthTokenSchema,
              tokens: z.array(AuthTokenSchema),
            })
            .openapi({ required: ['tokens', 'testingToken', 'pagination'] }),
        },
      },
    },
    400: { description: '' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV5UserTokensTokenIdRoute = createRoute({
  method: 'get',
  path: '/v5/user/tokens/{tokenId}',
  tags: ['authentication'],
  summary: 'Get Auth Token Metadata',
  description:
    'Retrieve metadata about an authentication token belonging to the currently authenticated User.',
  operationId: 'getAuthToken',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            description:
              'The identifier of the token to retrieve. The special value \\"current\\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.',
            in: 'path',
            name: 'tokenId',
            required: true,
            schema: {
              description:
                'The identifier of the token to retrieve. The special value \\"current\\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.',
              examples: ['5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391'],
              type: 'string',
            },
          },
          description:
            'The identifier of the token to retrieve. The special value \\"current\\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.',
          examples: ['5d9f2ebd38ddca62e5d51e9c1704c72530bdc8bfdd41e782a6687c48399e8391'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response.',
      content: {
        'application/json': {
          schema: z
            .object({ token: AuthTokenSchema })
            .openapi({ description: 'Successful response.', required: ['token'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Token not found with the requested `tokenId`.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV6DeploymentsRoute = createRoute({
  method: 'get',
  path: '/v6/deployments',
  tags: ['deployments'],
  summary: 'List deployments',
  description:
    "List deployments under the account corresponding to the API token. If a deployment hasn't finished uploading (is incomplete), the `url` property will have a value of `null`.",
  operationId: 'getDeployments',
  request: {
    query: z.object({
      app: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the deployment.',
            in: 'query',
            name: 'app',
            schema: { description: 'Name of the deployment.', examples: ['docs'], type: 'string' },
            required: false,
          },
          description: 'Name of the deployment.',
          examples: ['docs'],
        }),
      from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Gets the deployment created after this Date timestamp. (default: current time)',
            in: 'query',
            name: 'from',
            schema: {
              deprecated: true,
              description:
                'Gets the deployment created after this Date timestamp. (default: current time)',
              examples: [1612948664566],
              type: 'number',
            },
            required: false,
          },
          deprecated: true,
          description:
            'Gets the deployment created after this Date timestamp. (default: current time)',
          examples: [1612948664566],
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of deployments to list from a request.',
            in: 'query',
            name: 'limit',
            schema: {
              description: 'Maximum number of deployments to list from a request.',
              examples: [10],
              type: 'number',
            },
            required: false,
          },
          description: 'Maximum number of deployments to list from a request.',
          examples: [10],
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter deployments from the given `projectId`.',
            in: 'query',
            name: 'projectId',
            schema: {
              description: 'Filter deployments from the given `projectId`.',
              examples: ['QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY'],
              type: 'string',
            },
            required: false,
          },
          description: 'Filter deployments from the given `projectId`.',
          examples: ['QmXGTs7mvAMMC7WW5ebrM33qKG32QK3h4vmQMjmY'],
        }),
      target: z
        .enum(['production', 'preview'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter deployments based on the environment.',
            in: 'query',
            name: 'target',
            schema: {
              description: 'Filter deployments based on the environment.',
              enum: ['production', 'preview'],
              examples: ['production'],
              type: 'string',
            },
            required: false,
          },
          description: 'Filter deployments based on the environment.',
          examples: ['production'],
        }),
      to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Gets the deployment created before this Date timestamp. (default: current time)',
            in: 'query',
            name: 'to',
            schema: {
              deprecated: true,
              description:
                'Gets the deployment created before this Date timestamp. (default: current time)',
              examples: [1612948664566],
              type: 'number',
            },
            required: false,
          },
          deprecated: true,
          description:
            'Gets the deployment created before this Date timestamp. (default: current time)',
          examples: [1612948664566],
        }),
      users: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter out deployments based on users who have created the deployment.',
            in: 'query',
            name: 'users',
            schema: {
              description: 'Filter out deployments based on users who have created the deployment.',
              examples: ['kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY'],
              type: 'string',
            },
            required: false,
          },
          description: 'Filter out deployments based on users who have created the deployment.',
          examples: ['kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY'],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get Deployments created after this JavaScript timestamp.',
            in: 'query',
            name: 'since',
            schema: {
              description: 'Get Deployments created after this JavaScript timestamp.',
              examples: [1540095775941],
              type: 'number',
            },
            required: false,
          },
          description: 'Get Deployments created after this JavaScript timestamp.',
          examples: [1540095775941],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get Deployments created before this JavaScript timestamp.',
            in: 'query',
            name: 'until',
            schema: {
              description: 'Get Deployments created before this JavaScript timestamp.',
              examples: [1540095775951],
              type: 'number',
            },
            required: false,
          },
          description: 'Get Deployments created before this JavaScript timestamp.',
          examples: [1540095775951],
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)',
            in: 'query',
            name: 'state',
            schema: {
              description:
                'Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)',
              examples: ['BUILDING,READY'],
              type: 'string',
            },
            required: false,
          },
          description:
            'Filter deployments based on their state (`BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, `CANCELED`)',
          examples: ['BUILDING,READY'],
        }),
      rollbackCandidate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter deployments based on their rollback candidacy',
            in: 'query',
            name: 'rollbackCandidate',
            schema: {
              description: 'Filter deployments based on their rollback candidacy',
              type: 'boolean',
            },
            required: false,
          },
          description: 'Filter deployments based on their rollback candidacy',
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              deployments: z.array(
                z
                  .object({
                    aliasAssigned: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
                    aliasError: z
                      .object({ code: z.string(), message: z.string() })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'An error object in case aliasing of the deployment failed.',
                        required: ['code', 'message'],
                      }),
                    buildingAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'Timestamp of when the deployment started building at.',
                        examples: [1609492210000],
                      }),
                    checksConclusion: z
                      .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                      .exactOptional()
                      .openapi({ description: 'Conclusion for checks' }),
                    checksState: z
                      .enum(['registered', 'running', 'completed'])
                      .exactOptional()
                      .openapi({ description: 'State of all registered checks' }),
                    created: z
                      .number()
                      .openapi({
                        description: 'Timestamp of when the deployment got created.',
                        examples: [1609492210000],
                      }),
                    createdAt: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'Timestamp of when the deployment got created.',
                        examples: [1609492210000],
                      }),
                    creator: z
                      .object({
                        email: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The email address of the user.',
                            examples: ['example@example.com'],
                          }),
                        githubLogin: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The GitHub login of the user.',
                            examples: ['johndoe'],
                          }),
                        gitlabLogin: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The GitLab login of the user.',
                            examples: ['johndoe'],
                          }),
                        uid: z
                          .string()
                          .openapi({
                            description: 'The unique identifier of the user.',
                            examples: ['eLrCnEgbKhsHyfbiNR7E8496'],
                          }),
                        username: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The username of the user.',
                            examples: ['johndoe'],
                          }),
                      })
                      .openapi({
                        description: 'Metadata information of the user who created the deployment.',
                        required: ['uid'],
                      }),
                    inspectorUrl: z
                      .string()
                      .nullable()
                      .openapi({
                        description: 'Vercel URL to inspect the deployment.',
                        examples: ['https://vercel.com/acme/nextjs/J1hXN00qjUeoYfpEEf7dnDtpSiVq'],
                      }),
                    isRollbackCandidate: z
                      .boolean()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'Deployment can be used for instant rollback' }),
                    meta: z
                      .record(
                        z.string(),
                        z
                          .string()
                          .openapi({
                            description: "An object containing the deployment's metadata",
                            examples: [{ foo: 'bar' }],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description: "An object containing the deployment's metadata",
                        examples: [{ foo: 'bar' }],
                      }),
                    name: z
                      .string()
                      .openapi({ description: 'The name of the deployment.', examples: ['docs'] }),
                    ready: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: 'Timestamp of when the deployment got ready.',
                        examples: [1609492210000],
                      }),
                    source: z
                      .enum(['cli', 'git', 'import', 'import/repo', 'clone/repo'])
                      .exactOptional()
                      .openapi({ description: 'The source of the deployment.', examples: ['cli'] }),
                    state: z
                      .enum(['BUILDING', 'ERROR', 'INITIALIZING', 'QUEUED', 'READY', 'CANCELED'])
                      .exactOptional()
                      .openapi({
                        description: 'In which state is the deployment.',
                        examples: ['READY'],
                      }),
                    target: z
                      .enum(['production', 'staging'])
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'On which environment has the deployment been deployed to.',
                        examples: ['production'],
                      }),
                    type: z
                      .literal('LAMBDAS')
                      .openapi({
                        description: 'The type of the deployment.',
                        examples: ['LAMBDAS'],
                      }),
                    uid: z
                      .string()
                      .openapi({
                        description: 'The unique identifier of the deployment.',
                        examples: ['dpl_2euZBFqxYdDMDG1jTrHFnNZ2eUVa'],
                      }),
                    url: z
                      .string()
                      .openapi({
                        description: 'The URL of the deployment.',
                        examples: ['docs-9jaeg38me.vercel.app'],
                      }),
                  })
                  .openapi({
                    required: ['uid', 'name', 'url', 'created', 'type', 'creator', 'inspectorUrl'],
                  }),
              ),
              pagination: PaginationSchema,
            })
            .openapi({ required: ['pagination', 'deployments'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV6DeploymentsIdFilesRoute = createRoute({
  method: 'get',
  path: '/v6/deployments/{id}/files',
  tags: ['deployments'],
  summary: 'List Deployment Files',
  description:
    'Allows to retrieve the file structure of a deployment by supplying the deployment unique identifier.',
  operationId: 'listDeploymentFiles',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique deployment identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'The unique deployment identifier', type: 'string' },
          },
          description: 'The unique deployment identifier',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieved the file tree successfully',
      content: { 'application/json': { schema: z.array(FileTreeSchema) } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'File tree not found\nDeployment not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV6DeploymentsIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/v6/deployments/{id}/files/{fileId}',
  tags: ['deployments'],
  summary: 'Get Deployment File Contents',
  description:
    'Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain the raw content of the file.',
  operationId: 'getDeploymentFileContents',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique deployment identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'The unique deployment identifier', type: 'string' },
          },
          description: 'The unique deployment identifier',
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The unique file identifier',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { description: 'The unique file identifier', type: 'string' },
          },
          description: 'The unique file identifier',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'File not found\nDeployment not found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV6DomainsDomainRoute = createRoute({
  method: 'delete',
  path: '/v6/domains/{domain}',
  tags: ['domains'],
  summary: 'Remove a domain by name',
  description:
    'Delete a previously registered domain name from Vercel. Deleting a domain will automatically remove any associated aliases.',
  operationId: 'deleteDomain',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The name of the domain.',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The name of the domain.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The name of the domain.',
          examples: ['example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response removing a domain.',
      content: {
        'application/json': {
          schema: z.object({ uid: z.string() }).openapi({ required: ['uid'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV6DomainsDomainConfigRoute = createRoute({
  method: 'get',
  path: '/v6/domains/{domain}/config',
  tags: ['domains'],
  summary: "Get a Domain's configuration",
  description: "Get a Domain's configuration.",
  operationId: 'getDomainConfig',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The name of the domain.',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The name of the domain.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The name of the domain.',
          examples: ['example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              acceptedChallenges: z
                .array(
                  z
                    .enum(['dns-01', 'http-01'])
                    .openapi({
                      description: 'Which challenge types the domain can use for issuing certs.',
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Which challenge types the domain can use for issuing certs.',
                }),
              configuredBy: z
                .enum(['CNAME', 'A', 'http'])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    "How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `null`: Domain is not resolving to Vercel.",
                }),
              misconfigured: z
                .boolean()
                .openapi({
                  description:
                    'Whether or not the domain is configured AND we can automatically generate a TLS certificate.',
                }),
            })
            .openapi({ required: ['misconfigured'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const putV7CertsRoute = createRoute({
  method: 'put',
  path: '/v7/certs',
  tags: ['certs'],
  summary: 'Upload a cert',
  description: 'Upload a cert',
  operationId: 'uploadCert',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              ca: z.string().openapi({ description: 'The certificate authority' }),
              cert: z.string().openapi({ description: 'The certificate' }),
              key: z.string().openapi({ description: 'The certificate key' }),
              skipValidation: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Skip validation of the certificate' }),
            })
            .openapi({ required: ['ca', 'key', 'cert'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              autoRenew: z.boolean(),
              cns: z.array(z.string()),
              createdAt: z.number(),
              expiresAt: z.number(),
              id: z.string(),
            })
            .openapi({ required: ['id', 'createdAt', 'expiresAt', 'autoRenew', 'cns'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    402: {
      description:
        'This feature is only available for Enterprise customers.\nThis feature is optionally available for advanced use cases. Contact Sales: https://vercel.com/contact/sales',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV7CertsRoute = createRoute({
  method: 'post',
  path: '/v7/certs',
  tags: ['certs'],
  summary: 'Issue a new cert',
  description: 'Issue a new cert',
  operationId: 'issueCert',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The common names the cert should be issued for' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              autoRenew: z.boolean(),
              cns: z.array(z.string()),
              createdAt: z.number(),
              expiresAt: z.number(),
              id: z.string(),
            })
            .openapi({ required: ['id', 'createdAt', 'expiresAt', 'autoRenew', 'cns'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    429: { description: '' },
    449: { description: '' },
    500: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const getV7CertsIdRoute = createRoute({
  method: 'get',
  path: '/v7/certs/{id}',
  tags: ['certs'],
  summary: 'Get cert by id',
  description: 'Get cert by id',
  operationId: 'getCertById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The cert id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'The cert id', type: 'string' },
          },
          description: 'The cert id',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              autoRenew: z.boolean(),
              cns: z.array(z.string()),
              createdAt: z.number(),
              expiresAt: z.number(),
              id: z.string(),
            })
            .openapi({ required: ['id', 'createdAt', 'expiresAt', 'autoRenew', 'cns'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV7CertsIdRoute = createRoute({
  method: 'delete',
  path: '/v7/certs/{id}',
  tags: ['certs'],
  summary: 'Remove cert',
  description: 'Remove cert',
  operationId: 'removeCert',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The cert id to remove',
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'The cert id to remove', type: 'string' },
          },
          description: 'The cert id to remove',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const postV8ArtifactsRoute = createRoute({
  method: 'post',
  path: '/v8/artifacts',
  tags: ['artifacts'],
  summary: 'Query information about an artifact',
  description: 'Query information about an array of artifacts.',
  operationId: 'artifactQuery',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ hashes: z.array(z.string()).openapi({ description: 'artifact hashes' }) })
            .openapi({ required: ['hashes'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .xor([
                z
                  .object({
                    size: z.number(),
                    tag: z.string().exactOptional(),
                    taskDurationMs: z.number(),
                  })
                  .openapi({ required: ['size', 'taskDurationMs'] }),
                z
                  .object({
                    message: z.string(),
                    name: z.string(),
                    stack: z.string().exactOptional(),
                  })
                  .openapi({ required: ['name', 'message'] }),
              ])
              .nullable(),
          ),
        },
      },
    },
    400: { description: 'One of the provided values in the request body is invalid.' },
    401: { description: 'Invalid token\nThe request is missing an authentication token' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\nYou do not have permission to access this resource.',
    },
  },
  security: [{ bearerToken: [] }],
})

export const postV8ArtifactsEventsRoute = createRoute({
  method: 'post',
  path: '/v8/artifacts/events',
  tags: ['artifacts'],
  summary: 'Record an artifacts cache usage event',
  description:
    'Records an artifacts cache usage event. The body of this request is an array of cache usage events. The supported event types are `HIT` and `MISS`. The source is either `LOCAL` the cache event was on the users filesystem cache or `REMOTE` if the cache event is for a remote cache. When the event is a `HIT` the request also accepts a number `duration` which is the time taken to generate the artifact in the cache.',
  operationId: 'recordEvents',
  request: {
    headers: z.object({
      'x-artifact-client-ci': z
        .string()
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuous integration or delivery environment where this artifact is downloaded.',
            in: 'header',
            name: 'x-artifact-client-ci',
            schema: {
              description:
                'The continuous integration or delivery environment where this artifact is downloaded.',
              examples: ['VERCEL'],
              maxLength: 50,
              type: 'string',
            },
            required: false,
          },
          description:
            'The continuous integration or delivery environment where this artifact is downloaded.',
          examples: ['VERCEL'],
        }),
      'x-artifact-client-interactive': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '1 if the client is an interactive shell. Otherwise 0',
            in: 'header',
            name: 'x-artifact-client-interactive',
            schema: {
              description: '1 if the client is an interactive shell. Otherwise 0',
              examples: [0],
              maximum: 1,
              minimum: 0,
              type: 'integer',
            },
            required: false,
          },
          description: '1 if the client is an interactive shell. Otherwise 0',
          examples: [0],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                duration: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.',
                    examples: [400],
                  }),
                event: z
                  .enum(['HIT', 'MISS'])
                  .openapi({
                    description:
                      'One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.',
                  }),
                hash: z
                  .string()
                  .openapi({
                    description: 'The artifact hash',
                    examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                  }),
                sessionId: z
                  .string()
                  .openapi({
                    description:
                      'A UUID (universally unique identifer) for the session that generated this event.',
                  }),
                source: z
                  .enum(['LOCAL', 'REMOTE'])
                  .openapi({
                    description:
                      "One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.",
                  }),
              })
              .openapi({ required: ['sessionId', 'source', 'hash', 'event'] }),
          ),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success. Event recorded.' },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the headers is invalid',
    },
    401: { description: 'Invalid token\nThe request is missing an authentication token' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\nYou do not have permission to access this resource.',
    },
  },
  security: [{ bearerToken: [] }],
})

export const getV8ArtifactsStatusRoute = createRoute({
  method: 'get',
  path: '/v8/artifacts/status',
  tags: ['artifacts'],
  summary: 'Get status of Remote Caching for this principal',
  description:
    'Check the status of Remote Caching for this principal. Returns a JSON-encoded status indicating if Remote Caching is enabled, disabled, or disabled due to usage limits.',
  operationId: 'status',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.enum(['disabled', 'enabled', 'over_limit', 'paused']) })
            .openapi({ required: ['status'] }),
        },
      },
    },
    400: { description: '' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV8ArtifactsHashRoute = createRoute({
  method: 'get',
  path: '/v8/artifacts/{hash}',
  tags: ['artifacts'],
  summary: 'Download a cache artifact',
  description:
    'Downloads a cache artifact indentified by its `hash` specified on the request path. The artifact is downloaded as an octet-stream. The client should verify the content-length header and response body.',
  operationId: 'downloadArtifact',
  request: {
    headers: z.object({
      'x-artifact-client-ci': z
        .string()
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuous integration or delivery environment where this artifact is downloaded.',
            in: 'header',
            name: 'x-artifact-client-ci',
            schema: {
              description:
                'The continuous integration or delivery environment where this artifact is downloaded.',
              examples: ['VERCEL'],
              maxLength: 50,
              type: 'string',
            },
            required: false,
          },
          description:
            'The continuous integration or delivery environment where this artifact is downloaded.',
          examples: ['VERCEL'],
        }),
      'x-artifact-client-interactive': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '1 if the client is an interactive shell. Otherwise 0',
            in: 'header',
            name: 'x-artifact-client-interactive',
            schema: {
              description: '1 if the client is an interactive shell. Otherwise 0',
              examples: [0],
              maximum: 1,
              minimum: 0,
              type: 'integer',
            },
            required: false,
          },
          description: '1 if the client is an interactive shell. Otherwise 0',
          examples: [0],
        }),
    }),
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'The artifact hash',
            in: 'path',
            name: 'hash',
            required: true,
            schema: {
              description: 'The artifact hash',
              examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'The artifact hash',
          examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The artifact was found and is downloaded as a stream. Content-Length should be verified.',
      content: {
        'application/json': {
          schema: z
            .any()
            .openapi({
              description: 'An octet stream response that will be piped to the response stream.',
            }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request query is invalid.\nOne of the provided values in the headers is invalid',
    },
    401: { description: 'Invalid token\nThe request is missing an authentication token' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\nYou do not have permission to access this resource.',
    },
    404: { description: 'The artifact was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const putV8ArtifactsHashRoute = createRoute({
  method: 'put',
  path: '/v8/artifacts/{hash}',
  tags: ['artifacts'],
  summary: 'Upload a cache artifact',
  description:
    'Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.',
  operationId: 'uploadArtifact',
  request: {
    headers: z.object({
      'Content-Length': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The artifact size in bytes',
            in: 'header',
            name: 'Content-Length',
            required: true,
            schema: { description: 'The artifact size in bytes', type: 'number' },
          },
          description: 'The artifact size in bytes',
        }),
      'x-artifact-duration': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The time taken to generate the uploaded artifact in milliseconds.',
            in: 'header',
            name: 'x-artifact-duration',
            required: false,
            schema: {
              description: 'The time taken to generate the uploaded artifact in milliseconds.',
              examples: [400],
              type: 'number',
            },
          },
          description: 'The time taken to generate the uploaded artifact in milliseconds.',
          examples: [400],
        }),
      'x-artifact-client-ci': z
        .string()
        .max(50)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuous integration or delivery environment where this artifact was generated.',
            in: 'header',
            name: 'x-artifact-client-ci',
            required: false,
            schema: {
              description:
                'The continuous integration or delivery environment where this artifact was generated.',
              examples: ['VERCEL'],
              maxLength: 50,
              type: 'string',
            },
          },
          description:
            'The continuous integration or delivery environment where this artifact was generated.',
          examples: ['VERCEL'],
        }),
      'x-artifact-client-interactive': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '1 if the client is an interactive shell. Otherwise 0',
            in: 'header',
            name: 'x-artifact-client-interactive',
            required: false,
            schema: {
              description: '1 if the client is an interactive shell. Otherwise 0',
              examples: [0],
              maximum: 1,
              minimum: 0,
              type: 'integer',
            },
          },
          description: '1 if the client is an interactive shell. Otherwise 0',
          examples: [0],
        }),
      'x-artifact-tag': z
        .string()
        .max(600)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`',
            in: 'header',
            name: 'x-artifact-tag',
            required: false,
            schema: {
              description:
                'The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`',
              examples: ['Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ='],
              maxLength: 600,
              type: 'string',
            },
          },
          description:
            'The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`',
          examples: ['Tc0BmHvJYMIYJ62/zx87YqO0Flxk+5Ovip25NY825CQ='],
        }),
    }),
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'The artifact hash',
            in: 'path',
            name: 'hash',
            required: true,
            schema: {
              description: 'The artifact hash',
              examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'The artifact hash',
          examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: z.any() } } },
  },
  responses: {
    202: {
      description: 'File successfully uploaded',
      content: {
        'application/json': {
          schema: z
            .object({
              urls: z
                .array(z.string())
                .openapi({
                  description: 'Array of URLs where the artifact was updated',
                  examples: [
                    ['https://api.vercel.com/v2/now/artifact/12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
                  ],
                }),
            })
            .openapi({ required: ['urls'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request query is invalid.\nOne of the provided values in the headers is invalid\nFile size is not valid',
    },
    401: { description: 'Invalid token\nThe request is missing an authentication token' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\nYou do not have permission to access this resource.',
    },
  },
  security: [{ bearerToken: [] }],
})

export const headV8ArtifactsHashRoute = createRoute({
  method: 'head',
  path: '/v8/artifacts/{hash}',
  tags: ['artifacts'],
  summary: 'Check if a cache artifact exists',
  description:
    'Check that a cache artifact with the given `hash` exists. This request returns response headers only and is equivalent to a `GET` request to this endpoint where the response contains no body.',
  operationId: 'artifactExists',
  request: {
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'The artifact hash',
            in: 'path',
            name: 'hash',
            required: true,
            schema: {
              description: 'The artifact hash',
              examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'The artifact hash',
          examples: ['12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The artifact was found and headers are returned' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    401: { description: 'Invalid token\nThe request is missing an authentication token' },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        'The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.\nThe Remote Caching usage limit has been reached for this account for this billing cycle.\nRemote Caching has been disabled for this team or user. An owner can enable it in the billing settings.\nYou do not have permission to access this resource.',
    },
    404: { description: 'The artifact was not found' },
  },
  security: [{ bearerToken: [] }],
})

export const getV9ProjectsRoute = createRoute({
  method: 'get',
  path: '/v9/projects',
  tags: ['projects'],
  summary: 'Retrieve a list of projects',
  description:
    'Allows to retrieve the list of projects of the authenticated user. The list will be paginated and the provided query parameters allow filtering the returned projects.',
  operationId: 'getProjects',
  request: {
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query only projects updated after the given timestamp',
            in: 'query',
            name: 'from',
            schema: {
              description: 'Query only projects updated after the given timestamp',
              type: 'string',
            },
            required: false,
          },
          description: 'Query only projects updated after the given timestamp',
        }),
      gitForkProtection: z
        .enum(['1', '0'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed",
            in: 'query',
            name: 'gitForkProtection',
            schema: {
              description:
                "Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed",
              enum: ['1', '0'],
              examples: ['1'],
              type: 'string',
            },
            required: false,
          },
          description:
            "Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed",
          examples: ['1'],
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of projects returned',
            in: 'query',
            name: 'limit',
            schema: { description: 'Limit the number of projects returned', type: 'string' },
            required: false,
          },
          description: 'Limit the number of projects returned',
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search projects by the name field',
            in: 'query',
            name: 'search',
            schema: { description: 'Search projects by the name field', type: 'string' },
            required: false,
          },
          description: 'Search projects by the name field',
        }),
      repo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by repo. Also used for project count',
            in: 'query',
            name: 'repo',
            schema: {
              description: 'Filter results by repo. Also used for project count',
              type: 'string',
            },
            required: false,
          },
          description: 'Filter results by repo. Also used for project count',
        }),
      repoId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by Repository ID.',
            in: 'query',
            name: 'repoId',
            schema: { description: 'Filter results by Repository ID.', type: 'string' },
            required: false,
          },
          description: 'Filter results by Repository ID.',
        }),
      repoUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by Repository URL.',
            in: 'query',
            name: 'repoUrl',
            schema: {
              description: 'Filter results by Repository URL.',
              examples: ['https://github.com/vercel/next.js'],
              type: 'string',
            },
            required: false,
          },
          description: 'Filter results by Repository URL.',
          examples: ['https://github.com/vercel/next.js'],
        }),
      excludeRepos: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by excluding those projects that belong to a repo',
            in: 'query',
            name: 'excludeRepos',
            schema: {
              description: 'Filter results by excluding those projects that belong to a repo',
              type: 'string',
            },
            required: false,
          },
          description: 'Filter results by excluding those projects that belong to a repo',
        }),
      edgeConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by connected Edge Config ID',
            in: 'query',
            name: 'edgeConfigId',
            schema: { description: 'Filter results by connected Edge Config ID', type: 'string' },
            required: false,
          },
          description: 'Filter results by connected Edge Config ID',
        }),
      edgeConfigTokenId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by connected Edge Config Token ID',
            in: 'query',
            name: 'edgeConfigTokenId',
            schema: {
              description: 'Filter results by connected Edge Config Token ID',
              type: 'string',
            },
            required: false,
          },
          description: 'Filter results by connected Edge Config Token ID',
        }),
      connectConfigurationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by linked Connect configuration ID',
            in: 'query',
            name: 'connectConfigurationId',
            schema: {
              description: 'Filter results by linked Connect configuration ID',
              type: 'string',
            },
            required: false,
          },
          description: 'Filter results by linked Connect configuration ID',
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The paginated list of projects',
      content: {
        'application/json': {
          schema: z
            .object({
              pagination: PaginationSchema,
              projects: z.array(
                z
                  .object({
                    accountId: z.string(),
                    analytics: z
                      .object({
                        canceledAt: z.number().nullable(),
                        disabledAt: z.number(),
                        enabledAt: z.number(),
                        id: z.string(),
                        paidAt: z.number().exactOptional(),
                        sampleRatePercent: z.number().nullable().exactOptional(),
                        spendLimitInDollars: z.number().nullable().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: ['id', 'canceledAt', 'disabledAt', 'enabledAt'] }),
                    autoExposeSystemEnvs: z.boolean().exactOptional(),
                    buildCommand: z.string().nullable().exactOptional(),
                    commandForIgnoringBuildStep: z.string().nullable().exactOptional(),
                    connectConfigurationId: z.string().nullable().exactOptional(),
                    createdAt: z.number().exactOptional(),
                    devCommand: z.string().nullable().exactOptional(),
                    directoryListing: z.boolean(),
                    enablePreviewFeedback: z.boolean().nullable().exactOptional(),
                    env: z
                      .array(
                        z
                          .object({
                            configurationId: z.string().nullable().exactOptional(),
                            createdAt: z.number().exactOptional(),
                            createdBy: z.string().nullable().exactOptional(),
                            decrypted: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: 'Whether `value` is decrypted.' }),
                            edgeConfigId: z.string().nullable().exactOptional(),
                            edgeConfigTokenId: z.string().nullable().exactOptional(),
                            gitBranch: z.string().exactOptional(),
                            id: z.string().exactOptional(),
                            key: z.string(),
                            target: z
                              .xor([
                                z.array(
                                  z.enum([
                                    'production',
                                    'preview',
                                    'development',
                                    'preview',
                                    'development',
                                  ]),
                                ),
                                z.enum([
                                  'production',
                                  'preview',
                                  'development',
                                  'preview',
                                  'development',
                                ]),
                              ])
                              .exactOptional(),
                            type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                            updatedAt: z.number().exactOptional(),
                            updatedBy: z.string().nullable().exactOptional(),
                            value: z.string(),
                          })
                          .openapi({ required: ['type', 'key', 'value'] }),
                      )
                      .exactOptional(),
                    framework: z
                      .enum([
                        'blitzjs',
                        'nextjs',
                        'gatsby',
                        'remix',
                        'astro',
                        'hexo',
                        'eleventy',
                        'docusaurus-2',
                        'docusaurus',
                        'preact',
                        'solidstart',
                        'dojo',
                        'ember',
                        'vue',
                        'scully',
                        'ionic-angular',
                        'angular',
                        'polymer',
                        'svelte',
                        'sveltekit',
                        'sveltekit-1',
                        'ionic-react',
                        'create-react-app',
                        'gridsome',
                        'umijs',
                        'sapper',
                        'saber',
                        'stencil',
                        'nuxtjs',
                        'redwoodjs',
                        'hugo',
                        'jekyll',
                        'brunch',
                        'middleman',
                        'zola',
                        'hydrogen',
                        'vite',
                        'vitepress',
                        'vuepress',
                        'parcel',
                        'sanity',
                      ])
                      .nullable()
                      .exactOptional(),
                    gitForkProtection: z.boolean().exactOptional(),
                    hasFloatingAliases: z.boolean().exactOptional(),
                    id: z.string(),
                    installCommand: z.string().nullable().exactOptional(),
                    lastRollbackTarget: z
                      .object({
                        fromDeploymentId: z.string(),
                        jobStatus: z.enum([
                          'succeeded',
                          'failed',
                          'skipped',
                          'pending',
                          'in-progress',
                        ]),
                        requestedAt: z.number(),
                        toDeploymentId: z.string(),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({
                        required: [
                          'fromDeploymentId',
                          'toDeploymentId',
                          'jobStatus',
                          'requestedAt',
                        ],
                      }),
                    latestDeployments: z
                      .array(
                        z
                          .object({
                            alias: z.array(z.string()).exactOptional(),
                            aliasAssigned: z
                              .xor([z.number(), z.boolean()])
                              .nullable()
                              .exactOptional(),
                            aliasError: z
                              .object({ code: z.string(), message: z.string() })
                              .nullable()
                              .exactOptional()
                              .openapi({ required: ['code', 'message'] }),
                            aliasFinal: z.string().nullable().exactOptional(),
                            automaticAliases: z.array(z.string()).exactOptional(),
                            buildingAt: z.number().exactOptional(),
                            builds: z
                              .array(
                                z
                                  .object({
                                    dest: z.string().exactOptional(),
                                    src: z.string().exactOptional(),
                                    use: z.string(),
                                  })
                                  .openapi({ required: ['use'] }),
                              )
                              .exactOptional(),
                            checksConclusion: z
                              .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                              .exactOptional(),
                            checksState: z
                              .enum(['registered', 'running', 'completed'])
                              .exactOptional(),
                            createdAt: z.number(),
                            createdIn: z.string(),
                            creator: z
                              .object({
                                email: z.string(),
                                githubLogin: z.string().exactOptional(),
                                gitlabLogin: z.string().exactOptional(),
                                uid: z.string(),
                                username: z.string(),
                              })
                              .nullable()
                              .openapi({ required: ['email', 'uid', 'username'] }),
                            deploymentHostname: z.string(),
                            forced: z.boolean().exactOptional(),
                            id: z.string(),
                            meta: z
                              .record(z.string(), z.string())
                              .exactOptional()
                              .openapi({
                                description:
                                  'Construct a type with a set of properties K of type T',
                              }),
                            monorepoManager: z.string().nullable().exactOptional(),
                            name: z.string(),
                            plan: z.enum(['hobby', 'enterprise', 'pro', 'oss']),
                            previewCommentsEnabled: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Whether or not preview comments are enabled for the deployment',
                                examples: [false],
                              }),
                            private: z.boolean(),
                            readyAt: z.number().exactOptional(),
                            readyState: z.enum([
                              'BUILDING',
                              'ERROR',
                              'INITIALIZING',
                              'QUEUED',
                              'READY',
                              'CANCELED',
                            ]),
                            requestedAt: z.number().exactOptional(),
                            target: z.string().nullable().exactOptional(),
                            teamId: z.string().nullable().exactOptional(),
                            type: z.literal('LAMBDAS'),
                            url: z.string(),
                            userId: z.string(),
                            withCache: z.boolean().exactOptional(),
                          })
                          .openapi({
                            required: [
                              'createdAt',
                              'createdIn',
                              'creator',
                              'deploymentHostname',
                              'name',
                              'id',
                              'plan',
                              'private',
                              'readyState',
                              'type',
                              'url',
                              'userId',
                            ],
                          }),
                      )
                      .exactOptional(),
                    link: z
                      .xor([
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            deployHooks: z.array(
                              z
                                .object({
                                  createdAt: z.number().exactOptional(),
                                  id: z.string(),
                                  name: z.string(),
                                  ref: z.string(),
                                  url: z.string(),
                                })
                                .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                            ),
                            gitCredentialId: z.string().exactOptional(),
                            org: z.string().exactOptional(),
                            productionBranch: z.string().exactOptional(),
                            repo: z.string().exactOptional(),
                            repoId: z.number().exactOptional(),
                            sourceless: z.boolean().exactOptional(),
                            type: z.literal('github').exactOptional(),
                            updatedAt: z.number().exactOptional(),
                          })
                          .openapi({ required: ['deployHooks'] }),
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            deployHooks: z.array(
                              z
                                .object({
                                  createdAt: z.number().exactOptional(),
                                  id: z.string(),
                                  name: z.string(),
                                  ref: z.string(),
                                  url: z.string(),
                                })
                                .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                            ),
                            gitCredentialId: z.string().exactOptional(),
                            productionBranch: z.string().exactOptional(),
                            projectId: z.string().exactOptional(),
                            projectName: z.string().exactOptional(),
                            projectNameWithNamespace: z.string().exactOptional(),
                            projectNamespace: z.string().exactOptional(),
                            projectUrl: z.string().exactOptional(),
                            sourceless: z.boolean().exactOptional(),
                            type: z.literal('gitlab').exactOptional(),
                            updatedAt: z.number().exactOptional(),
                          })
                          .openapi({ required: ['deployHooks'] }),
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            deployHooks: z.array(
                              z
                                .object({
                                  createdAt: z.number().exactOptional(),
                                  id: z.string(),
                                  name: z.string(),
                                  ref: z.string(),
                                  url: z.string(),
                                })
                                .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                            ),
                            gitCredentialId: z.string().exactOptional(),
                            name: z.string().exactOptional(),
                            owner: z.string().exactOptional(),
                            productionBranch: z.string().exactOptional(),
                            slug: z.string().exactOptional(),
                            sourceless: z.boolean().exactOptional(),
                            type: z.literal('bitbucket').exactOptional(),
                            updatedAt: z.number().exactOptional(),
                            uuid: z.string().exactOptional(),
                            workspaceUuid: z.string().exactOptional(),
                          })
                          .openapi({ required: ['deployHooks'] }),
                      ])
                      .exactOptional(),
                    live: z.boolean().exactOptional(),
                    name: z.string(),
                    nodeVersion: z.enum(['18.x', '16.x', '14.x', '12.x', '10.x']),
                    outputDirectory: z.string().nullable().exactOptional(),
                    passwordProtection: z
                      .object({ deploymentType: z.enum(['preview', 'all']) })
                      .nullable()
                      .exactOptional()
                      .openapi({ required: ['deploymentType'] }),
                    permissions: z
                      .object({
                        Monitoring: z.array(ACLActionSchema).exactOptional(),
                        aliasGlobal: z.array(ACLActionSchema).exactOptional(),
                        aliasProject: z.array(ACLActionSchema).exactOptional(),
                        aliasProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                        analytics: z.array(ACLActionSchema).exactOptional(),
                        analyticsSampling: z.array(ACLActionSchema).exactOptional(),
                        analyticsUsage: z.array(ACLActionSchema).exactOptional(),
                        auditLog: z.array(ACLActionSchema).exactOptional(),
                        awsBillingIntegration: z.array(ACLActionSchema).exactOptional(),
                        billingAddress: z.array(ACLActionSchema).exactOptional(),
                        billingInformation: z.array(ACLActionSchema).exactOptional(),
                        billingInvoice: z.array(ACLActionSchema).exactOptional(),
                        billingInvoiceEmailRecipient: z.array(ACLActionSchema).exactOptional(),
                        billingInvoiceLanguage: z.array(ACLActionSchema).exactOptional(),
                        billingPlan: z.array(ACLActionSchema).exactOptional(),
                        billingPurchaseOrder: z.array(ACLActionSchema).exactOptional(),
                        billingTaxId: z.array(ACLActionSchema).exactOptional(),
                        cacheArtifact: z.array(ACLActionSchema).exactOptional(),
                        cacheArtifactUsageEvent: z.array(ACLActionSchema).exactOptional(),
                        concurrentBuilds: z.array(ACLActionSchema).exactOptional(),
                        connect: z.array(ACLActionSchema).exactOptional(),
                        connectConfiguration: z.array(ACLActionSchema).exactOptional(),
                        connectConfigurationLink: z.array(ACLActionSchema).exactOptional(),
                        deployment: z.array(ACLActionSchema).exactOptional(),
                        deploymentCheck: z.array(ACLActionSchema).exactOptional(),
                        deploymentCheckPreview: z.array(ACLActionSchema).exactOptional(),
                        deploymentPreview: z.array(ACLActionSchema).exactOptional(),
                        deploymentPrivate: z.array(ACLActionSchema).exactOptional(),
                        deploymentProductionGit: z.array(ACLActionSchema).exactOptional(),
                        deploymentRollback: z.array(ACLActionSchema).exactOptional(),
                        domain: z.array(ACLActionSchema).exactOptional(),
                        domainAcceptDelegation: z.array(ACLActionSchema).exactOptional(),
                        domainAuthCodes: z.array(ACLActionSchema).exactOptional(),
                        domainCertificate: z.array(ACLActionSchema).exactOptional(),
                        domainCheckConfig: z.array(ACLActionSchema).exactOptional(),
                        domainMove: z.array(ACLActionSchema).exactOptional(),
                        domainPurchase: z.array(ACLActionSchema).exactOptional(),
                        domainRecord: z.array(ACLActionSchema).exactOptional(),
                        domainTransferIn: z.array(ACLActionSchema).exactOptional(),
                        edgeConfig: z.array(ACLActionSchema).exactOptional(),
                        edgeConfigItem: z.array(ACLActionSchema).exactOptional(),
                        edgeConfigToken: z.array(ACLActionSchema).exactOptional(),
                        endpointVerification: z.array(ACLActionSchema).exactOptional(),
                        event: z.array(ACLActionSchema).exactOptional(),
                        fileUpload: z.array(ACLActionSchema).exactOptional(),
                        gitRepository: z.array(ACLActionSchema).exactOptional(),
                        integration: z.array(ACLActionSchema).exactOptional(),
                        integrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                        integrationConfigurationProjects: z.array(ACLActionSchema).exactOptional(),
                        integrationConfigurationTransfer: z.array(ACLActionSchema).exactOptional(),
                        integrationVercelConfigurationOverride: z
                          .array(ACLActionSchema)
                          .exactOptional(),
                        job: z.array(ACLActionSchema).exactOptional(),
                        logDrain: z.array(ACLActionSchema).exactOptional(),
                        monitoringChart: z.array(ACLActionSchema).exactOptional(),
                        monitoringQuery: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainConfiguration: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainExpire: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainMoved: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainPurchase: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainRenewal: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainTransfer: z.array(ACLActionSchema).exactOptional(),
                        notificationDomainUnverified: z.array(ACLActionSchema).exactOptional(),
                        notificationPaymentFailed: z.array(ACLActionSchema).exactOptional(),
                        notificationSpendCap: z.array(ACLActionSchema).exactOptional(),
                        notificationUsageAlert: z.array(ACLActionSchema).exactOptional(),
                        openTelemetryEndpoint: z.array(ACLActionSchema).exactOptional(),
                        passwordProtection: z.array(ACLActionSchema).exactOptional(),
                        paymentMethod: z.array(ACLActionSchema).exactOptional(),
                        permissions: z.array(ACLActionSchema).exactOptional(),
                        previewDeploymentSuffix: z.array(ACLActionSchema).exactOptional(),
                        proTrialOnboarding: z.array(ACLActionSchema).exactOptional(),
                        project: z.array(ACLActionSchema).exactOptional(),
                        projectDeploymentHook: z.array(ACLActionSchema).exactOptional(),
                        projectDomain: z.array(ACLActionSchema).exactOptional(),
                        projectDomainMove: z.array(ACLActionSchema).exactOptional(),
                        projectEnvVars: z.array(ACLActionSchema).exactOptional(),
                        projectEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                        projectEnvVarsUnownedByIntegration: z
                          .array(ACLActionSchema)
                          .exactOptional(),
                        projectIntegrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                        projectLink: z.array(ACLActionSchema).exactOptional(),
                        projectMember: z.array(ACLActionSchema).exactOptional(),
                        projectProductionBranch: z.array(ACLActionSchema).exactOptional(),
                        projectProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                        projectTransfer: z.array(ACLActionSchema).exactOptional(),
                        rateLimit: z.array(ACLActionSchema).exactOptional(),
                        redis: z.array(ACLActionSchema).exactOptional(),
                        remoteCaching: z.array(ACLActionSchema).exactOptional(),
                        samlConfig: z.array(ACLActionSchema).exactOptional(),
                        secret: z.array(ACLActionSchema).exactOptional(),
                        sensitiveEnvironmentVariablePolicy: z
                          .array(ACLActionSchema)
                          .exactOptional(),
                        sharedEnvVars: z.array(ACLActionSchema).exactOptional(),
                        sharedEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                        spendCapConfiguration: z.array(ACLActionSchema).exactOptional(),
                        spendCapState: z.array(ACLActionSchema).exactOptional(),
                        supportCase: z.array(ACLActionSchema).exactOptional(),
                        supportCaseComment: z.array(ACLActionSchema).exactOptional(),
                        team: z.array(ACLActionSchema).exactOptional(),
                        teamAccessRequest: z.array(ACLActionSchema).exactOptional(),
                        teamFellowMembership: z.array(ACLActionSchema).exactOptional(),
                        teamInvite: z.array(ACLActionSchema).exactOptional(),
                        teamInviteCode: z.array(ACLActionSchema).exactOptional(),
                        teamJoin: z.array(ACLActionSchema).exactOptional(),
                        teamOwnMembership: z.array(ACLActionSchema).exactOptional(),
                        teamOwnMembershipDisconnectSAML: z.array(ACLActionSchema).exactOptional(),
                        token: z.array(ACLActionSchema).exactOptional(),
                        usage: z.array(ACLActionSchema).exactOptional(),
                        user: z.array(ACLActionSchema).exactOptional(),
                        userConnection: z.array(ACLActionSchema).exactOptional(),
                        webAnalytics: z.array(ACLActionSchema).exactOptional(),
                        webhook: z.array(ACLActionSchema).exactOptional(),
                        'webhook-event': z.array(ACLActionSchema).exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    protectionBypass: z
                      .record(z.string(), z.string())
                      .exactOptional()
                      .openapi({
                        description: 'Construct a type with a set of properties K of type T',
                      }),
                    publicSource: z.boolean().nullable().exactOptional(),
                    rootDirectory: z.string().nullable().exactOptional(),
                    serverlessFunctionRegion: z.string().nullable().exactOptional(),
                    skipGitConnectDuringLink: z.boolean().exactOptional(),
                    sourceFilesOutsideRootDirectory: z.boolean().exactOptional(),
                    ssoProtection: z
                      .object({ deploymentType: z.enum(['preview', 'all']) })
                      .nullable()
                      .exactOptional()
                      .openapi({ required: ['deploymentType'] }),
                    targets: z
                      .record(
                        z.string(),
                        z
                          .string()
                          .openapi({
                            description: "An object containing the deployment's metadata",
                            examples: [{ foo: 'bar' }],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description: "An object containing the deployment's metadata",
                        examples: [{ foo: 'bar' }],
                      }),
                    transferCompletedAt: z.number().exactOptional(),
                    transferStartedAt: z.number().exactOptional(),
                    transferToAccountId: z.string().exactOptional(),
                    transferredFromAccountId: z.string().exactOptional(),
                    updatedAt: z.number().exactOptional(),
                  })
                  .openapi({
                    required: ['accountId', 'directoryListing', 'id', 'name', 'nodeVersion'],
                  }),
              ),
            })
            .openapi({ required: ['projects', 'pagination'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const postV9ProjectsRoute = createRoute({
  method: 'post',
  path: '/v9/projects',
  tags: ['projects'],
  summary: 'Create a new project',
  description:
    'Allows to create a new project with the provided configuration. It only requires the project `name` but more configuration can be provided to override the defaults.',
  operationId: 'createProject',
  request: {
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              buildCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The build command for this project. When `null` is used this value will be automatically detected',
                }),
              commandForIgnoringBuildStep: z.string().max(256).nullable().exactOptional(),
              devCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The dev command for this project. When `null` is used this value will be automatically detected',
                }),
              environmentVariables: z
                .array(
                  z
                    .object({
                      gitBranch: z
                        .string()
                        .max(250)
                        .exactOptional()
                        .openapi({
                          description: 'The git branch of the environment variable',
                          examples: ['feature-1'],
                        }),
                      key: z.string().openapi({ description: 'Name of the ENV variable' }),
                      target: z
                        .xor([
                          z.enum([
                            'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio',
                            'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe',
                            'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen',
                          ]),
                          z.array(
                            z.enum([
                              'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio',
                              'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe',
                              'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen',
                            ]),
                          ),
                        ])
                        .openapi({
                          description:
                            'Deployment Target or Targets in which the ENV variable will be used',
                        }),
                      type: z
                        .enum(['system', 'secret', 'encrypted', 'plain'])
                        .exactOptional()
                        .openapi({ description: 'Type of the ENV variable' }),
                      value: z.string().openapi({ description: 'Value for the ENV variable' }),
                    })
                    .openapi({ required: ['key', 'value', 'target'] }),
                )
                .exactOptional()
                .openapi({ description: 'Collection of ENV Variables the Project will use' }),
              framework: z
                .union([
                  z.literal(null),
                  z.literal('blitzjs'),
                  z.literal('nextjs'),
                  z.literal('gatsby'),
                  z.literal('remix'),
                  z.literal('astro'),
                  z.literal('hexo'),
                  z.literal('eleventy'),
                  z.literal('docusaurus-2'),
                  z.literal('docusaurus'),
                  z.literal('preact'),
                  z.literal('solidstart'),
                  z.literal('dojo'),
                  z.literal('ember'),
                  z.literal('vue'),
                  z.literal('scully'),
                  z.literal('ionic-angular'),
                  z.literal('angular'),
                  z.literal('polymer'),
                  z.literal('svelte'),
                  z.literal('sveltekit'),
                  z.literal('sveltekit-1'),
                  z.literal('ionic-react'),
                  z.literal('create-react-app'),
                  z.literal('gridsome'),
                  z.literal('umijs'),
                  z.literal('sapper'),
                  z.literal('saber'),
                  z.literal('stencil'),
                  z.literal('nuxtjs'),
                  z.literal('redwoodjs'),
                  z.literal('hugo'),
                  z.literal('jekyll'),
                  z.literal('brunch'),
                  z.literal('middleman'),
                  z.literal('zola'),
                  z.literal('hydrogen'),
                  z.literal('vite'),
                  z.literal('vitepress'),
                  z.literal('vuepress'),
                  z.literal('parcel'),
                  z.literal('sanity'),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The framework that is being used for this project. When `null` is used no framework is selected',
                }),
              gitRepository: z
                .object({
                  repo: z
                    .string()
                    .openapi({
                      description:
                        'The name of the git repository. For example: \\"vercel/next.js\\"',
                    }),
                  type: z
                    .enum(['github', 'gitlab', 'bitbucket'])
                    .openapi({ description: 'The Git Provider of the repository' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Git Repository that will be connected to the project. When this is defined, any pushes to the specified connected Git Repository will be automatically deployed',
                  required: ['type', 'repo'],
                }),
              installCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The install command for this project. When `null` is used this value will be automatically detected',
                }),
              name: z
                .string()
                .regex(/^[a-z0-9]([a-z0-9]|-[a-z0-9])*$/)
                .max(100)
                .openapi({
                  description: 'The desired name for the project',
                  examples: ['a-project-name'],
                }),
              outputDirectory: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The output directory of the project. When `null` is used this value will be automatically detected',
                }),
              publicSource: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether the source code and logs of the deployments for this project should be public or not',
                }),
              rootDirectory: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root',
                }),
              serverlessFunctionRegion: z
                .string()
                .max(4)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The region to deploy Serverless Functions in this project',
                }),
              skipGitConnectDuringLink: z
                .boolean()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The project was successfuly created',
      content: {
        'application/json': {
          schema: z
            .object({
              accountId: z.string(),
              analytics: z
                .object({
                  canceledAt: z.number().nullable(),
                  disabledAt: z.number(),
                  enabledAt: z.number(),
                  id: z.string(),
                  paidAt: z.number().exactOptional(),
                  sampleRatePercent: z.number().nullable().exactOptional(),
                  spendLimitInDollars: z.number().nullable().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['id', 'canceledAt', 'disabledAt', 'enabledAt'] }),
              autoExposeSystemEnvs: z.boolean().exactOptional(),
              buildCommand: z.string().nullable().exactOptional(),
              commandForIgnoringBuildStep: z.string().nullable().exactOptional(),
              connectConfigurationId: z.string().nullable().exactOptional(),
              createdAt: z.number().exactOptional(),
              devCommand: z.string().nullable().exactOptional(),
              directoryListing: z.boolean(),
              enablePreviewFeedback: z.boolean().nullable().exactOptional(),
              env: z
                .array(
                  z
                    .object({
                      configurationId: z.string().nullable().exactOptional(),
                      createdAt: z.number().exactOptional(),
                      createdBy: z.string().nullable().exactOptional(),
                      decrypted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether `value` is decrypted.' }),
                      edgeConfigId: z.string().nullable().exactOptional(),
                      edgeConfigTokenId: z.string().nullable().exactOptional(),
                      gitBranch: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      key: z.string(),
                      target: z
                        .xor([
                          z.array(
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ),
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ])
                        .exactOptional(),
                      type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                      updatedAt: z.number().exactOptional(),
                      updatedBy: z.string().nullable().exactOptional(),
                      value: z.string(),
                    })
                    .openapi({ required: ['type', 'key', 'value'] }),
                )
                .exactOptional(),
              framework: z
                .enum([
                  'blitzjs',
                  'nextjs',
                  'gatsby',
                  'remix',
                  'astro',
                  'hexo',
                  'eleventy',
                  'docusaurus-2',
                  'docusaurus',
                  'preact',
                  'solidstart',
                  'dojo',
                  'ember',
                  'vue',
                  'scully',
                  'ionic-angular',
                  'angular',
                  'polymer',
                  'svelte',
                  'sveltekit',
                  'sveltekit-1',
                  'ionic-react',
                  'create-react-app',
                  'gridsome',
                  'umijs',
                  'sapper',
                  'saber',
                  'stencil',
                  'nuxtjs',
                  'redwoodjs',
                  'hugo',
                  'jekyll',
                  'brunch',
                  'middleman',
                  'zola',
                  'hydrogen',
                  'vite',
                  'vitepress',
                  'vuepress',
                  'parcel',
                  'sanity',
                ])
                .nullable()
                .exactOptional(),
              gitForkProtection: z.boolean().exactOptional(),
              hasFloatingAliases: z.boolean().exactOptional(),
              id: z.string(),
              installCommand: z.string().nullable().exactOptional(),
              lastRollbackTarget: z
                .object({
                  fromDeploymentId: z.string(),
                  jobStatus: z.enum(['succeeded', 'failed', 'skipped', 'pending', 'in-progress']),
                  requestedAt: z.number(),
                  toDeploymentId: z.string(),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  required: ['fromDeploymentId', 'toDeploymentId', 'jobStatus', 'requestedAt'],
                }),
              latestDeployments: z
                .array(
                  z
                    .object({
                      alias: z.array(z.string()).exactOptional(),
                      aliasAssigned: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
                      aliasError: z
                        .object({ code: z.string(), message: z.string() })
                        .nullable()
                        .exactOptional()
                        .openapi({ required: ['code', 'message'] }),
                      aliasFinal: z.string().nullable().exactOptional(),
                      automaticAliases: z.array(z.string()).exactOptional(),
                      buildingAt: z.number().exactOptional(),
                      builds: z
                        .array(
                          z
                            .object({
                              dest: z.string().exactOptional(),
                              src: z.string().exactOptional(),
                              use: z.string(),
                            })
                            .openapi({ required: ['use'] }),
                        )
                        .exactOptional(),
                      checksConclusion: z
                        .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                        .exactOptional(),
                      checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
                      createdAt: z.number(),
                      createdIn: z.string(),
                      creator: z
                        .object({
                          email: z.string(),
                          githubLogin: z.string().exactOptional(),
                          gitlabLogin: z.string().exactOptional(),
                          uid: z.string(),
                          username: z.string(),
                        })
                        .nullable()
                        .openapi({ required: ['email', 'uid', 'username'] }),
                      deploymentHostname: z.string(),
                      forced: z.boolean().exactOptional(),
                      id: z.string(),
                      meta: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({
                          description: 'Construct a type with a set of properties K of type T',
                        }),
                      monorepoManager: z.string().nullable().exactOptional(),
                      name: z.string(),
                      plan: z.enum(['hobby', 'enterprise', 'pro', 'oss']),
                      previewCommentsEnabled: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not preview comments are enabled for the deployment',
                          examples: [false],
                        }),
                      private: z.boolean(),
                      readyAt: z.number().exactOptional(),
                      readyState: z.enum([
                        'BUILDING',
                        'ERROR',
                        'INITIALIZING',
                        'QUEUED',
                        'READY',
                        'CANCELED',
                      ]),
                      requestedAt: z.number().exactOptional(),
                      target: z.string().nullable().exactOptional(),
                      teamId: z.string().nullable().exactOptional(),
                      type: z.literal('LAMBDAS'),
                      url: z.string(),
                      userId: z.string(),
                      withCache: z.boolean().exactOptional(),
                    })
                    .openapi({
                      required: [
                        'createdAt',
                        'createdIn',
                        'creator',
                        'deploymentHostname',
                        'name',
                        'id',
                        'plan',
                        'private',
                        'readyState',
                        'type',
                        'url',
                        'userId',
                      ],
                    }),
                )
                .exactOptional(),
              link: z
                .xor([
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      org: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      repo: z.string().exactOptional(),
                      repoId: z.number().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('github').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      projectId: z.string().exactOptional(),
                      projectName: z.string().exactOptional(),
                      projectNameWithNamespace: z.string().exactOptional(),
                      projectNamespace: z.string().exactOptional(),
                      projectUrl: z.string().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('gitlab').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      owner: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('bitbucket').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                      uuid: z.string().exactOptional(),
                      workspaceUuid: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                ])
                .exactOptional(),
              live: z.boolean().exactOptional(),
              name: z.string(),
              nodeVersion: z.enum(['18.x', '16.x', '14.x', '12.x', '10.x']),
              outputDirectory: z.string().nullable().exactOptional(),
              passwordProtection: z
                .object({ deploymentType: z.enum(['preview', 'all']) })
                .nullable()
                .exactOptional()
                .openapi({ required: ['deploymentType'] }),
              permissions: z
                .object({
                  Monitoring: z.array(ACLActionSchema).exactOptional(),
                  aliasGlobal: z.array(ACLActionSchema).exactOptional(),
                  aliasProject: z.array(ACLActionSchema).exactOptional(),
                  aliasProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                  analytics: z.array(ACLActionSchema).exactOptional(),
                  analyticsSampling: z.array(ACLActionSchema).exactOptional(),
                  analyticsUsage: z.array(ACLActionSchema).exactOptional(),
                  auditLog: z.array(ACLActionSchema).exactOptional(),
                  awsBillingIntegration: z.array(ACLActionSchema).exactOptional(),
                  billingAddress: z.array(ACLActionSchema).exactOptional(),
                  billingInformation: z.array(ACLActionSchema).exactOptional(),
                  billingInvoice: z.array(ACLActionSchema).exactOptional(),
                  billingInvoiceEmailRecipient: z.array(ACLActionSchema).exactOptional(),
                  billingInvoiceLanguage: z.array(ACLActionSchema).exactOptional(),
                  billingPlan: z.array(ACLActionSchema).exactOptional(),
                  billingPurchaseOrder: z.array(ACLActionSchema).exactOptional(),
                  billingTaxId: z.array(ACLActionSchema).exactOptional(),
                  cacheArtifact: z.array(ACLActionSchema).exactOptional(),
                  cacheArtifactUsageEvent: z.array(ACLActionSchema).exactOptional(),
                  concurrentBuilds: z.array(ACLActionSchema).exactOptional(),
                  connect: z.array(ACLActionSchema).exactOptional(),
                  connectConfiguration: z.array(ACLActionSchema).exactOptional(),
                  connectConfigurationLink: z.array(ACLActionSchema).exactOptional(),
                  deployment: z.array(ACLActionSchema).exactOptional(),
                  deploymentCheck: z.array(ACLActionSchema).exactOptional(),
                  deploymentCheckPreview: z.array(ACLActionSchema).exactOptional(),
                  deploymentPreview: z.array(ACLActionSchema).exactOptional(),
                  deploymentPrivate: z.array(ACLActionSchema).exactOptional(),
                  deploymentProductionGit: z.array(ACLActionSchema).exactOptional(),
                  deploymentRollback: z.array(ACLActionSchema).exactOptional(),
                  domain: z.array(ACLActionSchema).exactOptional(),
                  domainAcceptDelegation: z.array(ACLActionSchema).exactOptional(),
                  domainAuthCodes: z.array(ACLActionSchema).exactOptional(),
                  domainCertificate: z.array(ACLActionSchema).exactOptional(),
                  domainCheckConfig: z.array(ACLActionSchema).exactOptional(),
                  domainMove: z.array(ACLActionSchema).exactOptional(),
                  domainPurchase: z.array(ACLActionSchema).exactOptional(),
                  domainRecord: z.array(ACLActionSchema).exactOptional(),
                  domainTransferIn: z.array(ACLActionSchema).exactOptional(),
                  edgeConfig: z.array(ACLActionSchema).exactOptional(),
                  edgeConfigItem: z.array(ACLActionSchema).exactOptional(),
                  edgeConfigToken: z.array(ACLActionSchema).exactOptional(),
                  endpointVerification: z.array(ACLActionSchema).exactOptional(),
                  event: z.array(ACLActionSchema).exactOptional(),
                  fileUpload: z.array(ACLActionSchema).exactOptional(),
                  gitRepository: z.array(ACLActionSchema).exactOptional(),
                  integration: z.array(ACLActionSchema).exactOptional(),
                  integrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                  integrationConfigurationProjects: z.array(ACLActionSchema).exactOptional(),
                  integrationConfigurationTransfer: z.array(ACLActionSchema).exactOptional(),
                  integrationVercelConfigurationOverride: z.array(ACLActionSchema).exactOptional(),
                  job: z.array(ACLActionSchema).exactOptional(),
                  logDrain: z.array(ACLActionSchema).exactOptional(),
                  monitoringChart: z.array(ACLActionSchema).exactOptional(),
                  monitoringQuery: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainConfiguration: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainExpire: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainMoved: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainPurchase: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainRenewal: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainTransfer: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainUnverified: z.array(ACLActionSchema).exactOptional(),
                  notificationPaymentFailed: z.array(ACLActionSchema).exactOptional(),
                  notificationSpendCap: z.array(ACLActionSchema).exactOptional(),
                  notificationUsageAlert: z.array(ACLActionSchema).exactOptional(),
                  openTelemetryEndpoint: z.array(ACLActionSchema).exactOptional(),
                  passwordProtection: z.array(ACLActionSchema).exactOptional(),
                  paymentMethod: z.array(ACLActionSchema).exactOptional(),
                  permissions: z.array(ACLActionSchema).exactOptional(),
                  previewDeploymentSuffix: z.array(ACLActionSchema).exactOptional(),
                  proTrialOnboarding: z.array(ACLActionSchema).exactOptional(),
                  project: z.array(ACLActionSchema).exactOptional(),
                  projectDeploymentHook: z.array(ACLActionSchema).exactOptional(),
                  projectDomain: z.array(ACLActionSchema).exactOptional(),
                  projectDomainMove: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVars: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVarsUnownedByIntegration: z.array(ACLActionSchema).exactOptional(),
                  projectIntegrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                  projectLink: z.array(ACLActionSchema).exactOptional(),
                  projectMember: z.array(ACLActionSchema).exactOptional(),
                  projectProductionBranch: z.array(ACLActionSchema).exactOptional(),
                  projectProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                  projectTransfer: z.array(ACLActionSchema).exactOptional(),
                  rateLimit: z.array(ACLActionSchema).exactOptional(),
                  redis: z.array(ACLActionSchema).exactOptional(),
                  remoteCaching: z.array(ACLActionSchema).exactOptional(),
                  samlConfig: z.array(ACLActionSchema).exactOptional(),
                  secret: z.array(ACLActionSchema).exactOptional(),
                  sensitiveEnvironmentVariablePolicy: z.array(ACLActionSchema).exactOptional(),
                  sharedEnvVars: z.array(ACLActionSchema).exactOptional(),
                  sharedEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                  spendCapConfiguration: z.array(ACLActionSchema).exactOptional(),
                  spendCapState: z.array(ACLActionSchema).exactOptional(),
                  supportCase: z.array(ACLActionSchema).exactOptional(),
                  supportCaseComment: z.array(ACLActionSchema).exactOptional(),
                  team: z.array(ACLActionSchema).exactOptional(),
                  teamAccessRequest: z.array(ACLActionSchema).exactOptional(),
                  teamFellowMembership: z.array(ACLActionSchema).exactOptional(),
                  teamInvite: z.array(ACLActionSchema).exactOptional(),
                  teamInviteCode: z.array(ACLActionSchema).exactOptional(),
                  teamJoin: z.array(ACLActionSchema).exactOptional(),
                  teamOwnMembership: z.array(ACLActionSchema).exactOptional(),
                  teamOwnMembershipDisconnectSAML: z.array(ACLActionSchema).exactOptional(),
                  token: z.array(ACLActionSchema).exactOptional(),
                  usage: z.array(ACLActionSchema).exactOptional(),
                  user: z.array(ACLActionSchema).exactOptional(),
                  userConnection: z.array(ACLActionSchema).exactOptional(),
                  webAnalytics: z.array(ACLActionSchema).exactOptional(),
                  webhook: z.array(ACLActionSchema).exactOptional(),
                  'webhook-event': z.array(ACLActionSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              protectionBypass: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({ description: 'Construct a type with a set of properties K of type T' }),
              publicSource: z.boolean().nullable().exactOptional(),
              rootDirectory: z.string().nullable().exactOptional(),
              serverlessFunctionRegion: z.string().nullable().exactOptional(),
              skipGitConnectDuringLink: z.boolean().exactOptional(),
              sourceFilesOutsideRootDirectory: z.boolean().exactOptional(),
              ssoProtection: z
                .object({ deploymentType: z.enum(['preview', 'all']) })
                .nullable()
                .exactOptional()
                .openapi({ required: ['deploymentType'] }),
              targets: z
                .record(
                  z.string(),
                  z
                    .string()
                    .openapi({
                      description: "An object containing the deployment's metadata",
                      examples: [{ foo: 'bar' }],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: "An object containing the deployment's metadata",
                  examples: [{ foo: 'bar' }],
                }),
              transferCompletedAt: z.number().exactOptional(),
              transferStartedAt: z.number().exactOptional(),
              transferToAccountId: z.string().exactOptional(),
              transferredFromAccountId: z.string().exactOptional(),
              updatedAt: z.number().exactOptional(),
            })
            .openapi({ required: ['accountId', 'directoryListing', 'id', 'name', 'nodeVersion'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nThe Bitbucket Webhook for the project link could not be created\nThe Gitlab Webhook for the project link could not be created',
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: { description: 'You do not have permission to access this resource.' },
    409: { description: 'A project with the provided name already exists.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV9ProjectsIdOrNameRoute = createRoute({
  method: 'get',
  path: '/v9/projects/{idOrName}',
  tags: ['projects'],
  summary: 'Find a project by id or name',
  description:
    'Get the information for a specific project by passing either the project `id` or `name` in the URL.',
  operationId: 'getProject',
  request: {
    params: z.object({
      idOrName: ((schema) =>
        z.union([
          z.preprocess(
            ((read) => (val: unknown) => {
              const result = read.safeParse(val)
              return result.success ? result.data : val
            })(z.stringbool()),
            schema,
          ),
          schema,
        ]))(z.xor([z.string(), z.boolean()])).openapi({
        param: {
          description: 'The unique project identifier or the project name',
          in: 'path',
          name: 'idOrName',
          required: true,
          schema: {
            description: 'The unique project identifier or the project name',
            oneOf: [{ type: 'string' }, { type: 'boolean' }],
          },
        },
        description: 'The unique project identifier or the project name',
      }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The project information',
      content: {
        'application/json': {
          schema: z
            .object({
              accountId: z.string(),
              analytics: z
                .object({
                  canceledAt: z.number().nullable(),
                  disabledAt: z.number(),
                  enabledAt: z.number(),
                  id: z.string(),
                  paidAt: z.number().exactOptional(),
                  sampleRatePercent: z.number().nullable().exactOptional(),
                  spendLimitInDollars: z.number().nullable().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['id', 'canceledAt', 'disabledAt', 'enabledAt'] }),
              autoExposeSystemEnvs: z.boolean().exactOptional(),
              buildCommand: z.string().nullable().exactOptional(),
              commandForIgnoringBuildStep: z.string().nullable().exactOptional(),
              connectConfigurationId: z.string().nullable().exactOptional(),
              createdAt: z.number().exactOptional(),
              devCommand: z.string().nullable().exactOptional(),
              directoryListing: z.boolean(),
              enablePreviewFeedback: z.boolean().nullable().exactOptional(),
              env: z
                .array(
                  z
                    .object({
                      configurationId: z.string().nullable().exactOptional(),
                      createdAt: z.number().exactOptional(),
                      createdBy: z.string().nullable().exactOptional(),
                      decrypted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether `value` is decrypted.' }),
                      edgeConfigId: z.string().nullable().exactOptional(),
                      edgeConfigTokenId: z.string().nullable().exactOptional(),
                      gitBranch: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      key: z.string(),
                      target: z
                        .xor([
                          z.array(
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ),
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ])
                        .exactOptional(),
                      type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                      updatedAt: z.number().exactOptional(),
                      updatedBy: z.string().nullable().exactOptional(),
                      value: z.string(),
                    })
                    .openapi({ required: ['type', 'key', 'value'] }),
                )
                .exactOptional(),
              framework: z
                .enum([
                  'blitzjs',
                  'nextjs',
                  'gatsby',
                  'remix',
                  'astro',
                  'hexo',
                  'eleventy',
                  'docusaurus-2',
                  'docusaurus',
                  'preact',
                  'solidstart',
                  'dojo',
                  'ember',
                  'vue',
                  'scully',
                  'ionic-angular',
                  'angular',
                  'polymer',
                  'svelte',
                  'sveltekit',
                  'sveltekit-1',
                  'ionic-react',
                  'create-react-app',
                  'gridsome',
                  'umijs',
                  'sapper',
                  'saber',
                  'stencil',
                  'nuxtjs',
                  'redwoodjs',
                  'hugo',
                  'jekyll',
                  'brunch',
                  'middleman',
                  'zola',
                  'hydrogen',
                  'vite',
                  'vitepress',
                  'vuepress',
                  'parcel',
                  'sanity',
                ])
                .nullable()
                .exactOptional(),
              gitForkProtection: z.boolean().exactOptional(),
              hasFloatingAliases: z.boolean().exactOptional(),
              id: z.string(),
              installCommand: z.string().nullable().exactOptional(),
              lastRollbackTarget: z
                .object({
                  fromDeploymentId: z.string(),
                  jobStatus: z.enum(['succeeded', 'failed', 'skipped', 'pending', 'in-progress']),
                  requestedAt: z.number(),
                  toDeploymentId: z.string(),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  required: ['fromDeploymentId', 'toDeploymentId', 'jobStatus', 'requestedAt'],
                }),
              latestDeployments: z
                .array(
                  z
                    .object({
                      alias: z.array(z.string()).exactOptional(),
                      aliasAssigned: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
                      aliasError: z
                        .object({ code: z.string(), message: z.string() })
                        .nullable()
                        .exactOptional()
                        .openapi({ required: ['code', 'message'] }),
                      aliasFinal: z.string().nullable().exactOptional(),
                      automaticAliases: z.array(z.string()).exactOptional(),
                      buildingAt: z.number().exactOptional(),
                      builds: z
                        .array(
                          z
                            .object({
                              dest: z.string().exactOptional(),
                              src: z.string().exactOptional(),
                              use: z.string(),
                            })
                            .openapi({ required: ['use'] }),
                        )
                        .exactOptional(),
                      checksConclusion: z
                        .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                        .exactOptional(),
                      checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
                      createdAt: z.number(),
                      createdIn: z.string(),
                      creator: z
                        .object({
                          email: z.string(),
                          githubLogin: z.string().exactOptional(),
                          gitlabLogin: z.string().exactOptional(),
                          uid: z.string(),
                          username: z.string(),
                        })
                        .nullable()
                        .openapi({ required: ['email', 'uid', 'username'] }),
                      deploymentHostname: z.string(),
                      forced: z.boolean().exactOptional(),
                      id: z.string(),
                      meta: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({
                          description: 'Construct a type with a set of properties K of type T',
                        }),
                      monorepoManager: z.string().nullable().exactOptional(),
                      name: z.string(),
                      plan: z.enum(['hobby', 'enterprise', 'pro', 'oss']),
                      previewCommentsEnabled: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not preview comments are enabled for the deployment',
                          examples: [false],
                        }),
                      private: z.boolean(),
                      readyAt: z.number().exactOptional(),
                      readyState: z.enum([
                        'BUILDING',
                        'ERROR',
                        'INITIALIZING',
                        'QUEUED',
                        'READY',
                        'CANCELED',
                      ]),
                      requestedAt: z.number().exactOptional(),
                      target: z.string().nullable().exactOptional(),
                      teamId: z.string().nullable().exactOptional(),
                      type: z.literal('LAMBDAS'),
                      url: z.string(),
                      userId: z.string(),
                      withCache: z.boolean().exactOptional(),
                    })
                    .openapi({
                      required: [
                        'createdAt',
                        'createdIn',
                        'creator',
                        'deploymentHostname',
                        'name',
                        'id',
                        'plan',
                        'private',
                        'readyState',
                        'type',
                        'url',
                        'userId',
                      ],
                    }),
                )
                .exactOptional(),
              link: z
                .xor([
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      org: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      repo: z.string().exactOptional(),
                      repoId: z.number().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('github').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      projectId: z.string().exactOptional(),
                      projectName: z.string().exactOptional(),
                      projectNameWithNamespace: z.string().exactOptional(),
                      projectNamespace: z.string().exactOptional(),
                      projectUrl: z.string().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('gitlab').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      owner: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('bitbucket').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                      uuid: z.string().exactOptional(),
                      workspaceUuid: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                ])
                .exactOptional(),
              live: z.boolean().exactOptional(),
              name: z.string(),
              nodeVersion: z.enum(['18.x', '16.x', '14.x', '12.x', '10.x']),
              outputDirectory: z.string().nullable().exactOptional(),
              passwordProtection: z
                .object({ deploymentType: z.enum(['preview', 'all']) })
                .nullable()
                .exactOptional()
                .openapi({ required: ['deploymentType'] }),
              permissions: z
                .object({
                  Monitoring: z.array(ACLActionSchema).exactOptional(),
                  aliasGlobal: z.array(ACLActionSchema).exactOptional(),
                  aliasProject: z.array(ACLActionSchema).exactOptional(),
                  aliasProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                  analytics: z.array(ACLActionSchema).exactOptional(),
                  analyticsSampling: z.array(ACLActionSchema).exactOptional(),
                  analyticsUsage: z.array(ACLActionSchema).exactOptional(),
                  auditLog: z.array(ACLActionSchema).exactOptional(),
                  awsBillingIntegration: z.array(ACLActionSchema).exactOptional(),
                  billingAddress: z.array(ACLActionSchema).exactOptional(),
                  billingInformation: z.array(ACLActionSchema).exactOptional(),
                  billingInvoice: z.array(ACLActionSchema).exactOptional(),
                  billingInvoiceEmailRecipient: z.array(ACLActionSchema).exactOptional(),
                  billingInvoiceLanguage: z.array(ACLActionSchema).exactOptional(),
                  billingPlan: z.array(ACLActionSchema).exactOptional(),
                  billingPurchaseOrder: z.array(ACLActionSchema).exactOptional(),
                  billingTaxId: z.array(ACLActionSchema).exactOptional(),
                  cacheArtifact: z.array(ACLActionSchema).exactOptional(),
                  cacheArtifactUsageEvent: z.array(ACLActionSchema).exactOptional(),
                  concurrentBuilds: z.array(ACLActionSchema).exactOptional(),
                  connect: z.array(ACLActionSchema).exactOptional(),
                  connectConfiguration: z.array(ACLActionSchema).exactOptional(),
                  connectConfigurationLink: z.array(ACLActionSchema).exactOptional(),
                  deployment: z.array(ACLActionSchema).exactOptional(),
                  deploymentCheck: z.array(ACLActionSchema).exactOptional(),
                  deploymentCheckPreview: z.array(ACLActionSchema).exactOptional(),
                  deploymentPreview: z.array(ACLActionSchema).exactOptional(),
                  deploymentPrivate: z.array(ACLActionSchema).exactOptional(),
                  deploymentProductionGit: z.array(ACLActionSchema).exactOptional(),
                  deploymentRollback: z.array(ACLActionSchema).exactOptional(),
                  domain: z.array(ACLActionSchema).exactOptional(),
                  domainAcceptDelegation: z.array(ACLActionSchema).exactOptional(),
                  domainAuthCodes: z.array(ACLActionSchema).exactOptional(),
                  domainCertificate: z.array(ACLActionSchema).exactOptional(),
                  domainCheckConfig: z.array(ACLActionSchema).exactOptional(),
                  domainMove: z.array(ACLActionSchema).exactOptional(),
                  domainPurchase: z.array(ACLActionSchema).exactOptional(),
                  domainRecord: z.array(ACLActionSchema).exactOptional(),
                  domainTransferIn: z.array(ACLActionSchema).exactOptional(),
                  edgeConfig: z.array(ACLActionSchema).exactOptional(),
                  edgeConfigItem: z.array(ACLActionSchema).exactOptional(),
                  edgeConfigToken: z.array(ACLActionSchema).exactOptional(),
                  endpointVerification: z.array(ACLActionSchema).exactOptional(),
                  event: z.array(ACLActionSchema).exactOptional(),
                  fileUpload: z.array(ACLActionSchema).exactOptional(),
                  gitRepository: z.array(ACLActionSchema).exactOptional(),
                  integration: z.array(ACLActionSchema).exactOptional(),
                  integrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                  integrationConfigurationProjects: z.array(ACLActionSchema).exactOptional(),
                  integrationConfigurationTransfer: z.array(ACLActionSchema).exactOptional(),
                  integrationVercelConfigurationOverride: z.array(ACLActionSchema).exactOptional(),
                  job: z.array(ACLActionSchema).exactOptional(),
                  logDrain: z.array(ACLActionSchema).exactOptional(),
                  monitoringChart: z.array(ACLActionSchema).exactOptional(),
                  monitoringQuery: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainConfiguration: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainExpire: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainMoved: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainPurchase: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainRenewal: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainTransfer: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainUnverified: z.array(ACLActionSchema).exactOptional(),
                  notificationPaymentFailed: z.array(ACLActionSchema).exactOptional(),
                  notificationSpendCap: z.array(ACLActionSchema).exactOptional(),
                  notificationUsageAlert: z.array(ACLActionSchema).exactOptional(),
                  openTelemetryEndpoint: z.array(ACLActionSchema).exactOptional(),
                  passwordProtection: z.array(ACLActionSchema).exactOptional(),
                  paymentMethod: z.array(ACLActionSchema).exactOptional(),
                  permissions: z.array(ACLActionSchema).exactOptional(),
                  previewDeploymentSuffix: z.array(ACLActionSchema).exactOptional(),
                  proTrialOnboarding: z.array(ACLActionSchema).exactOptional(),
                  project: z.array(ACLActionSchema).exactOptional(),
                  projectDeploymentHook: z.array(ACLActionSchema).exactOptional(),
                  projectDomain: z.array(ACLActionSchema).exactOptional(),
                  projectDomainMove: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVars: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVarsUnownedByIntegration: z.array(ACLActionSchema).exactOptional(),
                  projectIntegrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                  projectLink: z.array(ACLActionSchema).exactOptional(),
                  projectMember: z.array(ACLActionSchema).exactOptional(),
                  projectProductionBranch: z.array(ACLActionSchema).exactOptional(),
                  projectProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                  projectTransfer: z.array(ACLActionSchema).exactOptional(),
                  rateLimit: z.array(ACLActionSchema).exactOptional(),
                  redis: z.array(ACLActionSchema).exactOptional(),
                  remoteCaching: z.array(ACLActionSchema).exactOptional(),
                  samlConfig: z.array(ACLActionSchema).exactOptional(),
                  secret: z.array(ACLActionSchema).exactOptional(),
                  sensitiveEnvironmentVariablePolicy: z.array(ACLActionSchema).exactOptional(),
                  sharedEnvVars: z.array(ACLActionSchema).exactOptional(),
                  sharedEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                  spendCapConfiguration: z.array(ACLActionSchema).exactOptional(),
                  spendCapState: z.array(ACLActionSchema).exactOptional(),
                  supportCase: z.array(ACLActionSchema).exactOptional(),
                  supportCaseComment: z.array(ACLActionSchema).exactOptional(),
                  team: z.array(ACLActionSchema).exactOptional(),
                  teamAccessRequest: z.array(ACLActionSchema).exactOptional(),
                  teamFellowMembership: z.array(ACLActionSchema).exactOptional(),
                  teamInvite: z.array(ACLActionSchema).exactOptional(),
                  teamInviteCode: z.array(ACLActionSchema).exactOptional(),
                  teamJoin: z.array(ACLActionSchema).exactOptional(),
                  teamOwnMembership: z.array(ACLActionSchema).exactOptional(),
                  teamOwnMembershipDisconnectSAML: z.array(ACLActionSchema).exactOptional(),
                  token: z.array(ACLActionSchema).exactOptional(),
                  usage: z.array(ACLActionSchema).exactOptional(),
                  user: z.array(ACLActionSchema).exactOptional(),
                  userConnection: z.array(ACLActionSchema).exactOptional(),
                  webAnalytics: z.array(ACLActionSchema).exactOptional(),
                  webhook: z.array(ACLActionSchema).exactOptional(),
                  'webhook-event': z.array(ACLActionSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              protectionBypass: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({ description: 'Construct a type with a set of properties K of type T' }),
              publicSource: z.boolean().nullable().exactOptional(),
              rootDirectory: z.string().nullable().exactOptional(),
              serverlessFunctionRegion: z.string().nullable().exactOptional(),
              skipGitConnectDuringLink: z.boolean().exactOptional(),
              sourceFilesOutsideRootDirectory: z.boolean().exactOptional(),
              ssoProtection: z
                .object({ deploymentType: z.enum(['preview', 'all']) })
                .nullable()
                .exactOptional()
                .openapi({ required: ['deploymentType'] }),
              targets: z
                .record(
                  z.string(),
                  z
                    .string()
                    .openapi({
                      description: "An object containing the deployment's metadata",
                      examples: [{ foo: 'bar' }],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: "An object containing the deployment's metadata",
                  examples: [{ foo: 'bar' }],
                }),
              transferCompletedAt: z.number().exactOptional(),
              transferStartedAt: z.number().exactOptional(),
              transferToAccountId: z.string().exactOptional(),
              transferredFromAccountId: z.string().exactOptional(),
              updatedAt: z.number().exactOptional(),
            })
            .openapi({ required: ['accountId', 'directoryListing', 'id', 'name', 'nodeVersion'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The project could not be found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV9ProjectsIdOrNameRoute = createRoute({
  method: 'delete',
  path: '/v9/projects/{idOrName}',
  tags: ['projects'],
  summary: 'Delete a Project',
  description: 'Delete a specific project by passing either the project `id` or `name` in the URL.',
  operationId: 'deleteProject',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The project was successfuly removed' },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: '' },
    409: { description: '' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV9ProjectsIdOrNameRoute = createRoute({
  method: 'patch',
  path: '/v9/projects/{idOrName}',
  tags: ['projects'],
  summary: 'Update an existing project',
  description: 'Update the fields of a project using either its `name` or `id`.',
  operationId: 'updateProject',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              autoExposeSystemEnvs: z.boolean().exactOptional(),
              buildCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The build command for this project. When `null` is used this value will be automatically detected',
                }),
              commandForIgnoringBuildStep: z.string().max(256).nullable().exactOptional(),
              devCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The dev command for this project. When `null` is used this value will be automatically detected',
                }),
              directoryListing: z.boolean().exactOptional(),
              enablePreviewFeedback: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Opt-in to Preview comments on the project level' }),
              framework: z
                .union([
                  z.literal(null),
                  z.literal('blitzjs'),
                  z.literal('nextjs'),
                  z.literal('gatsby'),
                  z.literal('remix'),
                  z.literal('astro'),
                  z.literal('hexo'),
                  z.literal('eleventy'),
                  z.literal('docusaurus-2'),
                  z.literal('docusaurus'),
                  z.literal('preact'),
                  z.literal('solidstart'),
                  z.literal('dojo'),
                  z.literal('ember'),
                  z.literal('vue'),
                  z.literal('scully'),
                  z.literal('ionic-angular'),
                  z.literal('angular'),
                  z.literal('polymer'),
                  z.literal('svelte'),
                  z.literal('sveltekit'),
                  z.literal('sveltekit-1'),
                  z.literal('ionic-react'),
                  z.literal('create-react-app'),
                  z.literal('gridsome'),
                  z.literal('umijs'),
                  z.literal('sapper'),
                  z.literal('saber'),
                  z.literal('stencil'),
                  z.literal('nuxtjs'),
                  z.literal('redwoodjs'),
                  z.literal('hugo'),
                  z.literal('jekyll'),
                  z.literal('brunch'),
                  z.literal('middleman'),
                  z.literal('zola'),
                  z.literal('hydrogen'),
                  z.literal('vite'),
                  z.literal('vitepress'),
                  z.literal('vuepress'),
                  z.literal('parcel'),
                  z.literal('sanity'),
                ])
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The framework that is being used for this project. When `null` is used no framework is selected',
                }),
              gitForkProtection: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed",
                }),
              installCommand: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The install command for this project. When `null` is used this value will be automatically detected',
                }),
              name: z
                .string()
                .regex(/^[a-z0-9]([a-z0-9]|-[a-z0-9])*$/)
                .max(100)
                .exactOptional()
                .openapi({
                  description: 'The desired name for the project',
                  examples: ['a-project-name'],
                }),
              nodeVersion: z.enum(['18.x', '16.x', '14.x', '12.x', '10.x']).exactOptional(),
              outputDirectory: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The output directory of the project. When `null` is used this value will be automatically detected',
                }),
              passwordProtection: z
                .strictObject({
                  deploymentType: z
                    .enum(['all', 'preview'])
                    .openapi({
                      description:
                        'Specify if the password will apply to every Deployment Target or just Preview',
                    }),
                  password: z
                    .string()
                    .max(72)
                    .nullable()
                    .exactOptional()
                    .openapi({
                      description: 'The password that will be used to protect Project Deployments',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Allows to protect project deployments with a password',
                  required: ['deploymentType'],
                }),
              publicSource: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether the source code and logs of the deployments for this project should be public or not',
                }),
              rootDirectory: z
                .string()
                .max(256)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root',
                }),
              serverlessFunctionRegion: z
                .string()
                .max(4)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The region to deploy Serverless Functions in this project',
                }),
              skipGitConnectDuringLink: z
                .boolean()
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link`.',
                }),
              sourceFilesOutsideRootDirectory: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Indicates if there are source files outside of the root directory',
                }),
              ssoProtection: z
                .strictObject({
                  deploymentType: z
                    .enum(['all', 'preview'])
                    .default('preview')
                    .openapi({
                      description:
                        'Specify if the Vercel Authentication (SSO Protection) will apply to every Deployment Target or just Preview',
                    }),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Ensures visitors to your Preview Deployments are logged into Vercel and have a minimum of Viewer access on your team',
                  required: ['deploymentType'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The project was succesfuly updated',
      content: {
        'application/json': {
          schema: z
            .object({
              accountId: z.string(),
              analytics: z
                .object({
                  canceledAt: z.number().nullable(),
                  disabledAt: z.number(),
                  enabledAt: z.number(),
                  id: z.string(),
                  paidAt: z.number().exactOptional(),
                  sampleRatePercent: z.number().nullable().exactOptional(),
                  spendLimitInDollars: z.number().nullable().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: ['id', 'canceledAt', 'disabledAt', 'enabledAt'] }),
              autoExposeSystemEnvs: z.boolean().exactOptional(),
              buildCommand: z.string().nullable().exactOptional(),
              commandForIgnoringBuildStep: z.string().nullable().exactOptional(),
              connectConfigurationId: z.string().nullable().exactOptional(),
              createdAt: z.number().exactOptional(),
              devCommand: z.string().nullable().exactOptional(),
              directoryListing: z.boolean(),
              enablePreviewFeedback: z.boolean().nullable().exactOptional(),
              env: z
                .array(
                  z
                    .object({
                      configurationId: z.string().nullable().exactOptional(),
                      createdAt: z.number().exactOptional(),
                      createdBy: z.string().nullable().exactOptional(),
                      decrypted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether `value` is decrypted.' }),
                      edgeConfigId: z.string().nullable().exactOptional(),
                      edgeConfigTokenId: z.string().nullable().exactOptional(),
                      gitBranch: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      key: z.string(),
                      target: z
                        .xor([
                          z.array(
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ),
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ])
                        .exactOptional(),
                      type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                      updatedAt: z.number().exactOptional(),
                      updatedBy: z.string().nullable().exactOptional(),
                      value: z.string(),
                    })
                    .openapi({ required: ['type', 'key', 'value'] }),
                )
                .exactOptional(),
              framework: z
                .enum([
                  'blitzjs',
                  'nextjs',
                  'gatsby',
                  'remix',
                  'astro',
                  'hexo',
                  'eleventy',
                  'docusaurus-2',
                  'docusaurus',
                  'preact',
                  'solidstart',
                  'dojo',
                  'ember',
                  'vue',
                  'scully',
                  'ionic-angular',
                  'angular',
                  'polymer',
                  'svelte',
                  'sveltekit',
                  'sveltekit-1',
                  'ionic-react',
                  'create-react-app',
                  'gridsome',
                  'umijs',
                  'sapper',
                  'saber',
                  'stencil',
                  'nuxtjs',
                  'redwoodjs',
                  'hugo',
                  'jekyll',
                  'brunch',
                  'middleman',
                  'zola',
                  'hydrogen',
                  'vite',
                  'vitepress',
                  'vuepress',
                  'parcel',
                  'sanity',
                ])
                .nullable()
                .exactOptional(),
              gitForkProtection: z.boolean().exactOptional(),
              hasFloatingAliases: z.boolean().exactOptional(),
              id: z.string(),
              installCommand: z.string().nullable().exactOptional(),
              lastRollbackTarget: z
                .object({
                  fromDeploymentId: z.string(),
                  jobStatus: z.enum(['succeeded', 'failed', 'skipped', 'pending', 'in-progress']),
                  requestedAt: z.number(),
                  toDeploymentId: z.string(),
                })
                .nullable()
                .exactOptional()
                .openapi({
                  required: ['fromDeploymentId', 'toDeploymentId', 'jobStatus', 'requestedAt'],
                }),
              latestDeployments: z
                .array(
                  z
                    .object({
                      alias: z.array(z.string()).exactOptional(),
                      aliasAssigned: z.xor([z.number(), z.boolean()]).nullable().exactOptional(),
                      aliasError: z
                        .object({ code: z.string(), message: z.string() })
                        .nullable()
                        .exactOptional()
                        .openapi({ required: ['code', 'message'] }),
                      aliasFinal: z.string().nullable().exactOptional(),
                      automaticAliases: z.array(z.string()).exactOptional(),
                      buildingAt: z.number().exactOptional(),
                      builds: z
                        .array(
                          z
                            .object({
                              dest: z.string().exactOptional(),
                              src: z.string().exactOptional(),
                              use: z.string(),
                            })
                            .openapi({ required: ['use'] }),
                        )
                        .exactOptional(),
                      checksConclusion: z
                        .enum(['succeeded', 'failed', 'skipped', 'canceled'])
                        .exactOptional(),
                      checksState: z.enum(['registered', 'running', 'completed']).exactOptional(),
                      createdAt: z.number(),
                      createdIn: z.string(),
                      creator: z
                        .object({
                          email: z.string(),
                          githubLogin: z.string().exactOptional(),
                          gitlabLogin: z.string().exactOptional(),
                          uid: z.string(),
                          username: z.string(),
                        })
                        .nullable()
                        .openapi({ required: ['email', 'uid', 'username'] }),
                      deploymentHostname: z.string(),
                      forced: z.boolean().exactOptional(),
                      id: z.string(),
                      meta: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({
                          description: 'Construct a type with a set of properties K of type T',
                        }),
                      monorepoManager: z.string().nullable().exactOptional(),
                      name: z.string(),
                      plan: z.enum(['hobby', 'enterprise', 'pro', 'oss']),
                      previewCommentsEnabled: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not preview comments are enabled for the deployment',
                          examples: [false],
                        }),
                      private: z.boolean(),
                      readyAt: z.number().exactOptional(),
                      readyState: z.enum([
                        'BUILDING',
                        'ERROR',
                        'INITIALIZING',
                        'QUEUED',
                        'READY',
                        'CANCELED',
                      ]),
                      requestedAt: z.number().exactOptional(),
                      target: z.string().nullable().exactOptional(),
                      teamId: z.string().nullable().exactOptional(),
                      type: z.literal('LAMBDAS'),
                      url: z.string(),
                      userId: z.string(),
                      withCache: z.boolean().exactOptional(),
                    })
                    .openapi({
                      required: [
                        'createdAt',
                        'createdIn',
                        'creator',
                        'deploymentHostname',
                        'name',
                        'id',
                        'plan',
                        'private',
                        'readyState',
                        'type',
                        'url',
                        'userId',
                      ],
                    }),
                )
                .exactOptional(),
              link: z
                .xor([
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      org: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      repo: z.string().exactOptional(),
                      repoId: z.number().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('github').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      projectId: z.string().exactOptional(),
                      projectName: z.string().exactOptional(),
                      projectNameWithNamespace: z.string().exactOptional(),
                      projectNamespace: z.string().exactOptional(),
                      projectUrl: z.string().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('gitlab').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                  z
                    .object({
                      createdAt: z.number().exactOptional(),
                      deployHooks: z.array(
                        z
                          .object({
                            createdAt: z.number().exactOptional(),
                            id: z.string(),
                            name: z.string(),
                            ref: z.string(),
                            url: z.string(),
                          })
                          .openapi({ required: ['id', 'name', 'ref', 'url'] }),
                      ),
                      gitCredentialId: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      owner: z.string().exactOptional(),
                      productionBranch: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      sourceless: z.boolean().exactOptional(),
                      type: z.literal('bitbucket').exactOptional(),
                      updatedAt: z.number().exactOptional(),
                      uuid: z.string().exactOptional(),
                      workspaceUuid: z.string().exactOptional(),
                    })
                    .openapi({ required: ['deployHooks'] }),
                ])
                .exactOptional(),
              live: z.boolean().exactOptional(),
              name: z.string(),
              nodeVersion: z.enum(['18.x', '16.x', '14.x', '12.x', '10.x']),
              outputDirectory: z.string().nullable().exactOptional(),
              passwordProtection: z
                .object({ deploymentType: z.enum(['all', 'preview']) })
                .nullable()
                .exactOptional()
                .openapi({ required: ['deploymentType'] }),
              permissions: z
                .object({
                  Monitoring: z.array(ACLActionSchema).exactOptional(),
                  aliasGlobal: z.array(ACLActionSchema).exactOptional(),
                  aliasProject: z.array(ACLActionSchema).exactOptional(),
                  aliasProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                  analytics: z.array(ACLActionSchema).exactOptional(),
                  analyticsSampling: z.array(ACLActionSchema).exactOptional(),
                  analyticsUsage: z.array(ACLActionSchema).exactOptional(),
                  auditLog: z.array(ACLActionSchema).exactOptional(),
                  awsBillingIntegration: z.array(ACLActionSchema).exactOptional(),
                  billingAddress: z.array(ACLActionSchema).exactOptional(),
                  billingInformation: z.array(ACLActionSchema).exactOptional(),
                  billingInvoice: z.array(ACLActionSchema).exactOptional(),
                  billingInvoiceEmailRecipient: z.array(ACLActionSchema).exactOptional(),
                  billingInvoiceLanguage: z.array(ACLActionSchema).exactOptional(),
                  billingPlan: z.array(ACLActionSchema).exactOptional(),
                  billingPurchaseOrder: z.array(ACLActionSchema).exactOptional(),
                  billingTaxId: z.array(ACLActionSchema).exactOptional(),
                  cacheArtifact: z.array(ACLActionSchema).exactOptional(),
                  cacheArtifactUsageEvent: z.array(ACLActionSchema).exactOptional(),
                  concurrentBuilds: z.array(ACLActionSchema).exactOptional(),
                  connect: z.array(ACLActionSchema).exactOptional(),
                  connectConfiguration: z.array(ACLActionSchema).exactOptional(),
                  connectConfigurationLink: z.array(ACLActionSchema).exactOptional(),
                  deployment: z.array(ACLActionSchema).exactOptional(),
                  deploymentCheck: z.array(ACLActionSchema).exactOptional(),
                  deploymentCheckPreview: z.array(ACLActionSchema).exactOptional(),
                  deploymentPreview: z.array(ACLActionSchema).exactOptional(),
                  deploymentPrivate: z.array(ACLActionSchema).exactOptional(),
                  deploymentProductionGit: z.array(ACLActionSchema).exactOptional(),
                  deploymentRollback: z.array(ACLActionSchema).exactOptional(),
                  domain: z.array(ACLActionSchema).exactOptional(),
                  domainAcceptDelegation: z.array(ACLActionSchema).exactOptional(),
                  domainAuthCodes: z.array(ACLActionSchema).exactOptional(),
                  domainCertificate: z.array(ACLActionSchema).exactOptional(),
                  domainCheckConfig: z.array(ACLActionSchema).exactOptional(),
                  domainMove: z.array(ACLActionSchema).exactOptional(),
                  domainPurchase: z.array(ACLActionSchema).exactOptional(),
                  domainRecord: z.array(ACLActionSchema).exactOptional(),
                  domainTransferIn: z.array(ACLActionSchema).exactOptional(),
                  edgeConfig: z.array(ACLActionSchema).exactOptional(),
                  edgeConfigItem: z.array(ACLActionSchema).exactOptional(),
                  edgeConfigToken: z.array(ACLActionSchema).exactOptional(),
                  endpointVerification: z.array(ACLActionSchema).exactOptional(),
                  event: z.array(ACLActionSchema).exactOptional(),
                  fileUpload: z.array(ACLActionSchema).exactOptional(),
                  gitRepository: z.array(ACLActionSchema).exactOptional(),
                  integration: z.array(ACLActionSchema).exactOptional(),
                  integrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                  integrationConfigurationProjects: z.array(ACLActionSchema).exactOptional(),
                  integrationConfigurationTransfer: z.array(ACLActionSchema).exactOptional(),
                  integrationVercelConfigurationOverride: z.array(ACLActionSchema).exactOptional(),
                  job: z.array(ACLActionSchema).exactOptional(),
                  logDrain: z.array(ACLActionSchema).exactOptional(),
                  monitoringChart: z.array(ACLActionSchema).exactOptional(),
                  monitoringQuery: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainConfiguration: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainExpire: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainMoved: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainPurchase: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainRenewal: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainTransfer: z.array(ACLActionSchema).exactOptional(),
                  notificationDomainUnverified: z.array(ACLActionSchema).exactOptional(),
                  notificationPaymentFailed: z.array(ACLActionSchema).exactOptional(),
                  notificationSpendCap: z.array(ACLActionSchema).exactOptional(),
                  notificationUsageAlert: z.array(ACLActionSchema).exactOptional(),
                  openTelemetryEndpoint: z.array(ACLActionSchema).exactOptional(),
                  passwordProtection: z.array(ACLActionSchema).exactOptional(),
                  paymentMethod: z.array(ACLActionSchema).exactOptional(),
                  permissions: z.array(ACLActionSchema).exactOptional(),
                  previewDeploymentSuffix: z.array(ACLActionSchema).exactOptional(),
                  proTrialOnboarding: z.array(ACLActionSchema).exactOptional(),
                  project: z.array(ACLActionSchema).exactOptional(),
                  projectDeploymentHook: z.array(ACLActionSchema).exactOptional(),
                  projectDomain: z.array(ACLActionSchema).exactOptional(),
                  projectDomainMove: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVars: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                  projectEnvVarsUnownedByIntegration: z.array(ACLActionSchema).exactOptional(),
                  projectIntegrationConfiguration: z.array(ACLActionSchema).exactOptional(),
                  projectLink: z.array(ACLActionSchema).exactOptional(),
                  projectMember: z.array(ACLActionSchema).exactOptional(),
                  projectProductionBranch: z.array(ACLActionSchema).exactOptional(),
                  projectProtectionBypass: z.array(ACLActionSchema).exactOptional(),
                  projectTransfer: z.array(ACLActionSchema).exactOptional(),
                  rateLimit: z.array(ACLActionSchema).exactOptional(),
                  redis: z.array(ACLActionSchema).exactOptional(),
                  remoteCaching: z.array(ACLActionSchema).exactOptional(),
                  samlConfig: z.array(ACLActionSchema).exactOptional(),
                  secret: z.array(ACLActionSchema).exactOptional(),
                  sensitiveEnvironmentVariablePolicy: z.array(ACLActionSchema).exactOptional(),
                  sharedEnvVars: z.array(ACLActionSchema).exactOptional(),
                  sharedEnvVarsProduction: z.array(ACLActionSchema).exactOptional(),
                  spendCapConfiguration: z.array(ACLActionSchema).exactOptional(),
                  spendCapState: z.array(ACLActionSchema).exactOptional(),
                  supportCase: z.array(ACLActionSchema).exactOptional(),
                  supportCaseComment: z.array(ACLActionSchema).exactOptional(),
                  team: z.array(ACLActionSchema).exactOptional(),
                  teamAccessRequest: z.array(ACLActionSchema).exactOptional(),
                  teamFellowMembership: z.array(ACLActionSchema).exactOptional(),
                  teamInvite: z.array(ACLActionSchema).exactOptional(),
                  teamInviteCode: z.array(ACLActionSchema).exactOptional(),
                  teamJoin: z.array(ACLActionSchema).exactOptional(),
                  teamOwnMembership: z.array(ACLActionSchema).exactOptional(),
                  teamOwnMembershipDisconnectSAML: z.array(ACLActionSchema).exactOptional(),
                  token: z.array(ACLActionSchema).exactOptional(),
                  usage: z.array(ACLActionSchema).exactOptional(),
                  user: z.array(ACLActionSchema).exactOptional(),
                  userConnection: z.array(ACLActionSchema).exactOptional(),
                  webAnalytics: z.array(ACLActionSchema).exactOptional(),
                  webhook: z.array(ACLActionSchema).exactOptional(),
                  'webhook-event': z.array(ACLActionSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              protectionBypass: z
                .record(z.string(), z.string())
                .exactOptional()
                .openapi({ description: 'Construct a type with a set of properties K of type T' }),
              publicSource: z.boolean().nullable().exactOptional(),
              rootDirectory: z.string().nullable().exactOptional(),
              serverlessFunctionRegion: z.string().nullable().exactOptional(),
              skipGitConnectDuringLink: z.boolean().exactOptional(),
              sourceFilesOutsideRootDirectory: z.boolean().exactOptional(),
              ssoProtection: z
                .object({ deploymentType: z.enum(['all', 'preview']) })
                .nullable()
                .exactOptional()
                .openapi({ required: ['deploymentType'] }),
              targets: z
                .record(
                  z.string(),
                  z
                    .string()
                    .openapi({
                      description: "An object containing the deployment's metadata",
                      examples: [{ foo: 'bar' }],
                    }),
                )
                .exactOptional()
                .openapi({
                  description: "An object containing the deployment's metadata",
                  examples: [{ foo: 'bar' }],
                }),
              transferCompletedAt: z.number().exactOptional(),
              transferStartedAt: z.number().exactOptional(),
              transferToAccountId: z.string().exactOptional(),
              transferredFromAccountId: z.string().exactOptional(),
              updatedAt: z.number().exactOptional(),
            })
            .openapi({ required: ['accountId', 'directoryListing', 'id', 'name', 'nodeVersion'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nOwner does not have protection add-on\nAdvanced Deployment Protection is not available for the user plan',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The project was not found' },
    409: {
      description:
        'The provided name for the project is already being used\nThe project is currently being transferred.',
    },
  },
  security: [{ bearerToken: [] }],
})

export const getV9ProjectsIdOrNameDomainsRoute = createRoute({
  method: 'get',
  path: '/v9/projects/{idOrName}/domains',
  tags: ['projects'],
  summary: 'Retrieve project domains by project by id or name',
  description:
    'Retrieve the domains associated with a given project by passing either the project `id` or `name` in the URL.',
  operationId: 'getProjectDomains',
  request: {
    params: z.object({
      idOrName: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(z.xor([z.string(), z.int()])).openapi({
        param: {
          description: 'The unique project identifier or the project name',
          in: 'path',
          name: 'idOrName',
          required: true,
          schema: {
            description: 'The unique project identifier or the project name',
            oneOf: [{ type: 'string' }, { type: 'integer' }],
          },
        },
        description: 'The unique project identifier or the project name',
      }),
    }),
    query: z.object({
      production: z
        .enum(['true', 'false'])
        .default('false')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters only production domains when set to `true`.',
            in: 'query',
            name: 'production',
            required: false,
            schema: {
              default: 'false',
              description: 'Filters only production domains when set to `true`.',
              enum: ['true', 'false'],
            },
          },
          description: 'Filters only production domains when set to `true`.',
        }),
      gitBranch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters domains based on specific branch.',
            in: 'query',
            name: 'gitBranch',
            required: false,
            schema: { description: 'Filters domains based on specific branch.', type: 'string' },
          },
          description: 'Filters domains based on specific branch.',
        }),
      redirects: z
        .enum(['true', 'false'])
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Excludes redirect project domains when \\"false\\". Includes redirect project domains when \\"true\\" (default).',
            in: 'query',
            name: 'redirects',
            required: false,
            schema: {
              default: 'true',
              description:
                'Excludes redirect project domains when \\"false\\". Includes redirect project domains when \\"true\\" (default).',
              enum: ['true', 'false'],
            },
          },
          description:
            'Excludes redirect project domains when \\"false\\". Includes redirect project domains when \\"true\\" (default).',
        }),
      redirect: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters domains based on their redirect target.',
            in: 'query',
            name: 'redirect',
            required: false,
            schema: {
              description: 'Filters domains based on their redirect target.',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'Filters domains based on their redirect target.',
          examples: ['example.com'],
        }),
      verified: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters domains based on their verification status.',
            in: 'query',
            name: 'verified',
            required: false,
            schema: {
              description: 'Filters domains based on their verification status.',
              enum: ['true', 'false'],
            },
          },
          description: 'Filters domains based on their verification status.',
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of domains to list from a request (max 100).',
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              description: 'Maximum number of domains to list from a request (max 100).',
              examples: [20],
              type: 'number',
            },
          },
          description: 'Maximum number of domains to list from a request (max 100).',
          examples: [20],
        }),
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get domains created after this JavaScript timestamp.',
            in: 'query',
            name: 'since',
            required: false,
            schema: {
              description: 'Get domains created after this JavaScript timestamp.',
              examples: [1609499532000],
              type: 'number',
            },
          },
          description: 'Get domains created after this JavaScript timestamp.',
          examples: [1609499532000],
        }),
      until: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Get domains created before this JavaScript timestamp.',
            in: 'query',
            name: 'until',
            required: false,
            schema: {
              description: 'Get domains created before this JavaScript timestamp.',
              examples: [1612264332000],
              type: 'number',
            },
          },
          description: 'Get domains created before this JavaScript timestamp.',
          examples: [1612264332000],
        }),
      order: z
        .enum(['ASC', 'DESC'])
        .default('DESC')
        .exactOptional()
        .openapi({
          param: {
            description: 'Domains sort order by createdAt',
            in: 'query',
            name: 'order',
            required: false,
            schema: {
              default: 'DESC',
              description: 'Domains sort order by createdAt',
              enum: ['ASC', 'DESC'],
            },
          },
          description: 'Domains sort order by createdAt',
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response retrieving a list of domains',
      content: {
        'application/json': {
          schema: z
            .object({
              domains: z.array(
                z
                  .object({
                    apexName: z.string(),
                    createdAt: z.number().exactOptional(),
                    gitBranch: z.string().nullable().exactOptional(),
                    name: z.string(),
                    projectId: z.string(),
                    redirect: z.string().nullable().exactOptional(),
                    redirectStatusCode: z
                      .union([z.literal(307), z.literal(301), z.literal(302), z.literal(308)])
                      .nullable()
                      .exactOptional(),
                    updatedAt: z.number().exactOptional(),
                    verification: z
                      .array(
                        z
                          .object({
                            domain: z.string(),
                            reason: z.string(),
                            type: z.string(),
                            value: z.string(),
                          })
                          .openapi({
                            description:
                              'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                            required: ['type', 'domain', 'value', 'reason'],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                      }),
                    verified: z
                      .boolean()
                      .openapi({
                        description:
                          '`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.',
                      }),
                  })
                  .openapi({ required: ['name', 'apexName', 'projectId', 'verified'] }),
              ),
              pagination: PaginationSchema,
            })
            .openapi({ required: ['domains', 'pagination'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Project not found' },
  },
  security: [{ bearerToken: [] }],
})

export const postV9ProjectsIdOrNameDomainsRoute = createRoute({
  method: 'post',
  path: '/v9/projects/{idOrName}/domains',
  tags: ['projects'],
  summary: 'Add a domain to a project',
  description:
    'Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.',
  operationId: 'addProjectDomain',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              gitBranch: z
                .string()
                .max(250)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Git branch to link the project domain',
                  examples: [null],
                }),
              name: z
                .string()
                .openapi({ description: 'The project domain name', examples: ['www.example.com'] }),
              redirect: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Target destination domain for redirect',
                  examples: ['foobar.com'],
                }),
              redirectStatusCode: z
                .union([
                  z.literal(null),
                  z.literal(301),
                  z.literal(302),
                  z.literal(307),
                  z.literal(308),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Status code for domain redirect', examples: [307] }),
            })
            .openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The domain was successfully added to the project',
      content: {
        'application/json': {
          schema: z
            .object({
              apexName: z.string(),
              createdAt: z.number().exactOptional(),
              gitBranch: z.string().nullable().exactOptional(),
              name: z.string(),
              projectId: z.string(),
              redirect: z.string().nullable().exactOptional(),
              redirectStatusCode: z
                .union([z.literal(307), z.literal(301), z.literal(302), z.literal(308)])
                .nullable()
                .exactOptional(),
              updatedAt: z.number().exactOptional(),
              verification: z
                .array(
                  z
                    .object({
                      domain: z.string(),
                      reason: z.string(),
                      type: z.string(),
                      value: z.string(),
                    })
                    .openapi({
                      description:
                        'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                      required: ['type', 'domain', 'value', 'reason'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                }),
              verified: z
                .boolean()
                .openapi({
                  description:
                    '`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.',
                }),
            })
            .openapi({ required: ['name', 'apexName', 'projectId', 'verified'] }),
        },
      },
    },
    400: {
      description:
        "One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nThe domain is not valid\nYou can't set both a git branch and a redirect for the domain\nThe domain can not be added because the latest production deployment for the project was not successful\nThe domain redirect is not valid\nA domain cannot redirect to itself\nYou can not set the production branch as a branch for your domain",
    },
    402: {
      description:
        'The account was soft-blocked for an unhandled reason.\nThe account is missing a payment so payment method must be updated',
    },
    403: {
      description:
        "You do not have permission to access this resource.\nYou don't have access to the domain you are adding",
    },
    404: { description: 'Project not found' },
    409: {
      description:
        'The domain is already assigned to another Vercel project\nCannot create project domain since owner already has `domain` on their account\nCannot create project domain if the current verified domain\nThe project is currently being transferred',
    },
  },
  security: [{ bearerToken: [] }],
})

export const getV9ProjectsIdOrNameDomainsDomainRoute = createRoute({
  method: 'get',
  path: '/v9/projects/{idOrName}/domains/{domain}',
  tags: ['projects'],
  summary: 'Get a project domain',
  description: 'Get project domain by project id/name and domain name.',
  operationId: 'getProjectDomain',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The project domain name',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The project domain name',
              examples: ['www.example.com'],
              type: 'string',
            },
          },
          description: 'The project domain name',
          examples: ['www.example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              apexName: z.string(),
              createdAt: z.number().exactOptional(),
              gitBranch: z.string().nullable().exactOptional(),
              name: z.string(),
              projectId: z.string(),
              redirect: z.string().nullable().exactOptional(),
              redirectStatusCode: z
                .union([z.literal(307), z.literal(301), z.literal(302), z.literal(308)])
                .nullable()
                .exactOptional(),
              updatedAt: z.number().exactOptional(),
              verification: z
                .array(
                  z
                    .object({
                      domain: z.string(),
                      reason: z.string(),
                      type: z.string(),
                      value: z.string(),
                    })
                    .openapi({
                      description:
                        'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                      required: ['type', 'domain', 'value', 'reason'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                }),
              verified: z
                .boolean()
                .openapi({
                  description:
                    '`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.',
                }),
            })
            .openapi({ required: ['name', 'apexName', 'projectId', 'verified'] }),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Project not found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV9ProjectsIdOrNameDomainsDomainRoute = createRoute({
  method: 'delete',
  path: '/v9/projects/{idOrName}/domains/{domain}',
  tags: ['projects'],
  summary: 'Remove a domain from a project',
  description:
    'Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.',
  operationId: 'removeProjectDomain',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The project domain name',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The project domain name',
              examples: ['www.example.com'],
              type: 'string',
            },
          },
          description: 'The project domain name',
          examples: ['www.example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The domain was succesfully removed from the project',
      content: { 'application/json': { schema: z.object({}) } },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'Project not found' },
    409: { description: 'The project is currently being transferred' },
  },
  security: [{ bearerToken: [] }],
})

export const patchV9ProjectsIdOrNameDomainsDomainRoute = createRoute({
  method: 'patch',
  path: '/v9/projects/{idOrName}/domains/{domain}',
  tags: ['projects'],
  summary: 'Update a project domain',
  description:
    "Update a project domain's configuration, including the name, git branch and redirect of the domain.",
  operationId: 'updateProjectDomain',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The project domain name',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The project domain name',
              examples: ['www.example.com'],
              type: 'string',
            },
          },
          description: 'The project domain name',
          examples: ['www.example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              gitBranch: z
                .string()
                .max(250)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Git branch to link the project domain',
                  examples: [null],
                }),
              redirect: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Target destination domain for redirect',
                  examples: ['foobar.com'],
                }),
              redirectStatusCode: z
                .union([
                  z.literal(null),
                  z.literal(301),
                  z.literal(302),
                  z.literal(307),
                  z.literal(308),
                ])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Status code for domain redirect', examples: [307] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The domain was updated successfuly',
      content: {
        'application/json': {
          schema: z
            .object({
              apexName: z.string(),
              createdAt: z.number().exactOptional(),
              gitBranch: z.string().nullable().exactOptional(),
              name: z.string(),
              projectId: z.string(),
              redirect: z.string().nullable().exactOptional(),
              redirectStatusCode: z
                .union([z.literal(307), z.literal(301), z.literal(302), z.literal(308)])
                .nullable()
                .exactOptional(),
              updatedAt: z.number().exactOptional(),
              verification: z
                .array(
                  z
                    .object({
                      domain: z.string(),
                      reason: z.string(),
                      type: z.string(),
                      value: z.string(),
                    })
                    .openapi({
                      description:
                        'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                      required: ['type', 'domain', 'value', 'reason'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                }),
              verified: z
                .boolean()
                .openapi({
                  description:
                    '`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.',
                }),
            })
            .openapi({ required: ['name', 'apexName', 'projectId', 'verified'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.\nThe domain redirect is not valid',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The project was not found' },
    409: { description: 'The project is currently being transferred' },
  },
  security: [{ bearerToken: [] }],
})

export const postV9ProjectsIdOrNameDomainsDomainVerifyRoute = createRoute({
  method: 'post',
  path: '/v9/projects/{idOrName}/domains/{domain}/verify',
  tags: ['projects'],
  summary: 'Verify project domain',
  description:
    "Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.",
  operationId: 'verifyProjectDomain',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB'],
        }),
      domain: z
        .string()
        .openapi({
          param: {
            description: 'The domain name you want to verify',
            in: 'path',
            name: 'domain',
            required: true,
            schema: {
              description: 'The domain name you want to verify',
              examples: ['example.com'],
              type: 'string',
            },
          },
          description: 'The domain name you want to verify',
          examples: ['example.com'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The project domain was verified successfully\nDomain is already verified',
      content: {
        'application/json': {
          schema: z
            .object({
              apexName: z.string(),
              createdAt: z.number().exactOptional(),
              gitBranch: z.string().nullable().exactOptional(),
              name: z.string(),
              projectId: z.string(),
              redirect: z.string().nullable().exactOptional(),
              redirectStatusCode: z
                .union([z.literal(307), z.literal(301), z.literal(302), z.literal(308)])
                .nullable()
                .exactOptional(),
              updatedAt: z.number().exactOptional(),
              verification: z
                .array(
                  z
                    .object({
                      domain: z.string(),
                      reason: z.string(),
                      type: z.string(),
                      value: z.string(),
                    })
                    .openapi({
                      description:
                        'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                      required: ['type', 'domain', 'value', 'reason'],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.',
                }),
              verified: z
                .boolean()
                .openapi({
                  description:
                    '`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.',
                }),
            })
            .openapi({ required: ['name', 'apexName', 'projectId', 'verified'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request query is invalid.\nThere is an existing TXT record on the domain verifying it for another project\nThe domain does not have a TXT record that attempts to verify the project domain\nThe TXT record on the domain does not match the expected challenge for the project domain\nProject domain is not assigned to project\nProject domain does not exist',
    },
    403: { description: 'You do not have permission to access this resource.' },
  },
  security: [{ bearerToken: [] }],
})

export const getV9ProjectsIdOrNameEnvRoute = createRoute({
  method: 'get',
  path: '/v9/projects/{idOrName}/env',
  tags: ['projects'],
  summary: 'Retrieve the environment variables of a project by id or name',
  description:
    'Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.',
  operationId: 'filterProjectEnvs',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
        }),
    }),
    query: z.object({
      gitBranch: z
        .string()
        .max(250)
        .exactOptional()
        .openapi({
          param: {
            description:
              'If defined, the git branch of the environment variable to filter the results',
            in: 'query',
            name: 'gitBranch',
            required: false,
            schema: {
              description:
                'If defined, the git branch of the environment variable to filter the results',
              examples: ['feature-1'],
              maxLength: 250,
              type: 'string',
            },
          },
          description:
            'If defined, the git branch of the environment variable to filter the results',
          examples: ['feature-1'],
        }),
      decrypt: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, the environment variable value will be decrypted',
            in: 'query',
            name: 'decrypt',
            required: false,
            schema: {
              deprecated: true,
              description: 'If true, the environment variable value will be decrypted',
              enum: ['true', 'false'],
              examples: ['true'],
              type: 'string',
            },
          },
          deprecated: true,
          description: 'If true, the environment variable value will be decrypted',
          examples: ['true'],
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The source that is calling the endpoint.',
            in: 'query',
            name: 'source',
            required: false,
            schema: {
              description: 'The source that is calling the endpoint.',
              examples: ['vercel-cli:pull'],
              type: 'string',
            },
          },
          description: 'The source that is calling the endpoint.',
          examples: ['vercel-cli:pull'],
        }),
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of environment variables for the given project',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                configurationId: z.string().nullable().exactOptional(),
                createdAt: z.number().exactOptional(),
                createdBy: z.string().nullable().exactOptional(),
                decrypted: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Whether `value` is decrypted.' }),
                edgeConfigId: z.string().nullable().exactOptional(),
                edgeConfigTokenId: z.string().nullable().exactOptional(),
                gitBranch: z.string().exactOptional(),
                id: z.string().exactOptional(),
                key: z.string().exactOptional(),
                system: z.boolean().exactOptional(),
                target: z
                  .xor([
                    z.array(
                      z.enum(['production', 'preview', 'development', 'preview', 'development']),
                    ),
                    z.enum(['production', 'preview', 'development', 'preview', 'development']),
                  ])
                  .exactOptional(),
                type: z
                  .enum(['secret', 'system', 'encrypted', 'plain', 'sensitive'])
                  .exactOptional(),
                updatedAt: z.number().exactOptional(),
                updatedBy: z.string().nullable().exactOptional(),
                value: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                envs: z.array(
                  z
                    .object({
                      configurationId: z.string().nullable().exactOptional(),
                      createdAt: z.number().exactOptional(),
                      createdBy: z.string().nullable().exactOptional(),
                      decrypted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether `value` is decrypted.' }),
                      edgeConfigId: z.string().nullable().exactOptional(),
                      edgeConfigTokenId: z.string().nullable().exactOptional(),
                      gitBranch: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      key: z.string().exactOptional(),
                      system: z.boolean().exactOptional(),
                      target: z
                        .xor([
                          z.array(
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ),
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ])
                        .exactOptional(),
                      type: z
                        .enum(['secret', 'system', 'encrypted', 'plain', 'sensitive'])
                        .exactOptional(),
                      updatedAt: z.number().exactOptional(),
                      updatedBy: z.string().nullable().exactOptional(),
                      value: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                ),
                pagination: PaginationSchema,
              })
              .openapi({ required: ['envs', 'pagination'] }),
            z
              .object({
                envs: z.array(
                  z
                    .object({
                      configurationId: z.string().nullable().exactOptional(),
                      createdAt: z.number().exactOptional(),
                      createdBy: z.string().nullable().exactOptional(),
                      decrypted: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Whether `value` is decrypted.' }),
                      edgeConfigId: z.string().nullable().exactOptional(),
                      edgeConfigTokenId: z.string().nullable().exactOptional(),
                      gitBranch: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      key: z.string().exactOptional(),
                      system: z.boolean().exactOptional(),
                      target: z
                        .xor([
                          z.array(
                            z.enum([
                              'production',
                              'preview',
                              'development',
                              'preview',
                              'development',
                            ]),
                          ),
                          z.enum([
                            'production',
                            'preview',
                            'development',
                            'preview',
                            'development',
                          ]),
                        ])
                        .exactOptional(),
                      type: z
                        .enum(['secret', 'system', 'encrypted', 'plain', 'sensitive'])
                        .exactOptional(),
                      updatedAt: z.number().exactOptional(),
                      updatedBy: z.string().nullable().exactOptional(),
                      value: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                ),
              })
              .openapi({
                description: 'The list of environment variables for the given project',
                required: ['envs'],
              }),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: { description: 'The project could not be found' },
  },
  security: [{ bearerToken: [] }],
})

export const deleteV9ProjectsIdOrNameEnvIdRoute = createRoute({
  method: 'delete',
  path: '/v9/projects/{idOrName}/env/{id}',
  tags: ['projects'],
  summary: 'Remove an environment variable',
  description:
    'Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.',
  operationId: 'removeProjectEnv',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique environment variable identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique environment variable identifier',
              examples: ['XMbOEya1gUUO1ir4'],
              type: 'string',
            },
          },
          description: 'The unique environment variable identifier',
          examples: ['XMbOEya1gUUO1ir4'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The environment variable was successfully removed',
      content: {
        'application/json': {
          schema: z.xor([
            z.array(
              z
                .object({
                  configurationId: z.string().nullable().exactOptional(),
                  createdAt: z.number().exactOptional(),
                  createdBy: z.string().nullable().exactOptional(),
                  decrypted: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Whether `value` is decrypted.' }),
                  edgeConfigId: z.string().nullable().exactOptional(),
                  edgeConfigTokenId: z.string().nullable().exactOptional(),
                  gitBranch: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  key: z.string(),
                  target: z
                    .xor([
                      z.array(
                        z.enum([
                          'production',
                          'preview',
                          'development',
                          'preview',
                          'development',
                          'preview',
                          'development',
                        ]),
                      ),
                      z.enum([
                        'production',
                        'preview',
                        'development',
                        'preview',
                        'development',
                        'preview',
                        'development',
                      ]),
                    ])
                    .exactOptional(),
                  type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                  updatedAt: z.number().exactOptional(),
                  updatedBy: z.string().nullable().exactOptional(),
                  value: z.string(),
                })
                .openapi({ required: ['type', 'key', 'value'] }),
            ),
            z
              .object({
                configurationId: z.string().nullable().exactOptional(),
                createdAt: z.number().exactOptional(),
                createdBy: z.string().nullable().exactOptional(),
                decrypted: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Whether `value` is decrypted.' }),
                edgeConfigId: z.string().nullable().exactOptional(),
                edgeConfigTokenId: z.string().nullable().exactOptional(),
                gitBranch: z.string().exactOptional(),
                id: z.string().exactOptional(),
                key: z.string(),
                system: z.boolean().exactOptional(),
                target: z
                  .xor([
                    z.array(
                      z.enum([
                        'production',
                        'preview',
                        'development',
                        'preview',
                        'development',
                        'preview',
                        'development',
                      ]),
                    ),
                    z.enum([
                      'production',
                      'preview',
                      'development',
                      'preview',
                      'development',
                      'preview',
                      'development',
                    ]),
                  ])
                  .exactOptional(),
                type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                updatedAt: z.number().exactOptional(),
                updatedBy: z.string().nullable().exactOptional(),
                value: z.string(),
              })
              .openapi({ required: ['type', 'key', 'value'] }),
            z
              .object({
                configurationId: z.string().nullable().exactOptional(),
                createdAt: z.number().exactOptional(),
                createdBy: z.string().nullable().exactOptional(),
                decrypted: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Whether `value` is decrypted.' }),
                edgeConfigId: z.string().nullable().exactOptional(),
                edgeConfigTokenId: z.string().nullable().exactOptional(),
                gitBranch: z.string().exactOptional(),
                id: z.string().exactOptional(),
                key: z.string(),
                target: z
                  .xor([
                    z.array(
                      z.enum([
                        'production',
                        'preview',
                        'development',
                        'preview',
                        'development',
                        'preview',
                        'development',
                      ]),
                    ),
                    z.enum([
                      'production',
                      'preview',
                      'development',
                      'preview',
                      'development',
                      'preview',
                      'development',
                    ]),
                  ])
                  .exactOptional(),
                type: z.enum(['secret', 'system', 'encrypted', 'plain', 'sensitive']),
                updatedAt: z.number().exactOptional(),
                updatedBy: z.string().nullable().exactOptional(),
                value: z.string(),
              })
              .openapi({ required: ['type', 'key', 'value'] }),
          ]),
        },
      },
    },
    400: { description: 'One of the provided values in the request query is invalid.' },
    403: { description: 'You do not have permission to access this resource.' },
    404: {
      description: 'The environment variable could not be found\nThe project could not be found',
    },
    409: {
      description:
        'The project is being transfered and removing an environment variable is not possible',
    },
  },
  security: [{ bearerToken: [] }],
})

export const patchV9ProjectsIdOrNameEnvIdRoute = createRoute({
  method: 'patch',
  path: '/v9/projects/{idOrName}/env/{id}',
  tags: ['projects'],
  summary: 'Edit an environment variable',
  description:
    'Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.',
  operationId: 'editProjectEnv',
  request: {
    params: z.object({
      idOrName: z
        .string()
        .openapi({
          param: {
            description: 'The unique project identifier or the project name',
            in: 'path',
            name: 'idOrName',
            required: true,
            schema: {
              description: 'The unique project identifier or the project name',
              examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
              type: 'string',
            },
          },
          description: 'The unique project identifier or the project name',
          examples: ['prj_XLKmu1DyR1eY7zq8UgeRKbA7yVLA'],
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The unique environment variable identifier',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique environment variable identifier',
              examples: ['XMbOEya1gUUO1ir4'],
              type: 'string',
            },
          },
          description: 'The unique environment variable identifier',
          examples: ['XMbOEya1gUUO1ir4'],
        }),
    }),
    query: z.object({
      teamId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Team identifier or slug to perform the request on behalf of.',
            in: 'query',
            name: 'teamId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              gitBranch: z
                .string()
                .max(250)
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'The git branch of the environment variable',
                  examples: ['feature-1'],
                }),
              key: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the environment variable',
                  examples: ['GITHUB_APP_ID'],
                }),
              target: z
                .array(
                  z.enum([
                    'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Productio',
                    'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Previe',
                    'mport("/vercel/path0/utils/env-variable-util/types").EnvTarget.Developmen',
                  ]),
                )
                .exactOptional()
                .openapi({
                  description: 'The target environment of the environment variable',
                  examples: [['preview']],
                }),
              type: z
                .enum(['system', 'secret', 'encrypted', 'plain', 'sensitive'])
                .exactOptional()
                .openapi({ description: 'The type of environment variable', examples: ['plain'] }),
              value: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The value of the environment variable',
                  examples: ['bkWIjbnxcvo78'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The environment variable was successfully edited',
      content: {
        'application/json': {
          schema: z
            .object({
              configurationId: z.string().nullable().exactOptional(),
              createdAt: z.number().exactOptional(),
              createdBy: z.string().nullable().exactOptional(),
              decrypted: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Whether `value` is decrypted.' }),
              edgeConfigId: z.string().nullable().exactOptional(),
              edgeConfigTokenId: z.string().nullable().exactOptional(),
              gitBranch: z.string().exactOptional(),
              id: z.string().exactOptional(),
              key: z.string(),
              target: z
                .xor([
                  z.array(
                    z.enum(['production', 'preview', 'development', 'preview', 'development']),
                  ),
                  z.enum(['production', 'preview', 'development', 'preview', 'development']),
                ])
                .exactOptional(),
              type: z.enum(['system', 'encrypted', 'plain', 'sensitive', 'secret']),
              updatedAt: z.number().exactOptional(),
              updatedBy: z.string().nullable().exactOptional(),
              value: z.string(),
            })
            .openapi({ required: ['type', 'key', 'value'] }),
        },
      },
    },
    400: {
      description:
        'One of the provided values in the request body is invalid.\nOne of the provided values in the request query is invalid.',
    },
    403: { description: 'You do not have permission to access this resource.' },
    404: {
      description: 'The environment variable could not be found\nThe project could not be found',
    },
    409: {
      description:
        'The project is being transfered and removing an environment variable is not possible',
    },
  },
  security: [{ bearerToken: [] }],
})
