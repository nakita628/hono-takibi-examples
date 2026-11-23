type Ratings = { votes?: number | undefined; value?: number | undefined }
type MediumResource = {
  mediumNumber?: number | undefined
  mediumName?: (string | null) | undefined
  mediumFormat?: (string | null) | undefined
}
type AlbumReleaseResource = {
  id?: number | undefined
  albumId?: number | undefined
  foreignReleaseId?: (string | null) | undefined
  title?: (string | null) | undefined
  status?: (string | null) | undefined
  duration?: number | undefined
  trackCount?: number | undefined
  media?: (MediumResource[] | null) | undefined
  mediumCount?: number | undefined
  disambiguation?: (string | null) | undefined
  country?: (string[] | null) | undefined
  label?: (string[] | null) | undefined
  format?: (string | null) | undefined
  monitored?: boolean | undefined
}
type ArtistStatusType = 'continuing' | 'ended' | 'deleted'
type Links = { url?: (string | null) | undefined; name?: (string | null) | undefined }
type MediaCoverTypes =
  | 'unknown'
  | 'poster'
  | 'banner'
  | 'fanart'
  | 'screenshot'
  | 'headshot'
  | 'cover'
  | 'disc'
  | 'logo'
  | 'clearlogo'
type MediaCover = {
  url?: (string | null) | undefined
  coverType?: MediaCoverTypes | undefined
  extension?: (string | null) | undefined
  remoteUrl?: (string | null) | undefined
}
type Member = {
  name?: (string | null) | undefined
  instrument?: (string | null) | undefined
  images?: (MediaCover[] | null) | undefined
}
type NewItemMonitorTypes = 'all' | 'none' | 'new'
type MonitorTypes =
  | 'all'
  | 'future'
  | 'missing'
  | 'existing'
  | 'latest'
  | 'first'
  | 'none'
  | 'unknown'
type AddArtistOptions = {
  monitor?: MonitorTypes | undefined
  albumsToMonitor?: (string[] | null) | undefined
  monitored?: boolean | undefined
  searchForMissingAlbums?: boolean | undefined
}
type ArtistStatisticsResource = {
  albumCount?: number | undefined
  trackFileCount?: number | undefined
  trackCount?: number | undefined
  totalTrackCount?: number | undefined
  sizeOnDisk?: bigint | undefined
  percentOfTracks?: number | undefined
}
type ArtistResource = {
  id?: number | undefined
  status?: ArtistStatusType | undefined
  ended?: boolean | undefined
  artistName?: (string | null) | undefined
  foreignArtistId?: (string | null) | undefined
  mbId?: (string | null) | undefined
  tadbId?: number | undefined
  discogsId?: number | undefined
  allMusicId?: (string | null) | undefined
  overview?: (string | null) | undefined
  artistType?: (string | null) | undefined
  disambiguation?: (string | null) | undefined
  links?: (Links[] | null) | undefined
  nextAlbum?: AlbumResource | undefined
  lastAlbum?: AlbumResource | undefined
  images?: (MediaCover[] | null) | undefined
  members?: (Member[] | null) | undefined
  remotePoster?: (string | null) | undefined
  path?: (string | null) | undefined
  qualityProfileId?: number | undefined
  metadataProfileId?: number | undefined
  monitored?: boolean | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
  rootFolderPath?: (string | null) | undefined
  folder?: (string | null) | undefined
  genres?: (string[] | null) | undefined
  cleanName?: (string | null) | undefined
  sortName?: (string | null) | undefined
  tags?: (number[] | null) | undefined
  added?: string | undefined
  addOptions?: AddArtistOptions | undefined
  ratings?: Ratings | undefined
  statistics?: ArtistStatisticsResource | undefined
}
type AlbumStatisticsResource = {
  trackFileCount?: number | undefined
  trackCount?: number | undefined
  totalTrackCount?: number | undefined
  sizeOnDisk?: bigint | undefined
  percentOfTracks?: number | undefined
}
type AlbumAddType = 'automatic' | 'manual'
type AddAlbumOptions = {
  addType?: AlbumAddType | undefined
  searchForNewAlbum?: boolean | undefined
}
type AlbumResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  disambiguation?: (string | null) | undefined
  overview?: (string | null) | undefined
  artistId?: number | undefined
  foreignAlbumId?: (string | null) | undefined
  monitored?: boolean | undefined
  anyReleaseOk?: boolean | undefined
  profileId?: number | undefined
  duration?: number | undefined
  albumType?: (string | null) | undefined
  secondaryTypes?: (string[] | null) | undefined
  mediumCount?: number | undefined
  ratings?: Ratings | undefined
  releaseDate?: (string | null) | undefined
  releases?: (AlbumReleaseResource[] | null) | undefined
  genres?: (string[] | null) | undefined
  media?: (MediumResource[] | null) | undefined
  artist?: ArtistResource | undefined
  images?: (MediaCover[] | null) | undefined
  links?: (Links[] | null) | undefined
  lastSearchTime?: (string | null) | undefined
  statistics?: AlbumStatisticsResource | undefined
  addOptions?: AddAlbumOptions | undefined
  remoteCover?: (string | null) | undefined
}
type AlbumsMonitoredResource = {
  albumIds?: (number[] | null) | undefined
  monitored?: boolean | undefined
}
type AlbumStudioArtistResource = {
  id?: number | undefined
  monitored?: (boolean | null) | undefined
  albums?: (AlbumResource[] | null) | undefined
}
type MonitoringOptions = {
  monitor?: MonitorTypes | undefined
  albumsToMonitor?: (string[] | null) | undefined
  monitored?: boolean | undefined
}
type AlbumStudioResource = {
  artist?: (AlbumStudioArtistResource[] | null) | undefined
  monitoringOptions?: MonitoringOptions | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
}
type ApplyTags = 'add' | 'remove' | 'replace'
type ArtistEditorResource = {
  artistIds?: (number[] | null) | undefined
  monitored?: (boolean | null) | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
  qualityProfileId?: (number | null) | undefined
  metadataProfileId?: (number | null) | undefined
  rootFolderPath?: (string | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  moveFiles?: boolean | undefined
  deleteFiles?: boolean | undefined
  addImportListExclusion?: boolean | undefined
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
  value?: ({ [x: string]: unknown } | null) | undefined
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
type Quality = { id?: number | undefined; name?: (string | null) | undefined }
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
type DownloadProtocol = 'unknown' | 'usenet' | 'torrent'
type BlocklistResource = {
  id?: number | undefined
  artistId?: number | undefined
  albumIds?: (number[] | null) | undefined
  sourceTitle?: (string | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  date?: string | undefined
  protocol?: DownloadProtocol | undefined
  indexer?: (string | null) | undefined
  message?: (string | null) | undefined
  artist?: ArtistResource | undefined
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
type AlbumResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (AlbumResource[] | null) | undefined
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
type HealthCheckResult = 'ok' | 'notice' | 'warning' | 'error'
type HealthResource = {
  id?: number | undefined
  source?: (string | null) | undefined
  type?: HealthCheckResult | undefined
  message?: (string | null) | undefined
  wikiUrl?: (string | null) | undefined
}
type EntityHistoryEventType =
  | 'unknown'
  | 'grabbed'
  | 'artistFolderImported'
  | 'trackFileImported'
  | 'downloadFailed'
  | 'trackFileDeleted'
  | 'trackFileRenamed'
  | 'albumImportIncomplete'
  | 'downloadImported'
  | 'trackFileRetagged'
  | 'downloadIgnored'
type MediaInfoResource = {
  id?: number | undefined
  audioChannels?: number | undefined
  audioBitRate?: (string | null) | undefined
  audioCodec?: (string | null) | undefined
  audioBits?: (string | null) | undefined
  audioSampleRate?: (string | null) | undefined
}
type ArtistTitleInfo = {
  title?: (string | null) | undefined
  titleWithoutYear?: (string | null) | undefined
  year?: number | undefined
}
type IsoCountry = {
  twoLetterCode?: (string | null) | undefined
  name?: (string | null) | undefined
}
type MediaInfoModel = {
  audioFormat?: (string | null) | undefined
  audioBitrate?: number | undefined
  audioChannels?: number | undefined
  audioBits?: number | undefined
  audioSampleRate?: number | undefined
}
type ParsedTrackInfo = {
  title?: (string | null) | undefined
  cleanTitle?: (string | null) | undefined
  artistTitle?: (string | null) | undefined
  albumTitle?: (string | null) | undefined
  artistTitleInfo?: ArtistTitleInfo | undefined
  artistMBId?: (string | null) | undefined
  albumMBId?: (string | null) | undefined
  releaseMBId?: (string | null) | undefined
  recordingMBId?: (string | null) | undefined
  trackMBId?: (string | null) | undefined
  discNumber?: number | undefined
  discCount?: number | undefined
  country?: IsoCountry | undefined
  year?: number | undefined
  label?: (string | null) | undefined
  catalogNumber?: (string | null) | undefined
  disambiguation?: (string | null) | undefined
  duration?: string | undefined
  quality?: QualityModel | undefined
  mediaInfo?: MediaInfoModel | undefined
  trackNumbers?: (number[] | null) | undefined
  releaseGroup?: (string | null) | undefined
  releaseHash?: (string | null) | undefined
}
type TrackFileResource = {
  id?: number | undefined
  artistId?: number | undefined
  albumId?: number | undefined
  path?: (string | null) | undefined
  size?: bigint | undefined
  dateAdded?: string | undefined
  sceneName?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
  quality?: QualityModel | undefined
  qualityWeight?: number | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  indexerFlags?: (number | null) | undefined
  mediaInfo?: MediaInfoResource | undefined
  qualityCutoffNotMet?: boolean | undefined
  audioTags?: ParsedTrackInfo | undefined
}
type TrackResource = {
  id?: number | undefined
  artistId?: number | undefined
  foreignTrackId?: (string | null) | undefined
  foreignRecordingId?: (string | null) | undefined
  trackFileId?: number | undefined
  albumId?: number | undefined
  explicit?: boolean | undefined
  absoluteTrackNumber?: number | undefined
  trackNumber?: (string | null) | undefined
  title?: (string | null) | undefined
  duration?: number | undefined
  trackFile?: TrackFileResource | undefined
  mediumNumber?: number | undefined
  hasFile?: boolean | undefined
  artist?: ArtistResource | undefined
  ratings?: Ratings | undefined
}
type HistoryResource = {
  id?: number | undefined
  albumId?: number | undefined
  artistId?: number | undefined
  trackId?: number | undefined
  sourceTitle?: (string | null) | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  qualityCutoffNotMet?: boolean | undefined
  date?: string | undefined
  downloadId?: (string | null) | undefined
  eventType?: EntityHistoryEventType | undefined
  data?: ({ [x: string]: string | null } | null) | undefined
  album?: AlbumResource | undefined
  artist?: ArtistResource | undefined
  track?: TrackResource | undefined
}
type HistoryResourcePagingResource = {
  page?: number | undefined
  pageSize?: number | undefined
  sortKey?: (string | null) | undefined
  sortDirection?: SortDirection | undefined
  totalRecords?: number | undefined
  records?: (HistoryResource[] | null) | undefined
}
type AuthenticationType = 'none' | 'basic' | 'forms' | 'external'
type AuthenticationRequiredType = 'enabled' | 'disabledForLocalAddresses'
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
  analyticsEnabled?: boolean | undefined
  username?: (string | null) | undefined
  password?: (string | null) | undefined
  passwordConfirmation?: (string | null) | undefined
  logLevel?: (string | null) | undefined
  logSizeLimit?: number | undefined
  consoleLogLevel?: (string | null) | undefined
  branch?: (string | null) | undefined
  apiKey?: (string | null) | undefined
  sslCertPath?: (string | null) | undefined
  sslCertPassword?: (string | null) | undefined
  urlBase?: (string | null) | undefined
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
type ImportListMonitorType = 'none' | 'specificAlbum' | 'entireArtist'
type ImportListType = 'program' | 'spotify' | 'lastFm' | 'other' | 'advanced'
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
  shouldMonitor?: ImportListMonitorType | undefined
  shouldMonitorExisting?: boolean | undefined
  shouldSearch?: boolean | undefined
  rootFolderPath?: (string | null) | undefined
  monitorNewItems?: NewItemMonitorTypes | undefined
  qualityProfileId?: number | undefined
  metadataProfileId?: number | undefined
  listType?: ImportListType | undefined
  listOrder?: number | undefined
  minRefreshInterval?: string | undefined
}
type ImportListBulkResource = {
  ids?: (number[] | null) | undefined
  tags?: (number[] | null) | undefined
  applyTags?: ApplyTags | undefined
  enableAutomaticAdd?: (boolean | null) | undefined
  rootFolderPath?: (string | null) | undefined
  qualityProfileId?: (number | null) | undefined
}
type ImportListExclusionResource = {
  id?: number | undefined
  foreignId?: (string | null) | undefined
  artistName?: (string | null) | undefined
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
type LocalizationResource = {
  id?: number | undefined
  strings?: ({ [x: string]: string | null } | null) | undefined
}
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
type Rejection = { reason?: (string | null) | undefined; type?: RejectionType | undefined }
type ManualImportUpdateResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  name?: (string | null) | undefined
  artistId?: (number | null) | undefined
  albumId?: (number | null) | undefined
  albumReleaseId?: (number | null) | undefined
  tracks?: (TrackResource[] | null) | undefined
  trackIds?: (number[] | null) | undefined
  quality?: QualityModel | undefined
  releaseGroup?: (string | null) | undefined
  indexerFlags?: number | undefined
  downloadId?: (string | null) | undefined
  additionalFile?: boolean | undefined
  replaceExistingFiles?: boolean | undefined
  disableReleaseSwitching?: boolean | undefined
  rejections?: (Rejection[] | null) | undefined
}
type ManualImportResource = {
  id?: number | undefined
  path?: (string | null) | undefined
  name?: (string | null) | undefined
  size?: bigint | undefined
  artist?: ArtistResource | undefined
  album?: AlbumResource | undefined
  albumReleaseId?: number | undefined
  tracks?: (TrackResource[] | null) | undefined
  quality?: QualityModel | undefined
  releaseGroup?: (string | null) | undefined
  qualityWeight?: number | undefined
  downloadId?: (string | null) | undefined
  indexerFlags?: number | undefined
  rejections?: (Rejection[] | null) | undefined
  audioTags?: ParsedTrackInfo | undefined
  additionalFile?: boolean | undefined
  replaceExistingFiles?: boolean | undefined
  disableReleaseSwitching?: boolean | undefined
}
type ProperDownloadTypes = 'preferAndUpgrade' | 'doNotUpgrade' | 'doNotPrefer'
type FileDateType = 'none' | 'albumReleaseDate'
type RescanAfterRefreshType = 'always' | 'afterManual' | 'never'
type AllowFingerprinting = 'never' | 'newFiles' | 'allFiles'
type MediaManagementConfigResource = {
  id?: number | undefined
  autoUnmonitorPreviouslyDownloadedTracks?: boolean | undefined
  recycleBin?: (string | null) | undefined
  recycleBinCleanupDays?: number | undefined
  downloadPropersAndRepacks?: ProperDownloadTypes | undefined
  createEmptyArtistFolders?: boolean | undefined
  deleteEmptyFolders?: boolean | undefined
  fileDate?: FileDateType | undefined
  watchLibraryForChanges?: boolean | undefined
  rescanAfterRefresh?: RescanAfterRefreshType | undefined
  allowFingerprinting?: AllowFingerprinting | undefined
  setPermissionsLinux?: boolean | undefined
  chmodFolder?: (string | null) | undefined
  chownGroup?: (string | null) | undefined
  skipFreeSpaceCheckWhenImporting?: boolean | undefined
  minimumFreeSpaceWhenImporting?: number | undefined
  copyUsingHardlinks?: boolean | undefined
  enableMediaInfo?: boolean | undefined
  useScriptImport?: boolean | undefined
  scriptImportPath?: (string | null) | undefined
  importExtraFiles?: boolean | undefined
  extraFileExtensions?: (string | null) | undefined
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
type PrimaryAlbumType = { id?: number | undefined; name?: (string | null) | undefined }
type ProfilePrimaryAlbumTypeItemResource = {
  id?: number | undefined
  albumType?: PrimaryAlbumType | undefined
  allowed?: boolean | undefined
}
type SecondaryAlbumType = { id?: number | undefined; name?: (string | null) | undefined }
type ProfileSecondaryAlbumTypeItemResource = {
  id?: number | undefined
  albumType?: SecondaryAlbumType | undefined
  allowed?: boolean | undefined
}
type ReleaseStatus = { id?: number | undefined; name?: (string | null) | undefined }
type ProfileReleaseStatusItemResource = {
  id?: number | undefined
  releaseStatus?: ReleaseStatus | undefined
  allowed?: boolean | undefined
}
type MetadataProfileResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  primaryAlbumTypes?: (ProfilePrimaryAlbumTypeItemResource[] | null) | undefined
  secondaryAlbumTypes?: (ProfileSecondaryAlbumTypeItemResource[] | null) | undefined
  releaseStatuses?: (ProfileReleaseStatusItemResource[] | null) | undefined
}
type WriteAudioTagsType = 'no' | 'newFiles' | 'allFiles' | 'sync'
type MetadataProviderConfigResource = {
  id?: number | undefined
  metadataSource?: (string | null) | undefined
  writeAudioTags?: WriteAudioTagsType | undefined
  scrubAudioTags?: boolean | undefined
  embedCoverArt?: boolean | undefined
}
type NamingConfigResource = {
  id?: number | undefined
  renameTracks?: boolean | undefined
  replaceIllegalCharacters?: boolean | undefined
  colonReplacementFormat?: number | undefined
  standardTrackFormat?: (string | null) | undefined
  multiDiscTrackFormat?: (string | null) | undefined
  artistFolderFormat?: (string | null) | undefined
  includeArtistName?: boolean | undefined
  includeAlbumTitle?: boolean | undefined
  includeQuality?: boolean | undefined
  replaceSpaces?: boolean | undefined
  separator?: (string | null) | undefined
  numberStyle?: (string | null) | undefined
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
  onReleaseImport?: boolean | undefined
  onUpgrade?: boolean | undefined
  onRename?: boolean | undefined
  onArtistAdd?: boolean | undefined
  onArtistDelete?: boolean | undefined
  onAlbumDelete?: boolean | undefined
  onHealthIssue?: boolean | undefined
  onHealthRestored?: boolean | undefined
  onDownloadFailure?: boolean | undefined
  onImportFailure?: boolean | undefined
  onTrackRetag?: boolean | undefined
  onApplicationUpdate?: boolean | undefined
  supportsOnGrab?: boolean | undefined
  supportsOnReleaseImport?: boolean | undefined
  supportsOnUpgrade?: boolean | undefined
  supportsOnRename?: boolean | undefined
  supportsOnArtistAdd?: boolean | undefined
  supportsOnArtistDelete?: boolean | undefined
  supportsOnAlbumDelete?: boolean | undefined
  supportsOnHealthIssue?: boolean | undefined
  supportsOnHealthRestored?: boolean | undefined
  includeHealthWarnings?: boolean | undefined
  supportsOnDownloadFailure?: boolean | undefined
  supportsOnImportFailure?: boolean | undefined
  supportsOnTrackRetag?: boolean | undefined
  supportsOnApplicationUpdate?: boolean | undefined
  testCommand?: (string | null) | undefined
}
type ParsedAlbumInfo = {
  releaseTitle?: (string | null) | undefined
  albumTitle?: (string | null) | undefined
  artistName?: (string | null) | undefined
  albumType?: (string | null) | undefined
  artistTitleInfo?: ArtistTitleInfo | undefined
  quality?: QualityModel | undefined
  releaseDate?: (string | null) | undefined
  discography?: boolean | undefined
  discographyStart?: number | undefined
  discographyEnd?: number | undefined
  releaseGroup?: (string | null) | undefined
  releaseHash?: (string | null) | undefined
  releaseVersion?: (string | null) | undefined
}
type ParseResource = {
  id?: number | undefined
  title?: (string | null) | undefined
  parsedAlbumInfo?: ParsedAlbumInfo | undefined
  artist?: ArtistResource | undefined
  albums?: (AlbumResource[] | null) | undefined
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
  formatItems?: (ProfileFormatItemResource[] | null) | undefined
}
type QueueBulkResource = { ids?: (number[] | null) | undefined }
type TrackedDownloadStatus = 'ok' | 'warning' | 'error'
type TrackedDownloadState =
  | 'downloading'
  | 'downloadFailed'
  | 'downloadFailedPending'
  | 'importBlocked'
  | 'importPending'
  | 'importing'
  | 'importFailed'
  | 'imported'
  | 'ignored'
type TrackedDownloadStatusMessage = {
  title?: (string | null) | undefined
  messages?: (string[] | null) | undefined
}
type QueueResource = {
  id?: number | undefined
  artistId?: (number | null) | undefined
  albumId?: (number | null) | undefined
  artist?: ArtistResource | undefined
  album?: AlbumResource | undefined
  quality?: QualityModel | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  size?: number | undefined
  title?: (string | null) | undefined
  sizeleft?: number | undefined
  timeleft?: (string | null) | undefined
  estimatedCompletionTime?: (string | null) | undefined
  added?: (string | null) | undefined
  status?: (string | null) | undefined
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
  trackFileCount?: number | undefined
  trackHasFileCount?: number | undefined
  downloadForced?: boolean | undefined
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
  discography?: boolean | undefined
  sceneSource?: boolean | undefined
  airDate?: (string | null) | undefined
  artistName?: (string | null) | undefined
  albumTitle?: (string | null) | undefined
  approved?: boolean | undefined
  temporarilyRejected?: boolean | undefined
  rejected?: boolean | undefined
  rejections?: (string[] | null) | undefined
  publishDate?: string | undefined
  commentUrl?: (string | null) | undefined
  downloadUrl?: (string | null) | undefined
  infoUrl?: (string | null) | undefined
  downloadAllowed?: boolean | undefined
  releaseWeight?: number | undefined
  customFormats?: (CustomFormatResource[] | null) | undefined
  customFormatScore?: number | undefined
  magnetUrl?: (string | null) | undefined
  infoHash?: (string | null) | undefined
  seeders?: (number | null) | undefined
  leechers?: (number | null) | undefined
  protocol?: DownloadProtocol | undefined
  indexerFlags?: number | undefined
  artistId?: (number | null) | undefined
  albumId?: (number | null) | undefined
  downloadClientId?: (number | null) | undefined
  downloadClient?: (string | null) | undefined
}
type ReleaseProfileResource = {
  id?: number | undefined
  enabled?: boolean | undefined
  required?: (string[] | null) | undefined
  ignored?: (string[] | null) | undefined
  indexerId?: number | undefined
  tags?: (number[] | null) | undefined
}
type RemotePathMappingResource = {
  id?: number | undefined
  host?: (string | null) | undefined
  remotePath?: (string | null) | undefined
  localPath?: (string | null) | undefined
}
type RenameTrackResource = {
  id?: number | undefined
  artistId?: number | undefined
  albumId?: number | undefined
  trackNumbers?: (number[] | null) | undefined
  trackFileId?: number | undefined
  existingPath?: (string | null) | undefined
  newPath?: (string | null) | undefined
}
type TagDifference = {
  field?: (string | null) | undefined
  oldValue?: (string | null) | undefined
  newValue?: (string | null) | undefined
}
type RetagTrackResource = {
  id?: number | undefined
  artistId?: number | undefined
  albumId?: number | undefined
  trackNumbers?: (number[] | null) | undefined
  trackFileId?: number | undefined
  path?: (string | null) | undefined
  changes?: (TagDifference[] | null) | undefined
}
type RootFolderResource = {
  id?: number | undefined
  name?: (string | null) | undefined
  path?: (string | null) | undefined
  defaultMetadataProfileId?: number | undefined
  defaultQualityProfileId?: number | undefined
  defaultMonitorOption?: MonitorTypes | undefined
  defaultNewItemMonitorOption?: NewItemMonitorTypes | undefined
  defaultTags?: (number[] | null) | undefined
  accessible?: boolean | undefined
  freeSpace?: (bigint | null) | undefined
  totalSpace?: (bigint | null) | undefined
}
type SearchResource = {
  id?: number | undefined
  foreignId?: (string | null) | undefined
  artist?: ArtistResource | undefined
  album?: AlbumResource | undefined
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
type TagResource = { id?: number | undefined; label?: (string | null) | undefined }
type TagDetailsResource = {
  id?: number | undefined
  label?: (string | null) | undefined
  delayProfileIds?: (number[] | null) | undefined
  importListIds?: (number[] | null) | undefined
  notificationIds?: (number[] | null) | undefined
  restrictionIds?: (number[] | null) | undefined
  indexerIds?: (number[] | null) | undefined
  downloadClientIds?: (number[] | null) | undefined
  autoTagIds?: (number[] | null) | undefined
  artistIds?: (number[] | null) | undefined
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
type TrackFileListResource = {
  trackFileIds?: (number[] | null) | undefined
  quality?: QualityModel | undefined
  sceneName?: (string | null) | undefined
  releaseGroup?: (string | null) | undefined
}
type UiConfigResource = {
  id?: number | undefined
  firstDayOfWeek?: number | undefined
  calendarWeekColumnHeader?: (string | null) | undefined
  shortDateFormat?: (string | null) | undefined
  longDateFormat?: (string | null) | undefined
  timeFormat?: (string | null) | undefined
  showRelativeDates?: boolean | undefined
  enableColorImpairedMode?: boolean | undefined
  uiLanguage?: number | undefined
  expandAlbumByDefault?: boolean | undefined
  expandSingleByDefault?: boolean | undefined
  expandEPByDefault?: boolean | undefined
  expandBroadcastByDefault?: boolean | undefined
  expandOtherByDefault?: boolean | undefined
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
    '/api/v1/album': {
      $get:
        | {
            input: {
              query: {
                artistId?: number | undefined
                albumIds?: number[] | undefined
                foreignAlbumId?: string | undefined
                includeAllArtistAlbums?: boolean | undefined
              }
            }
            output: AlbumResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                artistId?: number | undefined
                albumIds?: number[] | undefined
                foreignAlbumId?: string | undefined
                includeAllArtistAlbums?: boolean | undefined
              }
            }
            output: AlbumResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                artistId?: number | undefined
                albumIds?: number[] | undefined
                foreignAlbumId?: string | undefined
                includeAllArtistAlbums?: boolean | undefined
              }
            }
            output: AlbumResource[]
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: AlbumResource }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AlbumResource }
            output: AlbumResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AlbumResource }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/album/:id': {
      $put:
        | {
            input: { param: { id: string } } & { json: AlbumResource }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AlbumResource }
            output: AlbumResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AlbumResource }
            output: AlbumResource
            outputFormat: 'text'
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
      $get:
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/album/monitor': {
      $put: {
        input: { json: AlbumsMonitoredResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/album/lookup': {
      $get: {
        input: { query: { term?: string | undefined } }
        output: AlbumResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/albumstudio': {
      $post: { input: { json: AlbumStudioResource }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/api': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api/v1/artist/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: ArtistResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ArtistResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ArtistResource
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: string } } & { query: { moveFiles?: boolean | undefined } } & {
          json: ArtistResource
        }
        output: ArtistResource
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
    '/api/v1/artist': {
      $get: {
        input: { query: { mbId?: string | undefined } }
        output: ArtistResource[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ArtistResource }
        output: ArtistResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/artist/editor': {
      $put: { input: { json: ArtistEditorResource }; output: {}; outputFormat: string; status: 200 }
      $delete: {
        input: { json: ArtistEditorResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/artist/lookup': {
      $get: {
        input: { query: { term?: string | undefined } }
        output: ArtistResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/login': {
      $post: {
        input: { query: { returnUrl?: string | undefined } } & {
          form: {
            username?: string | undefined
            password?: string | undefined
            rememberMe?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/logout': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/api/v1/autotagging/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: AutoTaggingResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AutoTaggingResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AutoTaggingResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/autotagging': {
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
    '/api/v1/autotagging/schema': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/backup': {
      $get:
        | { input: {}; output: BackupResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: BackupResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: BackupResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/system/backup/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/backup/restore/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/backup/restore/upload': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/blocklist': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
          }
        }
        output: BlocklistResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/blocklist/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/blocklist/bulk': {
      $delete: {
        input: { json: BlocklistBulkResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/calendar': {
      $get: {
        input: {
          query: {
            start?: string | undefined
            end?: string | undefined
            unmonitored?: boolean | undefined
            includeArtist?: boolean | undefined
            tags?: string | undefined
          }
        }
        output: AlbumResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/calendar/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/feed/v1/calendar/lidarr.ics': {
      $get: {
        input: {
          query: {
            pastDays?: number | undefined
            futureDays?: number | undefined
            tags?: string | undefined
            unmonitored?: boolean | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/command/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: CommandResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommandResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CommandResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/command': {
      $post: {
        input: { json: CommandResource }
        output: CommandResource
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: CommandResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/customfilter/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: CustomFilterResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CustomFilterResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CustomFilterResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/customfilter': {
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
    '/api/v1/customformat/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: CustomFormatResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CustomFormatResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: CustomFormatResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/customformat': {
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
    '/api/v1/customformat/bulk': {
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
    '/api/v1/customformat/schema': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/wanted/cutoff': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeArtist?: boolean | undefined
            monitored?: boolean | undefined
          }
        }
        output: AlbumResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/wanted/cutoff/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/delayprofile': {
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
      $get:
        | { input: {}; output: DelayProfileResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: DelayProfileResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: DelayProfileResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/delayprofile/:id': {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: DelayProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: DelayProfileResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/delayprofile/reorder/:id': {
      $put: {
        input: { param: { id: number } } & { query: { afterId?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/diskspace': {
      $get: { input: {}; output: DiskSpaceResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/downloadclient/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: DownloadClientResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: DownloadClientResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: DownloadClientResource
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: DownloadClientResource
        }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/downloadclient': {
      $get: { input: {}; output: DownloadClientResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: DownloadClientResource }
        output: DownloadClientResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/downloadclient/bulk': {
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
    '/api/v1/downloadclient/schema': {
      $get: { input: {}; output: DownloadClientResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/downloadclient/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/downloadclient/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/downloadclient/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: DownloadClientResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/config/downloadclient/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: DownloadClientConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: DownloadClientConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: DownloadClientConfigResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/config/downloadclient': {
      $get: { input: {}; output: DownloadClientConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/filesystem': {
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
    '/api/v1/filesystem/type': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/filesystem/mediafiles': {
      $get: {
        input: { query: { path?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/health': {
      $get: { input: {}; output: HealthResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/history': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeArtist?: boolean | undefined
            includeAlbum?: boolean | undefined
            includeTrack?: boolean | undefined
            eventType?: number[] | undefined
            albumId?: number | undefined
            downloadId?: string | undefined
            artistIds?: number[] | undefined
            quality?: number[] | undefined
          }
        }
        output: HistoryResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/history/since': {
      $get: {
        input: {
          query: {
            date?: string | undefined
            eventType?: EntityHistoryEventType | undefined
            includeArtist?: boolean | undefined
            includeAlbum?: boolean | undefined
            includeTrack?: boolean | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/history/artist': {
      $get: {
        input: {
          query: {
            artistId?: number | undefined
            albumId?: number | undefined
            eventType?: EntityHistoryEventType | undefined
            includeArtist?: boolean | undefined
            includeAlbum?: boolean | undefined
            includeTrack?: boolean | undefined
          }
        }
        output: HistoryResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/history/failed/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/config/host/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: HostConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: HostConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: HostConfigResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/config/host': {
      $get:
        | { input: {}; output: HostConfigResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: HostConfigResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: HostConfigResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/importlist/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: ImportListResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ImportListResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ImportListResource
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: ImportListResource
        }
        output: ImportListResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/importlist': {
      $get: { input: {}; output: ImportListResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: ImportListResource }
        output: ImportListResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/importlist/bulk': {
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
    '/api/v1/importlist/schema': {
      $get: { input: {}; output: ImportListResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/importlist/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: ImportListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/importlist/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/importlist/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: ImportListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/importlistexclusion/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: ImportListExclusionResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ImportListExclusionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ImportListExclusionResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/importlistexclusion': {
      $get:
        | { input: {}; output: ImportListExclusionResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ImportListExclusionResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ImportListExclusionResource[]; outputFormat: 'text'; status: 200 }
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
    '/api/v1/indexer/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: IndexerResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: IndexerResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: IndexerResource
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: IndexerResource
        }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/indexer': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: IndexerResource }
        output: IndexerResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/bulk': {
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
    '/api/v1/indexer/schema': {
      $get: { input: {}; output: IndexerResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/indexer/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/indexer/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/indexer/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: IndexerResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/config/indexer/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: IndexerConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: IndexerConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: IndexerConfigResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/config/indexer': {
      $get: { input: {}; output: IndexerConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/indexerflag': {
      $get:
        | { input: {}; output: IndexerFlagResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: IndexerFlagResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: IndexerFlagResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/language/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: LanguageResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: LanguageResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: LanguageResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/language': {
      $get:
        | { input: {}; output: LanguageResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: LanguageResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LanguageResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/localization': {
      $get: { input: {}; output: LocalizationResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log': {
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
    '/api/v1/log/file': {
      $get: { input: {}; output: LogFileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log/file/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/manualimport': {
      $post: {
        input: { json: ManualImportUpdateResource[] }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: {
              query: {
                folder?: string | undefined
                downloadId?: string | undefined
                artistId?: number | undefined
                filterExistingFiles?: boolean | undefined
                replaceExistingFiles?: boolean | undefined
              }
            }
            output: ManualImportResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                downloadId?: string | undefined
                artistId?: number | undefined
                filterExistingFiles?: boolean | undefined
                replaceExistingFiles?: boolean | undefined
              }
            }
            output: ManualImportResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                folder?: string | undefined
                downloadId?: string | undefined
                artistId?: number | undefined
                filterExistingFiles?: boolean | undefined
                replaceExistingFiles?: boolean | undefined
              }
            }
            output: ManualImportResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/mediacover/artist/:artistId/:filename': {
      $get: {
        input: { param: { artistId: number; filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/mediacover/album/:albumId/:filename': {
      $get: {
        input: { param: { albumId: number; filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/config/mediamanagement/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: MediaManagementConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MediaManagementConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MediaManagementConfigResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/config/mediamanagement': {
      $get: { input: {}; output: MediaManagementConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/metadata/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: MetadataResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MetadataResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MetadataResource
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: MetadataResource
        }
        output: MetadataResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/metadata': {
      $get: { input: {}; output: MetadataResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: MetadataResource }
        output: MetadataResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/metadata/schema': {
      $get: { input: {}; output: MetadataResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/metadata/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: MetadataResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/metadata/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/metadata/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: MetadataResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/metadataprofile': {
      $post:
        | {
            input: { json: MetadataProfileResource }
            output: MetadataProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: MetadataProfileResource }
            output: MetadataProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MetadataProfileResource }
            output: MetadataProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | { input: {}; output: MetadataProfileResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MetadataProfileResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MetadataProfileResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/metadataprofile/:id': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
      $put:
        | {
            input: { param: { id: string } } & { json: MetadataProfileResource }
            output: MetadataProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MetadataProfileResource }
            output: MetadataProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MetadataProfileResource }
            output: MetadataProfileResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { id: number } }
            output: MetadataProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MetadataProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MetadataProfileResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/metadataprofile/schema': {
      $get:
        | { input: {}; output: MetadataProfileResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: MetadataProfileResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: MetadataProfileResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/config/metadataprovider/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: MetadataProviderConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MetadataProviderConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: MetadataProviderConfigResource
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: MetadataProviderConfigResource }
            output: MetadataProviderConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MetadataProviderConfigResource }
            output: MetadataProviderConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MetadataProviderConfigResource }
            output: MetadataProviderConfigResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/config/metadataprovider': {
      $get: { input: {}; output: MetadataProviderConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/wanted/missing': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeArtist?: boolean | undefined
            monitored?: boolean | undefined
          }
        }
        output: AlbumResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/wanted/missing/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: AlbumResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/config/naming/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: NamingConfigResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: NamingConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: NamingConfigResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/config/naming': {
      $get:
        | { input: {}; output: NamingConfigResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: NamingConfigResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NamingConfigResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/config/naming/examples': {
      $get: {
        input: {
          query: {
            renameTracks?: boolean | undefined
            replaceIllegalCharacters?: boolean | undefined
            colonReplacementFormat?: number | undefined
            standardTrackFormat?: string | undefined
            multiDiscTrackFormat?: string | undefined
            artistFolderFormat?: string | undefined
            includeArtistName?: boolean | undefined
            includeAlbumTitle?: boolean | undefined
            includeQuality?: boolean | undefined
            replaceSpaces?: boolean | undefined
            separator?: string | undefined
            numberStyle?: string | undefined
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
    '/api/v1/notification/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: NotificationResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: NotificationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: NotificationResource
            outputFormat: 'text'
            status: 200
          }
      $put: {
        input: { param: { id: number } } & { query: { forceSave?: boolean | undefined } } & {
          json: NotificationResource
        }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/notification': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { query: { forceSave?: boolean | undefined } } & { json: NotificationResource }
        output: NotificationResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/notification/schema': {
      $get: { input: {}; output: NotificationResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/notification/test': {
      $post: {
        input: { query: { forceTest?: boolean | undefined } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/notification/testall': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/notification/action/:name': {
      $post: {
        input: { param: { name: string } } & { json: NotificationResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/parse': {
      $get: {
        input: { query: { title?: string | undefined } }
        output: ParseResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ping': {
      $get: { input: {}; output: PingResource; outputFormat: 'json'; status: 200 }
      $head: { input: {}; output: PingResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/qualitydefinition/:id': {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: QualityDefinitionResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: QualityDefinitionResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/qualitydefinition': {
      $get:
        | { input: {}; output: QualityDefinitionResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QualityDefinitionResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QualityDefinitionResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/qualitydefinition/update': {
      $put: {
        input: { json: QualityDefinitionResource[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/qualityprofile': {
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
      $get:
        | { input: {}; output: QualityProfileResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QualityProfileResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QualityProfileResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/qualityprofile/:id': {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: QualityProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: QualityProfileResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/qualityprofile/schema': {
      $get:
        | { input: {}; output: QualityProfileResource; outputFormat: 'text'; status: 200 }
        | { input: {}; output: QualityProfileResource; outputFormat: 'json'; status: 200 }
        | { input: {}; output: QualityProfileResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/queue/:id': {
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
    '/api/v1/queue/bulk': {
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
    '/api/v1/queue': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            sortKey?: string | undefined
            sortDirection?: SortDirection | undefined
            includeUnknownArtistItems?: boolean | undefined
            includeArtist?: boolean | undefined
            includeAlbum?: boolean | undefined
            artistIds?: number[] | undefined
            protocol?: DownloadProtocol | undefined
            quality?: number[] | undefined
          }
        }
        output: QueueResourcePagingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/queue/grab/:id': {
      $post: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/queue/grab/bulk': {
      $post: { input: { json: QueueBulkResource }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/queue/details': {
      $get: {
        input: {
          query: {
            artistId?: number | undefined
            albumIds?: number[] | undefined
            includeArtist?: boolean | undefined
            includeAlbum?: boolean | undefined
          }
        }
        output: QueueResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/queue/status': {
      $get: { input: {}; output: QueueStatusResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/release': {
      $post:
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { query: { albumId?: number | undefined; artistId?: number | undefined } }
            output: ReleaseResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { albumId?: number | undefined; artistId?: number | undefined } }
            output: ReleaseResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { albumId?: number | undefined; artistId?: number | undefined } }
            output: ReleaseResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/releaseprofile/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: ReleaseProfileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ReleaseProfileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ReleaseProfileResource
            outputFormat: 'text'
            status: 200
          }
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
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/releaseprofile': {
      $get:
        | { input: {}; output: ReleaseProfileResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ReleaseProfileResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ReleaseProfileResource[]; outputFormat: 'text'; status: 200 }
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
    }
  } & {
    '/api/v1/release/push': {
      $post:
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ReleaseResource }
            output: ReleaseResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/remotepathmapping/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: RemotePathMappingResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RemotePathMappingResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RemotePathMappingResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/remotepathmapping': {
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
    '/api/v1/rename': {
      $get:
        | {
            input: { query: { artistId?: number | undefined; albumId?: number | undefined } }
            output: RenameTrackResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { artistId?: number | undefined; albumId?: number | undefined } }
            output: RenameTrackResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { artistId?: number | undefined; albumId?: number | undefined } }
            output: RenameTrackResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/retag': {
      $get:
        | {
            input: { query: { artistId?: number | undefined; albumId?: number | undefined } }
            output: RetagTrackResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { artistId?: number | undefined; albumId?: number | undefined } }
            output: RetagTrackResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { artistId?: number | undefined; albumId?: number | undefined } }
            output: RetagTrackResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/rootfolder/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: RootFolderResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RootFolderResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: RootFolderResource
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RootFolderResource }
            output: RootFolderResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/rootfolder': {
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
    '/api/v1/search': {
      $get: {
        input: { query: { term?: string | undefined } }
        output: SearchResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/content/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/:path': {
      $get: { input: { param: { path: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/status': {
      $get: { input: {}; output: SystemResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/system/routes': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/system/routes/duplicate': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/shutdown': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/system/restart': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/tag/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TagResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TagResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TagResource
            outputFormat: 'text'
            status: 200
          }
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
    }
  } & {
    '/api/v1/tag': {
      $get: { input: {}; output: TagResource[]; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'text'; status: 200 }
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'json'; status: 200 }
        | { input: { json: TagResource }; output: TagResource; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/tag/detail/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TagDetailsResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TagDetailsResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TagDetailsResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/tag/detail': {
      $get: { input: {}; output: TagDetailsResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/system/task': {
      $get:
        | { input: {}; output: TaskResource[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: TaskResource[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: TaskResource[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v1/system/task/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TaskResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TaskResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TaskResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/track': {
      $get:
        | {
            input: {
              query: {
                artistId?: number | undefined
                albumId?: number | undefined
                albumReleaseId?: number | undefined
                trackIds?: number[] | undefined
              }
            }
            output: TrackResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                artistId?: number | undefined
                albumId?: number | undefined
                albumReleaseId?: number | undefined
                trackIds?: number[] | undefined
              }
            }
            output: TrackResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                artistId?: number | undefined
                albumId?: number | undefined
                albumReleaseId?: number | undefined
                trackIds?: number[] | undefined
              }
            }
            output: TrackResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/track/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TrackResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TrackResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TrackResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/trackfile/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: TrackFileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TrackFileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: TrackFileResource
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { id: string } } & { json: TrackFileResource }
            output: TrackFileResource
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TrackFileResource }
            output: TrackFileResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TrackFileResource }
            output: TrackFileResource
            outputFormat: 'text'
            status: 200
          }
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/trackfile': {
      $get:
        | {
            input: {
              query: {
                artistId?: number | undefined
                trackFileIds?: number[] | undefined
                albumId?: number[] | undefined
                unmapped?: boolean | undefined
              }
            }
            output: TrackFileResource[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                artistId?: number | undefined
                trackFileIds?: number[] | undefined
                albumId?: number[] | undefined
                unmapped?: boolean | undefined
              }
            }
            output: TrackFileResource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                artistId?: number | undefined
                trackFileIds?: number[] | undefined
                albumId?: number[] | undefined
                unmapped?: boolean | undefined
              }
            }
            output: TrackFileResource[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/trackfile/editor': {
      $put: {
        input: { json: TrackFileListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/trackfile/bulk': {
      $delete: {
        input: { json: TrackFileListResource }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/config/ui/:id': {
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
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: UiConfigResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: UiConfigResource
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/v1/config/ui': {
      $get: { input: {}; output: UiConfigResource; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/update': {
      $get: { input: {}; output: UpdateResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log/file/update': {
      $get: { input: {}; output: LogFileResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/log/file/update/:filename': {
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
