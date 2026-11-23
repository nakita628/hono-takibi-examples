type ApplicationsDatapoint = { count?: number | undefined; time?: string | undefined }
type ApplicationsSeries = {
  datapoints?: ApplicationsDatapoint[] | undefined
  target?: string | undefined
}
type ApplicationsApiUsage = {
  apiCalls?: ApplicationsSeries[] | undefined
  throttledRequests?: ApplicationsSeries[] | undefined
}
type UserUserInfoCard = {
  applicableMembershipTypes?: number[] | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  crossSaveOverride?: number | undefined
  displayName?: string | undefined
  iconPath?: string | undefined
  isPublic?: boolean | undefined
  membershipId?: bigint | undefined
  membershipType?: number | undefined
  supplementalDisplayName?: string | undefined
}
type ApplicationsApplicationDeveloper = {
  apiEulaVersion?: number | undefined
  role?: number | undefined
  user?: UserUserInfoCard | undefined
}
type ApplicationsApplication = {
  applicationId?: number | undefined
  creationDate?: string | undefined
  firstPublished?: string | undefined
  link?: string | undefined
  name?: string | undefined
  origin?: string | undefined
  overrideAuthorizeViewName?: string | undefined
  redirectUrl?: string | undefined
  scope?: bigint | undefined
  status?: number | undefined
  statusChanged?: string | undefined
  team?: ApplicationsApplicationDeveloper[] | undefined
}
type IgnoresIgnoreResponse = { ignoreFlags?: number | undefined; isIgnored?: boolean | undefined }
type UserUserToUserContext = {
  globalIgnoreEndDate?: string | undefined
  ignoreStatus?: IgnoresIgnoreResponse | undefined
  isFollowing?: boolean | undefined
}
type UserGeneralUser = {
  about?: string | undefined
  blizzardDisplayName?: string | undefined
  cachedBungieGlobalDisplayName?: string | undefined
  cachedBungieGlobalDisplayNameCode?: number | undefined
  context?: UserUserToUserContext | undefined
  displayName?: string | undefined
  egsDisplayName?: string | undefined
  fbDisplayName?: string | undefined
  firstAccess?: string | undefined
  isDeleted?: boolean | undefined
  lastBanReportId?: bigint | undefined
  lastUpdate?: string | undefined
  legacyPortalUID?: bigint | undefined
  locale?: string | undefined
  localeInheritDefault?: boolean | undefined
  membershipId?: bigint | undefined
  normalizedName?: string | undefined
  profileBanExpire?: string | undefined
  profilePicture?: number | undefined
  profilePicturePath?: string | undefined
  profilePictureWidePath?: string | undefined
  profileTheme?: number | undefined
  profileThemeName?: string | undefined
  psnDisplayName?: string | undefined
  showActivity?: boolean | undefined
  showGroupMessaging?: boolean | undefined
  stadiaDisplayName?: string | undefined
  statusDate?: string | undefined
  statusText?: string | undefined
  steamDisplayName?: string | undefined
  successMessageFlags?: bigint | undefined
  twitchDisplayName?: string | undefined
  uniqueName?: string | undefined
  userTitle?: number | undefined
  userTitleDisplay?: string | undefined
  xboxDisplayName?: string | undefined
}
type GroupsV2GroupUserInfoCard = {
  LastSeenDisplayName?: string | undefined
  LastSeenDisplayNameType?: number | undefined
  applicableMembershipTypes?: number[] | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  crossSaveOverride?: number | undefined
  displayName?: string | undefined
  iconPath?: string | undefined
  isPublic?: boolean | undefined
  membershipId?: bigint | undefined
  membershipType?: number | undefined
  supplementalDisplayName?: string | undefined
}
type GroupsV2GroupMember = {
  bungieNetUserInfo?: UserUserInfoCard | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  groupId?: bigint | undefined
  isOnline?: boolean | undefined
  joinDate?: string | undefined
  lastOnlineStatusChange?: bigint | undefined
  memberType?: number | undefined
}
type GroupsV2GroupPotentialMember = {
  bungieNetUserInfo?: UserUserInfoCard | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  groupId?: bigint | undefined
  joinDate?: string | undefined
  potentialStatus?: number | undefined
}
type GroupsV2ClanBanner = {
  decalBackgroundColorId?: number | undefined
  decalColorId?: number | undefined
  decalId?: number | undefined
  gonfalonColorId?: number | undefined
  gonfalonDetailColorId?: number | undefined
  gonfalonDetailId?: number | undefined
  gonfalonId?: number | undefined
}
type DestinyDestinyProgressionResetEntry = {
  resets?: number | undefined
  season?: number | undefined
}
type DestinyDestinyProgression = {
  currentProgress?: number | undefined
  currentResetCount?: number | undefined
  dailyLimit?: number | undefined
  dailyProgress?: number | undefined
  level?: number | undefined
  levelCap?: number | undefined
  nextLevelAt?: number | undefined
  progressToNextLevel?: number | undefined
  progressionHash?: number | undefined
  rewardItemStates?: number[] | undefined
  seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
  stepIndex?: number | undefined
  weeklyLimit?: number | undefined
  weeklyProgress?: number | undefined
}
type GroupsV2GroupV2ClanInfoAndInvestment = {
  clanBannerData?: GroupsV2ClanBanner | undefined
  clanCallsign?: string | undefined
  d2ClanProgressions?: { [x: string]: DestinyDestinyProgression } | undefined
}
type GroupsV2GroupFeatures = {
  capabilities?: number | undefined
  hostGuidedGamePermissionOverride?: number | undefined
  invitePermissionOverride?: boolean | undefined
  joinLevel?: number | undefined
  maximumMembers?: number | undefined
  maximumMembershipsOfGroupType?: number | undefined
  membershipTypes?: number[] | undefined
  updateBannerPermissionOverride?: boolean | undefined
  updateCulturePermissionOverride?: boolean | undefined
}
type GroupsV2GroupV2 = {
  about?: string | undefined
  allowChat?: boolean | undefined
  avatarImageIndex?: number | undefined
  avatarPath?: string | undefined
  banExpireDate?: string | undefined
  bannerPath?: string | undefined
  chatSecurity?: number | undefined
  clanInfo?: GroupsV2GroupV2ClanInfoAndInvestment | undefined
  conversationId?: bigint | undefined
  creationDate?: string | undefined
  defaultPublicity?: number | undefined
  enableInvitationMessagingForAdmins?: boolean | undefined
  features?: GroupsV2GroupFeatures | undefined
  groupId?: bigint | undefined
  groupType?: number | undefined
  homepage?: number | undefined
  isDefaultPostPublic?: boolean | undefined
  isPublic?: boolean | undefined
  isPublicTopicAdminOnly?: boolean | undefined
  locale?: string | undefined
  memberCount?: number | undefined
  membershipIdCreated?: bigint | undefined
  membershipOption?: number | undefined
  modificationDate?: string | undefined
  motto?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
  theme?: string | undefined
}
type GroupsV2GroupResponse = {
  allianceStatus?: number | undefined
  alliedIds?: bigint[] | undefined
  currentUserMemberMap?: { [x: string]: GroupsV2GroupMember } | undefined
  currentUserMembershipsInactiveForDestiny?: boolean | undefined
  currentUserPotentialMemberMap?: { [x: string]: GroupsV2GroupPotentialMember } | undefined
  detail?: GroupsV2GroupV2 | undefined
  founder?: GroupsV2GroupMember | undefined
  groupJoinInviteCount?: number | undefined
  parentGroup?: GroupsV2GroupV2 | undefined
}
type ForumPollResult = {
  answerSlot?: number | undefined
  answerText?: string | undefined
  lastVoteDate?: string | undefined
  requestingUserVoted?: boolean | undefined
  votes?: number | undefined
}
type ForumPollResponse = {
  results?: ForumPollResult[] | undefined
  topicId?: bigint | undefined
  totalVotes?: number | undefined
}
type QueriesPagedQuery = {
  currentPage?: number | undefined
  itemsPerPage?: number | undefined
  requestContinuationToken?: string | undefined
}
type ForumForumRecruitmentDetail = {
  Fireteam?: UserGeneralUser[] | undefined
  approved?: boolean | undefined
  conversationId?: bigint | undefined
  intensity?: number | undefined
  kickedPlayerIds?: bigint[] | undefined
  microphoneRequired?: boolean | undefined
  playerSlotsRemaining?: number | undefined
  playerSlotsTotal?: number | undefined
  tone?: number | undefined
  topicId?: bigint | undefined
}
type ForumPostResponse = {
  IsPinned?: boolean | undefined
  ignoreStatus?: IgnoresIgnoreResponse | undefined
  isActive?: boolean | undefined
  isAnnouncement?: boolean | undefined
  lastReplyTimestamp?: string | undefined
  latestReplyAuthorId?: bigint | undefined
  latestReplyPostId?: bigint | undefined
  locale?: string | undefined
  popularity?: number | undefined
  thumbnail?: string | undefined
  urlMediaType?: number | undefined
  userHasMutedPost?: boolean | undefined
  userHasRated?: boolean | undefined
  userRating?: number | undefined
}
type TagsModelsContractsTagResponse = {
  ignoreStatus?: IgnoresIgnoreResponse | undefined
  tagText?: string | undefined
}
type ForumPostSearchResponse = {
  authors?: UserGeneralUser[] | undefined
  availablePages?: number | undefined
  groups?: GroupsV2GroupResponse[] | undefined
  hasMore?: boolean | undefined
  polls?: ForumPollResponse[] | undefined
  query?: QueriesPagedQuery | undefined
  recruitmentDetails?: ForumForumRecruitmentDetail[] | undefined
  relatedPosts?: ForumPostResponse[] | undefined
  replacementContinuationToken?: string | undefined
  results?: ForumPostResponse[] | undefined
  searchedTags?: TagsModelsContractsTagResponse[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type ContentCommentSummary = { commentCount?: number | undefined; topicId?: bigint | undefined }
type ContentContentRepresentation = {
  name?: string | undefined
  path?: string | undefined
  validationString?: string | undefined
}
type ContentContentItemPublicContract = {
  allowComments?: boolean | undefined
  author?: UserGeneralUser | undefined
  autoEnglishPropertyFallback?: boolean | undefined
  cType?: string | undefined
  cmsPath?: string | undefined
  commentSummary?: ContentCommentSummary | undefined
  contentId?: bigint | undefined
  creationDate?: string | undefined
  hasAgeGate?: boolean | undefined
  minimumAge?: number | undefined
  modifyDate?: string | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
  ratingImagePath?: string | undefined
  representations?: ContentContentRepresentation[] | undefined
  tags?: string[] | undefined
}
type ContentModelsContentPreview = {
  itemInSet?: boolean | undefined
  name?: string | undefined
  path?: string | undefined
  setNesting?: number | undefined
  setTag?: string | undefined
  useSetId?: number | undefined
}
type ContentModelsContentTypeDefaultValue = {
  defaultValue?: string | undefined
  whenClause?: string | undefined
  whenValue?: string | undefined
}
type ContentModelsContentTypeProperty = {
  attributes?: { [x: string]: string } | undefined
  bindToProperty?: string | undefined
  boundRegex?: string | undefined
  childProperties?: ContentModelsContentTypeProperty[] | undefined
  contentTypeAllowed?: string | undefined
  datatype?: number | undefined
  defaultValues?: ContentModelsContentTypeDefaultValue[] | undefined
  enabled?: boolean | undefined
  entitytype?: string | undefined
  fallback?: boolean | undefined
  isCombo?: boolean | undefined
  isExternalAllowed?: boolean | undefined
  isImage?: boolean | undefined
  isTitle?: boolean | undefined
  isVideo?: boolean | undefined
  legalContentTypes?: string[] | undefined
  localizable?: boolean | undefined
  maxByteLength?: number | undefined
  maxFileSize?: number | undefined
  maxHeight?: number | undefined
  maxLength?: number | undefined
  maxWidth?: number | undefined
  minHeight?: number | undefined
  minWidth?: number | undefined
  name?: string | undefined
  order?: number | undefined
  propertyDescription?: string | undefined
  propertySection?: string | undefined
  readableName?: string | undefined
  regexp?: string | undefined
  representationSelection?: { [x: string]: string } | undefined
  representationValidationString?: string | undefined
  required?: boolean | undefined
  rootPropertyName?: string | undefined
  rssAttribute?: string | undefined
  suppressProperty?: boolean | undefined
  validateAs?: string | undefined
  value?: string | undefined
  visible?: boolean | undefined
  visibleDependency?: string | undefined
  visibleOn?: string | undefined
  weight?: number | undefined
}
type ContentModelsContentTypePropertySection = {
  collapsed?: boolean | undefined
  name?: string | undefined
  readableName?: string | undefined
}
type ContentModelsTagMetadataItem = {
  description?: string | undefined
  groups?: string[] | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
  tagText?: string | undefined
}
type ContentModelsTagMetadataDefinition = {
  datatype?: string | undefined
  description?: string | undefined
  isRequired?: boolean | undefined
  items?: ContentModelsTagMetadataItem[] | undefined
  name?: string | undefined
  order?: number | undefined
}
type ContentModelsContentTypeDescription = {
  allowComments?: boolean | undefined
  autoEnglishPropertyFallback?: boolean | undefined
  bindIdentifierToProperty?: string | undefined
  boundRegex?: string | undefined
  bulkUploadable?: boolean | undefined
  cType?: string | undefined
  contentDescription?: string | undefined
  forceIdentifierBinding?: boolean | undefined
  name?: string | undefined
  previewImage?: string | undefined
  previews?: ContentModelsContentPreview[] | undefined
  priority?: number | undefined
  properties?: ContentModelsContentTypeProperty[] | undefined
  propertySections?: ContentModelsContentTypePropertySection[] | undefined
  reminder?: string | undefined
  showInContentEditor?: boolean | undefined
  suppressCmsPath?: boolean | undefined
  tagMetadata?: ContentModelsTagMetadataDefinition[] | undefined
  tagMetadataItems?: { [x: string]: ContentModelsTagMetadataItem } | undefined
  typeOf?: string | undefined
  usageExamples?: string[] | undefined
}
type ContentNewsArticleRssItem = {
  Description?: string | undefined
  HtmlContent?: string | undefined
  ImagePath?: string | undefined
  Link?: string | undefined
  OptionalMobileImagePath?: string | undefined
  PubDate?: string | undefined
  Title?: string | undefined
  UniqueIdentifier?: string | undefined
}
type ContentNewsArticleRssResponse = {
  CategoryFilter?: string | undefined
  CurrentPaginationToken?: number | undefined
  NewsArticles?: ContentNewsArticleRssItem[] | undefined
  NextPaginationToken?: number | undefined
  ResultCountThisPage?: number | undefined
}
type SearchResultOfContentItemPublicContract = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: ContentContentItemPublicContract[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type DestinyDestinyEquipItemResult = {
  equipStatus?: number | undefined
  itemInstanceId?: bigint | undefined
}
type DestinyDestinyEquipItemResults = { equipResults?: DestinyDestinyEquipItemResult[] | undefined }
type DestinyEntitiesItemsDestinyItemComponent = {
  bindStatus?: number | undefined
  bucketHash?: number | undefined
  expirationDate?: string | undefined
  isWrapper?: boolean | undefined
  itemHash?: number | undefined
  itemInstanceId?: bigint | undefined
  itemValueVisibility?: boolean[] | undefined
  location?: number | undefined
  lockable?: boolean | undefined
  metricHash?: number | undefined
  metricObjective?:
    | {
        activityHash?: number | undefined
        complete?: boolean | undefined
        completionValue?: number | undefined
        destinationHash?: number | undefined
        objectiveHash?: number | undefined
        progress?: number | undefined
        visible?: boolean | undefined
      }
    | undefined
  overrideStyleItemHash?: number | undefined
  quantity?: number | undefined
  state?: number | undefined
  tooltipNotificationIndexes?: number[] | undefined
  transferStatus?: number | undefined
  versionNumber?: number | undefined
}
type DestinyEntitiesItemsDestinyItemInstanceComponent = {
  breakerType?: '0' | '1' | '2' | '3' | undefined
  breakerTypeHash?: number | undefined
  canEquip?: boolean | undefined
  cannotEquipReason?: number | undefined
  damageType?: number | undefined
  damageTypeHash?: number | undefined
  energy?:
    | {
        energyCapacity?: number | undefined
        energyType?: number | undefined
        energyTypeHash?: number | undefined
        energyUnused?: number | undefined
        energyUsed?: number | undefined
      }
    | undefined
  equipRequiredLevel?: number | undefined
  isEquipped?: boolean | undefined
  itemLevel?: number | undefined
  primaryStat?: { statHash?: number | undefined; value?: number | undefined } | undefined
  quality?: number | undefined
  unlockHashesRequiredToEquip?: number[] | undefined
}
type DestinyQuestsDestinyObjectiveProgress = {
  activityHash?: number | undefined
  complete?: boolean | undefined
  completionValue?: number | undefined
  destinationHash?: number | undefined
  objectiveHash?: number | undefined
  progress?: number | undefined
  visible?: boolean | undefined
}
type DestinyEntitiesItemsDestinyItemObjectivesComponent = {
  dateCompleted?: string | undefined
  flavorObjective?:
    | {
        activityHash?: number | undefined
        complete?: boolean | undefined
        completionValue?: number | undefined
        destinationHash?: number | undefined
        objectiveHash?: number | undefined
        progress?: number | undefined
        visible?: boolean | undefined
      }
    | undefined
  objectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
}
type DestinyPerksDestinyPerkReference = {
  iconPath?: string | undefined
  isActive?: boolean | undefined
  perkHash?: number | undefined
  visible?: boolean | undefined
}
type DestinyEntitiesItemsDestinyItemPerksComponent = {
  perks?: DestinyPerksDestinyPerkReference[] | undefined
}
type DestinyComponentsItemsDestinyItemPlugObjectivesComponent = {
  objectivesPerPlug?: { [x: string]: DestinyQuestsDestinyObjectiveProgress[] } | undefined
}
type DestinyEntitiesItemsDestinyItemRenderComponent = {
  artRegions?: { [x: string]: number } | undefined
  useCustomDyes?: boolean | undefined
}
type DestinySocketsDestinyItemPlugBase = {
  canInsert?: boolean | undefined
  enableFailIndexes?: number[] | undefined
  enabled?: boolean | undefined
  insertFailIndexes?: number[] | undefined
  plugItemHash?: number | undefined
}
type DestinyComponentsItemsDestinyItemReusablePlugsComponent = {
  plugs?: { [x: string]: DestinySocketsDestinyItemPlugBase[] } | undefined
}
type DestinyEntitiesItemsDestinyItemSocketState = {
  enableFailIndexes?: number[] | undefined
  isEnabled?: boolean | undefined
  isVisible?: boolean | undefined
  plugHash?: number | undefined
}
type DestinyEntitiesItemsDestinyItemSocketsComponent = {
  sockets?: DestinyEntitiesItemsDestinyItemSocketState[] | undefined
}
type DestinyDestinyStat = { statHash?: number | undefined; value?: number | undefined }
type DestinyEntitiesItemsDestinyItemStatsComponent = {
  stats?: { [x: string]: DestinyDestinyStat } | undefined
}
type DestinyDefinitionsDestinyMaterialRequirement = {
  count?: number | undefined
  countIsConstant?: boolean | undefined
  deleteOnAction?: boolean | undefined
  itemHash?: number | undefined
  omitFromRequirements?: boolean | undefined
}
type DestinyDestinyTalentNode = {
  activationGridLevel?: number | undefined
  hidden?: boolean | undefined
  isActivated?: boolean | undefined
  materialsToUpgrade?: DestinyDefinitionsDestinyMaterialRequirement[] | undefined
  nodeHash?: number | undefined
  nodeIndex?: number | undefined
  nodeStatsBlock?:
    | {
        currentStepStats?: DestinyDestinyStat[] | undefined
        nextStepStats?: DestinyDestinyStat[] | undefined
      }
    | undefined
  progressPercent?: number | undefined
  state?: number | undefined
  stepIndex?: number | undefined
}
type DestinyEntitiesItemsDestinyItemTalentGridComponent = {
  gridProgression?:
    | {
        currentProgress?: number | undefined
        currentResetCount?: number | undefined
        dailyLimit?: number | undefined
        dailyProgress?: number | undefined
        level?: number | undefined
        levelCap?: number | undefined
        nextLevelAt?: number | undefined
        progressToNextLevel?: number | undefined
        progressionHash?: number | undefined
        rewardItemStates?: number[] | undefined
        seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
        stepIndex?: number | undefined
        weeklyLimit?: number | undefined
        weeklyProgress?: number | undefined
      }
    | undefined
  isGridComplete?: boolean | undefined
  nodes?: DestinyDestinyTalentNode[] | undefined
  talentGridHash?: number | undefined
}
type DestinyResponsesDestinyItemResponse = {
  characterId?: bigint | undefined
  instance?:
    | {
        data?: DestinyEntitiesItemsDestinyItemInstanceComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  item?:
    | {
        data?: DestinyEntitiesItemsDestinyItemComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  objectives?:
    | {
        data?: DestinyEntitiesItemsDestinyItemObjectivesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  perks?:
    | {
        data?: DestinyEntitiesItemsDestinyItemPerksComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  plugObjectives?:
    | {
        data?: DestinyComponentsItemsDestinyItemPlugObjectivesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  renderData?:
    | {
        data?: DestinyEntitiesItemsDestinyItemRenderComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  reusablePlugs?:
    | {
        data?: DestinyComponentsItemsDestinyItemReusablePlugsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  sockets?:
    | {
        data?: DestinyEntitiesItemsDestinyItemSocketsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  stats?:
    | {
        data?: DestinyEntitiesItemsDestinyItemStatsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  talentGrid?:
    | {
        data?: DestinyEntitiesItemsDestinyItemTalentGridComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
}
type DestinyResponsesDestinyItemChangeResponse = {
  addedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[] | undefined
  item?: DestinyResponsesDestinyItemResponse | undefined
  removedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[] | undefined
}
type DestinyDefinitionsCommonDestinyIconSequenceDefinition = { frames?: string[] | undefined }
type DestinyDefinitionsDestinyEntitySearchResultItem = {
  displayProperties?:
    | {
        description?: string | undefined
        hasIcon?: boolean | undefined
        highResIcon?: string | undefined
        icon?: string | undefined
        iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[] | undefined
        name?: string | undefined
      }
    | undefined
  entityType?: string | undefined
  hash?: number | undefined
  weight?: number | undefined
}
type DestinyDefinitionsDestinyEntitySearchResult = {
  results?:
    | {
        hasMore?: boolean | undefined
        query?: QueriesPagedQuery | undefined
        replacementContinuationToken?: string | undefined
        results?: DestinyDefinitionsDestinyEntitySearchResultItem[] | undefined
        totalResults?: number | undefined
        useTotalResults?: boolean | undefined
      }
    | undefined
  suggestedWords?: string[] | undefined
}
type DestinyAdvancedAwaAuthorizationResult = {
  actionToken?: string | undefined
  developerNote?: string | undefined
  maximumNumberOfUses?: number | undefined
  membershipType?: number | undefined
  responseReason?: number | undefined
  type?: number | undefined
  userSelection?: number | undefined
  validUntil?: string | undefined
}
type DestinyAdvancedAwaInitializeResponse = {
  correlationId?: string | undefined
  sentToSelf?: boolean | undefined
}
type ConfigClanBannerClanBannerSource = { [x: string]: unknown }
type DestinyChallengesDestinyChallengeStatus = {
  objective?:
    | {
        activityHash?: number | undefined
        complete?: boolean | undefined
        completionValue?: number | undefined
        destinationHash?: number | undefined
        objectiveHash?: number | undefined
        progress?: number | undefined
        visible?: boolean | undefined
      }
    | undefined
}
type DestinyMilestonesDestinyMilestoneActivityPhase = {
  complete?: boolean | undefined
  phaseHash?: number | undefined
}
type DestinyMilestonesDestinyMilestoneChallengeActivity = {
  activityHash?: number | undefined
  booleanActivityOptions?: { [x: string]: boolean } | undefined
  challenges?: DestinyChallengesDestinyChallengeStatus[] | undefined
  loadoutRequirementIndex?: number | undefined
  modifierHashes?: number[] | undefined
  phases?: DestinyMilestonesDestinyMilestoneActivityPhase[] | undefined
}
type DestinyMilestonesDestinyMilestoneActivityVariant = {
  activityHash?: number | undefined
  activityModeHash?: number | undefined
  activityModeType?:
    | '0'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '60'
    | '61'
    | '62'
    | '63'
    | '64'
    | '65'
    | '66'
    | '67'
    | '68'
    | '69'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '84'
    | '85'
    | '86'
    | '87'
    | '88'
    | '89'
    | '90'
    | '91'
    | undefined
  completionStatus?:
    | {
        completed?: boolean | undefined
        phases?: DestinyMilestonesDestinyMilestoneActivityPhase[] | undefined
      }
    | undefined
}
type DestinyMilestonesDestinyMilestoneQuest = {
  activity?:
    | {
        activityHash?: number | undefined
        activityModeHash?: number | undefined
        activityModeType?:
          | '0'
          | '2'
          | '3'
          | '4'
          | '5'
          | '6'
          | '7'
          | '9'
          | '10'
          | '11'
          | '12'
          | '13'
          | '15'
          | '16'
          | '17'
          | '18'
          | '19'
          | '20'
          | '21'
          | '22'
          | '24'
          | '25'
          | '26'
          | '27'
          | '28'
          | '29'
          | '30'
          | '31'
          | '32'
          | '37'
          | '38'
          | '39'
          | '40'
          | '41'
          | '42'
          | '43'
          | '44'
          | '45'
          | '46'
          | '47'
          | '48'
          | '49'
          | '50'
          | '51'
          | '52'
          | '53'
          | '54'
          | '55'
          | '56'
          | '57'
          | '58'
          | '59'
          | '60'
          | '61'
          | '62'
          | '63'
          | '64'
          | '65'
          | '66'
          | '67'
          | '68'
          | '69'
          | '70'
          | '71'
          | '72'
          | '73'
          | '74'
          | '75'
          | '76'
          | '77'
          | '78'
          | '79'
          | '80'
          | '81'
          | '82'
          | '83'
          | '84'
          | '85'
          | '86'
          | '87'
          | '88'
          | '89'
          | '90'
          | '91'
          | undefined
        modifierHashes?: number[] | undefined
        variants?: DestinyMilestonesDestinyMilestoneActivityVariant[] | undefined
      }
    | undefined
  challenges?: DestinyChallengesDestinyChallengeStatus[] | undefined
  questItemHash?: number | undefined
  status?:
    | {
        completed?: boolean | undefined
        itemInstanceId?: bigint | undefined
        questHash?: number | undefined
        redeemed?: boolean | undefined
        started?: boolean | undefined
        stepHash?: number | undefined
        stepObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
        tracked?: boolean | undefined
        vendorHash?: number | undefined
      }
    | undefined
}
type DestinyMilestonesDestinyMilestoneRewardEntry = {
  earned?: boolean | undefined
  redeemed?: boolean | undefined
  rewardEntryHash?: number | undefined
}
type DestinyMilestonesDestinyMilestoneRewardCategory = {
  entries?: DestinyMilestonesDestinyMilestoneRewardEntry[] | undefined
  rewardCategoryHash?: number | undefined
}
type DestinyMilestonesDestinyMilestoneVendor = {
  previewItemHash?: number | undefined
  vendorHash?: number | undefined
}
type DestinyMilestonesDestinyMilestone = {
  activities?: DestinyMilestonesDestinyMilestoneChallengeActivity[] | undefined
  availableQuests?: DestinyMilestonesDestinyMilestoneQuest[] | undefined
  endDate?: string | undefined
  milestoneHash?: number | undefined
  order?: number | undefined
  rewards?: DestinyMilestonesDestinyMilestoneRewardCategory[] | undefined
  startDate?: string | undefined
  values?: { [x: string]: number } | undefined
  vendorHashes?: number[] | undefined
  vendors?: DestinyMilestonesDestinyMilestoneVendor[] | undefined
}
type DestinyConfigImagePyramidEntry = { factor?: number | undefined; name?: string | undefined }
type DestinyConfigGearAssetDataBaseDefinition = {
  path?: string | undefined
  version?: number | undefined
}
type DestinyConfigDestinyManifest = {
  iconImagePyramidInfo?: DestinyConfigImagePyramidEntry[] | undefined
  jsonWorldComponentContentPaths?: { [x: string]: { [x: string]: string } } | undefined
  jsonWorldContentPaths?: { [x: string]: string } | undefined
  mobileAssetContentPath?: string | undefined
  mobileClanBannerDatabasePath?: string | undefined
  mobileGearAssetDataBases?: DestinyConfigGearAssetDataBaseDefinition[] | undefined
  mobileGearCDN?: { [x: string]: string } | undefined
  mobileWorldContentPaths?: { [x: string]: string } | undefined
  version?: string | undefined
}
type DestinyDefinitionsDestinyDefinition = {
  hash?: number | undefined
  index?: number | undefined
  redacted?: boolean | undefined
}
type DestinyMilestonesDestinyPublicMilestoneChallengeActivity = {
  activityHash?: number | undefined
  booleanActivityOptions?: { [x: string]: boolean } | undefined
  challengeObjectiveHashes?: number[] | undefined
  loadoutRequirementIndex?: number | undefined
  modifierHashes?: number[] | undefined
  phaseHashes?: number[] | undefined
}
type DestinyMilestonesDestinyPublicMilestoneActivityVariant = {
  activityHash?: number | undefined
  activityModeHash?: number | undefined
  activityModeType?:
    | '0'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '60'
    | '61'
    | '62'
    | '63'
    | '64'
    | '65'
    | '66'
    | '67'
    | '68'
    | '69'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '84'
    | '85'
    | '86'
    | '87'
    | '88'
    | '89'
    | '90'
    | '91'
    | undefined
}
type DestinyMilestonesDestinyPublicMilestoneChallenge = {
  activityHash?: number | undefined
  objectiveHash?: number | undefined
}
type DestinyMilestonesDestinyPublicMilestoneQuest = {
  activity?:
    | {
        activityHash?: number | undefined
        activityModeHash?: number | undefined
        activityModeType?:
          | '0'
          | '2'
          | '3'
          | '4'
          | '5'
          | '6'
          | '7'
          | '9'
          | '10'
          | '11'
          | '12'
          | '13'
          | '15'
          | '16'
          | '17'
          | '18'
          | '19'
          | '20'
          | '21'
          | '22'
          | '24'
          | '25'
          | '26'
          | '27'
          | '28'
          | '29'
          | '30'
          | '31'
          | '32'
          | '37'
          | '38'
          | '39'
          | '40'
          | '41'
          | '42'
          | '43'
          | '44'
          | '45'
          | '46'
          | '47'
          | '48'
          | '49'
          | '50'
          | '51'
          | '52'
          | '53'
          | '54'
          | '55'
          | '56'
          | '57'
          | '58'
          | '59'
          | '60'
          | '61'
          | '62'
          | '63'
          | '64'
          | '65'
          | '66'
          | '67'
          | '68'
          | '69'
          | '70'
          | '71'
          | '72'
          | '73'
          | '74'
          | '75'
          | '76'
          | '77'
          | '78'
          | '79'
          | '80'
          | '81'
          | '82'
          | '83'
          | '84'
          | '85'
          | '86'
          | '87'
          | '88'
          | '89'
          | '90'
          | '91'
          | undefined
        modifierHashes?: number[] | undefined
        variants?: DestinyMilestonesDestinyPublicMilestoneActivityVariant[] | undefined
      }
    | undefined
  challenges?: DestinyMilestonesDestinyPublicMilestoneChallenge[] | undefined
  questItemHash?: number | undefined
}
type DestinyMilestonesDestinyPublicMilestoneVendor = {
  previewItemHash?: number | undefined
  vendorHash?: number | undefined
}
type DestinyMilestonesDestinyPublicMilestone = {
  activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[] | undefined
  availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[] | undefined
  endDate?: string | undefined
  milestoneHash?: number | undefined
  order?: number | undefined
  startDate?: string | undefined
  vendorHashes?: number[] | undefined
  vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[] | undefined
}
type DestinyMilestonesDestinyMilestoneContentItemCategory = {
  itemHashes?: number[] | undefined
  title?: string | undefined
}
type DestinyMilestonesDestinyMilestoneContent = {
  about?: string | undefined
  itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[] | undefined
  status?: string | undefined
  tips?: string[] | undefined
}
type DestinyHistoricalStatsDestinyClanAggregateStat = {
  mode?: number | undefined
  statId?: string | undefined
  value?:
    | {
        activityId?: bigint | undefined
        basic?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        pga?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        statId?: string | undefined
        weighted?: { displayValue?: string | undefined; value?: number | undefined } | undefined
      }
    | undefined
}
type DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition = {
  category?: number | undefined
  group?: number | undefined
  iconImage?: string | undefined
  medalTierHash?: number | undefined
  mergeMethod?: '0' | '1' | '2' | undefined
  modes?: number[] | undefined
  periodTypes?: number[] | undefined
  statDescription?: string | undefined
  statId?: string | undefined
  statName?: string | undefined
  statNameAbbr?: string | undefined
  unitLabel?: string | undefined
  unitType?: number | undefined
  weight?: number | undefined
}
type DestinyHistoricalStatsDestinyLeaderboardEntry = {
  characterId?: bigint | undefined
  player?:
    | {
        bungieNetUserInfo?:
          | {
              applicableMembershipTypes?: number[] | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: number | undefined
              crossSaveOverride?: number | undefined
              displayName?: string | undefined
              iconPath?: string | undefined
              isPublic?: boolean | undefined
              membershipId?: bigint | undefined
              membershipType?: number | undefined
              supplementalDisplayName?: string | undefined
            }
          | undefined
        characterClass?: string | undefined
        characterLevel?: number | undefined
        clanName?: string | undefined
        clanTag?: string | undefined
        classHash?: number | undefined
        destinyUserInfo?:
          | {
              applicableMembershipTypes?: number[] | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: number | undefined
              crossSaveOverride?: number | undefined
              displayName?: string | undefined
              iconPath?: string | undefined
              isPublic?: boolean | undefined
              membershipId?: bigint | undefined
              membershipType?: number | undefined
              supplementalDisplayName?: string | undefined
            }
          | undefined
        emblemHash?: number | undefined
        genderHash?: number | undefined
        lightLevel?: number | undefined
        raceHash?: number | undefined
      }
    | undefined
  rank?: number | undefined
  value?:
    | {
        activityId?: bigint | undefined
        basic?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        pga?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        statId?: string | undefined
        weighted?: { displayValue?: string | undefined; value?: number | undefined } | undefined
      }
    | undefined
}
type DestinyHistoricalStatsDestinyLeaderboard = {
  entries?: DestinyHistoricalStatsDestinyLeaderboardEntry[] | undefined
  statId?: string | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsValue = {
  activityId?: bigint | undefined
  basic?: { displayValue?: string | undefined; value?: number | undefined } | undefined
  pga?: { displayValue?: string | undefined; value?: number | undefined } | undefined
  statId?: string | undefined
  weighted?: { displayValue?: string | undefined; value?: number | undefined } | undefined
}
type DestinyHistoricalStatsDestinyHistoricalWeaponStats = {
  referenceId?: number | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
}
type DestinyHistoricalStatsDestinyPostGameCarnageReportEntry = {
  characterId?: bigint | undefined
  extended?:
    | {
        values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
        weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[] | undefined
      }
    | undefined
  player?:
    | {
        bungieNetUserInfo?:
          | {
              applicableMembershipTypes?: number[] | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: number | undefined
              crossSaveOverride?: number | undefined
              displayName?: string | undefined
              iconPath?: string | undefined
              isPublic?: boolean | undefined
              membershipId?: bigint | undefined
              membershipType?: number | undefined
              supplementalDisplayName?: string | undefined
            }
          | undefined
        characterClass?: string | undefined
        characterLevel?: number | undefined
        clanName?: string | undefined
        clanTag?: string | undefined
        classHash?: number | undefined
        destinyUserInfo?:
          | {
              applicableMembershipTypes?: number[] | undefined
              bungieGlobalDisplayName?: string | undefined
              bungieGlobalDisplayNameCode?: number | undefined
              crossSaveOverride?: number | undefined
              displayName?: string | undefined
              iconPath?: string | undefined
              isPublic?: boolean | undefined
              membershipId?: bigint | undefined
              membershipType?: number | undefined
              supplementalDisplayName?: string | undefined
            }
          | undefined
        emblemHash?: number | undefined
        genderHash?: number | undefined
        lightLevel?: number | undefined
        raceHash?: number | undefined
      }
    | undefined
  score?:
    | {
        activityId?: bigint | undefined
        basic?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        pga?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        statId?: string | undefined
        weighted?: { displayValue?: string | undefined; value?: number | undefined } | undefined
      }
    | undefined
  standing?: number | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
}
type DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry = {
  score?:
    | {
        activityId?: bigint | undefined
        basic?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        pga?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        statId?: string | undefined
        weighted?: { displayValue?: string | undefined; value?: number | undefined } | undefined
      }
    | undefined
  standing?:
    | {
        activityId?: bigint | undefined
        basic?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        pga?: { displayValue?: string | undefined; value?: number | undefined } | undefined
        statId?: string | undefined
        weighted?: { displayValue?: string | undefined; value?: number | undefined } | undefined
      }
    | undefined
  teamId?: number | undefined
  teamName?: string | undefined
}
type DestinyHistoricalStatsDestinyPostGameCarnageReportData = {
  activityDetails?:
    | {
        directorActivityHash?: number | undefined
        instanceId?: bigint | undefined
        isPrivate?: boolean | undefined
        membershipType?: number | undefined
        mode?: number | undefined
        modes?: number[] | undefined
        referenceId?: number | undefined
      }
    | undefined
  activityWasStartedFromBeginning?: boolean | undefined
  entries?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntry[] | undefined
  period?: string | undefined
  startingPhaseIndex?: number | undefined
  teams?: DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry[] | undefined
}
type DestinyEntitiesVendorsDestinyVendorCategory = {
  displayCategoryIndex?: number | undefined
  itemIndexes?: number[] | undefined
}
type DestinyEntitiesVendorsDestinyVendorCategoriesComponent = {
  categories?: DestinyEntitiesVendorsDestinyVendorCategory[] | undefined
}
type DestinyDestinyItemQuantity = {
  hasConditionalVisibility?: boolean | undefined
  itemHash?: number | undefined
  itemInstanceId?: bigint | undefined
  quantity?: number | undefined
}
type DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent = {
  apiPurchasable?: boolean | undefined
  costs?: DestinyDestinyItemQuantity[] | undefined
  itemHash?: number | undefined
  overrideNextRefreshDate?: string | undefined
  overrideStyleItemHash?: number | undefined
  quantity?: number | undefined
  vendorItemIndex?: number | undefined
}
type DestinyResponsesPublicDestinyVendorSaleItemSetComponent = {
  saleItems?:
    | { [x: string]: DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent }
    | undefined
}
type DestinyComponentsStringVariablesDestinyStringVariablesComponent = {
  integerValuesByHash?: { [x: string]: number } | undefined
}
type DestinyComponentsVendorsDestinyVendorGroup = {
  vendorGroupHash?: number | undefined
  vendorHashes?: number[] | undefined
}
type DestinyComponentsVendorsDestinyVendorGroupComponent = {
  groups?: DestinyComponentsVendorsDestinyVendorGroup[] | undefined
}
type DestinyComponentsVendorsDestinyPublicVendorComponent = {
  enabled?: boolean | undefined
  nextRefreshDate?: string | undefined
  vendorHash?: number | undefined
}
type DestinyResponsesDestinyPublicVendorsResponse = {
  categories?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorCategoriesComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  sales?:
    | {
        data?: { [x: string]: DestinyResponsesPublicDestinyVendorSaleItemSetComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  stringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  vendorGroups?:
    | {
        data?: DestinyComponentsVendorsDestinyVendorGroupComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  vendors?:
    | {
        data?: { [x: string]: DestinyComponentsVendorsDestinyPublicVendorComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup = {
  activityDetails?:
    | {
        directorActivityHash?: number | undefined
        instanceId?: bigint | undefined
        isPrivate?: boolean | undefined
        membershipType?: number | undefined
        mode?: number | undefined
        modes?: number[] | undefined
        referenceId?: number | undefined
      }
    | undefined
  period?: string | undefined
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
type DestinyHistoricalStatsDestinyActivityHistoryResults = {
  activities?: DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup[] | undefined
}
type DestinyHistoricalStatsDestinyAggregateActivityStats = {
  activityHash?: number | undefined
  values?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue } | undefined
}
type DestinyHistoricalStatsDestinyAggregateActivityResults = {
  activities?: DestinyHistoricalStatsDestinyAggregateActivityStats[] | undefined
}
type DestinyHistoricalStatsDestinyHistoricalWeaponStatsData = {
  weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[] | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter = {
  characterId?: bigint | undefined
  deleted?: boolean | undefined
  merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod | undefined
  results?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsWithMerged = {
  merged?: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod | undefined
  results?: { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod } | undefined
}
type DestinyHistoricalStatsDestinyHistoricalStatsAccountResult = {
  characters?: DestinyHistoricalStatsDestinyHistoricalStatsPerCharacter[] | undefined
  mergedAllCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged | undefined
  mergedDeletedCharacters?: DestinyHistoricalStatsDestinyHistoricalStatsWithMerged | undefined
}
type DestinyDestinyActivity = {
  activityHash?: number | undefined
  booleanActivityOptions?: { [x: string]: boolean } | undefined
  canJoin?: boolean | undefined
  canLead?: boolean | undefined
  challenges?: DestinyChallengesDestinyChallengeStatus[] | undefined
  difficultyTier?: number | undefined
  displayLevel?: number | undefined
  isCompleted?: boolean | undefined
  isNew?: boolean | undefined
  isVisible?: boolean | undefined
  loadoutRequirementIndex?: number | undefined
  modifierHashes?: number[] | undefined
  recommendedLight?: number | undefined
}
type DestinyEntitiesCharactersDestinyCharacterActivitiesComponent = {
  availableActivities?: DestinyDestinyActivity[] | undefined
  currentActivityHash?: number | undefined
  currentActivityModeHash?: number | undefined
  currentActivityModeHashes?: number[] | undefined
  currentActivityModeType?:
    | '0'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '45'
    | '46'
    | '47'
    | '48'
    | '49'
    | '50'
    | '51'
    | '52'
    | '53'
    | '54'
    | '55'
    | '56'
    | '57'
    | '58'
    | '59'
    | '60'
    | '61'
    | '62'
    | '63'
    | '64'
    | '65'
    | '66'
    | '67'
    | '68'
    | '69'
    | '70'
    | '71'
    | '72'
    | '73'
    | '74'
    | '75'
    | '76'
    | '77'
    | '78'
    | '79'
    | '80'
    | '81'
    | '82'
    | '83'
    | '84'
    | '85'
    | '86'
    | '87'
    | '88'
    | '89'
    | '90'
    | '91'
    | undefined
  currentActivityModeTypes?: number[] | undefined
  currentPlaylistActivityHash?: number | undefined
  dateActivityStarted?: string | undefined
  lastCompletedStoryHash?: number | undefined
}
type DestinyComponentsCollectiblesDestinyCollectibleComponent = { state?: number | undefined }
type DestinyComponentsCollectiblesDestinyCollectiblesComponent = {
  collectibles?:
    | { [x: string]: DestinyComponentsCollectiblesDestinyCollectibleComponent }
    | undefined
  collectionBadgesRootNodeHash?: number | undefined
  collectionCategoriesRootNodeHash?: number | undefined
}
type DestinyComponentsCraftablesDestinyCraftableSocketPlugComponent = {
  failedRequirementIndexes?: number[] | undefined
  plugItemHash?: number | undefined
}
type DestinyComponentsCraftablesDestinyCraftableSocketComponent = {
  plugSetHash?: number | undefined
  plugs?: DestinyComponentsCraftablesDestinyCraftableSocketPlugComponent[] | undefined
}
type DestinyComponentsCraftablesDestinyCraftableComponent = {
  failedRequirementIndexes?: number[] | undefined
  sockets?: DestinyComponentsCraftablesDestinyCraftableSocketComponent[] | undefined
  visible?: boolean | undefined
}
type DestinyComponentsCraftablesDestinyCraftablesComponent = {
  craftables?: { [x: string]: DestinyComponentsCraftablesDestinyCraftableComponent } | undefined
  craftingRootNodeHash?: number | undefined
}
type DestinyComponentsInventoryDestinyCurrenciesComponent = {
  itemQuantities?: { [x: string]: number } | undefined
}
type DestinyEntitiesInventoryDestinyInventoryComponent = {
  items?: DestinyEntitiesItemsDestinyItemComponent[] | undefined
}
type DestinyComponentsKiosksDestinyKioskItem = {
  canAcquire?: boolean | undefined
  failureIndexes?: number[] | undefined
  flavorObjective?:
    | {
        activityHash?: number | undefined
        complete?: boolean | undefined
        completionValue?: number | undefined
        destinationHash?: number | undefined
        objectiveHash?: number | undefined
        progress?: number | undefined
        visible?: boolean | undefined
      }
    | undefined
  index?: number | undefined
}
type DestinyComponentsKiosksDestinyKiosksComponent = {
  kioskItems?: { [x: string]: DestinyComponentsKiosksDestinyKioskItem[] } | undefined
}
type DestinyComponentsLoadoutsDestinyLoadoutItemComponent = {
  itemInstanceId?: bigint | undefined
  plugItemHashes?: number[] | undefined
}
type DestinyComponentsLoadoutsDestinyLoadoutComponent = {
  colorHash?: number | undefined
  iconHash?: number | undefined
  items?: DestinyComponentsLoadoutsDestinyLoadoutItemComponent[] | undefined
  nameHash?: number | undefined
}
type DestinyComponentsLoadoutsDestinyLoadoutsComponent = {
  loadouts?: DestinyComponentsLoadoutsDestinyLoadoutComponent[] | undefined
}
type DestinySocketsDestinyItemPlug = {
  canInsert?: boolean | undefined
  enableFailIndexes?: number[] | undefined
  enabled?: boolean | undefined
  insertFailIndexes?: number[] | undefined
  plugItemHash?: number | undefined
  plugObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
}
type DestinyComponentsPlugSetsDestinyPlugSetsComponent = {
  plugs?: { [x: string]: DestinySocketsDestinyItemPlug[] } | undefined
}
type DestinyComponentsPresentationDestinyPresentationNodeComponent = {
  completionValue?: number | undefined
  objective?:
    | {
        activityHash?: number | undefined
        complete?: boolean | undefined
        completionValue?: number | undefined
        destinationHash?: number | undefined
        objectiveHash?: number | undefined
        progress?: number | undefined
        visible?: boolean | undefined
      }
    | undefined
  progressValue?: number | undefined
  recordCategoryScore?: number | undefined
  state?: number | undefined
}
type DestinyComponentsPresentationDestinyPresentationNodesComponent = {
  nodes?: { [x: string]: DestinyComponentsPresentationDestinyPresentationNodeComponent } | undefined
}
type DestinyProgressionDestinyFactionProgression = {
  currentProgress?: number | undefined
  currentResetCount?: number | undefined
  dailyLimit?: number | undefined
  dailyProgress?: number | undefined
  factionHash?: number | undefined
  factionVendorIndex?: number | undefined
  level?: number | undefined
  levelCap?: number | undefined
  nextLevelAt?: number | undefined
  progressToNextLevel?: number | undefined
  progressionHash?: number | undefined
  rewardItemStates?: number[] | undefined
  seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
  stepIndex?: number | undefined
  weeklyLimit?: number | undefined
  weeklyProgress?: number | undefined
}
type DestinyQuestsDestinyQuestStatus = {
  completed?: boolean | undefined
  itemInstanceId?: bigint | undefined
  questHash?: number | undefined
  redeemed?: boolean | undefined
  started?: boolean | undefined
  stepHash?: number | undefined
  stepObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  tracked?: boolean | undefined
  vendorHash?: number | undefined
}
type DestinyArtifactsDestinyArtifactTierItem = {
  isActive?: boolean | undefined
  itemHash?: number | undefined
}
type DestinyArtifactsDestinyArtifactTier = {
  isUnlocked?: boolean | undefined
  items?: DestinyArtifactsDestinyArtifactTierItem[] | undefined
  pointsToUnlock?: number | undefined
  tierHash?: number | undefined
}
type DestinyEntitiesCharactersDestinyCharacterProgressionComponent = {
  checklists?: { [x: string]: { [x: string]: boolean } } | undefined
  factions?: { [x: string]: DestinyProgressionDestinyFactionProgression } | undefined
  milestones?: { [x: string]: DestinyMilestonesDestinyMilestone } | undefined
  progressions?: { [x: string]: DestinyDestinyProgression } | undefined
  quests?: DestinyQuestsDestinyQuestStatus[] | undefined
  seasonalArtifact?:
    | {
        artifactHash?: number | undefined
        pointsUsed?: number | undefined
        resetCount?: number | undefined
        tiers?: DestinyArtifactsDestinyArtifactTier[] | undefined
      }
    | undefined
  uninstancedItemObjectives?: { [x: string]: DestinyQuestsDestinyObjectiveProgress[] } | undefined
  uninstancedItemPerks?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
}
type DestinyComponentsRecordsDestinyRecordComponent = {
  completedCount?: number | undefined
  intervalObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  intervalsRedeemedCount?: number | undefined
  objectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
  rewardVisibilty?: boolean[] | undefined
  state?: number | undefined
}
type DestinyComponentsRecordsDestinyCharacterRecordsComponent = {
  featuredRecordHashes?: number[] | undefined
  recordCategoriesRootNodeHash?: number | undefined
  recordSealsRootNodeHash?: number | undefined
  records?: { [x: string]: DestinyComponentsRecordsDestinyRecordComponent } | undefined
}
type DestinyDyeReference = { channelHash?: number | undefined; dyeHash?: number | undefined }
type DestinyCharacterDestinyItemPeerView = {
  dyes?: DestinyDyeReference[] | undefined
  itemHash?: number | undefined
}
type DestinyEntitiesCharactersDestinyCharacterRenderComponent = {
  customDyes?: DestinyDyeReference[] | undefined
  customization?:
    | {
        decalColor?: number | undefined
        decalIndex?: number | undefined
        eyeColor?: number | undefined
        face?: number | undefined
        featureColors?: number[] | undefined
        featureIndex?: number | undefined
        hairColors?: number[] | undefined
        hairIndex?: number | undefined
        lipColor?: number | undefined
        personality?: number | undefined
        skinColor?: number | undefined
        wearHelmet?: boolean | undefined
      }
    | undefined
  peerView?: { equipment?: DestinyCharacterDestinyItemPeerView[] | undefined } | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DestinyBaseItemComponentSetOfuint32 = {
  objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent | undefined
  perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent | undefined
}
type DestinyEntitiesCharactersDestinyCharacterComponent = {
  baseCharacterLevel?: number | undefined
  characterId?: bigint | undefined
  classHash?: number | undefined
  classType?: number | undefined
  dateLastPlayed?: string | undefined
  emblemBackgroundPath?: string | undefined
  emblemColor?:
    | {
        alpha?: string | undefined
        blue?: string | undefined
        green?: string | undefined
        red?: string | undefined
      }
    | undefined
  emblemHash?: number | undefined
  emblemPath?: string | undefined
  genderHash?: number | undefined
  genderType?: number | undefined
  levelProgression?:
    | {
        currentProgress?: number | undefined
        currentResetCount?: number | undefined
        dailyLimit?: number | undefined
        dailyProgress?: number | undefined
        level?: number | undefined
        levelCap?: number | undefined
        nextLevelAt?: number | undefined
        progressToNextLevel?: number | undefined
        progressionHash?: number | undefined
        rewardItemStates?: number[] | undefined
        seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
        stepIndex?: number | undefined
        weeklyLimit?: number | undefined
        weeklyProgress?: number | undefined
      }
    | undefined
  light?: number | undefined
  membershipId?: bigint | undefined
  membershipType?: number | undefined
  minutesPlayedThisSession?: bigint | undefined
  minutesPlayedTotal?: bigint | undefined
  percentToNextLevel?: number | undefined
  raceHash?: number | undefined
  raceType?: number | undefined
  stats?: { [x: string]: number } | undefined
  titleRecordHash?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemInstanceComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemPerksComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugObjectivesComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DestinyComponentsItemsDestinyItemPlugComponent = {
  canInsert?: boolean | undefined
  enableFailIndexes?: number[] | undefined
  enabled?: boolean | undefined
  insertFailIndexes?: number[] | undefined
  plugItemHash?: number | undefined
  plugObjectives?: DestinyQuestsDestinyObjectiveProgress[] | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemRenderComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemRenderComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemReusablePlugsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemSocketsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemStatsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemStatsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemTalentGridComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DestinyComponentsMetricsDestinyMetricComponent = {
  invisible?: boolean | undefined
  objectiveProgress?: DestinyQuestsDestinyObjectiveProgress | undefined
}
type DestinyComponentsMetricsDestinyMetricsComponent = {
  metrics?: { [x: string]: DestinyComponentsMetricsDestinyMetricComponent } | undefined
  metricsRootNodeHash?: number | undefined
}
type DestinyComponentsInventoryDestinyPlatformSilverComponent = {
  platformSilver?: { [x: string]: DestinyEntitiesItemsDestinyItemComponent } | undefined
}
type DestinyEntitiesProfilesDestinyProfileComponent = {
  activeEventCardHash?: number | undefined
  characterIds?: bigint[] | undefined
  currentGuardianRank?: number | undefined
  currentSeasonHash?: number | undefined
  currentSeasonRewardPowerCap?: number | undefined
  dateLastPlayed?: string | undefined
  eventCardHashesOwned?: number[] | undefined
  lifetimeHighestGuardianRank?: number | undefined
  seasonHashes?: number[] | undefined
  userInfo?:
    | {
        applicableMembershipTypes?: number[] | undefined
        bungieGlobalDisplayName?: string | undefined
        bungieGlobalDisplayNameCode?: number | undefined
        crossSaveOverride?: number | undefined
        displayName?: string | undefined
        iconPath?: string | undefined
        isPublic?: boolean | undefined
        membershipId?: bigint | undefined
        membershipType?: number | undefined
        supplementalDisplayName?: string | undefined
      }
    | undefined
  versionsOwned?: number | undefined
}
type DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent = {
  collectibles?:
    | { [x: string]: DestinyComponentsCollectiblesDestinyCollectibleComponent }
    | undefined
  collectionBadgesRootNodeHash?: number | undefined
  collectionCategoriesRootNodeHash?: number | undefined
  newnessFlaggedCollectibleHashes?: number[] | undefined
  recentCollectibleHashes?: number[] | undefined
}
type DestinyComponentsSocialDestinySocialCommendationsComponent = {
  commendationNodeScoresByHash?: { [x: string]: number } | undefined
  commendationScoresByHash?: { [x: string]: number } | undefined
  scoreDetailValues?: number[] | undefined
  totalScore?: number | undefined
}
type DestinyComponentsProfilesDestinyProfileProgressionComponent = {
  checklists?: { [x: string]: { [x: string]: boolean } } | undefined
  seasonalArtifact?:
    | {
        artifactHash?: number | undefined
        pointProgression?: DestinyDestinyProgression | undefined
        pointsAcquired?: number | undefined
        powerBonus?: number | undefined
        powerBonusProgression?: DestinyDestinyProgression | undefined
      }
    | undefined
}
type DestinyComponentsRecordsDestinyProfileRecordsComponent = {
  activeScore?: number | undefined
  legacyScore?: number | undefined
  lifetimeScore?: number | undefined
  recordCategoriesRootNodeHash?: number | undefined
  recordSealsRootNodeHash?: number | undefined
  records?: { [x: string]: DestinyComponentsRecordsDestinyRecordComponent } | undefined
  score?: number | undefined
  trackedRecordHash?: number | undefined
}
type DestinyComponentsProfilesDestinyProfileTransitoryPartyMember = {
  displayName?: string | undefined
  emblemHash?: number | undefined
  membershipId?: bigint | undefined
  status?: number | undefined
}
type DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry = {
  activityHash?: number | undefined
  itemHash?: number | undefined
  locationHash?: number | undefined
  objectiveHash?: number | undefined
  questlineItemHash?: number | undefined
  trackedDate?: string | undefined
}
type DestinyComponentsProfilesDestinyProfileTransitoryComponent = {
  currentActivity?:
    | {
        endTime?: string | undefined
        highestOpposingFactionScore?: number | undefined
        numberOfOpponents?: number | undefined
        numberOfPlayers?: number | undefined
        score?: number | undefined
        startTime?: string | undefined
      }
    | undefined
  joinability?:
    | {
        closedReasons?: number | undefined
        openSlots?: number | undefined
        privacySetting?: number | undefined
      }
    | undefined
  lastOrbitedDestinationHash?: number | undefined
  partyMembers?: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember[] | undefined
  tracking?: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry[] | undefined
}
type DestinyVendorsDestinyVendorReceipt = {
  currencyPaid?: DestinyDestinyItemQuantity[] | undefined
  expiresOn?: string | undefined
  itemReceived?:
    | {
        hasConditionalVisibility?: boolean | undefined
        itemHash?: number | undefined
        itemInstanceId?: bigint | undefined
        quantity?: number | undefined
      }
    | undefined
  licenseUnlockHash?: number | undefined
  purchasedByCharacterId?: bigint | undefined
  refundPolicy?: number | undefined
  sequenceNumber?: number | undefined
  timeToExpiration?: bigint | undefined
}
type DestinyEntitiesProfilesDestinyVendorReceiptsComponent = {
  receipts?: DestinyVendorsDestinyVendorReceipt[] | undefined
}
type DestinyResponsesDestinyProfileResponse = {
  characterActivities?:
    | {
        data?:
          | { [x: string]: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent }
          | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterCollectibles?:
    | {
        data?:
          | { [x: string]: DestinyComponentsCollectiblesDestinyCollectiblesComponent }
          | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterCraftables?:
    | {
        data?: { [x: string]: DestinyComponentsCraftablesDestinyCraftablesComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterCurrencyLookups?:
    | {
        data?: { [x: string]: DestinyComponentsInventoryDestinyCurrenciesComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterEquipment?:
    | {
        data?: { [x: string]: DestinyEntitiesInventoryDestinyInventoryComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterInventories?:
    | {
        data?: { [x: string]: DestinyEntitiesInventoryDestinyInventoryComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterKiosks?:
    | {
        data?: { [x: string]: DestinyComponentsKiosksDestinyKiosksComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterLoadouts?:
    | {
        data?: { [x: string]: DestinyComponentsLoadoutsDestinyLoadoutsComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterPlugSets?:
    | {
        data?: { [x: string]: DestinyComponentsPlugSetsDestinyPlugSetsComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterPresentationNodes?:
    | {
        data?:
          | { [x: string]: DestinyComponentsPresentationDestinyPresentationNodesComponent }
          | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterProgressions?:
    | {
        data?:
          | { [x: string]: DestinyEntitiesCharactersDestinyCharacterProgressionComponent }
          | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterRecords?:
    | {
        data?: { [x: string]: DestinyComponentsRecordsDestinyCharacterRecordsComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterRenderData?:
    | {
        data?: { [x: string]: DestinyEntitiesCharactersDestinyCharacterRenderComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterStringVariables?:
    | {
        data?:
          | { [x: string]: DestinyComponentsStringVariablesDestinyStringVariablesComponent }
          | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  characterUninstancedItemComponents?:
    | { [x: string]: DestinyBaseItemComponentSetOfuint32 }
    | undefined
  characters?:
    | {
        data?: { [x: string]: DestinyEntitiesCharactersDestinyCharacterComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  itemComponents?:
    | {
        instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent | undefined
        objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent | undefined
        perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent
          | undefined
        sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent | undefined
        stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent | undefined
        talentGrids?:
          | DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
          | undefined
      }
    | undefined
  metrics?:
    | {
        data?: DestinyComponentsMetricsDestinyMetricsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  platformSilver?:
    | {
        data?: DestinyComponentsInventoryDestinyPlatformSilverComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profile?:
    | {
        data?: DestinyEntitiesProfilesDestinyProfileComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileCollectibles?:
    | {
        data?: DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileCommendations?:
    | {
        data?: DestinyComponentsSocialDestinySocialCommendationsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileCurrencies?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileInventory?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileKiosks?:
    | {
        data?: DestinyComponentsKiosksDestinyKiosksComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profilePlugSets?:
    | {
        data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profilePresentationNodes?:
    | {
        data?: DestinyComponentsPresentationDestinyPresentationNodesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileProgression?:
    | {
        data?: DestinyComponentsProfilesDestinyProfileProgressionComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileRecords?:
    | {
        data?: DestinyComponentsRecordsDestinyProfileRecordsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileStringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  profileTransitoryData?:
    | {
        data?: DestinyComponentsProfilesDestinyProfileTransitoryComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  responseMintedTimestamp?: string | undefined
  secondaryComponentsMintedTimestamp?: string | undefined
  vendorReceipts?:
    | {
        data?: DestinyEntitiesProfilesDestinyVendorReceiptsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
}
type DestinyResponsesDestinyCharacterResponse = {
  activities?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  character?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  collectibles?:
    | {
        data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  currencyLookups?:
    | {
        data?: DestinyComponentsInventoryDestinyCurrenciesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  equipment?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  inventory?:
    | {
        data?: DestinyEntitiesInventoryDestinyInventoryComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  itemComponents?:
    | {
        instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent | undefined
        objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent | undefined
        perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent
          | undefined
        sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent | undefined
        stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent | undefined
        talentGrids?:
          | DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent
          | undefined
      }
    | undefined
  kiosks?:
    | {
        data?: DestinyComponentsKiosksDestinyKiosksComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  loadouts?:
    | {
        data?: DestinyComponentsLoadoutsDestinyLoadoutsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  plugSets?:
    | {
        data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  presentationNodes?:
    | {
        data?: DestinyComponentsPresentationDestinyPresentationNodesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  progressions?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterProgressionComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  records?:
    | {
        data?: DestinyComponentsRecordsDestinyCharacterRecordsComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  renderData?:
    | {
        data?: DestinyEntitiesCharactersDestinyCharacterRenderComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
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
}
type DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemInstanceComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugObjectivesComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemRenderComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemReusablePlugsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemSocketsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemStatsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemTalentGridComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DestinyResponsesDestinyCollectibleNodeDetailResponse = {
  collectibleItemComponents?:
    | {
        instances?: DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent | undefined
        objectives?:
          | DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent
          | undefined
        perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        renderData?: DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent
          | undefined
        sockets?: DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent | undefined
        stats?: DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent | undefined
        talentGrids?:
          | DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent
          | undefined
      }
    | undefined
  collectibles?:
    | {
        data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemInstanceComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemObjectivesComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemPerksComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemPerksComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemPlugObjectivesComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemRenderComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemRenderComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent = {
  data?: { [x: string]: DestinyComponentsItemsDestinyItemReusablePlugsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemSocketsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemStatsComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemStatsComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent = {
  data?: { [x: string]: DestinyEntitiesItemsDestinyItemTalentGridComponent } | undefined
  disabled?: boolean | undefined
  privacy?: number | undefined
}
type DestinyItemComponentSetOfint32 = {
  instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent | undefined
  objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent | undefined
  perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent | undefined
  plugObjectives?:
    | DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent
    | undefined
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
  renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent | undefined
  reusablePlugs?: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent | undefined
  sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent | undefined
  stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent | undefined
  talentGrids?: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent | undefined
}
type DestinyDestinyUnlockStatus = { isSet?: boolean | undefined; unlockHash?: number | undefined }
type DestinyEntitiesVendorsDestinyVendorSaleItemComponent = {
  apiPurchasable?: boolean | undefined
  augments?: number | undefined
  costs?: DestinyDestinyItemQuantity[] | undefined
  failureIndexes?: number[] | undefined
  itemHash?: number | undefined
  itemValueVisibility?: boolean[] | undefined
  overrideNextRefreshDate?: string | undefined
  overrideStyleItemHash?: number | undefined
  quantity?: number | undefined
  requiredUnlocks?: number[] | undefined
  saleStatus?: number | undefined
  unlockStatuses?: DestinyDestinyUnlockStatus[] | undefined
  vendorItemIndex?: number | undefined
}
type DestinyResponsesPersonalDestinyVendorSaleItemSetComponent = {
  saleItems?: { [x: string]: DestinyEntitiesVendorsDestinyVendorSaleItemComponent } | undefined
}
type DestinyEntitiesVendorsDestinyVendorComponent = {
  canPurchase?: boolean | undefined
  enabled?: boolean | undefined
  nextRefreshDate?: string | undefined
  progression?:
    | {
        currentProgress?: number | undefined
        currentResetCount?: number | undefined
        dailyLimit?: number | undefined
        dailyProgress?: number | undefined
        level?: number | undefined
        levelCap?: number | undefined
        nextLevelAt?: number | undefined
        progressToNextLevel?: number | undefined
        progressionHash?: number | undefined
        rewardItemStates?: number[] | undefined
        seasonResets?: DestinyDestinyProgressionResetEntry[] | undefined
        stepIndex?: number | undefined
        weeklyLimit?: number | undefined
        weeklyProgress?: number | undefined
      }
    | undefined
  seasonalRank?: number | undefined
  vendorHash?: number | undefined
  vendorLocationIndex?: number | undefined
}
type DestinyResponsesDestinyVendorsResponse = {
  categories?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorCategoriesComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  currencyLookups?:
    | {
        data?: DestinyComponentsInventoryDestinyCurrenciesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  itemComponents?: { [x: string]: DestinyItemComponentSetOfint32 } | undefined
  sales?:
    | {
        data?:
          | { [x: string]: DestinyResponsesPersonalDestinyVendorSaleItemSetComponent }
          | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  stringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  vendorGroups?:
    | {
        data?: DestinyComponentsVendorsDestinyVendorGroupComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  vendors?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
}
type DestinyResponsesDestinyVendorResponse = {
  categories?:
    | {
        data?: DestinyEntitiesVendorsDestinyVendorCategoriesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  currencyLookups?:
    | {
        data?: DestinyComponentsInventoryDestinyCurrenciesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  itemComponents?:
    | {
        instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent | undefined
        objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent | undefined
        perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent | undefined
        plugObjectives?:
          | DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent
          | undefined
        plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent | undefined
        renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent | undefined
        reusablePlugs?:
          | DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent
          | undefined
        sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent | undefined
        stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent | undefined
        talentGrids?:
          | DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent
          | undefined
      }
    | undefined
  sales?:
    | {
        data?: { [x: string]: DestinyEntitiesVendorsDestinyVendorSaleItemComponent } | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  stringVariables?:
    | {
        data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
  vendor?:
    | {
        data?: DestinyEntitiesVendorsDestinyVendorComponent | undefined
        disabled?: boolean | undefined
        privacy?: number | undefined
      }
    | undefined
}
type DestinyResponsesDestinyProfileUserInfoCard = {
  applicableMembershipTypes?: number[] | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  crossSaveOverride?: number | undefined
  dateLastPlayed?: string | undefined
  displayName?: string | undefined
  iconPath?: string | undefined
  isCrossSavePrimary?: boolean | undefined
  isOverridden?: boolean | undefined
  isPublic?: boolean | undefined
  membershipId?: bigint | undefined
  membershipType?: number | undefined
  platformSilver?:
    | { platformSilver?: { [x: string]: DestinyEntitiesItemsDestinyItemComponent } | undefined }
    | undefined
  supplementalDisplayName?: string | undefined
  unpairedGameVersions?:
    | '0'
    | '1'
    | '2'
    | '4'
    | '8'
    | '16'
    | '32'
    | '64'
    | '128'
    | '256'
    | '512'
    | undefined
}
type DestinyResponsesDestinyErrorProfile = {
  errorCode?: number | undefined
  infoCard?:
    | {
        applicableMembershipTypes?: number[] | undefined
        bungieGlobalDisplayName?: string | undefined
        bungieGlobalDisplayNameCode?: number | undefined
        crossSaveOverride?: number | undefined
        displayName?: string | undefined
        iconPath?: string | undefined
        isPublic?: boolean | undefined
        membershipId?: bigint | undefined
        membershipType?: number | undefined
        supplementalDisplayName?: string | undefined
      }
    | undefined
}
type DestinyResponsesDestinyLinkedProfilesResponse = {
  bnetMembership?:
    | {
        applicableMembershipTypes?: number[] | undefined
        bungieGlobalDisplayName?: string | undefined
        bungieGlobalDisplayNameCode?: number | undefined
        crossSaveOverride?: number | undefined
        displayName?: string | undefined
        iconPath?: string | undefined
        isPublic?: boolean | undefined
        membershipId?: bigint | undefined
        membershipType?: number | undefined
        supplementalDisplayName?: string | undefined
      }
    | undefined
  profiles?: DestinyResponsesDestinyProfileUserInfoCard[] | undefined
  profilesWithErrors?: DestinyResponsesDestinyErrorProfile[] | undefined
}
type FireteamFireteamSummary = {
  activityType?: number | undefined
  alternateSlotCount?: number | undefined
  availableAlternateSlotCount?: number | undefined
  availablePlayerSlotCount?: number | undefined
  dateCreated?: string | undefined
  dateModified?: string | undefined
  datePlayerModified?: string | undefined
  fireteamId?: bigint | undefined
  groupId?: bigint | undefined
  isImmediate?: boolean | undefined
  isPublic?: boolean | undefined
  isValid?: boolean | undefined
  locale?: string | undefined
  ownerCurrentGuardianRankSnapshot?: number | undefined
  ownerHighestLifetimeGuardianRankSnapshot?: number | undefined
  ownerMembershipId?: bigint | undefined
  ownerTotalCommendationScoreSnapshot?: number | undefined
  platform?: number | undefined
  playerSlotCount?: number | undefined
  scheduledTime?: string | undefined
  title?: string | undefined
  titleBeforeModeration?: string | undefined
}
type SearchResultOfFireteamSummary = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: FireteamFireteamSummary[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type FireteamFireteamUserInfoCard = {
  FireteamDisplayName?: string | undefined
  FireteamMembershipType?: number | undefined
  applicableMembershipTypes?: number[] | undefined
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  crossSaveOverride?: number | undefined
  displayName?: string | undefined
  iconPath?: string | undefined
  isPublic?: boolean | undefined
  membershipId?: bigint | undefined
  membershipType?: number | undefined
  supplementalDisplayName?: string | undefined
}
type FireteamFireteamMember = {
  bungieNetUserInfo?: UserUserInfoCard | undefined
  characterId?: bigint | undefined
  dateJoined?: string | undefined
  destinyUserInfo?: FireteamFireteamUserInfoCard | undefined
  hasMicrophone?: boolean | undefined
  lastPlatformInviteAttemptDate?: string | undefined
  lastPlatformInviteAttemptResult?: number | undefined
}
type FireteamFireteamResponse = {
  Alternates?: FireteamFireteamMember[] | undefined
  Members?: FireteamFireteamMember[] | undefined
  Summary?: FireteamFireteamSummary | undefined
}
type SearchResultOfFireteamResponse = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: FireteamFireteamResponse[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type StreamInfo = { ChannelName?: string | undefined }
type GlobalAlert = {
  AlertHtml?: string | undefined
  AlertKey?: string | undefined
  AlertLevel?: number | undefined
  AlertLink?: string | undefined
  AlertTimestamp?: string | undefined
  AlertType?: number | undefined
  StreamInfo?: StreamInfo | undefined
}
type ConfigGroupTheme = {
  description?: string | undefined
  folder?: string | undefined
  name?: string | undefined
}
type GroupsV2GroupV2ClanInfo = {
  clanBannerData?: GroupsV2ClanBanner | undefined
  clanCallsign?: string | undefined
}
type GroupsV2GroupV2Card = {
  about?: string | undefined
  avatarPath?: string | undefined
  capabilities?: number | undefined
  clanInfo?: GroupsV2GroupV2ClanInfo | undefined
  creationDate?: string | undefined
  groupId?: bigint | undefined
  groupType?: number | undefined
  locale?: string | undefined
  memberCount?: number | undefined
  membershipOption?: number | undefined
  motto?: string | undefined
  name?: string | undefined
  theme?: string | undefined
}
type GroupsV2GroupMembership = {
  group?: GroupsV2GroupV2 | undefined
  member?: GroupsV2GroupMember | undefined
}
type GroupsV2GroupMembershipSearchResponse = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupMembership[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupSearchResponse = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupV2Card[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupPotentialMembership = {
  group?: GroupsV2GroupV2 | undefined
  member?: GroupsV2GroupPotentialMember | undefined
}
type GroupsV2GroupPotentialMembershipSearchResponse = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupPotentialMembership[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GetGroupsForMemberResponse = {
  areAllMembershipsInactive?: { [x: string]: boolean } | undefined
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupMembership[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type SearchResultOfGroupMember = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupMember[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupBan = {
  bungieNetUserInfo?: UserUserInfoCard | undefined
  comment?: string | undefined
  createdBy?: UserUserInfoCard | undefined
  dateBanned?: string | undefined
  dateExpires?: string | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  groupId?: bigint | undefined
  lastModifiedBy?: UserUserInfoCard | undefined
}
type SearchResultOfGroupBan = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupBan[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type EntitiesEntityActionResult = { entityId?: bigint | undefined; result?: number | undefined }
type GroupsV2GroupApplicationResponse = { resolution?: number | undefined }
type GroupsV2GroupMemberApplication = {
  bungieNetUserInfo?: UserUserInfoCard | undefined
  creationDate?: string | undefined
  destinyUserInfo?: GroupsV2GroupUserInfoCard | undefined
  groupId?: bigint | undefined
  requestMessage?: string | undefined
  resolveDate?: string | undefined
  resolveMessage?: string | undefined
  resolveState?: number | undefined
  resolvedByMembershipId?: bigint | undefined
}
type SearchResultOfGroupMemberApplication = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: GroupsV2GroupMemberApplication[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type GroupsV2GroupMemberLeaveResult = {
  group?: GroupsV2GroupV2 | undefined
  groupDeleted?: boolean | undefined
}
type GroupsV2GroupOptionalConversation = {
  chatEnabled?: boolean | undefined
  chatName?: string | undefined
  chatSecurity?: number | undefined
  conversationId?: bigint | undefined
  groupId?: bigint | undefined
}
type CommonModelsCoreSetting = {
  childSettings?: CommonModelsCoreSetting[] | undefined
  displayName?: string | undefined
  identifier?: string | undefined
  imagePath?: string | undefined
  isDefault?: boolean | undefined
  summary?: string | undefined
}
type CommonModelsDestiny2CoreSettings = {
  activeSealsRootNodeHash?: number | undefined
  activeTriumphsRootNodeHash?: number | undefined
  ammoTypeHeavyIcon?: string | undefined
  ammoTypePrimaryIcon?: string | undefined
  ammoTypeSpecialIcon?: string | undefined
  badgesRootNode?: number | undefined
  collectionRootNode?: number | undefined
  craftingRootNodeHash?: number | undefined
  currentRankProgressionHashes?: number[] | undefined
  currentSeasonHash?: number | undefined
  currentSeasonalArtifactHash?: number | undefined
  exoticCatalystsRootNodeHash?: number | undefined
  futureSeasonHashes?: number[] | undefined
  guardianRankConstantsHash?: number | undefined
  guardianRanksRootNodeHash?: number | undefined
  insertPlugFreeBlockedSocketTypeHashes?: number[] | undefined
  insertPlugFreeProtectedPlugItemHashes?: number[] | undefined
  legacySealsRootNodeHash?: number | undefined
  legacyTriumphsRootNodeHash?: number | undefined
  loadoutConstantsHash?: number | undefined
  loreRootNodeHash?: number | undefined
  medalsRootNode?: number | undefined
  medalsRootNodeHash?: number | undefined
  metricsRootNode?: number | undefined
  pastSeasonHashes?: number[] | undefined
  recordsRootNode?: number | undefined
  seasonalChallengesPresentationNodeHash?: number | undefined
  undiscoveredCollectibleImage?: string | undefined
}
type UserEMailSettingSubscriptionLocalization = {
  description?: string | undefined
  knownUserActionText?: string | undefined
  registeredUserDescription?: string | undefined
  title?: string | undefined
  unknownUserActionText?: string | undefined
  unknownUserDescription?: string | undefined
  unregisteredUserDescription?: string | undefined
}
type UserEmailSubscriptionDefinition = {
  localization?: { [x: string]: UserEMailSettingSubscriptionLocalization } | undefined
  name?: string | undefined
  value?: bigint | undefined
}
type UserEmailOptInDefinition = {
  dependentSubscriptions?: UserEmailSubscriptionDefinition[] | undefined
  name?: string | undefined
  setByDefault?: boolean | undefined
  value?: bigint | undefined
}
type UserEMailSettingLocalization = { description?: string | undefined; title?: string | undefined }
type UserEmailViewDefinitionSetting = {
  localization?: { [x: string]: UserEMailSettingLocalization } | undefined
  name?: string | undefined
  optInAggregateValue?: bigint | undefined
  setByDefault?: boolean | undefined
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
type CommonModelsCoreSystem = {
  enabled?: boolean | undefined
  parameters?: { [x: string]: string } | undefined
}
type CommonModelsCoreSettingsConfiguration = {
  clanBannerDecalColors?: CommonModelsCoreSetting[] | undefined
  clanBannerDecals?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalonColors?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalonDetailColors?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalonDetails?: CommonModelsCoreSetting[] | undefined
  clanBannerGonfalons?: CommonModelsCoreSetting[] | undefined
  clanBannerStandards?: CommonModelsCoreSetting[] | undefined
  defaultGroupTheme?: CommonModelsCoreSetting | undefined
  destiny2CoreSettings?: CommonModelsDestiny2CoreSettings | undefined
  destinyMembershipTypes?: CommonModelsCoreSetting[] | undefined
  emailSettings?: UserEmailSettings | undefined
  environment?: string | undefined
  fireteamActivities?: CommonModelsCoreSetting[] | undefined
  forumCategories?: CommonModelsCoreSetting[] | undefined
  groupAvatars?: CommonModelsCoreSetting[] | undefined
  ignoreReasons?: CommonModelsCoreSetting[] | undefined
  recruitmentActivities?: CommonModelsCoreSetting[] | undefined
  recruitmentMiscTags?: CommonModelsCoreSetting[] | undefined
  recruitmentPlatformTags?: CommonModelsCoreSetting[] | undefined
  systemContentLocales?: CommonModelsCoreSetting[] | undefined
  systems?: { [x: string]: CommonModelsCoreSystem } | undefined
  userContentLocales?: CommonModelsCoreSetting[] | undefined
}
type SocialFriendsBungieFriend = {
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  bungieNetUser?: UserGeneralUser | undefined
  lastSeenAsBungieMembershipType?: number | undefined
  lastSeenAsMembershipId?: bigint | undefined
  onlineStatus?: number | undefined
  onlineTitle?: number | undefined
  relationship?: number | undefined
}
type SocialFriendsBungieFriendListResponse = { friends?: SocialFriendsBungieFriend[] | undefined }
type SocialFriendsBungieFriendRequestListResponse = {
  incomingRequests?: SocialFriendsBungieFriend[] | undefined
  outgoingRequests?: SocialFriendsBungieFriend[] | undefined
}
type SocialFriendsPlatformFriend = {
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  bungieNetMembershipId?: bigint | undefined
  destinyMembershipId?: bigint | undefined
  destinyMembershipType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '10' | '254' | '-1' | undefined
  friendPlatform?: number | undefined
  platformDisplayName?: string | undefined
}
type SocialFriendsPlatformFriendResponse = {
  currentPage?: number | undefined
  hasMore?: boolean | undefined
  itemsPerPage?: number | undefined
  platformFriends?: SocialFriendsPlatformFriend[] | undefined
}
type TokensPartnerOfferHistoryResponse = {
  ApplyDate?: string | undefined
  IsConsumable?: boolean | undefined
  LocalizedDescription?: string | undefined
  LocalizedName?: string | undefined
  MembershipId?: bigint | undefined
  MembershipType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '10' | '254' | '-1' | undefined
  PartnerOfferKey?: string | undefined
  QuantityApplied?: number | undefined
}
type TokensPartnerOfferSkuHistoryResponse = {
  AllOffersApplied?: boolean | undefined
  ClaimDate?: string | undefined
  LocalizedDescription?: string | undefined
  LocalizedName?: string | undefined
  SkuIdentifier?: string | undefined
  SkuOffers?: TokensPartnerOfferHistoryResponse[] | undefined
  TransactionId?: string | undefined
}
type TokensTwitchDropHistoryResponse = {
  ClaimState?: '0' | '1' | '2' | undefined
  CreatedAt?: string | undefined
  Description?: string | undefined
  Title?: string | undefined
}
type TokensPartnerRewardHistoryResponse = {
  PartnerOffers?: TokensPartnerOfferSkuHistoryResponse[] | undefined
  TwitchDrops?: TokensTwitchDropHistoryResponse[] | undefined
}
type TokensRewardDisplayProperties = {
  Description?: string | undefined
  ImagePath?: string | undefined
  Name?: string | undefined
}
type DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock = {
  acquireMaterialRequirementHash?: number | undefined
  acquireTimestampUnlockValueHash?: number | undefined
}
type DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition = {
  description?: string | undefined
  hasIcon?: boolean | undefined
  highResIcon?: string | undefined
  icon?: string | undefined
  iconSequences?: DestinyDefinitionsCommonDestinyIconSequenceDefinition[] | undefined
  name?: string | undefined
}
type DestinyDefinitionsPresentationDestinyPresentationChildBlock = {
  displayStyle?: number | undefined
  parentPresentationNodeHashes?: number[] | undefined
  presentationNodeType?: number | undefined
}
type DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock = {
  entitlementUnavailableMessage?: string | undefined
}
type DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock = {
  obscuredOverrideItemHash?: number | undefined
  requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock | undefined
}
type DestinyDefinitionsCollectiblesDestinyCollectibleDefinition = {
  acquisitionInfo?: DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock | undefined
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition | undefined
  hash?: number | undefined
  index?: number | undefined
  itemHash?: number | undefined
  parentNodeHashes?: number[] | undefined
  presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock | undefined
  presentationNodeType?: number | undefined
  redacted?: boolean | undefined
  scope?: number | undefined
  sourceHash?: number | undefined
  sourceString?: string | undefined
  stateInfo?: DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock | undefined
  traitHashes?: number[] | undefined
  traitIds?: string[] | undefined
}
type DestinyDefinitionsDestinyProgressionRewardDefinition = {
  amount?: number | undefined
  applyThrottles?: boolean | undefined
  progressionMappingHash?: number | undefined
}
type DestinyDefinitionsDestinyItemActionRequiredItemDefinition = {
  count?: number | undefined
  deleteOnAction?: boolean | undefined
  itemHash?: number | undefined
}
type DestinyDefinitionsAnimationsDestinyAnimationReference = {
  animIdentifier?: string | undefined
  animName?: string | undefined
  path?: string | undefined
}
type DestinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition = {
  plugItemHash?: number | undefined
  socketTypeHash?: number | undefined
}
type DestinyDefinitionsDestinyItemInvestmentStatDefinition = {
  isConditionallyActive?: boolean | undefined
  statTypeHash?: number | undefined
  value?: number | undefined
}
type LinksHyperlinkReference = { title?: string | undefined; url?: string | undefined }
type DestinyDefinitionsDestinyObjectiveDisplayProperties = {
  activityHash?: number | undefined
  displayOnItemPreviewScreen?: boolean | undefined
}
type DestinyDefinitionsDestinyItemPerkEntryDefinition = {
  perkHash?: number | undefined
  perkVisibility?: number | undefined
  requirementDisplayString?: string | undefined
}
type DestinyDefinitionsItemsDestinyPlugRuleDefinition = { failureMessage?: string | undefined }
type DestinyDefinitionsItemsDestinyDerivedItemDefinition = {
  iconPath?: string | undefined
  itemDescription?: string | undefined
  itemDetail?: string | undefined
  itemHash?: number | undefined
  itemName?: string | undefined
  vendorItemIndex?: number | undefined
}
type DestinyDefinitionsItemsDestinyDerivedItemCategoryDefinition = {
  categoryDescription?: string | undefined
  items?: DestinyDefinitionsItemsDestinyDerivedItemDefinition[] | undefined
}
type DestinyDefinitionsDestinyItemVersionDefinition = { powerCapHash?: number | undefined }
type DestinyDefinitionsDestinyItemSetBlockEntryDefinition = {
  itemHash?: number | undefined
  trackingValue?: number | undefined
}
type DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition = {
  defaultVisible?: boolean | undefined
  plugItemHash?: number | undefined
  socketTypeHash?: number | undefined
}
type DestinyDefinitionsDestinyItemSocketCategoryDefinition = {
  socketCategoryHash?: number | undefined
  socketIndexes?: number[] | undefined
}
type DestinyDefinitionsDestinyItemSocketEntryPlugItemDefinition = {
  plugItemHash?: number | undefined
}
type DestinyDefinitionsDestinyItemSocketEntryDefinition = {
  defaultVisible?: boolean | undefined
  hidePerksInItemTooltip?: boolean | undefined
  plugSources?: number | undefined
  preventInitializationOnVendorPurchase?: boolean | undefined
  randomizedPlugSetHash?: number | undefined
  reusablePlugItems?: DestinyDefinitionsDestinyItemSocketEntryPlugItemDefinition[] | undefined
  reusablePlugSetHash?: number | undefined
  singleInitialItemHash?: number | undefined
  socketTypeHash?: number | undefined
}
type DestinyDefinitionsDestinyInventoryItemStatDefinition = {
  displayMaximum?: number | undefined
  maximum?: number | undefined
  minimum?: number | undefined
  statHash?: number | undefined
  value?: number | undefined
}
type DestinyDefinitionsSourcesDestinyItemSourceDefinition = {
  computedStats?: { [x: string]: DestinyDefinitionsDestinyInventoryItemStatDefinition } | undefined
  level?: number | undefined
  maxLevelRequired?: number | undefined
  maxQuality?: number | undefined
  minLevelRequired?: number | undefined
  minQuality?: number | undefined
  sourceHashes?: number[] | undefined
}
type DestinyDefinitionsDestinyItemVendorSourceReference = {
  vendorHash?: number | undefined
  vendorItemIndexes?: number[] | undefined
}
type DestinyDefinitionsDestinyItemTooltipNotification = {
  displayString?: string | undefined
  displayStyle?: string | undefined
}
type DestinyDefinitionsDestinyGearArtArrangementReference = {
  artArrangementHash?: number | undefined
  classHash?: number | undefined
}
type DestinyDefinitionsDestinyInventoryItemDefinition = {
  action?:
    | {
        actionTypeLabel?: string | undefined
        consumeEntireStack?: boolean | undefined
        deleteOnAction?: boolean | undefined
        isPositive?: boolean | undefined
        overlayIcon?: string | undefined
        overlayScreenName?: string | undefined
        progressionRewards?: DestinyDefinitionsDestinyProgressionRewardDefinition[] | undefined
        requiredCooldownHash?: number | undefined
        requiredCooldownSeconds?: number | undefined
        requiredItems?: DestinyDefinitionsDestinyItemActionRequiredItemDefinition[] | undefined
        requiredLocation?: string | undefined
        useOnAcquire?: boolean | undefined
        verbDescription?: string | undefined
        verbName?: string | undefined
      }
    | undefined
  allowActions?: boolean | undefined
  animations?: DestinyDefinitionsAnimationsDestinyAnimationReference[] | undefined
  backgroundColor?:
    | {
        alpha?: string | undefined
        blue?: string | undefined
        green?: string | undefined
        red?: string | undefined
      }
    | undefined
  breakerType?: number | undefined
  breakerTypeHash?: number | undefined
  classType?: number | undefined
  collectibleHash?: number | undefined
  crafting?:
    | {
        baseMaterialRequirements?: number | undefined
        bonusPlugs?: DestinyDefinitionsDestinyItemCraftingBlockBonusPlugDefinition[] | undefined
        failedRequirementStrings?: string[] | undefined
        outputItemHash?: number | undefined
        requiredSocketTypeHashes?: number[] | undefined
      }
    | undefined
  damageTypeHashes?: number[] | undefined
  damageTypes?: number[] | undefined
  defaultDamageType?: number | undefined
  defaultDamageTypeHash?: number | undefined
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition | undefined
  displaySource?: string | undefined
  doesPostmasterPullHaveSideEffects?: boolean | undefined
  emblemObjectiveHash?: number | undefined
  equippable?: boolean | undefined
  equippingBlock?:
    | {
        ammoType?: number | undefined
        attributes?: number | undefined
        displayStrings?: string[] | undefined
        equipmentSlotTypeHash?: number | undefined
        gearsetItemHash?: number | undefined
        uniqueLabel?: string | undefined
        uniqueLabelHash?: number | undefined
      }
    | undefined
  flavorText?: string | undefined
  gearset?: { itemList?: number[] | undefined; trackingValueMax?: number | undefined } | undefined
  hash?: number | undefined
  iconWatermark?: string | undefined
  iconWatermarkShelved?: string | undefined
  index?: number | undefined
  inventory?:
    | {
        bucketTypeHash?: number | undefined
        expirationTooltip?: string | undefined
        expiredInActivityMessage?: string | undefined
        expiredInOrbitMessage?: string | undefined
        isInstanceItem?: boolean | undefined
        maxStackSize?: number | undefined
        recipeItemHash?: number | undefined
        recoveryBucketTypeHash?: number | undefined
        stackUniqueLabel?: string | undefined
        suppressExpirationWhenObjectivesComplete?: boolean | undefined
        tierType?: number | undefined
        tierTypeHash?: number | undefined
        tierTypeName?: string | undefined
      }
    | undefined
  investmentStats?: DestinyDefinitionsDestinyItemInvestmentStatDefinition[] | undefined
  isWrapper?: boolean | undefined
  itemCategoryHashes?: number[] | undefined
  itemSubType?: number | undefined
  itemType?: number | undefined
  itemTypeAndTierDisplayName?: string | undefined
  itemTypeDisplayName?: string | undefined
  links?: LinksHyperlinkReference[] | undefined
  loreHash?: number | undefined
  metrics?: { availableMetricCategoryNodeHashes?: number[] | undefined } | undefined
  nonTransferrable?: boolean | undefined
  objectives?:
    | {
        displayActivityHashes?: number[] | undefined
        displayAsStatTracker?: boolean | undefined
        narrative?: string | undefined
        objectiveHashes?: number[] | undefined
        objectiveVerbName?: string | undefined
        perObjectiveDisplayProperties?:
          | DestinyDefinitionsDestinyObjectiveDisplayProperties[]
          | undefined
        questTypeHash?: number | undefined
        questTypeIdentifier?: string | undefined
        questlineItemHash?: number | undefined
        requireFullObjectiveCompletion?: boolean | undefined
      }
    | undefined
  perks?: DestinyDefinitionsDestinyItemPerkEntryDefinition[] | undefined
  plug?:
    | {
        alternatePlugStyle?: number | undefined
        alternateUiPlugLabel?: string | undefined
        enabledMaterialRequirementHash?: number | undefined
        enabledRules?: DestinyDefinitionsItemsDestinyPlugRuleDefinition[] | undefined
        energyCapacity?:
          | {
              capacityValue?: number | undefined
              energyType?: number | undefined
              energyTypeHash?: number | undefined
            }
          | undefined
        energyCost?:
          | {
              energyCost?: number | undefined
              energyType?: number | undefined
              energyTypeHash?: number | undefined
            }
          | undefined
        insertionMaterialRequirementHash?: number | undefined
        insertionRules?: DestinyDefinitionsItemsDestinyPlugRuleDefinition[] | undefined
        isDummyPlug?: boolean | undefined
        onActionRecreateSelf?: boolean | undefined
        parentItemOverride?:
          | {
              additionalEquipRequirementsDisplayStrings?: string[] | undefined
              pipIcon?: string | undefined
            }
          | undefined
        plugAvailability?: number | undefined
        plugCategoryHash?: number | undefined
        plugCategoryIdentifier?: string | undefined
        plugStyle?: number | undefined
        previewItemOverrideHash?: number | undefined
        uiPlugLabel?: string | undefined
      }
    | undefined
  preview?:
    | {
        artifactHash?: number | undefined
        derivedItemCategories?:
          | DestinyDefinitionsItemsDestinyDerivedItemCategoryDefinition[]
          | undefined
        previewActionString?: string | undefined
        previewVendorHash?: number | undefined
        screenStyle?: string | undefined
      }
    | undefined
  quality?:
    | {
        currentVersion?: number | undefined
        displayVersionWatermarkIcons?: string[] | undefined
        infusionCategoryHash?: number | undefined
        infusionCategoryHashes?: number[] | undefined
        infusionCategoryName?: string | undefined
        itemLevels?: number[] | undefined
        progressionLevelRequirementHash?: number | undefined
        qualityLevel?: number | undefined
        versions?: DestinyDefinitionsDestinyItemVersionDefinition[] | undefined
      }
    | undefined
  redacted?: boolean | undefined
  sack?:
    | {
        detailAction?: string | undefined
        openAction?: string | undefined
        openOnAcquire?: boolean | undefined
        selectItemCount?: number | undefined
        vendorSackType?: string | undefined
      }
    | undefined
  screenshot?: string | undefined
  seasonHash?: number | undefined
  secondaryIcon?: string | undefined
  secondaryOverlay?: string | undefined
  secondarySpecial?: string | undefined
  setData?:
    | {
        itemList?: DestinyDefinitionsDestinyItemSetBlockEntryDefinition[] | undefined
        questLineDescription?: string | undefined
        questLineName?: string | undefined
        questStepSummary?: string | undefined
        requireOrderedSetItemAdd?: boolean | undefined
        setIsFeatured?: boolean | undefined
        setType?: string | undefined
      }
    | undefined
  sockets?:
    | {
        detail?: string | undefined
        intrinsicSockets?: DestinyDefinitionsDestinyItemIntrinsicSocketEntryDefinition[] | undefined
        socketCategories?: DestinyDefinitionsDestinyItemSocketCategoryDefinition[] | undefined
        socketEntries?: DestinyDefinitionsDestinyItemSocketEntryDefinition[] | undefined
      }
    | undefined
  sourceData?:
    | {
        exclusive?: number | undefined
        sourceHashes?: number[] | undefined
        sources?: DestinyDefinitionsSourcesDestinyItemSourceDefinition[] | undefined
        vendorSources?: DestinyDefinitionsDestinyItemVendorSourceReference[] | undefined
      }
    | undefined
  specialItemType?: number | undefined
  stats?:
    | {
        disablePrimaryStatDisplay?: boolean | undefined
        hasDisplayableStats?: boolean | undefined
        primaryBaseStatHash?: number | undefined
        statGroupHash?: number | undefined
        stats?: { [x: string]: DestinyDefinitionsDestinyInventoryItemStatDefinition } | undefined
      }
    | undefined
  summary?: { sortPriority?: number | undefined } | undefined
  summaryItemHash?: number | undefined
  talentGrid?:
    | {
        buildName?: string | undefined
        hudDamageType?: number | undefined
        hudIcon?: string | undefined
        itemDetailString?: string | undefined
        talentGridHash?: number | undefined
      }
    | undefined
  tooltipNotifications?: DestinyDefinitionsDestinyItemTooltipNotification[] | undefined
  tooltipStyle?: string | undefined
  traitHashes?: number[] | undefined
  traitIds?: string[] | undefined
  translationBlock?:
    | {
        arrangements?: DestinyDefinitionsDestinyGearArtArrangementReference[] | undefined
        customDyes?: DestinyDyeReference[] | undefined
        defaultDyes?: DestinyDyeReference[] | undefined
        hasGeometry?: boolean | undefined
        lockedDyes?: DestinyDyeReference[] | undefined
        weaponPatternHash?: number | undefined
        weaponPatternIdentifier?: string | undefined
      }
    | undefined
  uiItemDisplayStyle?: string | undefined
  value?:
    | {
        itemValue?: DestinyDestinyItemQuantity[] | undefined
        valueDescription?: string | undefined
      }
    | undefined
}
type TokensCollectibleDefinitions = {
  CollectibleDefinition?: DestinyDefinitionsCollectiblesDestinyCollectibleDefinition | undefined
  DestinyInventoryItemDefinition?: DestinyDefinitionsDestinyInventoryItemDefinition | undefined
}
type DestinyDefinitionsRecordsDestinyRecordCompletionBlock = {
  ScoreValue?: number | undefined
  partialCompletionObjectiveCountThreshold?: number | undefined
  shouldFireToast?: boolean | undefined
  toastStyle?: number | undefined
}
type DestinyDefinitionsRecordsDestinyRecordExpirationBlock = {
  description?: string | undefined
  hasExpiration?: boolean | undefined
  icon?: string | undefined
}
type DestinyDefinitionsRecordsDestinyRecordIntervalObjective = {
  intervalObjectiveHash?: number | undefined
  intervalScoreValue?: number | undefined
}
type DestinyDefinitionsRecordsDestinyRecordIntervalRewards = {
  intervalRewardItems?: DestinyDestinyItemQuantity[] | undefined
}
type DestinyDefinitionsRecordsSchemaRecordStateBlock = {
  featuredPriority?: number | undefined
  obscuredString?: string | undefined
}
type DestinyDefinitionsRecordsDestinyRecordTitleBlock = {
  gildingTrackingRecordHash?: number | undefined
  hasTitle?: boolean | undefined
  titlesByGender?: { [x: string]: string } | undefined
  titlesByGenderHash?: { [x: string]: string } | undefined
}
type DestinyDefinitionsRecordsDestinyRecordDefinition = {
  completionInfo?: DestinyDefinitionsRecordsDestinyRecordCompletionBlock | undefined
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition | undefined
  expirationInfo?: DestinyDefinitionsRecordsDestinyRecordExpirationBlock | undefined
  forTitleGilding?: boolean | undefined
  hash?: number | undefined
  index?: number | undefined
  intervalInfo?:
    | {
        intervalObjectives?: DestinyDefinitionsRecordsDestinyRecordIntervalObjective[] | undefined
        intervalRewards?: DestinyDefinitionsRecordsDestinyRecordIntervalRewards[] | undefined
        originalObjectiveArrayInsertionIndex?: number | undefined
      }
    | undefined
  loreHash?: number | undefined
  objectiveHashes?: number[] | undefined
  parentNodeHashes?: number[] | undefined
  presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock | undefined
  presentationNodeType?: number | undefined
  recordValueStyle?: number | undefined
  redacted?: boolean | undefined
  requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock | undefined
  rewardItems?: DestinyDestinyItemQuantity[] | undefined
  scope?: number | undefined
  shouldShowLargeIcons?: boolean | undefined
  stateInfo?: DestinyDefinitionsRecordsSchemaRecordStateBlock | undefined
  titleInfo?: DestinyDefinitionsRecordsDestinyRecordTitleBlock | undefined
  traitHashes?: number[] | undefined
  traitIds?: string[] | undefined
}
type TokensRewardAvailabilityModel = {
  CollectibleDefinitions?: TokensCollectibleDefinitions[] | undefined
  DecryptedToken?: string | undefined
  GameEarnByDate?: string | undefined
  HasExistingCode?: boolean | undefined
  HasOffer?: boolean | undefined
  IsLoyaltyReward?: boolean | undefined
  IsOffer?: boolean | undefined
  OfferApplied?: boolean | undefined
  RecordDefinitions?: DestinyDefinitionsRecordsDestinyRecordDefinition[] | undefined
  RedemptionEndDate?: string | undefined
  ShopifyEndDate?: string | undefined
}
type TokensUserRewardAvailabilityModel = {
  AvailabilityModel?: TokensRewardAvailabilityModel | undefined
  IsAvailableForUser?: boolean | undefined
  IsUnlockedForUser?: boolean | undefined
}
type TokensBungieRewardDisplay = {
  ObjectiveDisplayProperties?: TokensRewardDisplayProperties | undefined
  RewardDisplayProperties?: TokensRewardDisplayProperties | undefined
  UserRewardAvailabilityModel?: TokensUserRewardAvailabilityModel | undefined
}
type TrendingTrendingEntry = {
  creationDate?: string | undefined
  displayName?: string | undefined
  endDate?: string | undefined
  entityType?: number | undefined
  featureImage?: string | undefined
  identifier?: string | undefined
  image?: string | undefined
  isFeatured?: boolean | undefined
  items?: TrendingTrendingEntry[] | undefined
  link?: string | undefined
  mp4Video?: string | undefined
  startDate?: string | undefined
  tagline?: string | undefined
  webmVideo?: string | undefined
  weight?: number | undefined
}
type SearchResultOfTrendingEntry = {
  hasMore?: boolean | undefined
  query?: QueriesPagedQuery | undefined
  replacementContinuationToken?: string | undefined
  results?: TrendingTrendingEntry[] | undefined
  totalResults?: number | undefined
  useTotalResults?: boolean | undefined
}
type TrendingTrendingCategory = {
  categoryId?: string | undefined
  categoryName?: string | undefined
  entries?: SearchResultOfTrendingEntry | undefined
}
type TrendingTrendingCategories = { categories?: TrendingTrendingCategory[] | undefined }
type TrendingTrendingEntryCommunityCreation = {
  author?: string | undefined
  authorMembershipId?: bigint | undefined
  body?: string | undefined
  media?: string | undefined
  postId?: bigint | undefined
  title?: string | undefined
  upvotes?: number | undefined
}
type DestinyActivitiesDestinyPublicActivityStatus = {
  challengeObjectiveHashes?: number[] | undefined
  modifierHashes?: number[] | undefined
  rewardTooltipItems?: DestinyDestinyItemQuantity[] | undefined
}
type TrendingTrendingEntryDestinyActivity = {
  activityHash?: number | undefined
  status?: DestinyActivitiesDestinyPublicActivityStatus | undefined
}
type TrendingTrendingEntryDestinyItem = { itemHash?: number | undefined }
type TrendingTrendingEntryDestinyRitual = {
  dateEnd?: string | undefined
  dateStart?: string | undefined
  eventContent?:
    | {
        about?: string | undefined
        itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[] | undefined
        status?: string | undefined
        tips?: string[] | undefined
      }
    | undefined
  icon?: string | undefined
  image?: string | undefined
  milestoneDetails?:
    | {
        activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[] | undefined
        availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[] | undefined
        endDate?: string | undefined
        milestoneHash?: number | undefined
        order?: number | undefined
        startDate?: string | undefined
        vendorHashes?: number[] | undefined
        vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[] | undefined
      }
    | undefined
  subtitle?: string | undefined
  title?: string | undefined
}
type TrendingTrendingEntryNews = { article?: ContentContentItemPublicContract | undefined }
type TrendingTrendingEntrySupportArticle = {
  article?: ContentContentItemPublicContract | undefined
}
type TrendingTrendingDetail = {
  creation?: TrendingTrendingEntryCommunityCreation | undefined
  destinyActivity?: TrendingTrendingEntryDestinyActivity | undefined
  destinyItem?: TrendingTrendingEntryDestinyItem | undefined
  destinyRitual?: TrendingTrendingEntryDestinyRitual | undefined
  entityType?: number | undefined
  identifier?: string | undefined
  news?: TrendingTrendingEntryNews | undefined
  support?: TrendingTrendingEntrySupportArticle | undefined
}
type ConfigUserTheme = {
  userThemeDescription?: string | undefined
  userThemeId?: number | undefined
  userThemeName?: string | undefined
}
type UserModelsGetCredentialTypesForAccountResponse = {
  credentialAsString?: string | undefined
  credentialDisplayName?: string | undefined
  credentialType?: number | undefined
  isPublic?: boolean | undefined
}
type UserHardLinkedUserMembership = {
  CrossSaveOverriddenMembershipId?: bigint | undefined
  CrossSaveOverriddenType?: number | undefined
  membershipId?: bigint | undefined
  membershipType?: number | undefined
}
type UserUserMembershipData = {
  bungieNetUser?: UserGeneralUser | undefined
  destinyMemberships?: GroupsV2GroupUserInfoCard[] | undefined
  primaryMembershipId?: bigint | undefined
}
type UserUserSearchResponseDetail = {
  bungieGlobalDisplayName?: string | undefined
  bungieGlobalDisplayNameCode?: number | undefined
  bungieNetMembershipId?: bigint | undefined
  destinyMemberships?: UserUserInfoCard[] | undefined
}
type UserUserSearchResponse = {
  hasMore?: boolean | undefined
  page?: number | undefined
  searchResults?: UserUserSearchResponseDetail[] | undefined
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ApplicationsApiUsage | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/App/FirstParty/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ApplicationsApplication[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/CommunityContent/Get/:sort/:mediaFilter/:page/': {
      $get: {
        input: { param: { mediaFilter: number; page: number; sort: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Content/GetContentById/:id/:locale/': {
      $get: {
        input: { param: { id: bigint; locale: string } } & { query: { head?: boolean | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ContentContentItemPublicContract | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ContentContentItemPublicContract | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Content/GetContentType/:type/': {
      $get: {
        input: { param: { type: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ContentModelsContentTypeDescription | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ContentNewsArticleRssResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfContentItemPublicContract | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfContentItemPublicContract | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Content/SearchHelpArticles/:searchtext/:size/': {
      $get: {
        input: { param: { searchtext: string; size: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: unknown } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/EquipItem/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/EquipItems/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyDestinyEquipItemResults | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/InsertSocketPlug/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyItemChangeResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/InsertSocketPlugFree/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyItemChangeResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/PullFromPostmaster/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/SetLockState/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/SetTrackedState/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Items/TransferItem/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/ClearLoadout/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/EquipLoadout/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/SnapshotLoadout/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Actions/Loadouts/UpdateLoadoutIdentifiers/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyDefinitionsDestinyEntitySearchResult | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Awa/AwaProvideAuthorizationResult/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Awa/GetActionToken/:correlationId/': {
      $get: {
        input: { param: { correlationId: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyAdvancedAwaAuthorizationResult | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Awa/Initialize/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyAdvancedAwaInitializeResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Clan/ClanBannerDictionary/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ConfigClanBannerClanBannerSource | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Clan/:groupId/WeeklyRewardState/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyMilestonesDestinyMilestone | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Manifest/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyConfigDestinyManifest | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Manifest/:entityType/:hashIdentifier/': {
      $get: {
        input: { param: { entityType: string; hashIdentifier: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyDefinitionsDestinyDefinition | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Milestones/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: DestinyMilestonesDestinyPublicMilestone } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Milestones/:milestoneHash/Content/': {
      $get: {
        input: { param: { milestoneHash: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyMilestonesDestinyMilestoneContent | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/SearchDestinyPlayerByBungieName/:membershipType/': {
      $post: {
        input: { param: { membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserUserInfoCard[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/AggregateClanStats/:groupId/': {
      $get: {
        input: { param: { groupId: bigint } } & { query: { modes?: string | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyHistoricalStatsDestinyClanAggregateStat[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/Definition/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?:
            | { [x: string]: DestinyHistoricalStatsDefinitionsDestinyHistoricalStatsDefinition }
            | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?:
            | { [x: string]: { [x: string]: DestinyHistoricalStatsDestinyLeaderboard } }
            | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?:
            | { [x: string]: { [x: string]: DestinyHistoricalStatsDestinyLeaderboard } }
            | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/PostGameCarnageReport/:activityId/': {
      $get: {
        input: { param: { activityId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyHistoricalStatsDestinyPostGameCarnageReportData | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Stats/PostGameCarnageReport/:activityId/Report/': {
      $post: {
        input: { param: { activityId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Destiny2/Vendors/': {
      $get: {
        input: { query: { components?: number[] | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyPublicVendorsResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?:
            | { [x: string]: DestinyHistoricalStatsDestinyHistoricalStatsByPeriod }
            | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyHistoricalStatsDestinyActivityHistoryResults | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyHistoricalStatsDestinyAggregateActivityResults | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyHistoricalStatsDestinyHistoricalWeaponStatsData | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyHistoricalStatsDestinyHistoricalStatsAccountResult | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?:
            | { [x: string]: { [x: string]: DestinyHistoricalStatsDestinyLeaderboard } }
            | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyProfileResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyCharacterResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyCollectibleNodeDetailResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyVendorsResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyVendorResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyItemResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: DestinyResponsesDestinyLinkedProfilesResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Fireteam/Clan/:groupId/ActiveCount/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfFireteamSummary | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfFireteamResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Fireteam/Clan/:groupId/Summary/:fireteamId/': {
      $get: {
        input: { param: { fireteamId: bigint; groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: FireteamFireteamResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfFireteamSummary | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Forum/GetForumTagSuggestions/': {
      $get: {
        input: { query: { partialtag?: string | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: TagsModelsContractsTagResponse[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Forum/GetPostAndParent/:childPostId/': {
      $get: {
        input: { param: { childPostId: bigint } } & { query: { showbanned?: string | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Forum/GetPostAndParentAwaitingApproval/:childPostId/': {
      $get: {
        input: { param: { childPostId: bigint } } & { query: { showbanned?: string | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Forum/GetTopicForContent/:contentId/': {
      $get: {
        input: { param: { contentId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: bigint | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Forum/Poll/:topicId/': {
      $get: {
        input: { param: { topicId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumPostSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Forum/Recruit/Summaries/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ForumForumRecruitmentDetail[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GetAvailableLocales/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: string } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GlobalAlerts/': {
      $get: {
        input: { query: { includestreaming?: boolean | undefined } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GlobalAlert[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/GetAvailableAvatars/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: string } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/GetAvailableThemes/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ConfigGroupTheme[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/GetUserClanInviteSetting/:mType/': {
      $get: {
        input: { param: { mType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/Name/:groupName/:groupType/': {
      $get: {
        input: { param: { groupName: string; groupType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/NameV2/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/Recommended/:groupType/:createDateRange/': {
      $post: {
        input: { param: { createDateRange: number; groupType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupV2Card[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/Recover/:membershipType/:membershipId/:groupType/': {
      $get: {
        input: { param: { groupType: number; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupMembershipSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/Search/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupPotentialMembershipSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GetGroupsForMemberResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Admin/AbdicateFoundership/:membershipType/:founderIdNew/': {
      $post: {
        input: { param: { founderIdNew: bigint; groupId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/AdminsAndFounder/': {
      $get: {
        input: { param: { groupId: bigint } } & { query: { currentpage: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfGroupMember | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Banned/': {
      $get: {
        input: { param: { groupId: bigint } } & { query: { currentpage: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfGroupBan | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Edit/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/EditClanBanner/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/EditFounderOptions/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/': {
      $get: {
        input: { param: { groupId: bigint } } & {
          query: {
            currentpage: number
            memberType?: number | undefined
            nameSearch?: string | undefined
          }
        }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfGroupMember | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/Approve/:membershipType/:membershipId/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/ApproveAll/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: EntitiesEntityActionResult[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/ApproveList/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: EntitiesEntityActionResult[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/DenyAll/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: EntitiesEntityActionResult[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/DenyList/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: EntitiesEntityActionResult[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/IndividualInvite/:membershipType/:membershipId/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupApplicationResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/IndividualInviteCancel/:membershipType/:membershipId/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupApplicationResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/InvitedIndividuals/': {
      $get: {
        input: { param: { groupId: bigint } } & { query: { currentpage: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfGroupMemberApplication | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/Pending/': {
      $get: {
        input: { param: { groupId: bigint } } & { query: { currentpage: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfGroupMemberApplication | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Ban/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Kick/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupMemberLeaveResult | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
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
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/Members/:membershipType/:membershipId/Unban/': {
      $post: {
        input: { param: { groupId: bigint; membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: number | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/OptionalConversations/': {
      $get: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: GroupsV2GroupOptionalConversation[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/OptionalConversations/Add/': {
      $post: {
        input: { param: { groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: bigint | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/GroupV2/:groupId/OptionalConversations/Edit/:conversationId/': {
      $post: {
        input: { param: { conversationId: bigint; groupId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: bigint | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Settings/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: CommonModelsCoreSettingsConfiguration | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SocialFriendsBungieFriendListResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Add/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Remove/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SocialFriendsBungieFriendRequestListResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/Accept/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/Decline/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/Friends/Requests/Remove/:membershipId/': {
      $post: {
        input: { param: { membershipId: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Social/PlatformFriends/:friendPlatform/:page/': {
      $get: {
        input: { param: { friendPlatform: number; page: string } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SocialFriendsPlatformFriendResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/ApplyMissingOffers/:partnerApplicationId/:targetBnetMembershipId/': {
      $post: {
        input: { param: { partnerApplicationId: number; targetBnetMembershipId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/ClaimOffer/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/ForceDropsRepair/': {
      $post: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: boolean | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/History/:partnerApplicationId/:targetBnetMembershipId/': {
      $get: {
        input: { param: { partnerApplicationId: number; targetBnetMembershipId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: TokensPartnerOfferSkuHistoryResponse[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Partner/History/:targetBnetMembershipId/Application/:partnerApplicationId/': {
      $get: {
        input: { param: { partnerApplicationId: number; targetBnetMembershipId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: TokensPartnerRewardHistoryResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Rewards/BungieRewards/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: TokensBungieRewardDisplay } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Rewards/GetRewardsForPlatformUser/:membershipId/:membershipType/': {
      $get: {
        input: { param: { membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: TokensBungieRewardDisplay } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Tokens/Rewards/GetRewardsForUser/:membershipId/': {
      $get: {
        input: { param: { membershipId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: TokensBungieRewardDisplay } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Trending/Categories/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: TrendingTrendingCategories | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Trending/Categories/:categoryId/:pageNumber/': {
      $get: {
        input: { param: { categoryId: string; pageNumber: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: SearchResultOfTrendingEntry | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Trending/Details/:trendingEntryType/:identifier/': {
      $get: {
        input: { param: { identifier: string; trendingEntryType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: TrendingTrendingDetail | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetAvailableThemes/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: ConfigUserTheme[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetBungieNetUserById/:id/': {
      $get: {
        input: { param: { id: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserGeneralUser | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetCredentialTypesForTargetAccount/:membershipId/': {
      $get: {
        input: { param: { membershipId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserModelsGetCredentialTypesForAccountResponse[] | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetMembershipFromHardLinkedCredential/:crType/:credential/': {
      $get: {
        input: { param: { credential: string; crType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserHardLinkedUserMembership | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetMembershipsById/:membershipId/:membershipType/': {
      $get: {
        input: { param: { membershipId: bigint; membershipType: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserUserMembershipData | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetMembershipsForCurrentUser/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserUserMembershipData | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/GetSanitizedPlatformDisplayNames/:membershipId/': {
      $get: {
        input: { param: { membershipId: bigint } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: string } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/Search/GlobalName/:page/': {
      $post: {
        input: { param: { page: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserUserSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/User/Search/Prefix/:displayNamePrefix/:page/': {
      $get: {
        input: { param: { displayNamePrefix: string; page: number } }
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: UserUserSearchResponse | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/UserSystemOverrides/': {
      $get: {
        input: {}
        output: {
          DetailedErrorTrace?: string | undefined
          ErrorCode?: number | undefined
          ErrorStatus?: string | undefined
          Message?: string | undefined
          MessageData?: { [x: string]: string } | undefined
          Response?: { [x: string]: CommonModelsCoreSystem } | undefined
          ThrottleSeconds?: number | undefined
        }
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
