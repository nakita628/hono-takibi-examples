type Account = {
  environment?: string | undefined
  features?: string[] | undefined
  quota?:
    | {
        quotaRemaining?: number | undefined
        quotaTotal?: number | undefined
        quotaUsed?: number | undefined
      }
    | undefined
}
type NotFound = {
  name?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type LiveStreamSessionClient = {
  name?: string | undefined
  type?: string | undefined
  version?: string | undefined
}
type LiveStreamSessionDevice = {
  model?: string | undefined
  type?: string | undefined
  vendor?: string | undefined
}
type LiveStreamSessionLocation = { city?: string | undefined; country?: string | undefined }
type VideoSessionOs = {
  name?: string | undefined
  shortname?: string | undefined
  version?: string | undefined
}
type LiveStreamSessionReferrer = {
  medium?: string | undefined
  searchTerm?: string | undefined
  source?: string | undefined
  url?: string | undefined
}
type LiveStreamSessionSession = {
  endedAt?: string | undefined
  loadedAt?: string | undefined
  sessionId?: string | undefined
}
type LiveStreamSession = {
  client?: LiveStreamSessionClient | undefined
  device?: LiveStreamSessionDevice | undefined
  location?: LiveStreamSessionLocation | undefined
  os?: VideoSessionOs | undefined
  referrer?: LiveStreamSessionReferrer | undefined
  session?: LiveStreamSessionSession | undefined
}
type PaginationLink = { rel?: string | undefined; uri?: string | undefined }
type Pagination = {
  currentPage?: number | undefined
  currentPageItems?: number | undefined
  itemsTotal?: number | undefined
  links: PaginationLink[]
  pageSize?: number | undefined
  pagesTotal?: number | undefined
}
type RawStatisticsListLiveStreamAnalyticsResponse = {
  data?: LiveStreamSession[] | undefined
  pagination?: Pagination | undefined
}
type PlayerSessionEvent = {
  at?: number | undefined
  emittedAt?: string | undefined
  from?: number | undefined
  to?: number | undefined
  type?: string | undefined
}
type RawStatisticsListPlayerSessionEventsResponse = {
  data?: PlayerSessionEvent[] | undefined
  pagination?: Pagination | undefined
}
type VideoSessionClient = {
  name?: string | undefined
  type?: string | undefined
  version?: string | undefined
}
type VideoSessionDevice = {
  model?: string | undefined
  type?: string | undefined
  vendor?: string | undefined
}
type VideoSessionLocation = { city?: string | undefined; country?: string | undefined }
type VideoSessionReferrer = {
  medium?: string | undefined
  searchTerm?: string | undefined
  source?: string | undefined
  url?: string | undefined
}
type VideoSessionSession = {
  endedAt?: string | undefined
  loadedAt?: string | undefined
  sessionId?: string | undefined
}
type VideoSession = {
  client?: VideoSessionClient | undefined
  device?: VideoSessionDevice | undefined
  location?: VideoSessionLocation | undefined
  os?: VideoSessionOs | undefined
  referrer?: VideoSessionReferrer | undefined
  session?: VideoSessionSession | undefined
}
type RawStatisticsListSessionsResponse = {
  data?: VideoSession[] | undefined
  pagination?: Pagination | undefined
}
type AuthenticatePayload = { apiKey: string }
type AccessToken = {
  access_token?: string | undefined
  expires_in?: number | undefined
  refresh_token?: string | undefined
  token_type?: string | undefined
}
type BadRequest = {
  name?: string | undefined
  problems?: BadRequest[] | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
type RefreshTokenPayload = { refreshToken: string }
type LiveStreamAssets = {
  hls?: string | undefined
  iframe?: string | undefined
  player?: string | undefined
  thumbnail?: string | undefined
}
type LiveStream = {
  assets?: LiveStreamAssets | undefined
  broadcasting?: boolean | undefined
  liveStreamId?: string | undefined
  name?: string | undefined
  playerId?: string | undefined
  public?: boolean | undefined
  record?: boolean | undefined
  streamKey?: string | undefined
}
type LiveStreamListResponse = { data: LiveStream[]; pagination: Pagination }
type LiveStreamCreatePayload = {
  name: string
  playerId?: string | undefined
  public?: boolean | undefined
  record?: boolean | undefined
}
type LiveStreamUpdatePayload = {
  name?: string | undefined
  playerId?: string | undefined
  public?: boolean | undefined
  record?: boolean | undefined
}
type LiveStreamThumbnailUploadPayload = { file: File }
type Player = {
  backgroundBottom?: string | undefined
  backgroundText?: string | undefined
  backgroundTop?: string | undefined
  enableApi?: boolean | undefined
  enableControls?: boolean | undefined
  forceAutoplay?: boolean | undefined
  forceLoop?: boolean | undefined
  hideTitle?: boolean | undefined
  link?: string | undefined
  linkHover?: string | undefined
  text?: string | undefined
  trackBackground?: string | undefined
  trackPlayed?: string | undefined
  trackUnplayed?: string | undefined
  assets?: { link?: string | undefined; logo?: string | undefined } | undefined
  createdAt?: string | undefined
  linkActive?: string | undefined
  playerId?: string | undefined
  shapeAspect?: string | undefined
  shapeBackgroundBottom?: string | undefined
  shapeBackgroundTop?: string | undefined
  shapeMargin?: number | undefined
  shapeRadius?: number | undefined
  updatedAt?: string | undefined
}
type PlayersListResponse = { data?: Player[] | undefined; pagination?: Pagination | undefined }
type PlayerCreationPayload = {
  backgroundBottom?: string | undefined
  backgroundText?: string | undefined
  backgroundTop?: string | undefined
  enableApi?: boolean | undefined
  enableControls?: boolean | undefined
  forceAutoplay?: boolean | undefined
  forceLoop?: boolean | undefined
  hideTitle?: boolean | undefined
  link?: string | undefined
  linkHover?: string | undefined
  text?: string | undefined
  trackBackground?: string | undefined
  trackPlayed?: string | undefined
  trackUnplayed?: string | undefined
}
type PlayerUpdatePayload = {
  backgroundBottom?: string | undefined
  backgroundText?: string | undefined
  backgroundTop?: string | undefined
  enableApi?: boolean | undefined
  enableControls?: boolean | undefined
  forceAutoplay?: boolean | undefined
  forceLoop?: boolean | undefined
  hideTitle?: boolean | undefined
  link?: string | undefined
  linkHover?: string | undefined
  text?: string | undefined
  trackBackground?: string | undefined
  trackPlayed?: string | undefined
  trackUnplayed?: string | undefined
}
type PlayersUploadLogoPayload = { file: File; link: string }
type TokenUploadPayload = { file: File; videoId?: string | undefined }
type VideoAssets = {
  hls?: string | undefined
  iframe?: string | undefined
  mp4?: string | undefined
  player?: string | undefined
  thumbnail?: string | undefined
}
type Metadata = { key?: string | undefined; value?: string | undefined }
type VideoSourceLiveStreamLink = { rel?: string | undefined; uri?: string | undefined }
type VideoSourceLiveStream = {
  links?: VideoSourceLiveStreamLink[] | undefined
  liveStreamId?: string | undefined
}
type VideoSource = {
  liveStream?: VideoSourceLiveStream | undefined
  type?: string | undefined
  uri?: string | undefined
}
type Video = {
  assets?: VideoAssets | undefined
  description?: string | undefined
  metadata?: Metadata[] | undefined
  mp4Support?: boolean | undefined
  panoramic?: boolean | undefined
  playerId?: string | undefined
  public?: boolean | undefined
  publishedAt?: string | undefined
  source?: VideoSource | undefined
  tags?: { [x: string]: unknown }[] | undefined
  title?: string | undefined
  updatedAt?: string | undefined
  videoId?: string | undefined
}
type UploadToken = {
  createdAt?: string | undefined
  expiresAt?: string | undefined
  token?: string | undefined
  ttl?: number | undefined
}
type TokenListResponse = { data: UploadToken[]; pagination: Pagination }
type TokenCreatePayload = { ttl?: number | undefined }
type VideosListResponse = { data: Video[]; pagination: Pagination }
type VideoCreatePayload = {
  description?: string | undefined
  metadata?: Metadata[] | undefined
  mp4Support?: boolean | undefined
  panoramic?: boolean | undefined
  playerId?: string | undefined
  public?: boolean | undefined
  publishedAt?: string | undefined
  source?: string | undefined
  tags?: string[] | undefined
  title: string
}
type VideoUpdatePayload = {
  description?: string | undefined
  metadata?: Metadata[] | undefined
  mp4Support?: boolean | undefined
  panoramic?: boolean | undefined
  playerId?: string | undefined
  public?: boolean | undefined
  tags?: string[] | undefined
  title?: string | undefined
}
type Subtitle = {
  default?: boolean | undefined
  src?: string | undefined
  srclang?: string | undefined
  uri?: string | undefined
}
type CaptionsListResponse = { data?: Subtitle[] | undefined; pagination?: Pagination | undefined }
type CaptionsUpdatePayload = { default?: boolean | undefined }
type CaptionsUploadPayload = { file: File }
type Chapter = { language?: string | undefined; src?: string | undefined; uri?: string | undefined }
type ChaptersListResponse = { data?: Chapter[] | undefined; pagination?: Pagination | undefined }
type ChaptersUpdatePayload = { file: File }
type VideoUploadPayload = { file: File }
type VideostatusEncodingMetadata = {
  aspectRatio?: string | undefined
  audioCodec?: string | undefined
  bitrate?: number | undefined
  duration?: number | undefined
  framerate?: number | undefined
  height?: number | undefined
  samplerate?: number | undefined
  videoCodec?: string | undefined
  width?: number | undefined
}
type Quality = {
  quality?: '240p' | '360p' | '480p' | '720p' | '1080p' | '2160p' | undefined
  status?: 'waiting' | 'encoding' | 'encoded' | 'failed' | undefined
}
type VideostatusEncoding = {
  metadata?: VideostatusEncodingMetadata | undefined
  playable?: boolean | undefined
  qualities?: Quality[] | undefined
}
type BytesRange = { from?: number | undefined; to?: number | undefined; total?: number | undefined }
type VideostatusIngest = {
  filesize?: number | undefined
  receivedBytes?: BytesRange[] | undefined
  status?: 'missing' | 'uploading' | 'uploaded' | undefined
}
type Videostatus = {
  encoding?: VideostatusEncoding | undefined
  ingest?: VideostatusIngest | undefined
}
type VideoThumbnailPickPayload = { timecode: string }
type VideoThumbnailUploadPayload = { file: File }
type Webhook = {
  createdAt?: string | undefined
  events?: string[] | undefined
  url?: string | undefined
  webhookId?: string | undefined
}
type WebhooksListResponse = { data?: Webhook[] | undefined; pagination?: Pagination | undefined }
type WebhooksCreatePayload = { events: string[]; url: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/analytics/live-streams/:liveStreamId': {
      $get:
        | {
            input: { param: { liveStreamId: string } } & {
              query: {
                period?: string | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RawStatisticsListLiveStreamAnalyticsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { liveStreamId: string } } & {
              query: {
                period?: string | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/analytics/sessions/:sessionId/events': {
      $get:
        | {
            input: { param: { sessionId: string } } & {
              query: { currentPage?: number | undefined; pageSize?: number | undefined }
            }
            output: RawStatisticsListPlayerSessionEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: string } } & {
              query: { currentPage?: number | undefined; pageSize?: number | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/analytics/videos/:videoId': {
      $get:
        | {
            input: { param: { videoId: string } } & {
              query: {
                period?: string | undefined
                metadata?: string[] | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: RawStatisticsListSessionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } } & {
              query: {
                period?: string | undefined
                metadata?: string[] | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/auth/api-key': {
      $post:
        | {
            input: { json: AuthenticatePayload }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthenticatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/auth/refresh': {
      $post:
        | {
            input: { json: RefreshTokenPayload }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RefreshTokenPayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/live-streams': {
      $get: {
        input: {
          query: {
            streamKey?: string | undefined
            name?: string | undefined
            sortBy?: string | undefined
            sortOrder?: 'asc' | 'desc' | undefined
            currentPage?: number | undefined
            pageSize?: number | undefined
          }
        }
        output: LiveStreamListResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: LiveStreamCreatePayload }
            output: LiveStream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LiveStreamCreatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/live-streams/:liveStreamId': {
      $delete: {
        input: { param: { liveStreamId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { liveStreamId: string } }
        output: LiveStream
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { liveStreamId: string } } & { json: LiveStreamUpdatePayload }
            output: LiveStream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { liveStreamId: string } } & { json: LiveStreamUpdatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/live-streams/:liveStreamId/thumbnail': {
      $delete:
        | {
            input: { param: { liveStreamId: string } }
            output: LiveStream
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { liveStreamId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { liveStreamId: string } } & { form: LiveStreamThumbnailUploadPayload }
            output: LiveStream
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { liveStreamId: string } } & { form: LiveStreamThumbnailUploadPayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { liveStreamId: string } } & { form: LiveStreamThumbnailUploadPayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/players': {
      $get:
        | {
            input: {
              query: {
                sortBy?: 'createdAt' | 'updatedAt' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: PlayersListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sortBy?: 'createdAt' | 'updatedAt' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
      $post: {
        input: { json: PlayerCreationPayload }
        output: Player
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/players/:playerId': {
      $delete:
        | { input: { param: { playerId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { playerId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { playerId: string } }
            output: Player
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playerId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { playerId: string } } & { json: PlayerUpdatePayload }
            output: Player
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playerId: string } } & { json: PlayerUpdatePayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/players/:playerId/logo': {
      $delete:
        | {
            input: { param: { playerId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { playerId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { playerId: string } } & { form: PlayersUploadLogoPayload }
            output: Player
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { playerId: string } } & { form: PlayersUploadLogoPayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { playerId: string } } & { form: PlayersUploadLogoPayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/upload': {
      $post:
        | {
            input: { query: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: TokenUploadPayload }
            output: Video
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { token: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: TokenUploadPayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/upload-tokens': {
      $get: {
        input: {
          query: {
            sortBy?: 'createdAt' | 'ttl' | undefined
            sortOrder?: 'asc' | 'desc' | undefined
            currentPage?: number | undefined
            pageSize?: number | undefined
          }
        }
        output: TokenListResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: TokenCreatePayload }
            output: UploadToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenCreatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/upload-tokens/:uploadToken': {
      $delete:
        | {
            input: { param: { uploadToken: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { uploadToken: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { uploadToken: string } }
            output: UploadToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uploadToken: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos': {
      $get:
        | {
            input: {
              query: {
                title?: string | undefined
                tags?: string[] | undefined
                metadata?: string[] | undefined
                description?: string | undefined
                liveStreamId?: string | undefined
                sortBy?: string | undefined
                sortOrder?: string | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: VideosListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                title?: string | undefined
                tags?: string[] | undefined
                metadata?: string[] | undefined
                description?: string | undefined
                liveStreamId?: string | undefined
                sortBy?: string | undefined
                sortOrder?: string | undefined
                currentPage?: number | undefined
                pageSize?: number | undefined
              }
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
      $post:
        | { input: { json: VideoCreatePayload }; output: Video; outputFormat: 'json'; status: 201 }
        | { input: { json: VideoCreatePayload }; output: Video; outputFormat: 'json'; status: 202 }
        | {
            input: { json: VideoCreatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/videos/:videoId': {
      $delete:
        | { input: { param: { videoId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { videoId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { videoId: string } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { videoId: string } } & { json: VideoUpdatePayload }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } } & { json: VideoUpdatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videoId: string } } & { json: VideoUpdatePayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/captions': {
      $get:
        | {
            input: { param: { videoId: string } } & {
              query: { currentPage?: number | undefined; pageSize?: number | undefined }
            }
            output: CaptionsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } } & {
              query: { currentPage?: number | undefined; pageSize?: number | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/captions/:language': {
      $delete:
        | {
            input: { param: { videoId: string; language: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { videoId: string; language: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { videoId: string; language: string } }
            output: Subtitle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string; language: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { videoId: string; language: string } } & {
              json: CaptionsUpdatePayload
            }
            output: Subtitle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string; language: string } } & {
              json: CaptionsUpdatePayload
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videoId: string; language: string } } & {
              json: CaptionsUpdatePayload
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { videoId: string; language: string } } & {
              form: CaptionsUploadPayload
            }
            output: Subtitle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string; language: string } } & {
              form: CaptionsUploadPayload
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videoId: string; language: string } } & {
              form: CaptionsUploadPayload
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/chapters': {
      $get:
        | {
            input: { param: { videoId: string } } & {
              query: { currentPage?: number | undefined; pageSize?: number | undefined }
            }
            output: ChaptersListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } } & {
              query: { currentPage?: number | undefined; pageSize?: number | undefined }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/chapters/:language': {
      $delete:
        | {
            input: { param: { videoId: string; language: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { videoId: string; language: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { videoId: string; language: string } }
            output: Chapter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string; language: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { videoId: string; language: string } } & {
              form: ChaptersUpdatePayload
            }
            output: Chapter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string; language: string } } & {
              form: ChaptersUpdatePayload
            }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videoId: string; language: string } } & {
              form: ChaptersUpdatePayload
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/source': {
      $post:
        | {
            input: { param: { videoId: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: VideoUploadPayload }
            output: Video
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { videoId: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: VideoUploadPayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videoId: string } } & {
              header: { 'Content-Range'?: string | undefined }
            } & { form: VideoUploadPayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/status': {
      $get:
        | {
            input: { param: { videoId: string } }
            output: Videostatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:videoId/thumbnail': {
      $patch:
        | {
            input: { param: { videoId: string } } & { json: VideoThumbnailPickPayload }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } } & { json: VideoThumbnailPickPayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { videoId: string } } & { form: VideoThumbnailUploadPayload }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoId: string } } & { form: VideoThumbnailUploadPayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { videoId: string } } & { form: VideoThumbnailUploadPayload }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhooks': {
      $get: {
        input: {
          query: {
            events?: string | undefined
            currentPage?: number | undefined
            pageSize?: number | undefined
          }
        }
        output: WebhooksListResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: WebhooksCreatePayload }
            output: Webhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: WebhooksCreatePayload }
            output: BadRequest
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/webhooks/:webhookId': {
      $delete:
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { webhookId: string } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { webhookId: string } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
