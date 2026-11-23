type Position = { id?: number | undefined; name?: string | undefined; slug?: string | undefined }
type Person = {
  games_count?: number | undefined
  id?: number | undefined
  image?: string | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type PersonSingle = {
  description?: string | undefined
  games_count?: number | undefined
  id?: number | undefined
  image?: string | undefined
  image_background?: string | undefined
  name: string
  rating?: string | undefined
  rating_top?: number | undefined
  reviews_count?: number | undefined
  slug?: string | undefined
  updated?: string | undefined
}
type Developer = {
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type DeveloperSingle = {
  description?: string | undefined
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type Game = {
  added?: number | undefined
  added_by_status?: { [x: string]: unknown } | undefined
  background_image?: string | undefined
  esrb_rating?:
    | ({
        id?: number | undefined
        name?:
          | 'Everyone'
          | 'Everyone 10+'
          | 'Teen'
          | 'Mature'
          | 'Adults Only'
          | 'Rating Pending'
          | undefined
        slug?:
          | 'everyone'
          | 'everyone-10-plus'
          | 'teen'
          | 'mature'
          | 'adults-only'
          | 'rating-pending'
          | undefined
      } | null)
    | undefined
  id?: number | undefined
  metacritic?: number | undefined
  name?: string | undefined
  platforms?:
    | {
        platform?:
          | { id?: number | undefined; name?: string | undefined; slug?: string | undefined }
          | undefined
        released_at?: (string | null) | undefined
        requirements?:
          | ({ minimum?: string | undefined; recommended?: string | undefined } | null)
          | undefined
      }[]
    | undefined
  playtime?: number | undefined
  rating: number
  rating_top?: number | undefined
  ratings?: { [x: string]: unknown } | undefined
  ratings_count?: number | undefined
  released?: string | undefined
  reviews_text_count?: string | undefined
  slug?: string | undefined
  suggestions_count?: number | undefined
  tba?: boolean | undefined
  updated?: string | undefined
}
type GamePersonList = {
  games_count?: number | undefined
  id?: number | undefined
  image?: string | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type ScreenShot = {
  height?: number | undefined
  hidden?: boolean | undefined
  id?: number | undefined
  image?: string | undefined
  width?: number | undefined
}
type GameStoreFull = {
  game_id?: string | undefined
  id?: number | undefined
  store_id?: string | undefined
  url: string
}
type GamePlatformMetacritic = { metascore?: number | undefined; url?: string | undefined }
type GameSingle = {
  achievements_count?: number | undefined
  added?: number | undefined
  added_by_status?: { [x: string]: unknown } | undefined
  additions_count?: number | undefined
  alternative_names?: string[] | undefined
  background_image?: string | undefined
  background_image_additional?: string | undefined
  creators_count?: number | undefined
  description?: string | undefined
  esrb_rating?:
    | ({
        id?: number | undefined
        name?:
          | 'Everyone'
          | 'Everyone 10+'
          | 'Teen'
          | 'Mature'
          | 'Adults Only'
          | 'Rating Pending'
          | undefined
        slug?:
          | 'everyone'
          | 'everyone-10-plus'
          | 'teen'
          | 'mature'
          | 'adults-only'
          | 'rating-pending'
          | undefined
      } | null)
    | undefined
  game_series_count?: number | undefined
  id?: number | undefined
  metacritic?: number | undefined
  metacritic_platforms?: GamePlatformMetacritic[] | undefined
  metacritic_url?: string | undefined
  movies_count?: number | undefined
  name?: string | undefined
  name_original?: string | undefined
  parent_achievements_count?: string | undefined
  parents_count?: number | undefined
  platforms?:
    | {
        platform?:
          | { id?: number | undefined; name?: string | undefined; slug?: string | undefined }
          | undefined
        released_at?: (string | null) | undefined
        requirements?:
          | ({ minimum?: string | undefined; recommended?: string | undefined } | null)
          | undefined
      }[]
    | undefined
  playtime?: number | undefined
  rating: number
  rating_top?: number | undefined
  ratings?: { [x: string]: unknown } | undefined
  ratings_count?: number | undefined
  reactions?: { [x: string]: unknown } | undefined
  reddit_count?: number | undefined
  reddit_description?: string | undefined
  reddit_logo?: string | undefined
  reddit_name?: string | undefined
  reddit_url?: string | undefined
  released?: string | undefined
  reviews_text_count?: string | undefined
  screenshots_count?: number | undefined
  slug?: string | undefined
  suggestions_count?: number | undefined
  tba?: boolean | undefined
  twitch_count?: string | undefined
  updated?: string | undefined
  website?: string | undefined
  youtube_count?: string | undefined
}
type ParentAchievement = {
  description?: string | undefined
  id?: number | undefined
  image?: string | undefined
  name?: string | undefined
  percent?: string | undefined
}
type Movie = {
  data?: { [x: string]: unknown } | undefined
  id?: number | undefined
  name?: string | undefined
  preview?: string | undefined
}
type Reddit = {
  created?: string | undefined
  id?: number | undefined
  image?: string | undefined
  name?: string | undefined
  text?: string | undefined
  url?: string | undefined
  username?: string | undefined
  username_url?: string | undefined
}
type Twitch = {
  created?: string | undefined
  description?: string | undefined
  external_id?: number | undefined
  id?: number | undefined
  language?: string | undefined
  name?: string | undefined
  published?: string | undefined
  thumbnail?: string | undefined
  view_count?: number | undefined
}
type Youtube = {
  channel_id?: string | undefined
  channel_title?: string | undefined
  comments_count?: number | undefined
  created?: string | undefined
  description?: string | undefined
  dislike_count?: number | undefined
  external_id?: string | undefined
  favorite_count?: number | undefined
  id?: number | undefined
  like_count?: number | undefined
  name?: string | undefined
  thumbnails?: { [x: string]: unknown } | undefined
  view_count?: number | undefined
}
type Genre = {
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type GenreSingle = {
  description?: string | undefined
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type Platform = {
  games_count?: number | undefined
  id?: number | undefined
  image?: (string | null) | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
  year_end?: (number | null) | undefined
  year_start?: (number | null) | undefined
}
type PlatformParentSingle = {
  id?: number | undefined
  name: string
  platforms: Platform[]
  slug?: string | undefined
}
type PlatformSingle = {
  description?: string | undefined
  games_count?: number | undefined
  id?: number | undefined
  image?: (string | null) | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
  year_end?: (number | null) | undefined
  year_start?: (number | null) | undefined
}
type Publisher = {
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type PublisherSingle = {
  description?: string | undefined
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type Store = {
  domain?: (string | null) | undefined
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type StoreSingle = {
  description?: string | undefined
  domain?: (string | null) | undefined
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
type Tag = {
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  language?: string | undefined
  name: string
  slug?: string | undefined
}
type TagSingle = {
  description?: string | undefined
  games_count?: number | undefined
  id?: number | undefined
  image_background?: string | undefined
  name: string
  slug?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/creator-roles': {
      $get: {
        input: { query: { page?: number | undefined; page_size?: number | undefined } }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Position[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creators': {
      $get: {
        input: { query: { page?: number | undefined; page_size?: number | undefined } }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Person[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creators/:id': {
      $get: {
        input: { param: { id: string } }
        output: PersonSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/developers': {
      $get: {
        input: { query: { page?: number | undefined; page_size?: number | undefined } }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Developer[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/developers/:id': {
      $get: {
        input: { param: { id: number } }
        output: DeveloperSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            page_size?: number | undefined
            search?: string | undefined
            search_precise?: boolean | undefined
            search_exact?: boolean | undefined
            parent_platforms?: string | undefined
            platforms?: string | undefined
            stores?: string | undefined
            developers?: string | undefined
            publishers?: string | undefined
            genres?: string | undefined
            tags?: string | undefined
            creators?: string | undefined
            dates?: string | undefined
            updated?: string | undefined
            platforms_count?: number | undefined
            metacritic?: string | undefined
            exclude_collection?: number | undefined
            exclude_additions?: boolean | undefined
            exclude_parents?: boolean | undefined
            exclude_game_series?: boolean | undefined
            exclude_stores?: string | undefined
            ordering?: string | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Game[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:game_pk/additions': {
      $get: {
        input: { param: { game_pk: string } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Game[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:game_pk/development-team': {
      $get: {
        input: { param: { game_pk: string } } & {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: GamePersonList[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:game_pk/game-series': {
      $get: {
        input: { param: { game_pk: string } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Game[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:game_pk/parent-games': {
      $get: {
        input: { param: { game_pk: string } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Game[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:game_pk/screenshots': {
      $get: {
        input: { param: { game_pk: string } } & {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ScreenShot[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:game_pk/stores': {
      $get: {
        input: { param: { game_pk: string } } & {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: GameStoreFull[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:id': {
      $get: {
        input: { param: { id: string } }
        output: GameSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:id/achievements': {
      $get: {
        input: { param: { id: string } }
        output: ParentAchievement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:id/movies': {
      $get: { input: { param: { id: string } }; output: Movie; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/games/:id/reddit': {
      $get: { input: { param: { id: string } }; output: Reddit; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/games/:id/suggested': {
      $get: {
        input: { param: { id: string } }
        output: GameSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/games/:id/twitch': {
      $get: { input: { param: { id: string } }; output: Twitch; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/games/:id/youtube': {
      $get: { input: { param: { id: string } }; output: Youtube; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/genres': {
      $get: {
        input: {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Genre[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/genres/:id': {
      $get: {
        input: { param: { id: number } }
        output: GenreSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/platforms': {
      $get: {
        input: {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Platform[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/platforms/lists/parents': {
      $get: {
        input: {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PlatformParentSingle[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/platforms/:id': {
      $get: {
        input: { param: { id: number } }
        output: PlatformSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publishers': {
      $get: {
        input: { query: { page?: number | undefined; page_size?: number | undefined } }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Publisher[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publishers/:id': {
      $get: {
        input: { param: { id: number } }
        output: PublisherSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stores': {
      $get: {
        input: {
          query: {
            ordering?: string | undefined
            page?: number | undefined
            page_size?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Store[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stores/:id': {
      $get: {
        input: { param: { id: number } }
        output: StoreSingle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags': {
      $get: {
        input: { query: { page?: number | undefined; page_size?: number | undefined } }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Tag[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:id': {
      $get: {
        input: { param: { id: number } }
        output: TagSingle
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
