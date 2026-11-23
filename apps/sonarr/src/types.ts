type ApiInfoResource = {
  current?: (string | null) | undefined
  deprecated?: (string[] | null) | undefined
}
type ProblemDetails = {
  type?: (string | null) | undefined
  title?: (string | null) | undefined
  status?: (number | null) | undefined
  detail?: (string | null) | undefined
  instance?: (string | null) | undefined
}
type SelectOption = {
  value?: number | undefined
  name?: (string | null) | undefined
  order?: number | undefined
  hint?: (string | null) | undefined
}
type PrivacyLevel = 'normal' | 'password' | 'apiKey' | 'userName'
type Field = {
  order?: number | undefined
  name?: (string | null) | undefined
  label?: (string | null) | undefined
  unit?: (string | null) | undefined
  helpText?: (string | null) | undefined
  helpTextWarning?: (string | null) | undefined
  helpLink?: (string | null) | undefined
  value?: { [x: string]: unknown } | undefined
  type?: (string | null) | undefined
  advanced?: boolean | undefined
  selectOptions?: (SelectOption[] | null) | undefined
  selectOptionsProviderAction?: (string | null) | undefined
  section?: (string | null) | undefined
  hidden?: (string | null) | undefined
  privacy?: PrivacyLevel | undefined
  placeholder?: (string | null) | undefined
  isFloat?: boolean | undefined
}
type AutoTaggingSpecificationSchema = {
  id?: number | undefined
  name?: (string | null) | undefined
  implementation?: (string | null) | undefined
  implementationName?: (string | null) | undefined
  negate?: boolean | undefined
  required?: boolean | undefined
  fields?: (Field[] | null) | undefined
}
type AutoTaggingResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  removeTagsAutomatically?: boolean | undefined
  tags?: (number[] | null) | undefined
  specifications?: (AutoTaggingSpecificationSchema[] | null) | undefined
}
type BackupType = 'scheduled' | 'manual' | 'update'
type BackupResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  path?: (string | null) | undefined
  type?: BackupType | undefined
  size?: bigint | undefined
  time?: string | undefined
}
type SortDirection = 'default' | 'ascending' | 'descending'
type DownloadProtocol = 'unknown' | 'usenet' | 'torrent'
type Language = { id?: number | undefined; name?: (string | null) | undefined }
type QualitySource =
  | 'unknown'
  | 'television'
  | 'televisionRaw'
  | 'web'
  | 'webRip'
  | 'dvd'
  | 'bluray'
  | 'blurayRaw'
type Quality = {
  id?: number | undefined
  name?: (string | null) | undefined
  source?: QualitySource | undefined
  resolution?: number | undefined
}
type Revision = {
  version?: number | undefined
  real?: number | undefined
  isRepack?: boolean | undefined
}
type QualityModel = { quality?: Quality | undefined; revision?: Revision | undefined }
type CustomFormatSpecificationSchema = {
  id?: number | undefined
  name?: (string | null) | undefined
  implementation?: (string | null) | undefined
  implementationName?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  negate?: boolean | undefined
  required?: boolean | undefined
  fields?: (Field[] | null) | undefined
  presets?: (CustomFormatSpecificationSchema[] | null) | undefined
}
type CustomFormatResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  includeCustomFormatWhenRenaming?: (boolean | null) | undefined
  specifications?: (CustomFormatSpecificationSchema[] | null) | undefined
}
type AlternateTitleResource = {
  title?: (string | null) | undefined
  seasonNumber?: (number | null) | undefined
  sceneSeasonNumber?: (number | null) | undefined
  sceneOrigin?: (string | null) | undefined
  comment?: (string | null) | undefined
}
type SeriesStatusType = 'continuing' | 'ended' | 'upcoming' | 'deleted'
type MediaCoverTypes =
  | 'unknown'
  | 'poster'
  | 'banner'
  | 'fanart'
  | 'screenshot'
  | 'headshot'
  | 'clearlogo'
type MediaCover = {
  coverType?: MediaCoverTypes | undefined
  url?: (string | null) | undefined
  remoteUrl?: (string | null) | undefined
}
type SeasonStatisticsResource = {
  nextAiring?: (string | null) | undefined
  previousAiring?: (string | null) | undefined
  episodeFileCount?: number | undefined
  episodeCount?: number | undefined
  totalEpisodeCount?: number | undefined
  sizeOnDisk?: bigint | undefined
  releaseGroups?: (string[] | null) | undefined
  percentOfEpisodes?: number | undefined
}
type SeasonResource = {
  seasonNumber?: number | undefined
  monitored?: boolean | undefined
  title?: (string | null) | undefined
  statistics?: SeasonStatisticsResource | undefined
  images?: (MediaCover[] | null) | undefined
}
type SeasonTypeResource = {
  name?: (string | null) | undefined
  type?: (string | null) | undefined
  seasonNumbers?: (number[] | null) | undefined
  episodeCount?: number | undefined
}
type SeriesTranslationResource = {
  language?: Language | undefined
  title?: (string | null) | undefined
  overview?: (string | null) | undefined
}
type NewItemMonitorTypes = 'all' | 'none'
type SeriesTypes = 'standard' | 'daily' | 'anime'
type SeriesFolderResource = {
  language?: Language | undefined
  folder?: (string | null) | undefined
}
type MonitorTypes =
  | 'unknown'
  | 'all'
  | 'future'
  | 'missing'
  | 'existing'
  | 'firstSeason'
  | 'lastSeason'
  | 'latestSeason'
  | 'pilot'
  | 'recent'
  | 'monitorSpecials'
  | 'unmonitorSpecials'
  | 'none'
  | 'skip'
type AddSeriesOptions = {
  ignoreEpisodesWithFiles?: boolean | undefined
  ignoreEpisodesWithoutFiles?: boolean | undefined
  monitor?: MonitorTypes | undefined
  searchForMissingEpisodes?: boolean | undefined
  searchForCutoffUnmetEpisodes?: boolean | undefined
}
type Ratings = { votes?: number | undefined; value?: number | undefined }
type SeriesStatisticsResource = {
  seasonCount?: number | undefined
  episodeFileCount?: number | undefined
  episodeCount?: number | undefined
  totalEpisodeCount?: number | undefined
  sizeOnDisk?: bigint | undefined
  releaseGroups?: (string[] | null) | undefined
  percentOfEpisodes?: number | undefined
}
type SeriesResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  alternateTitles?: (AlternateTitleResource[] | null) | undefined
  sortTitle?: (string | null) | undefined
  status?: SeriesStatusType | undefined
  ended?: boolean | undefined
  profileName?: (string | null) | undefined
  overview?: (string | null) | undefined
  nextAiring?: (string | null) | undefined
  previousAiring?: (string | null) | undefined
  network?: (string | null) | undefined
  airTime?: (string | null) | undefined
  images?: (MediaCover[] | null) | undefined
  language?: Language | undefined
  originalLanguage?: Language | undefined
  remotePoster?: (string | null) | undefined
  seasonType?: (string | null) | undefined
  seasons?: (SeasonResource[] | null) | undefined
  seasonTypes?: (SeasonTypeResource[] | null) | undefined
  translations?: (SeriesTranslationResource[] | null) | undefined
  year?: number | undefined
  path?: (string | null) | undefined
  pendingPath?: (string | null) | undefined
  qualityProfileId?: number | undefined
  seasonFolder?: boolean | undefined
  monitored?: boolean | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
  useSceneNumbering?: boolean | undefined
  runtime?: number | undefined
  tvdbId?: number | undefined
  tvRageId?: number | undefined
  tvMazeId?: number | undefined
  tmdbId?: number | undefined
  firstAired?: (string | null) | undefined
  lastAired?: (string | null) | undefined
  seriesType?: SeriesTypes | undefined
  cleanTitle?: (string | null) | undefined
  originalTitle?: (string | null) | undefined
  cleanOriginalTitle?: (string | null) | undefined
  imdbId?: (string | null) | undefined
  titleSlug?: (string | null) | undefined
  rootFolderPath?: (string | null) | undefined
  folder?: (string | null) | undefined
  folders?: (SeriesFolderResource[] | null) | undefined
  certification?: (string | null) | undefined
  genres?: (string[] | null) | undefined
  tags?: (number[] | null) | undefined
  added?: string | undefined
  addOptions?: AddSeriesOptions | undefined
  ratings?: Ratings | undefined
  statistics?: SeriesStatisticsResource | undefined
  episodesChanged?: (boolean | null) | undefined
  languageProfileId?: number | undefined
}
type BlocklistResource = {
  id?: number | undefined
  seriesId?: number | undefined
  episodeIds?: (number[] | null) | undefined
  sourceTitle?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  date?: string | undefined
  protocol?: DownloadProtocol | undefined
  indexer?: (string | null) | undefined
  message?: (string | null) | undefined
  series?: SeriesResource | undefined
}
type BlocklistResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (BlocklistResource[] | null) | undefined
}
type BlocklistBulkResource = { ids?: (number[] | null) | undefined }
type ReleaseType = 'unknown' | 'singleEpisode' | 'multiEpisode' | 'seasonPack' | 'multiSeasonPack'
type MediaInfoResource = {
  id?: number | undefined
  audioBitrate?: bigint | undefined
  audioChannels?: number | undefined
  audioCodec?: (string | null) | undefined
  audioLanguages?: (string | null) | undefined
  audioStreamCount?: number | undefined
  videoBitDepth?: number | undefined
  videoBitrate?: bigint | undefined
  videoCodec?: (string | null) | undefined
  videoFps?: number | undefined
  videoDynamicRange?: (string | null) | undefined
  videoDynamicRangeType?: (string | null) | undefined
  resolution?: (string | null) | undefined
  runTime?: (string | null) | undefined
  scanType?: (string | null) | undefined
  subtitles?: (string | null) | undefined
}
type EpisodeFileResource = {
  id?: number | undefined
  seriesId?: number | undefined
  seasonNumber?: number | undefined
  relativePath?: (string | null) | undefined
  path?: (string | null) | undefined
  size?: bigint | undefined
  dateAdded?: string | undefined
  sceneName?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  indexerFlags?: (number | null) | undefined
  releaseType?: ReleaseType | undefined
  mediaInfo?: MediaInfoResource | undefined
  qualityCutoffNotMet?: boolean | undefined
}
type EpisodeResource = {
  id?: number | undefined
  seriesId?: number | undefined
  tvdbId?: number | undefined
  episodeFileId?: number | undefined
  seasonNumber?: number | undefined
  episodeNumber?: number | undefined
  title?: (string | null) | undefined
  airDate?: (string | null) | undefined
  airDateUtc?: (string | null) | undefined
  lastSearchTime?: (string | null) | undefined
  runtime?: number | undefined
  finaleType?: (string | null) | undefined
  overview?: (string | null) | undefined
  episodeFile?: EpisodeFileResource | undefined
  hasFile?: boolean | undefined
  monitored?: boolean | undefined
  absoluteEpisodeNumber?: (number | null) | undefined
  sceneAbsoluteEpisodeNumber?: (number | null) | undefined
  sceneEpisodeNumber?: (number | null) | undefined
  sceneSeasonNumber?: (number | null) | undefined
  unverifiedSceneNumbering?: boolean | undefined
  series?: SeriesResource | undefined
  images?: (MediaCover[] | null) | undefined
}
type CommandTrigger = 'unspecified' | 'manual' | 'scheduled'
type Command = {
  sendUpdatesToClient?: boolean | undefined
  updateScheduledTask?: boolean | undefined
  completionMessage?: (string | null) | undefined
  requiresDiskAccess?: boolean | undefined
  isExclusive?: boolean | undefined
  isLongRunning?: boolean | undefined
  name?: (string | null) | undefined
  lastExecutionTime?: (string | null) | undefined
  lastStartTime?: (string | null) | undefined
  trigger?: CommandTrigger | undefined
  suppressMessages?: boolean | undefined
  clientUserAgent?: (string | null) | undefined
}
type CommandPriority = 'normal' | 'high' | 'low'
type CommandStatus =
  | 'queued'
  | 'started'
  | 'completed'
  | 'failed'
  | 'aborted'
  | 'cancelled'
  | 'orphaned'
type CommandResult = 'unknown' | 'successful' | 'unsuccessful' | 'indeterminate'
type CommandResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  commandName?: (string | null) | undefined
  message?: (string | null) | undefined
  body?: Command | undefined
  priority?: CommandPriority | undefined
  status?: CommandStatus | undefined
  result?: CommandResult | undefined
  queued?: string | undefined
  started?: (string | null) | undefined
  ended?: (string | null) | undefined
  duration?: (string | null) | undefined
  exception?: (string | null) | undefined
  trigger?: CommandTrigger | undefined
  clientUserAgent?: (string | null) | undefined
  stateChangeTime?: (string | null) | undefined
  sendUpdatesToClient?: boolean | undefined
  updateScheduledTask?: boolean | undefined
  lastExecutionTime?: (string | null) | undefined
}
type CustomFilterResource = {
  id?: number | undefined
  type?: (string | null) | undefined
  label?: (string | null) | undefined
  filters?: ({ [x: string]: { [x: string]: unknown } }[] | null) | undefined
}
type CustomFormatBulkResource = {
  ids?: (number[] | null) | undefined
  includeCustomFormatWhenRenaming?: (boolean | null) | undefined
}
type EpisodeResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (EpisodeResource[] | null) | undefined
}
type DelayProfileResource = {
  id?: number | undefined
  enableUsenet?: boolean | undefined
  enableTorrent?: boolean | undefined
  preferredProtocol?: DownloadProtocol | undefined
  usenetDelay?: number | undefined
  torrentDelay?: number | undefined
  bypassIfHighestQuality?: boolean | undefined
  bypassIfAboveCustomFormatScore?: boolean | undefined
  minimumCustomFormatScore?: number | undefined
  order?: number | undefined
  tags?: (number[] | null) | undefined
}
type DiskSpaceResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  label?: (string | null) | undefined
  freeSpace?: bigint | undefined
  totalSpace?: bigint | undefined
}
type ProviderMessageType = 'info' | 'warning' | 'error'
type ProviderMessage = {
  message?: (string | null) | undefined
  type?: ProviderMessageType | undefined
}
type DownloadClientResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (DownloadClientResource[] | null) | undefined
  enable?: boolean | undefined
  protocol?: DownloadProtocol | undefined
  priority?: number | undefined
  removeCompletedDownloads?: boolean | undefined
  removeFailedDownloads?: boolean | undefined
}
type ApplyTags = 'add' | 'remove' | 'replace'
type DownloadClientBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enable?: (boolean | null) | undefined
  priority?: (number | null) | undefined
  removeCompletedDownloads?: (boolean | null) | undefined
  removeFailedDownloads?: (boolean | null) | undefined
}
type DownloadClientConfigResource = {
  id?: number | undefined
  downloadClientWorkingFolders?: (string | null) | undefined
  enableCompletedDownloadHandling?: boolean | undefined
  autoRedownloadFailed?: boolean | undefined
  autoRedownloadFailedFromInteractiveSearch?: boolean | undefined
}
type EpisodesMonitoredResource = {
  episodeIds?: (number[] | null) | undefined
  monitored?: boolean | undefined
}
type EpisodeFileListResource = {
  episodeFileIds?: (number[] | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  sceneName?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
}
type HealthCheckResult = 'ok' | 'notice' | 'warning' | 'error'
type HealthResource = {
  id?: number | undefined
  source?: (string | null) | undefined
  type?: HealthCheckResult | undefined
  message?: (string | null) | undefined
  wikiUrl?: (string | null) | undefined
}
type EpisodeHistoryEventType =
  | 'unknown'
  | 'grabbed'
  | 'seriesFolderImported'
  | 'downloadFolderImported'
  | 'downloadFailed'
  | 'episodeFileDeleted'
  | 'episodeFileRenamed'
  | 'downloadIgnored'
type HistoryResource = {
  id?: number | undefined
  episodeId?: number | undefined
  seriesId?: number | undefined
  sourceTitle?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  qualityCutoffNotMet?: boolean | undefined
  date?: string | undefined
  downloadId?: (string | null) | undefined
  eventType?: EpisodeHistoryEventType | undefined
  data?: ({ [x: string]: string | null } | null) | undefined
  episode?: EpisodeResource | undefined
  series?: SeriesResource | undefined
}
type HistoryResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (HistoryResource[] | null) | undefined
}
type AuthenticationType = 'none' | 'basic' | 'forms' | 'external' | 'oidc'
type AuthenticationRequiredType = 'enabled' | 'disabledForLocalAddresses' | 'disabledForLocalhost'
type UpdateMechanism = 'builtIn' | 'script' | 'external' | 'apt' | 'docker'
type ProxyType = 'http' | 'socks4' | 'socks5'
type CertificateValidationType = 'enabled' | 'disabledForLocalAddresses' | 'disabled'
type HostConfigResource = {
  id?: number | undefined
  bindAddress?: (string | null) | undefined
  port?: number | undefined
  sslPort?: number | undefined
  enableSsl?: boolean | undefined
  launchBrowser?: boolean | undefined
  authenticationMethod?: AuthenticationType | undefined
  authenticationRequired?: AuthenticationRequiredType | undefined
  allowedHosts?: (string | null) | undefined
  analyticsEnabled?: boolean | undefined
  username?: (string | null) | undefined
  password?: (string | null) | undefined
  passwordConfirmation?: (string | null) | undefined
  oidcAuthority?: (string | null) | undefined
  oidcClientId?: (string | null) | undefined
  oidcClientSecret?: (string | null) | undefined
  oidcUserIdentifier?: (string | null) | undefined
  oidcScopes?: (string | null) | undefined
  logLevel?: (string | null) | undefined
  logSizeLimit?: number | undefined
  consoleLogLevel?: (string | null) | undefined
  branch?: (string | null) | undefined
  apiKey?: (string | null) | undefined
  sslCertPath?: (string | null) | undefined
  sslKeyPath?: (string | null) | undefined
  sslCertPassword?: (string | null) | undefined
  urlBase?: (string | null) | undefined
  trustedNetworks?: (string | null) | undefined
  instanceName?: (string | null) | undefined
  applicationUrl?: (string | null) | undefined
  updateAutomatically?: boolean | undefined
  updateMechanism?: UpdateMechanism | undefined
  updateScriptPath?: (string | null) | undefined
  proxyEnabled?: boolean | undefined
  proxyType?: ProxyType | undefined
  proxyHostname?: (string | null) | undefined
  proxyPort?: number | undefined
  proxyUsername?: (string | null) | undefined
  proxyPassword?: (string | null) | undefined
  proxyBypassFilter?: (string | null) | undefined
  proxyBypassLocalAddresses?: boolean | undefined
  certificateValidation?: CertificateValidationType | undefined
  backupFolder?: (string | null) | undefined
  backupInterval?: number | undefined
  backupRetention?: number | undefined
  trustCgnatIpAddresses?: boolean | undefined
}
type ImportListType = 'program' | 'plex' | 'trakt' | 'simkl' | 'tmdb' | 'other' | 'advanced'
type TagExistingType = 'none' | 'add' | 'sync'
type ImportListResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (ImportListResource[] | null) | undefined
  enableAutomaticAdd?: boolean | undefined
  searchForMissingEpisodes?: boolean | undefined
  shouldMonitor?: MonitorTypes | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
  rootFolderPath?: (string | null) | undefined
  qualityProfileId?: number | undefined
  seriesType?: SeriesTypes | undefined
  language?: Language | undefined
  seasonFolder?: boolean | undefined
  listType?: ImportListType | undefined
  listOrder?: number | undefined
  minRefreshInterval?: string | undefined
  tagExisting?: TagExistingType | undefined
}
type ImportListBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enableAutomaticAdd?: (boolean | null) | undefined
  rootFolderPath?: (string | null) | undefined
  qualityProfileId?: (number | null) | undefined
  tagExisting?: TagExistingType | undefined
}
type ListSyncLevelType = 'disabled' | 'logOnly' | 'keepAndUnmonitor' | 'keepAndTag'
type ImportListConfigResource = {
  id?: number | undefined
  listSyncLevel?: ListSyncLevelType | undefined
  listSyncTag?: number | undefined
}
type ImportListExclusionResource = {
  id?: number | undefined
  tvdbId?: number | undefined
  title?: (string | null) | undefined
}
type ImportListExclusionResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (ImportListExclusionResource[] | null) | undefined
}
type ImportListExclusionBulkResource = { ids?: (number[] | null) | undefined }
type IndexerResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (IndexerResource[] | null) | undefined
  enableRss?: boolean | undefined
  enableAutomaticSearch?: boolean | undefined
  enableInteractiveSearch?: boolean | undefined
  supportsRss?: boolean | undefined
  supportsSearch?: boolean | undefined
  protocol?: DownloadProtocol | undefined
  priority?: number | undefined
  seasonSearchMaximumSingleEpisodeAge?: number | undefined
  downloadClientId?: number | undefined
}
type IndexerBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enableRss?: (boolean | null) | undefined
  enableAutomaticSearch?: (boolean | null) | undefined
  enableInteractiveSearch?: (boolean | null) | undefined
  priority?: (number | null) | undefined
  seasonSearchMaximumSingleEpisodeAge?: (number | null) | undefined
}
type IndexerConfigResource = {
  id?: number | undefined
  minimumAge?: number | undefined
  retention?: number | undefined
  maximumSize?: number | undefined
  rssSyncInterval?: number | undefined
}
type IndexerFlagResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  nameLower?: (string | null) | undefined
}
type LanguageResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  nameLower?: (string | null) | undefined
}
type LanguageProfileItemResource = {
  id?: number | undefined
  language?: Language | undefined
  allowed?: boolean | undefined
}
type LanguageProfileResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  upgradeAllowed?: boolean | undefined
  cutoff?: Language | undefined
  languages?: (LanguageProfileItemResource[] | null) | undefined
}
type LocalizationResource = {
  id?: number | undefined
  strings?: ({ [x: string]: string | null } | null) | undefined
}
type LocalizationLanguageResource = { identifier?: (string | null) | undefined }
type LogResource = {
  id?: number | undefined
  time?: string | undefined
  exception?: (string | null) | undefined
  exceptionType?: (string | null) | undefined
  level?: (string | null) | undefined
  logger?: (string | null) | undefined
  message?: (string | null) | undefined
  method?: (string | null) | undefined
}
type LogResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (LogResource[] | null) | undefined
}
type LogFileResource = {
  id?: number | undefined
  filename?: (string | null) | undefined
  lastWriteTime?: string | undefined
  contentsUrl?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
}
type RejectionType = 'permanent' | 'temporary'
type ImportRejectionResource = {
  reason?: (string | null) | undefined
  type?: RejectionType | undefined
}
type ManualImportResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  relativePath?: (string | null) | undefined
  folderName?: (string | null) | undefined
  name?: (string | null) | undefined
  size?: bigint | undefined
  series?: SeriesResource | undefined
  seasonNumber?: (number | null) | undefined
  episodes?: (EpisodeResource[] | null) | undefined
  episodeFileId?: (number | null) | undefined
  releaseGroup?: (string | null) | undefined
  quality?: QualityModel | undefined
  languages?: (Language[] | null) | undefined
  qualityWeight?: number | undefined
  downloadId?: (string | null) | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  indexerFlags?: number | undefined
  releaseType?: ReleaseType | undefined
  rejections?: (ImportRejectionResource[] | null) | undefined
}
type ManualImportReprocessResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  seriesId?: number | undefined
  seasonNumber?: (number | null) | undefined
  episodes?: (EpisodeResource[] | null) | undefined
  episodeIds?: (number[] | null) | undefined
  quality?: QualityModel | undefined
  languages?: (Language[] | null) | undefined
  releaseGroup?: (string | null) | undefined
  downloadId?: (string | null) | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  indexerFlags?: number | undefined
  releaseType?: ReleaseType | undefined
  rejections?: (ImportRejectionResource[] | null) | undefined
}
type ProperDownloadTypes = 'preferAndUpgrade' | 'doNotUpgrade' | 'doNotPrefer'
type FileDateType = 'none' | 'localAirDate' | 'utcAirDate'
type RescanAfterRefreshType = 'always' | 'afterManual' | 'never'
type EpisodeTitleRequiredType = 'always' | 'bulkSeasonReleases' | 'never'
type SeasonPackUpgradeType = 'all' | 'threshold' | 'any'
type MediaManagementConfigResource = {
  id?: number | undefined
  autoUnmonitorPreviouslyDownloadedEpisodes?: boolean | undefined
  recycleBin?: (string | null) | undefined
  recycleBinCleanupDays?: number | undefined
  downloadPropersAndRepacks?: ProperDownloadTypes | undefined
  createEmptySeriesFolders?: boolean | undefined
  deleteEmptyFolders?: boolean | undefined
  fileDate?: FileDateType | undefined
  rescanAfterRefresh?: RescanAfterRefreshType | undefined
  setPermissionsLinux?: boolean | undefined
  chmodFolder?: (string | null) | undefined
  chownGroup?: (string | null) | undefined
  episodeTitleRequired?: EpisodeTitleRequiredType | undefined
  skipFreeSpaceCheckWhenGrabbing?: boolean | undefined
  skipFreeSpaceCheckWhenImporting?: boolean | undefined
  minimumFreeSpaceWhenImporting?: number | undefined
  copyUsingHardlinks?: boolean | undefined
  useScriptImport?: boolean | undefined
  scriptImportPath?: (string | null) | undefined
  importExtraFiles?: boolean | undefined
  extraFileExtensions?: (string | null) | undefined
  enableMediaInfo?: boolean | undefined
  userRejectedExtensions?: (string | null) | undefined
  seasonPackUpgrade?: SeasonPackUpgradeType | undefined
  seasonPackUpgradeThreshold?: number | undefined
}
type MetadataResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (MetadataResource[] | null) | undefined
  enable?: boolean | undefined
}
type NamingConfigResource = {
  id?: number | undefined
  renameEpisodes?: boolean | undefined
  replaceIllegalCharacters?: boolean | undefined
  colonReplacementFormat?: number | undefined
  customColonReplacementFormat?: (string | null) | undefined
  multiEpisodeStyle?: number | undefined
  standardEpisodeFormat?: (string | null) | undefined
  dailyEpisodeFormat?: (string | null) | undefined
  animeEpisodeFormat?: (string | null) | undefined
  seriesFolderFormat?: (string | null) | undefined
  seasonFolderFormat?: (string | null) | undefined
  specialsFolderFormat?: (string | null) | undefined
}
type NotificationResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (NotificationResource[] | null) | undefined
  link?: (string | null) | undefined
  onGrab?: boolean | undefined
  onDownload?: boolean | undefined
  onUpgrade?: boolean | undefined
  onImportComplete?: boolean | undefined
  onRename?: boolean | undefined
  onSeriesAdd?: boolean | undefined
  onSeriesDelete?: boolean | undefined
  onEpisodeFileDelete?: boolean | undefined
  onEpisodeFileDeleteForUpgrade?: boolean | undefined
  onHealthIssue?: boolean | undefined
  includeHealthWarnings?: boolean | undefined
  onHealthRestored?: boolean | undefined
  onApplicationUpdate?: boolean | undefined
  onManualInteractionRequired?: boolean | undefined
  supportsOnGrab?: boolean | undefined
  supportsOnDownload?: boolean | undefined
  supportsOnUpgrade?: boolean | undefined
  supportsOnImportComplete?: boolean | undefined
  supportsOnRename?: boolean | undefined
  supportsOnSeriesAdd?: boolean | undefined
  supportsOnSeriesDelete?: boolean | undefined
  supportsOnEpisodeFileDelete?: boolean | undefined
  supportsOnEpisodeFileDeleteForUpgrade?: boolean | undefined
  supportsOnHealthIssue?: boolean | undefined
  supportsOnHealthRestored?: boolean | undefined
  supportsOnApplicationUpdate?: boolean | undefined
  supportsOnManualInteractionRequired?: boolean | undefined
  testCommand?: (string | null) | undefined
}
type SeriesTitleInfo = {
  title?: (string | null) | undefined
  titleWithoutYear?: (string | null) | undefined
  year?: number | undefined
  allTitles?: (string[] | null) | undefined
}
type ParsedEpisodeInfoResource = {
  releaseTitle?: (string | null) | undefined
  seriesTitle?: (string | null) | undefined
  seriesTitleInfo?: SeriesTitleInfo | undefined
  quality?: QualityModel | undefined
  seasonNumbers?: (number[] | null) | undefined
  seasonNumber?: number | undefined
  episodeNumbers?: (number[] | null) | undefined
  absoluteEpisodeNumbers?: (number[] | null) | undefined
  specialAbsoluteEpisodeNumbers?: (number[] | null) | undefined
  airDate?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  fullSeason?: boolean | undefined
  isPartialSeason?: boolean | undefined
  isMultiSeason?: boolean | undefined
  isSeasonExtra?: boolean | undefined
  isSplitEpisode?: boolean | undefined
  isMiniSeries?: boolean | undefined
  special?: boolean | undefined
  releaseGroup?: (string | null) | undefined
  releaseHash?: (string | null) | undefined
  seasonPart?: number | undefined
  releaseTokens?: (string | null) | undefined
  dailyPart?: (number | null) | undefined
  isDaily?: boolean | undefined
  isAbsoluteNumbering?: boolean | undefined
  isPossibleSpecialEpisode?: boolean | undefined
  isPossibleSceneSeasonSpecial?: boolean | undefined
  releaseType?: ReleaseType | undefined
}
type ParseResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  parsedEpisodeInfo?: ParsedEpisodeInfoResource | undefined
  series?: SeriesResource | undefined
  episodes?: (EpisodeResource[] | null) | undefined
  languages?: (Language[] | null) | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
}
type PingResource = { status?: (string | null) | undefined }
type QualityDefinitionResource = {
  id?: number | undefined
  quality?: Quality | undefined
  title?: (string | null) | undefined
  weight?: number | undefined
  minSize?: (number | null) | undefined
  maxSize?: (number | null) | undefined
  preferredSize?: (number | null) | undefined
}
type QualityDefinitionLimitsResource = { min?: number | undefined; max?: number | undefined }
type QualityProfileQualityItemResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  quality?: Quality | undefined
  items?: (QualityProfileQualityItemResource[] | null) | undefined
  allowed?: boolean | undefined
  minSize?: (number | null) | undefined
  maxSize?: (number | null) | undefined
  preferredSize?: (number | null) | undefined
}
type ProfileFormatItemResource = {
  id?: number | undefined
  format?: number | undefined
  name?: (string | null) | undefined
  score?: number | undefined
}
type QualityProfileResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  upgradeAllowed?: boolean | undefined
  cutoff?: number | undefined
  items?: (QualityProfileQualityItemResource[] | null) | undefined
  minFormatScore?: number | undefined
  cutoffFormatScore?: number | undefined
  minUpgradeFormatScore?: number | undefined
  formatItems?: (ProfileFormatItemResource[] | null) | undefined
}
type QueueBulkResource = { ids?: (number[] | null) | undefined }
type QueueStatus =
  | 'unknown'
  | 'queued'
  | 'paused'
  | 'downloading'
  | 'completed'
  | 'failed'
  | 'warning'
  | 'delay'
  | 'downloadClientUnavailable'
  | 'fallback'
type TrackedDownloadStatus = 'ok' | 'warning' | 'error'
type TrackedDownloadState =
  | 'downloading'
  | 'importBlocked'
  | 'importPending'
  | 'importing'
  | 'imported'
  | 'failedPending'
  | 'failed'
  | 'ignored'
type TrackedDownloadStatusMessage = {
  title?: (string | null) | undefined
  messages?: (string[] | null) | undefined
}
type QueueResource = {
  id?: number | undefined
  seriesId?: (number | null) | undefined
  episodeId?: (number | null) | undefined
  seasonNumber?: (number | null) | undefined
  series?: SeriesResource | undefined
  episode?: EpisodeResource | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  size?: number | undefined
  title?: (string | null) | undefined
  estimatedCompletionTime?: (string | null) | undefined
  added?: (string | null) | undefined
  status?: QueueStatus | undefined
  trackedDownloadStatus?: TrackedDownloadStatus | undefined
  trackedDownloadState?: TrackedDownloadState | undefined
  statusMessages?: (TrackedDownloadStatusMessage[] | null) | undefined
  errorMessage?: (string | null) | undefined
  downloadId?: (string | null) | undefined
  protocol?: DownloadProtocol | undefined
  downloadClient?: (string | null) | undefined
  downloadClientHasPostImportCategory?: boolean | undefined
  indexer?: (string | null) | undefined
  outputPath?: (string | null) | undefined
  episodeHasFile?: boolean | undefined
  sizeleft?: number | undefined
  timeleft?: (string | null) | undefined
}
type QueueResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (QueueResource[] | null) | undefined
}
type QueueStatusResource = {
  id?: number | undefined
  totalCount?: number | undefined
  count?: number | undefined
  unknownCount?: number | undefined
  errors?: boolean | undefined
  warnings?: boolean | undefined
  unknownErrors?: boolean | undefined
  unknownWarnings?: boolean | undefined
}
type ReleaseEpisodeResource = {
  id?: number | undefined
  seasonNumber?: number | undefined
  episodeNumber?: number | undefined
  absoluteEpisodeNumber?: (number | null) | undefined
  title?: (string | null) | undefined
}
type ReleaseResource = {
  id?: number | undefined
  guid?: (string | null) | undefined
  quality?: QualityModel | undefined
  qualityWeight?: number | undefined
  age?: number | undefined
  ageHours?: number | undefined
  ageMinutes?: number | undefined
  size?: bigint | undefined
  indexerId?: number | undefined
  indexer?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
  subGroup?: (string | null) | undefined
  releaseHash?: (string | null) | undefined
  title?: (string | null) | undefined
  fullSeason?: boolean | undefined
  sceneSource?: boolean | undefined
  seasonNumber?: number | undefined
  seasonNumbers?: (number[] | null) | undefined
  languages?: (Language[] | null) | undefined
  languageWeight?: number | undefined
  airDate?: (string | null) | undefined
  seriesTitle?: (string | null) | undefined
  episodeNumbers?: (number[] | null) | undefined
  absoluteEpisodeNumbers?: (number[] | null) | undefined
  mappedSeasonNumber?: (number | null) | undefined
  mappedEpisodeNumbers?: (number[] | null) | undefined
  mappedAbsoluteEpisodeNumbers?: (number[] | null) | undefined
  mappedSeriesId?: (number | null) | undefined
  mappedEpisodeInfo?: (ReleaseEpisodeResource[] | null) | undefined
  approved?: boolean | undefined
  temporarilyRejected?: boolean | undefined
  rejected?: boolean | undefined
  tvdbId?: number | undefined
  tvRageId?: number | undefined
  imdbId?: (string | null) | undefined
  rejections?: (string[] | null) | undefined
  publishDate?: string | undefined
  commentUrl?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  infoUrl?: (string | null) | undefined
  episodeRequested?: boolean | undefined
  downloadAllowed?: boolean | undefined
  releaseWeight?: number | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  sceneMapping?: AlternateTitleResource | undefined
  magnetUrl?: (string | null) | undefined
  infoHash?: (string | null) | undefined
  seeders?: (number | null) | undefined
  leechers?: (number | null) | undefined
  protocol?: DownloadProtocol | undefined
  indexerFlags?: number | undefined
  isDaily?: boolean | undefined
  isAbsoluteNumbering?: boolean | undefined
  isPossibleSpecialEpisode?: boolean | undefined
  special?: boolean | undefined
  seriesId?: (number | null) | undefined
  episodeId?: (number | null) | undefined
  episodeIds?: (number[] | null) | undefined
  downloadClientId?: (number | null) | undefined
  downloadClient?: (string | null) | undefined
  shouldOverride?: (boolean | null) | undefined
}
type ReleaseProfileResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  enabled?: boolean | undefined
  required?: { [x: string]: unknown } | undefined
  ignored?: { [x: string]: unknown } | undefined
  airDateRestriction?: boolean | undefined
  airDateGracePeriod?: number | undefined
  allowSeasonPackWithoutAllEpisodesAired?: boolean | undefined
  indexerId?: number | undefined
  tags?: (number[] | null) | undefined
  excludedTags?: (number[] | null) | undefined
}
type RemotePathMappingResource = {
  id?: number | undefined
  host?: (string | null) | undefined
  remotePath?: (string | null) | undefined
  localPath?: (string | null) | undefined
}
type RenameEpisodeResource = {
  id?: number | undefined
  seriesId?: number | undefined
  seasonNumber?: number | undefined
  episodeNumbers?: (number[] | null) | undefined
  episodeFileId?: number | undefined
  existingPath?: (string | null) | undefined
  newPath?: (string | null) | undefined
}
type UnmappedFolder = {
  name?: (string | null) | undefined
  path?: (string | null) | undefined
  relativePath?: (string | null) | undefined
}
type RootFolderResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  accessible?: boolean | undefined
  freeSpace?: (bigint | null) | undefined
  totalSpace?: (bigint | null) | undefined
  unmappedFolders?: (UnmappedFolder[] | null) | undefined
}
type SeasonPassSeriesResource = {
  id?: number | undefined
  monitored?: (boolean | null) | undefined
  seasons?: (SeasonResource[] | null) | undefined
}
type MonitoringOptions = {
  ignoreEpisodesWithFiles?: boolean | undefined
  ignoreEpisodesWithoutFiles?: boolean | undefined
  monitor?: MonitorTypes | undefined
}
type SeasonPassResource = {
  series?: (SeasonPassSeriesResource[] | null) | undefined
  monitoringOptions?: MonitoringOptions | undefined
}
type SeriesEditorResource = {
  seriesIds?: (number[] | null) | undefined
  monitored?: (boolean | null) | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
  qualityProfileId?: (number | null) | undefined
  language?: Language | undefined
  seriesType?: SeriesTypes | undefined
  seasonFolder?: (boolean | null) | undefined
  rootFolderPath?: (string | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  moveFiles?: boolean | undefined
  deleteFiles?: boolean | undefined
  addImportListExclusion?: boolean | undefined
}
type RuntimeMode = 'console' | 'service' | 'tray'
type DatabaseType = 'sqLite' | 'postgreSQL'
type SystemResource = {
  appName?: (string | null) | undefined
  instanceName?: (string | null) | undefined
  version?: (string | null) | undefined
  buildTime?: string | undefined
  isDebug?: boolean | undefined
  isProduction?: boolean | undefined
  isAdmin?: boolean | undefined
  isUserInteractive?: boolean | undefined
  startupPath?: (string | null) | undefined
  appData?: (string | null) | undefined
  osName?: (string | null) | undefined
  osVersion?: (string | null) | undefined
  isNetCore?: boolean | undefined
  isLinux?: boolean | undefined
  isOsx?: boolean | undefined
  isWindows?: boolean | undefined
  isDocker?: boolean | undefined
  isContainerized?: boolean | undefined
  mode?: RuntimeMode | undefined
  branch?: (string | null) | undefined
  authentication?: AuthenticationType | undefined
  sqliteVersion?: (string | null) | undefined
  migrationVersion?: number | undefined
  urlBase?: (string | null) | undefined
  runtimeVersion?: (string | null) | undefined
  runtimeName?: (string | null) | undefined
  startTime?: string | undefined
  packageVersion?: (string | null) | undefined
  packageAuthor?: (string | null) | undefined
  packageUpdateMechanism?: UpdateMechanism | undefined
  packageUpdateMechanismMessage?: (string | null) | undefined
  databaseVersion?: (string | null) | undefined
  databaseType?: DatabaseType | undefined
}
type TagResource = { id?: number | undefined; label?: (string | null) | undefined }
type TagDetailsResource = {
  id?: number | undefined
  label?: (string | null) | undefined
  delayProfileIds?: (number[] | null) | undefined
  importListIds?: (number[] | null) | undefined
  notificationIds?: (number[] | null) | undefined
  restrictionIds?: (number[] | null) | undefined
  excludedReleaseProfileIds?: (number[] | null) | undefined
  indexerIds?: (number[] | null) | undefined
  downloadClientIds?: (number[] | null) | undefined
  autoTagIds?: (number[] | null) | undefined
  seriesIds?: (number[] | null) | undefined
}
type TaskResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  taskName?: (string | null) | undefined
  interval?: number | undefined
  lastExecution?: string | undefined
  lastStartTime?: string | undefined
  nextExecution?: string | undefined
  lastDuration?: string | undefined
}
type UiConfigResource = {
  id?: number | undefined
  firstDayOfWeek?: number | undefined
  calendarWeekColumnHeader?: (string | null) | undefined
  shortDateFormat?: (string | null) | undefined
  longDateFormat?: (string | null) | undefined
  timeFormat?: (string | null) | undefined
  timeZone?: (string | null) | undefined
  showRelativeDates?: boolean | undefined
  enableColorImpairedMode?: boolean | undefined
  theme?: (string | null) | undefined
  uiLanguage?: number | undefined
}
type UpdateChanges = { new?: (string[] | null) | undefined; fixed?: (string[] | null) | undefined }
type UpdateResource = {
  id?: number | undefined
  version?: (string | null) | undefined
  branch?: (string | null) | undefined
  releaseDate?: string | undefined
  fileName?: (string | null) | undefined
  url?: (string | null) | undefined
  installed?: boolean | undefined
  installedOn?: (string | null) | undefined
  installable?: boolean | undefined
  latest?: boolean | undefined
  changes?: UpdateChanges | undefined
  hash?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api': { $get: { input: {}; output: ApiInfoResource; outputFormat: 'json'; status: 200 } }
  } & {
    '/login/sso': {
      $get: {
        input: { query: { returnUrl?: string | undefined; rememberMe?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/login': {
      $post:
        | {
            input: { query: { returnUrl?: string | undefined } } & {
              form: {
                username?: string | undefined
                password?: string | undefined
                rememberMe?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { query: { returnUrl?: string | undefined } } & {
              form: {
                username?: string | undefined
                password?: string | undefined
                rememberMe?: boolean | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/reset-password/request': {
      $post: { input: {}; output: {}; outputFormat: string; status: 302 }
    }
  } & {
    '/reset-password': {
      $post: {
        input: {
          form: {
            token?: string | undefined
            username?: string | undefined
            password?: string | undefined
            passwordConfirmation?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & { '/logout': { $get: { input: {}; output: {}; outputFormat: string; status: 302 } } } & {
    '/api/v3/autotagging': {
      $post:
        | {
            input: { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'text'
            status: 200
          }
      $get: { input: {}; output: AutoTaggingResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/autotagging/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: AutoTaggingResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/autotagging/schema': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/system/backup': {
      $get:
        | { input: {}; output: BackupResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BackupResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BackupResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/system/backup/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/system/backup/restore/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/system/backup/restore/upload': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/blocklist': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            seriesIds?: number[] | undefined
            protocols?: DownloadProtocol[] | undefined
          }
        }
        output: BlocklistResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/blocklist/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/blocklist/bulk': {
      $delete: {
        input: { json: BlocklistBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/calendar': {
      $get: {
        input: {
          query: {
            start?: string | undefined
            end?: string | undefined
            unmonitored?: boolean | undefined
            includeSeries?: boolean | undefined
            includeEpisodeFile?: boolean | undefined
            includeEpisodeImages?: boolean | undefined
            tags?: string | undefined
          }
        }
        output: EpisodeResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/calendar/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: EpisodeResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/feed/v3/calendar/sonarr.ics': {
      $get: {
        input: {
          query: {
            pastDays?: number | undefined
            futureDays?: number | undefined
            tags?: string | undefined
            unmonitored?: boolean | undefined
            premieresOnly?: boolean | undefined
            asAllDay?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/command': {
      $post: {
        input: { json: CommandResource }
        output: CommandResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: CommandResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/command/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: CommandResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/customfilter': {
      $get: { input: {}; output: CustomFilterResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v3/customfilter/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: CustomFilterResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/customformat': {
      $get: { input: {}; output: CustomFormatResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v3/customformat/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: CustomFormatResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/customformat/bulk': {
      $put: {
        input: { json: CustomFormatBulkResource }
        output: CustomFormatResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: CustomFormatBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/customformat/schema': {
      $get: {
        input: {}
        output: CustomFormatSpecificationSchema[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/wanted/cutoff': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeSeries?: boolean | undefined
            includeEpisodeFile?: boolean | undefined
            includeImages?: boolean | undefined
            monitored?: boolean | undefined
          }
        }
        output: EpisodeResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/wanted/cutoff/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: EpisodeResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/delayprofile': {
      $post:
        | {
            input: { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get: { input: {}; output: DelayProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/delayprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: DelayProfileResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/delayprofile/reorder/:id': {
      $put:
        | {
            input: { param: { id: number } } & { query: { after?: number | undefined } }
            output: DelayProfileResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { after?: number | undefined } }
            output: DelayProfileResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { after?: number | undefined } }
            output: DelayProfileResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v3/diskspace': {
      $get: { input: {}; output: DiskSpaceResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/downloadclient': {
      $get: { input: {}; output: DownloadClientResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: DownloadClientResource }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/downloadclient/:id': {
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: DownloadClientResource
        }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: DownloadClientResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/downloadclient/bulk': {
      $put: {
        input: { json: DownloadClientBulkResource }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: DownloadClientBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/downloadclient/schema': {
      $get: { input: {}; output: DownloadClientResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/downloadclient/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/downloadclient/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/downloadclient/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/config/downloadclient': {
      $get: { input: {}; output: DownloadClientConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/downloadclient/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: DownloadClientConfigResource }
            output: DownloadClientConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DownloadClientConfigResource }
            output: DownloadClientConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DownloadClientConfigResource }
            output: DownloadClientConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: DownloadClientConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/episode': {
      $get: {
        input: {
          query: {
            seriesId?: number | undefined
            seasonNumber?: number | undefined
            episodeIds?: number[] | undefined
            episodeFileId?: number | undefined
            includeSeries?: boolean | undefined
            includeEpisodeFile?: boolean | undefined
            includeImages?: boolean | undefined
          }
        }
        output: EpisodeResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/episode/:id': {
      $put:
        | {
            input: { param: { id: number } } & { json: EpisodeResource }
            output: EpisodeResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EpisodeResource }
            output: EpisodeResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EpisodeResource }
            output: EpisodeResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: EpisodeResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/episode/monitor': {
      $put: {
        input: { query: { includeImages?: boolean | undefined } } & {
          json: EpisodesMonitoredResource
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/episodefile': {
      $get: {
        input: { query: { seriesId?: number | undefined; episodeFileIds?: number[] | undefined } }
        output: EpisodeFileResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/episodefile/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: EpisodeFileResource }
            output: EpisodeFileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: EpisodeFileResource }
            output: EpisodeFileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: EpisodeFileResource }
            output: EpisodeFileResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: EpisodeFileResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/episodefile/editor': {
      $put: {
        input: { json: EpisodeFileListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/episodefile/bulk': {
      $delete: {
        input: { json: EpisodeFileListResource }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { json: EpisodeFileResource[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/filesystem': {
      $get: {
        input: {
          query: {
            path?: string | undefined
            includeFiles?: boolean | undefined
            allowFoldersWithoutTrailingSlashes?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/filesystem/type': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/filesystem/mediafiles': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/health': {
      $get: { input: {}; output: HealthResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/history': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeSeries?: boolean | undefined
            includeEpisode?: boolean | undefined
            eventType?: number[] | undefined
            episodeId?: number | undefined
            downloadId?: string | undefined
            seriesIds?: number[] | undefined
            languages?: number[] | undefined
            quality?: number[] | undefined
          }
        }
        output: HistoryResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/history/since': {
      $get: {
        input: {
          query: {
            date?: string | undefined
            eventType?: EpisodeHistoryEventType | undefined
            includeSeries?: boolean | undefined
            includeEpisode?: boolean | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/history/series': {
      $get: {
        input: {
          query: {
            seriesId?: number | undefined
            seasonNumber?: number | undefined
            eventType?: EpisodeHistoryEventType | undefined
            includeSeries?: boolean | undefined
            includeEpisode?: boolean | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/history/failed/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/config/host': {
      $get:
        | { input: {}; output: HostConfigResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: HostConfigResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HostConfigResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/config/host/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: HostConfigResource }
            output: HostConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: HostConfigResource }
            output: HostConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: HostConfigResource }
            output: HostConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: HostConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/importlist': {
      $get: { input: {}; output: ImportListResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: ImportListResource }
        output: ImportListResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/importlist/:id': {
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: ImportListResource
        }
        output: ImportListResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: ImportListResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/importlist/bulk': {
      $put: {
        input: { json: ImportListBulkResource }
        output: ImportListResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: ImportListBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/importlist/schema': {
      $get: { input: {}; output: ImportListResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/importlist/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: ImportListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/importlist/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/importlist/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: ImportListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/config/importlist': {
      $get: { input: {}; output: ImportListConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/importlist/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: ImportListConfigResource }
            output: ImportListConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ImportListConfigResource }
            output: ImportListConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ImportListConfigResource }
            output: ImportListConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: ImportListConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/importlistexclusion': {
      $get: { input: {}; output: ImportListExclusionResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v3/importlistexclusion/paged': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
          }
        }
        output: ImportListExclusionResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/importlistexclusion/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: ImportListExclusionResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/importlistexclusion/bulk': {
      $delete: {
        input: { json: ImportListExclusionBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/indexer': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: IndexerResource }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/indexer/:id': {
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: IndexerResource
        }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: IndexerResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/indexer/bulk': {
      $put: {
        input: { json: IndexerBulkResource }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: IndexerBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/indexer/schema': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/indexer/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/indexer/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/indexer/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/config/indexer': {
      $get: { input: {}; output: IndexerConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/indexer/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: IndexerConfigResource }
            output: IndexerConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IndexerConfigResource }
            output: IndexerConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IndexerConfigResource }
            output: IndexerConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: IndexerConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/indexerflag': {
      $get:
        | { input: {}; output: IndexerFlagResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: IndexerFlagResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: IndexerFlagResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/language': {
      $get:
        | { input: {}; output: LanguageResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LanguageResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LanguageResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/language/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: LanguageResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/languageprofile': {
      $post: {
        input: { json: LanguageProfileResource }
        output: LanguageProfileResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: LanguageProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/languageprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: LanguageProfileResource }
        output: LanguageProfileResource
        outputFormat: 'json'
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } }
            output: LanguageProfileResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/languageprofile/schema': {
      $get: { input: {}; output: LanguageProfileResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/localization': {
      $get: { input: {}; output: LocalizationResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/localization/language': {
      $get: { input: {}; output: LocalizationLanguageResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/localization/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: LocalizationResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/log': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            level?: string | undefined
          }
        }
        output: LogResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/log/file': {
      $get: { input: {}; output: LogFileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/log/file/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/manualimport': {
      $get: {
        input: {
          query: {
            folder?: string | undefined
            downloadId?: string | undefined
            seriesId?: number | undefined
            seasonNumber?: number | undefined
            filterExistingFiles?: boolean | undefined
          }
        }
        output: ManualImportResource[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ManualImportReprocessResource[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/mediacover/:seriesId/:filename': {
      $get: {
        input: { param: { seriesId: number; filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/config/mediamanagement': {
      $get: { input: {}; output: MediaManagementConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/mediamanagement/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: MediaManagementConfigResource }
            output: MediaManagementConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MediaManagementConfigResource }
            output: MediaManagementConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MediaManagementConfigResource }
            output: MediaManagementConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: MediaManagementConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/metadata': {
      $get: { input: {}; output: MetadataResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: MetadataResource }
        output: MetadataResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/metadata/:id': {
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: MetadataResource
        }
        output: MetadataResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: MetadataResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/metadata/schema': {
      $get: { input: {}; output: MetadataResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/metadata/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: MetadataResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/metadata/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/metadata/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: MetadataResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/wanted/missing': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeSeries?: boolean | undefined
            includeImages?: boolean | undefined
            monitored?: boolean | undefined
          }
        }
        output: EpisodeResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/wanted/missing/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: EpisodeResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/config/naming': {
      $get:
        | { input: {}; output: NamingConfigResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NamingConfigResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NamingConfigResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/config/naming/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: NamingConfigResource }
            output: NamingConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NamingConfigResource }
            output: NamingConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NamingConfigResource }
            output: NamingConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: NamingConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/config/naming/examples': {
      $get: {
        input: {
          query: {
            renameEpisodes?: boolean | undefined
            replaceIllegalCharacters?: boolean | undefined
            colonReplacementFormat?: number | undefined
            customColonReplacementFormat?: string | undefined
            multiEpisodeStyle?: number | undefined
            standardEpisodeFormat?: string | undefined
            dailyEpisodeFormat?: string | undefined
            animeEpisodeFormat?: string | undefined
            seriesFolderFormat?: string | undefined
            seasonFolderFormat?: string | undefined
            specialsFolderFormat?: string | undefined
            id?: number | undefined
            resourceName?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/notification': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: NotificationResource }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/notification/:id': {
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: NotificationResource
        }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: NotificationResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/notification/schema': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/notification/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/notification/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/notification/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/parse': {
      $get: {
        input: { query: { title?: string | undefined; path?: string | undefined } }
        output: ParseResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ping': {
      $get:
        | { input: {}; output: PingResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PingResource; outputFormat: 'json'; status: 500 }
      $head:
        | { input: {}; output: PingResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PingResource; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v3/qualitydefinition/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: QualityDefinitionResource }
            output: QualityDefinitionResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: QualityDefinitionResource }
            output: QualityDefinitionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: QualityDefinitionResource }
            output: QualityDefinitionResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: QualityDefinitionResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/qualitydefinition': {
      $get:
        | { input: {}; output: QualityDefinitionResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QualityDefinitionResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QualityDefinitionResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/qualitydefinition/update': {
      $put: {
        input: { json: QualityDefinitionResource[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/qualitydefinition/limits': {
      $get:
        | { input: {}; output: QualityDefinitionLimitsResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QualityDefinitionLimitsResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QualityDefinitionLimitsResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/qualityprofile': {
      $post:
        | {
            input: { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get: { input: {}; output: QualityProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/qualityprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: QualityProfileResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/qualityprofile/schema': {
      $get:
        | { input: {}; output: QualityProfileResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QualityProfileResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QualityProfileResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/queue/:id': {
      $delete: {
        input: { param: { id: number } } & {
          query: {
            removeFromClient?: boolean | undefined
            blocklist?: boolean | undefined
            skipRedownload?: boolean | undefined
            changeCategory?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/queue/bulk': {
      $delete: {
        input: {
          query: {
            removeFromClient?: boolean | undefined
            blocklist?: boolean | undefined
            skipRedownload?: boolean | undefined
            changeCategory?: boolean | undefined
          }
        } & { json: QueueBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/queue': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeUnknownSeriesItems?: boolean | undefined
            includeSeries?: boolean | undefined
            includeEpisode?: boolean | undefined
            seriesIds?: number[] | undefined
            protocol?: DownloadProtocol | undefined
            languages?: number[] | undefined
            quality?: number[] | undefined
            status?: QueueStatus[] | undefined
          }
        }
        output: QueueResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/queue/grab/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/queue/grab/bulk': {
      $post: { input: { json: QueueBulkResource }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/queue/details': {
      $get: {
        input: {
          query: {
            seriesId?: number | undefined
            episodeIds?: number[] | undefined
            includeSeries?: boolean | undefined
            includeEpisode?: boolean | undefined
          }
        }
        output: QueueResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/queue/status': {
      $get: { input: {}; output: QueueStatusResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/release': {
      $post: { input: { json: ReleaseResource }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: {
          query: {
            seriesId?: number | undefined
            episodeId?: number | undefined
            seasonNumber?: number | undefined
          }
        }
        output: ReleaseResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/releaseprofile': {
      $post:
        | {
            input: { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | { input: {}; output: ReleaseProfileResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ReleaseProfileResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ReleaseProfileResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/releaseprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: ReleaseProfileResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/release/push': {
      $post:
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v3/remotepathmapping': {
      $post:
        | {
            input: { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'text'
            status: 200
          }
      $get: { input: {}; output: RemotePathMappingResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/remotepathmapping/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: RemotePathMappingResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/rename': {
      $get: {
        input: { query: { seriesId?: number | undefined; seasonNumber?: number | undefined } }
        output: RenameEpisodeResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/rename/bulk': {
      $get: {
        input: { query: { seriesIds?: number[] | undefined } }
        output: RenameEpisodeResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/rootfolder': {
      $post:
        | {
            input: { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'text'
            status: 200
          }
      $get: { input: {}; output: RootFolderResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/rootfolder/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: RootFolderResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/seasonpass': {
      $post: { input: { json: SeasonPassResource }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/series': {
      $get: {
        input: { query: { tvdbId?: number | undefined; includeSeasonImages?: boolean | undefined } }
        output: SeriesResource[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SeriesResource }
        output: SeriesResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/series/:id': {
      $get: {
        input: { param: { id: number } } & { query: { includeSeasonImages?: boolean | undefined } }
        output: SeriesResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { query: { moveFiles?: boolean | undefined } } & {
          json: SeriesResource
        }
        output: SeriesResource
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } } & {
          query: { deleteFiles?: boolean | undefined; addImportListExclusion?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/series/editor': {
      $put: { input: { json: SeriesEditorResource }; output: {}; outputFormat: string; status: 200 }
      $delete: {
        input: { json: SeriesEditorResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v3/series/:id/folder': {
      $get: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/series/import': {
      $post: { input: { json: SeriesResource[] }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/series/lookup': {
      $get:
        | {
            input: { query: { term?: string | undefined; language?: number | undefined } }
            output: SeriesResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { term?: string | undefined; language?: number | undefined } }
            output: SeriesResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { term?: string | undefined; language?: number | undefined } }
            output: SeriesResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & { '/loggedout': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/content/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/system/status': {
      $get: { input: {}; output: SystemResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/system/routes': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v3/system/routes/duplicate': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/system/shutdown': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/system/restart': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v3/tag': {
      $get: { input: {}; output: TagResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'text'; status: 200 }
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'json'; status: 200 }
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/tag/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: TagResource }
            output: TagResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TagResource }
            output: TagResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TagResource }
            output: TagResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $get:
        | {
            input: { param: { id: number } }
            output: TagResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/tag/detail': {
      $get: { input: {}; output: TagDetailsResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/tag/detail/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TagDetailsResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/system/task': {
      $get:
        | { input: {}; output: TaskResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TaskResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TaskResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/system/task/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TaskResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/config/ui/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: UiConfigResource }
            output: UiConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UiConfigResource }
            output: UiConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UiConfigResource }
            output: UiConfigResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: UiConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/config/ui': {
      $get: { input: {}; output: UiConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/update': {
      $get: { input: {}; output: UpdateResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/log/file/update': {
      $get: { input: {}; output: LogFileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/log/file/update/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
