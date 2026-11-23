type PredefinedAbuseReasons = (
  | 'violentOrAbusive'
  | 'hatefulOrAbusive'
  | 'spamOrMisleading'
  | 'privacy'
  | 'rights'
  | 'serverRules'
  | 'thumbnails'
  | 'captions'
)[]
type AbuseStateSet = 1 | 2 | 3
type Id = number
type AbusePredefinedReasons = (
  | 'violentOrAbusive'
  | 'hatefulOrAbusive'
  | 'spamOrMisleading'
  | 'privacy'
  | 'rights'
  | 'serverRules'
  | 'thumbnails'
  | 'captions'
)[]
type Account = {
  createdAt?: string | undefined
  followersCount?: number | undefined
  followingCount?: number | undefined
  host?: string | undefined
  hostRedundancyAllowed?: boolean | undefined
  id?: Id | undefined
  name?: {} | undefined
  updatedAt?: string | undefined
  url?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  userId?: {} | undefined
}
type AbuseStateConstant = { id?: AbuseStateSet | undefined; label?: string | undefined }
type VideoId = {}
type VideoName = string
type VideoUuid = {}
type VideoInfo = {
  id?: VideoId | undefined
  name?: VideoName | undefined
  uuid?: VideoUuid | undefined
}
type Abuse = {
  createdAt?: string | undefined
  id?: Id | undefined
  moderationComment?: string | undefined
  predefinedReasons?: AbusePredefinedReasons | undefined
  reason?: string | undefined
  reporterAccount?: Account | undefined
  state?: AbuseStateConstant | undefined
  video?: VideoInfo | undefined
}
type ActorImage = {
  createdAt?: string | undefined
  path?: string | undefined
  updatedAt?: string | undefined
  width?: number | undefined
}
type AccountSummary = {
  avatars?: ActorImage[] | undefined
  displayName?: string | undefined
  host?: string | undefined
  id?: number | undefined
  name?: string | undefined
  url?: string | undefined
}
type AbuseMessage = {
  account?: AccountSummary | undefined
  byModerator?: boolean | undefined
  createdAt?: string | undefined
  id?: Id | undefined
  message?: string | undefined
}
type Actor = {
  createdAt?: string | undefined
  followersCount?: number | undefined
  followingCount?: number | undefined
  host?: string | undefined
  hostRedundancyAllowed?: boolean | undefined
  id?: Id | undefined
  name?: {} | undefined
  updatedAt?: string | undefined
  url?: string | undefined
}
type Follow = {
  createdAt?: string | undefined
  follower?: Actor | undefined
  following?: Actor | undefined
  id?: Id | undefined
  score?: number | undefined
  state?: 'pending' | 'accepted' | undefined
  updatedAt?: string | undefined
}
type VideoCategorySet = number
type VideoChannelSummary = {
  avatars?: ActorImage[] | undefined
  displayName?: string | undefined
  host?: string | undefined
  id?: Id | undefined
  name?: string | undefined
  url?: string | undefined
}
type VideoLanguageSet = string
type VideoLicenceSet = number
type VideoPrivacySet = 1 | 2 | 3 | 4
type VideoShortUUID = {}
type Video = {
  account?: AccountSummary | undefined
  blacklisted?: (boolean | null) | undefined
  blacklistedReason?: (string | null) | undefined
  category?: { id?: VideoCategorySet | undefined; label?: string | undefined } | undefined
  channel?: VideoChannelSummary | undefined
  createdAt?: string | undefined
  description?: string | undefined
  dislikes?: number | undefined
  duration?: number | undefined
  embedPath?: string | undefined
  id?: VideoId | undefined
  isLive?: boolean | undefined
  isLocal?: boolean | undefined
  language?: { id?: VideoLanguageSet | undefined; label?: string | undefined } | undefined
  licence?: { id?: VideoLicenceSet | undefined; label?: string | undefined } | undefined
  likes?: number | undefined
  name?: VideoName | undefined
  nsfw?: boolean | undefined
  originallyPublishedAt?: string | undefined
  previewPath?: string | undefined
  privacy?: { id?: VideoPrivacySet | undefined; label?: string | undefined } | undefined
  publishedAt?: string | undefined
  scheduledUpdate?: { privacy?: VideoPrivacySet | undefined; updateAt: string } | undefined
  shortUUID?: VideoShortUUID | undefined
  state?:
    | { id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined; label?: string | undefined }
    | undefined
  thumbnailPath?: string | undefined
  updatedAt?: string | undefined
  userHistory?: ({ currentTime?: number | undefined } | null) | undefined
  uuid?: VideoUuid | undefined
  views?: number | undefined
  waitTranscoding?: (boolean | null) | undefined
}
type VideoRating = { rating: 'like' | 'dislike' | 'none'; video: Video }
type UUIDv4 = string
type VideoChannel = {
  createdAt?: string | undefined
  followersCount?: number | undefined
  followingCount?: number | undefined
  host?: string | undefined
  hostRedundancyAllowed?: boolean | undefined
  id?: Id | undefined
  name?: {} | undefined
  updatedAt?: string | undefined
  url?: string | undefined
  banners?: ActorImage[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  isLocal?: boolean | undefined
  ownerAccount?: ({ id?: number | undefined; uuid?: UUIDv4 | undefined } | null) | undefined
  support?: string | undefined
}
type VideoChannelSyncList = {
  data?:
    | {
        channel?: VideoChannel | undefined
        createdAt?: string | undefined
        externalChannelUrl?: string | undefined
        id?: Id | undefined
        lastSyncAt?: (string | null) | undefined
        state?: { id?: number | undefined; label?: string | undefined } | undefined
      }[]
    | undefined
  total?: number | undefined
}
type VideoChannelList = {
  data?:
    | {
        createdAt?: string | undefined
        followersCount?: number | undefined
        followingCount?: number | undefined
        host?: string | undefined
        hostRedundancyAllowed?: boolean | undefined
        id?: Id | undefined
        name?: {} | undefined
        updatedAt?: string | undefined
        url?: string | undefined
        banners?: ActorImage[] | undefined
        description?: string | undefined
        displayName?: string | undefined
        isLocal?: boolean | undefined
        ownerAccount?: ({ id?: number | undefined; uuid?: UUIDv4 | undefined } | null) | undefined
        support?: string | undefined
      }[]
    | undefined
  total?: number | undefined
}
type VideoPlaylistTypeSet = 1 | 2
type VideoPlaylistPrivacySet = 1 | 2 | 3
type VideoPlaylistPrivacyConstant = {
  id?: VideoPlaylistPrivacySet | undefined
  label?: string | undefined
}
type VideoPlaylistShortUUID = {}
type VideoPlaylistTypeConstant = {
  id?: VideoPlaylistTypeSet | undefined
  label?: string | undefined
}
type VideoPlaylist = {
  createdAt?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  id?: Id | undefined
  isLocal?: boolean | undefined
  ownerAccount?: AccountSummary | undefined
  privacy?: VideoPlaylistPrivacyConstant | undefined
  shortUUID?: VideoPlaylistShortUUID | undefined
  thumbnailPath?: string | undefined
  type?: VideoPlaylistTypeConstant | undefined
  updatedAt?: string | undefined
  uuid?: UUIDv4 | undefined
  videoChannel?: VideoChannelSummary | undefined
  videoLength?: number | undefined
}
type VideoListResponse = { data?: Video[] | undefined; total?: number | undefined }
type BlockStatus = {
  accounts?:
    | {
        [x: string]: { blockedByServer?: boolean | undefined; blockedByUser?: boolean | undefined }
      }
    | undefined
  hosts?:
    | {
        [x: string]: { blockedByServer?: boolean | undefined; blockedByUser?: boolean | undefined }
      }
    | undefined
}
type VideoResolutionSet = number
type ServerConfig = {
  autoBlacklist?:
    | { videos?: { ofUsers?: { enabled?: boolean | undefined } | undefined } | undefined }
    | undefined
  avatar?:
    | {
        extensions?: string[] | undefined
        file?: { size?: { max?: number | undefined } | undefined } | undefined
      }
    | undefined
  contactForm?: { enabled?: boolean | undefined } | undefined
  email?: { enabled?: boolean | undefined } | undefined
  followings?:
    | { instance?: { autoFollowIndex?: { indexUrl?: string | undefined } | undefined } | undefined }
    | undefined
  homepage?: { enabled?: boolean | undefined } | undefined
  import?:
    | {
        videoChannelSynchronization?: { enabled?: boolean | undefined } | undefined
        videos?:
          | {
              http?: { enabled?: boolean | undefined } | undefined
              torrent?: { enabled?: boolean | undefined } | undefined
            }
          | undefined
      }
    | undefined
  instance?:
    | {
        customizations?: { css?: string | undefined; javascript?: string | undefined } | undefined
        defaultClientRoute?: string | undefined
        defaultNSFWPolicy?: string | undefined
        isNSFW?: boolean | undefined
        name?: string | undefined
        shortDescription?: string | undefined
      }
    | undefined
  plugin?: { registered?: string[] | undefined } | undefined
  search?:
    | { remoteUri?: { anonymous?: boolean | undefined; users?: boolean | undefined } | undefined }
    | undefined
  serverCommit?: string | undefined
  serverVersion?: string | undefined
  signup?:
    | {
        allowed?: boolean | undefined
        allowedForCurrentIP?: boolean | undefined
        requiresEmailVerification?: boolean | undefined
      }
    | undefined
  theme?: { registered?: string[] | undefined } | undefined
  tracker?: { enabled?: boolean | undefined } | undefined
  transcoding?:
    | {
        enabledResolutions?: VideoResolutionSet[] | undefined
        hls?: { enabled?: boolean | undefined } | undefined
        webtorrent?: { enabled?: boolean | undefined } | undefined
      }
    | undefined
  trending?: { videos?: { intervalDays?: number | undefined } | undefined } | undefined
  user?: { videoQuota?: number | undefined; videoQuotaDaily?: number | undefined } | undefined
  video?:
    | {
        file?: { extensions?: string[] | undefined } | undefined
        image?:
          | { extensions?: string[] | undefined; size?: { max?: number | undefined } | undefined }
          | undefined
      }
    | undefined
  videoCaption?:
    | {
        file?:
          | { extensions?: string[] | undefined; size?: { max?: number | undefined } | undefined }
          | undefined
      }
    | undefined
}
type ServerConfigAbout = {
  instance?:
    | {
        description?: string | undefined
        name?: string | undefined
        shortDescription?: string | undefined
        terms?: string | undefined
      }
    | undefined
}
type ServerConfigCustom = {
  admin?: { email?: string | undefined } | undefined
  autoBlacklist?:
    | { videos?: { ofUsers?: { enabled?: boolean | undefined } | undefined } | undefined }
    | undefined
  cache?:
    | {
        captions?: { size?: number | undefined } | undefined
        previews?: { size?: number | undefined } | undefined
      }
    | undefined
  contactForm?: { enabled?: boolean | undefined } | undefined
  followers?:
    | {
        instance?:
          | { enabled?: boolean | undefined; manualApproval?: boolean | undefined }
          | undefined
      }
    | undefined
  import?:
    | {
        video_channel_synchronization?: { enabled?: boolean | undefined } | undefined
        videos?:
          | {
              http?: { enabled?: boolean | undefined } | undefined
              torrent?: { enabled?: boolean | undefined } | undefined
            }
          | undefined
      }
    | undefined
  instance?:
    | {
        customizations?: { css?: string | undefined; javascript?: string | undefined } | undefined
        defaultClientRoute?: string | undefined
        defaultNSFWPolicy?: string | undefined
        description?: string | undefined
        isNSFW?: boolean | undefined
        name?: string | undefined
        shortDescription?: string | undefined
        terms?: string | undefined
      }
    | undefined
  services?:
    | { twitter?: { username?: string | undefined; whitelisted?: boolean | undefined } | undefined }
    | undefined
  signup?:
    | {
        enabled?: boolean | undefined
        limit?: number | undefined
        requiresEmailVerification?: boolean | undefined
      }
    | undefined
  theme?: { default?: string | undefined } | undefined
  transcoding?:
    | {
        allowAdditionalExtensions?: boolean | undefined
        allowAudioFiles?: boolean | undefined
        concurrency?: number | undefined
        enabled?: boolean | undefined
        hls?: { enabled?: boolean | undefined } | undefined
        profile?: 'default' | undefined
        resolutions?:
          | {
              '0p'?: boolean | undefined
              '1080p'?: boolean | undefined
              '1440p'?: boolean | undefined
              '144p'?: boolean | undefined
              '2160p'?: boolean | undefined
              '240p'?: boolean | undefined
              '360p'?: boolean | undefined
              '480p'?: boolean | undefined
              '720p'?: boolean | undefined
            }
          | undefined
        threads?: number | undefined
        webtorrent?: { enabled?: boolean | undefined } | undefined
      }
    | undefined
  user?: { videoQuota?: number | undefined; videoQuotaDaily?: number | undefined } | undefined
}
type CustomHomepage = { content?: string | undefined }
type Job = {
  createdAt?: string | undefined
  data?: { [x: string]: unknown } | undefined
  error?: { [x: string]: unknown } | undefined
  finishedOn?: string | undefined
  id?: Id | undefined
  processedOn?: string | undefined
  state?: 'active' | 'completed' | 'failed' | 'waiting' | 'delayed' | undefined
  type?:
    | 'activitypub-http-unicast'
    | 'activitypub-http-broadcast'
    | 'activitypub-http-fetcher'
    | 'activitypub-follow'
    | 'video-file-import'
    | 'video-transcoding'
    | 'email'
    | 'video-import'
    | 'videos-views-stats'
    | 'activitypub-refresher'
    | 'video-redundancy'
    | 'video-channel-import'
    | undefined
}
type ShortUUID = string
type PlaybackMetricCreate = {
  downloadedBytesHTTP: number
  downloadedBytesP2P: number
  errors: number
  fps?: number | undefined
  playerMode: 'p2p-media-loader' | 'webtorrent'
  resolution?: number | undefined
  resolutionChanges: number
  uploadedBytesP2P: number
  videoId: Id | UUIDv4 | ShortUUID
}
type OAuthClient = { client_id?: string | undefined; client_secret?: string | undefined }
type Plugin = {
  createdAt?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  homepage?: string | undefined
  latestVersion?: string | undefined
  name?: string | undefined
  peertubeEngine?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  type?: 1 | 2 | undefined
  uninstalled?: boolean | undefined
  updatedAt?: string | undefined
  version?: string | undefined
}
type PluginResponse = { data?: Plugin[] | undefined; total?: number | undefined }
type SendClientLog = {
  level: 'error' | 'warn'
  message: string
  meta?: string | undefined
  stackTrace?: string | undefined
  url: string
  userAgent?: string | undefined
}
type FileRedundancyInformation = {
  createdAt?: string | undefined
  expiresOn?: string | undefined
  fileUrl?: string | undefined
  id?: Id | undefined
  size?: number | undefined
  strategy?: 'manual' | 'most-views' | 'trending' | 'recently-added' | undefined
  updatedAt?: string | undefined
}
type VideoRedundancy = {
  id?: Id | undefined
  name?: string | undefined
  redundancies?:
    | {
        files?: FileRedundancyInformation[] | undefined
        streamingPlaylists?: FileRedundancyInformation[] | undefined
      }
    | undefined
  url?: string | undefined
  uuid?: UUIDv4 | undefined
}
type ServerStats = {
  activityPubMessagesProcessedPerSecond?: number | undefined
  totalActivityPubMessagesErrors?: number | undefined
  totalActivityPubMessagesProcessed?: number | undefined
  totalActivityPubMessagesSuccesses?: number | undefined
  totalActivityPubMessagesWaiting?: number | undefined
  totalDailyActiveUsers?: number | undefined
  totalInstanceFollowers?: number | undefined
  totalInstanceFollowing?: number | undefined
  totalLocalDailyActiveVideoChannels?: number | undefined
  totalLocalMonthlyActiveVideoChannels?: number | undefined
  totalLocalPlaylists?: number | undefined
  totalLocalVideoChannels?: number | undefined
  totalLocalVideoComments?: number | undefined
  totalLocalVideoFilesSize?: number | undefined
  totalLocalVideoViews?: number | undefined
  totalLocalVideos?: number | undefined
  totalLocalWeeklyActiveVideoChannels?: number | undefined
  totalMonthlyActiveUsers?: number | undefined
  totalUsers?: number | undefined
  totalVideoComments?: number | undefined
  totalVideos?: number | undefined
  totalWeeklyActiveUsers?: number | undefined
  videosRedundancy?:
    | {
        strategy?: string | undefined
        totalSize?: number | undefined
        totalUsed?: number | undefined
        totalVideoFiles?: number | undefined
        totalVideos?: number | undefined
      }[]
    | undefined
}
type UserEmail = string
type UserId = {}
type NSFWPolicy = 'display' | 'blur' | 'do_not_list'
type UserRole = 0 | 1 | 2
type Username = string
type User = {
  account?: Account | undefined
  autoPlayNextVideo?: boolean | undefined
  autoPlayNextVideoPlaylist?: boolean | undefined
  autoPlayVideo?: boolean | undefined
  blocked?: boolean | undefined
  blockedReason?: string | undefined
  createdAt?: string | undefined
  email?: UserEmail | undefined
  emailVerified?: boolean | undefined
  id?: UserId | undefined
  lastLoginDate?: string | undefined
  noAccountSetupWarningModal?: boolean | undefined
  noInstanceConfigWarningModal?: boolean | undefined
  noWelcomeModal?: boolean | undefined
  nsfwPolicy?: NSFWPolicy | undefined
  p2pEnabled?: boolean | undefined
  pluginAuth?: string | undefined
  role?:
    | { id?: UserRole | undefined; label?: 'User' | 'Moderator' | 'Administrator' | undefined }
    | undefined
  theme?: string | undefined
  username?: Username | undefined
  videoChannels?: VideoChannel[] | undefined
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
}
type UserAdminFlags = 0 | 1
type UsernameChannel = string
type Password = string
type AddUser = {
  adminFlags?: UserAdminFlags | undefined
  channelName?: UsernameChannel | undefined
  email: string
  password: Password
  role: UserRole
  username: Username
  videoQuota: number
  videoQuotaDaily: number
}
type AddUserResponse = {
  user?: { account?: { id?: Id | undefined } | undefined; id?: Id | undefined } | undefined
}
type UpdateMe = {
  autoPlayNextVideo?: boolean | undefined
  autoPlayNextVideoPlaylist?: boolean | undefined
  autoPlayVideo?: boolean | undefined
  currentPassword?: Password | undefined
  displayNSFW?: 'true' | 'false' | 'both' | undefined
  displayName?: string | undefined
  email?: {} | undefined
  noAccountSetupWarningModal?: boolean | undefined
  noInstanceConfigWarningModal?: boolean | undefined
  noWelcomeModal?: boolean | undefined
  p2pEnabled?: boolean | undefined
  password?: Password | undefined
  theme?: string | undefined
  videoLanguages?: string[] | undefined
  videosHistoryEnabled?: boolean | undefined
}
type NotificationSettingValue = number
type ActorInfo = {
  avatars?: ActorImage[] | undefined
  displayName?: string | undefined
  host?: string | undefined
  id?: Id | undefined
  name?: string | undefined
}
type VideoImportMagnetUri = string
type Notification = {
  account?:
    | {
        avatars?: ActorImage[] | undefined
        displayName?: string | undefined
        host?: string | undefined
        id?: Id | undefined
        name?: string | undefined
      }
    | undefined
  actorFollow?:
    | ({
        follower?: ActorInfo | undefined
        following?:
          | {
              displayName?: string | undefined
              host?: string | undefined
              name?: string | undefined
              type?: 'account' | 'channel' | 'instance' | undefined
            }
          | undefined
        id?: Id | undefined
        state?: 'pending' | 'accepted' | undefined
      } | null)
    | undefined
  comment?:
    | ({
        account?: ActorInfo | undefined
        id?: Id | undefined
        threadId?: number | undefined
        video?: VideoInfo | undefined
      } | null)
    | undefined
  createdAt?: string | undefined
  id?: Id | undefined
  read?: boolean | undefined
  type?: number | undefined
  updatedAt?: string | undefined
  video?:
    | {
        id?: VideoId | undefined
        name?: VideoName | undefined
        uuid?: VideoUuid | undefined
        channel?: ActorInfo | undefined
      }
    | undefined
  videoAbuse?:
    | ({
        id?: Id | undefined
        video?:
          | { id?: VideoId | undefined; name?: VideoName | undefined; uuid?: VideoUuid | undefined }
          | undefined
      } | null)
    | undefined
  videoBlacklist?:
    | ({
        id?: Id | undefined
        video?:
          | { id?: VideoId | undefined; name?: VideoName | undefined; uuid?: VideoUuid | undefined }
          | undefined
      } | null)
    | undefined
  videoImport?:
    | ({
        id?: Id | undefined
        magnetUri?: VideoImportMagnetUri | undefined
        targetUri?: (string | null) | undefined
        torrentName?: (string | null) | undefined
        video?: VideoInfo | undefined
      } | null)
    | undefined
}
type NotificationListResponse = { data?: Notification[] | undefined; total?: number | undefined }
type VideoImportTargetUrl = string
type VideoImportTorrentfile = File
type VideoImport = {
  createdAt?: string | undefined
  error?: string | undefined
  id?: {} | undefined
  magnetUri?: VideoImportMagnetUri | undefined
  state?: { id?: 1 | 2 | 3 | undefined; label?: string | undefined } | undefined
  targetUrl?: VideoImportTargetUrl | undefined
  torrentName?: string | undefined
  torrentfile?: VideoImportTorrentfile | undefined
  updatedAt?: string | undefined
  video?:
    | {
        account?: AccountSummary | undefined
        blacklisted?: (boolean | null) | undefined
        blacklistedReason?: (string | null) | undefined
        category?: { id?: VideoCategorySet | undefined; label?: string | undefined } | undefined
        channel?: VideoChannelSummary | undefined
        createdAt?: string | undefined
        description?: string | undefined
        dislikes?: number | undefined
        duration?: number | undefined
        embedPath?: string | undefined
        id?: VideoId | undefined
        isLive?: boolean | undefined
        isLocal?: boolean | undefined
        language?: { id?: VideoLanguageSet | undefined; label?: string | undefined } | undefined
        licence?: { id?: VideoLicenceSet | undefined; label?: string | undefined } | undefined
        likes?: number | undefined
        name?: VideoName | undefined
        nsfw?: boolean | undefined
        originallyPublishedAt?: string | undefined
        previewPath?: string | undefined
        privacy?: { id?: VideoPrivacySet | undefined; label?: string | undefined } | undefined
        publishedAt?: string | undefined
        scheduledUpdate?: { privacy?: VideoPrivacySet | undefined; updateAt: string } | undefined
        shortUUID?: VideoShortUUID | undefined
        state?:
          | { id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined; label?: string | undefined }
          | undefined
        thumbnailPath?: string | undefined
        updatedAt?: string | undefined
        userHistory?: ({ currentTime?: number | undefined } | null) | undefined
        uuid?: VideoUuid | undefined
        views?: number | undefined
        waitTranscoding?: (boolean | null) | undefined
      }
    | undefined
}
type VideoImportsList = { data?: VideoImport[] | undefined; total?: number | undefined }
type GetMeVideoRating = { id: Id; rating: 'like' | 'dislike' | 'none' }
type RegisterUser = {
  channel?: { displayName?: string | undefined; name?: UsernameChannel | undefined } | undefined
  displayName?: string | undefined
  email: string
  password: Password
  username: {}
}
type UserRegistration = {
  accountDisplayName?: string | undefined
  channelDisplayName?: string | undefined
  channelHandle?: string | undefined
  createdAt?: string | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  id?: Id | undefined
  moderationResponse?: (string | null) | undefined
  registrationReason?: string | undefined
  state?: { id?: 1 | 2 | 3 | undefined; label?: string | undefined } | undefined
  updatedAt?: string | undefined
  user?: ({ id?: Id | undefined } | null) | undefined
  username?: string | undefined
}
type UserRegistrationRequest = {
  channel?: { displayName?: string | undefined; name?: UsernameChannel | undefined } | undefined
  displayName?: string | undefined
  email: string
  password: Password
  username: {}
  registrationReason: string
}
type UserRegistrationAcceptOrReject = {
  moderationResponse: string
  preventEmailDelivery?: boolean | undefined
}
type OAuthTokenPassword = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'password' | 'refresh_token' | undefined
  password?: Password | undefined
  username?: Username | undefined
}
type OAuthTokenRefreshToken = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'password' | 'refresh_token' | undefined
  refresh_token?: string | undefined
}
type UserWithStats = {
  account?: Account | undefined
  autoPlayNextVideo?: boolean | undefined
  autoPlayNextVideoPlaylist?: boolean | undefined
  autoPlayVideo?: boolean | undefined
  blocked?: boolean | undefined
  blockedReason?: string | undefined
  createdAt?: string | undefined
  email?: UserEmail | undefined
  emailVerified?: boolean | undefined
  id?: UserId | undefined
  lastLoginDate?: string | undefined
  noAccountSetupWarningModal?: boolean | undefined
  noInstanceConfigWarningModal?: boolean | undefined
  noWelcomeModal?: boolean | undefined
  nsfwPolicy?: NSFWPolicy | undefined
  p2pEnabled?: boolean | undefined
  pluginAuth?: string | undefined
  role?:
    | { id?: UserRole | undefined; label?: 'User' | 'Moderator' | 'Administrator' | undefined }
    | undefined
  theme?: string | undefined
  username?: Username | undefined
  videoChannels?: VideoChannel[] | undefined
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
  abusesAcceptedCount?: number | undefined
  abusesCount?: number | undefined
  abusesCreatedCount?: number | undefined
  videoCommentsCount?: number | undefined
  videosCount?: number | undefined
}
type UpdateUser = {
  adminFlags?: UserAdminFlags | undefined
  email?: {} | undefined
  emailVerified?: boolean | undefined
  password?: Password | undefined
  pluginAuth?: (string | null) | undefined
  role?: UserRole | undefined
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
}
type RequestTwoFactorResponse = {
  otpRequest?:
    | { requestToken?: string | undefined; secret?: string | undefined; uri?: string | undefined }
    | undefined
}
type VideoChannelSyncCreate = {
  externalChannelUrl?: string | undefined
  videoChannelId?: Id | undefined
}
type VideoChannelSync = {
  channel?: VideoChannel | undefined
  createdAt?: string | undefined
  externalChannelUrl?: string | undefined
  id?: Id | undefined
  lastSyncAt?: (string | null) | undefined
  state?: { id?: number | undefined; label?: string | undefined } | undefined
}
type VideoChannelCreate = {
  description?: { [x: string]: unknown } | undefined
  displayName?: { [x: string]: unknown } | undefined
  support?: { [x: string]: unknown } | undefined
  name?: {} | undefined
}
type VideoChannelUpdate = {
  description?: { [x: string]: unknown } | undefined
  displayName?: { [x: string]: unknown } | undefined
  support?: { [x: string]: unknown } | undefined
  bulkVideosSupportUpdate?: boolean | undefined
}
type ImportVideosInChannelCreate = {
  externalChannelUrl: string
  videoChannelSyncId?: number | undefined
}
type VideoBlacklist = {
  createdAt?: string | undefined
  description?: string | undefined
  dislikes?: number | undefined
  duration?: number | undefined
  id?: Id | undefined
  likes?: number | undefined
  name?: string | undefined
  nsfw?: boolean | undefined
  updatedAt?: string | undefined
  uuid?: UUIDv4 | undefined
  videoId?: VideoId | undefined
  views?: number | undefined
}
type VideoScheduledUpdate = { privacy?: VideoPrivacySet | undefined; updateAt: string }
type VideoCreateImport = {
  category?: VideoCategorySet | undefined
  channelId: number
  commentsEnabled?: boolean | undefined
  description?: string | undefined
  downloadEnabled?: boolean | undefined
  language?: VideoLanguageSet | undefined
  licence?: VideoLicenceSet | undefined
  name: string
  nsfw?: boolean | undefined
  originallyPublishedAt?: string | undefined
  previewfile?: File | undefined
  privacy?: VideoPrivacySet | undefined
  scheduleUpdate?: VideoScheduledUpdate | undefined
  support?: string | undefined
  tags?: string[] | undefined
  thumbnailfile?: File | undefined
  waitTranscoding?: boolean | undefined
}
type VideoUploadResponse = {
  video?:
    | {
        id?: VideoId | undefined
        shortUUID?: VideoShortUUID | undefined
        uuid?: VideoUuid | undefined
      }
    | undefined
}
type LiveVideoLatencyMode = 1 | 2 | 3
type LiveVideoResponse = {
  latencyMode?: LiveVideoLatencyMode | undefined
  permanentLive?: boolean | undefined
  rtmpUrl?: string | undefined
  rtmpsUrl?: string | undefined
  saveReplay?: boolean | undefined
  streamKey?: string | undefined
}
type LiveVideoUpdate = {
  latencyMode?: LiveVideoLatencyMode | undefined
  permanentLive?: boolean | undefined
  saveReplay?: boolean | undefined
}
type LiveVideoSessionResponse = {
  endDate?: (string | null) | undefined
  error?: 1 | 2 | 3 | 4 | 5 | undefined
  id?: number | undefined
  replayVideo?:
    | { id?: number | undefined; shortUUID?: ShortUUID | undefined; uuid?: UUIDv4 | undefined }
    | undefined
  startDate?: string | undefined
}
type VideoUploadRequestLegacy = {
  category?: VideoCategorySet | undefined
  channelId: number
  commentsEnabled?: boolean | undefined
  description?: string | undefined
  downloadEnabled?: boolean | undefined
  language?: VideoLanguageSet | undefined
  licence?: VideoLicenceSet | undefined
  name: string
  nsfw?: boolean | undefined
  originallyPublishedAt?: string | undefined
  previewfile?: File | undefined
  privacy?: VideoPrivacySet | undefined
  scheduleUpdate?: VideoScheduledUpdate | undefined
  support?: string | undefined
  tags?: string[] | undefined
  thumbnailfile?: File | undefined
  waitTranscoding?: boolean | undefined
  videofile: File
}
type VideoUploadRequestResumable = {
  category?: VideoCategorySet | undefined
  channelId: number
  commentsEnabled?: boolean | undefined
  description?: string | undefined
  downloadEnabled?: boolean | undefined
  language?: VideoLanguageSet | undefined
  licence?: VideoLicenceSet | undefined
  name: string
  nsfw?: boolean | undefined
  originallyPublishedAt?: string | undefined
  previewfile?: File | undefined
  privacy?: VideoPrivacySet | undefined
  scheduleUpdate?: VideoScheduledUpdate | undefined
  support?: string | undefined
  tags?: string[] | undefined
  thumbnailfile?: File | undefined
  waitTranscoding?: boolean | undefined
  filename: string
}
type VideoResolutionConstant = { id?: VideoResolutionSet | undefined; label?: string | undefined }
type VideoFile = {
  fileDownloadUrl?: string | undefined
  fileUrl?: string | undefined
  fps?: number | undefined
  id?: Id | undefined
  magnetUri?: string | undefined
  metadataUrl?: string | undefined
  resolution?: VideoResolutionConstant | undefined
  size?: number | undefined
  torrentDownloadUrl?: string | undefined
  torrentUrl?: string | undefined
}
type VideoStreamingPlaylists = {
  id?: Id | undefined
  type?: 1 | undefined
  files?: VideoFile[] | undefined
  playlistUrl?: string | undefined
  redundancies?: { baseUrl?: string | undefined }[] | undefined
  segmentsSha256Url?: string | undefined
}
type VideoDetails = {
  account?: Account | undefined
  blacklisted?: (boolean | null) | undefined
  blacklistedReason?: (string | null) | undefined
  category?: { id?: VideoCategorySet | undefined; label?: string | undefined } | undefined
  channel?: VideoChannel | undefined
  createdAt?: string | undefined
  description?: string | undefined
  dislikes?: number | undefined
  duration?: number | undefined
  embedPath?: string | undefined
  id?: VideoId | undefined
  isLive?: boolean | undefined
  isLocal?: boolean | undefined
  language?: { id?: VideoLanguageSet | undefined; label?: string | undefined } | undefined
  licence?: { id?: VideoLicenceSet | undefined; label?: string | undefined } | undefined
  likes?: number | undefined
  name?: VideoName | undefined
  nsfw?: boolean | undefined
  originallyPublishedAt?: string | undefined
  previewPath?: string | undefined
  privacy?: { id?: VideoPrivacySet | undefined; label?: string | undefined } | undefined
  publishedAt?: string | undefined
  scheduledUpdate?: { privacy?: VideoPrivacySet | undefined; updateAt: string } | undefined
  shortUUID?: VideoShortUUID | undefined
  state?:
    | { id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined; label?: string | undefined }
    | undefined
  thumbnailPath?: string | undefined
  updatedAt?: string | undefined
  userHistory?: ({ currentTime?: number | undefined } | null) | undefined
  uuid?: VideoUuid | undefined
  views?: number | undefined
  waitTranscoding?: (boolean | null) | undefined
  commentsEnabled?: boolean | undefined
  descriptionPath?: string | undefined
  downloadEnabled?: boolean | undefined
  files?: VideoFile[] | undefined
  streamingPlaylists?: VideoStreamingPlaylists[] | undefined
  support?: string | undefined
  tags?: string[] | undefined
  trackerUrls?: string[] | undefined
  viewers?: number | undefined
}
type VideoConstantStringLanguage = { id?: VideoLanguageSet | undefined; label?: string | undefined }
type VideoCaption = {
  captionPath?: string | undefined
  language?: VideoConstantStringLanguage | undefined
}
type VideoCommentText = string
type VideoComment = {
  account?: Account | undefined
  createdAt?: string | undefined
  deletedAt?: (string | null) | undefined
  id?: Id | undefined
  inReplyToCommentId?: {} | undefined
  isDeleted?: boolean | undefined
  text?: VideoCommentText | undefined
  threadId?: Id | undefined
  totalReplies?: number | undefined
  totalRepliesFromVideoAuthor?: number | undefined
  updatedAt?: string | undefined
  url?: string | undefined
  videoId?: VideoId | undefined
}
type CommentThreadResponse = { data?: VideoComment[] | undefined; total?: number | undefined }
type CommentThreadPostResponse = { comment?: VideoComment | undefined }
type VideoCommentThreadTree = {
  children?: VideoCommentThreadTree[] | undefined
  comment?: VideoComment | undefined
}
type VideoSource = { filename?: string | undefined }
type VideoStatsOverall = {
  averageWatchTime?: number | undefined
  countries?: { isoCode?: string | undefined; viewers?: number | undefined }[] | undefined
  totalWatchTime?: number | undefined
  viewersPeak?: number | undefined
  viewersPeakDate?: string | undefined
}
type VideoStatsRetention = {
  data?: { retentionPercent?: number | undefined; second?: number | undefined }[] | undefined
}
type VideoStatsTimeserie = {
  data?: { date?: string | undefined; value?: number | undefined }[] | undefined
}
type VideoStudioCreateTask = (
  | {
      name?: 'cut' | undefined
      options?: { end?: number | undefined; start?: number | undefined } | undefined
    }
  | { name?: 'add-intro' | undefined; options?: { file?: File | undefined } | undefined }
  | { name?: 'add-outro' | undefined; options?: { file?: File | undefined } | undefined }
  | { name?: 'add-watermark' | undefined; options?: { file?: File | undefined } | undefined }
)[]
type VideoTokenResponse = {
  files?: { expires?: string | undefined; token?: string | undefined } | undefined
}
type UserViewingVideo = { currentTime: number; viewEvent?: 'seek' | undefined }
type MRSSPeerLink = { href?: string | undefined; type?: 'application/x-bittorrent' | undefined }
type MRSSGroupContent = {
  duration?: number | undefined
  fileSize?: number | undefined
  framerate?: number | undefined
  height?: number | undefined
  lang?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type VideosForXML = {
  'content:encoded'?: string | undefined
  'dc:creator'?: string | undefined
  description?: string | undefined
  enclosure?:
    | {
        length?: number | undefined
        type?: 'application/x-bittorrent' | undefined
        url?: string | undefined
      }
    | undefined
  guid?: string | undefined
  link?: string | undefined
  'media:category'?: number | undefined
  'media:community'?:
    | { 'media:statistics'?: { views?: number | undefined } | undefined }
    | undefined
  'media:description'?: string | undefined
  'media:embed'?: { url?: string | undefined } | undefined
  'media:group'?: (MRSSPeerLink | MRSSGroupContent)[] | undefined
  'media:player'?: { url?: string | undefined } | undefined
  'media:rating'?: 'nonadult' | 'adult' | undefined
  'media:thumbnail'?:
    | { height?: number | undefined; url?: string | undefined; width?: number | undefined }
    | undefined
  'media:title'?: string | undefined
  pubDate?: string | undefined
}[]
type VideoCommentsForXML = {
  'content:encoded'?: string | undefined
  'dc:creator'?: string | undefined
  guid?: string | undefined
  link?: string | undefined
  pubDate?: string | undefined
}[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/abuses': {
      $get: {
        input: {
          query: {
            id?: number | undefined
            predefinedReason?: PredefinedAbuseReasons | undefined
            search?: string | undefined
            state?: AbuseStateSet | undefined
            searchReporter?: string | undefined
            searchReportee?: string | undefined
            searchVideo?: string | undefined
            searchVideoChannel?: string | undefined
            videoIs?: 'deleted' | 'blacklisted' | undefined
            filter?: 'video' | 'comment' | 'account' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: '-id' | '-createdAt' | '-state' | undefined
          }
        }
        output: { data?: Abuse[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: {
              json: {
                account?: { id?: number | undefined } | undefined
                comment?: { id?: {} | undefined } | undefined
                predefinedReasons?: PredefinedAbuseReasons | undefined
                reason: string
                video?:
                  | {
                      endAt?: number | undefined
                      id?: {} | undefined
                      startAt?: number | undefined
                    }
                  | undefined
              }
            }
            output: { abuse?: { id?: Id | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                account?: { id?: number | undefined } | undefined
                comment?: { id?: {} | undefined } | undefined
                predefinedReasons?: PredefinedAbuseReasons | undefined
                reason: string
                video?:
                  | {
                      endAt?: number | undefined
                      id?: {} | undefined
                      startAt?: number | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/abuses/:abuseId': {
      $delete:
        | { input: { param: { abuseId: Id } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { abuseId: Id } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { abuseId: Id } } & {
              json: { moderationComment?: string | undefined; state?: AbuseStateSet | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { abuseId: Id } } & {
              json: { moderationComment?: string | undefined; state?: AbuseStateSet | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/abuses/:abuseId/messages': {
      $get: {
        input: { param: { abuseId: Id } }
        output: { data?: AbuseMessage[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { abuseId: Id } } & { json: { message: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { abuseId: Id } } & { json: { message: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/abuses/:abuseId/messages/:abuseMessageId': {
      $delete: {
        input: { param: { abuseId: Id; abuseMessageId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/accounts': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: Account[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:name': {
      $get:
        | { input: { param: { name: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/accounts/:name/followers': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: 'createdAt' | undefined
            search?: string | undefined
          }
        }
        output: { data?: Follow[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:name/ratings': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            rating?: 'like' | 'dislike' | undefined
          }
        }
        output: VideoRating[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:name/video-channel-syncs': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: VideoChannelSyncList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:name/video-channels': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            withStats?: boolean | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: VideoChannelList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:name/video-playlists': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            search?: string | undefined
            playlistType?: VideoPlaylistTypeSet | undefined
          }
        }
        output: { data?: VideoPlaylist[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/accounts/:name/videos': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            isLive?: boolean | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            nsfw?: 'true' | 'false' | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            hasHLSFiles?: boolean | undefined
            hasWebtorrentFiles?: boolean | undefined
            skipCount?: 'true' | 'false' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/blocklist/status': {
      $get: {
        input: { query: { accounts?: string[] | undefined; hosts?: string[] | undefined } }
        output: BlockStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config': {
      $get: { input: {}; output: ServerConfig; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/config/about': {
      $get: { input: {}; output: ServerConfigAbout; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/config/custom': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: ServerConfigCustom; outputFormat: 'json'; status: 200 }
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/v1/custom-pages/homepage/instance': {
      $get:
        | { input: {}; output: CustomHomepage; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $put: {
        input: { json: { content?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/jobs/pause': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/api/v1/jobs/resume': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/api/v1/jobs/:state': {
      $get: {
        input: {
          param: { state: '' | 'active' | 'completed' | 'failed' | 'waiting' | 'delayed' }
        } & {
          query: {
            jobType?:
              | 'activitypub-follow'
              | 'activitypub-http-broadcast'
              | 'activitypub-http-fetcher'
              | 'activitypub-http-unicast'
              | 'email'
              | 'video-transcoding'
              | 'video-file-import'
              | 'video-import'
              | 'videos-views-stats'
              | 'activitypub-refresher'
              | 'video-redundancy'
              | 'video-live-ending'
              | 'video-channel-import'
              | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: { data?: Job[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/metrics/playback': {
      $post: {
        input: { json: PlaybackMetricCreate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/oauth-clients/local': {
      $get: { input: {}; output: OAuthClient; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/plugins': {
      $get: {
        input: {
          query: {
            pluginType?: number | undefined
            uninstalled?: boolean | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: PluginResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/plugins/available': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                pluginType?: number | undefined
                currentPeerTubeEngine?: string | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            }
            output: PluginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                pluginType?: number | undefined
                currentPeerTubeEngine?: string | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/plugins/install': {
      $post:
        | {
            input: { json: { npmName: string } | { path: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { npmName: string } | { path: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/plugins/uninstall': {
      $post:
        | { input: { json: { npmName: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { npmName: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/plugins/update': {
      $post:
        | {
            input: { json: { npmName: string } | { path: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { npmName: string } | { path: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { npmName: string } | { path: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/plugins/:npmName': {
      $get:
        | {
            input: { param: { npmName: string } }
            output: Plugin
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { npmName: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/plugins/:npmName/public-settings': {
      $get:
        | {
            input: { param: { npmName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { npmName: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/plugins/:npmName/registered-settings': {
      $get:
        | {
            input: { param: { npmName: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { npmName: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/plugins/:npmName/settings': {
      $put:
        | {
            input: { param: { npmName: string } } & {
              json: { settings?: { [x: string]: unknown } | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { npmName: string } } & {
              json: { settings?: { [x: string]: unknown } | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/search/video-channels': {
      $get:
        | {
            input: {
              query: {
                search: string
                start?: number | undefined
                count?: number | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                sort?: string | undefined
              }
            }
            output: VideoChannelList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                start?: number | undefined
                count?: number | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/search/video-playlists': {
      $get:
        | {
            input: {
              query: {
                search: string
                start?: number | undefined
                count?: number | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                sort?: string | undefined
              }
            }
            output: { data?: VideoPlaylist[] | undefined; total?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                start?: number | undefined
                count?: number | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/search/videos': {
      $get:
        | {
            input: {
              query: {
                search: string
                categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
                isLive?: boolean | undefined
                tagsOneOf?: string | string[] | undefined
                tagsAllOf?: string | string[] | undefined
                licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
                languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                uuids?: { [x: string]: unknown } | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
                skipCount?: 'true' | 'false' | undefined
                start?: number | undefined
                count?: number | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                sort?:
                  | 'name'
                  | '-duration'
                  | '-createdAt'
                  | '-publishedAt'
                  | '-views'
                  | '-likes'
                  | '-match'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                originallyPublishedStartDate?: string | undefined
                originallyPublishedEndDate?: string | undefined
                durationMin?: number | undefined
                durationMax?: number | undefined
              }
            }
            output: VideoListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
                isLive?: boolean | undefined
                tagsOneOf?: string | string[] | undefined
                tagsAllOf?: string | string[] | undefined
                licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
                languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                uuids?: { [x: string]: unknown } | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
                skipCount?: 'true' | 'false' | undefined
                start?: number | undefined
                count?: number | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                sort?:
                  | 'name'
                  | '-duration'
                  | '-createdAt'
                  | '-publishedAt'
                  | '-views'
                  | '-likes'
                  | '-match'
                  | undefined
                startDate?: string | undefined
                endDate?: string | undefined
                originallyPublishedStartDate?: string | undefined
                originallyPublishedEndDate?: string | undefined
                durationMin?: number | undefined
                durationMax?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/server/audit-logs': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/server/blocklist/accounts': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { json: { accountName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { accountName: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/api/v1/server/blocklist/accounts/:accountName': {
      $delete:
        | {
            input: { param: { accountName: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { accountName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/blocklist/servers': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | { input: { json: { host: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { host: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/server/blocklist/servers/:host': {
      $delete:
        | { input: { param: { host: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { host: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/server/followers': {
      $get: {
        input: {
          query: {
            state?: 'pending' | 'accepted' | undefined
            actorType?: 'Person' | 'Application' | 'Group' | 'Service' | 'Organization' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: { data?: Follow[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/server/followers/:nameWithHost': {
      $delete:
        | {
            input: { param: { nameWithHost: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { nameWithHost: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/followers/:nameWithHost/accept': {
      $post:
        | {
            input: { param: { nameWithHost: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { nameWithHost: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/followers/:nameWithHost/reject': {
      $post:
        | {
            input: { param: { nameWithHost: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { nameWithHost: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/following': {
      $get: {
        input: {
          query: {
            state?: 'pending' | 'accepted' | undefined
            actorType?: 'Person' | 'Application' | 'Group' | 'Service' | 'Organization' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: { data?: Follow[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { handles?: string[] | undefined; hosts?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { handles?: string[] | undefined; hosts?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/server/following/:hostOrHandle': {
      $delete:
        | {
            input: { param: { hostOrHandle: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { hostOrHandle: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/logs': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/server/logs/client': {
      $post: { input: { json: SendClientLog }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/server/redundancy/videos': {
      $get: {
        input: {
          query: {
            target: 'my-videos' | 'remote-videos'
            start?: number | undefined
            count?: number | undefined
            sort?: 'name' | undefined
          }
        }
        output: VideoRedundancy[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: { videoId: VideoId } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { videoId: VideoId } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { videoId: VideoId } }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: { videoId: VideoId } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/server/redundancy/videos/:redundancyId': {
      $delete:
        | {
            input: { param: { redundancyId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { redundancyId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/redundancy/:host': {
      $put:
        | {
            input: { param: { host: string } } & { json: { redundancyAllowed: boolean } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { host: string } } & { json: { redundancyAllowed: boolean } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/server/stats': {
      $get: { input: {}; output: ServerStats; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/users': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            blocked?: boolean | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: '-id' | '-username' | '-createdAt' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: AddUser }; output: AddUserResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: AddUser }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api/v1/users/ask-send-verify-email': {
      $post: { input: { json: { email: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/me': {
      $get: { input: {}; output: User[]; outputFormat: 'json'; status: 200 }
      $put: { input: { json: UpdateMe }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/me/abuses': {
      $get: {
        input: {
          query: {
            id?: number | undefined
            state?: AbuseStateSet | undefined
            sort?: '-id' | '-createdAt' | '-state' | undefined
            start?: number | undefined
            count?: number | undefined
          }
        }
        output: { data?: Abuse[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/avatar': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/me/avatar/pick': {
      $post:
        | {
            input: { form: { avatarfile?: File | undefined } }
            output: { avatars?: ActorImage[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { avatarfile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/users/me/history/videos': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            search?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/history/videos/remove': {
      $post: {
        input: { form: { beforeDate?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/me/history/videos/:videoId': {
      $delete: {
        input: { param: { videoId: VideoId } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/me/notification-settings': {
      $put: {
        input: {
          json: {
            abuseAsModerator?: NotificationSettingValue | undefined
            autoInstanceFollowing?: NotificationSettingValue | undefined
            blacklistOnMyVideo?: NotificationSettingValue | undefined
            commentMention?: NotificationSettingValue | undefined
            myVideoImportFinished?: NotificationSettingValue | undefined
            myVideoPublished?: NotificationSettingValue | undefined
            newCommentOnMyVideo?: NotificationSettingValue | undefined
            newFollow?: NotificationSettingValue | undefined
            newInstanceFollower?: NotificationSettingValue | undefined
            newUserRegistration?: NotificationSettingValue | undefined
            newVideoFromSubscription?: NotificationSettingValue | undefined
            videoAutoBlacklistAsModerator?: NotificationSettingValue | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/me/notifications': {
      $get: {
        input: {
          query: {
            unread?: boolean | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: NotificationListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/notifications/read': {
      $post: { input: { json: { ids: number[] } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/me/notifications/read-all': {
      $post: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/me/subscriptions': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: VideoChannelList
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: { uri: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/me/subscriptions/exist': {
      $get: {
        input: { query: { uris: string[] } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/subscriptions/videos': {
      $get: {
        input: {
          query: {
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            isLive?: boolean | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            nsfw?: 'true' | 'false' | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            hasHLSFiles?: boolean | undefined
            hasWebtorrentFiles?: boolean | undefined
            skipCount?: 'true' | 'false' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/subscriptions/:subscriptionHandle': {
      $delete: {
        input: { param: { subscriptionHandle: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { subscriptionHandle: string } }
        output: VideoChannel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/video-playlists/videos-exist': {
      $get: {
        input: { query: { videoIds: VideoId[] } }
        output: {
          videoId?:
            | {
                playlistElementId?: number | undefined
                playlistId?: number | undefined
                startTimestamp?: number | undefined
                stopTimestamp?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/video-quota-used': {
      $get: {
        input: {}
        output: { videoQuotaUsed?: number | undefined; videoQuotaUsedDaily?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/videos': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/videos/imports': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            targetUrl?: string | undefined
            videoChannelSyncId?: number | undefined
            search?: string | undefined
          }
        }
        output: VideoImportsList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/videos/:videoId/rating': {
      $get: {
        input: { param: { videoId: VideoId } }
        output: GetMeVideoRating
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/register': {
      $post:
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/users/registrations': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            search?: string | undefined
            sort?: '-createdAt' | 'createdAt' | 'state' | '-state' | undefined
          }
        }
        output: { data?: UserRegistration[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/registrations/ask-send-verify-email': {
      $post: { input: { json: { email: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/registrations/request': {
      $post:
        | {
            input: { json: UserRegistrationRequest }
            output: UserRegistration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: UserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: UserRegistrationRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/api/v1/users/registrations/:registrationId': {
      $delete: {
        input: { param: { registrationId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/registrations/:registrationId/accept': {
      $post: {
        input: { param: { registrationId: Id } } & { json: UserRegistrationAcceptOrReject }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/registrations/:registrationId/reject': {
      $post: {
        input: { param: { registrationId: Id } } & { json: UserRegistrationAcceptOrReject }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/registrations/:registrationId/verify-email': {
      $post:
        | {
            input: { param: { registrationId: Id } } & { json: { verificationString: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { registrationId: Id } } & { json: { verificationString: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { registrationId: Id } } & { json: { verificationString: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/revoke-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/token': {
      $post:
        | {
            input: { json: OAuthTokenPassword | OAuthTokenRefreshToken } & {
              form: OAuthTokenPassword | OAuthTokenRefreshToken
            }
            output: {
              access_token?: string | undefined
              expires_in?: number | undefined
              refresh_token?: string | undefined
              refresh_token_expires_in?: number | undefined
              token_type?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthTokenPassword | OAuthTokenRefreshToken } & {
              form: OAuthTokenPassword | OAuthTokenRefreshToken
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: OAuthTokenPassword | OAuthTokenRefreshToken } & {
              form: OAuthTokenPassword | OAuthTokenRefreshToken
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/users/:id': {
      $delete: { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: Id } } & { query: { withStats?: boolean | undefined } }
        output: User | UserWithStats
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: Id } } & { json: UpdateUser }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/:id/two-factor/confirm-request': {
      $post:
        | {
            input: { param: { id: Id } } & { json: { otpToken: string; requestToken: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & { json: { otpToken: string; requestToken: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: { otpToken: string; requestToken: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/:id/two-factor/disable': {
      $post:
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/:id/two-factor/request': {
      $post:
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: RequestTwoFactorResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/:id/verify-email': {
      $post:
        | {
            input: { param: { id: Id } } & {
              json: { isPendingEmail?: boolean | undefined; verificationString: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & {
              json: { isPendingEmail?: boolean | undefined; verificationString: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & {
              json: { isPendingEmail?: boolean | undefined; verificationString: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/video-channel-syncs': {
      $post: {
        input: { json: VideoChannelSyncCreate }
        output: { videoChannelSync?: VideoChannelSync | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channel-syncs/:channelSyncId': {
      $delete: {
        input: { param: { channelSyncId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channel-syncs/:channelSyncId/sync': {
      $post: {
        input: { param: { channelSyncId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: VideoChannelList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: VideoChannelCreate }
        output: { videoChannel?: { id?: Id | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle': {
      $delete: {
        input: { param: { channelHandle: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelHandle: string } }
        output: VideoChannel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { channelHandle: string } } & { json: VideoChannelUpdate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/avatar': {
      $delete: {
        input: { param: { channelHandle: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/avatar/pick': {
      $post:
        | {
            input: { param: { channelHandle: string } } & {
              form: { avatarfile?: File | undefined }
            }
            output: { avatars?: ActorImage[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelHandle: string } } & {
              form: { avatarfile?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/banner': {
      $delete: {
        input: { param: { channelHandle: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/banner/pick': {
      $post:
        | {
            input: { param: { channelHandle: string } } & {
              form: { bannerfile?: File | undefined }
            }
            output: { banners?: ActorImage[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelHandle: string } } & {
              form: { bannerfile?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/followers': {
      $get: {
        input: { param: { channelHandle: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: 'createdAt' | undefined
            search?: string | undefined
          }
        }
        output: { data?: Follow[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/import-videos': {
      $post: {
        input: { param: { channelHandle: string } } & { json: ImportVideosInChannelCreate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/video-playlists': {
      $get: {
        input: { param: { channelHandle: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            playlistType?: VideoPlaylistTypeSet | undefined
          }
        }
        output: { data?: VideoPlaylist[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/videos': {
      $get: {
        input: { param: { channelHandle: string } } & {
          query: {
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            isLive?: boolean | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            nsfw?: 'true' | 'false' | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            hasHLSFiles?: boolean | undefined
            hasWebtorrentFiles?: boolean | undefined
            skipCount?: 'true' | 'false' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-playlists': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            playlistType?: VideoPlaylistTypeSet | undefined
          }
        }
        output: { data?: VideoPlaylist[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          form: {
            description?: string | undefined
            displayName: string
            privacy?: VideoPlaylistPrivacySet | undefined
            thumbnailfile?: File | undefined
            videoChannelId?: {} | undefined
          }
        }
        output: {
          videoPlaylist?:
            | {
                id?: Id | undefined
                shortUUID?: VideoPlaylistShortUUID | undefined
                uuid?: UUIDv4 | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-playlists/privacies': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/video-playlists/:playlistId': {
      $delete: {
        input: { param: { playlistId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { playlistId: Id } }
        output: VideoPlaylist
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { playlistId: Id } } & {
          form: {
            description?: string | undefined
            displayName?: string | undefined
            privacy?: VideoPlaylistPrivacySet | undefined
            thumbnailfile?: File | undefined
            videoChannelId?: {} | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-playlists/:playlistId/videos': {
      $get: {
        input: { param: { playlistId: Id } } & {
          query: { start?: number | undefined; count?: number | undefined }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { playlistId: Id } } & {
          json: {
            startTimestamp?: number | undefined
            stopTimestamp?: number | undefined
            videoId: VideoUuid | VideoId
          }
        }
        output: { videoPlaylistElement?: { id?: number | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-playlists/:playlistId/videos/reorder': {
      $post: {
        input: { param: { playlistId: Id } } & {
          json: {
            insertAfterPosition: number
            reorderLength?: number | undefined
            startPosition: number
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-playlists/:playlistId/videos/:playlistElementId': {
      $delete: {
        input: { param: { playlistId: Id; playlistElementId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { playlistId: Id; playlistElementId: Id } } & {
          json: { startTimestamp?: number | undefined; stopTimestamp?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/videos': {
      $get: {
        input: {
          query: {
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            isLive?: boolean | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            nsfw?: 'true' | 'false' | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            hasHLSFiles?: boolean | undefined
            hasWebtorrentFiles?: boolean | undefined
            skipCount?: 'true' | 'false' | undefined
            start?: number | undefined
            count?: number | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/blacklist': {
      $get: {
        input: {
          query: {
            type?: 1 | 2 | undefined
            search?: string | undefined
            start?: number | undefined
            count?: number | undefined
            sort?:
              | '-id'
              | 'name'
              | '-duration'
              | '-views'
              | '-likes'
              | '-dislikes'
              | '-uuid'
              | '-createdAt'
              | undefined
          }
        }
        output: { data?: VideoBlacklist[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/categories': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/imports': {
      $post:
        | {
            input: { form: VideoCreateImport }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { form: VideoCreateImport }; output: {}; outputFormat: string; status: 400 }
        | { input: { form: VideoCreateImport }; output: {}; outputFormat: string; status: 403 }
        | { input: { form: VideoCreateImport }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/videos/imports/:id': {
      $delete: { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/videos/imports/:id/cancel': {
      $post: { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/videos/languages': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/licences': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/live': {
      $post:
        | {
            input: {
              form: {
                category?: VideoCategorySet | undefined
                channelId: number
                commentsEnabled?: boolean | undefined
                description?: string | undefined
                downloadEnabled?: boolean | undefined
                language?: VideoLanguageSet | undefined
                latencyMode?: LiveVideoLatencyMode | undefined
                licence?: VideoLicenceSet | undefined
                name: string
                nsfw?: boolean | undefined
                permanentLive?: boolean | undefined
                previewfile?: File | undefined
                privacy?: VideoPrivacySet | undefined
                saveReplay?: boolean | undefined
                support?: string | undefined
                tags?: string[] | undefined
                thumbnailfile?: File | undefined
              }
            }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                category?: VideoCategorySet | undefined
                channelId: number
                commentsEnabled?: boolean | undefined
                description?: string | undefined
                downloadEnabled?: boolean | undefined
                language?: VideoLanguageSet | undefined
                latencyMode?: LiveVideoLatencyMode | undefined
                licence?: VideoLicenceSet | undefined
                name: string
                nsfw?: boolean | undefined
                permanentLive?: boolean | undefined
                previewfile?: File | undefined
                privacy?: VideoPrivacySet | undefined
                saveReplay?: boolean | undefined
                support?: string | undefined
                tags?: string[] | undefined
                thumbnailfile?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                category?: VideoCategorySet | undefined
                channelId: number
                commentsEnabled?: boolean | undefined
                description?: string | undefined
                downloadEnabled?: boolean | undefined
                language?: VideoLanguageSet | undefined
                latencyMode?: LiveVideoLatencyMode | undefined
                licence?: VideoLicenceSet | undefined
                name: string
                nsfw?: boolean | undefined
                permanentLive?: boolean | undefined
                previewfile?: File | undefined
                privacy?: VideoPrivacySet | undefined
                saveReplay?: boolean | undefined
                support?: string | undefined
                tags?: string[] | undefined
                thumbnailfile?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/videos/live/:id': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: LiveVideoResponse
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: LiveVideoUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: LiveVideoUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: LiveVideoUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/videos/live/:id/sessions': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: { data?: LiveVideoSessionResponse[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/ownership': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/videos/ownership/:id/accept': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/ownership/:id/refuse': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/privacies': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/upload': {
      $post:
        | {
            input: { form: VideoUploadRequestLegacy }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: VideoUploadRequestLegacy }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { form: VideoUploadRequestLegacy }
            output: {}
            outputFormat: string
            status: 408
          }
        | {
            input: { form: VideoUploadRequestLegacy }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { form: VideoUploadRequestLegacy }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { form: VideoUploadRequestLegacy }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/v1/videos/upload-resumable': {
      $delete:
        | {
            input: { query: { upload_id: string } } & { header: { 'Content-Length': number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { upload_id: string } } & { header: { 'Content-Length': number } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoUploadRequestResumable }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoUploadRequestResumable }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoUploadRequestResumable }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoUploadRequestResumable }
            output: {}
            outputFormat: string
            status: 415
          }
      $put:
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/api/v1/videos/:id': {
      $delete: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: VideoDetails
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          form: {
            category?: VideoCategorySet | undefined
            commentsEnabled?: boolean | undefined
            description?: string | undefined
            downloadEnabled?: boolean | undefined
            language?: VideoLanguageSet | undefined
            licence?: VideoLicenceSet | undefined
            name?: string | undefined
            nsfw?: boolean | undefined
            originallyPublishedAt?: string | undefined
            previewfile?: File | undefined
            privacy?: VideoPrivacySet | undefined
            scheduleUpdate?: VideoScheduledUpdate | undefined
            support?: string | undefined
            tags?: string[] | undefined
            thumbnailfile?: File | undefined
            waitTranscoding?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/videos/:id/blacklist': {
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/videos/:id/captions': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: { data?: VideoCaption[] | undefined; total?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/captions/:captionLanguage': {
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; captionLanguage: VideoLanguageSet } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; captionLanguage: VideoLanguageSet } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; captionLanguage: VideoLanguageSet } } & {
              form: { captionfile?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; captionLanguage: VideoLanguageSet } } & {
              form: { captionfile?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/comment-threads': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: '-createdAt' | '-totalReplies' | undefined
          }
        }
        output: CommentThreadResponse
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { text: {} } }
            output: CommentThreadPostResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { text: {} } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/comment-threads/:threadId': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID; threadId: number } }
        output: VideoCommentThreadTree
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/comments/:commentId': {
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } }
            output: {}
            outputFormat: string
            status: 409
          }
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } } & {
              json: { text: {} }
            }
            output: CommentThreadPostResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } } & {
              json: { text: {} }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/description': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: string | null
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/give-ownership': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { username: string } } & {
              form: { username: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { username: string } } & {
              form: { username: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { username: string } } & {
              form: { username: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/hls': {
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/live-session': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: LiveVideoSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/rate': {
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { rating: 'like' | 'dislike' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { rating: 'like' | 'dislike' }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/source': {
      $post: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: VideoSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/stats/overall': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          query: { startDate?: string | undefined; endDate?: string | undefined }
        }
        output: VideoStatsOverall
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/stats/retention': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: VideoStatsRetention
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/stats/timeseries/:metric': {
      $get: {
        input: {
          param: { id: Id | UUIDv4 | ShortUUID; metric: 'viewers' | 'aggregateWatchTime' }
        } & { query: { startDate?: string | undefined; endDate?: string | undefined } }
        output: VideoStatsTimeserie
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/studio/edit': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: VideoStudioCreateTask } & {
              form: VideoStudioCreateTask
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: VideoStudioCreateTask } & {
              form: VideoStudioCreateTask
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: VideoStudioCreateTask } & {
              form: VideoStudioCreateTask
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/token': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: VideoTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/transcoding': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { transcodingType: 'hls' | 'webtorrent' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { transcodingType: 'hls' | 'webtorrent' }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/views': {
      $post: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: UserViewingVideo }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/videos/:id/watching': {
      $put: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: UserViewingVideo }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/videos/:id/webtorrent': {
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/feeds/subscriptions.{format}': {
      $get:
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId: string
                token: string
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId: string
                token: string
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId: string
                token: string
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId: string
                token: string
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId: string
                token: string
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId: string
                token: string
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/feeds/video-comments.{format}': {
      $get:
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                videoId?: string | undefined
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/feeds/videos.{format}': {
      $get:
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 204
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: { format: 'xml' | 'rss' | 'rss2' | 'atom' | 'atom1' | 'json' | 'json1' }
            } & {
              query: {
                accountId?: string | undefined
                accountName?: string | undefined
                videoChannelId?: string | undefined
                videoChannelName?: string | undefined
                sort?: string | undefined
                nsfw?: 'true' | 'false' | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebtorrentFiles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/static/streaming-playlists/hls/private/:filename': {
      $get:
        | {
            input: { param: { filename: string } } & {
              query: {
                videoFileToken?: string | undefined
                reinjectVideoFileToken?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { filename: string } } & {
              query: {
                videoFileToken?: string | undefined
                reinjectVideoFileToken?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { filename: string } } & {
              query: {
                videoFileToken?: string | undefined
                reinjectVideoFileToken?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/static/streaming-playlists/hls/:filename': {
      $get:
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/static/webseed/private/:filename': {
      $get:
        | {
            input: { param: { filename: string } } & {
              query: { videoFileToken?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { filename: string } } & {
              query: { videoFileToken?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { filename: string } } & {
              query: { videoFileToken?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/static/webseed/:filename': {
      $get:
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
