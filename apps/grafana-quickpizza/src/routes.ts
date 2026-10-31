import { createRoute, z } from '@hono/zod-openapi'

const DoughSchema = z
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
    name: z.string().exactOptional().openapi({ example: 'Traditional' }),
    caloriesPerSlice: z.int().exactOptional().openapi({ example: 200 }),
  })
  .openapi({ required: [] })
  .openapi('Dough')

const IngredientSchema = z
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
    name: z.string().exactOptional().openapi({ example: 'Extra Virgin Olive Oil' }),
    caloriesPerSlice: z.int().exactOptional().openapi({ example: 120 }),
    vegetarian: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({ required: [] })
  .openapi('Ingredient')

const PizzaSchema = z
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
    name: z.string().max(64).exactOptional().openapi({ example: 'The Savory Margherita' }),
    dough: DoughSchema.exactOptional(),
    ingredients: z.array(IngredientSchema).exactOptional(),
    tool: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tool used to make the pizza', example: 'Wood Fired Oven' }),
  })
  .openapi({ required: [] })
  .openapi('Pizza')

const PizzaRecommendationSchema = z
  .object({
    pizza: PizzaSchema.exactOptional(),
    calories: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total calories per slice', example: 505 }),
    vegetarian: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the pizza is vegetarian', example: true }),
  })
  .openapi({ required: [] })
  .openapi('PizzaRecommendation')

const RatingSchema = z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true, example: 1 }),
    stars: z.int().min(1).max(5).openapi({ description: 'Rating score (1-5)', example: 5 }),
    pizza_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'ID of the pizza being rated',
        example: 1,
      }),
  })
  .openapi({ required: ['stars', 'pizza_id'] })
  .openapi('Rating')

const RestrictionsSchema = z
  .object({
    maxCaloriesPerSlice: z
      .int()
      .default(1000)
      .exactOptional()
      .openapi({ description: 'Maximum calories per slice', example: 800 }),
    mustBeVegetarian: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the pizza must be vegetarian', example: true }),
    excludedIngredients: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Ingredients to exclude', example: ['anchovies', 'bacon'] }),
    excludedTools: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tools to exclude', example: [] }),
    maxNumberOfToppings: z
      .int()
      .default(5)
      .exactOptional()
      .openapi({ description: 'Maximum number of toppings', example: 4 }),
    minNumberOfToppings: z
      .int()
      .default(3)
      .exactOptional()
      .openapi({ description: 'Minimum number of toppings', example: 2 }),
    customName: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({ description: 'Custom name for the pizza', example: 'My Special Pizza' }),
  })
  .openapi({ required: [] })
  .openapi('Restrictions')

const AuthTokenSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization',
  description: 'Authorization token header with format "Token {16 chars}"',
}

export const postApiPizzaRoute = createRoute({
  method: 'post',
  path: '/api/pizza',
  tags: ['pizza'],
  summary: 'Get a pizza recommendation',
  description: 'Returns a randomly generated pizza with ingredients, tool, and calories',
  operationId: 'getPizzaRecommendation',
  request: {
    body: {
      description: 'Restrictions for the pizza recommendation',
      content: {
        'application/json': {
          schema: RestrictionsSchema,
          example: {
            maxCaloriesPerSlice: 800,
            mustBeVegetarian: true,
            excludedIngredients: ['anchovies', 'bacon'],
            excludedTools: [],
            maxNumberOfToppings: 4,
            minNumberOfToppings: 2,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: PizzaRecommendationSchema,
          example: {
            pizza: {
              id: 1,
              name: 'The Savory Margherita',
              dough: { id: 1, name: 'Traditional', caloriesPerSlice: 200 },
              ingredients: [
                { id: 1, name: 'Extra Virgin Olive Oil', caloriesPerSlice: 120, vegetarian: true },
                { id: 2, name: 'San Marzano Tomatoes', caloriesPerSlice: 30, vegetarian: true },
                { id: 3, name: 'Buffalo Mozzarella', caloriesPerSlice: 150, vegetarian: true },
                { id: 4, name: 'Fresh Basil', caloriesPerSlice: 5, vegetarian: true },
              ],
              tool: 'Wood Fired Oven',
            },
            calories: 505,
            vegetarian: true,
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const getApiPizzaIdRoute = createRoute({
  method: 'get',
  path: '/api/pizza/{id}',
  tags: ['pizza'],
  summary: 'Get a specific pizza recommendation',
  description: 'Returns a specific pizza recommendation by ID',
  operationId: 'getPizzaById',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the pizza to get',
            required: true,
            schema: { type: 'integer', format: 'int64' },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PizzaSchema } },
    },
    404: { description: 'Pizza not found' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const getApiIngredientsTypeRoute = createRoute({
  method: 'get',
  path: '/api/ingredients/{type}',
  tags: ['pizza'],
  summary: 'Get ingredients by type',
  description: 'Returns ingredients of a specific type (olive_oil, tomato, mozzarella, topping)',
  operationId: 'getIngredientsByType',
  request: {
    params: z.object({
      type: z
        .enum(['olive_oil', 'tomato', 'mozzarella', 'topping'])
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'Type of ingredients to get',
            required: true,
            schema: { type: 'string', enum: ['olive_oil', 'tomato', 'mozzarella', 'topping'] },
            example: 'topping',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ ingredients: z.array(IngredientSchema).exactOptional() })
            .openapi({ required: [] }),
          example: {
            ingredients: [
              { id: 1, name: 'Pepperoni', caloriesPerSlice: 90, vegetarian: false },
              { id: 2, name: 'Mushrooms', caloriesPerSlice: 15, vegetarian: true },
            ],
          },
        },
      },
    },
    400: { description: 'Invalid ingredient type' },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const getApiDoughsRoute = createRoute({
  method: 'get',
  path: '/api/doughs',
  tags: ['pizza'],
  summary: 'Get all doughs',
  description: 'Returns all available dough types',
  operationId: 'getDoughs',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ doughs: z.array(DoughSchema).exactOptional() })
            .openapi({ required: [] }),
          example: {
            doughs: [
              { id: 1, name: 'Traditional', caloriesPerSlice: 200 },
              { id: 2, name: 'Thin Crust', caloriesPerSlice: 150 },
              { id: 3, name: 'Deep Dish', caloriesPerSlice: 300 },
            ],
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const getApiToolsRoute = createRoute({
  method: 'get',
  path: '/api/tools',
  tags: ['pizza'],
  summary: 'Get all tools',
  description: 'Returns all available pizza-making tools',
  operationId: 'getTools',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ tools: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
          example: { tools: ['Wood Fired Oven', 'Pizza Stone', 'Gas Oven', 'Electric Oven'] },
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const getApiRatingsRoute = createRoute({
  method: 'get',
  path: '/api/ratings',
  tags: ['ratings'],
  summary: 'Get all ratings by user',
  description: 'Returns all ratings made by the current user',
  operationId: 'getRatings',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ ratings: z.array(RatingSchema).exactOptional() })
            .openapi({ required: [] }),
          example: {
            ratings: [
              { id: 1, stars: 5, pizza_id: 1 },
              { id: 2, stars: 4, pizza_id: 2 },
            ],
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const postApiRatingsRoute = createRoute({
  method: 'post',
  path: '/api/ratings',
  tags: ['ratings'],
  summary: 'Create a new rating',
  description: 'Record a new pizza rating',
  operationId: 'createRating',
  request: {
    body: {
      description: 'Rating information',
      content: { 'application/json': { schema: RatingSchema, example: { stars: 5, pizza_id: 1 } } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Rating created successfully',
      content: {
        'application/json': { schema: RatingSchema, example: { id: 1, stars: 5, pizza_id: 1 } },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
  },
  security: [{ authToken: [] }],
})

export const deleteApiRatingsRoute = createRoute({
  method: 'delete',
  path: '/api/ratings',
  tags: ['ratings'],
  summary: 'Delete all ratings',
  description: 'Delete all ratings for the current user',
  operationId: 'deleteAllRatings',
  responses: {
    204: { description: 'All ratings deleted successfully' },
    401: { description: 'Unauthorized' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const getApiRatingsIdRoute = createRoute({
  method: 'get',
  path: '/api/ratings/{id}',
  tags: ['ratings'],
  summary: 'Get a specific rating',
  description: 'Get a specific rating by ID',
  operationId: 'getRatingById',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the rating to get',
            required: true,
            schema: { type: 'integer', format: 'int64' },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': { schema: RatingSchema, example: { id: 1, stars: 5, pizza_id: 1 } },
      },
    },
    401: { description: 'Unauthorized' },
    404: { description: 'Rating not found' },
    500: { description: 'Internal server error' },
  },
  security: [{ authToken: [] }],
})

export const putApiRatingsIdRoute = createRoute({
  method: 'put',
  path: '/api/ratings/{id}',
  tags: ['ratings'],
  summary: 'Update a rating',
  description: 'Update an existing rating',
  operationId: 'updateRating',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the rating to update',
            required: true,
            schema: { type: 'integer', format: 'int64' },
            example: 1,
          },
        }),
    }),
    body: {
      description: 'Updated rating',
      content: { 'application/json': { schema: RatingSchema, example: { stars: 4, pizza_id: 1 } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Rating updated successfully',
      content: {
        'application/json': { schema: RatingSchema, example: { id: 1, stars: 4, pizza_id: 1 } },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    404: { description: 'Rating not found' },
  },
  security: [{ authToken: [] }],
})

export const deleteApiRatingsIdRoute = createRoute({
  method: 'delete',
  path: '/api/ratings/{id}',
  tags: ['ratings'],
  summary: 'Delete a rating',
  description: 'Delete a rating by ID',
  operationId: 'deleteRating',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the rating to delete',
            required: true,
            schema: { type: 'integer', format: 'int64' },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Rating deleted successfully' },
    401: { description: 'Unauthorized' },
    404: { description: 'Rating not found' },
  },
  security: [{ authToken: [] }],
})

export const patchApiRatingsIdRoute = createRoute({
  method: 'patch',
  path: '/api/ratings/{id}',
  tags: ['ratings'],
  summary: 'Partially update a rating',
  description: 'Partially update an existing rating',
  operationId: 'patchRating',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'ID of the rating to update',
            required: true,
            schema: { type: 'integer', format: 'int64' },
            example: 1,
          },
        }),
    }),
    body: {
      description: 'Updated rating fields',
      content: { 'application/json': { schema: RatingSchema, example: { stars: 3 } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Rating updated successfully',
      content: {
        'application/json': { schema: RatingSchema, example: { id: 1, stars: 3, pizza_id: 1 } },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    404: { description: 'Rating not found' },
  },
  security: [{ authToken: [] }],
})

export const postApiUsersRoute = createRoute({
  method: 'post',
  path: '/api/users',
  tags: ['users'],
  summary: 'Register a new user',
  description: 'Create a new user account',
  operationId: 'registerUser',
  request: {
    body: {
      description: 'User registration information',
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().max(32), password: z.string() })
            .openapi({ required: ['username', 'password'] }),
          example: { username: 'pizzalover123', password: 'securepassword' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'User created successfully',
      content: {
        'application/json': {
          schema: z
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
            })
            .openapi({ required: [] }),
          example: { id: 1, username: 'pizzalover123' },
        },
      },
    },
    400: { description: 'Invalid input or username already taken' },
  },
})

export const postApiUsersTokenLoginRoute = createRoute({
  method: 'post',
  path: '/api/users/token/login',
  tags: ['users'],
  summary: 'User login',
  description: 'Authenticate a user and receive an auth token',
  operationId: 'loginUser',
  request: {
    query: z.object({
      set_cookie: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'set_cookie',
            in: 'query',
            description: 'Whether to set authentication cookie',
            required: false,
            schema: { type: 'boolean' },
            example: true,
          },
        }),
    }),
    body: {
      description: 'Login information',
      content: {
        'application/json': {
          schema: z
            .object({
              username: z.string(),
              password: z.string(),
              csrf: z.string().exactOptional(),
            })
            .openapi({ required: ['username', 'password'] }),
          example: {
            username: 'pizzalover123',
            password: 'securepassword',
            csrf: 'abc123def456ghi789',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Login successful',
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
          example: { token: 'abcdef1234567890' },
        },
      },
    },
    401: { description: 'Invalid credentials' },
  },
})

export const postApiUsersTokenLogoutRoute = createRoute({
  method: 'post',
  path: '/api/users/token/logout',
  tags: ['users'],
  summary: 'User logout',
  description: 'Invalidate the user token cookie',
  operationId: 'logoutUser',
  responses: { 200: { description: 'Logout successful' }, 401: { description: 'Unauthorized' } },
  security: [{ authToken: [] }],
})

export const postApiAdminLoginRoute = createRoute({
  method: 'post',
  path: '/api/admin/login',
  tags: ['users'],
  summary: 'Admin login',
  description: 'Login as an administrator',
  operationId: 'adminLogin',
  request: {
    query: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'query',
            description: 'Admin username',
            required: true,
            schema: { type: 'string' },
            example: 'admin',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            name: 'password',
            in: 'query',
            description: 'Admin password',
            required: true,
            schema: { type: 'string' },
            example: 'admin',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Admin login successful',
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
          example: { token: 'c7jn1o1kb71p30h7f1bg' },
        },
      },
      headers: z.object({
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'admin_token=c7jn1o1kb71p30h7f1bg; Path=/; SameSite=Strict',
            }),
        },
      }),
    },
    400: { description: 'Missing credentials' },
    401: { description: 'Invalid credentials' },
  },
})

export const postApiCsrfTokenRoute = createRoute({
  method: 'post',
  path: '/api/csrf-token',
  tags: ['users'],
  summary: 'Get CSRF token',
  description: 'Get a CSRF token for form submissions',
  operationId: 'getCsrfToken',
  responses: {
    200: {
      description: 'CSRF token set in cookies',
      headers: z.object({
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({
              param: { required: false },
              example: 'csrf_token=abc123def456ghi789; Path=/; SameSite=Strict',
            }),
        },
      }),
    },
  },
})

export const getApiQuotesRoute = createRoute({
  method: 'get',
  path: '/api/quotes',
  tags: ['pizza-text'],
  summary: 'Get pizza quotes',
  description: 'Returns a list of pizza-related quotes',
  operationId: 'getQuotes',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ quotes: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
          example: {
            quotes: [
              'Life is too short for bad pizza.',
              'A slice a day keeps the sadness away.',
              'In crust we trust.',
            ],
          },
        },
      },
    },
    500: { description: 'Internal server error' },
  },
})

export const getApiNamesRoute = createRoute({
  method: 'get',
  path: '/api/names',
  tags: ['pizza-text'],
  summary: 'Get classical names',
  description: 'Returns a list of classical names for pizza naming',
  operationId: 'getNames',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ names: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
          example: { names: ['Margherita', 'Napolitana', 'Quattro Formaggi', 'Diavola'] },
        },
      },
    },
    500: { description: 'Internal server error' },
  },
})

export const getApiAdjectivesRoute = createRoute({
  method: 'get',
  path: '/api/adjectives',
  tags: ['pizza-text'],
  summary: 'Get adjectives',
  description: 'Returns a list of adjectives for pizza naming',
  operationId: 'getAdjectives',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z
            .object({ adjectives: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
          example: { adjectives: ['Savory', 'Delicious', 'Crispy', 'Amazing'] },
        },
      },
    },
    500: { description: 'Internal server error' },
  },
})

export const getApiConfigRoute = createRoute({
  method: 'get',
  path: '/api/config',
  tags: ['system'],
  summary: 'Get application configuration',
  description: 'Get the current application configuration',
  operationId: 'getConfig',
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.string()),
          example: { version: '1.0.0', environment: 'development' },
        },
      },
    },
    500: { description: 'Internal server error' },
  },
})

export const getReadyRoute = createRoute({
  method: 'get',
  path: '/ready',
  tags: ['system'],
  summary: 'Readiness probe',
  description: 'Check if the application is ready to accept requests',
  operationId: 'readinessProbe',
  responses: {
    200: { description: 'Application is ready' },
    500: { description: 'Application is not ready' },
  },
})

export const getHealthzRoute = createRoute({
  method: 'get',
  path: '/healthz',
  tags: ['system'],
  summary: 'Liveness probe',
  description: 'Check if the application is live',
  operationId: 'livenessProbe',
  responses: {
    200: { description: 'Application is live' },
    500: { description: 'Application is not live' },
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['system'],
  summary: 'Prometheus metrics',
  description: 'Get Prometheus metrics',
  operationId: 'getMetrics',
  responses: {
    200: { description: 'Metrics returned', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getApiStatusStatusRoute = createRoute({
  method: 'get',
  path: '/api/status/{status}',
  tags: ['httptesting'],
  summary: 'Return specific status code',
  description:
    'Returns the specified HTTP status code. The status code must be between 100 and 599 (inclusive). Any values outside this range will result in a 400 Bad Request response.',
  operationId: 'getStatus',
  request: {
    params: z.object({
      status: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(100).max(599),
        )
        .openapi({
          param: {
            name: 'status',
            in: 'path',
            description: 'Status code to return (must be between 100 and 599 inclusive)',
            required: true,
            schema: { type: 'integer', minimum: 100, maximum: 599 },
            example: 418,
          },
        }),
    }),
  },
  responses: { default: { description: 'Response with the requested status code' } },
})

export const getApiBytesNRoute = createRoute({
  method: 'get',
  path: '/api/bytes/{n}',
  tags: ['httptesting'],
  summary: 'Get random bytes',
  description: 'Returns n random bytes',
  operationId: 'getBytes',
  request: {
    params: z.object({
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            name: 'n',
            in: 'path',
            description: 'Number of bytes to return',
            required: true,
            schema: { type: 'integer', minimum: 0 },
            example: 1024,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Random bytes',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getApiDelayDelayRoute = createRoute({
  method: 'get',
  path: '/api/delay/{delay}',
  tags: ['httptesting'],
  summary: 'Delayed response',
  description: 'Delays the response for the specified time',
  operationId: 'getDelay',
  request: {
    params: z.object({
      delay: z
        .string()
        .openapi({
          param: {
            name: 'delay',
            in: 'path',
            description: 'Delay duration (with or without unit, defaults to seconds)',
            required: true,
            schema: { type: 'string' },
            example: '2s',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Response after delay' } },
})

export const getApiGetRoute = createRoute({
  method: 'get',
  path: '/api/get',
  tags: ['httptesting'],
  summary: 'Simple GET endpoint',
  description: 'Test endpoint for GET requests',
  operationId: 'httpGet',
  responses: { 200: { description: 'OK' } },
})

export const deleteApiDeleteRoute = createRoute({
  method: 'delete',
  path: '/api/delete',
  tags: ['httptesting'],
  summary: 'Simple DELETE endpoint',
  description: 'Test endpoint for DELETE requests',
  operationId: 'httpDelete',
  responses: { 200: { description: 'OK' } },
})

export const postApiPostRoute = createRoute({
  method: 'post',
  path: '/api/post',
  tags: ['httptesting'],
  summary: 'Echo POST data',
  description: 'Returns the POSTed data back in the response',
  operationId: 'httpPost',
  request: { body: { content: { '*/*': { schema: z.string() } } } },
  responses: {
    200: { description: 'Request body echoed back', content: { '*/*': { schema: z.string() } } },
  },
})

export const putApiPutRoute = createRoute({
  method: 'put',
  path: '/api/put',
  tags: ['httptesting'],
  summary: 'Echo PUT data',
  description: 'Returns the PUT data back in the response',
  operationId: 'httpPut',
  request: { body: { content: { '*/*': { schema: z.string() } } } },
  responses: {
    200: { description: 'Request body echoed back', content: { '*/*': { schema: z.string() } } },
  },
})

export const patchApiPatchRoute = createRoute({
  method: 'patch',
  path: '/api/patch',
  tags: ['httptesting'],
  summary: 'Echo PATCH data',
  description: 'Returns the PATCH data back in the response',
  operationId: 'httpPatch',
  request: { body: { content: { '*/*': { schema: z.string() } } } },
  responses: {
    200: { description: 'Request body echoed back', content: { '*/*': { schema: z.string() } } },
  },
})

export const getApiCookiesRoute = createRoute({
  method: 'get',
  path: '/api/cookies',
  tags: ['httptesting'],
  summary: 'Get cookies',
  description: 'Returns all the cookies sent with the request',
  operationId: 'getCookies',
  responses: {
    200: {
      description: 'Cookies in the request',
      content: {
        'application/json': {
          schema: z
            .object({ cookies: z.record(z.string(), z.string()).exactOptional() })
            .openapi({ required: [] }),
          example: { cookies: { cookie1: 'value1', cookie2: 'value2' } },
        },
      },
    },
  },
})

export const postApiCookiesRoute = createRoute({
  method: 'post',
  path: '/api/cookies',
  tags: ['httptesting'],
  summary: 'Set cookies',
  description: 'Sets cookies according to query parameters',
  operationId: 'setCookies',
  request: {
    query: z.object({
      cookieName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cookieName',
            in: 'query',
            description: 'Cookie name and value (multiple query parameters allowed)',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cookies have been set',
      headers: z.object({
        'Set-Cookie': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'cookieName=cookieValue' }),
        },
      }),
    },
  },
})

export const getApiHeadersRoute = createRoute({
  method: 'get',
  path: '/api/headers',
  tags: ['httptesting'],
  summary: 'Get request headers',
  description: 'Returns the headers sent with the request',
  operationId: 'getHeaders',
  responses: {
    200: {
      description: 'Headers in the request',
      content: {
        'application/json': {
          schema: z
            .object({ headers: z.record(z.string(), z.string()).exactOptional() })
            .openapi({ required: [] }),
          example: {
            headers: { 'User-Agent': 'curl/7.64.1', Accept: '*/*', Host: 'localhost:3333' },
          },
        },
      },
    },
  },
})

export const getApiBasicAuthUsernamePasswordRoute = createRoute({
  method: 'get',
  path: '/api/basic-auth/{username}/{password}',
  tags: ['httptesting'],
  summary: 'Basic auth test',
  description: 'Test endpoint for basic auth',
  operationId: 'basicAuth',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            description: 'Expected username',
            required: true,
            schema: { type: 'string' },
            example: 'user',
          },
        }),
      password: z
        .string()
        .openapi({
          param: {
            name: 'password',
            in: 'path',
            description: 'Expected password',
            required: true,
            schema: { type: 'string' },
            example: 'password',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Basic auth result',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z.string().exactOptional(),
              password: z.string().exactOptional(),
              authenticated: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          example: { user: 'user', password: 'password', authenticated: true },
        },
      },
    },
  },
})

export const getApiJsonRoute = createRoute({
  method: 'get',
  path: '/api/json',
  tags: ['httptesting'],
  summary: 'Query params as JSON',
  description: 'Returns the query parameters as JSON',
  operationId: 'getJson',
  request: {
    query: z.object({
      param: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'param',
            in: 'query',
            description: 'Any query parameter (multiple allowed)',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query parameters as JSON',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.string()),
          example: { param1: 'value1', param2: 'value2' },
        },
      },
    },
  },
})

export const getApiXmlRoute = createRoute({
  method: 'get',
  path: '/api/xml',
  tags: ['httptesting'],
  summary: 'Query params as XML',
  description: 'Returns the query parameters as XML',
  operationId: 'getXml',
  request: {
    query: z.object({
      param: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'param',
            in: 'query',
            description: 'Any query parameter (multiple allowed)',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query parameters as XML',
      content: {
        'application/xml': {
          schema: z
            .object({
              params: z
                .array(
                  z
                    .object({
                      key: z.string().exactOptional(),
                      value: z.string().exactOptional(),
                      index: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example:
            '<response>\n  <params>\n    <key>param1</key>\n    <value>value1</value>\n    <index>0</index>\n  </params>\n  <params>\n    <key>param2</key>\n    <value>value2</value>\n    <index>1</index>\n  </params>\n</response>\n',
        },
      },
    },
  },
})
