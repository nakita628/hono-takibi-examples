import { createRoute, z } from '@hono/zod-openapi'

const PriceSchema = z
  .object({
    amount: z
      .float64()
      .openapi({ description: 'The net (before tax) amount.', 'x-is-money': true }),
    currency: z.string().openapi({ description: 'The currency of the price.' }),
    id: z.uuid().openapi({ description: 'The unique identifier of the price.' }),
  })
  .openapi({ required: ['id', 'amount', 'currency'] })
  .openapi('Price')

const ProductSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The unique identifier for the product' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the product' }),
    seatUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit of the per seat product. e.g. "user", "organisation", "SMS", etc',
      }),
    type: z
      .enum(['FIXED', 'PER_SEAT', 'METERED', 'SIMPLE'])
      .exactOptional()
      .openapi({
        description:
          'The pricing model of the product:\n* FIXED: Customers are charged a fixed amount for each billing period\n* PER_SEAT: Customers are charged based on the number of units they purchase\n* METERED: Customers are charged per use of this product\n* SIMPLE: Customers are charged on a fixed amount for each billing period with an optional add-on feature\n',
      }),
    usageUnit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit of the usage product. e.g. "user", "minutes", "SMS", etc',
      }),
  })
  .openapi({ required: [] })
  .openapi('Product')

const SubscriptionItemSchema = z
  .object({
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date when the subscription to this product will end',
        'x-is-datetime': true,
      }),
    id: z.uuid().openapi({ description: 'The unique identifier of the subscription item.' }),
    price: PriceSchema.openapi({ description: 'The price of the product subscribed to.' }),
    product: ProductSchema.openapi({ description: 'The product subscribed to.' }),
    quantity: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the item. For a fixed product, it is 1. For a per-seat product, it is a positive integer. For metered products, it is always null.',
      }),
    startDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          "Date the subscription started, or will start. Note: this could be in\nthe future for downgrades or reduced number of seats that haven't taken effect yet.\n",
        'x-is-datetime': true,
      }),
    status: z
      .enum(['ACTIVE', 'CANCELED', 'PENDING_ACTIVATION'])
      .openapi({
        description:
          'Status of the subscription item. Available statuses are ACTIVE, CANCELED, and\nPENDING_ACTIVATION.\n',
      }),
    testMode: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the subscription is a test subscription' }),
  })
  .openapi({ required: ['id', 'startDate', 'product', 'price', 'status'] })
  .openapi('SubscriptionItem')

const PlanSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The unique identifier of the plan' }),
    name: z
      .string()
      .openapi({
        description: 'The name of the plan. It is used in the invoice line item\ndescription.\n',
      }),
    status: z
      .enum(['ACTIVE', 'CANCELED', 'PENDING_ACTIVATION'])
      .openapi({
        description:
          'Status of the plan. Available statuses are ACTIVE, CANCELED, and\nPENDING_ACTIVATION.\n',
      }),
    subscriptionItems: z
      .array(SubscriptionItemSchema)
      .openapi({
        description:
          'List of the subscription items belonging to the plan. It does not\ninclude cancelled subscription items.\n',
      }),
  })
  .openapi({ required: ['id', 'name', 'status', 'subscriptionItems'] })
  .openapi('Plan')

const SubscriptionSchema = z
  .object({
    currentPeriodEnd: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'End of the current period that the subscription has been invoiced for.\n',
        'x-is-datetime': true,
      }),
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'If the subscription has been canceled, this is the date when the subscription ends. If null, the subscription is active and has not been cancelled',
        'x-is-datetime': true,
      }),
    id: z.uuid().openapi({ description: 'The unique identifier of the subscription' }),
    organisationId: z
      .uuid()
      .openapi({ description: 'The Xero generated unique identifier for the organisation' }),
    plans: z.array(PlanSchema).openapi({ description: 'List of plans for the subscription.' }),
    startDate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date when the subscription was first created.',
        'x-is-datetime': true,
      }),
    status: z
      .enum(['ACTIVE', 'CANCELED', 'PAST_DUE'])
      .openapi({
        description:
          'Status of the subscription. Available statuses are ACTIVE, CANCELED, and PAST_DUE.',
      }),
    testMode: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean used to indicate if the subscription is in test mode' }),
  })
  .openapi({
    required: ['id', 'organisationId', 'status', 'startDate', 'currentPeriodEnd', 'plans'],
  })
  .openapi('Subscription')

const ProblemDetailsSchema = z
  .object({
    detail: z.string().exactOptional(),
    extensions: z.object({}).exactOptional(),
    instance: z.string().exactOptional(),
    status: z.int().exactOptional(),
    title: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProblemDetails')

const UsageRecordSchema = z
  .object({
    quantity: z.int32().openapi({ description: 'The quantity recorded' }),
    subscriptionId: z.guid().openapi({ description: 'The unique identifier of the Subscription.' }),
    subscriptionItemId: z
      .guid()
      .openapi({ description: 'The unique identifier of the SubscriptionItem.' }),
    testMode: z.boolean().openapi({ description: 'If the subscription is a test subscription' }),
    recordedAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The time when this usage was recorded in UTC',
        'x-is-datetime': true,
      }),
    usageRecordId: z.guid().openapi({ description: 'The unique identifier of the usageRecord.' }),
    pricePerUnit: z.number().openapi({ description: 'The price per unit' }),
    productId: z.guid().openapi({ description: 'The unique identifier of the linked Product' }),
  })
  .openapi({
    required: [
      'usageRecordId',
      'subscriptionId',
      'subscriptionItemId',
      'productId',
      'pricePerUnit',
      'quantity',
      'testMode',
      'recordedAt',
    ],
  })
  .openapi('UsageRecord')

const UsageRecordsListSchema = z
  .object({
    usageRecords: z
      .array(UsageRecordSchema)
      .openapi({ description: 'A collection of usage records' }),
  })
  .openapi({ description: 'Response to get usage record', required: ['usageRecords'] })
  .openapi('UsageRecordsList')

const CreateUsageRecordSchema = z
  .object({
    quantity: z
      .int32()
      .openapi({
        description:
          'The initial quantity for the usage record. Must be a whole number that is greater than or equal to 0',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'DateTime in UTC of when the the product was consumed/used',
        'x-is-datetime': true,
      }),
  })
  .openapi({
    description: 'Data transfer object for public create usage end point',
    required: ['quantity', 'timestamp'],
  })
  .openapi('CreateUsageRecord')

const UpdateUsageRecordSchema = z
  .object({
    quantity: z
      .int32()
      .openapi({
        description:
          'The new quantity for the usage record. Must be a whole number that is greater than or equal to 0',
      }),
  })
  .openapi({
    description: 'Data transfer object for public update usage end point',
    required: ['quantity'],
  })
  .openapi('UpdateUsageRecord')

const SubscriptionIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'subscriptionId',
      'x-snake': 'subscription_id',
      description: 'Unique identifier for Subscription object',
      example: '00000000-0000-0000-0000-000000000000',
      'x-example-java': 'UUID.fromString("00000000-0000-0000-0000-000000000000")',
      'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
      'x-example-csharp': 'Guid.Parse("00000000-0000-0000-0000-000000000000");',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const SubscriptionItemIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'subscriptionItemId',
      'x-snake': 'subscription_item_id',
      description: 'The unique identifier of the subscriptionItem',
      example: '00000000-0000-0000-0000-000000000000',
      'x-example-java': 'UUID.fromString("00000000-0000-0000-0000-000000000000")',
      'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
      'x-example-csharp': 'Guid.Parse("00000000-0000-0000-0000-000000000000");',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const UsageRecordIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'usageRecordId',
      'x-snake': 'usage_record_id',
      description: 'The unique identifier of the usage record',
      example: '00000000-0000-0000-0000-000000000000',
      'x-example-java': 'UUID.fromString("00000000-0000-0000-0000-000000000000")',
      'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
      'x-example-csharp': 'Guid.Parse("00000000-0000-0000-0000-000000000000");',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    clientCredentials: {
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: { 'marketplace.billing': 'Grant read-only access to fixed assets' },
    },
  },
}

export const getSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}',
  tags: ['AppStore'],
  summary: 'Retrieves a subscription for a given subscriptionId',
  operationId: 'getSubscription',
  request: { params: z.object({ subscriptionId: SubscriptionIdParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of unique Subscription object',
      content: {
        'application/json': {
          schema: SubscriptionSchema,
          example: {
            currentPeriodEnd: '2021-07-20T03:13:48',
            endDate: '2021-07-20T03:13:48',
            id: '01b5a6f4-8936-4bfa-b703-830702312b87',
            testMode: true,
            organisationId: 'fdc5be44-9b3e-4ebb-a0e9-11b9737f9a28',
            plans: [
              {
                id: 'f617dd59-462f-46a1-9519-1765fd38b160',
                name: 'Small',
                status: 'ACTIVE',
                subscriptionItems: [
                  {
                    endDate: '2021-07-20T03:13:48',
                    id: 'c7336bf6-8a47-4f13-9fc0-82420e6922c8',
                    testMode: true,
                    price: {
                      amount: 50,
                      currency: 'AUD',
                      id: '31acefbe-bdb7-4329-84d6-51e9afd95327',
                    },
                    product: {
                      id: '56d66073-ff78-497b-a726-ca9d56fdafa3',
                      name: 'Small',
                      type: 'FIXED',
                    },
                    quantity: 1,
                    startDate: '2021-07-20T03:13:48',
                  },
                  {
                    endDate: '2021-07-20T03:13:48',
                    id: '1a25bc96-141a-4e42-a0fa-55ed51844da4',
                    testMode: true,
                    price: {
                      amount: 0.2,
                      currency: 'AUD',
                      id: '15c65048-1b48-4d9f-81c0-4e1cd3a4f49c',
                    },
                    product: {
                      id: 'e8d8ac02-01b3-47f7-8a22-99cfe9035cf7',
                      name: 'Texts',
                      type: 'METERED',
                      usageUnit: 'txt',
                    },
                  },
                ],
              },
            ],
            startDate: '2021-07-20T03:13:48',
            status: 'ACTIVE',
          },
        },
      },
    },
    404: {
      description: 'When a failure occurs in the endpoint',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
  security: [{ OAuth2: ['marketplace.billing'] }],
})

export const postSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records',
  tags: ['AppStore'],
  summary: 'Send metered usage belonging to this subscription and subscription item',
  operationId: 'postUsageRecords',
  request: {
    headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
    params: z.object({
      subscriptionId: SubscriptionIdParamsSchema,
      subscriptionItemId: SubscriptionItemIdParamsSchema,
    }),
    body: {
      description: 'Contains the quantity for the usage record to create',
      content: {
        'application/json': {
          schema: CreateUsageRecordSchema,
          example: { timestamp: '2022-01-21T13:01:00', quantity: 10 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of the record submitted',
      content: {
        'application/json': {
          schema: UsageRecordSchema,
          example: {
            usageRecordId: '2a90f7d9-4c10-4a23-9c34-b47225167a48',
            subscriptionId: '391be708-878a-4741-acfb-c0bc9a165bdb',
            subscriptionItemId: 'b22b150f-a0db-447d-9117-d922110add64',
            productId: 'd2b133d9-95d8-4446-807a-ae7ebc7353f6',
            pricePerUnit: 0.1,
            quantity: 22,
            testMode: true,
            recordedAt: '2022-09-13T02:11:22',
          },
        },
      },
    },
    404: {
      description: 'When a failure occurs in the endpoint',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
  security: [{ OAuth2: ['marketplace.billing'] }],
})

export const putSubscriptionsSubscriptionIdItemsSubscriptionItemIdUsageRecordsUsageRecordIdRoute =
  createRoute({
    method: 'put',
    path: '/subscriptions/{subscriptionId}/items/{subscriptionItemId}/usage-records/{usageRecordId}',
    tags: ['AppStore'],
    summary:
      'Update and existing metered usage belonging to this subscription and subscription item',
    operationId: 'putUsageRecords',
    request: {
      headers: z.object({ 'Idempotency-Key': IdempotencyKeyParamsSchema }),
      params: z.object({
        subscriptionId: SubscriptionIdParamsSchema,
        subscriptionItemId: SubscriptionItemIdParamsSchema,
        usageRecordId: UsageRecordIdParamsSchema,
      }),
      body: {
        description: 'Contains the quantity for the usage record to update',
        content: {
          'application/json': { schema: UpdateUsageRecordSchema, example: { quantity: 10 } },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success - return response of the modified record',
        content: {
          'application/json': {
            schema: UsageRecordSchema,
            example: {
              usageRecordId: '2a90f7d9-4c10-4a23-9c34-b47225167a48',
              subscriptionId: '391be708-878a-4741-acfb-c0bc9a165bdb',
              subscriptionItemId: 'b22b150f-a0db-447d-9117-d922110add64',
              productId: 'd2b133d9-95d8-4446-807a-ae7ebc7353f6',
              pricePerUnit: 0.1,
              quantity: 22,
              testMode: true,
              recordedAt: '2022-09-13T02:11:22',
            },
          },
        },
      },
      404: {
        description: 'When a failure occurs in the endpoint',
        content: { 'application/json': { schema: ProblemDetailsSchema } },
      },
    },
    security: [{ OAuth2: ['marketplace.billing'] }],
  })

export const getSubscriptionsSubscriptionIdUsageRecordsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/usage-records',
  tags: ['AppStore'],
  summary: 'Gets all usage records related to the subscription',
  operationId: 'getUsageRecords',
  request: { params: z.object({ subscriptionId: SubscriptionIdParamsSchema }) },
  responses: {
    200: {
      description:
        'Success - return a list of all usage record submitted against this subscription for this subscription period',
      content: {
        'application/json': {
          schema: UsageRecordsListSchema,
          example: {
            usageRecords: [
              {
                usageRecordId: '206100d3-e18b-4c59-9372-e98e4367a73f',
                subscriptionId: '7c7684cf-bbfa-4fa8-8f44-eba8d1acdc5d',
                subscriptionItemId: '264f6fa2-65e6-48f4-8a92-57cde5499742',
                productId: 'b040838b-f85e-4e7c-8dba-5a8501e5d312',
                pricePerUnit: 2,
                quantity: 12,
                testMode: false,
                recordedAt: '2022-01-01T00:00:00',
              },
              {
                usageRecordId: '47d61dc9-3c99-4587-8d55-0985f47df4a6',
                subscriptionId: '7c7684cf-bbfa-4fa8-8f44-eba8d1acdc5d',
                subscriptionItemId: '264f6fa2-65e6-48f4-8a92-57cde5499742',
                productId: 'ec8033e8-5e3c-4795-bfb4-bfb85fa4557e',
                pricePerUnit: 5,
                quantity: 2,
                testMode: false,
                recordedAt: '2022-01-01T00:00:00',
              },
            ],
          },
        },
      },
    },
    404: {
      description: 'When a failure occurs in the endpoint',
      content: { 'application/json': { schema: ProblemDetailsSchema } },
    },
  },
  security: [{ OAuth2: ['marketplace.billing'] }],
})
