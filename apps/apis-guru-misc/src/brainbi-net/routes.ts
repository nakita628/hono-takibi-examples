import { createRoute, z } from '@hono/zod-openapi'

export const getApiAnalyzePricingRoute = createRoute({
  method: 'get',
  path: '/api/analyze/pricing',
  tags: ['Products'],
  summary: '[BETA] Scrape Product Copy',
  description: 'To update a product, please use the listed attributes listed underneath. ',
  operationId: '[beta]ScrapeProductCopy',
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'url',
            schema: {
              example: 'https://www.apple.com/de/shop/buy-homepod/homepod-mini',
              type: 'string',
            },
            required: false,
          },
          example: 'https://www.apple.com/de/shop/buy-homepod/homepod-mini',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const getApiCustomersRoute = createRoute({
  method: 'get',
  path: '/api/customers',
  tags: ['Customers'],
  summary: 'Customers',
  description: 'This resource lists all cusomters that are currently saved in your account.',
  operationId: 'customers',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postApiLoginRoute = createRoute({
  method: 'post',
  path: '/api/login',
  summary: 'Login and get bearer token',
  description:
    'Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.',
  operationId: 'loginAndGetBearerToken',
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The same email you use for our platform.',
            in: 'query',
            name: 'email',
            schema: { example: '{{email}}', type: 'string' },
            required: false,
          },
          example: '{{email}}',
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The password email you use for our platform.',
            in: 'query',
            name: 'password',
            schema: { example: '{{password}}', type: 'string' },
            required: false,
          },
          example: '{{password}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postApiLogoutRoute = createRoute({
  method: 'post',
  path: '/api/logout',
  summary: 'Logout',
  description: 'Once you are done, call this endpoint to lock your account!',
  operationId: 'logout',
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The same email you use for our platform.',
            in: 'query',
            name: 'email',
            schema: { example: '{{email}}', type: 'string' },
            required: false,
          },
          example: '{{email}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiOrdersRoute = createRoute({
  method: 'get',
  path: '/api/orders',
  tags: ['Orders'],
  summary: 'Orders',
  description: 'This resource lists all orders that are currently saved in your account.',
  operationId: 'orders',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const deleteApiOrders1137Route = createRoute({
  method: 'delete',
  path: '/api/orders/1137',
  tags: ['Orders'],
  summary: 'Orders',
  description: 'Orders',
  operationId: 'orders1',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const getApiProductsRoute = createRoute({
  method: 'get',
  path: '/api/products',
  tags: ['Products'],
  summary: 'Products',
  description: 'This resource lists all products that are currently saved in you account.',
  operationId: 'products',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const deleteApiProducts1137Route = createRoute({
  method: 'delete',
  path: '/api/products/1137',
  tags: ['Products'],
  summary: 'Products',
  description: 'Products',
  operationId: 'products1',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiRegisterRoute = createRoute({
  method: 'post',
  path: '/api/register',
  summary: 'Register',
  description:
    'Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.',
  operationId: 'register',
  request: {
    query: z.object({
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'first_name',
            schema: { example: 'Felix', type: 'string' },
            required: false,
          },
          example: 'Felix',
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'last_name',
            schema: { example: 'Weber', type: 'string' },
            required: false,
          },
          example: 'Weber',
        }),
      company_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'company_name',
            schema: { example: 'Fiverr', type: 'string' },
            required: false,
          },
          example: 'Fiverr',
        }),
      shop_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'shop_url',
            schema: { example: 'https;//www.fiverr.de', type: 'string' },
            required: false,
          },
          example: 'https;//www.fiverr.de',
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'email',
            schema: { example: 'fiverr2@fiverr.de', type: 'string' },
            required: false,
          },
          example: 'fiverr2@fiverr.de',
        }),
      store_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'store_name',
            schema: { example: 'Fiverr Store', type: 'string' },
            required: false,
          },
          example: 'Fiverr Store',
        }),
      store_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'store_url',
            schema: { example: 'https;//www.fiverr.de', type: 'string' },
            required: false,
          },
          example: 'https;//www.fiverr.de',
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'password',
            schema: { example: '12345678', type: 'string' },
            required: false,
          },
          example: '12345678',
        }),
      fromuser: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required (always 1)',
            in: 'query',
            name: 'fromuser',
            schema: { example: '1', type: 'string' },
            required: false,
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postApiRegisterWoocommerceRoute = createRoute({
  method: 'post',
  path: '/api/register_woocommerce',
  summary: 'Register and Create Store Connection for WooCommerce',
  description:
    'Use this endpoint to make the initial call with your email and password (same as on brainbi.net) and get your bearer token in response.',
  operationId: 'registerAndCreateStoreConnectionForWooCommerce',
  request: {
    query: z.object({
      first_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'first_name',
            schema: { example: 'Felix', type: 'string' },
            required: false,
          },
          example: 'Felix',
        }),
      last_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'last_name',
            schema: { example: 'Weber', type: 'string' },
            required: false,
          },
          example: 'Weber',
        }),
      company_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'company_name',
            schema: { example: 'Fiverr', type: 'string' },
            required: false,
          },
          example: 'Fiverr',
        }),
      shop_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'shop_url',
            schema: { example: 'https;//www.fiverr.de', type: 'string' },
            required: false,
          },
          example: 'https;//www.fiverr.de',
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'email',
            schema: { example: 'fiver3r23@fiverr.de', type: 'string' },
            required: false,
          },
          example: 'fiver3r23@fiverr.de',
        }),
      store_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'store_name',
            schema: { example: 'Fiverr Store', type: 'string' },
            required: false,
          },
          example: 'Fiverr Store',
        }),
      store_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'store_url',
            schema: { example: 'https;//www.fiverr.de', type: 'string' },
            required: false,
          },
          example: 'https;//www.fiverr.de',
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'password',
            schema: { example: '12345678', type: 'string' },
            required: false,
          },
          example: '12345678',
        }),
      fromuser: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required (always 1)',
            in: 'query',
            name: 'fromuser',
            schema: { example: '1', type: 'string' },
            required: false,
          },
          example: '1',
        }),
      api_url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'api_url',
            schema: {
              example: 'https://woocommerce-351439-1090797.cloudwaysapps.com/',
              type: 'string',
            },
            required: false,
          },
          example: 'https://woocommerce-351439-1090797.cloudwaysapps.com/',
        }),
      consumer_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'consumer_key',
            schema: { example: 'ck_59b23d313ae372feaf211652c318fbe4501abda2', type: 'string' },
            required: false,
          },
          example: 'ck_59b23d313ae372feaf211652c318fbe4501abda2',
        }),
      consumer_secret: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'required',
            in: 'query',
            name: 'consumer_secret',
            schema: { example: 'cs_acc202d648bfa6b69efe553bb25086230ba116a7', type: 'string' },
            required: false,
          },
          example: 'cs_acc202d648bfa6b69efe553bb25086230ba116a7',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiRuleRoute = createRoute({
  method: 'get',
  path: '/api/rule',
  tags: ['Pricing Rules'],
  summary: 'Rules',
  description: 'This resource lists all pricing rules that are currently saved in you account.',
  operationId: 'rules',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiRuleRuleData1Route = createRoute({
  method: 'get',
  path: '/api/rule/ruleData/1',
  tags: ['Pricing Rules'],
  summary: 'Rule Data',
  description: 'This resource lists all data that wa saved for pricing rules.',
  operationId: 'ruleData',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiRuleRuleData1LatestRoute = createRoute({
  method: 'get',
  path: '/api/rule/ruleData/1/latest',
  tags: ['Pricing Rules'],
  summary: 'Rule Data Latest',
  description: 'This resource lists only the latest data point that wa saved for a pricing rule.',
  operationId: 'ruleDataLatest',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiSeoRankingLatestRoute = createRoute({
  method: 'get',
  path: '/api/seo/ranking/latest',
  tags: ['SEO'],
  summary: 'SEO Latest Rankings',
  description: 'This resource lists all pricing rules that are currently saved in you account.',
  operationId: 'seoLatestRankings',
  request: {
    query: z.object({
      '': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: '',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})
