import { createRoute, z } from '@hono/zod-openapi'

const AutocompleteSearchSuggestionsSchema = z
  .object({
    searches: z
      .array(
        z
          .object({
            attributes: z
              .array(
                z
                  .object({
                    key: z.string().exactOptional().openapi({ description: 'Facet key.' }),
                    labelKey: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Human-readable format of the facet key.' }),
                    labelValue: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Human-readable format of the facet value.' }),
                    value: z.string().exactOptional().openapi({ description: 'Facet value.' }),
                  })
                  .openapi({ required: [] }),
              )
              .nullable()
              .exactOptional()
              .openapi({ description: 'List of facets in which the term can be searched.' }),
            count: z
              .number()
              .exactOptional()
              .openapi({ description: 'Number of times the term was searched.' }),
            term: z.string().exactOptional().openapi({ description: 'Search term.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of suggested facets and terms.' }),
  })
  .openapi({
    example: {
      searches: [
        {
          attributes: [
            {
              key: 'departamento',
              labelKey: 'Departamento',
              labelValue: 'TVs e Vídeo',
              value: 'tvs-e-video',
            },
            { key: 'categoria', labelKey: 'Categoria', labelValue: 'TVs', value: 'tvs' },
            {
              key: 'subcategoria',
              labelKey: 'Subcategoria',
              labelValue: 'Receptor de Controle de Acesso',
              value: 'receptor-de-controle-de-acesso',
            },
          ],
          count: 28861,
          term: 'tv',
        },
        { count: 2308, term: 'smarth tv' },
        { count: 975, term: 'painel para tv' },
        { count: 589, term: 'rack tv' },
      ],
    },
    required: [],
  })
  .openapi('AutocompleteSearchSuggestions')

const BannersSchema = z
  .object({
    banners: z
      .array(
        z
          .object({
            area: z.string().exactOptional().openapi({ description: 'Banner area.' }),
            html: z.string().exactOptional().openapi({ description: 'Banner HTML.' }),
            id: z.string().exactOptional().openapi({ description: 'Banner id.' }),
            name: z.string().exactOptional().openapi({ description: 'Banner name.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Banners')

const CorrectionSchema = z
  .object({
    correction: z
      .object({
        correction: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the API was able to suggest a correction (`true`) or not (`false`).',
          }),
        highlighted: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The same as `text`, but it highlights the corrected word. Useful when there is more than one word.',
          }),
        misspelled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the term was misspelled (`true`) or not (`false`).' }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The corrected term. If the API was not able to correct the term, it will show the original search term.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Object that indicates if the term was misspelled and suggests a possible correction.',
        required: [],
      }),
  })
  .openapi({
    example: {
      correction: {
        correction: true,
        highlighted: 'mountain <em>bike</em>',
        misspelled: true,
        text: 'mountain bike',
      },
    },
    required: [],
  })
  .openapi('Correction')

const ErrorSchema = z
  .object({
    message: z.string().openapi({ description: 'Error message' }),
    stack: z.string().openapi({ description: 'Error stack trace' }),
  })
  .openapi({ required: ['stack', 'message'] })
  .openapi('Error')

const FacetsSchema = z
  .object({
    breadcrumb: z
      .array(
        z
          .object({
            href: z.string().exactOptional().openapi({ description: 'Query link.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Human-readable format of the facet key.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Generated breadcrumb for the given query.' }),
    facets: z
      .array(
        z
          .object({
            hidden: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether the client-side should hide the facet (`true`) or not (`false`)',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Human-readable format of the facet key.' }),
            quantity: z
              .number()
              .exactOptional()
              .openapi({ description: 'Number of possible values.' }),
            type: z
              .enum(['TEXT', 'PRICERANGE'])
              .exactOptional()
              .openapi({
                description:
                  'Facet type\n - `TEXT` - The value is a simple text.\n - `PRICERANGE` - The value contains the property `range` representing the minimum and the maximum price for the query.\n',
              }),
            values: z
              .array(
                z
                  .object({
                    id: z.string().exactOptional().openapi({ description: 'Value id' }),
                    key: z.string().exactOptional().openapi({ description: 'Facet key.' }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Human-readable format of the facet value' }),
                    quantity: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Number of resulting products.' }),
                    selected: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether the value is selected (`true`) or not (`false`).',
                      }),
                    value: z.string().exactOptional().openapi({ description: 'Facet value.' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Possible values.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of facets' }),
    queryArgs: z
      .object({
        query: z
          .string()
          .exactOptional()
          .openapi({ description: 'Search term used in the query.' }),
        selectedFacets: z
          .array(
            z
              .object({
                key: z.string().exactOptional().openapi({ description: 'facet key.' }),
                value: z.string().exactOptional().openapi({ description: 'facet value.' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Facets used in the query.' }),
      })
      .exactOptional()
      .openapi({ description: 'Term and facets used in the query', required: [] }),
    sampling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether there was sampling in the aggregation of facets or not. In search results that have many products, only the first 30000 will be aggregated to avoid performance issues.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Facets')

const ProductSearchSchema = z
  .object({
    correction: z
      .object({
        misspelled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the term is misspelled (`true`) or not (`false`).' }),
      })
      .exactOptional()
      .openapi({ description: 'Object with information of misspelled terms.', required: [] }),
    fuzzy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates how the search engine corrected the misspelled word by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself.',
      }),
    operator: z
      .enum(['and', 'or'])
      .exactOptional()
      .openapi({
        description:
          'Indicates how the search-engine dealt with the fullText when there is more than one word.\n * `and` - It means that the products contains all the words in the query.\n * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.',
      }),
    products: z.array(z.object({})).exactOptional().openapi({ description: 'List of products' }),
    recordsFiltered: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of products.' }),
    translated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the list of products was translated by the IS (`true`) or not (`false`).',
      }),
  })
  .openapi({
    example: {
      correction: { misspelled: false },
      fuzzy: '0',
      operator: 'and',
      products: [
        {
          brand: 'Sony',
          brandId: 2000005,
          cacheId: 'sp-2000003',
          categories: ['/Home & Decor/'],
          categoriesIds: ['/40/'],
          categoryId: '40',
          clusterHighlights: [{ id: '1970', name: 'Summer' }],
          description:
            'With this beautiful design piece you will never miss an appointment anymore. Yay.',
          link: '/wood-clock/p',
          linkText: 'wood-clock',
          origin: 'intelligent-search',
          priceRange: {
            listPrice: { highPrice: 197.99, lowPrice: 197.99 },
            sellingPrice: { highPrice: 197.99, lowPrice: 197.99 },
          },
          productClusters: [{ id: '1970', name: 'Summer' }],
          productId: '2000003',
          productName: 'Top Wood Clock',
          productReference: 'clock120',
          properties: [{ name: 'sellerId', originalName: 'sellerId', values: ['1'] }],
          skuSpecifications: [],
          specificationGroups: [
            {
              name: 'allSpecifications',
              originalName: 'allSpecifications',
              specifications: [{ name: 'sellerId', originalName: 'sellerId', values: ['1'] }],
            },
          ],
        },
        {
          brand: 'Sony',
          brandId: 2000005,
          cacheId: 'sp-2000214',
          categories: ['/Home & Decor/'],
          categoriesIds: ['/40/'],
          categoryId: '40',
          clusterHighlights: [],
          description: '',
          link: '/kevin1-lkn/p',
          linkText: 'kevin1-lkn',
          origin: 'intelligent-search',
          priceRange: {
            listPrice: { highPrice: 10, lowPrice: 10 },
            sellingPrice: { highPrice: 10, lowPrice: 10 },
          },
          productClusters: [],
          productId: '2000214',
          productName: 'kevin1',
          properties: [{ name: 'sellerId', originalName: 'sellerId', values: ['1'] }],
          skuSpecifications: [],
          specificationGroups: [
            {
              name: 'allSpecifications',
              originalName: 'allSpecifications',
              specifications: [{ name: 'sellerId', originalName: 'sellerId', values: ['1'] }],
            },
          ],
        },
      ],
      recordsFiltered: 5,
      translated: false,
    },
    required: [],
  })
  .openapi('ProductSearch')

const SearchSuggestionsSchema = z
  .object({
    searches: z
      .array(
        z
          .object({
            count: z
              .number()
              .exactOptional()
              .openapi({ description: 'Number of times the term was searched.' }),
            term: z.string().exactOptional().openapi({ description: 'Search term.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of suggested terms.' }),
  })
  .openapi({
    example: {
      searches: [
        { count: 66, term: 'mountain bike' },
        { count: 121, term: 'bike helmet' },
        { count: 78, term: 'electric bike' },
        { count: 161, term: 'bike rack' },
        { count: 28, term: 'road bike' },
      ],
    },
    required: [],
  })
  .openapi('SearchSuggestions')

const TopSearchesSchema = z
  .object({
    searches: z
      .array(
        z
          .object({
            count: z
              .number()
              .exactOptional()
              .openapi({ description: 'Number of times the term was searched.' }),
            term: z.string().exactOptional().openapi({ description: 'Search term.' }),
          })
          .openapi({ required: [] }),
      )
      .length(10)
      .exactOptional()
      .openapi({ description: 'A list of the 10 most searched terms.' }),
  })
  .openapi({
    example: {
      searches: [
        { count: 14, term: 'home' },
        { count: 10, term: 'shirt' },
        { count: 9, term: 'top' },
        { count: 6, term: 'tops' },
        { count: 5, term: 'camera' },
        { count: 5, term: 'kit' },
        { count: 2, term: 'work shirt' },
        { count: 2, term: 'shirts' },
        { count: 2, term: 'clothing' },
        { count: 1, term: 'classic shoes' },
      ],
    },
    required: [],
  })
  .openapi('TopSearches')

const FacetsPathParamsSchema = z
  .string()
  .nullable()
  .default('/')
  .openapi({
    param: {
      description:
        '# Format\n\nThe `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.\n\nThe order in which the terms appear is not relevant to the search.\n\nYou can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`\n\n# General filters\n\nThe `facets` parameter also allows the following general filters.\n\n| `facetKey`      | Description                                                                                      | Example                                                                  |\n| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |\n| `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |\n| `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |\n| `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |\n',
      example: 'category-1/clothing/category-2/shirt/category-3/man',
      in: 'path',
      name: 'facets',
      required: true,
      schema: { default: '/', nullable: true, type: 'string' },
    },
  })

const FuzzyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates how the search engine will correct misspelled words by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself.',
      in: 'query',
      name: 'fuzzy',
      schema: { type: 'string' },
      required: false,
    },
  })

const HideUnavailableItemsParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Whether the result should hide unavailable items (`true`), or not (`false`)',
      in: 'query',
      name: 'hideUnavailableItems',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const LocaleParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.',
      example: 'en-US',
      in: 'query',
      name: 'locale',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const OperatorParamsSchema = z
  .enum(['and', 'or'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'Indicates how the search-engine will deal with the fullText if there is more than one word. Set `and` if the returned products must have all the words in its metadata or `or` otherwise.',
      in: 'query',
      name: 'operator',
      schema: { enum: ['and', 'or'], type: 'string' },
      required: false,
    },
  })

const QueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Search term. It can contain any character.',
      in: 'query',
      name: 'query',
      schema: { type: 'string' },
      required: false,
    },
  })

export const getAutocompleteSuggestionsRoute = createRoute({
  method: 'get',
  path: '/autocomplete_suggestions',
  tags: ['Autocomplete'],
  summary: 'Get list of suggested terms and attributes similar to the search term',
  description: 'Lists the suggested terms and attributes similar to the search term.',
  request: { query: z.object({ query: QueryParamsSchema, locale: LocaleParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AutocompleteSearchSuggestionsSchema } },
    },
    '5XX': {
      description: 'Server error.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getBannersFacetsRoute = createRoute({
  method: 'get',
  path: '/banners/{facets}',
  tags: ['Product List Page'],
  summary: 'Get list of banners registered for query',
  description:
    'Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.',
  request: {
    query: z.object({ query: QueryParamsSchema, locale: LocaleParamsSchema }),
    params: z.object({ facets: FacetsPathParamsSchema }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BannersSchema } } },
  },
})

export const getCorrectionSearchRoute = createRoute({
  method: 'get',
  path: '/correction_search',
  tags: ['Product List Page'],
  summary: 'Get attempt of correction of a misspelled term',
  description: 'Tries to correct a misspelled term from the search.',
  request: { query: z.object({ query: QueryParamsSchema, locale: LocaleParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: CorrectionSchema } } },
  },
})

export const getFacetsFacetsRoute = createRoute({
  method: 'get',
  path: '/facets/{facets}',
  tags: ['Product List Page'],
  summary: 'Get list of the possible facets for a given query',
  description: 'Lists the possible facets for a given query',
  request: {
    params: z.object({ facets: FacetsPathParamsSchema }),
    query: z.object({
      query: QueryParamsSchema,
      locale: LocaleParamsSchema,
      hideUnavailableItems: HideUnavailableItemsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of facets for the given query.',
      content: { 'application/json': { schema: FacetsSchema } },
    },
  },
})

export const getProductSearchFacetsRoute = createRoute({
  method: 'get',
  path: '/product_search/{facets}',
  tags: ['Product List Page'],
  summary: 'Get list of products for a query',
  description: 'Lists the products for a given query.',
  request: {
    params: z.object({ facets: FacetsPathParamsSchema }),
    query: z.object({
      query: QueryParamsSchema,
      simulationBehavior: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.enum(['default', 'skip', 'only1P']).nullable(),
      )
        .default('default')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the simulation behavior.\n\n * `default` - Calls the simulation for every single seller.\n * `skip` - Never calls the simulation.\n * `only1P` - Only calls the simulation for first party sellers.',
            in: 'query',
            name: 'simulationBehavior',
            schema: {
              default: 'default',
              enum: ['default', 'skip', 'only1P'],
              nullable: true,
              type: 'string',
            },
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of products per page.',
            in: 'query',
            name: 'count',
            schema: { default: 24, nullable: true, type: 'number' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.number(),
            )
            .nullable(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Current search page.',
            in: 'query',
            name: 'page',
            schema: { default: 1, nullable: true, type: 'number' },
            required: false,
          },
        }),
      sort: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z
          .enum([
            'price:desc',
            'price:asc',
            'orders:desc',
            'name:desc',
            'name:asc',
            'release:desc',
            'discount:desc',
          ])
          .nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Defines the sort type. If null, the products will be sorted by relevance.',
            in: 'query',
            name: 'sort',
            schema: {
              enum: [
                'price:desc',
                'price:asc',
                'orders:desc',
                'name:desc',
                'name:asc',
                'release:desc',
                'discount:desc',
              ],
              nullable: true,
              type: 'string',
            },
            required: false,
          },
        }),
      locale: LocaleParamsSchema,
      hideUnavailableItems: HideUnavailableItemsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of products for the given query.',
      content: { 'application/json': { schema: ProductSearchSchema } },
    },
  },
})

export const getSearchSuggestionsRoute = createRoute({
  method: 'get',
  path: '/search_suggestions',
  tags: ['Product List Page'],
  summary: 'Get list of suggested terms similar to the search term',
  description: 'Lists suggested terms similar to the search term.',
  request: { query: z.object({ query: QueryParamsSchema, locale: LocaleParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SearchSuggestionsSchema } },
    },
    '5XX': {
      description: 'Server error.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTopSearchesRoute = createRoute({
  method: 'get',
  path: '/top_searches',
  tags: ['Autocomplete'],
  summary: 'Get list of the 10 most searched terms',
  description: 'Lists the 10 most searched terms.',
  request: { query: z.object({ locale: LocaleParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TopSearchesSchema } } },
    '5XX': {
      description: 'Server error.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
