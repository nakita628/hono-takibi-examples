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
      .openapi({ type: 'integer', format: 'int64' }),
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
      .openapi({ type: 'integer', format: 'int64' }),
    quantity: z.int32().exactOptional(),
    shipDate: z.iso.datetime({ offset: true }).exactOptional(),
    status: z
      .enum(['placed', 'approved', 'delivered'])
      .exactOptional()
      .openapi({ description: 'Order Status' }),
    complete: z.boolean().default(false).exactOptional(),
  })
  .openapi({ xml: { name: 'Order' }, required: [] })
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
      .openapi({ type: 'integer', format: 'int64' }),
    name: z.string().exactOptional(),
  })
  .openapi({ xml: { name: 'Category' }, required: [] })
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
      .openapi({ type: 'integer', format: 'int64' }),
    username: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    password: z.string().exactOptional(),
    phone: z.string().exactOptional(),
    userStatus: z.int32().exactOptional().openapi({ description: 'User Status' }),
  })
  .openapi({ xml: { name: 'User' }, required: [] })
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
  .openapi({ xml: { name: 'Tag' }, required: [] })
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
      .default(40n)
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', default: 40, readOnly: true, example: 25 }),
    category: CategorySchema.exactOptional(),
    name: z.string().openapi({ example: 'doggie' }),
    photoUrls: z
      .array(z.string().openapi({ example: 'https://example.com/photo.png' }))
      .openapi({ xml: { name: 'photoUrl', wrapped: true } }),
    tags: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ xml: { name: 'tag', wrapped: true } }),
    status: z
      .enum(['available', 'pending', 'sold'])
      .exactOptional()
      .openapi({ description: 'pet status in the store' }),
  })
  .openapi({ required: ['name', 'photoUrls'], xml: { name: 'Pet' } })
  .openapi('Pet')

const ApiResponseSchema = z
  .object({
    code: z.int32().exactOptional(),
    type: z.string().exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiResponse')

const PetRequestBody = {
  description: 'Pet object that needs to be added to the store',
  content: { 'application/json': { schema: PetSchema }, 'application/xml': { schema: PetSchema } },
  required: true,
}

const UserArrayRequestBody = {
  description: 'List of user object',
  content: { 'application/json': { schema: z.array(UserSchema) } },
  required: true,
}

const PetstoreAuthSecurityScheme = {
  type: 'oauth2',
  flows: {
    implicit: {
      authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
      scopes: { 'write:pets': 'modify pets in your account', 'read:pets': 'read your pets' },
    },
  },
}

const ApiKeySecurityScheme = { type: 'apiKey', name: 'api_key', in: 'header' }

export const putPetRoute = createRoute({
  method: 'put',
  path: '/pet',
  tags: ['pet'],
  summary: 'Update an existing pet',
  operationId: 'updatePet',
  request: { body: PetRequestBody },
  responses: {
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Pet not found' },
    405: { description: 'Validation exception' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const postPetRoute = createRoute({
  method: 'post',
  path: '/pet',
  tags: ['pet'],
  summary: 'Add a new pet to the store',
  operationId: 'addPet',
  request: { body: PetRequestBody },
  responses: { 405: { description: 'Invalid input' } },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getPetFindByStatusRoute = createRoute({
  method: 'get',
  path: '/pet/findByStatus',
  tags: ['pet'],
  summary: 'Finds Pets by status',
  description: 'Multiple status values can be provided with comma separated strings',
  operationId: 'findPetsByStatus',
  request: {
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['available', 'pending', 'sold']).default('available')),
        )
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'Status values that need to be considered for filter',
            required: true,
            explode: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['available', 'pending', 'sold'],
                default: 'available',
              },
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/xml': { schema: z.array(PetSchema) },
        'application/json': { schema: z.array(PetSchema) },
      },
    },
    400: { description: 'Invalid status value' },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getPetFindByTagsRoute = createRoute({
  method: 'get',
  path: '/pet/findByTags',
  tags: ['pet'],
  summary: 'Finds Pets by tags',
  description:
    'Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
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
        'application/xml': { schema: z.array(PetSchema) },
        'application/json': { schema: z.array(PetSchema) },
      },
    },
    400: { description: 'Invalid tag value' },
  },
  deprecated: true,
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getPetPetIdRoute = createRoute({
  method: 'get',
  path: '/pet/{petId}',
  tags: ['pet'],
  summary: 'Find pet by ID',
  description: 'Returns a single pet',
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
        'application/xml': { schema: PetSchema },
        'application/json': { schema: PetSchema },
      },
    },
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Pet not found' },
    default: { description: 'successful response' },
  },
  security: [{ api_key: [] }],
})

export const postPetPetIdRoute = createRoute({
  method: 'post',
  path: '/pet/{petId}',
  tags: ['pet'],
  summary: 'Updates a pet in the store with form data',
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
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ description: 'Updated name of the pet' }),
              status: z
                .string()
                .exactOptional()
                .openapi({ description: 'Updated status of the pet' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 405: { description: 'Invalid input' } },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const deletePetPetIdRoute = createRoute({
  method: 'delete',
  path: '/pet/{petId}',
  tags: ['pet'],
  summary: 'Deletes a pet',
  operationId: 'deletePet',
  request: {
    headers: z.object({
      api_key: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'api_key', in: 'header', required: false, schema: { type: 'string' } },
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
  responses: { 400: { description: 'Invalid ID supplied' }, 404: { description: 'Pet not found' } },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const postPetPetIdUploadImageRoute = createRoute({
  method: 'post',
  path: '/pet/{petId}/uploadImage',
  tags: ['pet'],
  summary: 'Uploads an image',
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
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              additionalMetadata: z
                .string()
                .exactOptional()
                .openapi({ description: 'Additional data to pass to server' }),
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'file to upload' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
  security: [{ petstore_auth: ['write:pets', 'read:pets'] }],
})

export const getStoreInventoryRoute = createRoute({
  method: 'get',
  path: '/store/inventory',
  tags: ['store'],
  summary: 'Returns pet inventories by status',
  description: 'Returns a map of status codes to quantities',
  operationId: 'getInventory',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: z.record(z.string(), z.int32()) } },
    },
  },
  security: [{ api_key: [] }],
})

export const postStoreOrderRoute = createRoute({
  method: 'post',
  path: '/store/order',
  tags: ['store'],
  summary: 'Place an order for a pet',
  operationId: 'placeOrder',
  request: {
    body: {
      description: 'order placed for purchasing the pet',
      content: { 'application/json': { schema: OrderSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/xml': { schema: OrderSchema },
        'application/json': { schema: OrderSchema },
      },
    },
    400: { description: 'Invalid Order' },
  },
})

export const getStoreOrderOrderIdRoute = createRoute({
  method: 'get',
  path: '/store/order/{orderId}',
  tags: ['store'],
  summary: 'Find purchase order by ID',
  description:
    'For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions',
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
        }, z.int64().min(1n).max(10n))
        .openapi({
          param: {
            name: 'orderId',
            in: 'path',
            description: 'ID of pet that needs to be fetched',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1, maximum: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/xml': { schema: OrderSchema },
        'application/json': { schema: OrderSchema },
      },
    },
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Order not found' },
  },
})

export const deleteStoreOrderOrderIdRoute = createRoute({
  method: 'delete',
  path: '/store/order/{orderId}',
  tags: ['store'],
  summary: 'Delete purchase order by ID',
  description:
    'For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors',
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
        }, z.int64().min(1n))
        .openapi({
          param: {
            name: 'orderId',
            in: 'path',
            description: 'ID of the order that needs to be deleted',
            required: true,
            schema: { type: 'integer', format: 'int64', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    400: { description: 'Invalid ID supplied' },
    404: { description: 'Order not found' },
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  tags: ['user'],
  summary: 'Create user',
  description: 'This can only be done by the logged in user.',
  operationId: 'createUser',
  request: {
    body: {
      description: 'Created user object',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: { default: { description: 'successful operation' } },
})

export const postUserCreateWithArrayRoute = createRoute({
  method: 'post',
  path: '/user/createWithArray',
  tags: ['user'],
  summary: 'Creates list of users with given input array',
  operationId: 'createUsersWithArrayInput',
  request: { body: UserArrayRequestBody },
  responses: { default: { description: 'successful operation' } },
})

export const postUserCreateWithListRoute = createRoute({
  method: 'post',
  path: '/user/createWithList',
  tags: ['user'],
  summary: 'Creates list of users with given input array',
  operationId: 'createUsersWithListInput',
  request: { body: UserArrayRequestBody },
  responses: { default: { description: 'successful operation' } },
})

export const getUserLoginRoute = createRoute({
  method: 'get',
  path: '/user/login',
  tags: ['user'],
  summary: 'Logs user into the system',
  operationId: 'loginUser',
  request: {
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            description: 'The user name for login',
            required: true,
            schema: { type: 'string' },
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            name: 'password',
            in: 'query',
            description: 'The password for login in clear text',
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
  },
})

export const getUserLogoutRoute = createRoute({
  method: 'get',
  path: '/user/logout',
  tags: ['user'],
  summary: 'Logs out current logged in user session',
  operationId: 'logoutUser',
  responses: { default: { description: 'successful operation' } },
})

export const getUserUsernameRoute = createRoute({
  method: 'get',
  path: '/user/{username}',
  tags: ['user'],
  summary: 'Get user by user name',
  operationId: 'getUserByName',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            description: 'The name that needs to be fetched. Use user1 for testing. ',
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
        'application/xml': { schema: UserSchema },
        'application/json': { schema: UserSchema },
      },
    },
    400: { description: 'Invalid username supplied' },
    404: { description: 'User not found' },
  },
})

export const putUserUsernameRoute = createRoute({
  method: 'put',
  path: '/user/{username}',
  tags: ['user'],
  summary: 'Updated user',
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
            description: 'name that need to be updated',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Updated user object',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: {
    400: { description: 'Invalid user supplied' },
    404: { description: 'User not found' },
  },
})

export const deleteUserUsernameRoute = createRoute({
  method: 'delete',
  path: '/user/{username}',
  tags: ['user'],
  summary: 'Delete user',
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
    400: { description: 'Invalid username supplied' },
    404: { description: 'User not found' },
  },
})
