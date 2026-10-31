import { createRoute, z } from '@hono/zod-openapi'

const ErrorFieldSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable, English description of the problem with the contents of the field',
      }),
    path: z
      .string()
      .openapi({
        description:
          "<ul>\n<li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>\n<strong style='margin-left: 12px;'>OR</strong>\n<li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>\n</ul>",
      }),
    pathRelated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONPath referring to a field containing an error, which is referenced by `path`',
      }),
  })
  .openapi({ required: ['path', 'code'] })
  .openapi('ErrorField')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const ErrorLimitSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    retryAfterSec: z
      .int()
      .openapi({ description: 'Number of seconds to wait before attempting a similar request' }),
  })
  .openapi({ required: ['retryAfterSec', 'code'] })
  .openapi('ErrorLimit')

const PaginationSchema = z
  .object({
    first: z.string().exactOptional().openapi({ description: 'URI to access the first page' }),
    last: z.string().exactOptional().openapi({ description: 'URI to access the last page' }),
    next: z.string().exactOptional().openapi({ description: 'URI to access the next page' }),
    previous: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI to access the previous page' }),
    total: z.int().exactOptional().openapi({ description: 'Number of records available' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const ProductGroupSchema = z
  .object({
    productGroupKey: z
      .string()
      .openapi({ description: 'Primary key of a grouping of related Subscriptions' }),
    subscriptionCount: z
      .int()
      .openapi({ description: 'The number of Subscriptions that the shopper owns in this group' }),
  })
  .openapi({ required: ['productGroupKey', 'subscriptionCount'] })
  .openapi('ProductGroup')

const SubscriptionAddonSchema = z
  .object({
    commitment: z
      .enum(['PAID', 'FREE', 'TRIAL'])
      .openapi({ description: 'The financial commitment the customer has in the product' }),
    pfid: z.int().openapi({ description: 'Unique identifier of the add-in product' }),
    quantity: z.int(),
  })
  .openapi({ required: ['pfid', 'commitment', 'quantity'] })
  .openapi('SubscriptionAddon')

const SubscriptionBillingSchema = z
  .object({
    commitment: z
      .enum(['PAID', 'FREE', 'TRIAL'])
      .openapi({ description: 'The financial commitment the customer has in the product' }),
    pastDueTypes: z
      .array(z.enum(['ADDON', 'BURST', 'SUBSCRIPTION']))
      .exactOptional()
      .openapi({ description: 'The types of charges that are past due when `status` is PAST_DUE' }),
    renewAt: z
      .string()
      .openapi({
        description:
          'The point in time after which the Subscription will bill for automatic renewal',
      }),
    status: z
      .enum(['CURRENT', 'PAST_DUE'])
      .openapi({ description: 'Whether payments are past due' }),
  })
  .openapi({ required: ['renewAt', 'status', 'commitment'] })
  .openapi('SubscriptionBilling')

const SubscriptionProductSchema = z
  .object({
    label: z
      .string()
      .openapi({ description: 'A human readable description of the Product that is subscribed' }),
    namespace: z.string().openapi({ description: 'Grouping of related Subscriptions' }),
    pfid: z.int().openapi({ description: 'Unique identifier of the Product that is subscribed' }),
    productGroupKey: z
      .string()
      .openapi({ description: 'Primary key of a grouping of related Subscriptions' }),
    renewalPeriod: z
      .int()
      .openapi({
        description: 'The number of `renewalPeriodUnits` that will be added by the `renewalPfid`',
      }),
    renewalPeriodUnit: z
      .enum(['MONTH', 'QUARTER', 'SEMI_ANNUAL', 'YEAR'])
      .openapi({ description: 'The unit of time that `renewalPeriod` is measured in' }),
    renewalPfid: z.int().openapi({ description: 'Unique identifier of the renewal Product' }),
    supportBillOn: z
      .boolean()
      .openapi({
        description: 'Whether the product supports the `billOn` option on the renewal endpoint',
      }),
  })
  .openapi({
    required: [
      'pfid',
      'label',
      'renewalPfid',
      'renewalPeriod',
      'renewalPeriodUnit',
      'productGroupKey',
      'supportBillOn',
      'namespace',
    ],
  })
  .openapi('SubscriptionProduct')

const SubscriptionRelationsSchema = z
  .object({
    children: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of related Subscriptions that will be canceled automatically if this Subscription is canceled',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: "Unique identifier of this Subscription's parent" }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionRelations')

const SubscriptionSchema = z
  .object({
    addons: z
      .array(SubscriptionAddonSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of additional products that have been purchased to augment this Subscription',
      }),
    billing: SubscriptionBillingSchema,
    cancelable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the Subscription is allowed to be canceled' }),
    createdAt: z.string().openapi({ description: 'When the Subscription was created' }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the Subscription will expire' }),
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human readable description of this Subscription' }),
    launchUrl: z
      .url()
      .exactOptional()
      .openapi({ description: "The url to use or manage this Subscription's active product" }),
    paymentProfileId: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the payment profile that will be used to automatically renew this Subscription',
      }),
    priceLocked: z
      .boolean()
      .openapi({
        description:
          'Whether the renewal price will be based from the list price or a locked-in price for this shopper',
      }),
    product: SubscriptionProductSchema,
    relations: SubscriptionRelationsSchema.exactOptional(),
    renewAuto: z
      .boolean()
      .openapi({
        description:
          'Whether or not the Subscription is set to be automatically renewed via the billing agent',
      }),
    renewable: z
      .boolean()
      .openapi({ description: 'Whether or not the Subscription is allowed to be renewed' }),
    status: z
      .enum(['ACTIVE', 'PENDING', 'CANCELED'])
      .openapi({
        description: 'Whether the Subscription is active or the specific non-active state',
      }),
    subscriptionId: z.string().openapi({ description: 'Unique identifier of the Subscription' }),
    upgradeable: z
      .boolean()
      .openapi({ description: 'Whether or not the Subscription is allowed to be upgraded' }),
  })
  .openapi({
    required: [
      'subscriptionId',
      'status',
      'product',
      'createdAt',
      'billing',
      'renewable',
      'upgradeable',
      'priceLocked',
      'renewAuto',
    ],
  })
  .openapi('Subscription')

const SubscriptionListSchema = z
  .object({
    pagination: PaginationSchema,
    subscriptions: z
      .array(SubscriptionSchema)
      .openapi({ description: 'A collection of subscriptions' }),
  })
  .openapi({ required: ['subscriptions', 'pagination'] })
  .openapi('SubscriptionList')

const SubscriptionUpdateSchema = z
  .object({
    paymentProfileId: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the payment profile you want to be used for automatic renewal',
      }),
    renewAuto: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not you want the Subscription renew automatically' }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionUpdate')

export const getV1SubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions',
  tags: ['v1'],
  summary: 'Retrieve a list of Subscriptions for the specified Shopper',
  operationId: 'list',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID to return subscriptions for when not using JWT',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'X-Market-Id': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description: 'The market that the response should be formatted for',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'en-US', type: 'string' },
          },
        }),
    }),
    query: z.object({
      productGroupKeys: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return Subscriptions with the specified product groups',
            explode: false,
            in: 'query',
            name: 'productGroupKeys',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      includes: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.union([z.literal('addons'), z.literal('relations')]),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional details to be included in the response',
            explode: false,
            in: 'query',
            name: 'includes',
            required: false,
            schema: { enum: ['addons', 'relations'], items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of Subscriptions to skip before starting to return paged results (must be a multiple of the limit)',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2000),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of Subscriptions to retrieve in this page, starting after offset',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 25, maximum: 2000, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .enum(['expiresAt', '-expiresAt'])
        .default('-expiresAt')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Property name that will be used to sort results. "-" indicates descending',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { default: '-expiresAt', enum: ['expiresAt', '-expiresAt'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: SubscriptionListSchema },
        'application/json': { schema: SubscriptionListSchema },
        'application/xml': { schema: SubscriptionListSchema },
        'text/javascript': { schema: SubscriptionListSchema },
        'text/xml': { schema: SubscriptionListSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: 'Invalid query parameter (custom message returned for each parameter)',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1SubscriptionsProductGroupsRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions/productGroups',
  tags: ['v1'],
  summary: 'Retrieve a list of ProductGroups for the specified Shopper',
  operationId: 'productGroups',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID to return data for when not using JWT',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'X-Market-Id': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description: 'The market that the response should be formatted for',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'en-US', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: z.array(ProductGroupSchema) },
        'application/json': { schema: z.array(ProductGroupSchema) },
        'application/xml': { schema: z.array(ProductGroupSchema) },
        'text/javascript': { schema: z.array(ProductGroupSchema) },
        'text/xml': { schema: z.array(ProductGroupSchema) },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1SubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions/{subscriptionId}',
  tags: ['v1'],
  summary: 'Retrieve details for the specified Subscription',
  operationId: 'get',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID to be operated on, if different from JWT',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'X-Market-Id': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description: 'Unique identifier of the Market in which the request is happening',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'en-US', type: 'string' },
          },
        }),
    }),
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the Subscription to retrieve',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: SubscriptionSchema },
        'application/json': { schema: SubscriptionSchema },
        'application/xml': { schema: SubscriptionSchema },
        'text/javascript': { schema: SubscriptionSchema },
        'text/xml': { schema: SubscriptionSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description: 'Invalid Subscription Id',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const deleteV1SubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/v1/subscriptions/{subscriptionId}',
  tags: ['v1'],
  summary: 'Cancel the specified Subscription',
  operationId: 'cancel',
  request: {
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Shopper ID to cancel subscriptions for when not using JWT',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the Subscription to cancel',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    422: {
      description:
        'Failed to determine if the domain is protected (invalid domain ID)<br>Invalid Subscription Id<br>The Office 365 Subscription cannot be cancelled (shopper is migrating)<br>The Subscription cannot be cancelled<br>The Subscription cannot be cancelled (PFID is disabled for cancellation)<br>The Subscription cannot be cancelled (domain is protected)<br>The domain alert Subscription cannot be cancelled',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description:
        'Failed to determine if the Office 365 account is migrating<br>Failed to determine if the domain alert is cancellable<br>Failed to determine if the domain is protected<br>Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const patchV1SubscriptionsSubscriptionIdRoute = createRoute({
  method: 'patch',
  path: '/v1/subscriptions/{subscriptionId}',
  tags: ['v1'],
  summary: 'Update details for the specified Subscription',
  description:
    'Only Subscription properties that can be changed without immediate financial impact can be modified via PATCH, whereas some properties can be changed by purchasing a renewal<br/><strong>This endpoint only supports JWT authentication</strong>',
  operationId: 'update',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier of the Subscription to update',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Details of the Subscription to change',
      content: {
        'application/json': { schema: SubscriptionUpdateSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              paymentProfileId: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Unique identifier of the payment profile you want to be used for automatic renewal',
                }),
              renewAuto: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether or not you want the Subscription renew automatically',
                }),
            })
            .openapi({ required: [] }),
        },
        'application/xml': { schema: SubscriptionUpdateSchema },
        'text/xml': { schema: SubscriptionUpdateSchema },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Request was successful' },
    400: {
      description: 'Request was malformed',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description:
        'Authenticated user is not allowed access <br> This method only supports JWT authentication',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Subscription not found <br> Payment profile not found',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})
