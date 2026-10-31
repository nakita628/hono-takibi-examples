import { createRoute, z } from '@hono/zod-openapi'

export const getV1EstimateRoute = createRoute({
  method: 'get',
  path: '/v1/estimate',
  tags: ['Payments API'],
  summary: 'Get estimated price',
  description:
    'This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)\nCurrently following fiat currencies are available: usd, eur, nzd, brl, gbp.',
  operationId: 'getEstimatedPrice',
  request: {
    query: z.object({
      amount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'amount',
            schema: { example: '3999.5000', type: 'string' },
            required: false,
          },
          example: '3999.5000',
        }),
      currency_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'currency_from',
            schema: { example: 'usd', type: 'string' },
            required: false,
          },
          example: 'usd',
        }),
      currency_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'currency_to',
            schema: { example: 'btc', type: 'string' },
            required: false,
          },
          example: 'btc',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              amount_from: z.number().exactOptional().openapi({ example: 3999.5 }),
              currency_from: z.string().exactOptional().openapi({ example: 'usd' }),
              currency_to: z.string().exactOptional().openapi({ example: 'btc' }),
              estimated_amount: z.number().exactOptional().openapi({ example: 0.17061637 }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                amount_from: 3999.5,
                currency_from: 'usd',
                currency_to: 'btc',
                estimated_amount: 0.17061637,
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '605abb081ca11669-ARN' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'br' }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Tue, 22 Dec 2020 15:03:37 GMT' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        NEL: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: '{"report_to":"cf-nel","max_age":604800}',
            }),
        },
        'Report-To': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=Be6PnrVenND3qBzQJTWszI2slyEd9pXNhEyFMkukSYUC1m3om7zFPg%2BQq%2F6xT2ridpvoQiRE5q8CWGblOvjJ7%2Bup%2B3ZwGuN7TNvHk04WYiWIlRk%3D"}],"group":"cf-nel","max_age":604800}',
            }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=15768000' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Origin' }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '072c9339110000166928295000000001' }),
        },
      }),
    },
  },
})

export const getV1MinAmountRoute = createRoute({
  method: 'get',
  path: '/v1/min-amount',
  tags: ['Payments API'],
  summary: 'Get the minimum payment amount',
  description:
    'Get the minimum payment amount for a specific pair.\n\nYou can provide both currencies in the pair or just currency\\_from, and we will calculate the minimum payment amount for currency\\_from and currency which you have specified as the outcome in the Store Settings.\n\nYou can also specify one of the fiat currencies in the currency\\_from. In this case, the minimum payment will be calculated in this fiat currency.\n\nYou can also add field fiat\\_equivalent (optional field) to get the fiat equivalent of the minimum amount.\n\nIn the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.',
  operationId: 'getTheMinimumPaymentAmount',
  request: {
    query: z.object({
      currency_from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'currency_from',
            schema: { example: 'eth', type: 'string' },
            required: false,
          },
          example: 'eth',
        }),
      currency_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'currency_to',
            schema: { example: 'trx', type: 'string' },
            required: false,
          },
          example: 'trx',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              currency_from: z.string().exactOptional().openapi({ example: 'eth' }),
              currency_to: z.string().exactOptional().openapi({ example: 'trx' }),
              fiat_equivalent: z.number().exactOptional().openapi({ example: 35.40626584 }),
              min_amount: z.number().exactOptional().openapi({ example: 0.0078999 }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                currency_from: 'eth',
                currency_to: 'trx',
                fiat_equivalent: 35.40626584,
                min_amount: 0.0078999,
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '605abd48af901669-ARN' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'br' }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Tue, 22 Dec 2020 15:05:09 GMT' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        NEL: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: '{"report_to":"cf-nel","max_age":604800}',
            }),
        },
        'Report-To': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=JE3EB5TyT0ppi%2B%2FTPlGcGUDcr2ry9EL%2BhHtpB8%2BYtZMjD087RoOl6UD9284JzS7VANH4ZivF8A7jHMl42n8GLxJL1u7fyKvugNSiViphSjgmGKc%3D"}],"group":"cf-nel","max_age":604800}',
            }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=15768000' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Origin' }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '072c94a16a0000166954256000000001' }),
        },
      }),
    },
  },
})

export const getV1PaymentIndexRoute = createRoute({
  method: 'get',
  path: '/v1/payment/',
  tags: ['Payments API'],
  summary: 'Get list of payments',
  description:
    'Returns the entire list of all transactions, created with certain API key.\nThe list of optional parameters:\n- limit - number of records in one page. (possible values: from 1 to 500)\n- page - the page number you want to get (possible values: from 0 to **page count - 1**)\n- sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)\n- orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)\n- dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).\n- dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).',
  operationId: 'getListOfPayments',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
      sortBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sortBy',
            schema: { example: 'created_at', type: 'string' },
            required: false,
          },
          example: 'created_at',
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orderBy',
            schema: { example: 'asc', type: 'string' },
            required: false,
          },
          example: 'asc',
        }),
      dateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateFrom',
            schema: { example: '2020-01-01', type: 'string' },
            required: false,
          },
          example: '2020-01-01',
        }),
      dateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateTo',
            schema: { example: '2021-01-01', type: 'string' },
            required: false,
          },
          example: '2021-01-01',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      actually_paid: z.number().exactOptional().openapi({ example: 180 }),
                      order_description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Apple Macbook Pro 2019 x 1' }),
                      order_id: z.string().exactOptional().openapi({ example: 'RGDBP-21314' }),
                      outcome_amount: z.number().exactOptional().openapi({ example: 178.9005 }),
                      outcome_currency: z.string().exactOptional().openapi({ example: 'trx' }),
                      pay_address: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'TNDFkiSmBQorNFacb3735q8MnT29sn8BLn' }),
                      pay_amount: z.number().exactOptional().openapi({ example: 165.652609 }),
                      pay_currency: z.string().exactOptional().openapi({ example: 'trx' }),
                      payment_id: z.number().exactOptional().openapi({ example: 5524759814 }),
                      payment_status: z.string().exactOptional().openapi({ example: 'finished' }),
                      price_amount: z.number().exactOptional().openapi({ example: 5 }),
                      price_currency: z.string().exactOptional().openapi({ example: 'usd' }),
                      purchase_id: z.string().exactOptional().openapi({ example: '4944856743' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      actually_paid: 180,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 178.9005,
                      outcome_currency: 'trx',
                      pay_address: 'TNDFkiSmBQorNFacb3735q8MnT29sn8BLn',
                      pay_amount: 165.652609,
                      pay_currency: 'trx',
                      payment_id: 5524759814,
                      payment_status: 'finished',
                      price_amount: 5,
                      price_currency: 'usd',
                      purchase_id: '4944856743',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 164.6248468,
                      outcome_currency: 'trx',
                      pay_address: 'TVKHbLc47BnMbdE7QN4X5Q1FtyZLGGiTo8',
                      pay_amount: 165.652609,
                      pay_currency: 'trx',
                      payment_id: 5867063509,
                      payment_status: 'expired',
                      price_amount: 5,
                      price_currency: 'usd',
                      purchase_id: '5057851130',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 0.1687052,
                      outcome_currency: 'btc',
                      pay_address: '3EZ2uTdVDAMFXTfc6uLDDKR6o8qKBZXVkj',
                      pay_amount: 0.17070286,
                      pay_currency: 'btc',
                      payment_id: 5745459419,
                      payment_status: 'waiting',
                      price_amount: 3999.5,
                      price_currency: 'usd',
                      purchase_id: '5837122679',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 0.8019402,
                      outcome_currency: 'btc',
                      pay_address: '394UZCUdx3NN8VDsCZW8c6AzP7cXEXA8Xq',
                      pay_amount: 0.8102725,
                      pay_currency: 'btc',
                      payment_id: 4650948408,
                      payment_status: 'waiting',
                      price_amount: 3999.5,
                      price_currency: 'usd',
                      purchase_id: '5094859409',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 988.9016296,
                      outcome_currency: 'bcd',
                      pay_address: '3EWJaZBaRWbPjSBTpgFcvxpnXLJzFDCHqW',
                      pay_amount: 993.87178656,
                      pay_currency: 'bcd',
                      payment_id: 5605634688,
                      payment_status: 'expired',
                      price_amount: 500,
                      price_currency: 'usd',
                      purchase_id: '5817305007',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 1.8451261,
                      outcome_currency: 'bch',
                      pay_address: 'qzkshdh94vhdcyuejjf8ltcy2cl246hw0c68t36z69',
                      pay_amount: 1.85459941,
                      pay_currency: 'bch',
                      payment_id: 5241856814,
                      payment_status: 'expired',
                      price_amount: 500,
                      price_currency: 'usd',
                      purchase_id: '5941190675',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 56.151958,
                      outcome_currency: 'btg',
                      pay_address: 'AYyecr8WKVpj2PNonjyUpn9sCHFyFMLdN1',
                      pay_amount: 56.4344495,
                      pay_currency: 'btg',
                      payment_id: 5751462089,
                      payment_status: 'expired',
                      price_amount: 500,
                      price_currency: 'usd',
                      purchase_id: '6229667127',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 489.9433465,
                      outcome_currency: 'dai',
                      pay_address: '0x6C3E920D0fdAF45c75b6c00f25Aa6a58429d4efB',
                      pay_amount: 496.84604252,
                      pay_currency: 'dai',
                      payment_id: 6100223670,
                      payment_status: 'expired',
                      price_amount: 500,
                      price_currency: 'usd',
                      purchase_id: '5376931412',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 0.025819,
                      outcome_currency: 'btc',
                      pay_address: '3C85TUuBKEkoZZsTawiJhYZtVVLgE4GWqj',
                      pay_amount: 0.02596608,
                      pay_currency: 'btc',
                      payment_id: 4460859238,
                      payment_status: 'expired',
                      price_amount: 500,
                      price_currency: 'usd',
                      purchase_id: '5652098489',
                    },
                    {
                      actually_paid: 0,
                      order_description: 'Apple Macbook Pro 2019 x 1',
                      order_id: 'RGDBP-21314',
                      outcome_amount: 153789.0997188,
                      outcome_currency: 'doge',
                      pay_address: 'DLmK6vLURgHoWVZrQztthSqV71CBePG5k5',
                      pay_amount: 154569.92936569,
                      pay_currency: 'doge',
                      payment_id: 4948632928,
                      payment_status: 'expired',
                      price_amount: 500,
                      price_currency: 'usd',
                      purchase_id: '4811984625',
                    },
                  ],
                }),
              limit: z.number().exactOptional().openapi({ example: 10 }),
              page: z.number().exactOptional().openapi({ example: 0 }),
              pagesCount: z.number().exactOptional().openapi({ example: 6 }),
              total: z.number().exactOptional().openapi({ example: 59 }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                data: [
                  {
                    actually_paid: 180,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 178.9005,
                    outcome_currency: 'trx',
                    pay_address: 'TNDFkiSmBQorNFacb3735q8MnT29sn8BLn',
                    pay_amount: 165.652609,
                    pay_currency: 'trx',
                    payment_id: 5524759814,
                    payment_status: 'finished',
                    price_amount: 5,
                    price_currency: 'usd',
                    purchase_id: '4944856743',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 164.6248468,
                    outcome_currency: 'trx',
                    pay_address: 'TVKHbLc47BnMbdE7QN4X5Q1FtyZLGGiTo8',
                    pay_amount: 165.652609,
                    pay_currency: 'trx',
                    payment_id: 5867063509,
                    payment_status: 'expired',
                    price_amount: 5,
                    price_currency: 'usd',
                    purchase_id: '5057851130',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 0.1687052,
                    outcome_currency: 'btc',
                    pay_address: '3EZ2uTdVDAMFXTfc6uLDDKR6o8qKBZXVkj',
                    pay_amount: 0.17070286,
                    pay_currency: 'btc',
                    payment_id: 5745459419,
                    payment_status: 'waiting',
                    price_amount: 3999.5,
                    price_currency: 'usd',
                    purchase_id: '5837122679',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 0.8019402,
                    outcome_currency: 'btc',
                    pay_address: '394UZCUdx3NN8VDsCZW8c6AzP7cXEXA8Xq',
                    pay_amount: 0.8102725,
                    pay_currency: 'btc',
                    payment_id: 4650948408,
                    payment_status: 'waiting',
                    price_amount: 3999.5,
                    price_currency: 'usd',
                    purchase_id: '5094859409',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 988.9016296,
                    outcome_currency: 'bcd',
                    pay_address: '3EWJaZBaRWbPjSBTpgFcvxpnXLJzFDCHqW',
                    pay_amount: 993.87178656,
                    pay_currency: 'bcd',
                    payment_id: 5605634688,
                    payment_status: 'expired',
                    price_amount: 500,
                    price_currency: 'usd',
                    purchase_id: '5817305007',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 1.8451261,
                    outcome_currency: 'bch',
                    pay_address: 'qzkshdh94vhdcyuejjf8ltcy2cl246hw0c68t36z69',
                    pay_amount: 1.85459941,
                    pay_currency: 'bch',
                    payment_id: 5241856814,
                    payment_status: 'expired',
                    price_amount: 500,
                    price_currency: 'usd',
                    purchase_id: '5941190675',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 56.151958,
                    outcome_currency: 'btg',
                    pay_address: 'AYyecr8WKVpj2PNonjyUpn9sCHFyFMLdN1',
                    pay_amount: 56.4344495,
                    pay_currency: 'btg',
                    payment_id: 5751462089,
                    payment_status: 'expired',
                    price_amount: 500,
                    price_currency: 'usd',
                    purchase_id: '6229667127',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 489.9433465,
                    outcome_currency: 'dai',
                    pay_address: '0x6C3E920D0fdAF45c75b6c00f25Aa6a58429d4efB',
                    pay_amount: 496.84604252,
                    pay_currency: 'dai',
                    payment_id: 6100223670,
                    payment_status: 'expired',
                    price_amount: 500,
                    price_currency: 'usd',
                    purchase_id: '5376931412',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 0.025819,
                    outcome_currency: 'btc',
                    pay_address: '3C85TUuBKEkoZZsTawiJhYZtVVLgE4GWqj',
                    pay_amount: 0.02596608,
                    pay_currency: 'btc',
                    payment_id: 4460859238,
                    payment_status: 'expired',
                    price_amount: 500,
                    price_currency: 'usd',
                    purchase_id: '5652098489',
                  },
                  {
                    actually_paid: 0,
                    order_description: 'Apple Macbook Pro 2019 x 1',
                    order_id: 'RGDBP-21314',
                    outcome_amount: 153789.0997188,
                    outcome_currency: 'doge',
                    pay_address: 'DLmK6vLURgHoWVZrQztthSqV71CBePG5k5',
                    pay_amount: 154569.92936569,
                    pay_currency: 'doge',
                    payment_id: 4948632928,
                    payment_status: 'expired',
                    price_amount: 500,
                    price_currency: 'usd',
                    purchase_id: '4811984625',
                  },
                ],
                limit: 10,
                page: 0,
                pagesCount: 6,
                total: 59,
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '605abddd7db41669-ARN' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'br' }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Tue, 22 Dec 2020 15:05:33 GMT' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        NEL: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: '{"report_to":"cf-nel","max_age":604800}',
            }),
        },
        'Report-To': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=4Sj25uNN8wdCtby0RbHx%2FbSLll68tMBpk%2FVG%2BQxVvo3wGnCf6Zu1DPFpwjsTBVasLRcoOsZVemVR6eVlvGP3HF9uJ1VOuaj%2Be9TCiwikq16Y5Vg%3D"}],"group":"cf-nel","max_age":604800}',
            }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=15768000' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Origin' }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '072c94fe6c00001669e783e000000001' }),
        },
      }),
    },
  },
})

export const postV1PaymentIdUpdateMerchantEstimateRoute = createRoute({
  method: 'post',
  path: '/v1/payment/{id}/update-merchant-estimate',
  tags: ['Payments API'],
  summary: 'Get/Update payment estimate',
  description:
    'This endpoint is required to get the current estimate on the payment, and update the current estimate.  \nPlease note! Calling this estimate before `expiration_estimate_date` will return the current estimate, it won’t be updated.\n\n`:id` \\- payment ID, for which you want to get the estimate\n\nResponse:  \n`id` \\- payment ID  \n`token_id` - id of api key used to create this payment (please discard this parameter)  \n`pay_amount` - payment estimate, the exact amount the user will have to send to complete the payment  \n`expiration_estimate_date` - expiration date of this estimate',
  operationId: 'getUpdatePaymentEstimate',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'payment ID, for which you want to get the estimate',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              expiration_estimate_date: z
                .string()
                .exactOptional()
                .openapi({ example: '2022-08-12T13:14:28.536Z' }),
              id: z.string().exactOptional().openapi({ example: '4455667788' }),
              pay_amount: z.number().exactOptional().openapi({ example: 0.04671013 }),
              token_id: z.string().exactOptional().openapi({ example: '5566778899' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                expiration_estimate_date: '2022-08-12T13:14:28.536Z',
                id: '4455667788',
                pay_amount: 0.04671013,
                token_id: '5566778899',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '73995c778c69c2e1-VIE' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'br' }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Fri, 12 Aug 2022 12:54:43 GMT' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        NEL: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
            }),
        },
        'Report-To': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UlD77RlowCWTg1qTZ2LeHmo1PgG3zxPObaiXYfhalA0YMLx%2BN07RVybi%2BZ%2BM4TkZr5jAjyQN5IMEcOW88%2FFqbuIQhrYnNXIBWUq6QwBFc4nG3FZMlvkLybT0QbYxAutJE4b1rL8%3D"}],"group":"cf-nel","max_age":604800}',
            }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        'alt-svc': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
            }),
        },
        'strict-transport-security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=15768000' }),
        },
        vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Origin, Accept-Encoding' }),
        },
        'x-content-type-options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'x-dns-prefetch-control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'x-download-options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'x-frame-options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'x-xss-protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
      }),
    },
  },
})

export const getV1PaymentPaymentIdRoute = createRoute({
  method: 'get',
  path: '/v1/payment/{payment_id}',
  tags: ['Payments API'],
  summary: 'Get payment status',
  description:
    "Get the actual information about the payment. You need to provide the ID of the payment in the request.\n\nNOTE! You should make the get payment status request with the same API key that you used in the create payment request.\nHere is the list of avalable statuses:\n- waiting - waiting for the customer to send the payment. The initial status of each payment.\n- confirming - the transaction is being processed on the blockchain. Appears when NOWPayments detect the funds from the user on the blockchain.\n- confirmed -  the process is confirmed by the blockchain. Customer’s funds have accumulated enough confirmations.\n- sending - the funds are being sent to your personal wallet. We are in the process of sending the funds to you.\n- partially_paid -  it shows that the customer sent the less than the actual price. Appears when the funds have arrived in your wallet.\n- finished - the funds have reached your personal address and the payment is finished.\n- failed -  the payment wasn't completed due to the error of some kind.\n- refunded -  the funds were refunded back to the user.\n- expired - the user didn't send the funds to the specified address in the 24 hour time window.\n\nAdditional info:\n- outcome_amount - this parameter shows the amount that will be (or is already) received on your Outcome Wallet once the transaction is settled.\n- outcome_currency - this parameter shows the currency in which the transaction will be settled.\n- invoice_id - this parameter shows invoice ID from which the payment was created",
  operationId: 'getPaymentStatus',
  request: {
    params: z.object({
      payment_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'payment_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              actually_paid: z.number().exactOptional().openapi({ example: 180 }),
              created_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2020-12-16T14:30:43.306Z' }),
              order_description: z
                .string()
                .exactOptional()
                .openapi({ example: 'Apple Macbook Pro 2019 x 1' }),
              order_id: z.string().exactOptional().openapi({ example: 'RGDBP-21314' }),
              outcome_amount: z.number().exactOptional().openapi({ example: 178.9005 }),
              outcome_currency: z.string().exactOptional().openapi({ example: 'trx' }),
              pay_address: z
                .string()
                .exactOptional()
                .openapi({ example: 'TNDFkiSmBQorNFacb3735q8MnT29sn8BLn' }),
              pay_amount: z.number().exactOptional().openapi({ example: 165.652609 }),
              pay_currency: z.string().exactOptional().openapi({ example: 'trx' }),
              payment_id: z.number().exactOptional().openapi({ example: 5524759814 }),
              payment_status: z.string().exactOptional().openapi({ example: 'finished' }),
              price_amount: z.number().exactOptional().openapi({ example: 5 }),
              price_currency: z.string().exactOptional().openapi({ example: 'usd' }),
              purchase_id: z.string().exactOptional().openapi({ example: '4944856743' }),
              updated_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2020-12-16T14:40:46.523Z' }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                actually_paid: 180,
                created_at: '2020-12-16T14:30:43.306Z',
                order_description: 'Apple Macbook Pro 2019 x 1',
                order_id: 'RGDBP-21314',
                outcome_amount: 178.9005,
                outcome_currency: 'trx',
                pay_address: 'TNDFkiSmBQorNFacb3735q8MnT29sn8BLn',
                pay_amount: 165.652609,
                pay_currency: 'trx',
                payment_id: 5524759814,
                payment_status: 'finished',
                price_amount: 5,
                price_currency: 'usd',
                purchase_id: '4944856743',
                updated_at: '2020-12-16T14:40:46.523Z',
              },
            },
          },
        },
      },
      headers: z.object({
        'CF-Cache-Status': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'DYNAMIC' }),
        },
        'CF-RAY': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '60294baa3828fe40-HEL' }),
        },
        Connection: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'keep-alive' }),
        },
        'Content-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'br' }),
        },
        Date: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Wed, 16 Dec 2020 15:04:13 GMT' }),
        },
        'Expect-CT': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
            }),
        },
        NEL: {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: '{"report_to":"cf-nel","max_age":604800}',
            }),
        },
        'Report-To': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example:
                '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report?s=zEbhqHJbg3q36U8j53OXNXd%2Bko6cS9sMgMStn1FBVWWkPsG8UrIRJyCEhmY1qK%2FXx3U%2FGPx54%2BOtE2Btl8ZwU9i9wZ%2BJkAo8q7FqZydfMMQgcb4%3D"}],"group":"cf-nel","max_age":604800}',
            }),
        },
        Server: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cloudflare' }),
        },
        'Strict-Transport-Security': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'max-age=15768000' }),
        },
        'Transfer-Encoding': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'chunked' }),
        },
        Vary: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'Origin' }),
        },
        'X-Content-Type-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'nosniff' }),
        },
        'X-DNS-Prefetch-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'off' }),
        },
        'X-Download-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'noopen' }),
        },
        'X-Frame-Options': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'SAMEORIGIN' }),
        },
        'X-XSS-Protection': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '1; mode=block' }),
        },
        'cf-request-id': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: '070dad9e670000fe402dae0000000001' }),
        },
      }),
    },
  },
})

export const postV1PayoutWithdrawalsIdVerifyRoute = createRoute({
  method: 'post',
  path: '/v1/payout/{withdrawals-id}/verify',
  tags: ['Payouts API'],
  summary: 'Verify payout',
  description:
    "This method is required to verify payouts by using your 2fa code.  \nYou’ll have 10 attempts to verify the payout. If it is not verified after 10 attempts, the payout will remain in ‘creating’ status.  \nPayout will be processed only when it is verified.\n\nMake sure to have your 2fa authentication enabled in your NOWPayments Account (in Account Settings).  \nWhen 2fa is disabled, the code automatically goes to your registration email.  \nThe code sent by email is valid for one hour.\n\nNext is a description of the required request fields:\n\n- :batch-withdrawal-id - payout id you received in `2. Create payout` method\n- verification_code - 2fa code you received with your Google Auth app or via email\n    \n\nIn order to establish an automatic verification of payouts, you should switch 2FA through the application.  \nThere are several libraries for different frameworks aimed on generating a 2FA codes based on a secret key from your account settings.  \ne.g: Speakeasy for JavaScript.  \nWe do not recommend to change any default settings.  \n\n```\nconst 2faVerificationCode = speakeasy.totp({\n      your_2fa_secret_key,\n      encoding: 'base32',\n})\n```",
  operationId: 'verifyPayout',
  request: {
    params: z.object({
      'withdrawals-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'withdrawals-id',
            required: true,
            schema: { example: '5000000191', type: 'string' },
          },
          example: '5000000191',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              verification_code: z.string().exactOptional().openapi({ example: '123456' }),
            })
            .openapi({ required: [] }),
          example: { verification_code: '123456' },
        },
      },
    },
  },
  responses: { 200: { description: '200', content: {} } },
})

export const getV1SubPartnerRoute = createRoute({
  method: 'get',
  path: '/v1/sub-partner',
  tags: ['Billing (sub-partner API)'],
  summary: 'Get sub-partners',
  description: 'This method returns the entire list of your sub-partners.',
  operationId: 'getSubPartners',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'int or array of int (optional)',
            in: 'query',
            name: 'id',
            schema: { example: '111', type: 'string' },
            required: false,
          },
          example: '111',
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(optional) default 0',
            in: 'query',
            name: 'offset',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(optional) default 10',
            in: 'query',
            name: 'limit',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ASC / DESC (optional) default ASC',
            in: 'query',
            name: 'order',
            schema: { example: 'DESC', type: 'string' },
            required: false,
          },
          example: 'DESC',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1SubPartnerBalanceIdRoute = createRoute({
  method: 'get',
  path: '/v1/sub-partner/balance/{id}',
  tags: ['Billing (sub-partner API)'],
  summary: 'Get sub-partner balance',
  description:
    'This request can be made only from a whitelisted IP.  \nIf IP whitelisting is disabled, this request can be made by any user that has an API key.',
  operationId: 'getSubPartnerBalance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  balances: z
                    .object({
                      usddtrc20: z
                        .object({
                          amount: z.number().exactOptional().openapi({ example: 0.7 }),
                          pendingAmount: z.number().exactOptional().openapi({ example: 0 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      usdtbsc: z
                        .object({
                          amount: z
                            .number()
                            .exactOptional()
                            .openapi({ example: 1.0001341847350678 }),
                          pendingAmount: z.number().exactOptional().openapi({ example: 0 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  subPartnerId: z.string().exactOptional().openapi({ example: '111394288' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                result: {
                  balances: {
                    usddtrc20: { amount: 0.7, pendingAmount: 0 },
                    usdtbsc: { amount: 1.0001341847350678, pendingAmount: 0 },
                  },
                  subPartnerId: '111394288',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getV1SubPartnerTransferIdRoute = createRoute({
  method: 'get',
  path: '/v1/sub-partner/transfer/{id}',
  tags: ['Billing (sub-partner API)'],
  summary: 'Get transfer',
  description:
    'Get the actual information about the transfer. You need to provide the transfer ID in the request.',
  operationId: 'getTransfer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  amount: z.string().exactOptional().openapi({ example: '1' }),
                  created_at: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-09T22:09:02.181Z' }),
                  currency: z.string().exactOptional().openapi({ example: 'usdtbsc' }),
                  from_sub_id: z.string().exactOptional().openapi({ example: '111394288' }),
                  id: z.string().exactOptional().openapi({ example: '327209161' }),
                  status: z.string().exactOptional().openapi({ example: 'FINISHED' }),
                  to_sub_id: z.string().exactOptional().openapi({ example: '1515573197' }),
                  updated_at: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-09T22:10:01.853Z' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                result: {
                  amount: '1',
                  created_at: '2022-10-09T22:09:02.181Z',
                  currency: 'usdtbsc',
                  from_sub_id: '111394288',
                  id: '327209161',
                  status: 'FINISHED',
                  to_sub_id: '1515573197',
                  updated_at: '2022-10-09T22:10:01.853Z',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getV1SubPartnerTransfersRoute = createRoute({
  method: 'get',
  path: '/v1/sub-partner/transfers',
  tags: ['Billing (sub-partner API)'],
  summary: 'Get all transfers',
  description: 'Returns the entire list of transfers created by your sub-partners.',
  operationId: 'getAllTransfers',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'int or array of int (optional)',
            in: 'query',
            name: 'id',
            schema: { example: '111', type: 'string' },
            required: false,
          },
          example: '111',
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'string or array of string \n"WAITING"/"CREATED"/"FINISHED"/"REJECTED"\n(optional)',
            in: 'query',
            name: 'status',
            schema: { example: 'CREATED', type: 'string' },
            required: false,
          },
          example: 'CREATED',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(optional) default 10',
            in: 'query',
            name: 'limit',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(optional) default 0',
            in: 'query',
            name: 'offset',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ASC / DESC (optional) default ASC',
            in: 'query',
            name: 'order',
            schema: { example: 'ASC', type: 'string' },
            required: false,
          },
          example: 'ASC',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.number().exactOptional().openapi({ example: 7 }),
              result: z
                .array(
                  z
                    .object({
                      amount: z.string().exactOptional().openapi({ example: '1' }),
                      created_at: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-09T18:53:21.975Z' }),
                      currency: z.string().exactOptional().openapi({ example: 'usdtbsc' }),
                      from_sub_id: z.string().exactOptional().openapi({ example: '5209391548' }),
                      id: z.string().exactOptional().openapi({ example: '111394288' }),
                      status: z.string().exactOptional().openapi({ example: 'FINISHED' }),
                      to_sub_id: z.string().exactOptional().openapi({ example: '111394288' }),
                      updated_at: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-09T18:55:00.696Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      amount: '1',
                      created_at: '2022-10-09T18:53:21.975Z',
                      currency: 'usdtbsc',
                      from_sub_id: '5209391548',
                      id: '111394288',
                      status: 'FINISHED',
                      to_sub_id: '111394288',
                      updated_at: '2022-10-09T18:55:00.696Z',
                    },
                    {
                      amount: '1',
                      created_at: '2022-10-09T19:08:32.440Z',
                      currency: 'usdtbsc',
                      from_sub_id: '111394288',
                      id: '148427051',
                      status: 'FINISHED',
                      to_sub_id: '5209391548',
                      updated_at: '2022-10-09T19:10:01.209Z',
                    },
                    {
                      amount: '2',
                      created_at: '2022-10-09T21:19:51.936Z',
                      currency: 'usdtbsc',
                      from_sub_id: '5209391548',
                      id: '1631380403',
                      status: 'FINISHED',
                      to_sub_id: '111394288',
                      updated_at: '2022-10-09T21:21:00.671Z',
                    },
                    {
                      amount: '2',
                      created_at: '2022-10-09T21:22:17.125Z',
                      currency: 'usdtbsc',
                      from_sub_id: '5209391548',
                      id: '1167886259',
                      status: 'FINISHED',
                      to_sub_id: '111394288',
                      updated_at: '2022-10-09T21:24:00.662Z',
                    },
                    {
                      amount: '1',
                      created_at: '2022-10-09T21:25:29.231Z',
                      currency: 'usdtbsc',
                      from_sub_id: '111394288',
                      id: '48471014',
                      status: 'FINISHED',
                      to_sub_id: '5209391548',
                      updated_at: '2022-10-09T21:27:00.676Z',
                    },
                    {
                      amount: '1',
                      created_at: '2022-10-09T21:54:57.713Z',
                      currency: 'usdtbsc',
                      from_sub_id: '111394288',
                      id: '1304149238',
                      status: 'FINISHED',
                      to_sub_id: '5209391548',
                      updated_at: '2022-10-09T21:56:01.056Z',
                    },
                    {
                      amount: '1',
                      created_at: '2022-10-09T22:09:02.181Z',
                      currency: 'usdtbsc',
                      from_sub_id: '111394288',
                      id: '327209161',
                      status: 'FINISHED',
                      to_sub_id: '1515573197',
                      updated_at: '2022-10-09T22:10:01.853Z',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                count: 7,
                result: [
                  {
                    amount: '1',
                    created_at: '2022-10-09T18:53:21.975Z',
                    currency: 'usdtbsc',
                    from_sub_id: '5209391548',
                    id: '111394288',
                    status: 'FINISHED',
                    to_sub_id: '111394288',
                    updated_at: '2022-10-09T18:55:00.696Z',
                  },
                  {
                    amount: '1',
                    created_at: '2022-10-09T19:08:32.440Z',
                    currency: 'usdtbsc',
                    from_sub_id: '111394288',
                    id: '148427051',
                    status: 'FINISHED',
                    to_sub_id: '5209391548',
                    updated_at: '2022-10-09T19:10:01.209Z',
                  },
                  {
                    amount: '2',
                    created_at: '2022-10-09T21:19:51.936Z',
                    currency: 'usdtbsc',
                    from_sub_id: '5209391548',
                    id: '1631380403',
                    status: 'FINISHED',
                    to_sub_id: '111394288',
                    updated_at: '2022-10-09T21:21:00.671Z',
                  },
                  {
                    amount: '2',
                    created_at: '2022-10-09T21:22:17.125Z',
                    currency: 'usdtbsc',
                    from_sub_id: '5209391548',
                    id: '1167886259',
                    status: 'FINISHED',
                    to_sub_id: '111394288',
                    updated_at: '2022-10-09T21:24:00.662Z',
                  },
                  {
                    amount: '1',
                    created_at: '2022-10-09T21:25:29.231Z',
                    currency: 'usdtbsc',
                    from_sub_id: '111394288',
                    id: '48471014',
                    status: 'FINISHED',
                    to_sub_id: '5209391548',
                    updated_at: '2022-10-09T21:27:00.676Z',
                  },
                  {
                    amount: '1',
                    created_at: '2022-10-09T21:54:57.713Z',
                    currency: 'usdtbsc',
                    from_sub_id: '111394288',
                    id: '1304149238',
                    status: 'FINISHED',
                    to_sub_id: '5209391548',
                    updated_at: '2022-10-09T21:56:01.056Z',
                  },
                  {
                    amount: '1',
                    created_at: '2022-10-09T22:09:02.181Z',
                    currency: 'usdtbsc',
                    from_sub_id: '111394288',
                    id: '327209161',
                    status: 'FINISHED',
                    to_sub_id: '1515573197',
                    updated_at: '2022-10-09T22:10:01.853Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getV1SubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions',
  tags: ['Recurring Payments API (Email Subscriptions feature)'],
  summary: 'Get many recurring payments',
  description:
    'The method allows you to view the entire list of recurring payments filtered by payment status and/or payment plan id',
  operationId: 'getManyRecurringPayments',
  request: {
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '"WAITING_PAY" / "PAID" /  "PARTIALLY_PAID" / "EXPIRED"',
            in: 'query',
            name: 'status',
            schema: { example: 'PARTIALLY_PAID', type: 'string' },
            required: false,
          },
          example: 'PARTIALLY_PAID',
        }),
      subscription_plan_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'subscription_plan_id',
            schema: { example: '111394288', type: 'string' },
            required: false,
          },
          example: '111394288',
        }),
      is_active: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'true / false',
            in: 'query',
            name: 'is_active',
            schema: { example: 'false', type: 'string' },
            required: false,
          },
          example: 'false',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { example: '0', type: 'string' },
            required: false,
          },
          example: '0',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
    body: { content: {} },
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.number().exactOptional().openapi({ example: 2 }),
              result: z
                .array(
                  z
                    .object({
                      created_at: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-09T22:15:50.808Z' }),
                      expire_date: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-11T00:02:00.025Z' }),
                      id: z.string().exactOptional().openapi({ example: '1515573197' }),
                      is_active: z.boolean().exactOptional().openapi({ example: true }),
                      status: z.string().exactOptional().openapi({ example: 'PAID' }),
                      subscriber: z
                        .object({
                          email: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'mikhail.s@changenow.io' }),
                          sub_partner_id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '111394288' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      subscription_plan_id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '111394288' }),
                      updated_at: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-09T22:15:50.808Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      created_at: '2022-10-09T22:15:50.808Z',
                      expire_date: '2022-10-11T00:02:00.025Z',
                      id: '1515573197',
                      is_active: true,
                      status: 'PAID',
                      subscriber: { sub_partner_id: '111394288' },
                      subscription_plan_id: '111394288',
                      updated_at: '2022-10-09T22:15:50.808Z',
                    },
                    {
                      created_at: '2022-10-06T16:40:28.880Z',
                      expire_date: '2022-10-07T16:46:00.910Z',
                      id: '111394288',
                      is_active: false,
                      status: 'WAITING_PAY',
                      subscriber: { email: 'mikhail.s@changenow.io' },
                      subscription_plan_id: '111394288',
                      updated_at: '2022-10-06T16:40:28.880Z',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                count: 2,
                result: [
                  {
                    created_at: '2022-10-09T22:15:50.808Z',
                    expire_date: '2022-10-11T00:02:00.025Z',
                    id: '1515573197',
                    is_active: true,
                    status: 'PAID',
                    subscriber: { sub_partner_id: '111394288' },
                    subscription_plan_id: '111394288',
                    updated_at: '2022-10-09T22:15:50.808Z',
                  },
                  {
                    created_at: '2022-10-06T16:40:28.880Z',
                    expire_date: '2022-10-07T16:46:00.910Z',
                    id: '111394288',
                    is_active: false,
                    status: 'WAITING_PAY',
                    subscriber: { email: 'mikhail.s@changenow.io' },
                    subscription_plan_id: '111394288',
                    updated_at: '2022-10-06T16:40:28.880Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getV1SubscriptionsPlansRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions/plans',
  tags: ['Recurring Payments API (Email Subscriptions feature)'],
  summary: 'Get many plans',
  description:
    'This method allows you to obtain information about all the payment plans you’ve created.',
  operationId: 'getManyPlans',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number',
            in: 'query',
            name: 'limit',
            schema: { example: '10', type: 'string' },
            required: false,
          },
          example: '10',
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number',
            in: 'query',
            name: 'offset',
            schema: { example: '3', type: 'string' },
            required: false,
          },
          example: '3',
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.number().exactOptional().openapi({ example: 2 }),
              result: z
                .array(
                  z
                    .object({
                      amount: z.number().exactOptional().openapi({ example: 0.1 }),
                      cancel_url: z.any().nullable().exactOptional().openapi({ example: null }),
                      created_at: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-04T16:10:06.214Z' }),
                      currency: z.string().exactOptional().openapi({ example: 'USD' }),
                      id: z.string().exactOptional().openapi({ example: '76215585' }),
                      interval_day: z.string().exactOptional().openapi({ example: '3' }),
                      ipn_callback_url: z
                        .any()
                        .nullable()
                        .exactOptional()
                        .openapi({ example: null }),
                      partially_paid_url: z
                        .any()
                        .nullable()
                        .exactOptional()
                        .openapi({ example: null }),
                      success_url: z.any().nullable().exactOptional().openapi({ example: null }),
                      title: z.string().exactOptional().openapi({ example: 'second sub plan' }),
                      updated_at: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2022-10-04T16:10:06.214Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      amount: 0.1,
                      cancel_url: null,
                      created_at: '2022-10-04T16:10:06.214Z',
                      currency: 'USD',
                      id: '76215585',
                      interval_day: '3',
                      ipn_callback_url: null,
                      partially_paid_url: null,
                      success_url: null,
                      title: 'second sub plan',
                      updated_at: '2022-10-04T16:10:06.214Z',
                    },
                    {
                      amount: 0.5,
                      cancel_url: null,
                      created_at: '2022-10-04T16:28:55.423Z',
                      currency: 'USD',
                      id: '1062307590',
                      interval_day: '1',
                      ipn_callback_url: null,
                      partially_paid_url: null,
                      success_url: null,
                      title: 'second sub plan',
                      updated_at: '2022-10-04T16:28:55.423Z',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                count: 2,
                result: [
                  {
                    amount: 0.1,
                    cancel_url: null,
                    created_at: '2022-10-04T16:10:06.214Z',
                    currency: 'USD',
                    id: '76215585',
                    interval_day: '3',
                    ipn_callback_url: null,
                    partially_paid_url: null,
                    success_url: null,
                    title: 'second sub plan',
                    updated_at: '2022-10-04T16:10:06.214Z',
                  },
                  {
                    amount: 0.5,
                    cancel_url: null,
                    created_at: '2022-10-04T16:28:55.423Z',
                    currency: 'USD',
                    id: '1062307590',
                    interval_day: '1',
                    ipn_callback_url: null,
                    partially_paid_url: null,
                    success_url: null,
                    title: 'second sub plan',
                    updated_at: '2022-10-04T16:28:55.423Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getV1SubscriptionsPlansPlanIdRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions/plans/{plan-id}',
  tags: ['Recurring Payments API (Email Subscriptions feature)'],
  summary: 'Get one plan',
  description:
    'This method allows you to obtain information about your payment plan.  \n(you need to specify your payment plan id in the request).',
  operationId: 'getOnePlan',
  request: {
    params: z.object({
      'plan-id': z
        .string()
        .openapi({
          param: { in: 'path', name: 'plan-id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  amount: z.number().exactOptional().openapi({ example: 2 }),
                  cancel_url: z.any().nullable().exactOptional().openapi({ example: null }),
                  created_at: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-04T16:10:06.214Z' }),
                  currency: z.string().exactOptional().openapi({ example: 'USD' }),
                  id: z.string().exactOptional().openapi({ example: '76215585' }),
                  interval_day: z.string().exactOptional().openapi({ example: '1' }),
                  ipn_callback_url: z.any().nullable().exactOptional().openapi({ example: null }),
                  partially_paid_url: z.any().nullable().exactOptional().openapi({ example: null }),
                  success_url: z.any().nullable().exactOptional().openapi({ example: null }),
                  title: z.string().exactOptional().openapi({ example: 'test plan' }),
                  updated_at: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-04T16:10:06.214Z' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                result: {
                  amount: 2,
                  cancel_url: null,
                  created_at: '2022-10-04T16:10:06.214Z',
                  currency: 'USD',
                  id: '76215585',
                  interval_day: '1',
                  ipn_callback_url: null,
                  partially_paid_url: null,
                  success_url: null,
                  title: 'test plan',
                  updated_at: '2022-10-04T16:10:06.214Z',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: '404',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional().openapi({ example: 'NOT_FOUND' }),
              message: z
                .string()
                .exactOptional()
                .openapi({ example: 'subscription plan not found' }),
              status: z.boolean().exactOptional().openapi({ example: false }),
              statusCode: z.number().exactOptional().openapi({ example: 404 }),
            })
            .openapi({ required: [] }),
          examples: {
            '404': {
              value: {
                code: 'NOT_FOUND',
                message: 'subscription plan not found',
                status: false,
                statusCode: 404,
              },
            },
          },
        },
      },
    },
  },
})

export const patchV1SubscriptionsPlansPlanIdRoute = createRoute({
  method: 'patch',
  path: '/v1/subscriptions/plans/{plan-id}',
  tags: ['Recurring Payments API (Email Subscriptions feature)'],
  summary: 'Update plan',
  description:
    'This method allows you to add necessary changes to a created plan. They won’t affect users who have already paid; however, the changes will take effect when a new payment is to be made.',
  operationId: 'updatePlan',
  request: {
    params: z.object({
      'plan-id': z
        .string()
        .openapi({
          param: { in: 'path', name: 'plan-id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z.number().exactOptional().openapi({ example: 2 }),
              currency: z.string().exactOptional().openapi({ example: 'usd' }),
              interval_day: z.number().exactOptional().openapi({ example: 1 }),
              title: z.string().exactOptional().openapi({ example: 'test plan' }),
            })
            .openapi({ required: [] }),
          example: { amount: 2, currency: 'usd', interval_day: 1, title: 'test plan' },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getV1SubscriptionsSubIdRoute = createRoute({
  method: 'get',
  path: '/v1/subscriptions/{sub_id}',
  tags: ['Recurring Payments API (Email Subscriptions feature)'],
  summary: 'Get one recurring payment',
  description:
    'Get information about a particular recurring payment via its ID.\n\nHere’s the list of available statuses:  \n\\- WAITING_PAY  \n\\- PAID  \n\\- PARTIALLY_PAID  \n\\- EXPIRED',
  operationId: 'getOneRecurringPayment',
  request: {
    params: z.object({
      sub_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sub_id', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'x-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'x-api-key',
            schema: { example: '{{your_api_key}}', type: 'string' },
            required: false,
          },
          example: '{{your_api_key}}',
        }),
    }),
    body: { content: {} },
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .object({
                  created_at: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-09T22:15:50.808Z' }),
                  expire_date: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-12T00:02:00.025Z' }),
                  id: z.string().exactOptional().openapi({ example: '1515573197' }),
                  is_active: z.boolean().exactOptional().openapi({ example: true }),
                  status: z.string().exactOptional().openapi({ example: 'PAID' }),
                  subscriber: z
                    .object({
                      sub_partner_id: z.string().exactOptional().openapi({ example: '111394288' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  subscription_plan_id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '111394288' }),
                  updated_at: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2022-10-09T22:15:50.808Z' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '200': {
              value: {
                result: {
                  created_at: '2022-10-09T22:15:50.808Z',
                  expire_date: '2022-10-12T00:02:00.025Z',
                  id: '1515573197',
                  is_active: true,
                  status: 'PAID',
                  subscriber: { sub_partner_id: '111394288' },
                  subscription_plan_id: '111394288',
                  updated_at: '2022-10-09T22:15:50.808Z',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: '404',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional().openapi({ example: 'NOT_FOUND' }),
              message: z.string().exactOptional().openapi({ example: 'subscription not found' }),
              status: z.boolean().exactOptional().openapi({ example: false }),
              statusCode: z.number().exactOptional().openapi({ example: 404 }),
            })
            .openapi({ required: [] }),
          examples: {
            '404': {
              value: {
                code: 'NOT_FOUND',
                message: 'subscription not found',
                status: false,
                statusCode: 404,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteV1SubscriptionsSubIdRoute = createRoute({
  method: 'delete',
  path: '/v1/subscriptions/{sub_id}',
  tags: ['Recurring Payments API (Email Subscriptions feature)'],
  summary: 'Delete recurring payment',
  description:
    'Completely removes a particular payment from the recurring payment plan.  \nYou need to specify the payment plan id in the request.',
  operationId: 'deleteRecurringPayment',
  request: {
    params: z.object({
      sub_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sub_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: {
    200: {
      description: '200',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.string().exactOptional().openapi({ example: 'ok' }) })
            .openapi({ required: [] }),
          examples: { '200': { value: { result: 'ok' } } },
        },
      },
    },
    404: {
      description: '404',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional().openapi({ example: 'NOT_FOUND' }),
              message: z.string().exactOptional().openapi({ example: 'subscription not found' }),
              status: z.boolean().exactOptional().openapi({ example: false }),
              statusCode: z.number().exactOptional().openapi({ example: 404 }),
            })
            .openapi({ required: [] }),
          examples: {
            '404': {
              value: {
                code: 'NOT_FOUND',
                message: 'subscription not found',
                status: false,
                statusCode: 404,
              },
            },
          },
        },
      },
    },
  },
})
