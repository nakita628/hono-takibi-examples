import { createRoute, z } from '@hono/zod-openapi'

export const postVCustomPricesRulesRoute = createRoute({
  method: 'post',
  path: '/_v/custom-prices/rules',
  tags: ['Price Association'],
  summary: 'Create price association',
  description: 'Creates a new price association for a shopping scenario',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .any()
                .default('')
                .exactOptional()
                .openapi({ description: "User's email", title: 'email' }),
              orderType: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Order type', title: 'orderType' }),
              pricetable: z
                .string()
                .default('')
                .openapi({
                  description: 'Name of the Price Table associated with the scenario',
                  title: 'pricetable',
                }),
              state: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Delivery location', title: 'state' }),
            })
            .openapi({ required: ['pricetable'], default: {} }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .any()
                .default('')
                .exactOptional()
                .openapi({ description: "User's email", title: 'email' }),
              id: z
                .int()
                .openapi({ description: 'Price association ID', title: 'id', default: '' }),
              orderType: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Order type', title: 'orderType' }),
              pricetable: z
                .string()
                .default('')
                .openapi({
                  description: 'Name of the Price Table associated with the scenario',
                  title: 'pricetable',
                }),
              state: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Delivery location', title: 'state' }),
            })
            .openapi({ required: ['id', 'pricetable'], default: {} }),
        },
      },
    },
  },
})

export const getVCustomPricesRulesPriceAssociationIdRoute = createRoute({
  method: 'get',
  path: '/_v/custom-prices/rules/{priceAssociationId}',
  tags: ['Price Association'],
  summary: 'Get price association by ID',
  description: 'Retrieves price association for a shopping scenario by its ID',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      priceAssociationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Price Association unique identifier',
            in: 'path',
            name: 'priceAssociationId',
            required: true,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .any()
                .default('')
                .exactOptional()
                .openapi({ description: "User's email", title: 'email' }),
              id: z
                .int()
                .openapi({ description: 'Price association ID', title: 'id', default: '' }),
              orderType: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Order type', title: 'orderType' }),
              pricetable: z
                .string()
                .default('')
                .openapi({
                  description: 'Name of the Price Table associated with the scenario',
                  title: 'pricetable',
                }),
              state: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Delivery location', title: 'state' }),
            })
            .openapi({ required: ['id', 'pricetable'], default: {} }),
        },
      },
    },
  },
})

export const putVCustomPricesRulesPriceAssociationIdRoute = createRoute({
  method: 'put',
  path: '/_v/custom-prices/rules/{priceAssociationId}',
  tags: ['Price Association'],
  summary: 'Update price association by ID',
  description: 'Updates a price association for a shopping scenario by its ID',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      priceAssociationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Price Association unique identifier',
            in: 'path',
            name: 'priceAssociationId',
            required: true,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              orderType: z
                .string()
                .default('orderType')
                .openapi({ description: 'Order type', title: 'orderType' }),
              pricetable: z
                .string()
                .default('pricetable1')
                .openapi({
                  description: 'Name of the Price Table associated with the scenario',
                  title: 'pricetable',
                }),
              state: z
                .string()
                .default('RR')
                .openapi({ description: 'Delivery location', title: 'state' }),
            })
            .openapi({
              required: ['orderType', 'state', 'pricetable'],
              title: 'Request body',
              default: {},
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .any()
                .default('')
                .exactOptional()
                .openapi({ description: "User's email", title: 'email' }),
              id: z
                .int()
                .openapi({ description: 'Price association ID', title: 'id', default: '' }),
              orderType: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Order type', title: 'orderType' }),
              pricetable: z
                .string()
                .default('')
                .openapi({
                  description: 'Name of the Price Table associated with the scenario',
                  title: 'pricetable',
                }),
              state: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Delivery location', title: 'state' }),
            })
            .openapi({ required: ['id', 'pricetable'], default: {} }),
        },
      },
    },
  },
})

export const deleteVCustomPricesRulesPriceAssociationIdRoute = createRoute({
  method: 'delete',
  path: '/_v/custom-prices/rules/{priceAssociationId}',
  tags: ['Price Association'],
  summary: 'Disassociate price association by ID',
  description: 'Disassociates a price association from a shopping scenario by its ID',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      priceAssociationId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Price Association unique identifier',
            in: 'path',
            name: 'priceAssociationId',
            required: true,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .string()
            .default(
              'Rule deleted with success: custom_prices-5dc4f3d6-dda6-11ea-835b-12d97a7637bf',
            ),
        },
      },
    },
  },
})

export const getVCustomPricesSessionSchemaRoute = createRoute({
  method: 'get',
  path: '/_v/custom-prices/session/schema',
  tags: ['Custom Prices'],
  summary: 'Get custom prices schema',
  description: 'Retrieves all custom price for all shopping scenarios',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .default('orderType')
                        .openapi({ description: 'Criteria name', title: 'name' }),
                      type: z
                        .string()
                        .default('string')
                        .openapi({ description: 'Criteria type', title: 'type' }),
                    })
                    .default({ name: 'orderType', type: 'string' })
                    .openapi({ required: ['name', 'type'] }),
                )
                .default([
                  { name: 'orderType', type: 'string' },
                  { name: 'state', type: 'string' },
                ])
                .openapi({ description: 'Order Configuration criteria', title: 'fields' }),
              useEmail: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If the custom price should use the user's e-mail to validate it",
                  title: 'useEmail',
                }),
            })
            .default({
              fields: [
                { name: 'orderType', type: 'string' },
                { name: 'state', type: 'string' },
              ],
              useEmail: true,
            })
            .openapi({ required: ['fields'], title: 'Request body' }),
        },
      },
    },
  },
})

export const postVCustomPricesSessionSchemaRoute = createRoute({
  method: 'post',
  path: '/_v/custom-prices/session/schema',
  tags: ['Custom Prices'],
  summary: 'Create or Update custom prices schema',
  description: 'Creates a new custom price for a shopping scenario or updates an existing one',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .default('orderType')
                        .openapi({ description: 'Criteria name', title: 'name' }),
                      type: z
                        .string()
                        .default('string')
                        .openapi({ description: 'Criteria type', title: 'type' }),
                    })
                    .default({ name: 'orderType', type: 'string' })
                    .openapi({ required: ['name', 'type'] }),
                )
                .default([
                  { name: 'orderType', type: 'string' },
                  { name: 'state', type: 'string' },
                ])
                .openapi({ description: 'Order Configuration criteria', title: 'fields' }),
              useEmail: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If the custom price should use the user's e-mail to validate it",
                  title: 'useEmail',
                }),
            })
            .default({
              fields: [
                { name: 'orderType', type: 'string' },
                { name: 'state', type: 'string' },
              ],
              useEmail: true,
            })
            .openapi({ required: ['fields'], title: 'Request body' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .default('orderType')
                        .openapi({ description: 'Criteria name', title: 'name' }),
                      type: z
                        .string()
                        .default('string')
                        .openapi({ description: 'Criteria type', title: 'type' }),
                    })
                    .default({ name: 'orderType', type: 'string' })
                    .openapi({ required: ['name', 'type'] }),
                )
                .default([
                  { name: 'orderType', type: 'string' },
                  { name: 'state', type: 'string' },
                ])
                .openapi({ description: 'Order Configuration criteria', title: 'fields' }),
              useEmail: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description: "If the custom price should use the user's e-mail to validate it",
                  title: 'useEmail',
                }),
            })
            .default({
              fields: [
                { name: 'orderType', type: 'string' },
                { name: 'state', type: 'string' },
              ],
              useEmail: true,
            })
            .openapi({ required: ['fields'], title: 'Request body' }),
        },
      },
    },
  },
})

export const postSessionsIndexRoute = createRoute({
  method: 'post',
  path: '/sessions/',
  tags: ['Session Management'],
  summary: 'Update Order Configuration',
  description:
    'Updates the Order Configuration. You should use this route every time you edit a configuration value',
  request: {
    headers: z.object({
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
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              public: z
                .object({
                  customSessionKeys: z
                    .object({
                      value: z
                        .string()
                        .default('')
                        .openapi({ description: 'Order Configuration criteria', title: 'value' }),
                    })
                    .default({ value: '{"state":"ES","orderType":"res"}' })
                    .openapi({
                      description:
                        'Contains every schema criteria. This is a serialized JSON object',
                      required: ['value'],
                      title: 'customSessionKeys',
                    }),
                })
                .openapi({
                  description: 'Object to register session criteria',
                  required: ['customSessionKeys'],
                  title: 'public',
                  default: {},
                }),
            })
            .openapi({ description: '', required: ['public'], title: 'Request Body', default: {} }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: z.any() } } } },
})
