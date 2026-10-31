import { createRoute, z } from '@hono/zod-openapi'

const CompactIconV3ItemSchema = z
  .object({
    category: z.string().exactOptional(),
    common_icon_id: z
      .number()
      .openapi({
        description:
          'identifier for group of the same icons in different styles; i.e. id of all "home" icons',
      }),
    created: z.string().openapi({ description: 'date (ISO8601 format) of icon was published' }),
    features: z
      .object({
        bitmap: z
          .number()
          .openapi({
            description: '"Could user use images in bitmap / raster formats in any size ?"',
          }),
        nolink: z
          .number()
          .openapi({ description: '"Could user use images without any link to Icons8 ?"' }),
        vector: z.number().openapi({ description: '"Could user use images in vector formats ?"' }),
      })
      .openapi({
        description:
          'internal service attribute; internal information about icon features; private; depend on the rights of the current user',
        required: ['bitmap', 'vector', 'nolink'],
      }),
    id: z.number().openapi({ description: 'unique icon identifier' }),
    name: z.string().openapi({ description: 'icon name' }),
    platform_code: z.string().openapi({ description: 'icon style' }),
    share: z
      .object({
        png: z
          .array(z.any())
          .exactOptional()
          .openapi({ description: 'some raster images for share the icon' }),
        url: z.string().exactOptional().openapi({ description: 'short URL to use in twitter' }),
      })
      .exactOptional()
      .openapi({
        description: 'internal service attribute; some links to spread the world',
        required: [],
      }),
    subcategory: z
      .object({ api_code: z.string(), name: z.string() })
      .exactOptional()
      .openapi({ required: ['name', 'api_code'] }),
    svg: z.string().openapi({ description: 'plain SVG content of icon' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"',
      }),
    vector: z
      .object({
        eps: z
          .string()
          .exactOptional()
          .openapi({ description: 'absolute URL to file in EPS format' }),
        pdf: z
          .string()
          .exactOptional()
          .openapi({ description: 'absolute URL to file in PDF format' }),
        'svg-editable': z
          .string()
          .exactOptional()
          .openapi({ description: 'absolute URL to original SVG file' }),
        'svg-simplified': z
          .string()
          .exactOptional()
          .openapi({ description: 'absolute URL to compressed and simplified SVG file' }),
      })
      .exactOptional()
      .openapi({
        description:
          "URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only",
        required: [],
      }),
  })
  .openapi({
    required: ['id', 'name', 'platform_code', 'created', 'common_icon_id', 'svg', 'features'],
  })
  .openapi('CompactIconV3Item')

type IconV3ItemType = z.infer<typeof CompactIconV3ItemSchema> & {
  category?: string
  common_icon_id: number
  created: string
  features: { bitmap: number; nolink: number; vector: number }
  id: number
  name: string
  platform_code: string
  share?: { png?: unknown[]; url?: string }
  subcategory?: { api_code: string; name: string }
  svg: string
  url?: string
  vector?: { eps?: string; pdf?: string; 'svg-editable'?: string; 'svg-simplified'?: string }
}

const AuthArgumentSchema = z
  .object({ hash: z.string().openapi({ description: 'Authorization hash' }) })
  .openapi({ required: ['hash'] })
  .openapi('AuthArgument')

const CategoryV3ItemSchema = z
  .object({
    category_code: z.string().exactOptional(),
    category_name: z.string().exactOptional(),
    subcategory: z.array(z.any()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CategoryV3Item')

const CollectionWebFontTaskArgumentsSchema = z
  .object({
    arguments: z
      .object({
        collection: z.string().openapi({ description: 'collection identifier' }),
        css_prefix: z
          .string()
          .exactOptional()
          .openapi({ description: 'prefix for CSS rules, used to generate LESS/SCSS' }),
        css_rules_case: z
          .enum(['lowercase', 'as_is'])
          .exactOptional()
          .openapi({ description: 'glyph names conversion rule' }),
        css_selector: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'template for glyph selector; placeholder {{glyph}} will be replaced with glyph names',
          }),
        font_name: z.string().openapi({ description: 'name of iconic webfont' }),
      })
      .exactOptional()
      .openapi({ required: ['collection', 'font_name'] }),
  })
  .openapi({ required: [] })
  .openapi('CollectionWebFontTaskArguments')

const CompactCategoryV3ItemSchema = z
  .object({ api_code: z.string(), name: z.string() })
  .openapi({ required: ['name', 'api_code'] })
  .openapi('CompactCategoryV3Item')

const IconV3ItemSchema: z.ZodType<IconV3ItemType> = z
  .lazy(() =>
    CompactIconV3ItemSchema.and(
      z
        .object({
          category: z.string().exactOptional(),
          common_icon_id: z
            .number()
            .openapi({
              description:
                'identifier for group of the same icons in different styles; i.e. id of all "home" icons',
            }),
          created: z
            .string()
            .openapi({ description: 'date (ISO8601 format) of icon was published' }),
          features: z
            .object({
              bitmap: z
                .number()
                .openapi({
                  description: '"Could user use images in bitmap / raster formats in any size ?"',
                }),
              nolink: z
                .number()
                .openapi({ description: '"Could user use images without any link to Icons8 ?"' }),
              vector: z
                .number()
                .openapi({ description: '"Could user use images in vector formats ?"' }),
            })
            .openapi({
              description:
                'internal service attribute; internal information about icon features; private; depend on the rights of the current user',
              required: ['bitmap', 'vector', 'nolink'],
            }),
          id: z.number().openapi({ description: 'unique icon identifier' }),
          name: z.string().openapi({ description: 'icon name' }),
          platform_code: z.string().openapi({ description: 'icon style' }),
          share: z
            .object({
              png: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'some raster images for share the icon' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ description: 'short URL to use in twitter' }),
            })
            .exactOptional()
            .openapi({
              description: 'internal service attribute; some links to spread the world',
              required: [],
            }),
          subcategory: z
            .object({ api_code: z.string(), name: z.string() })
            .exactOptional()
            .openapi({ required: ['name', 'api_code'] }),
          svg: z.string().openapi({ description: 'plain SVG content of icon' }),
          url: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"',
            }),
          vector: z
            .object({
              eps: z
                .string()
                .exactOptional()
                .openapi({ description: 'absolute URL to file in EPS format' }),
              pdf: z
                .string()
                .exactOptional()
                .openapi({ description: 'absolute URL to file in PDF format' }),
              'svg-editable': z
                .string()
                .exactOptional()
                .openapi({ description: 'absolute URL to original SVG file' }),
              'svg-simplified': z
                .string()
                .exactOptional()
                .openapi({ description: 'absolute URL to compressed and simplified SVG file' }),
            })
            .exactOptional()
            .openapi({
              description:
                "URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only",
              required: [],
            }),
        })
        .openapi({
          required: ['id', 'name', 'platform_code', 'created', 'common_icon_id', 'svg', 'features'],
        }),
    ),
  )
  .openapi('IconV3Item')

const MetaSchema = z.any().openapi('Meta')

const SearchSchema = z.any().openapi('Search')

const TaskErrorSchema = z
  .object({
    code: z
      .enum([
        'json_not_valid',
        'auth_required',
        'auth_failed',
        'access_denied',
        'io_fail',
        'database_fail',
        'argument_is_missed',
        'argument_is_wrong',
        'paid_feature',
        'not_possible',
      ])
      .openapi({ description: 'error code' }),
    description: z.string().openapi({ description: 'human readable error message' }),
  })
  .openapi({ required: ['code', 'description'] })
  .openapi('TaskError')

const TaskResultSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'human readable description' }),
    id: z.string().openapi({ description: 'task identifier' }),
    results: z
      .object({
        zip: z
          .string()
          .exactOptional()
          .openapi({ description: 'URL to webfont files in ZIP format' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    status: z
      .enum(['`preparing+', 'idle', 'in_progress', 'timeout', 'complete', 'failed'])
      .openapi({ description: 'task status' }),
    type: z.enum(['create_web_font', 'create_svg_set']).openapi({ description: 'task type' }),
  })
  .openapi({ required: ['id', 'type', 'status'] })
  .openapi('TaskResult')

const TotalV3ItemSchema = z
  .object({
    api_code: z
      .enum(['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'])
      .openapi({
        description: 'icons style code; in other places it named `plarform` or `platform_api_code`',
      }),
    name: z.string(),
    total: z.number(),
  })
  .openapi({ required: ['name', 'api_code', 'total'] })
  .openapi('TotalV3Item')

const WebFontsSchema = z.any().openapi('WebFonts')

const FromACollectionBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          auth: z
            .object({ hash: z.string().openapi({ description: 'Authorization hash' }) })
            .exactOptional()
            .openapi({ required: ['hash'] }),
          task: z
            .object({
              arguments: z
                .object({
                  collection: z.string().openapi({ description: 'collection identifier' }),
                  css_prefix: z
                    .string()
                    .default('icons8')
                    .exactOptional()
                    .openapi({ description: 'prefix for CSS rules, used to generate LESS/SCSS' }),
                  css_rules_case: z
                    .enum(['lowercase', 'as_is'])
                    .default('lowercase')
                    .exactOptional()
                    .openapi({ description: 'glyph names conversion rule' }),
                  css_selector: z
                    .string()
                    .default('.icons8-{{glyph}}')
                    .exactOptional()
                    .openapi({
                      description:
                        'template for glyph selector; placeholder {{glyph}} will be replaced with glyph names',
                    }),
                  font_name: z
                    .string()
                    .default('font_icons8')
                    .openapi({ description: 'name of iconic webfont' }),
                })
                .exactOptional()
                .openapi({ required: ['collection', 'font_name'] }),
            })
            .exactOptional()
            .openapi({ required: [] }),
        })
        .openapi({
          example: {
            auth: { hash: 'api-demo-user' },
            task: {
              arguments: {
                collection: 'bef787ce-41ad-4424-8e0e-19ce78e104c3',
                css_prefix: 'icons8',
                css_rules_case: 'lowercase',
                css_selector: '.icons8-{{glyph}}',
                font_name: 'Material Very Basic',
              },
            },
          },
          required: [],
        }),
    },
  },
}

export const getApiIconsetsV3CategoriesPlatformPlatformLanguageLanguageRoute = createRoute({
  method: 'get',
  path: '/api/iconsets/v3/categories?platform={platform}&language={language}',
  tags: [],
  summary: 'Categories',
  description:
    'The operation will not return the categories that have less than 10 icons.\nWe need it to test the categories without showing garbage on the production website.',
  operationId: 'Categories',
  request: {
    params: z.object({
      platform: z
        .enum(['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'])
        .openapi({
          param: {
            description: 'the platform that we are searching icons for',
            in: 'path',
            name: 'platform',
            required: true,
            schema: {
              enum: ['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'],
              type: 'string',
            },
          },
        }),
      language: z
        .enum(['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'])
        .openapi({
          param: {
            description: 'the language code to get localized result',
            example: 'en-US',
            in: 'path',
            name: 'language',
            required: true,
            schema: {
              enum: ['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'],
              type: 'string',
            },
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
              parameters: z
                .object({
                  language: z.string().exactOptional(),
                  platform: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'copy of the input parameters from the request',
                  required: [],
                }),
              result: z
                .object({ categories: z.array(z.any()).exactOptional() })
                .exactOptional()
                .openapi({ description: 'the result of operation', required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                parameters: { language: '', platform: '' },
                result: {
                  categories: [
                    {
                      category_code: '',
                      category_name: '',
                      subcategory: [
                        {
                          icons: [
                            {
                              common_icon_id: 0,
                              created: '',
                              features: { bitmap: 0, nolink: 0, vector: 0 },
                              id: 0,
                              name: '',
                              platform_code: '',
                              svg: '',
                              url: '',
                            },
                          ],
                          subcategory_code: '',
                          subcategory_name: '',
                        },
                      ],
                    },
                    {
                      api_code: 'Alphabet',
                      category_code: '',
                      category_name: '',
                      name: 'Alphabet',
                      subcategory: [
                        {
                          icons: [
                            {
                              common_icon_id: 0,
                              created: '',
                              features: { bitmap: 0, nolink: 0, vector: 0 },
                              id: 0,
                              name: '',
                              platform_code: '',
                              svg: '',
                              url: '',
                            },
                          ],
                          subcategory_code: '',
                          subcategory_name: '',
                        },
                      ],
                    },
                    {
                      api_code: 'Very_Basic',
                      category_code: '',
                      category_name: '',
                      name: 'Very Basic',
                      subcategory: [
                        {
                          icons: [
                            {
                              common_icon_id: 0,
                              created: '',
                              features: { bitmap: 0, nolink: 0, vector: 0 },
                              id: 0,
                              name: '',
                              platform_code: '',
                              svg: '',
                              url: '',
                            },
                          ],
                          subcategory_code: '',
                          subcategory_name: '',
                        },
                      ],
                    },
                    {
                      api_code: 'Photo_Video',
                      category_code: '',
                      category_name: '',
                      name: 'Photo and Video',
                      subcategory: [
                        {
                          icons: [
                            {
                              common_icon_id: 0,
                              created: '',
                              features: { bitmap: 0, nolink: 0, vector: 0 },
                              id: 0,
                              name: '',
                              platform_code: '',
                              svg: '',
                              url: '',
                            },
                          ],
                          subcategory_code: '',
                          subcategory_name: '',
                        },
                      ],
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
  },
})

export const getApiIconsetsV3CategoryCategoryCategorySubcategorySubcategoryAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageRoute =
  createRoute({
    method: 'get',
    path: '/api/iconsets/v3/category?category={category}&subcategory={subcategory}&amount={amount}&offset={offset}&platform={platform}&language={language}',
    tags: [],
    summary: 'By Category',
    operationId: 'By Category',
    request: {
      params: z.object({
        category: z
          .string()
          .openapi({
            param: {
              description: 'the code of category',
              example: 'free_icons',
              in: 'path',
              name: 'category',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subcategory: z
          .string()
          .openapi({
            param: {
              description: 'the code of subcategory',
              example: 'home_appliances',
              in: 'path',
              name: 'subcategory',
              required: true,
              schema: { type: 'string' },
            },
          }),
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
          .default(25)
          .openapi({
            param: {
              description: "the maximum number of icons which you'd like to receive",
              in: 'path',
              name: 'amount',
              required: true,
              schema: { default: 25, type: 'number' },
            },
          }),
        offset: z
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
              description: 'the offset from the first received result',
              in: 'path',
              name: 'offset',
              required: true,
              schema: { type: 'number' },
            },
          }),
        platform: z
          .enum(['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'])
          .openapi({
            param: {
              description: 'the style of the icons',
              in: 'path',
              name: 'platform',
              required: true,
              schema: {
                enum: ['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'],
                type: 'string',
              },
            },
          }),
        language: z
          .enum(['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'])
          .openapi({
            param: {
              description: 'the language code to get localized result',
              example: 'en-US',
              in: 'path',
              name: 'language',
              required: true,
              schema: {
                enum: ['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'],
                type: 'string',
              },
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
                parameters: z
                  .object({
                    amount: z.number().exactOptional(),
                    category: z.string().exactOptional(),
                    language: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    platform: z.string().exactOptional(),
                    subcategory: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'copy of the input parameters from the request',
                    required: [],
                  }),
                result: z
                  .object({ category: z.array(z.any()).exactOptional() })
                  .exactOptional()
                  .openapi({ description: 'the result of operation', required: [] }),
              })
              .openapi({ required: [] }),
            examples: {
              response: {
                value: {
                  parameters: {
                    amount: 0,
                    category: '',
                    language: '',
                    offset: '',
                    platform: '',
                    subcategory: '',
                  },
                  result: {
                    category: [
                      {
                        category_code: '',
                        category_name: '',
                        subcategory: [
                          {
                            icons: [
                              {
                                common_icon_id: 0,
                                created: '',
                                features: { bitmap: 0, nolink: 0, vector: 0 },
                                id: 0,
                                name: '',
                                platform_code: '',
                                svg: '',
                                url: '',
                              },
                            ],
                            subcategory_code: '',
                            subcategory_name: '',
                          },
                        ],
                      },
                      {
                        category: 'Very Basic',
                        common_icon_id: '72',
                        created: '2015-05-21T05:28:59+00:00',
                        features: { bitmap: '1', nolink: '1', vector: '1' },
                        id: '12229',
                        name: 'Home',
                        platform_code: 'color',
                        share: {
                          png: [
                            { link: 'https://maxcdn.icons8.com/Share/google/h/home.png' },
                            {
                              link: 'https://maxcdn.icons8.com/Share/twitter/h/home.png',
                              type: 'twitter',
                            },
                            {
                              link: 'https://maxcdn.icons8.com/Share/social/h/home.png',
                              type: 'social',
                            },
                          ],
                          url: 'http://ic8.link/12229',
                        },
                        subcategory: { api_code: 'website_sections', name: 'Website Sections' },
                        svg: '/* Plain SVG content here */',
                        url: '/web-app/12229/home',
                        vector: {
                          eps: 'absolute/private/url/to/home.eps',
                          pdf: 'absolute/private/url/to/home.pdf',
                          'svg-editable': 'absolute/private/url/to/original/home.svg',
                          'svg-simplified': 'absolute/private/url/to/simplified/home.svg',
                        },
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
    },
  })

export const getApiIconsetsV3LatestTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageRoute =
  createRoute({
    method: 'get',
    path: '/api/iconsets/v3/latest?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}',
    tags: [],
    summary: 'Latest',
    operationId: 'Latest',
    request: {
      params: z.object({
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
          .default(25)
          .openapi({
            param: {
              description: "the maximum number of icons which you'd like to receive",
              in: 'path',
              name: 'amount',
              required: true,
              schema: { default: 25, type: 'number' },
            },
          }),
        offset: z
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
              description: 'the offset from the first received result',
              in: 'path',
              name: 'offset',
              required: true,
              schema: { type: 'number' },
            },
          }),
        platform: z
          .enum(['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'])
          .openapi({
            param: {
              description: 'the style of the icons',
              in: 'path',
              name: 'platform',
              required: true,
              schema: {
                enum: ['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'],
                type: 'string',
              },
            },
          }),
        language: z
          .enum(['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'])
          .openapi({
            param: {
              description: 'the language code to get localized result',
              example: 'en-US',
              in: 'path',
              name: 'language',
              required: true,
              schema: {
                enum: ['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'],
                type: 'string',
              },
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
                parameters: z
                  .object({
                    amount: z.number().exactOptional(),
                    language: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    platform: z.string().exactOptional(),
                    term: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'copy of the input parameters from the request',
                    required: [],
                  }),
                result: z
                  .object({ latest: z.array(z.any()).exactOptional() })
                  .exactOptional()
                  .openapi({ description: 'the result of operation', required: [] }),
              })
              .openapi({ required: [] }),
            examples: {
              response: {
                value: {
                  parameters: { amount: 0, language: '', offset: '', platform: '', term: '' },
                  result: {
                    latest: [
                      {
                        common_icon_id: 0,
                        created: 'color',
                        features: { bitmap: 0, nolink: 0, vector: 0 },
                        id: 0,
                        name: '',
                        platform_code: '',
                        share: { png: [{ link: '' }], url: '' },
                        subcategory: { api_code: '', name: '' },
                        svg: '',
                        vector: { eps: '', pdf: '', 'svg-simplified': '' },
                      },
                      {
                        common_icon_id: '72',
                        created: '2015-05-21T05:28:59+00:00',
                        features: { bitmap: '1', nolink: '1', vector: '1' },
                        id: '12229',
                        name: 'Home',
                        platform_code: 'color',
                        share: {
                          png: [
                            { link: 'https://maxcdn.icons8.com/Share/google/h/home.png' },
                            {
                              link: 'https://maxcdn.icons8.com/Share/twitter/h/home.png',
                              type: 'twitter',
                            },
                            {
                              link: 'https://maxcdn.icons8.com/Share/social/h/home.png',
                              type: 'social',
                            },
                          ],
                          url: 'http://ic8.link/12229',
                        },
                        subcategory: { api_code: '', name: '' },
                        svg: '',
                        url: '/web-app/12229/home',
                        vector: { eps: '', pdf: '', 'svg-simplified': '' },
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
    },
  })

export const getApiIconsetsV3SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountRoute =
  createRoute({
    method: 'get',
    path: '/api/iconsets/v3/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}',
    tags: [],
    summary: 'By Keyword v3',
    operationId: 'By Keyword v3',
    request: {
      params: z.object({
        term: z
          .string()
          .openapi({
            param: {
              description:
                'the name or tag of the icon or any other phrase.\ne.g. use "@home" to find icons with the tag "home" and "=home" to find icons with the name "home"\n',
              example: 'home',
              in: 'path',
              name: 'term',
              required: true,
              schema: { type: 'string' },
            },
          }),
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
          .default(25)
          .openapi({
            param: {
              description:
                "the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)",
              in: 'path',
              name: 'amount',
              required: true,
              schema: { default: 25, type: 'number' },
            },
          }),
        exact_amount: z
          .stringbool()
          .openapi({
            param: {
              description:
                "set it to 'true' if you'd like to receive the exact amount of icons, not multiplied by platforms count",
              in: 'path',
              name: 'exact_amount',
              required: true,
              schema: { type: 'boolean' },
            },
          }),
        offset: z
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
              description: 'the offset from the first received result',
              in: 'path',
              name: 'offset',
              required: true,
              schema: { type: 'number' },
            },
          }),
        platform: z
          .enum(['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'])
          .openapi({
            param: {
              description: 'the style of the icons',
              in: 'path',
              name: 'platform',
              required: true,
              schema: {
                enum: ['ios7', 'win8', 'win10', 'android', 'androidL', 'color', 'office'],
                type: 'string',
              },
            },
          }),
        language: z
          .enum(['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'])
          .openapi({
            param: {
              description: 'the language code to get localized result',
              example: 'en-US',
              in: 'path',
              name: 'language',
              required: true,
              schema: {
                enum: ['en-US', 'fr-FR', 'de-DE', 'it-IT', 'pt-BR', 'pl-PL', 'ru-RU', 'es-ES'],
                type: 'string',
              },
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
                parameters: z
                  .object({
                    amount: z.number().exactOptional(),
                    language: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    platform: z.string().exactOptional(),
                    term: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'copy of the input parameters from the request',
                    required: [],
                  }),
                result: z
                  .object({ search: z.array(z.any()).exactOptional() })
                  .exactOptional()
                  .openapi({ description: 'the result of operation', required: [] }),
              })
              .openapi({ required: [] }),
            examples: {
              response: {
                value: {
                  parameters: { amount: 0, language: '', offset: '', platform: '', term: '' },
                  result: {
                    search: [
                      {
                        common_icon_id: 0,
                        created: 'color',
                        features: { bitmap: 0, nolink: 0, vector: 0 },
                        id: 0,
                        name: '',
                        platform_code: '',
                        share: { png: [{ link: '' }], url: '' },
                        subcategory: { api_code: '', name: '' },
                        svg: '',
                        vector: { eps: '', pdf: '', 'svg-simplified': '' },
                      },
                      {
                        category: 'Very Basic',
                        common_icon_id: '72',
                        created: '2015-05-21T05:28:59+00:00',
                        features: { bitmap: '1', nolink: '1', vector: '1' },
                        id: '12229',
                        name: 'Home',
                        platform_code: 'color',
                        share: {
                          png: [
                            { link: 'https://maxcdn.icons8.com/Share/google/h/home.png' },
                            {
                              link: 'https://maxcdn.icons8.com/Share/twitter/h/home.png',
                              type: 'twitter',
                            },
                            {
                              link: 'https://maxcdn.icons8.com/Share/social/h/home.png',
                              type: 'social',
                            },
                          ],
                          url: 'http://ic8.link/12229',
                        },
                        subcategory: { api_code: 'website_sections', name: 'Website Sections' },
                        svg: '/* Plain SVG content here */',
                        url: '/web-app/12229/home',
                        vector: {
                          eps: 'absolute/private/url/to/home.eps',
                          pdf: 'absolute/private/url/to/home.pdf',
                          'svg-editable': 'absolute/private/url/to/original/home.svg',
                          'svg-simplified': 'absolute/private/url/to/simplified/home.svg',
                        },
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
    },
  })

export const getApiIconsetsV3TotalSinceSinceRoute = createRoute({
  method: 'get',
  path: '/api/iconsets/v3/total?since={since}',
  tags: [],
  summary: 'Totals',
  operationId: 'Totals',
  request: {
    params: z.object({
      since: z
        .string()
        .openapi({
          param: {
            description:
              'the optional date to calculate the total number of icons that were created after it.\nIt should be in format "four year digits - dash - two month number digits - dash - two day number digits. For example 2014-12-31 means "31th of December, 2014".\n',
            example: '2014-12-31',
            in: 'path',
            name: 'since',
            required: true,
            schema: { type: 'string' },
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
              parameters: z
                .object({ since: z.string().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'copy of the input parameters from the request',
                  required: [],
                }),
              result: z
                .object({ total: z.array(z.any()).exactOptional() })
                .exactOptional()
                .openapi({ description: 'the result of operation', required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                parameters: { since: '' },
                result: {
                  total: [
                    { api_code: 'ios7', name: '', total: 0 },
                    { api_code: 'win8', name: 'Windows 8/Metro', total: '802' },
                    { api_code: 'ios7', name: 'iPhone/iOS 7', total: '7379' },
                  ],
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiIconsetsV4SearchTermTermAmountAmountOffsetOffsetPlatformPlatformLanguageLanguageExactAmountExactAmountRoute =
  createRoute({
    method: 'get',
    path: '/api/iconsets/v4/search?term={term}&amount={amount}&offset={offset}&platform={platform}&language={language}&exact_amount={exact_amount}',
    tags: [],
    summary: 'By Keyword v4',
    operationId: 'By Keyword v4',
    request: {
      params: z.object({
        term: z
          .string()
          .openapi({
            param: {
              description:
                'the name or tag of the icon or any other phrase.\ne.g. use "@home" to find icons with the tag "home" and "=home" to find icons with the name "home"\n',
              example: 'home',
              in: 'path',
              name: 'term',
              required: true,
              schema: { type: 'string' },
            },
          }),
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
          .default(50)
          .openapi({
            param: {
              description:
                "the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)",
              in: 'path',
              name: 'amount',
              required: true,
              schema: { default: 50, type: 'number' },
            },
          }),
        offset: z
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
              description: 'the offset from the first received result',
              in: 'path',
              name: 'offset',
              required: true,
              schema: { type: 'number' },
            },
          }),
        platform: z
          .enum([
            'all',
            'ios7',
            'ios11',
            'win8',
            'win10',
            'android',
            'androidL',
            'color',
            'office',
            'ultraviolet',
            'nolan',
            'p1em',
            'dotty',
            'dusk',
            'Dusk_Wired',
            'cotton',
            'doodle',
            'flat_round',
          ])
          .default('all')
          .openapi({
            param: {
              description: 'the style of the icons',
              in: 'path',
              name: 'platform',
              required: true,
              schema: {
                default: 'all',
                enum: [
                  'all',
                  'ios7',
                  'ios11',
                  'win8',
                  'win10',
                  'android',
                  'androidL',
                  'color',
                  'office',
                  'ultraviolet',
                  'nolan',
                  'p1em',
                  'dotty',
                  'dusk',
                  'Dusk_Wired',
                  'cotton',
                  'doodle',
                  'flat_round',
                ],
                type: 'string',
              },
            },
          }),
        language: z
          .enum([
            'en-US',
            'fr-FR',
            'de-DE',
            'it-IT',
            'pt-BR',
            'pl-PL',
            'ru-RU',
            'es-ES',
            'zh-CN',
            'ja-JP',
          ])
          .default('en-US')
          .openapi({
            param: {
              description: 'the language code to get localized result',
              in: 'path',
              name: 'language',
              required: true,
              schema: {
                default: 'en-US',
                enum: [
                  'en-US',
                  'fr-FR',
                  'de-DE',
                  'it-IT',
                  'pt-BR',
                  'pl-PL',
                  'ru-RU',
                  'es-ES',
                  'zh-CN',
                  'ja-JP',
                ],
                type: 'string',
              },
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
                icons: z
                  .array(z.any())
                  .exactOptional()
                  .openapi({ description: 'the result of operation' }),
                parameters: z
                  .object({
                    'amount `50`': z.string().exactOptional(),
                    language: z.string().exactOptional(),
                    offset: z.string().exactOptional(),
                    platform: z.string().exactOptional(),
                    term: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'copy of the input parameters from the request',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
            examples: {
              response: {
                value: {
                  icons: [
                    {
                      category: 'Travel',
                      commonId: '3022',
                      commonName: 'sea-waves',
                      id: '23756',
                      name: 'Sea Waves',
                      platform: 'win10',
                      timestamp: '1461024690',
                    },
                    {
                      category: 'Animals',
                      commonId: '3035',
                      commonName: 'starfish',
                      id: '19995',
                      name: 'Sea Star',
                      platform: 'win10',
                      timestamp: '1450119085',
                    },
                  ],
                  parameters: {
                    'amount `50`': '',
                    language: 'en-US',
                    offset: '0',
                    platform: 'win10',
                    term: 'sea',
                  },
                },
              },
            },
          },
        },
        headers: z.object({}),
      },
    },
  })

export const postApiTaskWebFontCollectionRoute = createRoute({
  method: 'post',
  path: '/api/task/web-font/collection',
  tags: [],
  summary: 'From a Collection',
  operationId: 'From a Collection',
  request: { body: FromACollectionBodyRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z.array(z.any()).exactOptional(),
              result: z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'human readable description' }),
                  id: z.string().openapi({ description: 'task identifier' }),
                  results: z
                    .object({ zip: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z.string().openapi({ description: 'task status' }),
                  type: z.string().openapi({ description: 'task type' }),
                })
                .exactOptional()
                .openapi({ required: ['id', 'type', 'status'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                messages: [
                  {
                    code: 'paid_feature',
                    description: 'Icons "dog", "cat" and 5 more were excluded',
                  },
                  {
                    code: 'not_possible',
                    description: 'Icons "dog-color" and "cat-color" were excluded',
                  },
                ],
                result: {
                  description: '',
                  id: 'abc-def',
                  results: { zip: 'https://st.icons8.com/zip/abc-def/icons8-font.zip' },
                  status: 'complete',
                  type: 'create_web_font',
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiTaskWebFontIconsRoute = createRoute({
  method: 'post',
  path: '/api/task/web-font/icons',
  tags: [],
  summary: 'From Separate Icons',
  operationId: 'From Separate Icons',
  request: { body: FromACollectionBodyRequestBody },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z.array(z.any()).exactOptional(),
              result: z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'human readable description' }),
                  id: z.string().openapi({ description: 'task identifier' }),
                  results: z
                    .object({ zip: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  status: z.string().openapi({ description: 'task status' }),
                  type: z.string().openapi({ description: 'task type' }),
                })
                .exactOptional()
                .openapi({ required: ['id', 'type', 'status'] }),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                messages: [
                  {
                    code: 'paid_feature',
                    description: 'Icons "dog", "cat" and 5 more were excluded',
                  },
                  {
                    code: 'not_possible',
                    description: 'Icons "dog-color" and "cat-color" were excluded',
                  },
                ],
                result: {
                  description: '',
                  id: 'abc-def',
                  results: { zip: 'https://st.icons8.com/zip/abc-def/icons8-font.zip' },
                  status: 'complete',
                  type: 'create_web_font',
                },
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})
