type ReactionLevel = 'album' | 'asset'
type ReactionType = 'comment' | 'like'
type UserAvatarColor =
  | 'primary'
  | 'pink'
  | 'red'
  | 'yellow'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'gray'
  | 'amber'
type UserResponseDto = {
  avatarColor: UserAvatarColor
  email: string
  id: string
  name: string
  profileChangedAt: string
  profileImagePath: string
}
type ActivityResponseDto = {
  assetId: string | null
  comment?: (string | null) | undefined
  createdAt: string
  id: string
  type: ReactionType
  user: UserResponseDto
}
type ActivityCreateDto = {
  albumId: string
  assetId?: string | undefined
  comment?: string | undefined
  type: ReactionType
}
type ActivityStatisticsResponseDto = { comments: number; likes: number }
type AdminConfigDatabaseBackupDto = {
  cronExpression: string
  enabled: boolean
  keepLastAmount: number
}
type AdminConfigBackupsDto = { beta?: boolean | undefined; database: AdminConfigDatabaseBackupDto }
type TranscodeHWAccel = 'nvenc' | 'qsv' | 'vaapi' | 'rkmpp' | 'disabled'
type AudioCodec = 'mp3' | 'aac' | 'opus' | 'pcm_s16le'
type VideoContainer = 'mov' | 'mp4' | 'ogg' | 'webm'
type VideoCodec = 'h264' | 'hevc' | 'vp9' | 'av1'
type CQMode = 'auto' | 'cqp' | 'icq'
type HlsVideoResolution = 480 | 720 | 1080 | 1440 | 2160
type AdminConfigFFmpegRealtimeDto = {
  enabled: boolean
  resolutions: HlsVideoResolution[]
  videoCodecs: VideoCodec[]
}
type ToneMapping = 'hable' | 'mobius' | 'reinhard' | 'disabled'
type TranscodePolicy = 'all' | 'optimal' | 'bitrate' | 'required' | 'disabled'
type AdminConfigFFmpegDto = {
  accel: TranscodeHWAccel
  accelDecode: boolean
  acceptedAudioCodecs: AudioCodec[]
  acceptedContainers: VideoContainer[]
  acceptedVideoCodecs: VideoCodec[]
  bframes: number
  cqMode: CQMode
  crf: number
  gopSize: number
  maxBitrate: string
  preferredHwDevice: string
  preset: string
  realtime: AdminConfigFFmpegRealtimeDto
  refs: number
  targetAudioCodec: AudioCodec
  targetResolution: string
  targetVideoCodec: VideoCodec
  temporalAQ: boolean
  threads: number
  tonemap: ToneMapping
  transcode: TranscodePolicy
  twoPass: boolean
}
type Colorspace = 'srgb' | 'p3'
type ImageEffort = 'low' | 'medium' | 'high' | 'max'
type ImageFormat = 'jpeg' | 'jxl' | 'webp'
type AdminConfigGeneratedFullsizeImageDto = {
  effort: ImageEffort
  enabled: boolean
  format: ImageFormat
  progressive?: boolean | undefined
  quality: number
}
type AdminConfigGeneratedImageDto = {
  effort: ImageEffort
  format: ImageFormat
  progressive?: boolean | undefined
  quality: number
  size: number
}
type AdminConfigImageDto = {
  colorspace: Colorspace
  extractEmbedded: boolean
  fullsize: AdminConfigGeneratedFullsizeImageDto
  preview: AdminConfigGeneratedImageDto
  thumbnail: AdminConfigGeneratedImageDto
}
type AdminConfigIntegrityChecksumJobDto = {
  cronExpression: string
  enabled: boolean
  percentageLimit: number
  timeLimit: number
}
type AdminConfigIntegrityJobDto = { cronExpression: string; enabled: boolean }
type AdminConfigIntegrityChecksDto = {
  checksumFiles: AdminConfigIntegrityChecksumJobDto
  missingFiles: AdminConfigIntegrityJobDto
  untrackedFiles: AdminConfigIntegrityJobDto
}
type AdminConfigJobSettingsDto = { concurrency: number }
type AdminConfigJobDto = {
  backgroundTask: AdminConfigJobSettingsDto
  editor: AdminConfigJobSettingsDto
  faceDetection: AdminConfigJobSettingsDto
  integrityCheck: AdminConfigJobSettingsDto
  library: AdminConfigJobSettingsDto
  metadataExtraction: AdminConfigJobSettingsDto
  migration: AdminConfigJobSettingsDto
  notifications: AdminConfigJobSettingsDto
  ocr: AdminConfigJobSettingsDto
  search: AdminConfigJobSettingsDto
  sidecar: AdminConfigJobSettingsDto
  smartSearch: AdminConfigJobSettingsDto
  thumbnailGeneration: AdminConfigJobSettingsDto
  videoConversion: AdminConfigJobSettingsDto
  workflow: AdminConfigJobSettingsDto
}
type AdminConfigLibraryScanDto = { cronExpression: string; enabled: boolean }
type AdminConfigLibraryWatchDto = { enabled: boolean }
type AdminConfigLibraryDto = { scan: AdminConfigLibraryScanDto; watch: AdminConfigLibraryWatchDto }
type LogLevel = 'verbose' | 'debug' | 'log' | 'warn' | 'error' | 'fatal'
type AdminConfigLoggingDto = { enabled: boolean; level: LogLevel }
type AdminConfigMachineLearningAvailabilityChecksDto = {
  enabled: boolean
  interval: number
  timeout: number
}
type AdminConfigClipDto = { enabled: boolean; modelName: string }
type AdminConfigDuplicateDetectionDto = { enabled: boolean; maxDistance: number }
type AdminConfigFacialRecognitionDto = {
  enabled: boolean
  maxDistance: number
  minFaces: number
  minScore: number
  modelName: string
}
type AdminConfigOcrDto = {
  enabled: boolean
  maxResolution: number
  minDetectionScore: number
  minRecognitionScore: number
  modelName: string
}
type AdminConfigMachineLearningDto = {
  availabilityChecks: AdminConfigMachineLearningAvailabilityChecksDto
  clip: AdminConfigClipDto
  duplicateDetection: AdminConfigDuplicateDetectionDto
  enabled: boolean
  facialRecognition: AdminConfigFacialRecognitionDto
  ocr: AdminConfigOcrDto
  urls: string[]
}
type AdminConfigMapDto = { darkStyle: string; enabled: boolean; lightStyle: string }
type AdminConfigFacesDto = { import: boolean }
type AdminConfigMetadataDto = { faces: AdminConfigFacesDto }
type ReleaseChannel = 'stable' | 'releaseCandidate'
type AdminConfigNewVersionCheckDto = { channel: ReleaseChannel; enabled: boolean }
type AdminConfigNightlyTasksDto = {
  clusterNewFaces: boolean
  databaseCleanup: boolean
  generateMemories: boolean
  missingThumbnails: boolean
  startTime: string
  syncQuotaUsage: boolean
}
type AdminConfigSmtpTransportDto = {
  host: string
  ignoreCert: boolean
  password: string
  port: number
  secure: boolean
  username: string
}
type AdminConfigSmtpDto = {
  enabled: boolean
  from: string
  replyTo: string
  transport: AdminConfigSmtpTransportDto
}
type AdminConfigNotificationsDto = { smtp: AdminConfigSmtpDto }
type OAuthTokenEndpointAuthMethod = 'client_secret_post' | 'client_secret_basic'
type AdminConfigOAuthDto = {
  accountManagementUrl?: string | undefined
  allowInsecureRequests: boolean
  autoLaunch: boolean
  autoRegister: boolean
  buttonText: string
  clientId: string
  clientSecret: string
  defaultStorageQuota: number | null
  enabled: boolean
  endSessionEndpoint: string
  issuerUrl: string
  mobileOverrideEnabled: boolean
  mobileRedirectUri: string
  profileSigningAlgorithm: string
  prompt: string
  roleClaim: string
  scope: string
  signingAlgorithm: string
  storageLabelClaim: string
  storageQuotaClaim: string
  timeout: number
  tokenEndpointAuthMethod: OAuthTokenEndpointAuthMethod
}
type AdminConfigPasskeyDto = {
  additionalDomains: string[]
  domain: string | null
  enabled: boolean
}
type AdminConfigPasswordLoginDto = { enabled: boolean }
type AdminConfigReverseGeocodingDto = { enabled: boolean }
type AdminConfigServerDto = {
  externalDomain: string
  loginPageMessage: string
  publicUsers: boolean
}
type AdminConfigStorageTemplateDto = {
  enabled: boolean
  hashVerificationEnabled: boolean
  template: string
}
type AdminConfigTemplateEmailsDto = {
  albumInviteTemplate: string
  albumUpdateTemplate: string
  welcomeTemplate: string
}
type AdminConfigTemplatesDto = { email: AdminConfigTemplateEmailsDto }
type AdminConfigThemeDto = { customCss: string }
type AdminConfigTrashDto = { days: number; enabled: boolean }
type AdminConfigUserDto = { deleteDelay: number }
type AdminConfigDto = {
  backup: AdminConfigBackupsDto
  ffmpeg: AdminConfigFFmpegDto
  image: AdminConfigImageDto
  integrityChecks: AdminConfigIntegrityChecksDto
  job: AdminConfigJobDto
  library: AdminConfigLibraryDto
  logging: AdminConfigLoggingDto
  machineLearning: AdminConfigMachineLearningDto
  map: AdminConfigMapDto
  metadata: AdminConfigMetadataDto
  newVersionCheck: AdminConfigNewVersionCheckDto
  nightlyTasks: AdminConfigNightlyTasksDto
  notifications: AdminConfigNotificationsDto
  oauth: AdminConfigOAuthDto
  passkey: AdminConfigPasskeyDto
  passwordLogin: AdminConfigPasswordLoginDto
  reverseGeocoding: AdminConfigReverseGeocodingDto
  server: AdminConfigServerDto
  storageTemplate: AdminConfigStorageTemplateDto
  templates: AdminConfigTemplatesDto
  theme: AdminConfigThemeDto
  trash: AdminConfigTrashDto
  user: AdminConfigUserDto
}
type StorageTemplatePresetDto = { preview: string; template: string }
type StorageTemplateOptionsResponseDto = {
  dayOptions: string[]
  hourOptions: string[]
  minuteOptions: string[]
  monthOptions: string[]
  presets: StorageTemplatePresetDto[]
  secondOptions: string[]
  weekOptions: string[]
  yearOptions: string[]
}
type StorageTemplatePreviewDto = { template: string }
type StorageTemplatePreviewResponseDto = { preview: string }
type DatabaseBackupDeleteDto = { backups: string[] }
type DatabaseBackupDto = { filename: string; filesize: number; timezone: string }
type DatabaseBackupListResponseDto = { backups: DatabaseBackupDto[] }
type DatabaseBackupUploadDto = { file?: File | undefined }
type IntegrityReport = 'untracked_file' | 'missing_file' | 'checksum_mismatch'
type IntegrityReportResponseDto = {
  items: { id: string; path: string; type: IntegrityReport }[]
  nextCursor?: string | undefined
}
type IntegrityReportSummaryResponseDto = {
  checksum_mismatch: number
  missing_file: number
  untracked_file: number
}
type MaintenanceAction =
  | 'start'
  | 'end'
  | 'select_database_restore'
  | 'restore_database'
  | 'rollback'
type SetMaintenanceModeDto = {
  action: MaintenanceAction
  restoreBackupFilename?: string | undefined
  rollbackRepositoryId?: string | undefined
  rollbackSnapshotId?: string | undefined
}
type StorageFolder = 'encoded-video' | 'library' | 'upload' | 'profile' | 'thumbs' | 'backups'
type MaintenanceDetectInstallStorageFolderDto = {
  files: number
  folder: StorageFolder
  readable: boolean
  writable: boolean
}
type MaintenanceDetectInstallResponseDto = { storage: MaintenanceDetectInstallStorageFolderDto[] }
type MaintenanceLoginDto = { token?: string | undefined }
type MaintenanceAuthDto = { username: string }
type MaintenanceStatusResponseDto = {
  action: MaintenanceAction
  active: boolean
  error?: string | undefined
  futoBackupsJobId?: string | undefined
  progress?: number | undefined
  task?: string | undefined
}
type NotificationLevel = 'success' | 'error' | 'warning' | 'info'
type NotificationType =
  | 'JobFailed'
  | 'BackupFailed'
  | 'SystemMessage'
  | 'AlbumInvite'
  | 'AlbumUpdate'
  | 'ClusterGroupRequest'
  | 'Custom'
type NotificationCreateDto = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: (string | null) | undefined
  level?: NotificationLevel | undefined
  readAt?: (string | null) | undefined
  title: string
  type?: NotificationType | undefined
  userId: string
}
type NotificationDto = {
  createdAt: string
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: string | undefined
  id: string
  level: NotificationLevel
  readAt?: string | undefined
  title: string
  type: NotificationType
}
type TemplateDto = { template: string }
type TemplateResponseDto = { html: string; name: string }
type EmailTemplate = 'test' | 'welcome' | 'reset-password' | 'album-invite' | 'album-update'
type TestEmailResponseDto = { messageId: string }
type UserLicense = { activatedAt: string; activationKey: string; licenseKey: string }
type UserStatus = 'active' | 'removing' | 'deleted'
type UserAdminResponseDto = {
  avatarColor: UserAvatarColor
  clusterGroupId: string
  createdAt: string
  deletedAt: string | null
  email: string
  id: string
  isAdmin: boolean
  license: UserLicense | ({ [x: string]: unknown } | null)
  name: string
  oauthId: string
  profileChangedAt: string
  profileImagePath: string
  quotaSizeInBytes: number | null
  quotaUsageInBytes: number | null
  shouldChangePassword: boolean
  status: UserStatus
  storageLabel: string | null
  updatedAt: string
}
type UserAdminCreateDto = {
  avatarColor?: UserAvatarColor | ({ [x: string]: unknown } | null) | undefined
  email: string
  isAdmin?: boolean | undefined
  name: string
  notify?: boolean | undefined
  password: string
  pinCode?: (string | null) | undefined
  quotaSizeInBytes?: (number | null) | undefined
  shouldChangePassword?: boolean | undefined
  storageLabel?: (string | null) | undefined
}
type UserAdminDeleteDto = { force?: boolean | undefined }
type UserAdminUpdateDto = {
  avatarColor?: UserAvatarColor | ({ [x: string]: unknown } | null) | undefined
  email?: string | undefined
  isAdmin?: boolean | undefined
  name?: string | undefined
  password?: string | undefined
  pinCode?: (string | null) | undefined
  quotaSizeInBytes?: (number | null) | undefined
  shouldChangePassword?: boolean | undefined
  storageLabel?: (string | null) | undefined
}
type CalendarHeatmapType = 'Upload' | 'Taken'
type CalendarHeatmapResponseDto = {
  from: string
  series: { count: number; date: string }[]
  to: string
  totalCount: number
}
type AssetOrder = 'asc' | 'desc'
type AlbumsResponse = { defaultAssetOrder: AssetOrder }
type CastResponse = { gCastEnabled: boolean }
type DownloadResponse = { archiveSize: number; includeEmbeddedVideos: boolean }
type EmailNotificationsResponse = { albumInvite: boolean; albumUpdate: boolean; enabled: boolean }
type FoldersResponse = { enabled: boolean; sidebarWeb: boolean }
type MemoriesResponse = { duration: number; enabled: boolean; sidebarWeb: boolean }
type PersonUpdateStrategy = 'self' | 'everyone'
type PeopleResponse = {
  enabled: boolean
  minimumFaces?: number | undefined
  sidebarWeb: boolean
  updateStrategy: PersonUpdateStrategy
}
type PurchaseResponse = { hideBuyButtonUntil: string; showSupportBadge: boolean }
type RatingsResponse = { enabled: boolean }
type RecentlyAddedResponse = { sidebarWeb: boolean }
type SharedLinksResponse = { enabled: boolean; sidebarWeb: boolean }
type TagsResponse = { enabled: boolean; sidebarWeb: boolean }
type UserPreferencesResponseDto = {
  albums: AlbumsResponse
  cast: CastResponse
  download: DownloadResponse
  emailNotifications: EmailNotificationsResponse
  folders: FoldersResponse
  memories: MemoriesResponse
  people: PeopleResponse
  purchase: PurchaseResponse
  ratings: RatingsResponse
  recentlyAdded: RecentlyAddedResponse
  sharedLinks: SharedLinksResponse
  tags: TagsResponse
}
type AlbumsUpdate = { defaultAssetOrder?: AssetOrder | undefined }
type AvatarUpdate = { color?: UserAvatarColor | undefined }
type CastUpdate = { gCastEnabled?: boolean | undefined }
type DownloadUpdate = {
  archiveSize?: number | undefined
  includeEmbeddedVideos?: boolean | undefined
}
type EmailNotificationsUpdate = {
  albumInvite?: boolean | undefined
  albumUpdate?: boolean | undefined
  enabled?: boolean | undefined
}
type FoldersUpdate = { enabled?: boolean | undefined; sidebarWeb?: boolean | undefined }
type MemoriesUpdate = {
  duration?: number | undefined
  enabled?: boolean | undefined
  sidebarWeb?: boolean | undefined
}
type PeopleUpdate = {
  enabled?: boolean | undefined
  minimumFaces?: number | undefined
  sidebarWeb?: boolean | undefined
  updateStrategy?: PersonUpdateStrategy | undefined
}
type PurchaseUpdate = {
  hideBuyButtonUntil?: string | undefined
  showSupportBadge?: boolean | undefined
}
type RatingsUpdate = { enabled?: boolean | undefined }
type RecentlyAddedUpdate = { sidebarWeb?: boolean | undefined }
type SharedLinksUpdate = { enabled?: boolean | undefined; sidebarWeb?: boolean | undefined }
type TagsUpdate = { enabled?: boolean | undefined; sidebarWeb?: boolean | undefined }
type UserPreferencesUpdateDto = {
  albums?: AlbumsUpdate | undefined
  avatar?: AvatarUpdate | undefined
  cast?: CastUpdate | undefined
  download?: DownloadUpdate | undefined
  emailNotifications?: EmailNotificationsUpdate | undefined
  folders?: FoldersUpdate | undefined
  memories?: MemoriesUpdate | undefined
  people?: PeopleUpdate | undefined
  purchase?: PurchaseUpdate | undefined
  ratings?: RatingsUpdate | undefined
  recentlyAdded?: RecentlyAddedUpdate | undefined
  sharedLinks?: SharedLinksUpdate | undefined
  tags?: TagsUpdate | undefined
}
type SessionResponseDto = {
  appVersion: string | null
  createdAt: string
  current: boolean
  deviceOS: string
  deviceType: string
  expiresAt?: string | undefined
  id: string
  isPendingSyncReset: boolean
  updatedAt: string
}
type AssetVisibility = 'archive' | 'timeline' | 'hidden' | 'locked'
type AssetStatsResponseDto = { images: number; total: number; videos: number }
type AlbumUserRole = 'editor' | 'owner' | 'viewer'
type AlbumUserResponseDto = { role: AlbumUserRole; user: UserResponseDto }
type ContributorCountResponseDto = { assetCount: number; userId: string }
type AlbumResponseDto = {
  albumName: string
  albumThumbnailAssetId: string | null
  albumUsers: AlbumUserResponseDto[]
  assetCount: number
  contributorCounts?: ContributorCountResponseDto[] | undefined
  createdAt: string
  description: string
  endDate?: string | undefined
  hasSharedLink: boolean
  id: string
  isActivityEnabled: boolean
  lastModifiedAssetTimestamp?: string | undefined
  order?: AssetOrder | undefined
  shared: boolean
  startDate?: string | undefined
  updatedAt: string
}
type AlbumUserCreateDto = { role: AlbumUserRole; userId: string }
type CreateAlbumDto = {
  albumName: string
  albumUsers?: AlbumUserCreateDto[] | undefined
  assetIds?: string[] | undefined
  description?: (string | null) | undefined
}
type AlbumsAddAssetsDto = { albumIds: string[]; assetIds: string[] }
type BulkIdErrorReason = 'duplicate' | 'no_permission' | 'not_found' | 'unknown' | 'validation'
type AlbumsAddAssetsResponseDto = { error?: BulkIdErrorReason | undefined; success: boolean }
type AlbumStatisticsResponseDto = { notShared: number; owned: number; shared: number }
type UpdateAlbumDto = {
  albumName?: string | undefined
  albumThumbnailAssetId?: string | undefined
  description?: (string | null) | undefined
  isActivityEnabled?: boolean | undefined
  order?: AssetOrder | undefined
}
type BulkIdsDto = { ids: string[] }
type BulkIdResponseDto = {
  error?: BulkIdErrorReason | undefined
  errorMessage?: string | undefined
  id: string
  success: boolean
}
type MapMarkerResponseDto = {
  city: string | null
  country: string | null
  id: string
  lat: number
  lon: number
  state: string | null
}
type UpdateAlbumUserDto = { role: AlbumUserRole }
type AlbumUserAddDto = { role?: AlbumUserRole | undefined; userId: string }
type AddUsersDto = { albumUsers: AlbumUserAddDto[] }
type Permission =
  | 'all'
  | 'activity.create'
  | 'activity.read'
  | 'activity.update'
  | 'activity.delete'
  | 'activity.statistics'
  | 'apiKey.create'
  | 'apiKey.read'
  | 'apiKey.update'
  | 'apiKey.delete'
  | 'apiKey.rotate'
  | 'asset.read'
  | 'asset.update'
  | 'asset.delete'
  | 'asset.statistics'
  | 'asset.share'
  | 'asset.view'
  | 'asset.download'
  | 'asset.upload'
  | 'asset.copy'
  | 'asset.derive'
  | 'assetFile.read'
  | 'assetFile.delete'
  | 'assetFile.download'
  | 'asset.edit.get'
  | 'asset.edit.create'
  | 'asset.edit.delete'
  | 'album.create'
  | 'album.read'
  | 'album.update'
  | 'album.delete'
  | 'album.statistics'
  | 'album.share'
  | 'album.download'
  | 'albumAsset.create'
  | 'albumAsset.delete'
  | 'albumUser.create'
  | 'albumUser.update'
  | 'albumUser.delete'
  | 'auth.changePassword'
  | 'authDevice.delete'
  | 'archive.read'
  | 'backup.list'
  | 'backup.download'
  | 'backup.upload'
  | 'backup.delete'
  | 'clusterGroup.read'
  | 'clusterGroup.leave'
  | 'clusterGroup.admin'
  | 'clusterGroupRequest.create'
  | 'clusterGroupRequest.read'
  | 'clusterGroupRequest.delete'
  | 'adminConfig.read'
  | 'adminConfig.update'
  | 'userConfig.read'
  | 'duplicate.read'
  | 'duplicate.delete'
  | 'face.create'
  | 'face.read'
  | 'face.update'
  | 'face.delete'
  | 'folder.read'
  | 'job.create'
  | 'job.read'
  | 'library.create'
  | 'library.read'
  | 'library.update'
  | 'library.delete'
  | 'library.statistics'
  | 'timeline.read'
  | 'timeline.download'
  | 'maintenance'
  | 'map.read'
  | 'map.search'
  | 'memory.create'
  | 'memory.read'
  | 'memory.update'
  | 'memory.delete'
  | 'memory.statistics'
  | 'memoryAsset.create'
  | 'memoryAsset.delete'
  | 'notification.create'
  | 'notification.read'
  | 'notification.update'
  | 'notification.delete'
  | 'partner.create'
  | 'partner.read'
  | 'partner.update'
  | 'partner.delete'
  | 'passkey.read'
  | 'passkey.update'
  | 'passkey.delete'
  | 'person.create'
  | 'person.read'
  | 'person.update'
  | 'person.delete'
  | 'person.statistics'
  | 'person.merge'
  | 'person.reassign'
  | 'pinCode.create'
  | 'pinCode.update'
  | 'pinCode.delete'
  | 'plugin.create'
  | 'plugin.read'
  | 'plugin.update'
  | 'plugin.delete'
  | 'server.about'
  | 'server.apkLinks'
  | 'server.storage'
  | 'server.statistics'
  | 'server.versionCheck'
  | 'serverLicense.read'
  | 'serverLicense.update'
  | 'serverLicense.delete'
  | 'session.create'
  | 'session.read'
  | 'session.update'
  | 'session.delete'
  | 'session.lock'
  | 'sharedLink.create'
  | 'sharedLink.read'
  | 'sharedLink.update'
  | 'sharedLink.delete'
  | 'stack.create'
  | 'stack.read'
  | 'stack.update'
  | 'stack.delete'
  | 'sync.stream'
  | 'syncCheckpoint.read'
  | 'syncCheckpoint.update'
  | 'syncCheckpoint.delete'
  | 'systemConfig.read'
  | 'systemConfig.update'
  | 'systemMetadata.read'
  | 'systemMetadata.update'
  | 'tag.create'
  | 'tag.read'
  | 'tag.update'
  | 'tag.delete'
  | 'tag.asset'
  | 'user.read'
  | 'user.update'
  | 'userLicense.create'
  | 'userLicense.read'
  | 'userLicense.update'
  | 'userLicense.delete'
  | 'userOnboarding.read'
  | 'userOnboarding.update'
  | 'userOnboarding.delete'
  | 'userPreference.read'
  | 'userPreference.update'
  | 'userProfileImage.create'
  | 'userProfileImage.read'
  | 'userProfileImage.update'
  | 'userProfileImage.delete'
  | 'queue.read'
  | 'queue.update'
  | 'queueJob.create'
  | 'queueJob.read'
  | 'queueJob.update'
  | 'queueJob.delete'
  | 'workflow.create'
  | 'workflow.read'
  | 'workflow.update'
  | 'workflow.delete'
  | 'workflow.logs'
  | 'adminUser.create'
  | 'adminUser.read'
  | 'adminUser.update'
  | 'adminUser.delete'
  | 'adminSession.read'
  | 'adminAuth.unlinkAll'
type ApiKeyResponseDto = {
  createdAt: string
  id: string
  name: string
  permissions: Permission[]
  updatedAt: string
}
type ApiKeyCreateDto = { name?: string | undefined; permissions: Permission[] }
type ApiKeyCreateResponseDto = {
  apiKey: ApiKeyResponseDto
  createdAt: string
  id: string
  name: string
  permissions: Permission[]
  secret: string
  updatedAt: string
}
type ApiKeyUpdateDto = { name?: string | undefined; permissions?: Permission[] | undefined }
type AssetFileType = 'fullsize' | 'preview' | 'thumbnail' | 'sidecar' | 'encoded_video'
type AssetFileResponseDto = {
  createdAt: string
  id: string
  isEdited: boolean
  isProgressive: boolean
  isTransparent: boolean
  path: string
  type: AssetFileType
  updatedAt: string
}
type AssetBulkDeleteDto = { force?: boolean | undefined; ids: string[] }
type AssetMetadataUpsertItemDto = { key: string; value: { [x: string]: { [x: string]: unknown } } }
type AssetMediaCreateDto = {
  assetData: File
  duration?: number | undefined
  fileCreatedAt: string
  fileModifiedAt: string
  filename?: string | undefined
  isFavorite?: boolean | undefined
  livePhotoVideoId?: string | undefined
  metadata?: AssetMetadataUpsertItemDto[] | undefined
  sidecarData?: File | undefined
  visibility?: AssetVisibility | undefined
}
type AssetMediaStatus = 'created' | 'duplicate'
type AssetMediaResponseDto = { id: string; status: AssetMediaStatus }
type AssetBulkUpdateDto = {
  dateTimeOriginal?: string | undefined
  dateTimeRelative?: number | undefined
  description?: string | undefined
  duplicateId?: (string | null) | undefined
  ids: string[]
  isFavorite?: boolean | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  rating?: (number | null) | undefined
  timeZone?: string | undefined
  visibility?: AssetVisibility | undefined
}
type AssetBulkUploadCheckItem = { checksum: string; id: string }
type AssetBulkUploadCheckDto = { assets: AssetBulkUploadCheckItem[] }
type AssetUploadAction = 'accept' | 'reject'
type AssetRejectReason = 'duplicate' | 'unsupported-format'
type AssetBulkUploadCheckResult = {
  action: AssetUploadAction
  assetId?: string | undefined
  id: string
  isTrashed?: boolean | undefined
  reason?: AssetRejectReason | undefined
}
type AssetBulkUploadCheckResponseDto = { results: AssetBulkUploadCheckResult[] }
type AssetCopyDto = {
  albums?: boolean | undefined
  favorite?: boolean | undefined
  sharedLinks?: boolean | undefined
  sidecar?: boolean | undefined
  sourceId: string
  stack?: boolean | undefined
  targetId: string
}
type AssetJobName =
  | 'refresh-faces'
  | 'refresh-metadata'
  | 'regenerate-thumbnail'
  | 'transcode-video'
type AssetJobsDto = { assetIds: string[]; name: AssetJobName }
type AssetMetadataBulkDeleteItemDto = { assetId: string; key: string }
type AssetMetadataBulkDeleteDto = { items: AssetMetadataBulkDeleteItemDto[] }
type AssetMetadataBulkUpsertItemDto = {
  assetId: string
  key: string
  value: { [x: string]: { [x: string]: unknown } }
}
type AssetMetadataBulkUpsertDto = { items: AssetMetadataBulkUpsertItemDto[] }
type AssetMetadataBulkResponseDto = {
  assetId: string
  key: string
  updatedAt: string
  value: { [x: string]: { [x: string]: unknown } }
}
type ExifResponseDto = {
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  dateTimeOriginal?: (string | null) | undefined
  description?: (string | null) | undefined
  exifImageHeight?: (number | null) | undefined
  exifImageWidth?: (number | null) | undefined
  exposureTime?: (string | null) | undefined
  fNumber?: (number | null) | undefined
  fileSizeInByte?: (number | null) | undefined
  focalLength?: (number | null) | undefined
  iso?: (number | null) | undefined
  latitude?: (number | null) | undefined
  lensModel?: (string | null) | undefined
  longitude?: (number | null) | undefined
  make?: (string | null) | undefined
  model?: (string | null) | undefined
  modifyDate?: (string | null) | undefined
  orientation?: (string | null) | undefined
  projectionType?: (string | null) | undefined
  rating?: (number | null) | undefined
  state?: (string | null) | undefined
  timeZone?: (string | null) | undefined
}
type PersonUserRole = 'read' | 'write' | 'admin'
type PersonOtherResponseDto = {
  birthDate: string | null
  name: string
  role: PersonUserRole
  sharedById: string
}
type PeopleUserResponseDto = {
  avatarColor: UserAvatarColor
  email: string
  id: string
  name: string
  profileChangedAt: string
  profileImagePath: string
  role: PersonUserRole
}
type PersonResponseDto = {
  birthDate: string | null
  color?: string | undefined
  id: string
  isFavorite?: boolean | undefined
  isHidden: boolean
  name: string
  otherPeople: PersonOtherResponseDto[]
  sharedBy: PeopleUserResponseDto[]
  sharedWith: PeopleUserResponseDto[]
  thumbnailPath: string
  updatedAt?: string | undefined
}
type AssetStackResponseDto = { assetCount: number; id: string; primaryAssetId: string }
type TagResponseDto = {
  color?: string | undefined
  createdAt: string
  id: string
  name: string
  parentId?: string | undefined
  updatedAt: string
  value: string
}
type AssetTypeEnum = 'IMAGE' | 'VIDEO' | 'AUDIO' | 'OTHER'
type AssetResponseDto = {
  checksum: string
  createdAt: string
  duplicateId?: (string | null) | undefined
  duration: number | null
  exifInfo?: ExifResponseDto | undefined
  fileCreatedAt: string
  fileModifiedAt: string
  hasMetadata: boolean
  height: number | null
  id: string
  isArchived: boolean
  isEdited: boolean
  isFavorite: boolean
  isOffline: boolean
  isTrashed: boolean
  libraryId?: (string | null) | undefined
  livePhotoVideoId?: (string | null) | undefined
  localDateTime: string
  originalFileName: string
  originalMimeType?: string | undefined
  originalPath: string
  owner?: UserResponseDto | undefined
  ownerId: string
  people?: PersonResponseDto[] | undefined
  resized?: boolean | undefined
  stack?: AssetStackResponseDto | ({ [x: string]: unknown } | null) | undefined
  tags?: TagResponseDto[] | undefined
  thumbhash: string | null
  type: AssetTypeEnum
  updatedAt: string
  visibility: AssetVisibility
  width: number | null
}
type UpdateAssetDto = {
  dateTimeOriginal?: string | undefined
  description?: string | undefined
  isFavorite?: boolean | undefined
  latitude?: number | undefined
  livePhotoVideoId?: (string | null) | undefined
  longitude?: number | undefined
  rating?: (number | null) | undefined
  visibility?: AssetVisibility | undefined
}
type AssetEditAction = 'crop' | 'rotate' | 'mirror'
type CropParameters = { height: number; width: number; x: number; y: number }
type RotateParameters = { angle: number }
type MirrorAxis = 'horizontal' | 'vertical'
type MirrorParameters = { axis: MirrorAxis }
type AssetEditActionItemResponseDto = {
  action: AssetEditAction
  id: string
  parameters: CropParameters | RotateParameters | MirrorParameters
}
type AssetEditsResponseDto = { assetId: string; edits: AssetEditActionItemResponseDto[] }
type AssetEditActionItemDto = {
  action: AssetEditAction
  parameters: CropParameters | RotateParameters | MirrorParameters
}
type AssetEditsCreateDto = { edits: AssetEditActionItemDto[] }
type AssetMetadataResponseDto = {
  key: string
  updatedAt: string
  value: { [x: string]: { [x: string]: unknown } }
}
type AssetMetadataUpsertDto = { items: AssetMetadataUpsertItemDto[] }
type AssetOcrResponseDto = {
  assetId: string
  boxScore: number
  id: string
  text: string
  textScore: number
  x1: number
  x2: number
  x3: number
  x4: number
  y1: number
  y2: number
  y3: number
  y4: number
}
type AssetMediaSize = 'original' | 'fullsize' | 'preview' | 'thumbnail'
type SignUpDto = { email: string; name: string; password: string }
type ChangePasswordDto = {
  invalidateSessions?: boolean | undefined
  newPassword: string
  password: string
}
type LoginCredentialDto = { email: string; password: string }
type LoginResponseDto = {
  accessToken: string
  isAdmin: boolean
  isOnboarded: boolean
  name: string
  profileImagePath: string
  shouldChangePassword: boolean
  userEmail: string
  userId: string
}
type LogoutResponseDto = { redirectUri: string; successful: boolean }
type PinCodeResetDto = { password?: string | undefined; pinCode?: string | undefined }
type PinCodeSetupDto = { pinCode: string }
type PinCodeChangeDto = {
  newPinCode: string
  password?: string | undefined
  pinCode?: string | undefined
}
type SessionUnlockDto = { password?: string | undefined; pinCode?: string | undefined }
type AuthStatusResponseDto = {
  expiresAt?: string | undefined
  isElevated: boolean
  password: boolean
  pinCode: boolean
  pinExpiresAt?: string | undefined
}
type ValidateAccessTokenResponseDto = { authStatus: boolean }
type ClusterGroupRequestResponseDto = {
  clusterGroupId: string
  createdAt: string
  id: string
  userId: string
}
type ClusterGroupRequestCreateDto = { userId: string }
type UserConfigFFmpegRealtimeDto = {
  enabled: boolean
  resolutions: HlsVideoResolution[]
  videoCodecs: VideoCodec[]
}
type UserConfigFFmpegDto = { realtime: UserConfigFFmpegRealtimeDto }
type UserConfigGeneratedFullsizeImageDto = { enabled: boolean }
type UserConfigGeneratedImageDto = { size: number }
type UserConfigImageDto = {
  fullsize: UserConfigGeneratedFullsizeImageDto
  preview: UserConfigGeneratedImageDto
  thumbnail: UserConfigGeneratedImageDto
}
type UserConfigClipDto = { enabled: boolean }
type UserConfigDuplicateDetectionDto = { enabled: boolean }
type UserConfigFacialRecognitionDto = { enabled: boolean; minFaces: number }
type UserConfigOcrDto = { enabled: boolean }
type UserConfigMachineLearningDto = {
  clip: UserConfigClipDto
  duplicateDetection: UserConfigDuplicateDetectionDto
  enabled: boolean
  facialRecognition: UserConfigFacialRecognitionDto
  ocr: UserConfigOcrDto
}
type UserConfigMapDto = { darkStyle: string; enabled: boolean; lightStyle: string }
type UserConfigSmtpDto = { enabled: boolean }
type UserConfigNotificationsDto = { smtp: UserConfigSmtpDto }
type UserConfigOAuthDto = {
  accountManagementUrl?: string | undefined
  autoLaunch: boolean
  buttonText: string
  enabled: boolean
}
type UserConfigPasskeyDto = { enabled: boolean }
type UserConfigPasswordLoginDto = { enabled: boolean }
type UserConfigReverseGeocodingDto = { enabled: boolean }
type UserConfigServerDto = {
  externalDomain: string
  loginPageMessage: string
  publicUsers: boolean
}
type UserConfigTrashDto = { days: number; enabled: boolean }
type UserConfigUserDto = { deleteDelay: number }
type UserConfigDto = {
  ffmpeg: UserConfigFFmpegDto
  image: UserConfigImageDto
  machineLearning: UserConfigMachineLearningDto
  map: UserConfigMapDto
  notifications: UserConfigNotificationsDto
  oauth: UserConfigOAuthDto
  passkey: UserConfigPasskeyDto
  passwordLogin: UserConfigPasswordLoginDto
  reverseGeocoding: UserConfigReverseGeocodingDto
  server: UserConfigServerDto
  trash: UserConfigTrashDto
  user: UserConfigUserDto
}
type DownloadArchiveDto = {
  archiveName?: string | undefined
  assetIds: string[]
  edited?: boolean | undefined
}
type DownloadInfoDto = {
  albumId?: string | undefined
  archiveSize?: number | undefined
  assetIds?: string[] | undefined
  userId?: string | undefined
}
type DownloadArchiveInfo = { assetIds: string[]; size: number }
type DownloadResponseDto = { archives: DownloadArchiveInfo[]; totalSize: number }
type DuplicateResponseDto = {
  assets: AssetResponseDto[]
  duplicateId: string
  suggestedKeepAssetIds: string[]
}
type DuplicateResolveGroupDto = {
  duplicateId: string
  keepAssetIds: string[]
  trashAssetIds: string[]
}
type DuplicateResolveDto = { groups: DuplicateResolveGroupDto[] }
type SourceType = 'machine-learning' | 'exif' | 'manual'
type AssetFaceResponseDto = {
  boundingBoxX1: number
  boundingBoxX2: number
  boundingBoxY1: number
  boundingBoxY2: number
  id: string
  imageHeight: number
  imageWidth: number
  person: PersonResponseDto | ({ [x: string]: unknown } | null)
  sourceType?: SourceType | undefined
}
type AssetFaceCreateDto = {
  assetId: string
  height: number
  imageHeight: number
  imageWidth: number
  personId: string
  userId?: string | undefined
  width: number
  x: number
  y: number
}
type AssetFaceDeleteDto = { force: boolean }
type FaceDto = { id: string }
type QueueStatisticsDto = {
  active: number
  completed: number
  delayed: number
  failed: number
  paused: number
  waiting: number
}
type QueueStatusLegacyDto = { isActive: boolean; isPaused: boolean }
type QueueResponseLegacyDto = { jobCounts: QueueStatisticsDto; queueStatus: QueueStatusLegacyDto }
type QueuesResponseLegacyDto = {
  backgroundTask: QueueResponseLegacyDto
  backupDatabase: QueueResponseLegacyDto
  duplicateDetection: QueueResponseLegacyDto
  editor: QueueResponseLegacyDto
  faceDetection: QueueResponseLegacyDto
  facialRecognition: QueueResponseLegacyDto
  integrityCheck: QueueResponseLegacyDto
  library: QueueResponseLegacyDto
  metadataExtraction: QueueResponseLegacyDto
  migration: QueueResponseLegacyDto
  notifications: QueueResponseLegacyDto
  ocr: QueueResponseLegacyDto
  search: QueueResponseLegacyDto
  sidecar: QueueResponseLegacyDto
  smartSearch: QueueResponseLegacyDto
  storageTemplateMigration: QueueResponseLegacyDto
  thumbnailGeneration: QueueResponseLegacyDto
  videoConversion: QueueResponseLegacyDto
  workflow: QueueResponseLegacyDto
}
type ManualJobName =
  | 'person-cleanup'
  | 'tag-cleanup'
  | 'user-cleanup'
  | 'memory-cleanup'
  | 'memory-create'
  | 'backup-database'
  | 'integrity-missing-files'
  | 'integrity-untracked-files'
  | 'integrity-checksum-mismatch'
  | 'integrity-missing-files-refresh'
  | 'integrity-untracked-files-refresh'
  | 'integrity-checksum-mismatch-refresh'
  | 'integrity-missing-files-delete-all'
  | 'integrity-untracked-files-delete-all'
  | 'integrity-checksum-mismatch-delete-all'
type JobCreateDto = { name: ManualJobName }
type QueueName =
  | 'thumbnailGeneration'
  | 'metadataExtraction'
  | 'videoConversion'
  | 'faceDetection'
  | 'facialRecognition'
  | 'smartSearch'
  | 'duplicateDetection'
  | 'backgroundTask'
  | 'storageTemplateMigration'
  | 'migration'
  | 'search'
  | 'sidecar'
  | 'library'
  | 'notifications'
  | 'backupDatabase'
  | 'ocr'
  | 'workflow'
  | 'integrityCheck'
  | 'editor'
type QueueCommand = 'start' | 'pause' | 'resume' | 'empty' | 'clear-failed'
type QueueCommandDto = { command: QueueCommand; force?: boolean | undefined }
type LibraryResponseDto = {
  assetCount: number
  createdAt: string
  exclusionPatterns: string[]
  id: string
  importPaths: string[]
  name: string
  ownerId: string
  refreshedAt: string | null
  updatedAt: string
}
type CreateLibraryDto = {
  exclusionPatterns?: string[] | undefined
  importPaths?: string[] | undefined
  name?: string | undefined
  ownerId: string
}
type UpdateLibraryDto = {
  exclusionPatterns?: string[] | undefined
  importPaths?: string[] | undefined
  name?: string | undefined
}
type LibraryStatsResponseDto = { photos: number; total: number; usage: number; videos: number }
type ValidateLibraryDto = {
  exclusionPatterns?: string[] | undefined
  importPaths?: string[] | undefined
}
type ValidateLibraryImportPathResponseDto = {
  importPath: string
  isValid: boolean
  message?: string | undefined
}
type ValidateLibraryResponseDto = {
  importPaths?: ValidateLibraryImportPathResponseDto[] | undefined
}
type MapReverseGeocodeResponseDto = {
  city: string | null
  country: string | null
  state: string | null
}
type MemorySearchOrder = 'asc' | 'desc' | 'random'
type MemoryType = 'on_this_day' | 'birthday'
type MemoryDataDto = {
  personId?: string | undefined
  personName?: string | undefined
  year: number
}
type MemoryResponseDto = {
  assets: AssetResponseDto[]
  createdAt: string
  data: MemoryDataDto
  deletedAt?: string | undefined
  hideAt?: string | undefined
  id: string
  isSaved: boolean
  memoryAt: string
  ownerId: string
  seenAt?: string | undefined
  showAt?: string | undefined
  type: MemoryType
  updatedAt: string
}
type MemoryCreateDto = {
  assetIds?: string[] | undefined
  data: MemoryDataDto
  hideAt?: string | undefined
  isSaved?: boolean | undefined
  memoryAt: string
  seenAt?: string | undefined
  showAt?: string | undefined
  type: MemoryType
}
type MemoryStatisticsResponseDto = { total: number }
type MemoryUpdateDto = {
  isSaved?: boolean | undefined
  memoryAt?: string | undefined
  seenAt?: string | undefined
}
type NotificationDeleteAllDto = { ids: string[] }
type NotificationUpdateAllDto = { ids: string[]; readAt?: (string | null) | undefined }
type NotificationUpdateDto = { readAt?: (string | null) | undefined }
type OAuthConfigDto = {
  codeChallenge?: string | undefined
  redirectUri: string
  state?: string | undefined
}
type OAuthAuthorizeResponseDto = { url: string }
type OAuthBackchannelLogoutDto = { logout_token: string }
type OAuthCallbackDto = {
  codeVerifier?: string | undefined
  state?: string | undefined
  url: string
}
type PartnerDirection = 'shared-by' | 'shared-with'
type PartnerResponseDto = {
  avatarColor: UserAvatarColor
  email: string
  id: string
  inTimeline?: boolean | undefined
  name: string
  profileChangedAt: string
  profileImagePath: string
}
type PartnerCreateDto = { sharedWithId: string }
type PartnerUpdateDto = { inTimeline: boolean }
type PasskeyResponseDto = {
  createdAt: string
  id: string
  name: string | null
  updatedAt: string
  usedAt: string | null
}
type PasskeyAuthenticationFinishDto = {
  response: { id: string; response: { userHandle?: string | undefined } }
}
type PasskeyAuthenticationOptionsDto = { [x: string]: { [x: string]: unknown } }
type PasskeyRegistrationFinishDto = {
  name?: string | undefined
  response: { [x: string]: unknown }
}
type PasskeyRegistrationOptionsDto = { [x: string]: { [x: string]: unknown } }
type PasskeyUpdateDto = { name: string | null }
type PeopleDeleteDto = { ids: string[]; userId?: string | undefined }
type PeopleResponseDto = {
  hasNextPage?: boolean | undefined
  hidden: number
  people: PersonResponseDto[]
  total: number
}
type PersonCreateDto = {
  birthDate?: (string | null) | undefined
  color?: (string | null) | undefined
  isFavorite?: boolean | undefined
  isHidden?: boolean | undefined
  name?: string | undefined
}
type PeopleUpdateItem = {
  birthDate?: (string | null) | undefined
  color?: (string | null) | undefined
  featureFaceAssetId?: string | undefined
  id: string
  isFavorite?: boolean | undefined
  isHidden?: boolean | undefined
  name?: string | undefined
  userId?: string | undefined
}
type PeopleUpdateDto = { people: PeopleUpdateItem[] }
type MergePersonDto = { ids: string[] }
type PersonUsersDeleteDto = {
  personId: string
  sharedById?: string | undefined
  sharedWithId: string
}[]
type SharingDirection = 'shared-by' | 'shared-with'
type PersonUsersResponseDto = {
  personId: string
  role: PersonUserRole
  sharedBy: UserResponseDto
  sharedById: string
  sharedWith: UserResponseDto
  sharedWithId: string
}[]
type PeopleUsersUpsertType = 'everyone'
type PeopleUsersUpsertDto = {
  personIds?: string[] | undefined
  role: PersonUserRole
  sharedWithIds: string[]
  type?: PeopleUsersUpsertType | undefined
}
type PersonDeleteDto = { userId?: string | undefined }
type PersonUpdateDto = {
  birthDate?: (string | null) | undefined
  color?: (string | null) | undefined
  featureFaceAssetId?: string | undefined
  isFavorite?: boolean | undefined
  isHidden?: boolean | undefined
  name?: string | undefined
  userId?: string | undefined
}
type AssetFaceUpdateItem = { assetId: string; personId: string; userId?: string | undefined }
type AssetFaceUpdateDto = { data: AssetFaceUpdateItem[] }
type PersonStatisticsResponseDto = { assets: number }
type WorkflowType = 'AssetV1'
type PluginMethodResponseDto = {
  description: string
  hostFunctions: boolean
  key: string
  name: string
  schema?: { [x: string]: unknown } | undefined
  title: string
  types: WorkflowType[]
  uiHints: string[]
}
type PluginResponseDto = {
  author: string
  createdAt: string
  description: string
  id: string
  methods: PluginMethodResponseDto[]
  name: string
  title: string
  updatedAt: string
  version: string
}
type WorkflowTrigger =
  | 'AssetCreate'
  | 'AssetMetadataExtraction'
  | 'AssetOcrExtraction'
  | 'AssetTagged'
type PluginTemplateStepResponseDto = {
  config: { [x: string]: { [x: string]: unknown } } | ({ [x: string]: unknown } | null)
  enabled?: boolean | undefined
  method: string
}
type PluginTemplateResponseDto = {
  description: string
  key: string
  steps: PluginTemplateStepResponseDto[]
  title: string
  trigger: WorkflowTrigger
  uiHints: string[]
}
type PublicConfigFFmpegRealtimeDto = { enabled: boolean }
type PublicConfigFFmpegDto = { realtime: PublicConfigFFmpegRealtimeDto }
type PublicConfigMapDto = { darkStyle: string; enabled: boolean; lightStyle: string }
type PublicConfigOAuthDto = { autoLaunch: boolean; buttonText: string; enabled: boolean }
type PublicConfigPasskeyDto = { enabled: boolean }
type PublicConfigPasswordLoginDto = { enabled: boolean }
type PublicConfigServerDto = { loginPageMessage: string }
type PublicConfigDto = {
  ffmpeg: PublicConfigFFmpegDto
  map: PublicConfigMapDto
  oauth: PublicConfigOAuthDto
  passkey: PublicConfigPasskeyDto
  passwordLogin: PublicConfigPasswordLoginDto
  server: PublicConfigServerDto
}
type QueueResponseDto = { isPaused: boolean; name: QueueName; statistics: QueueStatisticsDto }
type QueueUpdateDto = { isPaused?: boolean | undefined }
type QueueDeleteDto = { failed?: boolean | undefined }
type QueueJobStatus = 'active' | 'failed' | 'completed' | 'delayed' | 'waiting'
type JobName =
  | 'AssetDelete'
  | 'AssetDeleteCheck'
  | 'AssetDetectFacesQueueAll'
  | 'AssetDetectFaces'
  | 'AssetDetectDuplicatesQueueAll'
  | 'AssetDetectDuplicates'
  | 'AssetEditThumbnailGeneration'
  | 'AssetEncodeVideoQueueAll'
  | 'AssetEncodeVideo'
  | 'AssetEmptyTrash'
  | 'AssetExtractMetadataQueueAll'
  | 'AssetExtractMetadata'
  | 'AssetFileMigration'
  | 'AssetGenerateThumbnailsQueueAll'
  | 'AssetGenerateThumbnails'
  | 'AuditTableCleanup'
  | 'AuthChallengeCleanup'
  | 'DatabaseBackup'
  | 'FacialRecognitionQueueAll'
  | 'FacialRecognition'
  | 'FileDelete'
  | 'FileMigrationQueueAll'
  | 'LibraryDeleteCheck'
  | 'LibraryDelete'
  | 'LibraryRemoveAsset'
  | 'LibraryScanAssetsQueueAll'
  | 'LibrarySyncAssets'
  | 'LibrarySyncFilesQueueAll'
  | 'LibrarySyncFiles'
  | 'LibraryScanQueueAll'
  | 'HlsSessionCleanup'
  | 'MemoryCleanup'
  | 'MemoryGenerate'
  | 'NotificationsCleanup'
  | 'NotifyUserSignup'
  | 'NotifyAlbumInvite'
  | 'NotifyAlbumUpdate'
  | 'UserDelete'
  | 'UserDeleteCheck'
  | 'UserSyncUsage'
  | 'PersonCleanup'
  | 'PersonFileMigration'
  | 'PersonGenerateThumbnail'
  | 'SessionCleanup'
  | 'SendMail'
  | 'SidecarQueueAll'
  | 'SidecarCheck'
  | 'SidecarWrite'
  | 'SmartSearchQueueAll'
  | 'SmartSearch'
  | 'StorageTemplateMigration'
  | 'StorageTemplateMigrationSingle'
  | 'TagCleanup'
  | 'VersionCheck'
  | 'OcrQueueAll'
  | 'Ocr'
  | 'WorkflowAssetTrigger'
  | 'IntegrityUntrackedFilesQueueAll'
  | 'IntegrityUntrackedFiles'
  | 'IntegrityUntrackedRefresh'
  | 'IntegrityMissingFilesQueueAll'
  | 'IntegrityMissingFiles'
  | 'IntegrityMissingFilesRefresh'
  | 'IntegrityChecksumFiles'
  | 'IntegrityChecksumFilesRefresh'
  | 'IntegrityDeleteReportType'
  | 'IntegrityDeleteReports'
type QueueJobResponseDto = {
  data: { [x: string]: { [x: string]: unknown } }
  id?: string | undefined
  name: JobName
  timestamp: number
}
type SearchExploreItem = { data: AssetResponseDto; value: string }
type SearchExploreResponseDto = { fieldName: string; items: SearchExploreItem[] }
type IdsFilter = {
  all?: string[] | undefined
  any?: string[] | undefined
  none?: string[] | undefined
}
type StringFilter = {
  eq?: string | undefined
  in?: string[] | undefined
  ne?: string | undefined
  notIn?: string[] | undefined
}
type StringFilterNullable = {
  eq?: (string | null) | undefined
  in?: string[] | undefined
  ne?: (string | null) | undefined
  notIn?: string[] | undefined
}
type DateFilter = {
  eq?: string | undefined
  gt?: string | undefined
  gte?: string | undefined
  lt?: string | undefined
  lte?: string | undefined
  ne?: string | undefined
}
type StringPatternFilter = {
  endsWith?: string | undefined
  eq?: (string | null) | undefined
  in?: string[] | undefined
  like?: string | undefined
  ne?: (string | null) | undefined
  notIn?: string[] | undefined
  notLike?: string | undefined
  startsWith?: string | undefined
}
type NumberFilter = {
  eq?: number | undefined
  gt?: number | undefined
  gte?: number | undefined
  in?: number[] | undefined
  lt?: number | undefined
  lte?: number | undefined
  ne?: number | undefined
  notIn?: number[] | undefined
}
type BoolFilter = { eq: boolean }
type IdFilter = { eq?: string | undefined; ne?: string | undefined }
type IdFilterNullable = { eq?: (string | null) | undefined; ne?: (string | null) | undefined }
type StringSimilarityFilter = { matches: string }
type NumberFilterNullable = {
  eq?: (number | null) | undefined
  gt?: number | undefined
  gte?: number | undefined
  in?: number[] | undefined
  lt?: number | undefined
  lte?: number | undefined
  ne?: (number | null) | undefined
  notIn?: number[] | undefined
}
type DateFilterNullable = {
  eq?: (string | null) | undefined
  gt?: string | undefined
  gte?: string | undefined
  lt?: string | undefined
  lte?: string | undefined
  ne?: (string | null) | undefined
}
type EnumFilterAssetType = {
  eq?: AssetTypeEnum | undefined
  in?: AssetTypeEnum[] | undefined
  ne?: AssetTypeEnum | undefined
  notIn?: AssetTypeEnum[] | undefined
}
type EnumFilterAssetVisibility = {
  eq?: AssetVisibility | undefined
  in?: AssetVisibility[] | undefined
  ne?: AssetVisibility | undefined
  notIn?: AssetVisibility[] | undefined
}
type SearchFilterBranch = {
  albumIds?: IdsFilter | undefined
  checksum?: StringFilter | undefined
  city?: StringFilterNullable | undefined
  country?: StringFilterNullable | undefined
  createdAt?: DateFilter | undefined
  description?: StringPatternFilter | undefined
  encodedVideoPath?: StringFilter | undefined
  fileSizeInBytes?: NumberFilter | undefined
  hasAlbums?: BoolFilter | undefined
  hasPeople?: BoolFilter | undefined
  hasTags?: BoolFilter | undefined
  id?: IdFilter | undefined
  isEncoded?: BoolFilter | undefined
  isFavorite?: BoolFilter | undefined
  isMotion?: BoolFilter | undefined
  isOffline?: BoolFilter | undefined
  lensModel?: StringFilterNullable | undefined
  libraryId?: IdFilterNullable | undefined
  make?: StringFilterNullable | undefined
  model?: StringFilterNullable | undefined
  ocr?: StringSimilarityFilter | undefined
  originalFileName?: StringPatternFilter | undefined
  originalPath?: StringPatternFilter | undefined
  personIds?: IdsFilter | undefined
  rating?: NumberFilterNullable | undefined
  state?: StringFilterNullable | undefined
  tagIds?: IdsFilter | undefined
  takenAt?: DateFilter | undefined
  trashedAt?: DateFilterNullable | undefined
  type?: EnumFilterAssetType | undefined
  updatedAt?: DateFilter | undefined
  visibility?: EnumFilterAssetVisibility | undefined
}
type SearchFilter = {
  albumIds?: IdsFilter | undefined
  checksum?: StringFilter | undefined
  city?: StringFilterNullable | undefined
  country?: StringFilterNullable | undefined
  createdAt?: DateFilter | undefined
  description?: StringPatternFilter | undefined
  encodedVideoPath?: StringFilter | undefined
  fileSizeInBytes?: NumberFilter | undefined
  hasAlbums?: BoolFilter | undefined
  hasPeople?: BoolFilter | undefined
  hasTags?: BoolFilter | undefined
  id?: IdFilter | undefined
  isEncoded?: BoolFilter | undefined
  isFavorite?: BoolFilter | undefined
  isMotion?: BoolFilter | undefined
  isOffline?: BoolFilter | undefined
  lensModel?: StringFilterNullable | undefined
  libraryId?: IdFilterNullable | undefined
  make?: StringFilterNullable | undefined
  model?: StringFilterNullable | undefined
  ocr?: StringSimilarityFilter | undefined
  or?: SearchFilterBranch[] | undefined
  originalFileName?: StringPatternFilter | undefined
  originalPath?: StringPatternFilter | undefined
  personIds?: IdsFilter | undefined
  rating?: NumberFilterNullable | undefined
  state?: StringFilterNullable | undefined
  tagIds?: IdsFilter | undefined
  takenAt?: DateFilter | undefined
  trashedAt?: DateFilterNullable | undefined
  type?: EnumFilterAssetType | undefined
  updatedAt?: DateFilter | undefined
  visibility?: EnumFilterAssetVisibility | undefined
}
type SearchOrderField = 'fileCreatedAt' | 'localDateTime' | 'fileSizeInBytes' | 'rating'
type SearchOrder = { direction?: AssetOrder | undefined; field?: SearchOrderField | undefined }
type MetadataSearchDto = {
  albumIds?: string[] | undefined
  checksum?: string | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  createdAfter?: string | undefined
  createdBefore?: string | undefined
  cursor?: string | undefined
  description?: string | undefined
  encodedVideoPath?: string | undefined
  filter?: SearchFilter | undefined
  id?: string | undefined
  isEncoded?: boolean | undefined
  isFavorite?: boolean | undefined
  isMotion?: boolean | undefined
  isNotInAlbum?: boolean | undefined
  isOffline?: boolean | undefined
  lensModel?: (string | null) | undefined
  libraryId?: (string | null) | undefined
  make?: (string | null) | undefined
  model?: (string | null) | undefined
  ocr?: string | undefined
  order?: AssetOrder | undefined
  orderBy?: SearchOrder | undefined
  originalFileName?: string | undefined
  originalPath?: string | undefined
  page?: number | undefined
  personIds?: string[] | undefined
  previewPath?: string | undefined
  rating?: (number | null) | undefined
  size?: number | undefined
  state?: (string | null) | undefined
  tagIds?: (string[] | null) | undefined
  takenAfter?: string | undefined
  takenBefore?: string | undefined
  thumbnailPath?: string | undefined
  trashedAfter?: string | undefined
  trashedBefore?: string | undefined
  type?: AssetTypeEnum | undefined
  updatedAfter?: string | undefined
  updatedBefore?: string | undefined
  visibility?: AssetVisibility | undefined
  withDeleted?: boolean | undefined
  withExif?: boolean | undefined
  withPeople?: boolean | undefined
  withStacked?: boolean | undefined
}
type SearchFacetCountResponseDto = { count: number; value: string }
type SearchFacetResponseDto = { counts: SearchFacetCountResponseDto[]; fieldName: string }
type SearchAlbumResponseDto = {
  count: number
  facets: SearchFacetResponseDto[]
  items: AlbumResponseDto[]
  total: number
}
type SearchAssetResponseDto = {
  count: number
  facets: SearchFacetResponseDto[]
  items: AssetResponseDto[]
  nextCursor: string | null
  nextPage: string | null
  total: number
}
type SearchResponseDto = { albums: SearchAlbumResponseDto; assets: SearchAssetResponseDto }
type PlacesResponseDto = {
  admin1name?: string | undefined
  admin2name?: string | undefined
  latitude: number
  longitude: number
  name: string
}
type RandomSearchDto = {
  albumIds?: string[] | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  createdAfter?: string | undefined
  createdBefore?: string | undefined
  filter?: SearchFilter | undefined
  isEncoded?: boolean | undefined
  isFavorite?: boolean | undefined
  isMotion?: boolean | undefined
  isNotInAlbum?: boolean | undefined
  isOffline?: boolean | undefined
  lensModel?: (string | null) | undefined
  libraryId?: (string | null) | undefined
  make?: (string | null) | undefined
  model?: (string | null) | undefined
  ocr?: string | undefined
  personIds?: string[] | undefined
  rating?: (number | null) | undefined
  size?: number | undefined
  state?: (string | null) | undefined
  tagIds?: (string[] | null) | undefined
  takenAfter?: string | undefined
  takenBefore?: string | undefined
  trashedAfter?: string | undefined
  trashedBefore?: string | undefined
  type?: AssetTypeEnum | undefined
  updatedAfter?: string | undefined
  updatedBefore?: string | undefined
  visibility?: AssetVisibility | undefined
  withDeleted?: boolean | undefined
  withExif?: boolean | undefined
  withPeople?: boolean | undefined
  withStacked?: boolean | undefined
}
type SmartSearchDto = {
  albumIds?: string[] | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  createdAfter?: string | undefined
  createdBefore?: string | undefined
  filter?: SearchFilter | undefined
  isEncoded?: boolean | undefined
  isFavorite?: boolean | undefined
  isMotion?: boolean | undefined
  isNotInAlbum?: boolean | undefined
  isOffline?: boolean | undefined
  language?: string | undefined
  lensModel?: (string | null) | undefined
  libraryId?: (string | null) | undefined
  make?: (string | null) | undefined
  model?: (string | null) | undefined
  ocr?: string | undefined
  page?: number | undefined
  personIds?: string[] | undefined
  query?: string | undefined
  queryAssetId?: string | undefined
  rating?: (number | null) | undefined
  size?: number | undefined
  state?: (string | null) | undefined
  tagIds?: (string[] | null) | undefined
  takenAfter?: string | undefined
  takenBefore?: string | undefined
  trashedAfter?: string | undefined
  trashedBefore?: string | undefined
  type?: AssetTypeEnum | undefined
  updatedAfter?: string | undefined
  updatedBefore?: string | undefined
  visibility?: AssetVisibility | undefined
  withDeleted?: boolean | undefined
  withExif?: boolean | undefined
}
type StatisticsSearchDto = {
  albumIds?: string[] | undefined
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  createdAfter?: string | undefined
  createdBefore?: string | undefined
  description?: string | undefined
  filter?: SearchFilter | undefined
  isEncoded?: boolean | undefined
  isFavorite?: boolean | undefined
  isMotion?: boolean | undefined
  isNotInAlbum?: boolean | undefined
  isOffline?: boolean | undefined
  lensModel?: (string | null) | undefined
  libraryId?: (string | null) | undefined
  make?: (string | null) | undefined
  model?: (string | null) | undefined
  ocr?: string | undefined
  personIds?: string[] | undefined
  rating?: (number | null) | undefined
  state?: (string | null) | undefined
  tagIds?: (string[] | null) | undefined
  takenAfter?: string | undefined
  takenBefore?: string | undefined
  trashedAfter?: string | undefined
  trashedBefore?: string | undefined
  type?: AssetTypeEnum | undefined
  updatedAfter?: string | undefined
  updatedBefore?: string | undefined
  visibility?: AssetVisibility | undefined
}
type SearchStatisticsResponseDto = { total: number }
type SearchSuggestionType =
  | 'country'
  | 'state'
  | 'city'
  | 'camera-make'
  | 'camera-model'
  | 'camera-lens-model'
type ServerAboutResponseDto = {
  build?: string | undefined
  buildImage?: string | undefined
  buildImageUrl?: string | undefined
  buildUrl?: string | undefined
  exiftool?: string | undefined
  ffmpeg?: string | undefined
  imagemagick?: string | undefined
  libvips?: string | undefined
  licensed: boolean
  nodejs?: string | undefined
  repository?: string | undefined
  repositoryUrl?: string | undefined
  sourceCommit?: string | undefined
  sourceRef?: string | undefined
  sourceUrl?: string | undefined
  thirdPartyBugFeatureUrl?: string | undefined
  thirdPartyDocumentationUrl?: string | undefined
  thirdPartySourceUrl?: string | undefined
  thirdPartySupportUrl?: string | undefined
  version: string
  versionUrl: string
}
type ServerApkLinksDto = { arm64v8a: string; armeabiv7a: string; universal: string; x86_64: string }
type ServerConfigDto = {
  externalDomain: string
  isInitialized: boolean
  isOnboarded: boolean
  loginPageMessage: string
  maintenanceMode: boolean
  mapDarkStyleUrl: string
  mapLightStyleUrl: string
  minFaces: number
  oauthAccountManagementUrl?: string | undefined
  oauthButtonText: string
  publicUsers: boolean
  trashDays: number
  userDeleteDelay: number
}
type ServerFeaturesDto = {
  backups: boolean
  configFile: boolean
  duplicateDetection: boolean
  email: boolean
  facialRecognition: boolean
  importFaces: boolean
  map: boolean
  oauth: boolean
  oauthAutoLaunch: boolean
  ocr: boolean
  passwordLogin: boolean
  realtimeTranscoding: boolean
  reverseGeocoding: boolean
  search: boolean
  sidecar: boolean
  smartSearch: boolean
  trash: boolean
}
type LicenseKeyDto = { activationKey: string; licenseKey: string }
type ServerMediaTypesResponseDto = { image: string[]; sidecar: string[]; video: string[] }
type ServerPingResponse = { res: string }
type UsageByUserDto = {
  photos: number
  quotaSizeInBytes: number | null
  usage: number
  usagePhotos: number
  usageVideos: number
  userId: string
  userName: string
  videos: number
}
type ServerStatsResponseDto = {
  photos: number
  usage: number
  usageByUser: UsageByUserDto[]
  usagePhotos: number
  usageVideos: number
  videos: number
}
type ServerStorageResponseDto = {
  diskAvailable: string
  diskAvailableRaw: number
  diskSize: string
  diskSizeRaw: number
  diskUsagePercentage: number
  diskUse: string
  diskUseRaw: number
}
type ServerVersionResponseDto = {
  featureLevel: number
  major: number
  minor: number
  patch: number
  prerelease: number | null
}
type VersionCheckStateResponseDto = { checkedAt: string | null; releaseVersion: string | null }
type ServerVersionHistoryResponseDto = { createdAt: string; id: string; version: string }
type SessionCreateDto = {
  deviceOS?: string | undefined
  deviceType?: string | undefined
  duration?: number | undefined
}
type SessionCreateResponseDto = {
  appVersion: string | null
  createdAt: string
  current: boolean
  deviceOS: string
  deviceType: string
  expiresAt?: string | undefined
  id: string
  isPendingSyncReset: boolean
  token: string
  updatedAt: string
}
type SessionUpdateDto = { isPendingSyncReset?: boolean | undefined }
type SharedLinkType = 'ALBUM' | 'INDIVIDUAL'
type SharedLinkResponseDto = {
  album?: AlbumResponseDto | undefined
  allowDownload: boolean
  allowUpload: boolean
  assets: AssetResponseDto[]
  createdAt: string
  description: string | null
  expiresAt: string | null
  id: string
  key: string
  password: string | null
  showMetadata: boolean
  slug: string | null
  type: SharedLinkType
  userId: string
}
type SharedLinkCreateDto = {
  albumId?: string | undefined
  allowDownload?: boolean | undefined
  allowUpload?: boolean | undefined
  assetIds?: string[] | undefined
  description?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  password?: (string | null) | undefined
  showMetadata?: boolean | undefined
  slug?: (string | null) | undefined
  type: SharedLinkType
}
type SharedLinkLoginDto = { password: string }
type SharedLinkEditDto = {
  allowDownload?: boolean | undefined
  allowUpload?: boolean | undefined
  description?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  password?: (string | null) | undefined
  showMetadata?: boolean | undefined
  slug?: (string | null) | undefined
}
type AssetIdsDto = { assetIds: string[] }
type AssetIdErrorReason = 'duplicate' | 'no_permission' | 'not_found'
type AssetIdsResponseDto = {
  assetId: string
  error?: AssetIdErrorReason | undefined
  success: boolean
}
type StackResponseDto = { assets: AssetResponseDto[]; id: string; primaryAssetId: string }
type StackCreateDto = { assetIds: string[] }
type StackUpdateDto = { primaryAssetId?: string | undefined }
type SyncEntityType =
  | 'AuthUserV1'
  | 'AuthUserV2'
  | 'UserV1'
  | 'UserDeleteV1'
  | 'AssetV1'
  | 'AssetV2'
  | 'AssetDeleteV1'
  | 'AssetExifV1'
  | 'AssetEditV1'
  | 'AssetEditDeleteV1'
  | 'AssetMetadataV1'
  | 'AssetMetadataDeleteV1'
  | 'AssetOcrV1'
  | 'AssetOcrDeleteV1'
  | 'PartnerV1'
  | 'PartnerDeleteV1'
  | 'PartnerAssetV1'
  | 'PartnerAssetV2'
  | 'PartnerAssetBackfillV1'
  | 'PartnerAssetBackfillV2'
  | 'PartnerAssetDeleteV1'
  | 'PartnerAssetExifV1'
  | 'PartnerAssetExifBackfillV1'
  | 'PartnerStackBackfillV1'
  | 'PartnerStackDeleteV1'
  | 'PartnerStackV1'
  | 'AlbumV1'
  | 'AlbumV2'
  | 'AlbumDeleteV1'
  | 'AlbumUserV1'
  | 'AlbumUserBackfillV1'
  | 'AlbumUserDeleteV1'
  | 'AlbumAssetCreateV1'
  | 'AlbumAssetCreateV2'
  | 'AlbumAssetUpdateV1'
  | 'AlbumAssetUpdateV2'
  | 'AlbumAssetBackfillV1'
  | 'AlbumAssetBackfillV2'
  | 'AlbumAssetExifCreateV1'
  | 'AlbumAssetExifUpdateV1'
  | 'AlbumAssetExifBackfillV1'
  | 'AlbumToAssetV1'
  | 'AlbumToAssetDeleteV1'
  | 'AlbumToAssetBackfillV1'
  | 'MemoryV1'
  | 'MemoryV2'
  | 'MemoryDeleteV1'
  | 'MemoryToAssetV1'
  | 'MemoryToAssetV2'
  | 'MemoryToAssetDeleteV1'
  | 'StackV1'
  | 'StackDeleteV1'
  | 'PersonV1'
  | 'PersonDeleteV1'
  | 'AssetFaceV1'
  | 'AssetFaceV2'
  | 'AssetFaceV3'
  | 'AssetFaceDeleteV1'
  | 'UserMetadataV1'
  | 'UserMetadataDeleteV1'
  | 'SyncAckV1'
  | 'SyncResetV1'
  | 'SyncCompleteV1'
type SyncAckDeleteDto = { types?: SyncEntityType[] | undefined }
type SyncAckDto = { ack: string; type: SyncEntityType }
type SyncAckSetDto = { acks: string[] }
type SyncRequestType =
  | 'AlbumsV1'
  | 'AlbumsV2'
  | 'AlbumUsersV1'
  | 'AlbumToAssetsV1'
  | 'AlbumAssetsV1'
  | 'AlbumAssetsV2'
  | 'AlbumAssetExifsV1'
  | 'AssetsV1'
  | 'AssetsV2'
  | 'AssetExifsV1'
  | 'AssetEditsV1'
  | 'AssetMetadataV1'
  | 'AssetOcrV1'
  | 'AuthUsersV1'
  | 'AuthUsersV2'
  | 'MemoriesV1'
  | 'MemoriesV2'
  | 'MemoryToAssetsV1'
  | 'MemoryToAssetsV2'
  | 'PartnersV1'
  | 'PartnerAssetsV1'
  | 'PartnerAssetsV2'
  | 'PartnerAssetExifsV1'
  | 'PartnerStacksV1'
  | 'StacksV1'
  | 'UsersV1'
  | 'PeopleV1'
  | 'AssetFacesV1'
  | 'AssetFacesV2'
  | 'AssetFacesV3'
  | 'UserMetadataV1'
type SyncStreamDto = { reset?: boolean | undefined; types: SyncRequestType[] }
type SystemConfigTemplateStorageOptionDto = {
  dayOptions: string[]
  hourOptions: string[]
  minuteOptions: string[]
  monthOptions: string[]
  presetOptions: string[]
  secondOptions: string[]
  weekOptions: string[]
  yearOptions: string[]
}
type AdminOnboardingUpdateDto = { isOnboarded: boolean }
type ReverseGeocodingStateResponseDto = {
  lastImportFileName: string | null
  lastUpdate: string | null
}
type TagCreateDto = {
  color?: (string | null) | undefined
  name: string
  parentId?: (string | null) | undefined
}
type TagUpsertDto = { tags: string[] }
type TagBulkAssetsDto = { assetIds: string[]; tagIds: string[] }
type TagBulkAssetsResponseDto = { count: number }
type TagUpdateDto = { color?: (string | null) | undefined; name?: string | undefined }
type AssetOrderBy = 'takenAt' | 'createdAt'
type TimeBucketAssetResponseDto = {
  city?: (string | null)[] | undefined
  country?: (string | null)[] | undefined
  createdAt: string[]
  duration: (number | null)[]
  fileCreatedAt: string[]
  id: string[]
  isFavorite: boolean[]
  isImage: boolean[]
  isTrashed: boolean[]
  latitude?: (number | null)[] | undefined
  livePhotoVideoId: (string | null)[]
  localOffsetHours: number[]
  longitude?: (number | null)[] | undefined
  ownerId: string[]
  projectionType: (string | null)[]
  ratio: number[]
  stack?: (string[] | null)[] | undefined
  thumbhash: (string | null)[]
  visibility: AssetVisibility[]
}
type TimeBucketsResponseDto = { count: number; timeBucket: string }
type TrashResponseDto = { count: number }
type UserUpdateMeDto = {
  avatarColor?: UserAvatarColor | ({ [x: string]: unknown } | null) | undefined
  email?: string | undefined
  name?: string | undefined
}
type OnboardingResponseDto = { isOnboarded: boolean }
type OnboardingDto = { isOnboarded: boolean }
type CreateProfileImageDto = { file: File }
type CreateProfileImageResponseDto = {
  profileChangedAt: string
  profileImagePath: string
  userId: string
}
type WorkflowStepDto = {
  config: { [x: string]: { [x: string]: unknown } } | ({ [x: string]: unknown } | null)
  enabled?: boolean | undefined
  method: string
}
type WorkflowResponseDto = {
  createdAt: string
  description: string | null
  enabled: boolean
  id: string
  logging: boolean
  name: string | null
  steps: WorkflowStepDto[]
  trigger: WorkflowTrigger
  updatedAt: string
}
type WorkflowCreateDto = {
  description?: (string | null) | undefined
  enabled?: boolean | undefined
  logging?: boolean | undefined
  name?: (string | null) | undefined
  steps?: WorkflowStepDto[] | undefined
  trigger: WorkflowTrigger
}
type WorkflowTriggerResponseDto = { trigger: WorkflowTrigger; types: WorkflowType[] }
type WorkflowUpdateDto = {
  description?: (string | null) | undefined
  enabled?: boolean | undefined
  logging?: boolean | undefined
  name?: (string | null) | undefined
  steps?: WorkflowStepDto[] | undefined
  trigger?: WorkflowTrigger | undefined
}
type WorkflowResult = 'completed' | 'halted' | 'error'
type WorkflowLogEntryDto = {
  at: string
  id: string
  lastStep?: { index: number; method: string } | undefined
  result: WorkflowResult
  triggerDataId?: string | undefined
}
type WorkflowShareStepDto = {
  config: { [x: string]: { [x: string]: unknown } } | ({ [x: string]: unknown } | null)
  enabled?: boolean | undefined
  method: string
}
type WorkflowShareResponseDto = {
  description: string | null
  name: string | null
  steps: WorkflowShareStepDto[]
  trigger: WorkflowTrigger
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/activities': {
      $get: {
        input: {
          query: {
            albumId: string
            assetId?: string | undefined
            level?: ReactionLevel | undefined
            type?: ReactionType | undefined
            userId?: string | undefined
          }
        }
        output: ActivityResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ActivityCreateDto }
        output: ActivityResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/activities/statistics': {
      $get: {
        input: { query: { albumId: string; assetId?: string | undefined } }
        output: ActivityStatisticsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/activities/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/auth/unlink-all': {
      $post: { input: {}; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/config': {
      $get: { input: {}; output: AdminConfigDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: AdminConfigDto }
        output: AdminConfigDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/config/defaults': {
      $get: { input: {}; output: AdminConfigDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/config/storage-template': {
      $get: {
        input: {}
        output: StorageTemplateOptionsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/config/storage-template/preview': {
      $post: {
        input: { json: StorageTemplatePreviewDto }
        output: StorageTemplatePreviewResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/database-backups': {
      $delete: {
        input: { json: DatabaseBackupDeleteDto }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: { input: {}; output: DatabaseBackupListResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/database-backups/start-restore': {
      $post: { input: {}; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/admin/database-backups/upload': {
      $post: {
        input: { form: DatabaseBackupUploadDto }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/database-backups/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/integrity/report': {
      $get: {
        input: {
          query: { cursor?: string | undefined; limit?: number | undefined; type: IntegrityReport }
        }
        output: IntegrityReportResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/integrity/report/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/admin/integrity/report/:id/file': {
      $get: { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/admin/integrity/report/:type/csv': {
      $get: {
        input: { param: { type: IntegrityReport } }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/integrity/summary': {
      $get: {
        input: {}
        output: IntegrityReportSummaryResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/maintenance': {
      $post: {
        input: { json: SetMaintenanceModeDto }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/maintenance/detect-install': {
      $get: {
        input: {}
        output: MaintenanceDetectInstallResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/maintenance/login': {
      $post: {
        input: { json: MaintenanceLoginDto }
        output: MaintenanceAuthDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/maintenance/status': {
      $get: { input: {}; output: MaintenanceStatusResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/notifications': {
      $post: {
        input: { json: NotificationCreateDto }
        output: NotificationDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/notifications/templates/:name': {
      $post: {
        input: { param: { name: string } } & { json: TemplateDto }
        output: TemplateResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/notifications/templates/:name/preview': {
      $post: {
        input: { param: { name: EmailTemplate } } & { json: TemplateDto }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/admin/notifications/test-email': {
      $post: {
        input: { json: AdminConfigSmtpDto }
        output: TestEmailResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users': {
      $get: {
        input: { query: { id?: string | undefined; withDeleted?: boolean | undefined } }
        output: UserAdminResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: UserAdminCreateDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/users/:id': {
      $delete: {
        input: { param: { id: string } } & { json: UserAdminDeleteDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UserAdminUpdateDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/calendar-heatmap': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            from?: string | undefined
            to?: string | undefined
            type?: CalendarHeatmapType | undefined
          }
        }
        output: CalendarHeatmapResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/preferences': {
      $get: {
        input: { param: { id: string } }
        output: UserPreferencesResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UserPreferencesUpdateDto }
        output: UserPreferencesResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/restore': {
      $post: {
        input: { param: { id: string } }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/sessions': {
      $get: {
        input: { param: { id: string } }
        output: SessionResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/statistics': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            isFavorite?: boolean | undefined
            isTrashed?: boolean | undefined
            visibility?: AssetVisibility | undefined
          }
        }
        output: AssetStatsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums': {
      $get: {
        input: {
          query: {
            assetId?: string | undefined
            id?: string | undefined
            isOwned?: boolean | undefined
            isShared?: boolean | undefined
            name?: string | undefined
          }
        }
        output: AlbumResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateAlbumDto }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/albums/assets': {
      $put: {
        input: { json: AlbumsAddAssetsDto }
        output: AlbumsAddAssetsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums/statistics': {
      $get: { input: {}; output: AlbumStatisticsResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/albums/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateAlbumDto }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: BulkIdsDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BulkIdsDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums/:id/map-markers': {
      $get: {
        input: { param: { id: string } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        }
        output: MapMarkerResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums/:id/user/:userId': {
      $delete: {
        input: { param: { id: string; userId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { id: string; userId: string } } & { json: UpdateAlbumUserDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/albums/:id/users': {
      $put: {
        input: { param: { id: string } } & { json: AddUsersDto }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys': {
      $get: { input: {}; output: ApiKeyResponseDto[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: ApiKeyCreateDto }
        output: ApiKeyCreateResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api-keys/me': {
      $get: { input: {}; output: ApiKeyResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api-keys/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: ApiKeyResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ApiKeyUpdateDto }
        output: ApiKeyResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys/:id/rotate': {
      $post: {
        input: { param: { id: string } }
        output: ApiKeyCreateResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/asset-files': {
      $get: {
        input: {
          query: {
            assetId: string
            isEdited?: boolean | undefined
            isProgressive?: boolean | undefined
            isTransparent?: boolean | undefined
            type?: AssetFileType | undefined
          }
        }
        output: AssetFileResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset-files/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: AssetFileResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset-files/:id/download': {
      $get: { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/assets': {
      $delete: {
        input: { json: AssetBulkDeleteDto }
        output: {}
        outputFormat: string
        status: 204
      }
      $post:
        | {
            input: { query: { key?: string | undefined; slug?: string | undefined } } & {
              header: { 'x-immich-checksum'?: string | undefined }
            } & { form: AssetMediaCreateDto }
            output: AssetMediaResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { key?: string | undefined; slug?: string | undefined } } & {
              header: { 'x-immich-checksum'?: string | undefined }
            } & { form: AssetMediaCreateDto }
            output: AssetMediaResponseDto
            outputFormat: 'json'
            status: 201
          }
      $put: { input: { json: AssetBulkUpdateDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/assets/bulk-upload-check': {
      $post: {
        input: { json: AssetBulkUploadCheckDto }
        output: AssetBulkUploadCheckResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/copy': {
      $put: { input: { json: AssetCopyDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/assets/jobs': {
      $post: { input: { json: AssetJobsDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/assets/metadata': {
      $delete: {
        input: { json: AssetMetadataBulkDeleteDto }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { json: AssetMetadataBulkUpsertDto }
        output: AssetMetadataBulkResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/statistics': {
      $get: {
        input: {
          query: {
            isFavorite?: boolean | undefined
            isTrashed?: boolean | undefined
            visibility?: AssetVisibility | undefined
          }
        }
        output: AssetStatsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        }
        output: AssetResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UpdateAssetDto }
        output: AssetResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id/edits': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: AssetEditsResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AssetEditsCreateDto }
        output: AssetEditsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id/metadata': {
      $get: {
        input: { param: { id: string } }
        output: AssetMetadataResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AssetMetadataUpsertDto }
        output: AssetMetadataResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id/metadata/:key': {
      $delete: {
        input: { param: { id: string; key: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string; key: string } }
        output: AssetMetadataResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id/ocr': {
      $get: {
        input: { param: { id: string } }
        output: AssetOcrResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id/original': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            edited?: boolean | undefined
            key?: string | undefined
            slug?: string | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/assets/:id/thumbnail': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            edited?: boolean | undefined
            key?: string | undefined
            size?: AssetMediaSize | undefined
            slug?: string | undefined
          }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/assets/:id/video/playback': {
      $get: {
        input: { param: { id: string } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/assets/:id/video/stream/main.m3u8': {
      $get: {
        input: { param: { id: string } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/assets/:id/video/stream/:sessionId': {
      $delete: {
        input: { param: { id: string; sessionId: string } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/assets/:id/video/stream/:sessionId/:variantIndex/playlist.m3u8': {
      $get: {
        input: { param: { id: string; sessionId: string; variantIndex: number } } & {
          query: { key?: string | undefined; slug?: string | undefined }
        } & { header: { 'x-immich-hls-pos'?: number | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/assets/:id/video/stream/:sessionId/:variantIndex/:filename': {
      $get: {
        input: {
          param: { filename: string; id: string; sessionId: string; variantIndex: number }
        } & { query: { key?: string | undefined; slug?: string | undefined } } & {
          header: { 'x-immich-hls-msn'?: number | undefined }
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/auth/admin-sign-up': {
      $post: {
        input: { json: SignUpDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/auth/change-password': {
      $post: {
        input: { json: ChangePasswordDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/login': {
      $post: {
        input: { json: LoginCredentialDto }
        output: LoginResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/auth/logout': {
      $post: { input: {}; output: LogoutResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/pin-code': {
      $delete: { input: { json: PinCodeResetDto }; output: {}; outputFormat: string; status: 204 }
      $post: { input: { json: PinCodeSetupDto }; output: {}; outputFormat: string; status: 204 }
      $put: { input: { json: PinCodeChangeDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/auth/session/lock': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/auth/session/unlock': {
      $post: { input: { json: SessionUnlockDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/auth/status': {
      $get: { input: {}; output: AuthStatusResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/auth/validateToken': {
      $post: {
        input: {}
        output: ValidateAccessTokenResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cluster-groups/requests': {
      $get: {
        input: {}
        output: ClusterGroupRequestResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cluster-groups/requests/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/cluster-groups/requests/:id/accept': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/cluster-groups/:id/leave': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/cluster-groups/:id/regenerate-people': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/cluster-groups/:id/requests': {
      $get: {
        input: { param: { id: string } }
        output: ClusterGroupRequestResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: ClusterGroupRequestCreateDto }
        output: ClusterGroupRequestResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cluster-groups/:id/users': {
      $get: {
        input: { param: { id: string } }
        output: UserResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config': { $get: { input: {}; output: UserConfigDto; outputFormat: 'json'; status: 200 } }
  } & {
    '/config/defaults': {
      $get: { input: {}; output: UserConfigDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/download/archive': {
      $post: {
        input: { query: { key?: string | undefined; slug?: string | undefined } } & {
          json: DownloadArchiveDto
        }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/download/info': {
      $post: {
        input: { query: { key?: string | undefined; slug?: string | undefined } } & {
          json: DownloadInfoDto
        }
        output: DownloadResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/duplicates': {
      $delete: { input: { json: BulkIdsDto }; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: DuplicateResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/duplicates/resolve': {
      $post: {
        input: { json: DuplicateResolveDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/duplicates/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/faces': {
      $get: {
        input: { query: { id: string } }
        output: AssetFaceResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: AssetFaceCreateDto }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/faces/:id': {
      $delete: {
        input: { param: { id: string } } & { json: AssetFaceDeleteDto }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { id: string } } & { json: FaceDto }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
      $get: { input: {}; output: QueuesResponseLegacyDto; outputFormat: 'json'; status: 200 }
      $post: { input: { json: JobCreateDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/jobs/:name': {
      $put: {
        input: { param: { name: QueueName } } & { json: QueueCommandDto }
        output: QueueResponseLegacyDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/libraries': {
      $get: { input: {}; output: LibraryResponseDto[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateLibraryDto }
        output: LibraryResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/libraries/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: LibraryResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UpdateLibraryDto }
        output: LibraryResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/libraries/:id/scan': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/libraries/:id/statistics': {
      $get: {
        input: { param: { id: string } }
        output: LibraryStatsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/libraries/:id/validate': {
      $post: {
        input: { param: { id: string } } & { json: ValidateLibraryDto }
        output: ValidateLibraryResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/map/markers': {
      $get: {
        input: {
          query: {
            fileCreatedAfter?: string | undefined
            fileCreatedBefore?: string | undefined
            isArchived?: boolean | undefined
            isFavorite?: boolean | undefined
            withPartners?: boolean | undefined
            withSharedAlbums?: boolean | undefined
          }
        }
        output: MapMarkerResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/map/reverse-geocode': {
      $get: {
        input: { query: { lat: number; lon: number } }
        output: MapReverseGeocodeResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/memories': {
      $get: {
        input: {
          query: {
            for?: string | undefined
            id?: string | undefined
            isSaved?: boolean | undefined
            isTrashed?: boolean | undefined
            isUpcoming?: boolean | undefined
            order?: MemorySearchOrder | undefined
            page?: number | undefined
            size?: number | undefined
            type?: MemoryType | undefined
          }
        }
        output: MemoryResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: MemoryCreateDto }
        output: MemoryResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/memories/statistics': {
      $get: {
        input: {
          query: {
            for?: string | undefined
            id?: string | undefined
            isSaved?: boolean | undefined
            isTrashed?: boolean | undefined
            isUpcoming?: boolean | undefined
            order?: MemorySearchOrder | undefined
            page?: number | undefined
            size?: number | undefined
            type?: MemoryType | undefined
          }
        }
        output: MemoryStatisticsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/memories/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: MemoryResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: MemoryUpdateDto }
        output: MemoryResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/memories/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: BulkIdsDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BulkIdsDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications': {
      $delete: {
        input: { json: NotificationDeleteAllDto }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          query: {
            id?: string | undefined
            level?: NotificationLevel | undefined
            type?: NotificationType | undefined
            unread?: boolean | undefined
          }
        }
        output: NotificationDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: NotificationUpdateAllDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/notifications/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: NotificationDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: NotificationUpdateDto }
        output: NotificationDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/authorize': {
      $post: {
        input: { json: OAuthConfigDto }
        output: OAuthAuthorizeResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/oauth/backchannel-logout': {
      $post: {
        input: { json: OAuthBackchannelLogoutDto } & { form: OAuthBackchannelLogoutDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/callback': {
      $post: {
        input: { json: OAuthCallbackDto }
        output: LoginResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/oauth/link': {
      $post: {
        input: { json: OAuthCallbackDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/mobile-redirect': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/oauth/unlink': {
      $post: { input: {}; output: UserAdminResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/partners': {
      $get: {
        input: { query: { direction: PartnerDirection } }
        output: PartnerResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: PartnerCreateDto }
        output: PartnerResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/partners/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $post: {
        input: { param: { id: string } }
        output: PartnerResponseDto
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { param: { id: string } } & { json: PartnerUpdateDto }
        output: PartnerResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/passkeys': {
      $get: {
        input: { query: { id?: string | undefined } }
        output: PasskeyResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/passkeys/authentication/finish': {
      $post: {
        input: { json: PasskeyAuthenticationFinishDto }
        output: LoginResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/passkeys/authentication/start': {
      $post: {
        input: {}
        output: PasskeyAuthenticationOptionsDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/passkeys/registration/finish': {
      $post: {
        input: { json: PasskeyRegistrationFinishDto }
        output: PasskeyResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/passkeys/registration/start': {
      $post: { input: {}; output: PasskeyRegistrationOptionsDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/passkeys/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: PasskeyResponseDto
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: PasskeyUpdateDto }
        output: PasskeyResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people': {
      $delete: { input: { json: PeopleDeleteDto }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            closestAssetId?: string | undefined
            closestPersonId?: string | undefined
            isFavorite?: boolean | undefined
            isHidden?: boolean | undefined
            name?: string | undefined
            page?: number | undefined
            sharedById?: string | undefined
            sharedWithId?: string | undefined
            size?: number | undefined
            withHidden?: boolean | undefined
          }
        }
        output: PeopleResponseDto
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: PersonCreateDto }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: PeopleUpdateDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/merge': {
      $post: {
        input: { json: MergePersonDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/users': {
      $delete: {
        input: { json: PersonUsersDeleteDto }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            direction?: SharingDirection | undefined
            personId?: string | undefined
            role?: PersonUserRole | undefined
            sharedById?: string | undefined
            sharedWithId?: string | undefined
          }
        }
        output: PersonUsersResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: { input: { json: PeopleUsersUpsertDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/people/:id': {
      $delete: {
        input: { param: { id: string } } & { json: PersonDeleteDto }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string } }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: PersonUpdateDto }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:id/merge': {
      $post: {
        input: { param: { id: string } } & { json: MergePersonDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:id/reassign': {
      $put: {
        input: { param: { id: string } } & { json: AssetFaceUpdateDto }
        output: PersonResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:id/statistics': {
      $get: {
        input: { param: { id: string } }
        output: PersonStatisticsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:id/thumbnail': {
      $get: { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/plugins': {
      $get: {
        input: {
          query: {
            description?: string | undefined
            enabled?: boolean | undefined
            id?: string | undefined
            name?: string | undefined
            title?: string | undefined
            version?: string | undefined
          }
        }
        output: PluginResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/plugins/methods': {
      $get: {
        input: {
          query: {
            description?: string | undefined
            enabled?: boolean | undefined
            id?: string | undefined
            name?: string | undefined
            pluginName?: string | undefined
            pluginVersion?: string | undefined
            title?: string | undefined
            trigger?: WorkflowTrigger | undefined
            type?: WorkflowType | undefined
          }
        }
        output: PluginMethodResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/plugins/templates': {
      $get: { input: {}; output: PluginTemplateResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/plugins/:id': {
      $get: {
        input: { param: { id: string } }
        output: PluginResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/config': {
      $get: { input: {}; output: PublicConfigDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/public/config/defaults': {
      $get: { input: {}; output: PublicConfigDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/queues': {
      $get: { input: {}; output: QueueResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/queues/:name': {
      $get: {
        input: { param: { name: QueueName } }
        output: QueueResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: QueueName } } & { json: QueueUpdateDto }
        output: QueueResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queues/:name/jobs': {
      $delete: {
        input: { param: { name: QueueName } } & { json: QueueDeleteDto }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { name: QueueName } } & { query: { status?: QueueJobStatus[] | undefined } }
        output: QueueJobResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/cities': {
      $get: { input: {}; output: AssetResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/search/explore': {
      $get: { input: {}; output: SearchExploreResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/search/large-assets': {
      $post: {
        input: {
          query: {
            albumIds?: string[] | undefined
            city?: (string | null) | undefined
            country?: (string | null) | undefined
            createdAfter?: string | undefined
            createdBefore?: string | undefined
            isEncoded?: boolean | undefined
            isFavorite?: boolean | undefined
            isMotion?: boolean | undefined
            isNotInAlbum?: boolean | undefined
            isOffline?: boolean | undefined
            lensModel?: (string | null) | undefined
            libraryId?: (string | null) | undefined
            make?: (string | null) | undefined
            minFileSize?: number | undefined
            model?: (string | null) | undefined
            ocr?: string | undefined
            personIds?: string[] | undefined
            rating?: (number | null) | undefined
            size?: number | undefined
            state?: (string | null) | undefined
            tagIds?: (string[] | null) | undefined
            takenAfter?: string | undefined
            takenBefore?: string | undefined
            trashedAfter?: string | undefined
            trashedBefore?: string | undefined
            type?: AssetTypeEnum | undefined
            updatedAfter?: string | undefined
            updatedBefore?: string | undefined
            visibility?: AssetVisibility | undefined
            withDeleted?: boolean | undefined
            withExif?: boolean | undefined
          }
        }
        output: AssetResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/metadata': {
      $post: {
        input: { query: { key?: string | undefined; slug?: string | undefined } } & {
          json: MetadataSearchDto
        }
        output: SearchResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/person': {
      $get: {
        input: { query: { name: string; withHidden?: boolean | undefined } }
        output: PersonResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/places': {
      $get: {
        input: { query: { name: string } }
        output: PlacesResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/random': {
      $post: {
        input: { json: RandomSearchDto }
        output: AssetResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/smart': {
      $post: {
        input: { json: SmartSearchDto }
        output: SearchResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/statistics': {
      $post: {
        input: { json: StatisticsSearchDto }
        output: SearchStatisticsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/suggestions': {
      $get: {
        input: {
          query: {
            country?: string | undefined
            includeNull?: boolean | undefined
            lensModel?: string | undefined
            make?: string | undefined
            model?: string | undefined
            state?: string | undefined
            type: SearchSuggestionType
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/server/about': {
      $get: { input: {}; output: ServerAboutResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/apk-links': {
      $get: { input: {}; output: ServerApkLinksDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/config': {
      $get: { input: {}; output: ServerConfigDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/features': {
      $get: { input: {}; output: ServerFeaturesDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/license': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get:
        | { input: {}; output: UserLicense; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $put: {
        input: { json: LicenseKeyDto }
        output: UserLicense
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/server/media-types': {
      $get: { input: {}; output: ServerMediaTypesResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/ping': {
      $get: { input: {}; output: ServerPingResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/statistics': {
      $get: { input: {}; output: ServerStatsResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/storage': {
      $get: { input: {}; output: ServerStorageResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/version': {
      $get: { input: {}; output: ServerVersionResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/version-check': {
      $get: { input: {}; output: VersionCheckStateResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/server/version-history': {
      $get: {
        input: {}
        output: ServerVersionHistoryResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sessions': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: SessionResponseDto[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: SessionCreateDto }
        output: SessionCreateResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sessions/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: string } } & { json: SessionUpdateDto }
        output: SessionResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sessions/:id/lock': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/shared-links': {
      $get: {
        input: { query: { albumId?: string | undefined; id?: string | undefined } }
        output: SharedLinkResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SharedLinkCreateDto }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/shared-links/login': {
      $post: {
        input: { query: { key?: string | undefined; slug?: string | undefined } } & {
          json: SharedLinkLoginDto
        }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/shared-links/me': {
      $get: {
        input: { query: { key?: string | undefined; slug?: string | undefined } }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shared-links/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: SharedLinkEditDto }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shared-links/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: AssetIdsDto }
        output: AssetIdsResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AssetIdsDto }
        output: AssetIdsResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stacks': {
      $delete: { input: { json: BulkIdsDto }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { query: { primaryAssetId?: string | undefined } }
        output: StackResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: StackCreateDto }
        output: StackResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/stacks/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: StackResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: StackUpdateDto }
        output: StackResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stacks/:id/assets/:assetId': {
      $delete: {
        input: { param: { assetId: string; id: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/sync/ack': {
      $delete: { input: { json: SyncAckDeleteDto }; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: SyncAckDto[]; outputFormat: 'json'; status: 200 }
      $post: { input: { json: SyncAckSetDto }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sync/stream': {
      $post: { input: { json: SyncStreamDto }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/system-config': {
      $get: { input: {}; output: AdminConfigDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: AdminConfigDto }
        output: AdminConfigDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system-config/defaults': {
      $get: { input: {}; output: AdminConfigDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system-config/storage-template-options': {
      $get: {
        input: {}
        output: SystemConfigTemplateStorageOptionDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system-metadata/admin-onboarding': {
      $get: { input: {}; output: AdminOnboardingUpdateDto; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: AdminOnboardingUpdateDto }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/system-metadata/reverse-geocoding-state': {
      $get: {
        input: {}
        output: ReverseGeocodingStateResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/system-metadata/version-check-state': {
      $get: { input: {}; output: VersionCheckStateResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tags': {
      $get: { input: {}; output: TagResponseDto[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: TagCreateDto }
        output: TagResponseDto
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: TagUpsertDto }
        output: TagResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/assets': {
      $put: {
        input: { json: TagBulkAssetsDto }
        output: TagBulkAssetsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: TagResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: TagUpdateDto }
        output: TagResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: BulkIdsDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BulkIdsDto }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/timeline/bucket': {
      $get: {
        input: {
          query: {
            albumId?: string | undefined
            bbox?: string | undefined
            isFavorite?: boolean | undefined
            isTrashed?: boolean | undefined
            key?: string | undefined
            order?: AssetOrder | undefined
            orderBy?: AssetOrderBy | undefined
            personId?: string | undefined
            slug?: string | undefined
            tagId?: string | undefined
            timeBucket: string
            userId?: string | undefined
            visibility?: AssetVisibility | undefined
            withCoordinates?: boolean | undefined
            withPartners?: boolean | undefined
            withStacked?: boolean | undefined
          }
        }
        output: TimeBucketAssetResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/timeline/buckets': {
      $get: {
        input: {
          query: {
            albumId?: string | undefined
            bbox?: string | undefined
            isFavorite?: boolean | undefined
            isTrashed?: boolean | undefined
            key?: string | undefined
            order?: AssetOrder | undefined
            orderBy?: AssetOrderBy | undefined
            personId?: string | undefined
            slug?: string | undefined
            tagId?: string | undefined
            userId?: string | undefined
            visibility?: AssetVisibility | undefined
            withCoordinates?: boolean | undefined
            withPartners?: boolean | undefined
            withStacked?: boolean | undefined
          }
        }
        output: TimeBucketsResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/trash/empty': {
      $post: { input: {}; output: TrashResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/trash/restore': {
      $post: { input: {}; output: TrashResponseDto; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/trash/restore/assets': {
      $post: {
        input: { json: BulkIdsDto }
        output: TrashResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users': { $get: { input: {}; output: UserResponseDto[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/users/me': {
      $get: { input: {}; output: UserAdminResponseDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: UserUpdateMeDto }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/calendar-heatmap': {
      $get: {
        input: {
          query: {
            from?: string | undefined
            to?: string | undefined
            type?: CalendarHeatmapType | undefined
          }
        }
        output: CalendarHeatmapResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/license': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: UserLicense; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: LicenseKeyDto }
        output: UserLicense
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/onboarding': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: OnboardingResponseDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: OnboardingDto }
        output: OnboardingResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/preferences': {
      $get: { input: {}; output: UserPreferencesResponseDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: UserPreferencesUpdateDto }
        output: UserPreferencesResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/profile-image': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $post: {
        input: { form: CreateProfileImageDto }
        output: CreateProfileImageResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:id': {
      $get: {
        input: { param: { id: string } }
        output: UserResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:id/profile-image': {
      $get: { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/view/folder': {
      $get: {
        input: { query: { path: string } }
        output: AssetResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/view/folder/unique-paths': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workflows': {
      $get: {
        input: {
          query: {
            description?: string | undefined
            enabled?: boolean | undefined
            id?: string | undefined
            logging?: boolean | undefined
            name?: string | undefined
            trigger?: WorkflowTrigger | undefined
          }
        }
        output: WorkflowResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WorkflowCreateDto }
        output: WorkflowResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/workflows/triggers': {
      $get: { input: {}; output: WorkflowTriggerResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/workflows/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: WorkflowResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: WorkflowUpdateDto }
        output: WorkflowResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workflows/:id/logs': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            before?: string | undefined
            limit?: number | undefined
            result?: WorkflowResult | undefined
          }
        }
        output: WorkflowLogEntryDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workflows/:id/share': {
      $get: {
        input: { param: { id: string } }
        output: WorkflowShareResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
