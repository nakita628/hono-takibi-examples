import { createRoute, z } from '@hono/zod-openapi'

const ImageSchema = z
  .object({
    frames: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of frames in this GIF.', example: '15' }),
    height: z
      .string()
      .exactOptional()
      .openapi({ description: 'The height of this GIF in pixels.', example: '200' }),
    mp4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL for this GIF in .MP4 format.',
        example: 'https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4',
      }),
    mp4_size: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The size in bytes of the .MP4 file corresponding to this GIF.',
        example: '25123',
      }),
    size: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of this GIF in bytes.', example: '32381' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The publicly-accessible direct URL for this GIF.',
        example: 'https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif',
      }),
    webp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL for this GIF in .webp format.',
        example: 'https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.webp',
      }),
    webp_size: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The size in bytes of the .webp file corresponding to this GIF.',
        example: '12321',
      }),
    width: z
      .string()
      .exactOptional()
      .openapi({ description: 'The width of this GIF in pixels.', example: '320' }),
  })
  .openapi({ required: [] })
  .openapi('Image')

const UserSchema = z
  .object({
    avatar_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "The URL for this user's avatar image.",
        example: 'https://media1.giphy.com/avatars/election2016/XwYrZi5H87o6.gif',
      }),
    banner_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "The URL for the banner image that appears atop this user's profile page.",
        example: 'https://media4.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg',
      }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name associated with this user (contains formatting the base username might not).',
        example: 'JoeCool4000',
      }),
    profile_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "The URL for this user's profile.",
        example: 'https://giphy.com/cheezburger/',
      }),
    twitter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Twitter username associated with this user, if applicable.',
        example: '@joecool4000',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username associated with this user.', example: 'joecool4000' }),
  })
  .openapi({
    description:
      "The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.",
    required: [],
  })
  .openapi('User')

const GifSchema = z
  .object({
    bitly_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique bit.ly URL for this GIF',
        example: 'http://gph.is/1gsWDcL',
      }),
    content_url: z.string().exactOptional().openapi({ description: 'Currently unused' }),
    create_datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date this GIF was added to the GIPHY database.',
        example: '2013-08-01 12:41:48',
      }),
    embded_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URL used for embedding this GIF',
        example: 'http://giphy.com/embed/YsTs5ltWtEhnq',
      }),
    featured_tags: z
      .array(z.string().openapi({ description: 'Tag name' }))
      .exactOptional()
      .openapi({
        description:
          'An array of featured tags for this GIF (Note: Not available when using the Public Beta Key)\n',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: "This GIF's unique ID", example: 'YsTs5ltWtEhnq' }),
    images: z
      .object({
        downsized: ImageSchema.and(
          z
            .any()
            .openapi({
              description: 'Data surrounding a version of this GIF downsized to be under 2mb.',
            }),
        ).exactOptional(),
        downsized_large: ImageSchema.and(
          z
            .any()
            .openapi({
              description: 'Data surrounding a version of this GIF downsized to be under 8mb.',
            }),
        ).exactOptional(),
        downsized_medium: ImageSchema.and(
          z
            .any()
            .openapi({
              description: 'Data surrounding a version of this GIF downsized to be under 5mb.',
            }),
        ).exactOptional(),
        downsized_small: ImageSchema.and(
          z
            .any()
            .openapi({
              description: 'Data surrounding a version of this GIF downsized to be under 200kb.',
            }),
        ).exactOptional(),
        downsized_still: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a static preview image of the downsized version of this GIF.',
            }),
        ).exactOptional(),
        fixed_height: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding versions of this GIF with a fixed height of 200 pixels. Good for mobile use.',
            }),
        ).exactOptional(),
        fixed_height_downsampled: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding versions of this GIF with a fixed height of 200 pixels and the number of frames reduced to 6.',
            }),
        ).exactOptional(),
        fixed_height_small: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding versions of this GIF with a fixed height of 100 pixels. Good for mobile keyboards.',
            }),
        ).exactOptional(),
        fixed_height_small_still: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a static image of this GIF with a fixed height of 100 pixels.',
            }),
        ).exactOptional(),
        fixed_height_still: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a static image of this GIF with a fixed height of 200 pixels.',
            }),
        ).exactOptional(),
        fixed_width: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding versions of this GIF with a fixed width of 200 pixels. Good for mobile use.',
            }),
        ).exactOptional(),
        fixed_width_downsampled: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding versions of this GIF with a fixed width of 200 pixels and the number of frames reduced to 6.',
            }),
        ).exactOptional(),
        fixed_width_small: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding versions of this GIF with a fixed width of 100 pixels. Good for mobile keyboards.',
            }),
        ).exactOptional(),
        fixed_width_small_still: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a static image of this GIF with a fixed width of 100 pixels.',
            }),
        ).exactOptional(),
        fixed_width_still: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a static image of this GIF with a fixed width of 200 pixels.',
            }),
        ).exactOptional(),
        looping: ImageSchema.and(
          z
            .any()
            .openapi({
              description: 'Data surrounding a version of this GIF set to loop for 15 seconds.',
            }),
        ).exactOptional(),
        original: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding the original version of this GIF. Good for desktop use.',
            }),
        ).exactOptional(),
        original_still: ImageSchema.and(
          z
            .any()
            .openapi({
              description: 'Data surrounding a static preview image of the original GIF.',
            }),
        ).exactOptional(),
        preview: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a version of this GIF in .MP4 format limited to 50kb that displays the first 1-2 seconds of the GIF.',
            }),
        ).exactOptional(),
        preview_gif: ImageSchema.and(
          z
            .any()
            .openapi({
              description:
                'Data surrounding a version of this GIF limited to 50kb that displays the first 1-2 seconds of the GIF.',
            }),
        ).exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'An object containing data for various available formats and sizes of this GIF.',
        required: [],
      }),
    import_datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "The creation or upload date from this GIF's source.",
        example: '2013-08-01 12:41:48',
      }),
    rating: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R',
        example: 'g',
      }),
    slug: z
      .string()
      .exactOptional()
      .openapi({
        description: "The unique slug used in this GIF's URL",
        example: 'confused-flying-YsTs5ltWtEhnq',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The page on which this GIF was found',
        example: 'http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/',
      }),
    source_post_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL of the webpage on which this GIF was found.',
        example: 'http://cheezburger.com/5282328320',
      }),
    source_tld: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The top level domain of the source URL.',
        example: 'cheezburger.com',
      }),
    tags: z
      .array(z.string().openapi({ description: 'Tag name' }))
      .exactOptional()
      .openapi({
        description:
          'An array of tags for this GIF (Note: Not available when using the Public Beta Key)\n',
      }),
    trending_datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date on which this gif was marked trending, if applicable.',
        example: '2013-08-01 12:41:48',
      }),
    type: z
      .literal('gif')
      .default('gif')
      .exactOptional()
      .openapi({ description: 'Type of the gif. By default, this is almost always gif' }),
    update_datetime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date on which this GIF was last updated.',
        example: '2013-08-01 12:41:48',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique URL for this GIF',
        example: 'http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq',
      }),
    user: UserSchema.exactOptional(),
    username: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The username this GIF is attached to, if applicable',
        example: 'JoeCool4000',
      }),
  })
  .openapi({ required: [] })
  .openapi('Gif')

const MetaSchema = z
  .object({
    msg: z
      .string()
      .exactOptional()
      .openapi({ description: 'HTTP Response Message', example: 'OK' }),
    response_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique ID paired with this response from the API.',
        example: '57eea03c72381f86e05c35d2',
      }),
    status: z.int32().exactOptional().openapi({ description: 'HTTP Response Code', example: 200 }),
  })
  .openapi({
    description:
      'The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.\n',
    required: [],
  })
  .openapi('Meta')

const PaginationSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of items returned.', example: 25 }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Position in pagination.', example: 75 }),
    total_count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of items available.', example: 250 }),
  })
  .openapi({
    description:
      'The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.\n',
    required: [],
  })
  .openapi('Pagination')

const BadRequestResponse = {
  description: 'Your request was formatted incorrectly or missing required parameters.',
}

const ForbiddenResponse = {
  description:
    "You weren't authorized to make your request; most likely this indicates an issue with your API Key.",
}

const NotFoundResponse = {
  description:
    'The particular GIF you are requesting was not found. This occurs, for example, if you request a GIF by an id that does not exist.',
}

const TooManyRequestsResponse = {
  description:
    'Your API Key is making too many requests. Read about [requesting a Production Key](https://developers.giphy.com/docs/#access) to upgrade your API Key rate limits.\n',
}

const GifIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32(),
  )
  .openapi({
    param: {
      description: 'Filters results by specified GIF ID.',
      in: 'path',
      name: 'gifId',
      required: true,
      schema: { format: 'int32', type: 'integer' },
    },
  })

const GifIdsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters results by specified GIF IDs, separated by commas.',
      in: 'query',
      name: 'ids',
      schema: { type: 'string' },
      required: false,
    },
  })

const LangParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Specify default language for regional content; use a 2-letter ISO 639-1 language code.',
      in: 'query',
      name: 'lang',
      schema: { type: 'string' },
      required: false,
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32(),
  )
  .default(25)
  .exactOptional()
  .openapi({
    param: {
      description: 'The maximum number of records to return.',
      in: 'query',
      name: 'limit',
      schema: { default: 25, format: 'int32', type: 'integer' },
      required: false,
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description: 'An optional results offset.',
      in: 'query',
      name: 'offset',
      schema: { default: 0, format: 'int32', type: 'integer' },
      required: false,
    },
  })

const QueryParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Search query term or prhase.',
      in: 'query',
      name: 'q',
      required: true,
      schema: { type: 'string' },
    },
  })

const RatingParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters results by specified rating.',
      in: 'query',
      name: 'rating',
      schema: { type: 'string' },
      required: false,
    },
  })

const TagParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Filters results by specified tag.',
      in: 'query',
      name: 'tag',
      schema: { type: 'string' },
      required: false,
    },
  })

const TermParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Search term.',
      in: 'query',
      name: 's',
      required: true,
      schema: { type: 'string' },
    },
  })

const ApiKeySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const getGifsRoute = createRoute({
  method: 'get',
  path: '/gifs',
  tags: ['gifs'],
  summary: 'Get GIFs by ID',
  description: 'A multiget version of the get GIF by ID endpoint.\n',
  operationId: 'getGifsById',
  request: { query: z.object({ ids: GifIdsParamsSchema }) },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(GifSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getGifsRandomRoute = createRoute({
  method: 'get',
  path: '/gifs/random',
  tags: ['gifs'],
  summary: 'Random GIF',
  description:
    'Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.\n',
  operationId: 'randomGif',
  request: { query: z.object({ tag: TagParamsSchema, rating: RatingParamsSchema }) },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: GifSchema.exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getGifsSearchRoute = createRoute({
  method: 'get',
  path: '/gifs/search',
  tags: ['gifs'],
  summary: 'Search GIFs',
  description:
    'Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.\n',
  operationId: 'searchGifs',
  request: {
    query: z.object({
      q: QueryParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      rating: RatingParamsSchema,
      lang: LangParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Search results',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(GifSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getGifsTranslateRoute = createRoute({
  method: 'get',
  path: '/gifs/translate',
  tags: ['gifs'],
  summary: 'Translate phrase to GIF',
  description:
    'The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF\n',
  operationId: 'translateGif',
  request: { query: z.object({ s: TermParamsSchema }) },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: GifSchema.exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getGifsTrendingRoute = createRoute({
  method: 'get',
  path: '/gifs/trending',
  tags: ['gifs'],
  summary: 'Trending GIFs',
  description:
    'Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.\n',
  operationId: 'trendingGifs',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      rating: RatingParamsSchema,
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(GifSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getGifsGifIdRoute = createRoute({
  method: 'get',
  path: '/gifs/{gifId}',
  tags: ['gifs'],
  summary: 'Get GIF by Id',
  description: "Returns a GIF given that GIF's unique ID\n",
  operationId: 'getGifById',
  request: { params: z.object({ gifId: GifIdParamsSchema }) },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: GifSchema.exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getStickersRandomRoute = createRoute({
  method: 'get',
  path: '/stickers/random',
  tags: ['stickers'],
  summary: 'Random Sticker',
  description:
    'Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.\n',
  operationId: 'randomSticker',
  request: { query: z.object({ tag: TagParamsSchema, rating: RatingParamsSchema }) },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: GifSchema.exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getStickersSearchRoute = createRoute({
  method: 'get',
  path: '/stickers/search',
  tags: ['stickers'],
  summary: 'Search Stickers',
  description:
    'Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.\n',
  operationId: 'searchStickers',
  request: {
    query: z.object({
      q: QueryParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      rating: RatingParamsSchema,
      lang: LangParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Search results',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(GifSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getStickersTranslateRoute = createRoute({
  method: 'get',
  path: '/stickers/translate',
  tags: ['stickers'],
  summary: 'Translate phrase to Sticker',
  description:
    'The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.\n',
  operationId: 'translateSticker',
  request: { query: z.object({ s: TermParamsSchema }) },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ data: GifSchema.exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})

export const getStickersTrendingRoute = createRoute({
  method: 'get',
  path: '/stickers/trending',
  tags: ['stickers'],
  summary: 'Trending Stickers',
  description:
    'Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.\n',
  operationId: 'trendingStickers',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      rating: RatingParamsSchema,
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(GifSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              pagination: PaginationSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: BadRequestResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
})
