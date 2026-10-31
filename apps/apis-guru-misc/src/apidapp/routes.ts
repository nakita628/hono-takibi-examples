import { createRoute, z } from '@hono/zod-openapi'

const EmptySchema = z.object({}).openapi({ title: 'Empty Schema' }).openapi('Empty')

const Key2SecurityScheme = {
  in: 'header',
  name: 'X-Api-Key',
  type: 'apiKey',
  'x-amazon-apigateway-authtype': 'custom',
}

export const optionsRoute = createRoute({
  method: 'options',
  path: '/',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postAccountRoute = createRoute({
  method: 'post',
  path: '/account',
  description: 'Create new account',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsAccountRoute = createRoute({
  method: 'options',
  path: '/account',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getAccountIdRoute = createRoute({
  method: 'get',
  path: '/account/{id}',
  description: 'Get account balance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsAccountIdRoute = createRoute({
  method: 'options',
  path: '/account/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getBlockRoute = createRoute({
  method: 'get',
  path: '/block',
  description: 'Access detailed block information',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsBlockRoute = createRoute({
  method: 'options',
  path: '/block',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getBlockIdRoute = createRoute({
  method: 'get',
  path: '/block/{id}',
  description: 'Get information about particular block',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsBlockIdRoute = createRoute({
  method: 'options',
  path: '/block/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getBlockIdTransactionRoute = createRoute({
  method: 'get',
  path: '/block/{id}/transaction',
  description: 'Get transaction count within block',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsBlockIdTransactionRoute = createRoute({
  method: 'options',
  path: '/block/{id}/transaction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getBlockIdTransactionIndexRoute = createRoute({
  method: 'get',
  path: '/block/{id}/transaction/{index}',
  description: 'Get information about particular transaction within block',
  request: {
    params: z.object({
      index: z
        .string()
        .openapi({
          param: { in: 'path', name: 'index', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsBlockIdTransactionIndexRoute = createRoute({
  method: 'options',
  path: '/block/{id}/transaction/{index}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      index: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'index',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getBlockchainRoute = createRoute({
  method: 'get',
  path: '/blockchain',
  description: 'Get a list of supported blockchains',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsBlockchainRoute = createRoute({
  method: 'options',
  path: '/blockchain',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getBlockchainIdRoute = createRoute({
  method: 'get',
  path: '/blockchain/{id}',
  description: 'Get information about blockchain woth given id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsBlockchainIdRoute = createRoute({
  method: 'options',
  path: '/blockchain/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postContractRoute = createRoute({
  method: 'post',
  path: '/contract',
  description: 'Create a new smart contract',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsContractRoute = createRoute({
  method: 'options',
  path: '/contract',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getContractIdRoute = createRoute({
  method: 'get',
  path: '/contract/{id}',
  description: 'Get contract balance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const postContractIdRoute = createRoute({
  method: 'post',
  path: '/contract/{id}',
  description: 'Call the contract',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsContractIdRoute = createRoute({
  method: 'options',
  path: '/contract/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const optionsEchoRoute = createRoute({
  method: 'options',
  path: '/echo',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getErc20Route = createRoute({
  method: 'get',
  path: '/erc20',
  description: 'Get token information such as name, total amount in circulation, etc',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postErc20Route = createRoute({
  method: 'post',
  path: '/erc20',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsErc20Route = createRoute({
  method: 'options',
  path: '/erc20',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getErc20AddressRoute = createRoute({
  method: 'get',
  path: '/erc20/{address}',
  description: 'Get information amout token balance in the account',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: { in: 'path', name: 'address', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postErc20AddressRoute = createRoute({
  method: 'post',
  path: '/erc20/{address}',
  description: 'Transfer tokens to another account',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: { in: 'path', name: 'address', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsErc20AddressRoute = createRoute({
  method: 'options',
  path: '/erc20/{address}',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getKeyRoute = createRoute({
  method: 'get',
  path: '/key',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'token', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postKeyRoute = createRoute({
  method: 'post',
  path: '/key',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsKeyRoute = createRoute({
  method: 'options',
  path: '/key',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const deleteKeyKeyRoute = createRoute({
  method: 'delete',
  path: '/key/{key}',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsKeyKeyRoute = createRoute({
  method: 'options',
  path: '/key/{key}',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postTransactionRoute = createRoute({
  method: 'post',
  path: '/transaction',
  description: 'Create a new transaction. Transfer Ether between accounts',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsTransactionRoute = createRoute({
  method: 'options',
  path: '/transaction',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getTransactionHashRoute = createRoute({
  method: 'get',
  path: '/transaction/{hash}',
  description: 'Get information about transaction by the transaction hash value',
  request: {
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'hash', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsTransactionHashRoute = createRoute({
  method: 'options',
  path: '/transaction/{hash}',
  request: {
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'hash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getTransactionHashReceiptRoute = createRoute({
  method: 'get',
  path: '/transaction/{hash}/receipt',
  description: 'Get receipt detail information',
  request: {
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: { in: 'path', name: 'hash', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ Key2: [] }],
})

export const optionsTransactionHashReceiptRoute = createRoute({
  method: 'options',
  path: '/transaction/{hash}/receipt',
  request: {
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'hash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  description: 'Get API version info',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const optionsVersionRoute = createRoute({
  method: 'options',
  path: '/version',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getWalletRoute = createRoute({
  method: 'get',
  path: '/wallet',
  description: 'Get current account balance',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postWalletRoute = createRoute({
  method: 'post',
  path: '/wallet',
  description: 'Create personal wallet',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsWalletRoute = createRoute({
  method: 'options',
  path: '/wallet',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getWalletAccountRoute = createRoute({
  method: 'get',
  path: '/wallet/account',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postWalletAccountRoute = createRoute({
  method: 'post',
  path: '/wallet/account',
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsWalletAccountRoute = createRoute({
  method: 'options',
  path: '/wallet/account',
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getWalletAccountIdRoute = createRoute({
  method: 'get',
  path: '/wallet/account/{id}',
  description: 'Get account balance',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsWalletAccountIdRoute = createRoute({
  method: 'options',
  path: '/wallet/account/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postWalletAccountIdContractRoute = createRoute({
  method: 'post',
  path: '/wallet/account/{id}/contract',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postWalletAccountIdErc20Route = createRoute({
  method: 'post',
  path: '/wallet/account/{id}/erc20',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const postWalletAccountIdPayRoute = createRoute({
  method: 'post',
  path: '/wallet/account/{id}/pay',
  description: 'Send payment from the account held within the wallet',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '200 response', content: { 'application/json': { schema: EmptySchema } } },
  },
})

export const optionsWalletAccountIdPayRoute = createRoute({
  method: 'options',
  path: '/wallet/account/{id}/pay',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '200 response',
      content: { 'application/json': { schema: EmptySchema } },
      headers: z.object({
        'Access-Control-Allow-Headers': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Methods': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Access-Control-Allow-Origin': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})
