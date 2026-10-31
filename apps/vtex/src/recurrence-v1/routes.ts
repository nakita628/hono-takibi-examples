import { createRoute, z } from '@hono/zod-openapi'

const FrequencySchema = z
  .object({ interval: z.int32(), periodicity: z.string() })
  .openapi({
    example: { interval: 1, periodicity: 'monthly' },
    required: ['periodicity', 'interval'],
    title: 'Frequency',
  })
  .openapi('Frequency')

const AddrecurrenceitemRequestSchema = z
  .object({
    frequency: FrequencySchema,
    quantity: z.int32(),
    seller: z.string(),
    shippingAddressId: z.string(),
    sku: z.string(),
  })
  .openapi({
    example: {
      frequency: { interval: 1, periodicity: 'monthly' },
      quantity: 2,
      seller: '1',
      shippingAddressId: '-1461618656161',
      sku: '20',
    },
    required: ['sku', 'seller', 'quantity', 'frequency', 'shippingAddressId'],
    title: 'AddrecurrenceitemRequest',
  })
  .openapi('AddrecurrenceitemRequest')

const ItemSchema = z
  .object({
    frequency: FrequencySchema,
    quantity: z.int32(),
    seller: z.string(),
    shippingAddressId: z.string(),
    sku: z.string(),
  })
  .openapi({
    example: {
      frequency: { interval: 1, periodicity: 'weekly' },
      quantity: 2,
      seller: '1',
      shippingAddressId: '-1461618656161',
      sku: '18',
    },
    required: ['sku', 'seller', 'quantity', 'frequency', 'shippingAddressId'],
    title: 'Item',
  })
  .openapi('Item')

const ReindexrecurrenceRequestSchema = z
  .object({ frequency: FrequencySchema })
  .openapi({
    example: { frequency: { interval: 1, periodicity: 'yearly' } },
    required: ['frequency'],
    title: 'ReindexrecurrenceRequest',
  })
  .openapi('ReindexrecurrenceRequest')

const UpdatepartialrecurrenceRequestSchema = z
  .object({ deliveryDay: z.int32(), deliveryWeekday: z.string(), status: z.string() })
  .openapi({
    example: { deliveryDay: 18, deliveryWeekday: 'Monday', status: 'inactive' },
    required: ['deliveryDay', 'deliveryWeekday', 'status'],
    title: 'UpdatepartialrecurrenceRequest',
  })
  .openapi('UpdatepartialrecurrenceRequest')

const UpdaterecurrenceRequestSchema = z
  .object({
    deliveryDay: z.int32(),
    deliveryWeekday: z.string(),
    email: z.string(),
    items: z.array(ItemSchema).openapi({ description: '' }),
    paymentAccountId: z.string(),
  })
  .openapi({
    example: {
      deliveryDay: 26,
      deliveryWeekday: 'Friday',
      email: 'user@vtex.com.br',
      paymentAccountId: '87FE21B06C0D42908D31A5B11E6FC043',
    },
    required: ['email', 'deliveryDay', 'deliveryWeekday', 'items', 'paymentAccountId'],
    title: 'UpdaterecurrenceRequest',
  })
  .openapi('UpdaterecurrenceRequest')

const UpdaterecurrencesettingsRequestSchema = z
  .object({ defaultSLA: z.string(), salesChannel: z.string() })
  .openapi({
    example: { defaultSLA: 'Normal', salesChannel: '1' },
    required: ['salesChannel', 'defaultSLA'],
    title: 'UpdaterecurrencesettingsRequest',
  })
  .openapi('UpdaterecurrencesettingsRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['Miscellaneous'],
  summary: 'Get Subscriptions',
  description:
    "Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.",
  operationId: 'GetRecurrencebyemail',
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "If you wish to list tasks by email, insert the desired user's email.",
            explode: true,
            in: 'query',
            name: 'email',
            required: false,
            schema: { example: '{{email}}', type: 'string' },
            style: 'form',
          },
          example: '{{email}}',
        }),
      cycleStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If you wish to list tasks by Subscriptions with failures on the last execution cycle, insert the desired cycleStatus.',
            explode: true,
            in: 'query',
            name: 'cycleStatus',
            required: false,
            schema: { example: '{{cycleStatus}}', type: 'string' },
            style: 'form',
          },
          example: '{{cycleStatus}}',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putSubscriptionsRoute = createRoute({
  method: 'put',
  path: '/subscriptions',
  tags: ['Miscellaneous'],
  summary: 'Update Subscription',
  description: 'Updates details of a given Subscription (formerly recurrence).',
  operationId: 'Updaterecurrence',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdaterecurrenceRequestSchema,
          example: {
            deliveryDay: 26,
            deliveryWeekday: 'Friday',
            email: 'user@vtex.com.br',
            items: [
              {
                frequency: { interval: 1, periodicity: 'weekly' },
                quantity: 2,
                seller: '1',
                shippingAddressId: '-1461618656161',
                sku: '18',
              },
            ],
            paymentAccountId: '87FE21B06C0D42908D31A5B11E6FC043',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getSubscriptionsMeRoute = createRoute({
  method: 'get',
  path: '/subscriptions/me',
  tags: ['Miscellaneous'],
  summary: 'Get self Subscription',
  description: 'Lists details of your self Subscription (formerly Recurrence).',
  operationId: 'Getselfrecurrence',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getSubscriptionsSettingsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/settings',
  tags: ['Miscellaneous'],
  summary: 'Get Subscription settings',
  description: "Retrieves your store's Subscriptions' (formerly recurrence) settings.",
  operationId: 'Getrecurrencesettings',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const putSubscriptionsSettingsRoute = createRoute({
  method: 'put',
  path: '/subscriptions/settings',
  tags: ['Miscellaneous'],
  summary: 'Update Subscription settings',
  description:
    "Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.",
  operationId: 'Updaterecurrencesettings',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdaterecurrencesettingsRequestSchema,
          example: { defaultSLA: 'Normal', salesChannel: '1' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getSubscriptionsRecurrenceIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{recurrenceId}',
  tags: ['Miscellaneous'],
  summary: 'Get Subscription by recurrenceId',
  description: 'Retrieves a given Subscription (formerly recurrence) by recurrenceId.',
  operationId: 'GetRecurrencebyrecurrenceId',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      recurrenceId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recurrenceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const patchSubscriptionsRecurrenceIdRoute = createRoute({
  method: 'patch',
  path: '/subscriptions/{recurrenceId}',
  tags: ['Miscellaneous'],
  summary: 'Update partial Subscription',
  description: 'Updates partial information of a given subscription (formerly Recurrence).',
  operationId: 'Updatepartialrecurrence',
  request: {
    params: z.object({
      recurrenceId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recurrenceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdatepartialrecurrenceRequestSchema,
          example: { deliveryDay: 18, deliveryWeekday: 'Monday', status: 'inactive' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getSubscriptionsRecurrenceIdAddressesRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{recurrenceId}/addresses',
  tags: ['Miscellaneous'],
  summary: 'Get Subscription addresses',
  description:
    'Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.',
  operationId: 'Getrecurrenceaddresses',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      recurrenceId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recurrenceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postSubscriptionsRecurrenceIdItemsRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{recurrenceId}/items',
  tags: ['Miscellaneous'],
  summary: 'Add Subscription item',
  description: 'Adds an item to a Subscription (formerly Recurrence).',
  operationId: 'Addrecurrenceitem',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      recurrenceId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recurrenceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(AddrecurrenceitemRequestSchema).openapi({ description: '' }),
          example: [
            {
              frequency: { interval: 1, periodicity: 'monthly' },
              quantity: 2,
              seller: '1',
              shippingAddressId: '-1461618656161',
              sku: '20',
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const patchSubscriptionsRecurrenceIdReindexRoute = createRoute({
  method: 'patch',
  path: '/subscriptions/{recurrenceId}/reindex',
  tags: ['Miscellaneous'],
  summary: 'Reindex Subscription',
  description:
    'Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.',
  operationId: 'Reindexrecurrence',
  request: {
    params: z.object({
      recurrenceId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recurrenceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(ReindexrecurrenceRequestSchema).openapi({ description: '' }),
          example: [{ frequency: { interval: 1, periodicity: 'yearly' } }],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getSubscriptionsRecurrenceidAccountsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{recurrenceid}/accounts',
  tags: ['Miscellaneous'],
  summary: 'Get payment accounts',
  description:
    'Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.',
  operationId: 'Getpaymentaccounts',
  request: {
    params: z.object({
      recurrenceid: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'recurrenceid',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})
