type Id = number
type UUIDv4 = string
type ShortUUID = string
type VideoCommentsForXML = {
  link?: string | undefined
  guid?: string | undefined
  pubDate?: string | undefined
  'content:encoded'?: string | undefined
  'dc:creator'?: string | undefined
}[]
type VideoPrivacySet = 1 | 2 | 3 | 4 | 5
type MRSSPeerLink = { href?: string | undefined; type?: 'application/x-bittorrent' | undefined }
type MRSSGroupContent = {
  url?: string | undefined
  fileSize?: number | undefined
  type?: string | undefined
  framerate?: number | undefined
  duration?: number | undefined
  height?: number | undefined
  lang?: string | undefined
}
type VideosForXML = {
  link?: string | undefined
  guid?: string | undefined
  pubDate?: string | undefined
  description?: string | undefined
  'content:encoded'?: string | undefined
  'dc:creator'?: string | undefined
  'media:category'?: number | undefined
  'media:community'?:
    | { 'media:statistics'?: { views?: number | undefined } | undefined }
    | undefined
  'media:embed'?: { url?: string | undefined } | undefined
  'media:player'?: { url?: string | undefined } | undefined
  'media:thumbnail'?:
    | { url?: string | undefined; height?: number | undefined; width?: number | undefined }
    | undefined
  'media:title'?: string | undefined
  'media:description'?: string | undefined
  'media:rating'?: 'nonadult' | 'adult' | undefined
  enclosure?:
    | {
        url?: string | undefined
        type?: 'application/x-bittorrent' | undefined
        length?: number | undefined
      }
    | undefined
  'media:group'?: (MRSSPeerLink | MRSSGroupContent)[] | undefined
}[]
type PodcastChapters = {
  version?: string | undefined
  chapters?: { startTime?: number | undefined; title?: string | undefined }[] | undefined
}
type ActorImage = {
  path?: (string | null) | undefined
  fileUrl?: string | undefined
  width?: number | undefined
  height?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Account = {
  id?: Id | undefined
  url?: string | undefined
  name?: {} | undefined
  avatars?: ActorImage[] | undefined
  host?: string | undefined
  hostRedundancyAllowed?: (boolean | null) | undefined
  followingCount?: number | undefined
  followersCount?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  userId?: {} | undefined
  displayName?: string | undefined
  description?: (string | null) | undefined
}
type NSFWFlag = 0 | 1 | 2 | 4
type VideoAIUsageSet = 1 | 2 | 3 | 4
type VideoCategorySet = number
type VideoLicenceSet = number
type VideoLanguageSet = string
type LiveSchedule = { startAt?: string | undefined }
type Thumbnail = {
  fileUrl?: string | undefined
  width?: number | undefined
  height?: number | undefined
  aspectRatio?: string | undefined
}
type VideoAIUsageConstant = { id?: VideoAIUsageSet | undefined; label?: string | undefined }
type VideoCommercialContentSet = 1 | 2 | 3
type VideoCommercialContentConstant = {
  id?: VideoCommercialContentSet | undefined
  label?: string | undefined
}
type VideoRecommendationScopeSet = 1 | 2 | 3 | 4
type VideoRecommendationScopeConstant = {
  id?: VideoRecommendationScopeSet | undefined
  label?: string | undefined
}
type AccountSummary = {
  id?: number | undefined
  name?: string | undefined
  displayName?: string | undefined
  url?: string | undefined
  host?: string | undefined
  avatars?: ActorImage[] | undefined
}
type VideoChannelSummary = {
  id?: Id | undefined
  name?: string | undefined
  displayName?: string | undefined
  url?: string | undefined
  host?: string | undefined
  avatars?: ActorImage[] | undefined
}
type Video = {
  id?: {} | undefined
  uuid?: {} | undefined
  shortUUID?: {} | undefined
  isLive?: boolean | undefined
  liveSchedules?: LiveSchedule[] | undefined
  createdAt?: string | undefined
  publishedAt?: string | undefined
  updatedAt?: string | undefined
  originallyPublishedAt?: (string | null) | undefined
  category?: { id?: VideoCategorySet | undefined; label?: string | undefined } | undefined
  licence?: { id?: VideoLicenceSet | undefined; label?: string | undefined } | undefined
  language?: { id?: VideoLanguageSet | undefined; label?: string | undefined } | undefined
  privacy?: { id?: VideoPrivacySet | undefined; label?: string | undefined } | undefined
  truncatedDescription?: (string | null) | undefined
  duration?: number | undefined
  aspectRatio?: (number | null) | undefined
  isLocal?: boolean | undefined
  name?: string | undefined
  thumbnailPath?: (string | null) | undefined
  previewPath?: (string | null) | undefined
  thumbnails?: Thumbnail[] | undefined
  embedPath?: string | undefined
  views?: number | undefined
  likes?: number | undefined
  dislikes?: number | undefined
  comments?: number | undefined
  nsfw?: boolean | undefined
  nsfwFlags?: {} | undefined
  nsfwSummary?: string | undefined
  aiUsage?: VideoAIUsageConstant | undefined
  commercialContent?: VideoCommercialContentConstant | undefined
  recommendationScope?: VideoRecommendationScopeConstant | undefined
  waitTranscoding?: (boolean | null) | undefined
  state?:
    | {
        id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | undefined
        label?: string | undefined
      }
    | undefined
  scheduledUpdate?: { privacy?: VideoPrivacySet | undefined; updateAt: string } | undefined
  blacklisted?: (boolean | null) | undefined
  blacklistedReason?: (string | null) | undefined
  account?: AccountSummary | undefined
  channel?: VideoChannelSummary | undefined
  userHistory?: ({ currentTime?: number | undefined } | null) | undefined
  captionLanguages?: string[] | undefined
}
type VideoListResponse = { total?: number | undefined; data?: Video[] | undefined }
type Actor = {
  id?: Id | undefined
  url?: string | undefined
  name?: {} | undefined
  avatars?: ActorImage[] | undefined
  host?: string | undefined
  hostRedundancyAllowed?: (boolean | null) | undefined
  followingCount?: number | undefined
  followersCount?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Follow = {
  id?: Id | undefined
  follower?: Actor | undefined
  following?: Actor | undefined
  score?: number | undefined
  state?: 'pending' | 'accepted' | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type VideoResolutionSet = number
type ServerConfig = {
  instance?:
    | {
        name?: string | undefined
        shortDescription?: string | undefined
        defaultClientRoute?: string | undefined
        isNSFW?: boolean | undefined
        defaultNSFWPolicy?: string | undefined
        serverCountry?: string | undefined
        defaultLanguage?: string | undefined
        support?: { text?: string | undefined } | undefined
        social?:
          | {
              externalLink?: string | undefined
              mastodonLink?: string | undefined
              blueskyLink?: string | undefined
              xLink?: string | undefined
            }
          | undefined
        customizations?: { javascript?: string | undefined; css?: string | undefined } | undefined
        avatars?: ActorImage[] | undefined
        banners?: ActorImage[] | undefined
      }
    | undefined
  search?:
    | { remoteUri?: { users?: boolean | undefined; anonymous?: boolean | undefined } | undefined }
    | undefined
  plugin?: { registered?: string[] | undefined } | undefined
  theme?: { registered?: string[] | undefined } | undefined
  email?: { enabled?: boolean | undefined } | undefined
  contactForm?: { enabled?: boolean | undefined } | undefined
  serverVersion?: string | undefined
  serverCommit?: string | undefined
  signup?:
    | {
        allowed?: boolean | undefined
        allowedForCurrentIP?: boolean | undefined
        requiresEmailVerification?: boolean | undefined
      }
    | undefined
  transcoding?:
    | {
        hls?: { enabled?: boolean | undefined } | undefined
        web_videos?: { enabled?: boolean | undefined } | undefined
        enabledResolutions?: VideoResolutionSet[] | undefined
      }
    | undefined
  live?:
    | {
        enabled?: boolean | undefined
        allowReplay?: boolean | undefined
        dvr?: { maxWindow?: number | undefined } | undefined
        latencySetting?: { enabled?: boolean | undefined } | undefined
        maxDuration?: number | undefined
        maxInstanceLives?: number | undefined
        maxUserLives?: number | undefined
        transcoding?:
          | { enabled?: boolean | undefined; enabledResolutions?: VideoResolutionSet[] | undefined }
          | undefined
        rtmp?: { port?: number | undefined } | undefined
      }
    | undefined
  import?:
    | {
        videos?:
          | {
              http?: { enabled?: boolean | undefined } | undefined
              torrent?: { enabled?: boolean | undefined } | undefined
            }
          | undefined
        videoChannelSynchronization?: { enabled?: boolean | undefined } | undefined
        users?:
          | {
              enabled?: boolean | undefined
              resumableUpload?: { minChunkSize?: number | undefined } | undefined
            }
          | undefined
      }
    | undefined
  export?:
    | {
        users?:
          | {
              enabled?: boolean | undefined
              exportExpiration?: number | undefined
              maxUserVideoQuota?: number | undefined
            }
          | undefined
      }
    | undefined
  autoBlacklist?:
    | { videos?: { ofUsers?: { enabled?: boolean | undefined } | undefined } | undefined }
    | undefined
  blocklist?: { publicLog?: { enabled?: boolean | undefined } | undefined } | undefined
  avatar?:
    | {
        file?: { size?: { max?: number | undefined } | undefined } | undefined
        extensions?: string[] | undefined
      }
    | undefined
  video?:
    | {
        image?:
          | { extensions?: string[] | undefined; size?: { max?: number | undefined } | undefined }
          | undefined
        file?: { extensions?: string[] | undefined } | undefined
      }
    | undefined
  videoCaption?:
    | {
        file?:
          | { size?: { max?: number | undefined } | undefined; extensions?: string[] | undefined }
          | undefined
      }
    | undefined
  user?: { videoQuota?: number | undefined; videoQuotaDaily?: number | undefined } | undefined
  trending?: { videos?: { intervalDays?: number | undefined } | undefined } | undefined
  tracker?: { enabled?: boolean | undefined } | undefined
  followings?:
    | { instance?: { autoFollowIndex?: { indexUrl?: string | undefined } | undefined } | undefined }
    | undefined
  federation?: { enabled?: boolean | undefined } | undefined
  homepage?: { enabled?: boolean | undefined } | undefined
  openTelemetry?:
    | {
        metrics?:
          | { enabled?: boolean | undefined; playbackStatsInterval?: number | undefined }
          | undefined
      }
    | undefined
  views?:
    | {
        videos?:
          | {
              countViewAfter?: number | undefined
              watchingInterval?:
                | { anonymous?: number | undefined; users?: number | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type ServerConfigAbout = {
  instance?:
    | {
        name?: string | undefined
        shortDescription?: string | undefined
        description?: string | undefined
        terms?: string | undefined
        codeOfConduct?: string | undefined
        hardwareInformation?: string | undefined
        creationReason?: string | undefined
        moderationInformation?: string | undefined
        administrator?: string | undefined
        maintenanceLifetime?: string | undefined
        businessModel?: string | undefined
        support?: { text?: string | undefined } | undefined
        languages?: string[] | undefined
        categories?: number[] | undefined
        avatars?: ActorImage[] | undefined
        banners?: ActorImage[] | undefined
      }
    | undefined
}
type InstanceTranslation = {
  language?: string | undefined
  shortDescription?: string | undefined
  description?: string | undefined
  terms?: string | undefined
  codeOfConduct?: string | undefined
  moderationInformation?: string | undefined
  administrator?: string | undefined
  creationReason?: string | undefined
  maintenanceLifetime?: string | undefined
  businessModel?: string | undefined
  hardwareInformation?: string | undefined
  supportText?: string | undefined
}
type VideoCommentsPolicySet = 1 | 2 | 3
type ServerConfigCustom = {
  instance?:
    | {
        name?: string | undefined
        shortDescription?: string | undefined
        description?: string | undefined
        terms?: string | undefined
        codeOfConduct?: string | undefined
        creationReason?: string | undefined
        moderationInformation?: string | undefined
        administrator?: string | undefined
        maintenanceLifetime?: string | undefined
        businessModel?: string | undefined
        hardwareInformation?: string | undefined
        translations?: InstanceTranslation[] | undefined
        languages?: string[] | undefined
        categories?: number[] | undefined
        isNSFW?: boolean | undefined
        defaultNSFWPolicy?: string | undefined
        serverCountry?: string | undefined
        support?: { text?: string | undefined } | undefined
        social?:
          | {
              externalLink?: string | undefined
              mastodonLink?: string | undefined
              blueskyLink?: string | undefined
              xLink?: string | undefined
            }
          | undefined
        defaultClientRoute?: string | undefined
        customizations?: { javascript?: string | undefined; css?: string | undefined } | undefined
      }
    | undefined
  theme?: { default?: string | undefined } | undefined
  services?: { twitter?: { username?: string | undefined } | undefined } | undefined
  cache?:
    | {
        previews?: { size?: number | undefined } | undefined
        captions?: { size?: number | undefined } | undefined
      }
    | undefined
  signup?:
    | {
        enabled?: boolean | undefined
        limit?: number | undefined
        requiresEmailVerification?: boolean | undefined
      }
    | undefined
  admin?: { email?: string | undefined } | undefined
  contactForm?: { enabled?: boolean | undefined } | undefined
  user?: { videoQuota?: number | undefined; videoQuotaDaily?: number | undefined } | undefined
  transcoding?:
    | {
        enabled?: boolean | undefined
        originalFile?: { keep?: boolean | undefined } | undefined
        allowAdditionalExtensions?: boolean | undefined
        allowAudioFiles?: boolean | undefined
        threads?: number | undefined
        concurrency?: number | undefined
        profile?: 'default' | undefined
        resolutions?:
          | {
              '0p'?: boolean | undefined
              '144p'?: boolean | undefined
              '240p'?: boolean | undefined
              '360p'?: boolean | undefined
              '480p'?: boolean | undefined
              '720p'?: boolean | undefined
              '1080p'?: boolean | undefined
              '1440p'?: boolean | undefined
              '2160p'?: boolean | undefined
            }
          | undefined
        web_videos?: { enabled?: boolean | undefined } | undefined
        hls?:
          | { enabled?: boolean | undefined; splitAudioAndVideo?: boolean | undefined }
          | undefined
      }
    | undefined
  import?:
    | {
        videos?:
          | {
              http?: { enabled?: boolean | undefined } | undefined
              torrent?: { enabled?: boolean | undefined } | undefined
            }
          | undefined
        video_channel_synchronization?: { enabled?: boolean | undefined } | undefined
      }
    | undefined
  autoBlacklist?:
    | { videos?: { ofUsers?: { enabled?: boolean | undefined } | undefined } | undefined }
    | undefined
  blocklist?: { publicLog?: { enabled?: boolean | undefined } | undefined } | undefined
  followers?:
    | {
        instance?:
          | { enabled?: boolean | undefined; manualApproval?: boolean | undefined }
          | undefined
      }
    | undefined
  storyboard?: { enabled?: boolean | undefined } | undefined
  defaults?:
    | {
        publish?:
          | {
              downloadEnabled?: boolean | undefined
              commentsPolicy?: VideoCommentsPolicySet | undefined
              recommendationScope?: VideoRecommendationScopeSet | undefined
              privacy?: VideoPrivacySet | undefined
              licence?: VideoLicenceSet | undefined
            }
          | undefined
        p2p?:
          | {
              webapp?: { enabled?: boolean | undefined } | undefined
              embed?: { enabled?: boolean | undefined } | undefined
            }
          | undefined
        player?: { autoPlay?: boolean | undefined } | undefined
      }
    | undefined
}
type CustomHomepage = { content?: string | undefined }
type JobType =
  | 'activitypub-cleaner'
  | 'activitypub-follow'
  | 'activitypub-http-broadcast'
  | 'activitypub-http-broadcast-parallel'
  | 'activitypub-http-fetcher'
  | 'activitypub-http-unicast'
  | 'activitypub-refresher'
  | 'actor-keys'
  | 'after-video-channel-import'
  | 'build-automatic-tags'
  | 'build-object-automatic-tags'
  | 'create-user-export'
  | 'email'
  | 'federate-video'
  | 'generate-video-storyboard'
  | 'import-user-archive'
  | 'manage-video-torrent'
  | 'move-to-file-system'
  | 'move-to-object-storage'
  | 'notify'
  | 'transcoding-job-builder'
  | 'video-channel-import'
  | 'video-file-import'
  | 'video-files-lifecycle'
  | 'video-import'
  | 'video-live-ending'
  | 'video-redundancy'
  | 'video-studio-edition'
  | 'video-transcoding'
  | 'video-transcription'
  | 'videos-stats'
type Job = {
  id?: Id | undefined
  state?: 'active' | 'completed' | 'failed' | 'waiting' | 'delayed' | undefined
  type?: JobType | undefined
  data?: { [x: string]: unknown } | undefined
  error?: { [x: string]: unknown } | undefined
  createdAt?: string | undefined
  finishedOn?: string | undefined
  processedOn?: string | undefined
  canCancel?: boolean | undefined
}
type Username = string
type Password = string
type UsernameChannel = string
type UserRole = 0 | 1 | 2
type UserAdminFlags = 0 | 1
type AddUser = {
  username: Username
  password: Password
  email: string
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
  channelName?: UsernameChannel | undefined
  role: UserRole
  adminFlags?: UserAdminFlags | undefined
  currentPassword?: {} | undefined
}
type AddUserResponse = {
  user?: { id?: Id | undefined; account?: { id?: Id | undefined } | undefined } | undefined
}
type NSFWPolicy = 'display' | 'warn' | 'do_not_list'
type NotificationSettingValue = number
type UserNotificationSettings = {
  abuseAsModerator?: NotificationSettingValue | undefined
  videoAutoBlacklistAsModerator?: NotificationSettingValue | undefined
  newUserRegistration?: NotificationSettingValue | undefined
  newVideoFromSubscription?: NotificationSettingValue | undefined
  blacklistOnMyVideo?: NotificationSettingValue | undefined
  myVideoPublished?: NotificationSettingValue | undefined
  myVideoImportFinished?: NotificationSettingValue | undefined
  commentMention?: NotificationSettingValue | undefined
  newCommentOnMyVideo?: NotificationSettingValue | undefined
  newFollow?: NotificationSettingValue | undefined
  newInstanceFollower?: NotificationSettingValue | undefined
  autoInstanceFollowing?: NotificationSettingValue | undefined
  abuseStateChange?: NotificationSettingValue | undefined
  abuseNewMessage?: NotificationSettingValue | undefined
  newPeerTubeVersion?: NotificationSettingValue | undefined
  newPluginVersion?: NotificationSettingValue | undefined
  myVideoStudioEditionFinished?: NotificationSettingValue | undefined
  myVideoTranscriptionGenerated?: NotificationSettingValue | undefined
}
type VideoChannel = {
  id?: Id | undefined
  url?: string | undefined
  name?: {} | undefined
  avatars?: ActorImage[] | undefined
  host?: string | undefined
  hostRedundancyAllowed?: (boolean | null) | undefined
  followingCount?: number | undefined
  followersCount?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  displayName?: string | undefined
  description?: (string | null) | undefined
  support?: (string | null) | undefined
  publicEmail?: (string | null) | undefined
  isLocal?: boolean | undefined
  banners?: ActorImage[] | undefined
  ownerAccount?: Account | undefined
  videosCount?: number | undefined
  viewsPerDay?: { date?: string | undefined; views?: number | undefined }[] | undefined
  viewsGroupInterval?: 'day' | 'week' | 'month' | undefined
  totalViews?: number | undefined
}
type User = {
  id?: Id | undefined
  username?: Username | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  nsfwPolicy?: NSFWPolicy | undefined
  nsfwFlagsDisplayed?: NSFWFlag | undefined
  nsfwFlagsHidden?: NSFWFlag | undefined
  nsfwFlagsWarned?: NSFWFlag | undefined
  nsfwFlagsBlurred?: NSFWFlag | undefined
  aiUsagesHidden?: VideoAIUsageSet[] | undefined
  adminFlags?: UserAdminFlags | undefined
  autoPlayNextVideo?: boolean | undefined
  autoPlayNextVideoPlaylist?: boolean | undefined
  autoPlayVideo?: boolean | undefined
  p2pEnabled?: boolean | undefined
  videosHistoryEnabled?: boolean | undefined
  videoLanguages?: string[] | undefined
  videoCategories?: (number[] | null) | undefined
  videoLive?: 'true' | 'false' | 'both' | undefined
  language?: string | undefined
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
  role?:
    | { id?: UserRole | undefined; label?: 'User' | 'Moderator' | 'Administrator' | undefined }
    | undefined
  theme?: string | undefined
  account?: Account | undefined
  notificationSettings?: UserNotificationSettings | undefined
  videoChannels?: VideoChannel[] | undefined
  blocked?: boolean | undefined
  blockedReason?: string | undefined
  noInstanceConfigWarningModal?: boolean | undefined
  noAccountSetupWarningModal?: boolean | undefined
  noWelcomeModal?: boolean | undefined
  createdAt?: string | undefined
  pluginAuth?: string | undefined
  lastLoginDate?: string | undefined
  twoFactorEnabled?: boolean | undefined
  newFeaturesInfoRead?: number | undefined
}
type UserWithStats = {
  id?: Id | undefined
  username?: Username | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  nsfwPolicy?: NSFWPolicy | undefined
  nsfwFlagsDisplayed?: NSFWFlag | undefined
  nsfwFlagsHidden?: NSFWFlag | undefined
  nsfwFlagsWarned?: NSFWFlag | undefined
  nsfwFlagsBlurred?: NSFWFlag | undefined
  aiUsagesHidden?: VideoAIUsageSet[] | undefined
  adminFlags?: UserAdminFlags | undefined
  autoPlayNextVideo?: boolean | undefined
  autoPlayNextVideoPlaylist?: boolean | undefined
  autoPlayVideo?: boolean | undefined
  p2pEnabled?: boolean | undefined
  videosHistoryEnabled?: boolean | undefined
  videoLanguages?: string[] | undefined
  videoCategories?: (number[] | null) | undefined
  videoLive?: 'true' | 'false' | 'both' | undefined
  language?: string | undefined
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
  role?:
    | { id?: UserRole | undefined; label?: 'User' | 'Moderator' | 'Administrator' | undefined }
    | undefined
  theme?: string | undefined
  account?: Account | undefined
  notificationSettings?: UserNotificationSettings | undefined
  videoChannels?: VideoChannel[] | undefined
  blocked?: boolean | undefined
  blockedReason?: string | undefined
  noInstanceConfigWarningModal?: boolean | undefined
  noAccountSetupWarningModal?: boolean | undefined
  noWelcomeModal?: boolean | undefined
  createdAt?: string | undefined
  pluginAuth?: string | undefined
  lastLoginDate?: string | undefined
  twoFactorEnabled?: boolean | undefined
  newFeaturesInfoRead?: number | undefined
  videosCount?: number | undefined
  abusesCount?: number | undefined
  abusesAcceptedCount?: number | undefined
  abusesCreatedCount?: number | undefined
  videoCommentsCount?: number | undefined
}
type UpdateUser = {
  email?: {} | undefined
  emailVerified?: boolean | undefined
  videoQuota?: number | undefined
  videoQuotaDaily?: number | undefined
  pluginAuth?: (string | null) | undefined
  role?: UserRole | undefined
  adminFlags?: UserAdminFlags | undefined
  password?: Password | undefined
  currentPassword?: {} | undefined
}
type OAuthClient = { client_id?: string | undefined; client_secret?: string | undefined }
type OAuthTokenPassword = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'password' | undefined
  username?: Username | undefined
  password?: Password | undefined
  externalAuthToken?: string | undefined
}
type OAuthTokenRefreshToken = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: 'refresh_token' | undefined
  refresh_token?: string | undefined
}
type TokenSession = {
  id?: number | undefined
  currentSession?: boolean | undefined
  loginDevice?: string | undefined
  loginIP?: string | undefined
  loginDate?: string | undefined
  lastActivityDevice?: string | undefined
  lastActivityIP?: string | undefined
  lastActivityDate?: string | undefined
  createdAt?: string | undefined
}
type RequestTwoFactorResponse = {
  otpRequest?:
    | { requestToken?: string | undefined; secret?: string | undefined; uri?: string | undefined }
    | undefined
}
type UserImportResumable = { filename?: string | undefined }
type UserImportState = 1 | 2 | 3 | 4
type UserExportState = 1 | 2 | 3 | 4
type UpdateMe = {
  password?: Password | undefined
  currentPassword?: Password | undefined
  email?: {} | undefined
  displayName?: string | undefined
  nsfwPolicy?: 'true' | 'false' | 'both' | undefined
  nsfwFlagsDisplayed?: NSFWFlag | undefined
  nsfwFlagsHidden?: NSFWFlag | undefined
  nsfwFlagsWarned?: NSFWFlag | undefined
  nsfwFlagsBlurred?: NSFWFlag | undefined
  aiUsagesHidden?: VideoAIUsageSet[] | undefined
  p2pEnabled?: boolean | undefined
  autoPlayVideo?: boolean | undefined
  autoPlayNextVideo?: boolean | undefined
  autoPlayNextVideoPlaylist?: boolean | undefined
  videosHistoryEnabled?: boolean | undefined
  videoLanguages?: string[] | undefined
  videoCategories?: (number[] | null) | undefined
  videoLive?: 'true' | 'false' | 'both' | undefined
  language?: string | undefined
  theme?: string | undefined
  noInstanceConfigWarningModal?: boolean | undefined
  noAccountSetupWarningModal?: boolean | undefined
  noWelcomeModal?: boolean | undefined
}
type VideoInfo = {
  id?: Id | undefined
  uuid?: unknown | undefined
  name?: unknown | undefined
  state?: unknown | undefined
}
type VideoCommentForOwnerOrAdmin = {
  id?: Id | undefined
  url?: unknown | undefined
  text?: unknown | undefined
  heldForReview?: unknown | undefined
  threadId?: Id | undefined
  inReplyToCommentId?: unknown | undefined
  createdAt?: unknown | undefined
  updatedAt?: unknown | undefined
  account?: Account | undefined
  video?: VideoInfo | undefined
  automaticTags?: string[] | undefined
}
type VideoImport = {
  id?: Id | undefined
  targetUrl?: string | undefined
  magnetUri?: string | undefined
  torrentfile?: File | undefined
  torrentName?: string | undefined
  state?: { id?: 1 | 2 | 3 | 4 | 5 | 6 | undefined; label?: string | undefined } | undefined
  error?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  video?:
    | {
        id?: {} | undefined
        uuid?: {} | undefined
        shortUUID?: {} | undefined
        isLive?: boolean | undefined
        liveSchedules?: LiveSchedule[] | undefined
        createdAt?: string | undefined
        publishedAt?: string | undefined
        updatedAt?: string | undefined
        originallyPublishedAt?: (string | null) | undefined
        category?: { id?: VideoCategorySet | undefined; label?: string | undefined } | undefined
        licence?: { id?: VideoLicenceSet | undefined; label?: string | undefined } | undefined
        language?: { id?: VideoLanguageSet | undefined; label?: string | undefined } | undefined
        privacy?: { id?: VideoPrivacySet | undefined; label?: string | undefined } | undefined
        truncatedDescription?: (string | null) | undefined
        duration?: number | undefined
        aspectRatio?: (number | null) | undefined
        isLocal?: boolean | undefined
        name?: string | undefined
        thumbnailPath?: (string | null) | undefined
        previewPath?: (string | null) | undefined
        thumbnails?: Thumbnail[] | undefined
        embedPath?: string | undefined
        views?: number | undefined
        likes?: number | undefined
        dislikes?: number | undefined
        comments?: number | undefined
        nsfw?: boolean | undefined
        nsfwFlags?: {} | undefined
        nsfwSummary?: string | undefined
        aiUsage?: VideoAIUsageConstant | undefined
        commercialContent?: VideoCommercialContentConstant | undefined
        recommendationScope?: VideoRecommendationScopeConstant | undefined
        waitTranscoding?: (boolean | null) | undefined
        state?:
          | {
              id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | undefined
              label?: string | undefined
            }
          | undefined
        scheduledUpdate?: { privacy?: VideoPrivacySet | undefined; updateAt: string } | undefined
        blacklisted?: (boolean | null) | undefined
        blacklistedReason?: (string | null) | undefined
        account?: AccountSummary | undefined
        channel?: VideoChannelSummary | undefined
        userHistory?: ({ currentTime?: number | undefined } | null) | undefined
        captionLanguages?: string[] | undefined
      }
    | undefined
}
type VideoImportsList = { total?: number | undefined; data?: VideoImport[] | undefined }
type GetMeVideoRating = { id: Id; rating: 'like' | 'dislike' | 'none' }
type VideoChannelList = {
  total?: number | undefined
  data?:
    | {
        id?: Id | undefined
        url?: string | undefined
        name?: {} | undefined
        avatars?: ActorImage[] | undefined
        host?: string | undefined
        hostRedundancyAllowed?: (boolean | null) | undefined
        followingCount?: number | undefined
        followersCount?: number | undefined
        createdAt?: string | undefined
        updatedAt?: string | undefined
        displayName?: string | undefined
        description?: (string | null) | undefined
        support?: (string | null) | undefined
        publicEmail?: (string | null) | undefined
        isLocal?: boolean | undefined
        banners?: ActorImage[] | undefined
        ownerAccount?: Account | undefined
        videosCount?: number | undefined
        viewsPerDay?: { date?: string | undefined; views?: number | undefined }[] | undefined
        viewsGroupInterval?: 'day' | 'week' | 'month' | undefined
        totalViews?: number | undefined
      }[]
    | undefined
}
type NotificationType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
type ActorInfo = {
  id?: Id | undefined
  name?: string | undefined
  displayName?: string | undefined
  host?: string | undefined
  avatars?: ActorImage[] | undefined
}
type Notification = {
  id?: Id | undefined
  type?: NotificationType | undefined
  read?: boolean | undefined
  video?:
    | {
        id?: Id | undefined
        uuid?: unknown | undefined
        name?: unknown | undefined
        state?: unknown | undefined
        channel?: ActorInfo | undefined
      }
    | undefined
  videoImport?:
    | ({
        id?: Id | undefined
        video?:
          | {
              id?: Id | undefined
              uuid?: unknown | undefined
              name?: unknown | undefined
              state?: unknown | undefined
            }
          | undefined
        torrentName?: (string | null) | undefined
        magnetUri?: unknown | undefined
        targetUri?: (string | null) | undefined
      } | null)
    | undefined
  comment?:
    | ({
        id?: Id | undefined
        threadId?: number | undefined
        video?: VideoInfo | undefined
        account?: ActorInfo | undefined
        heldForReview?: boolean | undefined
      } | null)
    | undefined
  videoAbuse?:
    | ({
        id?: Id | undefined
        video?:
          | {
              id?: Id | undefined
              uuid?: unknown | undefined
              name?: unknown | undefined
              state?: unknown | undefined
            }
          | undefined
      } | null)
    | undefined
  videoBlacklist?:
    | ({
        id?: Id | undefined
        video?:
          | {
              id?: Id | undefined
              uuid?: unknown | undefined
              name?: unknown | undefined
              state?: unknown | undefined
            }
          | undefined
      } | null)
    | undefined
  account?:
    | {
        id?: Id | undefined
        name?: string | undefined
        displayName?: string | undefined
        host?: string | undefined
        avatars?: ActorImage[] | undefined
      }
    | undefined
  actorFollow?:
    | ({
        id?: Id | undefined
        follower?: ActorInfo | undefined
        state?: 'pending' | 'accepted' | undefined
        following?:
          | {
              type?: 'account' | 'channel' | 'instance' | undefined
              name?: string | undefined
              displayName?: string | undefined
              host?: string | undefined
            }
          | undefined
      } | null)
    | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type NotificationListResponse = { total?: number | undefined; data?: Notification[] | undefined }
type NewFeatureInfoType = 1
type RegisterUser = {
  username: {}
  password: Password
  email: string
  displayName?: string | undefined
  channel?: { name?: UsernameChannel | undefined; displayName?: string | undefined } | undefined
  signupClient?: 'peertube-app' | undefined
}
type UserRegistrationState = 1 | 2 | 3
type UserRegistrationRequest = {
  username: {}
  password: Password
  email: string
  displayName?: string | undefined
  channel?: { name?: UsernameChannel | undefined; displayName?: string | undefined } | undefined
  signupClient?: 'peertube-app' | undefined
  registrationReason: string
}
type UserRegistrationAcceptOrReject = {
  moderationResponse: string
  preventEmailDelivery?: boolean | undefined
}
type UserRegistration = {
  id?: Id | undefined
  state?: { id?: UserRegistrationState | undefined; label?: string | undefined } | undefined
  registrationReason?: string | undefined
  moderationResponse?: (string | null) | undefined
  username?: string | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  accountDisplayName?: string | undefined
  channelHandle?: string | undefined
  channelDisplayName?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  user?: ({ id?: Id | undefined } | null) | undefined
}
type ChangeOwnershipState = 1 | 2 | 3
type VideoSummary = {
  id?: {} | undefined
  uuid?: {} | undefined
  shortUUID?: {} | undefined
  name?: string | undefined
  isLive?: boolean | undefined
  nsfw?: boolean | undefined
  publishedAt?: string | undefined
  thumbnails?: Thumbnail[] | undefined
  channel?: VideoChannelSummary | undefined
}
type ChangeOwnership = {
  id?: Id | undefined
  state?: { id?: ChangeOwnershipState | undefined; label?: string | undefined } | undefined
  initiatorAccount?: Account | undefined
  nextOwnerAccount?: Account | undefined
  video?: VideoSummary | undefined
  videoChannel?: VideoChannelSummary | undefined
  createdAt?: string | undefined
}
type VideoTokenResponse = {
  files?: { token?: string | undefined; expires?: string | undefined } | undefined
}
type VideoStudioCreateTask = (
  | {
      name?: 'cut' | undefined
      options?: { start?: number | undefined; end?: number | undefined } | undefined
    }
  | { name?: 'add-intro' | undefined; options?: { file?: File | undefined } | undefined }
  | { name?: 'add-outro' | undefined; options?: { file?: File | undefined } | undefined }
  | { name?: 'add-watermark' | undefined; options?: { file?: File | undefined } | undefined }
  | {
      name?: 'remove-segments' | undefined
      options?: { segments: { start: number; end: number }[] } | undefined
    }
)[]
type VideoUploadResponse = {
  video?:
    | { id?: Id | undefined; uuid?: unknown | undefined; shortUUID?: ShortUUID | undefined }
    | undefined
}
type VideoScheduledUpdate = { privacy?: VideoPrivacySet | undefined; updateAt: string }
type AddVideoPasswords = Password[]
type VideoCommentsPolicyConstant = {
  id?: VideoCommentsPolicySet | undefined
  label?: string | undefined
}
type VideoResolutionConstant = { id?: VideoResolutionSet | undefined; label?: string | undefined }
type FileStorage = 0 | 1
type VideoFile = {
  id?: Id | undefined
  magnetUri?: string | undefined
  resolution?: VideoResolutionConstant | undefined
  size?: number | undefined
  torrentUrl?: string | undefined
  torrentDownloadUrl?: string | undefined
  fileUrl?: string | undefined
  playlistUrl?: string | undefined
  fileDownloadUrl?: string | undefined
  fps?: number | undefined
  width?: number | undefined
  height?: number | undefined
  metadataUrl?: string | undefined
  hasAudio?: boolean | undefined
  hasVideo?: boolean | undefined
  storage?: FileStorage | undefined
}
type VideoStreamingPlaylists = {
  id?: Id | undefined
  type?: 1 | undefined
  playlistUrl?: string | undefined
  segmentsSha256Url?: string | undefined
  files?: VideoFile[] | undefined
  redundancies?: { baseUrl?: string | undefined }[] | undefined
}
type VideoDetails = {
  id?: {} | undefined
  uuid?: {} | undefined
  shortUUID?: {} | undefined
  isLive?: boolean | undefined
  liveSchedules?: LiveSchedule[] | undefined
  createdAt?: string | undefined
  publishedAt?: string | undefined
  updatedAt?: string | undefined
  originallyPublishedAt?: (string | null) | undefined
  category?: { id?: VideoCategorySet | undefined; label?: string | undefined } | undefined
  licence?: { id?: VideoLicenceSet | undefined; label?: string | undefined } | undefined
  language?: { id?: VideoLanguageSet | undefined; label?: string | undefined } | undefined
  privacy?: { id?: VideoPrivacySet | undefined; label?: string | undefined } | undefined
  truncatedDescription?: (string | null) | undefined
  duration?: number | undefined
  aspectRatio?: (number | null) | undefined
  isLocal?: boolean | undefined
  name?: string | undefined
  thumbnailPath?: (string | null) | undefined
  previewPath?: (string | null) | undefined
  thumbnails?: Thumbnail[] | undefined
  embedPath?: string | undefined
  views?: number | undefined
  likes?: number | undefined
  dislikes?: number | undefined
  comments?: number | undefined
  nsfw?: boolean | undefined
  nsfwFlags?: {} | undefined
  nsfwSummary?: string | undefined
  aiUsage?: VideoAIUsageConstant | undefined
  commercialContent?: VideoCommercialContentConstant | undefined
  recommendationScope?: VideoRecommendationScopeConstant | undefined
  waitTranscoding?: (boolean | null) | undefined
  state?:
    | {
        id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | undefined
        label?: string | undefined
      }
    | undefined
  scheduledUpdate?: { privacy?: VideoPrivacySet | undefined; updateAt: string } | undefined
  blacklisted?: (boolean | null) | undefined
  blacklistedReason?: (string | null) | undefined
  account?: Account | undefined
  channel?: VideoChannel | undefined
  userHistory?: ({ currentTime?: number | undefined } | null) | undefined
  captionLanguages?: string[] | undefined
  viewers?: number | undefined
  description?: (string | null) | undefined
  support?: (string | null) | undefined
  tags?: string[] | undefined
  commentsPolicy?: VideoCommentsPolicyConstant | undefined
  downloadEnabled?: boolean | undefined
  inputFileUpdatedAt?: (string | null) | undefined
  trackerUrls?: string[] | undefined
  files?: VideoFile[] | undefined
  streamingPlaylists?: VideoStreamingPlaylists[] | undefined
}
type ServerError = {
  type?: string | undefined
  detail?: string | undefined
  status?: number | undefined
  code?: string | undefined
}
type UserViewingVideo = {
  currentTime: number
  viewEvent?: 'seek' | undefined
  sessionId?: string | undefined
  client?: string | undefined
  device?: {} | undefined
  operatingSystem?: string | undefined
}
type VideoStatsOverall = {
  averageWatchTime?: number | undefined
  totalWatchTime?: number | undefined
  viewersPeak?: number | undefined
  totalViewers?: number | undefined
  viewersPeakDate?: string | undefined
  countries?: { isoCode?: string | undefined; viewers?: number | undefined }[] | undefined
  subdivisions?: { name?: string | undefined; viewers?: number | undefined }[] | undefined
}
type VideoStatsUserAgentDevice =
  | 'console'
  | 'embedded'
  | 'mobile'
  | 'smarttv'
  | 'tablet'
  | 'wearable'
  | 'xr'
  | 'desktop'
type VideoStatsUserAgent = {
  clients?: { name?: string | undefined; viewers?: number | undefined }[] | undefined
  devices?:
    | { name?: VideoStatsUserAgentDevice | undefined; viewers?: number | undefined }[]
    | undefined
  operatingSystem?: { name?: string | undefined; viewers?: number | undefined }[] | undefined
}
type VideoStatsRetention = {
  data?: { second?: number | undefined; retentionPercent?: number | undefined }[] | undefined
}
type VideoStatsTimeserie = {
  data?: { date?: string | undefined; value?: number | undefined }[] | undefined
}
type VideoUploadRequestLegacy = {
  name: string
  channelId: number
  privacy?: VideoPrivacySet | undefined
  category?: VideoCategorySet | undefined
  licence?: VideoLicenceSet | undefined
  language?: VideoLanguageSet | undefined
  description?: string | undefined
  waitTranscoding?: boolean | undefined
  generateTranscription?: boolean | undefined
  support?: string | undefined
  nsfw?: boolean | undefined
  nsfwSummary?: { [x: string]: unknown } | undefined
  nsfwFlags?: NSFWFlag | undefined
  tags?: string[] | undefined
  commentsPolicy?: VideoCommentsPolicySet | undefined
  recommendationScope?: VideoRecommendationScopeSet | undefined
  aiUsage?: VideoAIUsageSet | undefined
  commercialContent?: VideoCommercialContentSet | undefined
  downloadEnabled?: boolean | undefined
  originallyPublishedAt?: string | undefined
  scheduleUpdate?: VideoScheduledUpdate | undefined
  thumbnailfile?: File | undefined
  previewfile?: File | undefined
  videoPasswords?: AddVideoPasswords | undefined
  videofile: File
}
type VideoUploadRequestResumable = {
  name: string
  channelId: number
  privacy?: VideoPrivacySet | undefined
  category?: VideoCategorySet | undefined
  licence?: VideoLicenceSet | undefined
  language?: VideoLanguageSet | undefined
  description?: string | undefined
  waitTranscoding?: boolean | undefined
  generateTranscription?: boolean | undefined
  support?: string | undefined
  nsfw?: boolean | undefined
  nsfwSummary?: { [x: string]: unknown } | undefined
  nsfwFlags?: NSFWFlag | undefined
  tags?: string[] | undefined
  commentsPolicy?: VideoCommentsPolicySet | undefined
  recommendationScope?: VideoRecommendationScopeSet | undefined
  aiUsage?: VideoAIUsageSet | undefined
  commercialContent?: VideoCommercialContentSet | undefined
  downloadEnabled?: boolean | undefined
  originallyPublishedAt?: string | undefined
  scheduleUpdate?: VideoScheduledUpdate | undefined
  thumbnailfile?: File | undefined
  previewfile?: File | undefined
  videoPasswords?: AddVideoPasswords | undefined
  filename: string
}
type VideoCreateImport = {
  name: string
  channelId: number
  privacy?: VideoPrivacySet | undefined
  category?: VideoCategorySet | undefined
  licence?: VideoLicenceSet | undefined
  language?: VideoLanguageSet | undefined
  description?: string | undefined
  waitTranscoding?: boolean | undefined
  generateTranscription?: boolean | undefined
  support?: string | undefined
  nsfw?: boolean | undefined
  nsfwSummary?: { [x: string]: unknown } | undefined
  nsfwFlags?: NSFWFlag | undefined
  tags?: string[] | undefined
  commentsPolicy?: VideoCommentsPolicySet | undefined
  recommendationScope?: VideoRecommendationScopeSet | undefined
  aiUsage?: VideoAIUsageSet | undefined
  commercialContent?: VideoCommercialContentSet | undefined
  downloadEnabled?: boolean | undefined
  originallyPublishedAt?: string | undefined
  scheduleUpdate?: VideoScheduledUpdate | undefined
  thumbnailfile?: File | undefined
  previewfile?: File | undefined
  videoPasswords?: AddVideoPasswords | undefined
}
type LiveVideoReplaySettings = { privacy?: VideoPrivacySet | undefined }
type LiveVideoResponse = {
  rtmpUrl?: string | undefined
  rtmpsUrl?: string | undefined
  streamKey?: string | undefined
  saveReplay?: boolean | undefined
  replaySettings?: LiveVideoReplaySettings | undefined
  permanentLive?: boolean | undefined
  latencyMode?: {} | undefined
  dvrWindow?: number | undefined
  schedules?: LiveSchedule[] | undefined
}
type LiveVideoDVRWindow = number
type LiveVideoUpdate = {
  saveReplay?: boolean | undefined
  replaySettings?: LiveVideoReplaySettings | undefined
  permanentLive?: boolean | undefined
  latencyMode?: {} | undefined
  dvrWindow?: LiveVideoDVRWindow | undefined
  schedules?: LiveSchedule[] | undefined
}
type LiveVideoSessionResponse = {
  id?: number | undefined
  startDate?: string | undefined
  endDate?: (string | null) | undefined
  error?: 1 | 2 | 3 | 4 | 5 | undefined
  replayVideo?:
    | { id?: number | undefined; uuid?: UUIDv4 | undefined; shortUUID?: ShortUUID | undefined }
    | undefined
}
type VideoSource = {
  inputFilename?: string | undefined
  fileDownloadUrl?: string | undefined
  resolution?: { id?: VideoResolutionSet | undefined; label?: string | undefined } | undefined
  size?: number | undefined
  fps?: number | undefined
  width?: number | undefined
  height?: number | undefined
  createdAt?: string | undefined
}
type VideoReplaceSourceRequestResumable = { filename?: string | undefined }
type AbuseStateSet = 1 | 2 | 3
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
type AbuseStateConstant = { id?: AbuseStateSet | undefined; label?: string | undefined }
type Abuse = {
  id?: Id | undefined
  reason?: string | undefined
  predefinedReasons?: AbusePredefinedReasons | undefined
  reporterAccount?: Account | undefined
  state?: AbuseStateConstant | undefined
  moderationComment?: string | undefined
  video?:
    | {
        id?: number | undefined
        uuid?: UUIDv4 | undefined
        shortUUID?: ShortUUID | undefined
        name?: string | undefined
        nsfw?: boolean | undefined
        startAt?: string | undefined
        endAt?: string | undefined
        deleted?: boolean | undefined
        blacklisted?: boolean | undefined
        thumbnailPath?: (string | null) | undefined
        thumbnails?: Thumbnail[] | undefined
        channel?: VideoChannel | undefined
      }
    | undefined
  createdAt?: string | undefined
}
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
type AbuseMessage = {
  id?: Id | undefined
  message?: string | undefined
  byModerator?: boolean | undefined
  createdAt?: string | undefined
  account?: AccountSummary | undefined
}
type VideoBlacklistCreate = {
  reason?: string | undefined
  unfederate?: boolean | undefined
  internalNote?: string | undefined
}
type VideoBlacklistUpdate = { reason?: string | undefined; internalNote?: string | undefined }
type VideoBlacklist = {
  id?: Id | undefined
  reason?: string | undefined
  internalNote?: string | undefined
  unfederated?: boolean | undefined
  type?: number | undefined
  video?: Video | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type Storyboard = {
  storyboardPath?: (string | null) | undefined
  fileUrl?: string | undefined
  totalHeight?: number | undefined
  totalWidth?: number | undefined
  spriteHeight?: number | undefined
  spriteWidth?: number | undefined
  spriteDuration?: number | undefined
}
type VideoConstantStringLanguage = { id?: VideoLanguageSet | undefined; label?: string | undefined }
type VideoCaption = {
  language?: VideoConstantStringLanguage | undefined
  automaticallyGenerated?: boolean | undefined
  captionPath?: (string | null) | undefined
  fileUrl?: string | undefined
  m3u8Url?: string | undefined
  updatedAt?: string | undefined
}
type VideoChapters = {
  chapters?: { title?: string | undefined; timecode?: number | undefined } | undefined
}
type VideoEmbedPrivacy = 1 | 2 | 3 | 4
type VideoPassword = {
  id?: Id | undefined
  password?: string | undefined
  videoId?: Id | undefined
}
type VideoPasswordList = { total?: number | undefined; data?: VideoPassword[] | undefined }
type VideoChannelCreate = {
  displayName?: { [x: string]: unknown } | undefined
  description?: { [x: string]: unknown } | undefined
  support?: { [x: string]: unknown } | undefined
  publicEmail?: (string | null) | undefined
  name?: {} | undefined
}
type VideoChannelUpdate = {
  displayName?: { [x: string]: unknown } | undefined
  description?: { [x: string]: unknown } | undefined
  support?: { [x: string]: unknown } | undefined
  publicEmail?: (string | null) | undefined
  bulkVideosSupportUpdate?: boolean | undefined
}
type VideoChannelActivityAction = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
type VideoChannelActivityTarget = 1 | 2 | 3 | 4 | 5
type ChannelActivityListResponse = {
  total?: number | undefined
  data?:
    | {
        id?: number | undefined
        account?: AccountSummary | undefined
        action?:
          | { id?: VideoChannelActivityAction | undefined; label?: string | undefined }
          | undefined
        targetType?:
          | { id?: VideoChannelActivityTarget | undefined; label?: string | undefined }
          | undefined
        details?: { [x: string]: unknown } | undefined
        createdAt?: string | undefined
        channel?:
          | {
              id?: Id | undefined
              name?: string | undefined
              displayName?: string | undefined
              url?: string | undefined
            }
          | undefined
        video?:
          | ({
              id?: Id | undefined
              name?: string | undefined
              uuid?: UUIDv4 | undefined
              shortUUID?: ShortUUID | undefined
              url?: string | undefined
              isLive?: boolean | undefined
            } | null)
          | undefined
        videoImport?:
          | ({
              id?: Id | undefined
              name?: string | undefined
              uuid?: UUIDv4 | undefined
              shortUUID?: ShortUUID | undefined
              url?: string | undefined
              targetUrl?: string | undefined
            } | null)
          | undefined
        playlist?:
          | ({
              id?: Id | undefined
              name?: string | undefined
              uuid?: UUIDv4 | undefined
              shortUUID?: ShortUUID | undefined
              url?: string | undefined
            } | null)
          | undefined
        channelSync?:
          | ({ id?: Id | undefined; externalChannelUrl?: string | undefined } | null)
          | undefined
      }[]
    | undefined
}
type VideoPlaylistTypeSet = 1 | 2
type VideoPlaylistPrivacySet = 1 | 2 | 3
type VideoPlaylistPrivacyConstant = {
  id?: VideoPlaylistPrivacySet | undefined
  label?: string | undefined
}
type VideoPlaylistTypeConstant = {
  id?: VideoPlaylistTypeSet | undefined
  label?: string | undefined
}
type VideoPlaylist = {
  id?: Id | undefined
  uuid?: UUIDv4 | undefined
  shortUUID?: {} | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  isLocal?: boolean | undefined
  videosLength?: number | undefined
  thumbnailPath?: (string | null) | undefined
  thumbnails?: Thumbnail[] | undefined
  privacy?: VideoPlaylistPrivacyConstant | undefined
  type?: VideoPlaylistTypeConstant | undefined
  ownerAccount?: AccountSummary | undefined
  videoChannel?: VideoChannelSummary | undefined
  videoChannelPosition?: number | undefined
}
type ImportVideosInChannelCreate = {
  externalChannelUrl: string
  videoChannelSyncId?: number | undefined
}
type VideoChannelSyncCreate = {
  externalChannelUrl?: string | undefined
  videoChannelId?: Id | undefined
  videoPrivacy?: number | undefined
}
type VideoChannelSync = {
  id?: Id | undefined
  state?: { id?: number | undefined; label?: string | undefined } | undefined
  externalChannelUrl?: string | undefined
  createdAt?: string | undefined
  lastSyncAt?: (string | null) | undefined
  channel?: VideoChannel | undefined
  videoPrivacy?: (number | null) | undefined
}
type PlayerThemeVideoSetting = 'channel-default' | 'instance-default' | 'galaxy' | 'lucide'
type PlayerVideoSettings = { theme?: PlayerThemeVideoSetting | undefined }
type PlayerVideoSettingsUpdate = { theme: PlayerThemeVideoSetting }
type PlayerThemeChannelSetting = 'instance-default' | 'galaxy' | 'lucide'
type PlayerChannelSettings = { theme?: PlayerThemeChannelSetting | undefined }
type PlayerChannelSettingsUpdate = { theme: PlayerThemeChannelSetting }
type VideoChannelSyncList = {
  total?: number | undefined
  data?:
    | {
        id?: Id | undefined
        state?: { id?: number | undefined; label?: string | undefined } | undefined
        externalChannelUrl?: string | undefined
        createdAt?: string | undefined
        lastSyncAt?: (string | null) | undefined
        channel?: VideoChannel | undefined
        videoPrivacy?: (number | null) | undefined
      }[]
    | undefined
}
type VideoRating = { video: Video; rating: 'like' | 'dislike' | 'none' }
type VideoComment = {
  id?: Id | undefined
  url?: string | undefined
  text?: string | undefined
  threadId?: Id | undefined
  inReplyToCommentId?: {} | undefined
  videoId?: Id | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  deletedAt?: (string | null) | undefined
  isDeleted?: boolean | undefined
  heldForReview?: boolean | undefined
  totalRepliesFromVideoAuthor?: number | undefined
  totalReplies?: number | undefined
  account?: Account | undefined
}
type CommentThreadResponse = {
  total?: number | undefined
  totalNotDeletedComments?: number | undefined
  data?: VideoComment[] | undefined
}
type CommentThreadPostResponse = { comment?: VideoComment | undefined }
type VideoCommentThreadTree = {
  comment?: VideoComment | undefined
  children?: VideoCommentThreadTree[] | undefined
  totalChildren?: number | undefined
}
type BlockStatus = {
  accounts?:
    | {
        [x: string]: {
          blockedByServer?: boolean | undefined
          blockedByServerSubscription?: string | undefined
          blockedByUser?: boolean | undefined
        }
      }
    | undefined
  hosts?:
    | {
        [x: string]: {
          blockedByServer?: boolean | undefined
          blockedByServerSubscription?: string | undefined
          blockedByUser?: boolean | undefined
        }
      }
    | undefined
}
type BlocklistSubscriptionSummary = {
  id?: Id | undefined
  name?: string | undefined
  url?: string | undefined
}
type AccountBlock = {
  byAccount?: Account | undefined
  blockedAccount?: Account | undefined
  blocklistSubscription?: BlocklistSubscriptionSummary | undefined
  createdAt?: string | undefined
}
type ServerBlock = {
  byAccount?: Account | undefined
  blockedServer?: { host?: string | undefined } | undefined
  blocklistSubscription?: BlocklistSubscriptionSummary | undefined
  createdAt?: string | undefined
}
type BlocklistSubscription = {
  id?: Id | undefined
  name?: string | undefined
  url?: string | undefined
  mutedAccountsCount?: number | undefined
  mutedServersCount?: number | undefined
  lastSyncAt?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type AutoMuteList = {
  name?: string | undefined
  actions?:
    | {
        type?: 'block' | 'unblock' | undefined
        target?: string | undefined
        createdAt?: string | undefined
      }[]
    | undefined
}
type FileRedundancyInformation = {
  id?: Id | undefined
  fileUrl?: string | undefined
  strategy?: 'manual' | 'most-views' | 'trending' | 'recently-added' | undefined
  size?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  expiresOn?: string | undefined
}
type VideoRedundancy = {
  id?: Id | undefined
  name?: string | undefined
  url?: string | undefined
  uuid?: UUIDv4 | undefined
  redundancies?: { streamingPlaylists?: FileRedundancyInformation[] | undefined } | undefined
}
type ServerStats = {
  totalUsers?: number | undefined
  totalDailyActiveUsers?: number | undefined
  totalWeeklyActiveUsers?: number | undefined
  totalMonthlyActiveUsers?: number | undefined
  totalModerators?: number | undefined
  totalAdmins?: number | undefined
  totalLocalVideos?: number | undefined
  totalLocalVideoViews?: number | undefined
  totalLocalVideoDownloads?: number | undefined
  totalLocalVideoComments?: number | undefined
  totalLocalVideoFilesSize?: number | undefined
  totalVideos?: number | undefined
  totalVideoComments?: number | undefined
  totalLocalVideoChannels?: number | undefined
  totalLocalDailyActiveVideoChannels?: number | undefined
  totalLocalWeeklyActiveVideoChannels?: number | undefined
  totalLocalMonthlyActiveVideoChannels?: number | undefined
  totalLocalPlaylists?: number | undefined
  totalInstanceFollowers?: number | undefined
  totalInstanceFollowing?: number | undefined
  videosRedundancy?:
    | {
        strategy?: string | undefined
        totalSize?: number | undefined
        totalUsed?: number | undefined
        totalVideoFiles?: number | undefined
        totalVideos?: number | undefined
      }[]
    | undefined
  totalActivityPubMessagesProcessed?: number | undefined
  totalActivityPubMessagesSuccesses?: number | undefined
  totalActivityPubMessagesErrors?: number | undefined
  activityPubMessagesProcessedPerSecond?: number | undefined
  totalActivityPubMessagesWaiting?: number | undefined
  averageRegistrationRequestResponseTimeMs?: number | undefined
  totalRegistrationRequestsProcessed?: number | undefined
  totalRegistrationRequests?: number | undefined
  averageAbuseResponseTimeMs?: number | undefined
  totalAbusesProcessed?: number | undefined
  totalAbuses?: number | undefined
}
type SendClientLog = {
  message: string
  url: string
  level: 'error' | 'warn'
  stackTrace?: string | undefined
  userAgent?: string | undefined
  meta?: string | undefined
}
type AuditLogEntityType =
  | 'video'
  | 'video-import'
  | 'video-live'
  | 'video-source'
  | 'video-file'
  | 'video-caption'
  | 'video-chapters'
  | 'video-password'
  | 'video-embed-privacy'
  | 'video-transcoding'
  | 'video-transcription'
  | 'video-studio-edition'
  | 'video-player-settings'
  | 'ownership-change'
  | 'comment'
  | 'channel'
  | 'channel-sync'
  | 'channel-videos-import'
  | 'channel-collaborator'
  | 'channel-player-settings'
  | 'channel-playlists-order'
  | 'playlist'
  | 'playlist-element'
  | 'playlist-elements-order'
  | 'user'
  | 'registration'
  | 'password-reset'
  | 'token-session'
  | 'failed-login'
  | 'scoped-token'
  | 'user-export'
  | 'user-import'
  | 'abuse'
  | 'abuse-message'
  | 'video-block'
  | 'account-block'
  | 'server-block'
  | 'blocklist-subscription'
  | 'watched-words-list'
  | 'watched-words-subscription'
  | 'automatic-tag-policy'
  | 'config'
  | 'instance-image'
  | 'instance-homepage'
  | 'instance-host'
  | 'plugin'
  | 'follow'
  | 'server-redundancy'
  | 'video-redundancy'
  | 'job-queue'
  | 'job'
  | 'runner'
  | 'runner-registration-token'
  | 'debug-command'
  | 'storage-prune'
type AuditLogAction = 'create' | 'update' | 'delete'
type AuditLog = {
  id?: Id | undefined
  action?: AuditLogAction | undefined
  entityType?: AuditLogEntityType | undefined
  entityId?: (number | null) | undefined
  user?: { id?: (number | null) | undefined; username?: string | undefined } | undefined
  ip?: (string | null) | undefined
  entity?: { [x: string]: unknown } | undefined
  changes?:
    | ({
        [x: string]: {
          old?: { [x: string]: unknown } | undefined
          new?: { [x: string]: unknown } | undefined
        }
      } | null)
    | undefined
  createdAt?: string | undefined
  timestamp?: string | undefined
  level?: 'audit' | undefined
  message?: string | undefined
}
type Plugin = {
  name?: string | undefined
  type?: 1 | 2 | undefined
  latestVersion?: string | undefined
  version?: string | undefined
  enabled?: boolean | undefined
  uninstalled?: boolean | undefined
  peertubeEngine?: string | undefined
  description?: string | undefined
  homepage?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type PluginResponse = { total?: number | undefined; data?: Plugin[] | undefined }
type CurrentPassword = string
type PlaybackMetricCreate = {
  playerMode: 'p2p-media-loader' | 'web-video'
  resolution?: number | undefined
  fps?: number | undefined
  p2pEnabled: boolean
  p2pPeers?: number | undefined
  resolutionChanges: number
  bufferStalled?: number | undefined
  errors: number
  downloadedBytesP2P: number
  downloadedBytesHTTP: number
  uploadedBytesP2P: number
  videoId: Id | UUIDv4 | ShortUUID
}
type RunnerRegistrationToken = {
  id?: number | undefined
  registrationToken?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  registeredRunnersCount?: number | undefined
}
type RunnerVersion = string
type Runner = {
  id?: number | undefined
  name?: string | undefined
  description?: string | undefined
  ip?: string | undefined
  updatedAt?: string | undefined
  createdAt?: string | undefined
  lastContact?: string | undefined
  version?: (string | null) | undefined
}
type RunnerJobType =
  | 'vod-web-video-transcoding'
  | 'vod-hls-transcoding'
  | 'vod-audio-merge-transcoding'
  | 'live-rtmp-hls-transcoding'
type RunnerJobPayload =
  | {
      input?: { videoFileUrl?: string | undefined } | undefined
      output?: { resolution?: number | undefined; fps?: number | undefined } | undefined
    }
  | {
      input?: { videoFileUrl?: string | undefined } | undefined
      output?: { resolution?: number | undefined; fps?: number | undefined } | undefined
    }
  | {
      input?: { audioFileUrl?: string | undefined; previewFileUrl?: string | undefined } | undefined
      output?: { resolution?: number | undefined; fps?: number | undefined } | undefined
    }
type RunnerJobState = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type RunnerJobStateConstant = { id?: RunnerJobState | undefined; label?: string | undefined }
type RunnerJobAdmin = {
  uuid?: UUIDv4 | undefined
  type?: RunnerJobType | undefined
  state?: RunnerJobStateConstant | undefined
  payload?: RunnerJobPayload | undefined
  failures?: number | undefined
  error?: (string | null) | undefined
  progress?: number | undefined
  priority?: number | undefined
  updatedAt?: string | undefined
  createdAt?: string | undefined
  startedAt?: string | undefined
  finishedAt?: string | undefined
  parent?:
    | ({
        type?: RunnerJobType | undefined
        state?: RunnerJobStateConstant | undefined
        uuid?: UUIDv4 | undefined
      } | null)
    | undefined
  runner?:
    | ({
        id?: number | undefined
        name?: string | undefined
        description?: string | undefined
      } | null)
    | undefined
  privatePayload?: { [x: string]: unknown } | undefined
}
type CommentAutoTagPolicies = { review?: string[] | undefined }
type AutomaticTagAvailable = {
  available?:
    | { name?: string | undefined; type?: 'core' | 'watched-words-list' | undefined }[]
    | undefined
}
type VideoAutoTagPolicies = { autoBlock?: string[] | undefined }
type WatchedWordsLists = {
  id?: Id | undefined
  listName?: string | undefined
  words?: string[] | undefined
  subscriptionUrl?: (string | null) | undefined
  updatedAt?: string | undefined
  createdAt?: string | undefined
}
type WatchedWordsSubscription = {
  id?: Id | undefined
  name?: string | undefined
  url?: string | undefined
  importedWordsCount?: number | undefined
  lastSyncAt?: (string | null) | undefined
  state?: { id?: 1 | 2 | 3 | 4 | undefined; label?: string | undefined } | undefined
  updatedAt?: string | undefined
  createdAt?: string | undefined
}
type VideoChannelCollaboratorState = 1 | 2
type VideoChannelCollaborator = {
  id?: Id | undefined
  account?: AccountSummary | undefined
  state?: { id?: VideoChannelCollaboratorState | undefined; label?: string | undefined } | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/static/web-videos/:filename': {
      $get:
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/static/web-videos/private/:filename': {
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
    '/static/streaming-playlists/hls/:filename': {
      $get:
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 404 }
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
    '/download/videos/generate/:videoIdOrUUID': {
      $get: {
        input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
          query: { videoFileIds: number[]; videoFileToken?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/feeds/video-comments.:format': {
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 200
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 200
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 200
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
              }
            }
            output: VideoCommentsForXML
            outputFormat: 'text'
            status: 200
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
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
                isLocal?: boolean | undefined
                onLocalVideo?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/feeds/videos.:format': {
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/feeds/subscriptions.:format': {
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: VideosForXML
            outputFormat: 'text'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
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
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/feeds/podcast/videos.xml': {
      $get:
        | {
            input: {
              query: {
                videoChannelId?: string | undefined
                playlistId?: string | undefined
                enclosurePreference?: 'video-only' | 'audio-only' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                videoChannelId?: string | undefined
                playlistId?: string | undefined
                enclosurePreference?: 'video-only' | 'audio-only' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/feeds/podcast/video-chapters.json': {
      $get:
        | {
            input: { query: { videoId: string } }
            output: PodcastChapters
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { videoId: string } }
            output: PodcastChapters
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { videoId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { videoId: string } }; output: {}; outputFormat: string; status: 406 }
    }
  } & {
    '/api/v1/accounts/:name': {
      $get:
        | { input: { param: { name: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/accounts/:name/videos': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            skipCount?: 'true' | 'false' | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-comments'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
            nsfw?: 'true' | 'false' | undefined
            nsfwFlagsIncluded?: NSFWFlag | undefined
            nsfwFlagsExcluded?: NSFWFlag | undefined
            aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
            isLive?: boolean | undefined
            includeScheduledLive?: boolean | undefined
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
            hasHLSFiles?: boolean | undefined
            hasWebVideoFiles?: boolean | undefined
            host?: string | undefined
            autoTagOneOf?: string | string[] | undefined
            stateOneOf?: Id | Id[] | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            excludeAlreadyWatched?: boolean | undefined
            search?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
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
        output: { total?: number | undefined; data?: Follow[] | undefined }
        outputFormat: 'json'
        status: 200
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
        output: { total?: number | undefined; data?: Account[] | undefined }
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
      $get: {
        input: { header: { 'x-peertube-language'?: string | undefined } }
        output: ServerConfigAbout
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/config/custom': {
      $get: { input: {}; output: ServerConfigCustom; outputFormat: 'json'; status: 200 }
      $put:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/config/instance-banner/pick': {
      $post:
        | {
            input: { form: { bannerfile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { form: { bannerfile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/config/instance-banner': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/config/instance-avatar/pick': {
      $post:
        | {
            input: { form: { avatarfile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { form: { avatarfile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/config/instance-avatar': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/config/instance-logo/:logoType/pick': {
      $post:
        | {
            input: {
              param: { logoType: 'favicon' | 'header-wide' | 'header-square' | 'opengraph' }
            } & { form: { logofile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { logoType: 'favicon' | 'header-wide' | 'header-square' | 'opengraph' }
            } & { form: { logofile?: File | undefined } }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/config/instance-logo/:logoType': {
      $delete: {
        input: { param: { logoType: 'favicon' | 'header-wide' | 'header-square' | 'opengraph' } }
        output: {}
        outputFormat: string
        status: 204
      }
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
    '/api/v1/jobs/pause': {
      $post: {
        input: { json: { processRoles?: ('primary' | 'secondary')[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/jobs/resume': {
      $post: {
        input: { json: { processRoles?: ('primary' | 'secondary')[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/jobs/:state': {
      $get: {
        input: {
          param: { state: '' | 'active' | 'completed' | 'failed' | 'waiting' | 'delayed' }
        } & {
          query: {
            jobType?: JobType | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: { total?: number | undefined; data?: Job[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/jobs/:jobType/:jobId/cancel': {
      $post:
        | {
            input: { param: { jobType: JobType; jobId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { jobType: JobType; jobId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { jobType: JobType; jobId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
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
        output: { total?: number | undefined; data?: Follow[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/server/followers/:handle': {
      $delete:
        | { input: { param: { handle: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { handle: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/server/followers/:handle/reject': {
      $post:
        | { input: { param: { handle: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { handle: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/server/followers/:handle/accept': {
      $post:
        | { input: { param: { handle: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { handle: string } }; output: {}; outputFormat: string; status: 404 }
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
        output: { total?: number | undefined; data?: Follow[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { hosts?: string[] | undefined; handles?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { hosts?: string[] | undefined; handles?: string[] | undefined } }
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
    '/api/v1/users': {
      $post:
        | { input: { json: AddUser }; output: AddUserResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: AddUser }; output: {}; outputFormat: string; status: 403 }
      $get: {
        input: {
          query: {
            search?: string | undefined
            blocked?: boolean | undefined
            role?: UserRole | undefined
            start?: number | undefined
            count?: number | undefined
            sort?: '-id' | '-username' | '-createdAt' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
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
    '/api/v1/users/:id/block': {
      $post:
        | {
            input: { param: { id: Id } } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id } } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: { reason?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/:id/unblock': {
      $post:
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/oauth-clients/local': {
      $get: { input: {}; output: OAuthClient; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/users/token': {
      $post:
        | {
            input: { header: { 'x-peertube-otp'?: string | undefined } } & {
              json: OAuthTokenPassword | OAuthTokenRefreshToken
            } & { form: OAuthTokenPassword | OAuthTokenRefreshToken }
            output: {
              token_type?: string | undefined
              access_token?: string | undefined
              refresh_token?: string | undefined
              expires_in?: number | undefined
              refresh_token_expires_in?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-peertube-otp'?: string | undefined } } & {
              json: OAuthTokenPassword | OAuthTokenRefreshToken
            } & { form: OAuthTokenPassword | OAuthTokenRefreshToken }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'x-peertube-otp'?: string | undefined } } & {
              json: OAuthTokenPassword | OAuthTokenRefreshToken
            } & { form: OAuthTokenPassword | OAuthTokenRefreshToken }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/users/revoke-token': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/users/:id/token-sessions': {
      $get: {
        input: { param: { id: Id } }
        output: { total?: number | undefined; data?: TokenSession[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/:id/token-sessions/:tokenSessionId/revoke': {
      $post: {
        input: { param: { id: Id; tokenSessionId: Id } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/users/ask-send-verify-email': {
      $post: { input: { json: { email: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/registrations/ask-send-verify-email': {
      $post: { input: { json: { email: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/:id/verify-email': {
      $post:
        | {
            input: { param: { id: Id } } & {
              json: { verificationString: string; isPendingEmail?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & {
              json: { verificationString: string; isPendingEmail?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & {
              json: { verificationString: string; isPendingEmail?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
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
    '/api/v1/users/ask-reset-password': {
      $post: { input: { json: { email: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/:id/reset-password': {
      $post:
        | {
            input: { param: { id: Id } } & {
              json: { verificationString: string; password: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & {
              json: { verificationString: string; password: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & {
              json: { verificationString: string; password: string }
            }
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
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/users/:id/two-factor/confirm-request': {
      $post:
        | {
            input: { param: { id: Id } } & { json: { requestToken: string; otpToken: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id } } & { json: { requestToken: string; otpToken: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id } } & { json: { requestToken: string; otpToken: string } }
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
        | {
            input: { param: { id: Id } } & { json: { currentPassword?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/users/:userId/imports/import-resumable': {
      $post: {
        input: { param: { userId: Id } } & {
          header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
        } & { json: UserImportResumable }
        output: {}
        outputFormat: string
        status: 201
      }
      $put:
        | {
            input: { param: { userId: Id } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userId: Id } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { param: { userId: Id } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { userId: Id } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 503
          }
      $delete: {
        input: { param: { userId: Id } } & { query: { upload_id: string } } & {
          header: { 'Content-Length': number }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/:userId/imports/latest': {
      $get: {
        input: { param: { userId: Id } }
        output: {
          id?: number | undefined
          state?: { id?: UserImportState | undefined; label?: string | undefined } | undefined
          createdAt?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/exports/request': {
      $post: {
        input: { param: { userId: Id } } & { json: { withVideoFiles?: boolean | undefined } }
        output: { export?: { id?: number | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/exports': {
      $get: {
        input: { param: { userId: Id } }
        output: {
          id?: number | undefined
          state?: { id?: UserExportState | undefined; label?: string | undefined } | undefined
          size?: number | undefined
          privateDownloadUrl?: string | undefined
          createdAt?: string | undefined
          expiresOn?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/:userId/exports/:id': {
      $delete: {
        input: { param: { userId: Id; id: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/me': {
      $get: { input: {}; output: User[]; outputFormat: 'json'; status: 200 }
      $put: { input: { json: UpdateMe }; output: {}; outputFormat: string; status: 204 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api/v1/users/me/videos/comments': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            searchAccount?: string | undefined
            searchVideo?: string | undefined
            videoId?: number | undefined
            videoChannelId?: number | undefined
            autoTagOneOf?: string | string[] | undefined
            isHeldForReview?: boolean | undefined
            includeCollaborations?: boolean | undefined
          }
        }
        output: { total?: number | undefined; data?: VideoCommentForOwnerOrAdmin[] | undefined }
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
            includeCollaborations?: boolean | undefined
            videoId?: number | undefined
            targetUrl?: string | undefined
            videoChannelSyncId?: number | undefined
            search?: string | undefined
            stateOneOf?: Id[] | undefined
          }
        }
        output: VideoImportsList
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
    '/api/v1/users/me/videos/:videoIdOrUUID/rating': {
      $get: {
        input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } }
        output: GetMeVideoRating
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/videos': {
      $get: {
        input: {
          query: {
            channelNameOneOf?: string | string[] | undefined
            start?: number | undefined
            count?: number | undefined
            skipCount?: 'true' | 'false' | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-comments'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
            nsfw?: 'true' | 'false' | undefined
            nsfwFlagsIncluded?: NSFWFlag | undefined
            nsfwFlagsExcluded?: NSFWFlag | undefined
            aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
            isLive?: boolean | undefined
            includeScheduledLive?: boolean | undefined
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
            hasHLSFiles?: boolean | undefined
            hasWebVideoFiles?: boolean | undefined
            host?: string | undefined
            autoTagOneOf?: string | string[] | undefined
            stateOneOf?: Id | Id[] | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            excludeAlreadyWatched?: boolean | undefined
            search?: string | undefined
            includeCollaborations?: boolean | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/subscriptions': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: '-id' | '-createdAt' | '-channelUpdatedAt' | undefined
          }
        }
        output: VideoChannelList
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: { uri: string } }; output: {}; outputFormat: string; status: 204 }
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
            start?: number | undefined
            count?: number | undefined
            skipCount?: 'true' | 'false' | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-comments'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
            nsfw?: 'true' | 'false' | undefined
            nsfwFlagsIncluded?: NSFWFlag | undefined
            nsfwFlagsExcluded?: NSFWFlag | undefined
            aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
            isLive?: boolean | undefined
            includeScheduledLive?: boolean | undefined
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
            hasHLSFiles?: boolean | undefined
            hasWebVideoFiles?: boolean | undefined
            host?: string | undefined
            autoTagOneOf?: string | string[] | undefined
            stateOneOf?: Id | Id[] | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            excludeAlreadyWatched?: boolean | undefined
            search?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/users/me/subscriptions/:subscriptionHandle': {
      $get: {
        input: { param: { subscriptionHandle: string } }
        output: VideoChannel
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { subscriptionHandle: string } }
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
            typeOneOf?: NotificationType[] | undefined
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
    '/api/v1/users/me/notification-settings': {
      $put: {
        input: { json: UserNotificationSettings }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/me/new-feature-info/read': {
      $post: {
        input: { json: { feature: NewFeatureInfoType } }
        output: {}
        outputFormat: string
        status: 204
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
    '/api/v1/users/me/history/videos/:videoIdOrUUID': {
      $delete: {
        input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } }
        output: {}
        outputFormat: string
        status: 204
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
    '/api/v1/users/me/avatar': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/users/register': {
      $post:
        | {
            input: { json: RegisterUser }
            output: {
              state?:
                | { id?: UserRegistrationState | undefined; label?: string | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: RegisterUser }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/users/registrations/request': {
      $post:
        | {
            input: { json: UserRegistrationRequest }
            output: {
              state?:
                | { id?: UserRegistrationState | undefined; label?: string | undefined }
                | undefined
            }
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
    '/api/v1/users/registrations/:registrationId': {
      $delete: {
        input: { param: { registrationId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
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
            stateOneOf?: UserRegistrationState[] | undefined
          }
        }
        output: { total?: number | undefined; data?: UserRegistration[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/ownership': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: { total?: number | undefined; data?: ChangeOwnership[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/videos/ownership/:id/accept': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { channelId: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { channelId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { channelId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { channelId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: { channelId: number } }
            output: {}
            outputFormat: string
            status: 413
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
            status: 400
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
    '/api/v1/videos/ownership/:id': {
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
            status: 400
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
    '/api/v1/videos/:videoIdOrUUID/ownership': {
      $get:
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: { total?: number | undefined; data?: ChangeOwnership[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:videoIdOrUUID/give-ownership': {
      $post:
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { username: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { username: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { username: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { username: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/video-channels/ownership': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: { total?: number | undefined; data?: ChangeOwnership[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/video-channels/ownership/:id/accept': {
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
            status: 400
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
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/video-channels/ownership/:id/refuse': {
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
            status: 400
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
    '/api/v1/video-channels/ownership/:id': {
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
            status: 400
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
    '/api/v1/video-channels/:channelHandle/ownership': {
      $get:
        | {
            input: { param: { channelHandle: string } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: { total?: number | undefined; data?: ChangeOwnership[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelHandle: string } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { channelHandle: string } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { channelHandle: string } } & {
              query: {
                state?: ChangeOwnershipState | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/give-ownership': {
      $post:
        | {
            input: { param: { channelHandle: string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channelHandle: string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { channelHandle: string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { channelHandle: string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/token': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            }
            output: VideoTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/studio/edit': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              form: { tasks: VideoStudioCreateTask; saveAsNewVideo?: boolean | undefined }
            }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              form: { tasks: VideoStudioCreateTask; saveAsNewVideo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              form: { tasks: VideoStudioCreateTask; saveAsNewVideo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              form: { tasks: VideoStudioCreateTask; saveAsNewVideo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              form: { tasks: VideoStudioCreateTask; saveAsNewVideo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              form: { tasks: VideoStudioCreateTask; saveAsNewVideo?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/api/v1/videos/:id/duplicate': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { name?: string | undefined }
            }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { name?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 413
          }
    }
  } & {
    '/api/v1/videos': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            skipCount?: 'true' | 'false' | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-comments'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
            nsfw?: 'true' | 'false' | undefined
            nsfwFlagsIncluded?: NSFWFlag | undefined
            nsfwFlagsExcluded?: NSFWFlag | undefined
            aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
            isLive?: boolean | undefined
            includeScheduledLive?: boolean | undefined
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
            hasHLSFiles?: boolean | undefined
            hasWebVideoFiles?: boolean | undefined
            host?: string | undefined
            autoTagOneOf?: string | string[] | undefined
            stateOneOf?: Id | Id[] | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            excludeAlreadyWatched?: boolean | undefined
            search?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/recommendations/videos': {
      $get:
        | {
            input: {
              query: {
                scope?: VideoRecommendationScopeSet | undefined
                videoId?: Id | UUIDv4 | ShortUUID | undefined
                count?: number | undefined
                excludeVideoIds?: Id[] | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
              }
            } & { header: { 'x-peertube-video-password'?: string | undefined } }
            output: VideoListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope?: VideoRecommendationScopeSet | undefined
                videoId?: Id | UUIDv4 | ShortUUID | undefined
                count?: number | undefined
                excludeVideoIds?: Id[] | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
              }
            } & { header: { 'x-peertube-video-password'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope?: VideoRecommendationScopeSet | undefined
                videoId?: Id | UUIDv4 | ShortUUID | undefined
                count?: number | undefined
                excludeVideoIds?: Id[] | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
              }
            } & { header: { 'x-peertube-video-password'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                scope?: VideoRecommendationScopeSet | undefined
                videoId?: Id | UUIDv4 | ShortUUID | undefined
                count?: number | undefined
                excludeVideoIds?: Id[] | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
              }
            } & { header: { 'x-peertube-video-password'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                scope?: VideoRecommendationScopeSet | undefined
                videoId?: Id | UUIDv4 | ShortUUID | undefined
                count?: number | undefined
                excludeVideoIds?: Id[] | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
              }
            } & { header: { 'x-peertube-video-password'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/categories': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/licences': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/languages': {
      $get: {
        input: { query: { scope?: 'subtitle' | undefined } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/privacies': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/videos/:id': {
      $put: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          form: {
            channelId?: number | undefined
            thumbnailfile?: File | undefined
            previewfile?: File | undefined
            category?: VideoCategorySet | undefined
            licence?: VideoLicenceSet | undefined
            language?: VideoLanguageSet | undefined
            privacy?: VideoPrivacySet | undefined
            description?: string | undefined
            waitTranscoding?: string | undefined
            support?: string | undefined
            nsfw?: boolean | undefined
            nsfwSummary?: { [x: string]: unknown } | undefined
            nsfwFlags?: NSFWFlag | undefined
            name?: string | undefined
            tags?: string[] | undefined
            commentsPolicy?: VideoCommentsPolicySet | undefined
            recommendationScope?: VideoRecommendationScopeSet | undefined
            aiUsage?: VideoAIUsageSet | undefined
            commercialContent?: VideoCommercialContentSet | undefined
            downloadEnabled?: boolean | undefined
            originallyPublishedAt?: (string | null) | undefined
            scheduleUpdate?: VideoScheduledUpdate | undefined
            videoPasswords?: AddVideoPasswords | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            }
            output: VideoDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            }
            output: ServerError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            }
            output: ServerError
            outputFormat: 'json'
            status: 403
          }
      $delete: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: {}
        outputFormat: string
        status: 204
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
    '/api/v1/videos/:id/stats/user-agent': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          query: { startDate?: string | undefined; endDate?: string | undefined }
        }
        output: VideoStatsUserAgent
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
            status: 400
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
    '/api/v1/videos/imports/:id/cancel': {
      $post: { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/videos/imports/:id/retry': {
      $post: { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/videos/:id/import/retry': {
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
            status: 400
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
    '/api/v1/videos/imports/:id': {
      $delete: { input: { param: { id: Id } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/videos/live': {
      $post:
        | {
            input: {
              form: {
                channelId: number
                saveReplay?: boolean | undefined
                replaySettings?: LiveVideoReplaySettings | undefined
                permanentLive?: boolean | undefined
                latencyMode?: {} | undefined
                dvrWindow?: {} | undefined
                thumbnailfile?: File | undefined
                previewfile?: File | undefined
                privacy?: VideoPrivacySet | undefined
                category?: VideoCategorySet | undefined
                licence?: VideoLicenceSet | undefined
                language?: VideoLanguageSet | undefined
                description?: string | undefined
                support?: string | undefined
                nsfw?: boolean | undefined
                nsfwSummary?: { [x: string]: unknown } | undefined
                nsfwFlags?: NSFWFlag | undefined
                name: string
                tags?: string[] | undefined
                commentsPolicy?: VideoCommentsPolicySet | undefined
                recommendationScope?: VideoRecommendationScopeSet | undefined
                aiUsage?: VideoAIUsageSet | undefined
                commercialContent?: VideoCommercialContentSet | undefined
                downloadEnabled?: boolean | undefined
                schedules?: LiveSchedule[] | undefined
              }
            }
            output: VideoUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                channelId: number
                saveReplay?: boolean | undefined
                replaySettings?: LiveVideoReplaySettings | undefined
                permanentLive?: boolean | undefined
                latencyMode?: {} | undefined
                dvrWindow?: {} | undefined
                thumbnailfile?: File | undefined
                previewfile?: File | undefined
                privacy?: VideoPrivacySet | undefined
                category?: VideoCategorySet | undefined
                licence?: VideoLicenceSet | undefined
                language?: VideoLanguageSet | undefined
                description?: string | undefined
                support?: string | undefined
                nsfw?: boolean | undefined
                nsfwSummary?: { [x: string]: unknown } | undefined
                nsfwFlags?: NSFWFlag | undefined
                name: string
                tags?: string[] | undefined
                commentsPolicy?: VideoCommentsPolicySet | undefined
                recommendationScope?: VideoRecommendationScopeSet | undefined
                aiUsage?: VideoAIUsageSet | undefined
                commercialContent?: VideoCommercialContentSet | undefined
                downloadEnabled?: boolean | undefined
                schedules?: LiveSchedule[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                channelId: number
                saveReplay?: boolean | undefined
                replaySettings?: LiveVideoReplaySettings | undefined
                permanentLive?: boolean | undefined
                latencyMode?: {} | undefined
                dvrWindow?: {} | undefined
                thumbnailfile?: File | undefined
                previewfile?: File | undefined
                privacy?: VideoPrivacySet | undefined
                category?: VideoCategorySet | undefined
                licence?: VideoLicenceSet | undefined
                language?: VideoLanguageSet | undefined
                description?: string | undefined
                support?: string | undefined
                nsfw?: boolean | undefined
                nsfwSummary?: { [x: string]: unknown } | undefined
                nsfwFlags?: NSFWFlag | undefined
                name: string
                tags?: string[] | undefined
                commentsPolicy?: VideoCommentsPolicySet | undefined
                recommendationScope?: VideoRecommendationScopeSet | undefined
                aiUsage?: VideoAIUsageSet | undefined
                commercialContent?: VideoCommercialContentSet | undefined
                downloadEnabled?: boolean | undefined
                schedules?: LiveSchedule[] | undefined
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
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { sort?: string | undefined } }
        output: { total?: number | undefined; data?: LiveVideoSessionResponse[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/live-session': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          header: { 'x-peertube-video-password'?: string | undefined }
        }
        output: LiveVideoSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/source': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: VideoSource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/source/file': {
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
    '/api/v1/videos/:id/source/replace-resumable': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoReplaceSourceRequestResumable }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoReplaceSourceRequestResumable }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoReplaceSourceRequestResumable }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'X-Upload-Content-Length': number; 'X-Upload-Content-Type': string }
            } & { json: VideoReplaceSourceRequestResumable }
            output: {}
            outputFormat: string
            status: 415
          }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Range': string; 'Content-Length': number }
            } & { json: File }
            output: {}
            outputFormat: string
            status: 503
          }
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Length': number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { upload_id: string } } & {
              header: { 'Content-Length': number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
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
        output: { total?: number | undefined; data?: Abuse[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
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
        output: { total?: number | undefined; data?: Abuse[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'x-peertube-video-password'?: string | undefined } } & {
              json: {
                reason: string
                predefinedReasons?: PredefinedAbuseReasons | undefined
                video?:
                  | {
                      id?: {} | undefined
                      startAt?: number | undefined
                      endAt?: number | undefined
                    }
                  | undefined
                comment?: { id?: {} | undefined; videoUUID?: string | undefined } | undefined
                account?: { id?: number | undefined } | undefined
              }
            }
            output: { abuse?: { id?: Id | undefined } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-peertube-video-password'?: string | undefined } } & {
              json: {
                reason: string
                predefinedReasons?: PredefinedAbuseReasons | undefined
                video?:
                  | {
                      id?: {} | undefined
                      startAt?: number | undefined
                      endAt?: number | undefined
                    }
                  | undefined
                comment?: { id?: {} | undefined; videoUUID?: string | undefined } | undefined
                account?: { id?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'x-peertube-video-password'?: string | undefined } } & {
              json: {
                reason: string
                predefinedReasons?: PredefinedAbuseReasons | undefined
                video?:
                  | {
                      id?: {} | undefined
                      startAt?: number | undefined
                      endAt?: number | undefined
                    }
                  | undefined
                comment?: { id?: {} | undefined; videoUUID?: string | undefined } | undefined
                account?: { id?: number | undefined } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/abuses/:abuseId': {
      $put:
        | {
            input: { param: { abuseId: Id } } & {
              json: { state?: AbuseStateSet | undefined; moderationComment?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { abuseId: Id } } & {
              json: { state?: AbuseStateSet | undefined; moderationComment?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { abuseId: Id } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { abuseId: Id } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/abuses/:abuseId/messages': {
      $get: {
        input: { param: { abuseId: Id } }
        output: { total?: number | undefined; data?: AbuseMessage[] | undefined }
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
    '/api/v1/videos/:id/blacklist': {
      $post: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: VideoBlacklistCreate }
        output: {}
        outputFormat: string
        status: 204
      }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: VideoBlacklistUpdate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: VideoBlacklistUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
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
        output: { total?: number | undefined; data?: VideoBlacklist[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/storyboards': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } }
        output: { storyboards?: Storyboard[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/captions': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          header: { 'x-peertube-video-password'?: string | undefined }
        }
        output: { total?: number | undefined; data?: VideoCaption[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/captions/generate': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { forceTranscription?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { forceTranscription?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/captions/:captionLanguage': {
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
    }
  } & {
    '/api/v1/videos/:id/chapters': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          header: { 'x-peertube-video-password'?: string | undefined }
        }
        output: VideoChapters
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: {
                chapters?:
                  | { title?: string | undefined; timecode?: number | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: {
                chapters?:
                  | { title?: string | undefined; timecode?: number | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: {
                chapters?:
                  | { title?: string | undefined; timecode?: number | undefined }[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/videos/:id/embed-privacy': {
      $get:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {
              policy?:
                | { id?: VideoEmbedPrivacy | undefined; label?: string | undefined }
                | undefined
              domains?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { policy?: VideoEmbedPrivacy | undefined; domains?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { policy?: VideoEmbedPrivacy | undefined; domains?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/videos/:id/embed-privacy/allowed': {
      $get:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { domain: string } }
            output: {
              domainAllowed?: boolean | undefined
              userBypassAllowed?: (boolean | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { query: { domain: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/videos/:id/passwords': {
      $get:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            }
            output: VideoPasswordList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { passwords?: AddVideoPasswords | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { passwords?: AddVideoPasswords | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { password?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { password?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/videos/:id/passwords/:passwordId': {
      $delete:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; passwordId: Id } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; passwordId: Id } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; passwordId: Id } }
            output: {}
            outputFormat: string
            status: 403
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
      $delete: {
        input: { param: { channelHandle: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/videos': {
      $get: {
        input: { param: { channelHandle: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            skipCount?: 'true' | 'false' | undefined
            sort?:
              | 'name'
              | '-duration'
              | '-createdAt'
              | '-publishedAt'
              | '-views'
              | '-likes'
              | '-comments'
              | '-trending'
              | '-hot'
              | '-best'
              | undefined
            nsfw?: 'true' | 'false' | undefined
            nsfwFlagsIncluded?: NSFWFlag | undefined
            nsfwFlagsExcluded?: NSFWFlag | undefined
            aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
            isLive?: boolean | undefined
            includeScheduledLive?: boolean | undefined
            categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
            licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
            languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
            tagsOneOf?: string | string[] | undefined
            tagsAllOf?: string | string[] | undefined
            isLocal?: boolean | undefined
            include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
            hasHLSFiles?: boolean | undefined
            hasWebVideoFiles?: boolean | undefined
            host?: string | undefined
            autoTagOneOf?: string | string[] | undefined
            stateOneOf?: Id | Id[] | undefined
            privacyOneOf?: VideoPrivacySet | undefined
            excludeAlreadyWatched?: boolean | undefined
            search?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/activities': {
      $get: {
        input: { param: { channelHandle: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
          }
        }
        output: ChannelActivityListResponse
        outputFormat: 'json'
        status: 200
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
        output: { total?: number | undefined; data?: VideoPlaylist[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/video-playlists/reorder': {
      $post: {
        input: { param: { channelHandle: string } } & {
          json: {
            startPosition: number
            insertAfterPosition: number
            reorderLength?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
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
        output: { total?: number | undefined; data?: Follow[] | undefined }
        outputFormat: 'json'
        status: 200
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
    '/api/v1/video-channels/:channelHandle/avatar': {
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
    '/api/v1/video-channels/:channelHandle/banner': {
      $delete: {
        input: { param: { channelHandle: string } }
        output: {}
        outputFormat: string
        status: 204
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
    '/api/v1/player-settings/videos/:id': {
      $get:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              query: { raw?: boolean | undefined }
            }
            output: PlayerVideoSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              query: { raw?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: PlayerVideoSettingsUpdate }
            output: PlayerVideoSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & { json: PlayerVideoSettingsUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/player-settings/video-channels/:channelHandle': {
      $get:
        | {
            input: { param: { channelHandle: string } } & { query: { raw?: boolean | undefined } }
            output: PlayerChannelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelHandle: string } } & { query: { raw?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { channelHandle: string } } & { json: PlayerChannelSettingsUpdate }
            output: PlayerChannelSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channelHandle: string } } & { json: PlayerChannelSettingsUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/video-playlists/privacies': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
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
        output: { total?: number | undefined; data?: VideoPlaylist[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          form: {
            displayName: string
            thumbnailfile?: File | undefined
            privacy?: VideoPlaylistPrivacySet | undefined
            description?: string | undefined
            videoChannelId?: {} | undefined
          }
        }
        output: {
          videoPlaylist?:
            | { id?: Id | undefined; uuid?: UUIDv4 | undefined; shortUUID?: ShortUUID | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-playlists/:playlistId': {
      $get: {
        input: { param: { playlistId: Id } }
        output: VideoPlaylist
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { playlistId: Id } } & {
          form: {
            displayName?: string | undefined
            thumbnailfile?: File | undefined
            privacy?: VideoPlaylistPrivacySet | undefined
            description?: string | undefined
            videoChannelId?: {} | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { playlistId: Id } }
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
        output: {
          total?: number | undefined
          data?:
            | {
                id?: {} | undefined
                position?: number | undefined
                startTimestamp?: (number | null) | undefined
                stopTimestamp?: (number | null) | undefined
                video?: Video | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { playlistId: Id } } & {
          json: {
            videoId: unknown | Id
            startTimestamp?: number | undefined
            stopTimestamp?: number | undefined
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
            startPosition: number
            insertAfterPosition: number
            reorderLength?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-playlists/:playlistId/videos/:playlistElementId': {
      $put: {
        input: { param: { playlistId: Id; playlistElementId: Id } } & {
          json: { startTimestamp?: number | undefined; stopTimestamp?: number | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { playlistId: Id; playlistElementId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/users/me/video-playlists/videos-exist': {
      $get: {
        input: { query: { videoIds: Id[] } }
        output: {
          videoId?:
            | {
                playlistElementId?: number | undefined
                playlistId?: number | undefined
                startTimestamp?: (number | null) | undefined
                stopTimestamp?: (number | null) | undefined
              }[]
            | undefined
        }
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
            includeCollaborations?: boolean | undefined
            channelNameOneOf?: string | string[] | undefined
          }
        }
        output: { total?: number | undefined; data?: VideoPlaylist[] | undefined }
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
            statsDays?: 30 | 90 | 365 | 0 | undefined
            start?: number | undefined
            count?: number | undefined
            search?: string | undefined
            sort?: string | undefined
            includeCollaborations?: boolean | undefined
          }
        }
        output: VideoChannelList
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
            includeCollaborations?: boolean | undefined
          }
        }
        output: VideoChannelSyncList
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
    '/api/v1/videos/:id/comment-threads': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: '-createdAt' | '-totalReplies' | undefined
          }
        } & { header: { 'x-peertube-video-password'?: string | undefined } }
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
        input: { param: { id: Id | UUIDv4 | ShortUUID; threadId: number } } & {
          query: { maxDepth?: number | undefined; repliesPerLevel?: number | undefined }
        } & { header: { 'x-peertube-video-password'?: string | undefined } }
        output: VideoCommentThreadTree
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/comments/:commentId/replies': {
      $get: {
        input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: 'createdAt' | '-createdAt' | undefined
            maxDepth?: number | undefined
            repliesPerLevel?: number | undefined
          }
        } & { header: { 'x-peertube-video-password'?: string | undefined } }
        output: { total?: number | undefined; data?: VideoCommentThreadTree[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/comments': {
      $get: {
        input: {
          query: {
            search?: string | undefined
            searchAccount?: string | undefined
            searchVideo?: string | undefined
            videoId?: number | undefined
            videoChannelId?: number | undefined
            autoTagOneOf?: string | string[] | undefined
            isLocal?: boolean | undefined
            onLocalVideo?: boolean | undefined
            includeMuted?: boolean | undefined
          }
        }
        output: { total?: number | undefined; data?: VideoCommentForOwnerOrAdmin[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/videos/:id/comments/:commentId': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            } & { json: { text: {} } }
            output: CommentThreadPostResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            } & { json: { text: {} } }
            output: {}
            outputFormat: string
            status: 404
          }
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
    }
  } & {
    '/api/v1/videos/:id/comments/:commentId/approve': {
      $post: {
        input: { param: { id: Id | UUIDv4 | ShortUUID; commentId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/videos/:id/rate': {
      $put:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            } & { json: { rating: 'like' | 'dislike' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              header: { 'x-peertube-video-password'?: string | undefined }
            } & { json: { rating: 'like' | 'dislike' } }
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
    '/api/v1/videos/:id/web-videos': {
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
    '/api/v1/videos/:id/transcoding': {
      $post:
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { transcodingType: 'hls' | 'web-video'; forceTranscoding?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: Id | UUIDv4 | ShortUUID } } & {
              json: { transcodingType: 'hls' | 'web-video'; forceTranscoding?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/search/videos': {
      $get:
        | {
            input: {
              query: {
                search: string
                uuids?: { [x: string]: unknown } | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                start?: number | undefined
                count?: number | undefined
                skipCount?: 'true' | 'false' | undefined
                sort?:
                  | 'name'
                  | '-duration'
                  | '-createdAt'
                  | '-publishedAt'
                  | '-views'
                  | '-likes'
                  | '-comments'
                  | '-trending'
                  | '-hot'
                  | '-best'
                  | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
                isLive?: boolean | undefined
                includeScheduledLive?: boolean | undefined
                categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
                licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
                languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
                tagsOneOf?: string | string[] | undefined
                tagsAllOf?: string | string[] | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
                host?: string | undefined
                autoTagOneOf?: string | string[] | undefined
                stateOneOf?: Id | Id[] | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                excludeAlreadyWatched?: boolean | undefined
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
                uuids?: { [x: string]: unknown } | undefined
                searchTarget?: 'local' | 'search-index' | undefined
                start?: number | undefined
                count?: number | undefined
                skipCount?: 'true' | 'false' | undefined
                sort?:
                  | 'name'
                  | '-duration'
                  | '-createdAt'
                  | '-publishedAt'
                  | '-views'
                  | '-likes'
                  | '-comments'
                  | '-trending'
                  | '-hot'
                  | '-best'
                  | undefined
                nsfw?: 'true' | 'false' | undefined
                nsfwFlagsIncluded?: NSFWFlag | undefined
                nsfwFlagsExcluded?: NSFWFlag | undefined
                aiUsageOneOf?: VideoAIUsageSet | VideoAIUsageSet[] | undefined
                isLive?: boolean | undefined
                includeScheduledLive?: boolean | undefined
                categoryOneOf?: VideoCategorySet | VideoCategorySet[] | undefined
                licenceOneOf?: VideoLicenceSet | VideoLicenceSet[] | undefined
                languageOneOf?: VideoLanguageSet | VideoLanguageSet[] | undefined
                tagsOneOf?: string | string[] | undefined
                tagsAllOf?: string | string[] | undefined
                isLocal?: boolean | undefined
                include?: 0 | 1 | 2 | 4 | 8 | 16 | 32 | undefined
                hasHLSFiles?: boolean | undefined
                hasWebVideoFiles?: boolean | undefined
                host?: string | undefined
                autoTagOneOf?: string | string[] | undefined
                stateOneOf?: Id | Id[] | undefined
                privacyOneOf?: VideoPrivacySet | undefined
                excludeAlreadyWatched?: boolean | undefined
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
                host?: string | undefined
                handles?: { [x: string]: unknown } | undefined
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
                host?: string | undefined
                handles?: { [x: string]: unknown } | undefined
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
                host?: string | undefined
                uuids?: { [x: string]: unknown } | undefined
              }
            }
            output: { total?: number | undefined; data?: VideoPlaylist[] | undefined }
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
                host?: string | undefined
                uuids?: { [x: string]: unknown } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
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
    '/api/v1/users/me/blocklist/accounts': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: { total?: number | undefined; data?: AccountBlock[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | {
            input: { json: { accountName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { accountName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: { accountName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: { accountName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/me/blocklist/accounts/:accountName': {
      $delete:
        | {
            input: { param: { accountName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accountName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accountName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { accountName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/users/me/blocklist/servers': {
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: { total?: number | undefined; data?: ServerBlock[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                count?: number | undefined
                sort?: string | undefined
                search?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
      $post:
        | { input: { json: { host: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { host: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { host: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: { host: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/users/me/blocklist/servers/:host': {
      $delete:
        | { input: { param: { host: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { host: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { host: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { host: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/server/blocklist/accounts': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            subscriptionName?: string | undefined
          }
        }
        output: { total?: number | undefined; data?: AccountBlock[] | undefined }
        outputFormat: 'json'
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
            subscriptionName?: string | undefined
          }
        }
        output: { total?: number | undefined; data?: ServerBlock[] | undefined }
        outputFormat: 'json'
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
    '/api/v1/server/blocklist/subscriptions': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            search?: string | undefined
          }
        }
        output: { total?: number | undefined; data?: BlocklistSubscription[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { url: string } }
            output: BlocklistSubscription
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { url: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/server/blocklist/subscriptions/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/server/blocklist/public-log': {
      $get:
        | {
            input: { query: { startDate: string } }
            output: AutoMuteList
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { startDate: string } }; output: {}; outputFormat: string; status: 403 }
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
        | { input: { json: { videoId: Id } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { videoId: Id } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { videoId: Id } }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: { videoId: Id } }; output: {}; outputFormat: string; status: 409 }
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
    '/api/v1/server/stats': {
      $get: { input: {}; output: ServerStats; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/server/contact': {
      $post:
        | {
            input: {
              json: {
                fromName: string
                fromEmail: string
                subject?: string | undefined
                body: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json: {
                fromName: string
                fromEmail: string
                subject?: string | undefined
                body: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json: {
                fromName: string
                fromEmail: string
                subject?: string | undefined
                body: string
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/api/v1/server/debug': {
      $get: {
        input: {}
        output: {
          ip?: string | undefined
          activityPubMessagesWaiting?: number | undefined
          secondariesUp?: number | undefined
          processes?:
            | {
                id?: string | undefined
                role?: 'primary' | 'secondary' | undefined
                hostname?: string | undefined
                pid?: number | undefined
                version?: string | undefined
                startedAt?: string | undefined
                lastSeenAt?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/server/debug/run-command': {
      $post:
        | {
            input: {
              json:
                | {
                    command:
                      | 'remove-dandling-resumable-uploads'
                      | 'remove-expired-user-exports'
                      | 'process-video-stats-buffer'
                      | 'process-video-viewers'
                      | 'process-update-videos-scheduler'
                      | 'process-video-channel-sync-latest'
                      | 'process-remove-old-stats'
                      | 'process-video-files-lifecycle'
                  }
                | { command: 'test-emails'; email: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json:
                | {
                    command:
                      | 'remove-dandling-resumable-uploads'
                      | 'remove-expired-user-exports'
                      | 'process-video-stats-buffer'
                      | 'process-video-viewers'
                      | 'process-update-videos-scheduler'
                      | 'process-video-channel-sync-latest'
                      | 'process-remove-old-stats'
                      | 'process-video-files-lifecycle'
                  }
                | { command: 'test-emails'; email: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/server/logs/client': {
      $post: { input: { json: SendClientLog }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/server/logs': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/server/audit-logs': {
      $get:
        | {
            input: {
              query: {
                format?: 'array' | 'list' | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
                search?: string | undefined
                entityType?: AuditLogEntityType | undefined
                entityId?: number | undefined
                action?: AuditLogAction | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: AuditLog[] | { total?: number | undefined; data?: AuditLog[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format?: 'array' | 'list' | undefined
                start?: number | undefined
                count?: number | undefined
                sort?: '-createdAt' | 'createdAt' | undefined
                search?: string | undefined
                entityType?: AuditLogEntityType | undefined
                entityId?: number | undefined
                action?: AuditLogAction | undefined
                startDate?: string | undefined
                endDate?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
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
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/plugins/update': {
      $post:
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              json:
                | { npmName: string; currentPassword?: CurrentPassword | undefined }
                | { path: string; currentPassword?: CurrentPassword | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/v1/plugins/uninstall': {
      $post:
        | { input: { json: { npmName: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { npmName: string } }; output: {}; outputFormat: string; status: 404 }
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
    '/api/v1/metrics/playback': {
      $post: {
        input: { json: PlaybackMetricCreate }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/registration-tokens/generate': {
      $post: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/api/v1/runners/registration-tokens/:registrationTokenId': {
      $delete: {
        input: { param: { registrationTokenId: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/registration-tokens': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: 'createdAt' | undefined
          }
        }
        output: { total?: number | undefined; data?: RunnerRegistrationToken[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/runners/register': {
      $post: {
        input: {
          json: {
            registrationToken: string
            name: string
            description?: string | undefined
            version?: RunnerVersion | undefined
          }
        }
        output: { id?: number | undefined; runnerToken?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/runners/unregister': {
      $post: {
        input: { json: { runnerToken: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/:runnerId': {
      $delete: {
        input: { param: { runnerId: number } } & { json: { runnerToken: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: 'createdAt' | undefined
          }
        }
        output: { total?: number | undefined; data?: Runner[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/runners/jobs/request': {
      $post: {
        input: {
          json: {
            runnerToken: string
            jobTypes?: string[] | undefined
            version?: RunnerVersion | undefined
          }
        }
        output: {
          availableJobs?:
            | {
                uuid?: UUIDv4 | undefined
                type?: RunnerJobType | undefined
                payload?: RunnerJobPayload | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/accept': {
      $post: {
        input: { param: { jobUUID: UUIDv4 } } & { json: { runnerToken: string } }
        output: {
          job?:
            | {
                uuid?: UUIDv4 | undefined
                type?: RunnerJobType | undefined
                state?: RunnerJobStateConstant | undefined
                payload?: RunnerJobPayload | undefined
                failures?: number | undefined
                error?: (string | null) | undefined
                progress?: number | undefined
                priority?: number | undefined
                updatedAt?: string | undefined
                createdAt?: string | undefined
                startedAt?: string | undefined
                finishedAt?: string | undefined
                parent?:
                  | ({
                      type?: RunnerJobType | undefined
                      state?: RunnerJobStateConstant | undefined
                      uuid?: UUIDv4 | undefined
                    } | null)
                  | undefined
                runner?:
                  | ({
                      id?: number | undefined
                      name?: string | undefined
                      description?: string | undefined
                    } | null)
                  | undefined
                jobToken?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/abort': {
      $post: {
        input: { param: { jobUUID: UUIDv4 } } & {
          json: { runnerToken: string; jobToken: string; reason: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/update': {
      $post: {
        input: { param: { jobUUID: UUIDv4 } } & {
          json: {
            runnerToken: string
            jobToken: string
            progress?: number | undefined
            payload?:
              | {
                  type?: 'add-chunk' | 'remove-chunk' | undefined
                  masterPlaylistFile?: File | undefined
                  resolutionPlaylistFile?: File | undefined
                  resolutionPlaylistFilename?: string | undefined
                  videoChunkFile?: File | undefined
                  videoChunkFilename?: string | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/error': {
      $post: {
        input: { param: { jobUUID: UUIDv4 } } & {
          json: { runnerToken: string; jobToken: string; message: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/success': {
      $post: {
        input: { param: { jobUUID: UUIDv4 } } & {
          json: {
            runnerToken: string
            jobToken: string
            payload:
              | { videoFile?: File | undefined }
              | { videoFile?: File | undefined; resolutionPlaylistFile?: File | undefined }
              | { videoFile?: File | undefined }
              | { [x: string]: unknown }
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/max-quality/audio': {
      $post:
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/max-quality': {
      $post:
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/thumbnails/max-quality': {
      $post:
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/previews/max-quality': {
      $post:
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID } } & {
              json: { runnerToken: string; jobToken: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/files/videos/:videoIdOrUUID/studio/task-files/:filename': {
      $post:
        | {
            input: {
              param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID; filename: string }
            } & { json: { runnerToken: string; jobToken: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID; filename: string }
            } & { json: { runnerToken: string; jobToken: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: { jobUUID: UUIDv4; videoIdOrUUID: Id | UUIDv4 | ShortUUID; filename: string }
            } & { json: { runnerToken: string; jobToken: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID/cancel': {
      $post: {
        input: { param: { jobUUID: UUIDv4 } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/jobs/:jobUUID': {
      $delete: {
        input: { param: { jobUUID: UUIDv4 } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/runners/jobs': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: 'updatedAt' | 'createdAt' | 'priority' | 'state' | 'progress' | undefined
            search?: string | undefined
            stateOneOf?: RunnerJobState[] | undefined
            typeOneOf?: RunnerJobType[] | undefined
          }
        }
        output: { total?: number | undefined; data?: RunnerJobAdmin[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/automatic-tags/policies/accounts/:accountName/comments': {
      $get: {
        input: { param: { accountName: string } }
        output: CommentAutoTagPolicies
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountName: string } } & { json: { review?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/automatic-tags/accounts/:accountName/available': {
      $get: {
        input: { param: { accountName: string } }
        output: AutomaticTagAvailable
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/automatic-tags/server/available': {
      $get: { input: {}; output: AutomaticTagAvailable; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/automatic-tags/policies/server/videos': {
      $get: { input: {}; output: VideoAutoTagPolicies; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: { autoBlock?: string[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/watched-words/accounts/:accountName/lists': {
      $get: {
        input: { param: { accountName: string } }
        output: { total?: number | undefined; data?: WatchedWordsLists[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountName: string } } & {
          json: { listName?: string | undefined; words?: string[] | undefined }
        }
        output: { watchedWordsList?: { id?: number | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/watched-words/accounts/:accountName/lists/:listId': {
      $put: {
        input: { param: { accountName: string; listId: string } } & {
          json: { listName?: string | undefined; words?: string[] | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { accountName: string; listId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/watched-words/server/lists': {
      $get: {
        input: {}
        output: { total?: number | undefined; data?: WatchedWordsLists[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { listName?: string | undefined; words?: string[] | undefined } }
        output: { watchedWordsList?: { id?: number | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/watched-words/server/lists/:listId': {
      $put: {
        input: { param: { listId: string } } & {
          json: { listName?: string | undefined; words?: string[] | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $delete: {
        input: { param: { listId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/watched-words/accounts/:accountName/subscriptions': {
      $get: {
        input: { param: { accountName: string } } & {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            search?: string | undefined
          }
        }
        output: { total?: number | undefined; data?: WatchedWordsSubscription[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { accountName: string } } & { json: { url: string } }
            output: WatchedWordsSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountName: string } } & { json: { url: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { accountName: string } } & { json: { url: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/api/v1/watched-words/accounts/:accountName/subscriptions/:id': {
      $delete:
        | {
            input: { param: { accountName: string; id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { accountName: string; id: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/watched-words/server/subscriptions': {
      $get: {
        input: {
          query: {
            start?: number | undefined
            count?: number | undefined
            sort?: string | undefined
            search?: string | undefined
          }
        }
        output: { total?: number | undefined; data?: WatchedWordsSubscription[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { url: string } }
            output: WatchedWordsSubscription
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { url: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { url: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/api/v1/watched-words/server/subscriptions/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/client-config/update-language': {
      $post: {
        input: { json: { language: string | null } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/client-config/update-interface-language': {
      $post: {
        input: { json: { language: string | null } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/collaborators': {
      $get: {
        input: { param: { channelHandle: string } }
        output: { total?: number | undefined; data?: VideoChannelCollaborator[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/collaborators/invite': {
      $post: {
        input: { param: { channelHandle: string } } & {
          json: { accountHandle?: string | undefined }
        }
        output: { collaborator?: VideoChannelCollaborator | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/collaborators/:collaboratorId/accept': {
      $post: {
        input: { param: { channelHandle: string; collaboratorId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/collaborators/:collaboratorId/reject': {
      $post: {
        input: { param: { channelHandle: string; collaboratorId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v1/video-channels/:channelHandle/collaborators/:collaboratorId': {
      $delete: {
        input: { param: { channelHandle: string; collaboratorId: Id } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes
