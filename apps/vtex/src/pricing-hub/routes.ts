import { createRoute, z } from '@hono/zod-openapi'

const ConfigExternalPriceSourceRequestSchema = z
  .object({
    active: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`.',
      }),
    appName: z
      .string()
      .openapi({
        description: 'Name of the app that communicates with the external pricing source',
      }),
  })
  .openapi({
    example: { active: true, appName: 'apiexamples_app_name' },
    required: ['appName'],
    title: 'ConfigExternalPriceSourceRequest',
  })
  .openapi('ConfigExternalPriceSourceRequest')

const ItemsSchema = z
  .array(
    z
      .object({
        brandId: z
          .string()
          .default('2000000')
          .openapi({ description: 'This is the brand ID for the item', title: 'brandId' }),
        categoriesIds: z
          .array(
            z
              .string()
              .default('1')
              .openapi({ description: 'ID of a category that will be used to compute the price' }),
          )
          .default(['1'])
          .openapi({
            description: 'ID of the categories that will be used to compute the price',
            title: 'categoriesIds',
          }),
        index: z
          .int()
          .default(0)
          .openapi({
            description:
              "This is the index of the item at Checkout's cart. It has to be unique in the items array",
            title: 'index',
          }),
        priceTableIds: z
          .array(
            z
              .string()
              .default('1')
              .openapi({
                description: 'ID of a price table that will be used to compute the price',
              }),
          )
          .default(['1'])
          .openapi({
            description:
              'IDs of the price tables that will be used to compute the price. More than one price table might be passed to the array. The final price rule might be more complex than the lowest or the highest price',
            title: 'priceTableIds',
          }),
        quantity: z
          .int()
          .default(1)
          .openapi({
            description:
              'This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price',
            title: 'quantity',
          }),
        sellerId: z
          .string()
          .default('1')
          .openapi({ description: 'This is the seller ID for the item', title: 'sellerId' }),
        skuId: z
          .string()
          .default('13')
          .openapi({
            description: 'This is the sku id of the item that will be priced',
            title: 'skuId',
          }),
      })
      .openapi({
        description: 'Each item to be priced by Pricing Hub',
        required: [
          'index',
          'skuId',
          'quantity',
          'brandId',
          'sellerId',
          'priceTableIds',
          'categoriesIds',
        ],
        title: '',
      }),
  )
  .openapi({
    description: 'The list of items that are to be priced by Pricing Hub',
    required: ['itemsObject'],
    title: 'items',
  })
  .openapi('Items')

const GetPricesRequestObjectSchema = z
  .object({
    UtmCampaign: z
      .string()
      .default('summer')
      .exactOptional()
      .openapi({
        description:
          'Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null`',
      }),
    UtmInternalCampaign: z
      .string()
      .default('sale')
      .exactOptional()
      .openapi({
        description:
          'Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null`',
      }),
    UtmMedium: z
      .string()
      .default('social')
      .exactOptional()
      .openapi({
        description:
          'Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null`',
      }),
    UtmSource: z
      .string()
      .default('facebook')
      .exactOptional()
      .openapi({
        description:
          'Traffic source, indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null`',
      }),
    email: z
      .string()
      .default('customer@email.com')
      .openapi({
        description: "The customer's email address. If there is no value, use an empty string",
      }),
    items: ItemsSchema,
    salesChannel: z
      .string()
      .default('1')
      .openapi({ description: "Represents Checkout's sales channel" }),
  })
  .openapi({
    example: {
      UtmCampaign: 'summer',
      UtmInternalCampaign: 'sale',
      UtmMedium: 'social',
      UtmSource: 'facebook',
      email: 'customer@email.com',
      salesChannel: '1',
    },
    required: ['items', 'salesChannel', 'email'],
  })
  .openapi('GetPricesRequestObject')

const Item1Schema = z
  .object({
    costPrice: z
      .number()
      .openapi({
        description:
          'The cost price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency.',
      }),
    index: z
      .int()
      .openapi({
        description: "The same index referring to Checkout's cart that was passed to the API",
      }),
    listPrice: z
      .number()
      .openapi({
        description:
          'The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency',
      }),
    price: z
      .number()
      .openapi({
        description:
          'The price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency',
      }),
    priceTable: z
      .string()
      .openapi({ description: 'The price table that was used to price the item' }),
    priceValidUntil: z
      .string()
      .openapi({
        description:
          'The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339',
      }),
    skuId: z.string().openapi({ description: 'The same skuId that was passed to the API' }),
  })
  .openapi({
    required: [
      'index',
      'skuId',
      'price',
      'costPrice',
      'listPrice',
      'priceTable',
      'priceValidUntil',
    ],
    title: 'Item1',
  })
  .openapi('Item1')

const Response2Schema = z
  .object({
    items: z
      .array(Item1Schema)
      .openapi({ description: 'List of items and their respective prices applied by Pricing Hub' }),
  })
  .openapi({ required: ['items'], title: 'response2' })
  .openapi('Response2')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiPricingHubPricesRoute = createRoute({
  method: 'post',
  path: '/api/pricing-hub/prices',
  tags: ['Pricing Hub Prices'],
  summary: 'Get Prices',
  description:
    'This route retrieves and applies prices for the items that are passed in the request. Pricing Hub will select the pricing method that will be used for each item and will fetch their respective price from the selected pricing method. \r\n\r\n>ℹ️ > This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). ',
  request: {
    query: z.object({
      accountName: z
        .string()
        .default('apiexamples')
        .openapi({
          param: {
            description: 'Name of the VTEX account. Used as part of the URL',
            in: 'query',
            name: 'accountName',
            required: true,
            schema: { default: 'apiexamples', type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: GetPricesRequestObjectSchema,
          example: {
            UtmCampaign: 'summer',
            UtmInternalCampaign: 'sale',
            UtmMedium: 'social',
            UtmSource: 'facebook',
            email: 'customer@email.com',
            items: [
              {
                brandId: '2000000',
                categoriesIds: ['1'],
                index: 0,
                priceTableIds: [],
                quantity: 1,
                sellerId: '1',
                skuId: '13',
              },
            ],
            salesChannel: '1',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: Response2Schema,
          example: {
            items: [
              {
                costPrice: 750,
                index: 0,
                listPrice: 2500,
                price: 1875,
                priceTable: '1',
                priceValidUntil: '2022-03-24T14:57:19Z',
                skuId: '14',
              },
              {
                costPrice: 200,
                index: 0,
                listPrice: 200,
                price: 200,
                priceTable: '1',
                priceValidUntil: '2022-03-04T20:00:18Z',
                skuId: '14',
              },
            ],
          },
        },
      },
    },
  },
})

export const putConfigRoute = createRoute({
  method: 'put',
  path: '/config',
  tags: ['Pricing Hub Prices'],
  summary: 'Configure External Price Source',
  description:
    'This route facilitates setting up an external price source in Pricing Hub. It also allows you to activate or deactivate that source in a given account. \r\n\r\n>ℹ️ This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). ',
  operationId: 'ConfigExternalPriceSource',
  request: {
    query: z.object({
      an: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the VTEX account',
            in: 'query',
            name: 'an',
            required: false,
            schema: { example: 'apiexamples', type: 'string' },
          },
          example: 'apiexamples',
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppKey': z
        .string()
        .default('{{X-VTEX-API-AppKey}}')
        .openapi({
          param: {
            description: 'The AppKey configured by the merchant',
            in: 'header',
            name: 'X-VTEX-API-AppKey',
            required: true,
            schema: { default: '{{X-VTEX-API-AppKey}}', type: 'string' },
            style: 'simple',
          },
        }),
      'X-VTEX-API-AppToken': z
        .string()
        .default('{{X-VTEX-API-AppToken}}')
        .openapi({
          param: {
            description: 'The AppToken configured by the merchant',
            in: 'header',
            name: 'X-VTEX-API-AppToken',
            required: true,
            schema: { default: '{{X-VTEX-API-AppToken}}', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: ConfigExternalPriceSourceRequestSchema,
          example: { active: true, appName: 'apiexamples_app_name' },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})
