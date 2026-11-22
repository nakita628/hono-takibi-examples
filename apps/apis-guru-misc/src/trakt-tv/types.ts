declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/calendars/all/dvd/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/all/movies/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/all/shows/new/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/all/shows/premieres/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/all/shows/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/my/dvd/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/my/movies/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/my/shows/new/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/my/shows/premieres/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/calendars/my/shows/:start_date/:days': {
      $get: {
        input: { param: { start_date: string; days: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/certifications/:type': {
      $get: {
        input: { param: { type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/checkin': {
      $delete: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            app_date?: string | undefined
            app_version?: string | undefined
            message?: string | undefined
            movie?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  title?: string | undefined
                  year?: number | undefined
                }
              | undefined
            sharing?: { tumblr?: boolean | undefined; twitter?: boolean | undefined } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            comment?: string | undefined
            movie?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  title?: string | undefined
                  year?: number | undefined
                }
              | undefined
            sharing?:
              | {
                  medium?: boolean | undefined
                  tumblr?: boolean | undefined
                  twitter?: boolean | undefined
                }
              | undefined
            spoiler?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/recent/:comment_type/:type': {
      $get: {
        input: {
          param: {
            comment_type: 'all' | 'reviews' | 'shouts'
            type: 'all' | 'movies' | 'shows' | 'seasons' | 'episodes' | 'lists'
          }
        } & { query: { include_replies?: string | undefined } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/trending/:comment_type/:type': {
      $get: {
        input: {
          param: {
            comment_type: 'all' | 'reviews' | 'shouts'
            type: 'all' | 'movies' | 'shows' | 'seasons' | 'episodes' | 'lists'
          }
        } & { query: { include_replies?: string | undefined } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/updates/:comment_type/:type': {
      $get: {
        input: {
          param: {
            comment_type: 'all' | 'reviews' | 'shouts'
            type: 'all' | 'movies' | 'shows' | 'seasons' | 'episodes' | 'lists'
          }
        } & { query: { include_replies?: string | undefined } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: { comment?: string | undefined; spoiler?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/:id/item': {
      $get: {
        input: { param: { id: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/:id/like': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/comments/:id/likes': {
      $get: {
        input: { param: { id: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/comments/:id/replies': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: { comment?: string | undefined; spoiler?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/countries/:type': {
      $get: {
        input: { param: { type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/genres/:type': {
      $get: {
        input: { param: { type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/languages/:type': {
      $get: {
        input: { param: { type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/popular': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/trending': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id': {
      $get: {
        input: { param: { id: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/comments/:sort': {
      $get: {
        input: { param: { id: number; sort: 'newest' | 'oldest' | 'likes' | 'replies' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/items/:type': {
      $get: {
        input: {
          param: { id: string; type: 'movie' | 'show' | 'season' | 'episode' | 'person' }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/lists/:id/likes': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/anticipated': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/boxoffice': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/collected/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/played/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/popular': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/recommended/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/trending': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/updates/id/:start_date': {
      $get: {
        input: { param: { start_date: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/updates/:start_date': {
      $get: {
        input: { param: { start_date: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/watched/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/aliases': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/comments/:sort': {
      $get: {
        input: {
          param: {
            id: string
            sort: 'newest' | 'oldest' | 'likes' | 'replies' | 'highest' | 'lowest' | 'plays'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/lists/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            type: 'all' | 'personal' | 'official' | 'watchlists' | 'recommendations'
            sort: 'popular' | 'likes' | 'comments' | 'items' | 'added' | 'updated'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/people': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/ratings': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/related': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/releases/:country': {
      $get: {
        input: { param: { id: string; country: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/stats': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/studios': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/translations/:language': {
      $get: {
        input: { param: { id: string; language: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/movies/:id/watching': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/networks': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/authorize': {
      $get: {
        input: {
          query: {
            response_type: string
            client_id: string
            redirect_uri: string
            state?: string | undefined
          }
        } & { json: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/device/code': {
      $post: {
        input: { json: { client_id?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/device/token': {
      $post: {
        input: {
          json: {
            client_id?: string | undefined
            client_secret?: string | undefined
            code?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/revoke': {
      $post: {
        input: {
          json: {
            client_id?: string | undefined
            client_secret?: string | undefined
            token?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/token': {
      $post: {
        input: {
          json: {
            client_id?: string | undefined
            client_secret?: string | undefined
            grant_type?: string | undefined
            redirect_uri?: string | undefined
            refresh_token?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/updates/id/:start_date': {
      $get: {
        input: { param: { start_date: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/updates/:start_date': {
      $get: {
        input: { param: { start_date: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/:id/lists/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            type: 'all' | 'personal' | 'official'
            sort: 'popular' | 'likes' | 'comments' | 'items' | 'added' | 'updated'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/:id/movies': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/:id/shows': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/recommendations/movies': {
      $get: {
        input: {
          query: {
            ignore_collected?: 'true' | 'false' | undefined
            ignore_watchlisted?: 'true' | 'false' | undefined
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/recommendations/movies/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/recommendations/shows': {
      $get: {
        input: {
          query: {
            ignore_collected?: 'true' | 'false' | undefined
            ignore_watchlisted?: 'true' | 'false' | undefined
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/recommendations/shows/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/scrobble/pause': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            app_date?: string | undefined
            app_version?: string | undefined
            movie?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  title?: string | undefined
                  year?: number | undefined
                }
              | undefined
            progress?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/scrobble/start': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            app_date?: string | undefined
            app_version?: string | undefined
            movie?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  title?: string | undefined
                  year?: number | undefined
                }
              | undefined
            progress?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/scrobble/stop': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            app_date?: string | undefined
            app_version?: string | undefined
            movie?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  title?: string | undefined
                  year?: number | undefined
                }
              | undefined
            progress?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search/:id_type/:id': {
      $get: {
        input: { param: { id_type: 'trakt' | 'imdb' | 'tmdb' | 'tvdb'; id: string } } & {
          query: { type?: 'movie' | 'show' | 'episode' | 'person' | 'list' | undefined }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search/:type': {
      $get: {
        input: { param: { type: 'movie' | 'show' | 'episode' | 'person' | 'list' } } & {
          query: { query: string }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json:
            | 'title'
            | 'tagline'
            | 'overview'
            | 'people'
            | 'translations'
            | 'aliases'
            | 'name'
            | 'biography'
            | 'description'
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/anticipated': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/collected/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/played/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/popular': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/recommended/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/trending': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/updates/id/:start_date': {
      $get: {
        input: { param: { start_date: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/updates/:start_date': {
      $get: {
        input: { param: { start_date: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/watched/:period': {
      $get: {
        input: { param: { period: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/aliases': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/certifications': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/comments/:sort': {
      $get: {
        input: {
          param: {
            id: string
            sort:
              | 'newest'
              | 'oldest'
              | 'likes'
              | 'replies'
              | 'highest'
              | 'lowest'
              | 'plays'
              | 'watched'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/last_episode': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/lists/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            type: 'all' | 'personal' | 'official' | 'watchlists' | 'recommendations'
            sort: 'popular' | 'likes' | 'comments' | 'items' | 'added' | 'updated'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/next_episode': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/people': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/progress/collection': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            hidden?: string | undefined
            specials?: string | undefined
            count_specials?: string | undefined
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: 'aired' | 'collected' }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/progress/watched': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            hidden?: string | undefined
            specials?: string | undefined
            count_specials?: string | undefined
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: 'aired' | 'watched' }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/progress/watched/reset': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/ratings': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/related': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season': {
      $get: {
        input: { param: { id: string; season: number } } & {
          query: { translations?: string | undefined }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/comments/:sort': {
      $get: {
        input: {
          param: {
            id: string
            season: number
            sort:
              | 'newest'
              | 'oldest'
              | 'likes'
              | 'replies'
              | 'highest'
              | 'lowest'
              | 'plays'
              | 'watched'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode': {
      $get: {
        input: { param: { id: string; season: number; episode: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/comments/:sort': {
      $get: {
        input: {
          param: {
            id: string
            season: number
            episode: number
            sort: 'newest' | 'oldest' | 'likes' | 'replies' | 'highest' | 'lowest' | 'plays'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/lists/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            season: number
            episode: number
            type: 'all' | 'personal' | 'official' | 'watchlists'
            sort: 'popular' | 'likes' | 'comments' | 'items' | 'added' | 'updated'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/people': {
      $get: {
        input: { param: { id: string; season: number; episode: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/ratings': {
      $get: {
        input: { param: { id: string; season: number; episode: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/stats': {
      $get: {
        input: { param: { id: string; season: number; episode: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/translations/:language': {
      $get: {
        input: { param: { id: string; season: number; episode: number; language: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/episodes/:episode/watching': {
      $get: {
        input: { param: { id: string; season: number; episode: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/lists/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            season: number
            type: 'all' | 'personal' | 'official' | 'watchlists'
            sort: 'popular' | 'likes' | 'comments' | 'items' | 'added' | 'updated'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/people': {
      $get: {
        input: { param: { id: string; season: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/ratings': {
      $get: {
        input: { param: { id: string; season: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/stats': {
      $get: {
        input: { param: { id: string; season: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/translations/:language': {
      $get: {
        input: { param: { id: string; season: number; language: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/seasons/:season/watching': {
      $get: {
        input: { param: { id: string; season: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/stats': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/studios': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/translations/:language': {
      $get: {
        input: { param: { id: string; language: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/shows/:id/watching': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/collection': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | {
                  audio?: string | undefined
                  audio_channels?: string | undefined
                  collected_at?: string | undefined
                  hdr?: string | undefined
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  media_type?: string | undefined
                  resolution?: string | undefined
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons: {
                    episodes?:
                      | {
                          audio?: string | undefined
                          audio_channels?: string | undefined
                          media_type?: string | undefined
                          number: number
                          resolution?: string | undefined
                        }[]
                      | undefined
                    number: number
                  }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/collection/remove': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/collection/:type': {
      $get: {
        input: { param: { type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/history': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                  watched_at?: string | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  watched_at?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                  watched_at?: string | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons: {
                    episodes?: { number: number; watched_at?: string | undefined }[] | undefined
                    number: number
                    watched_at?: string | undefined
                  }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/history/remove': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            ids?: number[] | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/history/:type/:id': {
      $get: {
        input: { param: { type: 'movies' | 'shows' | 'seasons' | 'episodes'; id: number } } & {
          query: { start_at?: string | undefined; end_at?: string | undefined }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/last_activities': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/playback/:id': {
      $delete: {
        input: { param: { id: number } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sync/playback/:type': {
      $get: {
        input: { param: { type: 'movies' | 'episodes' } } & {
          query: { start_at?: string | undefined; end_at?: string | undefined }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/ratings': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                  rating?: number | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  rated_at?: string | undefined
                  rating: number
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                  rating?: number | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  rating?: number | undefined
                  seasons: {
                    episodes?: { number: number; rating: number }[] | undefined
                    number: number
                    rating?: number | undefined
                  }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/ratings/remove': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/ratings/:type/:rating': {
      $get: {
        input: {
          param: {
            type: 'movies' | 'shows' | 'seasons' | 'episodes' | 'all'
            rating: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/recommendations': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  notes?: string | undefined
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  notes?: string | undefined
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/recommendations/remove': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/recommendations/reorder': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: { rank?: number[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/recommendations/:type/:sort': {
      $get: {
        input: {
          param: { type: 'movies' | 'shows'; sort: 'rank' | 'added' | 'released' | 'title' }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/watched/:type': {
      $get: {
        input: { param: { type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/watchlist': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  notes?: string | undefined
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  notes?: string | undefined
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 420
      }
    }
  } & {
    '/sync/watchlist/remove': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/watchlist/reorder': {
      $post: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: { rank?: number[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sync/watchlist/:type/:sort': {
      $get: {
        input: {
          param: {
            type: 'movies' | 'shows' | 'seasons' | 'episodes'
            sort: 'rank' | 'added' | 'released' | 'title'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/hidden/:section': {
      $get: {
        input: {
          param: {
            section:
              | 'calendar'
              | 'progress_watched'
              | 'progress_watched_reset'
              | 'progress_collected'
              | 'recommendations'
              | 'comments'
          }
        } & { query: { type?: 'movie' | 'show' | 'season' | 'user' | undefined } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          param: {
            section: 'calendar' | 'progress_watched' | 'progress_collected' | 'recommendations'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?: { ids?: { trakt?: number | undefined } | undefined }[] | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons?: { number?: number | undefined }[] | undefined
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/hidden/:section/remove': {
      $post: {
        input: {
          param: {
            section:
              | 'calendar'
              | 'progress_watched'
              | 'progress_collected'
              | 'recommendations'
              | 'comments'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            movies?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                  }
                  title?: string | undefined
                  year?: number | undefined
                }[]
              | undefined
            seasons?: { ids?: { trakt?: number | undefined } | undefined }[] | undefined
            shows?:
              | {
                  ids: {
                    imdb?: string | undefined
                    slug?: string | undefined
                    tmdb?: number | undefined
                    trakt?: number | undefined
                    tvdb?: number | undefined
                  }
                  seasons?: { number?: number | undefined }[] | undefined
                  title: string
                  year: number
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/requests': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/requests/following': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/requests/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/saved_filters/:section': {
      $get: {
        input: { param: { section: 'movies' | 'shows' | 'calendars' | 'search' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/settings': {
      $get: {
        input: {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/collection/:type': {
      $get: {
        input: { param: { id: string; type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/comments/:comment_type/:type': {
      $get: {
        input: {
          param: {
            id: string
            comment_type: 'all' | 'reviews' | 'shouts'
            type: 'all' | 'movies' | 'shows' | 'seasons' | 'episodes' | 'lists'
          }
        } & { query: { include_replies?: 'true' | 'false' | 'only' | undefined } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/follow': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/followers': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/following': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/friends': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/history/:type/:item_id': {
      $get: {
        input: {
          param: { id: string; type: 'movies' | 'shows' | 'seasons' | 'episodes'; item_id: number }
        } & { query: { start_at?: string | undefined; end_at?: string | undefined } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/likes/:type': {
      $get: {
        input: { param: { id: string; type: 'comments' | 'lists' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            allow_comments?: boolean | undefined
            description?: string | undefined
            display_numbers?: boolean | undefined
            name?: string | undefined
            privacy?: string | undefined
            sort_by?: string | undefined
            sort_how?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 420
      }
    }
  } & {
    '/users/:id/lists/collaborations': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/reorder': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: { rank?: number[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/:list_id': {
      $delete: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            display_numbers?: boolean | undefined
            name?: string | undefined
            privacy?: string | undefined
            sort_by?: string | undefined
            sort_how?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/:list_id/comments/:sort': {
      $get: {
        input: {
          param: { id: string; list_id: string; sort: 'newest' | 'oldest' | 'likes' | 'replies' }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/:list_id/items': {
      $post: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | {
                  ids: { imdb?: string | undefined; trakt?: number | undefined }
                  notes?: string | undefined
                }[]
              | undefined
            people?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  name?: string | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: { trakt?: number | undefined }
                  notes?: string | undefined
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 420
      }
    }
  } & {
    '/users/:id/lists/:list_id/items/remove': {
      $post: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & {
          json: {
            episodes?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            movies?:
              | { ids: { imdb?: string | undefined; trakt?: number | undefined } }[]
              | undefined
            people?:
              | {
                  ids?:
                    | {
                        imdb?: string | undefined
                        slug?: string | undefined
                        tmdb?: number | undefined
                        trakt?: number | undefined
                      }
                    | undefined
                  name?: string | undefined
                }[]
              | undefined
            seasons?:
              | {
                  ids?:
                    | {
                        tmdb?: number | undefined
                        trakt?: number | undefined
                        tvdb?: number | undefined
                      }
                    | undefined
                }[]
              | undefined
            shows?:
              | {
                  ids: { trakt?: number | undefined }
                  seasons: { episodes?: { number: number }[] | undefined; number: number }[]
                }[]
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/:list_id/items/reorder': {
      $post: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        } & { json: { rank?: number[] | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/:list_id/items/:type': {
      $get: {
        input: {
          param: {
            id: string
            list_id: string
            type: 'movie' | 'show' | 'season' | 'episode' | 'person'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/lists/:list_id/like': {
      $delete: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:id/lists/:list_id/likes': {
      $get: {
        input: { param: { id: string; list_id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/ratings/:type/:rating': {
      $get: {
        input: {
          param: {
            id: string
            type: 'movies' | 'shows' | 'seasons' | 'episodes' | 'all'
            rating: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/recommendations/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            type: 'movies' | 'shows'
            sort: 'rank' | 'added' | 'released' | 'title'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/stats': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/watched/:type': {
      $get: {
        input: { param: { id: string; type: 'movies' | 'shows' } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/users/:id/watching': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:id/watchlist/:type/:sort': {
      $get: {
        input: {
          param: {
            id: string
            type: 'movies' | 'shows' | 'seasons' | 'episodes'
            sort: 'rank' | 'added' | 'released' | 'title'
          }
        } & {
          header: { 'trakt-api-version'?: string | undefined; 'trakt-api-key'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
