import { createRoute, z } from '@hono/zod-openapi'

const OrderSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    petId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 198772 }),
    quantity: z.int32().exactOptional().openapi({ example: 7 }),
    shipDate: z.iso.datetime({ offset: true }).exactOptional(),
    status: z
      .enum(['placed', 'approved', 'delivered'])
      .exactOptional()
      .openapi({ description: 'Order Status', example: 'approved' }),
    complete: z.boolean().exactOptional(),
  })
  .openapi({ xml: { name: 'order' }, required: [] })
  .openapi('Order')

const CategorySchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1 }),
    name: z.string().exactOptional().openapi({ example: 'Dogs' }),
  })
  .openapi({ xml: { name: 'category' }, required: [] })
  .openapi('Category')

const UserSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    username: z.string().exactOptional().openapi({ example: 'theUser' }),
    firstName: z.string().exactOptional().openapi({ example: 'John' }),
    lastName: z.string().exactOptional().openapi({ example: 'James' }),
    email: z.string().exactOptional().openapi({ example: 'john@email.com' }),
    password: z.string().exactOptional().openapi({ example: '12345' }),
    phone: z.string().exactOptional().openapi({ example: '12345' }),
    userStatus: z.int32().exactOptional().openapi({ description: 'User Status', example: 1 }),
  })
  .openapi({ xml: { name: 'user' }, required: [] })
  .openapi('User')

const TagSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'tag' }, required: [] })
  .openapi('Tag')

const PetSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 10 }),
    name: z.string().openapi({ example: 'doggie' }),
    category: CategorySchema.exactOptional(),
    photoUrls: z
      .array(z.string().openapi({ xml: { name: 'photoUrl' } }))
      .openapi({ xml: { wrapped: true } }),
    tags: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ xml: { wrapped: true } }),
    status: z
      .enum(['available', 'pending', 'sold'])
      .exactOptional()
      .openapi({ description: 'pet status in the store' }),
  })
  .openapi({ required: ['name', 'photoUrls'], xml: { name: 'pet' } })
  .openapi('Pet')

const ApiResponseSchema = z
  .object({
    code: z.int32().exactOptional(),
    type: z.string().exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ xml: { name: '##default' }, required: [] })
  .openapi('ApiResponse')

const PetRequestBody = {
  description: 'Pet object that needs to be added to the store',
  content: { 'application/json': { schema: PetSchema }, 'application/xml': { schema: PetSchema } },
}

const UserArrayRequestBody = {
  description: 'List of user object',
  content: { 'application/json': { schema: z.array(UserSchema) } },
}

const PetstoreAuthSecurityScheme = {
  type: 'oauth2',
  flows: {
    implicit: {
      authorizationUrl: 'https://petstore3.swagger.io/oauth/authorize',
      scopes: { 'write:pets': 'modify pets in your account', 'read:pets': 'read your pets' },
    },
  },
}

const ApiKeySecurityScheme = { type: 'apiKey', name: 'api_key', in: 'header' }

export const putPetRoute = createRoute({
  method: 'put',
  path: '/pet',
  tags: ['pet'],
  summary: 'Update an existing pet.',
  description: 'Update an existing pet by Id.',
  operationId: 'updatePet',
  request: {
    body: {
      description: 'Update an existent pet in the store',
      content: {
        'application/json': { schema: PetSchema },
        'application/xml': { schema: PetSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', example: 10 }),
              name: z.string().openapi({ example: 'doggie' }),
              category: z
                .object({
                  id: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', example: 1 }),
                  name: z.string().exactOptional().openapi({ example: 'Dogs' }),
                })
                .exactOptional()
                .openapi({ xml: { name: 'category' }, required: [] }),
              photoUrls: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ xml: { name: 'photoUrl' } })),
                )
                .openapi({ xml: { wrapped: true } }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        name: z.string().exactOptional(),
                      })
                      .openapi({ xml: { name: 'tag' }, required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ xml: { wrapped: true } }),
              status: z
                .enum(['available', 'pending', 'sold'])
                .exactOptional()
                .openapi({ description: 'pet status in the store' }),
            })
            .openapi({ required: ['name', 'photoUrls'], xml: { name: 'pet' } }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: PetSchema },
        'application/xml': { schema: PetSchema },
      },
    },
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Pet not found' },
    422: { description: 'Validation exception' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const postPetRoute = createRoute({
  method: 'post',
  path: '/pet',
  tags: ['pet'],
  summary: 'Add a new pet to the store.',
  description: 'Add a new pet to the store.',
  operationId: 'addPet',
  request: {
    body: {
      description: 'Create a new pet in the store',
      content: {
        'application/json': { schema: PetSchema },
        'application/xml': { schema: PetSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', example: 10 }),
              name: z.string().openapi({ example: 'doggie' }),
              category: z
                .object({
                  id: z
                    .preprocess((val) => {
                      if (
                        typeof val !== 'string' ||
                        !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                      )
                        return val
                      if (/^-?\d+$/.test(val)) return BigInt(val)
                      const num = Number(val)
                      return Number.isSafeInteger(num) ? BigInt(num) : val
                    }, z.int64())
                    .exactOptional()
                    .openapi({ type: 'integer', format: 'int64', example: 1 }),
                  name: z.string().exactOptional().openapi({ example: 'Dogs' }),
                })
                .exactOptional()
                .openapi({ xml: { name: 'category' }, required: [] }),
              photoUrls: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string().openapi({ xml: { name: 'photoUrl' } })),
                )
                .openapi({ xml: { wrapped: true } }),
              tags: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .object({
                        id: z
                          .preprocess((val) => {
                            if (
                              typeof val !== 'string' ||
                              !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                            )
                              return val
                            if (/^-?\d+$/.test(val)) return BigInt(val)
                            const num = Number(val)
                            return Number.isSafeInteger(num) ? BigInt(num) : val
                          }, z.int64())
                          .exactOptional()
                          .openapi({ type: 'integer', format: 'int64' }),
                        name: z.string().exactOptional(),
                      })
                      .openapi({ xml: { name: 'tag' }, required: [] }),
                  ),
                )
                .exactOptional()
                .openapi({ xml: { wrapped: true } }),
              status: z
                .enum(['available', 'pending', 'sold'])
                .exactOptional()
                .openapi({ description: 'pet status in the store' }),
            })
            .openapi({ required: ['name', 'photoUrls'], xml: { name: 'pet' } }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: PetSchema },
        'application/xml': { schema: PetSchema },
      },
    },
    400: { description: 'Invalid input' },
    422: { description: 'Validation exception' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getPetFindByStatusRoute = createRoute({
  method: 'get',
  path: '/pet/findByStatus',
  tags: ['pet'],
  summary: 'Finds Pets by status.',
  description: 'Multiple status values can be provided with comma separated strings.',
  operationId: 'findPetsByStatus',
  request: {
    query: z.object({
      status: z
        .enum(['available', 'pending', 'sold'])
        .default('available')
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Status values that need to be considered for filter',
            required: true,
            explode: true,
            schema: {
              type: 'string',
              default: 'available',
              enum: ['available', 'pending', 'sold'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: z.array(PetSchema) },
        'application/xml': { schema: z.array(PetSchema) },
      },
    },
    400: { description: 'Invalid status value' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getPetFindByTagsRoute = createRoute({
  method: 'get',
  path: '/pet/findByTags',
  tags: ['pet'],
  summary: 'Finds Pets by tags.',
  description:
    'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
  operationId: 'findPetsByTags',
  request: {
    query: z.object({
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            description: 'Tags to filter by',
            required: true,
            explode: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: z.array(PetSchema) },
        'application/xml': { schema: z.array(PetSchema) },
      },
    },
    400: { description: 'Invalid tag value' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getPetPetIdRoute = createRoute({
  method: 'get',
  path: '/pet/{petId}',
  tags: ['pet'],
  summary: 'Find pet by ID.',
  description: 'Returns a single pet.',
  operationId: 'getPetById',
  request: {
    params: z.object({
      petId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'petId',
            in: 'path',
            description: 'ID of pet to return',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PetSchema },
        'application/xml': { schema: PetSchema },
      },
    },
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Pet not found' },
    default: { description: 'Unexpected error' },
  },
  security: [{ api_key: [] }, { petstore_auth: ['write:pets', 'read:pets'] }],
})

export const postPetPetIdRoute = createRoute({
  method: 'post',
  path: '/pet/{petId}',
  tags: ['pet'],
  summary: 'Updates a pet in the store with form data.',
  description: 'Updates a pet resource based on the form data.',
  operationId: 'updatePetWithForm',
  request: {
    params: z.object({
      petId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'petId',
            in: 'path',
            description: 'ID of pet that needs to be updated',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of pet that needs to be updated',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Status of pet that needs to be updated',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: PetSchema },
        'application/xml': { schema: PetSchema },
      },
    },
    400: { description: 'Invalid input' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const deletePetPetIdRoute = createRoute({
  method: 'delete',
  path: '/pet/{petId}',
  tags: ['pet'],
  summary: 'Deletes a pet.',
  description: 'Delete a pet.',
  operationId: 'deletePet',
  request: {
    headers: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'api_key',
            in: 'header',
            description: '',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      petId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'petId',
            in: 'path',
            description: 'Pet id to delete',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Pet deleted' },
    400: { description: 'Invalid pet value' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const postPetPetIdUploadImageRoute = createRoute({
  method: 'post',
  path: '/pet/{petId}/uploadImage',
  tags: ['pet'],
  summary: 'Uploads an image.',
  description: 'Upload image of the pet.',
  operationId: 'uploadFile',
  request: {
    params: z.object({
      petId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'petId',
            in: 'path',
            description: 'ID of pet to update',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    query: z.object({
      additionalMetadata: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'additionalMetadata',
            in: 'query',
            description: 'Additional Metadata',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    400: { description: 'No file uploaded' },
    404: { description: 'Pet not found' },
    default: { description: 'Unexpected error' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getStoreInventoryRoute = createRoute({
  method: 'get',
  path: '/store/inventory',
  tags: ['store'],
  summary: 'Returns pet inventories by status.',
  description: 'Returns a map of status codes to quantities.',
  operationId: 'getInventory',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
    default: { description: 'Unexpected error' },
  },
  security: [{ api_key: [] }],
})

export const postStoreOrderRoute = createRoute({
  method: 'post',
  path: '/store/order',
  tags: ['store'],
  summary: 'Place an order for a pet.',
  description: 'Place a new order in the store.',
  operationId: 'placeOrder',
  request: {
    body: {
      content: {
        'application/json': { schema: OrderSchema },
        'application/xml': { schema: OrderSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', example: 10 }),
              petId: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', example: 198772 }),
              quantity: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ example: 7 }),
              shipDate: z.iso.datetime({ offset: true }).exactOptional(),
              status: z
                .enum(['placed', 'approved', 'delivered'])
                .exactOptional()
                .openapi({ description: 'Order Status', example: 'approved' }),
              complete: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
            })
            .openapi({ xml: { name: 'order' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: OrderSchema } },
    },
    400: { description: 'Invalid input' },
    422: { description: 'Validation exception' },
    default: { description: 'Unexpected error' },
  },
})

export const getStoreOrderOrderIdRoute = createRoute({
  method: 'get',
  path: '/store/order/{orderId}',
  tags: ['store'],
  summary: 'Find purchase order by ID.',
  description:
    'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
  operationId: 'getOrderById',
  request: {
    params: z.object({
      orderId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'orderId',
            in: 'path',
            description: 'ID of order that needs to be fetched',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: OrderSchema },
        'application/xml': { schema: OrderSchema },
      },
    },
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Order not found' },
    default: { description: 'Unexpected error' },
  },
})

export const deleteStoreOrderOrderIdRoute = createRoute({
  method: 'delete',
  path: '/store/order/{orderId}',
  tags: ['store'],
  summary: 'Delete purchase order by identifier.',
  description:
    'For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.',
  operationId: 'deleteOrder',
  request: {
    params: z.object({
      orderId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'orderId',
            in: 'path',
            description: 'ID of the order that needs to be deleted',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'order deleted' },
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Order not found' },
    default: { description: 'Unexpected error' },
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  tags: ['user'],
  summary: 'Create user.',
  description: 'This can only be done by the logged in user.',
  operationId: 'createUser',
  request: {
    body: {
      description: 'Created user object',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', example: 10 }),
              username: z.string().exactOptional().openapi({ example: 'theUser' }),
              firstName: z.string().exactOptional().openapi({ example: 'John' }),
              lastName: z.string().exactOptional().openapi({ example: 'James' }),
              email: z.string().exactOptional().openapi({ example: 'john@email.com' }),
              password: z.string().exactOptional().openapi({ example: '12345' }),
              phone: z.string().exactOptional().openapi({ example: '12345' }),
              userStatus: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'User Status', example: 1 }),
            })
            .openapi({ xml: { name: 'user' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
      },
    },
    default: { description: 'Unexpected error' },
  },
})

export const postUserCreateWithListRoute = createRoute({
  method: 'post',
  path: '/user/createWithList',
  tags: ['user'],
  summary: 'Creates list of users with given input array.',
  description: 'Creates list of users with given input array.',
  operationId: 'createUsersWithListInput',
  request: { body: { content: { 'application/json': { schema: z.array(UserSchema) } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
      },
    },
    default: { description: 'Unexpected error' },
  },
})

export const getUserLoginRoute = createRoute({
  method: 'get',
  path: '/user/login',
  tags: ['user'],
  summary: 'Logs user into the system.',
  description: 'Log into the system.',
  operationId: 'loginUser',
  request: {
    query: z.object({
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            description: 'The user name for login',
            required: false,
            schema: { type: 'string' },
          },
        }),
      password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'password',
            in: 'query',
            description: 'The password for login in clear text',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/xml': { schema: z.string() },
        'application/json': { schema: z.string() },
      },
      headers: z.object({
        'X-Rate-Limit': {
          description: 'calls per hour allowed by the user',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'calls per hour allowed by the user',
              param: { required: false },
            }),
        },
        'X-Expires-After': {
          description: 'date in UTC when token expires',
          schema: z.iso
            .datetime({ offset: true })
            .exactOptional()
            .openapi({ description: 'date in UTC when token expires', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Invalid username/password supplied' },
    default: { description: 'Unexpected error' },
  },
})

export const getUserLogoutRoute = createRoute({
  method: 'get',
  path: '/user/logout',
  tags: ['user'],
  summary: 'Logs out current logged in user session.',
  description: 'Log user out of the system.',
  operationId: 'logoutUser',
  responses: {
    200: { description: 'successful operation' },
    default: { description: 'Unexpected error' },
  },
})

export const getUserUsernameRoute = createRoute({
  method: 'get',
  path: '/user/{username}',
  tags: ['user'],
  summary: 'Get user by user name.',
  description: 'Get user detail based on username.',
  operationId: 'getUserByName',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            description: 'The name that needs to be fetched. Use user1 for testing',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
      },
    },
    400: { description: 'Invalid username supplied' },
    404: { description: 'User not found' },
    default: { description: 'Unexpected error' },
  },
})

export const putUserUsernameRoute = createRoute({
  method: 'put',
  path: '/user/{username}',
  tags: ['user'],
  summary: 'Update user resource.',
  description: 'This can only be done by the logged in user.',
  operationId: 'updateUser',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            description: 'name that need to be deleted',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Update an existent user in the store',
      content: {
        'application/json': { schema: UserSchema },
        'application/xml': { schema: UserSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              id: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({ type: 'integer', format: 'int64', example: 10 }),
              username: z.string().exactOptional().openapi({ example: 'theUser' }),
              firstName: z.string().exactOptional().openapi({ example: 'John' }),
              lastName: z.string().exactOptional().openapi({ example: 'James' }),
              email: z.string().exactOptional().openapi({ example: 'john@email.com' }),
              password: z.string().exactOptional().openapi({ example: '12345' }),
              phone: z.string().exactOptional().openapi({ example: '12345' }),
              userStatus: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional()
                .openapi({ description: 'User Status', example: 1 }),
            })
            .openapi({ xml: { name: 'user' }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'successful operation' },
    400: { description: 'bad request' },
    404: { description: 'user not found' },
    default: { description: 'Unexpected error' },
  },
})

export const deleteUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/user/{username}',
  tags: ['user'],
  summary: 'Delete user resource.',
  description: 'This can only be done by the logged in user.',
  operationId: 'deleteUser',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            description: 'The name that needs to be deleted',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'User deleted' },
    400: { description: 'Invalid username supplied' },
    404: { description: 'User not found' },
    default: { description: 'Unexpected error' },
  },
})
