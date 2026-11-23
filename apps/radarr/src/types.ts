type SourceType = 'tmdb' | 'mappings' | 'user' | 'indexer'
type AlternativeTitleResource = {
  id?: number | undefined
  sourceType?: SourceType | undefined
  movieMetadataId?: number | undefined
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
}
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
  dividerAfter?: boolean | undefined
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
type BackupRestoreResource = { restartRequired?: boolean | undefined }
type BackupRestoreErrorResource = { error?: (string | null) | undefined }
type SortDirection = 'default' | 'ascending' | 'descending'
type DownloadProtocol = 'unknown' | 'usenet' | 'torrent'
type Language = { id?: number | undefined; name?: (string | null) | undefined }
type QualitySource =
  | 'unknown'
  | 'cam'
  | 'telesync'
  | 'telecine'
  | 'workprint'
  | 'dvd'
  | 'tv'
  | 'webdl'
  | 'webrip'
  | 'bluray'
type Modifier = 'none' | 'regional' | 'screener' | 'rawhd' | 'brdisk' | 'remux'
type Quality = {
  id?: number | undefined
  name?: (string | null) | undefined
  source?: QualitySource | undefined
  resolution?: number | undefined
  modifier?: Modifier | undefined
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
type MovieStatusType = 'tba' | 'announced' | 'inCinemas' | 'released' | 'deleted'
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
type MonitorTypes = 'movieOnly' | 'movieAndCollection' | 'none'
type AddMovieMethod = 'manual' | 'list' | 'collection'
type AddMovieOptions = {
  ignoreEpisodesWithFiles?: boolean | undefined
  ignoreEpisodesWithoutFiles?: boolean | undefined
  monitor?: MonitorTypes | undefined
  searchForMovie?: boolean | undefined
  addMethod?: AddMovieMethod | undefined
}
type RatingType = 'user' | 'critic'
type RatingChild = {
  votes?: number | undefined
  value?: number | undefined
  type?: RatingType | undefined
}
type Ratings = {
  imdb?: RatingChild | undefined
  tmdb?: RatingChild | undefined
  metacritic?: RatingChild | undefined
  rottenTomatoes?: RatingChild | undefined
  trakt?: RatingChild | undefined
}
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
type MovieFileResource = {
  id?: number | undefined
  movieId?: number | undefined
  relativePath?: (string | null) | undefined
  path?: (string | null) | undefined
  size?: bigint | undefined
  dateAdded?: string | undefined
  sceneName?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
  edition?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: (number | null) | undefined
  indexerFlags?: (number | null) | undefined
  mediaInfo?: MediaInfoResource | undefined
  originalFilePath?: (string | null) | undefined
  qualityCutoffNotMet?: boolean | undefined
}
type MovieCollectionResource = { title?: (string | null) | undefined; tmdbId?: number | undefined }
type MovieStatisticsResource = {
  movieFileCount?: number | undefined
  sizeOnDisk?: bigint | undefined
  releaseGroups?: (string[] | null) | undefined
  movieFileQualities?: (Quality[] | null) | undefined
}
type MovieResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  originalTitle?: (string | null) | undefined
  originalLanguage?: Language | undefined
  alternateTitles?: (AlternativeTitleResource[] | null) | undefined
  secondaryYear?: (number | null) | undefined
  secondaryYearSourceId?: number | undefined
  sortTitle?: (string | null) | undefined
  sizeOnDisk?: (bigint | null) | undefined
  status?: MovieStatusType | undefined
  overview?: (string | null) | undefined
  inCinemas?: (string | null) | undefined
  physicalRelease?: (string | null) | undefined
  digitalRelease?: (string | null) | undefined
  releaseDate?: (string | null) | undefined
  physicalReleaseNote?: (string | null) | undefined
  images?: (MediaCover[] | null) | undefined
  website?: (string | null) | undefined
  remotePoster?: (string | null) | undefined
  year?: number | undefined
  youTubeTrailerId?: (string | null) | undefined
  studio?: (string | null) | undefined
  path?: (string | null) | undefined
  qualityProfileId?: number | undefined
  hasFile?: (boolean | null) | undefined
  movieFileId?: number | undefined
  monitored?: boolean | undefined
  minimumAvailability?: MovieStatusType | undefined
  isAvailable?: boolean | undefined
  folderName?: (string | null) | undefined
  runtime?: number | undefined
  cleanTitle?: (string | null) | undefined
  imdbId?: (string | null) | undefined
  tmdbId?: number | undefined
  titleSlug?: (string | null) | undefined
  rootFolderPath?: (string | null) | undefined
  folder?: (string | null) | undefined
  certification?: (string | null) | undefined
  genres?: (string[] | null) | undefined
  keywords?: (string[] | null) | undefined
  tags?: (number[] | null) | undefined
  added?: string | undefined
  addOptions?: AddMovieOptions | undefined
  ratings?: Ratings | undefined
  movieFile?: MovieFileResource | undefined
  collection?: MovieCollectionResource | undefined
  popularity?: number | undefined
  lastSearchTime?: (string | null) | undefined
  statistics?: MovieStatisticsResource | undefined
}
type BlocklistResource = {
  id?: number | undefined
  movieId?: number | undefined
  sourceTitle?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  date?: string | undefined
  protocol?: DownloadProtocol | undefined
  indexer?: (string | null) | undefined
  message?: (string | null) | undefined
  movie?: MovieResource | undefined
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
type CalendarReleaseType = 'cinemaRelease' | 'digitalRelease' | 'physicalRelease'
type CollectionMovieResource = {
  tmdbId?: number | undefined
  imdbId?: (string | null) | undefined
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
  sortTitle?: (string | null) | undefined
  status?: MovieStatusType | undefined
  overview?: (string | null) | undefined
  runtime?: number | undefined
  images?: (MediaCover[] | null) | undefined
  year?: number | undefined
  ratings?: Ratings | undefined
  genres?: (string[] | null) | undefined
  folder?: (string | null) | undefined
  isExisting?: boolean | undefined
  isExcluded?: boolean | undefined
}
type CollectionResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  sortTitle?: (string | null) | undefined
  tmdbId?: number | undefined
  images?: (MediaCover[] | null) | undefined
  overview?: (string | null) | undefined
  monitored?: boolean | undefined
  rootFolderPath?: (string | null) | undefined
  qualityProfileId?: number | undefined
  searchOnAdd?: boolean | undefined
  minimumAvailability?: MovieStatusType | undefined
  movies?: (CollectionMovieResource[] | null) | undefined
  missingMovies?: number | undefined
  tags?: (number[] | null) | undefined
}
type CollectionUpdateResource = {
  collectionIds?: (number[] | null) | undefined
  monitored?: (boolean | null) | undefined
  monitorMovies?: (boolean | null) | undefined
  searchOnAdd?: (boolean | null) | undefined
  qualityProfileId?: (number | null) | undefined
  rootFolderPath?: (string | null) | undefined
  minimumAvailability?: MovieStatusType | undefined
}
type CommandTrigger = 'unspecified' | 'manual' | 'scheduled'
type Command = {
  sendUpdatesToClient?: boolean | undefined
  updateScheduledTask?: boolean | undefined
  completionMessage?: (string | null) | undefined
  requiresDiskAccess?: boolean | undefined
  isExclusive?: boolean | undefined
  isTypeExclusive?: boolean | undefined
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
type CommandResult = 'unknown' | 'successful' | 'unsuccessful'
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
type CreditType = 'cast' | 'crew'
type CreditResource = {
  id?: number | undefined
  personName?: (string | null) | undefined
  creditTmdbId?: (string | null) | undefined
  personTmdbId?: number | undefined
  movieMetadataId?: number | undefined
  images?: (MediaCover[] | null) | undefined
  department?: (string | null) | undefined
  job?: (string | null) | undefined
  character?: (string | null) | undefined
  order?: number | undefined
  type?: CreditType | undefined
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
type MovieResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (MovieResource[] | null) | undefined
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
type Severity = 'error' | 'warning' | 'info'
type ValidationFailure = {
  propertyName?: (string | null) | undefined
  errorMessage?: (string | null) | undefined
  attemptedValue?: { [x: string]: unknown } | undefined
  customState?: { [x: string]: unknown } | undefined
  severity?: Severity | undefined
  errorCode?: (string | null) | undefined
  formattedMessageArguments?: ({ [x: string]: unknown }[] | null) | undefined
  formattedMessagePlaceholderValues?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type ProviderTestAllResult = {
  id?: number | undefined
  isValid?: boolean | undefined
  validationFailures?: (ValidationFailure[] | null) | undefined
}
type DownloadClientConfigResource = {
  id?: number | undefined
  downloadClientWorkingFolders?: (string | null) | undefined
  enableCompletedDownloadHandling?: boolean | undefined
  checkForFinishedDownloadInterval?: number | undefined
  autoRedownloadFailed?: boolean | undefined
  autoRedownloadFailedFromInteractiveSearch?: boolean | undefined
}
type ExtraFileType = 'subtitle' | 'metadata' | 'other'
type ExtraFileResource = {
  id?: number | undefined
  movieId?: number | undefined
  movieFileId?: (number | null) | undefined
  relativePath?: (string | null) | undefined
  extension?: (string | null) | undefined
  languageTags?: (string[] | null) | undefined
  title?: (string | null) | undefined
  type?: ExtraFileType | undefined
}
type FileSystemEntityType = 'parent' | 'drive' | 'folder' | 'file'
type FileSystemModel = {
  type?: FileSystemEntityType | undefined
  name?: (string | null) | undefined
  path?: (string | null) | undefined
  extension?: (string | null) | undefined
  size?: bigint | undefined
  lastModified?: (string | null) | undefined
}
type FileSystemResult = {
  parent?: (string | null) | undefined
  directories?: (FileSystemModel[] | null) | undefined
  files?: (FileSystemModel[] | null) | undefined
}
type FileSystemTypeResource = { type?: FileSystemEntityType | undefined }
type FileSystemMediaFileResource = {
  path?: (string | null) | undefined
  relativePath?: (string | null) | undefined
  name?: (string | null) | undefined
}
type HealthCheckResult = 'ok' | 'notice' | 'warning' | 'error'
type HealthResource = {
  id?: number | undefined
  source?: (string | null) | undefined
  type?: HealthCheckResult | undefined
  message?: (string | null) | undefined
  wikiUrl?: (string | null) | undefined
}
type MovieHistoryEventType =
  | 'unknown'
  | 'grabbed'
  | 'downloadFolderImported'
  | 'downloadFailed'
  | 'movieFileDeleted'
  | 'movieFolderImported'
  | 'movieFileRenamed'
  | 'downloadIgnored'
type HistoryResource = {
  id?: number | undefined
  movieId?: number | undefined
  sourceTitle?: (string | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  qualityCutoffNotMet?: boolean | undefined
  date?: string | undefined
  downloadId?: (string | null) | undefined
  eventType?: MovieHistoryEventType | undefined
  data?: ({ [x: string]: string | null } | null) | undefined
  movie?: MovieResource | undefined
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
type ImportListType = 'program' | 'tmdb' | 'trakt' | 'plex' | 'simkl' | 'other' | 'advanced'
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
  enabled?: boolean | undefined
  enableAuto?: boolean | undefined
  monitor?: MonitorTypes | undefined
  rootFolderPath?: (string | null) | undefined
  qualityProfileId?: number | undefined
  searchOnAdd?: boolean | undefined
  minimumAvailability?: MovieStatusType | undefined
  listType?: ImportListType | undefined
  listOrder?: number | undefined
  minRefreshInterval?: string | undefined
}
type ImportListBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enabled?: (boolean | null) | undefined
  enableAuto?: (boolean | null) | undefined
  rootFolderPath?: (string | null) | undefined
  qualityProfileId?: (number | null) | undefined
  minimumAvailability?: MovieStatusType | undefined
}
type ImportListConfigResource = {
  id?: number | undefined
  listSyncLevel?: (string | null) | undefined
}
type ImportListExclusionResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  fields?: (Field[] | null) | undefined
  implementationName?: (string | null) | undefined
  implementation?: (string | null) | undefined
  configContract?: (string | null) | undefined
  infoLink?: (string | null) | undefined
  message?: ProviderMessage | undefined
  tags?: (number[] | null) | undefined
  presets?: (ImportListExclusionResource[] | null) | undefined
  tmdbId?: number | undefined
  movieTitle?: (string | null) | undefined
  movieYear?: number | undefined
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
type AlternativeTitle = {
  id?: number | undefined
  sourceType?: SourceType | undefined
  movieMetadataId?: number | undefined
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
}
type MovieTranslation = {
  id?: number | undefined
  movieMetadataId?: number | undefined
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
  overview?: (string | null) | undefined
  language?: Language | undefined
}
type MovieMetadata = {
  id?: number | undefined
  tmdbId?: number | undefined
  images?: (MediaCover[] | null) | undefined
  genres?: (string[] | null) | undefined
  keywords?: (string[] | null) | undefined
  inCinemas?: (string | null) | undefined
  physicalRelease?: (string | null) | undefined
  digitalRelease?: (string | null) | undefined
  certification?: (string | null) | undefined
  year?: number | undefined
  ratings?: Ratings | undefined
  collectionTmdbId?: number | undefined
  collectionTitle?: (string | null) | undefined
  lastInfoSync?: (string | null) | undefined
  runtime?: number | undefined
  website?: (string | null) | undefined
  imdbId?: (string | null) | undefined
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
  sortTitle?: (string | null) | undefined
  status?: MovieStatusType | undefined
  overview?: (string | null) | undefined
  alternativeTitles?: (AlternativeTitle[] | null) | undefined
  translations?: (MovieTranslation[] | null) | undefined
  secondaryYear?: (number | null) | undefined
  youTubeTrailerId?: (string | null) | undefined
  studio?: (string | null) | undefined
  originalTitle?: (string | null) | undefined
  cleanOriginalTitle?: (string | null) | undefined
  originalLanguage?: Language | undefined
  recommendations?: (number[] | null) | undefined
  popularity?: number | undefined
  isRecentMovie?: boolean | undefined
}
type MovieCollection = {
  id?: number | undefined
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
  sortTitle?: (string | null) | undefined
  tmdbId?: number | undefined
  overview?: (string | null) | undefined
  monitored?: boolean | undefined
  qualityProfileId?: number | undefined
  rootFolderPath?: (string | null) | undefined
  searchOnAdd?: boolean | undefined
  minimumAvailability?: MovieStatusType | undefined
  lastInfoSync?: (string | null) | undefined
  images?: (MediaCover[] | null) | undefined
  added?: string | undefined
  movies?: (MovieMetadata[] | null) | undefined
  tags?: (number[] | null) | undefined
}
type ImportListMoviesResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  sortTitle?: (string | null) | undefined
  originalLanguage?: Language | undefined
  status?: MovieStatusType | undefined
  overview?: (string | null) | undefined
  inCinemas?: (string | null) | undefined
  physicalRelease?: (string | null) | undefined
  digitalRelease?: (string | null) | undefined
  images?: (MediaCover[] | null) | undefined
  website?: (string | null) | undefined
  remotePoster?: (string | null) | undefined
  year?: number | undefined
  youTubeTrailerId?: (string | null) | undefined
  studio?: (string | null) | undefined
  runtime?: number | undefined
  imdbId?: (string | null) | undefined
  tmdbId?: number | undefined
  folder?: (string | null) | undefined
  certification?: (string | null) | undefined
  popularity?: number | undefined
  genres?: (string[] | null) | undefined
  ratings?: Ratings | undefined
  collection?: MovieCollection | undefined
  isExcluded?: boolean | undefined
  isExisting?: boolean | undefined
  isTrending?: boolean | undefined
  isPopular?: boolean | undefined
  isRecommendation?: boolean | undefined
  lists?: (number[] | null) | undefined
}
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
}
type IndexerConfigResource = {
  id?: number | undefined
  minimumAge?: number | undefined
  maximumSize?: number | undefined
  retention?: number | undefined
  rssSyncInterval?: number | undefined
  preferIndexerFlags?: boolean | undefined
  availabilityDelay?: number | undefined
  allowHardcodedSubs?: boolean | undefined
  whitelistedHardcodedSubs?: (string | null) | undefined
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
  movie?: MovieResource | undefined
  movieFileId?: (number | null) | undefined
  releaseGroup?: (string | null) | undefined
  quality?: QualityModel | undefined
  languages?: (Language[] | null) | undefined
  qualityWeight?: number | undefined
  downloadId?: (string | null) | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  indexerFlags?: number | undefined
  rejections?: (ImportRejectionResource[] | null) | undefined
}
type ManualImportReprocessResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  movieId?: number | undefined
  movie?: MovieResource | undefined
  quality?: QualityModel | undefined
  languages?: (Language[] | null) | undefined
  releaseGroup?: (string | null) | undefined
  downloadId?: (string | null) | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  indexerFlags?: number | undefined
  rejections?: (ImportRejectionResource[] | null) | undefined
}
type ProperDownloadTypes = 'preferAndUpgrade' | 'doNotUpgrade' | 'doNotPrefer'
type FileDateType = 'none' | 'cinemas' | 'release'
type RescanAfterRefreshType = 'always' | 'afterManual' | 'never'
type MediaManagementConfigResource = {
  id?: number | undefined
  autoUnmonitorPreviouslyDownloadedMovies?: boolean | undefined
  recycleBin?: (string | null) | undefined
  recycleBinCleanupDays?: number | undefined
  downloadPropersAndRepacks?: ProperDownloadTypes | undefined
  createEmptyMovieFolders?: boolean | undefined
  deleteEmptyFolders?: boolean | undefined
  fileDate?: FileDateType | undefined
  rescanAfterRefresh?: RescanAfterRefreshType | undefined
  autoRenameFolders?: boolean | undefined
  pathsDefaultStatic?: boolean | undefined
  setPermissionsLinux?: boolean | undefined
  chmodFolder?: (string | null) | undefined
  chownGroup?: (string | null) | undefined
  skipFreeSpaceCheckWhenImporting?: boolean | undefined
  minimumFreeSpaceWhenImporting?: number | undefined
  copyUsingHardlinks?: boolean | undefined
  useScriptImport?: boolean | undefined
  scriptImportPath?: (string | null) | undefined
  importExtraFiles?: boolean | undefined
  extraFileExtensions?: (string | null) | undefined
  enableMediaInfo?: boolean | undefined
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
type TMDbCountryCode =
  | 'au'
  | 'br'
  | 'ca'
  | 'fr'
  | 'de'
  | 'gb'
  | 'in'
  | 'ie'
  | 'it'
  | 'nz'
  | 'ro'
  | 'es'
  | 'us'
type MetadataConfigResource = {
  id?: number | undefined
  certificationCountry?: TMDbCountryCode | undefined
}
type MovieEditorResource = {
  movieIds?: (number[] | null) | undefined
  monitored?: (boolean | null) | undefined
  qualityProfileId?: (number | null) | undefined
  minimumAvailability?: MovieStatusType | undefined
  rootFolderPath?: (string | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  moveFiles?: boolean | undefined
  deleteFiles?: boolean | undefined
  addImportExclusion?: boolean | undefined
}
type MovieFileListResource = {
  movieFileIds?: (number[] | null) | undefined
  languages?: (Language[] | null) | undefined
  quality?: QualityModel | undefined
  edition?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
  sceneName?: (string | null) | undefined
  indexerFlags?: (number | null) | undefined
}
type MovieFolderResource = { folder?: (string | null) | undefined }
type ColonReplacementFormat = 'delete' | 'dash' | 'spaceDash' | 'spaceDashSpace' | 'smart'
type NamingConfigResource = {
  id?: number | undefined
  renameMovies?: boolean | undefined
  replaceIllegalCharacters?: boolean | undefined
  colonReplacementFormat?: ColonReplacementFormat | undefined
  standardMovieFormat?: (string | null) | undefined
  movieFolderFormat?: (string | null) | undefined
}
type NamingExampleResource = {
  movieExample?: (string | null) | undefined
  movieFolderExample?: (string | null) | undefined
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
  onRename?: boolean | undefined
  onMovieAdded?: boolean | undefined
  onMovieDelete?: boolean | undefined
  onMovieFileDelete?: boolean | undefined
  onMovieFileDeleteForUpgrade?: boolean | undefined
  onHealthIssue?: boolean | undefined
  includeHealthWarnings?: boolean | undefined
  onHealthRestored?: boolean | undefined
  onApplicationUpdate?: boolean | undefined
  onManualInteractionRequired?: boolean | undefined
  supportsOnGrab?: boolean | undefined
  supportsOnDownload?: boolean | undefined
  supportsOnUpgrade?: boolean | undefined
  supportsOnRename?: boolean | undefined
  supportsOnMovieAdded?: boolean | undefined
  supportsOnMovieDelete?: boolean | undefined
  supportsOnMovieFileDelete?: boolean | undefined
  supportsOnMovieFileDeleteForUpgrade?: boolean | undefined
  supportsOnHealthIssue?: boolean | undefined
  supportsOnHealthRestored?: boolean | undefined
  supportsOnApplicationUpdate?: boolean | undefined
  supportsOnManualInteractionRequired?: boolean | undefined
  testCommand?: (string | null) | undefined
}
type ParsedMovieInfo = {
  movieTitles?: (string[] | null) | undefined
  originalTitle?: (string | null) | undefined
  releaseTitle?: (string | null) | undefined
  simpleReleaseTitle?: (string | null) | undefined
  quality?: QualityModel | undefined
  languages?: (Language[] | null) | undefined
  releaseGroup?: (string | null) | undefined
  releaseHash?: (string | null) | undefined
  edition?: (string | null) | undefined
  year?: number | undefined
  imdbId?: (string | null) | undefined
  tmdbId?: number | undefined
  hardcodedSubs?: (string | null) | undefined
  movieTitle?: (string | null) | undefined
  primaryMovieTitle?: (string | null) | undefined
}
type ParseResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  parsedMovieInfo?: ParsedMovieInfo | undefined
  movie?: MovieResource | undefined
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
  language?: Language | undefined
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
  movieId?: (number | null) | undefined
  movie?: MovieResource | undefined
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
type ReleaseHistoryResource = {
  grabbed?: (string | null) | undefined
  failed?: (string | null) | undefined
}
type ReleaseResource = {
  id?: number | undefined
  guid?: (string | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  history?: ReleaseHistoryResource | undefined
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
  sceneSource?: boolean | undefined
  movieTitles?: (string[] | null) | undefined
  languages?: (Language[] | null) | undefined
  mappedMovieId?: (number | null) | undefined
  approved?: boolean | undefined
  temporarilyRejected?: boolean | undefined
  rejected?: boolean | undefined
  tmdbId?: number | undefined
  imdbId?: number | undefined
  rejections?: (string[] | null) | undefined
  publishDate?: string | undefined
  commentUrl?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  infoUrl?: (string | null) | undefined
  movieRequested?: boolean | undefined
  downloadAllowed?: boolean | undefined
  releaseWeight?: number | undefined
  edition?: (string | null) | undefined
  magnetUrl?: (string | null) | undefined
  infoHash?: (string | null) | undefined
  seeders?: (number | null) | undefined
  leechers?: (number | null) | undefined
  protocol?: DownloadProtocol | undefined
  indexerFlags?: { [x: string]: unknown } | undefined
  movieId?: (number | null) | undefined
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
  indexerId?: number | undefined
  tags?: (number[] | null) | undefined
}
type RemotePathMappingResource = {
  id?: number | undefined
  host?: (string | null) | undefined
  remotePath?: (string | null) | undefined
  localPath?: (string | null) | undefined
}
type RenameMovieResource = {
  id?: number | undefined
  movieId?: number | undefined
  movieFileId?: number | undefined
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
  unmappedFolders?: (UnmappedFolder[] | null) | undefined
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
  databaseType?: DatabaseType | undefined
  databaseVersion?: (string | null) | undefined
  authentication?: AuthenticationType | undefined
  migrationVersion?: number | undefined
  urlBase?: (string | null) | undefined
  runtimeVersion?: (string | null) | undefined
  runtimeName?: (string | null) | undefined
  startTime?: string | undefined
  packageVersion?: (string | null) | undefined
  packageAuthor?: (string | null) | undefined
  packageUpdateMechanism?: UpdateMechanism | undefined
  packageUpdateMechanismMessage?: (string | null) | undefined
}
type SystemShutdownResource = { shuttingDown?: boolean | undefined }
type SystemRestartResource = { restarting?: boolean | undefined }
type TagResource = { id?: number | undefined; label?: (string | null) | undefined }
type TagDetailsResource = {
  id?: number | undefined
  label?: (string | null) | undefined
  delayProfileIds?: (number[] | null) | undefined
  importListIds?: (number[] | null) | undefined
  notificationIds?: (number[] | null) | undefined
  releaseProfileIds?: (number[] | null) | undefined
  indexerIds?: (number[] | null) | undefined
  downloadClientIds?: (number[] | null) | undefined
  autoTagIds?: (number[] | null) | undefined
  movieIds?: (number[] | null) | undefined
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
type MovieRuntimeFormatType = 'hoursMinutes' | 'minutes'
type UiConfigResource = {
  id?: number | undefined
  firstDayOfWeek?: number | undefined
  calendarWeekColumnHeader?: (string | null) | undefined
  movieRuntimeFormat?: MovieRuntimeFormatType | undefined
  shortDateFormat?: (string | null) | undefined
  longDateFormat?: (string | null) | undefined
  timeFormat?: (string | null) | undefined
  showRelativeDates?: boolean | undefined
  enableColorImpairedMode?: boolean | undefined
  movieInfoLanguage?: number | undefined
  uiLanguage?: number | undefined
  theme?: (string | null) | undefined
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
    '/api/v3/alttitle': {
      $get: {
        input: { query: { movieId?: number | undefined; movieMetadataId?: number | undefined } }
        output: AlternativeTitleResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/alttitle/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: AlternativeTitleResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api': { $get: { input: {}; output: ApiInfoResource; outputFormat: 'json'; status: 200 } }
  } & {
    '/login/sso': {
      $get: {
        input: { query: { returnUrl?: string | undefined } }
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
                rememberMe?: string | undefined
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
                rememberMe?: string | undefined
              }
            }
            output: ProblemDetails
            outputFormat: 'json'
            status: 401
          }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/logout': { $get: { input: {}; output: {}; outputFormat: string; status: 302 } } } & {
    '/api/v3/autotagging': {
      $post:
        | {
            input: { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: AutoTaggingResource }; output: {}; outputFormat: string; status: 404 }
      $get: { input: {}; output: AutoTaggingResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/autotagging/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: AutoTaggingResource }
            output: AutoTaggingResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: AutoTaggingResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get: {
        input: {}
        output: AutoTaggingSpecificationSchema[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/system/backup': {
      $get: { input: {}; output: BackupResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/system/backup/:id': {
      $delete:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/system/backup/restore/:id': {
      $post:
        | {
            input: { param: { id: number } }
            output: BackupRestoreResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/system/backup/restore/upload': {
      $post:
        | { input: {}; output: BackupRestoreResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BackupRestoreErrorResource; outputFormat: 'json'; status: 400 }
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
            movieIds?: number[] | undefined
            protocols?: DownloadProtocol[] | undefined
          }
        }
        output: BlocklistResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/blocklist/movie': {
      $get: {
        input: { query: { movieId?: number | undefined } }
        output: BlocklistResource[]
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
        output: { [x: string]: unknown }
        outputFormat: 'json'
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
            tags?: string | undefined
          }
        }
        output: MovieResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/feed/v3/calendar/radarr.ics': {
      $get: {
        input: {
          query: {
            pastDays?: number | undefined
            futureDays?: number | undefined
            tags?: string | undefined
            unmonitored?: boolean | undefined
            releaseTypes?: CalendarReleaseType[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/v3/collection': {
      $get: {
        input: { query: { tmdbId?: number | undefined } }
        output: CollectionResource[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: CollectionUpdateResource }
        output: CollectionResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/collection/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CollectionResource }
            output: CollectionResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CollectionResource }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: number } }
            output: CollectionResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/command': {
      $post:
        | {
            input: { json: CommandResource }
            output: CommandResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CommandResource }; output: {}; outputFormat: string; status: 404 }
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
    '/api/v3/credit': {
      $get: {
        input: { query: { movieId?: number | undefined; movieMetadataId?: number | undefined } }
        output: CreditResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/credit/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: CreditResource
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
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CustomFilterResource }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/customfilter/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CustomFilterResource }
            output: CustomFilterResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CustomFilterResource }
            output: {}
            outputFormat: string
            status: 404
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
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CustomFormatResource }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/customformat/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: CustomFormatResource }
            output: CustomFormatResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CustomFormatResource }
            output: {}
            outputFormat: string
            status: 404
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
      $put:
        | {
            input: { json: CustomFormatBulkResource }
            output: CustomFormatResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomFormatBulkResource }
            output: {}
            outputFormat: string
            status: 400
          }
      $delete: {
        input: { json: CustomFormatBulkResource }
        output: { [x: string]: unknown }
        outputFormat: 'json'
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
            monitored?: boolean | undefined
          }
        }
        output: MovieResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/delayprofile': {
      $post:
        | {
            input: { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: DelayProfileResource }; output: {}; outputFormat: string; status: 404 }
      $get: { input: {}; output: DelayProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/delayprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: DelayProfileResource }
            output: DelayProfileResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: DelayProfileResource }
            output: {}
            outputFormat: string
            status: 404
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
      $put: {
        input: { param: { id: number } } & { query: { after?: number | undefined } }
        output: DelayProfileResource[]
        outputFormat: 'json'
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
      $post:
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: DownloadClientResource }
            output: DownloadClientResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: DownloadClientResource }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/downloadclient/:id': {
      $put:
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: DownloadClientResource
            }
            output: DownloadClientResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: DownloadClientResource
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
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
      $put:
        | {
            input: { json: DownloadClientBulkResource }
            output: DownloadClientResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DownloadClientBulkResource }
            output: {}
            outputFormat: string
            status: 400
          }
      $delete: {
        input: { json: DownloadClientBulkResource }
        output: { [x: string]: unknown }
        outputFormat: 'json'
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
        status: 204
      }
    }
  } & {
    '/api/v3/downloadclient/testall': {
      $post:
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/v3/downloadclient/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 400
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
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: DownloadClientConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
    '/api/v3/extrafile': {
      $get: {
        input: { query: { movieId?: number | undefined } }
        output: ExtraFileResource[]
        outputFormat: 'json'
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
        output: FileSystemResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/filesystem/type': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: FileSystemTypeResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/filesystem/mediafiles': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: FileSystemMediaFileResource[]
        outputFormat: 'json'
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
            includeMovie?: boolean | undefined
            eventType?: number[] | undefined
            downloadId?: string | undefined
            movieIds?: number[] | undefined
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
            eventType?: MovieHistoryEventType | undefined
            includeMovie?: boolean | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/history/movie': {
      $get: {
        input: {
          query: {
            movieId?: number | undefined
            eventType?: MovieHistoryEventType | undefined
            includeMovie?: boolean | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/history/failed/:id': {
      $post: {
        input: { param: { id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/config/host': {
      $get: { input: {}; output: HostConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/host/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: HostConfigResource }
            output: HostConfigResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: HostConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
      $post:
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: ImportListResource }
            output: ImportListResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: ImportListResource }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/importlist/:id': {
      $put:
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: ImportListResource
            }
            output: ImportListResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: ImportListResource
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
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
      $put:
        | {
            input: { json: ImportListBulkResource }
            output: ImportListResource[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ImportListBulkResource }; output: {}; outputFormat: string; status: 400 }
      $delete: {
        input: { json: ImportListBulkResource }
        output: { [x: string]: unknown }
        outputFormat: 'json'
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
        status: 204
      }
    }
  } & {
    '/api/v3/importlist/testall': {
      $post:
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/v3/importlist/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: ImportListResource }
        output: {}
        outputFormat: string
        status: 400
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
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: ImportListConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
    '/api/v3/exclusions': {
      $get: { input: {}; output: ImportListExclusionResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ImportListExclusionResource }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/exclusions/paged': {
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
    '/api/v3/exclusions/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: ImportListExclusionResource }
            output: ImportListExclusionResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: ImportListExclusionResource }
            output: {}
            outputFormat: string
            status: 404
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
    '/api/v3/exclusions/bulk': {
      $post: {
        input: { json: ImportListExclusionResource[] }
        output: ImportListExclusionResource[]
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { json: ImportListExclusionBulkResource }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/importlist/movie': {
      $get: {
        input: {
          query: {
            includeRecommendations?: boolean | undefined
            includeTrending?: boolean | undefined
            includePopular?: boolean | undefined
          }
        }
        output: ImportListMoviesResource[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: MovieResource[] }
        output: MovieResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/indexer': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: IndexerResource }
            output: IndexerResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: IndexerResource }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/indexer/:id': {
      $put:
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: IndexerResource
            }
            output: IndexerResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: IndexerResource
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
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
      $put:
        | {
            input: { json: IndexerBulkResource }
            output: IndexerResource[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IndexerBulkResource }; output: {}; outputFormat: string; status: 400 }
      $delete: {
        input: { json: IndexerBulkResource }
        output: { [x: string]: unknown }
        outputFormat: 'json'
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
        status: 204
      }
    }
  } & {
    '/api/v3/indexer/testall': {
      $post:
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/v3/indexer/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 400
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
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: IndexerConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get: { input: {}; output: IndexerFlagResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/language': {
      $get: { input: {}; output: LanguageResource[]; outputFormat: 'json'; status: 200 }
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
    '/api/v3/localization': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v3/localization/language': {
      $get: { input: {}; output: LocalizationLanguageResource; outputFormat: 'json'; status: 200 }
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
      $get:
        | {
            input: { param: { filename: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/manualimport': {
      $get: {
        input: {
          query: {
            folder?: string | undefined
            downloadId?: string | undefined
            movieId?: number | undefined
            filterExistingFiles?: boolean | undefined
          }
        }
        output: ManualImportResource[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: ManualImportReprocessResource[] }
            output: ManualImportReprocessResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ManualImportReprocessResource[] }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/mediacover/:movieId/:filename': {
      $get: {
        input: { param: { movieId: number; filename: string } }
        output: {}
        outputFormat: string
        status: 404
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
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: MediaManagementConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
      $post:
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: MetadataResource }
            output: MetadataResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: MetadataResource }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/metadata/:id': {
      $put:
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: MetadataResource
            }
            output: MetadataResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: MetadataResource
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
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
        status: 204
      }
    }
  } & {
    '/api/v3/metadata/testall': {
      $post:
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/v3/metadata/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: MetadataResource }
        output: {}
        outputFormat: string
        status: 400
      }
    }
  } & {
    '/api/v3/config/metadata': {
      $get: { input: {}; output: MetadataConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/metadata/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: MetadataConfigResource }
            output: MetadataConfigResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: MetadataConfigResource }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { id: number } }
            output: MetadataConfigResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
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
            monitored?: boolean | undefined
          }
        }
        output: MovieResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/movie': {
      $get: {
        input: {
          query: {
            tmdbId?: number | undefined
            excludeLocalCovers?: boolean | undefined
            languageId?: number | undefined
          }
        }
        output: MovieResource[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: MovieResource }
            output: MovieResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: MovieResource }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/movie/:id': {
      $put:
        | {
            input: { param: { id: string } } & { query: { moveFiles?: boolean | undefined } } & {
              json: MovieResource
            }
            output: MovieResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { query: { moveFiles?: boolean | undefined } } & {
              json: MovieResource
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { id: number } } & {
          query: { deleteFiles?: boolean | undefined; addImportExclusion?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: number } }
            output: MovieResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/movie/editor': {
      $put:
        | {
            input: { json: MovieEditorResource }
            output: MovieResource[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MovieEditorResource }; output: {}; outputFormat: string; status: 400 }
      $delete: {
        input: { json: MovieEditorResource }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/moviefile': {
      $get:
        | {
            input: {
              query: { movieId?: number[] | undefined; movieFileIds?: number[] | undefined }
            }
            output: MovieFileResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { movieId?: number[] | undefined; movieFileIds?: number[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/moviefile/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: MovieFileResource }
            output: MovieFileResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: MovieFileResource }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { id: number } }
            output: MovieFileResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/moviefile/editor': {
      $put: {
        input: { json: MovieFileListResource }
        output: MovieFileResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/moviefile/bulk': {
      $delete:
        | {
            input: { json: MovieFileListResource }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: MovieFileListResource }; output: {}; outputFormat: string; status: 400 }
      $put: {
        input: { json: MovieFileResource[] }
        output: MovieFileResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/movie/:id/folder': {
      $get: {
        input: { param: { id: number } }
        output: MovieFolderResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/movie/import': {
      $post: {
        input: { json: MovieResource[] }
        output: MovieResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/movie/lookup/tmdb': {
      $get: {
        input: { query: { tmdbId?: number | undefined } }
        output: MovieResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/movie/lookup/imdb': {
      $get: {
        input: { query: { imdbId?: string | undefined } }
        output: MovieResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/movie/lookup': {
      $get: {
        input: { query: { term?: string | undefined } }
        output: MovieResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/config/naming': {
      $get: { input: {}; output: NamingConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/config/naming/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: NamingConfigResource }
            output: NamingConfigResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NamingConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
            renameMovies?: boolean | undefined
            replaceIllegalCharacters?: boolean | undefined
            colonReplacementFormat?: ColonReplacementFormat | undefined
            standardMovieFormat?: string | undefined
            movieFolderFormat?: string | undefined
            id?: number | undefined
            resourceName?: string | undefined
          }
        }
        output: NamingExampleResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/notification': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: NotificationResource }
            output: NotificationResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { forceSave?: boolean | undefined } } & { json: NotificationResource }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/notification/:id': {
      $put:
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: NotificationResource
            }
            output: NotificationResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
              json: NotificationResource
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete: {
        input: { param: { id: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
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
        status: 204
      }
    }
  } & {
    '/api/v3/notification/testall': {
      $post:
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProviderTestAllResult[]; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/api/v3/notification/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 400
      }
    }
  } & {
    '/api/v3/parse': {
      $get: {
        input: { query: { title?: string | undefined } }
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
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: QualityDefinitionResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get: { input: {}; output: QualityDefinitionResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/qualitydefinition/update': {
      $put: {
        input: { json: QualityDefinitionResource[] }
        output: QualityDefinitionResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/qualitydefinition/limits': {
      $get: {
        input: {}
        output: QualityDefinitionLimitsResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/qualityprofile': {
      $post:
        | {
            input: { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: QualityProfileResource }; output: {}; outputFormat: string; status: 404 }
      $get: { input: {}; output: QualityProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/qualityprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: QualityProfileResource }
            output: QualityProfileResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: QualityProfileResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get: { input: {}; output: QualityProfileResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/queue/:id': {
      $delete:
        | {
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
        | {
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
            status: 404
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
        output: { [x: string]: unknown }
        outputFormat: 'json'
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
            includeUnknownMovieItems?: boolean | undefined
            includeMovie?: boolean | undefined
            movieIds?: number[] | undefined
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
      $post:
        | {
            input: { param: { id: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/queue/grab/bulk': {
      $post:
        | {
            input: { json: QueueBulkResource }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: QueueBulkResource }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/queue/details': {
      $get: {
        input: { query: { movieId?: number | undefined; includeMovie?: boolean | undefined } }
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
      $post:
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ReleaseResource }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { query: { movieId?: number | undefined } }
            output: ReleaseResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { movieId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/releaseprofile': {
      $post:
        | {
            input: { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ReleaseProfileResource }; output: {}; outputFormat: string; status: 404 }
      $get: { input: {}; output: ReleaseProfileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/releaseprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: ReleaseProfileResource }
            output: ReleaseProfileResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: ReleaseProfileResource }
            output: {}
            outputFormat: string
            status: 404
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
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ReleaseResource }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/v3/remotepathmapping': {
      $post:
        | {
            input: { json: RemotePathMappingResource }
            output: RemotePathMappingResource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RemotePathMappingResource }
            output: {}
            outputFormat: string
            status: 404
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
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RemotePathMappingResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get:
        | {
            input: { query: { movieId?: number[] | undefined } }
            output: RenameMovieResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { movieId?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/rootfolder': {
      $post:
        | {
            input: { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: RootFolderResource }; output: {}; outputFormat: string; status: 404 }
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
    '/api/v3/system/routes': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v3/system/routes/duplicate': {
      $get: { input: {}; output: { [x: string]: string[] }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/system/shutdown': {
      $post: { input: {}; output: SystemShutdownResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/system/restart': {
      $post: { input: {}; output: SystemRestartResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v3/tag': {
      $get: { input: {}; output: TagResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'json'; status: 201 }
        | { input: { json: TagResource }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v3/tag/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: TagResource }
            output: TagResource
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: TagResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get: { input: {}; output: TaskResource[]; outputFormat: 'json'; status: 200 }
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
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: UiConfigResource }
            output: {}
            outputFormat: string
            status: 404
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
      $get:
        | {
            input: { param: { filename: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { filename: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
