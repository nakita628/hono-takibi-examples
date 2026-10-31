import { createRoute, z } from '@hono/zod-openapi'

const Oauth2SecurityScheme = {
  description: 'OAuth2.0 Authorization for the EtMDB API',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://etmdb.com/api/oauth/authorize/',
      scopes: {
        admin: 'Grants read and write access to administrative information',
        groups: 'Grants access to groups',
        read: 'Grants read access',
        write: 'Grants write access',
      },
      tokenUrl: 'https://etmdb.com/api/oauth/token/',
    },
  },
  type: 'oauth2',
}

export const getApiV1CinemaDetailSearchCinemaNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/cinema-detail/search/{cinema_name}',
  tags: ['cinema-detail'],
  summary: 'Return cinema details search result',
  description:
    'Return cinema details search result\n\n### Response Class (Status 200)\n\n* __{cinema_name}__: Used as a key word to search cinemas,\n\nFor more details on how cinemas are listed [see here][ref].\n[ref]: https://etmdb.com/en/cinema-list/-updated_date',
  operationId: 'cinema-detail_search_read',
  request: {
    params: z.object({
      cinema_name: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'cinema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CinemaScheduleSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/cinema-schedule/search/{movie_title}',
  tags: ['cinema-schedule'],
  summary: 'Return cinema schedule search result',
  description:
    'Return cinema schedule search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search movie cast\n* You can use both Amharic or English charset/font to search\n\nFor more details about cinema schedule, check each cinema from the cinema list [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'cinema-schedule_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CinemaScheduleSearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/cinema-schedule/searchall/{param}',
  tags: ['cinema-schedule'],
  summary: 'Return cinema schedule search result',
  description:
    'Return cinema schedule search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* movie title\n* cinema name\n* cinema hall name or\n* cinema technology\n\nFor more details about cinema schedule, check each cinema from the cinema list [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'cinema-schedule_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CinemaSheduleShowtimeSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/cinema-shedule-showtime/search/{movie_title}',
  tags: ['cinema-shedule-showtime'],
  summary: 'Return cinema schedule and showtime search result',
  description:
    'Return cinema schedule and showtime search result\n\n### Response Class (Status 200)\n* __{movie_title}__: Used as a key word to search movie cast\n* You can use both Amharic or English charset/font to search\n\nFor more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'cinema-shedule-showtime_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CinemaSheduleShowtimeSearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/cinema-shedule-showtime/searchall/{param}',
  tags: ['cinema-shedule-showtime'],
  summary: 'Return cinema schedule and showtime search result',
  description:
    'Return cinema schedule and showtime search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* movie title\n* cinema name\n* cinema hall name\n* showtime starting date\n* showtime ending date or\n* cinema technology\n\nFor more details about cinema schedule, check each cinema from the cinema list [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'cinema-shedule-showtime_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CinemaSearchIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/cinema/search/{id}',
  tags: ['cinema'],
  summary: 'Return cinema search result',
  description:
    'Return cinema search result\n\n### Response Class (Status 200)\n\n* __{id}__: Used as a key to search cinemas,\n\nFor more details on how cinemas are listed [see here][ref].\n[ref]: https://etmdb.com/en/cinema-list/-updated_date',
  operationId: 'cinema_search_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CompanyCreditsSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/company-credits/search/{movie_title}',
  tags: ['company-credits'],
  summary: 'Return company credits search result',
  description:
    'Return company credits search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search company credits for the movie\n* You can use both Amharic or English charset/font to search\n\nFor more details on how company credits are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'company-credits_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CompanyCreditsSearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/company-credits/searchall/{param}',
  tags: ['company-credits'],
  summary: 'Return company credits search result',
  description:
    'Return company credits search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* company name\n* movie title or\n* company credit description (such as production, cinematography, etc)\n\nFor more details on how company credits are listed [see here][ref].\n[ref]: https://etmdb.com/en/company-list/company_name',
  operationId: 'company-credits_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1CompanySearchCompanyNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/company/search/{company_name}',
  tags: ['company'],
  summary: 'Return company search result',
  description:
    'Return company search result\n\n### Response Class (Status 200)\n\n* __{company_name}__: Used as a key word to search companies,\n\nFor more details on how companies are listed [see here][ref].\n[ref]: https://etmdb.com/en/company-list/-updated_date',
  operationId: 'company_search_read',
  request: {
    params: z.object({
      company_name: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'company_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1FilmographyTypeSearchFilmographyDescriptionRoute = createRoute({
  method: 'get',
  path: '/api/v1/filmography-type/search/{filmography_description}',
  tags: ['filmography-type'],
  summary: 'Return filmography type search result',
  description:
    'Return filmography type search result\n\n### Response Class (Status 200)\n\n* __{filmography_description}__: Used as a key word to search filmography types\n\nFor more details on how filmography types are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'filmography-type_search_read',
  request: {
    params: z.object({
      filmography_description: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'filmography_description',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1FilmographySearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/filmography/search/{movie_title}',
  tags: ['filmography'],
  summary: 'Return filmography search result',
  description:
    'Return filmography search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search movies\n* You can use both Amharic or English charset/font to search\n\nFor more details on how filmographies are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'filmography_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1FilmographySearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/filmography/searchall/{param}',
  tags: ['filmography'],
  summary: 'Return filmography search result',
  description:
    'Return filmography search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* artist first name\n* artist last name\n* artist username\n* movie title or\n* filmography description (such as director, actor, producer, etc)\n\nFor more details on how filmographies are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'filmography_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1GenreTypeSearchGenreDescriptionRoute = createRoute({
  method: 'get',
  path: '/api/v1/genre-type/search/{genre_description}',
  tags: ['genre-type'],
  summary: 'Return genre type search result',
  description:
    'Return genre type search result\n\n### Response Class (Status 200)\n\n* __{genre_description}__: Used as a key word to search genre types\n\nFor more details on how genre types are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'genre-type_search_read',
  request: {
    params: z.object({
      genre_description: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'genre_description',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1GenreSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/genre/search/{movie_title}',
  tags: ['genre'],
  summary: 'Return movie genre search result',
  description:
    'Return movie genre search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search movie genres\n* You can use both Amharic or English charset/font to search\n\nFor more details on how movies are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'genre_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1GenreSearchallMovieGenreTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/genre/searchall/{movie_genre_type}',
  tags: ['genre'],
  summary: 'Return movie genre search result',
  description:
    'Return movie genre search result\n\n### Response Class (Status 200)\n\n* __{movie_genre_type}__: Used as a key word to search movie genres\n\nFor more details on how movies are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'genre_searchall_read',
  request: {
    params: z.object({
      movie_genre_type: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_genre_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1JobSearchJobTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/job/search/{job_title}',
  tags: ['job'],
  summary: 'Return job details search result',
  description:
    'Return job details search result\n\n### Response Class (Status 200)\n\n* __{job_title}__: Used as a key word to search jobs,\n\nFor more details on how job are listed [see here][ref].\n[ref]: https://etmdb.com/en/job-list/-updated_date',
  operationId: 'job_search_read',
  request: {
    params: z.object({
      job_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'job_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1JobSearchallCompanyNameRoute = createRoute({
  method: 'get',
  path: '/api/v1/job/searchall/{company_name}',
  tags: ['job'],
  summary: 'Return job details search result',
  description:
    'Return job details search result\n\n### Response Class (Status 200)\n\n* __{company_name}__: Used as a key word to search jobs,\n\nFor more details on how job are listed [see here][ref].\n[ref]: https://etmdb.com/en/job-list/-updated_date',
  operationId: 'job_searchall_read',
  request: {
    params: z.object({
      company_name: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'company_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1MediaSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/media/search/{movie_title}',
  tags: ['media'],
  summary: 'Return movie media search result',
  description:
    'Return movie media search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search media for movies\n* You can use both Amharic or English charset/font to search\n\nFor more details on how media is listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'media_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1MediaSearchallUserRoute = createRoute({
  method: 'get',
  path: '/api/v1/media/searchall/{user}',
  tags: ['media'],
  summary: 'Return cast media search result',
  description:
    'Return cast media search result\n\n### Response Class (Status 200)\n__{user}__ argument can be\n* artist first name\n* artist last name\n* artist username\n\nFor more details on how cast media is listed [see here][ref].\n[ref]: https://etmdb.com/en/cast-list/-updated_date',
  operationId: 'media_searchall_read',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1MovieCastSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/movie-cast/search/{movie_title}',
  tags: ['movie-cast'],
  summary: 'Return movie cast search result',
  description:
    'Return movie cast search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search movie cast\n* You can use both Amharic or English charset/font to search\n\nFor more details on how movie casts are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'movie-cast_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1MovieCastSearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/movie-cast/searchall/{param}',
  tags: ['movie-cast'],
  summary: 'Return movie cast search result',
  description:
    'Return movie cast search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* artist first name\n* artist last name\n* artist username\n* movie title or\n* character name\n\nFor more details on how movie casts are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'movie-cast_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1MovieSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/movie/search/{movie_title}',
  tags: ['movie'],
  summary: 'Return movie search result',
  description:
    'Return movie search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search movies\n* You can use both Amharic or English charset/font to search\n\nFor more details on how movies are listed [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'movie_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1NewsSearchTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/news/search/{title}',
  tags: ['news'],
  summary: 'Return news or article search result',
  description:
    'Return news or article search result\n\n### Response Class (Status 200)\n\n* __{title}__: Used as a key word to search news and articles,\n\nFor more details on how news & articles are listed [see here][ref].\n[ref]: https://etmdb.com/en/news-list/-updated_date',
  operationId: 'news_search_read',
  request: {
    params: z.object({
      title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1PeopleSearchUserRoute = createRoute({
  method: 'get',
  path: '/api/v1/people/search/{user}',
  tags: ['people'],
  summary: 'Return cast search result',
  description:
    'Return cast search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* artist first name\n* artist last name\n* artist username\n\nFor more details on how cast are listed [see here][ref].\n[ref]: https://etmdb.com/en/cast-list/-updated_date',
  operationId: 'people_search_read',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'user',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1ShowtimeSearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/showtime/searchall/{param}',
  tags: ['showtime'],
  summary: 'Return showtime search result',
  description:
    'Return showtime search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* show time or\n* day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]\n\nFor more details about showtime, check each cinema from the cinema list [see here][ref].\n[ref]: https://etmdb.com/en/movie-list/-updated_date',
  operationId: 'showtime_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1WatchlistSearchMovieTitleRoute = createRoute({
  method: 'get',
  path: '/api/v1/watchlist/search/{movie_title}',
  tags: ['watchlist'],
  summary: 'Return watchlist search result',
  description:
    'Return watchlist search result\n\n### Response Class (Status 200)\n\n* __{movie_title}__: Used as a key word to search movies on watchlist\n* You can use both Amharic or English charset/font to search\n\nFor more details on how watchlist are listed [see here][ref].\n[ref]: https://etmdb.com/en/movies/watchlist/id',
  operationId: 'watchlist_search_read',
  request: {
    params: z.object({
      movie_title: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'movie_title',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getApiV1WatchlistSearchallParamRoute = createRoute({
  method: 'get',
  path: '/api/v1/watchlist/searchall/{param}',
  tags: ['watchlist'],
  summary: 'Return watchlist search result',
  description:
    'Return watchlist search result\n\n### Response Class (Status 200)\n__{param}__ argument can be\n* artist first name\n* artist last name\n* artist username\n* movie title or\n\nFor more details on how watchlist are listed [see here][ref].\n[ref]: https://etmdb.com/en/movies/watchlist/id',
  operationId: 'watchlist_searchall_read',
  request: {
    params: z.object({
      param: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'param',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '' } },
})
