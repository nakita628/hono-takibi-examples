import { createRoute, z } from '@hono/zod-openapi'

const AddHiddenItemsSchema = z.any().openapi('AddHiddenItems')

const AddListItemsSchema = z.any().openapi('AddListItems')

const AddRatingsSchema = z.any().openapi('AddRatings')

const AddToCollectionSchema = z.any().openapi('AddToCollection')

const AddToHistorySchema = z.any().openapi('AddToHistory')

const AddToPersonalRecommendationsBETASchema = z.any().openapi('AddToPersonalRecommendationsBETA')

const AddToWatchlistSchema = z.any().openapi('AddToWatchlist')

const AliasesSchema = z.any().openapi('Aliases')

const AllDVDSchema = z.any().openapi('AllDVD')

const AllMoviesSchema = z.any().openapi('AllMovies')

const AllNewShowsSchema = z.any().openapi('AllNewShows')

const AllSeasonPremieresSchema = z.any().openapi('AllSeasonPremieres')

const AllShowsSchema = z.any().openapi('AllShows')

const AnticipatedSchema = z.any().openapi('Anticipated')

const ApproveOrDenyFollowerRequestsSchema = z.any().openapi('ApproveOrDenyFollowerRequests')

const AuthorizeSchema = z.any().openapi('Authorize')

const BoxOfficeSchema = z.any().openapi('BoxOffice')

const CertificationsSchema = z.any().openapi('Certifications')

const CheckinSchema = z.any().openapi('Checkin')

const CollaborationsSchema = z.any().openapi('Collaborations')

const CollectedSchema = z.any().openapi('Collected')

const CollectionSchema = z.any().openapi('Collection')

const CollectionProgressSchema = z.any().openapi('CollectionProgress')

const CommentSchema = z.any().openapi('Comment')

const CommentsSchema = z.any().openapi('Comments')

const DeviceCodeSchema = z.any().openapi('DeviceCode')

const FollowSchema = z.any().openapi('Follow')

const FollowerRequestsSchema = z.any().openapi('FollowerRequests')

const FollowersSchema = z.any().openapi('Followers')

const FollowingSchema = z.any().openapi('Following')

const FollowingRequestsSchema = z.any().openapi('FollowingRequests')

const FriendsSchema = z.any().openapi('Friends')

const GetCollectionSchema = z.any().openapi('GetCollection')

const GetHistorySchema = z.any().openapi('GetHistory')

const GetPersonalRecommendationsBETASchema = z.any().openapi('GetPersonalRecommendationsBETA')

const GetRatingsSchema = z.any().openapi('GetRatings')

const GetTokenSchema = z.any().openapi('GetToken')

const GetWatchedSchema = z.any().openapi('GetWatched')

const GetWatchlistSchema = z.any().openapi('GetWatchlist')

const HiddenItemsSchema = z.any().openapi('HiddenItems')

const HideMovieSchema = z.any().openapi('HideMovie')

const HideShowSchema = z.any().openapi('HideShow')

const HistorySchema = z.any().openapi('History')

const IDLookupSchema = z.any().openapi('IDLookup')

const ItemSchema = z.any().openapi('Item')

const LastActivitiesSchema = z.any().openapi('LastActivities')

const LastEpisodeSchema = z.any().openapi('LastEpisode')

const LikeSchema = z.any().openapi('Like')

const LikesSchema = z.any().openapi('Likes')

const ListSchema = z.any().openapi('List')

const ListCommentsSchema = z.any().openapi('ListComments')

const ListItemsSchema = z.any().openapi('ListItems')

const ListLikeSchema = z.any().openapi('ListLike')

const ListLikesSchema = z.any().openapi('ListLikes')

const ListsSchema = z.any().openapi('Lists')

const MoviesSchema = z.any().openapi('Movies')

const MyDVDSchema = z.any().openapi('MyDVD')

const MyMoviesSchema = z.any().openapi('MyMovies')

const MyNewShowsSchema = z.any().openapi('MyNewShows')

const MySeasonPremieresSchema = z.any().openapi('MySeasonPremieres')

const MyShowsSchema = z.any().openapi('MyShows')

const NextEpisodeSchema = z.any().openapi('NextEpisode')

const PauseSchema = z.any().openapi('Pause')

const PeopleSchema = z.any().openapi('People')

const PersonalRecommendationsBETASchema = z.any().openapi('PersonalRecommendationsBETA')

const PlaybackSchema = z.any().openapi('Playback')

const PlayedSchema = z.any().openapi('Played')

const PopularSchema = z.any().openapi('Popular')

const ProfileSchema = z.any().openapi('Profile')

const RatingsSchema = z.any().openapi('Ratings')

const RecentSchema = z.any().openapi('Recent')

const RecommendedSchema = z.any().openapi('Recommended')

const RefreshTokenSchema = z.any().openapi('RefreshToken')

const RelatedSchema = z.any().openapi('Related')

const ReleasesSchema = z.any().openapi('Releases')

const RemoveHiddenItemsSchema = z.any().openapi('RemoveHiddenItems')

const RemoveListItemsSchema = z.any().openapi('RemoveListItems')

const RemovePlaybackSchema = z.any().openapi('RemovePlayback')

const RemoveRatingsSchema = z.any().openapi('RemoveRatings')

const RemoveFromCollectionSchema = z.any().openapi('RemoveFromCollection')

const RemoveFromHistorySchema = z.any().openapi('RemoveFromHistory')

const RemoveFromPersonalRecommendationsBETASchema = z
  .any()
  .openapi('RemoveFromPersonalRecommendationsBETA')

const RemoveFromWatchlistSchema = z.any().openapi('RemoveFromWatchlist')

const ReorderListItemsSchema = z.any().openapi('ReorderListItems')

const ReorderListsSchema = z.any().openapi('ReorderLists')

const ReorderPersonalRecommendationsBETASchema = z
  .any()
  .openapi('ReorderPersonalRecommendationsBETA')

const ReorderWatchlistSchema = z.any().openapi('ReorderWatchlist')

const RepliesSchema = z.any().openapi('Replies')

const ResetWatchedProgressSchema = z.any().openapi('ResetWatchedProgress')

const RevokeTokenSchema = z.any().openapi('RevokeToken')

const SavedFiltersSchema = z.any().openapi('SavedFilters')

const SeasonSchema = z.any().openapi('Season')

const SettingsSchema = z.any().openapi('Settings')

const ShowsSchema = z.any().openapi('Shows')

const StartSchema = z.any().openapi('Start')

const StatsSchema = z.any().openapi('Stats')

const StopSchema = z.any().openapi('Stop')

const StudiosSchema = z.any().openapi('Studios')

const SummarySchema = z.any().openapi('Summary')

const TextQuerySchema = z.any().openapi('TextQuery')

const TranslationsSchema = z.any().openapi('Translations')

const TrendingSchema = z.any().openapi('Trending')

const UpdatedIDsSchema = z.any().openapi('UpdatedIDs')

const UpdatesSchema = z.any().openapi('Updates')

const WatchedSchema = z.any().openapi('Watched')

const WatchedProgressSchema = z.any().openapi('WatchedProgress')

const WatchingSchema = z.any().openapi('Watching')

const WatchlistSchema = z.any().openapi('Watchlist')

const AddHiddenItemsBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          movies: z
            .array(
              z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .openapi({ required: ['ids'] }),
            )
            .exactOptional(),
          seasons: z
            .array(
              z
                .object({
                  ids: z
                    .object({ trakt: z.number().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          shows: z
            .array(
              z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                      tvdb: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                  seasons: z
                    .array(
                      z.object({ number: z.number().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  title: z.string(),
                  year: z.number(),
                })
                .openapi({ required: ['title', 'year', 'ids'] }),
            )
            .exactOptional(),
        })
        .openapi({
          example: {
            movies: [
              {
                ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                title: 'Batman Begins',
                year: 2005,
              },
              { ids: { imdb: 'tt0000111' } },
            ],
            seasons: [{ ids: { trakt: 1337 } }],
            shows: [
              {
                ids: { imdb: 'tt0903747', slug: 'breaking-bad', tmdb: 1396, trakt: 1, tvdb: 81189 },
                title: 'Breaking Bad',
                year: 2008,
              },
              {
                ids: {
                  imdb: 'tt1520211',
                  slug: 'the-walking-dead',
                  tmdb: 1402,
                  trakt: 2,
                  tvdb: 153021,
                },
                seasons: [{ number: 3 }],
                title: 'The Walking Dead',
                year: 2010,
              },
            ],
          },
          required: [],
        }),
    },
  },
}

const RemoveItemsFromCollectionBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          episodes: z
            .array(
              z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                      tvdb: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          movies: z
            .array(
              z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .openapi({ required: ['ids'] }),
            )
            .exactOptional(),
          seasons: z
            .array(
              z
                .object({
                  ids: z
                    .object({
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                      tvdb: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .openapi({ required: [] }),
            )
            .exactOptional(),
          shows: z
            .array(
              z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                      tvdb: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                  seasons: z.array(
                    z
                      .object({
                        episodes: z
                          .array(z.object({ number: z.number() }).openapi({ required: ['number'] }))
                          .exactOptional(),
                        number: z.number(),
                      })
                      .openapi({ required: ['number'] }),
                  ),
                  title: z.string(),
                  year: z.number(),
                })
                .openapi({ required: ['title', 'year', 'ids', 'seasons'] }),
            )
            .exactOptional(),
        })
        .openapi({
          example: {
            episodes: [{ ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 } }],
            movies: [
              {
                ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                title: 'Batman Begins',
                year: 2005,
              },
              { ids: { imdb: 'tt0000111' } },
            ],
            seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 } }],
            shows: [
              {
                ids: { imdb: 'tt0903747', slug: 'breaking-bad', tmdb: 1396, trakt: 1, tvdb: 81189 },
                title: 'Breaking Bad',
                year: 2008,
              },
              {
                ids: {
                  imdb: 'tt1520211',
                  slug: 'the-walking-dead',
                  tmdb: 1402,
                  trakt: 2,
                  tvdb: 153021,
                },
                seasons: [{ number: 3 }],
                title: 'The Walking Dead',
                year: 2010,
              },
              {
                ids: { imdb: 'tt0804503', slug: 'mad-men', tmdb: 1104, trakt: 4, tvdb: 80337 },
                seasons: [{ episodes: [{ number: 1 }, { number: 2 }], number: 1 }],
                title: 'Mad Men',
                year: 2007,
              },
            ],
          },
          required: [],
        }),
    },
  },
}

const ReorderWatchlistItemsBodyRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({ rank: z.array(z.number()).exactOptional() })
        .openapi({ example: { rank: [923, 324, 98768, 456456, 345, 12, 990] }, required: [] }),
    },
  },
}

const Oauth2SecurityScheme = {
  flows: { authorizationCode: { authorizationUrl: '/', scopes: {}, tokenUrl: '/' } },
  type: 'oauth2',
}

export const getCalendarsAllDvdStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/all/dvd/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get DVD releases',
  description:
    '#### &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a DVD release date during the time period specified.',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCalendarsAllMoviesStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/all/movies/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get movies',
  description:
    '#### &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a release date during the time period specified.',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCalendarsAllShowsNewStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/all/shows/new/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get new shows',
  description:
    '#### &#10024; Extended Info &#127898; Filters\n\nReturns all new show premieres (season 1, episode 1) airing during the time period specified.',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCalendarsAllShowsPremieresStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/all/shows/premieres/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get season premieres',
  description:
    '#### &#10024; Extended Info &#127898; Filters\n\nReturns all show premieres (any season, episode 1) airing during the time period specified.',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCalendarsAllShowsStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/all/shows/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get shows',
  description:
    '#### &#10024; Extended Info &#127898; Filters\n\nReturns all shows airing during the time period specified.',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCalendarsMyDvdStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/my/dvd/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get DVD releases',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a DVD release date during the time period specified.',
  operationId: 'Get DVD releases',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getCalendarsMyMoviesStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/my/movies/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get movies',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all movies with a release date during the time period specified.',
  operationId: 'Get movies',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getCalendarsMyShowsNewStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/my/shows/new/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get new shows',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all new show premieres (season 1, episode 1) airing during the time period specified.',
  operationId: 'Get new shows',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getCalendarsMyShowsPremieresStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/my/shows/premieres/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get season premieres',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all show premieres (any season, episode 1) airing during the time period specified.',
  operationId: 'Get season premieres',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getCalendarsMyShowsStartDateDaysRoute = createRoute({
  method: 'get',
  path: '/calendars/my/shows/{start_date}/{days}',
  tags: ['Calendars'],
  summary: 'Get shows',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters\n\nReturns all shows airing during the time period specified.',
  operationId: 'Get shows',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start the calendar on this date.',
            example: '2014-09-01',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      days: z
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
            description: 'Number of days to display.',
            example: '7',
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-End-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getCertificationsTypeRoute = createRoute({
  method: 'get',
  path: '/certifications/{type}',
  tags: ['Certifications'],
  summary: 'Get certifications',
  description: 'Get a list of all certifications, including names, slugs, and descriptions.',
  operationId: 'Get certifications',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postCheckinRoute = createRoute({
  method: 'post',
  path: '/checkin',
  tags: ['Checkin'],
  summary: 'Check into an item',
  description:
    '#### &#128274; OAuth Required\n\nCheck into a movie or episode. This should be tied to a user action to manually indicate they are watching something. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed. A unique history `id` (64-bit integer) will be returned and can be used to reference this checkin directly.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `sharing`  | object | Control sharing to any connected social networks. (see below &#8595;) |\n| `message`  | string | Message used for sharing. If not sent, it will use the watching string in the user settings. |\n| `venue_id` | string | Foursquare venue ID. |\n| `venue_name` | string | Foursquare venue name. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |\n\n#### Sharing\n\nThe `sharing` object is optional and will apply the user\'s settings if not sent. If `sharing` is sent, each key will override the user\'s setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.\n\n| Key | Type |\n|---|---|\n| `twitter` | boolean |\n| `tumblr` | boolean |\n\n**Note:** If a checkin is already in progress, a `409` HTTP status code will returned. The response will contain an `expires_at` timestamp which is when the user can check in again.',
  operationId: 'Check into an item',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              app_date: z.string().exactOptional(),
              app_version: z.string().exactOptional(),
              message: z.string().exactOptional(),
              movie: z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              sharing: z
                .object({
                  tumblr: z.boolean().exactOptional(),
                  twitter: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({
              example: {
                app_date: '2014-09-22',
                app_version: '1.0',
                message: 'Guardians of the Galaxy FTW!',
                movie: {
                  ids: {
                    imdb: 'tt2015381',
                    slug: 'guardians-of-the-galaxy-2014',
                    tmdb: 118340,
                    trakt: 28,
                  },
                  title: 'Guardians of the Galaxy',
                  year: 2014,
                },
                sharing: { tumblr: false, twitter: true },
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: {}, headers: z.object({}) },
    409: {
      description: 'There is already a checkin in progress.',
      content: {},
      headers: z.object({}),
    },
  },
  security: [{ oauth2: [] }, { oauth2: [] }, { oauth2: [] }, { oauth2: [] }],
})

export const deleteCheckinRoute = createRoute({
  method: 'delete',
  path: '/checkin',
  tags: ['Checkin'],
  summary: 'Delete any active checkins',
  description:
    '#### &#128274; OAuth Required\n\nRemoves any active checkins, no need to provide a specific item.',
  operationId: 'Delete any active checkins',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postCommentsRoute = createRoute({
  method: 'post',
  path: '/comments',
  tags: ['Comments'],
  summary: 'Post a comment',
  description:
    '#### &#128274; OAuth Required &#128513; Emojis\n\nAdd a new comment to a movie, show, season, episode, or list. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| item <span style="color:red;">*</a> | object | | `movie`, `show`, `season`, `episode`, or `list` object. (see examples &#8594;) |\n| `comment` <span style="color:red;">*</a> | string |  | Text for the comment. |\n| `spoiler` | boolean | `false` | Is this a spoiler? |\n| `sharing`  | object | | Control sharing to any connected social networks. (see below &#8595;) |\n\n#### Sharing\n\nThe `sharing` object is optional and will apply the user\'s settings if not sent. If `sharing` is sent, each key will override the user\'s setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.\n\n| Key | Type |\n|---|---|\n| `twitter` | boolean |\n| `tumblr` | boolean |\n| `medium` | boolean |',
  operationId: 'Post a comment',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              comment: z.string().exactOptional(),
              movie: z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              sharing: z
                .object({
                  medium: z.boolean().exactOptional(),
                  tumblr: z.boolean().exactOptional(),
                  twitter: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              spoiler: z.boolean().exactOptional(),
            })
            .openapi({
              example: {
                comment: "Oh, I wasn't really listening.",
                movie: {
                  ids: {
                    imdb: 'tt2015381',
                    slug: 'guardians-of-the-galaxy-2014',
                    tmdb: 118340,
                    trakt: 28,
                  },
                  title: 'Guardians of the Galaxy',
                  year: 2014,
                },
                sharing: { medium: true, tumblr: false, twitter: true },
                spoiler: false,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }, { oauth2: [] }, { oauth2: [] }, { oauth2: [] }, { oauth2: [] }],
})

export const getCommentsRecentCommentTypeTypeRoute = createRoute({
  method: 'get',
  path: '/comments/recent/{comment_type}/{type}',
  tags: ['Comments'],
  summary: 'Get recently created comments',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis\n\nReturns the most recently written comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.',
  operationId: 'Get recently created comments',
  request: {
    params: z.object({
      comment_type: z
        .enum(['all', 'reviews', 'shouts'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'comment_type',
            required: true,
            schema: { enum: ['all', 'reviews', 'shouts'], type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      include_replies: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include comment replies',
            example: 'false',
            in: 'query',
            name: 'include_replies',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCommentsTrendingCommentTypeTypeRoute = createRoute({
  method: 'get',
  path: '/comments/trending/{comment_type}/{type}',
  tags: ['Comments'],
  summary: 'Get trending comments',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis\n\nReturns all comments with the most likes and replies over the last 7 days. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.',
  operationId: 'Get trending comments',
  request: {
    params: z.object({
      comment_type: z
        .enum(['all', 'reviews', 'shouts'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'comment_type',
            required: true,
            schema: { enum: ['all', 'reviews', 'shouts'], type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      include_replies: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include comment replies',
            example: 'false',
            in: 'query',
            name: 'include_replies',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCommentsUpdatesCommentTypeTypeRoute = createRoute({
  method: 'get',
  path: '/comments/updates/{comment_type}/{type}',
  tags: ['Comments'],
  summary: 'Get recently updated comments',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis\n\nReturns the most recently updated comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.',
  operationId: 'Get recently updated comments',
  request: {
    params: z.object({
      comment_type: z
        .enum(['all', 'reviews', 'shouts'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'comment_type',
            required: true,
            schema: { enum: ['all', 'reviews', 'shouts'], type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      include_replies: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include comment replies',
            example: 'false',
            in: 'query',
            name: 'include_replies',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCommentsIdRoute = createRoute({
  method: 'get',
  path: '/comments/{id}',
  tags: ['Comments'],
  summary: 'Get a comment or reply',
  description:
    '####  &#128513; Emojis\n\nReturns a single comment and indicates how many replies it has. Use [**/comments/:id/replies**](/reference/comments/replies/) to get the actual replies.',
  operationId: 'Get a comment or reply',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A specific comment ID.',
            example: '417',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Item-ID': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Item-Type': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const putCommentsIdRoute = createRoute({
  method: 'put',
  path: '/comments/{id}',
  tags: ['Comments'],
  summary: 'Update a comment or reply',
  description:
    '#### &#128274; OAuth Required &#128513; Emojis\n\nUpdate a single comment. The OAuth user must match the author of the comment in order to update it. If not, a `401` HTTP status is returned.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| `comment` | string |  | Text for the comment. |\n| `spoiler` | boolean | `false` | Is this a spoiler? |',
  operationId: 'Update a comment or reply',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ comment: z.string().exactOptional(), spoiler: z.boolean().exactOptional() })
            .openapi({
              example: {
                comment:
                  "Agreed, this show is awesome. AMC in general has awesome shows and I can't wait to see what they come up with next.",
                spoiler: false,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteCommentsIdRoute = createRoute({
  method: 'delete',
  path: '/comments/{id}',
  tags: ['Comments'],
  summary: 'Delete a comment or reply',
  description:
    '#### &#128274; OAuth Required\n\nDelete a single comment. The OAuth user must match the author of the comment in order to delete it. If not, a `401` HTTP status code is returned. The comment must also be less than 2 weeks old or have 0 replies. If not, a `409` HTTP status is returned.',
  operationId: 'Delete a comment or reply',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getCommentsIdItemRoute = createRoute({
  method: 'get',
  path: '/comments/{id}/item',
  tags: ['Comments'],
  summary: 'Get the attached media item',
  description:
    '#### &#10024; Extended Info\n\nReturns the media item this comment is attached to. The media type can be `movie`, `show`, `season`, `episode`, or `list` and it also returns the standard media object for that media type.',
  operationId: 'Get the attached media item',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'A specific comment ID.',
            example: '417',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postCommentsIdLikeRoute = createRoute({
  method: 'post',
  path: '/comments/{id}/like',
  tags: ['Comments'],
  summary: 'Like a comment',
  description:
    '#### &#128274; OAuth Required\n\nVotes help determine popular comments. Only one like is allowed per comment per user.',
  operationId: 'Like a comment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A specific comment ID.',
            example: '417',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteCommentsIdLikeRoute = createRoute({
  method: 'delete',
  path: '/comments/{id}/like',
  tags: ['Comments'],
  summary: 'Remove like on a comment',
  description: '#### &#128274; OAuth Required\n\nRemove a like on a comment.',
  operationId: 'Remove like on a comment',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getCommentsIdLikesRoute = createRoute({
  method: 'get',
  path: '/comments/{id}/likes',
  tags: ['Comments'],
  summary: 'Get all users who liked a comment',
  description:
    '#### &#128196; Pagination\n\nReturns all users who liked a comment. If you only need the `replies` count, the main `comment` object already has that, so no need to use this method.',
  operationId: 'Get all users who liked a comment',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'A specific comment ID.',
            example: '417',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getCommentsIdRepliesRoute = createRoute({
  method: 'get',
  path: '/comments/{id}/replies',
  tags: ['Comments'],
  summary: 'Get replies for a comment',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all replies for a comment. It is possible these replies could have replies themselves, so in that case you would just call [**/comments/:id/replies**](/reference/comments/replies/) again with the new comment `id`.',
  operationId: 'Get replies for a comment',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'A specific comment ID.',
            example: '417',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postCommentsIdRepliesRoute = createRoute({
  method: 'post',
  path: '/comments/{id}/replies',
  tags: ['Comments'],
  summary: 'Post a reply for a comment',
  description:
    '#### &#128274; OAuth Required &#128513; Emojis\n\nAdd a new reply to an existing comment. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| `comment` <span style="color:red;">*</a> | string |  | Text for the reply. |\n| `spoiler` | boolean | `false` | Is this a spoiler? |',
  operationId: 'Post a reply for a comment',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ comment: z.string().exactOptional(), spoiler: z.boolean().exactOptional() })
            .openapi({
              example: { comment: "Couldn't agree more with your review!", spoiler: false },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getCountriesTypeRoute = createRoute({
  method: 'get',
  path: '/countries/{type}',
  tags: ['Countries'],
  summary: 'Get countries',
  description: 'Get a list of all countries, including names and codes.',
  operationId: 'Get countries',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getGenresTypeRoute = createRoute({
  method: 'get',
  path: '/genres/{type}',
  tags: ['Genres'],
  summary: 'Get genres',
  description: 'Get a list of all genres, including names and slugs.',
  operationId: 'Get genres',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getLanguagesTypeRoute = createRoute({
  method: 'get',
  path: '/languages/{type}',
  tags: ['Languages'],
  summary: 'Get languages',
  description: 'Get a list of all langauges, including names and codes.',
  operationId: 'Get languages',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getListsPopularRoute = createRoute({
  method: 'get',
  path: '/lists/popular',
  tags: ['Lists'],
  summary: 'Get popular lists',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns the most popular lists. Popularity is calculated using total number of likes and comments.',
  operationId: 'Get popular lists',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getListsTrendingRoute = createRoute({
  method: 'get',
  path: '/lists/trending',
  tags: ['Lists'],
  summary: 'Get trending lists',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists with the most likes and comments over the last 7 days.',
  operationId: 'Get trending lists',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getListsIdRoute = createRoute({
  method: 'get',
  path: '/lists/{id}',
  tags: ['Lists'],
  summary: 'Get list',
  description:
    '#### &#128513; Emojis\n\nReturns a single list. Use the [**/lists/:id/items**](#reference/lists/list-items) method to get the actual items this list contains.\n\n**Note:** You must use an integer `id`, and only public lists will return data.',
  operationId: 'Get list',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Trakt ID',
            example: '55',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getListsIdCommentsSortRoute = createRoute({
  method: 'get',
  path: '/lists/{id}/comments/{sort}',
  tags: ['Lists'],
  summary: 'Get all list comments',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.',
  operationId: 'Get all list comments',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'Trakt ID',
            example: '55',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest', 'likes', 'replies'])
        .openapi({
          param: {
            description: 'how to sort',
            example: 'newest',
            in: 'path',
            name: 'sort',
            required: true,
            schema: { enum: ['newest', 'oldest', 'likes', 'replies'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getListsIdItemsTypeRoute = createRoute({
  method: 'get',
  path: '/lists/{id}/items/{type}',
  tags: ['Lists'],
  summary: 'Get items on a list',
  description:
    "#### &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nGet all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.\n\n#### Notes\n\nEach list item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nAll list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.",
  operationId: 'Get items on a list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID',
            example: '55',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movie', 'show', 'season', 'episode', 'person'])
        .openapi({
          param: {
            description: 'Filter for a specific item type',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movie', 'show', 'season', 'episode', 'person'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Private-User': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getListsIdLikesRoute = createRoute({
  method: 'get',
  path: '/lists/{id}/likes',
  tags: ['Lists'],
  summary: 'Get all users who liked a list',
  description: '#### &#128196; Pagination\n\nReturns all users who liked a list.',
  operationId: 'Get all users who liked a list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID',
            example: '55',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesAnticipatedRoute = createRoute({
  method: 'get',
  path: '/movies/anticipated',
  tags: ['Movies'],
  summary: 'Get the most anticipated movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most anticipated movies based on the number of lists a movie appears on.',
  operationId: 'Get the most anticipated movies',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesBoxofficeRoute = createRoute({
  method: 'get',
  path: '/movies/boxoffice',
  tags: ['Movies'],
  summary: 'Get the weekend box office',
  description:
    '#### &#10024; Extended Info\n\nReturns the top 10 grossing movies in the U.S. box office last weekend. Updated every Monday morning.',
  operationId: 'Get the weekend box office',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesCollectedPeriodRoute = createRoute({
  method: 'get',
  path: '/movies/collected/{period}',
  tags: ['Movies'],
  summary: 'Get the most Collected movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most collected (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most Collected movies',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesPlayedPeriodRoute = createRoute({
  method: 'get',
  path: '/movies/played/{period}',
  tags: ['Movies'],
  summary: 'Get the most played movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most played (a single user can watch multiple times) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most played movies',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesPopularRoute = createRoute({
  method: 'get',
  path: '/movies/popular',
  tags: ['Movies'],
  summary: 'Get popular movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most popular movies. Popularity is calculated using the rating percentage and the number of ratings.',
  operationId: 'Get popular movies',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesRecommendedPeriodRoute = createRoute({
  method: 'get',
  path: '/movies/recommended/{period}',
  tags: ['Movies'],
  summary: 'Get the most recommended movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most recommended movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most recommended movies',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesTrendingRoute = createRoute({
  method: 'get',
  path: '/movies/trending',
  tags: ['Movies'],
  summary: 'Get trending movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns all movies being watched right now. Movies with the most users are returned first.',
  operationId: 'Get trending movies',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Trending-User-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesUpdatesIdStartDateRoute = createRoute({
  method: 'get',
  path: '/movies/updates/id/{start_date}',
  tags: ['Movies'],
  summary: 'Get recently updated movie Trakt IDs',
  description:
    '#### &#128196; Pagination\n\nReturns all movie Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.',
  operationId: 'Get recently updated movie Trakt IDs',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Updated since this date and time.',
            example: '2020-11-27T00:00:00Z',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesUpdatesStartDateRoute = createRoute({
  method: 'get',
  path: '/movies/updates/{start_date}',
  tags: ['Movies'],
  summary: 'Get recently updated movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info\n\nReturns all movies updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.',
  operationId: 'Get recently updated movies',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Updated since this date and time.',
            example: '2020-11-27T00:00:00Z',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesWatchedPeriodRoute = createRoute({
  method: 'get',
  path: '/movies/watched/{period}',
  tags: ['Movies'],
  summary: 'Get the most watched movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most watched (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most watched movies',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesIdRoute = createRoute({
  method: 'get',
  path: '/movies/{id}',
  tags: ['Movies'],
  summary: 'Get a movie',
  description:
    "#### &#10024; Extended Info\n\nReturns a single movie's details.\n\n**Note:** When getting `full` extended info, the `status` field can have a value of `released`, `in production`, `post production`, `planned`, `rumored`, or `canceled`.",
  operationId: 'Get a movie',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/movies/tron-legacy-2010?extended=full\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getMoviesIdAliasesRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/aliases',
  tags: ['Movies'],
  summary: 'Get all movie aliases',
  description: 'Returns all title aliases for a movie.  Includes country where name is different.',
  operationId: 'Get all movie aliases',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdCommentsSortRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/comments/{sort}',
  tags: ['Movies'],
  summary: 'Get all movie comments',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a movie. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.',
  operationId: 'Get all movie comments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest', 'likes', 'replies', 'highest', 'lowest', 'plays'])
        .openapi({
          param: {
            description: 'how to sort',
            example: 'newest',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['newest', 'oldest', 'likes', 'replies', 'highest', 'lowest', 'plays'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesIdListsTypeSortRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/lists/{type}/{sort}',
  tags: ['Movies'],
  summary: 'Get lists containing this movie',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this movie. By default, `personal` lists are returned sorted by the most `popular`.',
  operationId: 'Get lists containing this movie',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'personal', 'official', 'watchlists', 'recommendations'])
        .openapi({
          param: {
            description: 'Filter for a specific list type',
            example: 'personal',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['all', 'personal', 'official', 'watchlists', 'recommendations'],
              type: 'string',
            },
          },
        }),
      sort: z
        .enum(['popular', 'likes', 'comments', 'items', 'added', 'updated'])
        .openapi({
          param: {
            description: 'How to sort',
            example: 'popular',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['popular', 'likes', 'comments', 'items', 'added', 'updated'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesIdPeopleRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/people',
  tags: ['Movies'],
  summary: 'Get all people for a movie',
  description:
    '#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for a movie. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.',
  operationId: 'Get all people for a movie',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdRatingsRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/ratings',
  tags: ['Movies'],
  summary: 'Get movie ratings',
  description: 'Returns rating (between 0 and 10) and distribution for a movie.',
  operationId: 'Get movie ratings',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdRelatedRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/related',
  tags: ['Movies'],
  summary: 'Get related movies',
  description:
    '#### &#128196; Pagination &#10024; Extended Info\n\nReturns related and similar movies.',
  operationId: 'Get related movies',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getMoviesIdReleasesCountryRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/releases/{country}',
  tags: ['Movies'],
  summary: 'Get all movie releases',
  description:
    'Returns all releases for a movie including country, certification, release date, release type, and note. The release type can be set to `unknown`, `premiere`, `limited`, `theatrical`, `digital`, `physical`, or `tv`. The `note` might have optional info such as the film festival name for a `premiere` release or Blu-ray specs for a `physical` release. We pull this info from [TMDB](https://developers.themoviedb.org/3/movies/get-movie-release-dates).',
  operationId: 'Get all movie releases',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description: '2 character country code',
            example: 'us',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdStatsRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/stats',
  tags: ['Movies'],
  summary: 'Get movie stats',
  description: 'Returns lots of movie stats.',
  operationId: 'Get movie stats',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdStudiosRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/studios',
  tags: ['Movies'],
  summary: 'Get movie studios',
  description: 'Returns all studios for a movie.',
  operationId: 'Get movie studios',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdTranslationsLanguageRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/translations/{language}',
  tags: ['Movies'],
  summary: 'Get all movie translations',
  description:
    'Returns all translations for a movie, including language and translated values for title, tagline and overview.',
  operationId: 'Get all movie translations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: '2 character language code',
            example: 'es',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getMoviesIdWatchingRoute = createRoute({
  method: 'get',
  path: '/movies/{id}/watching',
  tags: ['Movies'],
  summary: 'Get users watching right now',
  description: '#### &#10024; Extended Info\n\nReturns all users watching this movie right now.',
  operationId: 'Get users watching right now',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'tron-legacy-2010',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getNetworksRoute = createRoute({
  method: 'get',
  path: '/networks',
  tags: ['Networks'],
  summary: 'Get networks',
  description: 'Get a list of all TV networks, including the name.',
  operationId: 'Get networks',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getOauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/oauth/authorize',
  tags: ['Authentication - OAuth'],
  summary: 'Authorize Application',
  description:
    "Construct then redirect to this URL. The Trakt website will request permissions for your app, which the user needs to approve. If the user isn't signed into Trakt, it will ask them to do so. Send `signup=true` if you prefer the account sign up page to be the default.\n\n**Note:** You should use the normal **https://trakt.tv** hostname when creating this URL and not the API URL.",
  operationId: 'Authorize Application',
  request: {
    query: z.object({
      response_type: z
        .string()
        .openapi({
          param: {
            description: 'Must be set to code.',
            example: 'code',
            in: 'query',
            name: 'response_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'Get this from your app settings.',
            example: ' ',
            in: 'query',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: {
            description: 'URI specified in your app settings.',
            example: ' ',
            in: 'query',
            name: 'redirect_uri',
            required: true,
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'State variable for CSRF purposes.',
            example: ' ',
            in: 'query',
            name: 'state',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Default to the sign up page.',
      content: { 'application/json': { schema: z.string() } },
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postOauthDeviceCodeRoute = createRoute({
  method: 'post',
  path: '/oauth/device/code',
  tags: ['Authentication - Devices'],
  summary: 'Generate new device codes',
  description:
    'Generate new codes to start the device authentication process. The `device_code` and `interval` will be used later to poll for the `access_token`. The `user_code` and `verification_url` should be presented to the user as mentioned in the flow steps above.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |',
  operationId: 'Generate new device codes',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ client_id: z.string().exactOptional() })
            .openapi({
              example: {
                client_id: '9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postOauthDeviceTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/device/token',
  tags: ['Authentication - Devices'],
  summary: 'Poll for the access_token',
  description:
    'Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized you app. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**\n\nWhen you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. Check below for all the error codes that you should handle.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `code` <span style="color:red;">*</a> | string | `device_code` from the initial method. |\n| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |\n| `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |\n\n####  Status Codes\n\nThis method will send various HTTP status codes that you should handle accordingly.\n\n| Code | Description |\n|---|---|\n| `200` | Success - *save the `access_token`*\n| `400` | Pending - *waiting for the user to authorize your app*\n| `404` | Not Found - *invalid `device_code`*\n| `409` | Already Used - *user already approved this code*\n| `410` | Expired - *the tokens have expired, restart the process*\n| `418` | Denied - *user explicitly denied this code*\n| `429` | Slow Down - *your app is polling too quickly*',
  operationId: 'Poll for the access_token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_id: z.string().exactOptional(),
              client_secret: z.string().exactOptional(),
              code: z.string().exactOptional(),
            })
            .openapi({
              example: {
                client_id: '9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f',
                client_secret: 'd6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2',
                code: 'fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postOauthRevokeRoute = createRoute({
  method: 'post',
  path: '/oauth/revoke',
  tags: ['Authentication - OAuth'],
  summary: 'Revoke an access_token',
  description:
    'An `access_token` can be revoked when a user signs out of their Trakt account in your app. This is not required, but might improve the user experience so the user doesn\'t have an unused app connection hanging around.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `token` <span style="color:red;">*</a> | string | A valid OAuth `access_token`. |\n| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |\n| `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |',
  operationId: 'Revoke an access_token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_id: z.string().exactOptional(),
              client_secret: z.string().exactOptional(),
              token: z.string().exactOptional(),
            })
            .openapi({
              example: {
                client_id: '9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f',
                client_secret: 'd6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2',
                token: 'fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postOauthTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/token',
  tags: ['Authentication - OAuth'],
  summary: 'Exchange refresh_token for access_token',
  description:
    'Use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. The `access_token` is valid for 3 months before it needs to be refreshed again.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `refresh_token` <span style="color:red;">*</a> | string | Saved from the initial token method. |\n| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |\n| `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |\n| `redirect_uri` <span style="color:red;">*</a> | string | URI specified in your app settings. |\n| `grant_type` <span style="color:red;">* </a> | string | `refresh_token` |',
  operationId: 'Exchange refresh_token for access_token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_id: z.string().exactOptional(),
              client_secret: z.string().exactOptional(),
              grant_type: z.string().exactOptional(),
              redirect_uri: z.string().exactOptional(),
              refresh_token: z.string().exactOptional(),
            })
            .openapi({
              example: {
                client_id: '9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f',
                client_secret: 'd6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2',
                grant_type: 'refresh_token',
                redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
                refresh_token: 'fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "If the `refresh_token` is valid, you'll get the `access_token` back.",
      content: {},
      headers: z.object({}),
    },
    401: {
      description: "If the `refresh_token` is invalid, you'll get a `401` error.",
      content: {},
      headers: z.object({}),
    },
  },
})

export const getPeopleUpdatesIdStartDateRoute = createRoute({
  method: 'get',
  path: '/people/updates/id/{start_date}',
  tags: ['People'],
  summary: 'Get recently updated people Trakt IDs',
  description:
    '#### &#128196; Pagination\n\nReturns all people Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.',
  operationId: 'Get recently updated people Trakt IDs',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Updated since this date and time.',
            example: '2020-11-27T00:00:00Z',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getPeopleUpdatesStartDateRoute = createRoute({
  method: 'get',
  path: '/people/updates/{start_date}',
  tags: ['People'],
  summary: 'Get recently updated people',
  description:
    '#### &#128196; Pagination &#10024; Extended Info\n\nReturns all people updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.',
  operationId: 'Get recently updated people',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Updated since this date and time.',
            example: '2020-11-27T00:00:00Z',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getPeopleIdRoute = createRoute({
  method: 'get',
  path: '/people/{id}',
  tags: ['People'],
  summary: 'Get a single person',
  description:
    "#### &#10024; Extended Info\n\nReturns a single person's details.\n\n#### Gender\n\nIf available, the `gender` property will be set to `male`, `female`, or `non_binary`.\n\n#### Known For Department\n\nIf available, the `known_for_department` property will be set to `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, or `editing`. Many people have credits across departments, `known_for` allows you to select their default credits more accurately.",
  operationId: 'Get a single person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'bryan-cranston',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/people/bryan-cranston?extended=full\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getPeopleIdListsTypeSortRoute = createRoute({
  method: 'get',
  path: '/people/{id}/lists/{type}/{sort}',
  tags: ['People'],
  summary: 'Get lists containing this person',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this person. By default, `personal` lists are returned sorted by the most `popular`.',
  operationId: 'Get lists containing this person',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'bryan-cranston',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'personal', 'official'])
        .openapi({
          param: {
            description: 'Filter for a specific list type',
            example: 'personal',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['all', 'personal', 'official'], type: 'string' },
          },
        }),
      sort: z
        .enum(['popular', 'likes', 'comments', 'items', 'added', 'updated'])
        .openapi({
          param: {
            description: 'How to sort',
            example: 'popular',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['popular', 'likes', 'comments', 'items', 'added', 'updated'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getPeopleIdMoviesRoute = createRoute({
  method: 'get',
  path: '/people/{id}/movies',
  tags: ['People'],
  summary: 'Get movie credits',
  description:
    '#### &#10024; Extended Info\n\nReturns all movies where this person is in the `cast` or `crew`. Each `cast` object will have a `characters` array and a standard `movie` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `movie` object.',
  operationId: 'Get movie credits',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'bryan-cranston',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getPeopleIdShowsRoute = createRoute({
  method: 'get',
  path: '/people/{id}/shows',
  tags: ['People'],
  summary: 'Get show credits',
  description:
    '#### &#10024; Extended Info\n\nReturns all shows where this person is in the `cast` or `crew`, including the `episode_count` for which they appear. Each `cast` object will have a `characters` array and a standard `show` object. If `series_regular` is `true`, this person is a series regular and not simply a guest star.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `show` object.',
  operationId: 'Get show credits',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'bryan-cranston',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getRecommendationsMoviesRoute = createRoute({
  method: 'get',
  path: '/recommendations/movies',
  tags: ['Recommendations'],
  summary: 'Get movie recommendations',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info\n\nMovie recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out movies the user has already collected or `ignore_watchlisted=true` to filter out movies the user has already watchlisted.',
  operationId: 'Get movie recommendations',
  request: {
    query: z.object({
      ignore_collected: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'filter out collected movies',
            example: 'false',
            in: 'query',
            name: 'ignore_collected',
            required: false,
            schema: { enum: ['true', 'false'], type: 'string' },
          },
        }),
      ignore_watchlisted: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'filter out watchlisted movies',
            example: 'false',
            in: 'query',
            name: 'ignore_watchlisted',
            required: false,
            schema: { enum: ['true', 'false'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const deleteRecommendationsMoviesIdRoute = createRoute({
  method: 'delete',
  path: '/recommendations/movies/{id}',
  tags: ['Recommendations'],
  summary: 'Hide a movie recommendation',
  description: '#### &#128274; OAuth Required\n\nHide a movie from getting recommended anymore.',
  operationId: 'Hide a movie recommendation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: '922',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getRecommendationsShowsRoute = createRoute({
  method: 'get',
  path: '/recommendations/shows',
  tags: ['Recommendations'],
  summary: 'Get show recommendations',
  description:
    '#### &#128274; OAuth Required &#10024; Extended Info\n\nTV show recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out shows the user has already collected or `ignore_watchlisted=true` to filter out shows the user has already watchlisted.',
  operationId: 'Get show recommendations',
  request: {
    query: z.object({
      ignore_collected: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'filter out collected shows',
            example: 'false',
            in: 'query',
            name: 'ignore_collected',
            required: false,
            schema: { enum: ['true', 'false'], type: 'string' },
          },
        }),
      ignore_watchlisted: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            description: 'filter out watchlisted movies',
            example: 'false',
            in: 'query',
            name: 'ignore_watchlisted',
            required: false,
            schema: { enum: ['true', 'false'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const deleteRecommendationsShowsIdRoute = createRoute({
  method: 'delete',
  path: '/recommendations/shows/{id}',
  tags: ['Recommendations'],
  summary: 'Hide a show recommendation',
  description: '#### &#128274; OAuth Required\n\nHide a show from getting recommended anymore.',
  operationId: 'Hide a show recommendation',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: '922',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postScrobblePauseRoute = createRoute({
  method: 'post',
  path: '/scrobble/pause',
  tags: ['Scrobble'],
  summary: 'Pause watching in a media center',
  description:
    '#### &#128274; OAuth Required\n\nUse this method when the video is paused. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position. Unpause a video by calling the [**/scrobble/start**](/reference/scrobble/start/) method again.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `progress` <span style="color:red;">*</a> | float | Progress percentage between 0 and 100. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |',
  operationId: 'Pause watching in a media center',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              app_date: z.string().exactOptional(),
              app_version: z.string().exactOptional(),
              movie: z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              progress: z.number().exactOptional(),
            })
            .openapi({
              example: {
                app_date: '2014-09-22',
                app_version: '1.0',
                movie: {
                  ids: {
                    imdb: 'tt2015381',
                    slug: 'guardians-of-the-galaxy-2014',
                    tmdb: 118340,
                    trakt: 28,
                  },
                  title: 'Guardians of the Galaxy',
                  year: 2014,
                },
                progress: 75,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postScrobbleStartRoute = createRoute({
  method: 'post',
  path: '/scrobble/start',
  tags: ['Scrobble'],
  summary: 'Start watching in a media center',
  description:
    '#### &#128274; OAuth Required\n\nUse this method when the video initially starts playing or is unpaused. This will remove any playback progress if it exists.\n\n**Note:** A watching status will auto expire after the remaining runtime has elapsed. There is no need to call this method again while continuing to watch the same item.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `progress` <span style="color:red;">*</a> | float | Progress percentage between 0 and 100. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |',
  operationId: 'Start watching in a media center',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              app_date: z.string().exactOptional(),
              app_version: z.string().exactOptional(),
              movie: z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              progress: z.number().exactOptional(),
            })
            .openapi({
              example: {
                app_date: '2014-09-22',
                app_version: '1.0',
                movie: {
                  ids: {
                    imdb: 'tt2015381',
                    slug: 'guardians-of-the-galaxy-2014',
                    tmdb: 118340,
                    trakt: 28,
                  },
                  title: 'Guardians of the Galaxy',
                  year: 2014,
                },
                progress: 1.25,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }, { oauth2: [] }, { oauth2: [] }, { oauth2: [] }],
})

export const postScrobbleStopRoute = createRoute({
  method: 'post',
  path: '/scrobble/stop',
  tags: ['Scrobble'],
  summary: 'Stop or finish watching in a media center',
  description:
    '#### &#128274; OAuth Required\n\nUse this method when the video is stopped or finishes playing on its own. If the progress is above 80%, the video will be scrobbled and the `action` will be set to **scrobble**. A unique history `id` (64-bit integer) will be returned and can be used to reference this `scrobble` directly.\n\nIf the progress is less than 80%, it will be treated as a *pause* and the `action` will be set to **pause**. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position.\n\n**Note:** If you prefer to use a threshold higher than 80%, you should use [**/scrobble/pause**](/reference/scrobble/pause/) yourself so it doesn\'t create duplicate scrobbles.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |\n| `progress` <span style="color:red;">*</a> | flloat | Progress percentage between 0 and 100. |\n| `app_version` | string | Version number of the app. |\n| `app_date` | string | Build date of the app. |\n\n**Note:** If the same item was just scrobbled, a `409` HTTP status code will returned to avoid scrobbling a duplicate. The response will contain a `watched_at` timestamp when the item was last scrobbled and a `expires_at` timestamp when the item can be scrobbled again.',
  operationId: 'Stop or finish watching in a media center',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              app_date: z.string().exactOptional(),
              app_version: z.string().exactOptional(),
              movie: z
                .object({
                  ids: z
                    .object({
                      imdb: z.string().exactOptional(),
                      slug: z.string().exactOptional(),
                      tmdb: z.number().exactOptional(),
                      trakt: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  year: z.number().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              progress: z.number().exactOptional(),
            })
            .openapi({
              example: {
                app_date: '2014-09-22',
                app_version: '1.0',
                movie: {
                  ids: {
                    imdb: 'tt2015381',
                    slug: 'guardians-of-the-galaxy-2014',
                    tmdb: 118340,
                    trakt: 28,
                  },
                  title: 'Guardians of the Galaxy',
                  year: 2014,
                },
                progress: 99.9,
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: {}, headers: z.object({}) },
    409: {
      description: 'The same item was recently scrobbled.',
      content: {},
      headers: z.object({}),
    },
  },
  security: [{ oauth2: [] }, { oauth2: [] }, { oauth2: [] }, { oauth2: [] }, { oauth2: [] }],
})

export const getSearchIdTypeIdRoute = createRoute({
  method: 'get',
  path: '/search/{id_type}/{id}',
  tags: ['Search'],
  summary: 'Get ID lookup results',
  description:
    '#### &#128196; Pagination &#10024; Extended Info\n\nLookup items by their Trakt, IMDB, TMDB, or TVDB ID. If you use the search url without a `type` it might return multiple items if the `id_type` is not globally unique. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.\n\n| Type | URL |\n|---|---|\n| `trakt` | `/search/trakt/:id` |\n|  | `/search/trakt/:id?type=movie` |\n|  | `/search/trakt/:id?type=show` |\n|  | `/search/trakt/:id?type=episode` |\n|  | `/search/trakt/:id?type=person` |\n| `imdb` | `/search/imdb/:id` |\n| `tmdb` | `/search/tmdb/:id` |\n|  | `/search/tmdb/:id?type=movie` |\n|  | `/search/tmdb/:id?type=show` |\n|  | `/search/tmdb/:id?type=episode` |\n|  | `/search/tmdb/:id?type=person` |\n| `tvdb` | `/search/tvdb/:id` |\n|  | `/search/tvdb/:id?type=show` |\n|  | `/search/tvdb/:id?type=episode` |',
  operationId: 'Get ID lookup results',
  request: {
    params: z.object({
      id_type: z
        .enum(['trakt', 'imdb', 'tmdb', 'tvdb'])
        .openapi({
          param: {
            description: 'Type of ID to lookup.',
            example: 'imdb',
            in: 'path',
            name: 'id_type',
            required: true,
            schema: { enum: ['trakt', 'imdb', 'tmdb', 'tvdb'], type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID that matches with the type.',
            example: 'tt0848228',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['movie', 'show', 'episode', 'person', 'list'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Search type.',
            example: 'movie',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['movie', 'show', 'episode', 'person', 'list'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/search/trakt/12601?type=movie\n/search/imdb/tt1104001\n```',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getSearchTypeRoute = createRoute({
  method: 'get',
  path: '/search/{type}',
  tags: ['Search'],
  summary: 'Get text query results',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nSearch all text fields that a media object contains (i.e. title, overview, etc). Results are ordered by the most relevant score. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.\n\n#### Special Characters\n\nOur search engine (Solr) gives the following characters special meaning when they appear in a query:\n\n`+ - && || ! ( ) { } [ ] ^ " ~ * ? : /`\n\nTo interpret any of these characters literally (and not as a special character), precede the character with a backslash `\\` character.\n\n#### Search Fields\n\nBy default, all text fields are used to search for the `query`. You can optionally specify the `fields` parameter with a single value or comma delimited string for multiple fields. Each `type` has specific `fields` that can be specified. This can be useful if you want to support more strict searches (i.e. title only).\n\n| Type | Field |\n|---|---|\n| `movie` | `title` |\n|  | `tagline` |\n|  | `overview` |\n|  | `people` |\n|  | `translations` |\n|  | `aliases` |\n| `show` | `title` |\n|  | `overview` |\n|  | `people` |\n|  | `translations` |\n|  | `aliases` |\n| `episode` | `title` |\n|  | `overview` |\n| `person` | `name` |\n|  | `biography` |\n| `list` | `name` |\n|  | `description` |',
  operationId: 'Get text query results',
  request: {
    params: z.object({
      type: z
        .enum(['movie', 'show', 'episode', 'person', 'list'])
        .openapi({
          param: {
            description: 'Search type.',
            example: 'movie',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movie', 'show', 'episode', 'person', 'list'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search all text based fields.',
            example: 'tron',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Specific text fields.',
      content: {
        'application/json': {
          schema: z.enum([
            'title',
            'tagline',
            'overview',
            'people',
            'translations',
            'aliases',
            'name',
            'biography',
            'description',
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: '```\n/search/movie,show,episode,person,list?query=tron\n```',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsAnticipatedRoute = createRoute({
  method: 'get',
  path: '/shows/anticipated',
  tags: ['Shows'],
  summary: 'Get the most anticipated shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most anticipated shows based on the number of lists a show appears on.',
  operationId: 'Get the most anticipated shows',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsCollectedPeriodRoute = createRoute({
  method: 'get',
  path: '/shows/collected/{period}',
  tags: ['Shows'],
  summary: 'Get the most collected shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most collected (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most collected shows',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsPlayedPeriodRoute = createRoute({
  method: 'get',
  path: '/shows/played/{period}',
  tags: ['Shows'],
  summary: 'Get the most played shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most played (a single user can watch multiple episodes multiple times) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most played shows',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsPopularRoute = createRoute({
  method: 'get',
  path: '/shows/popular',
  tags: ['Shows'],
  summary: 'Get popular shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most popular shows. Popularity is calculated using the rating percentage and the number of ratings.',
  operationId: 'Get popular shows',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsRecommendedPeriodRoute = createRoute({
  method: 'get',
  path: '/shows/recommended/{period}',
  tags: ['Shows'],
  summary: 'Get the most recommended shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most recommended shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most recommended shows',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsTrendingRoute = createRoute({
  method: 'get',
  path: '/shows/trending',
  tags: ['Shows'],
  summary: 'Get trending shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns all shows being watched right now. Shows with the most users are returned first.',
  operationId: 'Get trending shows',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Trending-User-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsUpdatesIdStartDateRoute = createRoute({
  method: 'get',
  path: '/shows/updates/id/{start_date}',
  tags: ['Shows'],
  summary: 'Get recently updated show Trakt IDs',
  description:
    '#### &#128196; Pagination\n\nReturns all show Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.',
  operationId: 'Get recently updated show Trakt IDs',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Updated since this date and time.',
            example: '2020-11-27T00:00:00Z',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsUpdatesStartDateRoute = createRoute({
  method: 'get',
  path: '/shows/updates/{start_date}',
  tags: ['Shows'],
  summary: 'Get recently updated shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info\n\nReturns all shows updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.\n\n**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.\n\n**Note:** The `start_date` can only be a maximum of 30 days in the past.',
  operationId: 'Get recently updated shows',
  request: {
    params: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Updated since this date and time.',
            example: '2020-11-27T00:00:00Z',
            in: 'path',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Start-Date': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsWatchedPeriodRoute = createRoute({
  method: 'get',
  path: '/shows/watched/{period}',
  tags: ['Shows'],
  summary: 'Get the most watched shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info &#127898; Filters\n\nReturns the most watched (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.',
  operationId: 'Get the most watched shows',
  request: {
    params: z.object({
      period: z
        .enum(['daily', 'weekly', 'monthly', 'yearly', 'all'])
        .openapi({
          param: {
            description: 'Time period.',
            example: 'weekly',
            in: 'path',
            name: 'period',
            required: true,
            schema: { enum: ['daily', 'weekly', 'monthly', 'yearly', 'all'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdRoute = createRoute({
  method: 'get',
  path: '/shows/{id}',
  tags: ['Shows'],
  summary: 'Get a single show',
  description:
    "#### &#10024; Extended Info\n\nReturns a single shows's details. If you request extended info, the `airs` object is relative to the show's country. You can use the `day`, `time`, and `timezone` to construct your own date then convert it to whatever timezone your user is in.\n\n**Note:** When getting `full` extended info, the `status` field can have a value of `returning series` (airing right now),  `continuing` (airing right now), `in production` (airing soon), `planned` (in development), `upcoming` (in development),  `pilot`, `canceled`, or `ended`.",
  operationId: 'Get a single show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/shows/game-of-thrones?extended=full\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getShowsIdAliasesRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/aliases',
  tags: ['Shows'],
  summary: 'Get all show aliases',
  description: 'Returns all title aliases for a show.  Includes country where name is different.',
  operationId: 'Get all show aliases',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdCertificationsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/certifications',
  tags: ['Shows'],
  summary: 'Get all show certifications',
  description: 'Returns all content certifications for a show, including the country.',
  operationId: 'Get all show certifications',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdCommentsSortRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/comments/{sort}',
  tags: ['Shows'],
  summary: 'Get all show comments',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a show. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.',
  operationId: 'Get all show comments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest', 'likes', 'replies', 'highest', 'lowest', 'plays', 'watched'])
        .openapi({
          param: {
            description: 'how to sort',
            example: 'newest',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: [
                'newest',
                'oldest',
                'likes',
                'replies',
                'highest',
                'lowest',
                'plays',
                'watched',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdLastEpisodeRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/last_episode',
  tags: ['Shows'],
  summary: 'Get last episode',
  description:
    '#### &#10024; Extended Info\n\nReturns the most recently aired episode. If no episode is found, a `204` HTTP status code will be returned.',
  operationId: 'Get last episode',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdListsTypeSortRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/lists/{type}/{sort}',
  tags: ['Shows'],
  summary: 'Get lists containing this show',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this show. By default, `personal` lists are returned sorted by the most `popular`.',
  operationId: 'Get lists containing this show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'personal', 'official', 'watchlists', 'recommendations'])
        .openapi({
          param: {
            description: 'Filter for a specific list type',
            example: 'personal',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['all', 'personal', 'official', 'watchlists', 'recommendations'],
              type: 'string',
            },
          },
        }),
      sort: z
        .enum(['popular', 'likes', 'comments', 'items', 'added', 'updated'])
        .openapi({
          param: {
            description: 'How to sort',
            example: 'popular',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['popular', 'likes', 'comments', 'items', 'added', 'updated'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdNextEpisodeRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/next_episode',
  tags: ['Shows'],
  summary: 'Get next episode',
  description:
    '#### &#10024; Extended Info\n\nReturns the next scheduled to air episode. If no episode is found, a `204` HTTP status code will be returned.',
  operationId: 'Get next episode',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdPeopleRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/people',
  tags: ['Shows'],
  summary: 'Get all people for a show',
  description:
    '#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for a show, including the `episode_count` for which they appears. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.\n\n#### Guest Stars\n\nIf you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the show.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!',
  operationId: 'Get all people for a show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/shows/game-of-thrones/people?extended=guest_stars\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getShowsIdProgressCollectionRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/progress/collection',
  tags: ['Shows'],
  summary: 'Get show collection progress',
  description:
    "#### &#128274; OAuth Required\n\nReturns collection progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should collect, if there are no upcoming episodes it will be set to `null`.\n\nBy default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.\n\nBy default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.\n\nBy default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has collected, even if they've collected older episodes more recently. To use their last collected episode for these calculations, set the `last_activity` flag to `collected`.\n\n**Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.",
  operationId: 'Get show collection progress',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      hidden: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include any hidden seasons',
            example: 'false',
            in: 'query',
            name: 'hidden',
            required: false,
            schema: { type: 'string' },
          },
        }),
      specials: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include specials as season 0',
            example: 'false',
            in: 'query',
            name: 'specials',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count_specials: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'count specials in the overall stats (only applies if specials are included)',
            example: 'true',
            in: 'query',
            name: 'count_specials',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.enum(['aired', 'collected']) } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getShowsIdProgressWatchedRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/progress/watched',
  tags: ['Shows'],
  summary: 'Get show watched progress',
  description:
    "#### &#128274; OAuth Required\n\nReturns watched progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should watch, if there are no upcoming episodes it will be set to `null`. If not `null`, the `reset_at` date is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.\n\nBy default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.\n\nBy default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.\n\nBy default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has watched, even if they've watched older episodes more recently. To use their last watched episode for these calculations, set the `last_activity` flag to `watched`.\n\n**Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.",
  operationId: 'Get show watched progress',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      hidden: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include any hidden seasons',
            example: 'false',
            in: 'query',
            name: 'hidden',
            required: false,
            schema: { type: 'string' },
          },
        }),
      specials: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include specials as season 0',
            example: 'false',
            in: 'query',
            name: 'specials',
            required: false,
            schema: { type: 'string' },
          },
        }),
      count_specials: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'count specials in the overall stats (only applies if specials are included)',
            example: 'true',
            in: 'query',
            name: 'count_specials',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.enum(['aired', 'watched']) } },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postShowsIdProgressWatchedResetRoute = createRoute({
  method: 'post',
  path: '/shows/{id}/progress/watched/reset',
  tags: ['Shows'],
  summary: 'Reset show progress',
  description:
    "#### &#128274; OAuth Required 🔥 VIP Only\n\nReset a show's progress when the user started re-watching the show. You can optionally specify the `reset_at` date to have it calculate progress from that specific date onwards.",
  operationId: 'Reset show progress',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteShowsIdProgressWatchedResetRoute = createRoute({
  method: 'delete',
  path: '/shows/{id}/progress/watched/reset',
  tags: ['Shows'],
  summary: 'Undo reset show progress',
  description:
    '#### &#128274; OAuth Required 🔥 VIP Only\n\nUndo the reset and have watched progress use all watched history for the show.',
  operationId: 'Undo reset show progress',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getShowsIdRatingsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/ratings',
  tags: ['Shows'],
  summary: 'Get show ratings',
  description: 'Returns rating (between 0 and 10) and distribution for a show.',
  operationId: 'Get show ratings',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdRelatedRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/related',
  tags: ['Shows'],
  summary: 'Get related shows',
  description:
    '#### &#128196; Pagination &#10024; Extended Info\n\nReturns related and similar shows.',
  operationId: 'Get related shows',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdSeasonsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons',
  tags: ['Seasons'],
  summary: 'Get all seasons for a show',
  description:
    '#### &#10024; Extended Info\n\nReturns all seasons for a show including the number of episodes in each season.\n\n#### Episodes\n\nIf you add `?extended=episodes` to the URL, it will return all episodes for all seasons.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!',
  operationId: 'Get all seasons for a show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/shows/game-of-thrones/seasons?extended=episodes\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getShowsIdSeasonsSeasonRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}',
  tags: ['Seasons'],
  summary: 'Get single season for a show',
  description:
    "#### &#10024; Extended Info\n\nReturns all episodes for a specific season of a show.\n\n#### Translations\n\nIf you'd like to included translated episode titles and overviews in the response, include the `translations` parameter in the URL. Include all languages by setting the parameter to `all` or use a specific 2 digit country language code to further limit it.\n\n**Note:** This returns a lot of data, so please only use this parameter if you actually need it!",
  operationId: 'Get single season for a show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      translations: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include episode translations',
            example: 'es',
            in: 'query',
            name: 'translations',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonCommentsSortRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/comments/{sort}',
  tags: ['Seasons'],
  summary: 'Get all season comments',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a season. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.',
  operationId: 'Get all season comments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest', 'likes', 'replies', 'highest', 'lowest', 'plays', 'watched'])
        .openapi({
          param: {
            description: 'how to sort',
            example: 'newest',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: [
                'newest',
                'oldest',
                'likes',
                'replies',
                'highest',
                'lowest',
                'plays',
                'watched',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}',
  tags: ['Episodes'],
  summary: 'Get a single episode for a show',
  description:
    "#### &#10024; Extended Info\n\nReturns a single episode's details. All date and times are in UTC and were calculated using the episode's `air_date` and show's `country` and `air_time`.\n\n**Note:** If the `first_aired` is unknown, it will be set to `null`.",
  operationId: 'Get a single episode for a show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/shows/game-of-thrones/seasons/1/episodes/1?extended=full\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeCommentsSortRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}',
  tags: ['Episodes'],
  summary: 'Get all episode comments',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for an episode. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.',
  operationId: 'Get all episode comments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest', 'likes', 'replies', 'highest', 'lowest', 'plays'])
        .openapi({
          param: {
            description: 'how to sort',
            example: 'newest',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['newest', 'oldest', 'likes', 'replies', 'highest', 'lowest', 'plays'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeListsTypeSortRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}',
  tags: ['Episodes'],
  summary: 'Get lists containing this episode',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this episode. By default, `personal` lists are returned sorted by the most `popular`.',
  operationId: 'Get lists containing this episode',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['all', 'personal', 'official', 'watchlists'])
        .openapi({
          param: {
            description: 'Filter for a specific list type',
            example: 'personal',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['all', 'personal', 'official', 'watchlists'], type: 'string' },
          },
        }),
      sort: z
        .enum(['popular', 'likes', 'comments', 'items', 'added', 'updated'])
        .openapi({
          param: {
            description: 'How to sort',
            example: 'popular',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['popular', 'likes', 'comments', 'items', 'added', 'updated'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodePeopleRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/people',
  tags: ['Episodes'],
  summary: 'Get all people for an episode',
  description:
    '#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for an episode. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.\n\n#### Guest Stars\n\nIf you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in the episode.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!',
  operationId: 'Get all people for an episode',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        '```\n/shows/game-of-thrones/seasons/1/episodes/1/people?extended=guest_stars\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeRatingsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/ratings',
  tags: ['Episodes'],
  summary: 'Get episode ratings',
  description: 'Returns rating (between 0 and 10) and distribution for an episode.',
  operationId: 'Get episode ratings',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '12',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeStatsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/stats',
  tags: ['Episodes'],
  summary: 'Get episode stats',
  description: 'Returns lots of episode stats.',
  operationId: 'Get episode stats',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeTranslationsLanguageRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}',
  tags: ['Episodes'],
  summary: 'Get all episode translations',
  description:
    'Returns all translations for an episode, including language and translated values for title and overview.',
  operationId: 'Get all episode translations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: '2 character language code',
            example: 'es',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonEpisodesEpisodeWatchingRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/episodes/{episode}/watching',
  tags: ['Episodes'],
  summary: 'Get users watching right now',
  description: '#### &#10024; Extended Info\n\nReturns all users watching this episode right now.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      episode: z
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
            description: 'episode number',
            example: '1',
            in: 'path',
            name: 'episode',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonListsTypeSortRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/lists/{type}/{sort}',
  tags: ['Seasons'],
  summary: 'Get lists containing this season',
  description:
    '#### &#128196; Pagination &#128513; Emojis\n\nReturns all lists that contain this season. By default, `personal` lists are returned sorted by the most `popular`.',
  operationId: 'Get lists containing this season',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      type: z
        .enum(['all', 'personal', 'official', 'watchlists'])
        .openapi({
          param: {
            description: 'Filter for a specific list type',
            example: 'personal',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['all', 'personal', 'official', 'watchlists'], type: 'string' },
          },
        }),
      sort: z
        .enum(['popular', 'likes', 'comments', 'items', 'added', 'updated'])
        .openapi({
          param: {
            description: 'How to sort',
            example: 'popular',
            in: 'path',
            name: 'sort',
            required: true,
            schema: {
              enum: ['popular', 'likes', 'comments', 'items', 'added', 'updated'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getShowsIdSeasonsSeasonPeopleRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/people',
  tags: ['Seasons'],
  summary: 'Get all people for a season',
  description:
    '#### &#10024; Extended Info\n\nReturns all `cast` and `crew` for a season, including the `episode_count` for which they appear. Each `cast` member will have a `characters` array and a standard `person` object.\n\nThe `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions).. Each of those members will have a `jobs` array and a standard `person` object.\n\n#### Guest Stars\n\nIf you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the season.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!',
  operationId: 'Get all people for a season',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/shows/game-of-thrones/seasons/1/people?extended=guest_stars\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getShowsIdSeasonsSeasonRatingsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/ratings',
  tags: ['Seasons'],
  summary: 'Get season ratings',
  description: 'Returns rating (between 0 and 10) and distribution for a season.',
  operationId: 'Get season ratings',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonStatsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/stats',
  tags: ['Seasons'],
  summary: 'Get season stats',
  description: 'Returns lots of season stats.',
  operationId: 'Get season stats',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonTranslationsLanguageRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/translations/{language}',
  tags: ['Seasons'],
  summary: 'Get all season translations',
  description:
    'Returns all translations for an season, including language and translated values for title and overview.',
  operationId: 'Get all season translations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: '2 character language code',
            example: 'es',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdSeasonsSeasonWatchingRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/seasons/{season}/watching',
  tags: ['Seasons'],
  summary: 'Get users watching right now',
  description: '#### &#10024; Extended Info\n\nReturns all users watching this season right now.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
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
            description: 'season number',
            example: '1',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdStatsRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/stats',
  tags: ['Shows'],
  summary: 'Get show stats',
  description: 'Returns lots of show stats.',
  operationId: 'Get show stats',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdStudiosRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/studios',
  tags: ['Shows'],
  summary: 'Get show studios',
  description: 'Returns all studios for a show.',
  operationId: 'Get show studios',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdTranslationsLanguageRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/translations/{language}',
  tags: ['Shows'],
  summary: 'Get all show translations',
  description:
    'Returns all translations for a show, including language and translated values for title and overview.',
  operationId: 'Get all show translations',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: '2 character language code',
            example: 'es',
            in: 'path',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getShowsIdWatchingRoute = createRoute({
  method: 'get',
  path: '/shows/{id}/watching',
  tags: ['Shows'],
  summary: 'Get users watching right now',
  description: '#### &#10024; Extended Info\n\nReturns all users watching this show right now.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID, Trakt slug, or IMDB ID',
            example: 'game-of-thrones',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postSyncCollectionRoute = createRoute({
  method: 'post',
  path: '/sync/collection',
  tags: ['Sync'],
  summary: 'Add items to collection',
  description:
    '#### &#128274; OAuth Required\n\nAdd items to a user\'s collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.\n\nSend a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.\n\n**Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n\n#### Media Object POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style="color:red;">*</a> | object | `movie`, `show`, or `episode` object. |\n| `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). |\n| `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. |\n| `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. |\n| `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. |\n| `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. |\n| `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` |\n| `3d` | boolean | Set `true` if in 3D. |',
  operationId: 'Add items to collection',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      audio: z.string().exactOptional(),
                      audio_channels: z.string().exactOptional(),
                      collected_at: z.string().exactOptional(),
                      hdr: z.string().exactOptional(),
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      media_type: z.string().exactOptional(),
                      resolution: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z
                                  .object({
                                    audio: z.string().exactOptional(),
                                    audio_channels: z.string().exactOptional(),
                                    media_type: z.string().exactOptional(),
                                    number: z.number(),
                                    resolution: z.string().exactOptional(),
                                  })
                                  .openapi({ required: ['number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                      title: z.string(),
                      year: z.number(),
                    })
                    .openapi({ required: ['title', 'year', 'ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [{ ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 } }],
                movies: [
                  {
                    audio: 'dts_ma',
                    audio_channels: '5.1',
                    collected_at: '2014-09-01T09:10:11.000Z',
                    hdr: 'dolby_vision',
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    media_type: 'digital',
                    resolution: 'uhd_4k',
                    title: 'Batman Begins',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' } },
                ],
                seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 } }],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                  {
                    ids: {
                      imdb: 'tt1520211',
                      slug: 'the-walking-dead',
                      tmdb: 1402,
                      trakt: 2,
                      tvdb: 153021,
                    },
                    seasons: [{ number: 3 }],
                    title: 'The Walking Dead',
                    year: 2010,
                  },
                  {
                    ids: { imdb: 'tt0804503', slug: 'mad-men', tmdb: 1104, trakt: 4, tvdb: 80337 },
                    seasons: [
                      {
                        episodes: [
                          {
                            audio: 'dolby_digital_plus',
                            audio_channels: '5.1',
                            media_type: 'bluray',
                            number: 1,
                            resolution: 'hd_1080p',
                          },
                          { number: 2 },
                        ],
                        number: 1,
                      },
                    ],
                    title: 'Mad Men',
                    year: 2007,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncCollectionRemoveRoute = createRoute({
  method: 'post',
  path: '/sync/collection/remove',
  tags: ['Sync'],
  summary: 'Remove items from collection',
  description:
    "#### &#128274; OAuth Required\n\nRemove one or more items from a user's collection.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
  operationId: 'Remove items from collection',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: RemoveItemsFromCollectionBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getSyncCollectionTypeRoute = createRoute({
  method: 'get',
  path: '/sync/collection/{type}',
  tags: ['Sync'],
  summary: 'Get collection',
  description:
    "#### &#128274; OAuth Required &#10024; Extended Info\n\nGet all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.\n\nEach `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.\n\nEach `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.\n\nIf you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.",
  operationId: 'Get collection',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/sync/collection/shows?extended=metadata\n```',
      content: {},
      headers: z.object({}),
    },
  },
  security: [{ oauth2: [] }],
})

export const postSyncHistoryRoute = createRoute({
  method: 'post',
  path: '/sync/history',
  tags: ['Sync'],
  summary: 'Add items to watched history',
  description:
    "#### &#128274; OAuth Required\n\nAdd items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.\n\nSend a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.\n\n**Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n\n#### Media Object POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style=\"color:red;\">*</a> | object | `movie`, `show`, or `episode` object. |\n| `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |",
  operationId: 'Add items to watched history',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      watched_at: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      title: z.string().exactOptional(),
                      watched_at: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      watched_at: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z
                                  .object({
                                    number: z.number(),
                                    watched_at: z.string().exactOptional(),
                                  })
                                  .openapi({ required: ['number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                            watched_at: z.string().exactOptional(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                      title: z.string(),
                      year: z.number(),
                    })
                    .openapi({ required: ['title', 'year', 'ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [
                  {
                    ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 },
                    watched_at: '2014-09-01T09:10:11.000Z',
                  },
                ],
                movies: [
                  {
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    title: 'Batman Begins',
                    watched_at: '2014-09-01T09:10:11.000Z',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' } },
                ],
                seasons: [
                  {
                    ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 },
                    watched_at: '2019-01-02T09:10:11.000Z',
                  },
                ],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                  {
                    ids: {
                      imdb: 'tt1520211',
                      slug: 'the-walking-dead',
                      tmdb: 1402,
                      trakt: 2,
                      tvdb: 153021,
                    },
                    seasons: [{ number: 3, watched_at: '2014-09-01T09:10:11.000Z' }],
                    title: 'The Walking Dead',
                    year: 2010,
                  },
                  {
                    ids: { imdb: 'tt0804503', slug: 'mad-men', tmdb: 1104, trakt: 4, tvdb: 80337 },
                    seasons: [
                      {
                        episodes: [
                          { number: 1, watched_at: '2014-09-01T09:10:11.000Z' },
                          { number: 2 },
                        ],
                        number: 1,
                      },
                    ],
                    title: 'Mad Men',
                    year: 2007,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncHistoryRemoveRoute = createRoute({
  method: 'post',
  path: '/sync/history/remove',
  tags: ['Sync'],
  summary: 'Remove items from history',
  description:
    "#### &#128274; OAuth Required\n\nRemove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.\n\nYou can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n| `ids` | array | Array of history ids. |",
  operationId: 'Remove items from history',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              ids: z.array(z.number()).exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z.object({ number: z.number() }).openapi({ required: ['number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                      title: z.string(),
                      year: z.number(),
                    })
                    .openapi({ required: ['title', 'year', 'ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [{ ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 } }],
                ids: [4, 8, 15, 16, 23, 42],
                movies: [
                  {
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    title: 'Batman Begins',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' } },
                ],
                seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 } }],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                  {
                    ids: {
                      imdb: 'tt1520211',
                      slug: 'the-walking-dead',
                      tmdb: 1402,
                      trakt: 2,
                      tvdb: 153021,
                    },
                    seasons: [{ number: 3 }],
                    title: 'The Walking Dead',
                    year: 2010,
                  },
                  {
                    ids: { imdb: 'tt0804503', slug: 'mad-men', tmdb: 1104, trakt: 4, tvdb: 80337 },
                    seasons: [{ episodes: [{ number: 1 }, { number: 2 }], number: 1 }],
                    title: 'Mad Men',
                    year: 2007,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getSyncHistoryTypeIdRoute = createRoute({
  method: 'get',
  path: '/sync/history/{type}/{id}',
  tags: ['Sync'],
  summary: 'Get watched history',
  description:
    '#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info\n\nReturns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.\n\nSpecify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.\n\n| Example URL | Returns watches for... |\n|---|---|\n| `/history/movies/12601` | TRON: Legacy |\n| `/history/shows/1388` | All episodes of Breaking Bad |\n| `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |\n| `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |',
  operationId: 'Get watched history',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows', 'seasons', 'episodes'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows', 'seasons', 'episodes'], type: 'string' },
          },
        }),
      id: z
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
            description: 'Trakt ID for a specific item.',
            example: '123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting date.',
            example: '2016-06-01T00:00:00.000Z',
            in: 'query',
            name: 'start_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ending date.',
            example: '2016-07-01T23:59:59.000Z',
            in: 'query',
            name: 'end_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/sync/history/episodes\n```',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getSyncLastActivitiesRoute = createRoute({
  method: 'get',
  path: '/sync/last_activities',
  tags: ['Sync'],
  summary: 'Get last activity',
  description:
    "#### &#128274; OAuth Required\n\nThis method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.\n\n#### Account\n\n`settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.",
  operationId: 'Get last activity',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteSyncPlaybackIdRoute = createRoute({
  method: 'delete',
  path: '/sync/playback/{id}',
  tags: ['Sync'],
  summary: 'Remove a playback item',
  description:
    "#### &#128274; OAuth Required\n\nRemove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.",
  operationId: 'Remove a playback item',
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
          z.int(),
        )
        .openapi({
          param: {
            description: 'playback ID',
            example: '13',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getSyncPlaybackTypeRoute = createRoute({
  method: 'get',
  path: '/sync/playback/{type}',
  tags: ['Sync'],
  summary: 'Get playback progress',
  description:
    '#### &#128274; OAuth Required &#128196; Pagination Optional\n\nWhenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.\n\nYou can optionally specify a `type` to only get `movies` or `episodes`.\n\nBy default, all results will be returned. Pagination is optional and can be used for something like an "on deck" feature, or if you only need a limited data set.\n\n**Note:** We only save playback progress for the last 6 months.',
  operationId: 'Get playback progress',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'episodes'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'episodes'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      start_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting date.',
            example: '2016-06-01T00:00:00.000Z',
            in: 'query',
            name: 'start_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ending date.',
            example: '2016-07-01T23:59:59.000Z',
            in: 'query',
            name: 'end_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncRatingsRoute = createRoute({
  method: 'post',
  path: '/sync/ratings',
  tags: ['Sync'],
  summary: 'Add new ratings',
  description:
    '#### &#128274; OAuth Required\n\nRate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.\n\nSend a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n\n#### Media Object POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| item <span style="color:red;">*</a> | object | `movie`, `show`, `season`, or `episode` object. |\n| `rating` <span style="color:red;">*</a> | integer | Between 1 and 10. |\n| `rated_at` | datetime | UTC datetime when the item was rated. |',
  operationId: 'Add new ratings',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rating: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      rated_at: z.string().exactOptional(),
                      rating: z.number(),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['rating', 'ids'] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      rating: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      rating: z.number().exactOptional(),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z
                                  .object({ number: z.number(), rating: z.number() })
                                  .openapi({ required: ['rating', 'number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                            rating: z.number().exactOptional(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                      title: z.string(),
                      year: z.number(),
                    })
                    .openapi({ required: ['title', 'year', 'ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [
                  {
                    ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 },
                    rating: 7,
                  },
                ],
                movies: [
                  {
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    rated_at: '2014-09-01T09:10:11.000Z',
                    rating: 5,
                    title: 'Batman Begins',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' }, rating: 10 },
                ],
                seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 }, rating: 10 }],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    rating: 10,
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                  {
                    ids: {
                      imdb: 'tt1520211',
                      slug: 'the-walking-dead',
                      tmdb: 1402,
                      trakt: 2,
                      tvdb: 153021,
                    },
                    seasons: [{ number: 3, rating: 9 }],
                    title: 'The Walking Dead',
                    year: 2010,
                  },
                  {
                    ids: { imdb: 'tt0804503', slug: 'mad-men', tmdb: 1104, trakt: 4, tvdb: 80337 },
                    seasons: [
                      {
                        episodes: [
                          { number: 1, rating: 8 },
                          { number: 2, rating: 8 },
                        ],
                        number: 1,
                      },
                    ],
                    title: 'Mad Men',
                    year: 2007,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncRatingsRemoveRoute = createRoute({
  method: 'post',
  path: '/sync/ratings/remove',
  tags: ['Sync'],
  summary: 'Remove ratings',
  description:
    '#### &#128274; OAuth Required\n\nRemove ratings for one or more items.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |',
  operationId: 'Remove ratings',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: RemoveItemsFromCollectionBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getSyncRatingsTypeRatingRoute = createRoute({
  method: 'get',
  path: '/sync/ratings/{type}/{rating}',
  tags: ['Sync'],
  summary: 'Get ratings',
  description:
    "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info\n\nGet a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.",
  operationId: 'Get ratings',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows', 'seasons', 'episodes', 'all'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows', 'seasons', 'episodes', 'all'], type: 'string' },
          },
        }),
      rating: z
        .union([
          z.literal('1'),
          z.literal('2'),
          z.literal('3'),
          z.literal('4'),
          z.literal('5'),
          z.literal('6'),
          z.literal('7'),
          z.literal('8'),
          z.literal('9'),
          z.literal('10'),
        ])
        .openapi({
          param: {
            description: 'Filter for a specific rating.',
            example: '9',
            in: 'path',
            name: 'rating',
            required: true,
            schema: { enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '```\n/sync/ratings/episodes\n```', content: {}, headers: z.object({}) },
  },
  security: [{ oauth2: [] }],
})

export const postSyncRecommendationsRoute = createRoute({
  method: 'post',
  path: '/sync/recommendations',
  tags: ['Sync'],
  summary: 'Add items to personal recommendations',
  description:
    "#### &#128274; OAuth Required &#128513; Emojis\n\nIf the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### Notes\n\nEach recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.\n\n#### Limits\n\nIf the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |",
  operationId: 'Add items to personal recommendations',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      notes: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      notes: z.string().exactOptional(),
                      title: z.string(),
                      year: z.number(),
                    })
                    .openapi({ required: ['title', 'year', 'ids'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                movies: [
                  {
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    notes: "One of Chritian Bale's most iconic roles.",
                    title: 'Batman Begins',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' } },
                ],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    notes: 'I AM THE DANGER!',
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                  {
                    ids: {
                      imdb: 'tt1520211',
                      slug: 'the-walking-dead',
                      tmdb: 1402,
                      trakt: 2,
                      tvdb: 153021,
                    },
                    title: 'The Walking Dead',
                    year: 2010,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncRecommendationsRemoveRoute = createRoute({
  method: 'post',
  path: '/sync/recommendations/remove',
  tags: ['Sync'],
  summary: 'Remove items from personal recommendations',
  description:
    "#### &#128274; OAuth Required\n\nRemove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |",
  operationId: 'Remove items from personal recommendations',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                movies: [
                  {
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    title: 'Batman Begins',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' } },
                ],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncRecommendationsReorderRoute = createRoute({
  method: 'post',
  path: '/sync/recommendations/reorder',
  tags: ['Sync'],
  summary: 'Reorder personally recommended items',
  description:
    "#### &#128274; OAuth Required\n\nReorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.",
  operationId: 'Reorder personally recommended items',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ReorderWatchlistItemsBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getSyncRecommendationsTypeSortRoute = createRoute({
  method: 'get',
  path: '/sync/recommendations/{type}/{sort}',
  tags: ['Sync'],
  summary: 'Get personal recommendations',
  description:
    "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nIf the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### Notes\n\nEach recommendation contains a `notes` field explaining why the user recommended the item.",
  operationId: 'Get personal recommendations',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: 'Filter for a specific item type',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
      sort: z
        .enum(['rank', 'added', 'released', 'title'])
        .openapi({
          param: {
            description: 'How to sort (only if type is also sent)',
            example: 'rank',
            in: 'path',
            name: 'sort',
            required: true,
            schema: { enum: ['rank', 'added', 'released', 'title'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/sync/recommendations/shows\n```',
      content: {},
      headers: z.object({
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getSyncWatchedTypeRoute = createRoute({
  method: 'get',
  path: '/sync/watched/{type}',
  tags: ['Sync'],
  summary: 'Get watched',
  description:
    "#### &#128274; OAuth Required &#10024; Extended Info\n\nReturns all movies or shows a user has watched sorted by most plays.\n\nIf `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.\n\nEach `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.\n\nEach `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.",
  operationId: 'Get watched',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/sync/watched/shows?extended=noseasons\n```',
      content: {},
      headers: z.object({}),
    },
  },
  security: [{ oauth2: [] }],
})

export const postSyncWatchlistRoute = createRoute({
  method: 'post',
  path: '/sync/watchlist',
  tags: ['Sync'],
  summary: 'Add items to watchlist',
  description:
    "#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced\n\nAdd one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.\n\n#### Notes\n\nEach watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.\n\n#### Limits\n\nIf the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
  operationId: 'Add items to watchlist',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      notes: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                      year: z.number().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      notes: z.string().exactOptional(),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z.object({ number: z.number() }).openapi({ required: ['number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                      title: z.string(),
                      year: z.number(),
                    })
                    .openapi({ required: ['title', 'year', 'ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [{ ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 } }],
                movies: [
                  {
                    ids: { imdb: 'tt0372784', slug: 'batman-begins-2005', tmdb: 272, trakt: 1 },
                    notes: "One of Chritian Bale's most iconic roles.",
                    title: 'Batman Begins',
                    year: 2005,
                  },
                  { ids: { imdb: 'tt0000111' } },
                ],
                seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 } }],
                shows: [
                  {
                    ids: {
                      imdb: 'tt0903747',
                      slug: 'breaking-bad',
                      tmdb: 1396,
                      trakt: 1,
                      tvdb: 81189,
                    },
                    notes: 'I AM THE DANGER!',
                    title: 'Breaking Bad',
                    year: 2008,
                  },
                  {
                    ids: {
                      imdb: 'tt1520211',
                      slug: 'the-walking-dead',
                      tmdb: 1402,
                      trakt: 2,
                      tvdb: 153021,
                    },
                    seasons: [{ number: 3 }],
                    title: 'The Walking Dead',
                    year: 2010,
                  },
                  {
                    ids: { imdb: 'tt0804503', slug: 'mad-men', tmdb: 1104, trakt: 4, tvdb: 80337 },
                    seasons: [{ episodes: [{ number: 1 }, { number: 2 }], number: 1 }],
                    title: 'Mad Men',
                    year: 2007,
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: {}, headers: z.object({}) },
    420: {
      description: '',
      headers: z.object({
        'X-Account-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Upgrade-URL': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-VIP-User': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const postSyncWatchlistRemoveRoute = createRoute({
  method: 'post',
  path: '/sync/watchlist/remove',
  tags: ['Sync'],
  summary: 'Remove items from watchlist',
  description:
    "#### &#128274; OAuth Required\n\nRemove one or more items from a user's watchlist.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |",
  operationId: 'Remove items from watchlist',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: RemoveItemsFromCollectionBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postSyncWatchlistReorderRoute = createRoute({
  method: 'post',
  path: '/sync/watchlist/reorder',
  tags: ['Sync'],
  summary: 'Reorder watchlist items',
  description:
    "#### &#128274; OAuth Required\n\nReorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.",
  operationId: 'Reorder watchlist items',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ReorderWatchlistItemsBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getSyncWatchlistTypeSortRoute = createRoute({
  method: 'get',
  path: '/sync/watchlist/{type}/{sort}',
  tags: ['Sync'],
  summary: 'Get watchlist',
  description:
    "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nReturns all items in a user's watchlist filtered by type.\n\n#### Notes\n\nEach watchlist item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nBy default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.\n\nWe also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.\n\n#### Auto Removal\n\nWhen an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.\n\n_**The watchlist should not be used as a list of what the user is actively watching.**_\n\nUse a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.",
  operationId: 'Get watchlist',
  request: {
    params: z.object({
      type: z
        .enum(['movies', 'shows', 'seasons', 'episodes'])
        .openapi({
          param: {
            description: 'Filter for a specific item type',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows', 'seasons', 'episodes'], type: 'string' },
          },
        }),
      sort: z
        .enum(['rank', 'added', 'released', 'title'])
        .openapi({
          param: {
            description: 'How to sort (only if type is also sent)',
            example: 'rank',
            in: 'path',
            name: 'sort',
            required: true,
            schema: { enum: ['rank', 'added', 'released', 'title'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/sync/watchlist/episodes\n```',
      content: {},
      headers: z.object({
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getUsersHiddenSectionRoute = createRoute({
  method: 'get',
  path: '/users/hidden/{section}',
  tags: ['Users'],
  summary: 'Get hidden items',
  description:
    '#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info\n\nGet hidden items for a section. This will return an array of standard media objects. You can optionally limit the `type` of results to return.',
  operationId: 'Get hidden items',
  request: {
    params: z.object({
      section: z
        .enum([
          'calendar',
          'progress_watched',
          'progress_watched_reset',
          'progress_collected',
          'recommendations',
          'comments',
        ])
        .openapi({
          param: {
            description: '',
            example: 'calendar',
            in: 'path',
            name: 'section',
            required: true,
            schema: {
              enum: [
                'calendar',
                'progress_watched',
                'progress_watched_reset',
                'progress_collected',
                'recommendations',
                'comments',
              ],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['movie', 'show', 'season', 'user'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Narrow down by element type.',
            in: 'query',
            name: 'type',
            required: false,
            schema: { enum: ['movie', 'show', 'season', 'user'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const postUsersHiddenSectionRoute = createRoute({
  method: 'post',
  path: '/users/hidden/{section}',
  tags: ['Users'],
  summary: 'Add hidden items',
  description:
    "#### &#128274; OAuth Required\n\nHide items for a specific section. Here's what type of items can hidden for each section.\n\n#### Hideable Media Objects\n\n| Section | Objects |\n|---|---|---|\n| `calendar` | `movie`, `show` |\n| `progress_watched` | `show`, `season` |\n| `progress_collected` | `show`, `season` |\n| `recommendations` | `movie`, `show` |\n| `comments` | `user` |\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `users` | array | Array of `user` objects. |",
  operationId: 'Add hidden items',
  request: {
    params: z.object({
      section: z
        .enum(['calendar', 'progress_watched', 'progress_collected', 'recommendations'])
        .openapi({
          param: {
            description: '',
            example: 'calendar',
            in: 'path',
            name: 'section',
            required: true,
            schema: {
              enum: ['calendar', 'progress_watched', 'progress_collected', 'recommendations'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AddHiddenItemsBodyRequestBody,
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postUsersHiddenSectionRemoveRoute = createRoute({
  method: 'post',
  path: '/users/hidden/{section}/remove',
  tags: ['Users'],
  summary: 'Remove hidden items',
  description:
    "#### &#128274; OAuth Required\n\nUnhide items for a specific section. Here's what type of items can unhidden for each section.\n\n#### Unhideable Media Objects\n\n| Section | Objects |\n|---|---|---|\n| `calendar` | `movie`, `show` |\n| `progress_watched` | `show`, `season` |\n| `progress_collected` | `show`, `season` |\n| `recommendations` | `movie`, `show` |\n| `comments` | `user` |\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `users` | array | Array of `user` objects. |",
  operationId: 'Remove hidden items',
  request: {
    params: z.object({
      section: z
        .enum(['calendar', 'progress_watched', 'progress_collected', 'recommendations', 'comments'])
        .openapi({
          param: {
            description: '',
            example: 'calendar',
            in: 'path',
            name: 'section',
            required: true,
            schema: {
              enum: [
                'calendar',
                'progress_watched',
                'progress_collected',
                'recommendations',
                'comments',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: AddHiddenItemsBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersRequestsRoute = createRoute({
  method: 'get',
  path: '/users/requests',
  tags: ['Users'],
  summary: 'Get follow requests',
  description:
    "#### &#128274; OAuth Required &#10024; Extended Info\n\nList a user's pending follow requests so they can either approve or deny them.",
  operationId: 'Get follow requests',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersRequestsFollowingRoute = createRoute({
  method: 'get',
  path: '/users/requests/following',
  tags: ['Users'],
  summary: 'Get pending following requests',
  description:
    "#### &#128274; OAuth Required &#10024; Extended Info\n\nList a user's pending following requests that they're waiting for the other user's to approve.",
  operationId: 'Get pending following requests',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postUsersRequestsIdRoute = createRoute({
  method: 'post',
  path: '/users/requests/{id}',
  tags: ['Users'],
  summary: 'Approve follow request',
  description:
    '#### &#128274; OAuth Required\n\nApprove a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.',
  operationId: 'Approve follow request',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the follower request.',
            example: '123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteUsersRequestsIdRoute = createRoute({
  method: 'delete',
  path: '/users/requests/{id}',
  tags: ['Users'],
  summary: 'Deny follow request',
  description:
    '#### &#128274; OAuth Required\n\nDeny a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.',
  operationId: 'Deny follow request',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersSavedFiltersSectionRoute = createRoute({
  method: 'get',
  path: '/users/saved_filters/{section}',
  tags: ['Users'],
  summary: 'Get saved filters',
  description:
    '#### &#128274; OAuth Required &#128196; Pagination 🔥 VIP Only\n\nGet all saved filters a user has created. The `path` and `query` can be used to construct an API path to retrieve the saved data. Think of this like a dynamically updated list.',
  operationId: 'Get saved filters',
  request: {
    params: z.object({
      section: z
        .enum(['movies', 'shows', 'calendars', 'search'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'section',
            required: true,
            schema: { enum: ['movies', 'shows', 'calendars', 'search'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getUsersSettingsRoute = createRoute({
  method: 'get',
  path: '/users/settings',
  tags: ['Users'],
  summary: 'Retrieve settings',
  description:
    "#### &#128274; OAuth Required\n\nGet the user's settings so you can align your app's experience with what they're used to on the trakt website. A globally unique `uuid` is also returned, which can be used to identify the user locally in your app if needed. However, the `uuid` can't be used to retrieve data from the Trakt API.",
  operationId: 'Retrieve settings',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'Get user profile',
  description:
    "#### &#128275; OAuth Optional &#10024; Extended Info\n\nGet a user's profile information. If the user is private, info will only be returned if you send OAuth and are either that user or an approved follower. Adding `?extended=vip` will return some additional VIP related fields so you can display the user's Trakt VIP status and year count.",
  operationId: 'Get user profile',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '```\n/users/sean?extended=vip\n```', content: {}, headers: z.object({}) },
  },
})

export const getUsersIdCollectionTypeRoute = createRoute({
  method: 'get',
  path: '/users/{id}/collection/{type}',
  tags: ['Users'],
  summary: 'Get collection',
  description:
    "#### &#128275; OAuth Optional &#10024; Extended Info\n\nGet all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.\n\nEach `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.\n\nEach `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.\n\nIf you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/collection/shows?extended=metadata\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getUsersIdCommentsCommentTypeTypeRoute = createRoute({
  method: 'get',
  path: '/users/{id}/comments/{comment_type}/{type}',
  tags: ['Users'],
  summary: 'Get comments',
  description:
    '#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info\n\nReturns the most recently written comments for the user. You can optionally filter by the `comment_type` and media `type` to limit what gets returned.\n\nBy default, only top level comments are returned. Set `?include_replies=true` to return replies in addition to top level comments. Set `?include_replies=only` to return only replies and no top level comments.',
  operationId: 'Get comments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      comment_type: z
        .enum(['all', 'reviews', 'shouts'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'comment_type',
            required: true,
            schema: { enum: ['all', 'reviews', 'shouts'], type: 'string' },
          },
        }),
      type: z
        .enum(['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'])
        .openapi({
          param: {
            description: '',
            example: 'all',
            in: 'path',
            name: 'type',
            required: true,
            schema: {
              enum: ['all', 'movies', 'shows', 'seasons', 'episodes', 'lists'],
              type: 'string',
            },
          },
        }),
    }),
    query: z.object({
      include_replies: z
        .enum(['true', 'false', 'only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'include comment replies',
            example: 'false',
            in: 'query',
            name: 'include_replies',
            required: false,
            schema: { enum: ['true', 'false', 'only'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/comments\n```',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postUsersIdFollowRoute = createRoute({
  method: 'post',
  path: '/users/{id}/follow',
  tags: ['Users'],
  summary: 'Follow this user',
  description:
    '#### &#128274; OAuth Required\n\nIf the user has a private profile, the follow request will require approval (`approved_at` will be null). If a user is public, they will be followed immediately (`approved_at` will have a date).\n\n**Note:** If this user is already being followed, a `409` HTTP status code will returned.',
  operationId: 'Follow this user',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 201: { description: 'Created', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteUsersIdFollowRoute = createRoute({
  method: 'delete',
  path: '/users/{id}/follow',
  tags: ['Users'],
  summary: 'Unfollow this user',
  description: '#### &#128274; OAuth Required\n\nUnfollow someone you already follow.',
  operationId: 'Unfollow this user',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersIdFollowersRoute = createRoute({
  method: 'get',
  path: '/users/{id}/followers',
  tags: ['Users'],
  summary: 'Get followers',
  description:
    '#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all followers including when the relationship began.',
  operationId: 'Get followers',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getUsersIdFollowingRoute = createRoute({
  method: 'get',
  path: '/users/{id}/following',
  tags: ['Users'],
  summary: 'Get following',
  description:
    "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all user's they follow including when the relationship began.",
  operationId: 'Get following',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getUsersIdFriendsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/friends',
  tags: ['Users'],
  summary: 'Get friends',
  description:
    '#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all friends for a user including when the relationship began. Friendship is a 2 way relationship where each user follows the other.',
  operationId: 'Get friends',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getUsersIdHistoryTypeItemIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}/history/{type}/{item_id}',
  tags: ['Users'],
  summary: 'Get watched history',
  description:
    '#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info\n\nReturns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.\n\nSpecify a `type` and trakt `item_id` to limit the history for just that item. If the `item_id` is valid, but there is no history, an empty array will be returned.\n\n| Example URL | Returns watches for... |\n|---|---|\n| `/history/movies/12601` | TRON: Legacy |\n| `/history/shows/1388` | All episodes of Breaking Bad |\n| `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |\n| `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movies', 'shows', 'seasons', 'episodes'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows', 'seasons', 'episodes'], type: 'string' },
          },
        }),
      item_id: z
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
            description: 'Trakt ID for a specific item.',
            example: '123',
            in: 'path',
            name: 'item_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      start_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Starting date.',
            example: '2016-06-01T00:00:00.000Z',
            in: 'query',
            name: 'start_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
      end_at: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Ending date.',
            example: '2016-07-01T23:59:59.000Z',
            in: 'query',
            name: 'end_at',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/history/episodes\n```',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getUsersIdLikesTypeRoute = createRoute({
  method: 'get',
  path: '/users/{id}/likes/{type}',
  tags: ['Users'],
  summary: 'Get likes',
  description:
    '#### &#128274; OAuth Optional &#128196; Pagination\n\nGet items a user likes. This will return an array of standard media objects. You can optionally limit the `type` of results to return.\n\n#### Comment Media Objects\n\nIf you add `?extended=comments` to the URL, it will return media objects for each comment like.\n\n**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!',
  operationId: 'Get likes',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['comments', 'lists'])
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['comments', 'lists'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/likes/lists\n```',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getUsersIdListsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/lists',
  tags: ['Users'],
  summary: "Get a user's personal lists",
  description:
    '#### &#128275; OAuth Optional &#128513; Emojis\n\nReturns all personal lists for a user. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items a specific list contains.',
  operationId: "Get a user's personal lists",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postUsersIdListsRoute = createRoute({
  method: 'post',
  path: '/users/{id}/lists',
  tags: ['Users'],
  summary: 'Create personal list',
  description:
    '#### &#128274; OAuth Required 🔥 VIP Enhanced\n\nCreate a new personal list. The `name` is the only required field, but the other info is recommended to ask for.\n\n#### Limits\n\nIf the user\'s list limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.\n\n#### JSON POST Data\n\n| Key | Type | Default | Value |\n|---|---|---|---|\n| `name` <span style="color:red;">*</a> | string |  | Name of the list. |\n| `description` | string |  | Description for this list. |\n| `privacy` | string | `private` | `private`, `friends`, `public` |\n| `display_numbers` | boolean | `false` | Should each item be numbered? |\n| `allow_comments` | boolean | `true` | Are comments allowed? |\n| `sort_by` | string | `rank` | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |\n| `sort_how` | string | `asc` | `asc`, `desc` |',
  operationId: 'Create personal list',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              allow_comments: z.boolean().exactOptional(),
              description: z.string().exactOptional(),
              display_numbers: z.boolean().exactOptional(),
              name: z.string().exactOptional(),
              privacy: z.string().exactOptional(),
              sort_by: z.string().exactOptional(),
              sort_how: z.string().exactOptional(),
            })
            .openapi({
              example: {
                allow_comments: true,
                description:
                  'Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.',
                display_numbers: true,
                name: 'Star Wars in machete order',
                privacy: 'public',
                sort_by: 'rank',
                sort_how: 'asc',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: {}, headers: z.object({}) },
    420: {
      description: '',
      headers: z.object({
        'X-Account-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Upgrade-URL': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-VIP-User': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getUsersIdListsCollaborationsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/lists/collaborations',
  tags: ['Users'],
  summary: 'Get all lists a user can collaborate on',
  description:
    '#### &#128275; OAuth Optional\n\nReturns all lists a user can collaborate on. This gives full access to add, remove, and re-order list items. It essentially works just like a list owned by the user, just make sure to use the correct list owner `user` when building the API URLs.',
  operationId: 'Get all lists a user can collaborate on',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const postUsersIdListsReorderRoute = createRoute({
  method: 'post',
  path: '/users/{id}/lists/reorder',
  tags: ['Users'],
  summary: "Reorder a user's lists",
  description:
    '#### &#128274; OAuth Required\n\nReorder all lists by sending the updated `rank` of list ids. Use the [**/users/:id/lists**](#reference/users/lists) method to get all list ids.',
  operationId: "Reorder a user's lists",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ rank: z.array(z.number()).exactOptional() })
            .openapi({ example: { rank: [823, 224, 88768, 356456, 245, 2, 890] }, required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersIdListsListIdRoute = createRoute({
  method: 'get',
  path: '/users/{id}/lists/{list_id}',
  tags: ['Users'],
  summary: 'Get personal list',
  description:
    '#### &#128275; OAuth Optional &#128513; Emojis\n\nReturns a single personal list. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items this list contains.',
  operationId: 'Get personal list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const putUsersIdListsListIdRoute = createRoute({
  method: 'put',
  path: '/users/{id}/lists/{list_id}',
  tags: ['Users'],
  summary: 'Update personal list',
  description:
    "#### &#128274; OAuth Required\n\nUpdate a personal list by sending 1 or more parameters. If you update the list name, the original slug will still be retained so existing references to this list won't break.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|---|\n| `name` | string | Name of the list. |\n| `description` | string | Description for this list. |\n| `privacy` | string | `private`, `friends`, `public` |\n| `display_numbers` | boolean | Should each item be numbered? |\n| `allow_comments` | boolean | Are comments allowed? |\n| `sort_by` | string | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |\n| `sort_how` | string | `asc`, `desc` |",
  operationId: 'Update personal list',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              display_numbers: z.boolean().exactOptional(),
              name: z.string().exactOptional(),
              privacy: z.string().exactOptional(),
              sort_by: z.string().exactOptional(),
              sort_how: z.string().exactOptional(),
            })
            .openapi({
              example: {
                display_numbers: false,
                name: 'Star Wars in NEW machete order',
                privacy: 'private',
                sort_by: 'rank',
                sort_how: 'asc',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteUsersIdListsListIdRoute = createRoute({
  method: 'delete',
  path: '/users/{id}/lists/{list_id}',
  tags: ['Users'],
  summary: "Delete a user's personal list",
  description: '#### &#128274; OAuth Required\n\nRemove a personal list and all items it contains.',
  operationId: "Delete a user's personal list",
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersIdListsListIdCommentsSortRoute = createRoute({
  method: 'get',
  path: '/users/{id}/lists/{list_id}/comments/{sort}',
  tags: ['Users'],
  summary: 'Get all list comments',
  description:
    '#### &#128275; OAuth Optional &#128196; Pagination &#128513; Emojis\n\nReturns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .enum(['newest', 'oldest', 'likes', 'replies'])
        .openapi({
          param: {
            description: 'how to sort',
            example: 'newest',
            in: 'path',
            name: 'sort',
            required: true,
            schema: { enum: ['newest', 'oldest', 'likes', 'replies'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postUsersIdListsListIdItemsRoute = createRoute({
  method: 'post',
  path: '/users/{id}/lists/{list_id}/items',
  tags: ['Users'],
  summary: 'Add items to personal list',
  description:
    "#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced\n\nAdd one or more items to a personal list. Items can be movies, shows, seasons, episodes, or people.\n\n#### Notes\n\nEach list item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.\n\n#### Limits\n\nIf the user's list item limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n| `people` | array | Array of `person` objects. |",
  operationId: 'Add items to personal list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      notes: z.string().exactOptional(),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              people: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      name: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({ trakt: z.number().exactOptional() })
                        .openapi({ required: [] }),
                      notes: z.string().exactOptional(),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z.object({ number: z.number() }).openapi({ required: ['number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                    })
                    .openapi({ required: ['ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [{ ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 } }],
                movies: [
                  { ids: { trakt: 1 }, notes: 'Amazing movie!' },
                  { ids: { imdb: 'tt0000111' } },
                ],
                people: [
                  {
                    ids: { imdb: 'nm0000313', slug: 'jeff-bridges', tmdb: 1229, trakt: 2 },
                    name: 'Jeff Bridges',
                  },
                ],
                seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 } }],
                shows: [
                  { ids: { trakt: 1 } },
                  {
                    ids: { trakt: 1 },
                    notes: "Best season of this show, don't bother watching the rest.",
                    seasons: [{ number: 1 }],
                  },
                  {
                    ids: { trakt: 1 },
                    seasons: [{ episodes: [{ number: 1 }, { number: 2 }], number: 1 }],
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    201: { description: 'Created', content: {}, headers: z.object({}) },
    420: {
      description: '',
      headers: z.object({
        'X-Account-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Upgrade-URL': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-VIP-User': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const postUsersIdListsListIdItemsRemoveRoute = createRoute({
  method: 'post',
  path: '/users/{id}/lists/{list_id}/items/remove',
  tags: ['Users'],
  summary: 'Remove items from personal list',
  description:
    '#### &#128274; OAuth Required\n\nRemove one or more items from a personal list.\n\n#### JSON POST Data\n\n| Key | Type | Value |\n|---|---|---|\n| `movies` | array | Array of `movie` objects. (see examples &#8594;) |\n| `shows` | array | Array of `show` objects. |\n| `seasons` | array | Array of `season` objects. |\n| `episodes` | array | Array of `episode` objects. |\n| `people` | array | Array of `person` objects. |',
  operationId: 'Remove items from personal list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              episodes: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              movies: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: ['ids'] }),
                )
                .exactOptional(),
              people: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          imdb: z.string().exactOptional(),
                          slug: z.string().exactOptional(),
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      name: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              seasons: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({
                          tmdb: z.number().exactOptional(),
                          trakt: z.number().exactOptional(),
                          tvdb: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              shows: z
                .array(
                  z
                    .object({
                      ids: z
                        .object({ trakt: z.number().exactOptional() })
                        .openapi({ required: [] }),
                      seasons: z.array(
                        z
                          .object({
                            episodes: z
                              .array(
                                z.object({ number: z.number() }).openapi({ required: ['number'] }),
                              )
                              .exactOptional(),
                            number: z.number(),
                          })
                          .openapi({ required: ['number'] }),
                      ),
                    })
                    .openapi({ required: ['ids', 'seasons'] }),
                )
                .exactOptional(),
            })
            .openapi({
              example: {
                episodes: [{ ids: { imdb: 'tt007404', tmdb: 422183, trakt: 1061, tvdb: 1555111 } }],
                movies: [{ ids: { trakt: 1 } }, { ids: { imdb: 'tt0000111' } }],
                people: [
                  {
                    ids: { imdb: 'nm0000313', slug: 'jeff-bridges', tmdb: 1229, trakt: 2 },
                    name: 'Jeff Bridges',
                  },
                ],
                seasons: [{ ids: { tmdb: 81266, trakt: 140912, tvdb: 703353 } }],
                shows: [
                  { ids: { trakt: 1 } },
                  { ids: { trakt: 1 }, seasons: [{ number: 1 }] },
                  {
                    ids: { trakt: 1 },
                    seasons: [{ episodes: [{ number: 1 }, { number: 2 }], number: 1 }],
                  },
                ],
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const postUsersIdListsListIdItemsReorderRoute = createRoute({
  method: 'post',
  path: '/users/{id}/lists/{list_id}/items/reorder',
  tags: ['Users'],
  summary: 'Reorder items on a list',
  description:
    '#### &#128274; OAuth Required\n\nReorder all items on a list by sending the updated `rank` of list item ids. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get all list item ids.',
  operationId: 'Reorder items on a list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: ReorderWatchlistItemsBodyRequestBody,
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersIdListsListIdItemsTypeRoute = createRoute({
  method: 'get',
  path: '/users/{id}/lists/{list_id}/items/{type}',
  tags: ['Users'],
  summary: 'Get items on a personal list',
  description:
    "#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nGet all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.\n\n#### Notes\n\nEach list item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nAll list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.",
  operationId: 'Get items on a personal list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movie', 'show', 'season', 'episode', 'person'])
        .openapi({
          param: {
            description: 'Filter for a specific item type',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movie', 'show', 'season', 'episode', 'person'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Private-User': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const postUsersIdListsListIdLikeRoute = createRoute({
  method: 'post',
  path: '/users/{id}/lists/{list_id}/like',
  tags: ['Users'],
  summary: 'Like a list',
  description:
    '#### &#128274; OAuth Required\n\nVotes help determine popular lists. Only one like is allowed per list per user.',
  operationId: 'Like a list',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const deleteUsersIdListsListIdLikeRoute = createRoute({
  method: 'delete',
  path: '/users/{id}/lists/{list_id}/like',
  tags: ['Users'],
  summary: 'Remove like on a list',
  description: '#### &#128274; OAuth Required\n\nRemove a like on a list.',
  operationId: 'Remove like on a list',
  request: {
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Automatically added',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content', headers: z.object({}) } },
  security: [{ oauth2: [] }],
})

export const getUsersIdListsListIdLikesRoute = createRoute({
  method: 'get',
  path: '/users/{id}/lists/{list_id}/likes',
  tags: ['Users'],
  summary: 'Get all users who liked a list',
  description:
    '#### &#128275; OAuth Optional &#128196; Pagination\n\nReturns all users who liked a list.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .string()
        .openapi({
          param: {
            description: 'Trakt ID or Trakt slug',
            example: 'star-wars-in-machete-order',
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {},
      headers: z.object({
        'X-Pagination-Item-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Limit': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Pagination-Page-Count': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const getUsersIdRatingsTypeRatingRoute = createRoute({
  method: 'get',
  path: '/users/{id}/ratings/{type}/{rating}',
  tags: ['Users'],
  summary: 'Get ratings',
  description:
    "#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info\n\nGet a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movies', 'shows', 'seasons', 'episodes', 'all'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows', 'seasons', 'episodes', 'all'], type: 'string' },
          },
        }),
      rating: z
        .union([
          z.literal('1'),
          z.literal('2'),
          z.literal('3'),
          z.literal('4'),
          z.literal('5'),
          z.literal('6'),
          z.literal('7'),
          z.literal('8'),
          z.literal('9'),
          z.literal('10'),
        ])
        .openapi({
          param: {
            description: 'Filter for a specific rating.',
            example: '9',
            in: 'path',
            name: 'rating',
            required: true,
            schema: { enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/ratings/episodes\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getUsersIdRecommendationsTypeSortRoute = createRoute({
  method: 'get',
  path: '/users/{id}/recommendations/{type}/{sort}',
  tags: ['Users'],
  summary: 'Get personal recommendations',
  description:
    "#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nReturns the top 50 items a user personally recommendeds to others. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.\n\n#### Notes\n\nEach recommendation contains a `notes` field explaining why the user recommended the item.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: 'Filter for a specific item type',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
      sort: z
        .enum(['rank', 'added', 'released', 'title'])
        .openapi({
          param: {
            description: 'How to sort (only if type is also sent)',
            example: 'rank',
            in: 'path',
            name: 'sort',
            required: true,
            schema: { enum: ['rank', 'added', 'released', 'title'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/justin/recommendations/shows\n```',
      content: {},
      headers: z.object({
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ oauth2: [] }],
})

export const getUsersIdStatsRoute = createRoute({
  method: 'get',
  path: '/users/{id}/stats',
  tags: ['Users'],
  summary: 'Get stats',
  description:
    '#### &#128275; OAuth Optional\n\nReturns stats about the movies, shows, and episodes a user has watched, collected, and rated.',
  operationId: 'Get stats',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: {}, headers: z.object({}) } },
})

export const getUsersIdWatchedTypeRoute = createRoute({
  method: 'get',
  path: '/users/{id}/watched/{type}',
  tags: ['Users'],
  summary: 'Get watched',
  description:
    "#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns all movies or shows a user has watched sorted by most plays.\n\nIf `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.\n\nEach `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.\n\nEach `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movies', 'shows'])
        .openapi({
          param: {
            description: '',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/watched/shows?extended=noseasons\n```',
      content: {},
      headers: z.object({}),
    },
  },
})

export const getUsersIdWatchingRoute = createRoute({
  method: 'get',
  path: '/users/{id}/watching',
  tags: ['Users'],
  summary: 'Get watching',
  description:
    '#### &#128275; OAuth Optional &#10024; Extended Info\n\nReturns a movie or episode if the user is currently watching something.  If they are not, it returns no data and a `204` HTTP status code.',
  operationId: 'Get watching',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Currently watching a `movie`.', content: {}, headers: z.object({}) },
    204: { description: 'Not watching anything.', headers: z.object({}) },
  },
})

export const getUsersIdWatchlistTypeSortRoute = createRoute({
  method: 'get',
  path: '/users/{id}/watchlist/{type}/{sort}',
  tags: ['Users'],
  summary: 'Get watchlist',
  description:
    "#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis\n\nReturns all items in a user's watchlist filtered by type.\n\n#### Notes\n\nEach watchlist item contains a `notes` field with text entered by the user.\n\n#### Sorting Headers\n\nBy default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.\n\nWe also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.\n\n#### Auto Removal\n\nWhen an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.\n\n_**The watchlist should not be used as a list of what the user is actively watching.**_\n\nUse a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.",
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'User slug',
            example: 'sean',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .enum(['movies', 'shows', 'seasons', 'episodes'])
        .openapi({
          param: {
            description: 'Filter for a specific item type',
            example: 'movies',
            in: 'path',
            name: 'type',
            required: true,
            schema: { enum: ['movies', 'shows', 'seasons', 'episodes'], type: 'string' },
          },
        }),
      sort: z
        .enum(['rank', 'added', 'released', 'title'])
        .openapi({
          param: {
            description: 'How to sort (only if type is also sent)',
            example: 'rank',
            in: 'path',
            name: 'sort',
            required: true,
            schema: { enum: ['rank', 'added', 'released', 'title'], type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'trakt-api-version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. 2',
            example: '2',
            in: 'header',
            name: 'trakt-api-version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'trakt-api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'e.g. [client_id]',
            example: '[client_id]',
            in: 'header',
            name: 'trakt-api-key',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '```\n/users/sean/watchlist/episodes\n```',
      content: {},
      headers: z.object({
        'X-Private-User': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-By': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'X-Sort-How': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})
