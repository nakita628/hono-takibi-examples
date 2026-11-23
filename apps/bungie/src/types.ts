type ApplicationsDatapoint = { time?: string | undefined; count?: (number | null) | undefined }
type ApplicationsSeries = {
  datapoints?: ApplicationsDatapoint[] | undefined
  target?: string | undefined
}
type ApplicationsApiUsage = {
  apiCalls?: ApplicationsSeries[] | undefined
  throttledRequests?: ApplicationsSeries[] | undefined
}
type UserUserInfoCard = {
  supplementalDisplayName?: string | undefined
  iconPath?: string | undefined
  crossSaveOverride?: number | undefined
  applicableMembershipTypes?: number[] | undefined
  isPublic?: boolean | undefined
  membershipType?: number | undefined
  membershipId?: bigint | undefined
  displayName?: string | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
}
type ApplicationsApplicationDeveloper = {
  role?: number | undefined
  apiEulaVersion?: number | undefined
  user?: UserUserInfoCard | undefined
}
type ApplicationsApplication = {
  applicationType?: number | undefined
  applicationId?: number | undefined
  name?: string | undefined
  redirectUrl?: string | undefined
  link?: string | undefined
  scope?: bigint | undefined
  origin?: string | undefined
  status?: number | undefined
  creationDate?: string | undefined
  statusChanged?: string | undefined
  firstPublished?: string | undefined
  team?: ApplicationsApplicationDeveloper[] | undefined
  overrideAuthorizeViewName?: string | undefined
}
type IgnoresIgnoreResponse = { isIgnored?: boolean | undefined; ignoreFlags?: number | undefined }
type UserUserToUserContext = {
  isFollowing?: boolean | undefined
  ignoreStatus?: IgnoresIgnoreResponse | undefined
  globalIgnoreEndDate?: (string | null) | undefined
}
type UserGeneralUser = {
  membershipId?: bigint | undefined
  uniqueName?: string | undefined
  normalizedName?: string | undefined
  displayName?: string | undefined
  profilePicture?: number | undefined
  profileTheme?: number | undefined
  userTitle?: number | undefined
  successMessageFlags?: bigint | undefined
  isDeleted?: boolean | undefined
  about?: string | undefined
  firstAccess?: (string | null) | undefined
  lastUpdate?: (string | null) | undefined
  legacyPortalUID?: (bigint | null) | undefined
  context?: UserUserToUserContext | undefined
  psnDisplayName?: string | undefined
  xboxDisplayName?: string | undefined
  fbDisplayName?: string | undefined
  showActivity?: (boolean | null) | undefined
  locale?: string | undefined
  localeInheritDefault?: boolean | undefined
  lastBanReportId?: (bigint | null) | undefined
  showGroupMessaging?: boolean | undefined
  profilePicturePath?: string | undefined
  profilePictureWidePath?: string | undefined
  profileThemeName?: string | undefined
  userTitleDisplay?: string | undefined
  statusText?: string | undefined
  statusDate?: string | undefined
  profileBanExpire?: (string | null) | undefined
  blizzardDisplayName?: string | undefined
  steamDisplayName?: string | undefined
  stadiaDisplayName?: string | undefined
  twitchDisplayName?: string | undefined
  cachedBungieGlobalDisplayName?: string | undefined
  cachedBungieGlobalDisplayNameCode?: (number | null) | undefined
  egsDisplayName?: string | undefined
}
type UserModelsGetCredentialTypesForAccountResponse = {
  credentialType?: number | undefined
  credentialDisplayName?: string | undefined
  isPublic?: boolean | undefined
  credentialAsString?: string | undefined
}
type ConfigUserTheme = {
  userThemeId?: number | undefined
  userThemeName?: string | undefined
  userThemeDescription?: string | undefined
}
type GroupsV2GroupUserInfoCard = {
  LastSeenDisplayName?: string | undefined
  LastSeenDisplayNameType?: number | undefined
  supplementalDisplayName?: string | undefined
  iconPath?: string | undefined
  crossSaveOverride?: number | undefined
  applicableMembershipTypes?: number[] | undefined
  isPublic?: boolean | undefined
  membershipType?: number | undefined
  membershipId?: bigint | undefined
  displayName?: string | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
}
type UserUserMembershipData = {
  destinyMemberships?: GroupsV2GroupUserInfoCard[] | undefined
  primaryMembershipId?: (bigint | null) | undefined
  marathonMembershipId?: (bigint | null) | undefined
  bungieNetUser?: UserGeneralUser | undefined
}
type UserHardLinkedUserMembership = {
  membershipType?: number | undefined
  membershipId?: bigint | undefined
  CrossSaveOverriddenType?: number | undefined
  CrossSaveOverriddenMembershipId?: (bigint | null) | undefined
}
type UserUserSearchResponseDetail = {
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
  bungieNetMembershipId?: (bigint | null) | undefined
  destinyMemberships?: UserUserInfoCard[] | undefined
}
type UserUserSearchResponse = {
  searchResults?: UserUserSearchResponseDetail[] | undefined
  page?: number | undefined
  hasMore?: boolean | undefined
}
type UserUserSearchPrefixRequest = { displayNamePrefix?: string | undefined }
type ContentModelsContentTypeDefaultValue = {
  whenClause?: string | undefined
  whenValue?: string | undefined
  defaultValue?: string | undefined
}
type ContentModelsContentTypeProperty = {
  name?: string | undefined
  rootPropertyName?: string | undefined
  readableName?: string | undefined
  value?: string | undefined
  propertyDescription?: string | undefined
  localizable?: boolean | undefined
  fallback?: boolean | undefined
  enabled?: boolean | undefined
  order?: number | undefined
  visible?: boolean | undefined
  isTitle?: boolean | undefined
  required?: boolean | undefined
  maxLength?: number | undefined
  maxByteLength?: number | undefined
  maxFileSize?: number | undefined
  regexp?: string | undefined
  validateAs?: string | undefined
  rssAttribute?: string | undefined
  visibleDependency?: string | undefined
  visibleOn?: string | undefined
  datatype?: number | undefined
  attributes?: { [x: string]: string } | undefined
  childProperties?: ContentModelsContentTypeProperty[] | undefined
  contentTypeAllowed?: string | undefined
  bindToProperty?: string | undefined
  boundRegex?: string | undefined
  representationSelection?: { [x: string]: string } | undefined
  defaultValues?: ContentModelsContentTypeDefaultValue[] | undefined
  isExternalAllowed?: boolean | undefined
  propertySection?: string | undefined
  weight?: number | undefined
  entitytype?: string | undefined
  isCombo?: boolean | undefined
  suppressProperty?: boolean | undefined
  legalContentTypes?: string[] | undefined
  representationValidationString?: string | undefined
  minWidth?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  maxHeight?: number | undefined
  isVideo?: boolean | undefined
  isImage?: boolean | undefined
}
type ContentModelsTagMetadataItem = {
  description?: string | undefined
  tagText?: string | undefined
  groups?: string[] | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
}
type ContentModelsTagMetadataDefinition = {
  description?: string | undefined
  order?: number | undefined
  items?: ContentModelsTagMetadataItem[] | undefined
  datatype?: string | undefined
  name?: string | undefined
  isRequired?: boolean | undefined
}
type ContentModelsContentPreview = {
  name?: string | undefined
  path?: string | undefined
  itemInSet?: boolean | undefined
  setTag?: string | undefined
  setNesting?: number | undefined
  useSetId?: number | undefined
}
type ContentModelsContentTypePropertySection = {
  name?: string | undefined
  readableName?: string | undefined
  collapsed?: boolean | undefined
}
type ContentModelsContentTypeDescription = {
  cType?: string | undefined
  name?: string | undefined
  contentDescription?: string | undefined
  previewImage?: string | undefined
  priority?: number | undefined
  reminder?: string | undefined
  properties?: ContentModelsContentTypeProperty[] | undefined
  tagMetadata?: ContentModelsTagMetadataDefinition[] | undefined
  tagMetadataItems?: { [x: string]: ContentModelsTagMetadataItem } | undefined
  usageExamples?: string[] | undefined
  showInContentEditor?: boolean | undefined
  typeOf?: string | undefined
  bindIdentifierToProperty?: string | undefined
  boundRegex?: string | undefined
  forceIdentifierBinding?: boolean | undefined
  allowComments?: boolean | undefined
  autoEnglishPropertyFallback?: boolean | undefined
  bulkUploadable?: boolean | undefined
  previews?: ContentModelsContentPreview[] | undefined
  suppressCmsPath?: boolean | undefined
  propertySections?: ContentModelsContentTypePropertySection[] | undefined
}
type ContentContentRepresentation = {
  name?: string | undefined
  path?: string | undefined
  validationString?: string | undefined
}
type ContentCommentSummary = { topicId?: bigint | undefined; commentCount?: number | undefined }
type ContentContentItemPublicContract = {
  contentId?: bigint | undefined
  cType?: string | undefined
  cmsPath?: string | undefined
  creationDate?: string | undefined
  modifyDate?: string | undefined
  allowComments?: boolean | undefined
  hasAgeGate?: boolean | undefined
  minimumAge?: number | undefined
  ratingImagePath?: string | undefined
  author?: UserGeneralUser | undefined
  autoEnglishPropertyFallback?: boolean | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  representations?: ContentContentRepresentation[] | undefined
  tags?: string[] | undefined
  commentSummary?: ContentCommentSummary | undefined
}
type QueriesPagedQuery = {
  itemsPerPage?: number | undefined
  currentPage?: number | undefined
  requestContinuationToken?: string | undefined
}
type SearchResultOfContentItemPublicContract = {
  results?: ContentContentItemPublicContract[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type ContentNewsArticleRssItem = {
  Title?: string | undefined
  Link?: string | undefined
  PubDate?: string | undefined
  UniqueIdentifier?: string | undefined
  Description?: string | undefined
  HtmlContent?: string | undefined
  ImagePath?: string | undefined
  OptionalMobileImagePath?: string | undefined
}
type ContentNewsArticleRssResponse = {
  CurrentPaginationToken?: number | undefined
  NextPaginationToken?: (number | null) | undefined
  ResultCountThisPage?: number | undefined
  NewsArticles?: ContentNewsArticleRssItem[] | undefined
  CategoryFilter?: string | undefined
  PagerAction?: string | undefined
}
type ForumPostResponse = {
  lastReplyTimestamp?: string | undefined
  IsPinned?: boolean | undefined
  urlMediaType?: number | undefined
  thumbnail?: string | undefined
  popularity?: number | undefined
  isActive?: boolean | undefined
  isAnnouncement?: boolean | undefined
  userRating?: number | undefined
  userHasRated?: boolean | undefined
  userHasMutedPost?: boolean | undefined
  latestReplyPostId?: bigint | undefined
  latestReplyAuthorId?: bigint | undefined
  ignoreStatus?: IgnoresIgnoreResponse | undefined
  locale?: string | undefined
}
type GroupsV2GroupFeatures = {
  maximumMembers?: number | undefined
  maximumMembershipsOfGroupType?: number | undefined
  capabilities?: number | undefined
  membershipTypes?: number[] | undefined
  invitePermissionOverride?: boolean | undefined
  updateCulturePermissionOverride?: boolean | undefined
  hostGuidedGamePermissionOverride?: number | undefined
  updateBannerPermissionOverride?: boolean | undefined
  joinLevel?: number | undefined
}
type DestinyDestinyProgressionResetEntry = {
  season?: number | undefined
  resets?: number | undefined
}
type DestinyDestinyStat = { statHash?: number | undefined; value?: number | undefined }
type DestinyDestinyProgressionRewardItemSocketOverrideState = {
  rewardItemStats?: { [x: string]: DestinyDestinyStat } | undefined
  itemState?: number | undefined
}
type DestinyDestinyProgression = {
  progressionHash?: number | undefined
  dailyProgress?: number | undefined
  dailyLimit?: number | undefined
  weeklyProgress?: number | undefined
  weeklyLimit?: number | undefined
  currentProgress?: number | undefined
  level?: number | undefined
  levelCap?: number | undefined
  stepIndex?: number | undefined
  progressToNextLevel?: number | undefined
  nextLevelAt?: number | undefined
  currentResetCount?: (number | null) | undefined
  seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
  rewardItemStates?: number[] | undefined
  rewardItemSocketOverrideStates?:
    | { [x: string]: DestinyDestinyProgressionRewardItemSocketOverrideState }
    | undefined
}
type GroupsV2ClanBanner = {
  decalId?: number | undefined
  decalColorId?: number | undefined
  decalBackgroundColorId?: number | undefined
  gonfalonId?: number | undefined
  gonfalonColorId?: number | undefined
  gonfalonDetailId?: number | undefined
  gonfalonDetailColorId?: number | undefined
}
type GroupsV2GroupV2ClanInfoAndInvestment = {
  d2ClanProgressions?: { [x: string]: DestinyDestinyProgression } | undefined
  clanCallsign?: string | undefined
  clanBannerData?: GroupsV2ClanBanner | undefined
}
type GroupsV2GroupV2 = {
  groupId?: bigint | undefined
  name?: string | undefined
  groupType?: number | undefined
  membershipIdCreated?: bigint | undefined
  creationDate?: string | undefined
  modificationDate?: string | undefined
  about?: string | undefined
  tags?: string[] | undefined
  memberCount?: number | undefined
  isPublic?: boolean | undefined
  isPublicTopicAdminOnly?: boolean | undefined
  motto?: string | undefined
  allowChat?: boolean | undefined
  isDefaultPostPublic?: boolean | undefined
  chatSecurity?: number | undefined
  locale?: string | undefined
  avatarImageIndex?: number | undefined
  homepage?: number | undefined
  membershipOption?: number | undefined
  defaultPublicity?: number | undefined
  theme?: string | undefined
  bannerPath?: string | undefined
  avatarPath?: string | undefined
  conversationId?: bigint | undefined
  enableInvitationMessagingForAdmins?: boolean | undefined
  banExpireDate?: (string | null) | undefined
  features?: GroupsV2GroupFeatures | undefined
  remoteGroupId?: (bigint | null) | undefined
  clanInfo?: GroupsV2GroupV2ClanInfoAndInvestment | undefined
}
type GroupsV2GroupMember = {
  memberType?: number | undefined
  isOnline?: boolean | undefined
  lastOnlineStatusChange?: bigint | undefined
  groupId?: bigint | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  bungieNetUserInfo?: UserUserInfoCard | undefined
  joinDate?: string | undefined
}
type GroupsV2GroupPotentialMember = {
  potentialStatus?: number | undefined
  groupId?: bigint | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  bungieNetUserInfo?: UserUserInfoCard | undefined
  joinDate?: string | undefined
}
type GroupsV2GroupResponse = {
  detail?: GroupsV2GroupV2 | undefined
  founder?: GroupsV2GroupMember | undefined
  alliedIds?: bigint[] | undefined
  parentGroup?: GroupsV2GroupV2 | undefined
  allianceStatus?: number | undefined
  groupJoinInviteCount?: number | undefined
  currentUserMembershipsInactiveForDestiny?: boolean | undefined
  currentUserMemberMap?: { [x: string]: GroupsV2GroupMember } | undefined
  currentUserPotentialMemberMap?: { [x: string]: GroupsV2GroupPotentialMember } | undefined
}
type TagsModelsContractsTagResponse = {
  tagText?: string | undefined
  ignoreStatus?: IgnoresIgnoreResponse | undefined
}
type ForumPollResult = {
  answerText?: string | undefined
  answerSlot?: number | undefined
  lastVoteDate?: string | undefined
  votes?: number | undefined
  requestingUserVoted?: boolean | undefined
}
type ForumPollResponse = {
  topicId?: bigint | undefined
  results?: ForumPollResult[] | undefined
  totalVotes?: number | undefined
}
type ForumForumRecruitmentDetail = {
  topicId?: bigint | undefined
  microphoneRequired?: boolean | undefined
  intensity?: number | undefined
  tone?: number | undefined
  approved?: boolean | undefined
  conversationId?: (bigint | null) | undefined
  playerSlotsTotal?: number | undefined
  playerSlotsRemaining?: number | undefined
  Fireteam?: UserGeneralUser[] | undefined
  kickedPlayerIds?: bigint[] | undefined
}
type ForumPostSearchResponse = {
  relatedPosts?: ForumPostResponse[] | undefined
  authors?: UserGeneralUser[] | undefined
  groups?: GroupsV2GroupResponse[] | undefined
  searchedTags?: TagsModelsContractsTagResponse[] | undefined
  polls?: ForumPollResponse[] | undefined
  recruitmentDetails?: ForumForumRecruitmentDetail[] | undefined
  availablePages?: (number | null) | undefined
  results?: ForumPostResponse[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type ConfigGroupTheme = {
  name?: string | undefined
  folder?: string | undefined
  description?: string | undefined
}
type GroupsV2GroupV2ClanInfo = {
  clanCallsign?: string | undefined
  clanBannerData?: GroupsV2ClanBanner | undefined
}
type GroupsV2GroupV2Card = {
  groupId?: bigint | undefined
  name?: string | undefined
  groupType?: number | undefined
  creationDate?: string | undefined
  about?: string | undefined
  motto?: string | undefined
  memberCount?: number | undefined
  locale?: string | undefined
  membershipOption?: number | undefined
  capabilities?: number | undefined
  remoteGroupId?: (bigint | null) | undefined
  clanInfo?: GroupsV2GroupV2ClanInfo | undefined
  avatarPath?: string | undefined
  theme?: string | undefined
}
type GroupsV2GroupQuery = {
  name?: string | undefined
  groupType?: number | undefined
  creationDate?: number | undefined
  sortBy?: number | undefined
  groupMemberCountFilter?: (number | null) | undefined
  localeFilter?: string | undefined
  tagText?: string | undefined
  itemsPerPage?: number | undefined
  currentPage?: number | undefined
  requestContinuationToken?: string | undefined
}
type GroupsV2GroupSearchResponse = {
  results?: GroupsV2GroupV2Card[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupNameSearchRequest = {
  groupName?: string | undefined
  groupType?: number | undefined
}
type GroupsV2GroupOptionalConversation = {
  groupId?: bigint | undefined
  conversationId?: bigint | undefined
  chatEnabled?: boolean | undefined
  chatName?: string | undefined
  chatSecurity?: number | undefined
}
type GroupsV2GroupEditAction = {
  name?: string | undefined
  about?: string | undefined
  motto?: string | undefined
  theme?: string | undefined
  avatarImageIndex?: (number | null) | undefined
  tags?: string | undefined
  isPublic?: (boolean | null) | undefined
  membershipOption?: (number | null) | undefined
  isPublicTopicAdminOnly?: (boolean | null) | undefined
  allowChat?: (boolean | null) | undefined
  chatSecurity?: (number | null) | undefined
  callsign?: string | undefined
  locale?: string | undefined
  homepage?: (number | null) | undefined
  enableInvitationMessagingForAdmins?: (boolean | null) | undefined
  defaultPublicity?: (number | null) | undefined
}
type GroupsV2GroupOptionsEditAction = {
  InvitePermissionOverride?: (boolean | null) | undefined
  UpdateCulturePermissionOverride?: (boolean | null) | undefined
  HostGuidedGamePermissionOverride?: (number | null) | undefined
  UpdateBannerPermissionOverride?: (boolean | null) | undefined
  JoinLevel?: (number | null) | undefined
}
type GroupsV2GroupOptionalConversationAddRequest = {
  chatName?: string | undefined
  chatSecurity?: number | undefined
}
type GroupsV2GroupOptionalConversationEditRequest = {
  chatEnabled?: (boolean | null) | undefined
  chatName?: string | undefined
  chatSecurity?: (number | null) | undefined
}
type SearchResultOfGroupMember = {
  results?: GroupsV2GroupMember[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupMemberLeaveResult = {
  group?: GroupsV2GroupV2 | undefined
  groupDeleted?: boolean | undefined
}
type GroupsV2GroupBanRequest = { comment?: string | undefined; length?: number | undefined }
type GroupsV2GroupBan = {
  groupId?: bigint | undefined
  lastModifiedBy?: UserUserInfoCard | undefined
  createdBy?: UserUserInfoCard | undefined
  dateBanned?: string | undefined
  dateExpires?: string | undefined
  comment?: string | undefined
  bungieNetUserInfo?: UserUserInfoCard | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
}
type SearchResultOfGroupBan = {
  results?: GroupsV2GroupBan[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupEditHistory = {
  groupId?: bigint | undefined
  name?: string | undefined
  nameEditors?: (bigint | null) | undefined
  about?: string | undefined
  aboutEditors?: (bigint | null) | undefined
  motto?: string | undefined
  mottoEditors?: (bigint | null) | undefined
  clanCallsign?: string | undefined
  clanCallsignEditors?: (bigint | null) | undefined
  editDate?: (string | null) | undefined
  groupEditors?: UserUserInfoCard[] | undefined
}
type SearchResultOfGroupEditHistory = {
  results?: GroupsV2GroupEditHistory[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupMemberApplication = {
  groupId?: bigint | undefined
  creationDate?: string | undefined
  resolveState?: number | undefined
  resolveDate?: (string | null) | undefined
  resolvedByMembershipId?: (bigint | null) | undefined
  requestMessage?: string | undefined
  resolveMessage?: string | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  bungieNetUserInfo?: UserUserInfoCard | undefined
}
type SearchResultOfGroupMemberApplication = {
  results?: GroupsV2GroupMemberApplication[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupApplicationRequest = { message?: string | undefined }
type EntitiesEntityActionResult = { entityId?: bigint | undefined; result?: number | undefined }
type UserUserMembership = {
  membershipType?: number | undefined
  membershipId?: bigint | undefined
  displayName?: string | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
}
type GroupsV2GroupApplicationListRequest = {
  memberships?: UserUserMembership[] | undefined
  message?: string | undefined
}
type GroupsV2GroupMembership = {
  member?: GroupsV2GroupMember | undefined
  group?: GroupsV2GroupV2 | undefined
}
type GroupsV2GetGroupsForMemberResponse = {
  areAllMembershipsInactive?: { [x: string]: boolean } | undefined
  results?: GroupsV2GroupMembership[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupMembershipSearchResponse = {
  results?: GroupsV2GroupMembership[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupPotentialMembership = {
  member?: GroupsV2GroupPotentialMember | undefined
  group?: GroupsV2GroupV2 | undefined
}
type GroupsV2GroupPotentialMembershipSearchResponse = {
  results?: GroupsV2GroupPotentialMembership[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupApplicationResponse = { resolution?: number | undefined }
type TokensPartnerOfferClaimRequest = {
  PartnerOfferId?: string | undefined
  BungieNetMembershipId?: bigint | undefined
  TransactionId?: string | undefined
}
type TokensPartnerOfferHistoryResponse = {
  PartnerOfferKey?: string | undefined
  MembershipId?: (bigint | null) | undefined
  MembershipType?: (number | null) | undefined
  LocalizedName?: string | undefined
  LocalizedDescription?: string | undefined
  IsConsumable?: boolean | undefined
  QuantityApplied?: number | undefined
  ApplyDate?: (string | null) | undefined
}
type TokensPartnerOfferSkuHistoryResponse = {
  SkuIdentifier?: string | undefined
  LocalizedName?: string | undefined
  LocalizedDescription?: string | undefined
  ClaimDate?: string | undefined
  AllOffersApplied?: boolean | undefined
  TransactionId?: string | undefined
  SkuOffers?: TokensPartnerOfferHistoryResponse[] | undefined
}
type TokensTwitchDropHistoryResponse = {
  Title?: string | undefined
  Description?: string | undefined
  CreatedAt?: (string | null) | undefined
  ClaimState?: (number | null) | undefined
}
type TokensPartnerRewardHistoryResponse = {
  PartnerOffers?: TokensPartnerOfferSkuHistoryResponse[] | undefined
  TwitchDrops?: TokensTwitchDropHistoryResponse[] | undefined
}
type DestinyDefinitionsCommonDestinyIconSequenceDefinition = { frames?: string[] | undefined }
type DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition = {
  description?: string | undefined
  name?: string | undefined
  icon?: string | undefined
  iconHash?: number | undefined
  iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[] | undefined
  highResIcon?: string | undefined
  hasIcon?: boolean | undefined
}
type DestinyDefinitionsPresentationDestinyPresentationChildBlock = {
  presentationNodeType?: number | undefined
  parentPresentationNodeHashes?: number[] | undefined
  displayStyle?: number | undefined
}
type DestinyDefinitionsRecordsDestinyRecordTitleBlock = {
  hasTitle?: boolean | undefined
  titlesByGender?: { [x: string]: string } | undefined
  titlesByGenderHash?: { [x: string]: string } | undefined
  gildingTrackingRecordHash?: (number | null) | undefined
}
type DestinyDefinitionsRecordsDestinyRecordCompletionBlock = {
  partialCompletionObjectiveCountThreshold?: number | undefined
  ScoreValue?: number | undefined
  shouldFireToast?: boolean | undefined
  toastStyle?: number | undefined
}
type DestinyDefinitionsRecordsSchemaRecordStateBlock = {
  featuredPriority?: number | undefined
  obscuredName?: string | undefined
  obscuredDescription?: string | undefined
}
type DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock = {
  entitlementUnavailableMessage?: string | undefined
}
type DestinyDefinitionsRecordsDestinyRecordExpirationBlock = {
  hasExpiration?: boolean | undefined
  description?: string | undefined
  icon?: string | undefined
}
type DestinyDefinitionsRecordsDestinyRecordIntervalObjective = {
  intervalObjectiveHash?: number | undefined
  intervalScoreValue?: number | undefined
}
type DestinyDestinyItemQuantity = {
  itemHash?: number | undefined
  itemInstanceId?: (bigint | null) | undefined
  quantity?: number | undefined
  hasConditionalVisibility?: boolean | undefined
}
type DestinyDefinitionsRecordsDestinyRecordIntervalRewards = {
  intervalRewardItems?: DestinyDestinyItemQuantity[] | undefined
}
type DestinyDefinitionsRecordsDestinyRecordDefinition = {
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition | undefined
  scope?: number | undefined
  presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock | undefined
  loreHash?: (number | null) | undefined
  objectiveHashes?: number[] | undefined
  recordValueStyle?: number | undefined
  forTitleGilding?: boolean | undefined
  shouldShowLargeIcons?: boolean | undefined
  titleInfo?: DestinyDefinitionsRecordsDestinyRecordTitleBlock | undefined
  completionInfo?: DestinyDefinitionsRecordsDestinyRecordCompletionBlock | undefined
  stateInfo?: DestinyDefinitionsRecordsSchemaRecordStateBlock | undefined
  requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock | undefined
  expirationInfo?: DestinyDefinitionsRecordsDestinyRecordExpirationBlock | undefined
  intervalInfo?:
    | {
        intervalObjectives?: DestinyDefinitionsRecordsDestinyRecordIntervalObjective[] | undefined
        intervalRewards?: DestinyDefinitionsRecordsDestinyRecordIntervalRewards[] | undefined
        originalObjectiveArrayInsertionIndex?: number | undefined
      }
    | undefined
  rewardItems?: DestinyDestinyItemQuantity[] | undefined
  recordTypeName?: string | undefined
  presentationNodeType?: number | undefined
  traitIds?: string[] | undefined
  traitHashes?: number[] | undefined
  parentNodeHashes?: number[] | undefined
  hash?: number | undefined
  index?: number | undefined
  redacted?: boolean | undefined
}
type DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock = {
  acquireMaterialRequirementHash?: (number | null) | undefined
  acquireTimestampUnlockValueHash?: (number | null) | undefined
}
type DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock = {
  obscuredOverrideItemHash?: (number | null) | undefined
  requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock | undefined
}
type DestinyDefinitionsCollectiblesDestinyCollectibleDefinition = {
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition | undefined
  scope?: number | undefined
  sourceString?: string | undefined
  sourceHash?: (number | null) | undefined
  itemHash?: number | undefined
  acquisitionInfo?: DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock | undefined
  stateInfo?: DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock | undefined
  presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock | undefined
  presentationNodeType?: number | undefined
  traitIds?: string[] | undefined
  traitHashes?: number[] | undefined
  parentNodeHashes?: number[] | undefined
  hash?: number | undefined
  index?: number | undefined
  redacted?: boolean | undefined
}
type DestinyDefinitionsDestinyItemTooltipNotification = {
  displayString?: string | undefined
  displayStyle?: string | undefined
}
type DestinyDefinitionsDestinyItemActionRequiredItemDefinition = {
  count?: number | undefined
  itemHash?: number | undefined
  deleteOnAction?: boolean | undefined
}
type DestinyDefinitionsDestinyProgressionRewardDefinition = {
  progressionMappingHash?: number | undefined
  amount?: number | undefined
  applyThrottles?: boolean | undefined
}
type DestinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition = {
  socketTypeHash?: number | undefined
  plugItemHash?: number | undefined
}
type DestinyDefinitionsDestinyItemSetBlockEntryDefinition = {
  trackingValue?: number | undefined
  itemHash?: number | undefined
}
type DestinyDefinitionsDestinyInventoryItemStatDefinition = {
  statHash?: number | undefined
  value?: number | undefined
  minimum?: number | undefined
  maximum?: number | undefined
  displayMaximum?: (number | null) | undefined
}
type DestinyDyeReference = { channelHash?: number | undefined; dyeHash?: number | undefined }
type DestinyDefinitionsDestinyGearArtArrangementReference = {
  classHash?: number | undefined
  artArrangementHash?: number | undefined
}
type DestinyDefinitionsItemsDestinyDerivedItemDefinition = {
  itemHash?: (number | null) | undefined
  itemName?: string | undefined
  itemDetail?: string | undefined
  itemDescription?: string | undefined
  iconPath?: string | undefined
  vendorItemIndex?: number | undefined
}
type DestinyDefinitionsItemsDestinyDerivedItemCategoryDefinition = {
  categoryDescription?: string | undefined
  items?: DestinyDefinitionsItemsDestinyDerivedItemDefinition[] | undefined
}
type DestinyDefinitionsDestinyItemVersionDefinition = { powerCapHash?: number | undefined }
type DestinyDefinitionsSourcesDestinyItemSourceDefinition = {
  level?: number | undefined
  minQuality?: number | undefined
  maxQuality?: number | undefined
  minLevelRequired?: number | undefined
  maxLevelRequired?: number | undefined
  computedStats?: { [x: string]: DestinyDefinitionsDestinyInventoryItemStatDefinition } | undefined
  sourceHashes?: number[] | undefined
}
type DestinyDefinitionsDestinyItemVendorSourceReference = {
  vendorHash?: number | undefined
  vendorItemIndexes?: number[] | undefined
}
type DestinyDefinitionsDestinyObjectiveDisplayProperties = {
  activityHash?: (number | null) | undefined
  displayOnItemPreviewScreen?: boolean | undefined
}
type DestinyDefinitionsItemsDestinyPlugRuleDefinition = { failureMessage?: string | undefined }
type DestinyDefinitionsDestinyItemSocketEntryPlugItemDefinition = {
  plugItemHash?: number | undefined
}
type DestinyDefinitionsDestinyItemSocketEntryDefinition = {
  socketTypeHash?: number | undefined
  singleInitialItemHash?: number | undefined
  reusablePlugItems?: DestinyDefinitionsDestinyItemSocketEntryPlugItemDefinition[] | undefined
  preventInitializationOnVendorPurchase?: boolean | undefined
  hidePerksInItemTooltip?: boolean | undefined
  plugSources?: number | undefined
  reusablePlugSetHash?: (number | null) | undefined
  randomizedPlugSetHash?: (number | null) | undefined
  defaultVisible?: boolean | undefined
}
type DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition = {
  plugItemHash?: number | undefined
  socketTypeHash?: number | undefined
  defaultVisible?: boolean | undefined
}
type DestinyDefinitionsDestinyItemSocketCategoryDefinition = {
  socketCategoryHash?: number | undefined
  socketIndexes?: number[] | undefined
}
type DestinyDefinitionsDestinyItemInvestmentStatDefinition = {
  statTypeHash?: number | undefined
  value?: number | undefined
  isConditionallyActive?: boolean | undefined
}
type DestinyDefinitionsDestinyItemPerkEntryDefinition = {
  requirementDisplayString?: string | undefined
  perkHash?: number | undefined
  perkVisibility?: number | undefined
}
type DestinyDefinitionsAnimationsDestinyAnimationReference = {
  animName?: string | undefined
  animIdentifier?: string | undefined
  path?: string | undefined
}
type LinksHyperlinkReference = { title?: string | undefined; url?: string | undefined }
type DestinyDefinitionsDestinyInventoryItemDefinition = {
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition | undefined
  tooltipNotifications?: DestinyDefinitionsDestinyItemTooltipNotification[] | undefined
  collectibleHash?: (number | null) | undefined
  iconWatermark?: string | undefined
  iconWatermarkShelved?: string | undefined
  iconWatermarkFeatured?: string | undefined
  secondaryIcon?: string | undefined
  secondaryOverlay?: string | undefined
  secondarySpecial?: string | undefined
  backgroundColor?:
    | {
        red?: string | undefined
        green?: string | undefined
        blue?: string | undefined
        alpha?: string | undefined
      }
    | undefined
  isFeaturedItem?: boolean | undefined
  isHolofoil?: boolean | undefined
  isAdept?: boolean | undefined
  screenshot?: string | undefined
  itemTypeDisplayName?: string | undefined
  flavorText?: string | undefined
  uiItemDisplayStyle?: string | undefined
  itemTypeAndTierDisplayName?: string | undefined
  displaySource?: string | undefined
  tooltipStyle?: string | undefined
  action?:
    | {
        verbName?: string | undefined
        verbDescription?: string | undefined
        isPositive?: boolean | undefined
        overlayScreenName?: string | undefined
        overlayIcon?: string | undefined
        requiredCooldownSeconds?: number | undefined
        requiredItems?: DestinyDefinitionsDestinyItemActionRequiredItemDefinition[] | undefined
        progressionRewards?: DestinyDefinitionsDestinyProgressionRewardDefinition[] | undefined
        actionTypeLabel?: string | undefined
        requiredLocation?: string | undefined
        requiredCooldownHash?: number | undefined
        deleteOnAction?: boolean | undefined
        consumeEntireStack?: boolean | undefined
        useOnAcquire?: boolean | undefined
      }
    | undefined
  crafting?:
    | {
        outputItemHash?: number | undefined
        requiredSocketTypeHashes?: number[] | undefined
        failedRequirementStrings?: string[] | undefined
        baseMaterialRequirements?: (number | null) | undefined
        bonusPlugs?: DestinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition[] | undefined
      }
    | undefined
  inventory?:
    | {
        stackUniqueLabel?: string | undefined
        maxStackSize?: number | undefined
        bucketTypeHash?: number | undefined
        recoveryBucketTypeHash?: number | undefined
        tierTypeHash?: number | undefined
        isInstanceItem?: boolean | undefined
        tierTypeName?: string | undefined
        tierType?: number | undefined
        expirationTooltip?: string | undefined
        expiredInActivityMessage?: string | undefined
        expiredInOrbitMessage?: string | undefined
        suppressExpirationWhenObjectivesComplete?: boolean | undefined
        recipeItemHash?: (number | null) | undefined
      }
    | undefined
  setData?:
    | {
        itemList?: DestinyDefinitionsDestinyItemSetBlockEntryDefinition[] | undefined
        requireOrderedSetItemAdd?: boolean | undefined
        setIsFeatured?: boolean | undefined
        setType?: string | undefined
        questLineName?: string | undefined
        questLineDescription?: string | undefined
        questStepSummary?: string | undefined
      }
    | undefined
  stats?:
    | {
        disablePrimaryStatDisplay?: boolean | undefined
        statGroupHash?: (number | null) | undefined
        stats?: { [x: string]: DestinyDefinitionsDestinyInventoryItemStatDefinition } | undefined
        hasDisplayableStats?: boolean | undefined
        primaryBaseStatHash?: number | undefined
      }
    | undefined
  emblemObjectiveHash?: (number | null) | undefined
  equippingBlock?:
    | {
        gearsetItemHash?: (number | null) | undefined
        uniqueLabel?: string | undefined
        uniqueLabelHash?: number | undefined
        equipmentSlotTypeHash?: number | undefined
        attributes?: number | undefined
        ammoType?: number | undefined
        displayStrings?: string[] | undefined
        equipableItemSetHash?: (number | null) | undefined
      }
    | undefined
  translationBlock?:
    | {
        weaponPatternIdentifier?: string | undefined
        weaponPatternHash?: number | undefined
        defaultDyes?: DestinyDyeReference[] | undefined
        lockedDyes?: DestinyDyeReference[] | undefined
        customDyes?: DestinyDyeReference[] | undefined
        arrangements?: DestinyDefinitionsDestinyGearArtArrangementReference[] | undefined
        hasGeometry?: boolean | undefined
      }
    | undefined
  preview?:
    | {
        screenStyle?: string | undefined
        previewVendorHash?: number | undefined
        artifactHash?: (number | null) | undefined
        previewActionString?: string | undefined
        derivedItemCategories?:
          | DestinyDefinitionsItemsDestinyDerivedItemCategoryDefinition[]
          | undefined
      }
    | undefined
  quality?:
    | {
        itemLevels?: number[] | undefined
        qualityLevel?: number | undefined
        infusionCategoryName?: string | undefined
        infusionCategoryHash?: number | undefined
        infusionCategoryHashes?: number[] | undefined
        progressionLevelRequirementHash?: number | undefined
        currentVersion?: number | undefined
        versions?: DestinyDefinitionsDestinyItemVersionDefinition[] | undefined
        displayVersionWatermarkIcons?: string[] | undefined
      }
    | undefined
  value?:
    | {
        itemValue?: DestinyDestinyItemQuantity[] | undefined
        valueDescription?: string | undefined
      }
    | undefined
  sourceData?:
    | {
        sourceHashes?: number[] | undefined
        sources?: DestinyDefinitionsSourcesDestinyItemSourceDefinition[] | undefined
        exclusive?: number | undefined
        vendorSources?: DestinyDefinitionsDestinyItemVendorSourceReference[] | undefined
      }
    | undefined
  objectives?:
    | {
        objectiveHashes?: number[] | undefined
        displayActivityHashes?: number[] | undefined
        requireFullObjectiveCompletion?: boolean | undefined
        questlineItemHash?: number | undefined
        narrative?: string | undefined
        objectiveVerbName?: string | undefined
        questTypeIdentifier?: string | undefined
        questTypeHash?: number | undefined
        perObjectiveDisplayProperties?:
          | DestinyDefinitionsDestinyObjectiveDisplayProperties[]
          | undefined
        displayAsStatTracker?: boolean | undefined
      }
    | undefined
  metrics?: { availableMetricCategoryNodeHashes?: number[] | undefined } | undefined
  plug?:
    | {
        insertionRules?: DestinyDefinitionsItemsDestinyPlugRuleDefinition[] | undefined
        plugCategoryIdentifier?: string | undefined
        plugCategoryHash?: number | undefined
        onActionRecreateSelf?: boolean | undefined
        insertionMaterialRequirementHash?: number | undefined
        previewItemOverrideHash?: number | undefined
        enabledMaterialRequirementHash?: number | undefined
        enabledRules?: DestinyDefinitionsItemsDestinyPlugRuleDefinition[] | undefined
        uiPlugLabel?: string | undefined
        plugStyle?: number | undefined
        plugAvailability?: number | undefined
        alternateUiPlugLabel?: string | undefined
        alternatePlugStyle?: number | undefined
        isDummyPlug?: boolean | undefined
        parentItemOverride?:
          | {
              additionalEquipRequirementsDisplayStrings?: string[] | undefined
              pipIcon?: string | undefined
            }
          | undefined
        energyCapacity?:
          | {
              capacityValue?: number | undefined
              energyTypeHash?: number | undefined
              energyType?: number | undefined
            }
          | undefined
        energyCost?:
          | {
              energyCost?: number | undefined
              energyTypeHash?: number | undefined
              energyType?: number | undefined
            }
          | undefined
      }
    | undefined
  gearset?: { trackingValueMax?: number | undefined; itemList?: number[] | undefined } | undefined
  sack?:
    | {
        detailAction?: string | undefined
        openAction?: string | undefined
        selectItemCount?: number | undefined
        vendorSackType?: string | undefined
        openOnAcquire?: boolean | undefined
      }
    | undefined
  sockets?:
    | {
        detail?: string | undefined
        socketEntries?: DestinyDefinitionsDestinyItemSocketEntryDefinition[] | undefined
        intrinsicSockets?: DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition[] | undefined
        socketCategories?: DestinyDefinitionsDestinyItemSocketCategoryDefinition[] | undefined
      }
    | undefined
  summary?: { sortPriority?: number | undefined } | undefined
  talentGrid?:
    | {
        talentGridHash?: number | undefined
        itemDetailString?: string | undefined
        buildName?: string | undefined
        hudDamageType?: number | undefined
        hudIcon?: string | undefined
      }
    | undefined
  investmentStats?: DestinyDefinitionsDestinyItemInvestmentStatDefinition[] | undefined
  perks?: DestinyDefinitionsDestinyItemPerkEntryDefinition[] | undefined
  loreHash?: (number | null) | undefined
  summaryItemHash?: (number | null) | undefined
  animations?: DestinyDefinitionsAnimationsDestinyAnimationReference[] | undefined
  allowActions?: boolean | undefined
  links?: LinksHyperlinkReference[] | undefined
  doesPostmasterPullHaveSideEffects?: boolean | undefined
  nonTransferrable?: boolean | undefined
  itemCategoryHashes?: number[] | undefined
  specialItemType?: number | undefined
  itemType?: number | undefined
  itemSubType?: number | undefined
  classType?: number | undefined
  breakerType?: number | undefined
  breakerTypeHash?: (number | null) | undefined
  equippable?: boolean | undefined
  damageTypeHashes?: number[] | undefined
  damageTypes?: number[] | undefined
  defaultDamageType?: number | undefined
  defaultDamageTypeHash?: (number | null) | undefined
  seasonHash?: (number | null) | undefined
  isWrapper?: boolean | undefined
  traitIds?: string[] | undefined
  traitHashes?: number[] | undefined
  hash?: number | undefined
  index?: number | undefined
  redacted?: boolean | undefined
}
type TokensCollectibleDefinitions = {
  CollectibleDefinition?: DestinyDefinitionsCollectiblesDestinyCollectibleDefinition | undefined
  DestinyInventoryItemDefinition?: DestinyDefinitionsDestinyInventoryItemDefinition | undefined
}
type TokensRewardAvailabilityModel = {
  HasExistingCode?: boolean | undefined
  RecordDefinitions?: DestinyDefinitionsRecordsDestinyRecordDefinition[] | undefined
  CollectibleDefinitions?: TokensCollectibleDefinitions[] | undefined
  IsOffer?: boolean | undefined
  HasOffer?: boolean | undefined
  OfferApplied?: boolean | undefined
  DecryptedToken?: string | undefined
  IsLoyaltyReward?: boolean | undefined
  ShopifyEndDate?: (string | null) | undefined
  GameEarnByDate?: string | undefined
  RedemptionEndDate?: string | undefined
}
type TokensUserRewardAvailabilityModel = {
  AvailabilityModel?: TokensRewardAvailabilityModel | undefined
  IsAvailableForUser?: boolean | undefined
  IsUnlockedForUser?: boolean | undefined
}
type TokensRewardDisplayProperties = {
  Name?: string | undefined
  Description?: string | undefined
  ImagePath?: string | undefined
}
type TokensBungieRewardDisplay = {
  UserRewardAvailabilityModel?: TokensUserRewardAvailabilityModel | undefined
  ObjectiveDisplayProperties?: TokensRewardDisplayProperties | undefined
  RewardDisplayProperties?: TokensRewardDisplayProperties | undefined
}
type DestinyConfigGearAssetDataBaseDefinition = {
  version?: number | undefined
  path?: string | undefined
}
type DestinyConfigImagePyramidEntry = { name?: string | undefined; factor?: number | undefined }
type DestinyConfigDestinyManifest = {
  version?: string | undefined
  mobileAssetContentPath?: string | undefined
  mobileGearAssetDataBases?: DestinyConfigGearAssetDataBaseDefinition[] | undefined
  mobileWorldContentPaths?: { [x: string]: string } | undefined
  jsonWorldContentPaths?: { [x: string]: string } | undefined
  jsonWorldComponentContentPaths?: { [x: string]: { [x: string]: string } } | undefined
  mobileClanBannerDatabasePath?: string | undefined
  mobileGearCDN?: { [x: string]: string } | undefined
  iconImagePyramidInfo?: DestinyConfigImagePyramidEntry[] | undefined
}
type DestinyDefinitionsDestinyDefinition = {
  hash?: number | undefined
  index?: number | undefined
  redacted?: boolean | undefined
}
type UserExactSearchRequest = {
  displayName?: string | undefined
  displayNameCode?: number | undefined
}
type DestinyEntitiesItemsDestinyItemComponent = {
  itemHash?: number | undefined
  itemInstanceId?: (bigint | null) | undefined
  quantity?: number | undefined
  bindStatus?: number | undefined
  location?: number | undefined
  bucketHash?: number | undefined
  transferStatus?: number | undefined
  lockable?: boolean | undefined
  state?: number | undefined
  overrideStyleItemHash?: (number | null) | undefined
  expirationDate?: (string | null) | undefined
  isWrapper?: boolean | undefined
  tooltipNotificationIndexes?: number[] | undefined
  metricHash?: (number | null) | undefined
  metricObjective?:
    | {
        objectiveHash?: number | undefined
        destinationHash?: (number | null) | undefined
        activityHash?: (number | null) | undefined
        progress?: (number | null) | undefined
        completionValue?: number | undefined
        complete?: boolean | undefined
        visible?: boolean | undefined
      }
    | undefined
  versionNumber?: (number | null) | undefined
  itemValueVisibility?: boolean[] | undefined
}
type DestinyResponsesDestinyProfileUserInfoCard = {
  dateLastPlayed?: string | undefined
  isOverridden?: boolean | undefined
  isCrossSavePrimary?: boolean | undefined
  platformSilver?:
    | { platformSilver?: { [x: string]: DestinyEntitiesItemsDestinyItemComponent } | undefined }
    | undefined
  unpairedGameVersions?: (number | null) | undefined
  supplementalDisplayName?: string | undefined
  iconPath?: string | undefined
  crossSaveOverride?: number | undefined
  applicableMembershipTypes?: number[] | undefined
  isPublic?: boolean | undefined
  membershipType?: number | undefined
  membershipId?: bigint | undefined
  displayName?: string | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
}
type DestinyResponsesDestinyErrorProfile = {
  errorCode?: number | undefined
  infoCard?:
    | {
        supplementalDisplayName?: string | undefined
        iconPath?: string | undefined
        crossSaveOverride?: number | undefined
        applicableMembershipTypes?: number[] | undefined
        isPublic?: boolean | undefined
        membershipType?: number | undefined
        membershipId?: bigint | undefined
        displayName?: string | undefined
        bungieGlobalDisplayName?: string | undefined
        bungieGlobalDisplayNameCode?: (number | null) | undefined
      }
    | undefined
}
type DestinyResponsesDestinyLinkedProfilesResponse = {
  profiles?: DestinyResponsesDestinyProfileUserInfoCard[] | undefined
  bnetMembership?:
    | {
        supplementalDisplayName?: string | undefined
        iconPath?: string | undefined
        crossSaveOverride?: number | undefined
        applicableMembershipTypes?: number[] | undefined
        isPublic?: boolean | undefined
        membershipType?: number | undefined
        membershipId?: bigint | undefined
        displayName?: string | undefined
        bungieGlobalDisplayName?: string | undefined
        bungieGlobalDisplayNameCode?: (number | null) | undefined
      }
    | undefined
  profilesWithErrors?: DestinyResponsesDestinyErrorProfile[] | undefined
}
type DestinyVendorsDestinyVendorReceipt = {
  currencyPaid?: DestinyDestinyItemQuantity[] | undefined
  itemReceived?:
    | {
        itemHash?: number | undefined
        itemInstanceId?: (bigint | null) | undefined
        quantity?: number | undefined
        hasConditionalVisibility?: boolean | undefined
      }
    | undefined
  licenseUnlockHash?: number | undefined
  purchasedByCharacterId?: bigint | undefined
  refundPolicy?: number | undefined
  sequenceNumber?: number | undefined
  timeToExpiration?: bigint | undefined
  expiresOn?: string | undefined
}
type DestinyEntitiesProfilesDestinyVendorReceiptsComponent = {
  receipts?: DestinyVendorsDestinyVendorReceipt[] | undefined
}
type DestinyEntitiesInventoryDestinyInventoryComponent = {
  items?: DestinyEntitiesItemsDestinyItemComponent[] | undefined
}
type DestinyEntitiesProfilesDestinyProfileComponent = {
  userInfo?:
    | {
        supplementalDisplayName?: string | undefined
        iconPath?: string | undefined
        crossSaveOverride?: number | undefined
        applicableMembershipTypes?: number[] | undefined
        isPublic?: boolean | undefined
        membershipType?: number | undefined
        membershipId?: bigint | undefined
        displayName?: string | undefined
        bungieGlobalDisplayName?: string | undefined
        bungieGlobalDisplayNameCode?: (number | null) | undefined
      }
    | undefined
  dateLastPlayed?: string | undefined
  versionsOwned?: number | undefined
  characterIds?: bigint[] | undefined
  seasonHashes?: number[] | undefined
  seasonPassHashes?: number[] | undefined
  eventCardHashesOwned?: number[] | undefined
  currentSeasonHash?: (number | null) | undefined
  currentSeasonPassHash?: (number | null) | undefined
  currentSeasonRewardPowerCap?: (number | null) | undefined
  activeEventCardHash?: (number | null) | undefined
  currentGuardianRank?: number | undefined
  lifetimeHighestGuardianRank?: number | undefined
  renewedGuardianRank?: number | undefined
}
type DestinyComponentsInventoryDestinyPlatformSilverComponent = {
  platformSilver?: { [x: string]: DestinyEntitiesItemsDestinyItemComponent } | undefined
}
type DestinyComponentsKiosksDestinyKioskItem = {
  index?: number | undefined
  canAcquire?: boolean | undefined
  failureIndexes?: number[] | undefined
  flavorObjective?:
    | {
        objectiveHash?: number | undefined
        destinationHash?: (number | null) | undefined
        activityHash?: (number | null) | undefined
        progress?: (number | null) | undefined
        completionValue?: number | undefined
        complete?: boolean | undefined
        visible?: boolean | undefined
      }
    | undefined
}
type DestinyComponentsKiosksDestinyKiosksComponent = {
  kioskItems?: { [x: string]: DestinyComponentsKiosksDestinyKioskItem[] } | undefined
}
type DestinyQuestsDestinyObjectiveProgress = {
  objectiveHash?: number | undefined
  destinationHash?: (number | null) | undefined
  activityHash?: (number | null) | undefined
  progress?: (number | null) | undefined
  completionValue?: number | undefined
  complete?: boolean | undefined
  visible?: boolean | undefined
}
type DestinySocketsDestinyItemPlug = {
  plugObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  plugItemHash?: number | undefined
  canInsert?: boolean | undefined
  enabled?: boolean | undefined
  insertFailIndexes?: number[] | undefined
  enableFailIndexes?: number[] | undefined
  stackSize?: (number | null) | undefined
  maxStackSize?: (number | null) | undefined
}
type DestinyComponentsPlugSetsDestinyPlugSetsComponent = {
  plugs?: { [x: string]: DestinySocketsDestinyItemPlug[] } | undefined
}
type DestinyComponentsProfilesDestinyProfileProgressionComponent = {
  checklists?: { [x: string]: { [x: string]: boolean } } | undefined
  seasonalArtifact?:
    | {
        artifactHash?: number | undefined
        pointProgression?: DestinyDestinyProgression | undefined
        pointsAcquired?: number | undefined
        powerBonusProgression?: DestinyDestinyProgression | undefined
        powerBonus?: number | undefined
      }
    | undefined
}
type DestinyComponentsPresentationDestinyPresentationNodeComponent = {
  state?: number | undefined
  objective?:
    | {
        objectiveHash?: number | undefined
        destinationHash?: (number | null) | undefined
        activityHash?: (number | null) | undefined
        progress?: (number | null) | undefined
        completionValue?: number | undefined
        complete?: boolean | undefined
        visible?: boolean | undefined
      }
    | undefined
  progressValue?: number | undefined
  completionValue?: number | undefined
  recordCategoryScore?: (number | null) | undefined
}
type DestinyComponentsPresentationDestinyPresentationNodesComponent = {
  nodes?: { [x: string]: DestinyComponentsPresentationDestinyPresentationNodeComponent } | undefined
}
type DestinyComponentsRecordsDestinyRecordComponent = {
  state?: number | undefined
  objectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  intervalObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  intervalsRedeemedCount?: number | undefined
  completedCount?: (number | null) | undefined
  rewardVisibilty?: boolean[] | undefined
}
type DestinyComponentsRecordsDestinyProfileRecordsComponent = {
  score?: number | undefined
  activeScore?: number | undefined
  legacyScore?: number | undefined
  lifetimeScore?: number | undefined
  trackedRecordHash?: (number | null) | undefined
  records?: { [x: string]: DestinyComponentsRecordsDestinyRecordComponent } | undefined
  recordCategoriesRootNodeHash?: number | undefined
  recordSealsRootNodeHash?: number | undefined
}
type DestinyComponentsCollectiblesDestinyCollectibleComponent = { state?: number | undefined }
type DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent = {
  recentCollectibleHashes?: number[] | undefined
  newnessFlaggedCollectibleHashes?: number[] | undefined
  collectibles?:
    | { [x: string]: DestinyComponentsCollectiblesDestinyCollectibleComponent }
    | undefined
  collectionCategoriesRootNodeHash?: number | undefined
  collectionBadgesRootNodeHash?: number | undefined
}
type DestinyComponentsProfilesDestinyProfileTransitoryPartyMember = {
  membershipId?: bigint | undefined
  emblemHash?: number | undefined
  displayName?: string | undefined
  status?: number | undefined
}
type DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry = {
  locationHash?: (number | null) | undefined
  itemHash?: (number | null) | undefined
  objectiveHash?: (number | null) | undefined
  activityHash?: (number | null) | undefined
  questlineItemHash?: (number | null) | undefined
  trackedDate?: (string | null) | undefined
}
type DestinyComponentsProfilesDestinyProfileTransitoryComponent = {
  partyMembers?: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember[] | undefined
  currentActivity?:
    | {
        startTime?: (string | null) | undefined
        endTime?: (string | null) | undefined
        score?: number | undefined
        highestOpposingFactionScore?: number | undefined
        numberOfOpponents?: number | undefined
        numberOfPlayers?: number | undefined
      }
    | undefined
  joinability?:
    | {
        openSlots?: number | undefined
        privacySetting?: number | undefined
        closedReasons?: number | undefined
      }
    | undefined
  tracking?: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry[] | undefined
  lastOrbitedDestinationHash?: (number | null) | undefined
}
type DestinyComponentsMetricsDestinyMetricComponent = {
  invisible?: boolean | undefined
  objectiveProgress?: DestinyQuestsDestinyObjectiveProgress | undefined
}
type DestinyComponentsMetricsDestinyMetricsComponent = {
  metrics?: { [x: string]: DestinyComponentsMetricsDestinyMetricComponent } | undefined
  metricsRootNodeHash?: number | undefined
}
type DestinyComponentsStringVariablesDestinyStringVariablesComponent = {
  integerValuesByHash?: { [x: string]: number } | undefined
}
type DestinyComponentsSocialDestinySocialCommendationsComponent = {
  totalScore?: number | undefined
  commendationNodePercentagesByHash?: { [x: string]: number } | undefined
  scoreDetailValues?: number[] | undefined
  commendationNodeScoresByHash?: { [x: string]: number } | undefined
  commendationScoresByHash?: { [x: string]: number } | undefined
}
type DestinyEntitiesCharactersDestinyCharacterComponent = {
  membershipId?: bigint | undefined
  membershipType?: number | undefined
  characterId?: bigint | undefined
  dateLastPlayed?: string | undefined
  minutesPlayedThisSession?: bigint | undefined
  minutesPlayedTotal?: bigint | undefined
  light?: number | undefined
  stats?: { [x: string]: number } | undefined
  raceHash?: number | undefined
  genderHash?: number | undefined
  classHash?: number | undefined
  raceType?: number | undefined
  classType?: number | undefined
  genderType?: number | undefined
  emblemPath?: string | undefined
  emblemBackgroundPath?: string | undefined
  emblemHash?: number | undefined
  emblemColor?:
    | {
        red?: string | undefined
        green?: string | undefined
        blue?: string | undefined
        alpha?: string | undefined
      }
    | undefined
  levelProgression?:
    | {
        progressionHash?: number | undefined
        dailyProgress?: number | undefined
        dailyLimit?: number | undefined
        weeklyProgress?: number | undefined
        weeklyLimit?: number | undefined
        currentProgress?: number | undefined
        level?: number | undefined
        levelCap?: number | undefined
        stepIndex?: number | undefined
        progressToNextLevel?: number | undefined
        nextLevelAt?: number | undefined
        currentResetCount?: (number | null) | undefined
        seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
        rewardItemStates?: number[] | undefined
        rewardItemSocketOverrideStates?:
          | { [x: string]: DestinyDestinyProgressionRewardItemSocketOverrideState }
          | undefined
      }
    | undefined
  baseCharacterLevel?: number | undefined
  percentToNextLevel?: number | undefined
  titleRecordHash?: (number | null) | undefined
}
type DestinyComponentsLoadoutsDestinyLoadoutItemComponent = {
  itemInstanceId?: bigint | undefined
  plugItemHashes?: number[] | undefined
}
type DestinyComponentsLoadoutsDestinyLoadoutComponent = {
  colorHash?: number | undefined
  iconHash?: number | undefined
  nameHash?: number | undefined
  items?: DestinyComponentsLoadoutsDestinyLoadoutItemComponent[] | undefined
}
type DestinyComponentsLoadoutsDestinyLoadoutsComponent = {
  loadouts?: DestinyComponentsLoadoutsDestinyLoadoutComponent[] | undefined
}
type DestinyProgressionDestinyFactionProgression = {
  factionHash?: number | undefined
  factionVendorIndex?: number | undefined
  progressionHash?: number | undefined
  dailyProgress?: number | undefined
  dailyLimit?: number | undefined
  weeklyProgress?: number | undefined
  weeklyLimit?: number | undefined
  currentProgress?: number | undefined
  level?: number | undefined
  levelCap?: number | undefined
  stepIndex?: number | undefined
  progressToNextLevel?: number | undefined
  nextLevelAt?: number | undefined
  currentResetCount?: (number | null) | undefined
  seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
  rewardItemStates?: number[] | undefined
  rewardItemSocketOverrideStates?:
    | { [x: string]: DestinyDestinyProgressionRewardItemSocketOverrideState }
    | undefined
}
type DestinyMilestonesDestinyMilestoneActivityPhase = {
  complete?: boolean | undefined
  phaseHash?: number | undefined
}
type DestinyMilestonesDestinyMilestoneActivityVariant = {
  activityHash?: number | undefined
  completionStatus?:
    | {
        completed?: boolean | undefined
        phases?: DestinyMilestonesDestinyMilestoneActivityPhase[] | undefined
      }
    | undefined
  activityModeHash?: (number | null) | undefined
  activityModeType?: (number | null) | undefined
}
type DestinyChallengesDestinyChallengeStatus = {
  objective?:
    | {
        objectiveHash?: number | undefined
        destinationHash?: (number | null) | undefined
        activityHash?: (number | null) | undefined
        progress?: (number | null) | undefined
        completionValue?: number | undefined
        complete?: boolean | undefined
        visible?: boolean | undefined
      }
    | undefined
}
type DestinyMilestonesDestinyMilestoneQuest = {
  questItemHash?: number | undefined
  status?:
    | {
        questHash?: number | undefined
        stepHash?: number | undefined
        stepObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
        tracked?: boolean | undefined
        itemInstanceId?: bigint | undefined
        completed?: boolean | undefined
        redeemed?: boolean | undefined
        started?: boolean | undefined
        vendorHash?: (number | null) | undefined
      }
    | undefined
  activity?:
    | {
        activityHash?: number | undefined
        activityModeHash?: (number | null) | undefined
        activityModeType?: (number | null) | undefined
        modifierHashes?: number[] | undefined
        variants?: DestinyMilestonesDestinyMilestoneActivityVariant[] | undefined
      }
    | undefined
  challenges?: DestinyChallengesDestinyChallengeStatus[] | undefined
}
type DestinyMilestonesDestinyMilestoneChallengeActivity = {
  activityHash?: number | undefined
  challenges?: DestinyChallengesDestinyChallengeStatus[] | undefined
  modifierHashes?: number[] | undefined
  booleanActivityOptions?: { [x: string]: boolean } | undefined
  loadoutRequirementIndex?: (number | null) | undefined
  phases?: DestinyMilestonesDestinyMilestoneActivityPhase[] | undefined
}
type DestinyMilestonesDestinyMilestoneVendor = {
  vendorHash?: number | undefined
  previewItemHash?: (number | null) | undefined
}
type DestinyMilestonesDestinyMilestoneRewardEntry = {
  rewardEntryHash?: number | undefined
  earned?: boolean | undefined
  redeemed?: boolean | undefined
}
type DestinyMilestonesDestinyMilestoneRewardCategory = {
  rewardCategoryHash?: number | undefined
  entries?: DestinyMilestonesDestinyMilestoneRewardEntry[] | undefined
}
type DestinyMilestonesDestinyMilestone = {
  milestoneHash?: number | undefined
  availableQuests?: DestinyMilestonesDestinyMilestoneQuest[] | undefined
  activities?: DestinyMilestonesDestinyMilestoneChallengeActivity[] | undefined
  values?: { [x: string]: number } | undefined
  vendorHashes?: number[] | undefined
  vendors?: DestinyMilestonesDestinyMilestoneVendor[] | undefined
  rewards?: DestinyMilestonesDestinyMilestoneRewardCategory[] | undefined
  startDate?: (string | null) | undefined
  endDate?: (string | null) | undefined
  order?: number | undefined
}
type DestinyQuestsDestinyQuestStatus = {
  questHash?: number | undefined
  stepHash?: number | undefined
  stepObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  tracked?: boolean | undefined
  itemInstanceId?: bigint | undefined
  completed?: boolean | undefined
  redeemed?: boolean | undefined
  started?: boolean | undefined
  vendorHash?: (number | null) | undefined
}
type DestinyPerksDestinyPerkReference = {
  perkHash?: number | undefined
  iconPath?: string | undefined
  isActive?: boolean | undefined
  visible?: boolean | undefined
}
type DestinyEntitiesItemsDestinyItemPerksComponent = {
  perks?: DestinyPerksDestinyPerkReference[] | undefined
}
type DestinyArtifactsDestinyArtifactTierItem = {
  itemHash?: number | undefined
  isActive?: boolean | undefined
  isVisible?: boolean | undefined
}
type DestinyArtifactsDestinyArtifactTier = {
  tierHash?: number | undefined
  isUnlocked?: boolean | undefined
  pointsToUnlock?: number | undefined
  items?: DestinyArtifactsDestinyArtifactTierItem[] | undefined
}
type DestinyEntitiesCharactersDestinyCharacterProgressionComponent = {
  progressions?: { [x: string]: DestinyDestinyProgression } | undefined
  factions?: { [x: string]: DestinyProgressionDestinyFactionProgression } | undefined
  milestones?: { [x: string]: DestinyMilestonesDestinyMilestone } | undefined
  quests?: DestinyQuestsDestinyQuestStatus[] | undefined
  uninstancedItemObjectives?: { [x: string]: DestinyQuestsDestinyObjectiveProgress[] } | undefined
  uninstancedItemPerks?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  checklists?: { [x: string]: { [x: string]: boolean } } | undefined
  seasonalArtifact?:
    | {
        artifactHash?: number | undefined
        pointsUsed?: number | undefined
        resetCount?: number | undefined
        tiers?: DestinyArtifactsDestinyArtifactTier[] | undefined
      }
    | undefined
  unclaimedOrderRewards?: { [x: string]: number } | undefined
}
type DestinyCharacterDestinyItemPeerView = {
  itemHash?: number | undefined
  dyes?: DestinyDyeReference[] | undefined
}
type DestinyEntitiesCharactersDestinyCharacterRenderComponent = {
  customDyes?: DestinyDyeReference[] | undefined
  customization?:
    | {
        personality?: number | undefined
        face?: number | undefined
        skinColor?: number | undefined
        lipColor?: number | undefined
        eyeColor?: number | undefined
        hairColors?: number[] | undefined
        featureColors?: number[] | undefined
        decalColor?: number | undefined
        wearHelmet?: boolean | undefined
        hairIndex?: number | undefined
        featureIndex?: number | undefined
        decalIndex?: number | undefined
      }
    | undefined
  peerView?: { equipment?: DestinyCharacterDestinyItemPeerView[] | undefined } | undefined
}
type DestinyDefinitionsDestinyActivityRewardItem = {
  itemQuantity?: DestinyDestinyItemQuantity | undefined
  uiStyle?: string | undefined
}
type DestinyDefinitionsDestinyActivityRewardMapping = {
  displayBehavior?: number | undefined
  rewardItems?: DestinyDefinitionsDestinyActivityRewardItem[] | undefined
}
type DestinyDestinyActivity = {
  activityHash?: number | undefined
  isNew?: boolean | undefined
  canLead?: boolean | undefined
  canJoin?: boolean | undefined
  isCompleted?: boolean | undefined
  isVisible?: boolean | undefined
  displayLevel?: (number | null) | undefined
  recommendedLight?: (number | null) | undefined
  difficultyTier?: number | undefined
  challenges?: DestinyChallengesDestinyChallengeStatus[] | undefined
  modifierHashes?: number[] | undefined
  booleanActivityOptions?: { [x: string]: boolean } | undefined
  loadoutRequirementIndex?: (number | null) | undefined
  visibleRewards?: DestinyDefinitionsDestinyActivityRewardMapping[] | undefined
  isFocusedActivity?: boolean | undefined
  leaderRequirementFailureIndices?: number[] | undefined
  fireteamRequirementFailureIndices?: number[] | undefined
}
type DestinyDefinitionsFireteamFinderDestinyActivityInteractableReference = {
  activityInteractableHash?: number | undefined
  activityInteractableElementIndex?: number | undefined
}
type DestinyDestinyActivitySkullComponent = {
  hash?: number | undefined
  skullIdentifierHash?: number | undefined
  isEnabled?: boolean | undefined
}
type DestinyDestinyActivityDifficultyTierComponent = {
  difficultyTierIndex?: number | undefined
  fixedActivitySkulls?: DestinyDestinyActivitySkullComponent[] | undefined
}
type DestinyDestinyActivityDifficultyTierCollectionComponent = {
  difficultyTierCollectionHash?: number | undefined
  difficultyTiers?: DestinyDestinyActivityDifficultyTierComponent[] | undefined
}
type DestinyDestinyActivitySelectableSkullCollectionComponent = {
  selectableSkullCollectionHash?: number | undefined
  selectableSkulls?: DestinyDestinyActivitySkullComponent[] | undefined
}
type DestinyEntitiesCharactersDestinyCharacterActivitiesComponent = {
  dateActivityStarted?: string | undefined
  availableActivities?: DestinyDestinyActivity[] | undefined
  availableActivityInteractables?:
    | DestinyDefinitionsFireteamFinderDestinyActivityInteractableReference[]
    | undefined
  difficultyTierCollections?:
    | { [x: string]: DestinyDestinyActivityDifficultyTierCollectionComponent }
    | undefined
  selectableSkullCollections?:
    | { [x: string]: DestinyDestinyActivitySelectableSkullCollectionComponent }
    | undefined
  currentActivityHash?: number | undefined
  currentActivityModeHash?: number | undefined
  currentActivityModeType?: (number | null) | undefined
  currentActivityModeHashes?: number[] | undefined
  currentActivityModeTypes?: number[] | undefined
  currentPlaylistActivityHash?: (number | null) | undefined
  lastCompletedStoryHash?: number | undefined
}
type DestinyEntitiesItemsDestinyItemObjectivesComponent = {
  objectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  flavorObjective?:
    | {
        objectiveHash?: number | undefined
        destinationHash?: (number | null) | undefined
        activityHash?: (number | null) | undefined
        progress?: (number | null) | undefined
        completionValue?: number | undefined
        complete?: boolean | undefined
        visible?: boolean | undefined
      }
    | undefined
  dateCompleted?: (string | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyBaseItemComponentSetOfuint32 = {
  objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent | undefined
  perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent | undefined
}
type DestinyComponentsRecordsDestinyCharacterRecordsComponent = {
  featuredRecordHashes?: number[] | undefined
  records?: { [x: string]: DestinyComponentsRecordsDestinyRecordComponent } | undefined
  recordCategoriesRootNodeHash?: number | undefined
  recordSealsRootNodeHash?: number | undefined
}
type DestinyComponentsCollectiblesDestinyCollectiblesComponent = {
  collectibles?:
    | { [x: string]: DestinyComponentsCollectiblesDestinyCollectibleComponent }
    | undefined
  collectionCategoriesRootNodeHash?: number | undefined
  collectionBadgesRootNodeHash?: number | undefined
}
type DestinyComponentsCraftablesDestinyCraftableSocketPlugComponent = {
  plugItemHash?: number | undefined
  failedRequirementIndexes?: number[] | undefined
}
type DestinyComponentsCraftablesDestinyCraftableSocketComponent = {
  plugSetHash?: number | undefined
  plugs?: DestinyComponentsCraftablesDestinyCraftableSocketPlugComponent[] | undefined
}
type DestinyComponentsCraftablesDestinyCraftableComponent = {
  visible?: boolean | undefined
  failedRequirementIndexes?: number[] | undefined
  sockets?: DestinyComponentsCraftablesDestinyCraftableSocketComponent[] | undefined
}
type DestinyComponentsCraftablesDestinyCraftablesComponent = {
  craftables?: { [x: string]: DestinyComponentsCraftablesDestinyCraftableComponent } | undefined
  craftingRootNodeHash?: number | undefined
}
type DestinyEntitiesItemsDestinyItemInstanceComponent = {
  damageType?: number | undefined
  damageTypeHash?: (number | null) | undefined
  primaryStat?: { statHash?: number | undefined; value?: number | undefined } | undefined
  itemLevel?: number | undefined
  quality?: number | undefined
  isEquipped?: boolean | undefined
  canEquip?: boolean | undefined
  equipRequiredLevel?: number | undefined
  unlockHashesRequiredToEquip?: number[] | undefined
  cannotEquipReason?: number | undefined
  breakerType?: (number | null) | undefined
  breakerTypeHash?: (number | null) | undefined
  energy?:
    | {
        energyTypeHash?: number | undefined
        energyType?: number | undefined
        energyCapacity?: number | undefined
        energyUsed?: number | undefined
        energyUnused?: number | undefined
      }
    | undefined
  gearTier?: (number | null) | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemInstanceComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyEntitiesItemsDestinyItemRenderComponent = {
  useCustomDyes?: boolean | undefined
  artRegions?: { [x: string]: number } | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemRenderComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemRenderComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyEntitiesItemsDestinyItemStatsComponent = {
  stats?: { [x: string]: DestinyDestinyStat } | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemStatsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemStatsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyEntitiesItemsDestinyItemSocketState = {
  plugHash?: (number | null) | undefined
  isEnabled?: boolean | undefined
  isVisible?: boolean | undefined
  enableFailIndexes?: number[] | undefined
}
type DestinyEntitiesItemsDestinyItemSocketsComponent = {
  sockets?: DestinyEntitiesItemsDestinyItemSocketState[] | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemSocketsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinySocketsDestinyItemPlugBase = {
  plugItemHash?: number | undefined
  canInsert?: boolean | undefined
  enabled?: boolean | undefined
  insertFailIndexes?: number[] | undefined
  enableFailIndexes?: number[] | undefined
  stackSize?: (number | null) | undefined
  maxStackSize?: (number | null) | undefined
}
type DestinyComponentsItemsDestinyItemReusablePlugsComponent = {
  plugs?: { [x: string]: DestinySocketsDestinyItemPlugBase[] } | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemReusablePlugsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyComponentsItemsDestinyItemPlugObjectivesComponent = {
  objectivesPerPlug?: { [x: string]: DestinyQuestsDestinyObjectiveProgress[] } | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugObjectivesComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyDefinitionsDestinyMaterialRequirement = {
  itemHash?: number | undefined
  deleteOnAction?: boolean | undefined
  count?: number | undefined
  countIsConstant?: boolean | undefined
  omitFromRequirements?: boolean | undefined
  hasVirtualStackSize?: boolean | undefined
}
type DestinyDestinyTalentNode = {
  nodeIndex?: number | undefined
  nodeHash?: number | undefined
  state?: number | undefined
  isActivated?: boolean | undefined
  stepIndex?: number | undefined
  materialsToUpgrade?: DestinyDefinitionsDestinyMaterialRequirement[] | undefined
  activationGridLevel?: number | undefined
  progressPercent?: number | undefined
  hidden?: boolean | undefined
  nodeStatsBlock?:
    | {
        currentStepStats?: DestinyDestinyStat[] | undefined
        nextStepStats?: DestinyDestinyStat[] | undefined
      }
    | undefined
}
type DestinyEntitiesItemsDestinyItemTalentGridComponent = {
  talentGridHash?: number | undefined
  nodes?: DestinyDestinyTalentNode[] | undefined
  isGridComplete?: boolean | undefined
  gridProgression?:
    | {
        progressionHash?: number | undefined
        dailyProgress?: number | undefined
        dailyLimit?: number | undefined
        weeklyProgress?: number | undefined
        weeklyLimit?: number | undefined
        currentProgress?: number | undefined
        level?: number | undefined
        levelCap?: number | undefined
        stepIndex?: number | undefined
        progressToNextLevel?: number | undefined
        nextLevelAt?: number | undefined
        currentResetCount?: (number | null) | undefined
        seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
        rewardItemStates?: number[] | undefined
        rewardItemSocketOverrideStates?:
          | { [x: string]: DestinyDestinyProgressionRewardItemSocketOverrideState }
          | undefined
      }
    | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemTalentGridComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyComponentsItemsDestinyItemPlugComponent = {
  plugObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  plugItemHash?: number | undefined
  canInsert?: boolean | undefined
  enabled?: boolean | undefined
  insertFailIndexes?: number[] | undefined
  enableFailIndexes?: number[] | undefined
  stackSize?: (number | null) | undefined
  maxStackSize?: (number | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemPerksComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyComponentsInventoryDestinyMaterialRequirementState = {
  itemHash?: number | undefined
  count?: number | undefined
  stackSize?: number | undefined
}
type DestinyComponentsInventoryDestinyMaterialRequirementSetState = {
  materialRequirementSetHash?: number | undefined
  materialRequirementStates?:
    | DestinyComponentsInventoryDestinyMaterialRequirementState[]
    | undefined
}
type DestinyComponentsInventoryDestinyCurrenciesComponent = {
  itemQuantities?: { [x: string]: number } | undefined
  materialRequirementSetStates?:
    | { [x: string]: DestinyComponentsInventoryDestinyMaterialRequirementSetState }
    | undefined
}
type DestinyResponsesDestinyProfileResponse = {
  responseMintedTimestamp?: string | undefined
  secondaryComponentsMintedTimestamp?: string | undefined
  vendorReceipts?:
    | {
        data?: DestinyEntitiesProfilesDestinyVendorReceiptsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileInventory?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileCurrencies?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profile?:
    | {
        data?: DestinyEntitiesProfilesDestinyProfileComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  platformSilver?:
    | {
        data?: DestinyComponentsInventoryDestinyPlatformSilverComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileKiosks?:
    | {
        data?: DestinyComponentsKiosksDestinyKiosksComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profilePlugSets?:
    | {
        data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileProgression?:
    | {
        data?: DestinyComponentsProfilesDestinyProfileProgressionComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profilePresentationNodes?:
    | {
        data?: DestinyComponentsPresentationDestinyPresentationNodesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileRecords?:
    | {
        data?: DestinyComponentsRecordsDestinyProfileRecordsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileCollectibles?:
    | {
        data?: DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileTransitoryData?:
    | {
        data?: DestinyComponentsProfilesDestinyProfileTransitoryComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  metrics?:
    | {
        data?: DestinyComponentsMetricsDestinyMetricsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileStringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  profileCommendations?:
    | {
        data?: DestinyComponentsSocialDestinySocialCommendationsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characters?:
    | {
        data?: { [x: string]: DestinyEntitiesCharactersDestinyCharacterComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterInventories?:
    | {
        data?: { [x: string]: DestinyEntitiesInventoryDestinyInventoryComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterLoadouts?:
    | {
        data?: { [x: string]: DestinyComponentsLoadoutsDestinyLoadoutsComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterProgressions?:
    | {
        data?:
          | { [x: string]: DestinyEntitiesCharactersDestinyCharacterProgressionComponent }
          | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterRenderData?:
    | {
        data?: { [x: string]: DestinyEntitiesCharactersDestinyCharacterRenderComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterActivities?:
    | {
        data?:
          | { [x: string]: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent }
          | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterEquipment?:
    | {
        data?: { [x: string]: DestinyEntitiesInventoryDestinyInventoryComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterKiosks?:
    | {
        data?: { [x: string]: DestinyComponentsKiosksDestinyKiosksComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterPlugSets?:
    | {
        data?: { [x: string]: DestinyComponentsPlugSetsDestinyPlugSetsComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterUninstancedItemComponents?:
    | { [x: string]: DestinyBaseItemComponentSetOfuint32 }
    | undefined
  characterPresentationNodes?:
    | {
        data?:
          | { [x: string]: DestinyComponentsPresentationDestinyPresentationNodesComponent }
          | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterRecords?:
    | {
        data?: { [x: string]: DestinyComponentsRecordsDestinyCharacterRecordsComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterCollectibles?:
    | {
        data?:
          | { [x: string]: DestinyComponentsCollectiblesDestinyCollectiblesComponent }
          | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterStringVariables?:
    | {
        data?:
          | { [x: string]: DestinyComponentsStringVariablesDestinyStringVariablesComponent }
          | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  characterCraftables?:
    | {
        data?: { [x: string]: DestinyComponentsCraftablesDestinyCraftablesComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  itemComponents?:
    | {
        instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent | undefined
        renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent | undefined
        stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent | undefined
        sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent
          | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent
          | undefined
        talentGrids?:
          | DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent | undefined
        perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent | undefined
      }
    | undefined
  characterCurrencyLookups?:
    | {
        data?: { [x: string]: DestinyComponentsInventoryDestinyCurrenciesComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
}
type DestinyResponsesDestinyCharacterResponse = {
  inventory?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  character?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  progressions?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterProgressionComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  renderData?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterRenderComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  activities?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  equipment?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  loadouts?:
    | {
        data?: DestinyComponentsLoadoutsDestinyLoadoutsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  kiosks?:
    | {
        data?: DestinyComponentsKiosksDestinyKiosksComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  plugSets?:
    | {
        data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  presentationNodes?:
    | {
        data?: DestinyComponentsPresentationDestinyPresentationNodesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  records?:
    | {
        data?: DestinyComponentsRecordsDestinyCharacterRecordsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  collectibles?:
    | {
        data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  itemComponents?:
    | {
        instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent | undefined
        renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent | undefined
        stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent | undefined
        sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent
          | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent
          | undefined
        talentGrids?:
          | DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent | undefined
        perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent | undefined
      }
    | undefined
  uninstancedItemComponents?:
    | {
        objectives?:
          | DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent
          | undefined
        perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent | undefined
      }
    | undefined
  currencyLookups?:
    | {
        data?: DestinyComponentsInventoryDestinyCurrenciesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
}
type ConfigClanBannerClanBannerSource = { [x: string]: unknown }
type DestinyResponsesDestinyItemResponse = {
  characterId?: (bigint | null) | undefined
  item?:
    | {
        data?: DestinyEntitiesItemsDestinyItemComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  instance?:
    | {
        data?: DestinyEntitiesItemsDestinyItemInstanceComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  objectives?:
    | {
        data?: DestinyEntitiesItemsDestinyItemObjectivesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  perks?:
    | {
        data?: DestinyEntitiesItemsDestinyItemPerksComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  renderData?:
    | {
        data?: DestinyEntitiesItemsDestinyItemRenderComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  stats?:
    | {
        data?: DestinyEntitiesItemsDestinyItemStatsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  talentGrid?:
    | {
        data?: DestinyEntitiesItemsDestinyItemTalentGridComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  sockets?:
    | {
        data?: DestinyEntitiesItemsDestinyItemSocketsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  reusablePlugs?:
    | {
        data?: DestinyComponentsItemsDestinyItemReusablePlugsComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  plugObjectives?:
    | {
        data?: DestinyComponentsItemsDestinyItemPlugObjectivesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
}
type DestinyComponentsVendorsDestinyVendorGroup = {
  vendorGroupHash?: number | undefined
  vendorHashes?: number[] | undefined
}
type DestinyComponentsVendorsDestinyVendorGroupComponent = {
  groups?: DestinyComponentsVendorsDestinyVendorGroup[] | undefined
}
type DestinyEntitiesVendorsDestinyVendorComponent = {
  canPurchase?: boolean | undefined
  progression?:
    | {
        progressionHash?: number | undefined
        dailyProgress?: number | undefined
        dailyLimit?: number | undefined
        weeklyProgress?: number | undefined
        weeklyLimit?: number | undefined
        currentProgress?: number | undefined
        level?: number | undefined
        levelCap?: number | undefined
        stepIndex?: number | undefined
        progressToNextLevel?: number | undefined
        nextLevelAt?: number | undefined
        currentResetCount?: (number | null) | undefined
        seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
        rewardItemStates?: number[] | undefined
        rewardItemSocketOverrideStates?:
          | { [x: string]: DestinyDestinyProgressionRewardItemSocketOverrideState }
          | undefined
      }
    | undefined
  vendorLocationIndex?: number | undefined
  seasonalRank?: (number | null) | undefined
  vendorHash?: number | undefined
  nextRefreshDate?: string | undefined
  enabled?: boolean | undefined
}
type DestinyEntitiesVendorsDestinyVendorCategory = {
  displayCategoryIndex?: number | undefined
  itemIndexes?: number[] | undefined
}
type DestinyEntitiesVendorsDestinyVendorCategoriesComponent = {
  categories?: DestinyEntitiesVendorsDestinyVendorCategory[] | undefined
}
type DestinyDestinyUnlockStatus = { unlockHash?: number | undefined; isSet?: boolean | undefined }
type DestinyEntitiesVendorsDestinyVendorSaleItemComponent = {
  saleStatus?: number | undefined
  requiredUnlocks?: number[] | undefined
  unlockStatuses?: DestinyDestinyUnlockStatus[] | undefined
  failureIndexes?: number[] | undefined
  augments?: number | undefined
  itemValueVisibility?: boolean[] | undefined
  vendorItemIndex?: number | undefined
  itemHash?: number | undefined
  overrideStyleItemHash?: (number | null) | undefined
  quantity?: number | undefined
  costs?: DestinyDestinyItemQuantity[] | undefined
  overrideNextRefreshDate?: (string | null) | undefined
  apiPurchasable?: (boolean | null) | undefined
}
type DestinyResponsesPersonalDestinyVendorSaleItemSetComponent = {
  saleItems?: { [x: string]: DestinyEntitiesVendorsDestinyVendorSaleItemComponent } | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemInstanceComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemRenderComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemRenderComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemStatsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemStatsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemSocketsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemReusablePlugsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugObjectivesComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemTalentGridComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemPerksComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyVendorItemComponentSetOfint32 = {
  itemComponents?: DictionaryComponentResponseOfint32AndDestinyItemComponent | undefined
  instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent | undefined
  renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent | undefined
  stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent | undefined
  sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent | undefined
  reusablePlugs?: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent | undefined
  plugObjectives?:
    | DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent
    | undefined
  talentGrids?: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent | undefined
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
  objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent | undefined
  perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent | undefined
}
type DestinyResponsesDestinyVendorsResponse = {
  vendorGroups?:
    | {
        data?: DestinyComponentsVendorsDestinyVendorGroupComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  vendors?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  categories?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorCategoriesComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  sales?:
    | {
        data?:
          | { [x: string]: DestinyResponsesPersonalDestinyVendorSaleItemSetComponent }
          | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  itemComponents?: { [x: string]: DestinyVendorItemComponentSetOfint32 } | undefined
  currencyLookups?:
    | {
        data?: DestinyComponentsInventoryDestinyCurrenciesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  stringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
}
type DestinyResponsesDestinyVendorResponse = {
  vendor?:
    | {
        data?: DestinyEntitiesVendorsDestinyVendorComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  categories?:
    | {
        data?: DestinyEntitiesVendorsDestinyVendorCategoriesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  sales?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorSaleItemComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  itemComponents?:
    | {
        itemComponents?: DictionaryComponentResponseOfint32AndDestinyItemComponent | undefined
        instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent | undefined
        renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent | undefined
        stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent | undefined
        sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent
          | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent
          | undefined
        talentGrids?:
          | DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent | undefined
        perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent | undefined
      }
    | undefined
  currencyLookups?:
    | {
        data?: DestinyComponentsInventoryDestinyCurrenciesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  stringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
}
type DestinyComponentsVendorsDestinyPublicVendorComponent = {
  vendorHash?: number | undefined
  nextRefreshDate?: string | undefined
  enabled?: boolean | undefined
}
type DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent = {
  vendorItemIndex?: number | undefined
  itemHash?: number | undefined
  overrideStyleItemHash?: (number | null) | undefined
  quantity?: number | undefined
  costs?: DestinyDestinyItemQuantity[] | undefined
  overrideNextRefreshDate?: (string | null) | undefined
  apiPurchasable?: (boolean | null) | undefined
}
type DestinyResponsesPublicDestinyVendorSaleItemSetComponent = {
  saleItems?:
    | { [x: string]: DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent }
    | undefined
}
type DestinyResponsesDestinyPublicVendorsResponse = {
  vendorGroups?:
    | {
        data?: DestinyComponentsVendorsDestinyVendorGroupComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  vendors?:
    | {
        data?: { [x: string]: DestinyComponentsVendorsDestinyPublicVendorComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  categories?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorCategoriesComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  sales?:
    | {
        data?: { [x: string]: DestinyResponsesPublicDestinyVendorSaleItemSetComponent } | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  stringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemInstanceComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemRenderComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemStatsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemSocketsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemReusablePlugsComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugObjectivesComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemTalentGridComponent } | undefined
  privacy?: number | undefined
  disabled?: (boolean | null) | undefined
}
type DestinyResponsesDestinyCollectibleNodeDetailResponse = {
  collectibles?:
    | {
        data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent | undefined
        privacy?: number | undefined
        disabled?: (boolean | null) | undefined
      }
    | undefined
  collectibleItemComponents?:
    | {
        instances?: DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent | undefined
        renderData?: DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent | undefined
        stats?: DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent | undefined
        sockets?: DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent
          | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent
          | undefined
        talentGrids?:
          | DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        objectives?:
          | DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent
          | undefined
        perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent | undefined
      }
    | undefined
}
type DestinyRequestsDestinyItemTransferRequest = {
  itemReferenceHash?: number | undefined
  stackSize?: number | undefined
  transferToVault?: boolean | undefined
  itemId?: bigint | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyRequestsActionsDestinyPostmasterTransferRequest = {
  itemReferenceHash?: number | undefined
  stackSize?: number | undefined
  itemId?: bigint | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyRequestsActionsDestinyItemActionRequest = {
  itemId?: bigint | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyRequestsActionsDestinyItemSetActionRequest = {
  itemIds?: bigint[] | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyDestinyEquipItemResult = {
  itemInstanceId?: bigint | undefined
  equipStatus?: number | undefined
}
type DestinyDestinyEquipItemResults = { equipResults?: DestinyDestinyEquipItemResult[] | undefined }
type DestinyRequestsActionsDestinyLoadoutActionRequest = {
  loadoutIndex?: number | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyRequestsActionsDestinyLoadoutUpdateActionRequest = {
  colorHash?: (number | null) | undefined
  iconHash?: (number | null) | undefined
  nameHash?: (number | null) | undefined
  loadoutIndex?: number | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyRequestsActionsDestinyItemStateRequest = {
  state?: boolean | undefined
  itemId?: bigint | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyRequestsActionsDestinyInsertPlugsActionRequest = {
  actionToken?: string | undefined
  itemInstanceId?: bigint | undefined
  plug?:
    | {
        socketIndex?: number | undefined
        socketArrayType?: number | undefined
        plugItemHash?: number | undefined
      }
    | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyResponsesDestinyItemChangeResponse = {
  item?: DestinyResponsesDestinyItemResponse | undefined
  addedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[] | undefined
  removedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[] | undefined
}
type DestinyRequestsActionsDestinyInsertPlugsFreeActionRequest = {
  plug?:
    | {
        socketIndex?: number | undefined
        socketArrayType?: number | undefined
        plugItemHash?: number | undefined
      }
    | undefined
  itemId?: bigint | undefined
  characterId?: bigint | undefined
  membershipType?: number | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsValue = {
  statId?: string | undefined
  basic?: { value?: number | undefined; displayValue?: string | undefined } | undefined
  pga?: { value?: number | undefined; displayValue?: string | undefined } | undefined
  weighted?: { value?: number | undefined; displayValue?: string | undefined } | undefined
  activityId?: (bigint | null) | undefined
}
type DestinyHistoricalStatsDestinyHistoricalWeaponStats = {
  referenceId?: number | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
}
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntry = {
  standing?: number | undefined
  score?:
    | {
        statId?: string | undefined
        basic?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        pga?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        weighted?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        activityId?: (bigint | null) | undefined
      }
    | undefined
  player?:
    | {
        destinyUserInfo?:
          | {
              supplementalDisplayName?: string | undefined
              iconPath?: string | undefined
              crossSaveOverride?: number | undefined
              applicableMembershipTypes?: number[] | undefined
              isPublic?: boolean | undefined
              membershipType?: number | undefined
              membershipId?: bigint | undefined
              displayName?: string | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: (number | null) | undefined
            }
          | undefined
        characterClass?: string | undefined
        classHash?: number | undefined
        raceHash?: number | undefined
        genderHash?: number | undefined
        characterLevel?: number | undefined
        lightLevel?: number | undefined
        bungieNetUserInfo?:
          | {
              supplementalDisplayName?: string | undefined
              iconPath?: string | undefined
              crossSaveOverride?: number | undefined
              applicableMembershipTypes?: number[] | undefined
              isPublic?: boolean | undefined
              membershipType?: number | undefined
              membershipId?: bigint | undefined
              displayName?: string | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: (number | null) | undefined
            }
          | undefined
        clanName?: string | undefined
        clanTag?: string | undefined
        emblemHash?: number | undefined
      }
    | undefined
  characterId?: bigint | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
  extended?:
    | {
        weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[] | undefined
        values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
        scoreboardValues?:
          | { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue }
          | undefined
      }
    | undefined
}
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry = {
  teamId?: number | undefined
  standing?:
    | {
        statId?: string | undefined
        basic?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        pga?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        weighted?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        activityId?: (bigint | null) | undefined
      }
    | undefined
  score?:
    | {
        statId?: string | undefined
        basic?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        pga?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        weighted?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        activityId?: (bigint | null) | undefined
      }
    | undefined
  teamName?: string | undefined
}
type DestinyHistoricalStatsDestinyPostGameCarnageReportData = {
  period?: string | undefined
  startingPhaseIndex?: (number | null) | undefined
  activityWasStartedFromBeginning?: (boolean | null) | undefined
  activityDifficultyTier?: (number | null) | undefined
  selectedSkullHashes?: number[] | undefined
  activityDetails?:
    | {
        referenceId?: number | undefined
        directorActivityHash?: number | undefined
        instanceId?: bigint | undefined
        mode?: number | undefined
        modes?: number[] | undefined
        isPrivate?: boolean | undefined
        membershipType?: number | undefined
      }
    | undefined
  entries?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntry[] | undefined
  teams?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry[] | undefined
}
type DestinyReportingRequestsDestinyReportOffensePgcrRequest = {
  reasonCategoryHashes?: number[] | undefined
  reasonHashes?: number[] | undefined
  offendingCharacterId?: bigint | undefined
}
type DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition = {
  statId?: string | undefined
  group?: number | undefined
  periodTypes?: number[] | undefined
  modes?: number[] | undefined
  category?: number | undefined
  statName?: string | undefined
  statNameAbbr?: string | undefined
  statDescription?: string | undefined
  unitType?: number | undefined
  iconImage?: string | undefined
  mergeMethod?: (number | null) | undefined
  unitLabel?: string | undefined
  weight?: number | undefined
  medalTierHash?: (number | null) | undefined
}
type DestinyHistoricalStatsDestinyLeaderboardEntry = {
  rank?: number | undefined
  player?:
    | {
        destinyUserInfo?:
          | {
              supplementalDisplayName?: string | undefined
              iconPath?: string | undefined
              crossSaveOverride?: number | undefined
              applicableMembershipTypes?: number[] | undefined
              isPublic?: boolean | undefined
              membershipType?: number | undefined
              membershipId?: bigint | undefined
              displayName?: string | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: (number | null) | undefined
            }
          | undefined
        characterClass?: string | undefined
        classHash?: number | undefined
        raceHash?: number | undefined
        genderHash?: number | undefined
        characterLevel?: number | undefined
        lightLevel?: number | undefined
        bungieNetUserInfo?:
          | {
              supplementalDisplayName?: string | undefined
              iconPath?: string | undefined
              crossSaveOverride?: number | undefined
              applicableMembershipTypes?: number[] | undefined
              isPublic?: boolean | undefined
              membershipType?: number | undefined
              membershipId?: bigint | undefined
              displayName?: string | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: (number | null) | undefined
            }
          | undefined
        clanName?: string | undefined
        clanTag?: string | undefined
        emblemHash?: number | undefined
      }
    | undefined
  characterId?: bigint | undefined
  value?:
    | {
        statId?: string | undefined
        basic?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        pga?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        weighted?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        activityId?: (bigint | null) | undefined
      }
    | undefined
}
type DestinyHistoricalStatsDestinyLeaderboard = {
  statId?: string | undefined
  entries?: DestinyHistoricalStatsDestinyLeaderboardEntry[] | undefined
}
type DestinyHistoricalStatsDestinyClanAggregateStat = {
  mode?: number | undefined
  statId?: string | undefined
  value?:
    | {
        statId?: string | undefined
        basic?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        pga?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        weighted?: { value?: number | undefined; displayValue?: string | undefined } | undefined
        activityId?: (bigint | null) | undefined
      }
    | undefined
}
type DestinyDefinitionsDestinyEntitySearchResultItem = {
  hash?: number | undefined
  entityType?: string | undefined
  displayProperties?:
    | {
        description?: string | undefined
        name?: string | undefined
        icon?: string | undefined
        iconHash?: number | undefined
        iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[] | undefined
        highResIcon?: string | undefined
        hasIcon?: boolean | undefined
      }
    | undefined
  weight?: number | undefined
}
type DestinyDefinitionsDestinyEntitySearchResult = {
  suggestedWords?: string[] | undefined
  results?:
    | {
        results?: DestinyDefinitionsDestinyEntitySearchResultItem[] | undefined
        totalResults?: number | undefined
        hasMore?: boolean | undefined
        query?: QueriesPagedQuery | undefined
        replacementContinuationToken?: string | undefined
        useTotalResults?: boolean | undefined
      }
    | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup = {
  period?: string | undefined
  activityDetails?:
    | {
        referenceId?: number | undefined
        directorActivityHash?: number | undefined
        instanceId?: bigint | undefined
        mode?: number | undefined
        modes?: number[] | undefined
        isPrivate?: boolean | undefined
        membershipType?: number | undefined
      }
    | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsByPeriod = {
  allTime?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
  allTimeTier1?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
  allTimeTier2?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
  allTimeTier3?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
  daily?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[] | undefined
  monthly?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[] | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsWithMerged = {
  results?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } | undefined
  merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter = {
  characterId?: bigint | undefined
  deleted?: boolean | undefined
  results?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } | undefined
  merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsAccountResult = {
  mergedDeletedCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged | undefined
  mergedAllCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged | undefined
  characters?: DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter[] | undefined
}
type DestinyHistoricalStatsDestinyActivityHistoryResults = {
  activities?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[] | undefined
}
type DestinyHistoricalStatsDestinyHistoricalWeaponStatsData = {
  weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[] | undefined
}
type DestinyHistoricalStatsDestinyAggregateActivityStats = {
  activityHash?: number | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
}
type DestinyHistoricalStatsDestinyAggregateActivityResults = {
  activities?: DestinyHistoricalStatsDestinyAggregateActivityStats[] | undefined
}
type DestinyMilestonesDestinyMilestoneContentItemCategory = {
  title?: string | undefined
  itemHashes?: number[] | undefined
}
type DestinyMilestonesDestinyMilestoneContent = {
  about?: string | undefined
  status?: string | undefined
  tips?: string[] | undefined
  itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[] | undefined
}
type DestinyMilestonesDestinyPublicMilestoneActivityVariant = {
  activityHash?: number | undefined
  activityModeHash?: (number | null) | undefined
  activityModeType?: (number | null) | undefined
}
type DestinyMilestonesDestinyPublicMilestoneChallenge = {
  objectiveHash?: number | undefined
  activityHash?: (number | null) | undefined
}
type DestinyMilestonesDestinyPublicMilestoneQuest = {
  questItemHash?: number | undefined
  activity?:
    | {
        activityHash?: number | undefined
        modifierHashes?: number[] | undefined
        variants?: DestinyMilestonesDestinyPublicMilestoneActivityVariant[] | undefined
        activityModeHash?: (number | null) | undefined
        activityModeType?: (number | null) | undefined
      }
    | undefined
  challenges?: DestinyMilestonesDestinyPublicMilestoneChallenge[] | undefined
}
type DestinyMilestonesDestinyPublicMilestoneChallengeActivity = {
  activityHash?: number | undefined
  challengeObjectiveHashes?: number[] | undefined
  modifierHashes?: number[] | undefined
  loadoutRequirementIndex?: (number | null) | undefined
  phaseHashes?: number[] | undefined
  booleanActivityOptions?: { [x: string]: boolean } | undefined
}
type DestinyMilestonesDestinyPublicMilestoneVendor = {
  vendorHash?: number | undefined
  previewItemHash?: (number | null) | undefined
}
type DestinyMilestonesDestinyPublicMilestone = {
  milestoneHash?: number | undefined
  availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[] | undefined
  activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[] | undefined
  vendorHashes?: number[] | undefined
  vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[] | undefined
  startDate?: (string | null) | undefined
  endDate?: (string | null) | undefined
  order?: number | undefined
}
type DestinyAdvancedAwaPermissionRequested = {
  type?: number | undefined
  affectedItemId?: (bigint | null) | undefined
  membershipType?: number | undefined
  characterId?: (bigint | null) | undefined
}
type DestinyAdvancedAwaInitializeResponse = {
  correlationId?: string | undefined
  sentToSelf?: boolean | undefined
}
type DestinyAdvancedAwaUserResponse = {
  selection?: number | undefined
  correlationId?: string | undefined
  nonce?: string[] | undefined
}
type DestinyAdvancedAwaAuthorizationResult = {
  userSelection?: number | undefined
  responseReason?: number | undefined
  developerNote?: string | undefined
  actionToken?: string | undefined
  maximumNumberOfUses?: number | undefined
  validUntil?: (string | null) | undefined
  type?: number | undefined
  membershipType?: number | undefined
}
type TrendingTrendingEntry = {
  weight?: number | undefined
  isFeatured?: boolean | undefined
  identifier?: string | undefined
  entityType?: number | undefined
  displayName?: string | undefined
  tagline?: string | undefined
  image?: string | undefined
  startDate?: (string | null) | undefined
  endDate?: (string | null) | undefined
  link?: string | undefined
  webmVideo?: string | undefined
  mp4Video?: string | undefined
  featureImage?: string | undefined
  items?: TrendingTrendingEntry[] | undefined
  creationDate?: (string | null) | undefined
}
type SearchResultOfTrendingEntry = {
  results?: TrendingTrendingEntry[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type TrendingTrendingCategory = {
  categoryName?: string | undefined
  entries?: SearchResultOfTrendingEntry | undefined
  categoryId?: string | undefined
}
type TrendingTrendingCategories = { categories?: TrendingTrendingCategory[] | undefined }
type TrendingTrendingEntryNews = { article?: ContentContentItemPublicContract | undefined }
type TrendingTrendingEntrySupportArticle = {
  article?: ContentContentItemPublicContract | undefined
}
type TrendingTrendingEntryDestinyItem = { itemHash?: number | undefined }
type DestinyActivitiesDestinyPublicActivityStatus = {
  challengeObjectiveHashes?: number[] | undefined
  modifierHashes?: number[] | undefined
  rewardTooltipItems?: DestinyDestinyItemQuantity[] | undefined
}
type TrendingTrendingEntryDestinyActivity = {
  activityHash?: number | undefined
  status?: DestinyActivitiesDestinyPublicActivityStatus | undefined
}
type TrendingTrendingEntryDestinyRitual = {
  image?: string | undefined
  icon?: string | undefined
  title?: string | undefined
  subtitle?: string | undefined
  dateStart?: (string | null) | undefined
  dateEnd?: (string | null) | undefined
  milestoneDetails?:
    | {
        milestoneHash?: number | undefined
        availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[] | undefined
        activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[] | undefined
        vendorHashes?: number[] | undefined
        vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[] | undefined
        startDate?: (string | null) | undefined
        endDate?: (string | null) | undefined
        order?: number | undefined
      }
    | undefined
  eventContent?:
    | {
        about?: string | undefined
        status?: string | undefined
        tips?: string[] | undefined
        itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[] | undefined
      }
    | undefined
}
type TrendingTrendingEntryCommunityCreation = {
  media?: string | undefined
  title?: string | undefined
  author?: string | undefined
  authorMembershipId?: bigint | undefined
  postId?: bigint | undefined
  body?: string | undefined
  upvotes?: number | undefined
}
type TrendingTrendingDetail = {
  identifier?: string | undefined
  entityType?: number | undefined
  news?: TrendingTrendingEntryNews | undefined
  support?: TrendingTrendingEntrySupportArticle | undefined
  destinyItem?: TrendingTrendingEntryDestinyItem | undefined
  destinyActivity?: TrendingTrendingEntryDestinyActivity | undefined
  destinyRitual?: TrendingTrendingEntryDestinyRitual | undefined
  creation?: TrendingTrendingEntryCommunityCreation | undefined
}
type FireteamFireteamSummary = {
  fireteamId?: bigint | undefined
  groupId?: bigint | undefined
  platform?: number | undefined
  activityType?: number | undefined
  isImmediate?: boolean | undefined
  scheduledTime?: (string | null) | undefined
  ownerMembershipId?: bigint | undefined
  playerSlotCount?: number | undefined
  alternateSlotCount?: (number | null) | undefined
  availablePlayerSlotCount?: number | undefined
  availableAlternateSlotCount?: number | undefined
  title?: string | undefined
  dateCreated?: string | undefined
  dateModified?: (string | null) | undefined
  isPublic?: boolean | undefined
  locale?: string | undefined
  isValid?: boolean | undefined
  datePlayerModified?: string | undefined
  titleBeforeModeration?: string | undefined
  ownerCurrentGuardianRankSnapshot?: number | undefined
  ownerHighestLifetimeGuardianRankSnapshot?: number | undefined
  ownerTotalCommendationScoreSnapshot?: number | undefined
}
type SearchResultOfFireteamSummary = {
  results?: FireteamFireteamSummary[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type FireteamFireteamUserInfoCard = {
  FireteamDisplayName?: string | undefined
  FireteamMembershipType?: number | undefined
  supplementalDisplayName?: string | undefined
  iconPath?: string | undefined
  crossSaveOverride?: number | undefined
  applicableMembershipTypes?: number[] | undefined
  isPublic?: boolean | undefined
  membershipType?: number | undefined
  membershipId?: bigint | undefined
  displayName?: string | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
}
type FireteamFireteamMember = {
  destinyUserInfo?: FireteamFireteamUserInfoCard | undefined
  bungieNetUserInfo?: UserUserInfoCard | undefined
  characterId?: bigint | undefined
  dateJoined?: string | undefined
  hasMicrophone?: boolean | undefined
  lastPlatformInviteAttemptDate?: string | undefined
  lastPlatformInviteAttemptResult?: number | undefined
}
type FireteamFireteamResponse = {
  Summary?: FireteamFireteamSummary | undefined
  Members?: FireteamFireteamMember[] | undefined
  Alternates?: FireteamFireteamMember[] | undefined
}
type SearchResultOfFireteamResponse = {
  results?: FireteamFireteamResponse[] | undefined
  totalResults?: number | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  useTotalResults?: boolean | undefined
}
type SocialFriendsBungieFriend = {
  lastSeenAsMembershipId?: bigint | undefined
  lastSeenAsBungieMembershipType?: number | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
  onlineStatus?: number | undefined
  onlineTitle?: number | undefined
  relationship?: number | undefined
  bungieNetUser?: UserGeneralUser | undefined
}
type SocialFriendsBungieFriendListResponse = { friends?: SocialFriendsBungieFriend[] | undefined }
type SocialFriendsBungieFriendRequestListResponse = {
  incomingRequests?: SocialFriendsBungieFriend[] | undefined
  outgoingRequests?: SocialFriendsBungieFriend[] | undefined
}
type SocialFriendsPlatformFriend = {
  platformDisplayName?: string | undefined
  friendPlatform?: number | undefined
  destinyMembershipId?: (bigint | null) | undefined
  destinyMembershipType?: (number | null) | undefined
  bungieNetMembershipId?: (bigint | null) | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: (number | null) | undefined
}
type SocialFriendsPlatformFriendResponse = {
  itemsPerPage?: number | undefined
  currentPage?: number | undefined
  hasMore?: boolean | undefined
  platformFriends?: SocialFriendsPlatformFriend[] | undefined
}
type CommonModelsCoreSystem = {
  enabled?: boolean | undefined
  parameters?: { [x: string]: string } | undefined
}
type CommonModelsCoreSetting = {
  identifier?: string | undefined
  isDefault?: boolean | undefined
  displayName?: string | undefined
  summary?: string | undefined
  imagePath?: string | undefined
  childSettings?: CommonModelsCoreSetting[] | undefined
}
type CommonModelsDestiny2CoreSettings = {
  collectionRootNode?: number | undefined
  badgesRootNode?: number | undefined
  recordsRootNode?: number | undefined
  medalsRootNode?: number | undefined
  metricsRootNode?: number | undefined
  activeTriumphsRootNodeHash?: number | undefined
  activeSealsRootNodeHash?: number | undefined
  legacyTriumphsRootNodeHash?: number | undefined
  legacySealsRootNodeHash?: number | undefined
  medalsRootNodeHash?: number | undefined
  exoticCatalystsRootNodeHash?: number | undefined
  loreRootNodeHash?: number | undefined
  craftingRootNodeHash?: number | undefined
  globalConstantsHash?: number | undefined
  loadoutConstantsHash?: number | undefined
  guardianRankConstantsHash?: number | undefined
  fireteamFinderConstantsHash?: number | undefined
  inventoryItemConstantsHash?: number | undefined
  featuredItemsListHash?: number | undefined
  armorArchetypePlugSetHash?: number | undefined
  seasonalHubEventCardHash?: number | undefined
  guardianRanksRootNodeHash?: number | undefined
  currentRankProgressionHashes?: number[] | undefined
  insertPlugFreeProtectedPlugItemHashes?: number[] | undefined
  insertPlugFreeBlockedSocketTypeHashes?: number[] | undefined
  enabledFireteamFinderActivityGraphHashes?: number[] | undefined
  undiscoveredCollectibleImage?: string | undefined
  ammoTypeHeavyIcon?: string | undefined
  ammoTypeSpecialIcon?: string | undefined
  ammoTypePrimaryIcon?: string | undefined
  currentSeasonalArtifactHash?: number | undefined
  currentSeasonHash?: (number | null) | undefined
  currentSeasonPassHash?: (number | null) | undefined
  seasonalChallengesPresentationNodeHash?: (number | null) | undefined
  futureSeasonHashes?: number[] | undefined
  pastSeasonHashes?: number[] | undefined
}
type UserEMailSettingSubscriptionLocalization = {
  unknownUserDescription?: string | undefined
  registeredUserDescription?: string | undefined
  unregisteredUserDescription?: string | undefined
  unknownUserActionText?: string | undefined
  knownUserActionText?: string | undefined
  title?: string | undefined
  description?: string | undefined
}
type UserEmailSubscriptionDefinition = {
  name?: string | undefined
  localization?: { [x: string]: UserEMailSettingSubscriptionLocalization } | undefined
  value?: bigint | undefined
}
type UserEmailOptInDefinition = {
  name?: string | undefined
  value?: bigint | undefined
  setByDefault?: boolean | undefined
  dependentSubscriptions?: UserEmailSubscriptionDefinition[] | undefined
}
type UserEMailSettingLocalization = { title?: string | undefined; description?: string | undefined }
type UserEmailViewDefinitionSetting = {
  name?: string | undefined
  localization?: { [x: string]: UserEMailSettingLocalization } | undefined
  setByDefault?: boolean | undefined
  optInAggregateValue?: bigint | undefined
  subscriptions?: UserEmailSubscriptionDefinition[] | undefined
}
type UserEmailViewDefinition = {
  name?: string | undefined
  viewSettings?: UserEmailViewDefinitionSetting[] | undefined
}
type UserEmailSettings = {
  optInDefinitions?: { [x: string]: UserEmailOptInDefinition } | undefined
  subscriptionDefinitions?: { [x: string]: UserEmailSubscriptionDefinition } | undefined
  views?: { [x: string]: UserEmailViewDefinition } | undefined
}
type CommonModelsCoreSettingsConfiguration = {
  environment?: string | undefined
  systems?: { [x: string]: CommonModelsCoreSystem } | undefined
  ignoreReasons?: CommonModelsCoreSetting[] | undefined
  forumCategories?: CommonModelsCoreSetting[] | undefined
  groupAvatars?: CommonModelsCoreSetting[] | undefined
  defaultGroupTheme?: CommonModelsCoreSetting | undefined
  destinyMembershipTypes?: CommonModelsCoreSetting[] | undefined
  recruitmentPlatformTags?: CommonModelsCoreSetting[] | undefined
  recruitmentMiscTags?: CommonModelsCoreSetting[] | undefined
  recruitmentActivities?: CommonModelsCoreSetting[] | undefined
  userContentLocales?: CommonModelsCoreSetting[] | undefined
  systemContentLocales?: CommonModelsCoreSetting[] | undefined
  clanBannerDecals?: CommonModelsCoreSetting[] | undefined
  clanBannerDecalColors?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalons?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalonColors?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalonDetails?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalonDetailColors?: CommonModelsCoreSetting[] | undefined
  clanBannerStandards?: CommonModelsCoreSetting[] | undefined
  destiny2CoreSettings?: CommonModelsDestiny2CoreSettings | undefined
  emailSettings?: UserEmailSettings | undefined
  fireteamActivities?: CommonModelsCoreSetting[] | undefined
}
type StreamInfo = { ChannelName?: string | undefined }
type GlobalAlert = {
  AlertKey?: string | undefined
  AlertHtml?: string | undefined
  AlertTimestamp?: string | undefined
  AlertLink?: string | undefined
  AlertLevel?: number | undefined
  AlertType?: number | undefined
  StreamInfo?: StreamInfo | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/App/ApiUsage/:applicationId/': {
      $get: {
        input: { param: { applicationId: number } } & {
          query: { end?: string | undefined; start?: string | undefined }
        }
        output: {
          Response?: ApplicationsApiUsage | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/App/FirstParty/': {
      $get: {
        input: {}
        output: {
          Response?: ApplicationsApplication[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetBungieNetUserById/:id/': {
      $get: {
        input: { param: { id: bigint } }
        output: {
          Response?: UserGeneralUser | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetSanitizedPlatformDisplayNames/:membershipId/': {
      $get: {
        input: { param: { membershipId: bigint } }
        output: {
          Response?: { [x: string]: string } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetCredentialTypesForTargetAccount/:membershipId/': {
      $get: {
        input: { param: { membershipId: bigint } }
        output: {
          Response?: UserModelsGetCredentialTypesForAccountResponse[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetAvailableThemes/': {
      $get: {
        input: {}
        output: {
          Response?: ConfigUserTheme[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetMembershipsById/:membershipId/:membershipType/': {
      $get: {
        input: { param: { membershipId: bigint; membershipType: number } }
        output: {
          Response?: UserUserMembershipData | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetMembershipsForCurrentUser/': {
      $get: {
        input: {}
        output: {
          Response?: UserUserMembershipData | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/GetMembershipFromHardLinkedCredential/:crType/:credential/': {
      $get: {
        input: { param: { credential: string; crType: number } }
        output: {
          Response?: UserHardLinkedUserMembership | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/Search/Prefix/:displayNamePrefix/:page/': {
      $get: {
        input: { param: { displayNamePrefix: string; page: number } }
        output: {
          Response?: UserUserSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/User/Search/GlobalName/:page/': {
      $post: {
        input: { param: { page: number } } & { json: UserUserSearchPrefixRequest }
        output: {
          Response?: UserUserSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/GetContentType/:type/': {
      $get: {
        input: { param: { type: string } }
        output: {
          Response?: ContentModelsContentTypeDescription | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/GetContentById/:id/:locale/': {
      $get: {
        input: { param: { id: bigint; locale: string } } & { query: { head?: boolean | undefined } }
        output: {
          Response?: ContentContentItemPublicContract | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/GetContentByTagAndType/:tag/:type/:locale/': {
      $get: {
        input: { param: { locale: string; tag: string; type: string } } & {
          query: { head?: boolean | undefined }
        }
        output: {
          Response?: ContentContentItemPublicContract | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/Search/:locale/': {
      $get: {
        input: { param: { locale: string } } & {
          query: {
            ctype?: string | undefined
            currentpage?: number | undefined
            head?: boolean | undefined
            searchtext?: string | undefined
            source?: string | undefined
            tag?: string | undefined
          }
        }
        output: {
          Response?: SearchResultOfContentItemPublicContract | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/SearchContentByTagAndType/:tag/:type/:locale/': {
      $get: {
        input: { param: { locale: string; tag: string; type: string } } & {
          query: {
            currentpage?: number | undefined
            head?: boolean | undefined
            itemsperpage?: number | undefined
          }
        }
        output: {
          Response?: SearchResultOfContentItemPublicContract | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/SearchHelpArticles/:searchtext/:size/': {
      $get: {
        input: { param: { searchtext: string; size: string } }
        output: {
          Response?: { [x: string]: unknown } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Content/Rss/NewsArticles/:pageToken/': {
      $get: {
        input: { param: { pageToken: string } } & {
          query: { categoryfilter?: string | undefined; includebody?: boolean | undefined }
        }
        output: {
          Response?: ContentNewsArticleRssResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetTopicsPaged/:page/:pageSize/:group/:sort/:quickDate/:categoryFilter/': {
      $get: {
        input: {
          param: {
            categoryFilter: number
            group: bigint
            page: number
            pageSize: number
            quickDate: number
            sort: number
          }
        } & { query: { locales?: string | undefined; tagstring?: string | undefined } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetCoreTopicsPaged/:page/:sort/:quickDate/:categoryFilter/': {
      $get: {
        input: {
          param: { categoryFilter: number; page: number; quickDate: number; sort: number }
        } & { query: { locales?: string | undefined } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetPostsThreadedPaged/:parentPostId/:page/:pageSize/:replySize/:getParentPost/:rootThreadMode/:sortMode/': {
      $get: {
        input: {
          param: {
            getParentPost: boolean
            page: number
            pageSize: number
            parentPostId: bigint
            replySize: number
            rootThreadMode: boolean
            sortMode: number
          }
        } & { query: { showbanned?: string | undefined } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetPostsThreadedPagedFromChild/:childPostId/:page/:pageSize/:replySize/:rootThreadMode/:sortMode/': {
      $get: {
        input: {
          param: {
            childPostId: bigint
            page: number
            pageSize: number
            replySize: number
            rootThreadMode: boolean
            sortMode: number
          }
        } & { query: { showbanned?: string | undefined } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetPostAndParent/:childPostId/': {
      $get: {
        input: { param: { childPostId: bigint } } & { query: { showbanned?: string | undefined } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetPostAndParentAwaitingApproval/:childPostId/': {
      $get: {
        input: { param: { childPostId: bigint } } & { query: { showbanned?: string | undefined } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetTopicForContent/:contentId/': {
      $get: {
        input: { param: { contentId: bigint } }
        output: {
          Response?: bigint | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/GetForumTagSuggestions/': {
      $get: {
        input: { query: { partialtag?: string | undefined } }
        output: {
          Response?: TagsModelsContractsTagResponse[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/Poll/:topicId/': {
      $get: {
        input: { param: { topicId: bigint } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Forum/Recruit/Summaries/': {
      $post: {
        input: { json: bigint[] }
        output: {
          Response?: ForumForumRecruitmentDetail[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/GetAvailableAvatars/': {
      $get: {
        input: {}
        output: {
          Response?: { [x: string]: string } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/GetAvailableThemes/': {
      $get: {
        input: {}
        output: {
          Response?: ConfigGroupTheme[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/GetUserClanInviteSetting/:mType/': {
      $get: {
        input: { param: { mType: number } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/Recommended/:groupType/:createDateRange/': {
      $post: {
        input: { param: { createDateRange: number; groupType: number } }
        output: {
          Response?: GroupsV2GroupV2Card[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/Search/': {
      $post: {
        input: { json: GroupsV2GroupQuery }
        output: {
          Response?: GroupsV2GroupSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          Response?: GroupsV2GroupResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/Name/:groupName/:groupType/': {
      $get: {
        input: { param: { groupName: string; groupType: number } }
        output: {
          Response?: GroupsV2GroupResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/NameV2/': {
      $post: {
        input: { json: GroupsV2GroupNameSearchRequest }
        output: {
          Response?: GroupsV2GroupResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/OptionalConversations/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          Response?: GroupsV2GroupOptionalConversation[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Edit/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2GroupEditAction }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/EditClanBanner/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2ClanBanner }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/EditFounderOptions/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2GroupOptionsEditAction }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/OptionalConversations/Add/': {
      $post: {
        input: { param: { groupId: bigint } } & {
          json: GroupsV2GroupOptionalConversationAddRequest
        }
        output: {
          Response?: bigint | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/OptionalConversations/Edit/:conversationId/': {
      $post: {
        input: { param: { conversationId: bigint; groupId: bigint } } & {
          json: GroupsV2GroupOptionalConversationEditRequest
        }
        output: {
          Response?: bigint | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/': {
      $get: {
        input: { param: { currentpage: number; groupId: bigint } } & {
          query: { memberType?: number | undefined; nameSearch?: string | undefined }
        }
        output: {
          Response?: SearchResultOfGroupMember | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/AdminsAndFounder/': {
      $get: {
        input: { param: { currentpage: number; groupId: bigint } }
        output: {
          Response?: SearchResultOfGroupMember | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/SetMembershipType/:memberType/': {
      $post: {
        input: {
          param: {
            groupId: bigint
            membershipId: bigint
            membershipType: number
            memberType: number
          }
        }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Kick/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          Response?: GroupsV2GroupMemberLeaveResult | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Ban/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } } & {
          json: GroupsV2GroupBanRequest
        }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Unban/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Banned/': {
      $get: {
        input: { param: { currentpage: number; groupId: bigint } }
        output: {
          Response?: SearchResultOfGroupBan | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/EditHistory/': {
      $get: {
        input: { param: { currentpage: number; groupId: bigint } }
        output: {
          Response?: SearchResultOfGroupEditHistory | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Admin/AbdicateFoundership/:membershipType/:founderIdNew/': {
      $post: {
        input: { param: { founderIdNew: bigint; groupId: bigint; membershipType: number } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/Pending/': {
      $get: {
        input: { param: { currentpage: number; groupId: bigint } }
        output: {
          Response?: SearchResultOfGroupMemberApplication | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/InvitedIndividuals/': {
      $get: {
        input: { param: { currentpage: number; groupId: bigint } }
        output: {
          Response?: SearchResultOfGroupMemberApplication | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/ApproveAll/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2GroupApplicationRequest }
        output: {
          Response?: EntitiesEntityActionResult[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/DenyAll/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2GroupApplicationRequest }
        output: {
          Response?: EntitiesEntityActionResult[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/ApproveList/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2GroupApplicationListRequest }
        output: {
          Response?: EntitiesEntityActionResult[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/Approve/:membershipType/:membershipId/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } } & {
          json: GroupsV2GroupApplicationRequest
        }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/DenyList/': {
      $post: {
        input: { param: { groupId: bigint } } & { json: GroupsV2GroupApplicationListRequest }
        output: {
          Response?: EntitiesEntityActionResult[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/User/:membershipType/:membershipId/:filter/:groupType/': {
      $get: {
        input: {
          param: { filter: number; groupType: number; membershipId: bigint; membershipType: number }
        }
        output: {
          Response?: GroupsV2GetGroupsForMemberResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/Recover/:membershipType/:membershipId/:groupType/': {
      $get: {
        input: { param: { groupType: number; membershipId: bigint; membershipType: number } }
        output: {
          Response?: GroupsV2GroupMembershipSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/User/Potential/:membershipType/:membershipId/:filter/:groupType/': {
      $get: {
        input: {
          param: { filter: number; groupType: number; membershipId: bigint; membershipType: number }
        }
        output: {
          Response?: GroupsV2GroupPotentialMembershipSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/IndividualInvite/:membershipType/:membershipId/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } } & {
          json: GroupsV2GroupApplicationRequest
        }
        output: {
          Response?: GroupsV2GroupApplicationResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/IndividualInviteCancel/:membershipType/:membershipId/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          Response?: GroupsV2GroupApplicationResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/ForceDropsRepair/': {
      $post: {
        input: {}
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/ClaimOffer/': {
      $post: {
        input: { json: TokensPartnerOfferClaimRequest }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/ApplyMissingOffers/:partnerApplicationId/:targetBnetMembershipId/': {
      $post: {
        input: { param: { partnerApplicationId: number; targetBnetMembershipId: bigint } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/History/:partnerApplicationId/:targetBnetMembershipId/': {
      $get: {
        input: { param: { partnerApplicationId: number; targetBnetMembershipId: bigint } }
        output: {
          Response?: TokensPartnerOfferSkuHistoryResponse[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/History/:targetBnetMembershipId/Application/:partnerApplicationId/': {
      $get: {
        input: { param: { partnerApplicationId: number; targetBnetMembershipId: bigint } }
        output: {
          Response?: TokensPartnerRewardHistoryResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Rewards/GetRewardsForUser/:membershipId/': {
      $get: {
        input: { param: { membershipId: bigint } }
        output: {
          Response?: { [x: string]: TokensBungieRewardDisplay } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Rewards/GetRewardsForPlatformUser/:membershipId/:membershipType/': {
      $get: {
        input: { param: { membershipId: bigint; membershipType: number } }
        output: {
          Response?: { [x: string]: TokensBungieRewardDisplay } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Tokens/Rewards/BungieRewards/': {
      $get: {
        input: {}
        output: {
          Response?: { [x: string]: TokensBungieRewardDisplay } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Manifest/': {
      $get: {
        input: {}
        output: {
          Response?: DestinyConfigDestinyManifest | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Manifest/:entityType/:hashIdentifier/': {
      $get: {
        input: { param: { entityType: string; hashIdentifier: number } }
        output: {
          Response?: DestinyDefinitionsDestinyDefinition | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/SearchDestinyPlayerByBungieName/:membershipType/': {
      $post: {
        input: { param: { membershipType: number } } & { json: UserExactSearchRequest }
        output: {
          Response?: UserUserInfoCard[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:membershipId/LinkedProfiles/': {
      $get: {
        input: { param: { membershipId: bigint; membershipType: number } } & {
          query: { getAllMemberships?: boolean | undefined }
        }
        output: {
          Response?: DestinyResponsesDestinyLinkedProfilesResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/': {
      $get: {
        input: { param: { destinyMembershipId: bigint; membershipType: number } } & {
          query: { components?: number[] | undefined }
        }
        output: {
          Response?: DestinyResponsesDestinyProfileResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        } & { query: { components?: number[] | undefined } }
        output: {
          Response?: DestinyResponsesDestinyCharacterResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Clan/:groupId/WeeklyRewardState/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          Response?: DestinyMilestonesDestinyMilestone | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Clan/ClanBannerDictionary/': {
      $get: {
        input: {}
        output: {
          Response?: ConfigClanBannerClanBannerSource | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Item/:itemInstanceId/': {
      $get: {
        input: {
          param: { destinyMembershipId: bigint; itemInstanceId: bigint; membershipType: number }
        } & { query: { components?: number[] | undefined } }
        output: {
          Response?: DestinyResponsesDestinyItemResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Vendors/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        } & { query: { components?: number[] | undefined; filter?: number | undefined } }
        output: {
          Response?: DestinyResponsesDestinyVendorsResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Vendors/:vendorHash/': {
      $get: {
        input: {
          param: {
            characterId: bigint
            destinyMembershipId: bigint
            membershipType: number
            vendorHash: number
          }
        } & { query: { components?: number[] | undefined } }
        output: {
          Response?: DestinyResponsesDestinyVendorResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Vendors/': {
      $get: {
        input: { query: { components?: number[] | undefined } }
        output: {
          Response?: DestinyResponsesDestinyPublicVendorsResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Profile/:destinyMembershipId/Character/:characterId/Collectibles/:collectiblePresentationNodeHash/': {
      $get: {
        input: {
          param: {
            characterId: bigint
            collectiblePresentationNodeHash: number
            destinyMembershipId: bigint
            membershipType: number
          }
        } & { query: { components?: number[] | undefined } }
        output: {
          Response?: DestinyResponsesDestinyCollectibleNodeDetailResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/TransferItem/': {
      $post: {
        input: { json: DestinyRequestsDestinyItemTransferRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/PullFromPostmaster/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyPostmasterTransferRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/EquipItem/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyItemActionRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/EquipItems/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyItemSetActionRequest }
        output: {
          Response?: DestinyDestinyEquipItemResults | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/EquipLoadout/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyLoadoutActionRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/SnapshotLoadout/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyLoadoutUpdateActionRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyLoadoutUpdateActionRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/ClearLoadout/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyLoadoutActionRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/SetLockState/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyItemStateRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/SetTrackedState/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyItemStateRequest }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/InsertSocketPlug/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyInsertPlugsActionRequest }
        output: {
          Response?: DestinyResponsesDestinyItemChangeResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/InsertSocketPlugFree/': {
      $post: {
        input: { json: DestinyRequestsActionsDestinyInsertPlugsFreeActionRequest }
        output: {
          Response?: DestinyResponsesDestinyItemChangeResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/PostGameCarnageReport/:activityId/': {
      $get: {
        input: { param: { activityId: bigint } }
        output: {
          Response?: DestinyHistoricalStatsDestinyPostGameCarnageReportData | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/PostGameCarnageReport/:activityId/Report/': {
      $post: {
        input: { param: { activityId: bigint } } & {
          json: DestinyReportingRequestsDestinyReportOffensePgcrRequest
        }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/Definition/': {
      $get: {
        input: {}
        output: {
          Response?:
            | { [x: string]: DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition }
            | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/Leaderboards/Clans/:groupId/': {
      $get: {
        input: { param: { groupId: bigint } } & {
          query: {
            maxtop?: number | undefined
            modes?: string | undefined
            statid?: string | undefined
          }
        }
        output: {
          Response?:
            | { [x: string]: { [x: string]: DestinyHistoricalStatsDestinyLeaderboard } }
            | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/AggregateClanStats/:groupId/': {
      $get: {
        input: { param: { groupId: bigint } } & { query: { modes?: string | undefined } }
        output: {
          Response?: DestinyHistoricalStatsDestinyClanAggregateStat[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Stats/Leaderboards/': {
      $get: {
        input: { param: { destinyMembershipId: bigint; membershipType: number } } & {
          query: {
            maxtop?: number | undefined
            modes?: string | undefined
            statid?: string | undefined
          }
        }
        output: {
          Response?:
            | { [x: string]: { [x: string]: DestinyHistoricalStatsDestinyLeaderboard } }
            | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/Leaderboards/:membershipType/:destinyMembershipId/:characterId/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        } & {
          query: {
            maxtop?: number | undefined
            modes?: string | undefined
            statid?: string | undefined
          }
        }
        output: {
          Response?:
            | { [x: string]: { [x: string]: DestinyHistoricalStatsDestinyLeaderboard } }
            | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Armory/Search/:type/:searchTerm/': {
      $get: {
        input: { param: { searchTerm: string; type: string } } & {
          query: { page?: number | undefined }
        }
        output: {
          Response?: DestinyDefinitionsDestinyEntitySearchResult | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        } & {
          query: {
            dayend?: string | undefined
            daystart?: string | undefined
            groups?: number[] | undefined
            modes?: number[] | undefined
            periodType?: number | undefined
          }
        }
        output: {
          Response?:
            | { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod }
            | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Stats/': {
      $get: {
        input: { param: { destinyMembershipId: bigint; membershipType: number } } & {
          query: { groups?: number[] | undefined }
        }
        output: {
          Response?: DestinyHistoricalStatsDestinyHistoricalStatsAccountResult | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/Activities/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        } & {
          query: {
            count?: number | undefined
            mode?: number | undefined
            page?: number | undefined
          }
        }
        output: {
          Response?: DestinyHistoricalStatsDestinyActivityHistoryResults | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/UniqueWeapons/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        }
        output: {
          Response?: DestinyHistoricalStatsDestinyHistoricalWeaponStatsData | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/:membershipType/Account/:destinyMembershipId/Character/:characterId/Stats/AggregateActivityStats/': {
      $get: {
        input: {
          param: { characterId: bigint; destinyMembershipId: bigint; membershipType: number }
        }
        output: {
          Response?: DestinyHistoricalStatsDestinyAggregateActivityResults | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Milestones/:milestoneHash/Content/': {
      $get: {
        input: { param: { milestoneHash: number } }
        output: {
          Response?: DestinyMilestonesDestinyMilestoneContent | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Milestones/': {
      $get: {
        input: {}
        output: {
          Response?: { [x: string]: DestinyMilestonesDestinyPublicMilestone } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Awa/Initialize/': {
      $post: {
        input: { json: DestinyAdvancedAwaPermissionRequested }
        output: {
          Response?: DestinyAdvancedAwaInitializeResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Awa/AwaProvideAuthorizationResult/': {
      $post: {
        input: { json: DestinyAdvancedAwaUserResponse }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Destiny2/Awa/GetActionToken/:correlationId/': {
      $get: {
        input: { param: { correlationId: string } }
        output: {
          Response?: DestinyAdvancedAwaAuthorizationResult | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CommunityContent/Get/:sort/:mediaFilter/:page/': {
      $get: {
        input: { param: { mediaFilter: number; page: number; sort: number } }
        output: {
          Response?: ForumPostSearchResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Trending/Categories/': {
      $get: {
        input: {}
        output: {
          Response?: TrendingTrendingCategories | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Trending/Categories/:categoryId/:pageNumber/': {
      $get: {
        input: { param: { categoryId: string; pageNumber: number } }
        output: {
          Response?: SearchResultOfTrendingEntry | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Trending/Details/:trendingEntryType/:identifier/': {
      $get: {
        input: { param: { identifier: string; trendingEntryType: number } }
        output: {
          Response?: TrendingTrendingDetail | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Fireteam/Clan/:groupId/ActiveCount/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          Response?: number | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Fireteam/Clan/:groupId/Available/:platform/:activityType/:dateRange/:slotFilter/:publicOnly/:page/': {
      $get: {
        input: {
          param: {
            activityType: number
            dateRange: number
            groupId: bigint
            page: number
            platform: number
            publicOnly: number
            slotFilter: number
          }
        } & { query: { excludeImmediate?: boolean | undefined; langFilter?: string | undefined } }
        output: {
          Response?: SearchResultOfFireteamSummary | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Fireteam/Search/Available/:platform/:activityType/:dateRange/:slotFilter/:page/': {
      $get: {
        input: {
          param: {
            activityType: number
            dateRange: number
            page: number
            platform: number
            slotFilter: number
          }
        } & { query: { excludeImmediate?: boolean | undefined; langFilter?: string | undefined } }
        output: {
          Response?: SearchResultOfFireteamSummary | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Fireteam/Clan/:groupId/My/:platform/:includeClosed/:page/': {
      $get: {
        input: {
          param: { groupId: bigint; includeClosed: boolean; page: number; platform: number }
        } & { query: { groupFilter?: boolean | undefined; langFilter?: string | undefined } }
        output: {
          Response?: SearchResultOfFireteamResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Fireteam/Clan/:groupId/Summary/:fireteamId/': {
      $get: {
        input: { param: { fireteamId: bigint; groupId: bigint } }
        output: {
          Response?: FireteamFireteamResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/': {
      $get: {
        input: {}
        output: {
          Response?: SocialFriendsBungieFriendListResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/': {
      $get: {
        input: {}
        output: {
          Response?: SocialFriendsBungieFriendRequestListResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Add/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/Accept/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/Decline/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Remove/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/Remove/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          Response?: boolean | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Social/PlatformFriends/:friendPlatform/:page/': {
      $get: {
        input: { param: { friendPlatform: number; page: string } }
        output: {
          Response?: SocialFriendsPlatformFriendResponse | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetAvailableLocales/': {
      $get: {
        input: {}
        output: {
          Response?: { [x: string]: string } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Settings/': {
      $get: {
        input: {}
        output: {
          Response?: CommonModelsCoreSettingsConfiguration | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/UserSystemOverrides/': {
      $get: {
        input: {}
        output: {
          Response?: { [x: string]: CommonModelsCoreSystem } | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GlobalAlerts/': {
      $get: {
        input: { query: { includestreaming?: boolean | undefined } }
        output: {
          Response?: GlobalAlert[] | undefined
          ErrorCode?: number | undefined
          ThrottleSeconds?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          DetailedErrorTrace?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
