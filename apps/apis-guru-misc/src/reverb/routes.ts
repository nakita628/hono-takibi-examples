import { createRoute, z } from '@hono/zod-openapi'

const BodyRequestBody = {
  description: 'the content of the request',
  content: {
    'application/json': {
      schema: z
        .object({
          country_code: z.string().exactOptional(),
          layaway_terms_slug: z.string().exactOptional(),
          message: z
            .string()
            .exactOptional()
            .openapi({ description: 'Message to include with counter offer' }),
          offer_items: z
            .array(
              z
                .object({ listing_id: z.string(), price: z.string(), shipping_price: z.string() })
                .openapi({ required: ['price', 'shipping_price', 'listing_id'] }),
            )
            .exactOptional(),
          price: z
            .object({
              amount: z
                .string()
                .openapi({
                  description:
                    'The amount of money being expressed, as a POSIX-compliant decimal number',
                }),
              currency: z
                .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                .openapi({ description: 'The currency the money will be expressed in' }),
            })
            .exactOptional()
            .openapi({ required: ['amount', 'currency'] }),
          quantity: z.string().exactOptional(),
          recipient_id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'ID of the recipient of the offer. Required if you are the seller pushing an offer to a buyer.',
            }),
          region_code: z.string().exactOptional(),
          shipping_price: z
            .object({
              amount: z
                .string()
                .openapi({
                  description:
                    'The amount of money being expressed, as a POSIX-compliant decimal number',
                }),
              currency: z
                .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                .openapi({ description: 'The currency the money will be expressed in' }),
            })
            .exactOptional()
            .openapi({
              description: 'Shipping price (sellers only)',
              required: ['amount', 'currency'],
            }),
        })
        .openapi({ required: [] }),
    },
  },
}

const Body2RequestBody = {
  description: 'the content of the request',
  content: {
    'application/json': { schema: z.object({ body: z.string() }).openapi({ required: ['body'] }) },
  },
}

const Body3RequestBody = {
  description: 'the content of the request',
  content: {
    'application/json': {
      schema: z
        .object({
          message: z
            .string()
            .exactOptional()
            .openapi({ description: 'Message to include with counter offer' }),
          price: z.string().openapi({ description: 'Offer price' }),
          shipping_price: z
            .string()
            .exactOptional()
            .openapi({ description: 'Shipping price (sellers only)' }),
        })
        .openapi({ required: ['price'] }),
    },
  },
}

const Oauth2SecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: {
        public: '',
        read_feedback: '*Originally missing*',
        read_listings: '*Originally missing*',
        read_lists: '*Originally missing*',
        read_messages: '*Originally missing*',
        read_offers: '*Originally missing*',
        read_orders: '*Originally missing*',
        read_payouts: '*Originally missing*',
        read_profile: '*Originally missing*',
        write_feedback: '*Originally missing*',
        write_listings: '*Originally missing*',
        write_listings_for_others: '*Originally missing*',
        write_lists: '*Originally missing*',
        write_messages: '*Originally missing*',
        write_offers: '*Originally missing*',
        write_orders: '*Originally missing*',
        write_profile: '*Originally missing*',
        write_reviews: '*Originally missing*',
      },
      tokenUrl: 'https://reverb.com/oauth/token',
    },
  },
  type: 'oauth2',
}

export const getArticlesRoute = createRoute({
  method: 'get',
  path: '/articles',
  tags: ['articles'],
  request: {
    query: z.object({
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "What's being searched for",
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_featured: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of featured articles to exclude',
            in: 'query',
            name: 'exclude_featured',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getArticlesCategoriesRoute = createRoute({
  method: 'get',
  path: '/articles/categories',
  tags: ['articles'],
  summary: 'List of all article categories',
  description: 'List of all article categories',
  responses: { default: { description: 'Unexpected error' } },
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['categories'],
  summary: 'List of supported product categories',
  description: 'List of supported product categories',
  responses: { default: { description: 'Unexpected error' } },
})

export const getCategoriesFlatRoute = createRoute({
  method: 'get',
  path: '/categories/flat',
  tags: ['categories'],
  responses: { default: { description: 'Unexpected error' } },
})

export const getCategoriesTaxonomyRoute = createRoute({
  method: 'get',
  path: '/categories/taxonomy',
  tags: ['categories'],
  summary: 'Full taxonomy tree of categories including middle categories',
  description: 'Full taxonomy tree of categories including middle categories',
  responses: { default: { description: 'Unexpected error' } },
})

export const getCategoriesProductTypeCategoryRoute = createRoute({
  method: 'get',
  path: '/categories/{product_type}/{category}',
  tags: ['categories'],
  summary: 'Get subcategory details',
  description: 'Get subcategory details',
  request: {
    params: z.object({
      product_type: z
        .string()
        .openapi({
          param: { in: 'path', name: 'product_type', required: true, schema: { type: 'string' } },
        }),
      category: z
        .string()
        .openapi({
          param: { in: 'path', name: 'category', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getCategoriesUuidRoute = createRoute({
  method: 'get',
  path: '/categories/{uuid}',
  tags: ['categories'],
  summary: 'Get category details',
  description: 'Get category details',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getComparisonShoppingPagesRoute = createRoute({
  method: 'get',
  path: '/comparison_shopping_pages',
  tags: ['comparison_shopping_pages'],
  summary: 'Returns a set of comparison shopping pages based on the current params',
  description: 'Returns a set of comparison shopping pages based on the current params',
  responses: { default: { description: 'Unexpected error' } },
})

export const getComparisonShoppingPagesFindRoute = createRoute({
  method: 'get',
  path: '/comparison_shopping_pages/find',
  tags: ['comparison_shopping_pages'],
  summary: 'Show comparison shopping page',
  description: 'Show comparison shopping page',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the comparison shopping page',
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of the comparison shopping page',
            in: 'query',
            name: 'slug',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getComparisonShoppingPagesIdRoute = createRoute({
  method: 'get',
  path: '/comparison_shopping_pages/{id}',
  tags: ['comparison_shopping_pages'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getComparisonShoppingPagesIdListingsRoute = createRoute({
  method: 'get',
  path: '/comparison_shopping_pages/{id}/listings',
  tags: ['comparison_shopping_pages'],
  summary: 'Return new or used listings for a comparison shopping page',
  description: 'Return new or used listings for a comparison shopping page',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      condition: z
        .string()
        .openapi({
          param: {
            description: 'Condition of the listing',
            in: 'query',
            name: 'condition',
            required: true,
            schema: { type: 'string' },
          },
        }),
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getComparisonShoppingPagesIdReviewsRoute = createRoute({
  method: 'get',
  path: '/comparison_shopping_pages/{id}/reviews',
  tags: ['comparison_shopping_pages'],
  summary: 'View reviews of a comparison shopping page',
  description: 'View reviews of a comparison shopping page',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const postConversationsConversationIdOfferRoute = createRoute({
  method: 'post',
  path: '/conversations/{conversation_id}/offer',
  tags: ['conversations'],
  summary: 'Make an offer to the other participant in the conversation',
  description: 'Make an offer to the other participant in the conversation',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: BodyRequestBody,
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_offers'] }],
})

export const postConversationsIdOfferRoute = createRoute({
  method: 'post',
  path: '/conversations/{id}/offer',
  tags: ['conversations'],
  summary: 'Make an offer to the other participant in the conversation',
  description: 'Make an offer to the other participant in the conversation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: Body3RequestBody,
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_offers'] }],
})

export const getCountriesRoute = createRoute({
  method: 'get',
  path: '/countries',
  tags: ['countries'],
  summary: 'Retrieve a list of country codes with corresponding subregions',
  description: 'Retrieve a list of country codes with corresponding subregions',
  responses: { default: { description: 'Unexpected error' } },
})

export const getCspsRoute = createRoute({
  method: 'get',
  path: '/csps',
  tags: ['csps'],
  summary: 'Returns a set of comparison shopping pages based on the current params',
  description: 'Returns a set of comparison shopping pages based on the current params',
  responses: { default: { description: 'Unexpected error' } },
})

export const getCspsCategoriesRoute = createRoute({
  method: 'get',
  path: '/csps/categories',
  tags: ['csps'],
  responses: { default: { description: 'Unexpected error' } },
})

export const getCspsFindRoute = createRoute({
  method: 'get',
  path: '/csps/find',
  tags: ['csps'],
  summary: 'Show comparison shopping page',
  description: 'Show comparison shopping page',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of the comparison shopping page',
            in: 'query',
            name: 'id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      slug: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of the comparison shopping page',
            in: 'query',
            name: 'slug',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getCspsIdRoute = createRoute({
  method: 'get',
  path: '/csps/{id}',
  tags: ['csps'],
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getCuratedSetsSlugRoute = createRoute({
  method: 'get',
  path: '/curated_sets/{slug}',
  tags: ['curated_sets'],
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getCurrenciesDisplayRoute = createRoute({
  method: 'get',
  path: '/currencies/display',
  tags: ['currencies'],
  summary: 'List of supported display currencies for browsing listings',
  description: 'List of supported display currencies for browsing listings',
  responses: { default: { description: 'Unexpected error' } },
})

export const getCurrenciesListingRoute = createRoute({
  method: 'get',
  path: '/currencies/listing',
  tags: ['currencies'],
  summary: 'List of supported listing currencies for shops',
  description: 'List of supported listing currencies for shops',
  responses: { default: { description: 'Unexpected error' } },
})

export const getFeedbackFeedbackIdRoute = createRoute({
  method: 'get',
  path: '/feedback/{feedback_id}',
  tags: ['feedback'],
  summary: 'Feedback details',
  description: 'Feedback details',
  request: {
    params: z.object({
      feedback_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'feedback_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getHandpickedSlugRoute = createRoute({
  method: 'get',
  path: '/handpicked/{slug}',
  tags: ['handpicked'],
  summary: 'Get results from a handpicked collection',
  description: 'Get results from a handpicked collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      auction_price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum current auction price',
            in: 'query',
            name: 'auction_price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category slug from /api/categories',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product type slug from /api/categories',
            in: 'query',
            name: 'product_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conditions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint',
            explode: false,
            in: 'query',
            name: 'conditions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      decade: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Decade: e.g. 1970s, early 70s',
            in: 'query',
            name: 'decade',
            required: false,
            schema: { type: 'string' },
          },
        }),
      finish: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Visual finish of the item, common for guitars',
            in: 'query',
            name: 'finish',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handmade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Handmade items only',
            in: 'query',
            name: 'handmade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      item_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City where item is located',
            in: 'query',
            name: 'item_city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED - Country code where item is located',
            in: 'query',
            name: 'item_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country code where item is located',
            in: 'query',
            name: 'item_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State or region code where item is located',
            in: 'query',
            name: 'item_state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      make: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Make(s)/brand of item (e.g. Fender). Can take a single value or an array.',
            explode: false,
            in: 'query',
            name: 'make',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Model of item (e.g. Stratocaster)',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      must_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search term negation. If you want to exclude a term, add it here',
            in: 'query',
            name: 'must_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum price of search results (USD)',
            in: 'query',
            name: 'price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      price_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum price of search results (USD)',
            in: 'query',
            name: 'price_min',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The currency to be used for the price filters',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year of manufacture',
            in: 'query',
            name: 'year_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minumum year of manufacture',
            in: 'query',
            name: 'year_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      accepts_gift_cards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items that accept gift cards',
            in: 'query',
            name: 'accepts_gift_cards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      preferred_seller: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items by Reverb Preferred Sellers',
            in: 'query',
            name: 'preferred_seller',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      shop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of shop to search',
            in: 'query',
            name: 'shop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shop_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of shop to search',
            in: 'query',
            name: 'shop_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of listing: auctions,offers',
            in: 'query',
            name: 'listing_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ships_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit search to items that ship to this country code',
            in: 'query',
            name: 'ships_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_auctions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, exclude auctions',
            in: 'query',
            name: 'exclude_auctions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      accepts_payment_plans: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, only show items that can be purchased with a payment plan',
            in: 'query',
            name: 'accepts_payment_plans',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      watchers_count_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum number of watchers (used to find popular items)',
            in: 'query',
            name: 'watchers_count_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      not_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Listing ID negation. If you want to exclude a listing, add it here.',
            explode: false,
            in: 'query',
            name: 'not_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      local_pickup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only items that offer local pickup',
            in: 'query',
            name: 'local_pickup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getListingConditionsRoute = createRoute({
  method: 'get',
  path: '/listing_conditions',
  tags: ['listing_conditions'],
  summary: 'List of supported product conditions',
  description: 'List of supported product conditions',
  responses: { default: { description: 'Unexpected error' } },
})

export const getListingsRoute = createRoute({
  method: 'get',
  path: '/listings',
  tags: ['listings'],
  summary:
    'Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.',
  description:
    'Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      auction_price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum current auction price',
            in: 'query',
            name: 'auction_price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category slug from /api/categories',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product type slug from /api/categories',
            in: 'query',
            name: 'product_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conditions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint',
            explode: false,
            in: 'query',
            name: 'conditions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      decade: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Decade: e.g. 1970s, early 70s',
            in: 'query',
            name: 'decade',
            required: false,
            schema: { type: 'string' },
          },
        }),
      finish: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Visual finish of the item, common for guitars',
            in: 'query',
            name: 'finish',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handmade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Handmade items only',
            in: 'query',
            name: 'handmade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      item_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City where item is located',
            in: 'query',
            name: 'item_city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED - Country code where item is located',
            in: 'query',
            name: 'item_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country code where item is located',
            in: 'query',
            name: 'item_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State or region code where item is located',
            in: 'query',
            name: 'item_state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      make: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Make(s)/brand of item (e.g. Fender). Can take a single value or an array.',
            explode: false,
            in: 'query',
            name: 'make',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Model of item (e.g. Stratocaster)',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      must_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search term negation. If you want to exclude a term, add it here',
            in: 'query',
            name: 'must_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum price of search results (USD)',
            in: 'query',
            name: 'price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      price_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum price of search results (USD)',
            in: 'query',
            name: 'price_min',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The currency to be used for the price filters',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year of manufacture',
            in: 'query',
            name: 'year_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minumum year of manufacture',
            in: 'query',
            name: 'year_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      accepts_gift_cards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items that accept gift cards',
            in: 'query',
            name: 'accepts_gift_cards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      preferred_seller: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items by Reverb Preferred Sellers',
            in: 'query',
            name: 'preferred_seller',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      shop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of shop to search',
            in: 'query',
            name: 'shop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shop_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of shop to search',
            in: 'query',
            name: 'shop_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of listing: auctions,offers',
            in: 'query',
            name: 'listing_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ships_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit search to items that ship to this country code',
            in: 'query',
            name: 'ships_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_auctions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, exclude auctions',
            in: 'query',
            name: 'exclude_auctions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      accepts_payment_plans: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, only show items that can be purchased with a payment plan',
            in: 'query',
            name: 'accepts_payment_plans',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      watchers_count_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum number of watchers (used to find popular items)',
            in: 'query',
            name: 'watchers_count_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      not_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Listing ID negation. If you want to exclude a listing, add it here.',
            explode: false,
            in: 'query',
            name: 'not_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      local_pickup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only items that offer local pickup',
            in: 'query',
            name: 'local_pickup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const postListingsRoute = createRoute({
  method: 'post',
  path: '/listings',
  tags: ['listings'],
  summary: 'Create a listing',
  description: 'Create a listing',
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              categories: z
                .array(
                  z
                    .object({
                      uuid: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'UUID of the category for this listing.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              condition: z
                .object({
                  uuid: z
                    .enum([
                      'fbf35668-96a0-4baa-bcde-ab18d6b1b329',
                      '6a9dfcad-600b-46c8-9e08-ce6e5057921e',
                      '98777886-76d0-44c8-865e-bb40e669e934',
                      'f7a3f48c-972a-44c6-b01a-0cd27488d3f6',
                      'ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d',
                      'df268ad1-c462-4ba6-b6db-e007e23922ea',
                      'ac5b9c1e-dc78-466d-b0b3-7cf712967a48',
                      '6db7df88-293b-4017-a1c1-cdb5e599fa1a',
                      '9225283f-60c2-4413-ad18-1f5eba7a856f',
                      '7c3f45de-2ae0-4c81-8400-fdb6b1d74890',
                    ])
                    .openapi({ description: 'Condition UUID' }),
                })
                .exactOptional()
                .openapi({ description: 'Condition', required: ['uuid'] }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product description. Please keep formatting to a minimum.',
                }),
              exclusive_channel: z
                .enum(['seller_site', 'reverb', 'none'])
                .exactOptional()
                .openapi({
                  description:
                    "Currently for users of seller sites only, this allows you to have a listing available only to your seller site by setting this to 'seller_site'",
                }),
              finish: z
                .string()
                .exactOptional()
                .openapi({ description: "Finish, e.g. 'Sunburst'" }),
              has_inventory: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set true if selling more than one' }),
              inventory: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Number of items available for sale. Reverb will increment and decrement automatically.',
                }),
              location: z
                .object({
                  country_code: z.string().exactOptional().openapi({ description: 'Ex: US' }),
                  locality: z.string().exactOptional().openapi({ description: 'Ex: Chicago' }),
                  region: z.string().exactOptional().openapi({ description: 'Ex: IL' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              make: z.string().exactOptional().openapi({ description: 'ex: Fender, Gibson' }),
              model: z.string().exactOptional().openapi({ description: 'ex: Stratocaster, SG' }),
              multi_item: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Specifies if the listing is a bundle of multiple individual items',
                }),
              offers_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the listing accepts negotiated offers (default: true)',
                }),
              origin_country_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'Country of origin/manufacture, ISO code (e.g: US)' }),
              photos: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "An array of image URLs. Ex: ['http://my.site.com/image.jpg']",
                }),
              preorder_info: z
                .object({
                  lead_time: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The amount of time before the item will be ready to ship. When lead_time is submitted it is converted into days and added to the current date to produce `estimated_ship_date` in the response body of the request.',
                    }),
                  lead_time_unit: z
                    .enum(['days', 'weeks'])
                    .openapi({ description: 'The unit of time which lead_time is measured in' }),
                  ship_date: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The date the item will be available to ship. In the response body of the request, `estimated_ship_date`, will be the same as ship_date. Date must be ISO8601 format - e.g: 2015-04-09T10:52:23-00:00.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.',
                  required: ['lead_time_unit'],
                }),
              price: z
                .object({
                  amount: z
                    .string()
                    .openapi({
                      description:
                        'The amount of money being expressed, as a POSIX-compliant decimal number',
                    }),
                  currency: z
                    .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                    .openapi({ description: 'The currency the money will be expressed in' }),
                })
                .exactOptional()
                .openapi({ required: ['amount', 'currency'] }),
              prop_65_warning: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "If your listing contains chemicals that are required to be reported under California Prop 65, please provide your warning statement. We will add the required 'Warning' label and link to California's information page, so you only need to provide the body of the warning. For more information, see https://www.p65warnings.ca.gov/new-proposition-65-warnings",
                }),
              publish: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Publish your listing if draft' }),
              seller: z
                .object({ paypal_email: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              seller_cost: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)',
                }),
              shipping: z
                .object({
                  local: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'True if you offer local pickup' }),
                  rates: z
                    .array(
                      z
                        .object({
                          rate: z
                            .object({
                              amount: z
                                .string()
                                .openapi({
                                  description:
                                    'The amount of money being expressed, as a POSIX-compliant decimal number',
                                }),
                              currency: z
                                .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                                .openapi({
                                  description: 'The currency the money will be expressed in',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: ['amount', 'currency'] }),
                          region_code: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Country code or subregion/superregion code. Full list of codes at /api/shipping/regions',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'List of shipping rates. Set to null to clear rates.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              shipping_profile_id: z
                .string()
                .exactOptional()
                .openapi({ description: "id of a shop's shipping profile" }),
              shipping_profile_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'DEPRECATED, please use shipping_profile_id. Name of a shipping profile',
                }),
              sku: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique identifier for product' }),
              sold_as_is: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'This item is sold As-Is and cannot be returned' }),
              storage_location: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Internal note used by sellers to back reference their catalog system when entering a listing',
                }),
              tax_exempt: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Listing is exempt from taxes / VAT' }),
              title: z.string().exactOptional().openapi({ description: 'Title of your listing' }),
              upc: z.string().exactOptional().openapi({ description: 'Valid UPC code' }),
              upc_does_not_apply: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'True if a brand new product has no UPC code, ie for a handmade or custom item',
                }),
              videos: z
                .array(
                  z
                    .object({ link: z.string().openapi({ description: 'Valid YouTube url' }) })
                    .openapi({ required: ['link'] }),
                )
                .exactOptional()
                .openapi({ description: 'List of YouTube video urls. Note: ONLY ONE ALLOWED' }),
              year: z
                .string()
                .exactOptional()
                .openapi({ description: 'Supports many formats. Ex: 1979, mid-70s, late 90s' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings', 'write_listings_for_others'] }],
})

export const getListingsAllRoute = createRoute({
  method: 'get',
  path: '/listings/all',
  tags: ['listings'],
  summary: 'All listings including used, handmade, and brand new',
  description: 'All listings including used, handmade, and brand new',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      auction_price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum current auction price',
            in: 'query',
            name: 'auction_price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category slug from /api/categories',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product type slug from /api/categories',
            in: 'query',
            name: 'product_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conditions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint',
            explode: false,
            in: 'query',
            name: 'conditions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      decade: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Decade: e.g. 1970s, early 70s',
            in: 'query',
            name: 'decade',
            required: false,
            schema: { type: 'string' },
          },
        }),
      finish: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Visual finish of the item, common for guitars',
            in: 'query',
            name: 'finish',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handmade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Handmade items only',
            in: 'query',
            name: 'handmade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      item_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City where item is located',
            in: 'query',
            name: 'item_city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED - Country code where item is located',
            in: 'query',
            name: 'item_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country code where item is located',
            in: 'query',
            name: 'item_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State or region code where item is located',
            in: 'query',
            name: 'item_state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      make: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Make(s)/brand of item (e.g. Fender). Can take a single value or an array.',
            explode: false,
            in: 'query',
            name: 'make',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Model of item (e.g. Stratocaster)',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      must_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search term negation. If you want to exclude a term, add it here',
            in: 'query',
            name: 'must_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum price of search results (USD)',
            in: 'query',
            name: 'price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      price_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum price of search results (USD)',
            in: 'query',
            name: 'price_min',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The currency to be used for the price filters',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year of manufacture',
            in: 'query',
            name: 'year_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minumum year of manufacture',
            in: 'query',
            name: 'year_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      accepts_gift_cards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items that accept gift cards',
            in: 'query',
            name: 'accepts_gift_cards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      preferred_seller: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items by Reverb Preferred Sellers',
            in: 'query',
            name: 'preferred_seller',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      shop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of shop to search',
            in: 'query',
            name: 'shop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shop_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of shop to search',
            in: 'query',
            name: 'shop_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of listing: auctions,offers',
            in: 'query',
            name: 'listing_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ships_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit search to items that ship to this country code',
            in: 'query',
            name: 'ships_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_auctions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, exclude auctions',
            in: 'query',
            name: 'exclude_auctions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      accepts_payment_plans: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, only show items that can be purchased with a payment plan',
            in: 'query',
            name: 'accepts_payment_plans',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      watchers_count_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum number of watchers (used to find popular items)',
            in: 'query',
            name: 'watchers_count_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      not_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Listing ID negation. If you want to exclude a listing, add it here.',
            explode: false,
            in: 'query',
            name: 'not_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      local_pickup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only items that offer local pickup',
            in: 'query',
            name: 'local_pickup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getListingsFacetsSellerLocationRoute = createRoute({
  method: 'get',
  path: '/listings/facets/seller_location',
  tags: ['listings'],
  summary: 'Individual facets',
  description: 'Individual facets',
  responses: { default: { description: 'Unexpected error' } },
})

export const getListingsIdNegotiationRoute = createRoute({
  method: 'get',
  path: '/listings/{id}/negotiation',
  tags: ['listings'],
  summary: 'Returns the latest negotiation for the requesting user given a listing id',
  description: 'Returns the latest negotiation for the requesting user given a listing id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_offers'] }],
})

export const postListingsIdOfferRoute = createRoute({
  method: 'post',
  path: '/listings/{id}/offer',
  tags: ['listings'],
  summary: 'Make an offer to the seller of a listing',
  description: 'Make an offer to the seller of a listing',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: Body3RequestBody,
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_offers'] }],
})

export const getListingsListingIdBumpRoute = createRoute({
  method: 'get',
  path: '/listings/{listing_id}/bump',
  tags: ['listings'],
  summary: 'View available bump tiers and stats for a listing',
  description: 'View available bump tiers and stats for a listing',
  request: {
    params: z.object({
      listing_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'listing_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_listings'] }],
})

export const postListingsListingIdBumpBudgetTypeRoute = createRoute({
  method: 'post',
  path: '/listings/{listing_id}/bump/{budget_type}',
  tags: ['listings'],
  summary: 'Bump a listing',
  description: 'Bump a listing',
  request: {
    params: z.object({
      listing_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'listing_id', required: true, schema: { type: 'string' } },
        }),
      budget_type: z
        .string()
        .openapi({
          param: { in: 'path', name: 'budget_type', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const postListingsListingIdConversationsRoute = createRoute({
  method: 'post',
  path: '/listings/{listing_id}/conversations',
  tags: ['listings'],
  summary: 'Start a conversation with a seller',
  description: 'Start a conversation with a seller',
  request: {
    params: z.object({
      listing_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'listing_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: Body2RequestBody,
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_messages'] }],
})

export const getListingsListingIdImagesRoute = createRoute({
  method: 'get',
  path: '/listings/{listing_id}/images',
  tags: ['listings'],
  summary: 'View the images associated with a particular listing',
  description: 'View the images associated with a particular listing',
  request: {
    params: z.object({
      listing_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'listing_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_listings'] }],
})

export const deleteListingsListingIdImagesImageIdRoute = createRoute({
  method: 'delete',
  path: '/listings/{listing_id}/images/{image_id}',
  tags: ['listings'],
  summary: 'Delete an image from a listing',
  description: 'Delete an image from a listing',
  request: {
    params: z.object({
      listing_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'listing_id', required: true, schema: { type: 'string' } },
        }),
      image_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'image_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const getListingsListingIdSalesRoute = createRoute({
  method: 'get',
  path: '/listings/{listing_id}/sales',
  tags: ['listings'],
  summary: 'See all sales that include a listing.',
  description: 'See all sales that include a listing.',
  request: {
    params: z.object({
      listing_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'listing_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getListingsSlugRoute = createRoute({
  method: 'get',
  path: '/listings/{slug}',
  tags: ['listings'],
  summary: 'Listing details',
  description: 'Listing details',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const putListingsSlugRoute = createRoute({
  method: 'put',
  path: '/listings/{slug}',
  tags: ['listings'],
  summary: 'Update a listing',
  description: 'Update a listing',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              categories: z
                .array(
                  z
                    .object({
                      uuid: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'UUID of the category for this listing.' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              condition: z
                .object({
                  uuid: z
                    .enum([
                      'fbf35668-96a0-4baa-bcde-ab18d6b1b329',
                      '6a9dfcad-600b-46c8-9e08-ce6e5057921e',
                      '98777886-76d0-44c8-865e-bb40e669e934',
                      'f7a3f48c-972a-44c6-b01a-0cd27488d3f6',
                      'ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d',
                      'df268ad1-c462-4ba6-b6db-e007e23922ea',
                      'ac5b9c1e-dc78-466d-b0b3-7cf712967a48',
                      '6db7df88-293b-4017-a1c1-cdb5e599fa1a',
                      '9225283f-60c2-4413-ad18-1f5eba7a856f',
                      '7c3f45de-2ae0-4c81-8400-fdb6b1d74890',
                    ])
                    .openapi({ description: 'Condition UUID' }),
                })
                .exactOptional()
                .openapi({ description: 'Condition', required: ['uuid'] }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Product description. Please keep formatting to a minimum.',
                }),
              exclusive_channel: z
                .enum(['seller_site', 'reverb', 'none'])
                .exactOptional()
                .openapi({
                  description:
                    "Currently for users of seller sites only, this allows you to have a listing available only to your seller site by setting this to 'seller_site'",
                }),
              finish: z
                .string()
                .exactOptional()
                .openapi({ description: "Finish, e.g. 'Sunburst'" }),
              has_inventory: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set true if selling more than one' }),
              inventory: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Number of items available for sale. Reverb will increment and decrement automatically.',
                }),
              location: z
                .object({
                  country_code: z.string().exactOptional().openapi({ description: 'Ex: US' }),
                  locality: z.string().exactOptional().openapi({ description: 'Ex: Chicago' }),
                  region: z.string().exactOptional().openapi({ description: 'Ex: IL' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              make: z.string().exactOptional().openapi({ description: 'ex: Fender, Gibson' }),
              model: z.string().exactOptional().openapi({ description: 'ex: Stratocaster, SG' }),
              multi_item: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Specifies if the listing is a bundle of multiple individual items',
                }),
              offers_enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether the listing accepts negotiated offers (default: true)',
                }),
              origin_country_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'Country of origin/manufacture, ISO code (e.g: US)' }),
              photos: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "An array of image URLs. Ex: ['http://my.site.com/image.jpg']",
                }),
              preorder_info: z
                .object({
                  lead_time: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The amount of time before the item will be ready to ship. When lead_time is submitted it is converted into days and added to the current date to produce `estimated_ship_date` in the response body of the request.',
                    }),
                  lead_time_unit: z
                    .enum(['days', 'weeks'])
                    .openapi({ description: 'The unit of time which lead_time is measured in' }),
                  ship_date: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The date the item will be available to ship. In the response body of the request, `estimated_ship_date`, will be the same as ship_date. Date must be ISO8601 format - e.g: 2015-04-09T10:52:23-00:00.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.',
                  required: ['lead_time_unit'],
                }),
              price: z
                .object({
                  amount: z
                    .string()
                    .openapi({
                      description:
                        'The amount of money being expressed, as a POSIX-compliant decimal number',
                    }),
                  currency: z
                    .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                    .openapi({ description: 'The currency the money will be expressed in' }),
                })
                .exactOptional()
                .openapi({ required: ['amount', 'currency'] }),
              prop_65_warning: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "If your listing contains chemicals that are required to be reported under California Prop 65, please provide your warning statement. We will add the required 'Warning' label and link to California's information page, so you only need to provide the body of the warning. For more information, see https://www.p65warnings.ca.gov/new-proposition-65-warnings",
                }),
              publish: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Publish your listing if draft' }),
              seller: z
                .object({ paypal_email: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              seller_cost: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Cost of goods in your currency as a POSIX-compliant decimal number (internal use only, not shown to buyers)',
                }),
              shipping: z
                .object({
                  local: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'True if you offer local pickup' }),
                  rates: z
                    .array(
                      z
                        .object({
                          rate: z
                            .object({
                              amount: z
                                .string()
                                .openapi({
                                  description:
                                    'The amount of money being expressed, as a POSIX-compliant decimal number',
                                }),
                              currency: z
                                .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                                .openapi({
                                  description: 'The currency the money will be expressed in',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: ['amount', 'currency'] }),
                          region_code: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Country code or subregion/superregion code. Full list of codes at /api/shipping/regions',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'List of shipping rates. Set to null to clear rates.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              shipping_profile_id: z
                .string()
                .exactOptional()
                .openapi({ description: "id of a shop's shipping profile" }),
              shipping_profile_name: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'DEPRECATED, please use shipping_profile_id. Name of a shipping profile',
                }),
              sku: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique identifier for product' }),
              sold_as_is: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'This item is sold As-Is and cannot be returned' }),
              storage_location: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Internal note used by sellers to back reference their catalog system when entering a listing',
                }),
              tax_exempt: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Listing is exempt from taxes / VAT' }),
              title: z.string().exactOptional().openapi({ description: 'Title of your listing' }),
              upc: z.string().exactOptional().openapi({ description: 'Valid UPC code' }),
              upc_does_not_apply: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'True if a brand new product has no UPC code, ie for a handmade or custom item',
                }),
              videos: z
                .array(
                  z
                    .object({ link: z.string().openapi({ description: 'Valid YouTube url' }) })
                    .openapi({ required: ['link'] }),
                )
                .exactOptional()
                .openapi({ description: 'List of YouTube video urls. Note: ONLY ONE ALLOWED' }),
              year: z
                .string()
                .exactOptional()
                .openapi({ description: 'Supports many formats. Ex: 1979, mid-70s, late 90s' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const deleteListingsSlugRoute = createRoute({
  method: 'delete',
  path: '/listings/{slug}',
  tags: ['listings'],
  summary: 'Delete a draft listing. Cannot be used on non-drafts.',
  description: 'Delete a draft listing. Cannot be used on non-drafts.',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const getListingsSlugEditRoute = createRoute({
  method: 'get',
  path: '/listings/{slug}/edit',
  tags: ['listings'],
  summary: 'Edit listing.',
  description: 'Edit listing.',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const postListingsSlugFlagRoute = createRoute({
  method: 'post',
  path: '/listings/{slug}/flag',
  tags: ['listings'],
  summary: 'Flag a listing for inappropriate content or fraud',
  description: 'Flag a listing for inappropriate content or fraud',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'User input description specifying what is flag-worthy about this listing',
                }),
              reason: z
                .string()
                .openapi({
                  description:
                    "Valid reasons: 'Sexuality/nudity', 'Hateful or inappropriate speech', 'Item not as described or potential fraud', 'Trademark infringement', 'Other'",
                }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getListingsSlugReviewsRoute = createRoute({
  method: 'get',
  path: '/listings/{slug}/reviews',
  tags: ['listings'],
  summary: 'View reviews of a listing',
  description: 'View reviews of a listing',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const postListingsSlugReviewsRoute = createRoute({
  method: 'post',
  path: '/listings/{slug}/reviews',
  tags: ['listings'],
  summary: 'Create a review for a listing',
  description: 'Create a review for a listing',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_reviews'] }],
})

export const getListingsSlugSimilarListingsRoute = createRoute({
  method: 'get',
  path: '/listings/{slug}/similar_listings',
  tags: ['listings'],
  summary: 'Listing details',
  description: 'Listing details',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getMyAccountRoute = createRoute({
  method: 'get',
  path: '/my/account',
  tags: ['my'],
  summary: 'Get account details',
  description: 'Get account details',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const putMyAccountRoute = createRoute({
  method: 'put',
  path: '/my/account',
  tags: ['my'],
  summary: 'Update account details',
  description: 'Update account details',
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              currency: z
                .string()
                .exactOptional()
                .openapi({ description: 'The currency preference for the account' }),
              first_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The first name of the account holder' }),
              last_name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The last name of the account holder' }),
              locale_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'The locale code for the account' }),
              shipping_region_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'The shipping region preference for the account' }),
              third_party_ad_data_consent: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'The privacy setting preference for the account' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const getMyAddressesRoute = createRoute({
  method: 'get',
  path: '/my/addresses',
  tags: ['my'],
  summary: 'See all addresses in your address book',
  description: 'See all addresses in your address book',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const postMyAddressesRoute = createRoute({
  method: 'post',
  path: '/my/addresses',
  tags: ['my'],
  summary: 'Create a new address in your address book',
  description: 'Create a new address in your address book',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const putMyAddressesAddressIdRoute = createRoute({
  method: 'put',
  path: '/my/addresses/{address_id}',
  tags: ['my'],
  summary: 'Update an existing address in your address book',
  description: 'Update an existing address in your address book',
  request: {
    params: z.object({
      address_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'address_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const deleteMyAddressesAddressIdRoute = createRoute({
  method: 'delete',
  path: '/my/addresses/{address_id}',
  tags: ['my'],
  summary: 'Delete an existing address in your address book',
  description: 'Delete an existing address in your address book',
  request: {
    params: z.object({
      address_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'address_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const getMyConversationsRoute = createRoute({
  method: 'get',
  path: '/my/conversations',
  tags: ['my'],
  summary: 'Get a list of your conversations',
  description: 'Get a list of your conversations',
  request: {
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to search conversations by',
            in: 'query',
            name: 'search',
            required: false,
            schema: { type: 'string' },
          },
        }),
      unread_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show unread conversations only',
            in: 'query',
            name: 'unread_only',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_messages'] }],
})

export const postMyConversationsRoute = createRoute({
  method: 'post',
  path: '/my/conversations',
  tags: ['my'],
  summary: 'Start a conversation',
  description: 'Start a conversation',
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().openapi({ description: 'The body of the message' }),
              cloudinary_photos: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'An array of cloudinary data hashes (Reverb internal use only).',
                }),
              listing_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'The id of the listing being discussed' }),
              recipient_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'The id of the user you are trying to contact' }),
              recipient_uuid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The uuid of the user you are trying to contact' }),
              shop_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The id of the shop you are trying to contact' }),
            })
            .openapi({ required: ['body'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_messages'] }],
})

export const postMyConversationsConversationIdMessagesRoute = createRoute({
  method: 'post',
  path: '/my/conversations/{conversation_id}/messages',
  tags: ['my'],
  summary: 'Send a message',
  description: 'Send a message',
  request: {
    params: z.object({
      conversation_id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'conversation_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: Body2RequestBody,
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_messages'] }],
})

export const getMyConversationsIdRoute = createRoute({
  method: 'get',
  path: '/my/conversations/{id}',
  tags: ['my'],
  summary: 'Display conversation details with messages in natural time order (oldest to newest)',
  description:
    'Display conversation details with messages in natural time order (oldest to newest)',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_messages'] }],
})

export const putMyConversationsIdRoute = createRoute({
  method: 'put',
  path: '/my/conversations/{id}',
  tags: ['my'],
  summary: 'Mark a conversation read/unread',
  description: 'Mark a conversation read/unread',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              read: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Should the conversation be marked as read' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_messages'] }],
})

export const getMyCountsRoute = createRoute({
  method: 'get',
  path: '/my/counts',
  tags: ['my'],
  summary: 'Get your actionable status counts',
  description: 'Get your actionable status counts',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const postMyCuratedSetProductProductIdRoute = createRoute({
  method: 'post',
  path: '/my/curated_set/product/{product_id}',
  tags: ['my'],
  request: {
    params: z.object({
      product_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'product_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const deleteMyCuratedSetProductProductIdRoute = createRoute({
  method: 'delete',
  path: '/my/curated_set/product/{product_id}',
  tags: ['my'],
  request: {
    params: z.object({
      product_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'product_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getMyFeedRoute = createRoute({
  method: 'get',
  path: '/my/feed',
  tags: ['my'],
  summary: 'Get listings from your feed',
  description: 'Get listings from your feed',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const getMyFeedCustomizeRoute = createRoute({
  method: 'get',
  path: '/my/feed/customize',
  tags: ['my'],
  summary: 'get your feed customization options',
  description: 'get your feed customization options',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const getMyFeedGridRoute = createRoute({
  method: 'get',
  path: '/my/feed/grid',
  tags: ['my'],
  summary: 'get your feed',
  description: 'get your feed',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const getMyFeedbackReceivedRoute = createRoute({
  method: 'get',
  path: '/my/feedback/received',
  tags: ['my'],
  summary: 'List of received feedback',
  description: 'List of received feedback',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_feedback'] }],
})

export const getMyFeedbackSentRoute = createRoute({
  method: 'get',
  path: '/my/feedback/sent',
  tags: ['my'],
  summary: 'List of sent feedback',
  description: 'List of sent feedback',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_feedback'] }],
})

export const getMyFollowsRoute = createRoute({
  method: 'get',
  path: '/my/follows',
  tags: ['my'],
  summary: 'See what the user is following',
  description: 'See what the user is following',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const getMyFollowsArticlesRoute = createRoute({
  method: 'get',
  path: '/my/follows/articles',
  tags: ['my'],
  summary: "Returns a user's ArticleCategoryFollows",
  description: "Returns a user's ArticleCategoryFollows",
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsArticlesRoute = createRoute({
  method: 'post',
  path: '/my/follows/articles',
  tags: ['my'],
  summary: "Set a user's ArticleCategoryFollows",
  description: "Set a user's ArticleCategoryFollows",
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({ category_uuids: z.string() })
            .openapi({ required: ['category_uuids'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsBrandsSlugRoute = createRoute({
  method: 'get',
  path: '/my/follows/brands/{slug}',
  tags: ['my'],
  summary: 'Follow status for a brand',
  description: 'Follow status for a brand',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsBrandsSlugRoute = createRoute({
  method: 'post',
  path: '/my/follows/brands/{slug}',
  tags: ['my'],
  summary: 'Follow a brand',
  description: 'Follow a brand',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsBrandsSlugRoute = createRoute({
  method: 'delete',
  path: '/my/follows/brands/{slug}',
  tags: ['my'],
  summary: 'Unfollow a brand',
  description: 'Unfollow a brand',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsCategoriesCategorySubcategoryRoute = createRoute({
  method: 'get',
  path: '/my/follows/categories/{category}/{subcategory}',
  tags: ['my'],
  summary: 'Follow status for a subcategory',
  description: 'Follow status for a subcategory',
  request: {
    params: z.object({
      category: z
        .string()
        .openapi({
          param: { in: 'path', name: 'category', required: true, schema: { type: 'string' } },
        }),
      subcategory: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subcategory', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsCategoriesCategorySubcategoryRoute = createRoute({
  method: 'post',
  path: '/my/follows/categories/{category}/{subcategory}',
  tags: ['my'],
  summary: 'Follow a subcategory',
  description: 'Follow a subcategory',
  request: {
    params: z.object({
      category: z
        .string()
        .openapi({
          param: { in: 'path', name: 'category', required: true, schema: { type: 'string' } },
        }),
      subcategory: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subcategory', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsCategoriesCategorySubcategoryRoute = createRoute({
  method: 'delete',
  path: '/my/follows/categories/{category}/{subcategory}',
  tags: ['my'],
  summary: 'Unfollow a subcategory',
  description: 'Unfollow a subcategory',
  request: {
    params: z.object({
      category: z
        .string()
        .openapi({
          param: { in: 'path', name: 'category', required: true, schema: { type: 'string' } },
        }),
      subcategory: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subcategory', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsCategoriesIdentifierRoute = createRoute({
  method: 'get',
  path: '/my/follows/categories/{identifier}',
  tags: ['my'],
  summary: 'Follow status for a category',
  description: 'Follow status for a category',
  request: {
    params: z.object({
      identifier: z
        .string()
        .openapi({
          param: { in: 'path', name: 'identifier', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsCategoriesIdentifierRoute = createRoute({
  method: 'post',
  path: '/my/follows/categories/{identifier}',
  tags: ['my'],
  summary: 'Follow a category',
  description: 'Follow a category',
  request: {
    params: z.object({
      identifier: z
        .string()
        .openapi({
          param: { in: 'path', name: 'identifier', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsCategoriesIdentifierRoute = createRoute({
  method: 'delete',
  path: '/my/follows/categories/{identifier}',
  tags: ['my'],
  summary: 'Unfollow a category',
  description: 'Unfollow a category',
  request: {
    params: z.object({
      identifier: z
        .string()
        .openapi({
          param: { in: 'path', name: 'identifier', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const postMyFollowsCategoriesUuidRoute = createRoute({
  method: 'post',
  path: '/my/follows/categories/{uuid}',
  tags: ['my'],
  summary: 'Follow a category',
  description: 'Follow a category',
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsCollectionsSlugRoute = createRoute({
  method: 'get',
  path: '/my/follows/collections/{slug}',
  tags: ['my'],
  summary: 'Follow status for a collection',
  description: 'Follow status for a collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsCollectionsSlugRoute = createRoute({
  method: 'post',
  path: '/my/follows/collections/{slug}',
  tags: ['my'],
  summary: 'Follow a collection',
  description: 'Follow a collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsCollectionsSlugRoute = createRoute({
  method: 'delete',
  path: '/my/follows/collections/{slug}',
  tags: ['my'],
  summary: 'Unfollow a collection',
  description: 'Unfollow a collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsHandpickedSlugRoute = createRoute({
  method: 'get',
  path: '/my/follows/handpicked/{slug}',
  tags: ['my'],
  summary: 'Follow status for a handpicked collection',
  description: 'Follow status for a handpicked collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsHandpickedSlugRoute = createRoute({
  method: 'post',
  path: '/my/follows/handpicked/{slug}',
  tags: ['my'],
  summary: 'Follow a handpicked collection',
  description: 'Follow a handpicked collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsHandpickedSlugRoute = createRoute({
  method: 'delete',
  path: '/my/follows/handpicked/{slug}',
  tags: ['my'],
  summary: 'Unfollow a handpicked collection',
  description: 'Unfollow a handpicked collection',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsSearchRoute = createRoute({
  method: 'get',
  path: '/my/follows/search',
  tags: ['my'],
  summary: 'Follow status for a search',
  description: 'Follow status for a search',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsSearchRoute = createRoute({
  method: 'post',
  path: '/my/follows/search',
  tags: ['my'],
  summary: 'Follow a search',
  description: 'Follow a search',
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              accepts_gift_cards: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If true, include only items that accept gift cards' }),
              accepts_payment_plans: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true, only show items that can be purchased with a payment plan',
                }),
              auction_price_max: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Maximum current auction price' }),
              category: z
                .string()
                .exactOptional()
                .openapi({ description: 'Category slug from /api/categories' }),
              conditions: z
                .union([
                  z.literal('all'),
                  z.literal('new'),
                  z.literal('b-stock'),
                  z.literal('used'),
                  z.literal('non-functioning'),
                  z.literal('all-but-new'),
                  z.literal('poor'),
                  z.literal('fair'),
                  z.literal('good'),
                  z.literal('very-good'),
                  z.literal('excellent'),
                  z.literal('mint'),
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint',
                }),
              currency: z
                .enum([
                  'USD',
                  'CAD',
                  'EUR',
                  'GBP',
                  'AUD',
                  'JPY',
                  'NZD',
                  'MXN',
                  'DKK',
                  'SEK',
                  'CHF',
                  'ARS',
                  'BRL',
                  'HKD',
                  'NOK',
                  'PHP',
                  'PLN',
                  'RUB',
                ])
                .exactOptional()
                .openapi({ description: 'The currency to be used for the price filters' }),
              decade: z
                .string()
                .exactOptional()
                .openapi({ description: 'Decade: e.g. 1970s, early 70s' }),
              exclude_auctions: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If true, exclude auctions' }),
              finish: z
                .string()
                .exactOptional()
                .openapi({ description: 'Visual finish of the item, common for guitars' }),
              handmade: z.boolean().exactOptional().openapi({ description: 'Handmade items only' }),
              item_city: z
                .string()
                .exactOptional()
                .openapi({ description: 'City where item is located' }),
              item_country: z
                .string()
                .exactOptional()
                .openapi({ description: 'DEPRECATED - Country code where item is located' }),
              item_region: z
                .string()
                .exactOptional()
                .openapi({ description: 'Country code where item is located' }),
              item_state: z
                .string()
                .exactOptional()
                .openapi({ description: 'State or region code where item is located' }),
              listing_type: z
                .enum(['auctions', 'offers'])
                .exactOptional()
                .openapi({ description: 'Type of listing: auctions,offers' }),
              local_pickup: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Only items that offer local pickup' }),
              make: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'Make(s)/brand of item (e.g. Fender). Can take a single value or an array.',
                }),
              model: z
                .string()
                .exactOptional()
                .openapi({ description: 'Model of item (e.g. Stratocaster)' }),
              must_not: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Search term negation. If you want to exclude a term, add it here',
                }),
              not_ids: z
                .array(z.int())
                .exactOptional()
                .openapi({
                  description:
                    'Listing ID negation. If you want to exclude a listing, add it here.',
                }),
              preferred_seller: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true, include only items by Reverb Preferred Sellers',
                }),
              price_max: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Maximum price of search results (USD)' }),
              price_min: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Minimum price of search results (USD)' }),
              product_type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Product type slug from /api/categories' }),
              query: z.string().exactOptional().openapi({ description: 'Search query.' }),
              ships_to: z
                .string()
                .exactOptional()
                .openapi({ description: 'Limit search to items that ship to this country code' }),
              shop: z.string().exactOptional().openapi({ description: 'Slug of shop to search' }),
              shop_id: z.string().exactOptional().openapi({ description: 'ID of shop to search' }),
              watchers_count_min: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Minimum number of watchers (used to find popular items)',
                }),
              year_max: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum year of manufacture' }),
              year_min: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minumum year of manufacture' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getMyFollowsShopsSlugRoute = createRoute({
  method: 'get',
  path: '/my/follows/shops/{slug}',
  tags: ['my'],
  summary: 'Follow status for a shop',
  description: 'Follow status for a shop',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const postMyFollowsShopsSlugRoute = createRoute({
  method: 'post',
  path: '/my/follows/shops/{slug}',
  tags: ['my'],
  summary: 'Follow a shop',
  description: 'Follow a shop',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsShopsSlugRoute = createRoute({
  method: 'delete',
  path: '/my/follows/shops/{slug}',
  tags: ['my'],
  summary: 'Unfollow a shop',
  description: 'Unfollow a shop',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyFollowsFollowIdRoute = createRoute({
  method: 'delete',
  path: '/my/follows/{follow_id}',
  tags: ['my'],
  summary: 'Delete a follow',
  description: 'Delete a follow',
  request: {
    params: z.object({
      follow_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'follow_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const postMyFollowsFollowIdAlertRoute = createRoute({
  method: 'post',
  path: '/my/follows/{follow_id}/alert',
  tags: ['my'],
  request: {
    params: z.object({
      follow_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'follow_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const deleteMyFollowsFollowIdAlertRoute = createRoute({
  method: 'delete',
  path: '/my/follows/{follow_id}/alert',
  tags: ['my'],
  request: {
    params: z.object({
      follow_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'follow_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getMyListingsRoute = createRoute({
  method: 'get',
  path: '/my/listings',
  tags: ['my'],
  summary:
    'Retrieve a list of live listings for the seller. To search all listings specify state=all',
  description:
    'Retrieve a list of live listings for the seller. To search all listings specify state=all',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      auction_price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum current auction price',
            in: 'query',
            name: 'auction_price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category slug from /api/categories',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product type slug from /api/categories',
            in: 'query',
            name: 'product_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conditions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint',
            explode: false,
            in: 'query',
            name: 'conditions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      decade: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Decade: e.g. 1970s, early 70s',
            in: 'query',
            name: 'decade',
            required: false,
            schema: { type: 'string' },
          },
        }),
      finish: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Visual finish of the item, common for guitars',
            in: 'query',
            name: 'finish',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handmade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Handmade items only',
            in: 'query',
            name: 'handmade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      item_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City where item is located',
            in: 'query',
            name: 'item_city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED - Country code where item is located',
            in: 'query',
            name: 'item_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country code where item is located',
            in: 'query',
            name: 'item_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State or region code where item is located',
            in: 'query',
            name: 'item_state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      make: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Make(s)/brand of item (e.g. Fender). Can take a single value or an array.',
            explode: false,
            in: 'query',
            name: 'make',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Model of item (e.g. Stratocaster)',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      must_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search term negation. If you want to exclude a term, add it here',
            in: 'query',
            name: 'must_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum price of search results (USD)',
            in: 'query',
            name: 'price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      price_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum price of search results (USD)',
            in: 'query',
            name: 'price_min',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The currency to be used for the price filters',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year of manufacture',
            in: 'query',
            name: 'year_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minumum year of manufacture',
            in: 'query',
            name: 'year_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      accepts_gift_cards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items that accept gift cards',
            in: 'query',
            name: 'accepts_gift_cards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      preferred_seller: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items by Reverb Preferred Sellers',
            in: 'query',
            name: 'preferred_seller',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      shop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of shop to search',
            in: 'query',
            name: 'shop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shop_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of shop to search',
            in: 'query',
            name: 'shop_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of listing: auctions,offers',
            in: 'query',
            name: 'listing_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ships_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit search to items that ship to this country code',
            in: 'query',
            name: 'ships_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_auctions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, exclude auctions',
            in: 'query',
            name: 'exclude_auctions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      accepts_payment_plans: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, only show items that can be purchased with a payment plan',
            in: 'query',
            name: 'accepts_payment_plans',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      watchers_count_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum number of watchers (used to find popular items)',
            in: 'query',
            name: 'watchers_count_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      not_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Listing ID negation. If you want to exclude a listing, add it here.',
            explode: false,
            in: 'query',
            name: 'not_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      local_pickup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only items that offer local pickup',
            in: 'query',
            name: 'local_pickup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      state: z
        .string()
        .default('live')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Available: ["all", "draft", "ended", "live", "ordered", "sold_out", "suspended", "seller_unavailable"]. Defaults to \'live\'',
            in: 'query',
            name: 'state',
            required: false,
            schema: { default: 'live', type: 'string' },
          },
        }),
      sku: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Find a listing by sku',
            in: 'query',
            name: 'sku',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_listings'] }],
})

export const getMyListingsDraftsRoute = createRoute({
  method: 'get',
  path: '/my/listings/drafts',
  tags: ['my'],
  summary: 'Retrieve a list your draft listings',
  description: 'Retrieve a list your draft listings',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      auction_price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum current auction price',
            in: 'query',
            name: 'auction_price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Category slug from /api/categories',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      product_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Product type slug from /api/categories',
            in: 'query',
            name: 'product_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      conditions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Condition: all,new,b-stock,used,non-functioning,all-but-new,poor,fair,good,very-good,excellent,mint',
            explode: false,
            in: 'query',
            name: 'conditions',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      decade: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Decade: e.g. 1970s, early 70s',
            in: 'query',
            name: 'decade',
            required: false,
            schema: { type: 'string' },
          },
        }),
      finish: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Visual finish of the item, common for guitars',
            in: 'query',
            name: 'finish',
            required: false,
            schema: { type: 'string' },
          },
        }),
      handmade: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Handmade items only',
            in: 'query',
            name: 'handmade',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      item_city: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'City where item is located',
            in: 'query',
            name: 'item_city',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED - Country code where item is located',
            in: 'query',
            name: 'item_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country code where item is located',
            in: 'query',
            name: 'item_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State or region code where item is located',
            in: 'query',
            name: 'item_state',
            required: false,
            schema: { type: 'string' },
          },
        }),
      make: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Make(s)/brand of item (e.g. Fender). Can take a single value or an array.',
            explode: false,
            in: 'query',
            name: 'make',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Model of item (e.g. Stratocaster)',
            in: 'query',
            name: 'model',
            required: false,
            schema: { type: 'string' },
          },
        }),
      must_not: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search term negation. If you want to exclude a term, add it here',
            in: 'query',
            name: 'must_not',
            required: false,
            schema: { type: 'string' },
          },
        }),
      price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum price of search results (USD)',
            in: 'query',
            name: 'price_max',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      price_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum price of search results (USD)',
            in: 'query',
            name: 'price_min',
            required: false,
            schema: { format: 'float', type: 'number' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The currency to be used for the price filters',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum year of manufacture',
            in: 'query',
            name: 'year_max',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      year_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minumum year of manufacture',
            in: 'query',
            name: 'year_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      accepts_gift_cards: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items that accept gift cards',
            in: 'query',
            name: 'accepts_gift_cards',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      preferred_seller: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, include only items by Reverb Preferred Sellers',
            in: 'query',
            name: 'preferred_seller',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      shop: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Slug of shop to search',
            in: 'query',
            name: 'shop',
            required: false,
            schema: { type: 'string' },
          },
        }),
      shop_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ID of shop to search',
            in: 'query',
            name: 'shop_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      listing_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of listing: auctions,offers',
            in: 'query',
            name: 'listing_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      ships_to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit search to items that ship to this country code',
            in: 'query',
            name: 'ships_to',
            required: false,
            schema: { type: 'string' },
          },
        }),
      exclude_auctions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, exclude auctions',
            in: 'query',
            name: 'exclude_auctions',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      accepts_payment_plans: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, only show items that can be purchased with a payment plan',
            in: 'query',
            name: 'accepts_payment_plans',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      watchers_count_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Minimum number of watchers (used to find popular items)',
            in: 'query',
            name: 'watchers_count_min',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      not_ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Listing ID negation. If you want to exclude a listing, add it here.',
            explode: false,
            in: 'query',
            name: 'not_ids',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      local_pickup: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only items that offer local pickup',
            in: 'query',
            name: 'local_pickup',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_listings'] }],
})

export const getMyListingsNegotiationsRoute = createRoute({
  method: 'get',
  path: '/my/listings/negotiations',
  tags: ['my'],
  summary: 'Get a list of active negotiations as a seller',
  description: 'Get a list of active negotiations as a seller',
  request: {
    query: z.object({
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_offers'] }],
})

export const putMyListingsSlugStateEndRoute = createRoute({
  method: 'put',
  path: '/my/listings/{slug}/state/end',
  tags: ['my'],
  summary: 'End a listing',
  description: 'End a listing',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              reason: z
                .enum(['not_sold', 'reverb_sale'])
                .openapi({
                  description:
                    'The reason this listing is being ended. Valid reasons: ["not_sold", "reverb_sale"].',
                }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const getMyListsRoute = createRoute({
  method: 'get',
  path: '/my/lists',
  tags: ['my'],
  summary: 'Get a list of your lists (wishlist, watch list, etc)',
  description: 'Get a list of your lists (wishlist, watch list, etc)',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const getMyNegotiationsBuyingRoute = createRoute({
  method: 'get',
  path: '/my/negotiations/buying',
  tags: ['my'],
  summary: 'Get a list of active negotiations as a buyer',
  description: 'Get a list of active negotiations as a buyer',
  request: {
    query: z.object({
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_offers'] }],
})

export const getMyNegotiationsIdRoute = createRoute({
  method: 'get',
  path: '/my/negotiations/{id}',
  tags: ['my'],
  summary: 'Get offer details',
  description: 'Get offer details',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_offers'] }],
})

export const postMyNegotiationsIdAcceptRoute = createRoute({
  method: 'post',
  path: '/my/negotiations/{id}/accept',
  tags: ['my'],
  summary: 'Accept an offer',
  description: 'Accept an offer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({ description: 'Message to include with accepted offer' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_offers'] }],
})

export const postMyNegotiationsIdCounterRoute = createRoute({
  method: 'post',
  path: '/my/negotiations/{id}/counter',
  tags: ['my'],
  summary: 'Counter an offer',
  description: 'Counter an offer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: BodyRequestBody,
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_offers'] }],
})

export const postMyNegotiationsIdDeclineRoute = createRoute({
  method: 'post',
  path: '/my/negotiations/{id}/decline',
  tags: ['my'],
  summary: 'Decline an offer',
  description: 'Decline an offer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_offers'] }],
})

export const getMyOrdersAwaitingFeedbackRoute = createRoute({
  method: 'get',
  path: '/my/orders/awaiting_feedback',
  tags: ['my'],
  summary: 'List of orders that need feedback',
  description: 'List of orders that need feedback',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_feedback'] }],
})

export const getMyOrdersBuyingAllRoute = createRoute({
  method: 'get',
  path: '/my/orders/buying/all',
  tags: ['my'],
  summary: 'Returns all orders, newest first.',
  description: 'Returns all orders, newest first.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyOrdersBuyingByUuidUuidRoute = createRoute({
  method: 'get',
  path: '/my/orders/buying/by_uuid/{uuid}',
  tags: ['my'],
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getMyOrdersBuyingUnpaidRoute = createRoute({
  method: 'get',
  path: '/my/orders/buying/unpaid',
  tags: ['my'],
  summary: 'Returns unpaid orders, newest first.',
  description: 'Returns unpaid orders, newest first.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyOrdersBuyingIdRoute = createRoute({
  method: 'get',
  path: '/my/orders/buying/{id}',
  tags: ['my'],
  summary: 'Returns order details for a buyer',
  description: 'Returns order details for a buyer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const postMyOrdersBuyingIdMarkReceivedRoute = createRoute({
  method: 'post',
  path: '/my/orders/buying/{id}/mark_received',
  tags: ['my'],
  summary: 'Marks an order as received by the buyer',
  description: 'Marks an order as received by the buyer',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_orders'] }],
})

export const getMyOrdersSellingAllRoute = createRoute({
  method: 'get',
  path: '/my/orders/selling/all',
  tags: ['my'],
  summary: 'Get all seller orders, newest first.',
  description: 'Get all seller orders, newest first.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyOrdersSellingAwaitingShipmentRoute = createRoute({
  method: 'get',
  path: '/my/orders/selling/awaiting_shipment',
  tags: ['my'],
  summary: 'Get unpaid seller orders, newest first.',
  description: 'Get unpaid seller orders, newest first.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyOrdersSellingBuyerHistoryBuyerIdRoute = createRoute({
  method: 'get',
  path: '/my/orders/selling/buyer_history/{buyer_id}',
  tags: ['my'],
  summary: 'See previous orders from buyer',
  description: 'See previous orders from buyer',
  request: {
    params: z.object({
      buyer_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'buyer_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyOrdersSellingByUuidUuidRoute = createRoute({
  method: 'get',
  path: '/my/orders/selling/by_uuid/{uuid}',
  tags: ['my'],
  request: {
    params: z.object({
      uuid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'uuid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getMyOrdersSellingUnpaidRoute = createRoute({
  method: 'get',
  path: '/my/orders/selling/unpaid',
  tags: ['my'],
  summary: 'Get unpaid seller orders, newest first.',
  description: 'Get unpaid seller orders, newest first.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyOrdersSellingIdRoute = createRoute({
  method: 'get',
  path: '/my/orders/selling/{id}',
  tags: ['my'],
  summary: 'Returns order details for a seller',
  description: 'Returns order details for a seller',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const postMyOrdersSellingIdMarkPickedUpRoute = createRoute({
  method: 'post',
  path: '/my/orders/selling/{id}/mark_picked_up',
  tags: ['my'],
  summary: 'Marks an order as picked up',
  description: 'Marks an order as picked up',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              date: z
                .string()
                .exactOptional()
                .openapi({ description: 'Date the item was picked up.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_orders'] }],
})

export const postMyOrdersSellingIdShipRoute = createRoute({
  method: 'post',
  path: '/my/orders/selling/{id}/ship',
  tags: ['my'],
  summary: 'Marks an order as shipped',
  description: 'Marks an order as shipped',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              provider: z
                .string()
                .openapi({
                  description:
                    'Shipping provider: One of UPS, USPS, FedEx, DHL Deutschland, DHLExpress, DHLGlobalMail, DHL, Canada Post, CanPar, Royal Mail, PostNL, Australia Post, EMS, La Poste - Colissimo, China Post, GLS, Parcelforce, Purolator, Interlogistica, Correos España, Ukraine Post, DPD Germany, DPD UK, DPD France, Hermes, TNT, Other',
                }),
              send_notification: z
                .boolean()
                .openapi({ description: 'Should we send an email notification to the buyer' }),
              tracking_number: z
                .string()
                .openapi({ description: 'Tracking number provided by the shipping provider' }),
            })
            .openapi({ required: ['provider', 'tracking_number', 'send_notification'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_orders'] }],
})

export const postMyOrdersSellingOrderIdRefundRequestsRoute = createRoute({
  method: 'post',
  path: '/my/orders/selling/{order_id}/refund_requests',
  tags: ['my'],
  summary: 'Initiate a refund for a sold order',
  description: 'Initiate a refund for a sold order',
  request: {
    params: z.object({
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_orders'] }],
})

export const getMyPaymentsSellingRoute = createRoute({
  method: 'get',
  path: '/my/payments/selling',
  tags: ['my'],
  summary: 'Get payments',
  description: 'Get payments',
  request: {
    query: z.object({
      page: z
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
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(24)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 24, type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offset', required: false, schema: { type: 'integer' } },
        }),
      created_start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00',
            in: 'query',
            name: 'created_start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00',
            in: 'query',
            name: 'created_end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      updated_start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00',
            in: 'query',
            name: 'updated_start_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      updated_end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00',
            in: 'query',
            name: 'updated_end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Look up payments by order id',
            in: 'query',
            name: 'order_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyPaymentsSellingIdRoute = createRoute({
  method: 'get',
  path: '/my/payments/selling/{id}',
  tags: ['my'],
  summary: 'Get payment',
  description: 'Get payment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const getMyPayoutsRoute = createRoute({
  method: 'get',
  path: '/my/payouts',
  tags: ['my'],
  summary: 'Get a list of payouts',
  description: 'Get a list of payouts',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_payouts'] }],
})

export const getMyPayoutsIdLineItemsRoute = createRoute({
  method: 'get',
  path: '/my/payouts/{id}/line_items',
  tags: ['my'],
  summary: 'Read the line items of a payout',
  description: 'Read the line items of a payout',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_payouts'] }],
})

export const getMyRefundRequestsSellingRoute = createRoute({
  method: 'get',
  path: '/my/refund_requests/selling',
  tags: ['my'],
  summary: 'Get a list of refund requests as a seller',
  description: 'Get a list of refund requests as a seller',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_orders'] }],
})

export const putMyRefundRequestsSellingIdRoute = createRoute({
  method: 'put',
  path: '/my/refund_requests/selling/{id}',
  tags: ['my'],
  summary: 'Update a refund request for a sold order',
  description: 'Update a refund request for a sold order',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_orders'] }],
})

export const getMyViewedListingsRoute = createRoute({
  method: 'get',
  path: '/my/viewed_listings',
  tags: ['my'],
  summary: 'Get a list of your recently viewed listings.',
  description: 'Get a list of your recently viewed listings.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const getMyWishlistRoute = createRoute({
  method: 'get',
  path: '/my/wishlist',
  tags: ['my'],
  summary: 'Get a list of wishlisted items',
  description: 'Get a list of wishlisted items',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const putMyWishlistIdRoute = createRoute({
  method: 'put',
  path: '/my/wishlist/{id}',
  tags: ['my'],
  summary: 'Add a listing to your wishlist',
  description: 'Add a listing to your wishlist',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteMyWishlistIdRoute = createRoute({
  method: 'delete',
  path: '/my/wishlist/{id}',
  tags: ['my'],
  summary: 'Remove a listing from your wishlist',
  description: 'Remove a listing from your wishlist',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getOrdersOrderIdFeedbackBuyerRoute = createRoute({
  method: 'get',
  path: '/orders/{order_id}/feedback/buyer',
  tags: ['orders'],
  summary: "Feedback details for an order's buyer",
  description: "Feedback details for an order's buyer",
  request: {
    params: z.object({
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const postOrdersOrderIdFeedbackBuyerRoute = createRoute({
  method: 'post',
  path: '/orders/{order_id}/feedback/buyer',
  tags: ['orders'],
  summary: "Add feedback about an order's buyer",
  description: "Add feedback about an order's buyer",
  request: {
    params: z.object({
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_feedback'] }],
})

export const getOrdersOrderIdFeedbackSellerRoute = createRoute({
  method: 'get',
  path: '/orders/{order_id}/feedback/seller',
  tags: ['orders'],
  summary: "Feedback details for an order's seller",
  description: "Feedback details for an order's seller",
  request: {
    params: z.object({
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const postOrdersOrderIdFeedbackSellerRoute = createRoute({
  method: 'post',
  path: '/orders/{order_id}/feedback/seller',
  tags: ['orders'],
  summary: "Add feedback about an order's seller",
  description: "Add feedback about an order's seller",
  request: {
    params: z.object({
      order_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'order_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_feedback'] }],
})

export const getPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/payment_methods',
  tags: ['payment_methods'],
  summary: 'Get list of payment methods',
  description: 'Get list of payment methods',
  responses: { default: { description: 'Unexpected error' } },
})

export const getPriceguideIdTransactionsSummaryRoute = createRoute({
  method: 'get',
  path: '/priceguide/{id}/transactions/summary',
  tags: ['priceguide'],
  summary: 'Get a summary of transactions for a given price guide',
  description: 'Get a summary of transactions for a given price guide',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      number_of_months: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(3)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'number_of_months',
            required: false,
            schema: { default: 3, type: 'integer' },
          },
        }),
      condition: z
        .string()
        .default('used')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'condition',
            required: false,
            schema: { default: 'used', type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getProductsReviewsIdRoute = createRoute({
  method: 'get',
  path: '/products/reviews/{id}',
  tags: ['products'],
  summary: 'View a review',
  description: 'View a review',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const putProductsReviewsIdRoute = createRoute({
  method: 'put',
  path: '/products/reviews/{id}',
  tags: ['products'],
  summary: 'Update a review',
  description: 'Update a review',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              body: z.string().exactOptional().openapi({ description: 'Content of the review' }),
              rating: z.int().exactOptional().openapi({ description: 'Rating from 1 to 5' }),
              title: z.string().exactOptional().openapi({ description: 'Title for the review' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_reviews'] }],
})

export const getProductsSlugReviewsRoute = createRoute({
  method: 'get',
  path: '/products/{slug}/reviews',
  tags: ['products'],
  summary: 'View reviews of a comparison shopping page',
  description: 'View reviews of a comparison shopping page',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const postProductsSlugReviewsRoute = createRoute({
  method: 'post',
  path: '/products/{slug}/reviews',
  tags: ['products'],
  summary: 'Create a review for a product',
  description: 'Create a review for a product',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_reviews'] }],
})

export const getSalesReverbRoute = createRoute({
  method: 'get',
  path: '/sales/reverb',
  tags: ['sales'],
  summary: 'View upcoming and live Reverb official sales.',
  description: 'View upcoming and live Reverb official sales.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_listings'] }],
})

export const getSalesSellerRoute = createRoute({
  method: 'get',
  path: '/sales/seller',
  tags: ['sales'],
  summary: 'View your created sales.',
  description: 'View your created sales.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_listings'] }],
})

export const postSalesSaleIdListingsRoute = createRoute({
  method: 'post',
  path: '/sales/{sale_id}/listings',
  tags: ['sales'],
  summary: 'Add listings to a sale',
  description: 'Add listings to a sale',
  request: {
    params: z.object({
      sale_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sale_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const deleteSalesSaleIdListingsRoute = createRoute({
  method: 'delete',
  path: '/sales/{sale_id}/listings',
  tags: ['sales'],
  summary: 'Remove a listing from a sale',
  description: 'Remove a listing from a sale',
  request: {
    params: z.object({
      sale_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'sale_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_listings'] }],
})

export const getSalesSlugRoute = createRoute({
  method: 'get',
  path: '/sales/{slug}',
  tags: ['sales'],
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getShippingProvidersRoute = createRoute({
  method: 'get',
  path: '/shipping/providers',
  tags: ['shipping'],
  summary: 'List of supported shipping providers',
  description: 'List of supported shipping providers',
  responses: { default: { description: 'Unexpected error' } },
})

export const getShippingRegionsRoute = createRoute({
  method: 'get',
  path: '/shipping/regions',
  tags: ['shipping'],
  responses: { default: { description: 'Unexpected error' } },
})

export const getShopRoute = createRoute({
  method: 'get',
  path: '/shop',
  tags: ['shop'],
  summary: 'Get your own shop details',
  description: 'Get your own shop details',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const putShopRoute = createRoute({
  method: 'put',
  path: '/shop',
  tags: ['shop'],
  summary: 'Update your shop profile',
  description: 'Update your shop profile',
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              address: z
                .object({
                  country_code: z.string().exactOptional(),
                  extended_address: z.string().exactOptional(),
                  locality: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  phone: z.string().exactOptional(),
                  postal_code: z.string().exactOptional(),
                  region: z.string().exactOptional(),
                  street_address: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              currency: z
                .enum(['USD', 'CAD', 'EUR', 'GBP', 'AUD', 'JPY', 'NZD', 'MXN'])
                .exactOptional(),
              description: z.string().exactOptional(),
              legal_country_code: z
                .enum([
                  'AD',
                  'AE',
                  'AF',
                  'AG',
                  'AI',
                  'AL',
                  'AM',
                  'AO',
                  'AR',
                  'AS',
                  'AT',
                  'AU',
                  'AW',
                  'AX',
                  'AZ',
                  'BA',
                  'BB',
                  'BD',
                  'BE',
                  'BF',
                  'BG',
                  'BH',
                  'BI',
                  'BJ',
                  'BL',
                  'BM',
                  'BN',
                  'BO',
                  'BQ',
                  'BR',
                  'BS',
                  'BT',
                  'BV',
                  'BW',
                  'BY',
                  'BZ',
                  'CA',
                  'CC',
                  'CD',
                  'CF',
                  'CG',
                  'CH',
                  'CI',
                  'CK',
                  'CL',
                  'CM',
                  'CN',
                  'CO',
                  'CR',
                  'CV',
                  'CW',
                  'CX',
                  'CY',
                  'CZ',
                  'DE',
                  'DJ',
                  'DK',
                  'DM',
                  'DO',
                  'DZ',
                  'EC',
                  'EE',
                  'EG',
                  'EH',
                  'ER',
                  'ES',
                  'ET',
                  'FI',
                  'FJ',
                  'FK',
                  'FM',
                  'FO',
                  'FR',
                  'GA',
                  'GB',
                  'GD',
                  'GE',
                  'GF',
                  'GG',
                  'GH',
                  'GI',
                  'GL',
                  'GM',
                  'GN',
                  'GP',
                  'GQ',
                  'GR',
                  'GS',
                  'GT',
                  'GU',
                  'GW',
                  'GY',
                  'HK',
                  'HM',
                  'HN',
                  'HR',
                  'HT',
                  'HU',
                  'ID',
                  'IE',
                  'IL',
                  'IM',
                  'IN',
                  'IO',
                  'IQ',
                  'IS',
                  'IT',
                  'JE',
                  'JM',
                  'JO',
                  'JP',
                  'KE',
                  'KG',
                  'KH',
                  'KI',
                  'KM',
                  'KN',
                  'KR',
                  'KW',
                  'KY',
                  'KZ',
                  'LA',
                  'LB',
                  'LC',
                  'LI',
                  'LK',
                  'LR',
                  'LS',
                  'LT',
                  'LU',
                  'LV',
                  'LY',
                  'MA',
                  'MC',
                  'MD',
                  'ME',
                  'MF',
                  'MG',
                  'MH',
                  'MK',
                  'ML',
                  'MM',
                  'MN',
                  'MO',
                  'MP',
                  'MQ',
                  'MR',
                  'MS',
                  'MT',
                  'MU',
                  'MV',
                  'MW',
                  'MX',
                  'MY',
                  'MZ',
                  'NA',
                  'NC',
                  'NE',
                  'NF',
                  'NG',
                  'NI',
                  'NL',
                  'NO',
                  'NP',
                  'NR',
                  'NU',
                  'NZ',
                  'OM',
                  'PA',
                  'PE',
                  'PF',
                  'PG',
                  'PH',
                  'PK',
                  'PL',
                  'PM',
                  'PN',
                  'PS',
                  'PT',
                  'PW',
                  'PY',
                  'QA',
                  'RE',
                  'RO',
                  'RS',
                  'RU',
                  'RW',
                  'SA',
                  'SB',
                  'SC',
                  'SE',
                  'SG',
                  'SH',
                  'SI',
                  'SJ',
                  'SK',
                  'SL',
                  'SM',
                  'SN',
                  'SO',
                  'SR',
                  'SS',
                  'ST',
                  'SV',
                  'SX',
                  'SZ',
                  'TC',
                  'TD',
                  'TF',
                  'TG',
                  'TH',
                  'TJ',
                  'TK',
                  'TL',
                  'TM',
                  'TN',
                  'TO',
                  'TR',
                  'TT',
                  'TV',
                  'TW',
                  'TZ',
                  'UA',
                  'UG',
                  'UM',
                  'US',
                  'UY',
                  'UZ',
                  'VA',
                  'VC',
                  'VE',
                  'VG',
                  'VI',
                  'VN',
                  'VU',
                  'WF',
                  'WS',
                  'YE',
                  'YT',
                  'ZA',
                  'ZM',
                  'ZW',
                ])
                .exactOptional(),
              legal_country_code_confirmed: z.literal(true).exactOptional(),
              name: z.string().exactOptional(),
              payment_policy: z.string().exactOptional(),
              return_policy: z.string().exactOptional(),
              shipping_policy: z.string().exactOptional(),
              shop_type: z.enum(['individual', 'business']).exactOptional(),
              website: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const getShopListingConditionsRoute = createRoute({
  method: 'get',
  path: '/shop/listing_conditions',
  tags: ['shop'],
  summary: 'List of supported product conditions',
  description: 'List of supported product conditions',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const getShopPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/shop/payment_methods',
  tags: ['shop'],
  summary: 'Get accepted payment methods',
  description: 'Get accepted payment methods',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const getShopVacationRoute = createRoute({
  method: 'get',
  path: '/shop/vacation',
  tags: ['shop'],
  summary: 'Returns shop vacation status',
  description: 'Returns shop vacation status',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const postShopVacationRoute = createRoute({
  method: 'post',
  path: '/shop/vacation',
  tags: ['shop'],
  summary:
    'Enable vacation mode. All listings will be unavailable until vacation mode is turned off.',
  description:
    'Enable vacation mode. All listings will be unavailable until vacation mode is turned off.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const deleteShopVacationRoute = createRoute({
  method: 'delete',
  path: '/shop/vacation',
  tags: ['shop'],
  summary: 'Disable vacation mode. All listings will be re-enabled.',
  description: 'Disable vacation mode. All listings will be re-enabled.',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_profile'] }],
})

export const getShopsIdStorefrontsRoute = createRoute({
  method: 'get',
  path: '/shops/{id}/storefronts',
  tags: ['shops'],
  summary: 'Get storefront details on a shop.',
  description: 'Get storefront details on a shop.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getShopsShopIdShippingProfilesRoute = createRoute({
  method: 'get',
  path: '/shops/{shop_id}/shipping_profiles',
  tags: ['shops'],
  summary: 'List of shipping profiles for your shop',
  description: 'List of shipping profiles for your shop',
  request: {
    params: z.object({
      shop_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'shop_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_profile'] }],
})

export const getShopsSlugRoute = createRoute({
  method: 'get',
  path: '/shops/{slug}',
  tags: ['shops'],
  summary: 'Get details on a shop.',
  description: 'Get details on a shop.',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      include_listing_count: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include the live listing count in the response.',
            in: 'query',
            name: 'include_listing_count',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getShopsSlugFeedbackRoute = createRoute({
  method: 'get',
  path: '/shops/{slug}/feedback',
  tags: ['shops'],
  summary: "Get seller's feedback",
  description: "Get seller's feedback",
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getShopsSlugFeedbackBuyerRoute = createRoute({
  method: 'get',
  path: '/shops/{slug}/feedback/buyer',
  tags: ['shops'],
  summary: "Get seller's feedback as a buyer",
  description: "Get seller's feedback as a buyer",
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getShopsSlugFeedbackSellerRoute = createRoute({
  method: 'get',
  path: '/shops/{slug}/feedback/seller',
  tags: ['shops'],
  summary: "Get seller's feedback as a seller",
  description: "Get seller's feedback as a seller",
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getWantsRoute = createRoute({
  method: 'get',
  path: '/wants',
  tags: ['wants'],
  summary: 'A list of wanted items by the user',
  description: 'A list of wanted items by the user',
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['read_lists'] }],
})

export const putWantsIdRoute = createRoute({
  method: 'put',
  path: '/wants/{id}',
  tags: ['wants'],
  summary: 'Mark an item wanted. Returns 200 on success or 422 on failure.',
  description: 'Mark an item wanted. Returns 200 on success or 422 on failure.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const deleteWantsIdRoute = createRoute({
  method: 'delete',
  path: '/wants/{id}',
  tags: ['wants'],
  summary: 'Unmark an item wanted.',
  description: 'Unmark an item wanted.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
  security: [{ oauth2: ['write_lists'] }],
})

export const getWebhooksRegistrationsRoute = createRoute({
  method: 'get',
  path: '/webhooks/registrations',
  tags: ['webhooks'],
  summary: 'Get webhook registrations',
  description: 'Get webhook registrations',
  responses: { default: { description: 'Unexpected error' } },
})

export const postWebhooksRegistrationsRoute = createRoute({
  method: 'post',
  path: '/webhooks/registrations',
  tags: ['webhooks'],
  summary: 'Register a webhook',
  description: 'Register a webhook',
  request: {
    body: {
      description: 'the content of the request',
      content: {
        'application/json': {
          schema: z
            .object({
              topic: z
                .enum([
                  'listings/update',
                  'listings/publish',
                  'listings/bumps-ran-out',
                  'orders/create',
                  'orders/update',
                  'payments/create',
                  'payments/update',
                  'app/uninstalled',
                ])
                .openapi({
                  description:
                    'Valid values: listings/update, listings/publish, listings/bumps-ran-out, orders/create, orders/update, payments/create, payments/update, app/uninstalled',
                }),
              url: z.string(),
            })
            .openapi({ required: ['url', 'topic'] }),
        },
      },
    },
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const getWebhooksRegistrationsIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/registrations/{id}',
  tags: ['webhooks'],
  summary: 'Get details of a webhook registration',
  description: 'Get details of a webhook registration',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})

export const deleteWebhooksRegistrationsIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/registrations/{id}',
  tags: ['webhooks'],
  summary: 'Remove a webhook',
  description: 'Remove a webhook',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { default: { description: 'Unexpected error' } },
})
