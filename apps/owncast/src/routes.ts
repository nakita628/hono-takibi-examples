import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ error: z.string().exactOptional() })
  .openapi({ description: 'Structure for an error response', required: [] })
  .openapi('Error')

const BaseAPIResponseSchema = z
  .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
  .openapi({ description: 'Simple API response', required: [] })
  .openapi('BaseAPIResponse')

const StatusSchema = z
  .object({
    serverTime: z.string().exactOptional(),
    lastConnectTime: z.string().nullable().exactOptional(),
    lastDisconnectTime: z.string().nullable().exactOptional(),
    versionNumber: z.string().exactOptional(),
    viewerCount: z.int().exactOptional(),
    online: z.boolean().exactOptional(),
    streamTitle: z.string().exactOptional(),
  })
  .openapi({ description: 'Response for status', required: [] })
  .openapi('Status')

const EmojiSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the emoji' }),
    url: z.string().exactOptional().openapi({ description: 'URL for the emoji image' }),
  })
  .openapi({ description: 'Name and url for an emoji', required: [] })
  .openapi('Emoji')

const EmojisSchema = z.array(EmojiSchema).openapi('Emojis')

const AnonymousUserSchema = z
  .object({
    id: z.string().exactOptional(),
    accessToken: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnonymousUser')

const UserSchema = z
  .object({
    createdAt: z.string().exactOptional(),
    disabledAt: z.string().exactOptional(),
    nameChangedAt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    previousNames: z.array(z.string()).exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    authProviders: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Friendly names of the external auth methods this user signed in with (e.g. IndieAuth, Fediverse, or a plugin slug). Absent for anonymous users.',
      }),
    displayColor: z.int().exactOptional(),
    isBot: z.boolean().exactOptional(),
    authenticated: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const UserWithDisabledReasonSchema = UserSchema.and(
  z
    .object({
      disabledReason: z
        .string()
        .exactOptional()
        .openapi({ description: 'Reason provided when the user was disabled.' }),
    })
    .openapi({ required: [] }),
).openapi('UserWithDisabledReason')

const UsersSchema = z.array(UserWithDisabledReasonSchema).openapi('Users')

const PaginatedUsersSchema = z
  .object({ total: z.int().exactOptional(), results: UsersSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PaginatedUsers')

const FollowerSchema = z
  .object({
    link: z.string().exactOptional().openapi({ description: 'The IRI of the remote actor.' }),
    name: z.string().exactOptional().openapi({ description: 'The display name of the follower.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account username of the remote actor.' }),
    image: z.string().exactOptional().openapi({ description: 'The avatar image of the follower.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'When this follow request was created.' }),
    disabledAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'When this follower was rejected or disabled.' }),
  })
  .openapi({ required: [] })
  .openapi('Follower')

const FollowersSchema = z.array(FollowerSchema).openapi('Followers')

const PaginatedFollowersSchema = z
  .object({ total: z.int().exactOptional(), results: FollowersSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PaginatedFollowers')

const FederatedServerSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the federated server' }),
    iri: z.url().exactOptional().openapi({ description: 'IRI/URL of the federated server' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the federated server' }),
    logoUrl: z.url().exactOptional().openapi({ description: "URL of the server's logo image" }),
    isOnline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the server is currently online/streaming' }),
    streamTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the current stream (when online)' }),
    streamDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the current stream (when online)' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags associated with the current stream' }),
    thumbnailUrl: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL of the current stream thumbnail' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-friendly display name of the federated server' }),
    summary: z.string().exactOptional(),
    lastSeenOnline: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last time the server was seen online' }),
    lastStatusUpdate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Last time we received a status update' }),
    addedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When we started tracking this server' }),
    followedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When we started following this server' }),
    username: z.string().exactOptional(),
    acceptedAt: z.iso.datetime({ offset: true }).exactOptional(),
    rejectedAt: z.iso.datetime({ offset: true }).exactOptional(),
    pending: z.boolean().exactOptional(),
    followStatus: z.string().exactOptional(),
    priority: z.int().exactOptional(),
  })
  .openapi({ description: 'A federated Owncast server that we follow', required: [] })
  .openapi('FederatedServer')

const PublicFederatedServerSchema = z
  .object({
    id: z.int().exactOptional(),
    iri: z.url().exactOptional(),
    name: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    logoUrl: z.url().exactOptional(),
    isOnline: z.boolean().exactOptional(),
    streamTitle: z.string().exactOptional(),
    streamDescription: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    thumbnailUrl: z.url().exactOptional(),
  })
  .openapi({
    description: 'A public featured Owncast server, ordered by canonical priority.',
    required: [],
  })
  .openapi('PublicFederatedServer')

const EventSchema = z
  .object({
    timestamp: z.string().exactOptional(),
    type: z.string().exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Event')

const UserEventSchema = z
  .object({
    user: UserSchema.exactOptional(),
    hiddenAt: z.string().exactOptional(),
    clientId: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserEvent')

const MessageEventSchema = z
  .object({ body: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MessageEvent')

const UserMessageSchema = EventSchema.and(UserEventSchema)
  .and(MessageEventSchema)
  .openapi('UserMessage')

const SystemMessageSchema = EventSchema.and(MessageEventSchema).openapi('SystemMessage')

const ActionMessageSchema = EventSchema.and(MessageEventSchema).openapi('ActionMessage')

const FederatedActionSchema = EventSchema.and(MessageEventSchema)
  .and(
    z
      .object({
        image: z.string().exactOptional(),
        link: z.string().exactOptional(),
        title: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('FederatedAction')

const ChatMessagesSchema = z
  .array(
    z.union([UserMessageSchema, SystemMessageSchema, ActionMessageSchema, FederatedActionSchema]),
  )
  .openapi('ChatMessages')

const SystemActionEventSchema = EventSchema.and(MessageEventSchema).openapi('SystemActionEvent')

const SocialHandleSchema = z
  .object({
    platform: z.string().exactOptional(),
    url: z.string().exactOptional(),
    icon: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SocialHandle')

const ExternalActionSchema = z
  .object({
    url: z.string().exactOptional(),
    html: z.string().exactOptional(),
    title: z.string().exactOptional(),
    description: z.string().exactOptional(),
    icon: z.string().exactOptional(),
    color: z.string().exactOptional(),
    openExternally: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalAction')

const BrowserConfigSchema = z
  .object({ publicKey: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('BrowserConfig')

const NotificationConfigSchema = z
  .object({ browser: BrowserConfigSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('NotificationConfig')

const FederationConfigSchema = z
  .object({
    account: z.string().exactOptional(),
    followerCount: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
    hideFollowersTab: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FederationConfig')

const AutoplayModeSchema = z
  .enum(['off', 'always', 'sound-only'])
  .openapi({ description: 'Viewer autoplay behavior.' })
  .openapi('AutoplayMode')

const AuthenticationConfigSchema = z
  .object({ indieAuthEnabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthenticationConfig')

const WebConfigSchema = z
  .object({
    appearanceVariables: z.record(z.string(), z.string()).exactOptional(),
    name: z.string().exactOptional(),
    customStyles: z.string().exactOptional(),
    streamTitle: z.string().exactOptional(),
    offlineMessage: z.string().exactOptional(),
    logo: z.string().exactOptional(),
    version: z.string().exactOptional(),
    socketHostOverride: z.string().exactOptional(),
    extraPageContent: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    socialHandles: z.array(SocialHandleSchema).exactOptional(),
    externalActions: z.array(ExternalActionSchema).exactOptional(),
    notifications: NotificationConfigSchema.exactOptional(),
    federation: FederationConfigSchema.exactOptional(),
    maxSocketPayloadSize: z.int().exactOptional(),
    hideViewerCount: z.boolean().exactOptional(),
    chatDisabled: z.boolean().exactOptional(),
    chatRequireAuthentication: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether users must authenticate before sending chat messages' }),
    nsfw: z.boolean().exactOptional(),
    autoplay: AutoplayModeSchema.exactOptional(),
    authentication: AuthenticationConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebConfig')

const YPDetailsSchema = z
  .object({
    lastConnectTime: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    streamTitle: z.string().exactOptional(),
    logo: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    social: z.array(SocialHandleSchema).exactOptional(),
    viewerCount: z.int().exactOptional(),
    overallMaxViewerCount: z.int().exactOptional(),
    sessionMaxViewerCount: z.int().exactOptional(),
    nsfw: z.boolean().exactOptional(),
    online: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('YPDetails')

const VideoVariantSchema = z
  .object({ index: z.int().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VideoVariant')

const CmcdReportSchema = z
  .looseObject({
    v: z.int().exactOptional().openapi({ description: 'CMCD version of the report' }),
    sid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Session ID identifying the player session' }),
    e: z
      .string()
      .exactOptional()
      .openapi({ description: 'Event type that triggered the report (event mode)' }),
    ts: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp of the report in epoch milliseconds' }),
    sta: z.string().exactOptional().openapi({ description: 'Player state token' }),
    mtp: z.number().exactOptional().openapi({ description: 'Measured throughput in kbps' }),
    ltc: z.number().exactOptional().openapi({ description: 'Live latency in milliseconds' }),
    bs: z.boolean().exactOptional().openapi({ description: 'Buffer starvation occurred' }),
    ec: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error code accompanying an error event' }),
    ttlb: z
      .number()
      .exactOptional()
      .openapi({ description: 'Time to last byte in milliseconds (response mode)' }),
    sn: z.number().exactOptional().openapi({ description: 'Report sequence number' }),
  })
  .openapi({
    description:
      'A CMCD v2 (CTA-5004-A) report keyed by CMCD key names. Any valid CMCD key is accepted; the keys below are the ones consumed.',
    required: [],
  })
  .openapi('CmcdReport')

const CmcdReportBodySchema = z
  .xor([CmcdReportSchema, z.array(CmcdReportSchema)])
  .openapi('CmcdReportBody')

const PlaybackMetricsSchema = z
  .object({
    bandwidth: z
      .float64()
      .exactOptional()
      .openapi({ description: "The player's measured throughput in kbps." }),
    latency: z
      .float64()
      .exactOptional()
      .openapi({ description: 'How far behind the live edge the player is, in seconds.' }),
    errors: z
      .float64()
      .openapi({
        description:
          'Errors since the previous report, not a running total. Reports accumulate, so a client sending a cumulative count inflates the recorded figure.',
      }),
    downloadDuration: z
      .float64()
      .exactOptional()
      .openapi({
        description: "How long the player's most recent segment took to download, in seconds.",
      }),
    qualityVariantChanges: z
      .float64()
      .openapi({
        description: 'Quality variant switches since the previous report, not a running total.',
      }),
  })
  .openapi({ required: ['errors', 'qualityVariantChanges'] })
  .openapi('PlaybackMetrics')

const InboundStreamDetailsSchema = z
  .object({
    videoCodec: z.string().exactOptional(),
    audioCodec: z.string().exactOptional(),
    encoder: z.string().exactOptional(),
    width: z.int().exactOptional(),
    height: z.int().exactOptional(),
    videoBitrate: z.int().exactOptional(),
    audioBitrate: z.int().exactOptional(),
    framerate: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InboundStreamDetails')

const BroadcasterSchema = z
  .object({
    time: z.iso.datetime({ offset: true }).exactOptional(),
    remoteAddr: z.string().exactOptional(),
    streamDetails: InboundStreamDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Broadcaster')

const StreamOutputVariantSchema = z
  .object({
    name: z.string().exactOptional(),
    videoPassthrough: z.boolean().exactOptional(),
    audioPassthrough: z.boolean().exactOptional(),
    videoBitrate: z.int().exactOptional(),
    audioBitrate: z.int().exactOptional(),
    scaledWidth: z.int().exactOptional(),
    scaledHeight: z.int().exactOptional(),
    framerate: z.int().exactOptional(),
    cpuUsageLevel: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StreamOutputVariant')

const LatencyLevelSchema = z
  .object({ level: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('LatencyLevel')

const CurrentBroadcastSchema = z
  .object({
    outputSettings: z.array(StreamOutputVariantSchema).exactOptional(),
    latencyLevel: LatencyLevelSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CurrentBroadcast')

const StreamHealthOverviewSchema = z
  .object({
    message: z.string().exactOptional(),
    healthPercentage: z.int().exactOptional(),
    representation: z.int().exactOptional(),
    healthy: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StreamHealthOverview')

const BrowserNotificationConfigurationSchema = z
  .object({ goLiveMessage: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('BrowserNotificationConfiguration')

const DiscordNotificationConfigurationSchema = z
  .object({
    webhook: z.string().exactOptional(),
    goLiveMessage: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DiscordNotificationConfiguration')

const S3InfoSchema = z
  .object({
    endpoint: z.string().exactOptional(),
    accessKey: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    bucket: z.string().exactOptional(),
    region: z.string().exactOptional(),
    acl: z.string().exactOptional(),
    pathPrefix: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    forcePathStyle: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('S3Info')

const StreamKeySchema = z
  .object({ key: z.string().exactOptional(), comment: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('StreamKey')

const TimestampedValueSchema = z
  .object({
    time: z.iso.datetime({ offset: true }).exactOptional(),
    value: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TimestampedValue')

const GeoDetailsSchema = z
  .object({
    countryCode: z.string().exactOptional(),
    regionName: z.string().exactOptional(),
    timeZone: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GeoDetails')

const ViewerSchema = z
  .object({
    firstSeen: z.iso.datetime({ offset: true }).exactOptional(),
    geo: z.union([GeoDetailsSchema, z.null().nullable()]).exactOptional(),
    userAgent: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    clientID: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Viewer')

const PlaybackClientHealthSchema = z
  .strictObject({
    source: z
      .enum(['client', 'server'])
      .openapi({
        description:
          'Whether the player is currently reporting its own playback, or the server is measuring it while serving segments. Individual values can still come from the other side, most often the segment download duration of a player that reports everything except how long its downloads took.',
      }),
    lastUpdate: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'When the most recent measurement of any value for this client arrived.',
      }),
    playerState: z
      .enum(['p', 'a', 'w', 'k', 'e'])
      .exactOptional()
      .openapi({
        description:
          'Latest player state from CMCD, where p is playing, a is paused, w is buffering, k is seeking, and e is ended.',
      }),
    measurementStatus: z
      .literal('unmeasurable')
      .exactOptional()
      .openapi({
        description: 'Explains why the server could not produce a trustworthy segment measurement.',
      }),
    bandwidthKbps: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "How fast video is reaching the client, either the player's own throughput estimate or the rate at which the server served its most recent segment. Server-side measurement may be unavailable when the server cannot see a trustworthy transfer, so clients report null unless the player measures itself.",
      }),
    latencySeconds: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'How far behind the live edge the client is playing. Only players that report it provide this, currently those supporting CMCD and those using the deprecated playback metrics endpoint.',
      }),
    downloadSeconds: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description: "How long the client's most recent video segment took to transfer.",
      }),
    bitrateKbps: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Encoded bitrate of the quality variant the client is playing, as advertised in the stream playlist. That figure includes audio, so it is near but not equal to the configured video bitrate of the matching output variant. Only players that report it provide this.',
      }),
    errorCount: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Errors, including buffering, since this client started playing. Null for a client the server can only observe, which reveals nothing about the player's errors.",
      }),
    qualityVariantChanges: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Quality variant switches since this client started playing. Null when the client reveals nothing about the quality it is playing.',
      }),
  })
  .openapi({
    description:
      'The most recent playback measurements for one client. A measurement is null when it is\nunknown for this client rather than measured as zero, because not every player reports every\nvalue, server-side observation cannot measure latency at all, and a value the player has\nstopped reporting expires rather than standing in for the current one.',
    required: ['source', 'lastUpdate'],
  })
  .openapi('PlaybackClientHealth')

const PlaybackClientSchema = z
  .strictObject({
    clientID: z
      .string()
      .openapi({
        description:
          'Playback identity of the client. The player-supplied CMCD session ID when it provides one, otherwise the same request-derived identity used for viewers.',
      }),
    viewerID: z
      .string()
      .openapi({
        description:
          'Request-derived identity of the viewer this client belongs to. Clients sharing an address and user agent share a viewer identity.',
      }),
    firstSeen: z.iso.datetime({ offset: true }).exactOptional(),
    geo: z.union([GeoDetailsSchema, z.null().nullable()]).exactOptional(),
    userAgent: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    playback: z
      .union([PlaybackClientHealthSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Null when no playback measurements exist for this client. A non-null playback object with measurementStatus explains why server-side measurements are unavailable.',
      }),
  })
  .openapi({
    description:
      'A single client currently playing back video, with its most recent playback health.',
    required: ['clientID', 'viewerID'],
  })
  .openapi('PlaybackClient')

const CollectedMetricsSchema = z
  .object({
    disk: z.array(TimestampedValueSchema).exactOptional(),
    memory: z.array(TimestampedValueSchema).exactOptional(),
    cpu: z.array(TimestampedValueSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CollectedMetrics')

const ChatClientSchema = z
  .object({
    connectedAt: z.iso.datetime({ offset: true }).exactOptional(),
    user: UserSchema.exactOptional(),
    geo: z.union([GeoDetailsSchema, z.null().nullable()]).exactOptional(),
    userAgent: z.string().exactOptional(),
    messageCount: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChatClient')

const ChatClientsSchema = z.array(ChatClientSchema).openapi('ChatClients')

const IPAddressSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    ipAddress: z.string().exactOptional(),
    notes: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IPAddress')

const WebhookEventTypeSchema = z
  .enum([
    'CHAT',
    'USER_JOINED',
    'USER_PARTED',
    'NAME_CHANGE',
    'FEDIVERSE_ENGAGEMENT_FOLLOW',
    'VISIBILITY-UPDATE',
    'PING',
    'PONG',
    'STREAM_STARTED',
    'STREAM_STOPPED',
    'STREAM_TITLE_UPDATED',
    'SYSTEM',
    'CHAT_ACTION',
  ])
  .openapi('WebhookEventType')

const WebhookSchema = z
  .object({
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    lastUsed: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    url: z.string().exactOptional(),
    events: z.array(WebhookEventTypeSchema).exactOptional(),
    id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const ExternalAPIUserSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    lastUsedAt: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().exactOptional(),
    accessToken: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    type: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
    displayColor: z.int().exactOptional(),
    isBot: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalAPIUser')

const MessageVisibilityUpdateSchema = z
  .object({ idArray: z.array(z.string()).exactOptional(), visible: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('MessageVisibilityUpdate')

const ModerationConnectedClientSchema = z
  .object({
    connectedAt: z.iso.datetime({ offset: true }).exactOptional(),
    userAgent: z.string().exactOptional(),
    geo: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    messageCount: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModerationConnectedClient')

const ModerationUserDetailsSchema = z
  .object({
    user: UserWithDisabledReasonSchema.exactOptional(),
    connectedClients: z.array(ModerationConnectedClientSchema).exactOptional(),
    messages: z.array(UserMessageSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ModerationUserDetails')

const FederatedActivitySchema = z
  .object({
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
    iri: z.string().exactOptional(),
    actorIRI: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FederatedActivity')

const PaginatedFederatedActivitySchema = z
  .object({ total: z.int().exactOptional(), results: FederatedActivitySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PaginatedFederatedActivity')

const AdminStatusSchema = z
  .object({
    broadcaster: BroadcasterSchema.exactOptional(),
    currentBroadcast: CurrentBroadcastSchema.exactOptional(),
    health: z.union([StreamHealthOverviewSchema, z.null().nullable()]).exactOptional(),
    streamTitle: z.string().exactOptional(),
    versionNumber: z.string().exactOptional(),
    viewerCount: z.int().exactOptional(),
    overallPeakViewerCount: z.int().exactOptional(),
    sessionPeakViewerCount: z.int().exactOptional(),
    online: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminStatus')

const AdminWebConfigSchema = z
  .object({
    appearanceVariables: z.record(z.string(), z.string()).exactOptional(),
    version: z.string().exactOptional(),
    welcomeMessage: z.string().exactOptional(),
    offlineMessage: z.string().exactOptional(),
    logo: z.string().exactOptional(),
    name: z.string().exactOptional(),
    extraPageContent: z.string().exactOptional(),
    streamTitle: z.string().exactOptional(),
    customStyles: z.string().exactOptional(),
    customJavascript: z.string().exactOptional(),
    summary: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    socialHandles: z.array(SocialHandleSchema).exactOptional(),
    nsfw: z.boolean().exactOptional(),
    autoplay: AutoplayModeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminWebConfig')

const AdminNotificationsConfigSchema = z
  .object({
    browser: BrowserNotificationConfigurationSchema.exactOptional(),
    discord: DiscordNotificationConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminNotificationsConfig')

const AdminYPInfoSchema = z
  .object({ instanceUrl: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('AdminYPInfo')

const AdminFederationConfigSchema = z
  .object({
    username: z.string().exactOptional(),
    goLiveMessage: z.string().exactOptional(),
    blockedDomains: z.array(z.string()).exactOptional(),
    enabled: z.boolean().exactOptional(),
    isPrivate: z.boolean().exactOptional(),
    showEngagement: z.boolean().exactOptional(),
    enableQuotes: z.boolean().exactOptional(),
    hideFollowersTab: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminFederationConfig')

const AdminVideoSettingsSchema = z
  .object({
    videoQualityVariants: z.array(StreamOutputVariantSchema).exactOptional(),
    latencyLevel: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminVideoSettings')

const AdminServerConfigSchema = z
  .object({
    instanceDetails: AdminWebConfigSchema.exactOptional(),
    notifications: AdminNotificationsConfigSchema.exactOptional(),
    yp: AdminYPInfoSchema.exactOptional(),
    ffmpegPath: z.string().exactOptional(),
    adminPassword: z.string().exactOptional(),
    socketHostOverride: z.string().exactOptional(),
    webServerIP: z.string().exactOptional(),
    videoCodec: z.string().exactOptional(),
    videoServingEndpoint: z.string().exactOptional(),
    s3: S3InfoSchema.exactOptional(),
    federation: AdminFederationConfigSchema.exactOptional(),
    supportedCodecs: z.array(z.string()).exactOptional(),
    externalActions: z.array(ExternalActionSchema).exactOptional(),
    forbiddenUsernames: z.array(z.string()).exactOptional(),
    suggestedUsernames: z.array(z.string()).exactOptional(),
    streamKeys: z.array(StreamKeySchema).exactOptional(),
    videoSettings: AdminVideoSettingsSchema.exactOptional(),
    rtmpServerPort: z.int().exactOptional(),
    rtmpServerAddress: z.string().exactOptional(),
    webServerPort: z.int().exactOptional(),
    chatDisabled: z.boolean().exactOptional(),
    chatJoinMessagesEnabled: z.boolean().exactOptional(),
    chatEstablishedUserMode: z.boolean().exactOptional(),
    disableSearchIndexing: z.boolean().exactOptional(),
    streamKeyOverridden: z.boolean().exactOptional(),
    hideViewerCount: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminServerConfig')

const AdminLogSchema = z
  .object({
    time: z.iso.datetime({ offset: true }).exactOptional(),
    message: z.string().exactOptional(),
    level: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminLog')

const AdminConfigValueSchema = z
  .object({
    value: z.xor([z.string(), z.boolean(), z.array(z.string()), z.number()]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminConfigValue')

const IndieAuthProfileSchema = z
  .object({
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
    photo: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndieAuthProfile')

const IndieAuthResponseSchema = z
  .object({
    me: z.string().exactOptional(),
    profile: IndieAuthProfileSchema.exactOptional(),
    error: z.string().exactOptional(),
    errorDescription: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndieAuthResponse')

const IndieAuthServerProfileSchema = z
  .object({
    name: z.string().exactOptional(),
    url: z.string().exactOptional(),
    photo: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndieAuthServerProfile')

const IndieAuthServerProfileResponseSchema = z
  .object({
    me: z.string().exactOptional(),
    profile: IndieAuthServerProfileSchema.exactOptional(),
    error: z.string().exactOptional(),
    errorDescription: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IndieAuthServerProfileResponse')

const _204Response = { description: 'No Content' }

const _400Response = {
  description: 'Bad request',
  content: { 'application/json': { schema: BaseAPIResponseSchema } },
}

const _401Response = {
  description: 'Unauthorized',
  content: { 'text/plain': { schema: z.string() } },
}

const _403Response = { description: 'Forbidden' }

const _404Response = { description: 'Not found' }

const _500Response = {
  description: 'Internal Server Error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const _501Response = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: ErrorSchema } },
}

const DefaultResponse = {
  description: 'Unexpected error',
  content: { 'application/json': { schema: BaseAPIResponseSchema } },
}

const AccessControlAllowOriginHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { required: false } })

const _204OptionsResponse = {
  description: 'No Content',
  headers: z.object({ 'Access-Control-Allow-Origin': AccessControlAllowOriginHeaderSchema }),
}

const AccessControlAllowCredentialsHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { required: false } })

const AccessControlAllowHeadersHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { required: false } })

const WWWAuthenticateHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { required: false } })

const XContentTypeOptionsHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ param: { required: false } })

const _401BasicAuthResponse = {
  description: 'Basic auth failure',
  content: { 'text/plain': { schema: z.string() } },
  headers: z.object({
    'Access-Control-Allow-Origin': AccessControlAllowOriginHeaderSchema,
    'Access-Control-Allow-Credentials': AccessControlAllowCredentialsHeaderSchema,
    'Access-Control-Allow-Headers': AccessControlAllowHeadersHeaderSchema,
    'WWW-Authenticate': WWWAuthenticateHeaderSchema,
    'X-Content-Type-Options': XContentTypeOptionsHeaderSchema,
  }),
}

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'offset',
      schema: {
        type: 'integer',
        description: 'The number of items to skip before starting to collect the result set',
      },
      required: false,
    },
    description: 'The number of items to skip before starting to collect the result set',
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'limit',
      schema: { type: 'integer', description: 'The numbers of items to return' },
      required: false,
    },
    description: 'The numbers of items to return',
  })

const AccessTokenParamsSchema = z
  .string()
  .openapi({
    param: { in: 'query', name: 'accessToken', schema: { type: 'string' }, required: true },
  })

const IndieAuthClientIdParamsSchema = z
  .string()
  .openapi({
    param: { in: 'query', name: 'client_id', schema: { type: 'string' }, required: true },
  })

const IndieAuthRedirectURIParamsSchema = z
  .string()
  .openapi({
    param: { in: 'query', name: 'redirect_uri', schema: { type: 'string' }, required: true },
  })

const IndieAuthCodeChallengeParamsSchema = z
  .string()
  .openapi({
    param: { in: 'query', name: 'code_challenge', schema: { type: 'string' }, required: true },
  })

const IndieAuthStateParamsSchema = z
  .string()
  .openapi({ param: { in: 'query', name: 'state', schema: { type: 'string' }, required: true } })

const IndieAuthMeParamsSchema = z
  .string()
  .openapi({ param: { in: 'query', name: 'me', schema: { type: 'string' }, required: true } })

const AdminConfigValueRequestBody = {
  description: 'A single value that is used in the request',
  content: { 'application/json': { schema: AdminConfigValueSchema } },
}

const IndieAuthEndpointFormRequestBody = {
  description: 'Form submission from IndieAuth',
  content: {
    'application/x-www-form-urlencoded': {
      schema: z
        .object({
          code: z.string().exactOptional(),
          redirect_uri: z.string().exactOptional(),
          client_id: z.string().exactOptional(),
          codeVerifier: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['Internal'],
  summary: 'Get the status of the server',
  operationId: 'GetStatus',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getEmojiRoute = createRoute({
  method: 'get',
  path: '/emoji',
  tags: ['Internal', 'Chat'],
  summary: 'Get list of custom emojis supported in the chat',
  operationId: 'GetCustomEmojiList',
  responses: {
    200: {
      description: 'List of valid emojis',
      content: { 'application/json': { schema: EmojisSchema } },
    },
    500: _500Response,
  },
})

export const getChatRoute = createRoute({
  method: 'get',
  path: '/chat',
  tags: ['Internal', 'Chat'],
  summary: 'Gets a list of chat messages',
  operationId: 'GetChatMessages',
  request: { query: z.object({ accessToken: AccessTokenParamsSchema }) },
  responses: {
    200: {
      description: 'List of chat messages',
      content: { 'application/json': { schema: ChatMessagesSchema } },
    },
    401: _401Response,
    501: _501Response,
  },
})

export const postChatRegisterRoute = createRoute({
  method: 'post',
  path: '/chat/register',
  tags: ['Internal', 'Chat'],
  summary: 'Resolves a gate session or registers an anonymous chat user',
  description:
    "Returns the existing user's identity and access token when a verified\nauth.gate session is present. Otherwise creates an anonymous chat user.\nA session whose user is missing or disabled is rejected without creating\nan anonymous user. The proposed display name is ignored for gate sessions.\n",
  operationId: 'RegisterAnonymousChatUser',
  request: {
    headers: z.object({
      'X-Forwarded-User': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Forwarded-User',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'The display name of the new user',
      content: {
        'application/json': {
          schema: z.object({ displayName: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Chat user information (existing gate user or newly registered anonymous user)',
      content: { 'application/json': { schema: AnonymousUserSchema } },
    },
    400: _400Response,
    403: {
      description: 'The verified gate session has no resolvable user or its user is disabled',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
  },
})

export const optionsChatRegisterRoute = createRoute({
  method: 'options',
  path: '/chat/register',
  tags: ['Objects', 'Chat'],
  operationId: 'RegisterAnonymousChatUserOptions',
  responses: { 204: _204OptionsResponse },
})

export const postChatMessagevisibilityRoute = createRoute({
  method: 'post',
  path: '/chat/messagevisibility',
  tags: ['Internal', 'Chat'],
  summary: 'Update chat message visibility',
  operationId: 'UpdateMessageVisibility',
  request: {
    query: z.object({ accessToken: AccessTokenParamsSchema }),
    body: { content: { 'application/json': { schema: MessageVisibilityUpdateSchema } } },
  },
  responses: {
    200: {
      description: 'Message visibility updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    default: DefaultResponse,
  },
})

export const postChatUsersSetenabledRoute = createRoute({
  method: 'post',
  path: '/chat/users/setenabled',
  tags: ['Internal', 'Chat'],
  summary: 'Enable/disable a user',
  operationId: 'UpdateUserEnabled',
  request: {
    query: z.object({ accessToken: AccessTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ userId: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User status has been updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    default: DefaultResponse,
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Internal'],
  summary: 'Get the web config',
  operationId: 'GetWebConfig',
  responses: {
    200: {
      description: 'The current web config',
      content: { 'application/json': { schema: WebConfigSchema } },
    },
    500: _500Response,
  },
})

export const getYpRoute = createRoute({
  method: 'get',
  path: '/yp',
  tags: ['Internal'],
  summary: 'Get the YP protocol data',
  operationId: 'GetYPResponse',
  responses: {
    200: {
      description: 'The current YP protocol configuration',
      content: { 'application/json': { schema: YPDetailsSchema } },
    },
    404: _404Response,
  },
})

export const getSocialplatformsRoute = createRoute({
  method: 'get',
  path: '/socialplatforms',
  tags: ['Internal'],
  summary: 'Get all social platforms',
  operationId: 'GetAllSocialPlatforms',
  responses: {
    200: {
      description: 'The list of social platforms',
      content: { 'application/json': { schema: z.record(z.string(), SocialHandleSchema) } },
    },
    500: _500Response,
  },
})

export const getVideoVariantsRoute = createRoute({
  method: 'get',
  path: '/video/variants',
  tags: ['Internal', 'Video'],
  summary: 'Get a list of video variants available',
  operationId: 'GetVideoStreamOutputVariants',
  responses: {
    200: {
      description: 'List of available video variants',
      content: { 'application/json': { schema: z.array(VideoVariantSchema) } },
    },
  },
})

export const getPingRoute = createRoute({
  method: 'get',
  path: '/ping',
  tags: ['Internal', 'Video'],
  summary: "Tell the backend you're an active viewer",
  operationId: 'Ping',
  responses: { 200: { description: 'Added as an active viewer' } },
})

export const postRemotefollowRoute = createRoute({
  method: 'post',
  path: '/remotefollow',
  tags: ['Internal', 'Social'],
  summary: 'Request remote follow',
  operationId: 'RemoteFollow',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ account: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Contains redirect URL remote follow follow',
      content: {
        'application/json': {
          schema: z.object({ redirectUrl: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
  },
})

export const getFollowersRoute = createRoute({
  method: 'get',
  path: '/followers',
  tags: ['Internal', 'Social'],
  summary: 'Gets the list of followers',
  operationId: 'GetFollowers',
  request: { query: z.object({ offset: OffsetParamsSchema, limit: LimitParamsSchema }) },
  responses: {
    200: {
      description: 'Paginated follower count',
      content: { 'application/json': { schema: PaginatedFollowersSchema } },
    },
    400: _400Response,
  },
})

export const getMetricsCmcdRoute = createRoute({
  method: 'get',
  path: '/metrics/cmcd',
  tags: ['Internal'],
  summary: 'CMCD collector accepting a report as a query parameter',
  operationId: 'ReportCmcdQuery',
  request: {
    query: z.object({
      CMCD: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'CMCD',
            in: 'query',
            description: 'CMCD report serialized as a CMCD dictionary payload',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Report accepted' }, 400: _400Response },
})

export const postMetricsCmcdRoute = createRoute({
  method: 'post',
  path: '/metrics/cmcd',
  tags: ['Internal'],
  summary: 'CMCD collector accepting event and response mode playback reports',
  description:
    'Reporting modes are defined by CMCD v2 (CTA-5004-A). CMCD v1 has no reporting modes, v1 request mode data is collected directly from the media requests it decorates. The collector maps any known CMCD keys it receives and does not reject reports based on their version.',
  operationId: 'ReportCmcd',
  request: {
    body: {
      description: 'A single CMCD report, or an array of batched reports, keyed by CMCD key names',
      content: { 'application/json': { schema: CmcdReportBodySchema } },
    },
  },
  responses: { 200: { description: 'Report accepted' }, 400: _400Response },
})

export const optionsMetricsCmcdRoute = createRoute({
  method: 'options',
  path: '/metrics/cmcd',
  tags: ['Objects', 'Internal'],
  operationId: 'ReportCmcdOptions',
  responses: { 204: _204Response },
})

export const postMetricsPlaybackRoute = createRoute({
  method: 'post',
  path: '/metrics/playback',
  tags: ['Internal'],
  summary: 'Save video playback metrics for future video health recording',
  description:
    'Deprecated in favor of the CMCD collector at /metrics/cmcd, which accepts standard CMCD v2 (CTA-5004-A) reports. This endpoint remains functional for existing clients.',
  operationId: 'ReportPlaybackMetrics',
  request: {
    body: {
      description: 'Video metrics to record',
      content: { 'application/json': { schema: PlaybackMetricsSchema } },
    },
  },
  responses: { 200: { description: 'Metrics successfully recorded' }, 400: _400Response },
  deprecated: true,
})

export const postNotificationsRegisterRoute = createRoute({
  method: 'post',
  path: '/notifications/register',
  tags: ['Internal'],
  summary: 'Register for notifications',
  operationId: 'RegisterForLiveNotifications',
  request: {
    query: z.object({ accessToken: AccessTokenParamsSchema }),
    body: {
      description: 'Information for notification',
      content: {
        'application/json': {
          schema: z
            .object({
              channel: z
                .string()
                .exactOptional()
                .openapi({ description: 'Name of notification channel' }),
              destination: z
                .string()
                .exactOptional()
                .openapi({ description: 'Target of the notification in the channel' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Successfully added notification channel' },
    400: _400Response,
    401: _401Response,
  },
})

export const getAdminStatusRoute = createRoute({
  method: 'get',
  path: '/admin/status',
  tags: ['Internal', 'Admin'],
  summary: 'Get current inboard broadcaster',
  operationId: 'StatusAdmin',
  responses: {
    200: {
      description: 'Gives the status of the system',
      content: { 'application/json': { schema: AdminStatusSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminStatusRoute = createRoute({
  method: 'options',
  path: '/admin/status',
  tags: ['Objects'],
  operationId: 'StatusAdminOptions',
  responses: { 204: _204Response },
})

export const postAdminDisconnectRoute = createRoute({
  method: 'post',
  path: '/admin/disconnect',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Disconnect inbound stream',
  operationId: 'DisconnectInboundConnection',
  responses: {
    200: {
      description: 'Contains information about disconnection status',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminDisconnectRoute = createRoute({
  method: 'options',
  path: '/admin/disconnect',
  tags: ['Objects', 'Video'],
  operationId: 'DisconnectInboundConnectionOptions',
  responses: { 204: _204Response },
})

export const getAdminServerconfigRoute = createRoute({
  method: 'get',
  path: '/admin/serverconfig',
  tags: ['Internal', 'Admin'],
  summary: 'Get the current server config',
  operationId: 'GetServerConfig',
  responses: {
    200: {
      description: 'Current server config',
      content: { 'application/json': { schema: AdminServerConfigSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminServerconfigRoute = createRoute({
  method: 'options',
  path: '/admin/serverconfig',
  tags: ['Objects'],
  operationId: 'GetServerConfigOptions',
  responses: { 204: _204Response },
})

export const getAdminViewersOverTimeRoute = createRoute({
  method: 'get',
  path: '/admin/viewersOverTime',
  tags: ['Internal', 'Admin'],
  summary: 'Get viewer count over time',
  operationId: 'GetViewersOverTime',
  request: {
    query: z.object({
      windowStart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'windowStart',
            description: 'Start date in unix time',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Viewer count over time',
      content: { 'application/json': { schema: z.array(TimestampedValueSchema) } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminViewersOverTimeRoute = createRoute({
  method: 'options',
  path: '/admin/viewersOverTime',
  tags: ['Objects'],
  operationId: 'GetViewersOverTimeOptions',
  responses: { 204: _204Response },
})

export const getAdminViewersRoute = createRoute({
  method: 'get',
  path: '/admin/viewers',
  tags: ['Internal', 'Admin'],
  summary: 'Get active viewers',
  operationId: 'GetActiveViewers',
  responses: {
    200: {
      description: 'List of active viewers',
      content: { 'application/json': { schema: z.array(ViewerSchema) } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminViewersRoute = createRoute({
  method: 'options',
  path: '/admin/viewers',
  tags: ['Objects', 'Video'],
  operationId: 'GetActiveViewersOptions',
  responses: { 204: _204Response },
})

export const getAdminViewersPlaybackRoute = createRoute({
  method: 'get',
  path: '/admin/viewers/playback',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Get the playback clients of active viewers with their current playback health',
  description:
    'One entry per playback client currently watching, with the most recent playback measurements\nfor that client. Clients that report CMCD are identified by their player-supplied session ID,\nwhich distinguishes players sharing an address; every other client is identified the same way\nviewers are. A viewer with no playback measurements is still listed, with a null `playback`.',
  operationId: 'GetPlaybackClients',
  responses: {
    200: {
      description: 'List of active playback clients',
      content: { 'application/json': { schema: z.array(PlaybackClientSchema) } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminViewersPlaybackRoute = createRoute({
  method: 'options',
  path: '/admin/viewers/playback',
  tags: ['Objects', 'Video'],
  operationId: 'GetPlaybackClientsOptions',
  responses: { 204: _204Response },
})

export const getAdminHardwarestatsRoute = createRoute({
  method: 'get',
  path: '/admin/hardwarestats',
  tags: ['Internal', 'Admin'],
  summary: 'Get the current hardware stats',
  operationId: 'GetHardwareStats',
  responses: {
    200: {
      description: 'Current hardware stats',
      content: {
        'application/json': { schema: StreamHealthOverviewSchema.and(CollectedMetricsSchema) },
      },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminHardwarestatsRoute = createRoute({
  method: 'options',
  path: '/admin/hardwarestats',
  tags: ['Objects'],
  operationId: 'GetHardwareStatsOptions',
  responses: { 204: _204Response },
})

export const getAdminChatClientsRoute = createRoute({
  method: 'get',
  path: '/admin/chat/clients',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Get a detailed list of currently connected chat clients',
  operationId: 'GetConnectedChatClients',
  responses: {
    200: {
      description: 'List of chat clients',
      content: { 'application/json': { schema: ChatClientsSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatClientsRoute = createRoute({
  method: 'options',
  path: '/admin/chat/clients',
  tags: ['Objects', 'Chat'],
  operationId: 'GetConnectedChatClientsOptions',
  responses: { 204: _204Response },
})

export const getAdminChatMessagesRoute = createRoute({
  method: 'get',
  path: '/admin/chat/messages',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Get all chat messages for the admin, unfiltered',
  operationId: 'GetChatMessagesAdmin',
  responses: {
    200: {
      description: 'List of chat messages for the admin',
      content: { 'application/json': { schema: ChatMessagesSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatMessagesRoute = createRoute({
  method: 'options',
  path: '/admin/chat/messages',
  tags: ['Objects', 'Chat'],
  operationId: 'GetChatMessagesAdminOptions',
  responses: { 204: _204Response },
})

export const postAdminChatMessagevisibilityRoute = createRoute({
  method: 'post',
  path: '/admin/chat/messagevisibility',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Update visibility of chat messages',
  operationId: 'UpdateMessageVisibilityAdmin',
  request: { body: { content: { 'application/json': { schema: MessageVisibilityUpdateSchema } } } },
  responses: {
    200: {
      description: 'Messages updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatMessagevisibilityRoute = createRoute({
  method: 'options',
  path: '/admin/chat/messagevisibility',
  tags: ['Objects', 'Chat'],
  operationId: 'UpdateMessageVisibilityAdminOptions',
  responses: { 204: _204Response },
})

export const postAdminChatUsersSetenabledRoute = createRoute({
  method: 'post',
  path: '/admin/chat/users/setenabled',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Enable or disable a user',
  operationId: 'UpdateUserEnabledAdmin',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ userId: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated the user',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersSetenabledRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/setenabled',
  tags: ['Objects', 'Chat'],
  operationId: 'UpdateUserEnabledAdminOptions',
  responses: { 204: _204Response },
})

export const getAdminChatUsersDisabledRoute = createRoute({
  method: 'get',
  path: '/admin/chat/users/disabled',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Get a list of disabled users',
  operationId: 'GetDisabledUsers',
  responses: {
    200: {
      description: 'List of disabled users',
      content: { 'application/json': { schema: UsersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersDisabledRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/disabled',
  tags: ['Objects', 'Chat'],
  operationId: 'GetDisabledUsersOptions',
  responses: { 204: _204Response },
})

export const postAdminChatUsersIpbansCreateRoute = createRoute({
  method: 'post',
  path: '/admin/chat/users/ipbans/create',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Ban an IP address',
  operationId: 'BanIPAddress',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'IP was successfully banned',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersIpbansCreateRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/ipbans/create',
  tags: ['Objects', 'Chat'],
  operationId: 'BanIPAddressOptions',
  responses: { 204: _204Response },
})

export const postAdminChatUsersIpbansRemoveRoute = createRoute({
  method: 'post',
  path: '/admin/chat/users/ipbans/remove',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Remove an IP ban',
  operationId: 'UnbanIPAddress',
  request: { body: { content: { 'application/json': { schema: AdminConfigValueSchema } } } },
  responses: {
    200: {
      description: 'IP ban was successfully removed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersIpbansRemoveRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/ipbans/remove',
  tags: ['Objects', 'Chat'],
  operationId: 'UnbanIPAddressOptions',
  responses: { 204: _204Response },
})

export const getAdminChatUsersIpbansRoute = createRoute({
  method: 'get',
  path: '/admin/chat/users/ipbans',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Get all banned IP addresses',
  operationId: 'GetIPAddressBans',
  responses: {
    200: {
      description: 'List of banned IP addresses',
      content: { 'application/json': { schema: z.array(IPAddressSchema) } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersIpbansRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/ipbans',
  tags: ['Objects', 'Chat'],
  operationId: 'GetIPAddressBansOptions',
  responses: { 204: _204Response },
})

export const postAdminChatUsersSetmoderatorRoute = createRoute({
  method: 'post',
  path: '/admin/chat/users/setmoderator',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Set moderator status for a user',
  operationId: 'UpdateUserModerator',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z.string().exactOptional(),
              isModerator: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully update the moderator status of the user',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersSetmoderatorRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/setmoderator',
  tags: ['Objects', 'Chat'],
  operationId: 'UpdateUserModeratorOptions',
  responses: { 204: _204Response },
})

export const getAdminChatUsersModeratorsRoute = createRoute({
  method: 'get',
  path: '/admin/chat/users/moderators',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Get a list of moderator users',
  operationId: 'GetModerators',
  responses: {
    200: {
      description: 'List of moderator users',
      content: { 'application/json': { schema: UsersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminChatUsersModeratorsRoute = createRoute({
  method: 'options',
  path: '/admin/chat/users/moderators',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'GetModeratorsOptions',
  responses: { 204: _204Response },
})

export const getAdminUsersRoute = createRoute({
  method: 'get',
  path: '/admin/users',
  tags: ['Internal', 'Admin'],
  summary: 'Get a paginated list of all users',
  operationId: 'GetUsers',
  request: {
    query: z.object({
      offset: OffsetParamsSchema,
      limit: LimitParamsSchema,
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            description: 'Filter to users whose display name contains this substring',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .enum(['all', 'active', 'bots'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description: 'Filter users by status',
            schema: { type: 'string', enum: ['all', 'active', 'bots'] },
            required: false,
          },
        }),
      sort: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort',
            description: 'Sort direction by creation date (defaults to newest first)',
            schema: { type: 'string', enum: ['asc', 'desc'], default: 'desc' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of users',
      content: { 'application/json': { schema: PaginatedUsersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminUsersRoute = createRoute({
  method: 'options',
  path: '/admin/users',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'GetUsersOptions',
  responses: { 204: _204Response },
})

export const postAdminUsersDeleteRoute = createRoute({
  method: 'post',
  path: '/admin/users/delete',
  tags: ['Internal', 'Admin'],
  summary: 'Permanently delete a user and all of their data',
  operationId: 'DeleteUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ userId: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User was successfully deleted',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminUsersDeleteRoute = createRoute({
  method: 'options',
  path: '/admin/users/delete',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'DeleteUserOptions',
  responses: { 204: _204Response },
})

export const getAdminLogsRoute = createRoute({
  method: 'get',
  path: '/admin/logs',
  tags: ['Internal', 'Admin'],
  summary: 'Get all logs',
  operationId: 'GetLogs',
  responses: {
    200: {
      description: 'List of logs',
      content: { 'application/json': { schema: z.array(AdminLogSchema) } },
      headers: z.object({
        'Access-Control-Allow-Origin': AccessControlAllowOriginHeaderSchema,
        'Access-Control-Allow-Credentials': AccessControlAllowCredentialsHeaderSchema,
        'Access-Control-Allow-Headers': AccessControlAllowHeadersHeaderSchema,
      }),
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminLogsRoute = createRoute({
  method: 'options',
  path: '/admin/logs',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'GetLogsOptions',
  responses: { 204: _204Response },
})

export const getAdminLogsWarningsRoute = createRoute({
  method: 'get',
  path: '/admin/logs/warnings',
  tags: ['Internal', 'Admin'],
  summary: 'Get warning/error logs',
  operationId: 'GetWarnings',
  responses: {
    200: {
      description: 'List of warnings and errors',
      content: { 'application/json': { schema: z.array(AdminLogSchema) } },
      headers: z.object({
        'Access-Control-Allow-Origin': AccessControlAllowOriginHeaderSchema,
        'Access-Control-Allow-Credentials': AccessControlAllowCredentialsHeaderSchema,
        'Access-Control-Allow-Headers': AccessControlAllowHeadersHeaderSchema,
      }),
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminLogsWarningsRoute = createRoute({
  method: 'options',
  path: '/admin/logs/warnings',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'GetWarningsOptions',
  responses: { 204: _204Response },
})

export const getAdminFollowersRoute = createRoute({
  method: 'get',
  path: '/admin/followers',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Get followers',
  operationId: 'GetFollowersAdmin',
  request: { query: z.object({ offset: OffsetParamsSchema, limit: LimitParamsSchema }) },
  responses: {
    200: {
      description: 'Paginated follower count',
      content: { 'application/json': { schema: PaginatedFollowersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFollowersRoute = createRoute({
  method: 'options',
  path: '/admin/followers',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'GetFollowersAdminOptions',
  responses: { 204: _204Response },
})

export const getAdminFollowersPendingRoute = createRoute({
  method: 'get',
  path: '/admin/followers/pending',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Get a list of pending follow requests',
  operationId: 'GetPendingFollowRequests',
  responses: {
    200: {
      description: 'List of pending followers',
      content: { 'application/json': { schema: FollowersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFollowersPendingRoute = createRoute({
  method: 'options',
  path: '/admin/followers/pending',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'GetPendingFollowRequestsOptions',
  responses: { 204: _204Response },
})

export const getAdminFollowersBlockedRoute = createRoute({
  method: 'get',
  path: '/admin/followers/blocked',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Get a list of rejected or blocked follows',
  operationId: 'GetBlockedAndRejectedFollowers',
  responses: {
    200: {
      description: 'List of rejected or blocked follows',
      content: { 'application/json': { schema: FollowersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFollowersBlockedRoute = createRoute({
  method: 'options',
  path: '/admin/followers/blocked',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'GetBlockedAndRejectedFollowersOptions',
  responses: { 204: _204Response },
})

export const getAdminFollowersDirectoryRoute = createRoute({
  method: 'get',
  path: '/admin/followers/directory',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Get directories that are featuring/listing this server',
  operationId: 'GetDirectoryFollowers',
  responses: {
    200: {
      description: 'List of directories featuring this server',
      content: { 'application/json': { schema: FollowersSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFollowersDirectoryRoute = createRoute({
  method: 'options',
  path: '/admin/followers/directory',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'GetDirectoryFollowersOptions',
  responses: { 204: _204Response },
})

export const postAdminFollowersApproveRoute = createRoute({
  method: 'post',
  path: '/admin/followers/approve',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set the following state of a follower or follow request',
  operationId: 'ApproveFollower',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ actorIRI: z.string().exactOptional(), approved: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'List of rejected or blocked follows',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFollowersApproveRoute = createRoute({
  method: 'options',
  path: '/admin/followers/approve',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'ApproveFollowerOptions',
  responses: { 204: _204Response },
})

export const postAdminFollowersRemoveRoute = createRoute({
  method: 'post',
  path: '/admin/followers/remove',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Remove a follower without blocking them (they may follow again)',
  operationId: 'RemoveFollower',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              actorIRI: z.string().openapi({ description: 'IRI of the follower to remove' }),
            })
            .openapi({ required: ['actorIRI'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Follower removed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFollowersRemoveRoute = createRoute({
  method: 'options',
  path: '/admin/followers/remove',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'RemoveFollowerOptions',
  responses: { 204: _204Response },
})

export const postAdminEmojiUploadRoute = createRoute({
  method: 'post',
  path: '/admin/emoji/upload',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Upload custom emoji',
  operationId: 'UploadCustomEmoji',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              data: z
                .string()
                .exactOptional()
                .openapi({ description: 'Base 64 encoded image data' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Emoji has been uploaded',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminEmojiUploadRoute = createRoute({
  method: 'options',
  path: '/admin/emoji/upload',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'UploadCustomEmojiOptions',
  responses: { 204: _204Response },
})

export const postAdminEmojiDeleteRoute = createRoute({
  method: 'post',
  path: '/admin/emoji/delete',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Delete custom emoji',
  operationId: 'DeleteCustomEmoji',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ name: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Emoji has been deleted',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminEmojiDeleteRoute = createRoute({
  method: 'options',
  path: '/admin/emoji/delete',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'DeleteCustomEmojiOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigAdminpassRoute = createRoute({
  method: 'post',
  path: '/admin/config/adminpass',
  tags: ['Internal', 'Admin'],
  summary: 'Change the current admin password',
  operationId: 'SetAdminPassword',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Admin password has been updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigAdminpassRoute = createRoute({
  method: 'options',
  path: '/admin/config/adminpass',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetAdminPasswordOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigStreamkeysRoute = createRoute({
  method: 'post',
  path: '/admin/config/streamkeys',
  tags: ['Internal', 'Admin'],
  summary: 'Set an array of valid stream keys',
  operationId: 'SetStreamKeys',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.array(StreamKeySchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Stream keys have been updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigStreamkeysRoute = createRoute({
  method: 'options',
  path: '/admin/config/streamkeys',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetStreamKeysOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigPagecontentRoute = createRoute({
  method: 'post',
  path: '/admin/config/pagecontent',
  tags: ['Internal', 'Admin'],
  summary: 'Change the extra page content in memory',
  operationId: 'SetExtraPageContent',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Page content has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigPagecontentRoute = createRoute({
  method: 'options',
  path: '/admin/config/pagecontent',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetExtraPageContentOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigStreamtitleRoute = createRoute({
  method: 'post',
  path: '/admin/config/streamtitle',
  tags: ['Internal', 'Admin'],
  summary: 'Change the stream title',
  operationId: 'SetStreamTitle',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Stream title has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigStreamtitleRoute = createRoute({
  method: 'options',
  path: '/admin/config/streamtitle',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetStreamTitleOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigNameRoute = createRoute({
  method: 'post',
  path: '/admin/config/name',
  tags: ['Objects', 'Internal', 'Admin'],
  summary: 'Change the server name',
  operationId: 'SetServerName',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Server name has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigNameRoute = createRoute({
  method: 'options',
  path: '/admin/config/name',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetServerNameOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigServersummaryRoute = createRoute({
  method: 'post',
  path: '/admin/config/serversummary',
  tags: ['Objects', 'Internal', 'Admin'],
  summary: 'Change the server summary',
  operationId: 'SetServerSummary',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Server summary has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigServersummaryRoute = createRoute({
  method: 'options',
  path: '/admin/config/serversummary',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetServerSummaryOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigOfflinemessageRoute = createRoute({
  method: 'post',
  path: '/admin/config/offlinemessage',
  tags: ['Objects', 'Internal', 'Admin'],
  summary: 'Change the offline message',
  operationId: 'SetCustomOfflineMessage',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Offline message has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigOfflinemessageRoute = createRoute({
  method: 'options',
  path: '/admin/config/offlinemessage',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetCustomOfflineMessageOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigWelcomemessageRoute = createRoute({
  method: 'post',
  path: '/admin/config/welcomemessage',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Change the welcome message',
  operationId: 'SetServerWelcomeMessage',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Welcome message has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigWelcomemessageRoute = createRoute({
  method: 'options',
  path: '/admin/config/welcomemessage',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetServerWelcomeMessageOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatDisableRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/disable',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Disable chat',
  operationId: 'SetChatDisabled',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Chat has been disabled',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatDisableRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/disable',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetChatDisabledOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatJoinmessagesenabledRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/joinmessagesenabled',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Enable chat for user join messages',
  operationId: 'SetChatJoinMessagesEnabled',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'User join messages has been enabled',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatJoinmessagesenabledRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/joinmessagesenabled',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetChatJoinMessagesEnabledOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatEstablishedusermodeRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/establishedusermode',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Enable/disable chat established user mode',
  operationId: 'SetEnableEstablishedChatUserMode',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Chat established user mode updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatEstablishedusermodeRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/establishedusermode',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetEnableEstablishedChatUserModeOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatForbiddenusernamesRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/forbiddenusernames',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Set chat usernames that are not allowed',
  operationId: 'SetForbiddenUsernameList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Forbidden usernames updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatForbiddenusernamesRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/forbiddenusernames',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetForbiddenUsernameListOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatSuggestedusernamesRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/suggestedusernames',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Set the suggested chat usernames that will be assigned automatically',
  operationId: 'SetSuggestedUsernameList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Suggested usernames updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatSuggestedusernamesRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/suggestedusernames',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetSuggestedUsernameListOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatSpamprotectionenabledRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/spamprotectionenabled',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Set spam protection enabled',
  operationId: 'SetChatSpamProtectionEnabled',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Spam protection enabled updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatSpamprotectionenabledRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/spamprotectionenabled',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetChatSpamProtectionEnabledOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatSlurfilterenabledRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/slurfilterenabled',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Set slur filter enabled',
  operationId: 'SetChatSlurFilterEnabled',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Slur filter enabled updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatSlurfilterenabledRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/slurfilterenabled',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetChatSlurFilterEnabledOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigChatRequireauthenticationRoute = createRoute({
  method: 'post',
  path: '/admin/config/chat/requireauthentication',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Set require authentication for chat',
  operationId: 'SetChatRequireAuthentication',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Require authentication setting updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigChatRequireauthenticationRoute = createRoute({
  method: 'options',
  path: '/admin/config/chat/requireauthentication',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetChatRequireAuthenticationOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigVideoCodecRoute = createRoute({
  method: 'post',
  path: '/admin/config/video/codec',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Set video codec',
  operationId: 'SetVideoCodec',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Video codec updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigVideoCodecRoute = createRoute({
  method: 'options',
  path: '/admin/config/video/codec',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetVideoCodecOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigVideoStreamlatencylevelRoute = createRoute({
  method: 'post',
  path: '/admin/config/video/streamlatencylevel',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Set the number of video segments and duration per segment in a playlist',
  operationId: 'SetStreamLatencyLevel',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Stream latency updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigVideoStreamlatencylevelRoute = createRoute({
  method: 'options',
  path: '/admin/config/video/streamlatencylevel',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetStreamLatencyLevelOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigVideoStreamoutputvariantsRoute = createRoute({
  method: 'post',
  path: '/admin/config/video/streamoutputvariants',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Set an array of video output configurations',
  operationId: 'SetStreamOutputVariants',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.array(StreamOutputVariantSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Stream Output Variants updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigVideoStreamoutputvariantsRoute = createRoute({
  method: 'options',
  path: '/admin/config/video/streamoutputvariants',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetStreamOutputVariantsOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigAppearanceRoute = createRoute({
  method: 'post',
  path: '/admin/config/appearance',
  tags: ['Internal', 'Admin'],
  summary: 'Set style/color/css values',
  operationId: 'SetCustomColorVariableValues',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.record(z.string(), z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Appearance updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigAppearanceRoute = createRoute({
  method: 'options',
  path: '/admin/config/appearance',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetCustomColorVariableValuesOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigLogoRoute = createRoute({
  method: 'post',
  path: '/admin/config/logo',
  tags: ['Internal', 'Admin'],
  summary: 'Update logo',
  operationId: 'SetLogo',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Logo updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigLogoRoute = createRoute({
  method: 'options',
  path: '/admin/config/logo',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetLogoOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFaviconRoute = createRoute({
  method: 'post',
  path: '/admin/config/favicon',
  tags: ['Internal', 'Admin'],
  summary: 'Upload custom favicon',
  operationId: 'SetFavicon',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Favicon updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const deleteAdminConfigFaviconRoute = createRoute({
  method: 'delete',
  path: '/admin/config/favicon',
  tags: ['Internal', 'Admin'],
  summary: 'Reset favicon to default',
  operationId: 'ResetFavicon',
  responses: {
    200: {
      description: 'Favicon reset to default',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFaviconRoute = createRoute({
  method: 'options',
  path: '/admin/config/favicon',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetFaviconOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigTagsRoute = createRoute({
  method: 'post',
  path: '/admin/config/tags',
  tags: ['Internal', 'Admin'],
  summary: 'Update server tags',
  operationId: 'SetTags',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Tags updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigTagsRoute = createRoute({
  method: 'options',
  path: '/admin/config/tags',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetTagsOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFfmpegpathRoute = createRoute({
  method: 'post',
  path: '/admin/config/ffmpegpath',
  tags: ['Internal', 'Admin'],
  summary: 'Update FFMPEG path',
  operationId: 'SetFfmpegPath',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Path updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFfmpegpathRoute = createRoute({
  method: 'options',
  path: '/admin/config/ffmpegpath',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetFfmpegPathOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigWebserverportRoute = createRoute({
  method: 'post',
  path: '/admin/config/webserverport',
  tags: ['Internal', 'Admin'],
  summary: 'Update server port',
  operationId: 'SetWebServerPort',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Port updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigWebserverportRoute = createRoute({
  method: 'options',
  path: '/admin/config/webserverport',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetWebServerPortOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigWebserveripRoute = createRoute({
  method: 'post',
  path: '/admin/config/webserverip',
  tags: ['Internal', 'Admin'],
  summary: 'Update server IP address',
  operationId: 'SetWebServerIP',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'IP Address updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigWebserveripRoute = createRoute({
  method: 'options',
  path: '/admin/config/webserverip',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetWebServerIPOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigRtmpserverportRoute = createRoute({
  method: 'post',
  path: '/admin/config/rtmpserverport',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Update RTMP post',
  operationId: 'SetRTMPServerPort',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'RTMP port updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigRtmpserverportRoute = createRoute({
  method: 'options',
  path: '/admin/config/rtmpserverport',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetRTMPServerPortOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigRtmpserverbindaddressRoute = createRoute({
  method: 'post',
  path: '/admin/config/rtmpserverbindaddress',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Update RTMP server bind address',
  operationId: 'SetRTMPServerBindAddress',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'RTMP server bind address updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigRtmpserverbindaddressRoute = createRoute({
  method: 'options',
  path: '/admin/config/rtmpserverbindaddress',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetRTMPServerBindAddressOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigSockethostoverrideRoute = createRoute({
  method: 'post',
  path: '/admin/config/sockethostoverride',
  tags: ['Internal', 'Admin', 'Chat'],
  summary: 'Update websocket host override',
  operationId: 'SetSocketHostOverride',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Websocket host override updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigSockethostoverrideRoute = createRoute({
  method: 'options',
  path: '/admin/config/sockethostoverride',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SetSocketHostOverrideOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigVideoservingendpointRoute = createRoute({
  method: 'post',
  path: '/admin/config/videoservingendpoint',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Update custom video serving endpoint',
  operationId: 'SetVideoServingEndpoint',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Video Serving Endpoint updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigVideoservingendpointRoute = createRoute({
  method: 'options',
  path: '/admin/config/videoservingendpoint',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetVideoServingEndpointOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigNsfwRoute = createRoute({
  method: 'post',
  path: '/admin/config/nsfw',
  tags: ['Internal', 'Admin'],
  summary: 'Update NSFW marking',
  operationId: 'SetNSFW',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'NSFW status updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigNsfwRoute = createRoute({
  method: 'options',
  path: '/admin/config/nsfw',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetNSFWOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigAutoplayRoute = createRoute({
  method: 'post',
  path: '/admin/config/autoplay',
  tags: ['Internal', 'Admin'],
  summary: 'Update autoplay behavior',
  operationId: 'SetAutoplay',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Autoplay setting updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigAutoplayRoute = createRoute({
  method: 'options',
  path: '/admin/config/autoplay',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetAutoplayOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigDirectoryenabledRoute = createRoute({
  method: 'post',
  path: '/admin/config/directoryenabled',
  tags: ['Internal', 'Admin'],
  summary: 'Update directory enabled',
  operationId: 'SetDirectoryEnabled',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Directory Enabled updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigDirectoryenabledRoute = createRoute({
  method: 'options',
  path: '/admin/config/directoryenabled',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetDirectoryEnabledOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigSocialhandlesRoute = createRoute({
  method: 'post',
  path: '/admin/config/socialhandles',
  tags: ['Internal', 'Admin'],
  summary: 'Update social handles',
  operationId: 'SetSocialHandles',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.array(SocialHandleSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Social handles updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigSocialhandlesRoute = createRoute({
  method: 'options',
  path: '/admin/config/socialhandles',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetSocialHandlesOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigS3Route = createRoute({
  method: 'post',
  path: '/admin/config/s3',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Update S3 configuration',
  operationId: 'SetS3Configuration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ value: S3InfoSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Directory Enabled updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigS3Route = createRoute({
  method: 'options',
  path: '/admin/config/s3',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'SetS3ConfigurationOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigServerurlRoute = createRoute({
  method: 'post',
  path: '/admin/config/serverurl',
  tags: ['Internal', 'Admin'],
  summary: 'Update server url',
  operationId: 'SetServerURL',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Server URL updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigServerurlRoute = createRoute({
  method: 'options',
  path: '/admin/config/serverurl',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetServerURLOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigExternalactionsRoute = createRoute({
  method: 'post',
  path: '/admin/config/externalactions',
  tags: ['Internal', 'Admin'],
  summary: 'Update external action links',
  operationId: 'SetExternalActions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: z.array(ExternalActionSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'External Action Links updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigExternalactionsRoute = createRoute({
  method: 'options',
  path: '/admin/config/externalactions',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetExternalActionsOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigCustomstylesRoute = createRoute({
  method: 'post',
  path: '/admin/config/customstyles',
  tags: ['Internal', 'Admin'],
  summary: 'Update custom styles',
  operationId: 'SetCustomStyles',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Custom styles updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigCustomstylesRoute = createRoute({
  method: 'options',
  path: '/admin/config/customstyles',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetCustomStylesOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigCustomjavascriptRoute = createRoute({
  method: 'post',
  path: '/admin/config/customjavascript',
  tags: ['Internal', 'Admin'],
  summary: 'Update custom JavaScript',
  operationId: 'SetCustomJavascript',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Custom JavaScript updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigCustomjavascriptRoute = createRoute({
  method: 'options',
  path: '/admin/config/customjavascript',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetCustomJavascriptOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigHideviewercountRoute = createRoute({
  method: 'post',
  path: '/admin/config/hideviewercount',
  tags: ['Internal', 'Admin'],
  summary: 'Update hide viewer count',
  operationId: 'SetHideViewerCount',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Hide viewer count updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigHideviewercountRoute = createRoute({
  method: 'options',
  path: '/admin/config/hideviewercount',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetHideViewerCountOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigDisablesearchindexingRoute = createRoute({
  method: 'post',
  path: '/admin/config/disablesearchindexing',
  tags: ['Internal', 'Admin'],
  summary: 'Update search indexing',
  operationId: 'SetDisableSearchIndexing',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Search Indexing updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigDisablesearchindexingRoute = createRoute({
  method: 'options',
  path: '/admin/config/disablesearchindexing',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'SetDisableSearchIndexingOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationEnableRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/enable',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Enable/disable federation features',
  operationId: 'SetFederationEnabled',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation features enabled/disabled',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationEnableRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/enable',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationEnabledOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationPrivateRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/private',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set if federation activities are private',
  operationId: 'SetFederationActivityPrivate',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Private status set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationPrivateRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/private',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationActivityPrivateOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationShowengagementRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/showengagement',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set if fediverse engagement appears in chat',
  operationId: 'SetFederationShowEngagement',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation engagement set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationShowengagementRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/showengagement',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationShowEngagementOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationEnablequotesRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/enablequotes',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set if posts from this server can be quoted',
  operationId: 'SetFederationEnableQuotes',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation quotes set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationEnablequotesRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/enablequotes',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationEnableQuotesOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationHidefollowersRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/hidefollowers',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set if the public followers tab is hidden on the web UI',
  operationId: 'SetFederationHideFollowersTab',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation hide followers tab set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationHidefollowersRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/hidefollowers',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationHideFollowersTabOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationUsernameRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/username',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set local federated username',
  operationId: 'SetFederationUsername',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation username set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationUsernameRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/username',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationUsernameOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationLivemessageRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/livemessage',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set federated go live message',
  operationId: 'SetFederationGoLiveMessage',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation username set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationLivemessageRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/livemessage',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationGoLiveMessageOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigFederationBlockdomainsRoute = createRoute({
  method: 'post',
  path: '/admin/config/federation/blockdomains',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Set Federation blocked domains',
  operationId: 'SetFederationBlockDomains',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Federation blocked domains set',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigFederationBlockdomainsRoute = createRoute({
  method: 'options',
  path: '/admin/config/federation/blockdomains',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SetFederationBlockDomainsOptions',
  responses: { 204: _204Response },
})

export const getFederationServersRoute = createRoute({
  method: 'get',
  path: '/federation/servers',
  tags: ['Internal', 'Federation'],
  summary: 'Get list of federated servers',
  operationId: 'GetFederatedServers',
  responses: {
    200: {
      description: 'List of federated servers',
      content: {
        'application/json': {
          schema: z
            .object({ servers: z.array(PublicFederatedServerSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    default: DefaultResponse,
  },
})

export const getAdminFederationServersRoute = createRoute({
  method: 'get',
  path: '/admin/federation/servers',
  tags: ['Internal', 'Admin', 'Federation'],
  summary: 'Get all federated servers (admin), including pending requests',
  operationId: 'GetAdminFederatedServers',
  responses: {
    200: {
      description:
        'List of all federated servers, including those whose follow is still pending approval',
      content: {
        'application/json': {
          schema: z
            .object({ servers: z.array(FederatedServerSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const postAdminFederationServersRoute = createRoute({
  method: 'post',
  path: '/admin/federation/servers',
  tags: ['Internal', 'Admin', 'Federation'],
  summary: 'Add a federated server to follow',
  operationId: 'AddFederatedServer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.url().openapi({ description: 'URL of the federated Owncast server' }),
            })
            .openapi({ required: ['url'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Federated server added successfully',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFederationServersRoute = createRoute({
  method: 'options',
  path: '/admin/federation/servers',
  tags: ['Objects', 'Internal', 'Admin', 'Federation'],
  operationId: 'AddFederatedServerOptions',
  responses: { 204: _204Response },
})

export const deleteAdminFederationServersIdRoute = createRoute({
  method: 'delete',
  path: '/admin/federation/servers/{id}',
  tags: ['Internal', 'Admin', 'Federation'],
  summary: 'Remove a federated server',
  operationId: 'RemoveFederatedServer',
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the federated server to remove',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Federated server removed successfully',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    404: { description: 'Federated server not found' },
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFederationServersIdRoute = createRoute({
  method: 'options',
  path: '/admin/federation/servers/{id}',
  tags: ['Objects', 'Internal', 'Admin', 'Federation'],
  operationId: 'RemoveFederatedServerOptions',
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the federated server to remove',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: _204Response },
})

export const putAdminFederationServersIdReorderRoute = createRoute({
  method: 'put',
  path: '/admin/federation/servers/{id}/reorder',
  tags: ['Internal', 'Admin', 'Federation'],
  summary: 'Move a federated server up or down in the priority order',
  operationId: 'ReorderFederatedServer',
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the federated server to reorder',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              direction: z
                .enum(['up', 'down'])
                .openapi({
                  description: 'Move the server up (higher priority) or down (lower priority)',
                }),
            })
            .openapi({ required: ['direction'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Federated server reordered successfully',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFederationServersIdReorderRoute = createRoute({
  method: 'options',
  path: '/admin/federation/servers/{id}/reorder',
  tags: ['Objects', 'Internal', 'Admin', 'Federation'],
  operationId: 'ReorderFederatedServerOptions',
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
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the federated server to reorder',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 204: _204Response },
})

export const getAdminFederationFeatureRequestsRoute = createRoute({
  method: 'get',
  path: '/admin/federation/feature-requests',
  tags: ['Internal', 'Admin', 'Federation'],
  summary: "Get pending requests from other servers to feature this server's stream",
  operationId: 'GetFeatureRequests',
  responses: {
    200: {
      description: 'List of pending feature requests',
      content: {
        'application/json': {
          schema: z
            .object({ requests: z.array(FollowerSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const postAdminConfigNotificationsDiscordRoute = createRoute({
  method: 'post',
  path: '/admin/config/notifications/discord',
  tags: ['Internal', 'Admin', 'Notifications'],
  summary: 'Configure Discord notifications',
  operationId: 'SetDiscordNotificationConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: DiscordNotificationConfigurationSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Discord notification configuration updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigNotificationsDiscordRoute = createRoute({
  method: 'options',
  path: '/admin/config/notifications/discord',
  tags: ['Objects', 'Internal', 'Admin', 'Notifications'],
  operationId: 'SetDiscordNotificationConfigurationOptions',
  responses: { 204: _204Response },
})

export const postAdminConfigNotificationsBrowserRoute = createRoute({
  method: 'post',
  path: '/admin/config/notifications/browser',
  tags: ['Internal', 'Admin', 'Notifications'],
  summary: 'Configure Browser notifications',
  operationId: 'SetBrowserNotificationConfiguration',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ value: BrowserNotificationConfigurationSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Browser notification configuration updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminConfigNotificationsBrowserRoute = createRoute({
  method: 'options',
  path: '/admin/config/notifications/browser',
  tags: ['Objects', 'Internal', 'Admin', 'Notifications'],
  operationId: 'SetBrowserNotificationConfigurationOptions',
  responses: { 204: _204Response },
})

export const getAdminWebhooksRoute = createRoute({
  method: 'get',
  path: '/admin/webhooks',
  tags: ['Internal', 'Admin', 'Notifications'],
  summary: 'Get all the webhooks',
  operationId: 'GetWebhooks',
  responses: {
    200: {
      description: 'All webhooks',
      content: { 'application/json': { schema: z.array(WebhookSchema) } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminWebhooksRoute = createRoute({
  method: 'options',
  path: '/admin/webhooks',
  tags: ['Objects', 'Internal', 'Admin', 'Notifications'],
  operationId: 'GetWebhooksOptions',
  responses: { 204: _204Response },
})

export const postAdminWebhooksDeleteRoute = createRoute({
  method: 'post',
  path: '/admin/webhooks/delete',
  tags: ['Internal', 'Admin', 'Notifications'],
  summary: 'Delete a single webhook',
  operationId: 'DeleteWebhook',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ id: z.int().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Webhook successfully deleted',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminWebhooksDeleteRoute = createRoute({
  method: 'options',
  path: '/admin/webhooks/delete',
  tags: ['Objects', 'Internal', 'Admin', 'Notifications'],
  operationId: 'DeleteWebhookOptions',
  responses: { 204: _204Response },
})

export const postAdminWebhooksCreateRoute = createRoute({
  method: 'post',
  path: '/admin/webhooks/create',
  tags: ['Internal', 'Admin', 'Notifications'],
  summary: 'Create a single webhook',
  operationId: 'CreateWebhook',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              url: z.string().exactOptional(),
              events: z.array(WebhookEventTypeSchema).exactOptional(),
              secret: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The new webhook',
      content: { 'application/json': { schema: WebhookSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminWebhooksCreateRoute = createRoute({
  method: 'options',
  path: '/admin/webhooks/create',
  tags: ['Objects', 'Internal', 'Admin', 'Notifications'],
  operationId: 'CreateWebhookOptions',
  responses: { 204: _204Response },
})

export const getAdminAccesstokensRoute = createRoute({
  method: 'get',
  path: '/admin/accesstokens',
  tags: ['Internal', 'Admin'],
  summary: 'Get all access tokens',
  operationId: 'GetExternalAPIUsers',
  responses: {
    200: {
      description: 'List of external API users',
      content: { 'application/json': { schema: z.array(ExternalAPIUserSchema) } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminAccesstokensRoute = createRoute({
  method: 'options',
  path: '/admin/accesstokens',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'GetExternalAPIUsersOptions',
  responses: { 204: _204Response },
})

export const postAdminAccesstokensDeleteRoute = createRoute({
  method: 'post',
  path: '/admin/accesstokens/delete',
  tags: ['Internal', 'Admin'],
  summary: 'Delete a single external API user',
  operationId: 'DeleteExternalAPIUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'External API user successfully deleted',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminAccesstokensDeleteRoute = createRoute({
  method: 'options',
  path: '/admin/accesstokens/delete',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'DeleteExternalAPIUserOptions',
  responses: { 204: _204Response },
})

export const postAdminAccesstokensCreateRoute = createRoute({
  method: 'post',
  path: '/admin/accesstokens/create',
  tags: ['Internal', 'Admin'],
  summary: 'Create a single access token',
  operationId: 'CreateExternalAPIUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              scopes: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The new external API user',
      content: { 'application/json': { schema: ExternalAPIUserSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminAccesstokensCreateRoute = createRoute({
  method: 'options',
  path: '/admin/accesstokens/create',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'CreateExternalAPIUserOptions',
  responses: { 204: _204Response },
})

export const postAdminYpResetRoute = createRoute({
  method: 'post',
  path: '/admin/yp/reset',
  tags: ['Internal', 'Admin'],
  summary: 'Reset YP configuration',
  operationId: 'ResetYPRegistration',
  responses: {
    200: {
      description: 'YP Registration has been reset',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminYpResetRoute = createRoute({
  method: 'options',
  path: '/admin/yp/reset',
  tags: ['Objects', 'Internal', 'Admin'],
  operationId: 'ResetYPRegistrationOptions',
  responses: { 204: _204Response },
})

export const getAdminMetricsVideoRoute = createRoute({
  method: 'get',
  path: '/admin/metrics/video',
  tags: ['Internal', 'Admin', 'Video'],
  summary: 'Get video playback metrics',
  operationId: 'GetVideoPlaybackMetrics',
  responses: {
    200: {
      description: 'Video playback metrics',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(TimestampedValueSchema).exactOptional(),
              qualityVariantChanges: z.array(TimestampedValueSchema).exactOptional(),
              highestLatency: z.array(TimestampedValueSchema).exactOptional(),
              medianLatency: z.array(TimestampedValueSchema).exactOptional(),
              lowestLatency: z.array(TimestampedValueSchema).exactOptional(),
              medianSegmentDownloadDuration: z.array(TimestampedValueSchema).exactOptional(),
              maximumSegmentDownloadDuration: z.array(TimestampedValueSchema).exactOptional(),
              minimumSegmentDownloadDuration: z.array(TimestampedValueSchema).exactOptional(),
              minPlayerBitrate: z.array(TimestampedValueSchema).exactOptional(),
              medianPlayerBitrate: z.array(TimestampedValueSchema).exactOptional(),
              maxPlayerBitrate: z.array(TimestampedValueSchema).exactOptional(),
              availableBitrates: z.array(z.int()).exactOptional(),
              segmentLength: z.int().exactOptional(),
              representation: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminMetricsVideoRoute = createRoute({
  method: 'options',
  path: '/admin/metrics/video',
  tags: ['Objects', 'Internal', 'Admin', 'Video'],
  operationId: 'GetVideoPlaybackMetricsOptions',
  responses: { 204: _204Response },
})

export const postAdminFederationSendRoute = createRoute({
  method: 'post',
  path: '/admin/federation/send',
  tags: ['Internal', 'Admin', 'Social'],
  summary: "Send a public message to the Fediverse from the server's user",
  operationId: 'SendFederatedMessage',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Message sent',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFederationSendRoute = createRoute({
  method: 'options',
  path: '/admin/federation/send',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'SendFederatedMessageOptions',
  responses: { 204: _204Response },
})

export const getAdminFederationActionsRoute = createRoute({
  method: 'get',
  path: '/admin/federation/actions',
  tags: ['Internal', 'Admin', 'Social'],
  summary: 'Get a paginated list of federated activities',
  operationId: 'GetFederatedActions',
  request: { query: z.object({ offset: OffsetParamsSchema, limit: LimitParamsSchema }) },
  responses: {
    200: {
      description: 'A paginated list of federated activities',
      content: { 'application/json': { schema: PaginatedFederatedActivitySchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BasicAuth: [] }],
})

export const optionsAdminFederationActionsRoute = createRoute({
  method: 'options',
  path: '/admin/federation/actions',
  tags: ['Objects', 'Internal', 'Admin', 'Social'],
  operationId: 'GetFederatedActionsOptions',
  responses: { 204: _204Response },
})

export const postIntegrationsChatSystemRoute = createRoute({
  method: 'post',
  path: '/integrations/chat/system',
  tags: ['External', 'Chat'],
  summary: 'Send a system message to the chat',
  operationId: 'SendSystemMessage',
  request: {
    body: {
      description: 'The content of the system message',
      content: { 'application/json': { schema: MessageEventSchema } },
    },
  },
  responses: {
    200: {
      description: 'Message sent successfully',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
      headers: z.object({ 'Access-Control-Allow-Origin': AccessControlAllowOriginHeaderSchema }),
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatSystemRoute = createRoute({
  method: 'options',
  path: '/integrations/chat/system',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SendSystemMessageOptions',
  responses: { 204: _204Response },
})

export const postIntegrationsChatSystemClientClientIdRoute = createRoute({
  method: 'post',
  path: '/integrations/chat/system/client/{clientId}',
  tags: ['External', 'Chat'],
  summary: 'Send a system message to a single client',
  operationId: 'SendSystemMessageToConnectedClient',
  request: {
    params: z.object({
      clientId: z
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
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'integer' },
            description: 'The ID of the specified client',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SystemMessageSchema } } },
  },
  responses: { 400: _400Response, 401: _401Response, 500: _500Response, default: DefaultResponse },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatSystemClientClientIdRoute = createRoute({
  method: 'options',
  path: '/integrations/chat/system/client/{clientId}',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SendSystemMessageToConnectedClientOptions',
  request: {
    params: z.object({
      clientId: z
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
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'integer' },
            description: 'The ID of the specified client',
          },
        }),
    }),
  },
  responses: { 204: _204Response },
})

export const postIntegrationsChatUserRoute = createRoute({
  method: 'post',
  path: '/integrations/chat/user',
  tags: ['External', 'Chat'],
  summary: 'Send a user message to chat',
  operationId: 'SendUserMessage',
  responses: { 400: _400Response },
  deprecated: true,
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatUserRoute = createRoute({
  method: 'options',
  path: '/integrations/chat/user',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SendUserMessageOptions',
  responses: { 204: _204Response },
  deprecated: true,
})

export const postIntegrationsChatSendRoute = createRoute({
  method: 'post',
  path: '/integrations/chat/send',
  tags: ['External', 'Chat'],
  summary:
    'Send a message to chat as a specific 3rd party bot/integration based on its access token',
  operationId: 'SendIntegrationChatMessage',
  request: { body: { content: { 'application/json': { schema: MessageEventSchema } } } },
  responses: {
    200: {
      description: 'Message sent successfully',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatSendRoute = createRoute({
  method: 'options',
  path: '/integrations/chat/send',
  tags: ['Objects', 'External', 'Admin', 'Chat'],
  operationId: 'SendIntegrationChatMessageOptions',
  responses: { 204: _204Response },
})

export const postIntegrationsChatActionRoute = createRoute({
  method: 'post',
  path: '/integrations/chat/action',
  tags: ['External', 'Chat'],
  summary: 'Send a user action to chat',
  operationId: 'SendChatAction',
  request: { body: { content: { 'application/json': { schema: MessageEventSchema } } } },
  responses: {
    200: {
      description: 'Action sent successfully',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatActionRoute = createRoute({
  method: 'options',
  path: '/integrations/chat/action',
  tags: ['Objects', 'Internal', 'Admin', 'Chat'],
  operationId: 'SendChatActionOptions',
  responses: { 204: _204Response },
})

export const postIntegrationsChatMessagevisibilityRoute = createRoute({
  method: 'post',
  path: '/integrations/chat/messagevisibility',
  tags: ['External', 'Chat'],
  summary: 'Hide chat message',
  operationId: 'ExternalUpdateMessageVisibility',
  request: { body: { content: { 'application/json': { schema: MessageVisibilityUpdateSchema } } } },
  responses: {
    200: {
      description: 'Messages updated',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatMessagevisibilityRoute = createRoute({
  method: 'options',
  path: '/integrations/chat/messagevisibility',
  tags: ['Objects', 'External', 'Admin', 'Chat'],
  operationId: 'ExternalUpdateMessageVisibilityOptions',
  responses: { 204: _204Response },
})

export const getIntegrationsStatusRoute = createRoute({
  method: 'get',
  path: '/integrations/status',
  tags: ['External'],
  summary: "Get the server's status",
  operationId: 'ExternalGetStatus',
  responses: {
    200: { description: 'Status', content: { 'application/json': { schema: StatusSchema } } },
    401: _401BasicAuthResponse,
    404: _404Response,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const postIntegrationsStreamtitleRoute = createRoute({
  method: 'post',
  path: '/integrations/streamtitle',
  tags: ['External'],
  summary: 'Stream title',
  operationId: 'ExternalSetStreamTitle',
  request: { body: AdminConfigValueRequestBody },
  responses: {
    200: {
      description: 'Stream title has been changed',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsStreamtitleRoute = createRoute({
  method: 'options',
  path: '/integrations/streamtitle',
  tags: ['Objects', 'External', 'Admin'],
  operationId: 'ExternalSetStreamTitleOptions',
  responses: { 204: _204Response },
})

export const getIntegrationsChatRoute = createRoute({
  method: 'get',
  path: '/integrations/chat',
  tags: ['External', 'Chat'],
  summary: 'Get chat history',
  operationId: 'ExternalGetChatMessages',
  responses: {
    200: {
      description: 'List of chat messages',
      content: { 'application/json': { schema: ChatMessagesSchema } },
    },
    401: _401Response,
    501: _501Response,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsChatRoute = createRoute({
  method: 'options',
  path: '/integrations/chat',
  tags: ['Objects', 'External', 'Admin', 'Chat'],
  operationId: 'ExternalGetChatMessagesOptions',
  responses: { 204: _204Response },
})

export const getIntegrationsClientsRoute = createRoute({
  method: 'get',
  path: '/integrations/clients',
  tags: ['External', 'Chat'],
  summary: 'Connected clients',
  operationId: 'ExternalGetConnectedChatClients',
  responses: {
    200: {
      description: 'List of chat clients',
      content: { 'application/json': { schema: ChatClientsSchema } },
    },
    400: _400Response,
    401: _401BasicAuthResponse,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const optionsIntegrationsClientsRoute = createRoute({
  method: 'options',
  path: '/integrations/clients',
  tags: ['Objects', 'External', 'Admin', 'Chat'],
  operationId: 'ExternalGetConnectedChatClientsOptions',
  responses: { 204: _204Response },
})

export const getIntegrationsModerationChatUserUserIdRoute = createRoute({
  method: 'get',
  path: '/integrations/moderation/chat/user/{userId}',
  tags: ['External', 'Chat'],
  summary: "Get a user's details",
  operationId: 'ExternalGetUserDetails',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            schema: { type: 'string' },
            description: 'The ID of the user to find',
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User information',
      content: { 'application/json': { schema: ModerationUserDetailsSchema } },
    },
    401: _401BasicAuthResponse,
    404: _404Response,
    default: DefaultResponse,
  },
  security: [{ BearerAuth: [] }],
})

export const getModerationChatUserUserIdRoute = createRoute({
  method: 'get',
  path: '/moderation/chat/user/{userId}',
  tags: ['Chat'],
  summary: "Get a user's details",
  operationId: 'GetUserDetails',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            schema: { type: 'string' },
            description: 'The ID of the user to find',
            required: true,
          },
        }),
    }),
    query: z.object({ accessToken: AccessTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'User information',
      content: { 'application/json': { schema: ModerationUserDetailsSchema } },
    },
    401: _401Response,
    404: _404Response,
    default: DefaultResponse,
  },
})

export const postAuthIndieauthRoute = createRoute({
  method: 'post',
  path: '/auth/indieauth',
  tags: ['Internal', 'Auth', 'Chat'],
  summary: 'Begins auth flow',
  operationId: 'StartIndieAuthFlow',
  request: {
    query: z.object({ accessToken: AccessTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ authHost: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Authentication redirect',
      content: {
        'application/json': {
          schema: z.object({ redirect: z.url().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    default: DefaultResponse,
  },
})

export const getAuthIndieauthCallbackRoute = createRoute({
  method: 'get',
  path: '/auth/indieauth/callback',
  tags: ['Internal', 'Auth', 'Chat'],
  summary: 'Handle the redirect from an IndieAuth server to continue the auth flow',
  operationId: 'HandleIndieAuthRedirect',
  request: { query: z.object({ state: IndieAuthStateParamsSchema }) },
  responses: { 307: { description: 'Redirected to home page' }, 400: _400Response },
})

export const getAuthProviderIndieauthRoute = createRoute({
  method: 'get',
  path: '/auth/provider/indieauth',
  tags: ['Internal', 'Auth', 'Chat'],
  summary: 'Handles the IndieAuth auth endpoint',
  operationId: 'HandleIndieAuthEndpointGet',
  request: {
    query: z.object({
      client_id: IndieAuthClientIdParamsSchema,
      redirect_uri: IndieAuthRedirectURIParamsSchema,
      code_challenge: IndieAuthCodeChallengeParamsSchema,
      state: IndieAuthStateParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'IndieAuth flow concluded',
      content: { 'application/json': { schema: IndieAuthResponseSchema } },
    },
    307: { description: 'Redirected to redirect URI' },
    400: _400Response,
    500: _500Response,
  },
  security: [{ BasicAuth: [] }],
})

export const postAuthProviderIndieauthRoute = createRoute({
  method: 'post',
  path: '/auth/provider/indieauth',
  tags: ['Internal', 'Auth', 'Chat'],
  summary: 'Handles IndieAuth from form submission',
  operationId: 'HandleIndieAuthEndpointPost',
  request: { body: IndieAuthEndpointFormRequestBody },
  responses: {
    200: {
      description: 'IndieAuth flow concluded',
      content: {
        'application/json': {
          schema: z.xor([IndieAuthResponseSchema, IndieAuthServerProfileResponseSchema]),
        },
      },
    },
    400: _400Response,
  },
})

export const postAuthFediverseRoute = createRoute({
  method: 'post',
  path: '/auth/fediverse',
  tags: ['Internal', 'Auth', 'Chat'],
  summary: 'Register a Fediverse OTP request',
  operationId: 'RegisterFediverseOTPRequest',
  request: {
    query: z.object({ accessToken: AccessTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ account: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OTP sent',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
    401: _401Response,
  },
})

export const postAuthFediverseVerifyRoute = createRoute({
  method: 'post',
  path: '/auth/fediverse/verify',
  tags: ['Internal', 'Auth', 'Chat'],
  summary: 'Verify Fediverse OTP code',
  operationId: 'VerifyFediverseOTPRequest',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ code: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OTP Verified',
      content: { 'application/json': { schema: BaseAPIResponseSchema } },
    },
    400: _400Response,
  },
})
