type User = {
  avatar_url?: string | undefined
  banner_url?: string | undefined
  display_name?: string | undefined
  profile_url?: string | undefined
  twitter?: string | undefined
  username?: string | undefined
}
type Gif = {
  bitly_url?: string | undefined
  content_url?: string | undefined
  create_datetime?: string | undefined
  embded_url?: string | undefined
  featured_tags?: string[] | undefined
  id?: string | undefined
  images?:
    | {
        downsized?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        downsized_large?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        downsized_medium?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        downsized_small?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        downsized_still?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_height?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_height_downsampled?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_height_small?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_height_small_still?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_height_still?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_width?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_width_downsampled?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_width_small?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_width_small_still?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        fixed_width_still?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        looping?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        original?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        original_still?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        preview?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
        preview_gif?:
          | {
              frames?: string | undefined
              height?: string | undefined
              mp4?: string | undefined
              mp4_size?: string | undefined
              size?: string | undefined
              url?: string | undefined
              webp?: string | undefined
              webp_size?: string | undefined
              width?: string | undefined
            }
          | undefined
      }
    | undefined
  import_datetime?: string | undefined
  rating?: string | undefined
  slug?: string | undefined
  source?: string | undefined
  source_post_url?: string | undefined
  source_tld?: string | undefined
  tags?: string[] | undefined
  trending_datetime?: string | undefined
  type?: 'gif' | undefined
  update_datetime?: string | undefined
  url?: string | undefined
  user?: User | undefined
  username?: string | undefined
}
type Meta = {
  msg?: string | undefined
  response_id?: string | undefined
  status?: number | undefined
}
type Pagination = {
  count?: number | undefined
  offset?: number | undefined
  total_count?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/gifs': {
      $get:
        | {
            input: { query: { ids?: string | undefined } }
            output: {
              data?: Gif[] | undefined
              meta?: Meta | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { ids?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/gifs/random': {
      $get:
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: { data?: Gif | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/gifs/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {
              data?: Gif[] | undefined
              meta?: Meta | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/gifs/translate': {
      $get:
        | {
            input: { query: { s: string } }
            output: { data?: Gif | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/gifs/trending': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {
              data?: Gif[] | undefined
              meta?: Meta | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/gifs/:gifId': {
      $get:
        | {
            input: { param: { gifId: number } }
            output: { data?: Gif | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { gifId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { gifId: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { gifId: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { gifId: number } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/stickers/random': {
      $get:
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: { data?: Gif | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { tag?: string | undefined; rating?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/stickers/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {
              data?: Gif[] | undefined
              meta?: Meta | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
                lang?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/stickers/translate': {
      $get:
        | {
            input: { query: { s: string } }
            output: { data?: Gif | undefined; meta?: Meta | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { s: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/stickers/trending': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {
              data?: Gif[] | undefined
              meta?: Meta | undefined
              pagination?: Pagination | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                rating?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
