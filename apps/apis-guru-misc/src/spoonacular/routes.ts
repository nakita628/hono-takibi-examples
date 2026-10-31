import { createRoute, z } from '@hono/zod-openapi'

const AcceptParamsSchema = z
  .enum(['application/json', 'text/html', 'media/*'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Accept header.',
      in: 'header',
      name: 'Accept',
      required: false,
      schema: {
        enum: ['application/json', 'text/html', 'media/*'],
        example: 'application/json',
        type: 'string',
      },
    },
    example: 'application/json',
  })

const ContentTypeParamsSchema = z
  .enum(['application/x-www-form-urlencoded', 'application/json', 'multipart/form-data'])
  .exactOptional()
  .openapi({
    param: {
      description: 'The content type.',
      in: 'header',
      name: 'Content-Type',
      required: false,
      schema: {
        enum: ['application/x-www-form-urlencoded', 'application/json', 'multipart/form-data'],
        example: 'application/json',
        type: 'string',
      },
    },
    example: 'application/json',
  })

const DefaultCssParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Whether the default CSS should be added to the response.',
      in: 'query',
      name: 'defaultCss',
      required: false,
      schema: { default: true, example: false, type: 'boolean' },
    },
    example: false,
  })

const HashParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The private hash for the username.',
      in: 'query',
      name: 'hash',
      required: true,
      schema: { type: 'string' },
    },
  })

const IdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: "The item's id.",
      in: 'path',
      name: 'id',
      required: true,
      schema: { example: 1, type: 'integer' },
    },
    example: 1,
  })

const IgnorePantryParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Whether to ignore typical pantry items, such as water, salt, flour, etc.',
      in: 'query',
      name: 'ignorePantry',
      required: false,
      schema: { default: false, example: false, type: 'boolean' },
    },
    example: false,
  })

const IncludeNutritionParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.',
      in: 'query',
      name: 'includeNutrition',
      required: false,
      schema: { default: false, type: 'boolean' },
    },
  })

const IncludeTasteParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Whether taste data should be added to correctly parsed ingredients.',
      in: 'query',
      name: 'includeTaste',
      required: false,
      schema: { default: false, example: false, type: 'boolean' },
    },
    example: false,
  })

const IngredientsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma-separated list of ingredients that the recipes should contain.',
      in: 'query',
      name: 'ingredients',
      schema: { example: 'carrots,tomatoes', type: 'string' },
      required: false,
    },
    example: 'carrots,tomatoes',
  })

const LanguageParamsSchema = z
  .enum(['en', 'de'])
  .exactOptional()
  .openapi({
    param: {
      description: "The language of the input. Either 'en' or 'de'.",
      in: 'query',
      name: 'language',
      required: false,
      schema: { enum: ['en', 'de'], example: 'en', type: 'string' },
    },
    example: 'en',
  })

const LimitLicenseParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Whether the recipes should have an open license that allows display with proper attribution.',
      in: 'query',
      name: 'limitLicense',
      required: false,
      schema: { default: true, example: true, type: 'boolean' },
    },
    example: true,
  })

const NumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'The maximum number of items to return (between 1 and 100). Defaults to 10.',
      in: 'query',
      name: 'number',
      schema: { default: 10, example: 10, maximum: 100, minimum: 1, type: 'integer' },
      required: false,
    },
    example: 10,
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0).max(900),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of results to skip (between 0 and 900).',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { maximum: 900, minimum: 0, type: 'integer' },
    },
  })

const QueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'The (natural language) search query.',
      in: 'query',
      name: 'query',
      required: false,
      schema: { example: 'burger', type: 'string' },
    },
    example: 'burger',
  })

const RgbParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Red, green, blue values for the chart color.',
      in: 'query',
      name: 'rgb',
      required: false,
      schema: { example: '75,192,192', type: 'string' },
    },
    example: '75,192,192',
  })

const TagsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.',
      in: 'query',
      name: 'tags',
      required: false,
      schema: { type: 'string' },
    },
  })

const UsernameParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The username.',
      in: 'path',
      name: 'username',
      required: true,
      schema: { example: 'dsky', type: 'string' },
    },
    example: 'dsky',
  })

const ApiKeySchemeSecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

export const getFoodConverseRoute = createRoute({
  method: 'get',
  path: '/food/converse',
  tags: ['misc'],
  summary: 'Talk to Chatbot',
  description:
    'This endpoint can be used to have a conversation about food with the spoonacular chatbot. Use the "Get Conversation Suggests" endpoint to show your user what he or she can say.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Talk-to-Chatbot',
  },
  operationId: 'talkToChatbot',
  request: {
    query: z.object({
      text: z
        .string()
        .openapi({
          param: {
            description: 'The request / question / answer from the user to the chatbot.',
            explode: false,
            in: 'query',
            name: 'text',
            required: true,
            schema: { example: 'donut recipes', type: 'string' },
            style: 'form',
          },
          example: 'donut recipes',
        }),
      contextId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An arbitrary globally unique id for your conversation. The conversation can contain states so you should pass your context id if you want the bot to be able to remember the conversation.',
            explode: false,
            in: 'query',
            name: 'contextId',
            required: false,
            schema: { example: '342938', type: 'string' },
            style: 'form',
          },
          example: '342938',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ answerText: z.string().min(1), media: z.array(z.object({})) })
            .openapi({
              description: '',
              required: ['answerText', 'media'],
              'x-examples': {
                'example-1': {
                  answerText: "Baby, if you were a fruit you'd be a fineapple.",
                  media: [],
                },
              },
            }),
          examples: {
            'example-1': {
              value: { answerText: "Baby, if you were a fruit you'd be a fineapple.", media: [] },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodConverseSuggestRoute = createRoute({
  method: 'get',
  path: '/food/converse/suggest',
  tags: ['misc'],
  summary: 'Conversation Suggests',
  description: 'This endpoint returns suggestions for things the user can say or ask the chatbot.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Conversation-Suggests',
  },
  operationId: 'getConversationSuggests',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'A (partial) query from the user. The endpoint will return if it matches topics it can talk about.',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'tell', type: 'string' },
            style: 'form',
          },
          example: 'tell',
        }),
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of suggestions to return (between 1 and 25).',
            explode: false,
            in: 'query',
            name: 'number',
            required: false,
            schema: { example: 5, type: 'number' },
            style: 'form',
          },
          example: 5,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              suggests: z
                .object({
                  _: z
                    .array(z.object({ name: z.string().min(1) }).openapi({ required: ['name'] }))
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['_'] }),
              words: z.array(z.object({})),
            })
            .openapi({
              description: '',
              required: ['suggests', 'words'],
              'x-examples': {
                'example-1': {
                  suggests: {
                    _: [
                      { name: 'Tell me something funny' },
                      { name: 'Tell me a food fact' },
                      { name: 'Tell me a joke' },
                      { name: 'Tell me food trivia' },
                      { name: 'Tell me a fact about food' },
                    ],
                  },
                  words: [],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                suggests: {
                  _: [
                    { name: 'Tell me something funny' },
                    { name: 'Tell me a food fact' },
                    { name: 'Tell me a joke' },
                    { name: 'Tell me food trivia' },
                    { name: 'Tell me a fact about food' },
                  ],
                },
                words: [],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodCustomFoodsSearchRoute = createRoute({
  method: 'get',
  path: '/food/customFoods/search',
  tags: ['misc'],
  summary: 'Search Custom Foods',
  description: "Search custom foods in a user's account.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Custom-Foods',
  },
  operationId: 'searchCustomFoods',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'query',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'form',
          },
          example: 'dsky',
        }),
      hash: z
        .string()
        .openapi({
          param: {
            description: 'The private hash for the username.',
            explode: false,
            in: 'query',
            name: 'hash',
            required: true,
            schema: { example: '4b5v4398573406', type: 'string' },
            style: 'form',
          },
          example: '4b5v4398573406',
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              customFoods: z
                .array(
                  z
                    .object({
                      id: z.int(),
                      imageUrl: z.string().min(1),
                      price: z.number(),
                      servings: z.number(),
                      title: z.string().min(1),
                    })
                    .openapi({ required: ['id', 'title', 'servings', 'imageUrl', 'price'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              number: z.int(),
              offset: z.int(),
              type: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['customFoods', 'type', 'offset', 'number'],
              'x-examples': {
                'example-1': {
                  customFoods: [
                    {
                      id: 15,
                      imageUrl: 'https://spoonacular.com/cdn/ingredients_100x100/bratwurst.jpg',
                      price: 6.9,
                      servings: 1,
                      title: 'Max Cafe Curry Bratwurst',
                    },
                  ],
                  number: 10,
                  offset: 0,
                  type: 'customFood',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                customFoods: [
                  {
                    id: 15,
                    imageUrl: 'https://spoonacular.com/cdn/ingredients_100x100/bratwurst.jpg',
                    price: 6.9,
                    servings: 1,
                    title: 'Max Cafe Curry Bratwurst',
                  },
                ],
                number: 10,
                offset: 0,
                type: 'customFood',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postFoodDetectRoute = createRoute({
  method: 'post',
  path: '/food/detect',
  tags: ['misc'],
  summary: 'Detect Food in Text',
  description:
    'Take any text and find all mentions of food contained within it. This task is also called Named Entity Recognition (NER). In this case, the entities are foods. Either dishes, such as pizza or cheeseburger, or ingredients, such as cucumber or almonds.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Detect-Food-in-Text',
  },
  operationId: 'detectFoodInText',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: {
            'example-1': {
              value:
                'text=I like to eat delicious tacos. The only thing better is a cheeseburger with cheddar. But then again, pizza with pepperoni, mushrooms, and tomatoes is so good too!',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              annotations: z
                .array(
                  z
                    .object({
                      annotation: z.string().min(1),
                      image: z.string().min(1),
                      tag: z.string().min(1),
                    })
                    .openapi({ required: ['annotation', 'image', 'tag'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['annotations'],
              'x-examples': {
                'example-1': {
                  annotations: [
                    {
                      annotation: 'cheeseburger',
                      image: 'https://spoonacular.com/menuItemImages/cheeseburger.jpg',
                      tag: 'dish',
                    },
                    {
                      annotation: 'mushrooms',
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png',
                      tag: 'ingredient',
                    },
                    {
                      annotation: 'pepperoni',
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/pepperoni.png',
                      tag: 'ingredient',
                    },
                    {
                      annotation: 'tomatoes',
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
                      tag: 'ingredient',
                    },
                    {
                      annotation: 'cheddar',
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png',
                      tag: 'ingredient',
                    },
                    {
                      annotation: 'tacos',
                      image: 'https://spoonacular.com/menuItemImages/taco-isolated.jpg',
                      tag: 'dish',
                    },
                    {
                      annotation: 'pizza',
                      image: 'https://spoonacular.com/menuItemImages/cheese-pizza.png',
                      tag: 'dish',
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                annotations: [
                  {
                    annotation: 'cheeseburger',
                    image: 'https://spoonacular.com/menuItemImages/cheeseburger.jpg',
                    tag: 'dish',
                  },
                  {
                    annotation: 'mushrooms',
                    image: 'https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png',
                    tag: 'ingredient',
                  },
                  {
                    annotation: 'pepperoni',
                    image: 'https://spoonacular.com/cdn/ingredients_100x100/pepperoni.png',
                    tag: 'ingredient',
                  },
                  {
                    annotation: 'tomatoes',
                    image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
                    tag: 'ingredient',
                  },
                  {
                    annotation: 'cheddar',
                    image: 'https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.png',
                    tag: 'ingredient',
                  },
                  {
                    annotation: 'tacos',
                    image: 'https://spoonacular.com/menuItemImages/taco-isolated.jpg',
                    tag: 'dish',
                  },
                  {
                    annotation: 'pizza',
                    image: 'https://spoonacular.com/menuItemImages/cheese-pizza.png',
                    tag: 'dish',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodImagesAnalyzeRoute = createRoute({
  method: 'get',
  path: '/food/images/analyze',
  tags: ['misc'],
  summary: 'Image Analysis by URL',
  description:
    'Analyze a food image. The API tries to classify the image, guess the nutrition, and find a matching recipes.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Image-Analysis-by-URL',
  },
  operationId: 'imageAnalysisByURL',
  request: {
    query: z.object({
      imageUrl: z
        .string()
        .openapi({
          param: {
            description: 'The URL of the image to be analyzed.',
            explode: false,
            in: 'query',
            name: 'imageUrl',
            required: true,
            schema: {
              example: 'https://spoonacular.com/recipeImages/635350-240x150.jpg',
              type: 'string',
            },
            style: 'form',
          },
          example: 'https://spoonacular.com/recipeImages/635350-240x150.jpg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              category: z
                .object({ name: z.string().min(1), probability: z.number() })
                .openapi({ required: ['name', 'probability'] }),
              nutrition: z
                .object({
                  calories: z
                    .object({
                      confidenceRange95Percent: z
                        .object({ max: z.number(), min: z.number() })
                        .openapi({ required: ['min', 'max'] }),
                      standardDeviation: z.number(),
                      unit: z.string().min(1),
                      value: z.number(),
                    })
                    .openapi({
                      required: ['value', 'unit', 'confidenceRange95Percent', 'standardDeviation'],
                    }),
                  carbs: z
                    .object({
                      confidenceRange95Percent: z
                        .object({ max: z.number(), min: z.number() })
                        .openapi({ required: ['min', 'max'] }),
                      standardDeviation: z.number(),
                      unit: z.string().min(1),
                      value: z.number(),
                    })
                    .openapi({
                      required: ['value', 'unit', 'confidenceRange95Percent', 'standardDeviation'],
                    }),
                  fat: z
                    .object({
                      confidenceRange95Percent: z
                        .object({ max: z.number(), min: z.number() })
                        .openapi({ required: ['min', 'max'] }),
                      standardDeviation: z.number(),
                      unit: z.string().min(1),
                      value: z.number(),
                    })
                    .openapi({
                      required: ['value', 'unit', 'confidenceRange95Percent', 'standardDeviation'],
                    }),
                  protein: z
                    .object({
                      confidenceRange95Percent: z
                        .object({ max: z.number(), min: z.number() })
                        .openapi({ required: ['min', 'max'] }),
                      standardDeviation: z.number(),
                      unit: z.string().min(1),
                      value: z.number(),
                    })
                    .openapi({
                      required: ['value', 'unit', 'confidenceRange95Percent', 'standardDeviation'],
                    }),
                  recipesUsed: z.int(),
                })
                .openapi({ required: ['recipesUsed', 'calories', 'fat', 'protein', 'carbs'] }),
              recipes: z
                .array(
                  z
                    .object({
                      id: z.int(),
                      imageType: z.string().min(1),
                      title: z.string().min(1),
                      url: z.string().min(1),
                    })
                    .openapi({ required: ['id', 'title', 'imageType', 'url'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['nutrition', 'category', 'recipes'],
              'x-examples': {
                'example-1': {
                  category: { name: 'burger', probability: 0.9998999999999999 },
                  nutrition: {
                    calories: {
                      confidenceRange95Percent: { max: 571.98, min: 428.97 },
                      standardDeviation: 182.4,
                      unit: 'calories',
                      value: 508,
                    },
                    carbs: {
                      confidenceRange95Percent: { max: 44.96, min: 29.74 },
                      standardDeviation: 19.42,
                      unit: 'g',
                      value: 40,
                    },
                    fat: {
                      confidenceRange95Percent: { max: 32.95, min: 21.29 },
                      standardDeviation: 14.88,
                      unit: 'g',
                      value: 21,
                    },
                    protein: {
                      confidenceRange95Percent: { max: 33.7, min: 22.58 },
                      standardDeviation: 14.19,
                      unit: 'g',
                      value: 29,
                    },
                    recipesUsed: 25,
                  },
                  recipes: [
                    {
                      id: 477749,
                      imageType: 'jpg',
                      title: 'Burger Club: Award-Winning Logan County Burger Patty Melt',
                      url: 'http://www.barbarabakes.com/2010/05/burger-club-award-winning-logan-county/',
                    },
                    {
                      id: 493632,
                      imageType: 'jpg',
                      title: 'New York Burger Week: Pretzel Burger with Beer Cheese',
                      url: 'http://www.foodrepublic.com/2013/09/23/new-york-burger-week-pretzel-burger-beer-cheese',
                    },
                    {
                      id: 23359,
                      imageType: 'jpg',
                      title: 'Beef Burger Recipe (elvis Burger With Salad & Gherkin)',
                      url: 'http://www.jamieoliver.com/recipes/beef-recipes/elvis-burger-with-pickled-gherkin',
                    },
                    {
                      id: 149115,
                      imageType: 'jpg',
                      title: "Surf N' Turf Burger (Grilled Burger with Lobster and Bacon)",
                      url: 'http://www.seriouseats.com/recipes/2013/06/lobster-bacon-burger-recipe.html',
                    },
                    {
                      id: 861442,
                      imageType: 'jpg',
                      title: 'Istanbul-Style Wet Burger (Islak Burger)',
                      url: 'http://www.epicurious.com/recipes/food/views/istanbul-style-wet-burger-islak-burger?mbid=nl_02272017_Daily_CTN_PM+(1)',
                    },
                    {
                      id: 600423,
                      imageType: 'jpg',
                      title: 'Rajma Burger (Red Kidney Beans Burger)',
                      url: 'http://www.spiceupthecurry.com/rajma-burger-red-kidney-beans-burger/',
                    },
                    {
                      id: 493634,
                      imageType: 'jpg',
                      title: 'Chicago Burger Week: The Chicago Deep Dish Pizza Burger',
                      url: 'http://www.foodrepublic.com/2013/09/30/chicago-burger-week-chicago-deep-dish-pizza-burger',
                    },
                    {
                      id: 487346,
                      imageType: 'jpg',
                      title: 'aloo tikki burger , north indian style aloo tikki burger',
                      url: 'http://www.vegrecipesofindia.com/aloo-tikki-burger/',
                    },
                    {
                      id: 607330,
                      imageType: 'jpg',
                      title: 'Aloo Tikki Burger | How to make aloo tikki burger at home',
                      url: 'http://www.spiceupthecurry.com/aloo-tikki-burger-recipe/',
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                category: { name: 'burger', probability: 0.9998999999999999 },
                nutrition: {
                  calories: {
                    confidenceRange95Percent: { max: 571.98, min: 428.97 },
                    standardDeviation: 182.4,
                    unit: 'calories',
                    value: 508,
                  },
                  carbs: {
                    confidenceRange95Percent: { max: 44.96, min: 29.74 },
                    standardDeviation: 19.42,
                    unit: 'g',
                    value: 40,
                  },
                  fat: {
                    confidenceRange95Percent: { max: 32.95, min: 21.29 },
                    standardDeviation: 14.88,
                    unit: 'g',
                    value: 21,
                  },
                  protein: {
                    confidenceRange95Percent: { max: 33.7, min: 22.58 },
                    standardDeviation: 14.19,
                    unit: 'g',
                    value: 29,
                  },
                  recipesUsed: 25,
                },
                recipes: [
                  {
                    id: 477749,
                    imageType: 'jpg',
                    title: 'Burger Club: Award-Winning Logan County Burger Patty Melt',
                    url: 'http://www.barbarabakes.com/2010/05/burger-club-award-winning-logan-county/',
                  },
                  {
                    id: 493632,
                    imageType: 'jpg',
                    title: 'New York Burger Week: Pretzel Burger with Beer Cheese',
                    url: 'http://www.foodrepublic.com/2013/09/23/new-york-burger-week-pretzel-burger-beer-cheese',
                  },
                  {
                    id: 23359,
                    imageType: 'jpg',
                    title: 'Beef Burger Recipe (elvis Burger With Salad & Gherkin)',
                    url: 'http://www.jamieoliver.com/recipes/beef-recipes/elvis-burger-with-pickled-gherkin',
                  },
                  {
                    id: 149115,
                    imageType: 'jpg',
                    title: "Surf N' Turf Burger (Grilled Burger with Lobster and Bacon)",
                    url: 'http://www.seriouseats.com/recipes/2013/06/lobster-bacon-burger-recipe.html',
                  },
                  {
                    id: 861442,
                    imageType: 'jpg',
                    title: 'Istanbul-Style Wet Burger (Islak Burger)',
                    url: 'http://www.epicurious.com/recipes/food/views/istanbul-style-wet-burger-islak-burger?mbid=nl_02272017_Daily_CTN_PM+(1)',
                  },
                  {
                    id: 600423,
                    imageType: 'jpg',
                    title: 'Rajma Burger (Red Kidney Beans Burger)',
                    url: 'http://www.spiceupthecurry.com/rajma-burger-red-kidney-beans-burger/',
                  },
                  {
                    id: 493634,
                    imageType: 'jpg',
                    title: 'Chicago Burger Week: The Chicago Deep Dish Pizza Burger',
                    url: 'http://www.foodrepublic.com/2013/09/30/chicago-burger-week-chicago-deep-dish-pizza-burger',
                  },
                  {
                    id: 487346,
                    imageType: 'jpg',
                    title: 'aloo tikki burger , north indian style aloo tikki burger',
                    url: 'http://www.vegrecipesofindia.com/aloo-tikki-burger/',
                  },
                  {
                    id: 607330,
                    imageType: 'jpg',
                    title: 'Aloo Tikki Burger | How to make aloo tikki burger at home',
                    url: 'http://www.spiceupthecurry.com/aloo-tikki-burger-recipe/',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodImagesClassifyRoute = createRoute({
  method: 'get',
  path: '/food/images/classify',
  tags: ['misc'],
  summary: 'Image Classification by URL',
  description: 'Classify a food image.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Image-Classification-by-URL',
  },
  operationId: 'imageClassificationByURL',
  request: {
    query: z.object({
      imageUrl: z
        .string()
        .openapi({
          param: {
            description: 'The URL of the image to be classified.',
            explode: false,
            in: 'query',
            name: 'imageUrl',
            required: true,
            schema: {
              example: 'https://spoonacular.com/recipeImages/635350-240x150.jpg',
              type: 'string',
            },
            style: 'form',
          },
          example: 'https://spoonacular.com/recipeImages/635350-240x150.jpg',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ category: z.string().min(1), probability: z.number() })
            .openapi({
              description: '',
              required: ['category', 'probability'],
              'x-examples': { 'example-1': { category: 'burger', probability: 0.91354 } },
            }),
          examples: { 'example-1': { value: { category: 'burger', probability: 0.91354 } } },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodIngredientsAutocompleteRoute = createRoute({
  method: 'get',
  path: '/food/ingredients/autocomplete',
  tags: ['ingredients'],
  summary: 'Autocomplete Ingredient Search',
  description: 'Autocomplete the entry of an ingredient.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Autocomplete-Ingredient-Search',
  },
  operationId: 'autocompleteIngredientSearch',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      number: NumberParamsSchema,
      metaInformation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to return more meta information about the ingredients.',
            explode: false,
            in: 'query',
            name: 'metaInformation',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      intolerances: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.',
            explode: false,
            in: 'query',
            name: 'intolerances',
            required: false,
            schema: { example: 'egg', type: 'string' },
            style: 'form',
          },
          example: 'egg',
        }),
      language: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  aisle: z.string().min(1).exactOptional(),
                  id: z.int().exactOptional(),
                  image: z.string().min(1),
                  name: z.string().min(1),
                  possibleUnits: z.array(z.string()).exactOptional(),
                })
                .openapi({ required: ['name', 'image'] }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    aisle: 'Produce',
                    id: 9003,
                    image: 'apple.jpg',
                    name: 'apple',
                    possibleUnits: [
                      'small',
                      'large',
                      'piece',
                      'slice',
                      'g',
                      'extra small',
                      'medium',
                      'oz',
                      'cup slice',
                      'cup',
                      'serving',
                    ],
                  },
                  {
                    aisle: 'Canned and Jarred',
                    id: 9019,
                    image: 'applesauce.png',
                    name: 'applesauce',
                    possibleUnits: ['g', 'oz', 'cup', 'serving', 'tablespoon'],
                  },
                  {
                    aisle: 'Beverages',
                    id: 9016,
                    image: 'apple-juice.jpg',
                    name: 'apple juice',
                    possibleUnits: [
                      'g',
                      'drink box',
                      'fl oz',
                      'oz',
                      'teaspoon',
                      'cup',
                      'serving',
                      'tablespoon',
                    ],
                  },
                  {
                    aisle: 'Beverages',
                    id: 1009016,
                    image: 'apple-cider.jpg',
                    name: 'apple cider',
                    possibleUnits: [
                      'g',
                      'drink box',
                      'fl oz',
                      'oz',
                      'teaspoon',
                      'bottle NFS',
                      'cup',
                      'serving',
                      'tablespoon',
                    ],
                  },
                  {
                    aisle: 'Nut butters, Jams, and Honey',
                    id: 10019297,
                    image: 'apple-jelly.jpg',
                    name: 'apple jelly',
                    possibleUnits: [
                      'g',
                      'oz',
                      'packet',
                      'teaspoon',
                      'cup',
                      'serving',
                      'tablespoon',
                    ],
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  aisle: 'Produce',
                  id: 9003,
                  image: 'apple.jpg',
                  name: 'apple',
                  possibleUnits: [
                    'small',
                    'large',
                    'piece',
                    'slice',
                    'g',
                    'extra small',
                    'medium',
                    'oz',
                    'cup slice',
                    'cup',
                    'serving',
                  ],
                },
                {
                  aisle: 'Canned and Jarred',
                  id: 9019,
                  image: 'applesauce.png',
                  name: 'applesauce',
                  possibleUnits: ['g', 'oz', 'cup', 'serving', 'tablespoon'],
                },
                {
                  aisle: 'Beverages',
                  id: 9016,
                  image: 'apple-juice.jpg',
                  name: 'apple juice',
                  possibleUnits: [
                    'g',
                    'drink box',
                    'fl oz',
                    'oz',
                    'teaspoon',
                    'cup',
                    'serving',
                    'tablespoon',
                  ],
                },
                {
                  aisle: 'Beverages',
                  id: 1009016,
                  image: 'apple-cider.jpg',
                  name: 'apple cider',
                  possibleUnits: [
                    'g',
                    'drink box',
                    'fl oz',
                    'oz',
                    'teaspoon',
                    'bottle NFS',
                    'cup',
                    'serving',
                    'tablespoon',
                  ],
                },
                {
                  aisle: 'Nut butters, Jams, and Honey',
                  id: 10019297,
                  image: 'apple-jelly.jpg',
                  name: 'apple jelly',
                  possibleUnits: ['g', 'oz', 'packet', 'teaspoon', 'cup', 'serving', 'tablespoon'],
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postFoodIngredientsGlycemicLoadRoute = createRoute({
  method: 'post',
  path: '/food/ingredients/glycemicLoad',
  tags: ['recipes'],
  summary: 'Compute Glycemic Load',
  description:
    'Retrieve the glycemic index for a list of ingredients and compute the individual and total glycemic load.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Compute-Glycemic-Load',
  },
  operationId: 'computeGlycemicLoad',
  request: {
    query: z.object({ language: LanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ ingredients: z.array(z.string()) })
            .openapi({
              description: '',
              required: ['ingredients'],
              'x-examples': {
                'example-1': { ingredients: ['1 kiwi', '2 cups rice', '2 glasses of water'] },
              },
            }),
          examples: {
            'example-1': {
              value: { ingredients: ['1 kiwi', '2 cups rice', '2 glasses of water'] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              ingredients: z
                .array(
                  z
                    .object({
                      glycemicIndex: z.number(),
                      glycemicLoad: z.number(),
                      id: z.int(),
                      original: z.string().min(1),
                    })
                    .openapi({ required: ['id', 'original', 'glycemicIndex', 'glycemicLoad'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalGlycemicLoad: z.number(),
            })
            .openapi({
              description: '',
              required: ['totalGlycemicLoad', 'ingredients'],
              'x-examples': {
                'example-1': {
                  ingredients: [
                    { glycemicIndex: 52.67, glycemicLoad: 5.59, id: 9148, original: '1 kiwi' },
                    {
                      glycemicIndex: 61.19,
                      glycemicLoad: 178.05,
                      id: 20444,
                      original: '2 cups rice',
                    },
                    {
                      glycemicIndex: 0,
                      glycemicLoad: 0,
                      id: 14412,
                      original: '2 glasses of water',
                    },
                  ],
                  totalGlycemicLoad: 183.64,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                ingredients: [
                  { glycemicIndex: 52.67, glycemicLoad: 5.59, id: 9148, original: '1 kiwi' },
                  {
                    glycemicIndex: 61.19,
                    glycemicLoad: 178.05,
                    id: 20444,
                    original: '2 cups rice',
                  },
                  { glycemicIndex: 0, glycemicLoad: 0, id: 14412, original: '2 glasses of water' },
                ],
                totalGlycemicLoad: 183.64,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postFoodIngredientsMapRoute = createRoute({
  method: 'post',
  path: '/food/ingredients/map',
  tags: ['ingredients'],
  summary: 'Map Ingredients to Grocery Products',
  description: 'Map a set of ingredients to products you can buy in the grocery store.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Map-Ingredients-to-Grocery-Products',
  },
  operationId: 'mapIngredientsToGroceryProducts',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ ingredients: z.array(z.string()), servings: z.number() })
            .openapi({
              description: '',
              required: ['ingredients', 'servings'],
              'x-examples': { 'example-1': { ingredients: ['eggs', 'bacon'], servings: 2 } },
            }),
          examples: { 'example-1': { value: { ingredients: ['eggs', 'bacon'], servings: 2 } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  ingredientImage: z.string().min(1),
                  meta: z.array(z.string()),
                  original: z.string().min(1),
                  originalName: z.string().min(1),
                  products: z
                    .array(
                      z
                        .object({ id: z.int(), title: z.string().min(1), upc: z.string().min(1) })
                        .openapi({ required: ['id', 'title', 'upc'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({
                  required: ['original', 'originalName', 'ingredientImage', 'meta', 'products'],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    ingredientImage: 'egg.png',
                    meta: ['egg'],
                    original: 'eggs',
                    originalName: 'eggs',
                    products: [
                      {
                        id: 209945,
                        title: 'Crystal Farms Eggs - Fresh Accents Peeled Hard Cooked 2 ct Packs',
                        upc: '075925889498',
                      },
                      {
                        id: 214723,
                        title: 'Organic Valley Eggs - Organic Medium Brown',
                        upc: '093966811100',
                      },
                      {
                        id: 183228,
                        title: "Eggland's Best Grade A Eggs Jumbo - 12 CT",
                        upc: '715141328615',
                      },
                    ],
                  },
                  {
                    ingredientImage: 'raw-bacon.png',
                    meta: ['bacon'],
                    original: 'bacon',
                    originalName: 'bacon',
                    products: [
                      {
                        id: 159164,
                        title: 'Wright Bacon - Naturally Hickory Smoked',
                        upc: '079621461552',
                      },
                      { id: 87924, title: 'Sugardale Bacon', upc: '073890006025' },
                      {
                        id: 213315,
                        title: 'John Morrell Bacon - Applewood Smoked',
                        upc: '070100060877',
                      },
                      {
                        id: 94585,
                        title: 'Hormel Black Label Bacon Thick Cut',
                        upc: '037600153041',
                      },
                    ],
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  ingredientImage: 'egg.png',
                  meta: ['egg'],
                  original: 'eggs',
                  originalName: 'eggs',
                  products: [
                    {
                      id: 209945,
                      title: 'Crystal Farms Eggs - Fresh Accents Peeled Hard Cooked 2 ct Packs',
                      upc: '075925889498',
                    },
                    {
                      id: 214723,
                      title: 'Organic Valley Eggs - Organic Medium Brown',
                      upc: '093966811100',
                    },
                    {
                      id: 183228,
                      title: "Eggland's Best Grade A Eggs Jumbo - 12 CT",
                      upc: '715141328615',
                    },
                  ],
                },
                {
                  ingredientImage: 'raw-bacon.png',
                  meta: ['bacon'],
                  original: 'bacon',
                  originalName: 'bacon',
                  products: [
                    {
                      id: 159164,
                      title: 'Wright Bacon - Naturally Hickory Smoked',
                      upc: '079621461552',
                    },
                    { id: 87924, title: 'Sugardale Bacon', upc: '073890006025' },
                    {
                      id: 213315,
                      title: 'John Morrell Bacon - Applewood Smoked',
                      upc: '070100060877',
                    },
                    { id: 94585, title: 'Hormel Black Label Bacon Thick Cut', upc: '037600153041' },
                  ],
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodIngredientsSearchRoute = createRoute({
  method: 'get',
  path: '/food/ingredients/search',
  tags: ['ingredients'],
  summary: 'Ingredient Search',
  description:
    'Search for simple whole foods (e.g. fruits, vegetables, nuts, grains, meat, fish, dairy etc.).',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Ingredient-Search',
  },
  operationId: 'ingredientSearch',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      addChildren: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to add children of found foods.',
            explode: false,
            in: 'query',
            name: 'addChildren',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      minProteinPercent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The minimum percentage of protein the food must have (between 0 and 100).',
            explode: false,
            in: 'query',
            name: 'minProteinPercent',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxProteinPercent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum percentage of protein the food can have (between 0 and 100).',
            explode: false,
            in: 'query',
            name: 'maxProteinPercent',
            required: false,
            schema: { example: 90, type: 'number' },
            style: 'form',
          },
          example: 90,
        }),
      minFatPercent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum percentage of fat the food must have (between 0 and 100).',
            explode: false,
            in: 'query',
            name: 'minFatPercent',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxFatPercent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum percentage of fat the food can have (between 0 and 100).',
            explode: false,
            in: 'query',
            name: 'maxFatPercent',
            required: false,
            schema: { example: 90, type: 'number' },
            style: 'form',
          },
          example: 90,
        }),
      minCarbsPercent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum percentage of carbs the food must have (between 0 and 100).',
            explode: false,
            in: 'query',
            name: 'minCarbsPercent',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxCarbsPercent: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum percentage of carbs the food can have (between 0 and 100).',
            explode: false,
            in: 'query',
            name: 'maxCarbsPercent',
            required: false,
            schema: { example: 90, type: 'number' },
            style: 'form',
          },
          example: 90,
        }),
      metaInformation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to return more meta information about the ingredients.',
            explode: false,
            in: 'query',
            name: 'metaInformation',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      intolerances: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.',
            explode: false,
            in: 'query',
            name: 'intolerances',
            required: false,
            schema: { example: 'egg', type: 'string' },
            style: 'form',
          },
          example: 'egg',
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The strategy to sort recipes by. See a full list of supported sorting options.',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { example: 'calories', type: 'string' },
            style: 'form',
          },
          example: 'calories',
        }),
      sortDirection: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).",
            explode: false,
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { example: 'asc', type: 'string' },
            style: 'form',
          },
          example: 'asc',
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
      language: LanguageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              number: z.int(),
              offset: z.int(),
              results: z
                .array(
                  z
                    .object({ id: z.int(), image: z.string().min(1), name: z.string().min(1) })
                    .openapi({ required: ['id', 'name', 'image'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalResults: z.int(),
            })
            .openapi({
              description: '',
              required: ['results', 'offset', 'number', 'totalResults'],
              'x-examples': {
                'example-1': {
                  number: 2,
                  offset: 0,
                  results: [
                    { id: 19400, image: 'banana-chips.jpg', name: 'banana chips' },
                    { id: 93779, image: 'limoncello.jpg', name: 'banana liqueur' },
                  ],
                  totalResults: 13,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                number: 2,
                offset: 0,
                results: [
                  { id: 19400, image: 'banana-chips.jpg', name: 'banana chips' },
                  { id: 93779, image: 'limoncello.jpg', name: 'banana liqueur' },
                ],
                totalResults: 13,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodIngredientsSubstitutesRoute = createRoute({
  method: 'get',
  path: '/food/ingredients/substitutes',
  tags: ['ingredients'],
  summary: 'Get Ingredient Substitutes',
  description: 'Search for substitutes for a given ingredient.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes',
  },
  operationId: 'getIngredientSubstitutes',
  request: {
    query: z.object({
      ingredientName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the ingredient you want to replace.',
            explode: false,
            in: 'query',
            name: 'ingredientName',
            required: true,
            schema: { example: 'butter', type: 'string' },
            style: 'form',
          },
          example: 'butter',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              ingredient: z.string().min(1),
              message: z.string().min(1),
              substitutes: z.array(z.string()),
            })
            .openapi({
              description: '',
              required: ['ingredient', 'substitutes', 'message'],
              'x-examples': {
                'example-1': {
                  ingredient: 'butter',
                  message: 'Found 4 substitutes for the ingredient.',
                  substitutes: [
                    '1 cup = 7/8 cup shortening and 1/2 tsp salt',
                    '1 cup = 7/8 cup vegetable oil + 1/2 tsp salt',
                    '1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce',
                    '1 cup = 1 cup margarine',
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                ingredient: 'butter',
                message: 'Found 4 substitutes for the ingredient.',
                substitutes: [
                  '1 cup = 7/8 cup shortening and 1/2 tsp salt',
                  '1 cup = 7/8 cup vegetable oil + 1/2 tsp salt',
                  '1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce',
                  '1 cup = 1 cup margarine',
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodIngredientsIdAmountRoute = createRoute({
  method: 'get',
  path: '/food/ingredients/{id}/amount',
  tags: ['ingredients'],
  summary: 'Compute Ingredient Amount',
  description:
    'Compute the amount you need of a certain ingredient for a certain nutritional goal. For example, how much pineapple do you have to eat to get 10 grams of protein?',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Compute-Ingredient-Amount',
  },
  operationId: 'computeIngredientAmount',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the ingredient you want the amount for.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 9266, type: 'number' },
            style: 'simple',
          },
          example: 9266,
        }),
    }),
    query: z.object({
      nutrient: z
        .string()
        .openapi({
          param: {
            description: 'The target nutrient. See a list of supported nutrients.',
            explode: false,
            in: 'query',
            name: 'nutrient',
            required: true,
            schema: { example: 'protein', type: 'string' },
            style: 'form',
          },
          example: 'protein',
        }),
      target: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The target number of the given nutrient.',
            explode: false,
            in: 'query',
            name: 'target',
            required: true,
            schema: { example: 2, type: 'number' },
            style: 'form',
          },
          example: 2,
        }),
      unit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The target unit.',
            explode: false,
            in: 'query',
            name: 'unit',
            required: false,
            schema: { example: 'oz', type: 'string' },
            style: 'form',
          },
          example: 'oz',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ amount: z.number(), unit: z.string().min(1) })
            .openapi({
              description: '',
              required: ['amount', 'unit'],
              'x-examples': { 'example-1': { amount: 65.32, unit: 'oz' } },
            }),
          examples: { 'example-1': { value: { amount: 65.32, unit: 'oz' } } },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodIngredientsIdInformationRoute = createRoute({
  method: 'get',
  path: '/food/ingredients/{id}/information',
  tags: ['ingredients'],
  summary: 'Get Ingredient Information',
  description:
    'Use an ingredient id to get all available information about an ingredient, such as its image and supermarket aisle.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Ingredient-Information',
  },
  operationId: 'getIngredientInformation',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The ingredient id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 9266, type: 'number' },
            style: 'simple',
          },
          example: 9266,
        }),
    }),
    query: z.object({
      amount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The amount of this ingredient.',
            explode: false,
            in: 'query',
            name: 'amount',
            required: false,
            schema: { example: 150, type: 'number' },
            style: 'form',
          },
          example: 150,
        }),
      unit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unit for the given amount.',
            explode: false,
            in: 'query',
            name: 'unit',
            required: false,
            schema: { example: 'grams', type: 'string' },
            style: 'form',
          },
          example: 'grams',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aisle: z.string().min(1),
              amount: z.number(),
              categoryPath: z.array(z.string()),
              consistency: z.string().min(1),
              estimatedCost: z
                .object({ unit: z.string().min(1), value: z.number() })
                .openapi({ required: ['value', 'unit'] }),
              id: z.int(),
              image: z.string().min(1),
              meta: z.array(z.object({})),
              name: z.string().min(1),
              nameClean: z.string().min(1),
              nutrition: z
                .object({
                  caloricBreakdown: z
                    .object({
                      percentCarbs: z.number(),
                      percentFat: z.number(),
                      percentProtein: z.number(),
                    })
                    .openapi({ required: ['percentProtein', 'percentFat', 'percentCarbs'] }),
                  nutrients: z
                    .array(
                      z
                        .object({
                          amount: z.number(),
                          name: z.string().min(1),
                          percentOfDailyNeeds: z.number(),
                          unit: z.string().min(1),
                        })
                        .openapi({ required: ['name', 'amount', 'unit', 'percentOfDailyNeeds'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  properties: z
                    .array(
                      z
                        .object({ amount: z.number(), name: z.string().min(1), unit: z.string() })
                        .openapi({ required: ['name', 'amount', 'unit'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  weightPerServing: z
                    .object({ amount: z.number(), unit: z.string().min(1) })
                    .openapi({ required: ['amount', 'unit'] }),
                })
                .openapi({
                  required: ['nutrients', 'properties', 'caloricBreakdown', 'weightPerServing'],
                }),
              original: z.string().min(1),
              originalName: z.string().min(1),
              possibleUnits: z.array(z.string()),
              shoppingListUnits: z.array(z.string()),
              unit: z.string(),
              unitLong: z.string(),
              unitShort: z.string(),
            })
            .openapi({
              description: '',
              required: [
                'id',
                'original',
                'originalName',
                'name',
                'nameClean',
                'amount',
                'unit',
                'unitShort',
                'unitLong',
                'possibleUnits',
                'estimatedCost',
                'consistency',
                'shoppingListUnits',
                'aisle',
                'image',
                'meta',
                'nutrition',
                'categoryPath',
              ],
              'x-examples': {
                'example-1': {
                  aisle: 'Produce',
                  amount: 1,
                  categoryPath: ['tropical fruit', 'fruit'],
                  consistency: 'solid',
                  estimatedCost: { unit: 'US Cents', value: 299 },
                  id: 9266,
                  image: 'pineapple.jpg',
                  meta: [],
                  name: 'pineapples',
                  nameClean: 'pineapple',
                  nutrition: {
                    caloricBreakdown: {
                      percentCarbs: 94.18,
                      percentFat: 1.94,
                      percentProtein: 3.88,
                    },
                    nutrients: [
                      { amount: 452.5, name: 'Calories', percentOfDailyNeeds: 22.63, unit: 'cal' },
                      { amount: 1.09, name: 'Fat', percentOfDailyNeeds: 1.67, unit: 'g' },
                      { amount: 0.08, name: 'Saturated Fat', percentOfDailyNeeds: 0.51, unit: 'g' },
                      {
                        amount: 118.74,
                        name: 'Carbohydrates',
                        percentOfDailyNeeds: 39.58,
                        unit: 'g',
                      },
                      {
                        amount: 106.07,
                        name: 'Net Carbohydrates',
                        percentOfDailyNeeds: 38.57,
                        unit: 'g',
                      },
                      { amount: 89.14, name: 'Sugar', percentOfDailyNeeds: 99.05, unit: 'g' },
                      { amount: 0, name: 'Cholesterol', percentOfDailyNeeds: 0, unit: 'mg' },
                      { amount: 9.05, name: 'Sodium', percentOfDailyNeeds: 0.39, unit: 'mg' },
                      { amount: 4.89, name: 'Protein', percentOfDailyNeeds: 9.77, unit: 'g' },
                      {
                        amount: 432.59,
                        name: 'Vitamin C',
                        percentOfDailyNeeds: 524.35,
                        unit: 'mg',
                      },
                      { amount: 8.39, name: 'Manganese', percentOfDailyNeeds: 419.47, unit: 'mg' },
                      { amount: 12.67, name: 'Fiber', percentOfDailyNeeds: 50.68, unit: 'g' },
                      { amount: 1.01, name: 'Vitamin B6', percentOfDailyNeeds: 50.68, unit: 'mg' },
                      { amount: 1, name: 'Copper', percentOfDailyNeeds: 49.78, unit: 'mg' },
                      { amount: 0.72, name: 'Vitamin B1', percentOfDailyNeeds: 47.66, unit: 'mg' },
                      { amount: 162.9, name: 'Folate', percentOfDailyNeeds: 40.73, unit: 'µg' },
                      { amount: 986.45, name: 'Potassium', percentOfDailyNeeds: 28.18, unit: 'mg' },
                      { amount: 108.6, name: 'Magnesium', percentOfDailyNeeds: 27.15, unit: 'mg' },
                      { amount: 4.53, name: 'Vitamin B3', percentOfDailyNeeds: 22.63, unit: 'mg' },
                      { amount: 1.93, name: 'Vitamin B5', percentOfDailyNeeds: 19.28, unit: 'mg' },
                      { amount: 0.29, name: 'Vitamin B2', percentOfDailyNeeds: 17.04, unit: 'mg' },
                      { amount: 2.62, name: 'Iron', percentOfDailyNeeds: 14.58, unit: 'mg' },
                      { amount: 117.65, name: 'Calcium', percentOfDailyNeeds: 11.77, unit: 'mg' },
                      { amount: 524.9, name: 'Vitamin A', percentOfDailyNeeds: 10.5, unit: 'IU' },
                      { amount: 1.09, name: 'Zinc', percentOfDailyNeeds: 7.24, unit: 'mg' },
                      { amount: 72.4, name: 'Phosphorus', percentOfDailyNeeds: 7.24, unit: 'mg' },
                      { amount: 6.34, name: 'Vitamin K', percentOfDailyNeeds: 6.03, unit: 'µg' },
                      { amount: 0.91, name: 'Selenium', percentOfDailyNeeds: 1.29, unit: 'µg' },
                      { amount: 0.18, name: 'Vitamin E', percentOfDailyNeeds: 1.21, unit: 'mg' },
                    ],
                    properties: [
                      { amount: 58.67, name: 'Glycemic Index', unit: '' },
                      { amount: 62.23, name: 'Glycemic Load', unit: '' },
                    ],
                    weightPerServing: { amount: 905, unit: 'g' },
                  },
                  original: 'pineapples',
                  originalName: 'pineapples',
                  possibleUnits: ['piece', 'slice', 'fruit', 'g', 'oz', 'cup', 'serving'],
                  shoppingListUnits: ['pieces'],
                  unit: '',
                  unitLong: '',
                  unitShort: '',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aisle: 'Produce',
                amount: 1,
                categoryPath: ['tropical fruit', 'fruit'],
                consistency: 'solid',
                estimatedCost: { unit: 'US Cents', value: 299 },
                id: 9266,
                image: 'pineapple.jpg',
                meta: [],
                name: 'pineapples',
                nameClean: 'pineapple',
                nutrition: {
                  caloricBreakdown: { percentCarbs: 94.18, percentFat: 1.94, percentProtein: 3.88 },
                  nutrients: [
                    { amount: 452.5, name: 'Calories', percentOfDailyNeeds: 22.63, unit: 'cal' },
                    { amount: 1.09, name: 'Fat', percentOfDailyNeeds: 1.67, unit: 'g' },
                    { amount: 0.08, name: 'Saturated Fat', percentOfDailyNeeds: 0.51, unit: 'g' },
                    {
                      amount: 118.74,
                      name: 'Carbohydrates',
                      percentOfDailyNeeds: 39.58,
                      unit: 'g',
                    },
                    {
                      amount: 106.07,
                      name: 'Net Carbohydrates',
                      percentOfDailyNeeds: 38.57,
                      unit: 'g',
                    },
                    { amount: 89.14, name: 'Sugar', percentOfDailyNeeds: 99.05, unit: 'g' },
                    { amount: 0, name: 'Cholesterol', percentOfDailyNeeds: 0, unit: 'mg' },
                    { amount: 9.05, name: 'Sodium', percentOfDailyNeeds: 0.39, unit: 'mg' },
                    { amount: 4.89, name: 'Protein', percentOfDailyNeeds: 9.77, unit: 'g' },
                    { amount: 432.59, name: 'Vitamin C', percentOfDailyNeeds: 524.35, unit: 'mg' },
                    { amount: 8.39, name: 'Manganese', percentOfDailyNeeds: 419.47, unit: 'mg' },
                    { amount: 12.67, name: 'Fiber', percentOfDailyNeeds: 50.68, unit: 'g' },
                    { amount: 1.01, name: 'Vitamin B6', percentOfDailyNeeds: 50.68, unit: 'mg' },
                    { amount: 1, name: 'Copper', percentOfDailyNeeds: 49.78, unit: 'mg' },
                    { amount: 0.72, name: 'Vitamin B1', percentOfDailyNeeds: 47.66, unit: 'mg' },
                    { amount: 162.9, name: 'Folate', percentOfDailyNeeds: 40.73, unit: 'µg' },
                    { amount: 986.45, name: 'Potassium', percentOfDailyNeeds: 28.18, unit: 'mg' },
                    { amount: 108.6, name: 'Magnesium', percentOfDailyNeeds: 27.15, unit: 'mg' },
                    { amount: 4.53, name: 'Vitamin B3', percentOfDailyNeeds: 22.63, unit: 'mg' },
                    { amount: 1.93, name: 'Vitamin B5', percentOfDailyNeeds: 19.28, unit: 'mg' },
                    { amount: 0.29, name: 'Vitamin B2', percentOfDailyNeeds: 17.04, unit: 'mg' },
                    { amount: 2.62, name: 'Iron', percentOfDailyNeeds: 14.58, unit: 'mg' },
                    { amount: 117.65, name: 'Calcium', percentOfDailyNeeds: 11.77, unit: 'mg' },
                    { amount: 524.9, name: 'Vitamin A', percentOfDailyNeeds: 10.5, unit: 'IU' },
                    { amount: 1.09, name: 'Zinc', percentOfDailyNeeds: 7.24, unit: 'mg' },
                    { amount: 72.4, name: 'Phosphorus', percentOfDailyNeeds: 7.24, unit: 'mg' },
                    { amount: 6.34, name: 'Vitamin K', percentOfDailyNeeds: 6.03, unit: 'µg' },
                    { amount: 0.91, name: 'Selenium', percentOfDailyNeeds: 1.29, unit: 'µg' },
                    { amount: 0.18, name: 'Vitamin E', percentOfDailyNeeds: 1.21, unit: 'mg' },
                  ],
                  properties: [
                    { amount: 58.67, name: 'Glycemic Index', unit: '' },
                    { amount: 62.23, name: 'Glycemic Load', unit: '' },
                  ],
                  weightPerServing: { amount: 905, unit: 'g' },
                },
                original: 'pineapples',
                originalName: 'pineapples',
                possibleUnits: ['piece', 'slice', 'fruit', 'g', 'oz', 'cup', 'serving'],
                shoppingListUnits: ['pieces'],
                unit: '',
                unitLong: '',
                unitShort: '',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodIngredientsIdSubstitutesRoute = createRoute({
  method: 'get',
  path: '/food/ingredients/{id}/substitutes',
  tags: ['ingredients'],
  summary: 'Get Ingredient Substitutes by ID',
  description: 'Search for substitutes for a given ingredient.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Ingredient-Substitutes-by-ID',
  },
  operationId: 'getIngredientSubstitutesByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the ingredient you want substitutes for.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1001, type: 'number' },
            style: 'simple',
          },
          example: 1001,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              ingredient: z.string().min(1),
              message: z.string().min(1),
              substitutes: z.array(z.string()),
            })
            .openapi({
              description: '',
              required: ['ingredient', 'substitutes', 'message'],
              'x-examples': {
                'example-1': {
                  ingredient: 'butter',
                  message: 'Found 4 substitutes for the ingredient.',
                  substitutes: [
                    '1 cup = 7/8 cup shortening and 1/2 tsp salt',
                    '1 cup = 7/8 cup vegetable oil + 1/2 tsp salt',
                    '1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce',
                    '1 cup = 1 cup margarine',
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                ingredient: 'butter',
                message: 'Found 4 substitutes for the ingredient.',
                substitutes: [
                  '1 cup = 7/8 cup shortening and 1/2 tsp salt',
                  '1 cup = 7/8 cup vegetable oil + 1/2 tsp salt',
                  '1/2 cup = 1/4 cup buttermilk + 1/4 cup unsweetened applesauce',
                  '1 cup = 1 cup margarine',
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodJokesRandomRoute = createRoute({
  method: 'get',
  path: '/food/jokes/random',
  tags: ['misc'],
  summary: 'Random Food Joke',
  description:
    'Get a random joke that is related to food. Caution: this is an endpoint for adults!',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Random-Food-Joke',
  },
  operationId: 'getARandomFoodJoke',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ text: z.string().min(1) })
            .openapi({
              description: '',
              required: ['text'],
              'x-examples': {
                'example-1': { text: 'Any salad can be a Caesar salad if you stab it enough.' },
              },
            }),
          examples: {
            'example-1': {
              value: { text: 'Any salad can be a Caesar salad if you stab it enough.' },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsSearchRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/search',
  tags: ['menu items'],
  summary: 'Search Menu Items',
  description:
    "Search over 115,000 menu items from over 800 fast food and chain restaurants. For example, McDonald's Big Mac or Starbucks Mocha.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Menu-Items',
  },
  operationId: 'searchMenuItems',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      minCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of calories the menu item must have.',
            explode: false,
            in: 'query',
            name: 'minCalories',
            required: false,
            schema: { example: 50, type: 'number' },
            style: 'form',
          },
          example: 50,
        }),
      maxCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of calories the menu item can have.',
            explode: false,
            in: 'query',
            name: 'maxCalories',
            required: false,
            schema: { example: 800, type: 'number' },
            style: 'form',
          },
          example: 800,
        }),
      minCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of carbohydrates in grams the menu item must have.',
            explode: false,
            in: 'query',
            name: 'minCarbs',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of carbohydrates in grams the menu item can have.',
            explode: false,
            in: 'query',
            name: 'maxCarbs',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of protein in grams the menu item must have.',
            explode: false,
            in: 'query',
            name: 'minProtein',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of protein in grams the menu item can have.',
            explode: false,
            in: 'query',
            name: 'maxProtein',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fat in grams the menu item must have.',
            explode: false,
            in: 'query',
            name: 'minFat',
            required: false,
            schema: { example: 1, type: 'number' },
            style: 'form',
          },
          example: 1,
        }),
      maxFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fat in grams the menu item can have.',
            explode: false,
            in: 'query',
            name: 'maxFat',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      addMenuItemInformation: z
        .stringbool()
        .pipe(z.union([z.literal(false), z.literal(true)]))
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true, you get more information about the menu items returned.',
            in: 'query',
            name: 'addMenuItemInformation',
            schema: { enum: [false, true], example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              menuItems: z
                .array(
                  z
                    .object({
                      id: z.int(),
                      image: z.string().min(1),
                      imageType: z.string().min(1),
                      restaurantChain: z.string().min(1),
                      servings: z
                        .object({ number: z.number(), size: z.number(), unit: z.string().min(1) })
                        .exactOptional()
                        .openapi({ required: ['number', 'size', 'unit'] }),
                      title: z.string().min(1),
                    })
                    .openapi({
                      required: ['id', 'title', 'restaurantChain', 'image', 'imageType'],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              number: z.int(),
              offset: z.int(),
              totalMenuItems: z.int(),
              type: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['menuItems', 'totalMenuItems', 'type', 'offset', 'number'],
              'x-examples': {
                'example-1': {
                  menuItems: [
                    {
                      id: 419357,
                      image: 'https://images.spoonacular.com/file/wximages/419357-312x231.png',
                      imageType: 'png',
                      restaurantChain: 'Hooters',
                      servings: { number: 1, size: 2, unit: 'oz' },
                      title: 'Burger Sliders',
                    },
                    {
                      id: 424571,
                      image: 'https://images.spoonacular.com/file/wximages/424571-312x231.png',
                      imageType: 'png',
                      restaurantChain: 'Burger King',
                      servings: { number: 1, size: 2, unit: 'oz' },
                      title: 'Bacon King Burger',
                    },
                  ],
                  number: 2,
                  offset: 0,
                  totalMenuItems: 6749,
                  type: 'menuItem',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                menuItems: [
                  {
                    id: 419357,
                    image: 'https://images.spoonacular.com/file/wximages/419357-312x231.png',
                    imageType: 'png',
                    restaurantChain: 'Hooters',
                    servings: { number: 1, size: 2, unit: 'oz' },
                    title: 'Burger Sliders',
                  },
                  {
                    id: 424571,
                    image: 'https://images.spoonacular.com/file/wximages/424571-312x231.png',
                    imageType: 'png',
                    restaurantChain: 'Burger King',
                    servings: { number: 1, size: 2, unit: 'oz' },
                    title: 'Bacon King Burger',
                  },
                ],
                number: 2,
                offset: 0,
                totalMenuItems: 6749,
                type: 'menuItem',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsSuggestRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/suggest',
  tags: ['menu items'],
  summary: 'Autocomplete Menu Item Search',
  description:
    'Generate suggestions for menu items based on a (partial) query. The matches will be found by looking in the title only.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Autocomplete-Menu-Item-Search',
  },
  operationId: 'autocompleteMenuItemSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The (partial) search query.',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'chicke', type: 'string' },
            style: 'form',
          },
          example: 'chicke',
        }),
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return (between 1 and 25).',
            explode: false,
            in: 'query',
            name: 'number',
            required: false,
            schema: { example: 10, maximum: 25, minimum: 1, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({ id: z.int(), title: z.string().min(1) })
                    .openapi({ required: ['id', 'title'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['results'],
              'x-examples': {
                'example-1': {
                  results: [
                    { id: 253419, title: 'pei wei asian diner thai chicken lettuce wraps' },
                    {
                      id: 380722,
                      title: "camille's chicken caesar salad includes 2 oz. caesar dressing",
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                results: [
                  { id: 253419, title: 'pei wei asian diner thai chicken lettuce wraps' },
                  {
                    id: 380722,
                    title: "camille's chicken caesar salad includes 2 oz. caesar dressing",
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsIdRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/{id}',
  tags: ['menu items'],
  summary: 'Get Menu Item Information',
  description:
    'Use a menu item id to get all available information about a menu item, such as nutrition.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Menu-Item-Information',
  },
  operationId: 'getMenuItemInformation',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The menu item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 424571, type: 'number' },
            style: 'simple',
          },
          example: 424571,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              badges: z.array(z.string()),
              breadcrumbs: z.array(z.string()),
              generatedText: z.string().exactOptional(),
              id: z.int(),
              imageType: z.string().min(1),
              likes: z.number(),
              nutrition: z
                .object({
                  caloricBreakdown: z
                    .object({
                      percentCarbs: z.number(),
                      percentFat: z.number(),
                      percentProtein: z.number(),
                    })
                    .openapi({ required: ['percentProtein', 'percentFat', 'percentCarbs'] }),
                  nutrients: z
                    .array(
                      z
                        .object({
                          amount: z.number(),
                          name: z.string().min(1),
                          percentOfDailyNeeds: z.number(),
                          unit: z.string().min(1),
                        })
                        .openapi({ required: ['name', 'amount', 'unit', 'percentOfDailyNeeds'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['nutrients', 'caloricBreakdown'] }),
              price: z.number().exactOptional(),
              restaurantChain: z.string().min(1),
              servings: z
                .object({ number: z.number(), size: z.number(), unit: z.string().min(1) })
                .openapi({ required: ['number', 'size', 'unit'] }),
              spoonacularScore: z.number().exactOptional(),
              title: z.string().min(1),
            })
            .openapi({
              description: '',
              required: [
                'id',
                'title',
                'restaurantChain',
                'nutrition',
                'badges',
                'breadcrumbs',
                'imageType',
                'likes',
                'servings',
              ],
              'x-examples': {
                'example-1': {
                  badges: [],
                  breadcrumbs: ['burger', 'main course', 'food product category'],
                  generatedText: null,
                  id: 424571,
                  imageType: 'png',
                  likes: 0,
                  nutrition: {
                    caloricBreakdown: { percentCarbs: 35, percentFat: 30, percentProtein: 35 },
                    nutrients: [
                      { amount: 69, name: 'Fat', percentOfDailyNeeds: 30, unit: 'g' },
                      { amount: 57, name: 'Protein', percentOfDailyNeeds: 35, unit: 'g' },
                      { amount: 1040, name: 'Calories', percentOfDailyNeeds: 50, unit: 'cal' },
                      { amount: 48, name: 'Carbohydrates', percentOfDailyNeeds: 35, unit: 'g' },
                    ],
                  },
                  price: null,
                  restaurantChain: 'Burger King',
                  servings: { number: 1, size: 2, unit: 'oz' },
                  spoonacularScore: null,
                  title: 'Bacon King Burger',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                badges: [],
                breadcrumbs: ['burger', 'main course', 'food product category'],
                generatedText: '',
                id: 424571,
                imageType: 'png',
                likes: 0,
                nutrition: {
                  caloricBreakdown: { percentCarbs: 35, percentFat: 30, percentProtein: 35 },
                  nutrients: [
                    { amount: 69, name: 'Fat', percentOfDailyNeeds: 30, unit: 'g' },
                    { amount: 57, name: 'Protein', percentOfDailyNeeds: 35, unit: 'g' },
                    { amount: 1040, name: 'Calories', percentOfDailyNeeds: 50, unit: 'cal' },
                    { amount: 48, name: 'Carbohydrates', percentOfDailyNeeds: 35, unit: 'g' },
                  ],
                },
                price: 2.35,
                restaurantChain: 'Burger King',
                servings: { number: 1, size: 2, unit: 'oz' },
                spoonacularScore: 12.5,
                title: 'Bacon King Burger',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsIdNutritionLabelRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/{id}/nutritionLabel',
  tags: ['menu items'],
  summary: 'Menu Item Nutrition Label Widget',
  description: "Visualize a menu item's nutritional label information as HTML including CSS.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-Label-Widget',
  },
  operationId: 'menuItemNutritionLabelWidget',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The menu item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 342313, type: 'number' },
            style: 'simple',
          },
          example: 342313,
        }),
    }),
    query: z.object({
      defaultCss: DefaultCssParamsSchema,
      showOptionalNutrients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show optional nutrients.',
            explode: false,
            in: 'query',
            name: 'showOptionalNutrients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showZeroValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show zero values.',
            explode: false,
            in: 'query',
            name: 'showZeroValues',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show a list of ingredients.',
            explode: false,
            in: 'query',
            name: 'showIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsIdNutritionLabelPngRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/{id}/nutritionLabel.png',
  tags: ['menu items'],
  summary: 'Menu Item Nutrition Label Image',
  description: "Visualize a menu item's nutritional label information as an image.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-Label-Image',
  },
  operationId: 'menuItemNutritionLabelImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The menu item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 342313, type: 'number' },
            style: 'simple',
          },
          example: 342313,
        }),
    }),
    query: z.object({
      showOptionalNutrients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show optional nutrients.',
            explode: false,
            in: 'query',
            name: 'showOptionalNutrients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showZeroValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show zero values.',
            explode: false,
            in: 'query',
            name: 'showZeroValues',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show a list of ingredients.',
            explode: false,
            in: 'query',
            name: 'showIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsIdNutritionWidgetRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/{id}/nutritionWidget',
  tags: ['menu items'],
  summary: 'Menu Item Nutrition by ID Widget',
  description: "Visualize a menu item's nutritional information as HTML including CSS.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-by-ID-Widget',
  },
  operationId: 'visualizeMenuItemNutritionByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The menu item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1003464, type: 'number' },
            style: 'simple',
          },
          example: 1003464,
        }),
    }),
    query: z.object({ defaultCss: DefaultCssParamsSchema }),
    headers: z.object({ Accept: AcceptParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodMenuItemsIdNutritionWidgetPngRoute = createRoute({
  method: 'get',
  path: '/food/menuItems/{id}/nutritionWidget.png',
  tags: ['menu items'],
  summary: 'Menu Item Nutrition by ID Image',
  description: "Visualize a menu item's nutritional information as HTML including CSS.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Menu-Item-Nutrition-by-ID-Image',
  },
  operationId: 'menuItemNutritionByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The menu item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 424571, type: 'number' },
            style: 'simple',
          },
          example: 424571,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postFoodProductsClassifyRoute = createRoute({
  method: 'post',
  path: '/food/products/classify',
  tags: ['products'],
  summary: 'Classify Grocery Product',
  description:
    'This endpoint allows you to match a packaged food to a basic category, e.g. a specific brand of milk to the category milk.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Classify-Grocery-Product',
  },
  operationId: 'classifyGroceryProduct',
  request: {
    query: z.object({
      locale: z
        .enum(['en_US', 'en_GB'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).',
            explode: false,
            in: 'query',
            name: 'locale',
            required: false,
            schema: { enum: ['en_US', 'en_GB'], example: 'en_US', type: 'string' },
            style: 'form',
          },
          example: 'en_US',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ plu_code: z.string(), title: z.string().min(1), upc: z.string() })
            .openapi({
              description: '',
              required: ['title', 'upc', 'plu_code'],
              'x-examples': {
                'example-1': {
                  plu_code: '',
                  title: 'Kroger Vitamin A & D Reduced Fat 2% Milk',
                  upc: '',
                },
              },
            }),
          examples: {
            'example-1': {
              value: { plu_code: '', title: 'Kroger Vitamin A & D Reduced Fat 2% Milk', upc: '' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              breadcrumbs: z.array(z.string()),
              category: z.string().min(1),
              cleanTitle: z.string().min(1),
              image: z.string().min(1),
              usdaCode: z.int(),
            })
            .openapi({
              description: '',
              required: ['cleanTitle', 'image', 'category', 'breadcrumbs', 'usdaCode'],
              'x-examples': {
                'example-1': {
                  breadcrumbs: ['2 percent milk', 'milk', 'drink', 'ingredient'],
                  category: '2 percent milk',
                  cleanTitle: 'Kroger Vitamin A & D Reduced Fat 2% Milk',
                  image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
                  usdaCode: 1174,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                breadcrumbs: ['2 percent milk', 'milk', 'drink', 'ingredient'],
                category: '2 percent milk',
                cleanTitle: 'Kroger Vitamin A & D Reduced Fat 2% Milk',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
                usdaCode: 1174,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postFoodProductsClassifyBatchRoute = createRoute({
  method: 'post',
  path: '/food/products/classifyBatch',
  tags: ['products'],
  summary: 'Classify Grocery Product Bulk',
  description: 'Provide a set of product jsons, get back classified products.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Classify-Grocery-Product-Bulk',
  },
  operationId: 'classifyGroceryProductBulk',
  request: {
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The display name of the returned category, supported is en_US (for American English) and en_GB (for British English).',
            explode: false,
            in: 'query',
            name: 'locale',
            required: false,
            schema: { example: 'en_US', type: 'string' },
            style: 'form',
          },
          example: 'en_US',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({ plu_code: z.string(), title: z.string().min(1), upc: z.string() })
                .openapi({ required: ['title', 'upc', 'plu_code'] }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  { plu_code: '', title: 'Kroger Vitamin A & D Reduced Fat 2% Milk', upc: '' },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [{ plu_code: '', title: 'Kroger Vitamin A & D Reduced Fat 2% Milk', upc: '' }],
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  breadcrumbs: z.array(z.string()),
                  category: z.string().min(1),
                  cleanTitle: z.string().min(1),
                  image: z.string().min(1),
                  usdaCode: z.int(),
                })
                .openapi({
                  required: ['cleanTitle', 'image', 'category', 'breadcrumbs', 'usdaCode'],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    breadcrumbs: ['2 percent milk', 'milk', 'drink', 'ingredient'],
                    category: '2 percent milk',
                    cleanTitle: 'Kroger Vitamin A & D Reduced Fat 2% Milk',
                    image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
                    usdaCode: 1174,
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  breadcrumbs: ['2 percent milk', 'milk', 'drink', 'ingredient'],
                  category: '2 percent milk',
                  cleanTitle: 'Kroger Vitamin A & D Reduced Fat 2% Milk',
                  image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
                  usdaCode: 1174,
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsSearchRoute = createRoute({
  method: 'get',
  path: '/food/products/search',
  tags: ['products'],
  summary: 'Search Grocery Products',
  description: 'Search packaged food products, such as frozen pizza or Greek yogurt.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Grocery-Products',
  },
  operationId: 'searchGroceryProducts',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      minCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of calories the product must have.',
            explode: false,
            in: 'query',
            name: 'minCalories',
            required: false,
            schema: { example: 50, type: 'number' },
            style: 'form',
          },
          example: 50,
        }),
      maxCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of calories the product can have.',
            explode: false,
            in: 'query',
            name: 'maxCalories',
            required: false,
            schema: { example: 800, type: 'number' },
            style: 'form',
          },
          example: 800,
        }),
      minCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of carbohydrates in grams the product must have.',
            explode: false,
            in: 'query',
            name: 'minCarbs',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of carbohydrates in grams the product can have.',
            explode: false,
            in: 'query',
            name: 'maxCarbs',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of protein in grams the product must have.',
            explode: false,
            in: 'query',
            name: 'minProtein',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of protein in grams the product can have.',
            explode: false,
            in: 'query',
            name: 'maxProtein',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fat in grams the product must have.',
            explode: false,
            in: 'query',
            name: 'minFat',
            required: false,
            schema: { example: 1, type: 'number' },
            style: 'form',
          },
          example: 1,
        }),
      maxFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fat in grams the product can have.',
            explode: false,
            in: 'query',
            name: 'maxFat',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      addProductInformation: z
        .stringbool()
        .pipe(z.union([z.literal(false), z.literal(true)]))
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true, you get more information about the products returned.',
            in: 'query',
            name: 'addProductInformation',
            schema: { enum: [false, true], example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              number: z.int(),
              offset: z.int(),
              products: z
                .array(
                  z
                    .object({ id: z.int(), imageType: z.string().min(1), title: z.string().min(1) })
                    .openapi({ required: ['id', 'title', 'imageType'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalProducts: z.int(),
              type: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['products', 'totalProducts', 'type', 'offset', 'number'],
              'x-examples': {
                'example-1': {
                  number: 2,
                  offset: 0,
                  products: [
                    {
                      id: 192386,
                      imageType: 'jpg',
                      title: 'Pizza Buddy: Frozen Pizza Dough, 16 Oz',
                    },
                    { id: 27693, imageType: 'jpg', title: 'Uno Pizza' },
                  ],
                  totalProducts: 1258,
                  type: 'product',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                number: 2,
                offset: 0,
                products: [
                  { id: 192386, imageType: 'jpg', title: 'Pizza Buddy: Frozen Pizza Dough, 16 Oz' },
                  { id: 27693, imageType: 'jpg', title: 'Uno Pizza' },
                ],
                totalProducts: 1258,
                type: 'product',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsSuggestRoute = createRoute({
  method: 'get',
  path: '/food/products/suggest',
  tags: ['products'],
  summary: 'Autocomplete Product Search',
  description:
    'Generate suggestions for grocery products based on a (partial) query. The matches will be found by looking in the title only.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Autocomplete-Product-Search',
  },
  operationId: 'autocompleteProductSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The (partial) search query.',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'chicke', type: 'string' },
            style: 'form',
          },
          example: 'chicke',
        }),
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return (between 1 and 25).',
            explode: false,
            in: 'query',
            name: 'number',
            required: false,
            schema: { example: 10, maximum: 25, minimum: 1, type: 'integer' },
            style: 'form',
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z
                .array(
                  z
                    .object({ id: z.int(), title: z.string().min(1) })
                    .openapi({ required: ['id', 'title'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['results'],
              'x-examples': {
                'example-1': {
                  results: [
                    {
                      id: 208698,
                      title: 'buddig premium deli chicken breast - rotisserie flavored',
                    },
                    { id: 41291, title: 'tyson all natural chicken breasts tenderloins' },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                results: [
                  { id: 208698, title: 'buddig premium deli chicken breast - rotisserie flavored' },
                  { id: 41291, title: 'tyson all natural chicken breasts tenderloins' },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsUpcUpcRoute = createRoute({
  method: 'get',
  path: '/food/products/upc/{upc}',
  tags: ['products'],
  summary: 'Search Grocery Products by UPC',
  description: 'Get information about a packaged food using its UPC.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Grocery-Products-by-UPC',
  },
  operationId: 'searchGroceryProductsByUPC',
  request: {
    params: z.object({
      upc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: "The product's UPC.",
            explode: false,
            in: 'path',
            name: 'upc',
            required: true,
            schema: { example: 41631000564, type: 'number' },
            style: 'simple',
          },
          example: 41631000564,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              badges: z.array(z.string()),
              breadcrumbs: z.array(z.string()),
              generatedText: z.string().min(1),
              id: z.int(),
              imageType: z.string().min(1),
              importantBadges: z.array(z.string()),
              ingredientCount: z.int().exactOptional(),
              ingredientList: z.string().min(1),
              ingredients: z
                .array(
                  z
                    .object({
                      description: z.any().exactOptional(),
                      name: z.string(),
                      safety_level: z.any().exactOptional(),
                    })
                    .openapi({ required: ['name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              likes: z.number(),
              nutrition: z
                .object({
                  caloricBreakdown: z
                    .object({
                      percentCarbs: z.number(),
                      percentFat: z.number(),
                      percentProtein: z.number(),
                    })
                    .openapi({ required: ['percentProtein', 'percentFat', 'percentCarbs'] }),
                  nutrients: z
                    .array(
                      z
                        .object({
                          amount: z.number(),
                          name: z.string().min(1),
                          percentOfDailyNeeds: z.number(),
                          unit: z.string().min(1),
                        })
                        .openapi({ required: ['name', 'amount', 'unit', 'percentOfDailyNeeds'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['nutrients', 'caloricBreakdown'] }),
              price: z.number(),
              servings: z
                .object({ number: z.number(), size: z.number(), unit: z.string().min(1) })
                .openapi({ required: ['number', 'size', 'unit'] }),
              spoonacularScore: z.number(),
              title: z.string().min(1),
            })
            .openapi({
              description: '',
              required: [
                'id',
                'title',
                'badges',
                'importantBadges',
                'breadcrumbs',
                'generatedText',
                'imageType',
                'ingredientList',
                'ingredients',
                'likes',
                'nutrition',
                'price',
                'servings',
                'spoonacularScore',
              ],
              'x-examples': {
                'example-1': {
                  badges: [
                    'egg_free',
                    'wheat_free',
                    'grain_free',
                    'peanut_free',
                    'primal',
                    'vegetarian',
                    'nut_free',
                    'vegan',
                    'pescetarian',
                    'dairy_free',
                    'paleo',
                    'gluten_free',
                  ],
                  breadcrumbs: ['flour'],
                  generatedText:
                    'Swan Flour: This product is an awesome fit if you are searching for a healthy flour. This product has 1 ingredient (in our experience: the fewer ingredients, the better!) This product contains no ingredients that some research suggests you should avoid. One serving of this product provides 30 calories, 0g grams of fat, 0g grams of protein, and 8g grams of carbs.',
                  id: 30004,
                  imageType: 'jpg',
                  importantBadges: ['gluten_free', 'paleo', 'primal', 'wheat_free', 'grain_free'],
                  ingredientCount: null,
                  ingredientList: 'Potato Starch',
                  ingredients: [
                    { description: null, name: '', safety_level: null },
                    { description: null, name: 'starch', safety_level: null },
                    { description: null, name: 'potato starch', safety_level: null },
                  ],
                  likes: 0,
                  nutrition: {
                    caloricBreakdown: {
                      percentCarbs: 57.78,
                      percentFat: 20,
                      percentProtein: 22.22,
                    },
                    nutrients: [
                      { amount: 0, name: 'Fat', percentOfDailyNeeds: 0, unit: 'g' },
                      { amount: 0, name: 'Protein', percentOfDailyNeeds: 0, unit: 'g' },
                      { amount: 30, name: 'Calories', percentOfDailyNeeds: 10, unit: 'cal' },
                      { amount: 8, name: 'Carbohydrates', percentOfDailyNeeds: 9.45, unit: 'g' },
                    ],
                  },
                  price: 0,
                  servings: { number: 34, size: 1, unit: 'tbsp' },
                  spoonacularScore: 99,
                  title: 'Swan Flour',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                badges: [
                  'egg_free',
                  'wheat_free',
                  'grain_free',
                  'peanut_free',
                  'primal',
                  'vegetarian',
                  'nut_free',
                  'vegan',
                  'pescetarian',
                  'dairy_free',
                  'paleo',
                  'gluten_free',
                ],
                breadcrumbs: ['flour'],
                generatedText:
                  'Swan Flour: This product is an awesome fit if you are searching for a healthy flour. This product has 1 ingredient (in our experience: the fewer ingredients, the better!) This product contains no ingredients that some research suggests you should avoid. One serving of this product provides 30 calories, 0g grams of fat, 0g grams of protein, and 8g grams of carbs.',
                id: 30004,
                imageType: 'jpg',
                importantBadges: ['gluten_free', 'paleo', 'primal', 'wheat_free', 'grain_free'],
                ingredientCount: 1,
                ingredientList: 'Potato Starch',
                ingredients: [
                  { description: null, name: '', safety_level: null },
                  { description: null, name: 'starch', safety_level: null },
                  { description: null, name: 'potato starch', safety_level: null },
                ],
                likes: 0,
                nutrition: {
                  caloricBreakdown: { percentCarbs: 57.78, percentFat: 20, percentProtein: 22.22 },
                  nutrients: [
                    { amount: 0, name: 'Fat', percentOfDailyNeeds: 0, unit: 'g' },
                    { amount: 0, name: 'Protein', percentOfDailyNeeds: 0, unit: 'g' },
                    { amount: 30, name: 'Calories', percentOfDailyNeeds: 10, unit: 'cal' },
                    { amount: 8, name: 'Carbohydrates', percentOfDailyNeeds: 9.45, unit: 'g' },
                  ],
                },
                price: 0,
                servings: { number: 34, size: 1, unit: 'tbsp' },
                spoonacularScore: 99,
                title: 'Swan Flour',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsUpcUpcComparableRoute = createRoute({
  method: 'get',
  path: '/food/products/upc/{upc}/comparable',
  tags: ['products'],
  summary: 'Get Comparable Products',
  description: 'Find comparable products to the given one.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Comparable-Products',
  },
  operationId: 'getComparableProducts',
  request: {
    params: z.object({
      upc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The UPC of the product for which you want to find comparable products.',
            explode: false,
            in: 'path',
            name: 'upc',
            required: true,
            schema: { example: 33698816271, type: 'number' },
            style: 'simple',
          },
          example: 33698816271,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              comparableProducts: z
                .object({
                  calories: z.array(z.object({})),
                  likes: z.array(z.object({})),
                  price: z.array(z.object({})),
                  protein: z
                    .array(
                      z
                        .object({
                          difference: z.number(),
                          id: z.int(),
                          image: z.string().min(1),
                          title: z.string().min(1),
                        })
                        .openapi({ required: ['difference', 'id', 'image', 'title'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  spoonacularScore: z
                    .array(
                      z
                        .object({
                          difference: z.number(),
                          id: z.int(),
                          image: z.string().min(1),
                          title: z.string().min(1),
                        })
                        .openapi({ required: ['difference', 'id', 'image', 'title'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  sugar: z.array(z.object({})),
                })
                .openapi({
                  required: ['calories', 'likes', 'price', 'protein', 'spoonacularScore', 'sugar'],
                }),
            })
            .openapi({
              description: '',
              required: ['comparableProducts'],
              'x-examples': {
                'example-1': {
                  comparableProducts: {
                    calories: [],
                    likes: [],
                    price: [],
                    protein: [
                      {
                        difference: 3,
                        id: 11797,
                        image: 'https://webknox.com/productImages/11797.jpg',
                        title: 'Casa Visco Capers',
                      },
                      {
                        difference: 1,
                        id: 90962,
                        image: 'https://webknox.com/productImages/90962.jpg',
                        title: 'Colavita Capers',
                      },
                      {
                        difference: 1,
                        id: 88139,
                        image: 'https://webknox.com/productImages/88139.jpg',
                        title: 'Mezzetta Capers',
                      },
                      {
                        difference: 1,
                        id: 152832,
                        image: 'https://webknox.com/productImages/152832.jpg',
                        title: 'Victoria Imported Capers',
                      },
                    ],
                    spoonacularScore: [
                      {
                        difference: 7,
                        id: 125354,
                        image: 'https://webknox.com/productImages/125354.jpg',
                        title: 'DeLallo Capers',
                      },
                      {
                        difference: 7,
                        id: 118361,
                        image: 'https://webknox.com/productImages/118361.jpg',
                        title: 'Haddon House Non Pareil Capers',
                      },
                      {
                        difference: 7,
                        id: 113686,
                        image: 'https://webknox.com/productImages/113686.jpg',
                        title: 'Dell Alpe Capers',
                      },
                      {
                        difference: 7,
                        id: 112078,
                        image: 'https://webknox.com/productImages/112078.jpg',
                        title: 'Paesana Imported Capers',
                      },
                    ],
                    sugar: [],
                  },
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                comparableProducts: {
                  calories: [],
                  likes: [],
                  price: [],
                  protein: [
                    {
                      difference: 3,
                      id: 11797,
                      image: 'https://webknox.com/productImages/11797.jpg',
                      title: 'Casa Visco Capers',
                    },
                    {
                      difference: 1,
                      id: 90962,
                      image: 'https://webknox.com/productImages/90962.jpg',
                      title: 'Colavita Capers',
                    },
                    {
                      difference: 1,
                      id: 88139,
                      image: 'https://webknox.com/productImages/88139.jpg',
                      title: 'Mezzetta Capers',
                    },
                    {
                      difference: 1,
                      id: 152832,
                      image: 'https://webknox.com/productImages/152832.jpg',
                      title: 'Victoria Imported Capers',
                    },
                  ],
                  spoonacularScore: [
                    {
                      difference: 7,
                      id: 125354,
                      image: 'https://webknox.com/productImages/125354.jpg',
                      title: 'DeLallo Capers',
                    },
                    {
                      difference: 7,
                      id: 118361,
                      image: 'https://webknox.com/productImages/118361.jpg',
                      title: 'Haddon House Non Pareil Capers',
                    },
                    {
                      difference: 7,
                      id: 113686,
                      image: 'https://webknox.com/productImages/113686.jpg',
                      title: 'Dell Alpe Capers',
                    },
                    {
                      difference: 7,
                      id: 112078,
                      image: 'https://webknox.com/productImages/112078.jpg',
                      title: 'Paesana Imported Capers',
                    },
                  ],
                  sugar: [],
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsIdRoute = createRoute({
  method: 'get',
  path: '/food/products/{id}',
  tags: ['products'],
  summary: 'Get Product Information',
  description:
    'Use a product id to get full information about a product, such as ingredients, nutrition, etc. The nutritional information is per serving.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Product-Information',
  },
  operationId: 'getProductInformation',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the packaged food.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 22347, type: 'number' },
            style: 'simple',
          },
          example: 22347,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aisle: z.string().min(1),
              badges: z.array(z.string()),
              breadcrumbs: z.array(z.string()),
              generatedText: z.any().exactOptional(),
              id: z.int(),
              imageType: z.string().min(1),
              importantBadges: z.array(z.string()),
              ingredientCount: z.int(),
              ingredientList: z.string().min(1),
              ingredients: z
                .array(
                  z
                    .object({
                      description: z.any().exactOptional(),
                      name: z.string().min(1),
                      safety_level: z.any().exactOptional(),
                    })
                    .openapi({ required: ['name'] }),
                )
                .min(0),
              likes: z.number(),
              nutrition: z
                .object({
                  caloricBreakdown: z
                    .object({
                      percentCarbs: z.number(),
                      percentFat: z.number(),
                      percentProtein: z.number(),
                    })
                    .openapi({ required: ['percentProtein', 'percentFat', 'percentCarbs'] }),
                  nutrients: z
                    .array(
                      z
                        .object({
                          amount: z.number(),
                          name: z.string().min(1),
                          percentOfDailyNeeds: z.number(),
                          unit: z.string().min(1),
                        })
                        .openapi({ required: ['name', 'amount', 'unit', 'percentOfDailyNeeds'] }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['nutrients', 'caloricBreakdown'] }),
              price: z.number(),
              servings: z
                .object({ number: z.number(), size: z.number(), unit: z.string().min(1) })
                .openapi({ required: ['number', 'size', 'unit'] }),
              spoonacularScore: z.number(),
              title: z.string().min(1),
            })
            .openapi({
              description: '',
              required: [
                'id',
                'title',
                'breadcrumbs',
                'imageType',
                'badges',
                'importantBadges',
                'ingredientCount',
                'ingredientList',
                'ingredients',
                'likes',
                'aisle',
                'nutrition',
                'price',
                'servings',
                'spoonacularScore',
              ],
              'x-examples': {
                'example-1': {
                  aisle: 'Sweet Snacks',
                  badges: [
                    'msg_free',
                    'no_artificial_colors',
                    'no_artificial_flavors',
                    'no_artificial_ingredients',
                    'gluten_free',
                  ],
                  breadcrumbs: ['bars'],
                  generatedText: null,
                  id: 22347,
                  imageType: 'jpg',
                  importantBadges: [
                    'no_artificial_flavors',
                    'no_artificial_colors',
                    'no_artificial_ingredients',
                    'gluten_free',
                    'msg_free',
                  ],
                  ingredientCount: 32,
                  ingredientList:
                    'Snickers Brand Almond Bar: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Corn Syrup, Almonds, Sugar, Milkfat, Skim Milk, Less than 2% - Lactose, Salt, Hydrogenated Palm Kernel Oil and/or Palm Oil, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanuts, Corn Syrup, Sugar, Milkfat, Skim Milk, Partially Hydrogenated Soybean Oil, Lactose, Salt, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand Peanut Butter Squared Bars: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanut Butter (Peanuts, Partially Hydrogenated Soybean Oil), Peanuts, Sugar, Corn Syrup, Vegetable Oil (Hydrogenated Palm Kernel Oil, Palm Oil, Rapeseed Oil and Cottonseed Oil and/or Partially Hydrogenated Palm Kernel Oil), Lactose, Corn Syrup Solids, Invert Sugar, Less than 2% - Glycerin, Dextrose, Skim Milk, Salt, Calcium Carbonate, Partially Hydrogenated Soybean Oil, Egg Whites, Artificial Flavor, TBHQ to Maintain Freshness',
                  ingredients: [
                    { description: null, name: 'emulsifier', safety_level: null },
                    { description: null, name: 'added sugar', safety_level: null },
                    { description: null, name: 'sweetener', safety_level: null },
                    { description: null, name: 'cooking fat', safety_level: null },
                    { description: null, name: 'cooking oil', safety_level: null },
                    { description: null, name: 'lecithin', safety_level: null },
                    { description: null, name: 'yeast', safety_level: null },
                    { description: null, name: 'menu item type', safety_level: null },
                    { description: null, name: 'nuts', safety_level: null },
                    {
                      description: null,
                      name: 'partially hydrogenated vegetable oil',
                      safety_level: 'low',
                    },
                    {
                      description:
                        'Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.',
                      name: 'hydrogenated vegetable oil',
                      safety_level: 'high',
                    },
                    { description: null, name: 'calcium', safety_level: null },
                    { description: null, name: 'nut butter', safety_level: null },
                    { description: null, name: 'legumes', safety_level: null },
                    { description: null, name: 'refined sweetener', safety_level: null },
                    { description: null, name: 'non food item', safety_level: null },
                    { description: null, name: 'tree nuts', safety_level: null },
                    { description: null, name: 'chocolate', safety_level: null },
                    { description: null, name: 'sugar', safety_level: null },
                    { description: null, name: 'snack', safety_level: null },
                    { description: null, name: 'corn syrup', safety_level: null },
                    { description: null, name: 'drink', safety_level: null },
                    { description: null, name: 'milk', safety_level: null },
                    { description: null, name: 'spread', safety_level: null },
                    { description: null, name: 'vegetable oil', safety_level: null },
                    { description: null, name: 'yeast nutrient', safety_level: null },
                    { description: null, name: 'palm kernel oil', safety_level: null },
                    { description: null, name: 'artificial ingredient', safety_level: null },
                    { description: null, name: 'stabilizer', safety_level: null },
                    { description: null, name: 'additive', safety_level: null },
                    { description: null, name: 'nutrient', safety_level: null },
                    { description: null, name: 'soybean oil', safety_level: null },
                    { description: null, name: 'supplement', safety_level: null },
                    { description: null, name: 'mineral', safety_level: null },
                    { description: null, name: 'artificial flavor', safety_level: 'medium' },
                    { description: null, name: 'skim milk', safety_level: null },
                    { description: null, name: 'peanuts', safety_level: null },
                    { description: null, name: 'corn syrup solids', safety_level: 'medium' },
                    {
                      description:
                        'Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.',
                      name: 'hydrogenated palm kernel oil',
                      safety_level: 'high',
                    },
                    { description: null, name: 'cottonseed oil', safety_level: null },
                    { description: null, name: 'milkfat', safety_level: 'high' },
                    { description: null, name: 'lactose', safety_level: null },
                    { description: null, name: 'corn syrup', safety_level: null },
                    { description: null, name: 'cocoa butter', safety_level: 'high' },
                    { description: null, name: 'tbhq to maintain freshness', safety_level: null },
                    { description: null, name: 'peanut butter', safety_level: null },
                    { description: null, name: 'egg whites', safety_level: null },
                    { description: null, name: 'sugar', safety_level: null },
                    { description: null, name: 'milk chocolate', safety_level: null },
                    { description: null, name: 'palm oil', safety_level: null },
                    { description: null, name: 'artificial flavor', safety_level: null },
                    { description: null, name: 'salt', safety_level: null },
                    { description: null, name: 'almonds', safety_level: null },
                    {
                      description: null,
                      name: 'skim milk less than 2% - lactose',
                      safety_level: null,
                    },
                    { description: null, name: 'vegetable oil', safety_level: null },
                    { description: null, name: 'less than 2% - glycerin', safety_level: null },
                    { description: null, name: 'dextrose', safety_level: 'high' },
                    {
                      description: 'Soy lecithin is not a concern for most people allergic to soy.',
                      name: 'soy lecithin',
                      safety_level: 'high',
                    },
                    { description: null, name: 'invert sugar', safety_level: 'high' },
                    { description: null, name: 'chocolate', safety_level: null },
                    { description: null, name: 'rapeseed oil', safety_level: null },
                    {
                      description: null,
                      name: 'partially hydrogenated soybean oil',
                      safety_level: 'low',
                    },
                    { description: null, name: 'calcium carbonate', safety_level: 'high' },
                    {
                      description: null,
                      name: 'partially hydrogenated palm kernel oil',
                      safety_level: 'low',
                    },
                    {
                      description: null,
                      name: 'artificial flavor.snickers brand',
                      safety_level: null,
                    },
                    { description: null, name: 'snickers brand almond bar', safety_level: null },
                  ],
                  likes: 0,
                  nutrition: {
                    caloricBreakdown: {
                      percentCarbs: 57.78,
                      percentFat: 20,
                      percentProtein: 22.22,
                    },
                    nutrients: [
                      { amount: 4, name: 'Fat', percentOfDailyNeeds: 6.15, unit: 'g' },
                      { amount: 10, name: 'Protein', percentOfDailyNeeds: 20, unit: 'g' },
                      { amount: 200, name: 'Calories', percentOfDailyNeeds: 10, unit: 'cal' },
                      { amount: 26, name: 'Carbohydrates', percentOfDailyNeeds: 9.45, unit: 'g' },
                    ],
                  },
                  price: 324,
                  servings: { number: 8, size: 4, unit: 'pieces' },
                  spoonacularScore: 0,
                  title: 'SNICKERS Minis Size Chocolate Candy Bars Variety Mix 10.5-oz. Bag',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aisle: 'Sweet Snacks',
                badges: [
                  'msg_free',
                  'no_artificial_colors',
                  'no_artificial_flavors',
                  'no_artificial_ingredients',
                  'gluten_free',
                ],
                breadcrumbs: ['bars'],
                generatedText: null,
                id: 22347,
                imageType: 'jpg',
                importantBadges: [
                  'no_artificial_flavors',
                  'no_artificial_colors',
                  'no_artificial_ingredients',
                  'gluten_free',
                  'msg_free',
                ],
                ingredientCount: 32,
                ingredientList:
                  'Snickers Brand Almond Bar: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Corn Syrup, Almonds, Sugar, Milkfat, Skim Milk, Less than 2% - Lactose, Salt, Hydrogenated Palm Kernel Oil and/or Palm Oil, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanuts, Corn Syrup, Sugar, Milkfat, Skim Milk, Partially Hydrogenated Soybean Oil, Lactose, Salt, Egg Whites, Chocolate, Artificial Flavor. Snickers Brand Peanut Butter Squared Bars: Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin, Artificial Flavor), Peanut Butter (Peanuts, Partially Hydrogenated Soybean Oil), Peanuts, Sugar, Corn Syrup, Vegetable Oil (Hydrogenated Palm Kernel Oil, Palm Oil, Rapeseed Oil and Cottonseed Oil and/or Partially Hydrogenated Palm Kernel Oil), Lactose, Corn Syrup Solids, Invert Sugar, Less than 2% - Glycerin, Dextrose, Skim Milk, Salt, Calcium Carbonate, Partially Hydrogenated Soybean Oil, Egg Whites, Artificial Flavor, TBHQ to Maintain Freshness',
                ingredients: [
                  { description: null, name: 'emulsifier', safety_level: null },
                  { description: null, name: 'added sugar', safety_level: null },
                  { description: null, name: 'sweetener', safety_level: null },
                  { description: null, name: 'cooking fat', safety_level: null },
                  { description: null, name: 'cooking oil', safety_level: null },
                  { description: null, name: 'lecithin', safety_level: null },
                  { description: null, name: 'yeast', safety_level: null },
                  { description: null, name: 'menu item type', safety_level: null },
                  { description: null, name: 'nuts', safety_level: null },
                  {
                    description: null,
                    name: 'partially hydrogenated vegetable oil',
                    safety_level: 'low',
                  },
                  {
                    description:
                      'Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.',
                    name: 'hydrogenated vegetable oil',
                    safety_level: 'high',
                  },
                  { description: null, name: 'calcium', safety_level: null },
                  { description: null, name: 'nut butter', safety_level: null },
                  { description: null, name: 'legumes', safety_level: null },
                  { description: null, name: 'refined sweetener', safety_level: null },
                  { description: null, name: 'non food item', safety_level: null },
                  { description: null, name: 'tree nuts', safety_level: null },
                  { description: null, name: 'chocolate', safety_level: null },
                  { description: null, name: 'sugar', safety_level: null },
                  { description: null, name: 'snack', safety_level: null },
                  { description: null, name: 'corn syrup', safety_level: null },
                  { description: null, name: 'drink', safety_level: null },
                  { description: null, name: 'milk', safety_level: null },
                  { description: null, name: 'spread', safety_level: null },
                  { description: null, name: 'vegetable oil', safety_level: null },
                  { description: null, name: 'yeast nutrient', safety_level: null },
                  { description: null, name: 'palm kernel oil', safety_level: null },
                  { description: null, name: 'artificial ingredient', safety_level: null },
                  { description: null, name: 'stabilizer', safety_level: null },
                  { description: null, name: 'additive', safety_level: null },
                  { description: null, name: 'nutrient', safety_level: null },
                  { description: null, name: 'soybean oil', safety_level: null },
                  { description: null, name: 'supplement', safety_level: null },
                  { description: null, name: 'mineral', safety_level: null },
                  { description: null, name: 'artificial flavor', safety_level: 'medium' },
                  { description: null, name: 'skim milk', safety_level: null },
                  { description: null, name: 'peanuts', safety_level: null },
                  { description: null, name: 'corn syrup solids', safety_level: 'medium' },
                  {
                    description:
                      'Unlike partially hydrogenated oils, fully hydrogenated oils do not contain trans fat and thus are currently considered safer.',
                    name: 'hydrogenated palm kernel oil',
                    safety_level: 'high',
                  },
                  { description: null, name: 'cottonseed oil', safety_level: null },
                  { description: null, name: 'milkfat', safety_level: 'high' },
                  { description: null, name: 'lactose', safety_level: null },
                  { description: null, name: 'corn syrup', safety_level: null },
                  { description: null, name: 'cocoa butter', safety_level: 'high' },
                  { description: null, name: 'tbhq to maintain freshness', safety_level: null },
                  { description: null, name: 'peanut butter', safety_level: null },
                  { description: null, name: 'egg whites', safety_level: null },
                  { description: null, name: 'sugar', safety_level: null },
                  { description: null, name: 'milk chocolate', safety_level: null },
                  { description: null, name: 'palm oil', safety_level: null },
                  { description: null, name: 'artificial flavor', safety_level: null },
                  { description: null, name: 'salt', safety_level: null },
                  { description: null, name: 'almonds', safety_level: null },
                  {
                    description: null,
                    name: 'skim milk less than 2% - lactose',
                    safety_level: null,
                  },
                  { description: null, name: 'vegetable oil', safety_level: null },
                  { description: null, name: 'less than 2% - glycerin', safety_level: null },
                  { description: null, name: 'dextrose', safety_level: 'high' },
                  {
                    description: 'Soy lecithin is not a concern for most people allergic to soy.',
                    name: 'soy lecithin',
                    safety_level: 'high',
                  },
                  { description: null, name: 'invert sugar', safety_level: 'high' },
                  { description: null, name: 'chocolate', safety_level: null },
                  { description: null, name: 'rapeseed oil', safety_level: null },
                  {
                    description: null,
                    name: 'partially hydrogenated soybean oil',
                    safety_level: 'low',
                  },
                  { description: null, name: 'calcium carbonate', safety_level: 'high' },
                  {
                    description: null,
                    name: 'partially hydrogenated palm kernel oil',
                    safety_level: 'low',
                  },
                  {
                    description: null,
                    name: 'artificial flavor.snickers brand',
                    safety_level: null,
                  },
                  { description: null, name: 'snickers brand almond bar', safety_level: null },
                ],
                likes: 0,
                nutrition: {
                  caloricBreakdown: { percentCarbs: 57.78, percentFat: 20, percentProtein: 22.22 },
                  nutrients: [
                    { amount: 4, name: 'Fat', percentOfDailyNeeds: 6.15, unit: 'g' },
                    { amount: 10, name: 'Protein', percentOfDailyNeeds: 20, unit: 'g' },
                    { amount: 200, name: 'Calories', percentOfDailyNeeds: 10, unit: 'cal' },
                    { amount: 26, name: 'Carbohydrates', percentOfDailyNeeds: 9.45, unit: 'g' },
                  ],
                },
                price: 324,
                servings: { number: 8, size: 4, unit: 'pieces' },
                spoonacularScore: 0,
                title: 'SNICKERS Minis Size Chocolate Candy Bars Variety Mix 10.5-oz. Bag',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsIdNutritionLabelRoute = createRoute({
  method: 'get',
  path: '/food/products/{id}/nutritionLabel',
  tags: ['products'],
  summary: 'Product Nutrition Label Widget',
  description: "Get a product's nutrition label as an HTML widget.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Product-Nutrition-Label-Widget',
  },
  operationId: 'productNutritionLabelWidget',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The product id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 22347, type: 'number' },
            style: 'simple',
          },
          example: 22347,
        }),
    }),
    query: z.object({
      defaultCss: DefaultCssParamsSchema,
      showOptionalNutrients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show optional nutrients.',
            explode: false,
            in: 'query',
            name: 'showOptionalNutrients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showZeroValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show zero values.',
            explode: false,
            in: 'query',
            name: 'showZeroValues',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show a list of ingredients.',
            explode: false,
            in: 'query',
            name: 'showIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsIdNutritionLabelPngRoute = createRoute({
  method: 'get',
  path: '/food/products/{id}/nutritionLabel.png',
  tags: ['products'],
  summary: 'Product Nutrition Label Image',
  description: "Get a product's nutrition label as an image.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Product-Nutrition-Label-Image',
  },
  operationId: 'productNutritionLabelImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The product id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 22347, type: 'number' },
            style: 'simple',
          },
          example: 22347,
        }),
    }),
    query: z.object({
      showOptionalNutrients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show optional nutrients.',
            explode: false,
            in: 'query',
            name: 'showOptionalNutrients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showZeroValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show zero values.',
            explode: false,
            in: 'query',
            name: 'showZeroValues',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show a list of ingredients.',
            explode: false,
            in: 'query',
            name: 'showIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsIdNutritionWidgetRoute = createRoute({
  method: 'get',
  path: '/food/products/{id}/nutritionWidget',
  tags: ['products'],
  summary: 'Product Nutrition by ID Widget',
  description: "Visualize a product's nutritional information as HTML including CSS.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Product-Nutrition-by-ID-Widget',
  },
  operationId: 'visualizeProductNutritionByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the product.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 7657, type: 'number' },
            style: 'simple',
          },
          example: 7657,
        }),
    }),
    query: z.object({ defaultCss: DefaultCssParamsSchema }),
    headers: z.object({ Accept: AcceptParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'text/html': { schema: z.string(), examples: { 'example-1': { value: 'string' } } },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodProductsIdNutritionWidgetPngRoute = createRoute({
  method: 'get',
  path: '/food/products/{id}/nutritionWidget.png',
  tags: ['products'],
  summary: 'Product Nutrition by ID Image',
  description: "Visualize a product's nutritional information as an image.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Product-Nutrition-by-ID-Image',
  },
  operationId: 'productNutritionByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the product.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 7657, type: 'number' },
            style: 'simple',
          },
          example: 7657,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodRestaurantsSearchRoute = createRoute({
  method: 'get',
  path: '/food/restaurants/search',
  summary: 'Search Restaurants',
  description:
    'Search through thousands of restaurants (in North America) by location, cuisine, budget, and more.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Restaurants',
  },
  operationId: 'searchRestaurants',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The search query.',
            explode: false,
            in: 'query',
            name: 'query',
            required: false,
            schema: { example: 'beach cafe', type: 'string' },
            style: 'form',
          },
          example: 'beach cafe',
        }),
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "The latitude of the user's location.",
            explode: false,
            in: 'query',
            name: 'lat',
            required: false,
            schema: { example: 37.7786357, type: 'number' },
            style: 'form',
          },
          example: 37.7786357,
        }),
      lng: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The longitude of the user\'s location.".',
            explode: false,
            in: 'query',
            name: 'lng',
            required: false,
            schema: { example: -122.3918135, type: 'number' },
            style: 'form',
          },
          example: -122.3918135,
        }),
      distance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The distance around the location in miles.',
            explode: false,
            in: 'query',
            name: 'distance',
            required: false,
            schema: { example: 2, type: 'number' },
            style: 'form',
          },
          example: 2,
        }),
      budget: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "The user's budget for a meal in USD.",
            explode: false,
            in: 'query',
            name: 'budget',
            required: false,
            schema: { example: 20, type: 'number' },
            style: 'form',
          },
          example: 20,
        }),
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The cuisine of the restaurant.',
            explode: false,
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { example: 'italian', type: 'string' },
            style: 'form',
          },
          example: 'italian',
        }),
      'min-rating': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum rating of the restaurant between 0 and 5.',
            explode: false,
            in: 'query',
            name: 'min-rating',
            required: false,
            schema: { example: 4.4, type: 'number' },
            style: 'form',
          },
          example: 4.4,
        }),
      'is-open': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether the restaurant must be open at the time of search.',
            explode: false,
            in: 'query',
            name: 'is-open',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "How to sort the results, one of the following 'cheapest', 'fastest', 'rating', 'distance' or the default 'relevance'.",
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { example: 'distance', type: 'string' },
            style: 'form',
          },
          example: 'distance',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page number of results.',
            explode: false,
            in: 'query',
            name: 'page',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              restaurants: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      address: z
                        .object({
                          city: z.string().exactOptional(),
                          country: z.string().exactOptional(),
                          lat: z.number().exactOptional(),
                          latitude: z.number().exactOptional(),
                          lon: z.number().exactOptional(),
                          longitude: z.number().exactOptional(),
                          state: z.string().exactOptional(),
                          street_addr: z.string().exactOptional(),
                          street_addr_2: z.string().exactOptional(),
                          zipcode: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      aggregated_rating_count: z.int().exactOptional(),
                      cuisines: z.array(z.string()).exactOptional(),
                      delivery_enabled: z.boolean().exactOptional(),
                      description: z.string().exactOptional(),
                      dollar_signs: z.int().exactOptional(),
                      food_photos: z.array(z.string()).exactOptional(),
                      is_open: z.boolean().exactOptional(),
                      local_hours: z
                        .object({
                          delivery: z
                            .object({
                              Friday: z.string().exactOptional(),
                              Monday: z.string().exactOptional(),
                              Saturday: z.string().exactOptional(),
                              Sunday: z.string().exactOptional(),
                              Thursday: z.string().exactOptional(),
                              Tuesday: z.string().exactOptional(),
                              Wednesday: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          dine_in: z
                            .object({
                              Friday: z.string().exactOptional(),
                              Monday: z.string().exactOptional(),
                              Saturday: z.string().exactOptional(),
                              Sunday: z.string().exactOptional(),
                              Thursday: z.string().exactOptional(),
                              Tuesday: z.string().exactOptional(),
                              Wednesday: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          operational: z
                            .object({
                              Friday: z.string().exactOptional(),
                              Monday: z.string().exactOptional(),
                              Saturday: z.string().exactOptional(),
                              Sunday: z.string().exactOptional(),
                              Thursday: z.string().exactOptional(),
                              Tuesday: z.string().exactOptional(),
                              Wednesday: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          pickup: z
                            .object({
                              Friday: z.string().exactOptional(),
                              Monday: z.string().exactOptional(),
                              Saturday: z.string().exactOptional(),
                              Sunday: z.string().exactOptional(),
                              Thursday: z.string().exactOptional(),
                              Tuesday: z.string().exactOptional(),
                              Wednesday: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      logo_photos: z.array(z.string()).exactOptional(),
                      miles: z.number().exactOptional(),
                      name: z.string().exactOptional(),
                      offers_first_party_delivery: z.boolean().exactOptional(),
                      offers_third_party_delivery: z.boolean().exactOptional(),
                      phone_number: z.int().exactOptional(),
                      pickup_enabled: z.boolean().exactOptional(),
                      store_photos: z.array(z.object({})).exactOptional(),
                      type: z.string().exactOptional(),
                      weighted_rating_value: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  restaurants: [
                    {
                      _id: 'a8b49c84-a92d-4f06-802e-467af49feaf0',
                      address: {
                        city: 'San Francisco',
                        country: 'US',
                        lat: 37.78129959,
                        latitude: 37.78129959,
                        lon: -122.38869477,
                        longitude: -122.38869477,
                        state: 'CA',
                        street_addr: '800 The Embarcadero',
                        street_addr_2: '',
                        zipcode: '94107',
                      },
                      aggregated_rating_count: 191,
                      cuisines: [
                        'Breakfast',
                        'Dinner',
                        'Italian',
                        'Lunch',
                        'Pickup',
                        'Pizza',
                        'Salads',
                        'Sandwich',
                        'Sandwiches',
                        'Takeout',
                      ],
                      delivery_enabled: true,
                      description: 'Italian, Pizza',
                      dollar_signs: 2,
                      food_photos: [
                        'https://cdn-img.mealme.ai/f3d0e396f1b552927092bafa65ef2cc4e8b57c22/68747470733a2f2f6d656469612d63646e2e677275626875622e636f6d2f696d6167652f75706c6f61642f62657462706b3570747a37756a306279616b6a672e6a7067',
                      ],
                      is_open: false,
                      local_hours: {
                        delivery: {
                          Friday: '07:00AM - 09:00PM',
                          Monday: '07:00AM - 09:00PM',
                          Saturday: '08:00AM - 09:00PM',
                          Sunday: '08:00AM - 09:00PM',
                          Thursday: '07:00AM - 09:00PM',
                          Tuesday: '07:00AM - 09:00PM',
                          Wednesday: '07:00AM - 09:00PM',
                        },
                        dine_in: {
                          Friday: '07:00AM - 09:00PM',
                          Monday: '07:00AM - 09:00PM',
                          Saturday: '08:00AM - 09:00PM',
                          Sunday: '08:00AM - 09:00PM',
                          Thursday: '07:00AM - 09:00PM',
                          Tuesday: '07:00AM - 09:00PM',
                          Wednesday: '07:00AM - 09:00PM',
                        },
                        operational: {
                          Friday: '07:00AM - 09:00PM',
                          Monday: '07:00AM - 09:00PM',
                          Saturday: '08:00AM - 09:00PM',
                          Sunday: '08:00AM - 09:00PM',
                          Thursday: '07:00AM - 09:00PM',
                          Tuesday: '07:00AM - 09:00PM',
                          Wednesday: '07:00AM - 09:00PM',
                        },
                        pickup: {
                          Friday: '07:00AM - 09:00PM',
                          Monday: '07:00AM - 09:00PM',
                          Saturday: '08:00AM - 09:00PM',
                          Sunday: '08:00AM - 09:00PM',
                          Thursday: '07:00AM - 09:00PM',
                          Tuesday: '07:00AM - 09:00PM',
                          Wednesday: '07:00AM - 09:00PM',
                        },
                      },
                      logo_photos: [
                        'https://cdn-img.mealme.ai/25b450d4e72eea47dccd744c326e49e23343bd0d/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f677275626875622f696d6167652f75706c6f61642f76313531383830323236382f63686a6a356173716f6766696e726f7671376f732e706e67',
                      ],
                      miles: 0.2508434381960197,
                      name: 'South Beach Cafe',
                      offers_first_party_delivery: false,
                      offers_third_party_delivery: true,
                      phone_number: 14159741115,
                      pickup_enabled: true,
                      store_photos: [],
                      type: 'restaurant',
                      weighted_rating_value: 4.725654450261779,
                    },
                  ],
                },
              },
              required: [],
            }),
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodSearchRoute = createRoute({
  method: 'get',
  path: '/food/search',
  tags: ['misc'],
  summary: 'Search All Food',
  description:
    'Search all food content with one call. That includes recipes, grocery products, menu items, simple foods (ingredients), and food videos.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-All-Food',
  },
  operationId: 'searchAllFood',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'The search query.',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'apple', type: 'string' },
            style: 'form',
          },
          example: 'apple',
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              limit: z.int(),
              offset: z.int(),
              query: z.string().min(1),
              searchResults: z
                .array(
                  z
                    .object({
                      name: z.string().min(1),
                      results: z
                        .array(
                          z
                            .object({
                              content: z.string().min(0).nullable(),
                              id: z.string(),
                              image: z.string().min(1).nullable(),
                              link: z.string().min(1).nullable(),
                              name: z.string().min(1),
                              relevance: z.number(),
                              type: z.string().min(1),
                            })
                            .openapi({
                              required: [
                                'id',
                                'name',
                                'image',
                                'link',
                                'type',
                                'relevance',
                                'content',
                              ],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      totalResults: z.int(),
                    })
                    .openapi({ required: ['name', 'totalResults'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalResults: z.int(),
            })
            .openapi({
              description: '',
              required: ['query', 'totalResults', 'limit', 'offset', 'searchResults'],
              'x-examples': {
                'example-1': {
                  limit: 2,
                  offset: 0,
                  query: 'apple',
                  searchResults: [
                    {
                      name: 'Recipes',
                      results: [
                        {
                          content: 'Apple Cake might be just the dessert you are searching for...',
                          id: 632485,
                          image: 'https://spoonacular.com/recipeImages/632485-312x231.jpg',
                          link: 'https://spoonacular.com/recipes/apple-cake-632485',
                          name: 'Apple Cake',
                          relevance: 10000,
                          type: 'HTML',
                        },
                        {
                          content:
                            'Apple Crumble might be just the dessert you are searching for...',
                          id: 632522,
                          image: 'https://spoonacular.com/recipeImages/632522-312x231.jpg',
                          link: 'https://spoonacular.com/recipes/apple-crumble-632522',
                          name: 'Apple Crumble',
                          relevance: 9999,
                          type: 'HTML',
                        },
                      ],
                      totalResults: 167,
                    },
                    {
                      name: 'Products',
                      results: [
                        {
                          image: 'https://spoonacular.com/productImages/469604-312x231.jpg',
                          link: 'https://spoonacular.com/products/pleasant-valley-apple-wine-469604',
                          name: 'Pleasant Valley Apple Wine',
                          relevance: 10000,
                          type: 'HTML',
                        },
                        {
                          id: 428573,
                          image: 'https://spoonacular.com/productImages/428573-312x231.jpg',
                          link: 'https://spoonacular.com/products/nv-georgetown-vineyards-apple-wine-428573',
                          name: 'NV Georgetown Vineyards Apple Wine',
                          relevance: 9999,
                          type: 'HTML',
                        },
                      ],
                      totalResults: 3219,
                    },
                    {
                      name: 'Menu Items',
                      results: [
                        {
                          id: 334550,
                          image: null,
                          link: 'https://spoonacular.com/menu-items/old-chicago-applewood-spiced-bbq-chicken-pizza-chicago-thick-12-inch--334550',
                          name: 'Old Chicago Applewood Spiced BBQ Chicken Pizza, Chicago Thick, 12 Inch (Slice)',
                          relevance: 10000,
                          type: 'HTML',
                        },
                        {
                          id: 422013,
                          image: null,
                          link: 'https://spoonacular.com/menu-items/huddle-house-apple-cobbler-a-la-mode-422013',
                          name: 'Huddle House Apple Cobbler a la mode',
                          relevance: 9999,
                          type: 'HTML',
                        },
                      ],
                      totalResults: 2410,
                    },
                    {
                      name: 'Articles',
                      results: [
                        {
                          image:
                            'https://spoonacular.com/cdn/ingredients_100x100/braeburn-apples.jpg',
                          link: 'https://spoonacular.com/academy/apples',
                          name: 'Apples',
                          relevance: 90.46,
                          type: 'HTML',
                        },
                        {
                          image:
                            'https://spoonacular.com/cdn/ingredients_100x100/red-wine-vinegar.jpg',
                          link: 'https://spoonacular.com/academy/vinegar',
                          name: 'Vinegar',
                          relevance: 23.8,
                          type: 'HTML',
                        },
                      ],
                      totalResults: 28,
                    },
                    {
                      name: 'Videos',
                      results: [
                        {
                          content:
                            'FULL RECIPE HERE: https://tatyanaseverydayfood.com/recipe-items/pineapple-bundt-cake/...',
                          id: 'G0HENy59YkE',
                          image: 'https://i.ytimg.com/vi/G0HENy59YkE/hqdefault.jpg',
                          link: 'https://www.youtube.com/watch?v=G0HENy59YkE',
                          name: 'Pineapple Bundt Cake',
                          relevance: 10000,
                          type: 'YOUTUBE_VIDEO',
                        },
                        {
                          content:
                            'RECIPE: Below in description.\nThese Pineapple Shrimp Tacos cook in 5 minutes and assembly is a breeze...',
                          id: 'xEENgO5Z5To',
                          image: 'https://i.ytimg.com/vi/xEENgO5Z5To/mqdefault.jpg',
                          link: null,
                          name: 'Pineapple Shrimp Tacos',
                          relevance: 9999,
                          type: 'YOUTUBE_VIDEO',
                        },
                      ],
                      totalResults: 2,
                    },
                    {
                      name: 'Simple Foods',
                      results: [
                        {
                          id: 78541,
                          image: 'apple.jpg',
                          name: 'apple',
                          relevance: 10000,
                          type: 'HTML',
                        },
                        {
                          id: 8782,
                          image: 'applesauce.png',
                          name: 'applesauce',
                          relevance: 9999,
                          type: 'HTML',
                        },
                      ],
                      totalResults: 2,
                    },
                  ],
                  totalResults: 5826,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                limit: 2,
                offset: 0,
                query: 'apple',
                searchResults: [
                  {
                    name: 'Recipes',
                    results: [
                      {
                        content: 'Apple Cake might be just the dessert you are searching for...',
                        id: '632485',
                        image: 'https://spoonacular.com/recipeImages/632485-312x231.jpg',
                        link: 'https://spoonacular.com/recipes/apple-cake-632485',
                        name: 'Apple Cake',
                        relevance: 10000,
                        type: 'HTML',
                      },
                      {
                        content: 'Apple Crumble might be just the dessert you are searching for...',
                        id: '632522',
                        image: 'https://spoonacular.com/recipeImages/632522-312x231.jpg',
                        link: 'https://spoonacular.com/recipes/apple-crumble-632522',
                        name: 'Apple Crumble',
                        relevance: 9999,
                        type: 'HTML',
                      },
                    ],
                    totalResults: 167,
                  },
                  {
                    name: 'Products',
                    results: [
                      {
                        content: null,
                        id: '5487',
                        image: 'https://spoonacular.com/productImages/469604-312x231.jpg',
                        link: 'https://spoonacular.com/products/pleasant-valley-apple-wine-469604',
                        name: 'Pleasant Valley Apple Wine',
                        relevance: 10000,
                        type: 'HTML',
                      },
                      {
                        content: null,
                        id: '428573',
                        image: 'https://spoonacular.com/productImages/428573-312x231.jpg',
                        link: 'https://spoonacular.com/products/nv-georgetown-vineyards-apple-wine-428573',
                        name: 'NV Georgetown Vineyards Apple Wine',
                        relevance: 9999,
                        type: 'HTML',
                      },
                    ],
                    totalResults: 3219,
                  },
                  {
                    name: 'Menu Items',
                    results: [
                      {
                        content: null,
                        id: '334550',
                        image: null,
                        link: 'https://spoonacular.com/menu-items/old-chicago-applewood-spiced-bbq-chicken-pizza-chicago-thick-12-inch--334550',
                        name: 'Old Chicago Applewood Spiced BBQ Chicken Pizza, Chicago Thick, 12 Inch (Slice)',
                        relevance: 10000,
                        type: 'HTML',
                      },
                      {
                        content: null,
                        id: '422013',
                        image: null,
                        link: 'https://spoonacular.com/menu-items/huddle-house-apple-cobbler-a-la-mode-422013',
                        name: 'Huddle House Apple Cobbler a la mode',
                        relevance: 9999,
                        type: 'HTML',
                      },
                    ],
                    totalResults: 2410,
                  },
                  {
                    name: 'Articles',
                    results: [
                      {
                        content: null,
                        id: '578',
                        image:
                          'https://spoonacular.com/cdn/ingredients_100x100/braeburn-apples.jpg',
                        link: 'https://spoonacular.com/academy/apples',
                        name: 'Apples',
                        relevance: 90.46,
                        type: 'HTML',
                      },
                      {
                        content: null,
                        id: '252',
                        image:
                          'https://spoonacular.com/cdn/ingredients_100x100/red-wine-vinegar.jpg',
                        link: 'https://spoonacular.com/academy/vinegar',
                        name: 'Vinegar',
                        relevance: 23.8,
                        type: 'HTML',
                      },
                    ],
                    totalResults: 28,
                  },
                  {
                    name: 'Videos',
                    results: [
                      {
                        content:
                          'FULL RECIPE HERE: https://tatyanaseverydayfood.com/recipe-items/pineapple-bundt-cake/...',
                        id: 'G0HENy59YkE',
                        image: 'https://i.ytimg.com/vi/G0HENy59YkE/hqdefault.jpg',
                        link: 'https://www.youtube.com/watch?v=G0HENy59YkE',
                        name: 'Pineapple Bundt Cake',
                        relevance: 10000,
                        type: 'YOUTUBE_VIDEO',
                      },
                      {
                        content:
                          'RECIPE: Below in description.\nThese Pineapple Shrimp Tacos cook in 5 minutes and assembly is a breeze...',
                        id: 'xEENgO5Z5To',
                        image: 'https://i.ytimg.com/vi/xEENgO5Z5To/mqdefault.jpg',
                        link: null,
                        name: 'Pineapple Shrimp Tacos',
                        relevance: 9999,
                        type: 'YOUTUBE_VIDEO',
                      },
                    ],
                    totalResults: 2,
                  },
                  {
                    name: 'Simple Foods',
                    results: [
                      {
                        content: null,
                        id: '78541',
                        image: 'apple.jpg',
                        link: null,
                        name: 'apple',
                        relevance: 10000,
                        type: 'HTML',
                      },
                      {
                        content: null,
                        id: '8782',
                        image: 'applesauce.png',
                        link: null,
                        name: 'applesauce',
                        relevance: 9999,
                        type: 'HTML',
                      },
                    ],
                    totalResults: 2,
                  },
                ],
                totalResults: 5826,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodSiteSearchRoute = createRoute({
  method: 'get',
  path: '/food/site/search',
  tags: ['misc'],
  summary: 'Search Site Content',
  description:
    "Search spoonacular's site content. You'll be able to find everything that you could also find using the search suggestions on spoonacular.com. This is a suggest API so you can send partial strings as queries.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Site-Content',
  },
  operationId: 'searchSiteContent',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'The query to search for. You can also use partial queries such as "spagh" to already find spaghetti recipes, articles, grocery products, and other content.',
            explode: false,
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'past', type: 'string' },
            style: 'form',
          },
          example: 'past',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              Articles: z
                .array(
                  z
                    .object({
                      dataPoints: z.array(z.object({})).exactOptional(),
                      image: z.string().min(1),
                      link: z.string().min(1),
                      name: z.string().min(1),
                    })
                    .openapi({ required: ['image', 'link', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              'Grocery Products': z
                .array(
                  z
                    .object({
                      dataPoints: z
                        .array(
                          z
                            .object({ key: z.string().min(1), value: z.string().min(1) })
                            .openapi({ required: ['key', 'value'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      image: z.string().min(1),
                      link: z.string().min(1),
                      name: z.string().min(1),
                    })
                    .openapi({ required: ['image', 'link', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              'Menu Items': z
                .array(
                  z
                    .object({
                      dataPoints: z
                        .array(
                          z
                            .object({ key: z.string().min(1), value: z.string().min(1) })
                            .openapi({ required: ['key', 'value'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      image: z.string().min(1),
                      link: z.string().min(1),
                      name: z.string().min(1),
                    })
                    .openapi({ required: ['image', 'link', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              Recipes: z
                .array(
                  z
                    .object({
                      dataPoints: z
                        .array(
                          z
                            .object({ key: z.string().min(1), value: z.string().min(1) })
                            .openapi({ required: ['key', 'value'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      image: z.string().min(1),
                      link: z.string().min(1),
                      name: z.string().min(1),
                    })
                    .openapi({ required: ['image', 'link', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['Articles', 'Grocery Products', 'Menu Items', 'Recipes'],
              'x-examples': {
                'example-1': {
                  Articles: [
                    {
                      dataPoints: [],
                      image:
                        'https://spoonacular.com/application/frontend/images/academy/vietnamese-cuisine.jpg',
                      link: 'https://spoonacular.com/academy/vietnamese',
                      name: 'Traditional Vietnamese Recipes',
                    },
                    {
                      dataPoints: [],
                      image:
                        'https://spoonacular.com/application/frontend/images/academy/thai-cuisine.jpg',
                      link: 'https://spoonacular.com/academy/thai',
                      name: 'Authentic Thai Recipes',
                    },
                    {
                      dataPoints: [],
                      image:
                        'https://spoonacular.com/application/frontend/images/academy/korean-food.jpg',
                      link: 'https://spoonacular.com/academy/korean',
                      name: 'Typical Korean Recipes',
                    },
                  ],
                  'Grocery Products': [
                    {
                      dataPoints: [
                        { key: 'Calories', value: '30 Calories' },
                        { key: 'Protein', value: '2g Protein' },
                        { key: 'Fat', value: '0.0g Total Fat' },
                        { key: 'Carbs', value: '6g Carbs' },
                      ],
                      image: 'https://spoonacular.com/productImages/218909-312x231.jpg',
                      link: 'https://spoonacular.com/products/vine-ripe-tomato-paste-218909',
                      name: 'Vine-ripe Tomato Paste',
                    },
                    {
                      dataPoints: [
                        { key: 'Calories', value: '30 Calories' },
                        { key: 'Protein', value: '2g Protein' },
                        { key: 'Fat', value: '0.0g Total Fat' },
                        { key: 'Carbs', value: '6g Carbs' },
                      ],
                      image: 'https://spoonacular.com/productImages/178883-312x231.jpg',
                      link: 'https://spoonacular.com/products/contadina-tomato-paste-178883',
                      name: 'Contadina Tomato Paste',
                    },
                    {
                      dataPoints: [
                        { key: 'Calories', value: '30 Calories' },
                        { key: 'Protein', value: '2g Protein' },
                        { key: 'Fat', value: '0.0g Total Fat' },
                        { key: 'Carbs', value: '6g Carbs' },
                      ],
                      image: 'https://spoonacular.com/productImages/137031-312x231.jpg',
                      link: 'https://spoonacular.com/products/cento-tomato-paste-137031',
                      name: 'Cento Tomato Paste',
                    },
                  ],
                  'Menu Items': [
                    {
                      dataPoints: [
                        { key: 'Calories', value: '230 Calories' },
                        { key: 'Protein', value: '1g Protein' },
                        { key: 'Fat', value: '15g Total Fat' },
                        { key: 'Carbs', value: '23g Carbs' },
                      ],
                      image: 'https://spoonacular.com/menuItemImages/stir-fry.jpg',
                      link: 'https://spoonacular.com/menu-items/thai-express-stir-fry-chilli-paste-401670',
                      name: 'Thai Express Stir-Fry, Chilli Paste',
                    },
                  ],
                  Recipes: [
                    {
                      dataPoints: [
                        { key: 'Cost', value: '$10.51 per serving' },
                        { key: 'Calories', value: '400 Calories' },
                        { key: 'Protein', value: '9g Protein' },
                        { key: 'Fat', value: '32g Total Fat' },
                        { key: 'Carbs', value: '26g Carbs' },
                      ],
                      image: 'https://webknox.com/recipeImages/224844-556x370.jpg',
                      link: 'https://spoonacular.com/recipes/chermoula-paste-224844',
                      name: 'Chermoula Paste',
                    },
                    {
                      dataPoints: [
                        { key: 'Cost', value: '$8.37 per serving' },
                        { key: 'Calories', value: '3560 Calories' },
                        { key: 'Protein', value: '119g Protein' },
                        { key: 'Fat', value: '319g Total Fat' },
                        { key: 'Carbs', value: '54g Carbs' },
                      ],
                      image: 'https://webknox.com/recipeImages/146847-556x370.jpg',
                      link: 'https://spoonacular.com/recipes/lulu-paste-146847',
                      name: 'Lulu Paste',
                    },
                    {
                      dataPoints: [
                        { key: 'Cost', value: '$6.68 per serving' },
                        { key: 'Calories', value: '990 Calories' },
                        { key: 'Protein', value: '53g Protein' },
                        { key: 'Fat', value: '86g Total Fat' },
                        { key: 'Carbs', value: '0.82g Carbs' },
                      ],
                      image: 'https://webknox.com/recipeImages/84670-556x370.jpg',
                      link: 'https://spoonacular.com/recipes/steak-paste-84670',
                      name: 'Steak Paste',
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                Articles: [
                  {
                    dataPoints: [],
                    image:
                      'https://spoonacular.com/application/frontend/images/academy/vietnamese-cuisine.jpg',
                    link: 'https://spoonacular.com/academy/vietnamese',
                    name: 'Traditional Vietnamese Recipes',
                  },
                  {
                    dataPoints: [],
                    image:
                      'https://spoonacular.com/application/frontend/images/academy/thai-cuisine.jpg',
                    link: 'https://spoonacular.com/academy/thai',
                    name: 'Authentic Thai Recipes',
                  },
                  {
                    dataPoints: [],
                    image:
                      'https://spoonacular.com/application/frontend/images/academy/korean-food.jpg',
                    link: 'https://spoonacular.com/academy/korean',
                    name: 'Typical Korean Recipes',
                  },
                ],
                'Grocery Products': [
                  {
                    dataPoints: [
                      { key: 'Calories', value: '30 Calories' },
                      { key: 'Protein', value: '2g Protein' },
                      { key: 'Fat', value: '0.0g Total Fat' },
                      { key: 'Carbs', value: '6g Carbs' },
                    ],
                    image: 'https://spoonacular.com/productImages/218909-312x231.jpg',
                    link: 'https://spoonacular.com/products/vine-ripe-tomato-paste-218909',
                    name: 'Vine-ripe Tomato Paste',
                  },
                  {
                    dataPoints: [
                      { key: 'Calories', value: '30 Calories' },
                      { key: 'Protein', value: '2g Protein' },
                      { key: 'Fat', value: '0.0g Total Fat' },
                      { key: 'Carbs', value: '6g Carbs' },
                    ],
                    image: 'https://spoonacular.com/productImages/178883-312x231.jpg',
                    link: 'https://spoonacular.com/products/contadina-tomato-paste-178883',
                    name: 'Contadina Tomato Paste',
                  },
                  {
                    dataPoints: [
                      { key: 'Calories', value: '30 Calories' },
                      { key: 'Protein', value: '2g Protein' },
                      { key: 'Fat', value: '0.0g Total Fat' },
                      { key: 'Carbs', value: '6g Carbs' },
                    ],
                    image: 'https://spoonacular.com/productImages/137031-312x231.jpg',
                    link: 'https://spoonacular.com/products/cento-tomato-paste-137031',
                    name: 'Cento Tomato Paste',
                  },
                ],
                'Menu Items': [
                  {
                    dataPoints: [
                      { key: 'Calories', value: '230 Calories' },
                      { key: 'Protein', value: '1g Protein' },
                      { key: 'Fat', value: '15g Total Fat' },
                      { key: 'Carbs', value: '23g Carbs' },
                    ],
                    image: 'https://spoonacular.com/menuItemImages/stir-fry.jpg',
                    link: 'https://spoonacular.com/menu-items/thai-express-stir-fry-chilli-paste-401670',
                    name: 'Thai Express Stir-Fry, Chilli Paste',
                  },
                ],
                Recipes: [
                  {
                    dataPoints: [
                      { key: 'Cost', value: '$10.51 per serving' },
                      { key: 'Calories', value: '400 Calories' },
                      { key: 'Protein', value: '9g Protein' },
                      { key: 'Fat', value: '32g Total Fat' },
                      { key: 'Carbs', value: '26g Carbs' },
                    ],
                    image: 'https://webknox.com/recipeImages/224844-556x370.jpg',
                    link: 'https://spoonacular.com/recipes/chermoula-paste-224844',
                    name: 'Chermoula Paste',
                  },
                  {
                    dataPoints: [
                      { key: 'Cost', value: '$8.37 per serving' },
                      { key: 'Calories', value: '3560 Calories' },
                      { key: 'Protein', value: '119g Protein' },
                      { key: 'Fat', value: '319g Total Fat' },
                      { key: 'Carbs', value: '54g Carbs' },
                    ],
                    image: 'https://webknox.com/recipeImages/146847-556x370.jpg',
                    link: 'https://spoonacular.com/recipes/lulu-paste-146847',
                    name: 'Lulu Paste',
                  },
                  {
                    dataPoints: [
                      { key: 'Cost', value: '$6.68 per serving' },
                      { key: 'Calories', value: '990 Calories' },
                      { key: 'Protein', value: '53g Protein' },
                      { key: 'Fat', value: '86g Total Fat' },
                      { key: 'Carbs', value: '0.82g Carbs' },
                    ],
                    image: 'https://webknox.com/recipeImages/84670-556x370.jpg',
                    link: 'https://spoonacular.com/recipes/steak-paste-84670',
                    name: 'Steak Paste',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodTriviaRandomRoute = createRoute({
  method: 'get',
  path: '/food/trivia/random',
  tags: ['misc'],
  summary: 'Random Food Trivia',
  description: 'Returns random food trivia.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Random-Food-Trivia',
  },
  operationId: 'getRandomFoodTrivia',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ text: z.string().min(1) })
            .openapi({
              description: '',
              required: ['text'],
              'x-examples': {
                'example-1': {
                  text: 'The red food-coloring carmine used in Skittles and other candies is made from boiled cochineal bugs, a type of beetle.',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                text: 'The red food-coloring carmine used in Skittles and other candies is made from boiled cochineal bugs, a type of beetle.',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodVideosSearchRoute = createRoute({
  method: 'get',
  path: '/food/videos/search',
  tags: ['misc'],
  summary: 'Search Food Videos',
  description: 'Find recipe and other food related videos.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Food-Videos',
  },
  operationId: 'searchFoodVideos',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of the recipes. See a full list of supported meal types.',
            explode: false,
            in: 'query',
            name: 'type',
            required: false,
            schema: { example: 'main course', type: 'string' },
            style: 'form',
          },
          example: 'main course',
        }),
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cuisine(s) of the recipes. One or more, comma separated. See a full list of supported cuisines.',
            explode: false,
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { example: 'italian', type: 'string' },
            style: 'form',
          },
          example: 'italian',
        }),
      diet: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The diet for which the recipes must be suitable. See a full list of supported diets.',
            explode: false,
            in: 'query',
            name: 'diet',
            required: false,
            schema: { example: 'vegetarian', type: 'string' },
            style: 'form',
          },
          example: 'vegetarian',
        }),
      includeIngredients: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of ingredients that the recipes should contain.',
            explode: false,
            in: 'query',
            name: 'includeIngredients',
            required: false,
            schema: { example: 'tomato,cheese', type: 'string' },
            style: 'form',
          },
          example: 'tomato,cheese',
        }),
      excludeIngredients: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ingredients or ingredient types that the recipes must not contain.',
            explode: false,
            in: 'query',
            name: 'excludeIngredients',
            required: false,
            schema: { example: 'eggs', type: 'string' },
            style: 'form',
          },
          example: 'eggs',
        }),
      minLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum video length in seconds.',
            explode: false,
            in: 'query',
            name: 'minLength',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum video length in seconds.',
            explode: false,
            in: 'query',
            name: 'maxLength',
            required: false,
            schema: { example: 999, type: 'number' },
            style: 'form',
          },
          example: 999,
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              totalResults: z.int(),
              videos: z
                .array(
                  z
                    .object({
                      length: z.int(),
                      rating: z.number(),
                      shortTitle: z.string().min(1),
                      thumbnail: z.string().min(1),
                      title: z.string().min(1),
                      views: z.int(),
                      youTubeId: z.string().min(1),
                    })
                    .openapi({
                      required: [
                        'title',
                        'length',
                        'rating',
                        'shortTitle',
                        'thumbnail',
                        'views',
                        'youTubeId',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['videos', 'totalResults'],
              'x-examples': {
                'example-1': {
                  totalResults: 172,
                  videos: [
                    {
                      length: 370,
                      rating: 0.985984219269103,
                      shortTitle: '8 One-Pot Pastas',
                      thumbnail: 'https://i.ytimg.com/vi/YTZGPCCB2FU/mqdefault.jpg',
                      title: '8 One-Pot Pastas',
                      views: 550467,
                      youTubeId: 'YTZGPCCB2FU',
                    },
                    {
                      length: 333,
                      rating: 1,
                      shortTitle: 'Macaroni salad',
                      thumbnail: 'https://i.ytimg.com/vi/81bn4p8H3Kg/mqdefault.jpg',
                      title:
                        'Macaroni salad - pasta salad recipes - healthy recipe channel - quick tasty recipe - cooking channel',
                      views: 307,
                      youTubeId: '81bn4p8H3Kg',
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                totalResults: 172,
                videos: [
                  {
                    length: 370,
                    rating: 0.985984219269103,
                    shortTitle: '8 One-Pot Pastas',
                    thumbnail: 'https://i.ytimg.com/vi/YTZGPCCB2FU/mqdefault.jpg',
                    title: '8 One-Pot Pastas',
                    views: 550467,
                    youTubeId: 'YTZGPCCB2FU',
                  },
                  {
                    length: 333,
                    rating: 1,
                    shortTitle: 'Macaroni salad',
                    thumbnail: 'https://i.ytimg.com/vi/81bn4p8H3Kg/mqdefault.jpg',
                    title:
                      'Macaroni salad - pasta salad recipes - healthy recipe channel - quick tasty recipe - cooking channel',
                    views: 307,
                    youTubeId: '81bn4p8H3Kg',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodWineDescriptionRoute = createRoute({
  method: 'get',
  path: '/food/wine/description',
  tags: ['wine'],
  summary: 'Wine Description',
  description:
    'Get a simple description of a certain wine, e.g. "malbec", "riesling", or "merlot".',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Wine-Description',
  },
  operationId: 'getWineDescription',
  request: {
    query: z.object({
      wine: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the wine that should be paired, e.g. "merlot", "riesling", or "malbec".',
            explode: false,
            in: 'query',
            name: 'wine',
            required: true,
            schema: { example: 'merlot', type: 'string' },
            style: 'form',
          },
          example: 'merlot',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ wineDescription: z.string().min(1) })
            .openapi({
              description: '',
              required: ['wineDescription'],
              'x-examples': {
                'example-1': {
                  wineDescription: 'Merlot is a dry red wine which is smooth and medium bodied.',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                wineDescription: 'Merlot is a dry red wine which is smooth and medium bodied.',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodWineDishesRoute = createRoute({
  method: 'get',
  path: '/food/wine/dishes',
  tags: ['wine'],
  summary: 'Dish Pairing for Wine',
  description: 'Find a dish that goes well with a given wine.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Dish-Pairing-for-Wine',
  },
  operationId: 'getDishPairingForWine',
  request: {
    query: z.object({
      wine: z
        .string()
        .openapi({
          param: {
            description:
              'The type of wine that should be paired, e.g. "merlot", "riesling", or "malbec".',
            explode: false,
            in: 'query',
            name: 'wine',
            required: true,
            schema: { example: 'malbec', type: 'string' },
            style: 'form',
          },
          example: 'malbec',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ pairings: z.array(z.string()), text: z.string().min(1) })
            .openapi({
              description: '',
              required: ['pairings', 'text'],
              'x-examples': {
                'example-1': {
                  pairings: ['stew', 'steak', 'chili', 'burger'],
                  text: 'Malbec is a dry red wine which is bold and full bodied. It goes especially well with round steak, tri tip steak, steak, boneless pork chops, and pizza burger.',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                pairings: ['stew', 'steak', 'chili', 'burger'],
                text: 'Malbec is a dry red wine which is bold and full bodied. It goes especially well with round steak, tri tip steak, steak, boneless pork chops, and pizza burger.',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodWinePairingRoute = createRoute({
  method: 'get',
  path: '/food/wine/pairing',
  tags: ['wine'],
  summary: 'Wine Pairing',
  description:
    'Find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("italian").',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Wine-Pairing',
  },
  operationId: 'getWinePairing',
  request: {
    query: z.object({
      food: z
        .string()
        .openapi({
          param: {
            description:
              'The food to get a pairing for. This can be a dish ("steak"), an ingredient ("salmon"), or a cuisine ("italian").',
            explode: false,
            in: 'query',
            name: 'food',
            required: true,
            schema: { example: 'steak', type: 'string' },
            style: 'form',
          },
          example: 'steak',
        }),
      maxPrice: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum price for the specific wine recommendation in USD.',
            explode: false,
            in: 'query',
            name: 'maxPrice',
            required: false,
            schema: { example: 50, type: 'number' },
            style: 'form',
          },
          example: 50,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              pairedWines: z.array(z.string()),
              pairingText: z.string().min(1),
              productMatches: z
                .array(
                  z
                    .object({
                      averageRating: z.number(),
                      description: z.any().exactOptional(),
                      id: z.int(),
                      imageUrl: z.string().min(1),
                      link: z.string().min(1),
                      price: z.string().min(1),
                      ratingCount: z.int(),
                      score: z.number(),
                      title: z.string().min(1),
                    })
                    .openapi({
                      required: [
                        'id',
                        'title',
                        'averageRating',
                        'imageUrl',
                        'link',
                        'price',
                        'ratingCount',
                        'score',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['pairedWines', 'pairingText', 'productMatches'],
              'x-examples': {
                'example-1': {
                  pairedWines: ['merlot', 'cabernet sauvignon', 'pinot noir'],
                  pairingText:
                    'Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Sterling Vineyards Merlot with a 5 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.',
                  productMatches: [
                    {
                      averageRating: 1,
                      description: null,
                      id: 428278,
                      imageUrl: 'https://spoonacular.com/productImages/428278-312x231.jpg',
                      link: 'https://www.amazon.com/2014-Sterling-Vineyards-Valley-Merlot/dp/B071FP8NPG?tag=spoonacular-20',
                      price: '$28.99',
                      ratingCount: 1,
                      score: 0.75,
                      title: 'Sterling Vineyards Merlot',
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                pairedWines: ['merlot', 'cabernet sauvignon', 'pinot noir'],
                pairingText:
                  'Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Sterling Vineyards Merlot with a 5 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.',
                productMatches: [
                  {
                    averageRating: 1,
                    description: null,
                    id: 428278,
                    imageUrl: 'https://spoonacular.com/productImages/428278-312x231.jpg',
                    link: 'https://www.amazon.com/2014-Sterling-Vineyards-Valley-Merlot/dp/B071FP8NPG?tag=spoonacular-20',
                    price: '$28.99',
                    ratingCount: 1,
                    score: 0.75,
                    title: 'Sterling Vineyards Merlot',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getFoodWineRecommendationRoute = createRoute({
  method: 'get',
  path: '/food/wine/recommendation',
  tags: ['wine'],
  summary: 'Wine Recommendation',
  description:
    'Get a specific wine recommendation (concrete product) for a given wine type, e.g. "merlot".',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Wine-Recommendation',
  },
  operationId: 'getWineRecommendation',
  request: {
    query: z.object({
      wine: z
        .string()
        .openapi({
          param: {
            description: 'The type of wine to get a specific product recommendation for.',
            explode: false,
            in: 'query',
            name: 'wine',
            required: true,
            schema: { example: 'merlot', type: 'string' },
            style: 'form',
          },
          example: 'merlot',
        }),
      maxPrice: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum price for the specific wine recommendation in USD.',
            explode: false,
            in: 'query',
            name: 'maxPrice',
            required: false,
            schema: { example: 50, type: 'number' },
            style: 'form',
          },
          example: 50,
        }),
      minRating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The minimum rating of the recommended wine between 0 and 1. For example, 0.8 equals 4 out of 5 stars.',
            explode: false,
            in: 'query',
            name: 'minRating',
            required: false,
            schema: { example: 0.7, type: 'number' },
            style: 'form',
          },
          example: 0.7,
        }),
      number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of wine recommendations expected (between 1 and 100).',
            explode: false,
            in: 'query',
            name: 'number',
            required: false,
            schema: { default: 10, example: 3, maximum: 100, minimum: 1, type: 'number' },
            style: 'form',
          },
          example: 3,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              recommendedWines: z
                .array(
                  z
                    .object({
                      averageRating: z.number(),
                      description: z.string().min(1),
                      id: z.int(),
                      imageUrl: z.string().min(1),
                      link: z.string().min(1),
                      price: z.string().min(1),
                      ratingCount: z.int(),
                      score: z.number(),
                      title: z.string().min(1),
                    })
                    .openapi({
                      required: [
                        'id',
                        'title',
                        'averageRating',
                        'description',
                        'imageUrl',
                        'link',
                        'price',
                        'ratingCount',
                        'score',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalFound: z.int(),
            })
            .openapi({
              description: '',
              required: ['recommendedWines', 'totalFound'],
              'x-examples': {
                'example-1': {
                  recommendedWines: [
                    {
                      averageRating: 0.96,
                      description:
                        'Enticing and lively red color; beautifully aromatic with black cherry and ripe plum. On the palate a purity of blackcurrant, cedar and mint flavors blend together seamlessly. Soft and supple, this wine has a medium-bodied mouth-feel with plush tannins that integrate with the generous finish.Our favorite pairings for this wine include chicken parmesan, cedar-planked salmon over wild rice, and mushroom pizza.',
                      id: 447938,
                      imageUrl: 'https://spoonacular.com/productImages/447938-312x231.jpg',
                      link: 'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Frombauer-merlot-2008%2F116883',
                      price: '$25.59',
                      ratingCount: 5,
                      score: 0.8975,
                      title: 'Rombauer Merlot',
                    },
                    {
                      averageRating: 0.9,
                      description:
                        'A ripe and rounded Merlot with notes of plum, blackberry, and hint of spice.',
                      id: 430475,
                      imageUrl: 'https://spoonacular.com/productImages/430475-312x231.jpg',
                      link: 'https://www.amazon.com/Big-Kahuna-Merlot-Red-Wine/dp/B01F5XPTUW?tag=spoonacular-20',
                      price: '$6.99',
                      ratingCount: 4,
                      score: 0.823076923076923,
                      title: 'NV The Big Kahuna Merlot',
                    },
                  ],
                  totalFound: 21,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                recommendedWines: [
                  {
                    averageRating: 0.96,
                    description:
                      'Enticing and lively red color; beautifully aromatic with black cherry and ripe plum. On the palate a purity of blackcurrant, cedar and mint flavors blend together seamlessly. Soft and supple, this wine has a medium-bodied mouth-feel with plush tannins that integrate with the generous finish.Our favorite pairings for this wine include chicken parmesan, cedar-planked salmon over wild rice, and mushroom pizza.',
                    id: 447938,
                    imageUrl: 'https://spoonacular.com/productImages/447938-312x231.jpg',
                    link: 'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Frombauer-merlot-2008%2F116883',
                    price: '$25.59',
                    ratingCount: 5,
                    score: 0.8975,
                    title: 'Rombauer Merlot',
                  },
                  {
                    averageRating: 0.9,
                    description:
                      'A ripe and rounded Merlot with notes of plum, blackberry, and hint of spice.',
                    id: 430475,
                    imageUrl: 'https://spoonacular.com/productImages/430475-312x231.jpg',
                    link: 'https://www.amazon.com/Big-Kahuna-Merlot-Red-Wine/dp/B01F5XPTUW?tag=spoonacular-20',
                    price: '$6.99',
                    ratingCount: 4,
                    score: 0.823076923076923,
                    title: 'NV The Big Kahuna Merlot',
                  },
                ],
                totalFound: 21,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMealplannerGenerateRoute = createRoute({
  method: 'get',
  path: '/mealplanner/generate',
  tags: ['meal planning'],
  summary: 'Generate Meal Plan',
  description: 'Generate a meal plan with three meals per day (breakfast, lunch, and dinner).',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Generate-Meal-Plan',
  },
  operationId: 'generateMealPlan',
  request: {
    query: z.object({
      timeFrame: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Either for one "day" or an entire "week".',
            explode: false,
            in: 'query',
            name: 'timeFrame',
            required: false,
            schema: { example: 'day', type: 'string' },
            style: 'form',
          },
          example: 'day',
        }),
      targetCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'What is the caloric target for one day? The meal plan generator will try to get as close as possible to that goal.',
            explode: false,
            in: 'query',
            name: 'targetCalories',
            required: false,
            schema: { example: 2000, type: 'number' },
            style: 'form',
          },
          example: 2000,
        }),
      diet: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enter a diet that the meal plan has to adhere to. See a full list of supported diets.',
            explode: false,
            in: 'query',
            name: 'diet',
            required: false,
            schema: { example: 'vegetarian', type: 'string' },
            style: 'form',
          },
          example: 'vegetarian',
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of allergens or ingredients that must be excluded.',
            explode: false,
            in: 'query',
            name: 'exclude',
            required: false,
            schema: { example: 'shellfish, olives', type: 'string' },
            style: 'form',
          },
          example: 'shellfish, olives',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              meals: z
                .array(
                  z
                    .object({
                      id: z.int(),
                      imageType: z.string().min(1),
                      readyInMinutes: z.int(),
                      servings: z.number(),
                      sourceUrl: z.string().min(1),
                      title: z.string().min(1),
                    })
                    .openapi({
                      required: [
                        'id',
                        'title',
                        'imageType',
                        'readyInMinutes',
                        'servings',
                        'sourceUrl',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              nutrients: z
                .object({
                  calories: z.number(),
                  carbohydrates: z.number(),
                  fat: z.number(),
                  protein: z.number(),
                })
                .openapi({ required: ['calories', 'carbohydrates', 'fat', 'protein'] }),
            })
            .openapi({
              description: '',
              required: ['meals', 'nutrients'],
              'x-examples': {
                'example-1': {
                  meals: [
                    {
                      id: 655219,
                      imageType: 'jpg',
                      readyInMinutes: 45,
                      servings: 1,
                      sourceUrl:
                        'https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219',
                      title: 'Peanut Butter And Chocolate Oatmeal',
                    },
                    {
                      id: 649931,
                      imageType: 'jpg',
                      readyInMinutes: 45,
                      servings: 4,
                      sourceUrl:
                        'https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931',
                      title: 'Lentil Salad With Vegetables',
                    },
                    {
                      id: 632854,
                      imageType: 'jpg',
                      readyInMinutes: 45,
                      servings: 4,
                      sourceUrl: 'https://spoonacular.com/recipes/asian-noodles-632854',
                      title: 'Asian Noodles',
                    },
                  ],
                  nutrients: {
                    calories: 1735.81,
                    carbohydrates: 235.17,
                    fat: 69.22,
                    protein: 55.43,
                  },
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                meals: [
                  {
                    id: 655219,
                    imageType: 'jpg',
                    readyInMinutes: 45,
                    servings: 1,
                    sourceUrl:
                      'https://spoonacular.com/recipes/peanut-butter-and-chocolate-oatmeal-655219',
                    title: 'Peanut Butter And Chocolate Oatmeal',
                  },
                  {
                    id: 649931,
                    imageType: 'jpg',
                    readyInMinutes: 45,
                    servings: 4,
                    sourceUrl:
                      'https://spoonacular.com/recipes/lentil-salad-with-vegetables-649931',
                    title: 'Lentil Salad With Vegetables',
                  },
                  {
                    id: 632854,
                    imageType: 'jpg',
                    readyInMinutes: 45,
                    servings: 4,
                    sourceUrl: 'https://spoonacular.com/recipes/asian-noodles-632854',
                    title: 'Asian Noodles',
                  },
                ],
                nutrients: { calories: 1735.81, carbohydrates: 235.17, fat: 69.22, protein: 55.43 },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteMealplannerUsernameDayDateRoute = createRoute({
  method: 'delete',
  path: '/mealplanner/{username}/day/{date}',
  tags: ['meal planning'],
  summary: 'Clear Meal Plan Day',
  description: "Delete all planned items from the user's meal plan for a specific day.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Clear-Meal-Plan-Day',
  },
  operationId: 'clearMealPlanDay',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'The date in the format yyyy-mm-dd.',
            explode: false,
            in: 'path',
            name: 'date',
            required: true,
            schema: { example: '2020-06-01', type: 'string' },
            style: 'simple',
          },
          example: '2020-06-01',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              date: z
                .string()
                .openapi({
                  description: 'The date in the format yyyy-mm-dd.',
                  example: '2020-06-01',
                }),
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'date', 'hash'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postMealplannerUsernameItemsRoute = createRoute({
  method: 'post',
  path: '/mealplanner/{username}/items',
  tags: ['meal planning'],
  summary: 'Add to Meal Plan',
  description: "Add an item to the user's meal plan.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Add-to-Meal-Plan',
  },
  operationId: 'addToMealPlan',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'hash'] }),
        },
        'application/json': {
          schema: z
            .object({
              date: z.number(),
              position: z.int(),
              slot: z.int(),
              type: z.string().min(1),
              value: z
                .object({
                  ingredients: z
                    .array(z.object({ name: z.string().min(1) }).openapi({ required: ['name'] }))
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['ingredients'] }),
            })
            .openapi({
              description: '',
              required: ['date', 'slot', 'position', 'type', 'value'],
              'x-examples': {
                'example-1': {
                  date: 1589500800,
                  position: 0,
                  slot: 1,
                  type: 'INGREDIENTS',
                  value: { ingredients: [{ name: '1 banana' }] },
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                date: 1589500800,
                position: 0,
                slot: 1,
                type: 'INGREDIENTS',
                value: { ingredients: [{ name: '1 banana' }] },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({
              description: '',
              'x-examples': {
                'example-1': {
                  date: 1589500800,
                  position: 0,
                  slot: 1,
                  type: 'INGREDIENTS',
                  value: { ingredients: [{ name: '1 banana' }] },
                },
              },
            }),
          examples: {},
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteMealplannerUsernameItemsIdRoute = createRoute({
  method: 'delete',
  path: '/mealplanner/{username}/items/{id}',
  tags: ['meal planning'],
  summary: 'Delete from Meal Plan',
  description: "Delete an item from the user's meal plan.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Delete-from-Meal-Plan',
  },
  operationId: 'deleteFromMealPlan',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The shopping list item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 15678, type: 'number' },
            style: 'simple',
          },
          example: 15678,
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              id: z.number().openapi({ description: 'The shopping list item id.', example: 15678 }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'id', 'hash'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMealplannerUsernameShoppingListRoute = createRoute({
  method: 'get',
  path: '/mealplanner/{username}/shopping-list',
  tags: ['meal planning'],
  summary: 'Get Shopping List',
  description: 'Get the current shopping list for the given user.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Shopping-List',
  },
  operationId: 'getShoppingList',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aisles: z
                .array(
                  z
                    .object({
                      aisle: z.string().min(1),
                      items: z
                        .array(
                          z
                            .object({
                              aisle: z.string().min(1),
                              cost: z.number(),
                              id: z.int(),
                              ingredientId: z.int(),
                              measures: z
                                .object({
                                  metric: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                  original: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                  us: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                })
                                .exactOptional()
                                .openapi({ required: ['original', 'metric', 'us'] }),
                              name: z.string().min(1),
                              pantryItem: z.boolean(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'name',
                                'pantryItem',
                                'aisle',
                                'cost',
                                'ingredientId',
                              ],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                    })
                    .openapi({ required: ['aisle'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              cost: z.number(),
              endDate: z.number(),
              startDate: z.number(),
            })
            .openapi({
              description: '',
              required: ['aisles', 'cost', 'startDate', 'endDate'],
              'x-examples': {
                'example-1': {
                  aisles: [{ aisle: 'Baking' }],
                  cost: 1.43,
                  endDate: 1588896000,
                  startDate: 1588291200,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aisles: [
                  {
                    aisle: 'Baking',
                    items: [
                      {
                        aisle: 'Baking',
                        cost: 0.71,
                        id: 115388,
                        ingredientId: 18369,
                        measures: {
                          metric: { amount: 1, unit: 'pkg' },
                          original: { amount: 1, unit: 'package' },
                          us: { amount: 1, unit: 'pkg' },
                        },
                        name: 'baking powder',
                        pantryItem: false,
                      },
                    ],
                  },
                ],
                cost: 1.43,
                endDate: 1588896000,
                startDate: 1588291200,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postMealplannerUsernameShoppingListItemsRoute = createRoute({
  method: 'post',
  path: '/mealplanner/{username}/shopping-list/items',
  tags: ['meal planning'],
  summary: 'Add to Shopping List',
  description: 'Add an item to the current shopping list of a user.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Add-to-Shopping-List',
  },
  operationId: 'addToShoppingList',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'hash'] }),
        },
        'application/json': {
          schema: z
            .object({ aisle: z.string().min(1), item: z.string().min(1), parse: z.boolean() })
            .openapi({
              description: '',
              required: ['item', 'aisle', 'parse'],
              'x-examples': {
                'example-1': { aisle: 'Baking', item: '1 package baking powder', parse: true },
              },
            }),
          examples: {
            'example-1': {
              value: { aisle: 'Baking', item: '1 package baking powder', parse: true },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aisles: z
                .array(
                  z
                    .object({
                      aisle: z.string().min(1),
                      items: z
                        .array(
                          z
                            .object({
                              aisle: z.string().min(1),
                              cost: z.number(),
                              id: z.int(),
                              ingredientId: z.int(),
                              measures: z
                                .object({
                                  metric: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                  original: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                  us: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                })
                                .exactOptional()
                                .openapi({ required: ['original', 'metric', 'us'] }),
                              name: z.string().min(1),
                              pantryItem: z.boolean(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'name',
                                'pantryItem',
                                'aisle',
                                'cost',
                                'ingredientId',
                              ],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                    })
                    .openapi({ required: ['aisle'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              cost: z.number(),
              endDate: z.number(),
              startDate: z.number(),
            })
            .openapi({
              description: '',
              required: ['aisles', 'cost', 'startDate', 'endDate'],
              'x-examples': {
                'example-1': {
                  aisles: [{ aisle: 'Baking' }],
                  cost: 0.71,
                  endDate: 1588896000,
                  startDate: 1588291200,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aisles: [
                  {
                    aisle: 'Baking',
                    items: [
                      {
                        aisle: 'Baking',
                        cost: 0.71,
                        id: 115388,
                        ingredientId: 18369,
                        measures: {
                          metric: { amount: 1, unit: 'pkg' },
                          original: { amount: 1, unit: 'package' },
                          us: { amount: 1, unit: 'pkg' },
                        },
                        name: 'baking powder',
                        pantryItem: false,
                      },
                    ],
                  },
                ],
                cost: 0.71,
                endDate: 1588896000,
                startDate: 1588291200,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteMealplannerUsernameShoppingListItemsIdRoute = createRoute({
  method: 'delete',
  path: '/mealplanner/{username}/shopping-list/items/{id}',
  tags: ['meal planning'],
  summary: 'Delete from Shopping List',
  description: 'Delete an item from the current shopping list of the user.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Delete-from-Shopping-List',
  },
  operationId: 'deleteFromShoppingList',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The shopping list item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 15678, type: 'number' },
            style: 'simple',
          },
          example: 15678,
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              id: z.number().openapi({ description: 'The shopping list item id.', example: 15678 }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'id', 'hash'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postMealplannerUsernameShoppingListStartDateEndDateRoute = createRoute({
  method: 'post',
  path: '/mealplanner/{username}/shopping-list/{start-date}/{end-date}',
  tags: ['meal planning'],
  summary: 'Generate Shopping List',
  description: 'Generate the shopping list for a user from the meal planner in a given time frame.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Generate-Shopping-List',
  },
  operationId: 'generateShoppingList',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      'start-date': z
        .string()
        .openapi({
          param: {
            description: 'The start date in the format yyyy-mm-dd.',
            explode: false,
            in: 'path',
            name: 'start-date',
            required: true,
            schema: { example: '2020-06-01', type: 'string' },
            style: 'simple',
          },
          example: '2020-06-01',
        }),
      'end-date': z
        .string()
        .openapi({
          param: {
            description: 'The end date in the format yyyy-mm-dd.',
            explode: false,
            in: 'path',
            name: 'end-date',
            required: true,
            schema: { example: '2020-06-07', type: 'string' },
            style: 'simple',
          },
          example: '2020-06-07',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              'end-date': z
                .string()
                .openapi({
                  description: 'The end date in the format yyyy-mm-dd.',
                  example: '2020-06-07',
                }),
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              'start-date': z
                .string()
                .openapi({
                  description: 'The start date in the format yyyy-mm-dd.',
                  example: '2020-06-01',
                }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'start-date', 'end-date', 'hash'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aisles: z
                .array(
                  z
                    .object({
                      aisle: z.string().min(1),
                      items: z
                        .array(
                          z
                            .object({
                              aisle: z.string().min(1),
                              cost: z.number(),
                              id: z.int(),
                              ingredientId: z.int(),
                              measures: z
                                .object({
                                  metric: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                  original: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                  us: z
                                    .object({ amount: z.number(), unit: z.string().min(1) })
                                    .openapi({ required: ['amount', 'unit'] }),
                                })
                                .exactOptional()
                                .openapi({ required: ['original', 'metric', 'us'] }),
                              name: z.string().min(1),
                              pantryItem: z.boolean(),
                            })
                            .openapi({
                              required: [
                                'id',
                                'name',
                                'pantryItem',
                                'aisle',
                                'cost',
                                'ingredientId',
                              ],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                    })
                    .openapi({ required: ['aisle'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              cost: z.number(),
              endDate: z.number(),
              startDate: z.number(),
            })
            .openapi({
              description: '',
              required: ['aisles', 'cost', 'startDate', 'endDate'],
              'x-examples': {
                'example-1': {
                  aisles: [{ aisle: 'Baking' }],
                  cost: 0.71,
                  endDate: 1588896000,
                  startDate: 1588291200,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aisles: [
                  {
                    aisle: 'Baking',
                    items: [
                      {
                        aisle: 'Baking',
                        cost: 0.71,
                        id: 115388,
                        ingredientId: 18369,
                        measures: {
                          metric: { amount: 1, unit: 'pkg' },
                          original: { amount: 1, unit: 'package' },
                          us: { amount: 1, unit: 'pkg' },
                        },
                        name: 'baking powder',
                        pantryItem: false,
                      },
                    ],
                  },
                ],
                cost: 0.71,
                endDate: 1588896000,
                startDate: 1588291200,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMealplannerUsernameTemplatesRoute = createRoute({
  method: 'get',
  path: '/mealplanner/{username}/templates',
  tags: ['meal planning'],
  summary: 'Get Meal Plan Templates',
  description: 'Get meal plan templates from user or public ones.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Meal-Plan-Templates',
  },
  operationId: 'getMealPlanTemplates',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              templates: z
                .array(
                  z
                    .object({ id: z.int(), name: z.string().min(1) })
                    .openapi({ required: ['id', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['templates'],
              'x-examples': {
                'example-1': {
                  templates: [
                    { id: 37, name: 'Busy Work Week' },
                    { id: 480, name: 'Keto Meal Plan' },
                    { id: 120, name: 'Not-So-Strict Paleo Meal Plan' },
                    { id: 451, name: 'Week 1 Meal Plan' },
                    { id: 581, name: 'Whole30 Meal Plan' },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                templates: [
                  { id: 37, name: 'Busy Work Week' },
                  { id: 480, name: 'Keto Meal Plan' },
                  { id: 120, name: 'Not-So-Strict Paleo Meal Plan' },
                  { id: 451, name: 'Week 1 Meal Plan' },
                  { id: 581, name: 'Whole30 Meal Plan' },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postMealplannerUsernameTemplatesRoute = createRoute({
  method: 'post',
  path: '/mealplanner/{username}/templates',
  tags: ['meal planning'],
  summary: 'Add Meal Plan Template',
  description: 'Add a meal plan template for a user.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Add-Meal-Plan-Template',
  },
  operationId: 'addMealPlanTemplate',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
    }),
    query: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'The private hash for the username.',
            explode: false,
            in: 'query',
            name: 'hash',
            required: true,
            schema: { example: '4b5v4398573406', type: 'string' },
            style: 'form',
          },
          example: '4b5v4398573406',
        }),
    }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'hash'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      day: z.int(),
                      position: z.int(),
                      slot: z.int(),
                      type: z.string().min(1),
                      value: z
                        .object({
                          id: z.int().exactOptional(),
                          imageType: z.string().min(1).exactOptional(),
                          servings: z.number().exactOptional(),
                          title: z.string().min(1).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: ['day', 'slot', 'position', 'type'] }),
                )
                .min(1)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              name: z.string().min(1),
              publishAsPublic: z.boolean(),
            })
            .openapi({
              description: '',
              required: ['name', 'items', 'publishAsPublic'],
              'x-examples': {
                'example-1': { name: 'My new meal plan template', publishAsPublic: false },
              },
            }),
          examples: {
            'example-1': {
              value: {
                items: [
                  {
                    day: 1,
                    position: 0,
                    slot: 1,
                    type: 'RECIPE',
                    value: {
                      id: 296213,
                      imageType: 'jpg',
                      servings: 2,
                      title: 'Spinach Salad with Roasted Vegetables and Spiced Chickpea',
                    },
                  },
                  {
                    day: 2,
                    position: 0,
                    slot: 1,
                    type: 'PRODUCT',
                    value: {
                      id: 183433,
                      imageType: 'jpg',
                      servings: 1,
                      title: 'Ahold Lasagna with Meat Sauce',
                    },
                  },
                  {
                    day: 3,
                    position: 0,
                    slot: 1,
                    type: 'MENU_ITEM',
                    value: {
                      id: 378557,
                      imageType: 'png',
                      servings: 1,
                      title: 'Pizza 73 BBQ Steak Pizza, 9',
                    },
                  },
                  {
                    day: 4,
                    position: 0,
                    slot: 1,
                    type: 'CUSTOM_FOOD',
                    value: {
                      id: 348,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/cashews.jpg',
                      servings: 1,
                      title: 'Aldi Spicy Cashews - 30g',
                    },
                  },
                  {
                    day: 5,
                    position: 0,
                    slot: 1,
                    type: 'INGREDIENTS',
                    value: {
                      ingredients: [
                        { name: '1 banana' },
                        {
                          amount: '1',
                          image:
                            'https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg',
                          name: 'coffee',
                          unit: 'cup',
                        },
                      ],
                    },
                  },
                ],
                name: 'My new meal plan template',
                publishAsPublic: false,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMealplannerUsernameTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/mealplanner/{username}/templates/{id}',
  tags: ['meal planning'],
  summary: 'Get Meal Plan Template',
  description: 'Get information about a meal plan template.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Meal-Plan-Template',
  },
  operationId: 'getMealPlanTemplate',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The shopping list item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 15678, type: 'number' },
            style: 'simple',
          },
          example: 15678,
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              days: z
                .array(
                  z
                    .object({
                      day: z.string().min(1),
                      items: z
                        .array(
                          z
                            .object({
                              id: z.int(),
                              position: z.int(),
                              slot: z.int(),
                              type: z.string().min(1),
                              value: z
                                .object({
                                  id: z.number(),
                                  imageType: z.string().min(1),
                                  title: z.string().min(1),
                                })
                                .exactOptional()
                                .openapi({ required: ['id', 'title', 'imageType'] }),
                            })
                            .openapi({ required: ['id', 'slot', 'position', 'type'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      nutritionSummary: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                      nutritionSummaryBreakfast: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                      nutritionSummaryDinner: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                      nutritionSummaryLunch: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                    })
                    .openapi({ required: ['day'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              id: z.int(),
              name: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['id', 'name', 'days'],
              'x-examples': {
                'example-1': {
                  days: [
                    {
                      day: '1',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1293, name: 'Calories', percentDailyNeeds: 65, unit: 'cal' },
                          { amount: 65, name: 'Fat', percentDailyNeeds: 100, unit: 'g' },
                          { amount: 102, name: 'Carbohydrates', percentDailyNeeds: 34, unit: 'g' },
                          { amount: 83, name: 'Protein', percentDailyNeeds: 166, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 132, name: 'Calories', percentDailyNeeds: 7, unit: 'cal' },
                          { amount: 3, name: 'Fat', percentDailyNeeds: 4, unit: 'g' },
                          { amount: 25, name: 'Carbohydrates', percentDailyNeeds: 8, unit: 'g' },
                          { amount: 3, name: 'Protein', percentDailyNeeds: 5, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 706, name: 'Calories', percentDailyNeeds: 35, unit: 'cal' },
                          { amount: 29, name: 'Fat', percentDailyNeeds: 45, unit: 'g' },
                          { amount: 76, name: 'Carbohydrates', percentDailyNeeds: 25, unit: 'g' },
                          { amount: 46, name: 'Protein', percentDailyNeeds: 91, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 455, name: 'Calories', percentDailyNeeds: 23, unit: 'cal' },
                          { amount: 34, name: 'Fat', percentDailyNeeds: 52, unit: 'g' },
                          { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 35, name: 'Protein', percentDailyNeeds: 70, unit: 'g' },
                        ],
                      },
                    },
                    {
                      day: '2',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1386, name: 'Calories', percentDailyNeeds: 69, unit: 'cal' },
                          { amount: 66, name: 'Fat', percentDailyNeeds: 102, unit: 'g' },
                          { amount: 162, name: 'Carbohydrates', percentDailyNeeds: 54, unit: 'g' },
                          { amount: 48, name: 'Protein', percentDailyNeeds: 96, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 239, name: 'Calories', percentDailyNeeds: 12, unit: 'cal' },
                          { amount: 11, name: 'Fat', percentDailyNeeds: 17, unit: 'g' },
                          { amount: 34, name: 'Carbohydrates', percentDailyNeeds: 11, unit: 'g' },
                          { amount: 5, name: 'Protein', percentDailyNeeds: 9, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 414, name: 'Calories', percentDailyNeeds: 21, unit: 'cal' },
                          { amount: 22, name: 'Fat', percentDailyNeeds: 33, unit: 'g' },
                          { amount: 37, name: 'Carbohydrates', percentDailyNeeds: 12, unit: 'g' },
                          { amount: 21, name: 'Protein', percentDailyNeeds: 43, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 732, name: 'Calories', percentDailyNeeds: 37, unit: 'cal' },
                          { amount: 33, name: 'Fat', percentDailyNeeds: 51, unit: 'g' },
                          { amount: 91, name: 'Carbohydrates', percentDailyNeeds: 30, unit: 'g' },
                          { amount: 22, name: 'Protein', percentDailyNeeds: 44, unit: 'g' },
                        ],
                      },
                    },
                    {
                      day: '3',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1589, name: 'Calories', percentDailyNeeds: 79, unit: 'cal' },
                          { amount: 77, name: 'Fat', percentDailyNeeds: 118, unit: 'g' },
                          { amount: 158, name: 'Carbohydrates', percentDailyNeeds: 53, unit: 'g' },
                          { amount: 84, name: 'Protein', percentDailyNeeds: 168, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 472, name: 'Calories', percentDailyNeeds: 24, unit: 'cal' },
                          { amount: 14, name: 'Fat', percentDailyNeeds: 21, unit: 'g' },
                          { amount: 62, name: 'Carbohydrates', percentDailyNeeds: 21, unit: 'g' },
                          { amount: 27, name: 'Protein', percentDailyNeeds: 54, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 549, name: 'Calories', percentDailyNeeds: 27, unit: 'cal' },
                          { amount: 18, name: 'Fat', percentDailyNeeds: 27, unit: 'g' },
                          { amount: 65, name: 'Carbohydrates', percentDailyNeeds: 22, unit: 'g' },
                          { amount: 39, name: 'Protein', percentDailyNeeds: 78, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 568, name: 'Calories', percentDailyNeeds: 28, unit: 'cal' },
                          { amount: 45, name: 'Fat', percentDailyNeeds: 69, unit: 'g' },
                          { amount: 31, name: 'Carbohydrates', percentDailyNeeds: 10, unit: 'g' },
                          { amount: 18, name: 'Protein', percentDailyNeeds: 36, unit: 'g' },
                        ],
                      },
                    },
                    {
                      day: '4',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1343, name: 'Calories', percentDailyNeeds: 67, unit: 'cal' },
                          { amount: 70, name: 'Fat', percentDailyNeeds: 108, unit: 'g' },
                          { amount: 123, name: 'Carbohydrates', percentDailyNeeds: 41, unit: 'g' },
                          { amount: 61, name: 'Protein', percentDailyNeeds: 122, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 239, name: 'Calories', percentDailyNeeds: 12, unit: 'cal' },
                          { amount: 11, name: 'Fat', percentDailyNeeds: 17, unit: 'g' },
                          { amount: 34, name: 'Carbohydrates', percentDailyNeeds: 11, unit: 'g' },
                          { amount: 5, name: 'Protein', percentDailyNeeds: 9, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 698, name: 'Calories', percentDailyNeeds: 35, unit: 'cal' },
                          { amount: 43, name: 'Fat', percentDailyNeeds: 66, unit: 'g' },
                          { amount: 34, name: 'Carbohydrates', percentDailyNeeds: 11, unit: 'g' },
                          { amount: 46, name: 'Protein', percentDailyNeeds: 92, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 406, name: 'Calories', percentDailyNeeds: 20, unit: 'cal' },
                          { amount: 17, name: 'Fat', percentDailyNeeds: 26, unit: 'g' },
                          { amount: 56, name: 'Carbohydrates', percentDailyNeeds: 19, unit: 'g' },
                          { amount: 10, name: 'Protein', percentDailyNeeds: 21, unit: 'g' },
                        ],
                      },
                    },
                    {
                      day: '5',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1247, name: 'Calories', percentDailyNeeds: 62, unit: 'cal' },
                          { amount: 61, name: 'Fat', percentDailyNeeds: 95, unit: 'g' },
                          { amount: 103, name: 'Carbohydrates', percentDailyNeeds: 34, unit: 'g' },
                          { amount: 78, name: 'Protein', percentDailyNeeds: 156, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 295, name: 'Calories', percentDailyNeeds: 15, unit: 'cal' },
                          { amount: 12, name: 'Fat', percentDailyNeeds: 19, unit: 'g' },
                          { amount: 42, name: 'Carbohydrates', percentDailyNeeds: 14, unit: 'g' },
                          { amount: 11, name: 'Protein', percentDailyNeeds: 23, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 497, name: 'Calories', percentDailyNeeds: 25, unit: 'cal' },
                          { amount: 15, name: 'Fat', percentDailyNeeds: 24, unit: 'g' },
                          { amount: 60, name: 'Carbohydrates', percentDailyNeeds: 20, unit: 'g' },
                          { amount: 32, name: 'Protein', percentDailyNeeds: 63, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 455, name: 'Calories', percentDailyNeeds: 23, unit: 'cal' },
                          { amount: 34, name: 'Fat', percentDailyNeeds: 52, unit: 'g' },
                          { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 35, name: 'Protein', percentDailyNeeds: 70, unit: 'g' },
                        ],
                      },
                    },
                    {
                      day: '6',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1683, name: 'Calories', percentDailyNeeds: 84, unit: 'cal' },
                          { amount: 68, name: 'Fat', percentDailyNeeds: 105, unit: 'g' },
                          { amount: 139, name: 'Carbohydrates', percentDailyNeeds: 46, unit: 'g' },
                          { amount: 106, name: 'Protein', percentDailyNeeds: 212, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 490, name: 'Calories', percentDailyNeeds: 24, unit: 'cal' },
                          { amount: 15, name: 'Fat', percentDailyNeeds: 23, unit: 'g' },
                          { amount: 65, name: 'Carbohydrates', percentDailyNeeds: 22, unit: 'g' },
                          { amount: 26, name: 'Protein', percentDailyNeeds: 53, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 816, name: 'Calories', percentDailyNeeds: 41, unit: 'cal' },
                          { amount: 21, name: 'Fat', percentDailyNeeds: 32, unit: 'g' },
                          { amount: 58, name: 'Carbohydrates', percentDailyNeeds: 19, unit: 'g' },
                          { amount: 72, name: 'Protein', percentDailyNeeds: 144, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 378, name: 'Calories', percentDailyNeeds: 19, unit: 'cal' },
                          { amount: 33, name: 'Fat', percentDailyNeeds: 51, unit: 'g' },
                          { amount: 16, name: 'Carbohydrates', percentDailyNeeds: 5, unit: 'g' },
                          { amount: 8, name: 'Protein', percentDailyNeeds: 16, unit: 'g' },
                        ],
                      },
                    },
                    {
                      day: '7',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 1442, name: 'Calories', percentDailyNeeds: 72, unit: 'cal' },
                          { amount: 69, name: 'Fat', percentDailyNeeds: 106, unit: 'g' },
                          { amount: 147, name: 'Carbohydrates', percentDailyNeeds: 49, unit: 'g' },
                          { amount: 73, name: 'Protein', percentDailyNeeds: 147, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 444, name: 'Calories', percentDailyNeeds: 22, unit: 'cal' },
                          { amount: 12, name: 'Fat', percentDailyNeeds: 19, unit: 'g' },
                          { amount: 51, name: 'Carbohydrates', percentDailyNeeds: 17, unit: 'g' },
                          { amount: 38, name: 'Protein', percentDailyNeeds: 76, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 593, name: 'Calories', percentDailyNeeds: 30, unit: 'cal' },
                          { amount: 40, name: 'Fat', percentDailyNeeds: 62, unit: 'g' },
                          { amount: 41, name: 'Carbohydrates', percentDailyNeeds: 14, unit: 'g' },
                          { amount: 25, name: 'Protein', percentDailyNeeds: 50, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 406, name: 'Calories', percentDailyNeeds: 20, unit: 'cal' },
                          { amount: 17, name: 'Fat', percentDailyNeeds: 26, unit: 'g' },
                          { amount: 56, name: 'Carbohydrates', percentDailyNeeds: 19, unit: 'g' },
                          { amount: 10, name: 'Protein', percentDailyNeeds: 21, unit: 'g' },
                        ],
                      },
                    },
                  ],
                  id: 128,
                  name: '1500 Calorie Meal Plan',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                days: [
                  {
                    day: '1',
                    items: [
                      {
                        id: 2403,
                        position: 0,
                        slot: 1,
                        type: 'RECIPE',
                        value: {
                          id: 630657,
                          imageType: 'jpg',
                          title: 'Double Chocolate Protein Cookies',
                        },
                      },
                      {
                        id: 2404,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 785,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/orange.jpg',
                              name: 'orange',
                              unit: '',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'orange',
                        },
                      },
                      {
                        id: 2405,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: {
                          id: 296213,
                          imageType: 'jpg',
                          title: 'Spinach Salad with Roasted Vegetables and Spiced Chickpea',
                        },
                      },
                      {
                        id: 2406,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: {
                          id: 237677,
                          imageType: 'jpg',
                          title: 'Chicken Parmesan with Spaghetti',
                        },
                      },
                      {
                        id: 2407,
                        position: 0,
                        slot: 3,
                        type: 'INGREDIENTS',
                        value: {
                          id: 787,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/broccoli.jpg',
                              name: 'broccoli',
                              unit: 'cup',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'broccoli',
                        },
                      },
                      {
                        id: 2408,
                        position: 0,
                        slot: 3,
                        type: 'PRODUCT',
                        value: { id: 146191, imageType: 'jpg', title: 'Lindt Dark Chocolate' },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1293, name: 'Calories', percentDailyNeeds: 65, unit: 'cal' },
                        { amount: 65, name: 'Fat', percentDailyNeeds: 100, unit: 'g' },
                        { amount: 102, name: 'Carbohydrates', percentDailyNeeds: 34, unit: 'g' },
                        { amount: 83, name: 'Protein', percentDailyNeeds: 166, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 132, name: 'Calories', percentDailyNeeds: 7, unit: 'cal' },
                        { amount: 3, name: 'Fat', percentDailyNeeds: 4, unit: 'g' },
                        { amount: 25, name: 'Carbohydrates', percentDailyNeeds: 8, unit: 'g' },
                        { amount: 3, name: 'Protein', percentDailyNeeds: 5, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 706, name: 'Calories', percentDailyNeeds: 35, unit: 'cal' },
                        { amount: 29, name: 'Fat', percentDailyNeeds: 45, unit: 'g' },
                        { amount: 76, name: 'Carbohydrates', percentDailyNeeds: 25, unit: 'g' },
                        { amount: 46, name: 'Protein', percentDailyNeeds: 91, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 455, name: 'Calories', percentDailyNeeds: 23, unit: 'cal' },
                        { amount: 34, name: 'Fat', percentDailyNeeds: 52, unit: 'g' },
                        { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 35, name: 'Protein', percentDailyNeeds: 70, unit: 'g' },
                      ],
                    },
                  },
                  {
                    day: '2',
                    items: [
                      {
                        id: 2409,
                        position: 0,
                        slot: 1,
                        type: 'PRODUCT',
                        value: { id: 101999, imageType: 'jpg', title: 'Greek Gods Yogurt' },
                      },
                      {
                        id: 2410,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 457,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image:
                                'https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg',
                              name: 'berries',
                              unit: 'cup',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'berries',
                        },
                      },
                      {
                        id: 2411,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: { id: 516377, imageType: 'jpg', title: 'Southwest Quinoa Salad' },
                      },
                      {
                        id: 2412,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: { id: 247683, imageType: 'jpg', title: 'Pesto Caprese Omelette' },
                      },
                      {
                        id: 2413,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: {
                          id: 484337,
                          imageType: 'jpg',
                          title: 'One Ingredient Banana Ice Cream',
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1386, name: 'Calories', percentDailyNeeds: 69, unit: 'cal' },
                        { amount: 66, name: 'Fat', percentDailyNeeds: 102, unit: 'g' },
                        { amount: 162, name: 'Carbohydrates', percentDailyNeeds: 54, unit: 'g' },
                        { amount: 48, name: 'Protein', percentDailyNeeds: 96, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 239, name: 'Calories', percentDailyNeeds: 12, unit: 'cal' },
                        { amount: 11, name: 'Fat', percentDailyNeeds: 17, unit: 'g' },
                        { amount: 34, name: 'Carbohydrates', percentDailyNeeds: 11, unit: 'g' },
                        { amount: 5, name: 'Protein', percentDailyNeeds: 9, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 414, name: 'Calories', percentDailyNeeds: 21, unit: 'cal' },
                        { amount: 22, name: 'Fat', percentDailyNeeds: 33, unit: 'g' },
                        { amount: 37, name: 'Carbohydrates', percentDailyNeeds: 12, unit: 'g' },
                        { amount: 21, name: 'Protein', percentDailyNeeds: 43, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 732, name: 'Calories', percentDailyNeeds: 37, unit: 'cal' },
                        { amount: 33, name: 'Fat', percentDailyNeeds: 51, unit: 'g' },
                        { amount: 91, name: 'Carbohydrates', percentDailyNeeds: 30, unit: 'g' },
                        { amount: 22, name: 'Protein', percentDailyNeeds: 44, unit: 'g' },
                      ],
                    },
                  },
                  {
                    day: '3',
                    items: [
                      {
                        id: 2414,
                        position: 0,
                        slot: 1,
                        type: 'RECIPE',
                        value: { id: 157259, imageType: 'jpg', title: 'Cocoa Protein Pancakes' },
                      },
                      {
                        id: 2415,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 878,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/orange.jpg',
                              name: 'orange',
                              unit: '',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'orange',
                        },
                      },
                      {
                        id: 2416,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: { id: 535856, imageType: 'jpg', title: 'BLT Chopped Salad' },
                      },
                      {
                        id: 2417,
                        position: 0,
                        slot: 2,
                        type: 'PRODUCT',
                        value: {
                          id: 71144,
                          imageType: 'jpg',
                          title:
                            'Kind Plus Fruit & Nut Bar - Almond Walnut Macadamia with Peanuts Plus Protein',
                        },
                      },
                      {
                        id: 2418,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: {
                          id: 519197,
                          imageType: 'png',
                          title: 'Zesty Sriracha Shrimp and Quinoa',
                        },
                      },
                      {
                        id: 2419,
                        position: 0,
                        slot: 3,
                        type: 'PRODUCT',
                        value: {
                          id: 163427,
                          imageType: 'jpg',
                          title: 'Green Giant Valley Fresh Steamers - Select Sugar Snap Peas',
                        },
                      },
                      {
                        id: 2420,
                        position: 0,
                        slot: 3,
                        type: 'PRODUCT',
                        value: { id: 146191, imageType: 'jpg', title: 'Lindt Dark Chocolate' },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1589, name: 'Calories', percentDailyNeeds: 79, unit: 'cal' },
                        { amount: 77, name: 'Fat', percentDailyNeeds: 118, unit: 'g' },
                        { amount: 158, name: 'Carbohydrates', percentDailyNeeds: 53, unit: 'g' },
                        { amount: 84, name: 'Protein', percentDailyNeeds: 168, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 472, name: 'Calories', percentDailyNeeds: 24, unit: 'cal' },
                        { amount: 14, name: 'Fat', percentDailyNeeds: 21, unit: 'g' },
                        { amount: 62, name: 'Carbohydrates', percentDailyNeeds: 21, unit: 'g' },
                        { amount: 27, name: 'Protein', percentDailyNeeds: 54, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 549, name: 'Calories', percentDailyNeeds: 27, unit: 'cal' },
                        { amount: 18, name: 'Fat', percentDailyNeeds: 27, unit: 'g' },
                        { amount: 65, name: 'Carbohydrates', percentDailyNeeds: 22, unit: 'g' },
                        { amount: 39, name: 'Protein', percentDailyNeeds: 78, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 568, name: 'Calories', percentDailyNeeds: 28, unit: 'cal' },
                        { amount: 45, name: 'Fat', percentDailyNeeds: 69, unit: 'g' },
                        { amount: 31, name: 'Carbohydrates', percentDailyNeeds: 10, unit: 'g' },
                        { amount: 18, name: 'Protein', percentDailyNeeds: 36, unit: 'g' },
                      ],
                    },
                  },
                  {
                    day: '4',
                    items: [
                      {
                        id: 2421,
                        position: 0,
                        slot: 1,
                        type: 'PRODUCT',
                        value: { id: 101999, imageType: 'jpg', title: 'Greek Gods Yogurt' },
                      },
                      {
                        id: 2422,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image:
                                'https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg',
                              name: 'berries',
                              unit: 'cup',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'berries',
                        },
                      },
                      {
                        id: 2423,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: { id: 535563, imageType: 'jpg', title: 'Black Bean Quinoa Salad' },
                      },
                      {
                        id: 2424,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: { id: 622598, imageType: 'jpg', title: 'Pittata - Pizza Frittata' },
                      },
                      {
                        id: 2425,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: {
                          id: 484337,
                          imageType: 'jpg',
                          title: 'One Ingredient Banana Ice Cream',
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1343, name: 'Calories', percentDailyNeeds: 67, unit: 'cal' },
                        { amount: 70, name: 'Fat', percentDailyNeeds: 108, unit: 'g' },
                        { amount: 123, name: 'Carbohydrates', percentDailyNeeds: 41, unit: 'g' },
                        { amount: 61, name: 'Protein', percentDailyNeeds: 122, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 239, name: 'Calories', percentDailyNeeds: 12, unit: 'cal' },
                        { amount: 11, name: 'Fat', percentDailyNeeds: 17, unit: 'g' },
                        { amount: 34, name: 'Carbohydrates', percentDailyNeeds: 11, unit: 'g' },
                        { amount: 5, name: 'Protein', percentDailyNeeds: 9, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 698, name: 'Calories', percentDailyNeeds: 35, unit: 'cal' },
                        { amount: 43, name: 'Fat', percentDailyNeeds: 66, unit: 'g' },
                        { amount: 34, name: 'Carbohydrates', percentDailyNeeds: 11, unit: 'g' },
                        { amount: 46, name: 'Protein', percentDailyNeeds: 92, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 406, name: 'Calories', percentDailyNeeds: 20, unit: 'cal' },
                        { amount: 17, name: 'Fat', percentDailyNeeds: 26, unit: 'g' },
                        { amount: 56, name: 'Carbohydrates', percentDailyNeeds: 19, unit: 'g' },
                        { amount: 10, name: 'Protein', percentDailyNeeds: 21, unit: 'g' },
                      ],
                    },
                  },
                  {
                    day: '5',
                    items: [
                      {
                        id: 2426,
                        position: 0,
                        slot: 1,
                        type: 'PRODUCT',
                        value: {
                          id: 71144,
                          imageType: 'jpg',
                          title:
                            'Kind Plus Fruit & Nut Bar - Almond Walnut Macadamia with Peanuts Plus Protein',
                        },
                      },
                      {
                        id: 2427,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg',
                              name: 'banana',
                              unit: '',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'banana',
                        },
                      },
                      {
                        id: 2428,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: {
                          id: 296213,
                          imageType: 'jpg',
                          title: 'Spinach Salad with Roasted Vegetables and Spiced Chickpea',
                        },
                      },
                      {
                        id: 2429,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: { id: 497301, imageType: 'jpg', title: 'Shrimp Scampi' },
                      },
                      {
                        id: 2430,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: {
                          id: 581021,
                          imageType: 'jpg',
                          title: 'Black Bean Brownies: Fudgy Fun',
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1247, name: 'Calories', percentDailyNeeds: 62, unit: 'cal' },
                        { amount: 61, name: 'Fat', percentDailyNeeds: 95, unit: 'g' },
                        { amount: 103, name: 'Carbohydrates', percentDailyNeeds: 34, unit: 'g' },
                        { amount: 78, name: 'Protein', percentDailyNeeds: 156, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 295, name: 'Calories', percentDailyNeeds: 15, unit: 'cal' },
                        { amount: 12, name: 'Fat', percentDailyNeeds: 19, unit: 'g' },
                        { amount: 42, name: 'Carbohydrates', percentDailyNeeds: 14, unit: 'g' },
                        { amount: 11, name: 'Protein', percentDailyNeeds: 23, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 497, name: 'Calories', percentDailyNeeds: 25, unit: 'cal' },
                        { amount: 15, name: 'Fat', percentDailyNeeds: 24, unit: 'g' },
                        { amount: 60, name: 'Carbohydrates', percentDailyNeeds: 20, unit: 'g' },
                        { amount: 32, name: 'Protein', percentDailyNeeds: 63, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 455, name: 'Calories', percentDailyNeeds: 23, unit: 'cal' },
                        { amount: 34, name: 'Fat', percentDailyNeeds: 52, unit: 'g' },
                        { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 35, name: 'Protein', percentDailyNeeds: 70, unit: 'g' },
                      ],
                    },
                  },
                  {
                    day: '6',
                    items: [
                      {
                        id: 2431,
                        position: 0,
                        slot: 1,
                        type: 'RECIPE',
                        value: { id: 157259, imageType: 'jpg', title: 'Cocoa Protein Pancakes' },
                      },
                      {
                        id: 2432,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image:
                                'https://spoonacular.com/cdn/ingredients_100x100/berries-mixed.jpg',
                              name: 'berries',
                              unit: 'cup',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'berries',
                        },
                      },
                      {
                        id: 2433,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: { id: 535856, imageType: 'jpg', title: 'BLT Chopped Salad' },
                      },
                      {
                        id: 2434,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: {
                          id: 149425,
                          imageType: 'jpg',
                          title: 'Herb and Cheddar Cordon Bleu',
                        },
                      },
                      {
                        id: 2435,
                        position: 0,
                        slot: 3,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image:
                                'https://spoonacular.com/cdn/ingredients_100x100/brussels-sprouts.jpg',
                              name: 'brussels sprouts',
                              unit: 'cup',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'sprouts',
                        },
                      },
                      {
                        id: 2436,
                        position: 0,
                        slot: 3,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 5,
                              image:
                                'https://spoonacular.com/cdn/ingredients_100x100/white-wine.jpg',
                              name: 'wine',
                              unit: 'ounces',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'wine',
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1683, name: 'Calories', percentDailyNeeds: 84, unit: 'cal' },
                        { amount: 68, name: 'Fat', percentDailyNeeds: 105, unit: 'g' },
                        { amount: 139, name: 'Carbohydrates', percentDailyNeeds: 46, unit: 'g' },
                        { amount: 106, name: 'Protein', percentDailyNeeds: 212, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 490, name: 'Calories', percentDailyNeeds: 24, unit: 'cal' },
                        { amount: 15, name: 'Fat', percentDailyNeeds: 23, unit: 'g' },
                        { amount: 65, name: 'Carbohydrates', percentDailyNeeds: 22, unit: 'g' },
                        { amount: 26, name: 'Protein', percentDailyNeeds: 53, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 816, name: 'Calories', percentDailyNeeds: 41, unit: 'cal' },
                        { amount: 21, name: 'Fat', percentDailyNeeds: 32, unit: 'g' },
                        { amount: 58, name: 'Carbohydrates', percentDailyNeeds: 19, unit: 'g' },
                        { amount: 72, name: 'Protein', percentDailyNeeds: 144, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 378, name: 'Calories', percentDailyNeeds: 19, unit: 'cal' },
                        { amount: 33, name: 'Fat', percentDailyNeeds: 51, unit: 'g' },
                        { amount: 16, name: 'Carbohydrates', percentDailyNeeds: 5, unit: 'g' },
                        { amount: 8, name: 'Protein', percentDailyNeeds: 16, unit: 'g' },
                      ],
                    },
                  },
                  {
                    day: '7',
                    items: [
                      {
                        id: 2437,
                        position: 0,
                        slot: 1,
                        type: 'RECIPE',
                        value: {
                          id: 619085,
                          imageType: 'jpg',
                          title:
                            'Protein Packed Healthy French Toast with Chocolate and Peanut Butter {Super Simple, Whole Wheat}',
                        },
                      },
                      {
                        id: 2438,
                        position: 0,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: 1,
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/orange.jpg',
                              name: 'orange',
                              unit: '',
                            },
                          ],
                          name: '',
                          servings: '1',
                          title: 'orange',
                        },
                      },
                      {
                        id: 2439,
                        position: 0,
                        slot: 2,
                        type: 'RECIPE',
                        value: { id: 535563, imageType: 'jpg', title: 'Black Bean Quinoa Salad' },
                      },
                      {
                        id: 2440,
                        position: 0,
                        slot: 3,
                        type: 'RECIPE',
                        value: { id: 590570, imageType: 'jpg', title: 'Asian Beef Lettuce Wraps' },
                      },
                      {
                        id: 2441,
                        position: 0,
                        slot: 3,
                        type: 'PRODUCT',
                        value: { id: 146191, imageType: 'jpg', title: 'Lindt Dark Chocolate' },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 1442, name: 'Calories', percentDailyNeeds: 72, unit: 'cal' },
                        { amount: 69, name: 'Fat', percentDailyNeeds: 106, unit: 'g' },
                        { amount: 147, name: 'Carbohydrates', percentDailyNeeds: 49, unit: 'g' },
                        { amount: 73, name: 'Protein', percentDailyNeeds: 147, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 444, name: 'Calories', percentDailyNeeds: 22, unit: 'cal' },
                        { amount: 12, name: 'Fat', percentDailyNeeds: 19, unit: 'g' },
                        { amount: 51, name: 'Carbohydrates', percentDailyNeeds: 17, unit: 'g' },
                        { amount: 38, name: 'Protein', percentDailyNeeds: 76, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 593, name: 'Calories', percentDailyNeeds: 30, unit: 'cal' },
                        { amount: 40, name: 'Fat', percentDailyNeeds: 62, unit: 'g' },
                        { amount: 41, name: 'Carbohydrates', percentDailyNeeds: 14, unit: 'g' },
                        { amount: 25, name: 'Protein', percentDailyNeeds: 50, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 406, name: 'Calories', percentDailyNeeds: 20, unit: 'cal' },
                        { amount: 17, name: 'Fat', percentDailyNeeds: 26, unit: 'g' },
                        { amount: 56, name: 'Carbohydrates', percentDailyNeeds: 19, unit: 'g' },
                        { amount: 10, name: 'Protein', percentDailyNeeds: 21, unit: 'g' },
                      ],
                    },
                  },
                ],
                id: 128,
                name: '1500 Calorie Meal Plan',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteMealplannerUsernameTemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/mealplanner/{username}/templates/{id}',
  tags: ['meal planning'],
  summary: 'Delete Meal Plan Template',
  description: 'Delete a meal plan template for a user.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Delete-Meal-Plan-Template',
  },
  operationId: 'deleteMealPlanTemplate',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The shopping list item id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 15678, type: 'number' },
            style: 'simple',
          },
          example: 15678,
        }),
    }),
    query: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            description: 'The private hash for the username.',
            explode: false,
            in: 'query',
            name: 'hash',
            required: true,
            schema: { example: '4b5v4398573406', type: 'string' },
            style: 'form',
          },
          example: '4b5v4398573406',
        }),
    }),
    body: {
      content: {
        '': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The private hash for the username.',
                  example: '4b5v4398573406',
                }),
              id: z.number().openapi({ description: 'The shopping list item id.', example: 15678 }),
              username: z.string().openapi({ description: 'The username.', example: 'dsky' }),
            })
            .openapi({ required: ['username', 'id', 'hash'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getMealplannerUsernameWeekStartDateRoute = createRoute({
  method: 'get',
  path: '/mealplanner/{username}/week/{start-date}',
  tags: ['meal planning'],
  summary: 'Get Meal Plan Week',
  description:
    "Retrieve a meal planned week for the given user. The username must be a spoonacular user and the hash must the the user's hash that can be found in his/her account.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Meal-Plan-Week',
  },
  operationId: 'getMealPlanWeek',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: 'The username.',
            explode: false,
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'dsky', type: 'string' },
            style: 'simple',
          },
          example: 'dsky',
        }),
      'start-date': z
        .string()
        .openapi({
          param: {
            description: 'The start date of the meal planned week in the format yyyy-mm-dd.',
            explode: false,
            in: 'path',
            name: 'start-date',
            required: true,
            schema: { example: '2020-06-01', type: 'string' },
            style: 'simple',
          },
          example: '2020-06-01',
        }),
    }),
    query: z.object({ hash: HashParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              days: z
                .array(
                  z
                    .object({
                      date: z.number(),
                      day: z.string().min(1),
                      items: z
                        .array(
                          z
                            .object({
                              id: z.int(),
                              position: z.int(),
                              slot: z.int(),
                              type: z.string().min(1),
                              value: z
                                .object({
                                  id: z.number(),
                                  imageType: z.string(),
                                  servings: z.number(),
                                  title: z.string().min(1),
                                })
                                .exactOptional()
                                .openapi({ required: ['servings', 'id', 'title', 'imageType'] }),
                            })
                            .openapi({ required: ['id', 'slot', 'position', 'type'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      nutritionSummary: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                      nutritionSummaryBreakfast: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                      nutritionSummaryDinner: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                      nutritionSummaryLunch: z
                        .object({
                          nutrients: z
                            .array(
                              z
                                .object({
                                  amount: z.number(),
                                  name: z.string().min(1),
                                  percentDailyNeeds: z.number(),
                                  unit: z.string().min(1),
                                })
                                .openapi({
                                  required: ['name', 'amount', 'unit', 'percentDailyNeeds'],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['nutrients'] }),
                    })
                    .openapi({ required: ['date', 'day'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['days'],
              'x-examples': {
                'example-1': {
                  days: [
                    {
                      date: 1589155200,
                      day: 'Monday',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 310, name: 'Calories', percentDailyNeeds: 16, unit: 'cal' },
                          { amount: 25, name: 'Fat', percentDailyNeeds: 38, unit: 'g' },
                          { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 20, name: 'Protein', percentDailyNeeds: 40, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                          { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                          { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 310, name: 'Calories', percentDailyNeeds: 16, unit: 'cal' },
                          { amount: 25, name: 'Fat', percentDailyNeeds: 38, unit: 'g' },
                          { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 20, name: 'Protein', percentDailyNeeds: 40, unit: 'g' },
                        ],
                      },
                    },
                    {
                      date: 1589241600,
                      day: 'Tuesday',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 200, name: 'Calories', percentDailyNeeds: 10, unit: 'cal' },
                          { amount: 1, name: 'Fat', percentDailyNeeds: 1, unit: 'g' },
                          { amount: 52, name: 'Carbohydrates', percentDailyNeeds: 17, unit: 'g' },
                          { amount: 2, name: 'Protein', percentDailyNeeds: 4, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 200, name: 'Calories', percentDailyNeeds: 10, unit: 'cal' },
                          { amount: 1, name: 'Fat', percentDailyNeeds: 1, unit: 'g' },
                          { amount: 52, name: 'Carbohydrates', percentDailyNeeds: 17, unit: 'g' },
                          { amount: 2, name: 'Protein', percentDailyNeeds: 4, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                          { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                          { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                        ],
                      },
                    },
                    {
                      date: 1589328000,
                      day: 'Wednesday',
                      nutritionSummary: {
                        nutrients: [
                          { amount: 180, name: 'Calories', percentDailyNeeds: 9, unit: 'cal' },
                          { amount: 6, name: 'Fat', percentDailyNeeds: 9, unit: 'g' },
                          { amount: 22, name: 'Carbohydrates', percentDailyNeeds: 7, unit: 'g' },
                          { amount: 10, name: 'Protein', percentDailyNeeds: 20, unit: 'g' },
                        ],
                      },
                      nutritionSummaryBreakfast: {
                        nutrients: [
                          { amount: 180, name: 'Calories', percentDailyNeeds: 9, unit: 'cal' },
                          { amount: 6, name: 'Fat', percentDailyNeeds: 9, unit: 'g' },
                          { amount: 22, name: 'Carbohydrates', percentDailyNeeds: 7, unit: 'g' },
                          { amount: 10, name: 'Protein', percentDailyNeeds: 20, unit: 'g' },
                        ],
                      },
                      nutritionSummaryDinner: {
                        nutrients: [
                          { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                          { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                        ],
                      },
                      nutritionSummaryLunch: {
                        nutrients: [
                          { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                          { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                          { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                        ],
                      },
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                days: [
                  {
                    date: 1589155200,
                    day: 'Monday',
                    items: [
                      {
                        id: 1976489,
                        position: 1,
                        slot: 1,
                        type: 'RECIPE',
                        value: {
                          id: 1023004,
                          imageType: '',
                          servings: 2,
                          title: 'Foolproof Meatloaf',
                        },
                      },
                      {
                        id: 1976490,
                        position: 2,
                        slot: 2,
                        type: 'CUSTOM_FOOD',
                        value: {
                          id: 345,
                          image: 'https://spoonacular.com/cdn/ingredients_100x100/bratwurst.jpg',
                          imageType: 'jpg',
                          servings: 1,
                          title: "Denn's Lamb Bratwurst - 1/2 Pkg",
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 310, name: 'Calories', percentDailyNeeds: 16, unit: 'cal' },
                        { amount: 25, name: 'Fat', percentDailyNeeds: 38, unit: 'g' },
                        { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 20, name: 'Protein', percentDailyNeeds: 40, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                        { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                        { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 310, name: 'Calories', percentDailyNeeds: 16, unit: 'cal' },
                        { amount: 25, name: 'Fat', percentDailyNeeds: 38, unit: 'g' },
                        { amount: 1, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 20, name: 'Protein', percentDailyNeeds: 40, unit: 'g' },
                      ],
                    },
                  },
                  {
                    date: 1589241600,
                    day: 'Tuesday',
                    items: [
                      {
                        id: 1976491,
                        position: 3,
                        slot: 1,
                        type: 'INGREDIENTS',
                        value: {
                          id: 877,
                          imageType: 'jpg',
                          ingredients: [
                            {
                              amount: '1',
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                              name: 'apple',
                              unit: '',
                            },
                            {
                              amount: '1',
                              image: 'https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg',
                              name: 'banana',
                              unit: '',
                            },
                          ],
                          name: '',
                          servings: 1,
                          title: 'apple and banana',
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 200, name: 'Calories', percentDailyNeeds: 10, unit: 'cal' },
                        { amount: 1, name: 'Fat', percentDailyNeeds: 1, unit: 'g' },
                        { amount: 52, name: 'Carbohydrates', percentDailyNeeds: 17, unit: 'g' },
                        { amount: 2, name: 'Protein', percentDailyNeeds: 4, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 200, name: 'Calories', percentDailyNeeds: 10, unit: 'cal' },
                        { amount: 1, name: 'Fat', percentDailyNeeds: 1, unit: 'g' },
                        { amount: 52, name: 'Carbohydrates', percentDailyNeeds: 17, unit: 'g' },
                        { amount: 2, name: 'Protein', percentDailyNeeds: 4, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                        { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                        { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                      ],
                    },
                  },
                  {
                    date: 1589328000,
                    day: 'Wednesday',
                    items: [
                      {
                        id: 1976492,
                        position: 4,
                        slot: 1,
                        type: 'MENU_ITEM',
                        value: {
                          id: 378557,
                          image: 'https://images.spoonacular.com/file/wximages/378557-312x231.png',
                          imageType: 'png',
                          servings: 1,
                          title: 'BBQ Steak Pizza, 9',
                        },
                      },
                    ],
                    nutritionSummary: {
                      nutrients: [
                        { amount: 180, name: 'Calories', percentDailyNeeds: 9, unit: 'cal' },
                        { amount: 6, name: 'Fat', percentDailyNeeds: 9, unit: 'g' },
                        { amount: 22, name: 'Carbohydrates', percentDailyNeeds: 7, unit: 'g' },
                        { amount: 10, name: 'Protein', percentDailyNeeds: 20, unit: 'g' },
                      ],
                    },
                    nutritionSummaryBreakfast: {
                      nutrients: [
                        { amount: 180, name: 'Calories', percentDailyNeeds: 9, unit: 'cal' },
                        { amount: 6, name: 'Fat', percentDailyNeeds: 9, unit: 'g' },
                        { amount: 22, name: 'Carbohydrates', percentDailyNeeds: 7, unit: 'g' },
                        { amount: 10, name: 'Protein', percentDailyNeeds: 20, unit: 'g' },
                      ],
                    },
                    nutritionSummaryDinner: {
                      nutrients: [
                        { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                        { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                      ],
                    },
                    nutritionSummaryLunch: {
                      nutrients: [
                        { amount: 0, name: 'Calories', percentDailyNeeds: 0, unit: 'cal' },
                        { amount: 0, name: 'Fat', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Carbohydrates', percentDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Protein', percentDailyNeeds: 0, unit: 'g' },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesAnalyzeRoute = createRoute({
  method: 'post',
  path: '/recipes/analyze',
  summary: 'Analyze Recipe',
  description:
    'This endpoint allows you to send raw recipe information, such as title, servings, and ingredients, to then see what we compute (badges, diets, nutrition, and more). This is useful if you have your own recipe data and want to enrich it with our semantic analysis.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Analyze-Recipe',
  },
  operationId: 'analyzeRecipe',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The input language, either "en" or "de".',
            explode: false,
            in: 'query',
            name: 'language',
            required: false,
            schema: { example: 'en', type: 'string' },
            style: 'form',
          },
          example: 'en',
        }),
      includeNutrition: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether nutrition data should be added to correctly parsed ingredients.',
            explode: false,
            in: 'query',
            name: 'includeNutrition',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      includeTaste: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether taste data should be added to correctly parsed ingredients.',
            explode: false,
            in: 'query',
            name: 'includeTaste',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
    body: {
      description: 'Example request body.',
      content: {
        '': {
          schema: z
            .object({
              includeNutrition: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether nutrition data should be added to correctly parsed ingredients.',
                  example: false,
                }),
              includeTaste: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Whether taste data should be added to correctly parsed ingredients.',
                  example: false,
                }),
              language: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The input language, either "en" or "de".',
                  example: 'en',
                }),
            })
            .openapi({ required: [] }),
        },
        'application/json': {
          schema: z
            .object({
              ingredients: z.array(z.string()).exactOptional(),
              instructions: z.string().exactOptional(),
              servings: z.int().exactOptional(),
              title: z.string().exactOptional(),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  ingredients: [
                    '1 lb spaghetti',
                    '3.5 oz pancetta',
                    '2 Tbsps olive oil',
                    '1  egg',
                    '0.5 cup parmesan cheese',
                  ],
                  instructions:
                    'Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ',
                  servings: 2,
                  title: 'Spaghetti Carbonara',
                },
              },
              required: [],
            }),
          examples: {
            'Example 1': {
              value: {
                ingredients: [
                  '1 lb spaghetti',
                  '3.5 oz pancetta',
                  '2 Tbsps olive oil',
                  '1  egg',
                  '0.5 cup parmesan cheese',
                ],
                instructions:
                  'Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. ',
                servings: 2,
                title: 'Spaghetti Carbonara',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesAnalyzeInstructionsRoute = createRoute({
  method: 'post',
  path: '/recipes/analyzeInstructions',
  tags: ['recipes'],
  summary: 'Analyze Recipe Instructions',
  description:
    "This endpoint allows you to break down instructions into atomic steps. Furthermore, each step will contain the ingredients and equipment required. Additionally, all ingredients and equipment from the recipe's instructions will be extracted independently of the step they're used in.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Analyze-Recipe-Instructions',
  },
  operationId: 'analyzeRecipeInstructions',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: {
            'example-1': {
              value:
                'instructions=Put the garlic in a pan and then add the onion. Add some salt and oregano.',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              equipment: z
                .array(
                  z
                    .object({ id: z.number(), name: z.string().min(1) })
                    .openapi({ required: ['id', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ingredients: z
                .array(
                  z
                    .object({ id: z.number(), name: z.string().min(1) })
                    .openapi({ required: ['id', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              parsedInstructions: z
                .array(
                  z
                    .object({
                      name: z.string(),
                      steps: z
                        .array(
                          z
                            .object({
                              equipment: z
                                .array(
                                  z
                                    .object({
                                      id: z.number(),
                                      image: z.string().min(1),
                                      localizedName: z.string().min(1),
                                      name: z.string().min(1),
                                    })
                                    .openapi({
                                      required: ['id', 'name', 'localizedName', 'image'],
                                    }),
                                )
                                .min(0)
                                .superRefine((items, ctx) => {
                                  const seen = new Map()
                                  for (const [i, val] of items.entries()) {
                                    const key = JSON.stringify(val)
                                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                    else seen.set(key, i)
                                  }
                                })
                                .exactOptional(),
                              ingredients: z
                                .array(
                                  z
                                    .object({
                                      id: z.number(),
                                      image: z.string().min(1),
                                      localizedName: z.string().min(1),
                                      name: z.string().min(1),
                                    })
                                    .openapi({
                                      required: ['id', 'name', 'localizedName', 'image'],
                                    }),
                                )
                                .min(0)
                                .superRefine((items, ctx) => {
                                  const seen = new Map()
                                  for (const [i, val] of items.entries()) {
                                    const key = JSON.stringify(val)
                                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                    else seen.set(key, i)
                                  }
                                })
                                .exactOptional(),
                              number: z.number(),
                              step: z.string().min(1),
                            })
                            .openapi({ required: ['number', 'step'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                    })
                    .openapi({ required: ['name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['parsedInstructions', 'ingredients', 'equipment'],
              'x-examples': {
                'example-1': {
                  equipment: [{ id: 404645, name: 'frying pan' }],
                  ingredients: [
                    { id: 2027, name: 'oregano' },
                    { id: 11215, name: 'garlic' },
                    { id: 11282, name: 'onion' },
                    { id: 2047, name: 'salt' },
                  ],
                  parsedInstructions: [
                    {
                      name: '',
                      steps: [
                        {
                          equipment: [
                            {
                              id: 404645,
                              image: 'pan.png',
                              localizedName: 'frying pan',
                              name: 'frying pan',
                            },
                          ],
                          ingredients: [
                            {
                              id: 11215,
                              image: 'garlic.png',
                              localizedName: 'garlic',
                              name: 'garlic',
                            },
                            {
                              id: 11282,
                              image: 'brown-onion.png',
                              localizedName: 'onion',
                              name: 'onion',
                            },
                          ],
                          number: 1,
                          step: 'Put the garlic in a pan and then add the onion.',
                        },
                        {
                          equipment: [],
                          ingredients: [
                            {
                              id: 2027,
                              image: 'oregano.jpg',
                              localizedName: 'oregano',
                              name: 'oregano',
                            },
                            { id: 2047, image: 'salt.jpg', localizedName: 'salt', name: 'salt' },
                          ],
                          number: 2,
                          step: 'Add some salt and oregano.',
                        },
                      ],
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                equipment: [{ id: 404645, name: 'frying pan' }],
                ingredients: [
                  { id: 2027, name: 'oregano' },
                  { id: 11215, name: 'garlic' },
                  { id: 11282, name: 'onion' },
                  { id: 2047, name: 'salt' },
                ],
                parsedInstructions: [
                  {
                    name: '',
                    steps: [
                      {
                        equipment: [
                          {
                            id: 404645,
                            image: 'pan.png',
                            localizedName: 'frying pan',
                            name: 'frying pan',
                          },
                        ],
                        ingredients: [
                          {
                            id: 11215,
                            image: 'garlic.png',
                            localizedName: 'garlic',
                            name: 'garlic',
                          },
                          {
                            id: 11282,
                            image: 'brown-onion.png',
                            localizedName: 'onion',
                            name: 'onion',
                          },
                        ],
                        number: 1,
                        step: 'Put the garlic in a pan and then add the onion.',
                      },
                      {
                        equipment: [],
                        ingredients: [
                          {
                            id: 2027,
                            image: 'oregano.jpg',
                            localizedName: 'oregano',
                            name: 'oregano',
                          },
                          { id: 2047, image: 'salt.jpg', localizedName: 'salt', name: 'salt' },
                        ],
                        number: 2,
                        step: 'Add some salt and oregano.',
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesAutocompleteRoute = createRoute({
  method: 'get',
  path: '/recipes/autocomplete',
  tags: ['recipes'],
  summary: 'Autocomplete Recipe Search',
  description: 'Autocomplete a partial input to suggest possible recipe names.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Autocomplete-Recipe-Search',
  },
  operationId: 'autocompleteRecipeSearch',
  request: { query: z.object({ query: QueryParamsSchema, number: NumberParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({ id: z.int(), imageType: z.string().min(1), title: z.string().min(1) })
                .openapi({ required: ['id', 'title', 'imageType'] }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  { id: 296687, imageType: 'jpg', title: 'chicken' },
                  { id: 42569, imageType: 'jpg', title: 'chicken bbq' },
                  { id: 83890, imageType: 'jpg', title: 'chicken blt' },
                  { id: 737543, imageType: 'jpg', title: 'chicken pie' },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                { id: 296687, imageType: 'jpg', title: 'chicken' },
                { id: 42569, imageType: 'jpg', title: 'chicken bbq' },
                { id: 83890, imageType: 'jpg', title: 'chicken blt' },
                { id: 737543, imageType: 'jpg', title: 'chicken pie' },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesComplexSearchRoute = createRoute({
  method: 'get',
  path: '/recipes/complexSearch',
  tags: ['recipes'],
  summary: 'Search Recipes',
  description:
    'Search through hundreds of thousands of recipes using advanced filtering and ranking. NOTE: This method combines searching by query, by ingredients, and by nutrients into one endpoint.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Recipes',
  },
  operationId: 'searchRecipes',
  request: {
    query: z.object({
      query: QueryParamsSchema,
      cuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR'). See a full list of supported cuisines.",
            explode: false,
            in: 'query',
            name: 'cuisine',
            required: false,
            schema: { example: 'italian', type: 'string' },
            style: 'form',
          },
          example: 'italian',
        }),
      excludeCuisine: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND'). See a full list of supported cuisines.",
            explode: false,
            in: 'query',
            name: 'excludeCuisine',
            required: false,
            schema: { example: 'greek', type: 'string' },
            style: 'form',
          },
          example: 'greek',
        }),
      diet: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The diet for which the recipes must be suitable. See a full list of supported diets.',
            explode: false,
            in: 'query',
            name: 'diet',
            required: false,
            schema: { example: 'vegetarian', type: 'string' },
            style: 'form',
          },
          example: 'vegetarian',
        }),
      intolerances: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.',
            explode: false,
            in: 'query',
            name: 'intolerances',
            required: false,
            schema: { example: 'gluten', type: 'string' },
            style: 'form',
          },
          example: 'gluten',
        }),
      equipment: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The equipment required. Multiple values will be interpreted as \'or\'. For example, value could be "blender, frying pan, bowl".',
            explode: false,
            in: 'query',
            name: 'equipment',
            required: false,
            schema: { example: 'pan', type: 'string' },
            style: 'form',
          },
          example: 'pan',
        }),
      includeIngredients: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ingredients that should/must be used in the recipes.',
            explode: false,
            in: 'query',
            name: 'includeIngredients',
            required: false,
            schema: { example: 'tomato,cheese', type: 'string' },
            style: 'form',
          },
          example: 'tomato,cheese',
        }),
      excludeIngredients: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of ingredients or ingredient types that the recipes must not contain.',
            explode: false,
            in: 'query',
            name: 'excludeIngredients',
            required: false,
            schema: { example: 'eggs', type: 'string' },
            style: 'form',
          },
          example: 'eggs',
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of recipe. See a full list of supported meal types.',
            explode: false,
            in: 'query',
            name: 'type',
            required: false,
            schema: { example: 'main course', type: 'string' },
            style: 'form',
          },
          example: 'main course',
        }),
      instructionsRequired: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether the recipes must have instructions.',
            explode: false,
            in: 'query',
            name: 'instructionsRequired',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      fillIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Add information about the ingredients and whether they are used or missing in relation to the query.',
            explode: false,
            in: 'query',
            name: 'fillIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      addRecipeInformation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true, you get more information about the recipes returned.',
            explode: false,
            in: 'query',
            name: 'addRecipeInformation',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      addRecipeNutrition: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, you get nutritional information about each recipes returned.',
            explode: false,
            in: 'query',
            name: 'addRecipeNutrition',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The username of the recipe author.',
            explode: false,
            in: 'query',
            name: 'author',
            required: false,
            schema: { example: 'coffeebean', type: 'string' },
            style: 'form',
          },
          example: 'coffeebean',
        }),
      tags: TagsParamsSchema,
      recipeBoxId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the recipe box to which the search should be limited to.',
            explode: false,
            in: 'query',
            name: 'recipeBoxId',
            required: false,
            schema: { example: 2468, type: 'number' },
            style: 'form',
          },
          example: 2468,
        }),
      titleMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Enter text that must be found in the title of the recipes.',
            explode: false,
            in: 'query',
            name: 'titleMatch',
            required: false,
            schema: { example: 'Crock Pot', type: 'string' },
            style: 'form',
          },
          example: 'Crock Pot',
        }),
      maxReadyTime: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum time in minutes it should take to prepare and cook the recipe.',
            explode: false,
            in: 'query',
            name: 'maxReadyTime',
            required: false,
            schema: { example: 20, type: 'number' },
            style: 'form',
          },
          example: 20,
        }),
      ignorePantry: IgnorePantryParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The strategy to sort recipes by. See a full list of supported sorting options.',
            explode: false,
            in: 'query',
            name: 'sort',
            required: false,
            schema: { example: 'calories', type: 'string' },
            style: 'form',
          },
          example: 'calories',
        }),
      sortDirection: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).",
            explode: false,
            in: 'query',
            name: 'sortDirection',
            required: false,
            schema: { example: 'asc', type: 'string' },
            style: 'form',
          },
          example: 'asc',
        }),
      minCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of carbohydrates in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCarbs',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of carbohydrates in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCarbs',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of protein in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minProtein',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of protein in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxProtein',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of calories the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCalories',
            required: false,
            schema: { example: 50, type: 'number' },
            style: 'form',
          },
          example: 50,
        }),
      maxCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of calories the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCalories',
            required: false,
            schema: { example: 800, type: 'number' },
            style: 'form',
          },
          example: 800,
        }),
      minFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fat in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFat',
            required: false,
            schema: { example: 1, type: 'number' },
            style: 'form',
          },
          example: 1,
        }),
      maxFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fat in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFat',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minAlcohol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of alcohol in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minAlcohol',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxAlcohol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of alcohol in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxAlcohol',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCaffeine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of caffeine in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCaffeine',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCaffeine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of caffeine in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCaffeine',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCopper: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of copper in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCopper',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCopper: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of copper in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCopper',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCalcium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of calcium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCalcium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCalcium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of calcium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCalcium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCholine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of choline in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCholine',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCholine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of choline in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCholine',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCholesterol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of cholesterol in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCholesterol',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCholesterol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of cholesterol in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCholesterol',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFluoride: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fluoride in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFluoride',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFluoride: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fluoride in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFluoride',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSaturatedFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of saturated fat in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSaturatedFat',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSaturatedFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of saturated fat in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSaturatedFat',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminA: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin A in IU the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminA',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminA: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin A in IU the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminA',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminC: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin C milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminC',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminC: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin C in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminC',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminD: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin D in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminD',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminD: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin D in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminD',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminE: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin E in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminE',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminE: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin E in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminE',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminK: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin K in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminK',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminK: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin K in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminK',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB1: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B1 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB1',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB1: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B1 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB1',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB2: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B2 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB2',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB2: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B2 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB2',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB5: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B5 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB5',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB5: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B5 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB5',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB3: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B3 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB3',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB3: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B3 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB3',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB6: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B6 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB6',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB6: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B6 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB6',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB12: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B12 in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB12',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB12: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B12 in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB12',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFiber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fiber in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFiber',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFiber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fiber in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFiber',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFolate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of folate in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFolate',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFolate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of folate in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFolate',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFolicAcid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of folic acid in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFolicAcid',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFolicAcid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of folic acid in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFolicAcid',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minIodine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of iodine in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minIodine',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxIodine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of iodine in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxIodine',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minIron: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of iron in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minIron',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxIron: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of iron in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxIron',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minMagnesium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of magnesium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minMagnesium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxMagnesium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of magnesium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxMagnesium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minManganese: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of manganese in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minManganese',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxManganese: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of manganese in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxManganese',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minPhosphorus: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of phosphorus in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minPhosphorus',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxPhosphorus: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of phosphorus in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxPhosphorus',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minPotassium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of potassium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minPotassium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxPotassium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of potassium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxPotassium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSelenium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of selenium in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSelenium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSelenium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of selenium in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSelenium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSodium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of sodium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSodium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSodium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of sodium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSodium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSugar: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of sugar in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSugar',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSugar: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of sugar in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSugar',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minZinc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of zinc in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minZinc',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxZinc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of zinc in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxZinc',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
      limitLicense: LimitLicenseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              number: z.int(),
              offset: z.int(),
              results: z
                .array(
                  z
                    .object({
                      calories: z.number(),
                      carbs: z.string().min(1),
                      fat: z.string().min(1),
                      id: z.int(),
                      image: z.string().min(1),
                      imageType: z.string().min(1),
                      protein: z.string().min(1),
                      title: z.string().min(1),
                    })
                    .openapi({
                      required: [
                        'id',
                        'title',
                        'calories',
                        'carbs',
                        'fat',
                        'image',
                        'imageType',
                        'protein',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalResults: z.int(),
            })
            .openapi({
              description: '',
              required: ['offset', 'number', 'results', 'totalResults'],
              'x-examples': {
                'example-1': {
                  number: 2,
                  offset: 0,
                  results: [
                    {
                      calories: 584,
                      carbs: '84g',
                      fat: '20g',
                      id: 716429,
                      image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
                      imageType: 'jpg',
                      protein: '19g',
                      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                    },
                    {
                      calories: 521,
                      carbs: '69g',
                      fat: '10g',
                      id: 715538,
                      image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
                      imageType: 'jpg',
                      protein: '35g',
                      title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
                    },
                  ],
                  totalResults: 86,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                number: 2,
                offset: 0,
                results: [
                  {
                    calories: 584,
                    carbs: '84g',
                    fat: '20g',
                    id: 716429,
                    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
                    imageType: 'jpg',
                    protein: '19g',
                    title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                  },
                  {
                    calories: 521,
                    carbs: '69g',
                    fat: '10g',
                    id: 715538,
                    image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
                    imageType: 'jpg',
                    protein: '35g',
                    title: 'What to make for dinner tonight?? Bruschetta Style Pork & Pasta',
                  },
                ],
                totalResults: 86,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesConvertRoute = createRoute({
  method: 'get',
  path: '/recipes/convert',
  tags: ['recipes'],
  summary: 'Convert Amounts',
  description: 'Convert amounts like "2 cups of flour to grams".',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Convert-Amounts',
  },
  operationId: 'convertAmounts',
  request: {
    query: z.object({
      ingredientName: z
        .string()
        .openapi({
          param: {
            description: 'The ingredient which you want to convert.',
            explode: false,
            in: 'query',
            name: 'ingredientName',
            required: true,
            schema: { example: 'flour', type: 'string' },
            style: 'form',
          },
          example: 'flour',
        }),
      sourceAmount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description:
              'The amount from which you want to convert, e.g. the 2.5 in "2.5 cups of flour to grams".',
            explode: false,
            in: 'query',
            name: 'sourceAmount',
            required: true,
            schema: { example: 2.5, type: 'number' },
            style: 'form',
          },
          example: 2.5,
        }),
      sourceUnit: z
        .string()
        .openapi({
          param: {
            description:
              'The unit from which you want to convert, e.g. the grams in "2.5 cups of flour to grams". You can also use "piece", e.g. "3.4 oz tomatoes to piece"',
            explode: false,
            in: 'query',
            name: 'sourceUnit',
            required: true,
            schema: { example: 'cups', type: 'string' },
            style: 'form',
          },
          example: 'cups',
        }),
      targetUnit: z
        .string()
        .openapi({
          param: {
            description:
              'The unit to which you want to convert, e.g. the grams in "2.5 cups of flour to grams". You can also use "piece", e.g. "3.4 oz tomatoes to piece"',
            explode: false,
            in: 'query',
            name: 'targetUnit',
            required: true,
            schema: { example: 'grams', type: 'string' },
            style: 'form',
          },
          example: 'grams',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              answer: z.string().min(1),
              sourceAmount: z.number(),
              sourceUnit: z.string().min(1),
              targetAmount: z.number(),
              targetUnit: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['sourceAmount', 'sourceUnit', 'targetAmount', 'targetUnit', 'answer'],
              'x-examples': {
                'example-1': {
                  answer: '2.5 cups flour translates to 312.5 grams.',
                  sourceAmount: 2.5,
                  sourceUnit: 'cups',
                  targetAmount: 312.5,
                  targetUnit: 'grams',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                answer: '2.5 cups flour translates to 312.5 grams.',
                sourceAmount: 2.5,
                sourceUnit: 'cups',
                targetAmount: 312.5,
                targetUnit: 'grams',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesCuisineRoute = createRoute({
  method: 'post',
  path: '/recipes/cuisine',
  tags: ['recipes'],
  summary: 'Classify Cuisine',
  description: "Classify the recipe's cuisine.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Classify-Cuisine',
  },
  operationId: 'classifyCuisine',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: {
            'example-1': {
              value: 'title=Pork roast with green beans&ingredientList=3 oz pork shoulder',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              confidence: z.number(),
              cuisine: z.string().min(1),
              cuisines: z.array(z.string()),
            })
            .openapi({
              description: '',
              required: ['cuisine', 'cuisines', 'confidence'],
              'x-examples': {
                'example-1': {
                  confidence: 0,
                  cuisine: 'Mediterranean',
                  cuisines: ['Mediterranean', 'European', 'Italian'],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                confidence: 0,
                cuisine: 'Mediterranean',
                cuisines: ['Mediterranean', 'European', 'Italian'],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesExtractRoute = createRoute({
  method: 'get',
  path: '/recipes/extract',
  tags: ['recipes'],
  summary: 'Extract Recipe from Website',
  description:
    'This endpoint lets you extract recipe data such as title, ingredients, and instructions from any properly formatted Website.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Extract-Recipe-from-Website',
  },
  operationId: 'extractRecipeFromWebsite',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'The URL of the recipe page.',
            explode: false,
            in: 'query',
            name: 'url',
            required: true,
            schema: {
              example: 'https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies',
              type: 'string',
            },
            style: 'form',
          },
          example: 'https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies',
        }),
      forceExtraction: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the extraction will be triggered whether we already know the recipe or not. Use this only if information is missing as this operation is slower.',
            explode: false,
            in: 'query',
            name: 'forceExtraction',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      analyze: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, the recipe will be analyzed and classified resolving in more data such as cuisines, dish types, and more.',
            explode: false,
            in: 'query',
            name: 'analyze',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      includeNutrition: IncludeNutritionParamsSchema,
      includeTaste: IncludeTasteParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aggregateLikes: z.int(),
              analyzedInstructions: z.array(z.object({})),
              cheap: z.boolean(),
              creditsText: z.string().min(1),
              cuisines: z.array(z.string()),
              dairyFree: z.boolean(),
              diets: z.array(z.string()),
              dishTypes: z.array(z.string()),
              extendedIngredients: z
                .array(
                  z
                    .object({
                      aisle: z.string().min(1),
                      amount: z.number(),
                      consitency: z.string().min(1),
                      id: z.int(),
                      image: z.string().min(1),
                      measures: z
                        .object({
                          metric: z
                            .object({
                              amount: z.number(),
                              unitLong: z.string().min(0),
                              unitShort: z.string().min(0),
                            })
                            .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                          us: z
                            .object({
                              amount: z.number(),
                              unitLong: z.string().min(0),
                              unitShort: z.string().min(0),
                            })
                            .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                        })
                        .exactOptional()
                        .openapi({ required: ['metric', 'us'] }),
                      meta: z.array(z.string()).exactOptional(),
                      name: z.string().min(1),
                      original: z.string().min(1),
                      originalName: z.string().min(1),
                      unit: z.string().min(0),
                    })
                    .openapi({
                      required: [
                        'aisle',
                        'amount',
                        'consitency',
                        'id',
                        'image',
                        'name',
                        'original',
                        'originalName',
                        'unit',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              gaps: z.string().min(1),
              glutenFree: z.boolean(),
              healthScore: z.number(),
              id: z.int(),
              image: z.string().min(1),
              imageType: z.string().min(1),
              instructions: z.string(),
              ketogenic: z.boolean(),
              license: z.string().min(1),
              lowFodmap: z.boolean(),
              occasions: z.array(z.string()),
              pricePerServing: z.number(),
              readyInMinutes: z.int(),
              servings: z.number(),
              sourceName: z.string().min(1),
              sourceUrl: z.string().min(1),
              spoonacularScore: z.number(),
              spoonacularSourceUrl: z.string().min(1),
              summary: z.string().min(1),
              sustainable: z.boolean(),
              title: z.string().min(1),
              vegan: z.boolean(),
              vegetarian: z.boolean(),
              veryHealthy: z.boolean(),
              veryPopular: z.boolean(),
              weightWatcherSmartPoints: z.number(),
              whole30: z.boolean(),
              winePairing: z
                .object({
                  pairedWines: z.array(z.string()),
                  pairingText: z.string().min(1),
                  productMatches: z
                    .array(
                      z
                        .object({
                          averageRating: z.number(),
                          description: z.string().min(1),
                          id: z.int(),
                          imageUrl: z.string().min(1),
                          link: z.string().min(1),
                          price: z.string().min(1),
                          ratingCount: z.int(),
                          score: z.number(),
                          title: z.string().min(1),
                        })
                        .openapi({
                          required: [
                            'id',
                            'title',
                            'description',
                            'price',
                            'imageUrl',
                            'averageRating',
                            'ratingCount',
                            'score',
                            'link',
                          ],
                        }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['pairedWines', 'pairingText', 'productMatches'] }),
            })
            .openapi({
              description: '',
              required: [
                'id',
                'title',
                'image',
                'imageType',
                'servings',
                'readyInMinutes',
                'license',
                'sourceName',
                'sourceUrl',
                'spoonacularSourceUrl',
                'aggregateLikes',
                'healthScore',
                'spoonacularScore',
                'pricePerServing',
                'analyzedInstructions',
                'cheap',
                'creditsText',
                'cuisines',
                'dairyFree',
                'diets',
                'gaps',
                'glutenFree',
                'instructions',
                'ketogenic',
                'lowFodmap',
                'occasions',
                'sustainable',
                'vegan',
                'vegetarian',
                'veryHealthy',
                'veryPopular',
                'whole30',
                'weightWatcherSmartPoints',
                'dishTypes',
                'extendedIngredients',
                'summary',
                'winePairing',
              ],
              'x-examples': {
                'example-1': {
                  aggregateLikes: 209,
                  analyzedInstructions: [],
                  cheap: false,
                  creditsText: 'Full Belly Sisters',
                  cuisines: [],
                  dairyFree: false,
                  diets: [],
                  dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                  extendedIngredients: [
                    {
                      aisle: 'Milk, Eggs, Other Dairy',
                      amount: 1,
                      consitency: 'solid',
                      id: 1001,
                      image: 'butter-sliced.jpg',
                      measures: {
                        metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      },
                      meta: [],
                      name: 'butter',
                      original: '1 tbsp butter',
                      originalName: 'butter',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Produce',
                      amount: 2,
                      consitency: 'solid',
                      id: 10011135,
                      image: 'cauliflower.jpg',
                      measures: {
                        metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                        us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                      },
                      meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                      name: 'cauliflower florets',
                      original:
                        'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                      originalName:
                        'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                      unit: 'cups',
                    },
                    {
                      aisle: 'Cheese',
                      amount: 2,
                      consitency: 'solid',
                      id: 1041009,
                      image: 'cheddar-cheese.png',
                      measures: {
                        metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      },
                      meta: ['grated', '(I used romano)'],
                      name: 'cheese',
                      original: '2 tbsp grated cheese (I used romano)',
                      originalName: 'grated cheese (I used romano)',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Oil, Vinegar, Salad Dressing',
                      amount: 1,
                      consitency: 'liquid',
                      id: 1034053,
                      image: 'olive-oil.jpg',
                      measures: {
                        metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      },
                      meta: [],
                      name: 'extra virgin olive oil',
                      original: '1-2 tbsp extra virgin olive oil',
                      originalName: 'extra virgin olive oil',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Produce',
                      amount: 5,
                      consitency: 'solid',
                      id: 11215,
                      image: 'garlic.jpg',
                      measures: {
                        metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                        us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                      },
                      meta: [],
                      name: 'garlic',
                      original: '5-6 cloves garlic',
                      originalName: 'garlic',
                      unit: 'cloves',
                    },
                    {
                      aisle: 'Pasta and Rice',
                      amount: 6,
                      consitency: 'solid',
                      id: 20420,
                      image: 'fusilli.jpg',
                      measures: {
                        metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                        us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                      },
                      meta: ['(I used linguine)'],
                      name: 'pasta',
                      original: '6-8 ounces pasta (I used linguine)',
                      originalName: 'pasta (I used linguine)',
                      unit: 'ounces',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      consitency: 'solid',
                      id: 1032009,
                      image: 'red-pepper-flakes.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                        us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                      },
                      meta: ['red'],
                      name: 'red pepper flakes',
                      original: 'couple of pinches red pepper flakes, optional',
                      originalName: 'couple of red pepper flakes, optional',
                      unit: 'pinches',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      consitency: 'solid',
                      id: 1102047,
                      image: 'salt-and-pepper.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                        us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                      },
                      meta: ['to taste'],
                      name: 'salt and pepper',
                      original: 'salt and pepper, to taste',
                      originalName: 'salt and pepper, to taste',
                      unit: 'servings',
                    },
                    {
                      aisle: 'Produce',
                      amount: 3,
                      consitency: 'solid',
                      id: 11291,
                      image: 'spring-onions.jpg',
                      measures: {
                        metric: { amount: 3, unitLong: '', unitShort: '' },
                        us: { amount: 3, unitLong: '', unitShort: '' },
                      },
                      meta: ['white', 'green', 'separated', 'chopped'],
                      name: 'scallions',
                      original: '3 scallions, chopped, white and green parts separated',
                      originalName: 'scallions, chopped, white and green parts separated',
                      unit: '',
                    },
                    {
                      aisle: 'Alcoholic Beverages',
                      amount: 2,
                      consitency: 'liquid',
                      id: 14106,
                      image: 'white-wine.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      },
                      meta: ['white'],
                      name: 'white wine',
                      original: '2-3 tbsp white wine',
                      originalName: 'white wine',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Pasta and Rice',
                      amount: 0.25,
                      consitency: 'solid',
                      id: 99025,
                      image: 'breadcrumbs.jpg',
                      measures: {
                        metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                        us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                      },
                      meta: ['whole wheat', '(I used panko)'],
                      name: 'whole wheat bread crumbs',
                      original: '1/4 cup whole wheat bread crumbs (I used panko)',
                      originalName: 'whole wheat bread crumbs (I used panko)',
                      unit: 'cup',
                    },
                  ],
                  gaps: 'no',
                  glutenFree: false,
                  healthScore: 19,
                  id: 716429,
                  image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                  imageType: 'jpg',
                  instructions: '',
                  ketogenic: false,
                  license: 'CC BY-SA 3.0',
                  lowFodmap: false,
                  occasions: [],
                  pricePerServing: 163.15,
                  readyInMinutes: 45,
                  servings: 2,
                  sourceName: 'Full Belly Sisters',
                  sourceUrl:
                    'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                  spoonacularScore: 83,
                  spoonacularSourceUrl:
                    'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                  summary:
                    'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.',
                  sustainable: false,
                  title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                  vegan: false,
                  vegetarian: false,
                  veryHealthy: false,
                  veryPopular: false,
                  weightWatcherSmartPoints: 17,
                  whole30: false,
                  winePairing: {
                    pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                    pairingText:
                      'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                    productMatches: [
                      {
                        averageRating: 0.8,
                        description:
                          'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                        id: 469199,
                        imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                        link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                        price: '$25.0',
                        ratingCount: 1,
                        score: 0.55,
                        title: 'Buddha Kat Winery Chardonnay',
                      },
                    ],
                  },
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aggregateLikes: 209,
                analyzedInstructions: [],
                cheap: false,
                creditsText: 'Full Belly Sisters',
                cuisines: [],
                dairyFree: false,
                diets: [],
                dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                extendedIngredients: [
                  {
                    aisle: 'Milk, Eggs, Other Dairy',
                    amount: 1,
                    consitency: 'solid',
                    id: 1001,
                    image: 'butter-sliced.jpg',
                    measures: {
                      metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                    },
                    meta: [],
                    name: 'butter',
                    original: '1 tbsp butter',
                    originalName: 'butter',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Produce',
                    amount: 2,
                    consitency: 'solid',
                    id: 10011135,
                    image: 'cauliflower.jpg',
                    measures: {
                      metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                      us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                    },
                    meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                    name: 'cauliflower florets',
                    original:
                      'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                    originalName:
                      'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                    unit: 'cups',
                  },
                  {
                    aisle: 'Cheese',
                    amount: 2,
                    consitency: 'solid',
                    id: 1041009,
                    image: 'cheddar-cheese.png',
                    measures: {
                      metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                    },
                    meta: ['grated', '(I used romano)'],
                    name: 'cheese',
                    original: '2 tbsp grated cheese (I used romano)',
                    originalName: 'grated cheese (I used romano)',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Oil, Vinegar, Salad Dressing',
                    amount: 1,
                    consitency: 'liquid',
                    id: 1034053,
                    image: 'olive-oil.jpg',
                    measures: {
                      metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                    },
                    meta: [],
                    name: 'extra virgin olive oil',
                    original: '1-2 tbsp extra virgin olive oil',
                    originalName: 'extra virgin olive oil',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Produce',
                    amount: 5,
                    consitency: 'solid',
                    id: 11215,
                    image: 'garlic.jpg',
                    measures: {
                      metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                      us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                    },
                    meta: [],
                    name: 'garlic',
                    original: '5-6 cloves garlic',
                    originalName: 'garlic',
                    unit: 'cloves',
                  },
                  {
                    aisle: 'Pasta and Rice',
                    amount: 6,
                    consitency: 'solid',
                    id: 20420,
                    image: 'fusilli.jpg',
                    measures: {
                      metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                      us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                    },
                    meta: ['(I used linguine)'],
                    name: 'pasta',
                    original: '6-8 ounces pasta (I used linguine)',
                    originalName: 'pasta (I used linguine)',
                    unit: 'ounces',
                  },
                  {
                    aisle: 'Spices and Seasonings',
                    amount: 2,
                    consitency: 'solid',
                    id: 1032009,
                    image: 'red-pepper-flakes.jpg',
                    measures: {
                      metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                      us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                    },
                    meta: ['red'],
                    name: 'red pepper flakes',
                    original: 'couple of pinches red pepper flakes, optional',
                    originalName: 'couple of red pepper flakes, optional',
                    unit: 'pinches',
                  },
                  {
                    aisle: 'Spices and Seasonings',
                    amount: 2,
                    consitency: 'solid',
                    id: 1102047,
                    image: 'salt-and-pepper.jpg',
                    measures: {
                      metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                      us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                    },
                    meta: ['to taste'],
                    name: 'salt and pepper',
                    original: 'salt and pepper, to taste',
                    originalName: 'salt and pepper, to taste',
                    unit: 'servings',
                  },
                  {
                    aisle: 'Produce',
                    amount: 3,
                    consitency: 'solid',
                    id: 11291,
                    image: 'spring-onions.jpg',
                    measures: {
                      metric: { amount: 3, unitLong: '', unitShort: '' },
                      us: { amount: 3, unitLong: '', unitShort: '' },
                    },
                    meta: ['white', 'green', 'separated', 'chopped'],
                    name: 'scallions',
                    original: '3 scallions, chopped, white and green parts separated',
                    originalName: 'scallions, chopped, white and green parts separated',
                    unit: '',
                  },
                  {
                    aisle: 'Alcoholic Beverages',
                    amount: 2,
                    consitency: 'liquid',
                    id: 14106,
                    image: 'white-wine.jpg',
                    measures: {
                      metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                    },
                    meta: ['white'],
                    name: 'white wine',
                    original: '2-3 tbsp white wine',
                    originalName: 'white wine',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Pasta and Rice',
                    amount: 0.25,
                    consitency: 'solid',
                    id: 99025,
                    image: 'breadcrumbs.jpg',
                    measures: {
                      metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                      us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                    },
                    meta: ['whole wheat', '(I used panko)'],
                    name: 'whole wheat bread crumbs',
                    original: '1/4 cup whole wheat bread crumbs (I used panko)',
                    originalName: 'whole wheat bread crumbs (I used panko)',
                    unit: 'cup',
                  },
                ],
                gaps: 'no',
                glutenFree: false,
                healthScore: 19,
                id: 716429,
                image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                imageType: 'jpg',
                instructions: '',
                ketogenic: false,
                license: 'CC BY-SA 3.0',
                lowFodmap: false,
                occasions: [],
                pricePerServing: 163.15,
                readyInMinutes: 45,
                servings: 2,
                sourceName: 'Full Belly Sisters',
                sourceUrl:
                  'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                spoonacularScore: 83,
                spoonacularSourceUrl:
                  'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                summary:
                  'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.',
                sustainable: false,
                title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                vegan: false,
                vegetarian: false,
                veryHealthy: false,
                veryPopular: false,
                weightWatcherSmartPoints: 17,
                whole30: false,
                winePairing: {
                  pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                  pairingText:
                    'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                  productMatches: [
                    {
                      averageRating: 0.8,
                      description:
                        'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                      id: 469199,
                      imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                      link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                      price: '$25.0',
                      ratingCount: 1,
                      score: 0.55,
                      title: 'Buddha Kat Winery Chardonnay',
                    },
                  ],
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesFindByIngredientsRoute = createRoute({
  method: 'get',
  path: '/recipes/findByIngredients',
  tags: ['recipes'],
  summary: 'Search Recipes by Ingredients',
  description:
    "\nEver wondered what recipes you can cook with the ingredients you have in your fridge or pantry? This endpoint lets you find recipes that either maximize the usage of ingredients you have at hand (pre shopping) or minimize the ingredients that you don't currently have (post shopping).\n        ",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients',
  },
  operationId: 'searchRecipesByIngredients',
  request: {
    query: z.object({
      ingredients: IngredientsParamsSchema,
      number: NumberParamsSchema,
      limitLicense: LimitLicenseParamsSchema,
      ranking: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.',
            explode: false,
            in: 'query',
            name: 'ranking',
            required: false,
            schema: { example: 1, type: 'number' },
            style: 'form',
          },
          example: 1,
        }),
      ignorePantry: IgnorePantryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.int(),
                  image: z.string().min(1),
                  imageType: z.string().min(1),
                  likes: z.int(),
                  missedIngredientCount: z.int(),
                  missedIngredients: z
                    .array(
                      z
                        .object({
                          aisle: z.string().min(1),
                          amount: z.number(),
                          id: z.int(),
                          image: z.string().min(1),
                          meta: z.array(z.string()).exactOptional(),
                          name: z.string().min(1),
                          original: z.string().min(1),
                          originalName: z.string().min(1),
                          unit: z.string().min(0),
                          unitLong: z.string().min(0),
                          unitShort: z.string().min(0),
                        })
                        .openapi({
                          required: [
                            'aisle',
                            'amount',
                            'id',
                            'image',
                            'name',
                            'original',
                            'originalName',
                            'unit',
                            'unitLong',
                            'unitShort',
                          ],
                        }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  title: z.string().min(1),
                  unusedIngredients: z.array(z.object({})).min(0),
                  usedIngredientCount: z.number(),
                  usedIngredients: z
                    .array(
                      z
                        .object({
                          aisle: z.string().min(1),
                          amount: z.number(),
                          id: z.int(),
                          image: z.string().min(1),
                          meta: z.array(z.string()).exactOptional(),
                          name: z.string().min(1),
                          original: z.string().min(1),
                          originalName: z.string().min(1),
                          unit: z.string().min(0),
                          unitLong: z.string().min(0),
                          unitShort: z.string().min(0),
                        })
                        .openapi({
                          required: [
                            'aisle',
                            'amount',
                            'id',
                            'image',
                            'name',
                            'original',
                            'originalName',
                            'unit',
                            'unitLong',
                            'unitShort',
                          ],
                        }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({
                  required: [
                    'id',
                    'image',
                    'imageType',
                    'likes',
                    'missedIngredientCount',
                    'missedIngredients',
                    'title',
                    'unusedIngredients',
                    'usedIngredientCount',
                    'usedIngredients',
                  ],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    id: 73420,
                    image: 'https://spoonacular.com/recipeImages/73420-312x231.jpg',
                    imageType: 'jpg',
                    likes: 0,
                    missedIngredientCount: 3,
                    missedIngredients: [
                      {
                        aisle: 'Baking',
                        amount: 1,
                        id: 18371,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg',
                        meta: [],
                        name: 'baking powder',
                        original: '1 tsp baking powder',
                        originalName: 'baking powder',
                        unit: 'tsp',
                        unitLong: 'teaspoon',
                        unitShort: 'tsp',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 1,
                        id: 2010,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
                        meta: [],
                        name: 'cinnamon',
                        original: '1 tsp cinnamon',
                        originalName: 'cinnamon',
                        unit: 'tsp',
                        unitLong: 'teaspoon',
                        unitShort: 'tsp',
                      },
                      {
                        aisle: 'Milk, Eggs, Other Dairy',
                        amount: 1,
                        id: 1123,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.png',
                        meta: [],
                        name: 'egg',
                        original: '1 egg',
                        originalName: 'egg',
                        unit: '',
                        unitLong: '',
                        unitShort: '',
                      },
                    ],
                    title: 'Apple Or Peach Strudel',
                    unusedIngredients: [],
                    usedIngredientCount: 1,
                    usedIngredients: [
                      {
                        aisle: 'Produce',
                        amount: 6,
                        id: 9003,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                        meta: [],
                        name: 'apples',
                        original: '6 large baking apples',
                        originalName: 'baking apples',
                        unit: 'large',
                        unitLong: 'larges',
                        unitShort: 'large',
                      },
                    ],
                  },
                  {
                    id: 632660,
                    image: 'https://spoonacular.com/recipeImages/632660-312x231.jpg',
                    imageType: 'jpg',
                    likes: 3,
                    missedIngredientCount: 4,
                    missedIngredients: [
                      {
                        aisle: 'Milk, Eggs, Other Dairy',
                        amount: 1.5,
                        extendedName: 'unsalted butter',
                        id: 1001,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg',
                        meta: ['unsalted', 'cold'],
                        name: 'butter',
                        original: '1 1/2 sticks cold unsalted butter cold unsalted butter<',
                        originalName: 'cold unsalted butter cold unsalted butter<',
                        unit: 'sticks',
                        unitLong: 'sticks',
                        unitShort: 'sticks',
                      },
                      {
                        aisle: 'Produce',
                        amount: 4,
                        id: 1079003,
                        image:
                          'https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png',
                        meta: [
                          'red',
                          ' such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices ',
                        ],
                        name: 'red apples',
                        original:
                          '4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices',
                        originalName:
                          's red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices',
                        unit: 'large',
                        unitLong: 'larges',
                        unitShort: 'large',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        id: 2010,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
                        meta: [],
                        name: 'cinnamon',
                        original: '2 teaspoons cinnamon',
                        originalName: 'cinnamon',
                        unit: 'teaspoons',
                        unitLong: 'teaspoons',
                        unitShort: 'tsp',
                      },
                      {
                        aisle: 'Nut butters, Jams, and Honey',
                        amount: 2,
                        id: 19719,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg',
                        meta: ['melted'],
                        name: 'apricot preserves',
                        original: '2 tablespoons apricot preserves, melted and strained',
                        originalName: 'apricot preserves, melted and strained',
                        unit: 'tablespoons',
                        unitLong: 'tablespoons',
                        unitShort: 'Tbsp',
                      },
                    ],
                    title: 'Apricot Glazed Apple Tart',
                    unusedIngredients: [
                      {
                        aisle: 'Produce',
                        amount: 1,
                        id: 9003,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                        meta: [],
                        name: 'apples',
                        original: 'apples',
                        originalName: 'apples',
                        unit: 'serving',
                        unitLong: 'serving',
                        unitShort: 'serving',
                      },
                    ],
                    usedIngredientCount: 0,
                    usedIngredients: [],
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  id: 73420,
                  image: 'https://spoonacular.com/recipeImages/73420-312x231.jpg',
                  imageType: 'jpg',
                  likes: 0,
                  missedIngredientCount: 3,
                  missedIngredients: [
                    {
                      aisle: 'Baking',
                      amount: 1,
                      id: 18371,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg',
                      meta: [],
                      name: 'baking powder',
                      original: '1 tsp baking powder',
                      originalName: 'baking powder',
                      unit: 'tsp',
                      unitLong: 'teaspoon',
                      unitShort: 'tsp',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 1,
                      id: 2010,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
                      meta: [],
                      name: 'cinnamon',
                      original: '1 tsp cinnamon',
                      originalName: 'cinnamon',
                      unit: 'tsp',
                      unitLong: 'teaspoon',
                      unitShort: 'tsp',
                    },
                    {
                      aisle: 'Milk, Eggs, Other Dairy',
                      amount: 1,
                      id: 1123,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/egg.png',
                      meta: [],
                      name: 'egg',
                      original: '1 egg',
                      originalName: 'egg',
                      unit: '',
                      unitLong: '',
                      unitShort: '',
                    },
                  ],
                  title: 'Apple Or Peach Strudel',
                  unusedIngredients: [],
                  usedIngredientCount: 1,
                  usedIngredients: [
                    {
                      aisle: 'Produce',
                      amount: 6,
                      id: 9003,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                      meta: [],
                      name: 'apples',
                      original: '6 large baking apples',
                      originalName: 'baking apples',
                      unit: 'large',
                      unitLong: 'larges',
                      unitShort: 'large',
                    },
                  ],
                },
                {
                  id: 632660,
                  image: 'https://spoonacular.com/recipeImages/632660-312x231.jpg',
                  imageType: 'jpg',
                  likes: 3,
                  missedIngredientCount: 4,
                  missedIngredients: [
                    {
                      aisle: 'Milk, Eggs, Other Dairy',
                      amount: 1.5,
                      extendedName: 'unsalted butter',
                      id: 1001,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg',
                      meta: ['unsalted', 'cold'],
                      name: 'butter',
                      original: '1 1/2 sticks cold unsalted butter cold unsalted butter<',
                      originalName: 'cold unsalted butter cold unsalted butter<',
                      unit: 'sticks',
                      unitLong: 'sticks',
                      unitShort: 'sticks',
                    },
                    {
                      aisle: 'Produce',
                      amount: 4,
                      id: 1079003,
                      image:
                        'https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png',
                      meta: [
                        'red',
                        ' such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices ',
                      ],
                      name: 'red apples',
                      original:
                        '4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices',
                      originalName:
                        's red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices',
                      unit: 'large',
                      unitLong: 'larges',
                      unitShort: 'large',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      id: 2010,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg',
                      meta: [],
                      name: 'cinnamon',
                      original: '2 teaspoons cinnamon',
                      originalName: 'cinnamon',
                      unit: 'teaspoons',
                      unitLong: 'teaspoons',
                      unitShort: 'tsp',
                    },
                    {
                      aisle: 'Nut butters, Jams, and Honey',
                      amount: 2,
                      id: 19719,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg',
                      meta: ['melted'],
                      name: 'apricot preserves',
                      original: '2 tablespoons apricot preserves, melted and strained',
                      originalName: 'apricot preserves, melted and strained',
                      unit: 'tablespoons',
                      unitLong: 'tablespoons',
                      unitShort: 'Tbsp',
                    },
                  ],
                  title: 'Apricot Glazed Apple Tart',
                  unusedIngredients: [
                    {
                      aisle: 'Produce',
                      amount: 1,
                      id: 9003,
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                      meta: [],
                      name: 'apples',
                      original: 'apples',
                      originalName: 'apples',
                      unit: 'serving',
                      unitLong: 'serving',
                      unitShort: 'serving',
                    },
                  ],
                  usedIngredientCount: 0,
                  usedIngredients: [],
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesFindByNutrientsRoute = createRoute({
  method: 'get',
  path: '/recipes/findByNutrients',
  tags: ['recipes'],
  summary: 'Search Recipes by Nutrients',
  description:
    'Find a set of recipes that adhere to the given nutritional limits. You may set limits for macronutrients (calories, protein, fat, and carbohydrate) and/or many micronutrients.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Search-Recipes-by-Nutrients',
  },
  operationId: 'searchRecipesByNutrients',
  request: {
    query: z.object({
      minCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of carbohydrates in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCarbs',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxCarbs: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of carbohydrates in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCarbs',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of protein in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minProtein',
            required: false,
            schema: { example: 10, type: 'number' },
            style: 'form',
          },
          example: 10,
        }),
      maxProtein: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of protein in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxProtein',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of calories the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCalories',
            required: false,
            schema: { example: 50, type: 'number' },
            style: 'form',
          },
          example: 50,
        }),
      maxCalories: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of calories the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCalories',
            required: false,
            schema: { example: 800, type: 'number' },
            style: 'form',
          },
          example: 800,
        }),
      minFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fat in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFat',
            required: false,
            schema: { example: 1, type: 'number' },
            style: 'form',
          },
          example: 1,
        }),
      maxFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fat in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFat',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minAlcohol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of alcohol in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minAlcohol',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxAlcohol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of alcohol in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxAlcohol',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCaffeine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of caffeine in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCaffeine',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCaffeine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of caffeine in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCaffeine',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCopper: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of copper in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCopper',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCopper: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of copper in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCopper',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCalcium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of calcium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCalcium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCalcium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of calcium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCalcium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCholine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of choline in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCholine',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCholine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of choline in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCholine',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minCholesterol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of cholesterol in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minCholesterol',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxCholesterol: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of cholesterol in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxCholesterol',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFluoride: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fluoride in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFluoride',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFluoride: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fluoride in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFluoride',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSaturatedFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of saturated fat in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSaturatedFat',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSaturatedFat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of saturated fat in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSaturatedFat',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminA: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin A in IU the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminA',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminA: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin A in IU the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminA',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminC: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin C in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminC',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminC: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin C in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminC',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminD: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin D in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminD',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminD: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin D in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminD',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminE: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin E in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminE',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminE: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin E in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminE',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminK: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin K in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminK',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminK: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin K in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminK',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB1: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B1 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB1',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB1: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B1 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB1',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB2: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B2 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB2',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB2: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B2 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB2',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB5: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B5 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB5',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB5: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B5 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB5',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB3: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B3 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB3',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB3: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B3 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB3',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB6: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B6 in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB6',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB6: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B6 in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB6',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minVitaminB12: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of Vitamin B12 in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minVitaminB12',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxVitaminB12: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of Vitamin B12 in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxVitaminB12',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFiber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of fiber in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFiber',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFiber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of fiber in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFiber',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFolate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of folate in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFolate',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFolate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of folate in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFolate',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minFolicAcid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of folic acid in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minFolicAcid',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxFolicAcid: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of folic acid in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxFolicAcid',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minIodine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of iodine in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minIodine',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxIodine: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of iodine in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxIodine',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minIron: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of iron in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minIron',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxIron: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of iron in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxIron',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minMagnesium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of magnesium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minMagnesium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxMagnesium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of magnesium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxMagnesium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minManganese: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of manganese in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minManganese',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxManganese: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of manganese in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxManganese',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minPhosphorus: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of phosphorus in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minPhosphorus',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxPhosphorus: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of phosphorus in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxPhosphorus',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minPotassium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of potassium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minPotassium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxPotassium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of potassium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxPotassium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSelenium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of selenium in micrograms the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSelenium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSelenium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of selenium in micrograms the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSelenium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSodium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of sodium in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSodium',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSodium: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of sodium in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSodium',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minSugar: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of sugar in grams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minSugar',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxSugar: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of sugar in grams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxSugar',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      minZinc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum amount of zinc in milligrams the recipe must have.',
            explode: false,
            in: 'query',
            name: 'minZinc',
            required: false,
            schema: { example: 0, type: 'number' },
            style: 'form',
          },
          example: 0,
        }),
      maxZinc: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum amount of zinc in milligrams the recipe can have.',
            explode: false,
            in: 'query',
            name: 'maxZinc',
            required: false,
            schema: { example: 100, type: 'number' },
            style: 'form',
          },
          example: 100,
        }),
      offset: OffsetParamsSchema,
      number: NumberParamsSchema,
      random: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, every request will give you a random set of recipes within the requested limits.',
            explode: false,
            in: 'query',
            name: 'random',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      limitLicense: LimitLicenseParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  calories: z.number(),
                  carbs: z.string().min(1),
                  fat: z.string().min(1),
                  id: z.int(),
                  image: z.string().min(1),
                  imageType: z.string().min(1),
                  protein: z.string().min(1),
                  title: z.string().min(1),
                })
                .openapi({
                  required: [
                    'calories',
                    'carbs',
                    'fat',
                    'id',
                    'image',
                    'imageType',
                    'protein',
                    'title',
                  ],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    calories: 210,
                    carbs: '43g',
                    fat: '3g',
                    id: 90629,
                    image: 'https://spoonacular.com/recipeImages/90629-312x231.jpg',
                    imageType: 'jpg',
                    protein: '1g',
                    title: 'Baked Apples in White Wine',
                  },
                  {
                    calories: 226,
                    carbs: '33g',
                    fat: '10g',
                    id: 284420,
                    image: 'https://spoonacular.com/recipeImages/284420-312x231.jpg',
                    imageType: 'jpg',
                    protein: '2g',
                    title: 'Chocolate Silk Pie with Marshmallow Meringue',
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  calories: 210,
                  carbs: '43g',
                  fat: '3g',
                  id: 90629,
                  image: 'https://spoonacular.com/recipeImages/90629-312x231.jpg',
                  imageType: 'jpg',
                  protein: '1g',
                  title: 'Baked Apples in White Wine',
                },
                {
                  calories: 226,
                  carbs: '33g',
                  fat: '10g',
                  id: 284420,
                  image: 'https://spoonacular.com/recipeImages/284420-312x231.jpg',
                  imageType: 'jpg',
                  protein: '2g',
                  title: 'Chocolate Silk Pie with Marshmallow Meringue',
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesGuessNutritionRoute = createRoute({
  method: 'get',
  path: '/recipes/guessNutrition',
  tags: ['recipes'],
  summary: 'Guess Nutrition by Dish Name',
  description: 'Estimate the macronutrients of a dish based on its title.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Guess-Nutrition-by-Dish-Name',
  },
  operationId: 'guessNutritionByDishName',
  request: {
    query: z.object({
      title: z
        .string()
        .openapi({
          param: {
            description: 'The title of the dish.',
            explode: false,
            in: 'query',
            name: 'title',
            required: true,
            schema: { example: 'Spaghetti Aglio et Olio', type: 'string' },
            style: 'form',
          },
          example: 'Spaghetti Aglio et Olio',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              calories: z
                .object({
                  confidenceRange95Percent: z
                    .object({ max: z.number(), min: z.number() })
                    .openapi({ required: ['max', 'min'] }),
                  standardDeviation: z.number(),
                  unit: z.string().min(1),
                  value: z.number(),
                })
                .openapi({
                  required: ['confidenceRange95Percent', 'standardDeviation', 'unit', 'value'],
                }),
              carbs: z
                .object({
                  confidenceRange95Percent: z
                    .object({ max: z.number(), min: z.number() })
                    .openapi({ required: ['max', 'min'] }),
                  standardDeviation: z.number(),
                  unit: z.string().min(1),
                  value: z.number(),
                })
                .openapi({
                  required: ['confidenceRange95Percent', 'standardDeviation', 'unit', 'value'],
                }),
              fat: z
                .object({
                  confidenceRange95Percent: z
                    .object({ max: z.number(), min: z.number() })
                    .openapi({ required: ['max', 'min'] }),
                  standardDeviation: z.number(),
                  unit: z.string().min(1),
                  value: z.number(),
                })
                .openapi({
                  required: ['confidenceRange95Percent', 'standardDeviation', 'unit', 'value'],
                }),
              protein: z
                .object({
                  confidenceRange95Percent: z
                    .object({ max: z.number(), min: z.number() })
                    .openapi({ required: ['max', 'min'] }),
                  standardDeviation: z.number(),
                  unit: z.string().min(1),
                  value: z.number(),
                })
                .openapi({
                  required: ['confidenceRange95Percent', 'standardDeviation', 'unit', 'value'],
                }),
              recipesUsed: z.int(),
            })
            .openapi({
              description: '',
              required: ['calories', 'carbs', 'fat', 'protein', 'recipesUsed'],
              'x-examples': {
                'example-1': {
                  calories: {
                    confidenceRange95Percent: { max: 574.07, min: 389.92 },
                    standardDeviation: 148.55,
                    unit: 'calories',
                    value: 428,
                  },
                  carbs: {
                    confidenceRange95Percent: { max: 78.19, min: 55.54 },
                    standardDeviation: 18.27,
                    unit: 'g',
                    value: 65,
                  },
                  fat: {
                    confidenceRange95Percent: { max: 19.2, min: 12.27 },
                    standardDeviation: 5.59,
                    unit: 'g',
                    value: 16,
                  },
                  protein: {
                    confidenceRange95Percent: { max: 29.31, min: 8.12 },
                    standardDeviation: 17.09,
                    unit: 'g',
                    value: 13,
                  },
                  recipesUsed: 10,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                calories: {
                  confidenceRange95Percent: { max: 574.07, min: 389.92 },
                  standardDeviation: 148.55,
                  unit: 'calories',
                  value: 428,
                },
                carbs: {
                  confidenceRange95Percent: { max: 78.19, min: 55.54 },
                  standardDeviation: 18.27,
                  unit: 'g',
                  value: 65,
                },
                fat: {
                  confidenceRange95Percent: { max: 19.2, min: 12.27 },
                  standardDeviation: 5.59,
                  unit: 'g',
                  value: 16,
                },
                protein: {
                  confidenceRange95Percent: { max: 29.31, min: 8.12 },
                  standardDeviation: 17.09,
                  unit: 'g',
                  value: 13,
                },
                recipesUsed: 10,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesInformationBulkRoute = createRoute({
  method: 'get',
  path: '/recipes/informationBulk',
  tags: ['recipes'],
  summary: 'Get Recipe Information Bulk',
  description:
    'Get information about multiple recipes at once. This is equivalent to calling the Get Recipe Information endpoint multiple times, but faster.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Recipe-Information-Bulk',
  },
  operationId: 'getRecipeInformationBulk',
  request: {
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            description: 'A comma-separated list of recipe ids.',
            explode: false,
            in: 'query',
            name: 'ids',
            required: true,
            schema: { example: '715538,716429', type: 'string' },
            style: 'form',
          },
          example: '715538,716429',
        }),
      includeNutrition: IncludeNutritionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  aggregateLikes: z.int(),
                  analyzedInstructions: z.array(z.string()),
                  cheap: z.boolean(),
                  creditsText: z.string().min(1),
                  cuisines: z.array(z.string()),
                  dairyFree: z.boolean(),
                  diets: z.array(z.string()),
                  dishTypes: z.array(z.string()),
                  extendedIngredients: z
                    .array(
                      z
                        .object({
                          aisle: z.string().min(1),
                          amount: z.number(),
                          consitency: z.string().min(1),
                          id: z.int(),
                          image: z.string().min(1),
                          measures: z
                            .object({
                              metric: z
                                .object({
                                  amount: z.number(),
                                  unitLong: z.string().min(0),
                                  unitShort: z.string().min(0),
                                })
                                .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                              us: z
                                .object({
                                  amount: z.number(),
                                  unitLong: z.string().min(0),
                                  unitShort: z.string().min(0),
                                })
                                .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                            })
                            .exactOptional()
                            .openapi({ required: ['metric', 'us'] }),
                          meta: z.array(z.string()).exactOptional(),
                          name: z.string().min(1),
                          original: z.string().min(1),
                          originalName: z.string().min(1),
                          unit: z.string().min(0),
                        })
                        .openapi({
                          required: [
                            'aisle',
                            'amount',
                            'consitency',
                            'id',
                            'image',
                            'name',
                            'original',
                            'originalName',
                            'unit',
                          ],
                        }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  gaps: z.string().min(1),
                  glutenFree: z.boolean(),
                  healthScore: z.number(),
                  id: z.int(),
                  image: z.string().min(1),
                  imageType: z.string().min(1),
                  instructions: z.string(),
                  ketogenic: z.boolean(),
                  license: z.string().min(1),
                  lowFodmap: z.boolean(),
                  occasions: z.array(z.string()),
                  pricePerServing: z.number(),
                  readyInMinutes: z.int(),
                  servings: z.number(),
                  sourceName: z.string().min(1),
                  sourceUrl: z.string().min(1),
                  spoonacularScore: z.number(),
                  spoonacularSourceUrl: z.string().min(1),
                  summary: z.string().min(1),
                  sustainable: z.boolean(),
                  title: z.string().min(1),
                  vegan: z.boolean(),
                  vegetarian: z.boolean(),
                  veryHealthy: z.boolean(),
                  veryPopular: z.boolean(),
                  weightWatcherSmartPoints: z.number(),
                  whole30: z.boolean(),
                  winePairing: z
                    .object({
                      pairedWines: z.array(z.string()),
                      pairingText: z.string().min(1),
                      productMatches: z
                        .array(
                          z
                            .object({
                              averageRating: z.number(),
                              description: z.string().min(1),
                              id: z.int(),
                              imageUrl: z.string().min(1),
                              link: z.string().min(1),
                              price: z.string().min(1),
                              ratingCount: z.int(),
                              score: z.number(),
                              title: z.string().min(1),
                            })
                            .openapi({
                              required: [
                                'id',
                                'title',
                                'description',
                                'price',
                                'imageUrl',
                                'averageRating',
                                'ratingCount',
                                'score',
                                'link',
                              ],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        }),
                    })
                    .openapi({ required: ['pairedWines', 'pairingText', 'productMatches'] }),
                })
                .openapi({
                  required: [
                    'id',
                    'title',
                    'image',
                    'imageType',
                    'servings',
                    'readyInMinutes',
                    'license',
                    'sourceName',
                    'sourceUrl',
                    'spoonacularSourceUrl',
                    'aggregateLikes',
                    'healthScore',
                    'spoonacularScore',
                    'pricePerServing',
                    'analyzedInstructions',
                    'cheap',
                    'creditsText',
                    'cuisines',
                    'dairyFree',
                    'diets',
                    'gaps',
                    'glutenFree',
                    'instructions',
                    'ketogenic',
                    'lowFodmap',
                    'occasions',
                    'sustainable',
                    'vegan',
                    'vegetarian',
                    'veryHealthy',
                    'veryPopular',
                    'whole30',
                    'weightWatcherSmartPoints',
                    'dishTypes',
                    'extendedIngredients',
                    'summary',
                    'winePairing',
                  ],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    aggregateLikes: 209,
                    analyzedInstructions: [],
                    cheap: false,
                    creditsText: 'Full Belly Sisters',
                    cuisines: [],
                    dairyFree: false,
                    diets: [],
                    dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                    extendedIngredients: [
                      {
                        aisle: 'Milk, Eggs, Other Dairy',
                        amount: 1,
                        consitency: 'solid',
                        id: 1001,
                        image: 'butter-sliced.jpg',
                        measures: {
                          metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        },
                        meta: [],
                        name: 'butter',
                        original: '1 tbsp butter',
                        originalName: 'butter',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Produce',
                        amount: 2,
                        consitency: 'solid',
                        id: 10011135,
                        image: 'cauliflower.jpg',
                        measures: {
                          metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                          us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                        },
                        meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                        name: 'cauliflower florets',
                        original:
                          'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                        originalName:
                          'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                        unit: 'cups',
                      },
                      {
                        aisle: 'Cheese',
                        amount: 2,
                        consitency: 'solid',
                        id: 1041009,
                        image: 'cheddar-cheese.png',
                        measures: {
                          metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        },
                        meta: ['grated', '(I used romano)'],
                        name: 'cheese',
                        original: '2 tbsp grated cheese (I used romano)',
                        originalName: 'grated cheese (I used romano)',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Oil, Vinegar, Salad Dressing',
                        amount: 1,
                        consitency: 'liquid',
                        id: 1034053,
                        image: 'olive-oil.jpg',
                        measures: {
                          metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        },
                        meta: [],
                        name: 'extra virgin olive oil',
                        original: '1-2 tbsp extra virgin olive oil',
                        originalName: 'extra virgin olive oil',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Produce',
                        amount: 5,
                        consitency: 'solid',
                        id: 11215,
                        image: 'garlic.jpg',
                        measures: {
                          metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                          us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                        },
                        meta: [],
                        name: 'garlic',
                        original: '5-6 cloves garlic',
                        originalName: 'garlic',
                        unit: 'cloves',
                      },
                      {
                        aisle: 'Pasta and Rice',
                        amount: 6,
                        consitency: 'solid',
                        id: 20420,
                        image: 'fusilli.jpg',
                        measures: {
                          metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                          us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                        },
                        meta: ['(I used linguine)'],
                        name: 'pasta',
                        original: '6-8 ounces pasta (I used linguine)',
                        originalName: 'pasta (I used linguine)',
                        unit: 'ounces',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        consitency: 'solid',
                        id: 1032009,
                        image: 'red-pepper-flakes.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                          us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                        },
                        meta: ['red'],
                        name: 'red pepper flakes',
                        original: 'couple of pinches red pepper flakes, optional',
                        originalName: 'couple of red pepper flakes, optional',
                        unit: 'pinches',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        consitency: 'solid',
                        id: 1102047,
                        image: 'salt-and-pepper.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                          us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                        },
                        meta: ['to taste'],
                        name: 'salt and pepper',
                        original: 'salt and pepper, to taste',
                        originalName: 'salt and pepper, to taste',
                        unit: 'servings',
                      },
                      {
                        aisle: 'Produce',
                        amount: 3,
                        consitency: 'solid',
                        id: 11291,
                        image: 'spring-onions.jpg',
                        measures: {
                          metric: { amount: 3, unitLong: '', unitShort: '' },
                          us: { amount: 3, unitLong: '', unitShort: '' },
                        },
                        meta: ['white', 'green', 'separated', 'chopped'],
                        name: 'scallions',
                        original: '3 scallions, chopped, white and green parts separated',
                        originalName: 'scallions, chopped, white and green parts separated',
                        unit: '',
                      },
                      {
                        aisle: 'Alcoholic Beverages',
                        amount: 2,
                        consitency: 'liquid',
                        id: 14106,
                        image: 'white-wine.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        },
                        meta: ['white'],
                        name: 'white wine',
                        original: '2-3 tbsp white wine',
                        originalName: 'white wine',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Pasta and Rice',
                        amount: 0.25,
                        consitency: 'solid',
                        id: 99025,
                        image: 'breadcrumbs.jpg',
                        measures: {
                          metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                          us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                        },
                        meta: ['whole wheat', '(I used panko)'],
                        name: 'whole wheat bread crumbs',
                        original: '1/4 cup whole wheat bread crumbs (I used panko)',
                        originalName: 'whole wheat bread crumbs (I used panko)',
                        unit: 'cup',
                      },
                    ],
                    gaps: 'no',
                    glutenFree: false,
                    healthScore: 19,
                    id: 716429,
                    image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                    imageType: 'jpg',
                    instructions: '',
                    ketogenic: false,
                    license: 'CC BY-SA 3.0',
                    lowFodmap: false,
                    occasions: [],
                    pricePerServing: 163.15,
                    readyInMinutes: 45,
                    servings: 2,
                    sourceName: 'Full Belly Sisters',
                    sourceUrl:
                      'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                    spoonacularScore: 83,
                    spoonacularSourceUrl:
                      'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                    summary:
                      'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.',
                    sustainable: false,
                    title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                    vegan: false,
                    vegetarian: false,
                    veryHealthy: false,
                    veryPopular: false,
                    weightWatcherSmartPoints: 17,
                    whole30: false,
                    winePairing: {
                      pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                      pairingText:
                        'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                      productMatches: [
                        {
                          averageRating: 0.8,
                          description:
                            'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                          id: 469199,
                          imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                          link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                          price: '$25.0',
                          ratingCount: 1,
                          score: 0.55,
                          title: 'Buddha Kat Winery Chardonnay',
                        },
                      ],
                    },
                  },
                  {
                    aggregateLikes: 209,
                    analyzedInstructions: [],
                    cheap: false,
                    creditsText: 'Full Belly Sisters',
                    cuisines: [],
                    dairyFree: false,
                    diets: [],
                    dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                    extendedIngredients: [
                      {
                        aisle: 'Milk, Eggs, Other Dairy',
                        amount: 1,
                        consitency: 'solid',
                        id: 1001,
                        image: 'butter-sliced.jpg',
                        measures: {
                          metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        },
                        meta: [],
                        name: 'butter',
                        original: '1 tbsp butter',
                        originalName: 'butter',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Produce',
                        amount: 2,
                        consitency: 'solid',
                        id: 10011135,
                        image: 'cauliflower.jpg',
                        measures: {
                          metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                          us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                        },
                        meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                        name: 'cauliflower florets',
                        original:
                          'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                        originalName:
                          'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                        unit: 'cups',
                      },
                      {
                        aisle: 'Cheese',
                        amount: 2,
                        consitency: 'solid',
                        id: 1041009,
                        image: 'cheddar-cheese.png',
                        measures: {
                          metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        },
                        meta: ['grated', '(I used romano)'],
                        name: 'cheese',
                        original: '2 tbsp grated cheese (I used romano)',
                        originalName: 'grated cheese (I used romano)',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Oil, Vinegar, Salad Dressing',
                        amount: 1,
                        consitency: 'liquid',
                        id: 1034053,
                        image: 'olive-oil.jpg',
                        measures: {
                          metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        },
                        meta: [],
                        name: 'extra virgin olive oil',
                        original: '1-2 tbsp extra virgin olive oil',
                        originalName: 'extra virgin olive oil',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Produce',
                        amount: 5,
                        consitency: 'solid',
                        id: 11215,
                        image: 'garlic.jpg',
                        measures: {
                          metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                          us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                        },
                        meta: [],
                        name: 'garlic',
                        original: '5-6 cloves garlic',
                        originalName: 'garlic',
                        unit: 'cloves',
                      },
                      {
                        aisle: 'Pasta and Rice',
                        amount: 6,
                        consitency: 'solid',
                        id: 20420,
                        image: 'fusilli.jpg',
                        measures: {
                          metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                          us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                        },
                        meta: ['(I used linguine)'],
                        name: 'pasta',
                        original: '6-8 ounces pasta (I used linguine)',
                        originalName: 'pasta (I used linguine)',
                        unit: 'ounces',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        consitency: 'solid',
                        id: 1032009,
                        image: 'red-pepper-flakes.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                          us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                        },
                        meta: ['red'],
                        name: 'red pepper flakes',
                        original: 'couple of pinches red pepper flakes, optional',
                        originalName: 'couple of red pepper flakes, optional',
                        unit: 'pinches',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        consitency: 'solid',
                        id: 1102047,
                        image: 'salt-and-pepper.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                          us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                        },
                        meta: ['to taste'],
                        name: 'salt and pepper',
                        original: 'salt and pepper, to taste',
                        originalName: 'salt and pepper, to taste',
                        unit: 'servings',
                      },
                      {
                        aisle: 'Produce',
                        amount: 3,
                        consitency: 'solid',
                        id: 11291,
                        image: 'spring-onions.jpg',
                        measures: {
                          metric: { amount: 3, unitLong: '', unitShort: '' },
                          us: { amount: 3, unitLong: '', unitShort: '' },
                        },
                        meta: ['white', 'green', 'separated', 'chopped'],
                        name: 'scallions',
                        original: '3 scallions, chopped, white and green parts separated',
                        originalName: 'scallions, chopped, white and green parts separated',
                        unit: '',
                      },
                      {
                        aisle: 'Alcoholic Beverages',
                        amount: 2,
                        consitency: 'liquid',
                        id: 14106,
                        image: 'white-wine.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        },
                        meta: ['white'],
                        name: 'white wine',
                        original: '2-3 tbsp white wine',
                        originalName: 'white wine',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Pasta and Rice',
                        amount: 0.25,
                        consitency: 'solid',
                        id: 99025,
                        image: 'breadcrumbs.jpg',
                        measures: {
                          metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                          us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                        },
                        meta: ['whole wheat', '(I used panko)'],
                        name: 'whole wheat bread crumbs',
                        original: '1/4 cup whole wheat bread crumbs (I used panko)',
                        originalName: 'whole wheat bread crumbs (I used panko)',
                        unit: 'cup',
                      },
                    ],
                    gaps: 'no',
                    glutenFree: false,
                    healthScore: 19,
                    id: 716429,
                    image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                    imageType: 'jpg',
                    instructions: '',
                    ketogenic: false,
                    license: 'CC BY-SA 3.0',
                    lowFodmap: false,
                    occasions: [],
                    pricePerServing: 163.15,
                    readyInMinutes: 45,
                    servings: 2,
                    sourceName: 'Full Belly Sisters',
                    sourceUrl:
                      'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                    spoonacularScore: 83,
                    spoonacularSourceUrl:
                      'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                    summary:
                      'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.',
                    sustainable: false,
                    title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                    vegan: false,
                    vegetarian: false,
                    veryHealthy: false,
                    veryPopular: false,
                    weightWatcherSmartPoints: 17,
                    whole30: false,
                    winePairing: {
                      pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                      pairingText:
                        'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                      productMatches: [
                        {
                          averageRating: 0.8,
                          description:
                            'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                          id: 469199,
                          imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                          link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                          price: '$25.0',
                          ratingCount: 1,
                          score: 0.55,
                          title: 'Buddha Kat Winery Chardonnay',
                        },
                      ],
                    },
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  aggregateLikes: 209,
                  analyzedInstructions: [],
                  cheap: false,
                  creditsText: 'Full Belly Sisters',
                  cuisines: [],
                  dairyFree: false,
                  diets: [],
                  dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                  extendedIngredients: [
                    {
                      aisle: 'Milk, Eggs, Other Dairy',
                      amount: 1,
                      consitency: 'solid',
                      id: 1001,
                      image: 'butter-sliced.jpg',
                      measures: {
                        metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      },
                      meta: [],
                      name: 'butter',
                      original: '1 tbsp butter',
                      originalName: 'butter',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Produce',
                      amount: 2,
                      consitency: 'solid',
                      id: 10011135,
                      image: 'cauliflower.jpg',
                      measures: {
                        metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                        us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                      },
                      meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                      name: 'cauliflower florets',
                      original:
                        'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                      originalName:
                        'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                      unit: 'cups',
                    },
                    {
                      aisle: 'Cheese',
                      amount: 2,
                      consitency: 'solid',
                      id: 1041009,
                      image: 'cheddar-cheese.png',
                      measures: {
                        metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      },
                      meta: ['grated', '(I used romano)'],
                      name: 'cheese',
                      original: '2 tbsp grated cheese (I used romano)',
                      originalName: 'grated cheese (I used romano)',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Oil, Vinegar, Salad Dressing',
                      amount: 1,
                      consitency: 'liquid',
                      id: 1034053,
                      image: 'olive-oil.jpg',
                      measures: {
                        metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      },
                      meta: [],
                      name: 'extra virgin olive oil',
                      original: '1-2 tbsp extra virgin olive oil',
                      originalName: 'extra virgin olive oil',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Produce',
                      amount: 5,
                      consitency: 'solid',
                      id: 11215,
                      image: 'garlic.jpg',
                      measures: {
                        metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                        us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                      },
                      meta: [],
                      name: 'garlic',
                      original: '5-6 cloves garlic',
                      originalName: 'garlic',
                      unit: 'cloves',
                    },
                    {
                      aisle: 'Pasta and Rice',
                      amount: 6,
                      consitency: 'solid',
                      id: 20420,
                      image: 'fusilli.jpg',
                      measures: {
                        metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                        us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                      },
                      meta: ['(I used linguine)'],
                      name: 'pasta',
                      original: '6-8 ounces pasta (I used linguine)',
                      originalName: 'pasta (I used linguine)',
                      unit: 'ounces',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      consitency: 'solid',
                      id: 1032009,
                      image: 'red-pepper-flakes.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                        us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                      },
                      meta: ['red'],
                      name: 'red pepper flakes',
                      original: 'couple of pinches red pepper flakes, optional',
                      originalName: 'couple of red pepper flakes, optional',
                      unit: 'pinches',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      consitency: 'solid',
                      id: 1102047,
                      image: 'salt-and-pepper.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                        us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                      },
                      meta: ['to taste'],
                      name: 'salt and pepper',
                      original: 'salt and pepper, to taste',
                      originalName: 'salt and pepper, to taste',
                      unit: 'servings',
                    },
                    {
                      aisle: 'Produce',
                      amount: 3,
                      consitency: 'solid',
                      id: 11291,
                      image: 'spring-onions.jpg',
                      measures: {
                        metric: { amount: 3, unitLong: '', unitShort: '' },
                        us: { amount: 3, unitLong: '', unitShort: '' },
                      },
                      meta: ['white', 'green', 'separated', 'chopped'],
                      name: 'scallions',
                      original: '3 scallions, chopped, white and green parts separated',
                      originalName: 'scallions, chopped, white and green parts separated',
                      unit: '',
                    },
                    {
                      aisle: 'Alcoholic Beverages',
                      amount: 2,
                      consitency: 'liquid',
                      id: 14106,
                      image: 'white-wine.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      },
                      meta: ['white'],
                      name: 'white wine',
                      original: '2-3 tbsp white wine',
                      originalName: 'white wine',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Pasta and Rice',
                      amount: 0.25,
                      consitency: 'solid',
                      id: 99025,
                      image: 'breadcrumbs.jpg',
                      measures: {
                        metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                        us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                      },
                      meta: ['whole wheat', '(I used panko)'],
                      name: 'whole wheat bread crumbs',
                      original: '1/4 cup whole wheat bread crumbs (I used panko)',
                      originalName: 'whole wheat bread crumbs (I used panko)',
                      unit: 'cup',
                    },
                  ],
                  gaps: 'no',
                  glutenFree: false,
                  healthScore: 19,
                  id: 716429,
                  image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                  imageType: 'jpg',
                  instructions: '',
                  ketogenic: false,
                  license: 'CC BY-SA 3.0',
                  lowFodmap: false,
                  occasions: [],
                  pricePerServing: 163.15,
                  readyInMinutes: 45,
                  servings: 2,
                  sourceName: 'Full Belly Sisters',
                  sourceUrl:
                    'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                  spoonacularScore: 83,
                  spoonacularSourceUrl:
                    'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                  summary:
                    'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.',
                  sustainable: false,
                  title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                  vegan: false,
                  vegetarian: false,
                  veryHealthy: false,
                  veryPopular: false,
                  weightWatcherSmartPoints: 17,
                  whole30: false,
                  winePairing: {
                    pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                    pairingText:
                      'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                    productMatches: [
                      {
                        averageRating: 0.8,
                        description:
                          'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                        id: 469199,
                        imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                        link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                        price: '$25.0',
                        ratingCount: 1,
                        score: 0.55,
                        title: 'Buddha Kat Winery Chardonnay',
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesParseIngredientsRoute = createRoute({
  method: 'post',
  path: '/recipes/parseIngredients',
  tags: ['recipes'],
  summary: 'Parse Ingredients',
  description: 'Extract an ingredient from plain text.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Parse-Ingredients',
  },
  operationId: 'parseIngredients',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
    query: z.object({ language: LanguageParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: { 'example-1': { value: 'ingredientList=1 cup green tea&servings=1' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  aisle: z.string().min(1),
                  amount: z.number(),
                  consistency: z.string().min(1),
                  estimatedCost: z
                    .object({ unit: z.string().min(1), value: z.number() })
                    .openapi({ required: ['value', 'unit'] }),
                  id: z.int(),
                  image: z.string().min(1),
                  meta: z.array(z.string()),
                  name: z.string().min(1),
                  nameClean: z.string().min(1),
                  nutrition: z
                    .object({
                      caloricBreakdown: z
                        .object({
                          percentCarbs: z.number(),
                          percentFat: z.number(),
                          percentProtein: z.number(),
                        })
                        .openapi({ required: ['percentProtein', 'percentFat', 'percentCarbs'] }),
                      flavonoids: z
                        .array(
                          z
                            .object({
                              amount: z.number(),
                              name: z.string().min(1),
                              unit: z.string(),
                            })
                            .openapi({ required: ['name', 'amount', 'unit'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        }),
                      nutrients: z
                        .array(
                          z
                            .object({
                              amount: z.number(),
                              name: z.string().min(1),
                              percentOfDailyNeeds: z.number(),
                              unit: z.string().min(1),
                            })
                            .openapi({
                              required: ['name', 'amount', 'unit', 'percentOfDailyNeeds'],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        }),
                      properties: z
                        .array(
                          z
                            .object({
                              amount: z.number(),
                              name: z.string().min(1),
                              unit: z.string(),
                            })
                            .openapi({ required: ['name', 'amount', 'unit'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        }),
                      weightPerServing: z
                        .object({ amount: z.number(), unit: z.string().min(1) })
                        .openapi({ required: ['amount', 'unit'] }),
                    })
                    .openapi({
                      required: [
                        'nutrients',
                        'properties',
                        'flavonoids',
                        'caloricBreakdown',
                        'weightPerServing',
                      ],
                    }),
                  original: z.string().min(1),
                  originalName: z.string().min(1),
                  possibleUnits: z.array(z.string()),
                  unit: z.string().min(1),
                  unitLong: z.string().min(1),
                  unitShort: z.string().min(1),
                })
                .openapi({
                  required: [
                    'id',
                    'original',
                    'originalName',
                    'name',
                    'nameClean',
                    'amount',
                    'unit',
                    'unitShort',
                    'unitLong',
                    'possibleUnits',
                    'estimatedCost',
                    'consistency',
                    'aisle',
                    'image',
                    'meta',
                    'nutrition',
                  ],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    aisle: 'Tea and Coffee',
                    amount: 1,
                    consistency: 'solid',
                    estimatedCost: { unit: 'US Cents', value: 1786.86 },
                    id: 10014355,
                    image: 'green-tea-leaves.jpg',
                    meta: ['green'],
                    name: 'tea',
                    nameClean: 'green tea',
                    nutrition: {
                      caloricBreakdown: { percentCarbs: 100, percentFat: 0, percentProtein: 0 },
                      flavonoids: [
                        { amount: 0, name: 'Cyanidin', unit: '' },
                        { amount: 0, name: 'Petunidin', unit: '' },
                        { amount: 0, name: 'Delphinidin', unit: '' },
                        { amount: 0, name: 'Malvidin', unit: '' },
                        { amount: 0, name: 'Pelargonidin', unit: '' },
                        { amount: 0, name: 'Peonidin', unit: '' },
                        { amount: 3.56, name: 'Catechin', unit: 'mg' },
                        { amount: 19, name: 'Epigallocatechin', unit: 'mg' },
                        { amount: 5.03, name: 'Epicatechin', unit: 'mg' },
                        { amount: 13.83, name: 'Epicatechin 3-gallate', unit: 'mg' },
                        { amount: 22.09, name: 'Epigallocatechin 3-gallate', unit: 'mg' },
                        { amount: 3.73, name: 'Theaflavin', unit: 'mg' },
                        { amount: 191.87, name: 'Thearubigins', unit: 'mg' },
                        { amount: 0, name: 'Eriodictyol', unit: '' },
                        { amount: 0, name: 'Hesperetin', unit: '' },
                        { amount: 0, name: 'Naringenin', unit: '' },
                        { amount: 0, name: 'Apigenin', unit: 'mg' },
                        { amount: 0, name: 'Luteolin', unit: 'mg' },
                        { amount: 0, name: 'Isorhamnetin', unit: '' },
                        { amount: 3.33, name: 'Kaempferol', unit: 'mg' },
                        { amount: 1.06, name: 'Myricetin', unit: 'mg' },
                        { amount: 5.17, name: 'Quercetin', unit: 'mg' },
                        { amount: 4.13, name: "Theaflavin-3,3'-digallate", unit: 'mg' },
                        { amount: 3.56, name: "Theaflavin-3'-gallate", unit: 'mg' },
                        { amount: 0, name: 'Theaflavin-3-gallate', unit: '' },
                        { amount: 2.95, name: 'Gallocatechin', unit: 'mg' },
                      ],
                      nutrients: [
                        { amount: 2.36, name: 'Calories', percentOfDailyNeeds: 0.12, unit: 'kcal' },
                        { amount: 0, name: 'Fat', percentOfDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Saturated Fat', percentOfDailyNeeds: 0.03, unit: 'g' },
                        {
                          amount: 0.71,
                          name: 'Carbohydrates',
                          percentOfDailyNeeds: 0.24,
                          unit: 'g',
                        },
                        {
                          amount: 0.71,
                          name: 'Net Carbohydrates',
                          percentOfDailyNeeds: 0.26,
                          unit: 'g',
                        },
                        { amount: 0, name: 'Sugar', percentOfDailyNeeds: 0, unit: 'g' },
                        { amount: 0, name: 'Cholesterol', percentOfDailyNeeds: 0, unit: 'mg' },
                        { amount: 7.08, name: 'Sodium', percentOfDailyNeeds: 0.31, unit: 'mg' },
                        { amount: 47.2, name: 'Caffeine', percentOfDailyNeeds: 15.73, unit: 'mg' },
                        { amount: 0, name: 'Protein', percentOfDailyNeeds: 0, unit: 'g' },
                        { amount: 0.52, name: 'Manganese', percentOfDailyNeeds: 25.84, unit: 'mg' },
                        { amount: 11.8, name: 'Folate', percentOfDailyNeeds: 2.95, unit: 'µg' },
                        { amount: 87.32, name: 'Potassium', percentOfDailyNeeds: 2.49, unit: 'mg' },
                        { amount: 0.03, name: 'Vitamin B2', percentOfDailyNeeds: 1.94, unit: 'mg' },
                        { amount: 7.08, name: 'Magnesium', percentOfDailyNeeds: 1.77, unit: 'mg' },
                        { amount: 0.02, name: 'Copper', percentOfDailyNeeds: 1.18, unit: 'mg' },
                      ],
                      properties: [
                        { amount: 0, name: 'Glycemic Index', unit: '' },
                        { amount: 0, name: 'Glycemic Load', unit: '' },
                      ],
                      weightPerServing: { amount: 236, unit: 'g' },
                    },
                    original: '1 cup green tea',
                    originalName: 'green tea',
                    possibleUnits: ['g', 'oz', 'fluid ounce', 'cup'],
                    unit: 'cup',
                    unitLong: 'cup',
                    unitShort: 'cup',
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  aisle: 'Tea and Coffee',
                  amount: 1,
                  consistency: 'solid',
                  estimatedCost: { unit: 'US Cents', value: 1786.86 },
                  id: 10014355,
                  image: 'green-tea-leaves.jpg',
                  meta: ['green'],
                  name: 'tea',
                  nameClean: 'green tea',
                  nutrition: {
                    caloricBreakdown: { percentCarbs: 100, percentFat: 0, percentProtein: 0 },
                    flavonoids: [
                      { amount: 0, name: 'Cyanidin', unit: '' },
                      { amount: 0, name: 'Petunidin', unit: '' },
                      { amount: 0, name: 'Delphinidin', unit: '' },
                      { amount: 0, name: 'Malvidin', unit: '' },
                      { amount: 0, name: 'Pelargonidin', unit: '' },
                      { amount: 0, name: 'Peonidin', unit: '' },
                      { amount: 3.56, name: 'Catechin', unit: 'mg' },
                      { amount: 19, name: 'Epigallocatechin', unit: 'mg' },
                      { amount: 5.03, name: 'Epicatechin', unit: 'mg' },
                      { amount: 13.83, name: 'Epicatechin 3-gallate', unit: 'mg' },
                      { amount: 22.09, name: 'Epigallocatechin 3-gallate', unit: 'mg' },
                      { amount: 3.73, name: 'Theaflavin', unit: 'mg' },
                      { amount: 191.87, name: 'Thearubigins', unit: 'mg' },
                      { amount: 0, name: 'Eriodictyol', unit: '' },
                      { amount: 0, name: 'Hesperetin', unit: '' },
                      { amount: 0, name: 'Naringenin', unit: '' },
                      { amount: 0, name: 'Apigenin', unit: 'mg' },
                      { amount: 0, name: 'Luteolin', unit: 'mg' },
                      { amount: 0, name: 'Isorhamnetin', unit: '' },
                      { amount: 3.33, name: 'Kaempferol', unit: 'mg' },
                      { amount: 1.06, name: 'Myricetin', unit: 'mg' },
                      { amount: 5.17, name: 'Quercetin', unit: 'mg' },
                      { amount: 4.13, name: "Theaflavin-3,3'-digallate", unit: 'mg' },
                      { amount: 3.56, name: "Theaflavin-3'-gallate", unit: 'mg' },
                      { amount: 0, name: 'Theaflavin-3-gallate', unit: '' },
                      { amount: 2.95, name: 'Gallocatechin', unit: 'mg' },
                    ],
                    nutrients: [
                      { amount: 2.36, name: 'Calories', percentOfDailyNeeds: 0.12, unit: 'kcal' },
                      { amount: 0, name: 'Fat', percentOfDailyNeeds: 0, unit: 'g' },
                      { amount: 0, name: 'Saturated Fat', percentOfDailyNeeds: 0.03, unit: 'g' },
                      { amount: 0.71, name: 'Carbohydrates', percentOfDailyNeeds: 0.24, unit: 'g' },
                      {
                        amount: 0.71,
                        name: 'Net Carbohydrates',
                        percentOfDailyNeeds: 0.26,
                        unit: 'g',
                      },
                      { amount: 0, name: 'Sugar', percentOfDailyNeeds: 0, unit: 'g' },
                      { amount: 0, name: 'Cholesterol', percentOfDailyNeeds: 0, unit: 'mg' },
                      { amount: 7.08, name: 'Sodium', percentOfDailyNeeds: 0.31, unit: 'mg' },
                      { amount: 47.2, name: 'Caffeine', percentOfDailyNeeds: 15.73, unit: 'mg' },
                      { amount: 0, name: 'Protein', percentOfDailyNeeds: 0, unit: 'g' },
                      { amount: 0.52, name: 'Manganese', percentOfDailyNeeds: 25.84, unit: 'mg' },
                      { amount: 11.8, name: 'Folate', percentOfDailyNeeds: 2.95, unit: 'µg' },
                      { amount: 87.32, name: 'Potassium', percentOfDailyNeeds: 2.49, unit: 'mg' },
                      { amount: 0.03, name: 'Vitamin B2', percentOfDailyNeeds: 1.94, unit: 'mg' },
                      { amount: 7.08, name: 'Magnesium', percentOfDailyNeeds: 1.77, unit: 'mg' },
                      { amount: 0.02, name: 'Copper', percentOfDailyNeeds: 1.18, unit: 'mg' },
                    ],
                    properties: [
                      { amount: 0, name: 'Glycemic Index', unit: '' },
                      { amount: 0, name: 'Glycemic Load', unit: '' },
                    ],
                    weightPerServing: { amount: 236, unit: 'g' },
                  },
                  original: '1 cup green tea',
                  originalName: 'green tea',
                  possibleUnits: ['g', 'oz', 'fluid ounce', 'cup'],
                  unit: 'cup',
                  unitLong: 'cup',
                  unitShort: 'cup',
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesQueriesAnalyzeRoute = createRoute({
  method: 'get',
  path: '/recipes/queries/analyze',
  tags: ['recipes'],
  summary: 'Analyze a Recipe Search Query',
  description: 'Parse a recipe search query to find out its intention.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Analyze-a-Recipe-Search-Query',
  },
  operationId: 'analyzeARecipeSearchQuery',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'The recipe search query.',
            explode: false,
            in: 'query',
            name: 'q',
            required: true,
            schema: { example: 'salmon with fusilli and no nuts', type: 'string' },
            style: 'form',
          },
          example: 'salmon with fusilli and no nuts',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              cuisines: z.array(z.string()),
              dishes: z
                .array(
                  z
                    .object({ image: z.string().min(1), name: z.string().min(1) })
                    .openapi({ required: ['image', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ingredients: z
                .array(
                  z
                    .object({
                      image: z.string().min(1),
                      include: z.boolean(),
                      name: z.string().min(1),
                    })
                    .openapi({ required: ['image', 'include', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              modifiers: z.array(z.string()),
            })
            .openapi({
              description: '',
              required: ['dishes', 'ingredients', 'cuisines', 'modifiers'],
              'x-examples': {
                'example-1': {
                  cuisines: [],
                  dishes: [
                    {
                      image: 'https://spoonacular.com/cdn/ingredients_100x100/salmon.png',
                      name: 'salmon',
                    },
                  ],
                  ingredients: [
                    { image: 'fusilli.jpg', include: true, name: 'fusilli' },
                    { image: 'nuts-mixed.jpg', include: false, name: 'nuts mixed' },
                  ],
                  modifiers: [],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                cuisines: [],
                dishes: [
                  {
                    image: 'https://spoonacular.com/cdn/ingredients_100x100/salmon.png',
                    name: 'salmon',
                  },
                ],
                ingredients: [
                  { image: 'fusilli.jpg', include: true, name: 'fusilli' },
                  { image: 'nuts-mixed.jpg', include: false, name: 'nuts mixed' },
                ],
                modifiers: [],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesQuickAnswerRoute = createRoute({
  method: 'get',
  path: '/recipes/quickAnswer',
  tags: ['recipes'],
  summary: 'Quick Answer',
  description: 'Answer a nutrition related natural language question.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Quick-Answer',
  },
  operationId: 'quickAnswer',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'The nutrition related question.',
            explode: false,
            in: 'query',
            name: 'q',
            required: true,
            schema: { example: 'How much vitamin c is in 2 apples?', type: 'string' },
            style: 'form',
          },
          example: 'How much vitamin c is in 2 apples?',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ answer: z.string().min(1), image: z.string().min(1) })
            .openapi({
              description: '',
              required: ['answer', 'image'],
              'x-examples': {
                'example-1': {
                  answer:
                    'There are 16.74 mg of Vitamin C in 2 apples. This covers about 20% of your daily needs of Vitamin C.',
                  image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                answer:
                  'There are 16.74 mg of Vitamin C in 2 apples. This covers about 20% of your daily needs of Vitamin C.',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesRandomRoute = createRoute({
  method: 'get',
  path: '/recipes/random',
  tags: ['recipes'],
  summary: 'Get Random Recipes',
  description:
    'Find random (popular) recipes. If you need to filter recipes by diet, nutrition etc. you might want to consider using the complex recipe search endpoint and set the sort request parameter to random.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Random-Recipes',
  },
  operationId: 'getRandomRecipes',
  request: {
    query: z.object({
      limitLicense: LimitLicenseParamsSchema,
      tags: TagsParamsSchema,
      number: NumberParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              recipes: z
                .array(
                  z
                    .object({
                      aggregateLikes: z.number(),
                      analyzedInstructions: z.array(z.object({})).exactOptional(),
                      cheap: z.boolean(),
                      creditsText: z.string().min(1),
                      cuisines: z.array(z.string()).exactOptional(),
                      dairyFree: z.boolean(),
                      diets: z.array(z.string()).exactOptional(),
                      dishTypes: z.array(z.string()).exactOptional(),
                      extendedIngredients: z
                        .array(
                          z
                            .object({
                              aisle: z.string().min(1),
                              amount: z.number(),
                              consitency: z.string().min(1),
                              id: z.int(),
                              image: z.string().min(1),
                              measures: z
                                .object({
                                  metric: z
                                    .object({
                                      amount: z.number(),
                                      unitLong: z.string().min(0),
                                      unitShort: z.string().min(0),
                                    })
                                    .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                                  us: z
                                    .object({
                                      amount: z.number(),
                                      unitLong: z.string().min(0),
                                      unitShort: z.string().min(0),
                                    })
                                    .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                                })
                                .exactOptional()
                                .openapi({ required: ['metric', 'us'] }),
                              meta: z.array(z.string()).exactOptional(),
                              name: z.string().min(1),
                              original: z.string().min(1),
                              originalName: z.string().min(1),
                              unit: z.string().min(0),
                            })
                            .openapi({
                              required: [
                                'aisle',
                                'amount',
                                'consitency',
                                'id',
                                'image',
                                'name',
                                'original',
                                'originalName',
                                'unit',
                              ],
                            }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                      gaps: z.string().min(1),
                      glutenFree: z.boolean(),
                      healthScore: z.number(),
                      id: z.int(),
                      image: z.string().min(1),
                      imageType: z.string().min(1),
                      instructions: z.string(),
                      ketogenic: z.boolean(),
                      license: z.string().min(1),
                      lowFodmap: z.boolean(),
                      occasions: z.array(z.string()).exactOptional(),
                      pricePerServing: z.number(),
                      readyInMinutes: z.int(),
                      servings: z.number(),
                      sourceName: z.string().min(1),
                      sourceUrl: z.string().min(1),
                      spoonacularScore: z.number(),
                      spoonacularSourceUrl: z.string().min(1),
                      summary: z.string().min(1),
                      sustainable: z.boolean(),
                      title: z.string().min(1),
                      vegan: z.boolean(),
                      vegetarian: z.boolean(),
                      veryHealthy: z.boolean(),
                      veryPopular: z.boolean(),
                      weightWatcherSmartPoints: z.number(),
                      whole30: z.boolean(),
                      winePairing: z
                        .object({
                          pairedWines: z.array(z.string()),
                          pairingText: z.string().min(1),
                          productMatches: z
                            .array(
                              z
                                .object({
                                  averageRating: z.number(),
                                  description: z.string().min(1),
                                  id: z.int(),
                                  imageUrl: z.string().min(1),
                                  link: z.string().min(1),
                                  price: z.string().min(1),
                                  ratingCount: z.int(),
                                  score: z.number(),
                                  title: z.string().min(1),
                                })
                                .openapi({
                                  required: [
                                    'id',
                                    'title',
                                    'description',
                                    'price',
                                    'imageUrl',
                                    'averageRating',
                                    'ratingCount',
                                    'score',
                                    'link',
                                  ],
                                }),
                            )
                            .min(0)
                            .superRefine((items, ctx) => {
                              const seen = new Map()
                              for (const [i, val] of items.entries()) {
                                const key = JSON.stringify(val)
                                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                else seen.set(key, i)
                              }
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: ['pairedWines', 'pairingText', 'productMatches'] }),
                    })
                    .openapi({
                      required: [
                        'id',
                        'title',
                        'image',
                        'imageType',
                        'servings',
                        'readyInMinutes',
                        'license',
                        'sourceName',
                        'sourceUrl',
                        'spoonacularSourceUrl',
                        'aggregateLikes',
                        'healthScore',
                        'spoonacularScore',
                        'pricePerServing',
                        'cheap',
                        'creditsText',
                        'dairyFree',
                        'gaps',
                        'glutenFree',
                        'instructions',
                        'ketogenic',
                        'lowFodmap',
                        'sustainable',
                        'vegan',
                        'vegetarian',
                        'veryHealthy',
                        'veryPopular',
                        'whole30',
                        'weightWatcherSmartPoints',
                        'summary',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['recipes'],
              'x-examples': {
                'example-1': {
                  recipes: [
                    {
                      aggregateLikes: 209,
                      analyzedInstructions: [],
                      cheap: false,
                      creditsText: 'Full Belly Sisters',
                      cuisines: [],
                      dairyFree: false,
                      diets: [],
                      dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                      extendedIngredients: [
                        {
                          aisle: 'Milk, Eggs, Other Dairy',
                          amount: 1,
                          consitency: 'solid',
                          id: 1001,
                          image: 'butter-sliced.jpg',
                          measures: {
                            metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                            us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          },
                          meta: [],
                          name: 'butter',
                          original: '1 tbsp butter',
                          originalName: 'butter',
                          unit: 'tbsp',
                        },
                        {
                          aisle: 'Produce',
                          amount: 2,
                          consitency: 'solid',
                          id: 10011135,
                          image: 'cauliflower.jpg',
                          measures: {
                            metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                            us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                          },
                          meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                          name: 'cauliflower florets',
                          original:
                            'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                          originalName:
                            'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                          unit: 'cups',
                        },
                        {
                          aisle: 'Cheese',
                          amount: 2,
                          consitency: 'solid',
                          id: 1041009,
                          image: 'cheddar-cheese.png',
                          measures: {
                            metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                            us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          },
                          meta: ['grated', '(I used romano)'],
                          name: 'cheese',
                          original: '2 tbsp grated cheese (I used romano)',
                          originalName: 'grated cheese (I used romano)',
                          unit: 'tbsp',
                        },
                        {
                          aisle: 'Oil, Vinegar, Salad Dressing',
                          amount: 1,
                          consitency: 'liquid',
                          id: 1034053,
                          image: 'olive-oil.jpg',
                          measures: {
                            metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                            us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          },
                          meta: [],
                          name: 'extra virgin olive oil',
                          original: '1-2 tbsp extra virgin olive oil',
                          originalName: 'extra virgin olive oil',
                          unit: 'tbsp',
                        },
                        {
                          aisle: 'Produce',
                          amount: 5,
                          consitency: 'solid',
                          id: 11215,
                          image: 'garlic.jpg',
                          measures: {
                            metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                            us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                          },
                          meta: [],
                          name: 'garlic',
                          original: '5-6 cloves garlic',
                          originalName: 'garlic',
                          unit: 'cloves',
                        },
                        {
                          aisle: 'Pasta and Rice',
                          amount: 6,
                          consitency: 'solid',
                          id: 20420,
                          image: 'fusilli.jpg',
                          measures: {
                            metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                            us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                          },
                          meta: ['(I used linguine)'],
                          name: 'pasta',
                          original: '6-8 ounces pasta (I used linguine)',
                          originalName: 'pasta (I used linguine)',
                          unit: 'ounces',
                        },
                        {
                          aisle: 'Spices and Seasonings',
                          amount: 2,
                          consitency: 'solid',
                          id: 1032009,
                          image: 'red-pepper-flakes.jpg',
                          measures: {
                            metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                            us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                          },
                          meta: ['red'],
                          name: 'red pepper flakes',
                          original: 'couple of pinches red pepper flakes, optional',
                          originalName: 'couple of red pepper flakes, optional',
                          unit: 'pinches',
                        },
                        {
                          aisle: 'Spices and Seasonings',
                          amount: 2,
                          consitency: 'solid',
                          id: 1102047,
                          image: 'salt-and-pepper.jpg',
                          measures: {
                            metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                            us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                          },
                          meta: ['to taste'],
                          name: 'salt and pepper',
                          original: 'salt and pepper, to taste',
                          originalName: 'salt and pepper, to taste',
                          unit: 'servings',
                        },
                        {
                          aisle: 'Produce',
                          amount: 3,
                          consitency: 'solid',
                          id: 11291,
                          image: 'spring-onions.jpg',
                          measures: {
                            metric: { amount: 3, unitLong: '', unitShort: '' },
                            us: { amount: 3, unitLong: '', unitShort: '' },
                          },
                          meta: ['white', 'green', 'separated', 'chopped'],
                          name: 'scallions',
                          original: '3 scallions, chopped, white and green parts separated',
                          originalName: 'scallions, chopped, white and green parts separated',
                          unit: '',
                        },
                        {
                          aisle: 'Alcoholic Beverages',
                          amount: 2,
                          consitency: 'liquid',
                          id: 14106,
                          image: 'white-wine.jpg',
                          measures: {
                            metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                            us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          },
                          meta: ['white'],
                          name: 'white wine',
                          original: '2-3 tbsp white wine',
                          originalName: 'white wine',
                          unit: 'tbsp',
                        },
                        {
                          aisle: 'Pasta and Rice',
                          amount: 0.25,
                          consitency: 'solid',
                          id: 99025,
                          image: 'breadcrumbs.jpg',
                          measures: {
                            metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                            us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                          },
                          meta: ['whole wheat', '(I used panko)'],
                          name: 'whole wheat bread crumbs',
                          original: '1/4 cup whole wheat bread crumbs (I used panko)',
                          originalName: 'whole wheat bread crumbs (I used panko)',
                          unit: 'cup',
                        },
                      ],
                      gaps: 'no',
                      glutenFree: false,
                      healthScore: 19,
                      id: 716429,
                      image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                      imageType: 'jpg',
                      instructions: '',
                      ketogenic: false,
                      license: 'CC BY-SA 3.0',
                      lowFodmap: false,
                      occasions: [],
                      pricePerServing: 163.15,
                      readyInMinutes: 45,
                      servings: 2,
                      sourceName: 'Full Belly Sisters',
                      sourceUrl:
                        'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                      spoonacularScore: 83,
                      spoonacularSourceUrl:
                        'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                      summary:
                        'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.',
                      sustainable: false,
                      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                      vegan: false,
                      vegetarian: false,
                      veryHealthy: false,
                      veryPopular: false,
                      weightWatcherSmartPoints: 17,
                      whole30: false,
                      winePairing: {
                        pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                        pairingText:
                          'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                        productMatches: [
                          {
                            averageRating: 0.8,
                            description:
                              'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                            id: 469199,
                            imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                            link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                            price: '$25.0',
                            ratingCount: 1,
                            score: 0.55,
                            title: 'Buddha Kat Winery Chardonnay',
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                recipes: [
                  {
                    aggregateLikes: 209,
                    analyzedInstructions: [],
                    cheap: false,
                    creditsText: 'Full Belly Sisters',
                    cuisines: [],
                    dairyFree: false,
                    diets: [],
                    dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                    extendedIngredients: [
                      {
                        aisle: 'Milk, Eggs, Other Dairy',
                        amount: 1,
                        consitency: 'solid',
                        id: 1001,
                        image: 'butter-sliced.jpg',
                        measures: {
                          metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        },
                        meta: [],
                        name: 'butter',
                        original: '1 tbsp butter',
                        originalName: 'butter',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Produce',
                        amount: 2,
                        consitency: 'solid',
                        id: 10011135,
                        image: 'cauliflower.jpg',
                        measures: {
                          metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                          us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                        },
                        meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                        name: 'cauliflower florets',
                        original:
                          'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                        originalName:
                          'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                        unit: 'cups',
                      },
                      {
                        aisle: 'Cheese',
                        amount: 2,
                        consitency: 'solid',
                        id: 1041009,
                        image: 'cheddar-cheese.png',
                        measures: {
                          metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        },
                        meta: ['grated', '(I used romano)'],
                        name: 'cheese',
                        original: '2 tbsp grated cheese (I used romano)',
                        originalName: 'grated cheese (I used romano)',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Oil, Vinegar, Salad Dressing',
                        amount: 1,
                        consitency: 'liquid',
                        id: 1034053,
                        image: 'olive-oil.jpg',
                        measures: {
                          metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                          us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        },
                        meta: [],
                        name: 'extra virgin olive oil',
                        original: '1-2 tbsp extra virgin olive oil',
                        originalName: 'extra virgin olive oil',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Produce',
                        amount: 5,
                        consitency: 'solid',
                        id: 11215,
                        image: 'garlic.jpg',
                        measures: {
                          metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                          us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                        },
                        meta: [],
                        name: 'garlic',
                        original: '5-6 cloves garlic',
                        originalName: 'garlic',
                        unit: 'cloves',
                      },
                      {
                        aisle: 'Pasta and Rice',
                        amount: 6,
                        consitency: 'solid',
                        id: 20420,
                        image: 'fusilli.jpg',
                        measures: {
                          metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                          us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                        },
                        meta: ['(I used linguine)'],
                        name: 'pasta',
                        original: '6-8 ounces pasta (I used linguine)',
                        originalName: 'pasta (I used linguine)',
                        unit: 'ounces',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        consitency: 'solid',
                        id: 1032009,
                        image: 'red-pepper-flakes.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                          us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                        },
                        meta: ['red'],
                        name: 'red pepper flakes',
                        original: 'couple of pinches red pepper flakes, optional',
                        originalName: 'couple of red pepper flakes, optional',
                        unit: 'pinches',
                      },
                      {
                        aisle: 'Spices and Seasonings',
                        amount: 2,
                        consitency: 'solid',
                        id: 1102047,
                        image: 'salt-and-pepper.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                          us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                        },
                        meta: ['to taste'],
                        name: 'salt and pepper',
                        original: 'salt and pepper, to taste',
                        originalName: 'salt and pepper, to taste',
                        unit: 'servings',
                      },
                      {
                        aisle: 'Produce',
                        amount: 3,
                        consitency: 'solid',
                        id: 11291,
                        image: 'spring-onions.jpg',
                        measures: {
                          metric: { amount: 3, unitLong: '', unitShort: '' },
                          us: { amount: 3, unitLong: '', unitShort: '' },
                        },
                        meta: ['white', 'green', 'separated', 'chopped'],
                        name: 'scallions',
                        original: '3 scallions, chopped, white and green parts separated',
                        originalName: 'scallions, chopped, white and green parts separated',
                        unit: '',
                      },
                      {
                        aisle: 'Alcoholic Beverages',
                        amount: 2,
                        consitency: 'liquid',
                        id: 14106,
                        image: 'white-wine.jpg',
                        measures: {
                          metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                          us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        },
                        meta: ['white'],
                        name: 'white wine',
                        original: '2-3 tbsp white wine',
                        originalName: 'white wine',
                        unit: 'tbsp',
                      },
                      {
                        aisle: 'Pasta and Rice',
                        amount: 0.25,
                        consitency: 'solid',
                        id: 99025,
                        image: 'breadcrumbs.jpg',
                        measures: {
                          metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                          us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                        },
                        meta: ['whole wheat', '(I used panko)'],
                        name: 'whole wheat bread crumbs',
                        original: '1/4 cup whole wheat bread crumbs (I used panko)',
                        originalName: 'whole wheat bread crumbs (I used panko)',
                        unit: 'cup',
                      },
                    ],
                    gaps: 'no',
                    glutenFree: false,
                    healthScore: 19,
                    id: 716429,
                    image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                    imageType: 'jpg',
                    instructions: '',
                    ketogenic: false,
                    license: 'CC BY-SA 3.0',
                    lowFodmap: false,
                    occasions: [],
                    pricePerServing: 163.15,
                    readyInMinutes: 45,
                    servings: 2,
                    sourceName: 'Full Belly Sisters',
                    sourceUrl:
                      'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                    spoonacularScore: 83,
                    spoonacularSourceUrl:
                      'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                    summary:
                      'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.',
                    sustainable: false,
                    title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                    vegan: false,
                    vegetarian: false,
                    veryHealthy: false,
                    veryPopular: false,
                    weightWatcherSmartPoints: 17,
                    whole30: false,
                    winePairing: {
                      pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                      pairingText:
                        'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                      productMatches: [
                        {
                          averageRating: 0.8,
                          description:
                            'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                          id: 469199,
                          imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                          link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                          price: '$25.0',
                          ratingCount: 1,
                          score: 0.55,
                          title: 'Buddha Kat Winery Chardonnay',
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesVisualizeEquipmentRoute = createRoute({
  method: 'post',
  path: '/recipes/visualizeEquipment',
  tags: ['recipes'],
  summary: 'Equipment Widget',
  description: 'Visualize the equipment used to make a recipe.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Equipment-Widget',
  },
  operationId: 'visualizeEquipment',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: {
            'example-1': {
              value: 'instructions=Preheat oven. Cut cucumber with a knife and put in a blender.',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesVisualizeIngredientsRoute = createRoute({
  method: 'post',
  path: '/recipes/visualizeIngredients',
  tags: ['ingredients'],
  summary: 'Ingredients Widget',
  description: 'Visualize ingredients of a recipe. You can play around with that endpoint!',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Ingredients-Widget',
  },
  operationId: 'visualizeIngredients',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ language: LanguageParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: { 'example-1': { value: 'ingredientList=3 oz flour&servings=2' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesVisualizeNutritionRoute = createRoute({
  method: 'post',
  path: '/recipes/visualizeNutrition',
  tags: ['recipes'],
  summary: 'Recipe Nutrition Widget',
  description: "Visualize a recipe's nutritional information as HTML including CSS.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Nutrition-Widget',
  },
  operationId: 'visualizeRecipeNutrition',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ language: LanguageParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: { 'example-1': { value: 'ingredientList=3 oz flour&servings=2' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesVisualizePriceEstimatorRoute = createRoute({
  method: 'post',
  path: '/recipes/visualizePriceEstimator',
  tags: ['recipes'],
  summary: 'Price Breakdown Widget',
  description: 'Visualize the price breakdown of a recipe.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Price-Breakdown-Widget',
  },
  operationId: 'visualizePriceBreakdown',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    query: z.object({ language: LanguageParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: { 'example-1': { value: 'ingredientList=3 oz flour&servings=2' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesVisualizeRecipeRoute = createRoute({
  method: 'post',
  path: '/recipes/visualizeRecipe',
  tags: ['recipes'],
  summary: 'Create Recipe Card',
  description: 'Generate a recipe card for a recipe.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Create-Recipe-Card',
  },
  operationId: 'createRecipeCard',
  request: {
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z.string(),
          examples: {
            'example-1': {
              value:
                'title=My recipe&ingredients=2 cups of green beans&instructions=cook the beans&readyInMinutes=60&servings=2&mask=ellipseMask&backgroundImage=background1',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ url: z.string().min(1) })
            .openapi({
              description: '',
              required: ['url'],
              'x-examples': {
                'example-1': { url: 'https://spoonacular.com/url-to-generated-recipe-card.jpg' },
              },
            }),
          examples: {
            'example-1': {
              value: { url: 'https://spoonacular.com/url-to-generated-recipe-card.jpg' },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postRecipesVisualizeTasteRoute = createRoute({
  method: 'post',
  path: '/recipes/visualizeTaste',
  tags: ['recipes'],
  summary: 'Recipe Taste Widget',
  description:
    "Visualize a recipe's taste information as HTML including CSS. You can play around with that endpoint!",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Taste-Widget',
  },
  operationId: 'visualizeRecipeTaste',
  request: {
    query: z.object({
      language: LanguageParamsSchema,
      normalize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to normalize to the strongest taste.',
            in: 'query',
            name: 'normalize',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      rgb: RgbParamsSchema,
    }),
    headers: z.object({ 'Content-Type': ContentTypeParamsSchema, Accept: AcceptParamsSchema }),
    body: {
      description: '',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.string(),
          examples: { 'example-1': { value: 'ingredientList=3 tomatoes, 5 oranges, 1 tsp salt' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdAnalyzedInstructionsRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/analyzedInstructions',
  tags: ['recipes'],
  summary: 'Get Analyzed Recipe Instructions',
  description:
    "Get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Analyzed-Recipe-Instructions',
  },
  operationId: 'getAnalyzedRecipeInstructions',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 324694, type: 'number' },
            style: 'simple',
          },
          example: 324694,
        }),
    }),
    query: z.object({
      stepBreakdown: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to break down the recipe steps even more.',
            explode: false,
            in: 'query',
            name: 'stepBreakdown',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              equipment: z
                .array(
                  z
                    .object({ id: z.int(), name: z.string().min(1) })
                    .openapi({ required: ['id', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              ingredients: z
                .array(
                  z
                    .object({ id: z.int(), name: z.string().min(1) })
                    .openapi({ required: ['id', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              parsedInstructions: z
                .array(
                  z
                    .object({
                      name: z.string(),
                      steps: z
                        .array(
                          z
                            .object({
                              equipment: z
                                .array(
                                  z
                                    .object({
                                      id: z.int(),
                                      image: z.string().min(1),
                                      localizedName: z.string().min(1),
                                      name: z.string().min(1),
                                    })
                                    .openapi({
                                      required: ['id', 'name', 'localizedName', 'image'],
                                    }),
                                )
                                .min(0)
                                .superRefine((items, ctx) => {
                                  const seen = new Map()
                                  for (const [i, val] of items.entries()) {
                                    const key = JSON.stringify(val)
                                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                    else seen.set(key, i)
                                  }
                                })
                                .exactOptional(),
                              ingredients: z
                                .array(
                                  z
                                    .object({
                                      id: z.int(),
                                      image: z.string().min(1),
                                      localizedName: z.string().min(1),
                                      name: z.string().min(1),
                                    })
                                    .openapi({
                                      required: ['id', 'name', 'localizedName', 'image'],
                                    }),
                                )
                                .min(0)
                                .superRefine((items, ctx) => {
                                  const seen = new Map()
                                  for (const [i, val] of items.entries()) {
                                    const key = JSON.stringify(val)
                                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                                    else seen.set(key, i)
                                  }
                                })
                                .exactOptional(),
                              number: z.number(),
                              step: z.string().min(1),
                            })
                            .openapi({ required: ['number', 'step'] }),
                        )
                        .min(0)
                        .superRefine((items, ctx) => {
                          const seen = new Map()
                          for (const [i, val] of items.entries()) {
                            const key = JSON.stringify(val)
                            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                            else seen.set(key, i)
                          }
                        })
                        .exactOptional(),
                    })
                    .openapi({ required: ['name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['parsedInstructions', 'ingredients', 'equipment'],
              'x-examples': {
                'example-1': {
                  equipment: [{ id: 404645, name: 'frying pan' }],
                  ingredients: [
                    { id: 2027, name: 'oregano' },
                    { id: 11215, name: 'garlic' },
                    { id: 11282, name: 'onion' },
                    { id: 2047, name: 'salt' },
                  ],
                  parsedInstructions: [
                    {
                      name: '',
                      steps: [
                        {
                          equipment: [
                            {
                              id: 404645,
                              image: 'pan.png',
                              localizedName: 'frying pan',
                              name: 'frying pan',
                            },
                          ],
                          ingredients: [
                            {
                              id: 11215,
                              image: 'garlic.png',
                              localizedName: 'garlic',
                              name: 'garlic',
                            },
                            {
                              id: 11282,
                              image: 'brown-onion.png',
                              localizedName: 'onion',
                              name: 'onion',
                            },
                          ],
                          number: 1,
                          step: 'Put the garlic in a pan and then add the onion.',
                        },
                        {
                          equipment: [],
                          ingredients: [
                            {
                              id: 2027,
                              image: 'oregano.jpg',
                              localizedName: 'oregano',
                              name: 'oregano',
                            },
                            { id: 2047, image: 'salt.jpg', localizedName: 'salt', name: 'salt' },
                          ],
                          number: 2,
                          step: 'Add some salt and oregano.',
                        },
                      ],
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                equipment: [{ id: 404645, name: 'frying pan' }],
                ingredients: [
                  { id: 2027, name: 'oregano' },
                  { id: 11215, name: 'garlic' },
                  { id: 11282, name: 'onion' },
                  { id: 2047, name: 'salt' },
                ],
                parsedInstructions: [
                  {
                    name: '',
                    steps: [
                      {
                        equipment: [
                          {
                            id: 404645,
                            image: 'pan.png',
                            localizedName: 'frying pan',
                            name: 'frying pan',
                          },
                        ],
                        ingredients: [
                          {
                            id: 11215,
                            image: 'garlic.png',
                            localizedName: 'garlic',
                            name: 'garlic',
                          },
                          {
                            id: 11282,
                            image: 'brown-onion.png',
                            localizedName: 'onion',
                            name: 'onion',
                          },
                        ],
                        number: 1,
                        step: 'Put the garlic in a pan and then add the onion.',
                      },
                      {
                        equipment: [],
                        ingredients: [
                          {
                            id: 2027,
                            image: 'oregano.jpg',
                            localizedName: 'oregano',
                            name: 'oregano',
                          },
                          { id: 2047, image: 'salt.jpg', localizedName: 'salt', name: 'salt' },
                        ],
                        number: 2,
                        step: 'Add some salt and oregano.',
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdCardRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/card',
  summary: 'Create Recipe Card',
  description: 'Generate a recipe card for a recipe.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Create-Recipe-Card',
  },
  operationId: 'createRecipeCardGet',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 4632, type: 'number' },
            style: 'simple',
          },
          example: 4632,
        }),
    }),
    query: z.object({
      mask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The mask to put over the recipe image ("ellipseMask", "diamondMask", "starMask", "heartMask", "potMask", "fishMask").',
            explode: false,
            in: 'query',
            name: 'mask',
            required: false,
            schema: { example: 'ellipseMask', type: 'string' },
            style: 'form',
          },
          example: 'ellipseMask',
        }),
      backgroundImage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The background image ("none","background1", or "background2").',
            explode: false,
            in: 'query',
            name: 'backgroundImage',
            required: false,
            schema: { example: 'background1', type: 'string' },
            style: 'form',
          },
          example: 'background1',
        }),
      backgroundColor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The background color for the recipe card as a hex-string.',
            explode: false,
            in: 'query',
            name: 'backgroundColor',
            required: false,
            schema: { example: 'ffffff', type: 'string' },
            style: 'form',
          },
          example: 'ffffff',
        }),
      fontColor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The font color for the recipe card as a hex-string.',
            explode: false,
            in: 'query',
            name: 'fontColor',
            required: false,
            schema: { example: '333333', type: 'string' },
            style: 'form',
          },
          example: '333333',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.object({}), examples: {} } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdEquipmentWidgetRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/equipmentWidget',
  tags: ['recipes'],
  summary: 'Equipment by ID Widget',
  description: "Visualize a recipe's equipment list.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Equipment-by-ID-Widget',
  },
  operationId: 'visualizeRecipeEquipmentByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 44860, type: 'number' },
            style: 'simple',
          },
          example: 44860,
        }),
    }),
    query: z.object({ defaultCss: DefaultCssParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string(), examples: {} } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdEquipmentWidgetJsonRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/equipmentWidget.json',
  tags: ['recipes'],
  summary: 'Equipment by ID',
  description: "Get a recipe's equipment list.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Equipment-by-ID',
  },
  operationId: 'getRecipeEquipmentByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1003464, type: 'number' },
            style: 'simple',
          },
          example: 1003464,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              equipment: z
                .array(
                  z
                    .object({ image: z.string().min(1), name: z.string().min(1) })
                    .openapi({ required: ['image', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['equipment'],
              'x-examples': {
                'example-1': {
                  equipment: [
                    { image: 'pie-pan.png', name: 'pie form' },
                    { image: 'bowl.jpg', name: 'bowl' },
                    { image: 'oven.jpg', name: 'oven' },
                    { image: 'pan.png', name: 'frying pan' },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                equipment: [
                  { image: 'pie-pan.png', name: 'pie form' },
                  { image: 'bowl.jpg', name: 'bowl' },
                  { image: 'oven.jpg', name: 'oven' },
                  { image: 'pan.png', name: 'frying pan' },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdEquipmentWidgetPngRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/equipmentWidget.png',
  tags: ['recipes'],
  summary: 'Equipment by ID Image',
  description: "Visualize a recipe's equipment list as an image.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Equipment-by-ID-Image',
  },
  operationId: 'equipmentByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 44860, type: 'number' },
            style: 'simple',
          },
          example: 44860,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdInformationRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/information',
  tags: ['recipes'],
  summary: 'Get Recipe Information',
  description:
    'Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information, etc.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Recipe-Information',
  },
  operationId: 'getRecipeInformation',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the recipe.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 716429, type: 'number' },
            style: 'simple',
          },
          example: 716429,
        }),
    }),
    query: z.object({ includeNutrition: IncludeNutritionParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              aggregateLikes: z.int(),
              analyzedInstructions: z.array(z.object({})),
              cheap: z.boolean(),
              creditsText: z.string().min(1),
              cuisines: z.array(z.string()),
              dairyFree: z.boolean(),
              diets: z.array(z.string()),
              dishTypes: z.array(z.string()),
              extendedIngredients: z
                .array(
                  z
                    .object({
                      aisle: z.string().min(1),
                      amount: z.number(),
                      consitency: z.string().min(1),
                      id: z.int(),
                      image: z.string().min(1),
                      measures: z
                        .object({
                          metric: z
                            .object({
                              amount: z.number(),
                              unitLong: z.string().min(0),
                              unitShort: z.string().min(0),
                            })
                            .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                          us: z
                            .object({
                              amount: z.number(),
                              unitLong: z.string().min(0),
                              unitShort: z.string().min(0),
                            })
                            .openapi({ required: ['amount', 'unitLong', 'unitShort'] }),
                        })
                        .exactOptional()
                        .openapi({ required: ['metric', 'us'] }),
                      meta: z.array(z.string()).exactOptional(),
                      name: z.string().min(1),
                      original: z.string().min(1),
                      originalName: z.string().min(1),
                      unit: z.string().min(0),
                    })
                    .openapi({
                      required: [
                        'aisle',
                        'amount',
                        'consitency',
                        'id',
                        'image',
                        'name',
                        'original',
                        'originalName',
                        'unit',
                      ],
                    }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              gaps: z.string().min(1),
              glutenFree: z.boolean(),
              healthScore: z.number(),
              id: z.int(),
              image: z.string().min(1),
              imageType: z.string().min(1),
              instructions: z.string(),
              ketogenic: z.boolean(),
              license: z.string().min(1),
              lowFodmap: z.boolean(),
              occasions: z.array(z.string()),
              pricePerServing: z.number(),
              readyInMinutes: z.int(),
              servings: z.number(),
              sourceName: z.string().min(1),
              sourceUrl: z.string().min(1),
              spoonacularScore: z.number(),
              spoonacularSourceUrl: z.string().min(1),
              summary: z.string().min(1),
              sustainable: z.boolean(),
              title: z.string().min(1),
              vegan: z.boolean(),
              vegetarian: z.boolean(),
              veryHealthy: z.boolean(),
              veryPopular: z.boolean(),
              weightWatcherSmartPoints: z.number(),
              whole30: z.boolean(),
              winePairing: z
                .object({
                  pairedWines: z.array(z.string()),
                  pairingText: z.string().min(1),
                  productMatches: z
                    .array(
                      z
                        .object({
                          averageRating: z.number(),
                          description: z.string().min(1),
                          id: z.int(),
                          imageUrl: z.string().min(1),
                          link: z.string().min(1),
                          price: z.string().min(1),
                          ratingCount: z.int(),
                          score: z.number(),
                          title: z.string().min(1),
                        })
                        .openapi({
                          required: [
                            'id',
                            'title',
                            'description',
                            'price',
                            'imageUrl',
                            'averageRating',
                            'ratingCount',
                            'score',
                            'link',
                          ],
                        }),
                    )
                    .min(0)
                    .superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                })
                .openapi({ required: ['pairedWines', 'pairingText', 'productMatches'] }),
            })
            .openapi({
              description: '',
              required: [
                'id',
                'title',
                'image',
                'imageType',
                'servings',
                'readyInMinutes',
                'license',
                'sourceName',
                'sourceUrl',
                'spoonacularSourceUrl',
                'aggregateLikes',
                'healthScore',
                'spoonacularScore',
                'pricePerServing',
                'analyzedInstructions',
                'cheap',
                'creditsText',
                'cuisines',
                'dairyFree',
                'diets',
                'gaps',
                'glutenFree',
                'instructions',
                'ketogenic',
                'lowFodmap',
                'occasions',
                'sustainable',
                'vegan',
                'vegetarian',
                'veryHealthy',
                'veryPopular',
                'whole30',
                'weightWatcherSmartPoints',
                'dishTypes',
                'extendedIngredients',
                'summary',
                'winePairing',
              ],
              'x-examples': {
                'example-1': {
                  aggregateLikes: 209,
                  analyzedInstructions: [],
                  cheap: false,
                  creditsText: 'Full Belly Sisters',
                  cuisines: [],
                  dairyFree: false,
                  diets: [],
                  dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                  extendedIngredients: [
                    {
                      aisle: 'Milk, Eggs, Other Dairy',
                      amount: 1,
                      consitency: 'solid',
                      id: 1001,
                      image: 'butter-sliced.jpg',
                      measures: {
                        metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      },
                      meta: [],
                      name: 'butter',
                      original: '1 tbsp butter',
                      originalName: 'butter',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Produce',
                      amount: 2,
                      consitency: 'solid',
                      id: 10011135,
                      image: 'cauliflower.jpg',
                      measures: {
                        metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                        us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                      },
                      meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                      name: 'cauliflower florets',
                      original:
                        'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                      originalName:
                        'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                      unit: 'cups',
                    },
                    {
                      aisle: 'Cheese',
                      amount: 2,
                      consitency: 'solid',
                      id: 1041009,
                      image: 'cheddar-cheese.png',
                      measures: {
                        metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      },
                      meta: ['grated', '(I used romano)'],
                      name: 'cheese',
                      original: '2 tbsp grated cheese (I used romano)',
                      originalName: 'grated cheese (I used romano)',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Oil, Vinegar, Salad Dressing',
                      amount: 1,
                      consitency: 'liquid',
                      id: 1034053,
                      image: 'olive-oil.jpg',
                      measures: {
                        metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                        us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      },
                      meta: [],
                      name: 'extra virgin olive oil',
                      original: '1-2 tbsp extra virgin olive oil',
                      originalName: 'extra virgin olive oil',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Produce',
                      amount: 5,
                      consitency: 'solid',
                      id: 11215,
                      image: 'garlic.jpg',
                      measures: {
                        metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                        us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                      },
                      meta: [],
                      name: 'garlic',
                      original: '5-6 cloves garlic',
                      originalName: 'garlic',
                      unit: 'cloves',
                    },
                    {
                      aisle: 'Pasta and Rice',
                      amount: 6,
                      consitency: 'solid',
                      id: 20420,
                      image: 'fusilli.jpg',
                      measures: {
                        metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                        us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                      },
                      meta: ['(I used linguine)'],
                      name: 'pasta',
                      original: '6-8 ounces pasta (I used linguine)',
                      originalName: 'pasta (I used linguine)',
                      unit: 'ounces',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      consitency: 'solid',
                      id: 1032009,
                      image: 'red-pepper-flakes.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                        us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                      },
                      meta: ['red'],
                      name: 'red pepper flakes',
                      original: 'couple of pinches red pepper flakes, optional',
                      originalName: 'couple of red pepper flakes, optional',
                      unit: 'pinches',
                    },
                    {
                      aisle: 'Spices and Seasonings',
                      amount: 2,
                      consitency: 'solid',
                      id: 1102047,
                      image: 'salt-and-pepper.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                        us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                      },
                      meta: ['to taste'],
                      name: 'salt and pepper',
                      original: 'salt and pepper, to taste',
                      originalName: 'salt and pepper, to taste',
                      unit: 'servings',
                    },
                    {
                      aisle: 'Produce',
                      amount: 3,
                      consitency: 'solid',
                      id: 11291,
                      image: 'spring-onions.jpg',
                      measures: {
                        metric: { amount: 3, unitLong: '', unitShort: '' },
                        us: { amount: 3, unitLong: '', unitShort: '' },
                      },
                      meta: ['white', 'green', 'separated', 'chopped'],
                      name: 'scallions',
                      original: '3 scallions, chopped, white and green parts separated',
                      originalName: 'scallions, chopped, white and green parts separated',
                      unit: '',
                    },
                    {
                      aisle: 'Alcoholic Beverages',
                      amount: 2,
                      consitency: 'liquid',
                      id: 14106,
                      image: 'white-wine.jpg',
                      measures: {
                        metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                        us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      },
                      meta: ['white'],
                      name: 'white wine',
                      original: '2-3 tbsp white wine',
                      originalName: 'white wine',
                      unit: 'tbsp',
                    },
                    {
                      aisle: 'Pasta and Rice',
                      amount: 0.25,
                      consitency: 'solid',
                      id: 99025,
                      image: 'breadcrumbs.jpg',
                      measures: {
                        metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                        us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                      },
                      meta: ['whole wheat', '(I used panko)'],
                      name: 'whole wheat bread crumbs',
                      original: '1/4 cup whole wheat bread crumbs (I used panko)',
                      originalName: 'whole wheat bread crumbs (I used panko)',
                      unit: 'cup',
                    },
                  ],
                  gaps: 'no',
                  glutenFree: false,
                  healthScore: 19,
                  id: 716429,
                  image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                  imageType: 'jpg',
                  instructions: '',
                  ketogenic: false,
                  license: 'CC BY-SA 3.0',
                  lowFodmap: false,
                  occasions: [],
                  pricePerServing: 163.15,
                  readyInMinutes: 45,
                  servings: 2,
                  sourceName: 'Full Belly Sisters',
                  sourceUrl:
                    'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                  spoonacularScore: 83,
                  spoonacularSourceUrl:
                    'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                  summary:
                    'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.',
                  sustainable: false,
                  title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                  vegan: false,
                  vegetarian: false,
                  veryHealthy: false,
                  veryPopular: false,
                  weightWatcherSmartPoints: 17,
                  whole30: false,
                  winePairing: {
                    pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                    pairingText:
                      'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                    productMatches: [
                      {
                        averageRating: 0.8,
                        description:
                          'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                        id: 469199,
                        imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                        link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                        price: '$25.0',
                        ratingCount: 1,
                        score: 0.55,
                        title: 'Buddha Kat Winery Chardonnay',
                      },
                    ],
                  },
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                aggregateLikes: 209,
                analyzedInstructions: [],
                cheap: false,
                creditsText: 'Full Belly Sisters',
                cuisines: [],
                dairyFree: false,
                diets: [],
                dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
                extendedIngredients: [
                  {
                    aisle: 'Milk, Eggs, Other Dairy',
                    amount: 1,
                    consitency: 'solid',
                    id: 1001,
                    image: 'butter-sliced.jpg',
                    measures: {
                      metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                    },
                    meta: [],
                    name: 'butter',
                    original: '1 tbsp butter',
                    originalName: 'butter',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Produce',
                    amount: 2,
                    consitency: 'solid',
                    id: 10011135,
                    image: 'cauliflower.jpg',
                    measures: {
                      metric: { amount: 473.176, unitLong: 'milliliters', unitShort: 'ml' },
                      us: { amount: 2, unitLong: 'cups', unitShort: 'cups' },
                    },
                    meta: ['frozen', 'thawed', 'cut into bite-sized pieces'],
                    name: 'cauliflower florets',
                    original:
                      'about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces',
                    originalName:
                      'about frozen cauliflower florets, thawed, cut into bite-sized pieces',
                    unit: 'cups',
                  },
                  {
                    aisle: 'Cheese',
                    amount: 2,
                    consitency: 'solid',
                    id: 1041009,
                    image: 'cheddar-cheese.png',
                    measures: {
                      metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                    },
                    meta: ['grated', '(I used romano)'],
                    name: 'cheese',
                    original: '2 tbsp grated cheese (I used romano)',
                    originalName: 'grated cheese (I used romano)',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Oil, Vinegar, Salad Dressing',
                    amount: 1,
                    consitency: 'liquid',
                    id: 1034053,
                    image: 'olive-oil.jpg',
                    measures: {
                      metric: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                      us: { amount: 1, unitLong: 'Tbsp', unitShort: 'Tbsp' },
                    },
                    meta: [],
                    name: 'extra virgin olive oil',
                    original: '1-2 tbsp extra virgin olive oil',
                    originalName: 'extra virgin olive oil',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Produce',
                    amount: 5,
                    consitency: 'solid',
                    id: 11215,
                    image: 'garlic.jpg',
                    measures: {
                      metric: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                      us: { amount: 5, unitLong: 'cloves', unitShort: 'cloves' },
                    },
                    meta: [],
                    name: 'garlic',
                    original: '5-6 cloves garlic',
                    originalName: 'garlic',
                    unit: 'cloves',
                  },
                  {
                    aisle: 'Pasta and Rice',
                    amount: 6,
                    consitency: 'solid',
                    id: 20420,
                    image: 'fusilli.jpg',
                    measures: {
                      metric: { amount: 170.097, unitLong: 'grams', unitShort: 'g' },
                      us: { amount: 6, unitLong: 'ounces', unitShort: 'oz' },
                    },
                    meta: ['(I used linguine)'],
                    name: 'pasta',
                    original: '6-8 ounces pasta (I used linguine)',
                    originalName: 'pasta (I used linguine)',
                    unit: 'ounces',
                  },
                  {
                    aisle: 'Spices and Seasonings',
                    amount: 2,
                    consitency: 'solid',
                    id: 1032009,
                    image: 'red-pepper-flakes.jpg',
                    measures: {
                      metric: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                      us: { amount: 2, unitLong: 'pinches', unitShort: 'pinches' },
                    },
                    meta: ['red'],
                    name: 'red pepper flakes',
                    original: 'couple of pinches red pepper flakes, optional',
                    originalName: 'couple of red pepper flakes, optional',
                    unit: 'pinches',
                  },
                  {
                    aisle: 'Spices and Seasonings',
                    amount: 2,
                    consitency: 'solid',
                    id: 1102047,
                    image: 'salt-and-pepper.jpg',
                    measures: {
                      metric: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                      us: { amount: 2, unitLong: 'servings', unitShort: 'servings' },
                    },
                    meta: ['to taste'],
                    name: 'salt and pepper',
                    original: 'salt and pepper, to taste',
                    originalName: 'salt and pepper, to taste',
                    unit: 'servings',
                  },
                  {
                    aisle: 'Produce',
                    amount: 3,
                    consitency: 'solid',
                    id: 11291,
                    image: 'spring-onions.jpg',
                    measures: {
                      metric: { amount: 3, unitLong: '', unitShort: '' },
                      us: { amount: 3, unitLong: '', unitShort: '' },
                    },
                    meta: ['white', 'green', 'separated', 'chopped'],
                    name: 'scallions',
                    original: '3 scallions, chopped, white and green parts separated',
                    originalName: 'scallions, chopped, white and green parts separated',
                    unit: '',
                  },
                  {
                    aisle: 'Alcoholic Beverages',
                    amount: 2,
                    consitency: 'liquid',
                    id: 14106,
                    image: 'white-wine.jpg',
                    measures: {
                      metric: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                      us: { amount: 2, unitLong: 'Tbsps', unitShort: 'Tbsps' },
                    },
                    meta: ['white'],
                    name: 'white wine',
                    original: '2-3 tbsp white wine',
                    originalName: 'white wine',
                    unit: 'tbsp',
                  },
                  {
                    aisle: 'Pasta and Rice',
                    amount: 0.25,
                    consitency: 'solid',
                    id: 99025,
                    image: 'breadcrumbs.jpg',
                    measures: {
                      metric: { amount: 59.147, unitLong: 'milliliters', unitShort: 'ml' },
                      us: { amount: 0.25, unitLong: 'cups', unitShort: 'cups' },
                    },
                    meta: ['whole wheat', '(I used panko)'],
                    name: 'whole wheat bread crumbs',
                    original: '1/4 cup whole wheat bread crumbs (I used panko)',
                    originalName: 'whole wheat bread crumbs (I used panko)',
                    unit: 'cup',
                  },
                ],
                gaps: 'no',
                glutenFree: false,
                healthScore: 19,
                id: 716429,
                image: 'https://spoonacular.com/recipeImages/716429-556x370.jpg',
                imageType: 'jpg',
                instructions: '',
                ketogenic: false,
                license: 'CC BY-SA 3.0',
                lowFodmap: false,
                occasions: [],
                pricePerServing: 163.15,
                readyInMinutes: 45,
                servings: 2,
                sourceName: 'Full Belly Sisters',
                sourceUrl:
                  'http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html',
                spoonacularScore: 83,
                spoonacularSourceUrl:
                  'https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429',
                summary:
                  'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately &lt;b&gt;19g of protein &lt;/b&gt;,  &lt;b&gt;20g of fat &lt;/b&gt;, and a total of  &lt;b&gt;584 calories &lt;/b&gt;. For  &lt;b&gt;$1.63 per serving &lt;/b&gt;, this recipe  &lt;b&gt;covers 23% &lt;/b&gt; of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  &lt;b&gt;45 minutes &lt;/b&gt;. All things considered, we decided this recipe  &lt;b&gt;deserves a spoonacular score of 83% &lt;/b&gt;. This score is awesome. If you like this recipe, take a look at these similar recipes: &lt;a href="https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375">Cauliflower Gratin with Garlic Breadcrumbs&lt;/a&gt;, &lt; href="https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437">Pasta With Cauliflower, Sausage, & Breadcrumbs&lt;/a&gt;, and &lt;a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs&lt;/a&gt;.',
                sustainable: false,
                title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
                vegan: false,
                vegetarian: false,
                veryHealthy: false,
                veryPopular: false,
                weightWatcherSmartPoints: 17,
                whole30: false,
                winePairing: {
                  pairedWines: ['chardonnay', 'gruener veltliner', 'sauvignon blanc'],
                  pairingText:
                    'Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.',
                  productMatches: [
                    {
                      averageRating: 0.8,
                      description:
                        'We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.',
                      id: 469199,
                      imageUrl: 'https://spoonacular.com/productImages/469199-312x231.jpg',
                      link: 'https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20',
                      price: '$25.0',
                      ratingCount: 1,
                      score: 0.55,
                      title: 'Buddha Kat Winery Chardonnay',
                    },
                  ],
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdIngredientWidgetRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/ingredientWidget',
  tags: ['recipes'],
  summary: 'Ingredients by ID Widget',
  description: "Visualize a recipe's ingredient list.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Ingredients-by-ID-Widget',
  },
  operationId: 'visualizeRecipeIngredientsByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1082038, type: 'number' },
            style: 'simple',
          },
          example: 1082038,
        }),
    }),
    query: z.object({
      defaultCss: DefaultCssParamsSchema,
      measure: z
        .enum(['us', 'metric'])
        .exactOptional()
        .openapi({
          param: {
            description: "Whether the the measures should be 'us' or 'metric'.",
            in: 'query',
            name: 'measure',
            schema: { enum: ['us', 'metric'], example: 'metric', type: 'string' },
            required: false,
          },
          example: 'metric',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdIngredientWidgetJsonRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/ingredientWidget.json',
  tags: ['recipes'],
  summary: 'Ingredients by ID',
  description: "Get a recipe's ingredient list.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Ingredients-by-ID',
  },
  operationId: 'getRecipeIngredientsByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1003464, type: 'number' },
            style: 'simple',
          },
          example: 1003464,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              ingredients: z
                .array(
                  z
                    .object({
                      amount: z
                        .object({
                          metric: z
                            .object({ unit: z.string().min(0), value: z.number() })
                            .openapi({ required: ['unit', 'value'] }),
                          us: z
                            .object({ unit: z.string().min(0), value: z.number() })
                            .openapi({ required: ['unit', 'value'] }),
                        })
                        .exactOptional()
                        .openapi({ required: ['metric', 'us'] }),
                      image: z.string().min(1),
                      name: z.string().min(1),
                    })
                    .openapi({ required: ['image', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
            })
            .openapi({
              description: '',
              required: ['ingredients'],
              'x-examples': {
                'example-1': {
                  ingredients: [
                    {
                      amount: {
                        metric: { unit: 'g', value: 222 },
                        us: { unit: 'cups', value: 1.5 },
                      },
                      image: 'blueberries.jpg',
                      name: 'blueberries',
                    },
                    {
                      amount: { metric: { unit: '', value: 1 }, us: { unit: '', value: 1 } },
                      image: 'egg-white.jpg',
                      name: 'egg white',
                    },
                    {
                      amount: {
                        metric: { unit: 'Tbsps', value: 2 },
                        us: { unit: 'Tbsps', value: 2 },
                      },
                      image: 'flour.png',
                      name: 'flour',
                    },
                    {
                      amount: {
                        metric: { unit: 'g', value: 150 },
                        us: { unit: 'cup', value: 0.75 },
                      },
                      image: 'sugar-in-bowl.png',
                      name: 'granulated sugar',
                    },
                    {
                      amount: { metric: { unit: 'tsp', value: 1 }, us: { unit: 'tsp', value: 1 } },
                      image: 'lemon-juice.jpg',
                      name: 'fresh lemon juice',
                    },
                    {
                      amount: {
                        metric: { unit: 'pinch', value: 1 },
                        us: { unit: 'pinch', value: 1 },
                      },
                      image: 'ground-nutmeg.jpg',
                      name: 'nutmeg',
                    },
                    {
                      amount: { metric: { unit: '', value: 2 }, us: { unit: '', value: 2 } },
                      image: 'pie-crust.jpg',
                      name: 'pie dough round',
                    },
                    {
                      amount: {
                        metric: { unit: 'Tbsps', value: 2 },
                        us: { unit: 'Tbsps', value: 2 },
                      },
                      image: 'tapioca-pearls.png',
                      name: 'quick cooking tapioca',
                    },
                    {
                      amount: {
                        metric: { unit: 'g', value: 305 },
                        us: { unit: 'cups', value: 2.5 },
                      },
                      image: 'rhubarb.jpg',
                      name: 'trimmed rhubarb',
                    },
                    {
                      amount: {
                        metric: { unit: 'tsps', value: 0.333 },
                        us: { unit: 'tsps', value: 0.333 },
                      },
                      image: 'salt.jpg',
                      name: 'salt',
                    },
                    {
                      amount: {
                        metric: { unit: 'Tbsps', value: 0.5 },
                        us: { unit: 'Tbsps', value: 0.5 },
                      },
                      image: 'butter-sliced.jpg',
                      name: 'unsalted butter',
                    },
                  ],
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                ingredients: [
                  {
                    amount: { metric: { unit: 'g', value: 222 }, us: { unit: 'cups', value: 1.5 } },
                    image: 'blueberries.jpg',
                    name: 'blueberries',
                  },
                  {
                    amount: { metric: { unit: '', value: 1 }, us: { unit: '', value: 1 } },
                    image: 'egg-white.jpg',
                    name: 'egg white',
                  },
                  {
                    amount: {
                      metric: { unit: 'Tbsps', value: 2 },
                      us: { unit: 'Tbsps', value: 2 },
                    },
                    image: 'flour.png',
                    name: 'flour',
                  },
                  {
                    amount: { metric: { unit: 'g', value: 150 }, us: { unit: 'cup', value: 0.75 } },
                    image: 'sugar-in-bowl.png',
                    name: 'granulated sugar',
                  },
                  {
                    amount: { metric: { unit: 'tsp', value: 1 }, us: { unit: 'tsp', value: 1 } },
                    image: 'lemon-juice.jpg',
                    name: 'fresh lemon juice',
                  },
                  {
                    amount: {
                      metric: { unit: 'pinch', value: 1 },
                      us: { unit: 'pinch', value: 1 },
                    },
                    image: 'ground-nutmeg.jpg',
                    name: 'nutmeg',
                  },
                  {
                    amount: { metric: { unit: '', value: 2 }, us: { unit: '', value: 2 } },
                    image: 'pie-crust.jpg',
                    name: 'pie dough round',
                  },
                  {
                    amount: {
                      metric: { unit: 'Tbsps', value: 2 },
                      us: { unit: 'Tbsps', value: 2 },
                    },
                    image: 'tapioca-pearls.png',
                    name: 'quick cooking tapioca',
                  },
                  {
                    amount: { metric: { unit: 'g', value: 305 }, us: { unit: 'cups', value: 2.5 } },
                    image: 'rhubarb.jpg',
                    name: 'trimmed rhubarb',
                  },
                  {
                    amount: {
                      metric: { unit: 'tsps', value: 0.333 },
                      us: { unit: 'tsps', value: 0.333 },
                    },
                    image: 'salt.jpg',
                    name: 'salt',
                  },
                  {
                    amount: {
                      metric: { unit: 'Tbsps', value: 0.5 },
                      us: { unit: 'Tbsps', value: 0.5 },
                    },
                    image: 'butter-sliced.jpg',
                    name: 'unsalted butter',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdIngredientWidgetPngRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/ingredientWidget.png',
  tags: ['ingredients', 'recipes'],
  summary: 'Ingredients by ID Image',
  description: "Visualize a recipe's ingredient list.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Ingredients-by-ID-Image',
  },
  operationId: 'ingredientsByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1082038, type: 'number' },
            style: 'simple',
          },
          example: 1082038,
        }),
    }),
    query: z.object({
      measure: z
        .enum(['us', 'metric'])
        .exactOptional()
        .openapi({
          param: {
            description: "Whether the the measures should be 'us' or 'metric'.",
            explode: false,
            in: 'query',
            name: 'measure',
            required: false,
            schema: { enum: ['us', 'metric'], example: 'metric', type: 'string' },
            style: 'form',
          },
          example: 'metric',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdNutritionLabelRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/nutritionLabel',
  tags: ['recipes'],
  summary: 'Recipe Nutrition Label Widget',
  description: "Get a recipe's nutrition label as an HTML widget.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Widget',
  },
  operationId: 'recipeNutritionLabelWidget',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 641166, type: 'number' },
            style: 'simple',
          },
          example: 641166,
        }),
    }),
    query: z.object({
      defaultCss: DefaultCssParamsSchema,
      showOptionalNutrients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show optional nutrients.',
            explode: false,
            in: 'query',
            name: 'showOptionalNutrients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showZeroValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show zero values.',
            explode: false,
            in: 'query',
            name: 'showZeroValues',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show a list of ingredients.',
            explode: false,
            in: 'query',
            name: 'showIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdNutritionLabelPngRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/nutritionLabel.png',
  tags: ['recipes'],
  summary: 'Recipe Nutrition Label Image',
  description: "Get a recipe's nutrition label as an image.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Image',
  },
  operationId: 'recipeNutritionLabelImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 641166, type: 'number' },
            style: 'simple',
          },
          example: 641166,
        }),
    }),
    query: z.object({
      showOptionalNutrients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show optional nutrients.',
            explode: false,
            in: 'query',
            name: 'showOptionalNutrients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showZeroValues: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show zero values.',
            explode: false,
            in: 'query',
            name: 'showZeroValues',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      showIngredients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to show a list of ingredients.',
            explode: false,
            in: 'query',
            name: 'showIngredients',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdNutritionWidgetRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/nutritionWidget',
  tags: ['recipes'],
  summary: 'Recipe Nutrition by ID Widget',
  description: "Visualize a recipe's nutritional information as HTML including CSS.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Nutrition-by-ID-Widget',
  },
  operationId: 'visualizeRecipeNutritionByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1082038, type: 'number' },
            style: 'simple',
          },
          example: 1082038,
        }),
    }),
    query: z.object({ defaultCss: DefaultCssParamsSchema }),
    headers: z.object({ Accept: AcceptParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdNutritionWidgetJsonRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/nutritionWidget.json',
  tags: ['recipes'],
  summary: 'Nutrition by ID',
  description: "Get a recipe's nutrition data.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Nutrition-by-ID',
  },
  operationId: 'getRecipeNutritionWidgetByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1003464, type: 'number' },
            style: 'simple',
          },
          example: 1003464,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              bad: z
                .array(
                  z
                    .object({
                      amount: z.string().min(1),
                      indented: z.boolean(),
                      name: z.string().min(1),
                      percentOfDailyNeeds: z.number(),
                    })
                    .openapi({ required: ['name', 'amount', 'indented', 'percentOfDailyNeeds'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              calories: z.string().min(1),
              carbs: z.string().min(1),
              fat: z.string().min(1),
              good: z
                .array(
                  z
                    .object({
                      amount: z.string().min(1),
                      indented: z.boolean(),
                      name: z.string().min(1),
                      percentOfDailyNeeds: z.number(),
                    })
                    .openapi({ required: ['amount', 'indented', 'percentOfDailyNeeds', 'name'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              protein: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['calories', 'carbs', 'fat', 'protein', 'bad', 'good'],
              'x-examples': {
                'example-1': {
                  bad: [
                    {
                      amount: '316',
                      indented: false,
                      name: 'Calories',
                      percentOfDailyNeeds: 15.84,
                    },
                    { amount: '12g', indented: false, name: 'Fat', percentOfDailyNeeds: 18.51 },
                    {
                      amount: '3g',
                      indented: true,
                      name: 'Saturated Fat',
                      percentOfDailyNeeds: 24.88,
                    },
                    {
                      amount: '49g',
                      indented: false,
                      name: 'Carbohydrates',
                      percentOfDailyNeeds: 16.44,
                    },
                    { amount: '21g', indented: true, name: 'Sugar', percentOfDailyNeeds: 24.42 },
                    {
                      amount: '1mg',
                      indented: false,
                      name: 'Cholesterol',
                      percentOfDailyNeeds: 0.63,
                    },
                    {
                      amount: '279mg',
                      indented: false,
                      name: 'Sodium',
                      percentOfDailyNeeds: 12.13,
                    },
                  ],
                  calories: '316',
                  carbs: '49g',
                  fat: '12g',
                  good: [
                    { amount: '3g', indented: false, name: 'Protein', percentOfDailyNeeds: 7.57 },
                    {
                      amount: '19µg',
                      indented: false,
                      name: 'Vitamin K',
                      percentOfDailyNeeds: 18.76,
                    },
                    {
                      amount: '0.37mg',
                      indented: false,
                      name: 'Manganese',
                      percentOfDailyNeeds: 18.69,
                    },
                    {
                      amount: '0.15mg',
                      indented: false,
                      name: 'Vitamin B1',
                      percentOfDailyNeeds: 10.02,
                    },
                    { amount: '2g', indented: false, name: 'Fiber', percentOfDailyNeeds: 9.97 },
                    { amount: '37µg', indented: false, name: 'Folate', percentOfDailyNeeds: 9.48 },
                    { amount: '1mg', indented: false, name: 'Iron', percentOfDailyNeeds: 7.62 },
                    {
                      amount: '1mg',
                      indented: false,
                      name: 'Vitamin B3',
                      percentOfDailyNeeds: 7.48,
                    },
                    {
                      amount: '0.12mg',
                      indented: false,
                      name: 'Vitamin B2',
                      percentOfDailyNeeds: 7.34,
                    },
                    {
                      amount: '5mg',
                      indented: false,
                      name: 'Vitamin C',
                      percentOfDailyNeeds: 7.26,
                    },
                    { amount: '4µg', indented: false, name: 'Selenium', percentOfDailyNeeds: 6.26 },
                    {
                      amount: '182mg',
                      indented: false,
                      name: 'Potassium',
                      percentOfDailyNeeds: 5.21,
                    },
                    { amount: '43mg', indented: false, name: 'Calcium', percentOfDailyNeeds: 4.38 },
                    {
                      amount: '42mg',
                      indented: false,
                      name: 'Phosphorus',
                      percentOfDailyNeeds: 4.24,
                    },
                    {
                      amount: '13mg',
                      indented: false,
                      name: 'Magnesium',
                      percentOfDailyNeeds: 3.43,
                    },
                    {
                      amount: '0.48mg',
                      indented: false,
                      name: 'Vitamin E',
                      percentOfDailyNeeds: 3.19,
                    },
                    {
                      amount: '0.06mg',
                      indented: false,
                      name: 'Copper',
                      percentOfDailyNeeds: 3.11,
                    },
                    {
                      amount: '0.26mg',
                      indented: false,
                      name: 'Vitamin B5',
                      percentOfDailyNeeds: 2.56,
                    },
                    {
                      amount: '0.05mg',
                      indented: false,
                      name: 'Vitamin B6',
                      percentOfDailyNeeds: 2.32,
                    },
                    { amount: '0.29mg', indented: false, name: 'Zinc', percentOfDailyNeeds: 1.96 },
                    {
                      amount: '76IU',
                      indented: false,
                      name: 'Vitamin A',
                      percentOfDailyNeeds: 1.53,
                    },
                  ],
                  protein: '3g',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                bad: [
                  { amount: '316', indented: false, name: 'Calories', percentOfDailyNeeds: 15.84 },
                  { amount: '12g', indented: false, name: 'Fat', percentOfDailyNeeds: 18.51 },
                  {
                    amount: '3g',
                    indented: true,
                    name: 'Saturated Fat',
                    percentOfDailyNeeds: 24.88,
                  },
                  {
                    amount: '49g',
                    indented: false,
                    name: 'Carbohydrates',
                    percentOfDailyNeeds: 16.44,
                  },
                  { amount: '21g', indented: true, name: 'Sugar', percentOfDailyNeeds: 24.42 },
                  {
                    amount: '1mg',
                    indented: false,
                    name: 'Cholesterol',
                    percentOfDailyNeeds: 0.63,
                  },
                  { amount: '279mg', indented: false, name: 'Sodium', percentOfDailyNeeds: 12.13 },
                ],
                calories: '316',
                carbs: '49g',
                fat: '12g',
                good: [
                  { amount: '3g', indented: false, name: 'Protein', percentOfDailyNeeds: 7.57 },
                  {
                    amount: '19µg',
                    indented: false,
                    name: 'Vitamin K',
                    percentOfDailyNeeds: 18.76,
                  },
                  {
                    amount: '0.37mg',
                    indented: false,
                    name: 'Manganese',
                    percentOfDailyNeeds: 18.69,
                  },
                  {
                    amount: '0.15mg',
                    indented: false,
                    name: 'Vitamin B1',
                    percentOfDailyNeeds: 10.02,
                  },
                  { amount: '2g', indented: false, name: 'Fiber', percentOfDailyNeeds: 9.97 },
                  { amount: '37µg', indented: false, name: 'Folate', percentOfDailyNeeds: 9.48 },
                  { amount: '1mg', indented: false, name: 'Iron', percentOfDailyNeeds: 7.62 },
                  { amount: '1mg', indented: false, name: 'Vitamin B3', percentOfDailyNeeds: 7.48 },
                  {
                    amount: '0.12mg',
                    indented: false,
                    name: 'Vitamin B2',
                    percentOfDailyNeeds: 7.34,
                  },
                  { amount: '5mg', indented: false, name: 'Vitamin C', percentOfDailyNeeds: 7.26 },
                  { amount: '4µg', indented: false, name: 'Selenium', percentOfDailyNeeds: 6.26 },
                  {
                    amount: '182mg',
                    indented: false,
                    name: 'Potassium',
                    percentOfDailyNeeds: 5.21,
                  },
                  { amount: '43mg', indented: false, name: 'Calcium', percentOfDailyNeeds: 4.38 },
                  {
                    amount: '42mg',
                    indented: false,
                    name: 'Phosphorus',
                    percentOfDailyNeeds: 4.24,
                  },
                  { amount: '13mg', indented: false, name: 'Magnesium', percentOfDailyNeeds: 3.43 },
                  {
                    amount: '0.48mg',
                    indented: false,
                    name: 'Vitamin E',
                    percentOfDailyNeeds: 3.19,
                  },
                  { amount: '0.06mg', indented: false, name: 'Copper', percentOfDailyNeeds: 3.11 },
                  {
                    amount: '0.26mg',
                    indented: false,
                    name: 'Vitamin B5',
                    percentOfDailyNeeds: 2.56,
                  },
                  {
                    amount: '0.05mg',
                    indented: false,
                    name: 'Vitamin B6',
                    percentOfDailyNeeds: 2.32,
                  },
                  { amount: '0.29mg', indented: false, name: 'Zinc', percentOfDailyNeeds: 1.96 },
                  { amount: '76IU', indented: false, name: 'Vitamin A', percentOfDailyNeeds: 1.53 },
                ],
                protein: '3g',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdNutritionWidgetPngRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/nutritionWidget.png',
  tags: ['recipes'],
  summary: 'Recipe Nutrition by ID Image',
  description: "Visualize a recipe's nutritional information as an image.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Nutrition-by-ID-Image',
  },
  operationId: 'recipeNutritionByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1082038, type: 'number' },
            style: 'simple',
          },
          example: 1082038,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdPriceBreakdownWidgetRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/priceBreakdownWidget',
  tags: ['recipes'],
  summary: 'Price Breakdown by ID Widget',
  description: "Visualize a recipe's price breakdown.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID-Widget',
  },
  operationId: 'visualizeRecipePriceBreakdownByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1082038, type: 'number' },
            style: 'simple',
          },
          example: 1082038,
        }),
    }),
    query: z.object({ defaultCss: DefaultCssParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdPriceBreakdownWidgetJsonRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/priceBreakdownWidget.json',
  tags: ['recipes'],
  summary: 'Price Breakdown by ID',
  description: "Get a recipe's price breakdown data.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID',
  },
  operationId: 'getRecipePriceBreakdownByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1003464, type: 'number' },
            style: 'simple',
          },
          example: 1003464,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              ingredients: z
                .array(
                  z
                    .object({
                      amount: z
                        .object({
                          metric: z
                            .object({ unit: z.string().min(0), value: z.number() })
                            .openapi({ required: ['unit', 'value'] }),
                          us: z
                            .object({ unit: z.string().min(0), value: z.number() })
                            .openapi({ required: ['unit', 'value'] }),
                        })
                        .exactOptional()
                        .openapi({ required: ['metric', 'us'] }),
                      image: z.string().min(1),
                      name: z.string().min(1),
                      price: z.number(),
                    })
                    .openapi({ required: ['image', 'name', 'price'] }),
                )
                .min(0)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                }),
              totalCost: z.number(),
              totalCostPerServing: z.number(),
            })
            .openapi({
              description: '',
              required: ['ingredients', 'totalCost', 'totalCostPerServing'],
              'x-examples': {
                'example-1': {
                  ingredients: [
                    {
                      amount: {
                        metric: { unit: 'g', value: 222 },
                        us: { unit: 'cups', value: 1.5 },
                      },
                      image: 'blueberries.jpg',
                      name: 'blueberries',
                      price: 174.43,
                    },
                    {
                      amount: { metric: { unit: '', value: 1 }, us: { unit: '', value: 1 } },
                      image: 'egg-white.jpg',
                      name: 'egg white',
                      price: 18.21,
                    },
                    {
                      amount: {
                        metric: { unit: 'Tbsps', value: 2 },
                        us: { unit: 'Tbsps', value: 2 },
                      },
                      image: 'flour.png',
                      name: 'flour',
                      price: 2,
                    },
                    {
                      amount: {
                        metric: { unit: 'g', value: 150 },
                        us: { unit: 'cup', value: 0.75 },
                      },
                      image: 'sugar-in-bowl.png',
                      name: 'granulated sugar',
                      price: 20.67,
                    },
                    {
                      amount: { metric: { unit: 'tsp', value: 1 }, us: { unit: 'tsp', value: 1 } },
                      image: 'lemon-juice.jpg',
                      name: 'fresh lemon juice',
                      price: 3.39,
                    },
                    {
                      amount: {
                        metric: { unit: 'pinch', value: 1 },
                        us: { unit: 'pinch', value: 1 },
                      },
                      image: 'ground-nutmeg.jpg',
                      name: 'nutmeg',
                      price: 7.39,
                    },
                    {
                      amount: { metric: { unit: '', value: 2 }, us: { unit: '', value: 2 } },
                      image: 'pie-crust.jpg',
                      name: 'pie dough round',
                      price: 364.29,
                    },
                    {
                      amount: {
                        metric: { unit: 'Tbsps', value: 2 },
                        us: { unit: 'Tbsps', value: 2 },
                      },
                      image: 'tapioca-pearls.png',
                      name: 'quick cooking tapioca',
                      price: 50.89,
                    },
                    {
                      amount: {
                        metric: { unit: 'g', value: 305 },
                        us: { unit: 'cups', value: 2.5 },
                      },
                      image: 'rhubarb.jpg',
                      name: 'trimmed rhubarb',
                      price: 185.18,
                    },
                    {
                      amount: {
                        metric: { unit: 'Tbsps', value: 0.5 },
                        us: { unit: 'Tbsps', value: 0.5 },
                      },
                      image: 'butter-sliced.jpg',
                      name: 'unsalted butter',
                      price: 6,
                    },
                  ],
                  totalCost: 832.45,
                  totalCostPerServing: 104.06,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                ingredients: [
                  {
                    amount: { metric: { unit: 'g', value: 222 }, us: { unit: 'cups', value: 1.5 } },
                    image: 'blueberries.jpg',
                    name: 'blueberries',
                    price: 174.43,
                  },
                  {
                    amount: { metric: { unit: '', value: 1 }, us: { unit: '', value: 1 } },
                    image: 'egg-white.jpg',
                    name: 'egg white',
                    price: 18.21,
                  },
                  {
                    amount: {
                      metric: { unit: 'Tbsps', value: 2 },
                      us: { unit: 'Tbsps', value: 2 },
                    },
                    image: 'flour.png',
                    name: 'flour',
                    price: 2,
                  },
                  {
                    amount: { metric: { unit: 'g', value: 150 }, us: { unit: 'cup', value: 0.75 } },
                    image: 'sugar-in-bowl.png',
                    name: 'granulated sugar',
                    price: 20.67,
                  },
                  {
                    amount: { metric: { unit: 'tsp', value: 1 }, us: { unit: 'tsp', value: 1 } },
                    image: 'lemon-juice.jpg',
                    name: 'fresh lemon juice',
                    price: 3.39,
                  },
                  {
                    amount: {
                      metric: { unit: 'pinch', value: 1 },
                      us: { unit: 'pinch', value: 1 },
                    },
                    image: 'ground-nutmeg.jpg',
                    name: 'nutmeg',
                    price: 7.39,
                  },
                  {
                    amount: { metric: { unit: '', value: 2 }, us: { unit: '', value: 2 } },
                    image: 'pie-crust.jpg',
                    name: 'pie dough round',
                    price: 364.29,
                  },
                  {
                    amount: {
                      metric: { unit: 'Tbsps', value: 2 },
                      us: { unit: 'Tbsps', value: 2 },
                    },
                    image: 'tapioca-pearls.png',
                    name: 'quick cooking tapioca',
                    price: 50.89,
                  },
                  {
                    amount: { metric: { unit: 'g', value: 305 }, us: { unit: 'cups', value: 2.5 } },
                    image: 'rhubarb.jpg',
                    name: 'trimmed rhubarb',
                    price: 185.18,
                  },
                  {
                    amount: {
                      metric: { unit: 'Tbsps', value: 0.5 },
                      us: { unit: 'Tbsps', value: 0.5 },
                    },
                    image: 'butter-sliced.jpg',
                    name: 'unsalted butter',
                    price: 6,
                  },
                ],
                totalCost: 832.45,
                totalCostPerServing: 104.06,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdPriceBreakdownWidgetPngRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/priceBreakdownWidget.png',
  tags: ['recipes'],
  summary: 'Price Breakdown by ID Image',
  description: "Visualize a recipe's price breakdown.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Price-Breakdown-by-ID-Image',
  },
  operationId: 'priceBreakdownByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 1082038, type: 'number' },
            style: 'simple',
          },
          example: 1082038,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdSimilarRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/similar',
  tags: ['recipes'],
  summary: 'Get Similar Recipes',
  description: 'Find recipes which are similar to the given one.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Get-Similar-Recipes',
  },
  operationId: 'getSimilarRecipes',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The id of the source recipe for which similar recipes should be found.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 715538, type: 'number' },
            style: 'simple',
          },
          example: 715538,
        }),
    }),
    query: z.object({ number: NumberParamsSchema, limitLicense: LimitLicenseParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.int(),
                  imageType: z.string().min(1),
                  readyInMinutes: z.int(),
                  servings: z.number(),
                  sourceUrl: z.string().min(1),
                  title: z.string().min(1),
                })
                .openapi({
                  required: ['id', 'title', 'imageType', 'readyInMinutes', 'servings', 'sourceUrl'],
                }),
            )
            .min(0)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .openapi({
              description: '',
              'x-examples': {
                'example-1': [
                  {
                    id: 209128,
                    imageType: 'jpg',
                    readyInMinutes: 45,
                    servings: 4,
                    sourceUrl:
                      'http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html',
                    title: 'Dinner Tonight: Grilled Romesco-Style Pork',
                  },
                  {
                    id: 31868,
                    imageType: 'jpg',
                    readyInMinutes: 45,
                    servings: 2,
                    sourceUrl:
                      'http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html',
                    title: 'Dinner Tonight: Chickpea Bruschetta',
                  },
                ],
              },
            }),
          examples: {
            'example-1': {
              value: [
                {
                  id: 209128,
                  imageType: 'jpg',
                  readyInMinutes: 45,
                  servings: 4,
                  sourceUrl:
                    'http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html',
                  title: 'Dinner Tonight: Grilled Romesco-Style Pork',
                },
                {
                  id: 31868,
                  imageType: 'jpg',
                  readyInMinutes: 45,
                  servings: 2,
                  sourceUrl:
                    'http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html',
                  title: 'Dinner Tonight: Chickpea Bruschetta',
                },
              ],
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdSummaryRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/summary',
  tags: ['recipes'],
  summary: 'Summarize Recipe',
  description:
    'Automatically generate a short description that summarizes key information about the recipe.',
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Summarize-Recipe',
  },
  operationId: 'summarizeRecipe',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 4632, type: 'number' },
            style: 'simple',
          },
          example: 4632,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.int(), summary: z.string().min(1), title: z.string().min(1) })
            .openapi({
              description: '',
              required: ['id', 'summary', 'title'],
              'x-examples': {
                'example-1': {
                  id: 4632,
                  summary:
                    "The recipe Soy-and-Ginger-Glazed Salmon with Udon Noodles can be made  <b>in approximately 1 hour and 35 minutes </b>. One portion of this dish contains about  <b>48g of protein </b>,  <b>17g of fat </b>, and a total of  <b>552 calories </b>. This recipe serves 4. For  <b>$5.91 per serving </b>, this recipe  <b>covers 47% </b> of your daily requirements of vitamins and minerals. It works well as a main course. 1 person has tried and liked this recipe. It is brought to you by Food and Wine. If you have fresh ginger, udon noodles, salmon fillets, and a few other ingredients on hand, you can make it. It is a good option if you're following a  <b>dairy free and pescatarian </b> diet. All things considered, we decided this recipe  <b>deserves a spoonacular score of 92% </b>. This score is great. If you like this recipe, take a look at these similar recipes: Salmon With Soy-ginger Noodles, Ginger-Soy Salmon With Soba Noodles, and Soy & ginger salmon with soba noodles.",
                  title: 'Soy-and-Ginger-Glazed Salmon with Udon Noodles',
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                id: 4632,
                summary:
                  "The recipe Soy-and-Ginger-Glazed Salmon with Udon Noodles can be made  <b>in approximately 1 hour and 35 minutes </b>. One portion of this dish contains about  <b>48g of protein </b>,  <b>17g of fat </b>, and a total of  <b>552 calories </b>. This recipe serves 4. For  <b>$5.91 per serving </b>, this recipe  <b>covers 47% </b> of your daily requirements of vitamins and minerals. It works well as a main course. 1 person has tried and liked this recipe. It is brought to you by Food and Wine. If you have fresh ginger, udon noodles, salmon fillets, and a few other ingredients on hand, you can make it. It is a good option if you're following a  <b>dairy free and pescatarian </b> diet. All things considered, we decided this recipe  <b>deserves a spoonacular score of 92% </b>. This score is great. If you like this recipe, take a look at these similar recipes: Salmon With Soy-ginger Noodles, Ginger-Soy Salmon With Soba Noodles, and Soy & ginger salmon with soba noodles.",
                title: 'Soy-and-Ginger-Glazed Salmon with Udon Noodles',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdTasteWidgetRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/tasteWidget',
  tags: ['recipes'],
  summary: 'Recipe Taste by ID Widget',
  description:
    "Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Taste-by-ID-Widget',
  },
  operationId: 'visualizeRecipeTasteByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 69095, type: 'number' },
            style: 'simple',
          },
          example: 69095,
        }),
    }),
    query: z.object({
      normalize: z
        .stringbool()
        .pipe(z.union([z.literal(true), z.literal(false)]))
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to normalize to the strongest taste.',
            in: 'query',
            name: 'normalize',
            schema: { default: true, enum: [true, false], example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
      rgb: RgbParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'text/html': { schema: z.string() } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdTasteWidgetJsonRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/tasteWidget.json',
  tags: ['recipes'],
  summary: 'Taste by ID',
  description:
    "Get a recipe's taste. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Taste-by-ID',
  },
  operationId: 'getRecipeTasteByID',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 69095, type: 'number' },
            style: 'simple',
          },
          example: 69095,
        }),
    }),
    query: z.object({
      normalize: z
        .stringbool()
        .pipe(z.union([z.literal(false), z.literal(true)]))
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Normalize to the strongest taste.',
            in: 'query',
            name: 'normalize',
            schema: { default: true, enum: [false, true], example: true, type: 'boolean' },
            required: false,
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              bitterness: z.number(),
              fattiness: z.number(),
              saltiness: z.number(),
              savoriness: z.number(),
              sourness: z.number(),
              spiciness: z.number(),
              sweetness: z.number(),
            })
            .openapi({
              description: '',
              required: [
                'sweetness',
                'saltiness',
                'sourness',
                'bitterness',
                'savoriness',
                'fattiness',
                'spiciness',
              ],
              'x-examples': {
                'example-1': {
                  bitterness: 12.38,
                  fattiness: 100,
                  saltiness: 26.74,
                  savoriness: 11.8,
                  sourness: 6.22,
                  spiciness: 0,
                  sweetness: 28.79,
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                bitterness: 12.38,
                fattiness: 100,
                saltiness: 26.74,
                savoriness: 11.8,
                sourness: 6.22,
                spiciness: 0,
                sweetness: 28.79,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getRecipesIdTasteWidgetPngRoute = createRoute({
  method: 'get',
  path: '/recipes/{id}/tasteWidget.png',
  tags: ['recipes'],
  summary: 'Recipe Taste by ID Image',
  description:
    "Get a recipe's taste as an image. The tastes supported are sweet, salty, sour, bitter, savory, and fatty.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Recipe-Taste-by-ID-Image',
  },
  operationId: 'recipeTasteByIDImage',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'The recipe id.',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: 69095, type: 'number' },
            style: 'simple',
          },
          example: 69095,
        }),
    }),
    query: z.object({
      normalize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Normalize to the strongest taste.',
            explode: false,
            in: 'query',
            name: 'normalize',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'form',
          },
          example: false,
        }),
      rgb: RgbParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'image/png': { schema: z.object({}) } },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postUsersConnectRoute = createRoute({
  method: 'post',
  path: '/users/connect',
  tags: ['meal planning'],
  summary: 'Connect User',
  description:
    "In order to call user-specific endpoints, you need to connect your app's users to spoonacular users.",
  externalDocs: {
    description: 'Read entire docs',
    url: 'https://spoonacular.com/food-api/docs#Connect-User',
  },
  operationId: 'connectUser',
  request: {
    body: {
      content: {
        '': { schema: z.object({}) },
        'application/json': {
          schema: z
            .object({
              email: z.string().min(1),
              firstName: z.string().min(1),
              lastName: z.string().min(1),
              username: z.string().min(1),
            })
            .openapi({
              description: '',
              required: ['username', 'firstName', 'lastName', 'email'],
              'x-examples': {
                'example-1': {
                  email: "your user's email",
                  firstName: "your user's first name",
                  lastName: "your user's last name",
                  username: "your user's name",
                },
              },
            }),
          examples: {
            'example-1': {
              value: {
                email: "your user's email",
                firstName: "your user's first name",
                lastName: "your user's last name",
                username: "your user's name",
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({ hash: z.string().min(1), username: z.string().min(1) })
            .openapi({
              description: '',
              required: ['username', 'hash'],
              'x-examples': {
                'example-1': { hash: 'q572587bq2405724q05', username: 'api_123_user' },
              },
            }),
          examples: {
            'example-1': { value: { hash: 'q572587bq2405724q05', username: 'api_123_user' } },
          },
        },
      },
      headers: z.object({}),
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})
