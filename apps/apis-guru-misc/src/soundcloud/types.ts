type Error = {
  code?: number | undefined
  error?: (string | null) | undefined
  errors?: { [x: string]: unknown }[] | undefined
  link?: string | undefined
  message?: string | undefined
  status?: string | undefined
}
type TooManyRequests = {
  code?: number | undefined
  error?: (string | null) | undefined
  errors?: { [x: string]: unknown }[] | undefined
  link?: string | undefined
  message?: string | undefined
  status?: string | undefined
  spam_warning_urn?: string | undefined
}
type CompleteUser = {
  avatar_url?: string | undefined
  city?: string | undefined
  country?: string | undefined
  description?: string | undefined
  discogs_name?: string | undefined
  first_name?: string | undefined
  followers_count?: number | undefined
  followings_count?: number | undefined
  full_name?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  last_modified?: string | undefined
  last_name?: string | undefined
  locale?: string | undefined
  myspace_name?: string | undefined
  permalink?: string | undefined
  permalink_url?: string | undefined
  plan?: string | undefined
  playlist_count?: number | undefined
  primary_email_confirmed?: boolean | undefined
  private_playlists_count?: number | undefined
  private_tracks_count?: number | undefined
  public_favorites_count?: number | undefined
  quota?:
    | { unlimited_upload_quota?: boolean | undefined; upload_seconds_used?: number | undefined }
    | undefined
  reposts_count?: number | undefined
  subscriptions?: { [x: string]: unknown } | undefined
  track_count?: number | undefined
  uri?: string | undefined
  username?: string | undefined
  website?: string | undefined
  website_title?: string | undefined
}
type MetaUser = {
  avatar_url?: string | undefined
  created_at?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  last_modified?: string | undefined
  permalink?: string | undefined
  permalink_url?: string | undefined
  uri?: string | undefined
  username?: string | undefined
} | null
type Track = {
  access?: 'playable' | 'preview' | 'blocked' | null | undefined
  artwork_url?: string | undefined
  available_country_codes?: string | undefined
  bpm?: number | undefined
  comment_count?: number | undefined
  commentable?: boolean | undefined
  created_at?: string | undefined
  description?: string | undefined
  download_count?: number | undefined
  download_url?: string | undefined
  downloadable?: string | undefined
  duration?: number | undefined
  embeddable_by?: string | undefined
  favoritings_count?: number | undefined
  genre?: string | undefined
  id?: number | undefined
  isrc?: string | undefined
  key_signature?: string | undefined
  kind?: string | undefined
  label_name?: string | undefined
  license?: string | undefined
  permalink_url?: string | undefined
  playback_count?: number | undefined
  purchase_title?: string | undefined
  purchase_url?: string | undefined
  release?: string | undefined
  release_day?: number | undefined
  release_month?: number | undefined
  release_year?: number | undefined
  reposts_count?: number | undefined
  secret_uri?: string | undefined
  sharing?: string | undefined
  stream_url?: string | undefined
  streamable?: boolean | undefined
  tag_list?: string | undefined
  title?: string | undefined
  uri?: string | undefined
  user?: MetaUser | undefined
  user_favorite?: boolean | undefined
  user_playback_count?: number | undefined
  waveform_url?: string | undefined
}
type Playlist = {
  artwork_url?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  downloadable?: boolean | undefined
  duration?: number | undefined
  ean?: string | undefined
  embeddable_by?: string | undefined
  genre?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  label?: MetaUser | undefined
  label_id?: number | undefined
  label_name?: string | undefined
  last_modified?: string | undefined
  license?: string | undefined
  likes_count?: number | undefined
  permalink?: string | undefined
  permalink_url?: string | undefined
  playlist_type?: string | undefined
  purchase_title?: string | undefined
  purchase_url?: string | undefined
  release?: string | undefined
  release_day?: number | undefined
  release_month?: number | undefined
  release_year?: number | undefined
  sharing?: string | undefined
  streamable?: boolean | undefined
  tag_list?: string | undefined
  tags?: (string | null) | undefined
  title?: string | undefined
  track_count?: number | undefined
  tracks?: Track[] | undefined
  tracks_uri?: (string | null) | undefined
  type?: string | undefined
  uri?: string | undefined
  user?: MetaUser | undefined
  user_id?: number | undefined
}
type Activities = {
  collection?:
    | {
        created_at?: string | undefined
        origin?: Track | Playlist | undefined
        type?: string | undefined
      }[]
    | undefined
  future_href?: string | undefined
  next_href?: string | undefined
}
type Connection = {
  created_at?: string | undefined
  display_name?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  post_favorite?: boolean | undefined
  post_publish?: boolean | undefined
  service?: string | undefined
  type?: string | undefined
  uri?: string | undefined
}
type Connections = Connection[]
type User = {
  avatar_url?: string | undefined
  city?: string | undefined
  country?: string | undefined
  created_at?: string | undefined
  description?: string | undefined
  discogs_name?: string | undefined
  first_name?: string | undefined
  followers_count?: number | undefined
  followings_count?: number | undefined
  full_name?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  last_modified?: string | undefined
  last_name?: string | undefined
  myspace_name?: string | undefined
  permalink?: string | undefined
  permalink_url?: string | undefined
  plan?: string | undefined
  playlist_count?: number | undefined
  public_favorites_count?: number | undefined
  reposts_count?: number | undefined
  subscriptions?: { [x: string]: unknown } | undefined
  track_count?: number | undefined
  uri?: string | undefined
  username?: string | undefined
  website?: string | undefined
  website_title?: string | undefined
}
type Users = { collection?: User[] | undefined; next_href?: string | undefined }
type UsersList = {
  avatar_url?: string | undefined
  city?: string | undefined
  country?: string | undefined
  description?: string | undefined
  discogs_name?: string | undefined
  first_name?: string | undefined
  followers_count?: number | undefined
  followings_count?: number | undefined
  full_name?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  last_modified?: string | undefined
  last_name?: string | undefined
  myspace_name?: string | undefined
  permalink?: string | undefined
  permalink_url?: string | undefined
  plan?: string | undefined
  playlist_count?: number | undefined
  public_favorites_count?: number | undefined
  reposts_count?: number | undefined
  subscriptions?: { [x: string]: unknown } | undefined
  track_count?: number | undefined
  uri?: string | undefined
  username?: string | undefined
  website?: string | undefined
  website_title?: string | undefined
}[]
type TracksList = Track[]
type Tracks = { collection?: Track[] | undefined; next_href?: string | undefined }
type PlaylistsArray = Playlist[]
type AuthorizationCode = {
  authorization_code?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'authorization_code' | 'client_credentials' | undefined
  redirect_uri?: string | undefined
}
type RefreshToken = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'refresh_token' | undefined
  redirect_uri?: string | undefined
  refresh_token?: string | undefined
}
type Password = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'password' | undefined
  password?: string | undefined
  redirect_uri?: string | undefined
  user_name?: string | undefined
}
type Playlists = { collection?: Playlist[] | undefined; next_href?: string | undefined }
type CreateUpdatePlaylistRequest = {
  playlist?:
    | {
        description?: string | undefined
        sharing?: 'public' | 'private' | undefined
        title?: string | undefined
        tracks?: { id: string }[] | undefined
      }
    | undefined
}
type MetaUsers = { collection?: MetaUser[] | undefined; next_href?: string | undefined }
type Found = { location?: string | undefined; status?: string | undefined }
type TrackDataRequest = {
  'track[artwork_data]'?: File | undefined
  'track[asset_data]'?: File | undefined
  'track[commentable]'?: boolean | undefined
  'track[description]'?: string | undefined
  'track[downloadable]'?: boolean | undefined
  'track[embeddable_by]'?: 'all' | 'me' | 'none' | undefined
  'track[genre]'?: string | undefined
  'track[isrc]'?: string | undefined
  'track[label_name]'?: string | undefined
  'track[license]'?:
    | 'no-rights-reserved'
    | 'all-rights-reserved'
    | 'cc-by'
    | 'cc-by-nc'
    | 'cc-by-nd'
    | 'cc-by-sa'
    | 'cc-by-nc-nd'
    | 'cc-by-nc-sa'
    | undefined
  'track[permalink]'?: string | undefined
  'track[purchase_url]'?: string | undefined
  'track[release]'?: string | undefined
  'track[release_date]'?: string | undefined
  'track[sharing]'?: 'public' | 'private' | undefined
  'track[streamable]'?: boolean | undefined
  'track[tag_list]'?: string | undefined
  'track[title]'?: string | undefined
}
type TrackMetadataRequest = {
  track?:
    | {
        commentable?: boolean | undefined
        description?: string | undefined
        downloadable?: boolean | undefined
        embeddable_by?: 'all' | 'me' | 'none' | undefined
        genre?: string | undefined
        isrc?: string | undefined
        label_name?: string | undefined
        license?:
          | 'no-rights-reserved'
          | 'all-rights-reserved'
          | 'cc-by'
          | 'cc-by-nc'
          | 'cc-by-nd'
          | 'cc-by-sa'
          | 'cc-by-nc-nd'
          | 'cc-by-nc-sa'
          | undefined
        permalink?: string | undefined
        purchase_url?: string | undefined
        release?: string | undefined
        release_date?: string | undefined
        sharing?: 'public' | 'private' | undefined
        streamable?: boolean | undefined
        tag_list?: string | undefined
        title?: string | undefined
      }
    | undefined
}
type Comment = {
  body?: string | undefined
  created_at?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  timestamp?: string | undefined
  track_id?: number | undefined
  uri?: string | undefined
  user?:
    | {
        avatar_url?: string | undefined
        followers_count?: number | undefined
        followings_count?: number | undefined
        id?: number | undefined
        kind?: string | undefined
        last_modified?: string | undefined
        permalink?: string | undefined
        permalink_url?: string | undefined
        reposts_count?: number | undefined
        uri?: string | undefined
        username?: string | undefined
      }
    | undefined
  user_id?: number | undefined
}
type Comments = { collection?: Comment[] | undefined; next_href?: (string | null) | undefined }
type CommentsList = Comment[]
type Streams = {
  hls_mp3_128_url?: string | undefined
  hls_opus_64_url?: string | undefined
  http_mp3_128_url?: string | undefined
  preview_mp3_128_url?: string | undefined
}
type WebProfiles = {
  created_at?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  service?: string | undefined
  title?: string | undefined
  url?: string | undefined
  username?: string | undefined
}[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/connect': {
      $get:
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                response_type: 'code' | 'token' | 'code_and_token'
                scope: string
                state?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 302
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                response_type: 'code' | 'token' | 'code_and_token'
                scope: string
                state?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/likes/playlists/:playlist_id': {
      $delete:
        | {
            input: { param: { playlist_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { playlist_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: number } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { playlist_id: number } }
            output: TooManyRequests
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/likes/tracks/:track_id': {
      $delete:
        | { input: { param: { track_id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | { input: { param: { track_id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { track_id: number } }
            output: TooManyRequests
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: CompleteUser; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/me/activities': {
      $get:
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
              }
            }
            output: Activities
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/activities/all/own': {
      $get:
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
              }
            }
            output: Activities
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/activities/tracks': {
      $get:
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
              }
            }
            output: Activities
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/connections': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Connections
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/connections/:connection_id': {
      $get:
        | {
            input: { param: { connection_id: number } }
            output: Connection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { connection_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { connection_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/favorites/ids': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/me/followers': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: Users | UsersList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/followers/:follower_id': {
      $get:
        | {
            input: { param: { follower_id: number } }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { follower_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/followings': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Users | UsersList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/followings/tracks': {
      $get:
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/followings/:user_id': {
      $delete:
        | { input: { param: { user_id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: { param: { user_id: number } }; output: User; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | { input: { param: { user_id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { user_id: number } }; output: User; outputFormat: 'text'; status: 201 }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/likes/tracks': {
      $get:
        | {
            input: {
              query: { limit?: number | undefined; linked_partitioning?: boolean | undefined }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; linked_partitioning?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/playlists': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: PlaylistsArray
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/playlists/:playlist_id': {
      $get: {
        input: { param: { playlist_id: number } }
        output: Playlist
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/me/tracks': {
      $get:
        | {
            input: {
              query: { limit?: number | undefined; linked_partitioning?: boolean | undefined }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { limit?: number | undefined; linked_partitioning?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/me/tracks/:track_id': {
      $get: {
        input: { param: { track_id: number } }
        output: Track
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/oauth2/token': {
      $post:
        | {
            input: { json: AuthorizationCode | RefreshToken | Password } & {
              form: AuthorizationCode | RefreshToken | Password
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: AuthorizationCode | RefreshToken | Password } & {
              form: AuthorizationCode | RefreshToken | Password
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuthorizationCode | RefreshToken | Password } & {
              form: AuthorizationCode | RefreshToken | Password
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/playlists': {
      $get:
        | {
            input: {
              query: {
                q: string
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Playlists | PlaylistsArray
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: { json: CreateUpdatePlaylistRequest }
            output: {
              artwork_url?: string | undefined
              created_at?: string | undefined
              description?: string | undefined
              downloadable?: boolean | undefined
              duration?: number | undefined
              ean?: string | undefined
              embeddable_by?: string | undefined
              genre?: string | undefined
              id?: number | undefined
              kind?: string | undefined
              label_id?: number | undefined
              label_name?: string | undefined
              last_modified?: string | undefined
              license?: string | undefined
              permalink?: string | undefined
              permalink_url?: string | undefined
              playlist_type?: string | undefined
              purchase_title?: string | undefined
              purchase_url?: string | undefined
              release?: string | undefined
              release_day?: number | undefined
              release_month?: number | undefined
              release_year?: number | undefined
              sharing?: string | undefined
              streamable?: boolean | undefined
              tag_list?: string | undefined
              title?: string | undefined
              track_count?: number | undefined
              tracks?:
                | {
                    artwork_url?: string | undefined
                    bpm?: number | undefined
                    comment_count?: number | undefined
                    commentable?: boolean | undefined
                    created_at?: string | undefined
                    description?: string | undefined
                    download_count?: number | undefined
                    downloadable?: string | undefined
                    duration?: number | undefined
                    embeddable_by?: string | undefined
                    favoritings_count?: number | undefined
                    genre?: string | undefined
                    id?: number | undefined
                    isrc?: string | undefined
                    key_signature?: string | undefined
                    kind?: string | undefined
                    label_name?: string | undefined
                    license?: string | undefined
                    permalink_url?: string | undefined
                    playback_count?: number | undefined
                    purchase_title?: string | undefined
                    purchase_url?: string | undefined
                    release?: string | undefined
                    release_day?: number | undefined
                    release_month?: number | undefined
                    release_year?: number | undefined
                    sharing?: string | undefined
                    stream_url?: string | undefined
                    streamable?: boolean | undefined
                    tag_list?: string | undefined
                    title?: string | undefined
                    uri?: string | undefined
                    user?: MetaUser | undefined
                    user_favorite?: boolean | undefined
                    user_playback_count?: number | undefined
                    waveform_url?: string | undefined
                  }[]
                | undefined
              type?: string | undefined
              uri?: string | undefined
              user?: MetaUser | undefined
              user_id?: number | undefined
            }
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { json: CreateUpdatePlaylistRequest }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: CreateUpdatePlaylistRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/playlists/:playlist_id': {
      $delete:
        | {
            input: { param: { playlist_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { playlist_id: number } } & {
              query: {
                secret_token?: string | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
              }
            }
            output: Playlist
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { playlist_id: number } } & {
              query: {
                secret_token?: string | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { playlist_id: number } } & {
              query: {
                secret_token?: string | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
      $put:
        | {
            input: { param: { playlist_id: number } } & { json: CreateUpdatePlaylistRequest }
            output: {
              artwork_url?: string | undefined
              created_at?: string | undefined
              description?: string | undefined
              downloadable?: boolean | undefined
              duration?: number | undefined
              ean?: string | undefined
              embeddable_by?: string | undefined
              genre?: string | undefined
              id?: number | undefined
              kind?: string | undefined
              label_id?: number | undefined
              label_name?: string | undefined
              last_modified?: string | undefined
              license?: string | undefined
              permalink?: string | undefined
              permalink_url?: string | undefined
              playlist_type?: string | undefined
              purchase_title?: string | undefined
              purchase_url?: string | undefined
              release?: string | undefined
              release_day?: number | undefined
              release_month?: number | undefined
              release_year?: number | undefined
              sharing?: string | undefined
              streamable?: boolean | undefined
              tag_list?: string | undefined
              title?: string | undefined
              track_count?: number | undefined
              tracks?:
                | {
                    artwork_url?: string | undefined
                    bpm?: number | undefined
                    comment_count?: number | undefined
                    commentable?: boolean | undefined
                    created_at?: string | undefined
                    description?: string | undefined
                    download_count?: number | undefined
                    downloadable?: string | undefined
                    duration?: number | undefined
                    embeddable_by?: string | undefined
                    favoritings_count?: number | undefined
                    genre?: string | undefined
                    id?: number | undefined
                    isrc?: string | undefined
                    key_signature?: string | undefined
                    kind?: string | undefined
                    label_name?: string | undefined
                    license?: string | undefined
                    permalink_url?: string | undefined
                    playback_count?: number | undefined
                    purchase_title?: string | undefined
                    purchase_url?: string | undefined
                    release?: string | undefined
                    release_day?: number | undefined
                    release_month?: number | undefined
                    release_year?: number | undefined
                    sharing?: string | undefined
                    stream_url?: string | undefined
                    streamable?: boolean | undefined
                    tag_list?: string | undefined
                    title?: string | undefined
                    uri?: string | undefined
                    user?: MetaUser | undefined
                    user_favorite?: boolean | undefined
                    user_playback_count?: number | undefined
                    waveform_url?: string | undefined
                  }[]
                | undefined
              type?: string | undefined
              uri?: string | undefined
              user?: MetaUser | undefined
              user_id?: number | undefined
            }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { playlist_id: number } } & { json: CreateUpdatePlaylistRequest }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { playlist_id: number } } & { json: CreateUpdatePlaylistRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/playlists/:playlist_id/reposters': {
      $get:
        | {
            input: { param: { playlist_id: number } } & { query: { limit?: number | undefined } }
            output: MetaUsers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { playlist_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { playlist_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/playlists/:playlist_id/tracks': {
      $get:
        | {
            input: { param: { playlist_id: number } } & {
              query: {
                secret_token?: string | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { playlist_id: number } } & {
              query: {
                secret_token?: string | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { playlist_id: number } } & {
              query: {
                secret_token?: string | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/reposts/playlists/:playlist_id': {
      $delete:
        | {
            input: { param: { playlist_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { playlist_id: number } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { playlist_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/reposts/tracks/:track_id': {
      $delete:
        | { input: { param: { track_id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | { input: { param: { track_id: number } }; output: {}; outputFormat: string; status: 201 }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/resolve': {
      $get: { input: { query: { url: string } }; output: Found; outputFormat: 'text'; status: 302 }
    }
  } & {
    '/tracks': {
      $get:
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                genres?: string | undefined
                tags?: string | undefined
                bpm?: { from?: number | undefined; to?: number | undefined } | undefined
                duration?: { from?: number | undefined; to?: number | undefined } | undefined
                created_at?: { from?: string | undefined; to?: string | undefined } | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                genres?: string | undefined
                tags?: string | undefined
                bpm?: { from?: number | undefined; to?: number | undefined } | undefined
                duration?: { from?: number | undefined; to?: number | undefined } | undefined
                created_at?: { from?: string | undefined; to?: string | undefined } | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                genres?: string | undefined
                tags?: string | undefined
                bpm?: { from?: number | undefined; to?: number | undefined } | undefined
                duration?: { from?: number | undefined; to?: number | undefined } | undefined
                created_at?: { from?: string | undefined; to?: string | undefined } | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                genres?: string | undefined
                tags?: string | undefined
                bpm?: { from?: number | undefined; to?: number | undefined } | undefined
                duration?: { from?: number | undefined; to?: number | undefined } | undefined
                created_at?: { from?: string | undefined; to?: string | undefined } | undefined
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | { input: { form: TrackDataRequest }; output: Track; outputFormat: 'text'; status: 201 }
        | { input: { form: TrackDataRequest }; output: Error; outputFormat: 'text'; status: 400 }
        | { input: { form: TrackDataRequest }; output: Error; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/tracks/:track_id': {
      $delete:
        | { input: { param: { track_id: number } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { track_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { track_id: number } } & {
              query: { secret_token?: string | undefined }
            }
            output: Track
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & {
              query: { secret_token?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } } & {
              query: { secret_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { track_id: number } } & { json: TrackMetadataRequest } & {
              form: TrackDataRequest
            }
            output: Track
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & { json: TrackMetadataRequest } & {
              form: TrackDataRequest
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { track_id: number } } & { json: TrackMetadataRequest } & {
              form: TrackDataRequest
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/tracks/:track_id/comments': {
      $get:
        | {
            input: { param: { track_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Comments | CommentsList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { track_id: number } } & {
              json: {
                comment?: { body: string; timestamp?: string | number | undefined } | undefined
              }
            }
            output: Comment
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { track_id: number } } & {
              json: {
                comment?: { body: string; timestamp?: string | number | undefined } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { track_id: number } } & {
              json: {
                comment?: { body: string; timestamp?: string | number | undefined } | undefined
              }
            }
            output: TooManyRequests
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/tracks/:track_id/favoriters': {
      $get:
        | {
            input: { param: { track_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: UsersList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tracks/:track_id/related': {
      $get:
        | {
            input: { param: { track_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tracks/:track_id/reposters': {
      $get:
        | {
            input: { param: { track_id: number } } & { query: { limit?: number | undefined } }
            output: MetaUsers
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tracks/:track_id/streams': {
      $get:
        | {
            input: { param: { track_id: number } } & {
              query: { secret_token?: string | undefined }
            }
            output: Streams
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { track_id: number } } & {
              query: { secret_token?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { track_id: number } } & {
              query: { secret_token?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Users | UsersList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                ids?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/users/:user_id': {
      $get:
        | {
            input: { param: { user_id: number } }
            output: CompleteUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/comments': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: CommentsList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/favorites': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: { limit?: number | undefined; linked_partitioning?: boolean | undefined }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: { limit?: number | undefined; linked_partitioning?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/users/:user_id/followers': {
      $get:
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: Users | UsersList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/users/:user_id/followings': {
      $get:
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: Users | UsersList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/users/:user_id/followings/:following_id': {
      $get:
        | {
            input: { param: { user_id: number; following_id: number } }
            output: CompleteUser
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number; following_id: number } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number; following_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/likes/tracks': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/playlists': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Playlists | PlaylistsArray
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/users/:user_id/tracks': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Tracks | TracksList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                access?: ('playable' | 'preview' | 'blocked')[] | undefined
                limit?: number | undefined
                linked_partitioning?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/users/:user_id/web-profiles': {
      $get:
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: WebProfiles
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { user_id: number } } & { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
