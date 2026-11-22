type MarkType = { [x: string]: unknown }
type BulkResponse = {
  code?: number | undefined
  errors?: { [x: string]: unknown } | undefined
  input?: { [x: string]: unknown } | undefined
  message?: string | undefined
  result?: { [x: string]: unknown } | undefined
}[]
type Episode = { [x: string]: unknown }
type MarkedEpisode = {
  _embedded?: { episode?: Episode | undefined } | undefined
  episode_id?: number | undefined
  marked_at?: number | undefined
  type?: MarkType | undefined
}
type Network = { [x: string]: unknown }
type NetworkFollow = {
  _embedded?: { network?: Network | undefined } | undefined
  network_id?: number | undefined
}
type Person = { [x: string]: unknown }
type PersonFollow = {
  _embedded?: { person?: Person | undefined } | undefined
  person_id?: number | undefined
}
type Show = { [x: string]: unknown }
type ShowFollow = {
  _embedded?: { show?: Show | undefined } | undefined
  show_id?: number | undefined
}
type Webchannel = { [x: string]: unknown }
type WebchannelFollow = {
  _embedded?: { webchannel?: Webchannel | undefined } | undefined
  webchannel_id?: number | undefined
}
type Tag = { id?: number | undefined; name?: string | undefined }
type TagInstance = {
  _embedded?: { show?: Show | undefined } | undefined
  show_id?: number | undefined
}
type EpisodeVote = {
  episode_id?: number | undefined
  vote?: number | undefined
  voted_at?: number | undefined
}
type ShowVote = {
  show_id?: number | undefined
  vote?: number | undefined
  voted_at?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth/poll': {
      $post:
        | {
            input: { json: { token?: string | undefined } }
            output: { apikey?: string | undefined; username?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: { token?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: { token?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/auth/start': {
      $post:
        | {
            input: {
              json: { email?: string | undefined; email_confirmation?: boolean | undefined }
            }
            output: { confirm_url?: string | undefined; token?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { email?: string | undefined; email_confirmation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              json: { email?: string | undefined; email_confirmation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json: { email?: string | undefined; email_confirmation?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/auth/validate': {
      $get:
        | { input: {}; output: { premium?: number | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/scrobble/episodes': {
      $post:
        | {
            input: {
              json: {
                episode_id?: number | undefined
                marked_at?: number | undefined
                type?: MarkType | undefined
              }[]
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                episode_id?: number | undefined
                marked_at?: number | undefined
                type?: MarkType | undefined
              }[]
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              json: {
                episode_id?: number | undefined
                marked_at?: number | undefined
                type?: MarkType | undefined
              }[]
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/scrobble/episodes/:episode_id': {
      $put:
        | {
            input: { param: { episode_id: number } } & { json: MarkedEpisode }
            output: MarkedEpisode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { episode_id: number } } & { json: MarkedEpisode }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { episode_id: number } } & { json: MarkedEpisode }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/scrobble/shows': {
      $post:
        | {
            input: {
              query: {
                tvmaze_id?: number | undefined
                thetvdb_id?: number | undefined
                imdb_id?: number | undefined
              }
            } & {
              json: {
                airdate?: string | undefined
                episode?: number | undefined
                marked_at?: number | undefined
                season?: number | undefined
                type?: MarkType | undefined
              }[]
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                tvmaze_id?: number | undefined
                thetvdb_id?: number | undefined
                imdb_id?: number | undefined
              }
            } & {
              json: {
                airdate?: string | undefined
                episode?: number | undefined
                marked_at?: number | undefined
                season?: number | undefined
                type?: MarkType | undefined
              }[]
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: {
              query: {
                tvmaze_id?: number | undefined
                thetvdb_id?: number | undefined
                imdb_id?: number | undefined
              }
            } & {
              json: {
                airdate?: string | undefined
                episode?: number | undefined
                marked_at?: number | undefined
                season?: number | undefined
                type?: MarkType | undefined
              }[]
            }
            output: BulkResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/scrobble/shows/:show_id': {
      $get: {
        input: { param: { show_id: number } } & { query: { embed?: 'episode' | undefined } }
        output: MarkedEpisode[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/episodes': {
      $get: {
        input: { query: { show_id?: number | undefined } }
        output: MarkedEpisode[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/episodes/:episode_id': {
      $delete:
        | {
            input: { param: { episode_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { episode_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { episode_id: number } }
            output: MarkedEpisode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { episode_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { episode_id: number } } & { json: MarkedEpisode }
            output: MarkedEpisode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { episode_id: number } } & { json: MarkedEpisode }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { episode_id: number } } & { json: MarkedEpisode }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/user/follows/networks': {
      $get: {
        input: { query: { embed?: 'network' | undefined } }
        output: NetworkFollow[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/follows/networks/:network_id': {
      $delete:
        | {
            input: { param: { network_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { network_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { network_id: number } }
            output: NetworkFollow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { network_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { network_id: number } }
            output: NetworkFollow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { network_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/follows/people': {
      $get: {
        input: { query: { embed?: 'person' | undefined } }
        output: PersonFollow[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/follows/people/:person_id': {
      $delete:
        | { input: { param: { person_id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { person_id: number } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { person_id: number } }
            output: PersonFollow
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { person_id: number } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { person_id: number } }
            output: PersonFollow
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { person_id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/follows/shows': {
      $get: {
        input: { query: { embed?: 'show' | undefined } }
        output: ShowFollow[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/follows/shows/:show_id': {
      $delete:
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { show_id: number } }
            output: ShowFollow
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { show_id: number } }
            output: ShowFollow
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/user/follows/webchannels': {
      $get: {
        input: { query: { embed?: 'webchannel' | undefined } }
        output: WebchannelFollow[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/follows/webchannels/:webchannel_id': {
      $delete:
        | {
            input: { param: { webchannel_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { webchannel_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { webchannel_id: number } }
            output: WebchannelFollow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webchannel_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { webchannel_id: number } }
            output: WebchannelFollow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webchannel_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/tags': {
      $get: { input: {}; output: Tag[]; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: Tag }; output: Tag; outputFormat: 'json'; status: 200 }
        | { input: { json: Tag }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/user/tags/:tag_id': {
      $delete:
        | { input: { param: { tag_id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { tag_id: number } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { tag_id: number } } & { json: Tag }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_id: number } } & { json: Tag }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tag_id: number } } & { json: Tag }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/user/tags/:tag_id/shows': {
      $get:
        | {
            input: { param: { tag_id: number } } & { query: { embed?: 'show' | undefined } }
            output: TagInstance[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_id: number } } & { query: { embed?: 'show' | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/tags/:tag_id/shows/:show_id': {
      $delete:
        | {
            input: { param: { tag_id: number; show_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tag_id: number; show_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { tag_id: number; show_id: number } }
            output: TagInstance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tag_id: number; show_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/user/votes/episodes': {
      $get: { input: {}; output: EpisodeVote[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/user/votes/episodes/:episode_id': {
      $delete:
        | {
            input: { param: { episode_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { episode_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { episode_id: number } }
            output: EpisodeVote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { episode_id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { episode_id: number } } & { json: EpisodeVote }
            output: EpisodeVote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { episode_id: number } } & { json: EpisodeVote }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { episode_id: number } } & { json: EpisodeVote }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/user/votes/shows': {
      $get: {
        input: { query: { embed?: 'show' | undefined } }
        output: ShowVote[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/votes/shows/:show_id': {
      $delete:
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { show_id: number } }
            output: ShowVote
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { show_id: number } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { show_id: number } } & { json: ShowVote }
            output: ShowVote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { show_id: number } } & { json: ShowVote }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { show_id: number } } & { json: ShowVote }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  },
  '/'
>
export default routes
