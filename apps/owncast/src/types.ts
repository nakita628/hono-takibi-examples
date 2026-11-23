type Status = {
  serverTime?: string | undefined
  lastConnectTime?: (string | null) | undefined
  lastDisconnectTime?: (string | null) | undefined
  versionNumber?: string | undefined
  viewerCount?: number | undefined
  online?: boolean | undefined
  streamTitle?: string | undefined
}
type Emoji = { name?: string | undefined; url?: string | undefined }
type Emojis = Emoji[]
type Error = { error?: string | undefined }
type User = {
  createdAt?: string | undefined
  disabledAt?: string | undefined
  nameChangedAt?: string | undefined
  id?: string | undefined
  displayName?: string | undefined
  previousNames?: string[] | undefined
  scopes?: string[] | undefined
  authProviders?: string[] | undefined
  displayColor?: number | undefined
  isBot?: boolean | undefined
  authenticated?: boolean | undefined
}
type UserMessage = {
  timestamp?: string | undefined
  type?: string | undefined
  id?: string | undefined
  user?: User | undefined
  hiddenAt?: string | undefined
  clientId?: number | undefined
  body?: string | undefined
}
type SystemMessage = {
  timestamp?: string | undefined
  type?: string | undefined
  id?: string | undefined
  body?: string | undefined
}
type ActionMessage = {
  timestamp?: string | undefined
  type?: string | undefined
  id?: string | undefined
  body?: string | undefined
}
type FederatedAction = {
  timestamp?: string | undefined
  type?: string | undefined
  id?: string | undefined
  body?: string | undefined
  image?: string | undefined
  link?: string | undefined
  title?: string | undefined
}
type ChatMessages = (UserMessage | SystemMessage | ActionMessage | FederatedAction)[]
type AnonymousUser = {
  id?: string | undefined
  accessToken?: string | undefined
  displayName?: string | undefined
}
type BaseAPIResponse = { message?: string | undefined; success?: boolean | undefined }
type MessageVisibilityUpdate = { idArray?: string[] | undefined; visible?: boolean | undefined }
type SocialHandle = {
  platform?: string | undefined
  url?: string | undefined
  icon?: string | undefined
}
type ExternalAction = {
  url?: string | undefined
  html?: string | undefined
  title?: string | undefined
  description?: string | undefined
  icon?: string | undefined
  color?: string | undefined
  openExternally?: boolean | undefined
}
type BrowserConfig = { publicKey?: string | undefined; enabled?: boolean | undefined }
type NotificationConfig = { browser?: BrowserConfig | undefined }
type FederationConfig = {
  account?: string | undefined
  followerCount?: number | undefined
  enabled?: boolean | undefined
  hideFollowersTab?: boolean | undefined
}
type AutoplayMode = 'off' | 'always' | 'sound-only'
type AuthenticationConfig = { indieAuthEnabled?: boolean | undefined }
type WebConfig = {
  appearanceVariables?: { [x: string]: string } | undefined
  name?: string | undefined
  customStyles?: string | undefined
  streamTitle?: string | undefined
  offlineMessage?: string | undefined
  logo?: string | undefined
  version?: string | undefined
  socketHostOverride?: string | undefined
  extraPageContent?: string | undefined
  summary?: string | undefined
  tags?: string[] | undefined
  socialHandles?: SocialHandle[] | undefined
  externalActions?: ExternalAction[] | undefined
  notifications?: NotificationConfig | undefined
  federation?: FederationConfig | undefined
  maxSocketPayloadSize?: number | undefined
  hideViewerCount?: boolean | undefined
  chatDisabled?: boolean | undefined
  chatRequireAuthentication?: boolean | undefined
  nsfw?: boolean | undefined
  autoplay?: AutoplayMode | undefined
  authentication?: AuthenticationConfig | undefined
}
type YPDetails = {
  lastConnectTime?: string | undefined
  name?: string | undefined
  description?: string | undefined
  streamTitle?: string | undefined
  logo?: string | undefined
  tags?: string[] | undefined
  social?: SocialHandle[] | undefined
  viewerCount?: number | undefined
  overallMaxViewerCount?: number | undefined
  sessionMaxViewerCount?: number | undefined
  nsfw?: boolean | undefined
  online?: boolean | undefined
}
type VideoVariant = { index?: number | undefined; name?: string | undefined }
type Follower = {
  link?: string | undefined
  name?: string | undefined
  username?: string | undefined
  image?: string | undefined
  timestamp?: string | undefined
  disabledAt?: string | undefined
}
type Followers = Follower[]
type PaginatedFollowers = { total?: number | undefined; results?: Followers | undefined }
type CmcdReport = {
  v?: number | undefined
  sid?: string | undefined
  e?: string | undefined
  ts?: number | undefined
  sta?: string | undefined
  mtp?: number | undefined
  ltc?: number | undefined
  bs?: boolean | undefined
  ec?: string | undefined
  ttlb?: number | undefined
  sn?: number | undefined
}
type CmcdReportBody = CmcdReport | CmcdReport[]
type PlaybackMetrics = {
  bandwidth?: number | undefined
  latency?: number | undefined
  errors: number
  downloadDuration?: number | undefined
  qualityVariantChanges: number
}
type InboundStreamDetails = {
  videoCodec?: string | undefined
  audioCodec?: string | undefined
  encoder?: string | undefined
  width?: number | undefined
  height?: number | undefined
  videoBitrate?: number | undefined
  audioBitrate?: number | undefined
  framerate?: number | undefined
}
type Broadcaster = {
  time?: string | undefined
  remoteAddr?: string | undefined
  streamDetails?: InboundStreamDetails | undefined
}
type StreamOutputVariant = {
  name?: string | undefined
  videoPassthrough?: boolean | undefined
  audioPassthrough?: boolean | undefined
  videoBitrate?: number | undefined
  audioBitrate?: number | undefined
  scaledWidth?: number | undefined
  scaledHeight?: number | undefined
  framerate?: number | undefined
  cpuUsageLevel?: number | undefined
}
type LatencyLevel = { level?: number | undefined }
type CurrentBroadcast = {
  outputSettings?: StreamOutputVariant[] | undefined
  latencyLevel?: LatencyLevel | undefined
}
type StreamHealthOverview = {
  message?: string | undefined
  healthPercentage?: number | undefined
  representation?: number | undefined
  healthy?: boolean | undefined
}
type AdminStatus = {
  broadcaster?: Broadcaster | undefined
  currentBroadcast?: CurrentBroadcast | undefined
  health?: StreamHealthOverview | ({ [x: string]: unknown } | null) | undefined
  streamTitle?: string | undefined
  versionNumber?: string | undefined
  viewerCount?: number | undefined
  overallPeakViewerCount?: number | undefined
  sessionPeakViewerCount?: number | undefined
  online?: boolean | undefined
}
type AdminWebConfig = {
  appearanceVariables?: { [x: string]: string } | undefined
  version?: string | undefined
  welcomeMessage?: string | undefined
  offlineMessage?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  extraPageContent?: string | undefined
  streamTitle?: string | undefined
  customStyles?: string | undefined
  customJavascript?: string | undefined
  summary?: string | undefined
  tags?: string[] | undefined
  socialHandles?: SocialHandle[] | undefined
  nsfw?: boolean | undefined
  autoplay?: AutoplayMode | undefined
}
type BrowserNotificationConfiguration = {
  goLiveMessage?: string | undefined
  enabled?: boolean | undefined
}
type DiscordNotificationConfiguration = {
  webhook?: string | undefined
  goLiveMessage?: string | undefined
  enabled?: boolean | undefined
}
type AdminNotificationsConfig = {
  browser?: BrowserNotificationConfiguration | undefined
  discord?: DiscordNotificationConfiguration | undefined
}
type AdminYPInfo = { instanceUrl?: string | undefined; enabled?: boolean | undefined }
type S3Info = {
  endpoint?: string | undefined
  accessKey?: string | undefined
  secret?: string | undefined
  bucket?: string | undefined
  region?: string | undefined
  acl?: string | undefined
  pathPrefix?: string | undefined
  enabled?: boolean | undefined
  forcePathStyle?: boolean | undefined
}
type AdminFederationConfig = {
  username?: string | undefined
  goLiveMessage?: string | undefined
  blockedDomains?: string[] | undefined
  enabled?: boolean | undefined
  isPrivate?: boolean | undefined
  showEngagement?: boolean | undefined
  enableQuotes?: boolean | undefined
  hideFollowersTab?: boolean | undefined
}
type StreamKey = { key?: string | undefined; comment?: string | undefined }
type AdminVideoSettings = {
  videoQualityVariants?: StreamOutputVariant[] | undefined
  latencyLevel?: number | undefined
}
type AdminServerConfig = {
  instanceDetails?: AdminWebConfig | undefined
  notifications?: AdminNotificationsConfig | undefined
  yp?: AdminYPInfo | undefined
  ffmpegPath?: string | undefined
  adminPassword?: string | undefined
  socketHostOverride?: string | undefined
  webServerIP?: string | undefined
  videoCodec?: string | undefined
  videoServingEndpoint?: string | undefined
  s3?: S3Info | undefined
  federation?: AdminFederationConfig | undefined
  supportedCodecs?: string[] | undefined
  externalActions?: ExternalAction[] | undefined
  forbiddenUsernames?: string[] | undefined
  suggestedUsernames?: string[] | undefined
  streamKeys?: StreamKey[] | undefined
  videoSettings?: AdminVideoSettings | undefined
  rtmpServerPort?: number | undefined
  rtmpServerAddress?: string | undefined
  webServerPort?: number | undefined
  chatDisabled?: boolean | undefined
  chatJoinMessagesEnabled?: boolean | undefined
  chatEstablishedUserMode?: boolean | undefined
  disableSearchIndexing?: boolean | undefined
  streamKeyOverridden?: boolean | undefined
  hideViewerCount?: boolean | undefined
}
type TimestampedValue = { time?: string | undefined; value?: number | undefined }
type GeoDetails = {
  countryCode?: string | undefined
  regionName?: string | undefined
  timeZone?: string | undefined
}
type Viewer = {
  firstSeen?: string | undefined
  geo?: GeoDetails | ({ [x: string]: unknown } | null) | undefined
  userAgent?: string | undefined
  ipAddress?: string | undefined
  clientID?: string | undefined
}
type PlaybackClientHealth = {
  source: 'client' | 'server'
  lastUpdate: string
  playerState?: 'p' | 'a' | 'w' | 'k' | 'e' | undefined
  measurementStatus?: 'unmeasurable' | undefined
  bandwidthKbps?: (number | null) | undefined
  latencySeconds?: (number | null) | undefined
  downloadSeconds?: (number | null) | undefined
  bitrateKbps?: (number | null) | undefined
  errorCount?: (number | null) | undefined
  qualityVariantChanges?: (number | null) | undefined
}
type PlaybackClient = {
  clientID: string
  viewerID: string
  firstSeen?: string | undefined
  geo?: GeoDetails | ({ [x: string]: unknown } | null) | undefined
  userAgent?: string | undefined
  ipAddress?: string | undefined
  playback?: PlaybackClientHealth | ({ [x: string]: unknown } | null) | undefined
}
type ChatClient = {
  connectedAt?: string | undefined
  user?: User | undefined
  geo?: GeoDetails | ({ [x: string]: unknown } | null) | undefined
  userAgent?: string | undefined
  messageCount?: number | undefined
}
type ChatClients = ChatClient[]
type UserWithDisabledReason = {
  createdAt?: string | undefined
  disabledAt?: string | undefined
  nameChangedAt?: string | undefined
  id?: string | undefined
  displayName?: string | undefined
  previousNames?: string[] | undefined
  scopes?: string[] | undefined
  authProviders?: string[] | undefined
  displayColor?: number | undefined
  isBot?: boolean | undefined
  authenticated?: boolean | undefined
  disabledReason?: string | undefined
}
type Users = UserWithDisabledReason[]
type AdminConfigValue = { value?: string | boolean | string[] | number | undefined }
type IPAddress = {
  createdAt?: string | undefined
  ipAddress?: string | undefined
  notes?: string | undefined
}
type PaginatedUsers = { total?: number | undefined; results?: Users | undefined }
type AdminLog = {
  time?: string | undefined
  message?: string | undefined
  level?: string | undefined
}
type PublicFederatedServer = {
  id?: number | undefined
  iri?: string | undefined
  name?: string | undefined
  displayName?: string | undefined
  summary?: string | undefined
  logoUrl?: string | undefined
  isOnline?: boolean | undefined
  streamTitle?: string | undefined
  streamDescription?: string | undefined
  tags?: string[] | undefined
  thumbnailUrl?: string | undefined
}
type FederatedServer = {
  id?: number | undefined
  iri?: string | undefined
  name?: string | undefined
  logoUrl?: string | undefined
  isOnline?: boolean | undefined
  streamTitle?: string | undefined
  streamDescription?: string | undefined
  tags?: string[] | undefined
  thumbnailUrl?: string | undefined
  displayName?: string | undefined
  summary?: string | undefined
  lastSeenOnline?: string | undefined
  lastStatusUpdate?: string | undefined
  addedAt?: string | undefined
  followedAt?: string | undefined
  username?: string | undefined
  acceptedAt?: string | undefined
  rejectedAt?: string | undefined
  pending?: boolean | undefined
  followStatus?: string | undefined
  priority?: number | undefined
}
type WebhookEventType =
  | 'CHAT'
  | 'USER_JOINED'
  | 'USER_PARTED'
  | 'NAME_CHANGE'
  | 'FEDIVERSE_ENGAGEMENT_FOLLOW'
  | 'VISIBILITY-UPDATE'
  | 'PING'
  | 'PONG'
  | 'STREAM_STARTED'
  | 'STREAM_STOPPED'
  | 'STREAM_TITLE_UPDATED'
  | 'SYSTEM'
  | 'CHAT_ACTION'
type Webhook = {
  timestamp?: string | undefined
  lastUsed?: (string | null) | undefined
  url?: string | undefined
  events?: WebhookEventType[] | undefined
  id?: number | undefined
}
type ExternalAPIUser = {
  createdAt?: string | undefined
  lastUsedAt?: string | undefined
  id?: string | undefined
  accessToken?: string | undefined
  displayName?: string | undefined
  type?: string | undefined
  scopes?: string[] | undefined
  displayColor?: number | undefined
  isBot?: boolean | undefined
}
type FederatedActivity = {
  timestamp?: string | undefined
  iri?: string | undefined
  actorIRI?: string | undefined
  type?: string | undefined
}
type PaginatedFederatedActivity = {
  total?: number | undefined
  results?: FederatedActivity | undefined
}
type MessageEvent = { body?: string | undefined }
type ModerationConnectedClient = {
  connectedAt?: string | undefined
  userAgent?: string | undefined
  geo?: string | undefined
  id?: bigint | undefined
  messageCount?: number | undefined
}
type ModerationUserDetails = {
  user?: UserWithDisabledReason | undefined
  connectedClients?: ModerationConnectedClient[] | undefined
  messages?: UserMessage[] | undefined
}
type IndieAuthProfile = {
  name?: string | undefined
  url?: string | undefined
  photo?: string | undefined
}
type IndieAuthResponse = {
  me?: string | undefined
  profile?: IndieAuthProfile | undefined
  error?: string | undefined
  errorDescription?: string | undefined
}
type IndieAuthServerProfile = {
  name?: string | undefined
  url?: string | undefined
  photo?: string | undefined
}
type IndieAuthServerProfileResponse = {
  me?: string | undefined
  profile?: IndieAuthServerProfile | undefined
  error?: string | undefined
  errorDescription?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/status': { $get: { input: {}; output: Status; outputFormat: 'json'; status: 200 } } } & {
    '/emoji': {
      $get:
        | { input: {}; output: Emojis; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/chat': {
      $get:
        | {
            input: { query: { accessToken: string } }
            output: ChatMessages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accessToken: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { accessToken: string } }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/chat/register': {
      $post:
        | {
            input: { header: { 'X-Forwarded-User'?: string | undefined } } & {
              json: { displayName?: string | undefined }
            }
            output: AnonymousUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Forwarded-User'?: string | undefined } } & {
              json: { displayName?: string | undefined }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'X-Forwarded-User'?: string | undefined } } & {
              json: { displayName?: string | undefined }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 403
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/chat/messagevisibility': {
      $post:
        | {
            input: { query: { accessToken: string } } & { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accessToken: string } } & { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accessToken: string } } & { json: MessageVisibilityUpdate }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { accessToken: string } } & { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/chat/users/setenabled': {
      $post:
        | {
            input: { query: { accessToken: string } } & {
              json: { userId?: string | undefined; enabled?: boolean | undefined }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accessToken: string } } & {
              json: { userId?: string | undefined; enabled?: boolean | undefined }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accessToken: string } } & {
              json: { userId?: string | undefined; enabled?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { accessToken: string } } & {
              json: { userId?: string | undefined; enabled?: boolean | undefined }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/config': {
      $get:
        | { input: {}; output: WebConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/yp': {
      $get:
        | { input: {}; output: YPDetails; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/socialplatforms': {
      $get:
        | { input: {}; output: { [x: string]: SocialHandle }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/video/variants': {
      $get: { input: {}; output: VideoVariant[]; outputFormat: 'json'; status: 200 }
    }
  } & { '/ping': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/remotefollow': {
      $post:
        | {
            input: { json: { account?: string | undefined } }
            output: { redirectUrl?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { account?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/followers': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: PaginatedFollowers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/metrics/cmcd': {
      $post:
        | { input: { json: CmcdReportBody }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: CmcdReportBody }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { query: { CMCD?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { CMCD?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/metrics/playback': {
      $post:
        | { input: { json: PlaybackMetrics }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: PlaybackMetrics }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/notifications/register': {
      $post:
        | {
            input: { query: { accessToken: string } } & {
              json: { channel?: string | undefined; destination?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { accessToken: string } } & {
              json: { channel?: string | undefined; destination?: string | undefined }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accessToken: string } } & {
              json: { channel?: string | undefined; destination?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/admin/status': {
      $get:
        | { input: {}; output: AdminStatus; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/disconnect': {
      $post:
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/serverconfig': {
      $get:
        | { input: {}; output: AdminServerConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/viewersOverTime': {
      $get:
        | {
            input: { query: { windowStart?: string | undefined } }
            output: TimestampedValue[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { windowStart?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { windowStart?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { windowStart?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/viewers': {
      $get:
        | { input: {}; output: Viewer[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/viewers/playback': {
      $get:
        | { input: {}; output: PlaybackClient[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/hardwarestats': {
      $get:
        | {
            input: {}
            output: {
              message?: string | undefined
              healthPercentage?: number | undefined
              representation?: number | undefined
              healthy?: boolean | undefined
              disk?: TimestampedValue[] | undefined
              memory?: TimestampedValue[] | undefined
              cpu?: TimestampedValue[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/clients': {
      $get:
        | { input: {}; output: ChatClients; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/messages': {
      $get:
        | { input: {}; output: ChatMessages; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/messagevisibility': {
      $post:
        | {
            input: { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MessageVisibilityUpdate }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/setenabled': {
      $post:
        | {
            input: { json: { userId?: string | undefined; enabled?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { userId?: string | undefined; enabled?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { userId?: string | undefined; enabled?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { userId?: string | undefined; enabled?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/disabled': {
      $get:
        | { input: {}; output: Users; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/ipbans/create': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/ipbans/remove': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/ipbans': {
      $get:
        | { input: {}; output: IPAddress[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/setmoderator': {
      $post:
        | {
            input: { json: { userId?: string | undefined; isModerator?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { userId?: string | undefined; isModerator?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { userId?: string | undefined; isModerator?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { userId?: string | undefined; isModerator?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/chat/users/moderators': {
      $get:
        | { input: {}; output: Users; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/users': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                status?: 'all' | 'active' | 'bots' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: PaginatedUsers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                status?: 'all' | 'active' | 'bots' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                status?: 'all' | 'active' | 'bots' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                search?: string | undefined
                status?: 'all' | 'active' | 'bots' | undefined
                sort?: 'asc' | 'desc' | undefined
              }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/users/delete': {
      $post:
        | {
            input: { json: { userId?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { userId?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { userId?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { userId?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/logs': {
      $get:
        | { input: {}; output: AdminLog[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/logs/warnings': {
      $get:
        | { input: {}; output: AdminLog[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/followers': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: PaginatedFollowers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/followers/pending': {
      $get:
        | { input: {}; output: Followers; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/followers/blocked': {
      $get:
        | { input: {}; output: Followers; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/followers/directory': {
      $get:
        | { input: {}; output: Followers; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/followers/approve': {
      $post:
        | {
            input: { json: { actorIRI?: string | undefined; approved?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { actorIRI?: string | undefined; approved?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { actorIRI?: string | undefined; approved?: boolean | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { actorIRI?: string | undefined; approved?: boolean | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/followers/remove': {
      $post:
        | {
            input: { json: { actorIRI: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { actorIRI: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { actorIRI: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { actorIRI: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/emoji/upload': {
      $post:
        | {
            input: { json: { name?: string | undefined; data?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined; data?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name?: string | undefined; data?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { name?: string | undefined; data?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/emoji/delete': {
      $post:
        | {
            input: { json: { name?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { name?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/adminpass': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/streamkeys': {
      $post:
        | {
            input: { json: { value?: StreamKey[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: StreamKey[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: StreamKey[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: StreamKey[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/pagecontent': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/streamtitle': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/name': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/serversummary': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/offlinemessage': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/welcomemessage': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/disable': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/joinmessagesenabled': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/establishedusermode': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/forbiddenusernames': {
      $post:
        | {
            input: { json: { value?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: string[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/suggestedusernames': {
      $post:
        | {
            input: { json: { value?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: string[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/spamprotectionenabled': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/slurfilterenabled': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/chat/requireauthentication': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/video/codec': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/video/streamlatencylevel': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/video/streamoutputvariants': {
      $post:
        | {
            input: { json: { value?: StreamOutputVariant[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: StreamOutputVariant[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: StreamOutputVariant[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: StreamOutputVariant[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/appearance': {
      $post:
        | {
            input: { json: { value?: { [x: string]: string } | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: { [x: string]: string } | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: { [x: string]: string } | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: { [x: string]: string } | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/logo': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/favicon': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/tags': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/ffmpegpath': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/webserverport': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/webserverip': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/rtmpserverport': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/rtmpserverbindaddress': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/sockethostoverride': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/videoservingendpoint': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/nsfw': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/autoplay': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/directoryenabled': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/socialhandles': {
      $post:
        | {
            input: { json: { value?: SocialHandle[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: SocialHandle[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: SocialHandle[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: SocialHandle[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/s3': {
      $post:
        | {
            input: { json: { value?: S3Info | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: S3Info | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: S3Info | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: S3Info | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/serverurl': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/externalactions': {
      $post:
        | {
            input: { json: { value?: ExternalAction[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: ExternalAction[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: ExternalAction[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: ExternalAction[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/customstyles': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/customjavascript': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/hideviewercount': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/disablesearchindexing': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/enable': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/private': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/showengagement': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/enablequotes': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/hidefollowers': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/username': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/livemessage': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/federation/blockdomains': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/federation/servers': {
      $get:
        | {
            input: {}
            output: { servers?: PublicFederatedServer[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/federation/servers': {
      $get:
        | {
            input: {}
            output: { servers?: FederatedServer[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: { url: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { url: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: { url: string } }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: { url: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/federation/servers/:id': {
      $delete:
        | {
            input: { param: { id: number } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { id: number } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { id: number } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/federation/servers/:id/reorder': {
      $put:
        | {
            input: { param: { id: number } } & { json: { direction: 'up' | 'down' } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: { direction: 'up' | 'down' } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: { direction: 'up' | 'down' } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: { direction: 'up' | 'down' } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/federation/feature-requests': {
      $get:
        | {
            input: {}
            output: { requests?: Follower[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/config/notifications/discord': {
      $post:
        | {
            input: { json: { value?: DiscordNotificationConfiguration | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: DiscordNotificationConfiguration | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: DiscordNotificationConfiguration | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: DiscordNotificationConfiguration | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config/notifications/browser': {
      $post:
        | {
            input: { json: { value?: BrowserNotificationConfiguration | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { value?: BrowserNotificationConfiguration | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { value?: BrowserNotificationConfiguration | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { value?: BrowserNotificationConfiguration | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/webhooks': {
      $get:
        | { input: {}; output: Webhook[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/webhooks/delete': {
      $post:
        | {
            input: { json: { id?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { id?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { id?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { id?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/webhooks/create': {
      $post:
        | {
            input: {
              json: {
                url?: string | undefined
                events?: WebhookEventType[] | undefined
                secret?: string | undefined
              }
            }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                url?: string | undefined
                events?: WebhookEventType[] | undefined
                secret?: string | undefined
              }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                url?: string | undefined
                events?: WebhookEventType[] | undefined
                secret?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                url?: string | undefined
                events?: WebhookEventType[] | undefined
                secret?: string | undefined
              }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/accesstokens': {
      $get:
        | { input: {}; output: ExternalAPIUser[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/accesstokens/delete': {
      $post:
        | {
            input: { json: { token?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { token?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { token?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { token?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/accesstokens/create': {
      $post:
        | {
            input: { json: { name?: string | undefined; scopes?: string[] | undefined } }
            output: ExternalAPIUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined; scopes?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name?: string | undefined; scopes?: string[] | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { name?: string | undefined; scopes?: string[] | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/yp/reset': {
      $post:
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/metrics/video': {
      $get:
        | {
            input: {}
            output: {
              errors?: TimestampedValue[] | undefined
              qualityVariantChanges?: TimestampedValue[] | undefined
              highestLatency?: TimestampedValue[] | undefined
              medianLatency?: TimestampedValue[] | undefined
              lowestLatency?: TimestampedValue[] | undefined
              medianSegmentDownloadDuration?: TimestampedValue[] | undefined
              maximumSegmentDownloadDuration?: TimestampedValue[] | undefined
              minimumSegmentDownloadDuration?: TimestampedValue[] | undefined
              minPlayerBitrate?: TimestampedValue[] | undefined
              medianPlayerBitrate?: TimestampedValue[] | undefined
              maxPlayerBitrate?: TimestampedValue[] | undefined
              availableBitrates?: number[] | undefined
              segmentLength?: number | undefined
              representation?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/federation/send': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/federation/actions': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: PaginatedFederatedActivity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/chat/system': {
      $post:
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: MessageEvent }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { json: MessageEvent }; output: Error; outputFormat: 'json'; status: 500 }
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/chat/system/client/:clientId': {
      $post:
        | {
            input: { param: { clientId: number } } & { json: SystemMessage }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clientId: number } } & { json: SystemMessage }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { clientId: number } } & { json: SystemMessage }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clientId: number } } & { json: SystemMessage }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: {
        input: { param: { clientId: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/integrations/chat/user': {
      $post: { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/chat/send': {
      $post:
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: MessageEvent }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { json: MessageEvent }; output: Error; outputFormat: 'json'; status: 500 }
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/chat/action': {
      $post:
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: MessageEvent }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { json: MessageEvent }; output: Error; outputFormat: 'json'; status: 500 }
        | {
            input: { json: MessageEvent }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/chat/messagevisibility': {
      $post:
        | {
            input: { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MessageVisibilityUpdate }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: MessageVisibilityUpdate }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/status': {
      $get:
        | { input: {}; output: Status; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/integrations/streamtitle': {
      $post:
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: AdminConfigValue }; output: string; outputFormat: 'text'; status: 401 }
        | {
            input: { json: AdminConfigValue }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/chat': {
      $get:
        | { input: {}; output: ChatMessages; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 501 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/clients': {
      $get:
        | { input: {}; output: ChatClients; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
        | { input: {}; output: BaseAPIResponse; outputFormat: 'json'; status: 200 }
      $options: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/integrations/moderation/chat/user/:userId': {
      $get:
        | {
            input: { param: { userId: string } }
            output: ModerationUserDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { userId: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { userId: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/moderation/chat/user/:userId': {
      $get:
        | {
            input: { param: { userId: string } } & { query: { accessToken: string } }
            output: ModerationUserDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & { query: { accessToken: string } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { userId: string } } & { query: { accessToken: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { userId: string } } & { query: { accessToken: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/indieauth': {
      $post:
        | {
            input: { query: { accessToken: string } } & { json: { authHost?: string | undefined } }
            output: { redirect?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accessToken: string } } & { json: { authHost?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accessToken: string } } & { json: { authHost?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { accessToken: string } } & { json: { authHost?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/auth/indieauth/callback': {
      $get:
        | { input: { query: { state: string } }; output: {}; outputFormat: string; status: 307 }
        | {
            input: { query: { state: string } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/auth/provider/indieauth': {
      $get:
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                code_challenge: string
                state: string
              }
            }
            output: IndieAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                code_challenge: string
                state: string
              }
            }
            output: {}
            outputFormat: string
            status: 307
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                code_challenge: string
                state: string
              }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                client_id: string
                redirect_uri: string
                code_challenge: string
                state: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                codeVerifier?: string | undefined
              }
            } & {
              form: {
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                codeVerifier?: string | undefined
              }
            }
            output: IndieAuthResponse | IndieAuthServerProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                codeVerifier?: string | undefined
              }
            } & {
              form: {
                code?: string | undefined
                redirect_uri?: string | undefined
                client_id?: string | undefined
                codeVerifier?: string | undefined
              }
            }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/auth/fediverse': {
      $post:
        | {
            input: { query: { accessToken: string } } & { json: { account?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { accessToken: string } } & { json: { account?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { accessToken: string } } & { json: { account?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/auth/fediverse/verify': {
      $post:
        | {
            input: { json: { code?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { code?: string | undefined } }
            output: BaseAPIResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
