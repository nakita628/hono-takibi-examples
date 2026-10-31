import { createRoute, z } from '@hono/zod-openapi'

const CountrySchema = z
  .object({
    iso: z.string().exactOptional(),
    iso3: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: 'Country model', required: [] })
  .openapi('Country')

const LanguageSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: 'Language model', required: [] })
  .openapi('Language')

const PodcastSchema = z
  .object({
    author: z.string().exactOptional(),
    block: z.boolean().exactOptional(),
    categories: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    copyright: z.string().exactOptional(),
    country: z.string().exactOptional(),
    description: z.string(),
    explicit: z.boolean().exactOptional(),
    image: z.string().exactOptional(),
    key: z.string().exactOptional(),
    keywords: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    language: z.string(),
    link: z.string().exactOptional(),
    ownerEmail: z.string().exactOptional(),
    ownerName: z.string().exactOptional(),
    showType: z.string().exactOptional(),
    subtitle: z.string().exactOptional(),
    summary: z.string(),
    title: z.string(),
  })
  .openapi({
    description: 'Podcast model',
    required: ['categories', 'description', 'language', 'summary', 'title'],
  })
  .openapi('Podcast')

const PodcastCategorySchema = z
  .object({
    id: z.string().exactOptional(),
    parent: z.string().exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ description: 'PodcastCategory model', required: [] })
  .openapi('PodcastCategory')

const PodcastEpisodeSchema = z
  .object({
    author: z.string().exactOptional(),
    block: z.boolean().exactOptional(),
    description: z.string(),
    duration: z
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
    episode: z
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
    episodeType: z.string().exactOptional(),
    explicit: z.boolean().exactOptional(),
    fileUrl: z.string().exactOptional(),
    image: z.string().exactOptional(),
    key: z.string().exactOptional(),
    link: z.string().exactOptional(),
    publishDate: z.iso.datetime({ offset: true }),
    season: z
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
    size: z
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
    subtitle: z.string().exactOptional(),
    summary: z.string(),
    tags: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    title: z.string(),
  })
  .openapi({
    description: 'PodcastEpisode model',
    required: ['description', 'publishDate', 'summary', 'title'],
  })
  .openapi('PodcastEpisode')

const PodcastEpisodeListSchema = z
  .object({
    items: z.array(PodcastEpisodeSchema).exactOptional(),
    total: z
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
  })
  .openapi({ description: 'List of PodcastEpisode', required: [] })
  .openapi('PodcastEpisodeList')

const PodcastFiltersSchema = z
  .object({
    category: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    country: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    language: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    podcastType: z.enum(['podcasts', 'shows']).exactOptional(),
  })
  .openapi({ description: 'Filters for podcast search', required: [] })
  .openapi('PodcastFilters')

const PodcastSearchParamsSchema = z
  .object({
    filters: PodcastFiltersSchema.exactOptional(),
    hitsPerPage: z.int32().min(1).max(1000).default(10).exactOptional(),
    page: z.int32().min(1).default(1).exactOptional(),
    query: z.string().exactOptional(),
  })
  .openapi({ description: 'Podcast search params', required: [] })
  .openapi('PodcastSearchParams')

const PodcastSearchResultsSchema = z
  .object({
    hits: z.array(PodcastSchema).exactOptional(),
    total: z
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
  })
  .openapi({ description: 'Podcast search results', required: [] })
  .openapi('PodcastSearchResults')

const StationSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    description: z.string().exactOptional(),
    genre: z.string().exactOptional(),
    key: z.string().exactOptional(),
    language: z.string().exactOptional(),
    logo: z.string().exactOptional(),
    name: z.string().exactOptional(),
    stream: z.string().exactOptional(),
    website: z.string().exactOptional(),
  })
  .openapi({ description: 'Station model', required: [] })
  .openapi('Station')

const StationFiltersSchema = z
  .object({
    country: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    genre: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    language: z
      .array(z.string())
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
  .openapi({ description: 'Filters for station search', required: [] })
  .openapi('StationFilters')

const StationGenreSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: 'StationGenre model', required: [] })
  .openapi('StationGenre')

const StationListSchema = z
  .object({
    items: z.array(StationSchema).exactOptional(),
    total: z
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
  })
  .openapi({ description: 'List of Station', required: [] })
  .openapi('StationList')

const StationSearchParamsSchema = z
  .object({
    filters: StationFiltersSchema.exactOptional(),
    hitsPerPage: z.int32().min(1).max(1000).default(10).exactOptional(),
    page: z.int32().min(1).default(1).exactOptional(),
    query: z.string().exactOptional(),
  })
  .openapi({ description: 'Station search params', required: [] })
  .openapi('StationSearchParams')

const StationSearchResultsSchema = z
  .object({
    hits: z.array(StationSchema).exactOptional(),
    total: z
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
  })
  .openapi({ description: 'Station search results', required: [] })
  .openapi('StationSearchResults')

const APIKeySecurityScheme = { in: 'header', name: 'x-zeno-api-key', type: 'apiKey' }

export const getApiV2PodcastsCategoriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/podcasts/categories',
  tags: ['API-v2'],
  description:
    'Get the list of Categories that can be used to filter podcasts in the search podcasts request',
  operationId: 'getPodcastCategories',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(PodcastCategorySchema) } } },
  },
})

export const getApiV2PodcastsCountriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/podcasts/countries',
  tags: ['API-v2'],
  description:
    'Get the list of Countries that can be used to filter podcasts in the search podcasts request',
  operationId: 'getPodcastCountries',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.array(CountrySchema) } } } },
})

export const postApiV2PodcastsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v2/podcasts/create',
  tags: ['API-v2'],
  description: 'Create podcast',
  operationId: 'createPodcast',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file_logo: z.file().openapi({ type: 'string', format: 'binary' }),
              podcast: z
                .object({
                  author: z.string().exactOptional(),
                  block: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  categories: z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()).superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  ),
                  copyright: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  description: z.string(),
                  explicit: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  image: z.string().exactOptional(),
                  key: z.string().exactOptional(),
                  keywords: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()).superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      }),
                    )
                    .exactOptional(),
                  language: z.string(),
                  link: z.string().exactOptional(),
                  ownerEmail: z.string().exactOptional(),
                  ownerName: z.string().exactOptional(),
                  showType: z.string().exactOptional(),
                  subtitle: z.string().exactOptional(),
                  summary: z.string(),
                  title: z.string(),
                })
                .openapi({
                  description: 'Podcast model',
                  required: ['categories', 'description', 'language', 'summary', 'title'],
                }),
            })
            .openapi({ required: ['file_logo', 'podcast'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PodcastSchema } } } },
})

export const getApiV2PodcastsLanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/podcasts/languages',
  tags: ['API-v2'],
  description:
    'Get the list of Languages that can be used to filter podcasts in the search podcasts request',
  operationId: 'getPodcastLanguages',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(LanguageSchema) } } },
  },
})

export const postApiV2PodcastsSearchRoute = createRoute({
  method: 'post',
  path: '/api/v2/podcasts/search',
  tags: ['API-v2'],
  description: 'Search podcasts',
  operationId: 'searchPodcasts',
  request: {
    body: {
      content: { 'application/json': { schema: PodcastSearchParamsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: PodcastSearchResultsSchema } } },
  },
})

export const getApiV2PodcastsPodcastKeyRoute = createRoute({
  method: 'get',
  path: '/api/v2/podcasts/{podcastKey}',
  tags: ['API-v2'],
  description: 'Get podcast',
  operationId: 'getPodcast',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PodcastSchema } } } },
})

export const putApiV2PodcastsPodcastKeyRoute = createRoute({
  method: 'put',
  path: '/api/v2/podcasts/{podcastKey}',
  tags: ['API-v2'],
  description: 'Update podcast',
  operationId: 'updatePodcast',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file_logo: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
              podcast: z
                .object({
                  author: z.string().exactOptional(),
                  block: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  categories: z.preprocess(
                    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                    z.array(z.string()).superRefine((items, ctx) => {
                      const seen = new Map()
                      for (const [i, val] of items.entries()) {
                        const key = JSON.stringify(val)
                        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                        else seen.set(key, i)
                      }
                    }),
                  ),
                  copyright: z.string().exactOptional(),
                  country: z.string().exactOptional(),
                  description: z.string(),
                  explicit: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  image: z.string().exactOptional(),
                  key: z.string().exactOptional(),
                  keywords: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()).superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      }),
                    )
                    .exactOptional(),
                  language: z.string(),
                  link: z.string().exactOptional(),
                  ownerEmail: z.string().exactOptional(),
                  ownerName: z.string().exactOptional(),
                  showType: z.string().exactOptional(),
                  subtitle: z.string().exactOptional(),
                  summary: z.string(),
                  title: z.string(),
                })
                .openapi({
                  description: 'Podcast model',
                  required: ['categories', 'description', 'language', 'summary', 'title'],
                }),
            })
            .openapi({ required: ['podcast'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PodcastSchema } } } },
})

export const deleteApiV2PodcastsPodcastKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v2/podcasts/{podcastKey}',
  tags: ['API-v2'],
  description: 'Delete podcast',
  operationId: 'deletePodcast',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV2PodcastsPodcastKeyEpisodesRoute = createRoute({
  method: 'get',
  path: '/api/v2/podcasts/{podcastKey}/episodes',
  tags: ['API-v2'],
  description: 'Get podcast episodes',
  operationId: 'getPodcastEpisodes',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .default('10')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '10', maximum: 1000, minimum: 1, type: 'string' },
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', minimum: 0, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: PodcastEpisodeListSchema } } },
  },
})

export const postApiV2PodcastsPodcastKeyEpisodesCreateRoute = createRoute({
  method: 'post',
  path: '/api/v2/podcasts/{podcastKey}/episodes/create',
  tags: ['API-v2'],
  description: 'Create podcast episode',
  operationId: 'createPodcastEpisode',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              episode: z
                .object({
                  author: z.string().exactOptional(),
                  block: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  description: z.string(),
                  duration: z
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
                  episode: z
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
                  episodeType: z.string().exactOptional(),
                  explicit: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  fileUrl: z.string().exactOptional(),
                  image: z.string().exactOptional(),
                  key: z.string().exactOptional(),
                  link: z.string().exactOptional(),
                  publishDate: z.iso.datetime({ offset: true }),
                  season: z
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
                  size: z
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
                  subtitle: z.string().exactOptional(),
                  summary: z.string(),
                  tags: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()).superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      }),
                    )
                    .exactOptional(),
                  title: z.string(),
                })
                .openapi({
                  description: 'PodcastEpisode model',
                  required: ['description', 'publishDate', 'summary', 'title'],
                }),
              file_logo: z.file().openapi({ type: 'string', format: 'binary' }),
              file_media: z.file().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: ['episode', 'file_logo', 'file_media'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PodcastEpisodeSchema } } } },
})

export const getApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute = createRoute({
  method: 'get',
  path: '/api/v2/podcasts/{podcastKey}/episodes/{episodeKey}',
  tags: ['API-v2'],
  description: 'Get podcast episode',
  operationId: 'getPodcastEpisode',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
      episodeKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'episodeKey', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PodcastEpisodeSchema } } } },
})

export const putApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute = createRoute({
  method: 'put',
  path: '/api/v2/podcasts/{podcastKey}/episodes/{episodeKey}',
  tags: ['API-v2'],
  description: 'Update podcast episode',
  operationId: 'updatePodcastEpisode',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
      episodeKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'episodeKey', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              episode: z
                .object({
                  author: z.string().exactOptional(),
                  block: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  description: z.string(),
                  duration: z
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
                  episode: z
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
                  episodeType: z.string().exactOptional(),
                  explicit: z
                    .preprocess(
                      ((read) => (val: unknown) => {
                        const result = read.safeParse(val)
                        return result.success ? result.data : val
                      })(z.stringbool()),
                      z.boolean(),
                    )
                    .exactOptional(),
                  fileUrl: z.string().exactOptional(),
                  image: z.string().exactOptional(),
                  key: z.string().exactOptional(),
                  link: z.string().exactOptional(),
                  publishDate: z.iso.datetime({ offset: true }),
                  season: z
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
                  size: z
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
                  subtitle: z.string().exactOptional(),
                  summary: z.string(),
                  tags: z
                    .preprocess(
                      (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                      z.array(z.string()).superRefine((items, ctx) => {
                        const seen = new Map()
                        for (const [i, val] of items.entries()) {
                          const key = JSON.stringify(val)
                          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                          else seen.set(key, i)
                        }
                      }),
                    )
                    .exactOptional(),
                  title: z.string(),
                })
                .openapi({
                  description: 'PodcastEpisode model',
                  required: ['description', 'publishDate', 'summary', 'title'],
                }),
              file_logo: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: ['episode'] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: PodcastEpisodeSchema } } } },
})

export const deleteApiV2PodcastsPodcastKeyEpisodesEpisodeKeyRoute = createRoute({
  method: 'delete',
  path: '/api/v2/podcasts/{podcastKey}/episodes/{episodeKey}',
  tags: ['API-v2'],
  description: 'Delete podcast episode',
  operationId: 'deletePodcast_1',
  request: {
    params: z.object({
      podcastKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'podcastKey', required: true, schema: { type: 'string' } },
        }),
      episodeKey: z
        .string()
        .openapi({
          param: { in: 'path', name: 'episodeKey', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiV2StationsCountriesRoute = createRoute({
  method: 'get',
  path: '/api/v2/stations/countries',
  tags: ['API-v2'],
  description:
    'Get the list of Countries that can be used to filter stations in the search stations request',
  operationId: 'getStationCountries',
  responses: { 200: { description: 'OK', content: { '*/*': { schema: z.array(CountrySchema) } } } },
})

export const getApiV2StationsGenresRoute = createRoute({
  method: 'get',
  path: '/api/v2/stations/genres',
  tags: ['API-v2'],
  description:
    'Get the list of Genres that can be used to filter stations in the search stations request',
  operationId: 'getStationGenres',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(StationGenreSchema) } } },
  },
})

export const getApiV2StationsLanguagesRoute = createRoute({
  method: 'get',
  path: '/api/v2/stations/languages',
  tags: ['API-v2'],
  description:
    'Get the list of Languages that can be used to filter stations in the search stations request',
  operationId: 'getStationLanguages',
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(LanguageSchema) } } },
  },
})

export const getApiV2StationsListRoute = createRoute({
  method: 'get',
  path: '/api/v2/stations/list',
  tags: ['API-v2'],
  description: 'List stations',
  operationId: 'getPartnerAggregatorStations',
  request: {
    query: z.object({
      page: z
        .string()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', minimum: 1, type: 'string' },
          },
        }),
      hitsPerPage: z
        .string()
        .default('10')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'hitsPerPage',
            required: false,
            schema: { default: '10', maximum: 1000, minimum: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { '*/*': { schema: StationListSchema } } } },
})

export const postApiV2StationsSearchRoute = createRoute({
  method: 'post',
  path: '/api/v2/stations/search',
  tags: ['API-v2'],
  description: 'Search stations',
  operationId: 'searchStations',
  request: {
    body: {
      content: { 'application/json': { schema: StationSearchParamsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: StationSearchResultsSchema } } },
  },
})
