type Link = { href?: string | undefined }
type Pagination = {
  currentPage?: number | undefined
  pageCount?: number | undefined
  perPage?: number | undefined
  totalCount?: number | undefined
}
type Persona = {
  _links?: { self?: Link | undefined; shows?: Link[] | undefined } | undefined
  bio?: string | undefined
  email?: string | undefined
  id?: number | undefined
  image?: string | undefined
  name?: string | undefined
  since?: number | undefined
  website?: string | undefined
}
type Error = {
  code?: number | undefined
  message?: string | undefined
  name?: string | undefined
  status?: number | undefined
  type?: string | undefined
}
type Playlist = {
  _links?:
    | {
        persona?: Link | undefined
        self?: Link | undefined
        show?: Link | undefined
        spins?: Link | undefined
      }
    | undefined
  automation?: boolean | undefined
  category?: string | undefined
  description?: string | undefined
  duration?: number | undefined
  end?: string | undefined
  episode_description?: string | undefined
  episode_name?: string | undefined
  hide_dj?: boolean | undefined
  id?: number | undefined
  image?: string | undefined
  persona_id?: number | undefined
  show_id?: number | undefined
  since?: number | undefined
  start?: string | undefined
  timezone?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type Show = {
  _links?:
    | { personas?: Link[] | undefined; playlists?: Link | undefined; self?: Link | undefined }
    | undefined
  category?: string | undefined
  description?: string | undefined
  duration?: number | undefined
  end?: string | undefined
  hide_dj?: boolean | undefined
  id?: number | undefined
  image?: string | undefined
  one_off?: boolean | undefined
  since?: number | undefined
  start?: string | undefined
  timezone?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type Spin = {
  _links?: { playlist?: Link | undefined; self?: Link | undefined } | undefined
  artist?: string | undefined
  'artist-custom'?: string | undefined
  'catalog-number'?: string | undefined
  classical?: boolean | undefined
  composer?: string | undefined
  conductor?: string | undefined
  duration?: number | undefined
  end?: string | undefined
  ensemble?: string | undefined
  genre?: string | undefined
  id?: number | undefined
  image?: string | undefined
  isrc?: string | undefined
  iswc?: string | undefined
  label?: string | undefined
  'label-custom'?: string | undefined
  local?: boolean | undefined
  medium?: string | undefined
  new?: boolean | undefined
  note?: string | undefined
  performers?: string | undefined
  playlist_id?: number | undefined
  release?: string | undefined
  'release-custom'?: string | undefined
  released?: number | undefined
  request?: boolean | undefined
  song?: string | undefined
  start?: string | undefined
  timezone?: string | undefined
  upc?: string | undefined
  va?: boolean | undefined
  work?: string | undefined
}
type ValidationError = { field?: string | undefined; message?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/personas': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Persona[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Persona[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/personas/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Persona
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Persona
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/playlists': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                show_id?: number | undefined
                persona_id?: number | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Playlist[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                show_id?: number | undefined
                persona_id?: number | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Playlist[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/playlists/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Playlist
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Playlist
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/shows': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Show[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Show[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
    }
  } & {
    '/shows/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Show
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Show
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  } & {
    '/spins': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                playlist_id?: number | undefined
                show_id?: number | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Spin[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                playlist_id?: number | undefined
                show_id?: number | undefined
                count?: number | undefined
                page?: number | undefined
                fields?: string[] | undefined
                expand?: string[] | undefined
              }
            }
            output: {
              _links?: { self?: Link | undefined } | undefined
              _meta?: Pagination | undefined
              items?: Spin[] | undefined
            }
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            } & {
              form: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            }
            output: Spin
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            } & {
              form: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            }
            output: Spin
            outputFormat: 'text'
            status: 201
          }
        | {
            input: {
              json: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            } & {
              form: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            }
            output: ValidationError[]
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            } & {
              form: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            }
            output: ValidationError[]
            outputFormat: 'text'
            status: 422
          }
        | {
            input: {
              json: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            } & {
              form: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            } & {
              form: {
                artist: string
                composer?: string | undefined
                duration?: number | undefined
                genre?: string | undefined
                isrc?: string | undefined
                label?: string | undefined
                live?: boolean | undefined
                release?: string | undefined
                song: string
                start?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/spins/:id': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Spin
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Spin
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { fields?: string[] | undefined; expand?: string[] | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
