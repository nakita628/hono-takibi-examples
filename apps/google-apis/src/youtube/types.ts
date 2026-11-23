type AbuseType = { id?: string | undefined }
type Entity = { id?: string | undefined; typeId?: string | undefined; url?: string | undefined }
type RelatedEntity = { entity?: Entity | undefined }
type AbuseReport = {
  abuseTypes?: AbuseType[] | undefined
  description?: string | undefined
  relatedEntities?: RelatedEntity[] | undefined
  subject?: Entity | undefined
}
type ResourceId = {
  channelId?: string | undefined
  kind?: string | undefined
  playlistId?: string | undefined
  videoId?: string | undefined
}
type ActivityContentDetailsBulletin = { resourceId?: ResourceId | undefined }
type ActivityContentDetailsChannelItem = { resourceId?: ResourceId | undefined }
type ActivityContentDetailsComment = { resourceId?: ResourceId | undefined }
type ActivityContentDetailsFavorite = { resourceId?: ResourceId | undefined }
type ActivityContentDetailsLike = { resourceId?: ResourceId | undefined }
type ActivityContentDetailsPlaylistItem = {
  playlistId?: string | undefined
  playlistItemId?: string | undefined
  resourceId?: ResourceId | undefined
}
type ActivityContentDetailsPromotedItem = {
  adTag?: string | undefined
  clickTrackingUrl?: string | undefined
  creativeViewUrl?: string | undefined
  ctaType?: 'ctaTypeUnspecified' | 'visitAdvertiserSite' | undefined
  customCtaButtonText?: string | undefined
  descriptionText?: string | undefined
  destinationUrl?: string | undefined
  forecastingUrl?: string[] | undefined
  impressionUrl?: string[] | undefined
  videoId?: string | undefined
}
type ActivityContentDetailsRecommendation = {
  reason?: 'reasonUnspecified' | 'videoFavorited' | 'videoLiked' | 'videoWatched' | undefined
  resourceId?: ResourceId | undefined
  seedResourceId?: ResourceId | undefined
}
type ActivityContentDetailsSocial = {
  author?: string | undefined
  imageUrl?: string | undefined
  referenceUrl?: string | undefined
  resourceId?: ResourceId | undefined
  type?: 'unspecified' | 'googlePlus' | 'facebook' | 'twitter' | undefined
}
type ActivityContentDetailsSubscription = { resourceId?: ResourceId | undefined }
type ActivityContentDetailsUpload = { videoId?: string | undefined }
type ActivityContentDetails = {
  bulletin?: ActivityContentDetailsBulletin | undefined
  channelItem?: ActivityContentDetailsChannelItem | undefined
  comment?: ActivityContentDetailsComment | undefined
  favorite?: ActivityContentDetailsFavorite | undefined
  like?: ActivityContentDetailsLike | undefined
  playlistItem?: ActivityContentDetailsPlaylistItem | undefined
  promotedItem?: ActivityContentDetailsPromotedItem | undefined
  recommendation?: ActivityContentDetailsRecommendation | undefined
  social?: ActivityContentDetailsSocial | undefined
  subscription?: ActivityContentDetailsSubscription | undefined
  upload?: ActivityContentDetailsUpload | undefined
}
type Thumbnail = {
  height?: number | undefined
  url?: string | undefined
  width?: number | undefined
}
type ThumbnailDetails = {
  high?: Thumbnail | undefined
  maxres?: Thumbnail | undefined
  medium?: Thumbnail | undefined
  standard?: Thumbnail | undefined
}
type ActivitySnippet = {
  channelId?: string | undefined
  channelTitle?: string | undefined
  description?: string | undefined
  groupId?: string | undefined
  publishedAt?: string | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
  type?:
    | 'typeUnspecified'
    | 'upload'
    | 'like'
    | 'favorite'
    | 'comment'
    | 'subscription'
    | 'playlistItem'
    | 'recommendation'
    | 'bulletin'
    | 'social'
    | 'channelItem'
    | 'promotedItem'
    | undefined
}
type Activity = {
  contentDetails?: ActivityContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: ActivitySnippet | undefined
}
type PageInfo = { resultsPerPage?: number | undefined; totalResults?: number | undefined }
type TokenPagination = { [x: string]: unknown }
type ActivityListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Activity[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type CaptionSnippet = {
  audioTrackType?: 'unknown' | 'primary' | 'commentary' | 'descriptive' | undefined
  failureReason?: 'unknownFormat' | 'unsupportedFormat' | 'processingFailed' | undefined
  isAutoSynced?: boolean | undefined
  isCC?: boolean | undefined
  isDraft?: boolean | undefined
  isEasyReader?: boolean | undefined
  isLarge?: boolean | undefined
  language?: string | undefined
  lastUpdated?: string | undefined
  name?: string | undefined
  status?: 'serving' | 'syncing' | 'failed' | undefined
  trackKind?: 'standard' | 'ASR' | 'forced' | undefined
  videoId?: string | undefined
}
type Caption = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: CaptionSnippet | undefined
}
type CaptionListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Caption[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type ChannelBannerResource = {
  etag?: string | undefined
  kind?: string | undefined
  url?: string | undefined
}
type ChannelSectionContentDetails = {
  channels?: string[] | undefined
  playlists?: string[] | undefined
}
type ChannelSectionLocalization = { title?: string | undefined }
type ChannelSectionSnippet = {
  channelId?: string | undefined
  defaultLanguage?: string | undefined
  localized?: ChannelSectionLocalization | undefined
  position?: number | undefined
  style?: 'channelsectionStyleUnspecified' | 'horizontalRow' | 'verticalList' | undefined
  title?: string | undefined
  type?:
    | 'channelsectionTypeUndefined'
    | 'singlePlaylist'
    | 'multiplePlaylists'
    | 'popularUploads'
    | 'recentUploads'
    | 'likes'
    | 'allPlaylists'
    | 'likedPlaylists'
    | 'recentPosts'
    | 'recentActivity'
    | 'liveEvents'
    | 'upcomingEvents'
    | 'completedEvents'
    | 'multipleChannels'
    | 'postedVideos'
    | 'postedPlaylists'
    | 'subscriptions'
    | undefined
}
type ChannelSectionTargeting = {
  countries?: string[] | undefined
  languages?: string[] | undefined
  regions?: string[] | undefined
}
type ChannelSection = {
  contentDetails?: ChannelSectionContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  localizations?: { [x: string]: ChannelSectionLocalization } | undefined
  snippet?: ChannelSectionSnippet | undefined
  targeting?: ChannelSectionTargeting | undefined
}
type ChannelSectionListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: ChannelSection[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type ChannelAuditDetails = {
  communityGuidelinesGoodStanding?: boolean | undefined
  contentIdClaimsGoodStanding?: boolean | undefined
  copyrightStrikesGoodStanding?: boolean | undefined
}
type ChannelSettings = {
  country?: string | undefined
  defaultLanguage?: string | undefined
  defaultTab?: string | undefined
  description?: string | undefined
  featuredChannelsTitle?: string | undefined
  featuredChannelsUrls?: string[] | undefined
  keywords?: string | undefined
  moderateComments?: boolean | undefined
  profileColor?: string | undefined
  showBrowseView?: boolean | undefined
  showRelatedChannels?: boolean | undefined
  title?: string | undefined
  trackingAnalyticsAccountId?: string | undefined
  unsubscribedTrailer?: string | undefined
}
type PropertyValue = { property?: string | undefined; value?: string | undefined }
type LanguageTag = { value?: string | undefined }
type LocalizedString = { language?: string | undefined; value?: string | undefined }
type LocalizedProperty = {
  defaultLanguage?: LanguageTag | undefined
  localized?: LocalizedString[] | undefined
}
type ImageSettings = {
  backgroundImageUrl?: LocalizedProperty | undefined
  bannerExternalUrl?: string | undefined
  bannerImageUrl?: string | undefined
  bannerMobileExtraHdImageUrl?: string | undefined
  bannerMobileHdImageUrl?: string | undefined
  bannerMobileImageUrl?: string | undefined
  bannerMobileLowImageUrl?: string | undefined
  bannerMobileMediumHdImageUrl?: string | undefined
  bannerTabletExtraHdImageUrl?: string | undefined
  bannerTabletHdImageUrl?: string | undefined
  bannerTabletImageUrl?: string | undefined
  bannerTabletLowImageUrl?: string | undefined
  bannerTvHighImageUrl?: string | undefined
  bannerTvImageUrl?: string | undefined
  bannerTvLowImageUrl?: string | undefined
  bannerTvMediumImageUrl?: string | undefined
  largeBrandedBannerImageImapScript?: LocalizedProperty | undefined
  largeBrandedBannerImageUrl?: LocalizedProperty | undefined
  smallBrandedBannerImageImapScript?: LocalizedProperty | undefined
  smallBrandedBannerImageUrl?: LocalizedProperty | undefined
  trackingImageUrl?: string | undefined
  watchIconImageUrl?: string | undefined
}
type WatchSettings = {
  backgroundColor?: string | undefined
  featuredPlaylistId?: string | undefined
  textColor?: string | undefined
}
type ChannelBrandingSettings = {
  channel?: ChannelSettings | undefined
  hints?: PropertyValue[] | undefined
  image?: ImageSettings | undefined
  watch?: WatchSettings | undefined
}
type ChannelContentDetails = {
  relatedPlaylists?:
    | {
        favorites?: string | undefined
        likes?: string | undefined
        uploads?: string | undefined
        watchHistory?: string | undefined
        watchLater?: string | undefined
      }
    | undefined
}
type ChannelContentOwnerDetails = {
  contentOwner?: string | undefined
  timeLinked?: string | undefined
}
type ChannelConversionPing = {
  context?: 'subscribe' | 'unsubscribe' | 'cview' | undefined
  conversionUrl?: string | undefined
}
type ChannelConversionPings = { pings?: ChannelConversionPing[] | undefined }
type ChannelLocalization = { description?: string | undefined; title?: string | undefined }
type ChannelSnippet = {
  country?: string | undefined
  customUrl?: string | undefined
  defaultLanguage?: string | undefined
  description?: string | undefined
  localized?: ChannelLocalization | undefined
  publishedAt?: string | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type ChannelStatistics = {
  commentCount?: string | undefined
  hiddenSubscriberCount?: boolean | undefined
  subscriberCount?: string | undefined
  videoCount?: string | undefined
  viewCount?: string | undefined
}
type ChannelStatus = {
  isLinked?: boolean | undefined
  longUploadsStatus?: 'longUploadsUnspecified' | 'allowed' | 'eligible' | 'disallowed' | undefined
  madeForKids?: boolean | undefined
  privacyStatus?: 'public' | 'unlisted' | 'private' | undefined
  selfDeclaredMadeForKids?: boolean | undefined
}
type ChannelTopicDetails = {
  topicCategories?: string[] | undefined
  topicIds?: string[] | undefined
}
type Channel = {
  auditDetails?: ChannelAuditDetails | undefined
  brandingSettings?: ChannelBrandingSettings | undefined
  contentDetails?: ChannelContentDetails | undefined
  contentOwnerDetails?: ChannelContentOwnerDetails | undefined
  conversionPings?: ChannelConversionPings | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  localizations?: { [x: string]: ChannelLocalization } | undefined
  snippet?: ChannelSnippet | undefined
  statistics?: ChannelStatistics | undefined
  status?: ChannelStatus | undefined
  topicDetails?: ChannelTopicDetails | undefined
}
type ChannelListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Channel[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type CommentSnippetAuthorChannelId = { value?: string | undefined }
type CommentSnippet = {
  authorChannelId?: CommentSnippetAuthorChannelId | undefined
  authorChannelUrl?: string | undefined
  authorDisplayName?: string | undefined
  authorProfileImageUrl?: string | undefined
  canRate?: boolean | undefined
  channelId?: string | undefined
  likeCount?: number | undefined
  moderationStatus?: 'published' | 'heldForReview' | 'likelySpam' | 'rejected' | undefined
  parentId?: string | undefined
  publishedAt?: string | undefined
  textDisplay?: string | undefined
  textOriginal?: string | undefined
  updatedAt?: string | undefined
  videoId?: string | undefined
  viewerRating?: 'none' | 'like' | 'dislike' | undefined
}
type Comment = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: CommentSnippet | undefined
}
type CommentThreadReplies = { comments?: Comment[] | undefined }
type CommentThreadSnippet = {
  canReply?: boolean | undefined
  channelId?: string | undefined
  isPublic?: boolean | undefined
  topLevelComment?: Comment | undefined
  totalReplyCount?: number | undefined
  videoId?: string | undefined
}
type CommentThread = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  replies?: CommentThreadReplies | undefined
  snippet?: CommentThreadSnippet | undefined
}
type CommentThreadListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: CommentThread[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type CommentListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Comment[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type I18nLanguageSnippet = { hl?: string | undefined; name?: string | undefined }
type I18nLanguage = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: I18nLanguageSnippet | undefined
}
type I18nLanguageListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: I18nLanguage[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type I18nRegionSnippet = { gl?: string | undefined; name?: string | undefined }
type I18nRegion = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: I18nRegionSnippet | undefined
}
type I18nRegionListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: I18nRegion[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type MonitorStreamInfo = {
  broadcastStreamDelayMs?: number | undefined
  embedHtml?: string | undefined
  enableMonitorStream?: boolean | undefined
}
type LiveBroadcastContentDetails = {
  boundStreamId?: string | undefined
  boundStreamLastUpdateTimeMs?: string | undefined
  closedCaptionsType?:
    | 'closedCaptionsTypeUnspecified'
    | 'closedCaptionsDisabled'
    | 'closedCaptionsHttpPost'
    | 'closedCaptionsEmbedded'
    | undefined
  enableAutoStart?: boolean | undefined
  enableAutoStop?: boolean | undefined
  enableClosedCaptions?: boolean | undefined
  enableContentEncryption?: boolean | undefined
  enableDvr?: boolean | undefined
  enableEmbed?: boolean | undefined
  enableLowLatency?: boolean | undefined
  latencyPreference?: 'latencyPreferenceUnspecified' | 'normal' | 'low' | 'ultraLow' | undefined
  mesh?: string | undefined
  monitorStream?: MonitorStreamInfo | undefined
  projection?: 'projectionUnspecified' | 'rectangular' | '360' | 'mesh' | undefined
  recordFromStart?: boolean | undefined
  startWithSlate?: boolean | undefined
  stereoLayout?: 'stereoLayoutUnspecified' | 'mono' | 'leftRight' | 'topBottom' | undefined
}
type LiveBroadcastSnippet = {
  actualEndTime?: string | undefined
  actualStartTime?: string | undefined
  channelId?: string | undefined
  description?: string | undefined
  isDefaultBroadcast?: boolean | undefined
  liveChatId?: string | undefined
  publishedAt?: string | undefined
  scheduledEndTime?: string | undefined
  scheduledStartTime?: string | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type LiveBroadcastStatistics = { concurrentViewers?: string | undefined }
type LiveBroadcastStatus = {
  lifeCycleStatus?:
    | 'lifeCycleStatusUnspecified'
    | 'created'
    | 'ready'
    | 'testing'
    | 'live'
    | 'complete'
    | 'revoked'
    | 'testStarting'
    | 'liveStarting'
    | undefined
  liveBroadcastPriority?: 'liveBroadcastPriorityUnspecified' | 'low' | 'normal' | 'high' | undefined
  madeForKids?: boolean | undefined
  privacyStatus?: 'public' | 'unlisted' | 'private' | undefined
  recordingStatus?:
    | 'liveBroadcastRecordingStatusUnspecified'
    | 'notRecording'
    | 'recording'
    | 'recorded'
    | undefined
  selfDeclaredMadeForKids?: boolean | undefined
}
type LiveBroadcast = {
  contentDetails?: LiveBroadcastContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: LiveBroadcastSnippet | undefined
  statistics?: LiveBroadcastStatistics | undefined
  status?: LiveBroadcastStatus | undefined
}
type LiveBroadcastListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: LiveBroadcast[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type Cuepoint = {
  cueType?: 'cueTypeUnspecified' | 'cueTypeAd' | undefined
  durationSecs?: number | undefined
  etag?: string | undefined
  id?: string | undefined
  insertionOffsetTimeMs?: string | undefined
  walltimeMs?: string | undefined
}
type ChannelProfileDetails = {
  channelId?: string | undefined
  channelUrl?: string | undefined
  displayName?: string | undefined
  profileImageUrl?: string | undefined
}
type LiveChatBanSnippet = {
  banDurationSeconds?: string | undefined
  bannedUserDetails?: ChannelProfileDetails | undefined
  liveChatId?: string | undefined
  type?: 'liveChatBanTypeUnspecified' | 'permanent' | 'temporary' | undefined
}
type LiveChatBan = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: LiveChatBanSnippet | undefined
}
type LiveChatMessageAuthorDetails = {
  channelId?: string | undefined
  channelUrl?: string | undefined
  displayName?: string | undefined
  isChatModerator?: boolean | undefined
  isChatOwner?: boolean | undefined
  isChatSponsor?: boolean | undefined
  isVerified?: boolean | undefined
  profileImageUrl?: string | undefined
}
type LiveChatFanFundingEventDetails = {
  amountDisplayString?: string | undefined
  amountMicros?: string | undefined
  currency?: string | undefined
  userComment?: string | undefined
}
type LiveChatGiftMembershipReceivedDetails = {
  associatedMembershipGiftingMessageId?: string | undefined
  gifterChannelId?: string | undefined
  memberLevelName?: string | undefined
}
type LiveChatMemberMilestoneChatDetails = {
  memberLevelName?: string | undefined
  memberMonth?: number | undefined
  userComment?: string | undefined
}
type LiveChatMembershipGiftingDetails = {
  giftMembershipsCount?: number | undefined
  giftMembershipsLevelName?: string | undefined
}
type LiveChatMessageDeletedDetails = { deletedMessageId?: string | undefined }
type LiveChatMessageRetractedDetails = { retractedMessageId?: string | undefined }
type LiveChatNewSponsorDetails = {
  isUpgrade?: boolean | undefined
  memberLevelName?: string | undefined
}
type LiveChatSuperChatDetails = {
  amountDisplayString?: string | undefined
  amountMicros?: string | undefined
  currency?: string | undefined
  tier?: number | undefined
  userComment?: string | undefined
}
type SuperStickerMetadata = {
  altText?: string | undefined
  altTextLanguage?: string | undefined
  stickerId?: string | undefined
}
type LiveChatSuperStickerDetails = {
  amountDisplayString?: string | undefined
  amountMicros?: string | undefined
  currency?: string | undefined
  superStickerMetadata?: SuperStickerMetadata | undefined
  tier?: number | undefined
}
type LiveChatTextMessageDetails = { messageText?: string | undefined }
type LiveChatUserBannedMessageDetails = {
  banDurationSeconds?: string | undefined
  banType?: 'permanent' | 'temporary' | undefined
  bannedUserDetails?: ChannelProfileDetails | undefined
}
type LiveChatMessageSnippet = {
  authorChannelId?: string | undefined
  displayMessage?: string | undefined
  fanFundingEventDetails?: LiveChatFanFundingEventDetails | undefined
  giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails | undefined
  hasDisplayContent?: boolean | undefined
  liveChatId?: string | undefined
  memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails | undefined
  membershipGiftingDetails?: LiveChatMembershipGiftingDetails | undefined
  messageDeletedDetails?: LiveChatMessageDeletedDetails | undefined
  messageRetractedDetails?: LiveChatMessageRetractedDetails | undefined
  newSponsorDetails?: LiveChatNewSponsorDetails | undefined
  publishedAt?: string | undefined
  superChatDetails?: LiveChatSuperChatDetails | undefined
  superStickerDetails?: LiveChatSuperStickerDetails | undefined
  textMessageDetails?: LiveChatTextMessageDetails | undefined
  type?:
    | 'invalidType'
    | 'textMessageEvent'
    | 'tombstone'
    | 'fanFundingEvent'
    | 'chatEndedEvent'
    | 'sponsorOnlyModeStartedEvent'
    | 'sponsorOnlyModeEndedEvent'
    | 'newSponsorEvent'
    | 'memberMilestoneChatEvent'
    | 'membershipGiftingEvent'
    | 'giftMembershipReceivedEvent'
    | 'messageDeletedEvent'
    | 'messageRetractedEvent'
    | 'userBannedEvent'
    | 'superChatEvent'
    | 'superStickerEvent'
    | undefined
  userBannedDetails?: LiveChatUserBannedMessageDetails | undefined
}
type LiveChatMessage = {
  authorDetails?: LiveChatMessageAuthorDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: LiveChatMessageSnippet | undefined
}
type LiveChatMessageListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: LiveChatMessage[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  offlineAt?: string | undefined
  pageInfo?: PageInfo | undefined
  pollingIntervalMillis?: number | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type LiveChatModeratorSnippet = {
  liveChatId?: string | undefined
  moderatorDetails?: ChannelProfileDetails | undefined
}
type LiveChatModerator = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: LiveChatModeratorSnippet | undefined
}
type LiveChatModeratorListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: LiveChatModerator[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type IngestionInfo = {
  backupIngestionAddress?: string | undefined
  ingestionAddress?: string | undefined
  rtmpsBackupIngestionAddress?: string | undefined
  rtmpsIngestionAddress?: string | undefined
  streamName?: string | undefined
}
type CdnSettings = {
  format?: string | undefined
  frameRate?: '30fps' | '60fps' | 'variable' | undefined
  ingestionInfo?: IngestionInfo | undefined
  ingestionType?: 'rtmp' | 'dash' | 'webrtc' | 'hls' | undefined
  resolution?:
    | '240p'
    | '360p'
    | '480p'
    | '720p'
    | '1080p'
    | '1440p'
    | '2160p'
    | 'variable'
    | undefined
}
type LiveStreamContentDetails = {
  closedCaptionsIngestionUrl?: string | undefined
  isReusable?: boolean | undefined
}
type LiveStreamSnippet = {
  channelId?: string | undefined
  description?: string | undefined
  isDefaultStream?: boolean | undefined
  publishedAt?: string | undefined
  title?: string | undefined
}
type LiveStreamConfigurationIssue = {
  description?: string | undefined
  reason?: string | undefined
  severity?: 'info' | 'warning' | 'error' | undefined
  type?:
    | 'gopSizeOver'
    | 'gopSizeLong'
    | 'gopSizeShort'
    | 'openGop'
    | 'badContainer'
    | 'audioBitrateHigh'
    | 'audioBitrateLow'
    | 'audioSampleRate'
    | 'bitrateHigh'
    | 'bitrateLow'
    | 'audioCodec'
    | 'videoCodec'
    | 'noAudioStream'
    | 'noVideoStream'
    | 'multipleVideoStreams'
    | 'multipleAudioStreams'
    | 'audioTooManyChannels'
    | 'interlacedVideo'
    | 'frameRateHigh'
    | 'resolutionMismatch'
    | 'videoCodecMismatch'
    | 'videoInterlaceMismatch'
    | 'videoProfileMismatch'
    | 'videoBitrateMismatch'
    | 'framerateMismatch'
    | 'gopMismatch'
    | 'audioSampleRateMismatch'
    | 'audioStereoMismatch'
    | 'audioCodecMismatch'
    | 'audioBitrateMismatch'
    | 'videoResolutionSuboptimal'
    | 'videoResolutionUnsupported'
    | 'videoIngestionStarved'
    | 'videoIngestionFasterThanRealtime'
    | undefined
}
type LiveStreamHealthStatus = {
  configurationIssues?: LiveStreamConfigurationIssue[] | undefined
  lastUpdateTimeSeconds?: string | undefined
  status?: 'good' | 'ok' | 'bad' | 'noData' | 'revoked' | undefined
}
type LiveStreamStatus = {
  healthStatus?: LiveStreamHealthStatus | undefined
  streamStatus?: 'created' | 'ready' | 'active' | 'inactive' | 'error' | undefined
}
type LiveStream = {
  cdn?: CdnSettings | undefined
  contentDetails?: LiveStreamContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: LiveStreamSnippet | undefined
  status?: LiveStreamStatus | undefined
}
type LiveStreamListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: LiveStream[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type MembershipsDuration = {
  memberSince?: string | undefined
  memberTotalDurationMonths?: number | undefined
}
type MembershipsDurationAtLevel = {
  level?: string | undefined
  memberSince?: string | undefined
  memberTotalDurationMonths?: number | undefined
}
type MembershipsDetails = {
  accessibleLevels?: string[] | undefined
  highestAccessibleLevel?: string | undefined
  highestAccessibleLevelDisplayName?: string | undefined
  membershipsDuration?: MembershipsDuration | undefined
  membershipsDurationAtLevels?: MembershipsDurationAtLevel[] | undefined
}
type MemberSnippet = {
  creatorChannelId?: string | undefined
  memberDetails?: ChannelProfileDetails | undefined
  membershipsDetails?: MembershipsDetails | undefined
}
type Member = {
  etag?: string | undefined
  kind?: string | undefined
  snippet?: MemberSnippet | undefined
}
type MemberListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Member[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type LevelDetails = { displayName?: string | undefined }
type MembershipsLevelSnippet = {
  creatorChannelId?: string | undefined
  levelDetails?: LevelDetails | undefined
}
type MembershipsLevel = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: MembershipsLevelSnippet | undefined
}
type MembershipsLevelListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: MembershipsLevel[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type PlaylistItemContentDetails = {
  endAt?: string | undefined
  note?: string | undefined
  startAt?: string | undefined
  videoId?: string | undefined
  videoPublishedAt?: string | undefined
}
type PlaylistItemSnippet = {
  channelId?: string | undefined
  channelTitle?: string | undefined
  description?: string | undefined
  playlistId?: string | undefined
  position?: number | undefined
  publishedAt?: string | undefined
  resourceId?: ResourceId | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
  videoOwnerChannelId?: string | undefined
  videoOwnerChannelTitle?: string | undefined
}
type PlaylistItemStatus = { privacyStatus?: 'public' | 'unlisted' | 'private' | undefined }
type PlaylistItem = {
  contentDetails?: PlaylistItemContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: PlaylistItemSnippet | undefined
  status?: PlaylistItemStatus | undefined
}
type PlaylistItemListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: PlaylistItem[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type PlaylistContentDetails = { itemCount?: number | undefined }
type PlaylistLocalization = { description?: string | undefined; title?: string | undefined }
type PlaylistPlayer = { embedHtml?: string | undefined }
type PlaylistSnippet = {
  channelId?: string | undefined
  channelTitle?: string | undefined
  defaultLanguage?: string | undefined
  description?: string | undefined
  localized?: PlaylistLocalization | undefined
  publishedAt?: string | undefined
  tags?: string[] | undefined
  thumbnailVideoId?: string | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type PlaylistStatus = { privacyStatus?: 'public' | 'unlisted' | 'private' | undefined }
type Playlist = {
  contentDetails?: PlaylistContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  localizations?: { [x: string]: PlaylistLocalization } | undefined
  player?: PlaylistPlayer | undefined
  snippet?: PlaylistSnippet | undefined
  status?: PlaylistStatus | undefined
}
type PlaylistListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Playlist[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type SearchResultSnippet = {
  channelId?: string | undefined
  channelTitle?: string | undefined
  description?: string | undefined
  liveBroadcastContent?: 'none' | 'upcoming' | 'live' | 'completed' | undefined
  publishedAt?: string | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type SearchResult = {
  etag?: string | undefined
  id?: ResourceId | undefined
  kind?: string | undefined
  snippet?: SearchResultSnippet | undefined
}
type SearchListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: SearchResult[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  regionCode?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type SubscriptionContentDetails = {
  activityType?: 'subscriptionActivityTypeUnspecified' | 'all' | 'uploads' | undefined
  newItemCount?: number | undefined
  totalItemCount?: number | undefined
}
type SubscriptionSnippet = {
  channelId?: string | undefined
  channelTitle?: string | undefined
  description?: string | undefined
  publishedAt?: string | undefined
  resourceId?: ResourceId | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type SubscriptionSubscriberSnippet = {
  channelId?: string | undefined
  description?: string | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type Subscription = {
  contentDetails?: SubscriptionContentDetails | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: SubscriptionSnippet | undefined
  subscriberSnippet?: SubscriptionSubscriberSnippet | undefined
}
type SubscriptionListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Subscription[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type SuperChatEventSnippet = {
  amountMicros?: string | undefined
  channelId?: string | undefined
  commentText?: string | undefined
  createdAt?: string | undefined
  currency?: string | undefined
  displayString?: string | undefined
  isSuperStickerEvent?: boolean | undefined
  messageType?: number | undefined
  superStickerMetadata?: SuperStickerMetadata | undefined
  supporterDetails?: ChannelProfileDetails | undefined
}
type SuperChatEvent = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: SuperChatEventSnippet | undefined
}
type SuperChatEventListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: SuperChatEvent[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type TestItemTestItemSnippet = { [x: string]: unknown }
type TestItem = {
  featuredPart?: boolean | undefined
  gaia?: string | undefined
  id?: string | undefined
  snippet?: TestItemTestItemSnippet | undefined
}
type ChannelToStoreLinkDetails = {
  merchantId?: string | undefined
  storeName?: string | undefined
  storeUrl?: string | undefined
}
type ThirdPartyLinkSnippet = {
  channelToStoreLink?: ChannelToStoreLinkDetails | undefined
  type?: 'linkUnspecified' | 'channelToStoreLink' | undefined
}
type ThirdPartyLinkStatus = { linkStatus?: 'unknown' | 'failed' | 'pending' | 'linked' | undefined }
type ThirdPartyLink = {
  etag?: string | undefined
  kind?: string | undefined
  linkingToken?: string | undefined
  snippet?: ThirdPartyLinkSnippet | undefined
  status?: ThirdPartyLinkStatus | undefined
}
type ThirdPartyLinkListResponse = {
  etag?: string | undefined
  items?: ThirdPartyLink[] | undefined
  kind?: string | undefined
}
type ThumbnailSetResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: ThumbnailDetails[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type VideoAbuseReportSecondaryReason = { id?: string | undefined; label?: string | undefined }
type VideoAbuseReportReasonSnippet = {
  label?: string | undefined
  secondaryReasons?: VideoAbuseReportSecondaryReason[] | undefined
}
type VideoAbuseReportReason = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: VideoAbuseReportReasonSnippet | undefined
}
type VideoAbuseReportReasonListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: VideoAbuseReportReason[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type VideoCategorySnippet = {
  assignable?: boolean | undefined
  channelId?: string | undefined
  title?: string | undefined
}
type VideoCategory = {
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  snippet?: VideoCategorySnippet | undefined
}
type VideoCategoryListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: VideoCategory[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type VideoAgeGating = {
  alcoholContent?: boolean | undefined
  restricted?: boolean | undefined
  videoGameRating?: 'anyone' | 'm15Plus' | 'm16Plus' | 'm17Plus' | undefined
}
type ContentRating = {
  acbRating?:
    | 'acbUnspecified'
    | 'acbE'
    | 'acbP'
    | 'acbC'
    | 'acbG'
    | 'acbPg'
    | 'acbM'
    | 'acbMa15plus'
    | 'acbR18plus'
    | 'acbUnrated'
    | undefined
  agcomRating?:
    | 'agcomUnspecified'
    | 'agcomT'
    | 'agcomVm14'
    | 'agcomVm18'
    | 'agcomUnrated'
    | undefined
  anatelRating?:
    | 'anatelUnspecified'
    | 'anatelF'
    | 'anatelI'
    | 'anatelI7'
    | 'anatelI10'
    | 'anatelI12'
    | 'anatelR'
    | 'anatelA'
    | 'anatelUnrated'
    | undefined
  bbfcRating?:
    | 'bbfcUnspecified'
    | 'bbfcU'
    | 'bbfcPg'
    | 'bbfc12a'
    | 'bbfc12'
    | 'bbfc15'
    | 'bbfc18'
    | 'bbfcR18'
    | 'bbfcUnrated'
    | undefined
  bfvcRating?:
    | 'bfvcUnspecified'
    | 'bfvcG'
    | 'bfvcE'
    | 'bfvc13'
    | 'bfvc15'
    | 'bfvc18'
    | 'bfvc20'
    | 'bfvcB'
    | 'bfvcUnrated'
    | undefined
  bmukkRating?:
    | 'bmukkUnspecified'
    | 'bmukkAa'
    | 'bmukk6'
    | 'bmukk8'
    | 'bmukk10'
    | 'bmukk12'
    | 'bmukk14'
    | 'bmukk16'
    | 'bmukkUnrated'
    | undefined
  catvRating?:
    | 'catvUnspecified'
    | 'catvC'
    | 'catvC8'
    | 'catvG'
    | 'catvPg'
    | 'catv14plus'
    | 'catv18plus'
    | 'catvUnrated'
    | 'catvE'
    | undefined
  catvfrRating?:
    | 'catvfrUnspecified'
    | 'catvfrG'
    | 'catvfr8plus'
    | 'catvfr13plus'
    | 'catvfr16plus'
    | 'catvfr18plus'
    | 'catvfrUnrated'
    | 'catvfrE'
    | undefined
  cbfcRating?:
    | 'cbfcUnspecified'
    | 'cbfcU'
    | 'cbfcUA'
    | 'cbfcUA7plus'
    | 'cbfcUA13plus'
    | 'cbfcUA16plus'
    | 'cbfcA'
    | 'cbfcS'
    | 'cbfcUnrated'
    | undefined
  cccRating?:
    | 'cccUnspecified'
    | 'cccTe'
    | 'ccc6'
    | 'ccc14'
    | 'ccc18'
    | 'ccc18v'
    | 'ccc18s'
    | 'cccUnrated'
    | undefined
  cceRating?:
    | 'cceUnspecified'
    | 'cceM4'
    | 'cceM6'
    | 'cceM12'
    | 'cceM16'
    | 'cceM18'
    | 'cceUnrated'
    | 'cceM14'
    | undefined
  chfilmRating?:
    | 'chfilmUnspecified'
    | 'chfilm0'
    | 'chfilm6'
    | 'chfilm12'
    | 'chfilm16'
    | 'chfilm18'
    | 'chfilmUnrated'
    | undefined
  chvrsRating?:
    | 'chvrsUnspecified'
    | 'chvrsG'
    | 'chvrsPg'
    | 'chvrs14a'
    | 'chvrs18a'
    | 'chvrsR'
    | 'chvrsE'
    | 'chvrsUnrated'
    | undefined
  cicfRating?: 'cicfUnspecified' | 'cicfE' | 'cicfKtEa' | 'cicfKntEna' | 'cicfUnrated' | undefined
  cnaRating?:
    | 'cnaUnspecified'
    | 'cnaAp'
    | 'cna12'
    | 'cna15'
    | 'cna18'
    | 'cna18plus'
    | 'cnaUnrated'
    | undefined
  cncRating?:
    | 'cncUnspecified'
    | 'cncT'
    | 'cnc10'
    | 'cnc12'
    | 'cnc16'
    | 'cnc18'
    | 'cncE'
    | 'cncInterdiction'
    | 'cncUnrated'
    | undefined
  csaRating?:
    | 'csaUnspecified'
    | 'csaT'
    | 'csa10'
    | 'csa12'
    | 'csa16'
    | 'csa18'
    | 'csaInterdiction'
    | 'csaUnrated'
    | undefined
  cscfRating?:
    | 'cscfUnspecified'
    | 'cscfAl'
    | 'cscfA'
    | 'cscf6'
    | 'cscf9'
    | 'cscf12'
    | 'cscf16'
    | 'cscf18'
    | 'cscfUnrated'
    | undefined
  czfilmRating?:
    | 'czfilmUnspecified'
    | 'czfilmU'
    | 'czfilm12'
    | 'czfilm14'
    | 'czfilm18'
    | 'czfilmUnrated'
    | undefined
  djctqRating?:
    | 'djctqUnspecified'
    | 'djctqL'
    | 'djctq10'
    | 'djctq12'
    | 'djctq14'
    | 'djctq16'
    | 'djctq18'
    | 'djctqEr'
    | 'djctqL10'
    | 'djctqL12'
    | 'djctqL14'
    | 'djctqL16'
    | 'djctqL18'
    | 'djctq1012'
    | 'djctq1014'
    | 'djctq1016'
    | 'djctq1018'
    | 'djctq1214'
    | 'djctq1216'
    | 'djctq1218'
    | 'djctq1416'
    | 'djctq1418'
    | 'djctq1618'
    | 'djctqUnrated'
    | undefined
  djctqRatingReasons?:
    | (
        | 'djctqRatingReasonUnspecified'
        | 'djctqViolence'
        | 'djctqExtremeViolence'
        | 'djctqSexualContent'
        | 'djctqNudity'
        | 'djctqSex'
        | 'djctqExplicitSex'
        | 'djctqDrugs'
        | 'djctqLegalDrugs'
        | 'djctqIllegalDrugs'
        | 'djctqInappropriateLanguage'
        | 'djctqCriminalActs'
        | 'djctqImpactingContent'
      )[]
    | undefined
  ecbmctRating?:
    | 'ecbmctUnspecified'
    | 'ecbmctG'
    | 'ecbmct7a'
    | 'ecbmct7plus'
    | 'ecbmct13a'
    | 'ecbmct13plus'
    | 'ecbmct15a'
    | 'ecbmct15plus'
    | 'ecbmct18plus'
    | 'ecbmctUnrated'
    | undefined
  eefilmRating?:
    | 'eefilmUnspecified'
    | 'eefilmPere'
    | 'eefilmL'
    | 'eefilmMs6'
    | 'eefilmK6'
    | 'eefilmMs12'
    | 'eefilmK12'
    | 'eefilmK14'
    | 'eefilmK16'
    | 'eefilmUnrated'
    | undefined
  egfilmRating?:
    | 'egfilmUnspecified'
    | 'egfilmGn'
    | 'egfilm18'
    | 'egfilmBn'
    | 'egfilmUnrated'
    | undefined
  eirinRating?:
    | 'eirinUnspecified'
    | 'eirinG'
    | 'eirinPg12'
    | 'eirinR15plus'
    | 'eirinR18plus'
    | 'eirinUnrated'
    | undefined
  fcbmRating?:
    | 'fcbmUnspecified'
    | 'fcbmU'
    | 'fcbmPg13'
    | 'fcbmP13'
    | 'fcbm18'
    | 'fcbm18sx'
    | 'fcbm18pa'
    | 'fcbm18sg'
    | 'fcbm18pl'
    | 'fcbmUnrated'
    | undefined
  fcoRating?:
    | 'fcoUnspecified'
    | 'fcoI'
    | 'fcoIia'
    | 'fcoIib'
    | 'fcoIi'
    | 'fcoIii'
    | 'fcoUnrated'
    | undefined
  fmocRating?:
    | 'fmocUnspecified'
    | 'fmocU'
    | 'fmoc10'
    | 'fmoc12'
    | 'fmoc16'
    | 'fmoc18'
    | 'fmocE'
    | 'fmocUnrated'
    | undefined
  fpbRating?:
    | 'fpbUnspecified'
    | 'fpbA'
    | 'fpbPg'
    | 'fpb79Pg'
    | 'fpb1012Pg'
    | 'fpb13'
    | 'fpb16'
    | 'fpb18'
    | 'fpbX18'
    | 'fpbXx'
    | 'fpbUnrated'
    | 'fpb10'
    | undefined
  fpbRatingReasons?:
    | (
        | 'fpbRatingReasonUnspecified'
        | 'fpbBlasphemy'
        | 'fpbLanguage'
        | 'fpbNudity'
        | 'fpbPrejudice'
        | 'fpbSex'
        | 'fpbViolence'
        | 'fpbDrugs'
        | 'fpbSexualViolence'
        | 'fpbHorror'
        | 'fpbCriminalTechniques'
        | 'fpbImitativeActsTechniques'
      )[]
    | undefined
  fskRating?:
    | 'fskUnspecified'
    | 'fsk0'
    | 'fsk6'
    | 'fsk12'
    | 'fsk16'
    | 'fsk18'
    | 'fskUnrated'
    | undefined
  grfilmRating?:
    | 'grfilmUnspecified'
    | 'grfilmK'
    | 'grfilmE'
    | 'grfilmK12'
    | 'grfilmK13'
    | 'grfilmK15'
    | 'grfilmK17'
    | 'grfilmK18'
    | 'grfilmUnrated'
    | undefined
  icaaRating?:
    | 'icaaUnspecified'
    | 'icaaApta'
    | 'icaa7'
    | 'icaa12'
    | 'icaa13'
    | 'icaa16'
    | 'icaa18'
    | 'icaaX'
    | 'icaaUnrated'
    | undefined
  ifcoRating?:
    | 'ifcoUnspecified'
    | 'ifcoG'
    | 'ifcoPg'
    | 'ifco12'
    | 'ifco12a'
    | 'ifco15'
    | 'ifco15a'
    | 'ifco16'
    | 'ifco18'
    | 'ifcoUnrated'
    | undefined
  ilfilmRating?:
    | 'ilfilmUnspecified'
    | 'ilfilmAa'
    | 'ilfilm12'
    | 'ilfilm14'
    | 'ilfilm16'
    | 'ilfilm18'
    | 'ilfilmUnrated'
    | undefined
  incaaRating?:
    | 'incaaUnspecified'
    | 'incaaAtp'
    | 'incaaSam13'
    | 'incaaSam16'
    | 'incaaSam18'
    | 'incaaC'
    | 'incaaUnrated'
    | undefined
  kfcbRating?:
    | 'kfcbUnspecified'
    | 'kfcbG'
    | 'kfcbPg'
    | 'kfcb16plus'
    | 'kfcbR'
    | 'kfcbUnrated'
    | undefined
  kijkwijzerRating?:
    | 'kijkwijzerUnspecified'
    | 'kijkwijzerAl'
    | 'kijkwijzer6'
    | 'kijkwijzer9'
    | 'kijkwijzer12'
    | 'kijkwijzer16'
    | 'kijkwijzer18'
    | 'kijkwijzerUnrated'
    | undefined
  kmrbRating?:
    | 'kmrbUnspecified'
    | 'kmrbAll'
    | 'kmrb12plus'
    | 'kmrb15plus'
    | 'kmrbTeenr'
    | 'kmrbR'
    | 'kmrbUnrated'
    | undefined
  lsfRating?:
    | 'lsfUnspecified'
    | 'lsfSu'
    | 'lsfA'
    | 'lsfBo'
    | 'lsf13'
    | 'lsfR'
    | 'lsf17'
    | 'lsfD'
    | 'lsf21'
    | 'lsfUnrated'
    | undefined
  mccaaRating?:
    | 'mccaaUnspecified'
    | 'mccaaU'
    | 'mccaaPg'
    | 'mccaa12a'
    | 'mccaa12'
    | 'mccaa14'
    | 'mccaa15'
    | 'mccaa16'
    | 'mccaa18'
    | 'mccaaUnrated'
    | undefined
  mccypRating?:
    | 'mccypUnspecified'
    | 'mccypA'
    | 'mccyp7'
    | 'mccyp11'
    | 'mccyp15'
    | 'mccypUnrated'
    | undefined
  mcstRating?:
    | 'mcstUnspecified'
    | 'mcstP'
    | 'mcst0'
    | 'mcstC13'
    | 'mcstC16'
    | 'mcst16plus'
    | 'mcstC18'
    | 'mcstGPg'
    | 'mcstUnrated'
    | undefined
  mdaRating?:
    | 'mdaUnspecified'
    | 'mdaG'
    | 'mdaPg'
    | 'mdaPg13'
    | 'mdaNc16'
    | 'mdaM18'
    | 'mdaR21'
    | 'mdaUnrated'
    | undefined
  medietilsynetRating?:
    | 'medietilsynetUnspecified'
    | 'medietilsynetA'
    | 'medietilsynet6'
    | 'medietilsynet7'
    | 'medietilsynet9'
    | 'medietilsynet11'
    | 'medietilsynet12'
    | 'medietilsynet15'
    | 'medietilsynet18'
    | 'medietilsynetUnrated'
    | undefined
  mekuRating?:
    | 'mekuUnspecified'
    | 'mekuS'
    | 'meku7'
    | 'meku12'
    | 'meku16'
    | 'meku18'
    | 'mekuUnrated'
    | undefined
  menaMpaaRating?:
    | 'menaMpaaUnspecified'
    | 'menaMpaaG'
    | 'menaMpaaPg'
    | 'menaMpaaPg13'
    | 'menaMpaaR'
    | 'menaMpaaUnrated'
    | undefined
  mibacRating?:
    | 'mibacUnspecified'
    | 'mibacT'
    | 'mibacVap'
    | 'mibacVm6'
    | 'mibacVm12'
    | 'mibacVm14'
    | 'mibacVm16'
    | 'mibacVm18'
    | 'mibacUnrated'
    | undefined
  mocRating?:
    | 'mocUnspecified'
    | 'mocE'
    | 'mocT'
    | 'moc7'
    | 'moc12'
    | 'moc15'
    | 'moc18'
    | 'mocX'
    | 'mocBanned'
    | 'mocUnrated'
    | undefined
  moctwRating?:
    | 'moctwUnspecified'
    | 'moctwG'
    | 'moctwP'
    | 'moctwPg'
    | 'moctwR'
    | 'moctwUnrated'
    | 'moctwR12'
    | 'moctwR15'
    | undefined
  mpaaRating?:
    | 'mpaaUnspecified'
    | 'mpaaG'
    | 'mpaaPg'
    | 'mpaaPg13'
    | 'mpaaR'
    | 'mpaaNc17'
    | 'mpaaX'
    | 'mpaaUnrated'
    | undefined
  mpaatRating?: 'mpaatUnspecified' | 'mpaatGb' | 'mpaatRb' | undefined
  mtrcbRating?:
    | 'mtrcbUnspecified'
    | 'mtrcbG'
    | 'mtrcbPg'
    | 'mtrcbR13'
    | 'mtrcbR16'
    | 'mtrcbR18'
    | 'mtrcbX'
    | 'mtrcbUnrated'
    | undefined
  nbcRating?:
    | 'nbcUnspecified'
    | 'nbcG'
    | 'nbcPg'
    | 'nbc12plus'
    | 'nbc15plus'
    | 'nbc18plus'
    | 'nbc18plusr'
    | 'nbcPu'
    | 'nbcUnrated'
    | undefined
  nbcplRating?:
    | 'nbcplUnspecified'
    | 'nbcplI'
    | 'nbcplIi'
    | 'nbcplIii'
    | 'nbcplIv'
    | 'nbcpl18plus'
    | 'nbcplUnrated'
    | undefined
  nfrcRating?:
    | 'nfrcUnspecified'
    | 'nfrcA'
    | 'nfrcB'
    | 'nfrcC'
    | 'nfrcD'
    | 'nfrcX'
    | 'nfrcUnrated'
    | undefined
  nfvcbRating?:
    | 'nfvcbUnspecified'
    | 'nfvcbG'
    | 'nfvcbPg'
    | 'nfvcb12'
    | 'nfvcb12a'
    | 'nfvcb15'
    | 'nfvcb18'
    | 'nfvcbRe'
    | 'nfvcbUnrated'
    | undefined
  nkclvRating?:
    | 'nkclvUnspecified'
    | 'nkclvU'
    | 'nkclv7plus'
    | 'nkclv12plus'
    | 'nkclv16plus'
    | 'nkclv18plus'
    | 'nkclvUnrated'
    | undefined
  nmcRating?:
    | 'nmcUnspecified'
    | 'nmcG'
    | 'nmcPg'
    | 'nmcPg13'
    | 'nmcPg15'
    | 'nmc15plus'
    | 'nmc18plus'
    | 'nmc18tc'
    | 'nmcUnrated'
    | undefined
  oflcRating?:
    | 'oflcUnspecified'
    | 'oflcG'
    | 'oflcPg'
    | 'oflcM'
    | 'oflcR13'
    | 'oflcR15'
    | 'oflcR16'
    | 'oflcR18'
    | 'oflcUnrated'
    | 'oflcRp13'
    | 'oflcRp16'
    | 'oflcRp18'
    | undefined
  pefilmRating?:
    | 'pefilmUnspecified'
    | 'pefilmPt'
    | 'pefilmPg'
    | 'pefilm14'
    | 'pefilm18'
    | 'pefilmUnrated'
    | undefined
  rcnofRating?:
    | 'rcnofUnspecified'
    | 'rcnofI'
    | 'rcnofIi'
    | 'rcnofIii'
    | 'rcnofIv'
    | 'rcnofV'
    | 'rcnofVi'
    | 'rcnofUnrated'
    | undefined
  resorteviolenciaRating?:
    | 'resorteviolenciaUnspecified'
    | 'resorteviolenciaA'
    | 'resorteviolenciaB'
    | 'resorteviolenciaC'
    | 'resorteviolenciaD'
    | 'resorteviolenciaE'
    | 'resorteviolenciaUnrated'
    | undefined
  rtcRating?:
    | 'rtcUnspecified'
    | 'rtcAa'
    | 'rtcA'
    | 'rtcB'
    | 'rtcB15'
    | 'rtcC'
    | 'rtcD'
    | 'rtcUnrated'
    | undefined
  rteRating?: 'rteUnspecified' | 'rteGa' | 'rteCh' | 'rtePs' | 'rteMa' | 'rteUnrated' | undefined
  russiaRating?:
    | 'russiaUnspecified'
    | 'russia0'
    | 'russia6'
    | 'russia12'
    | 'russia16'
    | 'russia18'
    | 'russiaUnrated'
    | undefined
  skfilmRating?:
    | 'skfilmUnspecified'
    | 'skfilmG'
    | 'skfilmP2'
    | 'skfilmP5'
    | 'skfilmP8'
    | 'skfilmUnrated'
    | undefined
  smaisRating?:
    | 'smaisUnspecified'
    | 'smaisL'
    | 'smais7'
    | 'smais12'
    | 'smais14'
    | 'smais16'
    | 'smais18'
    | 'smaisUnrated'
    | undefined
  smsaRating?:
    | 'smsaUnspecified'
    | 'smsaA'
    | 'smsa7'
    | 'smsa11'
    | 'smsa15'
    | 'smsaUnrated'
    | undefined
  tvpgRating?:
    | 'tvpgUnspecified'
    | 'tvpgY'
    | 'tvpgY7'
    | 'tvpgY7Fv'
    | 'tvpgG'
    | 'tvpgPg'
    | 'pg14'
    | 'tvpgMa'
    | 'tvpgUnrated'
    | undefined
  ytRating?: 'ytUnspecified' | 'ytAgeRestricted' | undefined
}
type AccessPolicy = { allowed?: boolean | undefined; exception?: string[] | undefined }
type VideoContentDetailsRegionRestriction = {
  allowed?: string[] | undefined
  blocked?: string[] | undefined
}
type VideoContentDetails = {
  caption?: 'true' | 'false' | undefined
  contentRating?: ContentRating | undefined
  countryRestriction?: AccessPolicy | undefined
  definition?: 'sd' | 'hd' | undefined
  dimension?: string | undefined
  duration?: string | undefined
  hasCustomThumbnail?: boolean | undefined
  licensedContent?: boolean | undefined
  projection?: 'rectangular' | '360' | undefined
  regionRestriction?: VideoContentDetailsRegionRestriction | undefined
}
type VideoFileDetailsAudioStream = {
  bitrateBps?: string | undefined
  channelCount?: number | undefined
  codec?: string | undefined
  vendor?: string | undefined
}
type VideoFileDetailsVideoStream = {
  aspectRatio?: number | undefined
  bitrateBps?: string | undefined
  codec?: string | undefined
  frameRateFps?: number | undefined
  heightPixels?: number | undefined
  rotation?: 'none' | 'clockwise' | 'upsideDown' | 'counterClockwise' | 'other' | undefined
  vendor?: string | undefined
  widthPixels?: number | undefined
}
type VideoFileDetails = {
  audioStreams?: VideoFileDetailsAudioStream[] | undefined
  bitrateBps?: string | undefined
  container?: string | undefined
  creationTime?: string | undefined
  durationMs?: string | undefined
  fileName?: string | undefined
  fileSize?: string | undefined
  fileType?: 'video' | 'audio' | 'image' | 'archive' | 'document' | 'project' | 'other' | undefined
  videoStreams?: VideoFileDetailsVideoStream[] | undefined
}
type VideoLiveStreamingDetails = {
  activeLiveChatId?: string | undefined
  actualEndTime?: string | undefined
  actualStartTime?: string | undefined
  concurrentViewers?: string | undefined
  scheduledEndTime?: string | undefined
  scheduledStartTime?: string | undefined
}
type VideoLocalization = { description?: string | undefined; title?: string | undefined }
type VideoMonetizationDetails = { access?: AccessPolicy | undefined }
type VideoPlayer = {
  embedHeight?: string | undefined
  embedHtml?: string | undefined
  embedWidth?: string | undefined
}
type VideoProcessingDetailsProcessingProgress = {
  partsProcessed?: string | undefined
  partsTotal?: string | undefined
  timeLeftMs?: string | undefined
}
type VideoProcessingDetails = {
  editorSuggestionsAvailability?: string | undefined
  fileDetailsAvailability?: string | undefined
  processingFailureReason?:
    | 'uploadFailed'
    | 'transcodeFailed'
    | 'streamingFailed'
    | 'other'
    | undefined
  processingIssuesAvailability?: string | undefined
  processingProgress?: VideoProcessingDetailsProcessingProgress | undefined
  processingStatus?: 'processing' | 'succeeded' | 'failed' | 'terminated' | undefined
  tagSuggestionsAvailability?: string | undefined
  thumbnailsAvailability?: string | undefined
}
type VideoProjectDetails = { [x: string]: unknown }
type GeoPoint = {
  altitude?: number | undefined
  latitude?: number | undefined
  longitude?: number | undefined
}
type VideoRecordingDetails = {
  location?: GeoPoint | undefined
  locationDescription?: string | undefined
  recordingDate?: string | undefined
}
type VideoSnippet = {
  categoryId?: string | undefined
  channelId?: string | undefined
  channelTitle?: string | undefined
  defaultAudioLanguage?: string | undefined
  defaultLanguage?: string | undefined
  description?: string | undefined
  liveBroadcastContent?: 'none' | 'upcoming' | 'live' | 'completed' | undefined
  localized?: VideoLocalization | undefined
  publishedAt?: string | undefined
  tags?: string[] | undefined
  thumbnails?: ThumbnailDetails | undefined
  title?: string | undefined
}
type VideoStatistics = {
  commentCount?: string | undefined
  dislikeCount?: string | undefined
  favoriteCount?: string | undefined
  likeCount?: string | undefined
  viewCount?: string | undefined
}
type VideoStatus = {
  embeddable?: boolean | undefined
  failureReason?:
    | 'conversion'
    | 'invalidFile'
    | 'emptyFile'
    | 'tooSmall'
    | 'codec'
    | 'uploadAborted'
    | undefined
  license?: 'youtube' | 'creativeCommon' | undefined
  madeForKids?: boolean | undefined
  privacyStatus?: 'public' | 'unlisted' | 'private' | undefined
  publicStatsViewable?: boolean | undefined
  publishAt?: string | undefined
  rejectionReason?:
    | 'copyright'
    | 'inappropriate'
    | 'duplicate'
    | 'termsOfUse'
    | 'uploaderAccountSuspended'
    | 'length'
    | 'claim'
    | 'uploaderAccountClosed'
    | 'trademark'
    | 'legal'
    | undefined
  selfDeclaredMadeForKids?: boolean | undefined
  uploadStatus?: 'uploaded' | 'processed' | 'failed' | 'rejected' | 'deleted' | undefined
}
type VideoSuggestionsTagSuggestion = {
  categoryRestricts?: string[] | undefined
  tag?: string | undefined
}
type VideoSuggestions = {
  editorSuggestions?:
    | ('videoAutoLevels' | 'videoStabilize' | 'videoCrop' | 'audioQuietAudioSwap')[]
    | undefined
  processingErrors?:
    | (
        | 'audioFile'
        | 'imageFile'
        | 'projectFile'
        | 'notAVideoFile'
        | 'docFile'
        | 'archiveFile'
        | 'unsupportedSpatialAudioLayout'
      )[]
    | undefined
  processingHints?:
    | (
        | 'nonStreamableMov'
        | 'sendBestQualityVideo'
        | 'sphericalVideo'
        | 'spatialAudio'
        | 'vrVideo'
        | 'hdrVideo'
      )[]
    | undefined
  processingWarnings?:
    | (
        | 'unknownContainer'
        | 'unknownVideoCodec'
        | 'unknownAudioCodec'
        | 'inconsistentResolution'
        | 'hasEditlist'
        | 'problematicVideoCodec'
        | 'problematicAudioCodec'
        | 'unsupportedVrStereoMode'
        | 'unsupportedSphericalProjectionType'
        | 'unsupportedHdrPixelFormat'
        | 'unsupportedHdrColorMetadata'
        | 'problematicHdrLookupTable'
      )[]
    | undefined
  tagSuggestions?: VideoSuggestionsTagSuggestion[] | undefined
}
type VideoTopicDetails = {
  relevantTopicIds?: string[] | undefined
  topicCategories?: string[] | undefined
  topicIds?: string[] | undefined
}
type Video = {
  ageGating?: VideoAgeGating | undefined
  contentDetails?: VideoContentDetails | undefined
  etag?: string | undefined
  fileDetails?: VideoFileDetails | undefined
  id?: string | undefined
  kind?: string | undefined
  liveStreamingDetails?: VideoLiveStreamingDetails | undefined
  localizations?: { [x: string]: VideoLocalization } | undefined
  monetizationDetails?: VideoMonetizationDetails | undefined
  player?: VideoPlayer | undefined
  processingDetails?: VideoProcessingDetails | undefined
  projectDetails?: VideoProjectDetails | undefined
  recordingDetails?: VideoRecordingDetails | undefined
  snippet?: VideoSnippet | undefined
  statistics?: VideoStatistics | undefined
  status?: VideoStatus | undefined
  suggestions?: VideoSuggestions | undefined
  topicDetails?: VideoTopicDetails | undefined
}
type VideoListResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: Video[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  pageInfo?: PageInfo | undefined
  prevPageToken?: string | undefined
  tokenPagination?: TokenPagination | undefined
  visitorId?: string | undefined
}
type VideoRating = {
  rating?: 'none' | 'like' | 'dislike' | undefined
  videoId?: string | undefined
}
type VideoGetRatingResponse = {
  etag?: string | undefined
  eventId?: string | undefined
  items?: VideoRating[] | undefined
  kind?: string | undefined
  visitorId?: string | undefined
}
type VideoAbuseReport = {
  comments?: string | undefined
  language?: string | undefined
  reasonId?: string | undefined
  secondaryReasonId?: string | undefined
  videoId?: string | undefined
}
type InvideoPosition = {
  cornerPosition?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | undefined
  type?: 'corner' | undefined
}
type InvideoTiming = {
  durationMs?: string | undefined
  offsetMs?: string | undefined
  type?: 'offsetFromStart' | 'offsetFromEnd' | undefined
}
type InvideoBranding = {
  imageBytes?: string | undefined
  imageUrl?: string | undefined
  position?: InvideoPosition | undefined
  targetChannelId?: string | undefined
  timing?: InvideoTiming | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/youtube/v3/abuseReports': {
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AbuseReport }
        output: AbuseReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/activities': {
      $get: {
        input: {
          query: {
            part: string[]
            channelId?: string | undefined
            home?: boolean | undefined
            maxResults?: number | undefined
            mine?: boolean | undefined
            pageToken?: string | undefined
            publishedAfter?: string | undefined
            publishedBefore?: string | undefined
            regionCode?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ActivityListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/captions': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOf?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            videoId: string
            id?: string[] | undefined
            onBehalfOf?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CaptionListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            onBehalfOf?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            sync?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Caption }
        output: Caption
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOf?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            sync?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Caption }
        output: Caption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/captions/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            onBehalfOf?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            tfmt?: string | undefined
            tlang?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/youtube/v3/channelBanners/insert': {
      $post: {
        input: {
          query: {
            channelId?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ChannelBannerResource }
        output: ChannelBannerResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/channelSections': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            channelId?: string | undefined
            hl?: string | undefined
            id?: string[] | undefined
            mine?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ChannelSectionListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ChannelSection }
        output: ChannelSection
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ChannelSection }
        output: ChannelSection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/channels': {
      $get: {
        input: {
          query: {
            part: string[]
            categoryId?: string | undefined
            forUsername?: string | undefined
            hl?: string | undefined
            id?: string[] | undefined
            managedByMe?: boolean | undefined
            maxResults?: number | undefined
            mine?: boolean | undefined
            mySubscribers?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ChannelListResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/commentThreads': {
      $get: {
        input: {
          query: {
            part: string[]
            allThreadsRelatedToChannelId?: string | undefined
            channelId?: string | undefined
            id?: string[] | undefined
            maxResults?: number | undefined
            moderationStatus?: 'published' | 'heldForReview' | 'likelySpam' | 'rejected' | undefined
            order?: 'orderUnspecified' | 'time' | 'relevance' | undefined
            pageToken?: string | undefined
            searchTerms?: string | undefined
            textFormat?: 'textFormatUnspecified' | 'html' | 'plainText' | undefined
            videoId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CommentThreadListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CommentThread }
        output: CommentThread
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CommentThread }
        output: CommentThread
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/comments': {
      $delete: {
        input: {
          query: {
            id: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            id?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            parentId?: string | undefined
            textFormat?: 'textFormatUnspecified' | 'html' | 'plainText' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CommentListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Comment }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Comment }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/comments/markAsSpam': {
      $post: {
        input: {
          query: {
            id: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/youtube/v3/comments/setModerationStatus': {
      $post: {
        input: {
          query: {
            id: string[]
            moderationStatus: 'published' | 'heldForReview' | 'likelySpam' | 'rejected'
            banAuthor?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/youtube/v3/i18nLanguages': {
      $get: {
        input: {
          query: {
            part: string[]
            hl?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: I18nLanguageListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/i18nRegions': {
      $get: {
        input: {
          query: {
            part: string[]
            hl?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: I18nRegionListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveBroadcasts': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            broadcastStatus?:
              | 'broadcastStatusFilterUnspecified'
              | 'all'
              | 'active'
              | 'upcoming'
              | 'completed'
              | undefined
            broadcastType?:
              | 'broadcastTypeFilterUnspecified'
              | 'all'
              | 'event'
              | 'persistent'
              | undefined
            id?: string[] | undefined
            maxResults?: number | undefined
            mine?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiveBroadcastListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveBroadcast }
        output: LiveBroadcast
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveBroadcast }
        output: LiveBroadcast
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveBroadcasts/bind': {
      $post: {
        input: {
          query: {
            id: string
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            streamId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiveBroadcast
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveBroadcasts/cuepoint': {
      $post: {
        input: {
          query: {
            id?: string | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            part?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Cuepoint }
        output: Cuepoint
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveBroadcasts/transition': {
      $post: {
        input: {
          query: {
            broadcastStatus: 'statusUnspecified' | 'testing' | 'live' | 'complete'
            id: string
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiveBroadcast
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveChat/bans': {
      $delete: {
        input: {
          query: {
            id: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveChatBan }
        output: LiveChatBan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveChat/messages': {
      $delete: {
        input: {
          query: {
            id: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            liveChatId: string
            part: string[]
            hl?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            profileImageSize?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiveChatMessageListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveChatMessage }
        output: LiveChatMessage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveChat/moderators': {
      $delete: {
        input: {
          query: {
            id: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            liveChatId: string
            part: string[]
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiveChatModeratorListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveChatModerator }
        output: LiveChatModerator
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/liveStreams': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            id?: string[] | undefined
            maxResults?: number | undefined
            mine?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: LiveStreamListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveStream }
        output: LiveStream
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: LiveStream }
        output: LiveStream
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/members': {
      $get: {
        input: {
          query: {
            part: string[]
            filterByMemberChannelId?: string | undefined
            hasAccessToLevel?: string | undefined
            maxResults?: number | undefined
            mode?: 'listMembersModeUnknown' | 'updates' | 'all_current' | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: MemberListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/membershipsLevels': {
      $get: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: MembershipsLevelListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/playlistItems': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            id?: string[] | undefined
            maxResults?: number | undefined
            onBehalfOfContentOwner?: string | undefined
            pageToken?: string | undefined
            playlistId?: string | undefined
            videoId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PlaylistItemListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PlaylistItem }
        output: PlaylistItem
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PlaylistItem }
        output: PlaylistItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/playlists': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            channelId?: string | undefined
            hl?: string | undefined
            id?: string[] | undefined
            maxResults?: number | undefined
            mine?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PlaylistListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Playlist }
        output: Playlist
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Playlist }
        output: Playlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/search': {
      $get: {
        input: {
          query: {
            part: string[]
            channelId?: string | undefined
            channelType?: 'channelTypeUnspecified' | 'any' | 'show' | undefined
            eventType?: 'none' | 'upcoming' | 'live' | 'completed' | undefined
            forContentOwner?: boolean | undefined
            forDeveloper?: boolean | undefined
            forMine?: boolean | undefined
            location?: string | undefined
            locationRadius?: string | undefined
            maxResults?: number | undefined
            onBehalfOfContentOwner?: string | undefined
            order?:
              | 'searchSortUnspecified'
              | 'date'
              | 'rating'
              | 'viewCount'
              | 'relevance'
              | 'title'
              | 'videoCount'
              | undefined
            pageToken?: string | undefined
            publishedAfter?: string | undefined
            publishedBefore?: string | undefined
            q?: string | undefined
            regionCode?: string | undefined
            relatedToVideoId?: string | undefined
            relevanceLanguage?: string | undefined
            safeSearch?: 'safeSearchSettingUnspecified' | 'none' | 'moderate' | 'strict' | undefined
            topicId?: string | undefined
            type?: string[] | undefined
            videoCaption?: 'videoCaptionUnspecified' | 'any' | 'closedCaption' | 'none' | undefined
            videoCategoryId?: string | undefined
            videoDefinition?: 'any' | 'standard' | 'high' | undefined
            videoDimension?: 'any' | '2d' | '3d' | undefined
            videoDuration?:
              | 'videoDurationUnspecified'
              | 'any'
              | 'short'
              | 'medium'
              | 'long'
              | undefined
            videoEmbeddable?: 'videoEmbeddableUnspecified' | 'any' | 'true' | undefined
            videoLicense?: 'any' | 'youtube' | 'creativeCommon' | undefined
            videoSyndicated?: 'videoSyndicatedUnspecified' | 'any' | 'true' | undefined
            videoType?: 'videoTypeUnspecified' | 'any' | 'movie' | 'episode' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SearchListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/subscriptions': {
      $delete: {
        input: {
          query: {
            id: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            channelId?: string | undefined
            forChannelId?: string | undefined
            id?: string[] | undefined
            maxResults?: number | undefined
            mine?: boolean | undefined
            myRecentSubscribers?: boolean | undefined
            mySubscribers?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            order?:
              | 'subscriptionOrderUnspecified'
              | 'relevance'
              | 'unread'
              | 'alphabetical'
              | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SubscriptionListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/superChatEvents': {
      $get: {
        input: {
          query: {
            part: string[]
            hl?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SuperChatEventListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/tests': {
      $post: {
        input: {
          query: {
            part: string[]
            externalChannelId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestItem }
        output: TestItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/thirdPartyLinks': {
      $delete: {
        input: {
          query: {
            linkingToken: string
            type: 'linkUnspecified' | 'channelToStoreLink'
            externalChannelId?: string | undefined
            part?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            externalChannelId?: string | undefined
            linkingToken?: string | undefined
            type?: 'linkUnspecified' | 'channelToStoreLink' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ThirdPartyLinkListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            externalChannelId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ThirdPartyLink }
        output: ThirdPartyLink
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            externalChannelId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ThirdPartyLink }
        output: ThirdPartyLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/thumbnails/set': {
      $post: {
        input: {
          query: {
            videoId: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ThumbnailSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/videoAbuseReportReasons': {
      $get: {
        input: {
          query: {
            part: string[]
            hl?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VideoAbuseReportReasonListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/videoCategories': {
      $get: {
        input: {
          query: {
            part: string[]
            hl?: string | undefined
            id?: string[] | undefined
            regionCode?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VideoCategoryListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/videos': {
      $delete: {
        input: {
          query: {
            id: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            part: string[]
            chart?: 'chartUnspecified' | 'mostPopular' | undefined
            hl?: string | undefined
            id?: string[] | undefined
            locale?: string | undefined
            maxHeight?: number | undefined
            maxResults?: number | undefined
            maxWidth?: number | undefined
            myRating?: 'none' | 'like' | 'dislike' | undefined
            onBehalfOfContentOwner?: string | undefined
            pageToken?: string | undefined
            regionCode?: string | undefined
            videoCategoryId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VideoListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            part: string[]
            autoLevels?: boolean | undefined
            notifySubscribers?: boolean | undefined
            onBehalfOfContentOwner?: string | undefined
            onBehalfOfContentOwnerChannel?: string | undefined
            stabilize?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Video }
        output: Video
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: {
            part: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Video }
        output: Video
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/videos/getRating': {
      $get: {
        input: {
          query: {
            id: string[]
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: VideoGetRatingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/youtube/v3/videos/rate': {
      $post: {
        input: {
          query: {
            id: string
            rating: 'none' | 'like' | 'dislike'
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/youtube/v3/videos/reportAbuse': {
      $post: {
        input: {
          query: {
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: VideoAbuseReport }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/youtube/v3/watermarks/set': {
      $post: {
        input: {
          query: {
            channelId: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: InvideoBranding }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/youtube/v3/watermarks/unset': {
      $post: {
        input: {
          query: {
            channelId: string
            onBehalfOfContentOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
