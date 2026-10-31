import { createRoute, z } from '@hono/zod-openapi'

export const getHypernymsRoute = createRoute({
  method: 'get',
  path: '/hypernyms',
  tags: ['Language Model Direct Access'],
  summary: 'List hypernyms',
  description:
    'Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".',
  operationId: 'listHypernyms',
  request: {
    query: z.object({
      family: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) a numeric identifier of the family',
            in: 'query',
            name: 'family',
            schema: { example: '{family_id}', type: 'string' },
            required: false,
          },
          example: '{family_id}',
        }),
      maxLevel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) maximum distance from the family',
            in: 'query',
            name: 'maxLevel',
            schema: { example: '{max_number_of_levels}', type: 'string' },
            required: false,
          },
          example: '{max_number_of_levels}',
        }),
    }),
    headers: z.object({
      'Ocp-Apim-Subscription-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '{{apiKeyDescription}}',
            in: 'header',
            name: 'Ocp-Apim-Subscription-Key',
            schema: { example: '{{apiKey}}', type: 'string' },
            required: false,
          },
          example: '{{apiKey}}',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Hypernyms of Darth Vader',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .array(
                  z
                    .union([
                      z.number().openapi({ example: 68126 }),
                      z
                        .string()
                        .openapi({
                          example: 'the principal bad character in a film or work of fiction',
                        }),
                    ])
                    .openapi({ example: 68126 }),
                )
                .openapi({
                  example: [68126, 1, 'the principal bad character in a film or work of fiction'],
                }),
            )
            .openapi({
              example: [
                [68126, 1, 'the principal bad character in a film or work of fiction'],
                [155184, 1, 'a member of the Jedi order in the Star Wars franchise'],
                [
                  61305,
                  2,
                  'an imaginary person represented in a work of fiction (play or film or story).   \r\n E.g. "she is the main character in the novel"',
                ],
                [62644, 2, 'a person who does harm to others'],
                [10275, 3, 'a human being.   \r\n E.g. "there was too much for one person to do"'],
                [
                  60709,
                  3,
                  'a creature of the imagination; a person that exists only in legends or myths or fiction',
                ],
                [61497, 3, 'a person who for some reason is not wanted or welcome'],
                [
                  10268,
                  4,
                  'a living thing that has (or can develop) the ability to act or function independently',
                ],
                [10267, 5, 'a living (or once living) entity'],
                [10278, 6, 'an object occurring naturally; not made by man'],
                [
                  10265,
                  7,
                  'a thing; a tangible and visible entity; an entity that can cast a shadow.   \r\n E.g. "it was full of rackets, balls and other objects"',
                ],
                [10258, 8, 'an entity that has physical existence'],
              ],
            }),
          examples: {
            'Hypernyms of Darth Vader': {
              value: [
                [68126, 1, 'the principal bad character in a film or work of fiction'],
                [155184, 1, 'a member of the Jedi order in the Star Wars franchise'],
                [
                  61305,
                  2,
                  'an imaginary person represented in a work of fiction (play or film or story).   \r\n E.g. "she is the main character in the novel"',
                ],
                [62644, 2, 'a person who does harm to others'],
                [10275, 3, 'a human being.   \r\n E.g. "there was too much for one person to do"'],
                [
                  60709,
                  3,
                  'a creature of the imagination; a person that exists only in legends or myths or fiction',
                ],
                [61497, 3, 'a person who for some reason is not wanted or welcome'],
                [
                  10268,
                  4,
                  'a living thing that has (or can develop) the ability to act or function independently',
                ],
                [10267, 5, 'a living (or once living) entity'],
                [10278, 6, 'an object occurring naturally; not made by man'],
                [
                  10265,
                  7,
                  'a thing; a tangible and visible entity; an entity that can cast a shadow.   \r\n E.g. "it was full of rackets, balls and other objects"',
                ],
                [10258, 8, 'an entity that has physical existence'],
              ],
            },
          },
        },
      },
    },
  },
})

export const getHyponymsRoute = createRoute({
  method: 'get',
  path: '/hyponyms',
  tags: ['Language Model Direct Access'],
  summary: 'List hyponyms',
  description:
    'Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".',
  operationId: 'listHyponyms',
  request: {
    query: z.object({
      family: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) a numeric identifier of the family',
            in: 'query',
            name: 'family',
            schema: { example: '{family_id}', type: 'string' },
            required: false,
          },
          example: '{family_id}',
        }),
      maxLevel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) maximum distance from the family',
            in: 'query',
            name: 'maxLevel',
            schema: { example: '{max_number_of_levels}', type: 'string' },
            required: false,
          },
          example: '{max_number_of_levels}',
        }),
    }),
    headers: z.object({
      'Ocp-Apim-Subscription-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '{{apiKeyDescription}}',
            in: 'header',
            name: 'Ocp-Apim-Subscription-Key',
            schema: { example: '{{apiKey}}', type: 'string' },
            required: false,
          },
          example: '{{apiKey}}',
        }),
    }),
  },
  responses: { 200: { description: 'response', content: {} } },
})

export const getInflectionsRoute = createRoute({
  method: 'get',
  path: '/inflections',
  tags: ['Language Model Direct Access'],
  summary: 'List inflected forms',
  description: 'List inflected forms',
  operationId: 'listInflectedForms',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) The language code',
            in: 'query',
            name: 'language',
            schema: { example: '{language_code}', type: 'string' },
            required: false,
          },
          example: '{language_code}',
        }),
      lexeme: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) The lexeme to inspect',
            in: 'query',
            name: 'lexeme',
            schema: { example: '{lexeme_id}', type: 'string' },
            required: false,
          },
          example: '{lexeme_id}',
        }),
      family: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) The family to inspect',
            in: 'query',
            name: 'family',
            schema: { example: '{family_id}', type: 'string' },
            required: false,
          },
          example: '{family_id}',
        }),
    }),
    headers: z.object({
      'Ocp-Apim-Subscription-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '{{apiKeyDescription}}',
            in: 'header',
            name: 'Ocp-Apim-Subscription-Key',
            schema: { example: '{{apiKey}}', type: 'string' },
            required: false,
          },
          example: '{{apiKey}}',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Inflected forms of "United States" in Russian',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  features: z
                    .array(
                      z
                        .object({
                          index: z.number().exactOptional().openapi({ example: 9 }),
                          value: z.string().exactOptional().openapi({ example: '3' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { index: 9, value: '3' },
                        { index: 15, value: 'NOM' },
                      ],
                    }),
                  isLemma: z.boolean().exactOptional().openapi({ example: true }),
                  text: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Соединённые Штаты Америки' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  features: [
                    { index: 9, value: '3' },
                    { index: 15, value: 'NOM' },
                  ],
                  isLemma: true,
                  text: 'Соединённые Штаты Америки',
                },
                {
                  features: [
                    { index: 15, value: 'GEN' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенных Штатов Америки',
                },
                {
                  features: [
                    { index: 15, value: 'INST' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенными Штатами Америки',
                },
                {
                  features: [
                    { index: 15, value: 'DAT' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенным Штатам Америки',
                },
                {
                  features: [
                    { index: 15, value: 'PREP' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенных Штатах Америки',
                },
                {
                  features: [
                    { index: 24, value: 'THNG' },
                    { index: 2, value: '1' },
                    { index: 9, value: '3' },
                    { index: 7, value: 'NA' },
                    { index: 15, value: 'ACC' },
                  ],
                  text: 'Соединённые Штаты Америки',
                },
              ],
            }),
          examples: {
            'Inflected forms of "United States" in Russian': {
              value: [
                {
                  features: [
                    { index: 9, value: '3' },
                    { index: 15, value: 'NOM' },
                  ],
                  isLemma: true,
                  text: 'Соединённые Штаты Америки',
                },
                {
                  features: [
                    { index: 15, value: 'GEN' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенных Штатов Америки',
                },
                {
                  features: [
                    { index: 15, value: 'INST' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенными Штатами Америки',
                },
                {
                  features: [
                    { index: 15, value: 'DAT' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенным Штатам Америки',
                },
                {
                  features: [
                    { index: 15, value: 'PREP' },
                    { index: 9, value: '3' },
                  ],
                  text: 'Соединенных Штатах Америки',
                },
                {
                  features: [
                    { index: 24, value: 'THNG' },
                    { index: 2, value: '1' },
                    { index: 9, value: '3' },
                    { index: 7, value: 'NA' },
                    { index: 15, value: 'ACC' },
                  ],
                  text: 'Соединённые Штаты Америки',
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getLmFamilyRoute = createRoute({
  method: 'get',
  path: '/lm/family',
  tags: ['Language Model Direct Access'],
  summary: 'Get family details',
  description: 'Fetches and outputs metadata for a family from the Tisane language models.',
  operationId: 'getFamilyDetails',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) a numeric identifier of the family',
            in: 'query',
            name: 'id',
            schema: { example: '{family_id}', type: 'string' },
            required: false,
          },
          example: '{family_id}',
        }),
    }),
    headers: z.object({
      'Ocp-Apim-Subscription-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '{{apiKeyDescription}}',
            in: 'header',
            name: 'Ocp-Apim-Subscription-Key',
            schema: { example: '{{apiKey}}', type: 'string' },
            required: false,
          },
          example: '{{apiKey}}',
        }),
    }),
  },
  responses: {
    200: {
      description: "Details of the family for 'plot twist'",
      content: {
        'application/json': {
          schema: z
            .object({
              definition: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'a literary technique that introduces a radical change in the direction or expected outcome of the plot in a work of fiction',
                }),
              description: z.string().exactOptional().openapi({ example: 'plot twist' }),
              hypernyms: z
                .array(
                  z.array(z.number().openapi({ example: 49398 })).openapi({ example: [49398, 1] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    [49398, 1],
                    [50078, 1],
                    [49393, 2],
                    [50079, 2],
                    [49327, 3],
                    [10295, 4],
                  ],
                }),
              permId: z.string().exactOptional().openapi({ example: '' }),
              requestId: z
                .string()
                .exactOptional()
                .openapi({ example: 'd67becb4-bf42-4ab8-854d-9442d956e43b' }),
              wikidata: z.string().exactOptional().openapi({ example: 'Q1321123' }),
              wordnet30: z.string().exactOptional().openapi({ example: '' }),
            })
            .openapi({ required: [] }),
          examples: {
            "Details of the family for 'plot twist'": {
              value: {
                definition:
                  'a literary technique that introduces a radical change in the direction or expected outcome of the plot in a work of fiction',
                description: 'plot twist',
                hypernyms: [
                  [49398, 1],
                  [50078, 1],
                  [49393, 2],
                  [50079, 2],
                  [49327, 3],
                  [10295, 4],
                ],
                permId: '',
                requestId: 'd67becb4-bf42-4ab8-854d-9442d956e43b',
                wikidata: 'Q1321123',
                wordnet30: '',
              },
            },
          },
        },
      },
    },
  },
})

export const getSensesRoute = createRoute({
  method: 'get',
  path: '/senses',
  tags: ['Language Model Direct Access'],
  summary: 'List word senses',
  description: 'Fetches and outputs all senses related to a word.',
  operationId: 'listWordSenses',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '(Required) a standard culture code (ISO-639 language code with an optional country extension)',
            in: 'query',
            name: 'language',
            schema: { example: '{language_code}', type: 'string' },
            required: false,
          },
          example: '{language_code}',
        }),
      word: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) the word to inspect',
            in: 'query',
            name: 'word',
            schema: { example: '{word}', type: 'string' },
            required: false,
          },
          example: '{word}',
        }),
    }),
    headers: z.object({
      'Ocp-Apim-Subscription-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '{{apiKeyDescription}}',
            in: 'header',
            name: 'Ocp-Apim-Subscription-Key',
            schema: { example: '{{apiKey}}', type: 'string' },
            required: false,
          },
          example: '{{apiKey}}',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Interpretations of "couscous"',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  families: z
                    .array(
                      z
                        .object({
                          Key: z.number().exactOptional().openapi({ example: 51804 }),
                          Value: z.object({}).exactOptional(),
                          definition: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example:
                                'a pasta made in northern Africa of crushed and steamed semolina',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        {
                          Key: 51804,
                          Value: {},
                          definition:
                            'a pasta made in northern Africa of crushed and steamed semolina',
                        },
                      ],
                    }),
                  features: z
                    .array(
                      z
                        .object({
                          index: z.number().exactOptional().openapi({ example: 16 }),
                          type: z.string().exactOptional().openapi({ example: 'Semantics' }),
                          value: z.string().exactOptional().openapi({ example: '1' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        { index: 16, value: '1' },
                        { index: 22, type: 'Semantics', value: 'FOOD' },
                        { index: 4, value: 'REG' },
                        { index: 3, value: 'YES' },
                        { index: 26, value: 'PH' },
                        { index: 24, value: 'THNG' },
                        { index: 23, value: 'THNG' },
                        { index: 22, value: 'NO' },
                        { index: 1, value: 'NOUN' },
                        { index: 2, value: '1' },
                        { index: 4, type: 'Style', value: 'LAT' },
                        { index: 34, value: 'ALL' },
                        { index: 33, value: 'ALL' },
                        { index: 32, value: 'BEF' },
                        { index: 15, value: 'ALL' },
                        { index: 14, value: 'NPA' },
                        { index: 9, value: '3' },
                        { index: 5, value: 'ALL' },
                      ],
                    }),
                  frequency: z.number().exactOptional().openapi({ example: 1 }),
                  isLemma: z.boolean().exactOptional().openapi({ example: true }),
                  legacyMapId: z.number().exactOptional().openapi({ example: 58076 }),
                  lemma: z.string().exactOptional().openapi({ example: 'couscous' }),
                  lexemeId: z.number().exactOptional().openapi({ example: 28041 }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  families: [
                    {
                      Key: 51804,
                      Value: {},
                      definition: 'a pasta made in northern Africa of crushed and steamed semolina',
                    },
                  ],
                  features: [
                    { index: 16, value: '1' },
                    { index: 22, type: 'Semantics', value: 'FOOD' },
                    { index: 4, value: 'REG' },
                    { index: 3, value: 'YES' },
                    { index: 26, value: 'PH' },
                    { index: 24, value: 'THNG' },
                    { index: 23, value: 'THNG' },
                    { index: 22, value: 'NO' },
                    { index: 1, value: 'NOUN' },
                    { index: 2, value: '1' },
                    { index: 4, type: 'Style', value: 'LAT' },
                    { index: 34, value: 'ALL' },
                    { index: 33, value: 'ALL' },
                    { index: 32, value: 'BEF' },
                    { index: 15, value: 'ALL' },
                    { index: 14, value: 'NPA' },
                    { index: 9, value: '3' },
                    { index: 5, value: 'ALL' },
                  ],
                  frequency: 1,
                  isLemma: true,
                  legacyMapId: 58076,
                  lemma: 'couscous',
                  lexemeId: 28041,
                },
                {
                  families: [
                    {
                      Key: 53366,
                      Value: {},
                      definition:
                        'a spicy dish that originated in northern Africa; consists of pasta steamed with a meat and vegetable stew',
                    },
                  ],
                  features: [
                    { index: 16, value: '1' },
                    { index: 22, type: 'Semantics', value: 'FOOD' },
                    { index: 4, value: 'REG' },
                    { index: 3, value: 'YES' },
                    { index: 26, value: 'PH' },
                    { index: 24, value: 'THNG' },
                    { index: 23, value: 'THNG' },
                    { index: 22, value: 'NO' },
                    { index: 1, value: 'NOUN' },
                    { index: 2, value: '1' },
                    { index: 34, value: 'ALL' },
                    { index: 33, value: 'ALL' },
                    { index: 32, value: 'BEF' },
                    { index: 15, value: 'ALL' },
                    { index: 14, value: 'NPA' },
                    { index: 9, value: '3' },
                    { index: 5, value: 'ALL' },
                  ],
                  frequency: 1,
                  isLemma: true,
                  legacyMapId: 58076,
                  lemma: 'couscous',
                  lexemeId: 28041,
                },
              ],
            }),
          examples: {
            'Interpretations of "couscous"': {
              value: [
                {
                  families: [
                    {
                      Key: 51804,
                      Value: {},
                      definition: 'a pasta made in northern Africa of crushed and steamed semolina',
                    },
                  ],
                  features: [
                    { index: 16, value: '1' },
                    { index: 22, type: 'Semantics', value: 'FOOD' },
                    { index: 4, value: 'REG' },
                    { index: 3, value: 'YES' },
                    { index: 26, value: 'PH' },
                    { index: 24, value: 'THNG' },
                    { index: 23, value: 'THNG' },
                    { index: 22, value: 'NO' },
                    { index: 1, value: 'NOUN' },
                    { index: 2, value: '1' },
                    { index: 4, type: 'Style', value: 'LAT' },
                    { index: 34, value: 'ALL' },
                    { index: 33, value: 'ALL' },
                    { index: 32, value: 'BEF' },
                    { index: 15, value: 'ALL' },
                    { index: 14, value: 'NPA' },
                    { index: 9, value: '3' },
                    { index: 5, value: 'ALL' },
                  ],
                  frequency: 1,
                  isLemma: true,
                  legacyMapId: 58076,
                  lemma: 'couscous',
                  lexemeId: 28041,
                },
                {
                  families: [
                    {
                      Key: 53366,
                      Value: {},
                      definition:
                        'a spicy dish that originated in northern Africa; consists of pasta steamed with a meat and vegetable stew',
                    },
                  ],
                  features: [
                    { index: 16, value: '1' },
                    { index: 22, type: 'Semantics', value: 'FOOD' },
                    { index: 4, value: 'REG' },
                    { index: 3, value: 'YES' },
                    { index: 26, value: 'PH' },
                    { index: 24, value: 'THNG' },
                    { index: 23, value: 'THNG' },
                    { index: 22, value: 'NO' },
                    { index: 1, value: 'NOUN' },
                    { index: 2, value: '1' },
                    { index: 34, value: 'ALL' },
                    { index: 33, value: 'ALL' },
                    { index: 32, value: 'BEF' },
                    { index: 15, value: 'ALL' },
                    { index: 14, value: 'NPA' },
                    { index: 9, value: '3' },
                    { index: 5, value: 'ALL' },
                  ],
                  frequency: 1,
                  isLemma: true,
                  legacyMapId: 58076,
                  lemma: 'couscous',
                  lexemeId: 28041,
                },
              ],
            },
          },
        },
      },
    },
  },
})

export const getValuesRoute = createRoute({
  method: 'get',
  path: '/values',
  tags: ['Language Model Direct Access'],
  summary: 'List feature values',
  description:
    'Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.\n\nReturns the values as a JSON array of strings.',
  operationId: 'listFeatureValues',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) Language code',
            in: 'query',
            name: 'language',
            schema: { example: '{language_code}', type: 'string' },
            required: false,
          },
          example: '{language_code}',
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) Feature type',
            in: 'query',
            name: 'type',
            schema: { example: '{Grammar/Style/Semantics}', type: 'string' },
            required: false,
          },
          example: '{Grammar/Style/Semantics}',
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '(Required) Feature list name (localized)',
            in: 'query',
            name: 'description',
            schema: { example: '{feature_list_name}', type: 'string' },
            required: false,
          },
          example: '{feature_list_name}',
        }),
    }),
    headers: z.object({
      'Ocp-Apim-Subscription-Key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '{{apiKeyDescription}}',
            in: 'header',
            name: 'Ocp-Apim-Subscription-Key',
            schema: { example: '{{apiKey}}', type: 'string' },
            required: false,
          },
          example: '{{apiKey}}',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List entity subtypes',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ example: 'ada' }))
            .openapi({
              example: [
                'ada',
                'american_express',
                'authorities',
                'bcg',
                'bitcoin',
                'dash',
                'diners_club',
                'darknet',
                'discovery',
                'ethereum',
                'extremist',
                'facebook',
                'fictional_character',
                'hexadecimal',
                'http',
                'iban',
                'important_person',
                'instagram',
                'intelligence_agency',
                'jcb',
                'law_enforcement_agency',
                'litecoin',
                'mastercard',
                'md5',
                'media',
                'monero',
                'monero_payment_id',
                'maestro',
                'ordinal',
                'piracy',
                'pnr',
                'sha-1',
                'spiritual_being',
                'tor',
                'twitter',
                'unix',
                'unionpay',
                'v4',
                'v6',
                'visa',
                'weibo',
                'windows',
                'zcash',
              ],
            }),
          examples: {
            'List entity subtypes': {
              value: [
                'ada',
                'american_express',
                'authorities',
                'bcg',
                'bitcoin',
                'dash',
                'diners_club',
                'darknet',
                'discovery',
                'ethereum',
                'extremist',
                'facebook',
                'fictional_character',
                'hexadecimal',
                'http',
                'iban',
                'important_person',
                'instagram',
                'intelligence_agency',
                'jcb',
                'law_enforcement_agency',
                'litecoin',
                'mastercard',
                'md5',
                'media',
                'monero',
                'monero_payment_id',
                'maestro',
                'ordinal',
                'piracy',
                'pnr',
                'sha-1',
                'spiritual_being',
                'tor',
                'twitter',
                'unix',
                'unionpay',
                'v4',
                'v6',
                'visa',
                'weibo',
                'windows',
                'zcash',
              ],
            },
          },
        },
      },
    },
  },
})
