type ReactionLevelInput = 'album' | 'asset'
type ReactionTypeInput = 'comment' | 'like'
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
  name: string | null
  profileChangedAt: string
  profileImagePath: string | null
}
type ActivityResponseDto = {
  assetId: string | null
  comment?: (string | null) | undefined
  createdAt: string
  id: string
  type: ReactionType
  user: UserResponseDto
}
type ActivityCreateDtoInput = {
  albumId: string
  assetId?: string
  comment?: string
  type: ReactionTypeInput
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
type AdminConfigDatabaseBackupDtoInput = {
  cronExpression: string
  enabled: boolean
  keepLastAmount: number
}
type AdminConfigBackupsDtoInput = { beta?: boolean; database: AdminConfigDatabaseBackupDtoInput }
type TranscodeHWAccelInput = 'nvenc' | 'qsv' | 'vaapi' | 'rkmpp' | 'disabled'
type AudioCodecInput = 'mp3' | 'aac' | 'opus' | 'pcm_s16le'
type VideoContainerInput = 'mov' | 'mp4' | 'ogg' | 'webm'
type VideoCodecInput = 'h264' | 'hevc' | 'vp9' | 'av1'
type CQModeInput = 'auto' | 'cqp' | 'icq'
type HlsVideoResolutionInput = 480 | 720 | 1080 | 1440 | 2160
type AdminConfigFFmpegRealtimeDtoInput = {
  enabled: boolean
  resolutions: HlsVideoResolutionInput[]
  videoCodecs: VideoCodecInput[]
}
type ToneMappingInput = 'hable' | 'mobius' | 'reinhard' | 'disabled'
type TranscodePolicyInput = 'all' | 'optimal' | 'bitrate' | 'required' | 'disabled'
type AdminConfigFFmpegDtoInput = {
  accel: TranscodeHWAccelInput
  accelDecode: boolean
  acceptedAudioCodecs: AudioCodecInput[]
  acceptedContainers: VideoContainerInput[]
  acceptedVideoCodecs: VideoCodecInput[]
  bframes: number
  cqMode: CQModeInput
  crf: number
  gopSize: number
  maxBitrate: string
  preferredHwDevice: string
  preset: string
  realtime: AdminConfigFFmpegRealtimeDtoInput
  refs: number
  targetAudioCodec: AudioCodecInput
  targetResolution: string
  targetVideoCodec: VideoCodecInput
  temporalAQ: boolean
  threads: number
  tonemap: ToneMappingInput
  transcode: TranscodePolicyInput
  twoPass: boolean
}
type ColorspaceInput = 'srgb' | 'p3'
type ImageEffortInput = 'low' | 'medium' | 'high' | 'max'
type ImageFormatInput = 'jpeg' | 'jxl' | 'webp'
type AdminConfigGeneratedFullsizeImageDtoInput = {
  effort: ImageEffortInput
  enabled: boolean
  format: ImageFormatInput
  progressive?: boolean
  quality: number
}
type AdminConfigGeneratedImageDtoInput = {
  effort: ImageEffortInput
  format: ImageFormatInput
  progressive?: boolean
  quality: number
  size: number
}
type AdminConfigImageDtoInput = {
  colorspace: ColorspaceInput
  extractEmbedded: boolean
  fullsize: AdminConfigGeneratedFullsizeImageDtoInput
  preview: AdminConfigGeneratedImageDtoInput
  thumbnail: AdminConfigGeneratedImageDtoInput
}
type AdminConfigIntegrityChecksumJobDtoInput = {
  cronExpression: string
  enabled: boolean
  percentageLimit: number
  timeLimit: number
}
type AdminConfigIntegrityJobDtoInput = { cronExpression: string; enabled: boolean }
type AdminConfigIntegrityChecksDtoInput = {
  checksumFiles: AdminConfigIntegrityChecksumJobDtoInput
  missingFiles: AdminConfigIntegrityJobDtoInput
  untrackedFiles: AdminConfigIntegrityJobDtoInput
}
type AdminConfigJobSettingsDtoInput = { concurrency: number }
type AdminConfigJobDtoInput = {
  backgroundTask: AdminConfigJobSettingsDtoInput
  editor: AdminConfigJobSettingsDtoInput
  faceDetection: AdminConfigJobSettingsDtoInput
  integrityCheck: AdminConfigJobSettingsDtoInput
  library: AdminConfigJobSettingsDtoInput
  metadataExtraction: AdminConfigJobSettingsDtoInput
  migration: AdminConfigJobSettingsDtoInput
  notifications: AdminConfigJobSettingsDtoInput
  ocr: AdminConfigJobSettingsDtoInput
  search: AdminConfigJobSettingsDtoInput
  sidecar: AdminConfigJobSettingsDtoInput
  smartSearch: AdminConfigJobSettingsDtoInput
  thumbnailGeneration: AdminConfigJobSettingsDtoInput
  videoConversion: AdminConfigJobSettingsDtoInput
  workflow: AdminConfigJobSettingsDtoInput
}
type AdminConfigLibraryScanDtoInput = { cronExpression: string; enabled: boolean }
type AdminConfigLibraryWatchDtoInput = { enabled: boolean }
type AdminConfigLibraryDtoInput = {
  scan: AdminConfigLibraryScanDtoInput
  watch: AdminConfigLibraryWatchDtoInput
}
type LogLevelInput = 'verbose' | 'debug' | 'log' | 'warn' | 'error' | 'fatal'
type AdminConfigLoggingDtoInput = { enabled: boolean; level: LogLevelInput }
type AdminConfigMachineLearningAvailabilityChecksDtoInput = {
  enabled: boolean
  interval: number
  timeout: number
}
type AdminConfigClipDtoInput = { enabled: boolean; modelName: string }
type AdminConfigDuplicateDetectionDtoInput = { enabled: boolean; maxDistance: number }
type AdminConfigFacialRecognitionDtoInput = {
  enabled: boolean
  maxDistance: number
  minFaces: number
  minScore: number
  modelName: string
}
type AdminConfigOcrDtoInput = {
  enabled: boolean
  maxResolution: number
  minDetectionScore: number
  minRecognitionScore: number
  modelName: string
}
type AdminConfigMachineLearningDtoInput = {
  availabilityChecks: AdminConfigMachineLearningAvailabilityChecksDtoInput
  clip: AdminConfigClipDtoInput
  duplicateDetection: AdminConfigDuplicateDetectionDtoInput
  enabled: boolean
  facialRecognition: AdminConfigFacialRecognitionDtoInput
  ocr: AdminConfigOcrDtoInput
  urls: string[]
}
type AdminConfigMapDtoInput = { darkStyle: string; enabled: boolean; lightStyle: string }
type AdminConfigFacesDtoInput = { import: boolean }
type AdminConfigMetadataDtoInput = { faces: AdminConfigFacesDtoInput }
type ReleaseChannelInput = 'stable' | 'releaseCandidate'
type AdminConfigNewVersionCheckDtoInput = { channel: ReleaseChannelInput; enabled: boolean }
type AdminConfigNightlyTasksDtoInput = {
  clusterNewFaces: boolean
  databaseCleanup: boolean
  generateMemories: boolean
  missingThumbnails: boolean
  startTime: string
  syncQuotaUsage: boolean
}
type AdminConfigSmtpTransportDtoInput = {
  host: string
  ignoreCert: boolean
  password: string
  port: number
  secure: boolean
  username: string
}
type AdminConfigSmtpDtoInput = {
  enabled: boolean
  from: string
  replyTo: string
  transport: AdminConfigSmtpTransportDtoInput
}
type AdminConfigNotificationsDtoInput = { smtp: AdminConfigSmtpDtoInput }
type OAuthTokenEndpointAuthMethodInput = 'client_secret_post' | 'client_secret_basic'
type AdminConfigOAuthDtoInput = {
  accountManagementUrl?: string
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
  tokenEndpointAuthMethod: OAuthTokenEndpointAuthMethodInput
}
type AdminConfigPasskeyDtoInput = {
  additionalDomains: string[]
  domain: string | null
  enabled: boolean
}
type AdminConfigPasswordLoginDtoInput = { enabled: boolean }
type AdminConfigReverseGeocodingDtoInput = { enabled: boolean }
type AdminConfigServerDtoInput = {
  externalDomain: string
  loginPageMessage: string
  publicUsers: boolean
}
type AdminConfigStorageTemplateDtoInput = {
  enabled: boolean
  hashVerificationEnabled: boolean
  template: string
}
type AdminConfigTemplateEmailsDtoInput = {
  albumInviteTemplate: string
  albumUpdateTemplate: string
  welcomeTemplate: string
}
type AdminConfigTemplatesDtoInput = { email: AdminConfigTemplateEmailsDtoInput }
type AdminConfigThemeDtoInput = { customCss: string }
type AdminConfigTrashDtoInput = { days: number; enabled: boolean }
type AdminConfigUserDtoInput = { deleteDelay: number }
type AdminConfigDtoInput = {
  backup: AdminConfigBackupsDtoInput
  ffmpeg: AdminConfigFFmpegDtoInput
  image: AdminConfigImageDtoInput
  integrityChecks: AdminConfigIntegrityChecksDtoInput
  job: AdminConfigJobDtoInput
  library: AdminConfigLibraryDtoInput
  logging: AdminConfigLoggingDtoInput
  machineLearning: AdminConfigMachineLearningDtoInput
  map: AdminConfigMapDtoInput
  metadata: AdminConfigMetadataDtoInput
  newVersionCheck: AdminConfigNewVersionCheckDtoInput
  nightlyTasks: AdminConfigNightlyTasksDtoInput
  notifications: AdminConfigNotificationsDtoInput
  oauth: AdminConfigOAuthDtoInput
  passkey: AdminConfigPasskeyDtoInput
  passwordLogin: AdminConfigPasswordLoginDtoInput
  reverseGeocoding: AdminConfigReverseGeocodingDtoInput
  server: AdminConfigServerDtoInput
  storageTemplate: AdminConfigStorageTemplateDtoInput
  templates: AdminConfigTemplatesDtoInput
  theme: AdminConfigThemeDtoInput
  trash: AdminConfigTrashDtoInput
  user: AdminConfigUserDtoInput
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
type StorageTemplatePreviewDtoInput = { template: string }
type StorageTemplatePreviewResponseDto = { preview: string }
type DatabaseBackupDeleteDtoInput = { backups: string[] }
type DatabaseBackupDto = { filename: string; filesize: number; timezone: string }
type DatabaseBackupListResponseDto = { backups: DatabaseBackupDto[] }
type DatabaseBackupUploadDtoInput = { file?: File }
type IntegrityReportInput = 'untracked_file' | 'missing_file' | 'checksum_mismatch'
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
type MaintenanceActionInput =
  | 'start'
  | 'end'
  | 'select_database_restore'
  | 'restore_database'
  | 'rollback'
type SetMaintenanceModeDtoInput = {
  action: MaintenanceActionInput
  restoreBackupFilename?: string
  rollbackRepositoryId?: string
  rollbackSnapshotId?: string
}
type StorageFolder = 'encoded-video' | 'library' | 'upload' | 'profile' | 'thumbs' | 'backups'
type MaintenanceDetectInstallStorageFolderDto = {
  files: number
  folder: StorageFolder
  readable: boolean
  writable: boolean
}
type MaintenanceDetectInstallResponseDto = { storage: MaintenanceDetectInstallStorageFolderDto[] }
type MaintenanceLoginDtoInput = { token?: string }
type MaintenanceAuthDto = { username: string }
type MaintenanceAction =
  | 'start'
  | 'end'
  | 'select_database_restore'
  | 'restore_database'
  | 'rollback'
type MaintenanceStatusResponseDto = {
  action: MaintenanceAction
  active: boolean
  error?: string | undefined
  futoBackupsJobId?: string | undefined
  progress?: number | undefined
  task?: string | undefined
}
type NotificationLevelInput = 'success' | 'error' | 'warning' | 'info'
type NotificationTypeInput =
  | 'JobFailed'
  | 'BackupFailed'
  | 'SystemMessage'
  | 'AlbumInvite'
  | 'AlbumUpdate'
  | 'ClusterGroupRequest'
  | 'Custom'
type NotificationCreateDtoInput = {
  data?: { [key: string]: any }
  description?: string | null
  level?: NotificationLevelInput
  readAt?: string | null
  title: string
  type?: NotificationTypeInput
  userId: string
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
type NotificationDto = {
  createdAt: string
  data?: { [key: string]: any } | undefined
  description?: string | undefined
  id: string
  level: NotificationLevel
  readAt?: string | undefined
  title: string
  type: NotificationType
}
type TemplateDtoInput = { template: string }
type TemplateResponseDto = { html: string; name: string }
type EmailTemplateInput = 'test' | 'welcome' | 'reset-password' | 'album-invite' | 'album-update'
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
  license: UserLicense | null
  name: string | null
  oauthId: string | null
  profileChangedAt: string
  profileImagePath: string | null
  quotaSizeInBytes: number | null
  quotaUsageInBytes: number | null
  shouldChangePassword: boolean
  status: UserStatus
  storageLabel: string | null
  updatedAt: string
}
type UserAvatarColorInput =
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
type UserAdminCreateDtoInput = {
  avatarColor?: UserAvatarColorInput | null
  email: string
  isAdmin?: boolean
  name: string | null
  notify?: boolean
  password: string
  pinCode?: string | null
  quotaSizeInBytes?: number | null
  shouldChangePassword?: boolean
  storageLabel?: string | null
}
type UserAdminDeleteDtoInput = { force?: boolean }
type UserAdminUpdateDtoInput = {
  avatarColor?: UserAvatarColorInput | null
  email?: string
  isAdmin?: boolean
  name?: string | null
  password?: string
  pinCode?: string | null
  quotaSizeInBytes?: number | null
  shouldChangePassword?: boolean
  storageLabel?: string | null
}
type CalendarHeatmapTypeInput = 'Upload' | 'Taken'
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
type AssetOrderInput = 'asc' | 'desc'
type AlbumsUpdateInput = { defaultAssetOrder?: AssetOrderInput }
type AvatarUpdateInput = { color?: UserAvatarColorInput }
type CastUpdateInput = { gCastEnabled?: boolean }
type DownloadUpdateInput = { archiveSize?: number; includeEmbeddedVideos?: boolean }
type EmailNotificationsUpdateInput = {
  albumInvite?: boolean
  albumUpdate?: boolean
  enabled?: boolean
}
type FoldersUpdateInput = { enabled?: boolean; sidebarWeb?: boolean }
type MemoriesUpdateInput = { duration?: number; enabled?: boolean; sidebarWeb?: boolean }
type PersonUpdateStrategyInput = 'self' | 'everyone'
type PeopleUpdateInput = {
  enabled?: boolean
  minimumFaces?: number
  sidebarWeb?: boolean
  updateStrategy?: PersonUpdateStrategyInput
}
type PurchaseUpdateInput = { hideBuyButtonUntil?: string; showSupportBadge?: boolean }
type RatingsUpdateInput = { enabled?: boolean }
type RecentlyAddedUpdateInput = { sidebarWeb?: boolean }
type SharedLinksUpdateInput = { enabled?: boolean; sidebarWeb?: boolean }
type TagsUpdateInput = { enabled?: boolean; sidebarWeb?: boolean }
type UserPreferencesUpdateDtoInput = {
  albums?: AlbumsUpdateInput
  avatar?: AvatarUpdateInput
  cast?: CastUpdateInput
  download?: DownloadUpdateInput
  emailNotifications?: EmailNotificationsUpdateInput
  folders?: FoldersUpdateInput
  memories?: MemoriesUpdateInput
  people?: PeopleUpdateInput
  purchase?: PurchaseUpdateInput
  ratings?: RatingsUpdateInput
  recentlyAdded?: RecentlyAddedUpdateInput
  sharedLinks?: SharedLinksUpdateInput
  tags?: TagsUpdateInput
}
type SessionResponseDto = {
  appVersion: string | null
  createdAt: string
  current: boolean
  deviceOS: string | null
  deviceType: string | null
  expiresAt?: string | undefined
  id: string
  isPendingSyncReset: boolean
  updatedAt: string
}
type AssetVisibilityInput = 'archive' | 'timeline' | 'hidden' | 'locked'
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
  description: string | null
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
type AlbumUserRoleInput = 'editor' | 'owner' | 'viewer'
type AlbumUserCreateDtoInput = { role: AlbumUserRoleInput; userId: string }
type CreateAlbumDtoInput = {
  albumName: string
  albumUsers?: AlbumUserCreateDtoInput[]
  assetIds?: string[]
  description?: string | null
}
type AlbumsAddAssetsDtoInput = { albumIds: string[]; assetIds: string[] }
type BulkIdErrorReason = 'duplicate' | 'no_permission' | 'not_found' | 'unknown' | 'validation'
type AlbumsAddAssetsResponseDto = { error?: BulkIdErrorReason | undefined; success: boolean }
type AlbumStatisticsResponseDto = { notShared: number; owned: number; shared: number }
type UpdateAlbumDtoInput = {
  albumName?: string
  albumThumbnailAssetId?: string
  description?: string | null
  isActivityEnabled?: boolean
  order?: AssetOrderInput
}
type BulkIdsDtoInput = { ids: string[] }
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
type UpdateAlbumUserDtoInput = { role: AlbumUserRoleInput }
type AlbumUserAddDtoInput = { role?: AlbumUserRoleInput; userId: string }
type AddUsersDtoInput = { albumUsers: AlbumUserAddDtoInput[] }
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
type PermissionInput =
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
type ApiKeyCreateDtoInput = { name?: string; permissions: PermissionInput[] }
type ApiKeyCreateResponseDto = {
  apiKey: ApiKeyResponseDto
  createdAt: string
  id: string
  name: string
  permissions: Permission[]
  secret: string
  updatedAt: string
}
type ApiKeyUpdateDtoInput = { name?: string; permissions?: PermissionInput[] }
type AssetFileTypeInput = 'fullsize' | 'preview' | 'thumbnail' | 'sidecar' | 'encoded_video'
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
type AssetBulkDeleteDtoInput = { force?: boolean; ids: string[] }
type AssetMetadataUpsertItemDtoInput = { key: string; value: { [key: string]: any } }
type AssetMediaCreateDtoInput = {
  assetData: File
  duration?: number
  fileCreatedAt: string
  fileModifiedAt: string
  filename?: string
  isFavorite?: boolean
  livePhotoVideoId?: string
  metadata?: AssetMetadataUpsertItemDtoInput[]
  sidecarData?: File
  visibility?: AssetVisibilityInput
}
type AssetMediaStatus = 'created' | 'duplicate'
type AssetMediaResponseDto = { id: string; status: AssetMediaStatus }
type AssetBulkUpdateDtoInput = {
  dateTimeOriginal?: string
  dateTimeRelative?: number
  description?: string | null
  duplicateId?: string | null
  ids: string[]
  isFavorite?: boolean
  latitude?: number
  longitude?: number
  rating?: number | null
  timeZone?: string
  visibility?: AssetVisibilityInput
}
type AssetBulkUploadCheckItemInput = { checksum: string; id: string }
type AssetBulkUploadCheckDtoInput = { assets: AssetBulkUploadCheckItemInput[] }
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
type AssetCopyDtoInput = {
  albums?: boolean
  favorite?: boolean
  sharedLinks?: boolean
  sidecar?: boolean
  sourceId: string
  stack?: boolean
  targetId: string
}
type AssetJobNameInput =
  | 'refresh-faces'
  | 'refresh-metadata'
  | 'regenerate-thumbnail'
  | 'transcode-video'
type AssetJobsDtoInput = { assetIds: string[]; name: AssetJobNameInput }
type AssetMetadataBulkDeleteItemDtoInput = { assetId: string; key: string }
type AssetMetadataBulkDeleteDtoInput = { items: AssetMetadataBulkDeleteItemDtoInput[] }
type AssetMetadataBulkUpsertItemDtoInput = {
  assetId: string
  key: string
  value: { [key: string]: any }
}
type AssetMetadataBulkUpsertDtoInput = { items: AssetMetadataBulkUpsertItemDtoInput[] }
type AssetMetadataBulkResponseDto = {
  assetId: string
  key: string
  updatedAt: string
  value: { [key: string]: any }
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
  name: string | null
  role: PersonUserRole
  sharedById: string
}
type PeopleUserResponseDto = {
  avatarColor: UserAvatarColor
  email: string
  id: string
  name: string | null
  profileChangedAt: string
  profileImagePath: string | null
  role: PersonUserRole
}
type PersonResponseDto = {
  birthDate: string | null
  color?: string | undefined
  id: string
  isFavorite?: boolean | undefined
  isHidden: boolean
  name: string | null
  otherPeople: PersonOtherResponseDto[]
  sharedBy: PeopleUserResponseDto[]
  sharedWith: PeopleUserResponseDto[]
  thumbnailPath: string | null
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
type AssetVisibility = 'archive' | 'timeline' | 'hidden' | 'locked'
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
  stack?: (AssetStackResponseDto | null) | undefined
  tags?: TagResponseDto[] | undefined
  thumbhash: string | null
  type: AssetTypeEnum
  updatedAt: string
  visibility: AssetVisibility
  width: number | null
}
type UpdateAssetDtoInput = {
  dateTimeOriginal?: string
  description?: string | null
  isFavorite?: boolean
  latitude?: number
  livePhotoVideoId?: string | null
  longitude?: number
  rating?: number | null
  visibility?: AssetVisibilityInput
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
type AssetEditActionInput = 'crop' | 'rotate' | 'mirror'
type CropParametersInput = { height: number; width: number; x: number; y: number }
type RotateParametersInput = { angle: number }
type MirrorAxisInput = 'horizontal' | 'vertical'
type MirrorParametersInput = { axis: MirrorAxisInput }
type AssetEditActionItemDtoInput = {
  action: AssetEditActionInput
  parameters: CropParametersInput | RotateParametersInput | MirrorParametersInput
}
type AssetEditsCreateDtoInput = { edits: AssetEditActionItemDtoInput[] }
type AssetMetadataResponseDto = { key: string; updatedAt: string; value: { [key: string]: any } }
type AssetMetadataUpsertDtoInput = { items: AssetMetadataUpsertItemDtoInput[] }
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
type AssetMediaSizeInput = 'fullsize' | 'preview' | 'thumbnail'
type SignUpDtoInput = { email: string; name: string | null; password: string }
type ChangePasswordDtoInput = {
  invalidateSessions?: boolean
  newPassword: string
  password: string
}
type AuthCodeCreateDtoInput = { codeChallenge: string }
type AuthCodeResponseDto = { code: string }
type AuthCodeExchangeDtoInput = { code: string; codeVerifier: string }
type LoginResponseDto = {
  accessToken: string
  isAdmin: boolean
  isOnboarded: boolean
  name: string | null
  profileImagePath: string | null
  shouldChangePassword: boolean
  userEmail: string
  userId: string
}
type LoginCredentialDtoInput = { email: string; password: string }
type LogoutResponseDto = { redirectUri: string; successful: boolean }
type PinCodeResetDtoInput = { password?: string; pinCode?: string }
type PinCodeSetupDtoInput = { pinCode: string }
type PinCodeChangeDtoInput = { newPinCode: string; password?: string; pinCode?: string }
type SessionUnlockDtoInput = { password?: string; pinCode?: string }
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
type ClusterGroupRequestCreateDtoInput = { userId: string }
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
type DownloadArchiveDtoInput = { archiveName?: string; assetIds: string[]; edited?: boolean }
type DownloadInfoDtoInput = {
  albumId?: string
  archiveSize?: number
  assetIds?: string[]
  userId?: string
}
type DownloadArchiveInfo = { assetIds: string[]; size: number }
type DownloadResponseDto = { archives: DownloadArchiveInfo[]; totalSize: number }
type DuplicateResponseDto = {
  assets: AssetResponseDto[]
  duplicateId: string
  suggestedKeepAssetIds: string[]
}
type DuplicateResolveGroupDtoInput = {
  duplicateId: string
  keepAssetIds: string[]
  trashAssetIds: string[]
}
type DuplicateResolveDtoInput = { groups: DuplicateResolveGroupDtoInput[] }
type SourceType = 'machine-learning' | 'exif' | 'manual'
type AssetFaceResponseDto = {
  boundingBoxX1: number
  boundingBoxX2: number
  boundingBoxY1: number
  boundingBoxY2: number
  id: string
  imageHeight: number
  imageWidth: number
  person: PersonResponseDto | null
  sourceType?: SourceType | undefined
}
type AssetFaceCreateDtoInput = {
  assetId: string
  height: number
  imageHeight: number
  imageWidth: number
  personId: string
  userId?: string
  width: number
  x: number
  y: number
}
type AssetFaceDeleteDtoInput = { force: boolean }
type FaceDtoInput = { id: string }
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
type ManualJobNameInput =
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
type JobCreateDtoInput = { name: ManualJobNameInput }
type QueueNameInput =
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
type QueueCommandInput = 'start' | 'pause' | 'resume' | 'empty' | 'clear-failed'
type QueueCommandDtoInput = { command: QueueCommandInput; force?: boolean }
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
type CreateLibraryDtoInput = {
  exclusionPatterns?: string[]
  importPaths?: string[]
  name?: string
  ownerId: string
}
type UpdateLibraryDtoInput = { exclusionPatterns?: string[]; importPaths?: string[]; name?: string }
type LibraryStatsResponseDto = { photos: number; total: number; usage: number; videos: number }
type ValidateLibraryDtoInput = { exclusionPatterns?: string[]; importPaths?: string[] }
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
type MemorySearchOrderInput = 'asc' | 'desc' | 'random'
type MemoryTypeInput = 'on_this_day' | 'birthday'
type MemoryDataDto = {
  personId?: string | undefined
  personName?: string | undefined
  year: number
}
type MemoryType = 'on_this_day' | 'birthday'
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
type MemoryDataDtoInput = { personId?: string; personName?: string; year: number }
type MemoryCreateDtoInput = {
  assetIds?: string[]
  data: MemoryDataDtoInput
  hideAt?: string
  isSaved?: boolean
  memoryAt: string
  seenAt?: string
  showAt?: string
  type: MemoryTypeInput
}
type MemoryStatisticsResponseDto = { total: number }
type MemoryUpdateDtoInput = { isSaved?: boolean; memoryAt?: string; seenAt?: string }
type NotificationDeleteAllDtoInput = { ids: string[] }
type NotificationUpdateAllDtoInput = { ids: string[]; readAt?: string | null }
type NotificationUpdateDtoInput = { readAt?: string | null }
type OAuthConfigDtoInput = { codeChallenge?: string; redirectUri: string; state?: string }
type OAuthAuthorizeResponseDto = { url: string }
type OAuthBackchannelLogoutDtoInput = { logout_token: string }
type OAuthCallbackDtoInput = { codeVerifier?: string; state?: string; url: string }
type PartnerDirectionInput = 'shared-by' | 'shared-with'
type PartnerResponseDto = {
  avatarColor: UserAvatarColor
  email: string
  id: string
  inTimeline?: boolean | undefined
  name: string | null
  profileChangedAt: string
  profileImagePath: string | null
}
type PartnerCreateDtoInput = { sharedWithId: string }
type PartnerUpdateDtoInput = { inTimeline: boolean }
type PasskeyResponseDto = {
  createdAt: string
  id: string
  name: string | null
  updatedAt: string
  usedAt: string | null
}
type PasskeyAuthenticationFinishDtoInput = {
  response: { id: string; response: { userHandle?: string } }
}
type PasskeyAuthenticationOptionsDto = { [key: string]: any }
type PasskeyRegistrationFinishDtoInput = { name?: string; response: any }
type PasskeyRegistrationOptionsDto = { [key: string]: any }
type PasskeyUpdateDtoInput = { name: string | null }
type PeopleDeleteDtoInput = { ids: string[]; userId?: string }
type PeopleResponseDto = {
  hasNextPage?: boolean | undefined
  hidden: number
  people: PersonResponseDto[]
  total: number
}
type PersonCreateDtoInput = {
  birthDate?: string | null
  color?: string | null
  isFavorite?: boolean
  isHidden?: boolean
  name?: string | null
}
type PeopleUpdateItemInput = {
  birthDate?: string | null
  color?: string | null
  featureFaceAssetId?: string
  id: string
  isFavorite?: boolean
  isHidden?: boolean
  name?: string | null
  userId?: string
}
type PeopleUpdateDtoInput = { people: PeopleUpdateItemInput[] }
type MergePersonDtoInput = { ids: string[] }
type PersonUsersDeleteDtoInput = { personId: string; sharedById?: string; sharedWithId: string }[]
type SharingDirectionInput = 'shared-by' | 'shared-with'
type PersonUserRoleInput = 'read' | 'write' | 'admin'
type PersonUsersResponseDto = {
  personId: string
  role: PersonUserRole
  sharedBy: UserResponseDto
  sharedById: string
  sharedWith: UserResponseDto
  sharedWithId: string
}[]
type PeopleUsersUpsertTypeInput = 'everyone'
type PeopleUsersUpsertDtoInput = {
  personIds?: string[]
  role: PersonUserRoleInput
  sharedWithIds: string[]
  type?: PeopleUsersUpsertTypeInput
}
type PersonDeleteDtoInput = { userId?: string }
type PersonUpdateDtoInput = {
  birthDate?: string | null
  color?: string | null
  featureFaceAssetId?: string
  isFavorite?: boolean
  isHidden?: boolean
  name?: string | null
  userId?: string
}
type AssetFaceUpdateItemInput = { assetId: string; personId: string; userId?: string }
type AssetFaceUpdateDtoInput = { data: AssetFaceUpdateItemInput[] }
type PersonStatisticsResponseDto = { assets: number }
type WorkflowType = 'AssetV1'
type PluginMethodResponseDto = {
  description: string
  hostFunctions: boolean
  key: string
  name: string
  schema?: { [key: string]: unknown } | undefined
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
type WorkflowTriggerInput =
  | 'AssetCreate'
  | 'AssetMetadataExtraction'
  | 'AssetOcrExtraction'
  | 'AssetTagged'
type WorkflowTypeInput = 'AssetV1'
type PluginTemplateStepResponseDto = {
  config: { [key: string]: any } | null
  enabled?: boolean | undefined
  method: string
}
type WorkflowTrigger =
  | 'AssetCreate'
  | 'AssetMetadataExtraction'
  | 'AssetOcrExtraction'
  | 'AssetTagged'
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
type QueueResponseDto = { isPaused: boolean; name: QueueName; statistics: QueueStatisticsDto }
type QueueUpdateDtoInput = { isPaused?: boolean }
type QueueDeleteDtoInput = { failed?: boolean }
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
  data: { [key: string]: any }
  id?: string | undefined
  name: JobName
  timestamp: number
}
type SearchExploreItem = { data: AssetResponseDto; value: string }
type SearchExploreResponseDto = { fieldName: string; items: SearchExploreItem[] }
type AssetTypeEnumInput = 'IMAGE' | 'VIDEO' | 'AUDIO' | 'OTHER'
type IdsFilterInput = { all?: string[]; any?: string[]; none?: string[] }
type StringFilterInput = { eq?: string; in?: string[]; ne?: string; notIn?: string[] }
type StringFilterNullableInput = {
  eq?: string | null
  in?: string[]
  ne?: string | null
  notIn?: string[]
}
type DateFilterInput = {
  eq?: string
  gt?: string
  gte?: string
  lt?: string
  lte?: string
  ne?: string
}
type StringPatternFilterInput = {
  endsWith?: string
  eq?: string | null
  in?: string[]
  like?: string
  ne?: string | null
  notIn?: string[]
  notLike?: string
  startsWith?: string
}
type NumberFilterInput = {
  eq?: number
  gt?: number
  gte?: number
  in?: number[]
  lt?: number
  lte?: number
  ne?: number
  notIn?: number[]
}
type BoolFilterInput = { eq: boolean }
type IdFilterInput = { eq?: string; ne?: string }
type IdFilterNullableInput = { eq?: string | null; ne?: string | null }
type StringSimilarityFilterInput = { matches: string }
type NumberFilterNullableInput = {
  eq?: number | null
  gt?: number
  gte?: number
  in?: number[]
  lt?: number
  lte?: number
  ne?: number | null
  notIn?: number[]
}
type DateFilterNullableInput = {
  eq?: string | null
  gt?: string
  gte?: string
  lt?: string
  lte?: string
  ne?: string | null
}
type EnumFilterAssetTypeInput = {
  eq?: AssetTypeEnumInput
  in?: AssetTypeEnumInput[]
  ne?: AssetTypeEnumInput
  notIn?: AssetTypeEnumInput[]
}
type EnumFilterAssetVisibilityInput = {
  eq?: AssetVisibilityInput
  in?: AssetVisibilityInput[]
  ne?: AssetVisibilityInput
  notIn?: AssetVisibilityInput[]
}
type SearchFilterBranchInput = {
  albumIds?: IdsFilterInput
  checksum?: StringFilterInput
  city?: StringFilterNullableInput
  country?: StringFilterNullableInput
  createdAt?: DateFilterInput
  description?: StringPatternFilterInput
  encodedVideoPath?: StringFilterInput
  fileSizeInBytes?: NumberFilterInput
  hasAlbums?: BoolFilterInput
  hasPeople?: BoolFilterInput
  hasTags?: BoolFilterInput
  id?: IdFilterInput
  isEncoded?: BoolFilterInput
  isFavorite?: BoolFilterInput
  isMotion?: BoolFilterInput
  isOffline?: BoolFilterInput
  lensModel?: StringFilterNullableInput
  libraryId?: IdFilterNullableInput
  make?: StringFilterNullableInput
  model?: StringFilterNullableInput
  ocr?: StringSimilarityFilterInput
  originalFileName?: StringPatternFilterInput
  originalPath?: StringPatternFilterInput
  personIds?: IdsFilterInput
  rating?: NumberFilterNullableInput
  state?: StringFilterNullableInput
  tagIds?: IdsFilterInput
  takenAt?: DateFilterInput
  trashedAt?: DateFilterNullableInput
  type?: EnumFilterAssetTypeInput
  updatedAt?: DateFilterInput
  visibility?: EnumFilterAssetVisibilityInput
}
type SearchFilterInput = {
  albumIds?: IdsFilterInput
  checksum?: StringFilterInput
  city?: StringFilterNullableInput
  country?: StringFilterNullableInput
  createdAt?: DateFilterInput
  description?: StringPatternFilterInput
  encodedVideoPath?: StringFilterInput
  fileSizeInBytes?: NumberFilterInput
  hasAlbums?: BoolFilterInput
  hasPeople?: BoolFilterInput
  hasTags?: BoolFilterInput
  id?: IdFilterInput
  isEncoded?: BoolFilterInput
  isFavorite?: BoolFilterInput
  isMotion?: BoolFilterInput
  isOffline?: BoolFilterInput
  lensModel?: StringFilterNullableInput
  libraryId?: IdFilterNullableInput
  make?: StringFilterNullableInput
  model?: StringFilterNullableInput
  ocr?: StringSimilarityFilterInput
  or?: SearchFilterBranchInput[]
  originalFileName?: StringPatternFilterInput
  originalPath?: StringPatternFilterInput
  personIds?: IdsFilterInput
  rating?: NumberFilterNullableInput
  state?: StringFilterNullableInput
  tagIds?: IdsFilterInput
  takenAt?: DateFilterInput
  trashedAt?: DateFilterNullableInput
  type?: EnumFilterAssetTypeInput
  updatedAt?: DateFilterInput
  visibility?: EnumFilterAssetVisibilityInput
}
type SearchOrderFieldInput = 'fileCreatedAt' | 'localDateTime' | 'fileSizeInBytes' | 'rating'
type SearchOrderInput = { direction?: AssetOrderInput; field?: SearchOrderFieldInput }
type MetadataSearchDtoInput = {
  albumIds?: string[]
  checksum?: string
  city?: string | null
  country?: string | null
  createdAfter?: string
  createdBefore?: string
  cursor?: string
  description?: string
  encodedVideoPath?: string
  filter?: SearchFilterInput
  id?: string
  isEncoded?: boolean
  isFavorite?: boolean
  isMotion?: boolean
  isNotInAlbum?: boolean
  isOffline?: boolean
  lensModel?: string | null
  libraryId?: string | null
  make?: string | null
  model?: string | null
  ocr?: string
  order?: AssetOrderInput
  orderBy?: SearchOrderInput
  originalFileName?: string
  originalPath?: string
  page?: number
  personIds?: string[]
  previewPath?: string
  rating?: number | null
  size?: number
  state?: string | null
  tagIds?: string[] | null
  takenAfter?: string
  takenBefore?: string
  thumbnailPath?: string
  trashedAfter?: string
  trashedBefore?: string
  type?: AssetTypeEnumInput
  updatedAfter?: string
  updatedBefore?: string
  visibility?: AssetVisibilityInput
  withDeleted?: boolean
  withExif?: boolean
  withPeople?: boolean
  withStacked?: boolean
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
}
type SearchResponseDto = { albums: SearchAlbumResponseDto; assets: SearchAssetResponseDto }
type PlacesResponseDto = {
  admin1name?: string | undefined
  admin2name?: string | undefined
  latitude: number
  longitude: number
  name: string
}
type RandomSearchDtoInput = {
  albumIds?: string[]
  city?: string | null
  country?: string | null
  createdAfter?: string
  createdBefore?: string
  filter?: SearchFilterInput
  isEncoded?: boolean
  isFavorite?: boolean
  isMotion?: boolean
  isNotInAlbum?: boolean
  isOffline?: boolean
  lensModel?: string | null
  libraryId?: string | null
  make?: string | null
  model?: string | null
  ocr?: string
  personIds?: string[]
  rating?: number | null
  size?: number
  state?: string | null
  tagIds?: string[] | null
  takenAfter?: string
  takenBefore?: string
  trashedAfter?: string
  trashedBefore?: string
  type?: AssetTypeEnumInput
  updatedAfter?: string
  updatedBefore?: string
  visibility?: AssetVisibilityInput
  withDeleted?: boolean
  withExif?: boolean
  withPeople?: boolean
  withStacked?: boolean
}
type SmartSearchDtoInput = {
  albumIds?: string[]
  city?: string | null
  country?: string | null
  createdAfter?: string
  createdBefore?: string
  filter?: SearchFilterInput
  isEncoded?: boolean
  isFavorite?: boolean
  isMotion?: boolean
  isNotInAlbum?: boolean
  isOffline?: boolean
  language?: string
  lensModel?: string | null
  libraryId?: string | null
  make?: string | null
  model?: string | null
  ocr?: string
  page?: number
  personIds?: string[]
  query?: string
  queryAssetId?: string
  rating?: number | null
  size?: number
  state?: string | null
  tagIds?: string[] | null
  takenAfter?: string
  takenBefore?: string
  trashedAfter?: string
  trashedBefore?: string
  type?: AssetTypeEnumInput
  updatedAfter?: string
  updatedBefore?: string
  visibility?: AssetVisibilityInput
  withDeleted?: boolean
  withExif?: boolean
}
type StatisticsSearchDtoInput = {
  albumIds?: string[]
  city?: string | null
  country?: string | null
  createdAfter?: string
  createdBefore?: string
  description?: string
  filter?: SearchFilterInput
  isEncoded?: boolean
  isFavorite?: boolean
  isMotion?: boolean
  isNotInAlbum?: boolean
  isOffline?: boolean
  lensModel?: string | null
  libraryId?: string | null
  make?: string | null
  model?: string | null
  ocr?: string
  personIds?: string[]
  rating?: number | null
  state?: string | null
  tagIds?: string[] | null
  takenAfter?: string
  takenBefore?: string
  trashedAfter?: string
  trashedBefore?: string
  type?: AssetTypeEnumInput
  updatedAfter?: string
  updatedBefore?: string
  visibility?: AssetVisibilityInput
}
type SearchStatisticsResponseDto = { total: number }
type SearchSuggestionTypeInput =
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
type LicenseKeyDtoInput = { activationKey: string; licenseKey: string }
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
type SessionCreateDtoInput = {
  deviceOS?: string | null
  deviceType?: string | null
  duration?: number
}
type SessionCreateResponseDto = {
  appVersion: string | null
  createdAt: string
  current: boolean
  deviceOS: string | null
  deviceType: string | null
  expiresAt?: string | undefined
  id: string
  isPendingSyncReset: boolean
  token: string
  updatedAt: string
}
type SessionUpdateDtoInput = { isPendingSyncReset?: boolean }
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
type SharedLinkTypeInput = 'ALBUM' | 'INDIVIDUAL'
type SharedLinkCreateDtoInput = {
  albumId?: string
  allowDownload?: boolean
  allowUpload?: boolean
  assetIds?: string[]
  description?: string | null
  expiresAt?: string | null
  password?: string | null
  showMetadata?: boolean
  slug?: string | null
  type: SharedLinkTypeInput
}
type SharedLinkLoginDtoInput = { password: string }
type SharedLinkEditDtoInput = {
  allowDownload?: boolean
  allowUpload?: boolean
  description?: string | null
  expiresAt?: string | null
  password?: string | null
  showMetadata?: boolean
  slug?: string | null
}
type AssetIdsDtoInput = { assetIds: string[] }
type AssetIdErrorReason = 'duplicate' | 'no_permission' | 'not_found'
type AssetIdsResponseDto = {
  assetId: string
  error?: AssetIdErrorReason | undefined
  success: boolean
}
type StackResponseDto = { assets: AssetResponseDto[]; id: string; primaryAssetId: string }
type StackCreateDtoInput = { assetIds: string[] }
type StackUpdateDtoInput = { primaryAssetId?: string }
type SyncEntityTypeInput =
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
  | 'SyncPendingResetV1'
type SyncAckDeleteDtoInput = { types?: SyncEntityTypeInput[] }
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
  | 'SyncPendingResetV1'
type SyncAckDto = { ack: string; type: SyncEntityType }
type SyncAckSetDtoInput = { acks: string[] }
type SyncRequestTypeInput =
  | 'AlbumsV2'
  | 'AlbumUsersV1'
  | 'AlbumToAssetsV1'
  | 'AlbumAssetsV2'
  | 'AlbumAssetExifsV1'
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
  | 'PartnerAssetsV2'
  | 'PartnerAssetExifsV1'
  | 'PartnerStacksV1'
  | 'StacksV1'
  | 'UsersV1'
  | 'PeopleV1'
  | 'AssetFacesV2'
  | 'AssetFacesV3'
  | 'UserMetadataV1'
  | 'PendingResetV1'
type SyncStreamDtoInput = { reset?: boolean; types: SyncRequestTypeInput[] }
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
type AdminOnboardingUpdateDtoInput = { isOnboarded: boolean }
type ReverseGeocodingStateResponseDto = {
  lastImportFileName: string | null
  lastUpdate: string | null
}
type TagCreateDtoInput = { color?: string | null; name: string; parentId?: string | null }
type TagUpsertDtoInput = { tags: string[] }
type TagBulkAssetsDtoInput = { assetIds: string[]; tagIds: string[] }
type TagBulkAssetsResponseDto = { count: number }
type TagUpdateDtoInput = { color?: string | null; name?: string }
type AssetOrderByInput = 'takenAt' | 'createdAt'
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
type UserUpdateMeDtoInput = {
  avatarColor?: UserAvatarColorInput | null
  email?: string
  name?: string | null
}
type OnboardingResponseDto = { isOnboarded: boolean }
type OnboardingDtoInput = { isOnboarded: boolean }
type CreateProfileImageDtoInput = { file: File }
type CreateProfileImageResponseDto = {
  profileChangedAt: string
  profileImagePath: string
  userId: string
}
type WorkflowStepDto = {
  config: { [key: string]: any } | null
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
type WorkflowStepDtoInput = {
  config: { [key: string]: any } | null
  enabled?: boolean
  method: string
}
type WorkflowCreateDtoInput = {
  description?: string | null
  enabled?: boolean
  logging?: boolean
  name?: string | null
  steps?: WorkflowStepDtoInput[]
  trigger: WorkflowTriggerInput
}
type WorkflowTriggerResponseDto = { trigger: WorkflowTrigger; types: WorkflowType[] }
type WorkflowUpdateDtoInput = {
  description?: string | null
  enabled?: boolean
  logging?: boolean
  name?: string | null
  steps?: WorkflowStepDtoInput[]
  trigger?: WorkflowTriggerInput
}
type WorkflowResultInput = 'completed' | 'halted' | 'error'
type WorkflowResult = 'completed' | 'halted' | 'error'
type WorkflowLogEntryDto = {
  at: string
  id: string
  lastStep?: { index: number; method: string } | undefined
  result: WorkflowResult
  triggerDataId?: string | undefined
}
type WorkflowShareStepDto = {
  config: { [key: string]: any } | null
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
            assetId?: string
            level?: ReactionLevelInput
            type?: ReactionTypeInput
            userId?: string
          }
        }
        output: ActivityResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ActivityCreateDtoInput }
        output: ActivityResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/activities/statistics': {
      $get: {
        input: { query: { albumId: string; assetId?: string } }
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
        input: { json: AdminConfigDtoInput }
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
        input: { json: StorageTemplatePreviewDtoInput }
        output: StorageTemplatePreviewResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/database-backups': {
      $delete: {
        input: { json: DatabaseBackupDeleteDtoInput }
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
        input: { form: DatabaseBackupUploadDtoInput }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/admin/database-backups/:filename': {
      $get: {
        input: { param: { filename: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/integrity/report': {
      $get: {
        input: { query: { cursor?: string; limit?: unknown; type: IntegrityReportInput } }
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
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/admin/integrity/report/:type/csv': {
      $get: {
        input: { param: { type: IntegrityReportInput } }
        output: {}
        outputFormat: string
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
        input: { json: SetMaintenanceModeDtoInput }
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
        input: { json: MaintenanceLoginDtoInput }
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
        input: { json: NotificationCreateDtoInput }
        output: NotificationDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/notifications/templates/:name': {
      $post: {
        input: { param: { name: string } } & { json: TemplateDtoInput }
        output: TemplateResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/notifications/templates/:name/preview': {
      $post: {
        input: { param: { name: EmailTemplateInput } } & { json: TemplateDtoInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/notifications/test-email': {
      $post: {
        input: { json: AdminConfigSmtpDtoInput }
        output: TestEmailResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users': {
      $get: {
        input: { query: { id?: string; withDeleted?: string } }
        output: UserAdminResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: UserAdminCreateDtoInput }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/users/:id': {
      $delete: {
        input: { param: { id: string } } & { json: UserAdminDeleteDtoInput }
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
        input: { param: { id: string } } & { json: UserAdminUpdateDtoInput }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users/:id/calendar-heatmap': {
      $get: {
        input: { param: { id: string } } & {
          query: { from?: string; to?: string; type?: CalendarHeatmapTypeInput }
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
        input: { param: { id: string } } & { json: UserPreferencesUpdateDtoInput }
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
          query: { isFavorite?: string; isTrashed?: string; visibility?: AssetVisibilityInput }
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
            assetId?: string
            id?: string
            isOwned?: string
            isShared?: string
            name?: string
          }
        }
        output: AlbumResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CreateAlbumDtoInput }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/albums/assets': {
      $put: {
        input: { json: AlbumsAddAssetsDtoInput }
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
        input: { param: { id: string } } & { query: { key?: string; slug?: string } }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & { json: UpdateAlbumDtoInput }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: BulkIdsDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BulkIdsDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/albums/:id/map-markers': {
      $get: {
        input: { param: { id: string } } & { query: { key?: string; slug?: string } }
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
        input: { param: { id: string; userId: string } } & { json: UpdateAlbumUserDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/albums/:id/users': {
      $put: {
        input: { param: { id: string } } & { json: AddUsersDtoInput }
        output: AlbumResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys': {
      $get: { input: {}; output: ApiKeyResponseDto[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: ApiKeyCreateDtoInput }
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
        input: { param: { id: string } } & { json: ApiKeyUpdateDtoInput }
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
            isEdited?: string
            isProgressive?: string
            isTransparent?: string
            type?: AssetFileTypeInput
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
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/assets': {
      $delete: {
        input: { json: AssetBulkDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $post:
        | {
            input: { query: { key?: string; slug?: string } } & {
              header: { 'x-immich-checksum'?: string }
            } & { form: AssetMediaCreateDtoInput }
            output: AssetMediaResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { key?: string; slug?: string } } & {
              header: { 'x-immich-checksum'?: string }
            } & { form: AssetMediaCreateDtoInput }
            output: AssetMediaResponseDto
            outputFormat: 'json'
            status: 201
          }
      $put: {
        input: { json: AssetBulkUpdateDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/assets/bulk-upload-check': {
      $post: {
        input: { json: AssetBulkUploadCheckDtoInput }
        output: AssetBulkUploadCheckResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/copy': {
      $put: { input: { json: AssetCopyDtoInput }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/assets/jobs': {
      $post: { input: { json: AssetJobsDtoInput }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/assets/metadata': {
      $delete: {
        input: { json: AssetMetadataBulkDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { json: AssetMetadataBulkUpsertDtoInput }
        output: AssetMetadataBulkResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/statistics': {
      $get: {
        input: {
          query: { isFavorite?: string; isTrashed?: string; visibility?: AssetVisibilityInput }
        }
        output: AssetStatsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assets/:id': {
      $get: {
        input: { param: { id: string } } & { query: { key?: string; slug?: string } }
        output: AssetResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: UpdateAssetDtoInput }
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
        input: { param: { id: string } } & { json: AssetEditsCreateDtoInput }
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
        input: { param: { id: string } } & { json: AssetMetadataUpsertDtoInput }
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
          query: { edited?: string; key?: string; slug?: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/assets/:id/thumbnail': {
      $get: {
        input: { param: { id: string } } & {
          query: { edited?: string; key?: string; size?: AssetMediaSizeInput; slug?: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/assets/:id/video/playback': {
      $get: {
        input: { param: { id: string } } & { query: { key?: string; slug?: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/assets/:id/video/stream/main.m3u8': {
      $get: {
        input: { param: { id: string } } & { query: { key?: string; slug?: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/assets/:id/video/stream/:sessionId': {
      $delete: {
        input: { param: { id: string; sessionId: string } } & {
          query: { key?: string; slug?: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/assets/:id/video/stream/:sessionId/:variantIndex/playlist.m3u8': {
      $get: {
        input: { param: { id: string; sessionId: string; variantIndex: unknown } } & {
          query: { key?: string; slug?: string }
        } & { header: { 'x-immich-hls-pos'?: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/assets/:id/video/stream/:sessionId/:variantIndex/:filename': {
      $get: {
        input: {
          param: { filename: string; id: string; sessionId: string; variantIndex: unknown }
        } & { query: { key?: string; slug?: string } } & {
          header: { 'x-immich-hls-msn'?: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/auth/admin-sign-up': {
      $post: {
        input: { json: SignUpDtoInput }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/auth/change-password': {
      $post: {
        input: { json: ChangePasswordDtoInput }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/code': {
      $post: {
        input: { json: AuthCodeCreateDtoInput }
        output: AuthCodeResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/auth/exchange': {
      $post: {
        input: { json: AuthCodeExchangeDtoInput }
        output: LoginResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/auth/login': {
      $post: {
        input: { json: LoginCredentialDtoInput }
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
      $delete: {
        input: { json: PinCodeResetDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { json: PinCodeSetupDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { json: PinCodeChangeDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/auth/session/lock': { $post: { input: {}; output: {}; outputFormat: string; status: 204 } }
  } & {
    '/auth/session/unlock': {
      $post: {
        input: { json: SessionUnlockDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
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
        input: { param: { id: string } } & { json: ClusterGroupRequestCreateDtoInput }
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
        input: { query: { key?: string; slug?: string } } & { json: DownloadArchiveDtoInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/download/info': {
      $post: {
        input: { query: { key?: string; slug?: string } } & { json: DownloadInfoDtoInput }
        output: DownloadResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/duplicates': {
      $delete: { input: { json: BulkIdsDtoInput }; output: {}; outputFormat: string; status: 204 }
      $get: { input: {}; output: DuplicateResponseDto[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/duplicates/resolve': {
      $post: {
        input: { json: DuplicateResolveDtoInput }
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
      $post: {
        input: { json: AssetFaceCreateDtoInput }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/faces/:id': {
      $delete: {
        input: { param: { id: string } } & { json: AssetFaceDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { id: string } } & { json: FaceDtoInput }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
      $get: { input: {}; output: QueuesResponseLegacyDto; outputFormat: 'json'; status: 200 }
      $post: { input: { json: JobCreateDtoInput }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/jobs/:name': {
      $put: {
        input: { param: { name: QueueNameInput } } & { json: QueueCommandDtoInput }
        output: QueueResponseLegacyDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/libraries': {
      $get: { input: {}; output: LibraryResponseDto[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateLibraryDtoInput }
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
        input: { param: { id: string } } & { json: UpdateLibraryDtoInput }
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
        input: { param: { id: string } } & { json: ValidateLibraryDtoInput }
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
            fileCreatedAfter?: string
            fileCreatedBefore?: string
            isArchived?: string
            isFavorite?: string
            withPartners?: string
            withSharedAlbums?: string
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
        input: { query: { lat: unknown; lon: unknown } }
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
            for?: string
            id?: string
            isSaved?: string
            isTrashed?: string
            isUpcoming?: string
            order?: MemorySearchOrderInput
            page?: unknown
            size?: unknown
            type?: MemoryTypeInput
          }
        }
        output: MemoryResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: MemoryCreateDtoInput }
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
            for?: string
            id?: string
            isSaved?: string
            isTrashed?: string
            isUpcoming?: string
            order?: MemorySearchOrderInput
            page?: unknown
            size?: unknown
            type?: MemoryTypeInput
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
        input: { param: { id: string } } & { json: MemoryUpdateDtoInput }
        output: MemoryResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/memories/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: BulkIdsDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BulkIdsDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/notifications': {
      $delete: {
        input: { json: NotificationDeleteAllDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          query: {
            id?: string
            level?: NotificationLevelInput
            type?: NotificationTypeInput
            unread?: string
          }
        }
        output: NotificationDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: NotificationUpdateAllDtoInput }
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
        input: { param: { id: string } } & { json: NotificationUpdateDtoInput }
        output: NotificationDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth/authorize': {
      $post: {
        input: { json: OAuthConfigDtoInput }
        output: OAuthAuthorizeResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/oauth/backchannel-logout': {
      $post: {
        input: { form: OAuthBackchannelLogoutDtoInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/oauth/callback': {
      $post: {
        input: { json: OAuthCallbackDtoInput }
        output: LoginResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/oauth/link': {
      $post: {
        input: { json: OAuthCallbackDtoInput }
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
        input: { query: { direction: PartnerDirectionInput } }
        output: PartnerResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: PartnerCreateDtoInput }
        output: PartnerResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/partners/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: string } } & { json: PartnerUpdateDtoInput }
        output: PartnerResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/passkeys': {
      $get: {
        input: { query: { id?: string } }
        output: PasskeyResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/passkeys/authentication/finish': {
      $post: {
        input: { json: PasskeyAuthenticationFinishDtoInput }
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
        input: { json: PasskeyRegistrationFinishDtoInput }
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
        input: { param: { id: string } } & { json: PasskeyUpdateDtoInput }
        output: PasskeyResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people': {
      $delete: {
        input: { json: PeopleDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: {
          query: {
            closestAssetId?: string
            closestPersonId?: string
            isFavorite?: string
            isHidden?: string
            name?: string
            page?: unknown
            sharedById?: string
            sharedWithId?: string
            size?: unknown
            withHidden?: string
          }
        }
        output: PeopleResponseDto
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: PersonCreateDtoInput }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: PeopleUpdateDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/merge': {
      $post: {
        input: { json: MergePersonDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/users': {
      $delete: {
        input: { json: PersonUsersDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          query: {
            direction?: SharingDirectionInput
            personId?: string
            role?: PersonUserRoleInput
            sharedById?: string
            sharedWithId?: string
          }
        }
        output: PersonUsersResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: PeopleUsersUpsertDtoInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/people/:id': {
      $delete: {
        input: { param: { id: string } } & { json: PersonDeleteDtoInput }
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
        input: { param: { id: string } } & { json: PersonUpdateDtoInput }
        output: PersonResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:id/merge': {
      $post: {
        input: { param: { id: string } } & { json: MergePersonDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:id/reassign': {
      $put: {
        input: { param: { id: string } } & { json: AssetFaceUpdateDtoInput }
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
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/plugins': {
      $get: {
        input: {
          query: {
            description?: string
            enabled?: string
            id?: string
            name?: string
            title?: string
            version?: string
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
            description?: string
            enabled?: string
            id?: string
            name?: string
            pluginName?: string
            pluginVersion?: string
            title?: string
            trigger?: WorkflowTriggerInput
            type?: WorkflowTypeInput
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
        input: { param: { name: QueueNameInput } }
        output: QueueResponseDto
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: QueueNameInput } } & { json: QueueUpdateDtoInput }
        output: QueueResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queues/:name/jobs': {
      $delete: {
        input: { param: { name: QueueNameInput } } & { json: QueueDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { name: QueueNameInput } } & { query: { status?: unknown } }
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
            albumIds?: unknown
            city?: string | null
            country?: string | null
            createdAfter?: string
            createdBefore?: string
            isEncoded?: string
            isFavorite?: string
            isMotion?: string
            isNotInAlbum?: string
            isOffline?: string
            lensModel?: string | null
            libraryId?: unknown
            make?: string | null
            minFileSize?: unknown
            model?: string | null
            ocr?: string
            personIds?: unknown
            rating?: unknown
            size?: unknown
            state?: string | null
            tagIds?: unknown
            takenAfter?: string
            takenBefore?: string
            trashedAfter?: string
            trashedBefore?: string
            type?: AssetTypeEnumInput
            updatedAfter?: string
            updatedBefore?: string
            visibility?: AssetVisibilityInput
            withDeleted?: string
            withExif?: string
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
        input: { query: { key?: string; slug?: string } } & { json: MetadataSearchDtoInput }
        output: SearchResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/person': {
      $get: {
        input: { query: { name: string; withHidden?: string } }
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
        input: { json: RandomSearchDtoInput }
        output: AssetResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/smart': {
      $post: {
        input: { json: SmartSearchDtoInput }
        output: SearchResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/search/statistics': {
      $post: {
        input: { json: StatisticsSearchDtoInput }
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
            country?: string
            includeNull?: string
            lensModel?: string
            make?: string
            model?: string
            state?: string
            type: SearchSuggestionTypeInput
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
        input: { json: LicenseKeyDtoInput }
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
        input: { json: SessionCreateDtoInput }
        output: SessionCreateResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sessions/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $put: {
        input: { param: { id: string } } & { json: SessionUpdateDtoInput }
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
        input: { query: { albumId?: string; id?: string } }
        output: SharedLinkResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SharedLinkCreateDtoInput }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/shared-links/login': {
      $post: {
        input: { query: { key?: string; slug?: string } } & { json: SharedLinkLoginDtoInput }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/shared-links/me': {
      $get: {
        input: { query: { key?: string; slug?: string } }
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
        input: { param: { id: string } } & { json: SharedLinkEditDtoInput }
        output: SharedLinkResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/shared-links/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: AssetIdsDtoInput }
        output: AssetIdsResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: AssetIdsDtoInput }
        output: AssetIdsResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stacks': {
      $delete: { input: { json: BulkIdsDtoInput }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { query: { primaryAssetId?: string } }
        output: StackResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: StackCreateDtoInput }
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
        input: { param: { id: string } } & { json: StackUpdateDtoInput }
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
      $delete: {
        input: { json: SyncAckDeleteDtoInput }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: { input: {}; output: SyncAckDto[]; outputFormat: 'json'; status: 200 }
      $post: { input: { json: SyncAckSetDtoInput }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/sync/stream': {
      $post: { input: { json: SyncStreamDtoInput }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/system-config': {
      $get: { input: {}; output: AdminConfigDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: AdminConfigDtoInput }
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
        input: { json: AdminOnboardingUpdateDtoInput }
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
        input: { json: TagCreateDtoInput }
        output: TagResponseDto
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: TagUpsertDtoInput }
        output: TagResponseDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/assets': {
      $put: {
        input: { json: TagBulkAssetsDtoInput }
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
        input: { param: { id: string } } & { json: TagUpdateDtoInput }
        output: TagResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:id/assets': {
      $delete: {
        input: { param: { id: string } } & { json: BulkIdsDtoInput }
        output: BulkIdResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: BulkIdsDtoInput }
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
            albumId?: string
            bbox?: string
            hasCoordinates?: string
            isFavorite?: string
            isTrashed?: string
            key?: string
            order?: AssetOrderInput
            orderBy?: AssetOrderByInput
            personId?: string
            slug?: string
            tagId?: string
            timeBucket: string
            userId?: string
            visibility?: AssetVisibilityInput
            withCoordinates?: string
            withPartners?: string
            withStacked?: string
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
            albumId?: string
            bbox?: string
            hasCoordinates?: string
            isFavorite?: string
            isTrashed?: string
            key?: string
            order?: AssetOrderInput
            orderBy?: AssetOrderByInput
            personId?: string
            slug?: string
            tagId?: string
            userId?: string
            visibility?: AssetVisibilityInput
            withCoordinates?: string
            withPartners?: string
            withStacked?: string
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
        input: { json: BulkIdsDtoInput }
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
        input: { json: UserUpdateMeDtoInput }
        output: UserAdminResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/calendar-heatmap': {
      $get: {
        input: { query: { from?: string; to?: string; type?: CalendarHeatmapTypeInput } }
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
        input: { json: LicenseKeyDtoInput }
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
        input: { json: OnboardingDtoInput }
        output: OnboardingResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/preferences': {
      $get: { input: {}; output: UserPreferencesResponseDto; outputFormat: 'json'; status: 200 }
      $put: {
        input: { json: UserPreferencesUpdateDtoInput }
        output: UserPreferencesResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/profile-image': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $post: {
        input: { form: CreateProfileImageDtoInput }
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
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
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
            description?: string
            enabled?: string
            id?: string
            logging?: string
            name?: string
            trigger?: WorkflowTriggerInput
          }
        }
        output: WorkflowResponseDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WorkflowCreateDtoInput }
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
        input: { param: { id: string } } & { json: WorkflowUpdateDtoInput }
        output: WorkflowResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workflows/:id/logs': {
      $get: {
        input: { param: { id: string } } & {
          query: { before?: string; limit?: unknown; result?: WorkflowResultInput }
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
